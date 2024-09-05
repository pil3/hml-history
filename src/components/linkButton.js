import * as React from "react";
import { Link } from "gatsby"

const linkStyle = {
  color: "#000000",
  textDecoration: "none",
  fontSize: "20px",
  textAlign: "center"
};

const LinkButton = ({title, to}) => {
  return (
    <Link to={to} style={linkStyle}>
      
        {title}

    </Link>
  );
}
export default LinkButton;