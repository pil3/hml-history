import * as React from "react"
import Header from "./header";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { fullScreen, containerStyle, headerStyle} from "../styles/components/layout.module.css";
import HeaderText from "../assets/header-text.svg";

const Layout = ({titleText, children}) => {
  return (
    <div className={fullScreen}>
      <Container className={containerStyle} fluid="xl">
        <div className="text-center mt-2">
          <HeaderText width="50%" height="auto"/>
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