import * as React from "react"

import Image from "react-bootstrap/Image"

import {dividerStyle, textStyle} from "../styles/components/dateDivider.module.css"

import subDivider from "../assets/sub-divider.png"

const DateDivider = ({date}) => {
  return (
    <div>
      <Image src={subDivider} className={dividerStyle} />
      <p className={textStyle}>{date}</p>
    </div>
  );
};

export default DateDivider;