import Button from 'react-bootstrap/Button';
import "../css/SlotDetails.css";
import { Link } from 'react-router-dom';
function SlotDetails() {
    return (
        <div className='SlotDetailsPage'>
            <div className='SlotPage-Box'>
            <h4 className="SlotDetails-Title">Slot details</h4>
            <h6 className="SlotDetails-owner"><b>Created by:</b></h6>
            <div className="SlotMembers">
                <h5 className="SlotMembers-Title">Slot Members</h5>
                <div className='Members-Email'>
                <ul>
                    <li></li>
                </ul>
            </div>
            </div>
            <h5 className='SlotMembers-Number'>( /4)</h5>
          <Link to="/SlotBook"><Button type="submit" variant='danger' className='SlotLeaveButton'>Leave</Button></Link>  
            
            </div>
        </div>
    )
}

export default SlotDetails;