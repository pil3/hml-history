import * as React from "react"

import ReadMore from "./readMoreBtn"

const Article = ({titleText, children}) => {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <article>
      <h4>{titleText}</h4>
      <div style={{display: showMore ? "inherit" : "none"}}>
        {children}
      </div>
      <ReadMore buttonText={showMore ? "Näytä vähemmän" : "Näytä enemmän..."} onClick={() => setShowMore(!showMore)}/>
    </article>
  );
};

export default Article;