import * as React from "react"

import Slider from "react-slick"

import ImageModal from "./imageModal"

import ArrowLeft from "../assets/icon-left.svg";
import ArrowRight from "../assets/icon-right.svg";

import {buttonContainer,
        buttonStyle,
        arrowStyle, 
        sliderImgStyle, 
        sliderCaptionStyle
      } from "../styles/components/imageSlider.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({imgArray, showDots, auto}) => {

  let sliderRef = React.useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: showDots===true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    autoplay: auto===true,
    autoplaySpeed: 8000
  };

  return (
    <div>
      <Slider ref={slider => {sliderRef = slider}}{...settings}>
        {
          imgArray.map(_img => 
            <div>
            <ImageModal imageStyle={sliderImgStyle} imagePath={_img.imgSrc} key={_img.key} titleText={_img.title} detailsText={_img.caption} copyrightText={_img.org} ></ImageModal>
            <div className={sliderCaptionStyle}>{_img.caption}</div>
            </div>
          )
        }
      </Slider>
      <div className={buttonContainer}>
        <button type="button" aria-label="Edellinen" className={buttonStyle} onClick={previous}>
          <ArrowLeft className={arrowStyle}/>
        </button>
        <button type="button" aria-label="Seuraava" className={buttonStyle} onClick={next}>
        <ArrowRight className={arrowStyle}/>
        </button>
      </div>
    </div>
  );
}
export default ImageSlider