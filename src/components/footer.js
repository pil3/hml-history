import * as React from "react";
import Image from "react-bootstrap/Image";
import { footerContainerStyle, footerImageStyle } from "../styles/components/footer.module.css";

import footerImage from "../images/footerImage.jpg"
const Footer = () => {
  return (
    <div className={footerContainerStyle}>
      <Image
        alt="Footer Image"
        src={footerImage}
        className={footerImageStyle}
      />
    </div>
  );
};
export default Footer;