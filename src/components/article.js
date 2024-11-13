import * as React from "react"

import ReadMore from "./readMoreIcon"

const Article = ({titleText, children}) => {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <article>
      <h4>{titleText}</h4>
      <div style={{display: showMore ? "inherit" : "none", paddingBottom: "8px"}}>
        {children}
      </div>
      <ReadMore fullSize={showMore} onClick={() => setShowMore(!showMore)}/>
    </article>
  );
};

export default Article;