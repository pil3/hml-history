import * as React from "react"
import useWindowSize from "./useWindowSize"
import Carousel from "react-bootstrap/Carousel"
import ImageModal from "./imageModal"

import {carouselItemStyle, carouselImgStyle, carouselCaptionStyle, carouselCaptionTextStyle} from "../styles/components/imageCarousel.module.css"

const ImageCarousel = ({imgArray}) => {
  // Remove carousel controls with small displays
  const windowSize = useWindowSize();
  return (
    <Carousel indicators={false}
              controls={windowSize.width > 767}
              interval={10000}
              touch
              keyboard
              data-bs-theme="dark"
    >
        {
          imgArray.map(_img => 
          <Carousel.Item className={carouselItemStyle}>
            <ImageModal imageStyle={carouselImgStyle} imagePath={_img.imgSrc} key={_img.key} titleText={_img.year} detailsText={_img.details} copyrightText={_img.org + ", "  +  _img.collection} ></ImageModal>
            <Carousel.Caption className={carouselCaptionStyle}><p className={carouselCaptionTextStyle}>{_img.details}</p></Carousel.Caption>
          </Carousel.Item>)
        }
  </Carousel>
  );
};
export default ImageCarousel