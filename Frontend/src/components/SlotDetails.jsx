import Button from 'react-bootstrap/Button';
import "../css/slotdetails.css";
import { Link } from 'react-router-dom';
// import 'font-awesome/css/font-awesome.min.css'; 
function SlotDetails() {
    return (
        <div className='SlotDetailsPage'>
            <div className='SlotPage-Box'>
            <h4 className="SlotDetails-Title">Slot details</h4>
            <h5 className="SlotDetails-owner">Created by:</h5>
            <br></br>
            <div className="SlotMembers">
                <h6 className="SlotMembers-Title">Slot Members</h6>
                <div className='Members-Email'>
                <p className='Slotdetails-List'><i className="fa fa-user" style={{fontSize:17}}>&ensp;</i>aathav20it@</p>
                </div>
            </div>
            <h5 className='SlotMembers-Number'>( /4)</h5>
          <Link to="/SlotBook"><Button type="submit" variant='danger' className='SlotLeaveButton'>Leave</Button></Link>  
            
            </div>
        </div>
    )
}

export default SlotDetails;