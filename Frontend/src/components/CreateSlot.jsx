import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
import "../css/CreateSlot.css";
function Slot()
{
    return(
        <div>
            <div className="card mx-auto" style={{width:"60%",backgroundColor:"#058240"}}>
        <div className="card-body">
          <h4 className="card-title" style={{textAlign:"center",color:"white",paddingBottom:"5%",paddingTop:"3%"}}>Create New Slot</h4>
          <Form>
          <Form.Group className="mb-3 form-group"  controlId="formBasicText">
        <Form.Control type="text" placeholder="Slot Time" className="form-control"/>
      </Form.Group>
      <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" className="form-control" />
      </Form.Group>
      <div className='button-margin'>
      <Link to="/SlotBook"><Button type="submit" className="back-button">back</Button></Link>
      <Link to="/SlotDetails"><Button type="submit" className="create-button">create</Button></Link>
      </div>
    </Form>
          
         
        </div>
      </div>
        </div>
    )
}
export default Slot;