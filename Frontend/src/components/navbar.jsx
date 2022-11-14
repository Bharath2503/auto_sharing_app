import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
import "../css/navbar.css"

function Header() {
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand>logo</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link className="link hover-underline-animation" to="/home">Home</Link>
                            <Link className="link hover-underline-animation" to="/slot">CreateSlot</Link>
                            <Link className="link hover-underline-animation" to="/about">About</Link>
                        </Nav>
                </Container>
            </Navbar>
            <Outlet />
            <div className="mobile-menu">
                <Link className="link hover-underline-animation" to="/home">Home</Link>
                <Link className="link hover-underline-animation" to="/slot">CreateSlot</Link>
                <Link className="link hover-underline-animation" to="/about">About</Link>
            </div>
            
        </>
    )
}
export default Header;