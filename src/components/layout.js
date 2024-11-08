import * as React from "react"

import { Link } from "gatsby"

import Header from "./header";
import Footer from "./footer";

import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";

import { fullScreen, containerStyle, pageTitleStyle, ornamentStyle, titleStyle, pageUpStyle, upArrowStyle, horizontalRule, contactFieldStyle, logoStyle} from "../styles/components/layout.module.css";

import TitleOrnament  from "../assets/ornament-title.svg";
import UpArrow from "../assets/icon-up.svg"
import Logo from "../assets/white-logo.svg"

const Layout = ({titleText, children}) => {
  return (
    <div className={fullScreen}>
      <div className={titleStyle}>Edesmennyt Hämeenlinna</div>  
      <Container className={containerStyle} fluid="xl">
    
        <Header />
        <main>
          <TitleOrnament className={ornamentStyle} style={{rotate: "180deg"}}/>
          <div className={pageTitleStyle}>{titleText}</div>
          <TitleOrnament className={ornamentStyle}/>
          <div className="verticalSpacer"></div>
          {children}
        </main>
        <div className={horizontalRule}></div> 
        <Link className={pageUpStyle} to="#" ><UpArrow className={upArrowStyle}/></Link>
      </Container>
      <Footer /> 
      <div className={contactFieldStyle}>
        <span>Perri Laakso</span><span>päivitetty 8.11.2024</span><a href="mailto:perri.laakso@gmail.com" aria-label="Lähetä sähköpostia"><Logo className={logoStyle}/></a>
      </div>
    </div>
  );
};

export default Layout;