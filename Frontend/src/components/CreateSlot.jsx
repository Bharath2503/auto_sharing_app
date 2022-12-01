import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
import "../css/CreateSlot.css";
function Slot()
{
    return(

        <div className="FullPage">
      <Form className="Form" autoComplete='off'>
        <h4 className="Title">Create New Slot</h4>
        <div className="Page-Content">
        <Form.Group className="mb-1"  controlId="formBasicText">
         <Form.Control type="text" placeholder="Slot Time" className="form-control"/>
       </Form.Group>
       <Form.Group className="mb-4" controlId="formBasicEmail">
         <Form.Control type="email" placeholder="Email" className="form-control" />
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