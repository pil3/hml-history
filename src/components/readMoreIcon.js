import * as React from "react";
import {buttonStyle, iconStyle} from "../styles/components/readMoreIcon.module.css"

import ArrowUp from "../assets/icon-up.svg"

const ReadMore = ({onClick, fullSize, hideWhenMinimized}) => {
  return (
    <button type="submit" aria-label="Näytä enemmän" className={buttonStyle} onClick={onClick}>
      <ArrowUp style={{transform: fullSize ? "rotate(0deg)" : "rotate(180deg)", visibility: hideWhenMinimized && !fullSize ? "hidden" : "visible"}} className={iconStyle}></ArrowUp>
    </button>
  );
}
export default ReadMore;