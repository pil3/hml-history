import * as React from "react"

import Layout from "../components/layout";
import ImageSlider from "../components/imageSlider";

import Stack from "react-bootstrap/Stack";

import "../styles/base/global.css"


const newsPaperPage = () => {
  return ( 
    <Layout titleText="Satunnaisia sanomalehtiä">
      <Stack>
      <p className="imageCaptionStyle">Hämeen Sanomat 30.12 1899</p>
      <ImageSlider imgArray={hameenSanomat1899Array} showDots={true}></ImageSlider>
      <p className="imageCaptionStyle">Hämeen Sanomat 27.10 1902</p>
      <ImageSlider imgArray={hameenSanomat1902Array}></ImageSlider>
      </Stack>
    </Layout>
  );
}
export const Head = () => (
  <>
    <title>Vanhoja sanomalehtiä</title>
  </>
)
export default newsPaperPage;


/* image arrays for carousels
-------------------------------------------------------------*/
const hameenSanomat1899Array = [
  {
    key: "imageid1",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/611162/image/1?tracking=null",
    title: "30.12 1899",
    org: "Kansalliskirjaston digitaaliset aineistot",
    details: "Sivu 1/4",
  },
  {
    key: "imageid2",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/611162/image/2?tracking=PAGER",
    title: "30.12 1899",
    org: "Kansalliskirjaston digitaaliset aineistot",
    details: "Sivu 2/4",
  },
  {
    key: "imageid3",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/611162/image/3?tracking=PAGER",
    title: "30.12 1899",
    org: "Kansalliskirjaston digitaaliset aineistot",
    details: "Sivu 3/4",
  },
  {
    key: "imageid4",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/611162/image/4?tracking=PAGER",
    title: "30.12 1899",
    org: "Kansalliskirjaston digitaaliset aineistot",
    details: "Sivu 4/4",
  },
];
const hameenSanomat1902Array = [
  {
    key: "imageid1",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/630499/image/1?tracking=null",
    title: "27.10 1902",
    org: "Kansalliskirjaston digitaaliset aineistot",
    details: "Sivu 1/4",
  },
  {
    key: "imageid2",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/630499/image/2?tracking=PAGER",
    title: "27.10 1902",
    org: "Kansalliskirjaston digitaaliset aineistot",
    details: "Sivu 2/4",
  },
  {
    key: "imageid3",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/630499/image/3?tracking=PAGER",
    title: "27.10 1902",
    org: "Kansalliskirjaston digitaaliset aineistot",
    details: "Sivu 3/4",
  },
  {
    key: "imageid4",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/630499/image/4?tracking=PAGER",
    title: "27.10 1902",
    org: "Kansalliskirjaston digitaaliset aineistot",
    details: "Sivu 4/4",
  },
];
const hametar1906Array = [
  {
    key: "imageid1",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/634107/image/1?tracking=null",
    org: "Kansalliskirjaston digitaaliset aineistot",
    details: "Sivu 1/4",
  },
  {
    key: "imageid2",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/634107/image/2?tracking=PAGER",
    org: "Kansalliskirjaston digitaaliset aineistot",
    details: "Sivu 2/4",
  },
  {
    key: "imageid3",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/634107/image/3?tracking=PAGER",
    org: "Kansalliskirjaston digitaaliset aineistot",
    details: "Sivu 3/4",
  },
  {
    key: "imageid4",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/634107/image/4?tracking=PAGER",
    org: "Kansalliskirjaston digitaaliset aineistot",
    details: "Sivu 4/4",
  },
];
const hametar1909Array = [
  {
    key: "imageid1",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/634602/image/1?tracking=null",
    org: "Kansalliskirjaston digitaaliset aineistot",
    details: "Sivu 1/4",
  },
  {
    key: "imageid2",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/634602/image/2?tracking=PAGER",
    org: "Kansalliskirjaston digitaaliset aineistot",
    details: "Sivu 2/4",
  },
  {
    key: "imageid3",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/634602/image/3?tracking=PAGER",
    org: "Kansalliskirjaston digitaaliset aineistot",
    details: "Sivu 3/4",
  },
  {
    key: "imageid4",
    imgSrc: "https://digi.kansalliskirjasto.fi/sanomalehti/binding/634602/image/4?tracking=PAGER",
    org: "Kansalliskirjaston digitaaliset aineistot",
    details: "Sivu 4/4",
  },
];