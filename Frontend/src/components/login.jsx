import "../css/login.css";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import {login} from '../api/axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const navigate = useNavigate();

  const handle_emailchange = (e) => {
    var pattern = /[a-zA-Z]+\.[A-Za-z0-9]+@kongu\.edu/
    if (pattern.test(e.target.value)) {
        setemail(e.target.value)
        console.log('success')
    }
    else {
        console.log('Not match')
    }
}
const handle_password = (e) => {
    if (e.target.value.length >= 6) {
        setpassword(e.target.value)
    }
}
const handlesubmit = async (e) => {
  e.preventDefault();
  if ( email !== '' && password !== '') {
      const user = {        
          email: email,
          password: password
      }
      console.log(user)
      const result = await login(user)
      if (result) {
          navigate("/")
      }

  }
  else {
      alert('Please check the values again!')
  }
}
  return (

    <div className="FullPage">
      <Form className="Form" autoComplete="off">
        <h4 className="Title">Login</h4>
        <div className="Page-Content">
          <Form.Group className="mb-1" >
            <Form.Control required className="form-control"
              type="email"
              name="email"
              pattern="[a-zA-Z]+\.[A-Za-z0-9]+@kongu\.edu"
              onChange={handle_emailchange}
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control className="form-control"
              name="password"
              type="password" required
              minlength="6"
              onChange={handle_password}
              placeholder="Password"
            />
          </Form.Group>
          <div className="d-grid mt-3">
            <Button className="Login-Button" onClick={handlesubmit} type="Submit">
              Login
            </Button>
          </div>
          <h5 style={{paddingLeft:"47%"}}>or</h5>
           <Link to="/signup"><Button className="SignUp-Button">SignUp</Button></Link>
         
          
        </div>
      </Form>
       
    </div>
  )
}
export default Login;