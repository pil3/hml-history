import * as React from "react";
import { Link } from "gatsby"
import TimelineIcon from "../assets/timeline.svg";

const linkStyle = {
  color: "#000000",
  textDecoration: "none",
  fontSize: "20px",
  textAlign: "center"
};
const boxStyle = {
  padding: "0.5em 2px",
  boxShadow: "2px 2px 4px #000"
};

const LinkButton = ({title, to}) => {
  return (
    <Link to={to} style={linkStyle}>
      
        {title}

    </Link>
  );
}
export default LinkButton;