import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cineweblogo from '../assets/cineweblogo.webp'
import {Link} from "react-router-dom";

function NavBarCine() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={cineweblogo} alt="CineWeb Logo" style={{width: '40px', height: '30'}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav><Link to={"/"}>Home</Link></Nav>
                        <Nav><Link to={"/film"}>Film</Link></Nav>
                        <Nav><Link to={"/serietv"}>Serie TV</Link></Nav>
                        <Nav><Link to={"/about"}>About</Link></Nav>

                        <Nav>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarCine;