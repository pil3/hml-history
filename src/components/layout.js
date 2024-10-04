import * as React from "react"

import { Link } from 'gatsby'

import Header from "./header";
import Footer from "./footer";

import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";

import { fullScreen, containerStyle, pageTitleStyle, ornamentStyle, titleStyle, pageUpStyle, upArrowStyle} from "../styles/components/layout.module.css";

import TitleOrnament  from "../assets/ornament-title.svg";
import UpArrow from "../assets/icon-up.svg"

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
      </Container>
      <hr/>
      <Link className={pageUpStyle} to="#" ><UpArrow className={upArrowStyle}/></Link>
      <Footer /> 
    </div>
  );
};

export default Layout;