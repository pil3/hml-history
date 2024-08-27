import * as React from "react"
import Header from "./header";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { fullScreen, containerStyle, headerStyle, titleSvgStyle} from "../styles/components/layout.module.css";
import TitleSvg from "../assets/header-text.svg";

const Layout = ({titleText, children}) => {
  return (
    <div className={fullScreen}>
      <Container className={containerStyle} fluid="xl">
        <div className="text-center mt-2">
          <TitleSvg className={titleSvgStyle}/>
        </div>  
        <Header />
        <main>
          <h1 className={headerStyle}>{titleText}</h1>
          <hr></hr>
          {children}
        </main>
      </Container>
      <Footer />    
    </div>
  );
};

export default Layout;