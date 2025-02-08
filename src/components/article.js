import * as React from "react"

import ReadMore from "./readMoreIcon"

const Article = ({titleText, children}) => {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <article>
      <ReadMore hideWhenMinimized={true} fullSize={showMore} onClick={() => setShowMore(!showMore)}/>
      <h4 style={{margin:"10px 0 10px 0"}}>{titleText}</h4>
      <div style={{display: showMore ? "inherit" : "none", paddingBottom: "8px"}}>
        {children}
      </div>
      <ReadMore hideWhenMinimized={false} fullSize={showMore} onClick={() => setShowMore(!showMore)}/>
    </article>
  );
};

export default Article;