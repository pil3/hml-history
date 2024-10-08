import * as React from "react"

import Layout from "../components/layout";
import ImageSlider from "../components/imageSlider";

import "../styles/base/global.css"

import Divider from "../assets/divider.svg"

const newsPaperPage = () => {
  return ( 
    <Layout titleText="Satunnaisia sanomalehtiä">
      <ImageSlider imgArray={hameenSanomat1879Array} showDots={true}></ImageSlider>
      <div className="verticalSpacer"></div>
      <Divider className="dividerStyle" />
      <ImageSlider imgArray={hameenSanomat1889Array} showDots={true}></ImageSlider>
      <div className="verticalSpacer"></div>
      <Divider className="dividerStyle" />
      <ImageSlider imgArray={hameenSanomat1899Array} showDots={true}></ImageSlider>
      <div className="verticalSpacer"></div>
      <Divider className="dividerStyle" />
      <ImageSlider imgArray={hameenSanomat1909Array} showDots={true}></ImageSlider>
      <div className="verticalSpacer"></div>
      <Divider className="dividerStyle" />
      <ImageSlider imgArray={hametar1909Array} showDots={true}></ImageSlider>
      <br></br>
    </Layout>
  );
}
export const Head = () => (
  <>
    <title>Entinen Hämeenlinna - Sanomalehtiä</title>
  </>
)
export default newsPaperPage;


/* image arrays for sliders
-------------------------------------------------------------*/
const hameenSanomat1879Array = [
  {
    key: "imageid1",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/371054/image/1?tracking=null",
    title: "8.1 1879",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
  {
    key: "imageid2",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/371054/image/2?tracking=PAGER",
    title: "8.1 1879",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
  {
    key: "imageid3",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/371054/image/3?tracking=PAGER",
    title: "8.1 1879",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
  {
    key: "imageid4",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/371054/image/4?tracking=PAGER",
    title: "8.1 1879",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
];
const hameenSanomat1889Array = [
  {
    key: "imageid1",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/36244/image/1?tracking=null",
    title: "17.5 1889",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
  {
    key: "imageid2",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/36244/image/2?tracking=PAGER",
    title: "17.5 1889",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
  {
    key: "imageid3",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/36244/image/3?tracking=PAGER",
    title: "17.5 1889",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
  {
    key: "imageid4",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/36244/image/4?tracking=PAGER",
    title: "17.5 1889",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
];
const hameenSanomat1899Array = [
  {
    key: "imageid1",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/611162/image/1?tracking=null",
    title: "30.12 1899",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
  {
    key: "imageid2",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/611162/image/2?tracking=PAGER",
    title: "30.12 1899",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
  {
    key: "imageid3",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/611162/image/3?tracking=PAGER",
    title: "30.12 1899",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
  {
    key: "imageid4",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/611162/image/4?tracking=PAGER",
    title: "30.12 1899",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
];
const hameenSanomat1909Array = [
  {
    key: "imageid1",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/633590/image/1?tracking=null",
    title: "1.5 1909",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
  {
    key: "imageid2",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/633590/image/2?tracking=PAGER",
    title: "1.5 1909",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
  {
    key: "imageid3",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/633590/image/3?tracking=PAGER",
    title: "1.5 1909",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
  {
    key: "imageid4",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/633590/image/4?tracking=PAGER",
    title: "1.5 1909",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
];
const hametar1909Array = [
  {
    key: "imageid1",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/634602/image/1?tracking=null",
    title: "18.9 1909",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
  {
    key: "imageid2",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/634602/image/2?tracking=PAGER",
    title: "18.9 1909",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
  {
    key: "imageid3",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/634602/image/3?tracking=PAGER",
    title: "18.9 1909",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "Sivu 3/4",
  },
  {
    key: "imageid4",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/634602/image/4?tracking=PAGER",
    title: "18.9 1909",
    org: "Kansalliskirjaston digitaaliset aineistot",
    caption: "",
  },
];