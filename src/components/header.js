import * as React from "react"

import { Link } from 'gatsby';

import { useLocation } from "@reach/router"

import "bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";

import {navBarStyle, logoStyle, subMenuStyle, activeSubMenuStyle, dropdownItem, activeItem} from "../styles/components/header.module.css";

import vaakuna from "../images/hml-vaakuna-old.png" 

const Header = () => {
  const dropdown_1_paths = [
    "/kunnallishistoria/",
    "/tulipalo/",
    "/hauho/",
    "/kouluista-1879/",
    "/olosuhteet-1808/",
    "/asuminen/",
    "/kuritushuone/",
    "/matkailuopas-1915/",
    "/matkailuopas-1927/"
  ];
  const dropdown_2_1_paths = [
    "/artikkeleita1914/",
    "/hml-kirje-1914/",
    "/rikoksia1914/",
    "/war-1914/"
  ];
  const dropdown_2_2_paths = [
    "/pre-civilwar/",
    "/civilwar-1918/",
    "/post-civilwar/",
    "/ilmoituksia-1918/",
    "/independence/",
    "/civilwar-reds/"
  ];
  const dropdown_2_3_paths = [
    "/lukijoilta1924/",
    "/rikoksia1924/",
    "/ilmoituksia-1924/"
  ];
  const dropdown_3_paths = [
    "/people/",
    "/aulanko/",
    "/kartta1778/",
    "/kartta1892/"
  ];
  const dropdown_4_paths = [
    "/kalenteri-1895/",
    "/osoitteita-1887/",
    "/osoitteita-1915/",
    "/osoitteita-1923/",
    "/osoitteita-1931/",
    "/puhelinluettelo-1902/",
    "/puhelinluettelo-1926/",
    "/mainoksia/"
  ];

  const path = useLocation();
  const location = path.pathname;

  const dropdown_1_Active = dropdown_1_paths.includes(location);
  const dropdown_2_1_Active = dropdown_2_1_paths.includes(location);
  const dropdown_2_2_Active = dropdown_2_2_paths.includes(location);
  const dropdown_2_3_Active = dropdown_2_3_paths.includes(location);
  const dropdown_3_Active = dropdown_3_paths.includes(location);
  const dropdown_4_Active = dropdown_4_paths.includes(location);

  return (
    <Navbar expand="md" data-bs-theme="light" className={navBarStyle}>
      <Container fluid="xl">
        <Navbar.Brand href="/" id="headerLogo" title="Logo"><Image placeholder={"blurred"} className={logoStyle} alt="Vaakuna" src={vaakuna} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsiveNavbar" />
        <Navbar.Collapse id="responsiveNavbar">
          <Nav variant="underline" className="mx-auto">
            <Nav.Item><Nav.Link as={Link} to="/" activeClassName="active">Etusivu</Nav.Link></Nav.Item>

            <NavDropdown title="Tekstejä" id="collasible-nav-dropdown" active={dropdown_1_Active}>
              <NavDropdown.Item as={Link} to="/kunnallishistoria" className={dropdownItem} activeClassName={activeItem}>Kunnallishistoria</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tulipalo" className={dropdownItem} activeClassName={activeItem}>Kaupungin palo 1831</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hauho" className={dropdownItem} activeClassName={activeItem}>Hauhon kirkon arkistosta</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/kouluista-1879" className={dropdownItem} activeClassName={activeItem}>Vanhoista kouluista</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/olosuhteet-1808" className={dropdownItem} activeClassName={activeItem}>Olosuhteet 1808-1809</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/asuminen" className={dropdownItem} activeClassName={activeItem}>Asunto-olosuhteet vuonna 1908</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/kuritushuone" className={dropdownItem} activeClassName={activeItem}>Kuritushuoneen järjestyssäännöt</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/matkailuopas-1915" className={dropdownItem} activeClassName={activeItem}>Matkailuopas - 1915</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/matkailuopas-1927" className={dropdownItem} activeClassName={activeItem}>Matkailuopas - 1927</NavDropdown.Item>
            </NavDropdown>

            <NavDropdownMenu title="Artikkeleita" id="collasible-nav-dropdown" active={dropdown_2_1_Active || dropdown_2_2_Active || dropdown_2_3_Active}>
              <DropdownSubmenu className={dropdown_2_1_Active ? activeSubMenuStyle : subMenuStyle} title={"1914"} >
                <NavDropdown.Item as={Link} to="/artikkeleita1914" className={dropdownItem} activeClassName={activeItem}>Artikkeleita</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/hml-kirje-1914" className={dropdownItem} activeClassName={activeItem}>Hämeenlinnan kirje</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rikoksia1914" className={dropdownItem} activeClassName={activeItem}>Oikeus- ja poliisiasioita</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/war-1914" className={dropdownItem} activeClassName={activeItem}>Kohti sotaa</NavDropdown.Item>
              </DropdownSubmenu>

              <DropdownSubmenu className={dropdown_2_2_Active ? activeSubMenuStyle : subMenuStyle} title="1917-1918">
                <NavDropdown.Item as={Link} to="/pre-civilwar" className={dropdownItem} activeClassName={activeItem}>Kohti sisällissotaa</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/civilwar-1918" className={dropdownItem} activeClassName={activeItem}>Sisällissota</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/post-civilwar" className={dropdownItem} activeClassName={activeItem}>Sisällissodan jälkeen</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ilmoituksia-1918" className={dropdownItem} activeClassName={activeItem}>Ilmoituksia</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/independence" className={dropdownItem} activeClassName={activeItem}>Itsenäistyminen</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/civilwar-reds" className={dropdownItem} activeClassName={activeItem}>Punainen sisällissota</NavDropdown.Item>
              </DropdownSubmenu>

              <DropdownSubmenu className={dropdown_2_3_Active ? activeSubMenuStyle : subMenuStyle} title="1924">
                <NavDropdown.Item as={Link} to="/lukijoilta1924" className={dropdownItem} activeClassName={activeItem}>Yleisönosasto</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rikoksia1924" className={dropdownItem} activeClassName={activeItem}>Oikeus- ja poliisiasioita</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ilmoituksia-1924" className={dropdownItem} activeClassName={activeItem}>Ilmoituksia</NavDropdown.Item>
              </DropdownSubmenu>
            </NavDropdownMenu>

            <NavDropdown title="Kuvia" id="collasible-nav-dropdown" active={dropdown_3_Active}>
              <NavDropdown.Item as={Link} to="/people" className={dropdownItem} activeClassName={activeItem}>Ihmisiä</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/aulanko" className={dropdownItem} activeClassName={activeItem}>Aulanko</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/kartta1778" className={dropdownItem} activeClassName={activeItem}>Kartta 1778</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/kartta1892" className={dropdownItem} activeClassName={activeItem}>Kartta 1892</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Luetteloita" id="collasible-nav-dropdown" align="end" active={dropdown_4_Active}>
              <NavDropdown.Item as={Link} to="/kalenteri-1895" className={dropdownItem} activeClassName={activeItem}>Kunnallis-Kalenteri - 1895</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/osoitteita-1887" className={dropdownItem} activeClassName={activeItem}>Osoitteita - 1887</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/osoitteita-1915" className={dropdownItem} activeClassName={activeItem}>Osoitteita - 1915</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/osoitteita-1923" className={dropdownItem} activeClassName={activeItem}>Osoitteita - 1923</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/osoitteita-1931" className={dropdownItem} activeClassName={activeItem}>Osoitteita - 1931</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/puhelinluettelo-1902" className={dropdownItem} activeClassName={activeItem}>Puhelinluettelo - 1902</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/puhelinluettelo-1926" className={dropdownItem} activeClassName={activeItem}>Puhelinluettelo - 1926</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mainoksia" className={dropdownItem} activeClassName={activeItem}>Mainoksia</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  );
}
export default Header