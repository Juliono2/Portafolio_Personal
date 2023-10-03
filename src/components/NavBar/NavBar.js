import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

function NavBar() {
  return (
    <nav class="navbar">
        <div class="brand">
          <h2>Page J<span>S</span></h2>
        </div>
        <ul class="menu">
          <li><a href="#"  class="active">Inicio</a></li>
          <li><a href="#">Sobre mí</a></li>
          <li><a href="#">Portafolio</a></li>
          <li><a href="#">Certificaciones</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
    </nav>
    /*
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src= {""} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className="navbar.toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutme">Sobre Mi</Nav.Link>
            <Nav.Link href="#portafolio">Portafolio</Nav.Link>
            <Nav.Link href="#skills">Cursos/Certificados</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <span className="navbar">
            <div className="menu">
                <a href="#"><img src={""} alt="Icono" /></a>    
                <a href="#"><img src={""} alt="Icono" /></a>
                <a href="#"><img src={""} alt="Icono" /></a>
            </div>
            <button className="vvd" onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    */
  );
}

export default NavBar;