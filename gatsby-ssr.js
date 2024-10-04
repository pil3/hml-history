import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="ballet"
      rel="preload"
      href="/fonts/Ballet-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
    key="specialElite"
    rel="preload"
    href="/fonts/SpecialElite-Regular.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  ])
}