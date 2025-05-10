import * as React from "react"

import { Link } from "gatsby"

import Header from "./header";
import Footer from "./footer";

import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"

import { fullScreen, containerStyle, pageTitleStyle, ornamentStyle, titleStyle, pageUpStyle, upArrowStyle, horizontalRule, contactFieldStyle, logoStyle} from "../styles/components/layout.module.css";

import titleOrnament  from "../assets/ornament-title.png";
import iconUp  from "../assets/icon-up.png";
import logo from "../assets/white-logo.png"

const Layout = ({titleText, children}) => {
  return (
    <div className={fullScreen}>
      <div className={titleStyle}>Edesmennyt Hämeenlinna</div>  
      <Container className={containerStyle} fluid="xl">
        <Header />
        <main>
          <Image src={titleOrnament} className={ornamentStyle} style={{rotate: "180deg"}}/>
          <div className={pageTitleStyle}>{titleText}</div>
          <Image src={titleOrnament} className={ornamentStyle}/>
          <br />
          {children}
        </main>
        <div className={horizontalRule}></div> 
        <Link className={pageUpStyle} to="#" ><Image src={iconUp} className={upArrowStyle}/></Link>
      </Container>
      <Footer /> 
      <div className={contactFieldStyle}>
        <span>Perri Laakso</span><span>10.5.2025</span><a href="mailto:perri.laakso@gmail.com" aria-label="Lähetä sähköpostia"><Image src={logo} className={logoStyle}/></a>
      </div>
    </div>
  );
};

export default Layout;