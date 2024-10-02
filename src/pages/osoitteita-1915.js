import * as React from "react"

import Layout from "../components/layout"
import ImageSlider from "../components/imageSlider"

import Image from 'react-bootstrap/Image'

import "../styles/base/global.css"

import frontPage from "../images/content/address1915/front.jpg"
import img1 from "../images/content/address1915/addr-1.jpg"
import img2 from "../images/content/address1915/addr-2.jpg"
import img3 from "../images/content/address1915/addr-3.jpg"
import img4 from "../images/content/address1915/addr-4.jpg"
import img5 from "../images/content/address1915/addr-5.jpg"
import img6 from "../images/content/address1915/addr-6.jpg"
import img7 from "../images/content/address1915/addr-7.jpg"
import img8 from "../images/content/address1915/addr-8.jpg"
import img9 from "../images/content/address1915/addr-9.jpg"
import img10 from "../images/content/address1915/addr-10.jpg"
import img11 from "../images/content/address1915/addr-11.jpg"
import img12 from "../images/content/address1915/addr-12.jpg"
import img13 from "../images/content/address1915/addr-13.jpg"
import img14 from "../images/content/address1915/addr-14.jpg"
import img15 from "../images/content/address1915/addr-15.jpg"
import img16 from "../images/content/address1915/addr-16.jpg"
import img17 from "../images/content/address1915/addr-17.jpg"
import img18 from "../images/content/address1915/addr-18.jpg"
import img19 from "../images/content/address1915/addr-19.jpg"
import img20 from "../images/content/address1915/addr-20.jpg"
import img21 from "../images/content/address1915/addr-21.jpg"
import img22 from "../images/content/address1915/addr-22.jpg"
import img23 from "../images/content/address1915/addr-23.jpg"
import img24 from "../images/content/address1915/addr-24.jpg"
import img25 from "../images/content/address1915/addr-25.jpg"
import img26 from "../images/content/address1915/addr-26.jpg"
import img27 from "../images/content/address1915/addr-27.jpg"
import img28 from "../images/content/address1915/addr-28.jpg"
import img29 from "../images/content/address1915/addr-29.jpg"
import img30 from "../images/content/address1915/addr-30.jpg"
import img31 from "../images/content/address1915/addr-31.jpg"
import img32 from "../images/content/address1915/addr-32.jpg"
import img33 from "../images/content/address1915/addr-33.jpg"
import img34 from "../images/content/address1915/addr-34.jpg"
import img35 from "../images/content/address1915/addr-35.jpg"
import img36 from "../images/content/address1915/addr-36.jpg"
import img37 from "../images/content/address1915/addr-37.jpg"
import img38 from "../images/content/address1915/addr-38.jpg"
import img39 from "../images/content/address1915/addr-39.jpg"
import img40 from "../images/content/address1915/addr-40.jpg"
import img41 from "../images/content/address1915/addr-41.jpg"
import img42 from "../images/content/address1915/addr-42.jpg"
import img43 from "../images/content/address1915/addr-43.jpg"
import img44 from "../images/content/address1915/addr-44.jpg"
import img45 from "../images/content/address1915/addr-45.jpg"
import img46 from "../images/content/address1915/addr-46.jpg"
import img47 from "../images/content/address1915/addr-47.jpg"
import img48 from "../images/content/address1915/addr-48.jpg"
import img49 from "../images/content/address1915/addr-49.jpg"
import img50 from "../images/content/address1915/addr-50.jpg"
import img51 from "../images/content/address1915/addr-51.jpg"


const Osoitteita1915Page = () => {
  return (
    <Layout titleText="Osoitteita vuodelta 1915">
      <Image className="centeredImageStyle" src={frontPage} alt="Etusivu"/>
      <div className="horizontalRule"></div>
      <ImageSlider imgArray={imageArray} showDots={false} wide={false}></ImageSlider>
      <br></br>
      <p className="captionStyle">Kansalliskirjaston digitaaliset aineistot, Hämeenlinnan kaupunginkirjasto, Osoitekalenteri 1915</p>
      <div className="horizontalRule"></div>
      <a className="hyperLinkStyle" href="https://digi.kirjastot.fi/files/original/de8bc2c3d2b360870dd8bcb7cc789fe0.pdf">Linkki alkuperäiseen dokumenttiin (pdf)</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Osoitteita 1915</title> // metadata

export default Osoitteita1915Page

const imageArray = [
  {key: "imageid1", imgSrc: img1, title: "", caption: "1/51", org: ""},
  {key: "imageid2", imgSrc: img2, title: "", caption: "2/51", org: ""},
  {key: "imageid3", imgSrc: img3, title: "", caption: "3/51", org: ""},
  {key: "imageid4", imgSrc: img4, title: "", caption: "4/51", org: ""},
  {key: "imageid5", imgSrc: img5, title: "", caption: "5/51", org: ""},
  {key: "imageid6", imgSrc: img6, title: "", caption: "6/51", org: ""},
  {key: "imageid7", imgSrc: img7, title: "", caption: "7/51", org: ""},
  {key: "imageid8", imgSrc: img8, title: "", caption: "8/51", org: ""},
  {key: "imageid9", imgSrc: img9, title: "", caption: "9/51", org: ""},
  {key: "imageid10", imgSrc: img10, title: "", caption: "10/51", org: ""},
  {key: "imageid11", imgSrc: img11, title: "", caption: "11/51", org: ""},
  {key: "imageid12", imgSrc: img12, title: "", caption: "12/51", org: ""},
  {key: "imageid13", imgSrc: img13, title: "", caption: "13/51", org: ""},
  {key: "imageid14", imgSrc: img14, title: "", caption: "14/51", org: ""},
  {key: "imageid15", imgSrc: img15, title: "", caption: "15/51", org: ""},
  {key: "imageid16", imgSrc: img16, title: "", caption: "16/51", org: ""},
  {key: "imageid17", imgSrc: img17, title: "", caption: "17/51", org: ""},
  {key: "imageid18", imgSrc: img18, title: "", caption: "18/51", org: ""},
  {key: "imageid19", imgSrc: img19, title: "", caption: "19/51", org: ""},
  {key: "imageid20", imgSrc: img20, title: "", caption: "20/51", org: ""},
  {key: "imageid21", imgSrc: img21, title: "", caption: "21/51", org: ""},
  {key: "imageid22", imgSrc: img22, title: "", caption: "22/51", org: ""},
  {key: "imageid23", imgSrc: img23, title: "", caption: "23/51", org: ""},
  {key: "imageid24", imgSrc: img24, title: "", caption: "24/51", org: ""},
  {key: "imageid25", imgSrc: img25, title: "", caption: "25/51", org: ""},
  {key: "imageid26", imgSrc: img26, title: "", caption: "26/51", org: ""},
  {key: "imageid27", imgSrc: img27, title: "", caption: "27/51", org: ""},
  {key: "imageid28", imgSrc: img28, title: "", caption: "28/51", org: ""},
  {key: "imageid29", imgSrc: img29, title: "", caption: "29/51", org: ""},
  {key: "imageid30", imgSrc: img30, title: "", caption: "30/51", org: ""},
  {key: "imageid31", imgSrc: img31, title: "", caption: "31/51", org: ""},
  {key: "imageid32", imgSrc: img32, title: "", caption: "32/51", org: ""},
  {key: "imageid33", imgSrc: img33, title: "", caption: "33/51", org: ""},
  {key: "imageid34", imgSrc: img34, title: "", caption: "34/51", org: ""},
  {key: "imageid35", imgSrc: img35, title: "", caption: "35/51", org: ""},
  {key: "imageid36", imgSrc: img36, title: "", caption: "36/51", org: ""},
  {key: "imageid37", imgSrc: img37, title: "", caption: "37/51", org: ""},
  {key: "imageid38", imgSrc: img38, title: "", caption: "38/51", org: ""},
  {key: "imageid39", imgSrc: img39, title: "", caption: "39/51", org: ""},
  {key: "imageid40", imgSrc: img40, title: "", caption: "40/51", org: ""},
  {key: "imageid41", imgSrc: img41, title: "", caption: "41/51", org: ""},
  {key: "imageid42", imgSrc: img42, title: "", caption: "42/51", org: ""},
  {key: "imageid43", imgSrc: img43, title: "", caption: "43/51", org: ""},
  {key: "imageid44", imgSrc: img44, title: "", caption: "44/51", org: ""},
  {key: "imageid45", imgSrc: img45, title: "", caption: "45/51", org: ""},
  {key: "imageid46", imgSrc: img46, title: "", caption: "46/51", org: ""},
  {key: "imageid47", imgSrc: img47, title: "", caption: "47/51", org: ""},
  {key: "imageid48", imgSrc: img48, title: "", caption: "48/51", org: ""},
  {key: "imageid49", imgSrc: img49, title: "", caption: "49/51", org: ""},
  {key: "imageid50", imgSrc: img50, title: "", caption: "50/51", org: ""},
  {key: "imageid51", imgSrc: img51, title: "", caption: "51/51", org: ""}
];