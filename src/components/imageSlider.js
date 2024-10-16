import * as React from "react"

import Slider from "react-slick"

import ImageModal from "./imageModal"

import ArrowLeft from "../assets/icon-left.svg";
import ArrowRight from "../assets/icon-right.svg";

import {titleStyle,
        buttonContainer,
        buttonStyle,
        arrowStyle, 
        sliderImgStyle, 
        sliderCaptionStyle,
        sliderStyle
      } from "../styles/components/imageSlider.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/base/global.css"

const ImageSlider = ({imgArray, showDots, auto, wide}) => {

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

  const wideSlider = wide===true

  return (
    <div className={sliderStyle} style={{maxWidth: wideSlider ? "992px" : "576px" }}>
      <div className={buttonContainer}>
        <button type="button" aria-label="Edellinen" className={buttonStyle} onClick={previous}>
          <ArrowLeft className={arrowStyle}/>
        </button>
        <button type="button" aria-label="Seuraava" className={buttonStyle} onClick={next}>
        <ArrowRight className={arrowStyle}/>
        </button>
      </div>
      <Slider ref={slider => {sliderRef = slider}}{...settings}>
        {
          imgArray.map((_img, index) => 
            <div>
              <div className={titleStyle}>{_img.title}</div>
              <ImageModal imageStyle={sliderImgStyle} imagePath={_img.imgSrc} key={_img.key} titleText={_img.title} copyrightText={_img.org} ></ImageModal>
              <div className={sliderCaptionStyle}>{_img.caption}</div>
              <div className="captionStyle">{index + 1} / {imgArray.length}</div>
            </div>
          )
        }
      </Slider>
    </div>
  );
}
export default ImageSlider