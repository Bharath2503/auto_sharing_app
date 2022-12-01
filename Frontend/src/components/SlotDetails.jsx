import { Link } from "react-router-dom";
import "../css/SlotDetails.css";
function SlotDetails() {
    return (
        <div className='SlotDetailsPage'>
            <div className='SlotPage-Box'>
            <h4 className="SlotDetails-Title">Slot details</h4>
            <h6 className="SlotDetails-owner"><b>Created by:</b></h6>
            <div className="SlotMembers">
                <h5 className="SlotMembers-Title">Slot Members</h5>
            </div>
            </div>
        </div>
    )
}

export default SlotDetails;