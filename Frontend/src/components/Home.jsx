import "../css/Home.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Home()
{
    return(
        
      <div className="Auth-form-container">
      <Form className="Auth-form">
        <h3 className="Auth-form-title">Login</h3>
        <div className="Auth-form-content">
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Control required className="space"
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control className="space"
              type="password" required
              placeholder="Password"
            />
          </Form.Group>
          <div className="d-grid mt-3">
            <Button className="login" type="Submit">
              Login
            </Button>
          </div>
        </div>
      </Form>
 
    </div>
    )
}
export default Home;