import * as React from "react";
import {buttonStyle, buttonTextStyle} from "../styles/components/readMoreBtn.module.css"


const ReadMore = ({onClick, buttonText}) => {
  return (
    <button type="button" className={buttonStyle} onClick={onClick}>
      <div className={buttonTextStyle}>{buttonText}</div>
    </button>
  );
}
export default ReadMore;