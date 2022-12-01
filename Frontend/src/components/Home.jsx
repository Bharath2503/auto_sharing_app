import "../css/Home.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Home()
{
    return(
        
        <div className="card mx-auto" style={{width:"60%",backgroundColor:"#058240"}}>
        <div className="card-body">
          <h4 className="card-title" style={{textAlign:"center",color:"white",paddingBottom:"5%",paddingTop:"3%"}}>Login</h4>
          <Form>
      <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" className="form-control" />
      </Form.Group>
      <Form.Group className="mb-3 form-group"  controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" className="form-control"/>
      </Form.Group>
     <center>
     <Button variant="light" type="submit" className="form-button" >
        Login
      </Button>
     </center>
    </Form>
          
         
        </div>
      </div>
    )
}
export default Home;