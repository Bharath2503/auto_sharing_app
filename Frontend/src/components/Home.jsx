import "../css/home.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {allslots} from '../api/axios'
import { useState, useEffect } from 'react'
import moment from 'moment'

function SlotBooking() {
  const [slots,setslots] = useState();
  const [wait,setwait] = useState(false);
  const [isdata,setisdata] = useState(false);
  const apicall = async ()=>{
    const data=await allslots()
    console.log(data)
    setslots(data)
    setisdata(true)
  }

  useEffect( ()=>{
    apicall();
  },[isdata]);

  useEffect(()=>{
    if(isdata){
      setwait(true)
    }
  },[isdata])

  return (
    <>
      <div className="container">
        <div className="SlotBook-page">
          <h4 className="slottitle">Slot Timings</h4>

          {wait && slots.map(ele=>(
            <div className="slottime" key={ele._id}>
            <div className="slottime-content">
              <Row>
                <Col className="timestyle">Slot:{moment(ele.time).format('hh:mm a')}</Col>
                <Col><h6 className="Slot-member">({ele.members.length}/{ele.capacity})</h6></Col>
              </Row>
              <Row>
                <Col>
                  <p className="createdby">Created by:{ele.email}</p>
                </Col>
                <Col><Link to={{path:`/SlotDetails/${ele._id}`}} ><Button className="Slot-Button" variant="dark" type="button">View</Button></Link></Col>
              </Row>
            </div>
          </div>
          ))}
     
        </div>
        <div className="plus-btn">
          <Link to="/book"> <Button variant="light" type="button" className="btn btn-default btn-circle btn-lg">+</Button></Link>
        </div>
      </div>

    </>
  )
}

export default SlotBooking; 