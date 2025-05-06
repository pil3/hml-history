import * as React from "react"

import Slider from "react-slick"

import Image from "react-bootstrap/Image"

import ImageModal from "./imageModal"

import {titleStyle,
        buttonContainer,
        buttonStyle,
        arrowStyle, 
        sliderImgStyle, 
        slidercaption,
        sliderStyle
      } from "../styles/components/imageSlider.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/base/global.css"

import arrowLeft from "../assets/icon-left.png";
import arrowRight from "../assets/icon-right.png";

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
          <Image src={arrowLeft} className={arrowStyle}/>
        </button>
        <button type="button" aria-label="Seuraava" className={buttonStyle} onClick={next}>
        <Image src={arrowRight} className={arrowStyle}/>
        </button>
      </div>
      <Slider ref={slider => {sliderRef = slider}}{...settings}>
        {
          imgArray.map((_img, index) => 
            <div key={_img.key}>
              <div className={titleStyle}>{_img.title}</div>
              <ImageModal imageStyle={sliderImgStyle} imagePath={_img.imgSrc} titleText={_img.title} copyrightText={_img.org} ></ImageModal>
              <div className={slidercaption}>{_img.caption}</div>
              <div className="caption">{index + 1} / {imgArray.length}</div>
            </div>
          )
        }
      </Slider>
    </div>
  );
}
export default ImageSlider