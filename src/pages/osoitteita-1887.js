import * as React from "react"

import Layout from "../components/layout"
import ImageSlider from "../components/imageSlider"

import "../styles/base/global.css"

import frontPage from "../images/content/address1887/front.jpg"
import img1 from "../images/content/address1887/addr-1.jpg"
import img2 from "../images/content/address1887/addr-2.jpg"
import img3 from "../images/content/address1887/addr-3.jpg"
import img4 from "../images/content/address1887/addr-4.jpg"
import img5 from "../images/content/address1887/addr-5.jpg"
import img6 from "../images/content/address1887/addr-6.jpg"
import img7 from "../images/content/address1887/addr-7.jpg"
import img8 from "../images/content/address1887/addr-8.jpg"
import img9 from "../images/content/address1887/addr-9.jpg"
import img10 from "../images/content/address1887/addr-10.jpg"
import img11 from "../images/content/address1887/addr-11.jpg"
import img12 from "../images/content/address1887/addr-12.jpg"
import img13 from "../images/content/address1887/addr-13.jpg"
import img14 from "../images/content/address1887/addr-14.jpg"
import img15 from "../images/content/address1887/addr-15.jpg"
import img16 from "../images/content/address1887/addr-16.jpg"
import img17 from "../images/content/address1887/addr-17.jpg"
import img18 from "../images/content/address1887/addr-18.jpg"
import img19 from "../images/content/address1887/addr-19.jpg"
import img20 from "../images/content/address1887/addr-20.jpg"


const Osoitteita1887Page = () => {
  return (
    <Layout titleText="Osoitteita vuodelta 1887">
      <ImageSlider imgArray={imageArray} showDots={false}></ImageSlider>
      <br></br>
      <p className="captionStyle">Kansalliskirjaston digitaaliset aineistot, Hämeenlinnan Osoite Ja Ilmoitus Kalenteri, 1887 </p>
      <br></br>
      <a className="hyperLinkStyle" href="https://digi.kirjastot.fi/files/original/be90385db46c505089d930315803cadb.pdf">Linkki alkuperäiseen dokumenttiin (pdf)</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Osoitteita 1887</title> // metadata

// Export product component
export default Osoitteita1887Page

const imageArray = [
  {key: "imageid0", imgSrc: frontPage, title: "", caption: "1/21", org: ""},
  {key: "imageid1", imgSrc: img1, title: "", caption: "2/21", org: ""},
  {key: "imageid2", imgSrc: img2, title: "", caption: "3/21", org: ""},
  {key: "imageid3", imgSrc: img3, title: "", caption: "4/21", org: ""},
  {key: "imageid4", imgSrc: img4, title: "", caption: "5/21", org: ""},
  {key: "imageid5", imgSrc: img5, title: "", caption: "6/21", org: ""},
  {key: "imageid6", imgSrc: img6, title: "", caption: "7/21", org: ""},
  {key: "imageid7", imgSrc: img7, title: "", caption: "8/21", org: ""},
  {key: "imageid8", imgSrc: img8, title: "", caption: "9/21", org: ""},
  {key: "imageid9", imgSrc: img9, title: "", caption: "10/21", org: ""},
  {key: "imageid10", imgSrc: img10, title: "", caption: "11/21", org: ""},
  {key: "imageid11", imgSrc: img11, title: "", caption: "12/21", org: ""},
  {key: "imageid12", imgSrc: img12, title: "", caption: "13/21", org: ""},
  {key: "imageid13", imgSrc: img13, title: "", caption: "14/21", org: ""},
  {key: "imageid14", imgSrc: img14, title: "", caption: "15/21", org: ""},
  {key: "imageid15", imgSrc: img15, title: "", caption: "16/21", org: ""},
  {key: "imageid16", imgSrc: img16, title: "", caption: "17/21", org: ""},
  {key: "imageid17", imgSrc: img17, title: "", caption: "18/21", org: ""},
  {key: "imageid18", imgSrc: img18, title: "", caption: "19/21", org: ""},
  {key: "imageid19", imgSrc: img19, title: "", caption: "20/21", org: ""},
  {key: "imageid20", imgSrc: img20, title: "", caption: "21/21", org: ""}
];