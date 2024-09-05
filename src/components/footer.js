import * as React from "react";
import Image from "react-bootstrap/Image";

import { footerContainerStyle, footerImageStyle, logoStyle} from "../styles/components/footer.module.css";

import footerImage from "../images/footerImage.jpg"
import Logo from "../assets/white-logo.svg";

const Footer = () => {
  return (
    <div className={footerContainerStyle}>
      <Image
        alt="Footer Image"
        src={footerImage}
        className={footerImageStyle}
      />
      <a href="mailto:perri.laakso@gmail.com" aria-label="Lähetä sähköpostia"><Logo className={logoStyle}/></a>
    </div>
  );
};
export default Footer;