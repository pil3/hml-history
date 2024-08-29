import * as React from "react"
import { Link } from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css";
import {StaticImage} from "gatsby-plugin-image";
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { headerStyle, logoStyle } from "../styles/components/header.module.css";
const Header = () => {
  return (
    <header className={ headerStyle }>
        <Navbar expand="lg">
          <Container fluid="xl">
            <Navbar.Brand href="/" id="headerLogo" title="Logo"><StaticImage className={logoStyle} alt="Vaakuna" src="../images/hml-vaakuna.png" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="hamburger" />
            <Navbar.Collapse id="hamburger">
              <Nav variant="underline" className="mx-auto">
                <Nav.Item>
                  <Link to="/" className="nav-link" activeClassName="active">Etusivu</Link> 
                </Nav.Item>
                <Nav.Item>
                  <Link to="/aikajana" className="nav-link" activeClassName="active">Aikajana</Link> 
                </Nav.Item>
                <Dropdown as={Nav.Item} >
                  <Dropdown.Toggle as={Nav.Link}>Kokonaisuuksia</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to="/aulanko" className="nav-link" activeClassName="active">Aulanko</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/matkailuopas-1915" className="nav-link" activeClassName="active">Matkailuopas 1915</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/matkailuopas-1927" className="nav-link" activeClassName="active">Matkailuopas 1927</Link> 
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={Nav.Item} >
                  <Dropdown.Toggle as={Nav.Link}>Yksityiskohtia</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to="/kartta1778" className="nav-link" activeClassName="active">Kartta 1778</Link> 
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown as={Nav.Item} >
                  <Dropdown.Toggle as={Nav.Link}>Ilmoituksia</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to="/ilmoituksia-1915" className="nav-link" activeClassName="active">1915</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/ilmoituksia-1927" className="nav-link" activeClassName="active">1927</Link> 
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
}
export default Header