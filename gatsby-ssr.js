import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Inter-ExtraLight.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
    rel="preload"
    href="/fonts/Inter-Regular.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
    key="interFont"
  />,
    <link
    rel="preload"
    href="/fonts/Inter-Italic.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
    key="interFont"
  />,
  <link
  rel="preload"
  href="/fonts/Inter-LightItalic.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
  key="interFont"
/>,
  ])
}