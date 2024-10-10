import * as React from "react"

import ImageModal from "./imageModal"

import {cardContainerStyle, titleStyle, cardImageStyle, cardCaptionStyle} from "../styles/components/imageCard.module.css"

import "../styles/base/global.css"


const ImageCard = ({ imgPath, caption, title, copyright}) => {

  return (
    <div className={cardContainerStyle}>
      <div className={titleStyle}>{title}</div>
      <ImageModal
        imageStyle={cardImageStyle}
        imagePath={imgPath}
        titleText={title}
        detailsText=""
        copyrightText={copyright}
      />
      <div className={cardCaptionStyle}>
        {caption}
        <br></br>
        <br></br>
        <div className="copyrightStyle">{copyright}</div>
      </div>
    </div>
  );
}

// Export the component
export default ImageCard;