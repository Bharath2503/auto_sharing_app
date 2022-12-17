import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import moment from "moment"
import "../css/CreateSlot.css";
import { useState } from 'react'


function Slot() {
  const [datetime, settime] = useState();
  return (

    <div className="FullPage">
      <Form className="Form" autoComplete='off'>
        <h4 className="Title">Create New Slot</h4>
        <div className="Page-Content">
          <Form.Group className="mb-1" controlId="formBasicText">
            <Form.Control
              type="datetime-local"
              placeholder="Slot Time"
              className="form-control"
              min={moment().format('YYYY-MM-DThh:mm')}
              max={moment().add('1', 'days').format('YYYY-MM-DThh:mm')}
              onChange={(e) => settime(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="number" max="4" min="0"  placeholder="Max member(limit:4)" className="form-control"  />
          </Form.Group>
          <div className='button-margin'>
            <Link to="/SlotBook"><Button type="submit" className="back-button">Back</Button></Link>
            <Link to="/SlotDetails"><Button type="submit" className="create-button">Create</Button></Link>
          </div>
        </div>
      </Form>

    </div>
  )
}
export default Slot;