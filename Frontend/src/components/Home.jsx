import "../css/home.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function SlotBooking() {
    return (
        <>
        <div className="container">
        <div className="SlotBook-page">
            <h4 className="slottitle">Slot Timings</h4>
            <div className="slottime">
                <div className="slottime-content">
                    <Row>
                        <Col className="timestyle">Slot:12:30 PM</Col>
                        <Col><h6 className="Slot-member">(1/4)</h6></Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="createdby">Created by:aathavan@it</p>
                        </Col>
                        <Col><Link to="/SlotDetails"><Button className="Slot-Button" variant="dark" type="button">View</Button></Link></Col>
                    </Row>
                </div>
            </div>
            <div className="slottime">
                <div className="slottime-content">
                    <Row>
                        <Col className="timestyle">Slot:12:30 PM</Col>
                        <Col><h6 className="Slot-member">(1/4)</h6></Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="createdby">Created by:aathavan@it</p>
                        </Col>
                        <Col><Link to="/SlotDetails"><Button className="Slot-Button" variant="dark" type="button">View</Button></Link></Col>
                    </Row>
                </div>
            </div>
            <div className="slottime">
                <div className="slottime-content">
                    <Row>
                        <Col className="timestyle">Slot:12:30 PM</Col>
                        <Col><h6 className="Slot-member">(1/4)</h6></Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="createdby">Created by:aathavan@it</p>
                        </Col>
                        <Col><Link to="/SlotDetails"><Button className="Slot-Button" variant="dark" type="button">View</Button></Link></Col>
                    </Row>
                </div>
            </div>
            <div className="slottime">
                <div className="slottime-content">
                    <Row>
                        <Col className="timestyle">Slot:12:30 PM</Col>
                        <Col><h6 className="Slot-member">(1/4)</h6></Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="createdby">Created by:aathavan@it</p>
                        </Col>
                        <Col><Link to="/SlotDetails"><Button className="Slot-Button" variant="dark" type="button">View</Button></Link></Col>
                    </Row>
                </div>
            </div>

           
        </div>
        <div className="plus-btn">
           <Link to="/book"> <Button  variant="light" type="button" className="btn btn-default btn-circle btn-lg">+</Button></Link>
            </div>
            </div>
            
        </>
    )
}

export default SlotBooking;