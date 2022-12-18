import Auto from '../assets/images/AUTO_ROCKET.gif';
import '../css/about.css';
function About() {
    return (
        
            <div className="aboutpage container">
                <div className="aboutimg">
                    <img src={Auto} alt="Auto" className='aboutimage' />
                </div>
                <div className="aboutapp ">
                    <h4 className="aboutttitle">About The Application</h4>
                    <p className="aboutpara">
                        It is an Auto Ride Sharing Application.Which enables students and staffs of KEC to easily access auto @ reasonable cost.
                        The user can create a new slot or book a  slot in already created one and share their ride @ the same time cut off the cost to some extend.
                    </p>
                </div>
            </div>
        
    )
}
export default About;
