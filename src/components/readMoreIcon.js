import * as React from "react";
import {buttonStyle, iconStyle} from "../styles/components/readMoreIcon.module.css"

import ArrowUp from "../assets/icon-up.svg"
import ArrowDown from "../assets/icon-down.svg"

const ReadMore = ({onClick, fullSize, hideWhenMinimized}) => {
  return (
    <button type="submit" aria-label="Näytä enemmän" className={buttonStyle} onClick={onClick}>
      {
        fullSize ? (<ArrowUp className={iconStyle}></ArrowUp>) : 
        (<ArrowDown style={{visibility: hideWhenMinimized && !fullSize ? "hidden" : "visible"}} className={iconStyle}></ArrowDown>)
      }
    </button>
  );
}
export default ReadMore;