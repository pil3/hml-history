import * as React from "react"

import Layout from "../components/layout"
import ImageSlider from "../components/imageSlider"

import "../styles/base/global.css"

import img1 from "../images/content/calendar1895/img-1.jpg"
import img2 from "../images/content/calendar1895/img-2.jpg"
import img3 from "../images/content/calendar1895/img-3.jpg"
import img4 from "../images/content/calendar1895/img-4.jpg"
import img5 from "../images/content/calendar1895/img-5.jpg"
import img6 from "../images/content/calendar1895/img-6.jpg"
import img7 from "../images/content/calendar1895/img-7.jpg"
import img8 from "../images/content/calendar1895/img-8.jpg"
import img9 from "../images/content/calendar1895/img-9.jpg"
import img10 from "../images/content/calendar1895/img-10.jpg"
import img11 from "../images/content/calendar1895/img-11.jpg"
import img12 from "../images/content/calendar1895/img-12.jpg"



const Kalenteri1895Page = () => {
  return (
    <Layout titleText="Kunnallis-Kalenteri - 1895">
      <ImageSlider imgArray={imageArray} showDots={false} wide={false}></ImageSlider>
      <br></br>
      <p className="captionStyle">Hämeenlinnan kaupunginkirjasto 1895.</p>
      <br></br>
      <p>Hämeenlinnan ensimmäisen kunnalliskalenterin toimitti lääninrahastonhoitaja, asessori Anders Leonard Petterson (1841-1905), joka toimi 1800-luvun lopulla monissa luottamustehtävissä Hämeenlinnassa, mm. valtuustossa vuosina 
        1883-1898. Kunnalliskalenteri on luettelo eri tehtävissä toimivista henkilöistä. Siinä luetellaan valtuuston ja mm. rahatoimikamarin ja vaivaishoitohallituksen jäsenet, mutta myös monien kaupungissa toimivien yhteisöjen ja 
        järjestöjen, kuten raittiusseuran tai rouvasväenyhdistyksen toimihenkilöt.</p>
      
      <a className="hyperLinkStyle" href="https://digi.kirjastot.fi/files/original/114864acbe570c8cbc55f5781e75a05b.pdf">Lähde</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Kunnallis-Kalenteri 1895</title> // metadata

export default Kalenteri1895Page

const imageArray = [
  {key: "imageid1", imgSrc: img1, title: "", caption: "", org: ""},
  {key: "imageid2", imgSrc: img2, title: "", caption: "", org: ""},
  {key: "imageid3", imgSrc: img3, title: "", caption: "", org: ""},
  {key: "imageid4", imgSrc: img4, title: "", caption: "", org: ""},
  {key: "imageid5", imgSrc: img5, title: "", caption: "", org: ""},
  {key: "imageid6", imgSrc: img6, title: "", caption: "", org: ""},
  {key: "imageid7", imgSrc: img7, title: "", caption: "", org: ""},
  {key: "imageid8", imgSrc: img8, title: "", caption: "", org: ""},
  {key: "imageid9", imgSrc: img9, title: "", caption: "", org: ""},
  {key: "imageid10", imgSrc: img10, title: "", caption: "", org: ""},
  {key: "imageid11", imgSrc: img11, title: "", caption: "", org: ""},
  {key: "imageid12", imgSrc: img12, title: "", caption: "", org: ""}
];