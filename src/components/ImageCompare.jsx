import * as React from "react";
import Image from "react-bootstrap/Image";
import { imagesContainer, imgStyle, imgOverlayStyle} from "../styles/components/ImageCompare.module.css";

const ImageCompare = ({imgBot, imgTop, altText}) => {
  return (
    <div className={imagesContainer}>
      <Image className={imgStyle} src={imgBot} alt={altText} />
      <Image className={imgOverlayStyle} src={imgTop} alt={altText} />
    </div>
  );
}

// Export the component
export default ImageCompare;