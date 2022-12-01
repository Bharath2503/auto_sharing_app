import "../css/Home.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Home()
{
    return(
        
      <div className="FullPage">
      <Form className="Form" autoComplete="off">
        <h4 className="Title">Login</h4>
        <div className="Page-Content">
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Control required className="form-control"
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control className="form-control"
              type="password" required
              placeholder="Password"
            />
          </Form.Group>
          <div className="d-grid mt-3">
            <Button className="Login-Button" type="Submit">
              Login
            </Button>
          </div>
        </div>
      </Form>
 
    </div>
    )
}
export default Home;