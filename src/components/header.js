import * as React from "react"
import { Link } from 'gatsby'

import "bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

import { navBarStyle, 
  logoStyle, 
  dropDownMenuStyle
} from "../styles/components/header.module.css";

import vaakuna from "../images/hml-vaakuna-old.png" 

const Header = () => {
  return (
     //<div className={ headerStyle }>
        <Navbar expand="md" data-bs-theme="light" className={navBarStyle}>
          <Container fluid="xl">
            <Navbar.Brand href="/" id="headerLogo" title="Logo"><Image placeholder={"blurred"} className={logoStyle} alt="Vaakuna" src={vaakuna} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="hamburger" />
            <Navbar.Collapse id="hamburger">
              <Nav variant="underline" className="mx-auto">

                <Nav.Item>
                  <Link to="/" className="nav-link" activeClassName="active">Etusivu</Link> 
                </Nav.Item>

                <Dropdown as={Nav.Item} >
                  <Dropdown.Toggle as={Nav.Link}>Tekstejä</Dropdown.Toggle>
                  <Dropdown.Menu className={dropDownMenuStyle}>
                    <Dropdown.Item>
                      <Link to="/kouluista-1879" className="nav-link" activeClassName="active">Vanhoista kouluista</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/olosuhteet-1808" className="nav-link" activeClassName="active">Olosuhteet sotavuosina 1808-1809</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/asuminen" className="nav-link" activeClassName="active">Asunto-olosuhteet vuonna 1908</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/kuritushuone" className="nav-link" activeClassName="active">Kuritushuoneen järjestyssäännöt - 1877</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/matkailuopas-1915" className="nav-link" activeClassName="active">Matkailuopas - 1915</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/matkailuopas-1927" className="nav-link" activeClassName="active">Matkailuopas - 1927</Link> 
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown as={Nav.Item}>
                  <Dropdown.Toggle as={Nav.Link}>Kuvia</Dropdown.Toggle>
                  <Dropdown.Menu className={dropDownMenuStyle}>
                    <Dropdown.Item>
                      <Link to="/ahvenisto" className="nav-link" activeClassName="active testaus">Ahvenisto</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/aulanko" className="nav-link" activeClassName="active testaus">Aulanko</Link> 
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown as={Nav.Item} >
                  <Dropdown.Toggle as={Nav.Link}>Leikkeitä</Dropdown.Toggle>
                  <Dropdown.Menu className={dropDownMenuStyle}>
                    <Dropdown.Item>
                      <Link to="/osoitteita-1887" className="nav-link" activeClassName="active">Osoitteita - 1887</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/osoitteita-1923" className="nav-link" activeClassName="active">Osoitteita - 1923</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/osoitteita-1931" className="nav-link" activeClassName="active">Osoitteita - 1931</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/puhelinluettelo-1926" className="nav-link" activeClassName="active">Puhelinluettelo - 1926</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/sanomalehti" className="nav-link" activeClassName="active">Satunnaisia sanomalehtiä</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/mainoksia" className="nav-link" activeClassName="active">Mainoksia</Link> 
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown as={Nav.Item} >
                  <Dropdown.Toggle as={Nav.Link}>Kaavioita</Dropdown.Toggle>
                  <Dropdown.Menu className={dropDownMenuStyle}>
                    <Dropdown.Item>
                      <Link to="/aikajana" className="nav-link" activeClassName="active">Aikajana</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/kartta1778" className="nav-link" activeClassName="active">Kartta 1778</Link> 
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/kartta1892" className="nav-link" activeClassName="active">Kartta 1892</Link> 
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
     //</div>
  );
}
export default Header