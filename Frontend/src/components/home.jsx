import "../css/home.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { allslots } from '../api/axios'
import { useState, useEffect } from 'react'
import decode from 'jwt-decode'
import moment from 'moment'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function SlotBooking() {
  const [slots, setslots] = useState();
  const [wait, setwait] = useState(false);
  const [isdata, setisdata] = useState(false);
  const navigate = useNavigate();

  // tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Create New Slot
    </Tooltip>
  );

  useEffect(() => {
    const result = localStorage.getItem("usertoken")
    console.log(result)
    const token = result;
    if (token) {
      const decodedToken = decode(token)
      if (!(decodedToken.exp * 1000 > new Date().getTime())) {
        navigate('/login')
      }
    }
    else {
      console.log("token not found")
      navigate('/login')
    }
  }, [])
  const apicall = async () => {
    const user = await JSON.parse(localStorage.getItem('user'))
    const data = await allslots(user.gender)
    console.log(data)
    setslots(data)
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

  return (
    <>
      <div className="container">
        <div className="SlotBook-page">
          <h4 className="slottitle">Slot Timings</h4>
          <p style={{ textAlign: 'center', color: 'white' }}>Scroll Down To See Full Slot Timings</p>

          {wait && slots.map(ele => (
            <div className="slottime" key={ele._id}>
              <div className="slottime-content">
                <Row>
                  <Col className="timestyle">Slot:{moment(ele.time).format('hh:mm a')}</Col>
                  <Col>
                    {ele.members.length == ele.capacity ?
                      <h6 className="Slot-member" style={{ color: 'red' }}>({ele.members.length}/{ele.capacity})</h6>
                      :
                      <h6 className="Slot-member" style={{ color: 'black' }}>({ele.members.length}/{ele.capacity})</h6>
                    }
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="createdby">Created by:{ele.email}</p>
                  </Col>
                  <Col>
                    <Link to={{ pathname: `/slotdetails/${ele._id}` }}>
                      <Button className="Slot-Button" variant="dark" type="button">View</Button>
                    </Link>
                  </Col>
                </Row>
                {ele.destination == 'p-k' ?
                  <p className="place">{moment(ele.time).format('D/M/YYYY')}  |  Perundurai  &#8594;  KEC</p>
                  :
                  <p className="place">{moment(ele.time).format('D/M/YYYY')}  |  KEC &#8594; Perundurai</p>
                }
              </div>


            </div>
          ))}
        </div>
        <div className="plus-btn">
          <Link to="/book">
            <OverlayTrigger
              placement="top"
              delay={{ show: 0, hide: 100 }}
              overlay={renderTooltip}>
              <Button variant="light" type="button" className="btn btn-default btn-circle btn-lg">+</Button>
            </OverlayTrigger>
          </Link>

        </div>


      </div>
    </>
  );
}

export default SlotBooking;         
