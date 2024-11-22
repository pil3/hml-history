import * as React from "react"


import "../styles/base/global.css"
import {svgStyle, textStyle} from "../styles/components/dateDivider.module.css"

import SubDivider from "../assets/sub-divider.svg"

const DateDivider = ({date}) => {
  return (
    <div>
      <SubDivider className={svgStyle} />
      <p className={textStyle}>{date}</p>
    </div>
  );
};

export default DateDivider;