import * as React from "react";
import Image from "react-bootstrap/Image";
import { imageContainerStyle, imgStyle, imgOverlayStyle} from "../styles/components/ImageCompare.module.css";

const ImageCompare = ({imgBot, imgTop, altText}) => {
  return (
    <div className={imageContainerStyle}>
      <Image className={imgStyle} src={imgBot} alt={altText} />
      <Image className={imgOverlayStyle} src={imgTop} alt={altText} />
    </div>
  );
}

// Export the component
export default ImageCompare;