import Button from 'react-bootstrap/Button';
import "../css/slotdetails.css";
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect} from 'react'
import {viewslot} from '../api/axios'

function SlotDetails() {
    const { id } = useParams()
    const [slot,setslot] =useState()
    const [wait,setwait] = useState(false);
    const [isdata,setisdata] = useState(false);
    const apicall = async ()=>{
        const data=await viewslot(id)
        console.log(data)
        setslot(data)
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