import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import moment from "moment"
import "../css/createslot.css";
import { useEffect, useState } from 'react'
import { newslot } from '../api/axios'
import { useNavigate } from 'react-router-dom'

function Slot() {
  const [datetime, settime] = useState();
  const [capacity, setcapacity] = useState();
  const [useremail, setuseremail] = useState();
  const [usergender, setusergender] = useState();
  const [userid, setuserid] = useState();
  const navigate = useNavigate();
  const apicall = async () => {
    const user = await JSON.parse(localStorage.getItem('user'))
    setuserid(user._id)
    setusergender(user.gender)
    setuseremail(user.email)
  }
  useEffect(() => {
    apicall()

  }, [])
  const createslot = async (e) => {
    e.preventDefault();
    const data = {
      time: datetime,
      capacity: capacity,
      email: useremail,
      member: userid,
      gender:usergender
    }
    console.log(data)
    const result = await newslot(data)
    console.log(result)
    if (result) { navigate('/') }
    else { alert('Someting Went Wrong') }
  }
  const capcitychange = async (e) => {
    e.target.value <= 4 ? setcapacity(e.target.value) : setcapacity()
  }
  return (


    <div className="FullPage">
      <Form className="Form" autoComplete='off'>
        <h4 className="Title">Create New Slot</h4>
        <div className="Page-Content">
          <Form.Group className="mb-1" controlId="formBasicText">
            <Form.Control
              required
              type="datetime-local"
              placeholder="Slot Time"
              className="form-control"
              min={moment().format('YYYY-MM-DThh:mm')}
              max={moment().add('1', 'days').format('YYYY-MM-DThh:mm')}
              onChange={(e) => settime(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="number" max="4" min="1" placeholder="Max member(limit:4)" required className="form-control" onChange={capcitychange} />
          </Form.Group>
          <div className='button-margin'>
            <Link to="/"><Button type="submit" className="back-button">Back</Button></Link>
            <Button type="submit" className="create-button" onClick={createslot}>Create</Button>
          </div>
        </div>
      </Form>

    </div>
  )
}
export default Slot;