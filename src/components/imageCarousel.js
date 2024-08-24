import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-bootstrap/Carousel"
import ImageModal from "./imageModal"
import {carouselStyle, carouselImgStyle, carouselCaptionStyle} from "../styles/components/imageCarousel.module.css"

const ImageCarousel = ({imgArray, imgStyle}) => {
  return (
    <Carousel indicators={false} interval={10000} data-bs-theme="dark">
      
        {
          imgArray.map(_img => 
          <Carousel.Item className={carouselStyle} style={imgStyle}>
            <ImageModal imageStyle={carouselImgStyle} imagePath={_img.imgSrc} key={_img.key} titleText={_img.year} detailsText={_img.details} copyrightText={_img.org + ", "  +  _img.collection} ></ImageModal>
            <Carousel.Caption className={carouselCaptionStyle}><p>{_img.collection}</p><p>{_img.org}</p></Carousel.Caption>
          </Carousel.Item>)
        }
  </Carousel>
  );
};
export default ImageCarousel