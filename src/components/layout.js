import * as React from "react"
import Header from "./header";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { fullScreen, containerStyle, pageTitleStyle, titleSvgStyle, topStyle} from "../styles/components/layout.module.css";
import TitleSvg from "../assets/header-text-white.svg";

const Layout = ({titleText, children}) => {
  return (
    <div className={fullScreen}>
      <Container className={containerStyle} fluid="xl">
        <div className={topStyle}>
          <TitleSvg className={titleSvgStyle}/>
        </div>  
        <Header />
        <main>
          <h1 className={pageTitleStyle}>{titleText}</h1>
          {children}
        </main>
      </Container>
      <Footer />    
    </div>
  );
};

export default Layout;