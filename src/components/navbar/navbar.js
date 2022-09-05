import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';
import { CartWidget } from './CartWidget';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className='container-navBar'>
      <Container className='container-NavBar'>
        <Navbar.Brand href="#home"><img src='./assets/logo2.png'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/productos/chocolate"}>chocolate</Nav.Link>
            <Nav.Link as={Link} to={"/productos/vainilla"}>Vainilla</Nav.Link>
            <Nav.Link as={Link} to={"/productos/fruta"}>Fruta</Nav.Link>
            {/*<NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">chocolate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                vainilla
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">fruta</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </NavDropdown>*/}
          </Nav>
          {/*<Nav>
          <Nav.Link eventKey={2} href="#memes">

              
            </Nav.Link></Navbar.Collapse>
             
            </Nav>*/}
          <CartWidget/> 
        </Navbar.Collapse>
         
      </Container>
    </Navbar>
  );
}

export default NavBar;