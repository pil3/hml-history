import * as React from "react"

import ReadMore from "./readMoreBtn"

const Article = ({titleText, children}) => {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <article>
      <h3>{titleText}</h3>
      <div style={{display: showMore ? "inherit" : "none"}}>
        {children}
      </div>
      <ReadMore buttonText={showMore ? "Pienennä" : "Lue lisää"} onClick={() => setShowMore(!showMore)}/>
    </article>
  );
};

export default Article;