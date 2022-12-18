import Button from 'react-bootstrap/Button';
import "../css/slotdetails.css";
import { Link, redirect, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { viewslot, joinslot ,deleteslot, leave} from '../api/axios'
import 'font-awesome/css/font-awesome.min.css'
import { useNavigate } from 'react-router-dom'

function SlotDetails() {

  const { id } = useParams()
  const [slot, setslot] = useState()
  const [user, setuser] = useState()
  const [wait, setwait] = useState(false);
  const [isdata, setisdata] = useState(false);
  const [ismember, setismember] = useState(false);
  const navigate = useNavigate();
  const apicall = async () => {
    const data = await viewslot(id)
    const userdata = JSON.parse(await localStorage.getItem('user'))
    console.log(data)
    console.log(userdata.email)
    setuser(userdata)
    setslot(data)
    data.members.map(ele => {
      ele.email == userdata.email ? setismember(true) : <> </>
    })
    setisdata(true)
  }

  useEffect(() => {
    apicall();
  }, [isdata]);

  useEffect(() => {
    if (isdata) {
      setwait(true)
    }
  }, [isdata])


  const book = async () => {
    const result = await joinslot(id, { member: user._id })
    if (result) apicall()
    else alert('something went worng')
  }
  const deleteslots=async ()=>{
    const result = await deleteslot(id)
    if (result) navigate('/')
    else alert('something went worng')
  }
  const leaveslot=async ()=>{
    const result = await leave(id,  { member: user._id })
    if (result) navigate('/')
    else alert('something went worng')

  }
  return (
    <div className='SlotDetailsPage'>
      <div className='SlotPage-Box'>
        <h4 className="SlotDetails-Title">Slot details</h4>
        {wait && <>
          <h5 className="SlotDetails-owner">Created by:{slot.email}</h5>
          <br></br>
          <div className="SlotMembers">
            <h6 className="SlotMembers-Title">Slot Members</h6>
            {slot.members.map(ele => (

              <div className='Members-Email'>
                <p className='Slotdetails-List'><i className="fa fa-user" style={{ fontSize: 17 }}>&ensp;</i>{ele.email}</p>
              </div>
            ))}

          </div>

          <h5 className='SlotMembers-Number'>({slot.members.length}/{slot.capacity})</h5>
          {ismember ? 
          slot.email==user.email?
            <>
              <Button type="submit" variant='danger' onClick={leaveslot} className='SlotLeaveButton'>Leave</Button>
              <Button type="submit" variant='danger' onClick={deleteslots} className='SlotLeaveButton'>Delete</Button>
            </>:
            <Button type="submit" variant='danger' onClick={leaveslot} className='SlotLeaveButton'>Leave</Button>

            :<Button type="submit" variant='dark' onClick={book} className='SlotLeaveButton'>Book</Button>
          } </>

        }


      </div>
    </div>
  )
}

export default SlotDetails;