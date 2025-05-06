import * as React from "react";

import Image from "react-bootstrap/Image"

import {buttonStyle, iconStyle} from "../styles/components/readMoreIcon.module.css"

import arrowUp from "../assets/icon-up.png"
import arrowDown from "../assets/icon-down.png"

const ReadMore = ({onClick, fullSize, hideWhenMinimized}) => {
  return (
    <button type="submit" aria-label="Näytä enemmän" className={buttonStyle} onClick={onClick}>
      {
        fullSize ? (<Image src={arrowUp} className={iconStyle} />) : 
        (<Image src={arrowDown} style={{visibility: hideWhenMinimized && !fullSize ? "hidden" : "visible"}} className={iconStyle} />)
      }
    </button>
  );
}
export default ReadMore;