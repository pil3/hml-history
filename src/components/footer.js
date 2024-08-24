import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";
import { footerImageStyle } from "../styles/components/footer.module.css";
const Footer = () => {
  return (
    <StaticImage
      alt="Footer Image"
      src="../images/footerImage.png"
      className={footerImageStyle}
    />
  );
};
export default Footer;