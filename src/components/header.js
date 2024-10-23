import * as React from "react"
import { Link } from 'gatsby'

import "bootstrap/dist/css/bootstrap.min.css";
// import "react-bootstrap-submenu/dist/index.css"

import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";

import {navBarStyle, logoStyle} from "../styles/components/header.module.css";

import vaakuna from "../images/hml-vaakuna-old.png" 

const Header = () => {
  return (
    <Navbar expand="md" data-bs-theme="light" className={navBarStyle}>
      <Container fluid="xl">
        <Navbar.Brand href="/" id="headerLogo" title="Logo"><Image placeholder={"blurred"} className={logoStyle} alt="Vaakuna" src={vaakuna} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="underline" className="mx-auto">

            <Nav.Item>
              <Link to="/" className="nav-link" activeClassName="active">Etusivu</Link> 
            </Nav.Item>

            <NavDropdown title="Tekstejä" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/kouluista-1879" className="nav-link" activeClassName="active">Vanhoista kouluista</Link> 
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/olosuhteet-1808" className="nav-link" activeClassName="active">Olosuhteet sotavuosina 1808-1809</Link> 
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/asuminen" className="nav-link" activeClassName="active">Asunto-olosuhteet vuonna 1908</Link> 
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/kuritushuone" className="nav-link" activeClassName="active">Kuritushuoneen järjestyssäännöt - 1877</Link> 
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/matkailuopas-1915" className="nav-link" activeClassName="active">Matkailuopas - 1915</Link> 
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/matkailuopas-1927" className="nav-link" activeClassName="active">Matkailuopas - 1927</Link> 
                
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdownMenu title="Lehdistä" id="collasible-nav-dropdown">
              <DropdownSubmenu title="1924">
                <NavDropdown.Item>
                  <Link to="/lukijoilta1924" className="nav-link" activeClassName="active">Yleisönosasto</Link> 
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/ilmoituksia-1924" className="nav-link" activeClassName="active">Ilmoituksia</Link> 
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/hasa1924" className="nav-link" activeClassName="active">Artikkeleita 15.10</Link> 
                </NavDropdown.Item>
              </DropdownSubmenu>
              <NavDropdown.Item>
                <Link to="/sanomalehti" className="nav-link" activeClassName="active">Sanomalehtiä</Link> 
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/mainoksia" className="nav-link" activeClassName="active">Mainoksia</Link> 
              </NavDropdown.Item>
            </NavDropdownMenu >

            <NavDropdown title="Kuvia" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                  <Link to="/people" className="nav-link" activeClassName="active">Ihmisiä</Link> 
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/aulanko" className="nav-link" activeClassName="active">Aulanko</Link> 
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/kartta1778" className="nav-link" activeClassName="active">Kartta 1778</Link> 
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/kartta1892" className="nav-link" activeClassName="active">Kartta 1892</Link> 
                </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Luetteloita" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/osoitteita-1887" className="nav-link" activeClassName="active">Osoitteita - 1887</Link> 
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/osoitteita-1915" className="nav-link" activeClassName="active">Osoitteita - 1915</Link> 
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/osoitteita-1923" className="nav-link" activeClassName="active">Osoitteita - 1923</Link> 
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/osoitteita-1931" className="nav-link" activeClassName="active">Osoitteita - 1931</Link> 
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/puhelinluettelo-1902" className="nav-link" activeClassName="active">Puhelinluettelo - 1902</Link> 
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/puhelinluettelo-1926" className="nav-link" activeClassName="active">Puhelinluettelo - 1926</Link> 
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  );
}
export default Header