import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
import "../css/navbar.css"
import Image from "../assets/images/auto_clr.png";

function Header() {
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand>
                       <img src={Image} alt="auto" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="link hover-underline-animation" to="/home">Home</Link>
                            <Link className="link hover-underline-animation" to="/slot">CreateSlot</Link>
                            <Link className="link hover-underline-animation" to="/about">About</Link>
                        </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}
export default Header;