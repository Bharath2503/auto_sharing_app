import React from 'react'

import "../css/login.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signup } from "../api/axios";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [category, setcategory] = useState('');
    const [rollno, setrollno] = useState('');
    const [phone, setphone] = useState();
    const [gender, setgender] = useState('');
    const [password, setpassword] = useState('');
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
        if (name !== '' && email !== '' && category !== '' && rollno !== '' && gender !== '' && password !== '') {
            const user = {
                name: name,
                email: email,
                rollno: rollno,
                category: category,
                phone: phone,
                gender: gender,
                password: password
            }
            console.log(user)
            const result = await signup(user)
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
            <div className="container signup_greenframe">
                <Form onSubmit={handlesubmit} autoComplete="off">
                    <h4 className="Title">Signup</h4>
                    <div className="Page-Content">
                        <Form.Group className="mb-1" >
                            <Form.Control required className="form-control"
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={(e) => setname(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-1" >
                            <Form.Control required className="form-control"
                                type="email"
                                name="email"
                                pattern="[a-zA-Z]+\.[A-Za-z0-9]+@kongu\.edu"
                                onChange={handle_emailchange}
                                placeholder="Email"
                            />
                        </Form.Group>
                        <Form.Select className="mb-1 form-control" aria-label="Default select example" onChange={(e) => setcategory(e.target.value)} name="catagory">
                            <option selected disabled value='-'>Select Catogory</option>
                            <option value="student">Student</option>
                            <option value="faculty">Faculty</option>
                        </Form.Select>
                        <Form.Group className="mb-1" >
                            <Form.Control required className="form-control"
                                name="rollno"
                                type="text"
                                onChange={(e) => setrollno(e.target.value)}
                                placeholder="Roll Number(if applicable)"
                            />
                        </Form.Group>
                        <Form.Group className="mb-1" >
                            <Form.Control required className="form-control"
                                name="phone"
                                type="number"
                                onChange={(e) => setphone(e.target.value)}
                                placeholder="Mobile Number"
                            />
                        </Form.Group>
                        <Form.Select className="mb-1 form-control" onChange={(e) => setgender(e.target.value)} aria-label="Default select example" name="gender">
                            <option selected disabled value='-'>Select Gender</option>
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </Form.Select>
                        <Form.Group className="mb-4">
                            <Form.Control className="form-control"
                                name="password"
                                type="password" required
                                minLength="6"
                                onChange={handle_password}
                                placeholder="Password"
                            />
                        </Form.Group>
                        <div className="d-grid mt-3">
                            <Button className="Login-Button" type="Submit">
                                Submit
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>


        </div>
    )
}
export default Signup;