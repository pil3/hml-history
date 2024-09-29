import * as React from "react"

import ImageModal from "./imageModal"

import {cardContainerStyle, cardImageStyle, cardCaptionStyle, copyrightStyle} from "../styles/components/imageCard.module.css"


const ImageCard = ({ imgPath, caption, modalTitle, copyright}) => {

  return (
    <div className={cardContainerStyle}>
      <ImageModal
        imageStyle={cardImageStyle}
        imagePath={imgPath}
        titleText={modalTitle}
        detailsText=""
        copyrightText={copyright}
      />
      <div className={cardCaptionStyle}>
        {caption}
        <div className={copyrightStyle}>{copyright}</div>
      </div>
    </div>
  );
}

// Export the component
export default ImageCard;