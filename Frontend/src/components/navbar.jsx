import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link, useNavigate } from "react-router-dom";
import "../css/navbar.css"
import Image from "../assets/images/auto_clr.png";
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Header() {
    // const fullName = document.getElementById('fullName').textContent;
    // const intials = fullName.split(' ').map(name => name[0]).join('').toUpperCase();
    // document.getElementById('profileImage').innerHTML = intials;
    const [firstletter,setfirstletter] = useState('');
    const navigate=useNavigate();
    const getlocal = async ()=>{
        const initial =  await JSON.parse( localStorage.getItem('user'));
        setfirstletter(initial.name)
    }

    useEffect(()=>{
        getlocal()
    },[])

    const logout=async()=>{
        localStorage.clear();
       navigate('/login')
    }
    return (
        <>
            <Navbar expand="sm">
                <Container>
                    <Navbar.Brand>
                        <img src={Image} alt="auto" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="link hover-underline-animation" to="/">Home</Link>
                            <Link className="link hover-underline-animation" to="/about">About</Link>
                            
                        </Nav>
                    <div id="profileImage" className='profileimage' title='Logout' onClick={logout}>
                    <span id="fullName">{firstletter[0]}</span></div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}
export default Header;