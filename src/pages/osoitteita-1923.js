import * as React from "react"

import Layout from "../components/layout"
import ImageSlider from "../components/imageSlider"

import Image from 'react-bootstrap/Image'

import "../styles/base/global.css"

import frontPage from "../images/content/address1923/front.jpg"
import img1 from "../images/content/address1923/addr-1.jpg"
import img2 from "../images/content/address1923/addr-2.jpg"
import img3 from "../images/content/address1923/addr-3.jpg"
import img4 from "../images/content/address1923/addr-4.jpg"
import img5 from "../images/content/address1923/addr-5.jpg"
import img6 from "../images/content/address1923/addr-6.jpg"
import img7 from "../images/content/address1923/addr-7.jpg"
import img8 from "../images/content/address1923/addr-8.jpg"
import img9 from "../images/content/address1923/addr-9.jpg"
import img10 from "../images/content/address1923/addr-10.jpg"
import img11 from "../images/content/address1923/addr-11.jpg"
import img12 from "../images/content/address1923/addr-12.jpg"
import img13 from "../images/content/address1923/addr-13.jpg"
import img14 from "../images/content/address1923/addr-14.jpg"
import img15 from "../images/content/address1923/addr-15.jpg"
import img16 from "../images/content/address1923/addr-16.jpg"
import img17 from "../images/content/address1923/addr-17.jpg"
import img18 from "../images/content/address1923/addr-18.jpg"
import img19 from "../images/content/address1923/addr-19.jpg"
import img20 from "../images/content/address1923/addr-20.jpg"
import img21 from "../images/content/address1923/addr-21.jpg"
import img22 from "../images/content/address1923/addr-22.jpg"
import img23 from "../images/content/address1923/addr-23.jpg"
import img24 from "../images/content/address1923/addr-24.jpg"
import img25 from "../images/content/address1923/addr-25.jpg"
import img26 from "../images/content/address1923/addr-26.jpg"
import img27 from "../images/content/address1923/addr-27.jpg"
import img28 from "../images/content/address1923/addr-28.jpg"
import img29 from "../images/content/address1923/addr-29.jpg"
import img30 from "../images/content/address1923/addr-30.jpg"
import img31 from "../images/content/address1923/addr-31.jpg"
import img32 from "../images/content/address1923/addr-32.jpg"
import img33 from "../images/content/address1923/addr-33.jpg"
import img34 from "../images/content/address1923/addr-34.jpg"
import img35 from "../images/content/address1923/addr-35.jpg"
import img36 from "../images/content/address1923/addr-36.jpg"
import img37 from "../images/content/address1923/addr-37.jpg"
import img38 from "../images/content/address1923/addr-38.jpg"
import img39 from "../images/content/address1923/addr-39.jpg"
import img40 from "../images/content/address1923/addr-40.jpg"
import img41 from "../images/content/address1923/addr-41.jpg"
import img42 from "../images/content/address1923/addr-42.jpg"
import img43 from "../images/content/address1923/addr-43.jpg"
import img44 from "../images/content/address1923/addr-44.jpg"
import img45 from "../images/content/address1923/addr-45.jpg"
import img46 from "../images/content/address1923/addr-46.jpg"
import img47 from "../images/content/address1923/addr-47.jpg"
import img48 from "../images/content/address1923/addr-48.jpg"
import img49 from "../images/content/address1923/addr-49.jpg"
import img50 from "../images/content/address1923/addr-50.jpg"
import img51 from "../images/content/address1923/addr-51.jpg"
import img52 from "../images/content/address1923/addr-52.jpg"
import img53 from "../images/content/address1923/addr-53.jpg"


const Osoitteita1923Page = () => {
  return (
    <Layout titleText="Osoitteita vuodelta 1923">
      <Image className="centeredImageStyle" src={frontPage} alt="Etusivu"/>
      <ImageSlider imgArray={imageArray} showDots={false} wide={false}></ImageSlider>
      <br></br>
      <p className="captionStyle">Kansalliskirjaston digitaaliset aineistot, Hämeenlinnan osote-kalenteri, 1923-1924 </p>
      <div className="horizontalRule"></div>
      <a className="hyperLinkStyle" href="https://digi.kirjastot.fi/files/original/97dec9a4e859cf2719c5b529de25cd91.pdf">Linkki alkuperäiseen dokumenttiin (pdf)</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Osoitteita 1923</title> // metadata

export default Osoitteita1923Page

const imageArray = [
  {key: "imageid1", imgSrc: img1, title: "A", caption: "1/53", org: ""},
  {key: "imageid2", imgSrc: img2, title: "A", caption: "2/53", org: ""},
  {key: "imageid3", imgSrc: img3, title: "A", caption: "3/53", org: ""},
  {key: "imageid4", imgSrc: img4, title: "B", caption: "4/53", org: ""},
  {key: "imageid5", imgSrc: img5, title: "B, C, D, E", caption: "5/53", org: ""},
  {key: "imageid6", imgSrc: img6, title: "E", caption: "6/53", org: ""},
  {key: "imageid7", imgSrc: img7, title: "E, F, G", caption: "7/53", org: ""},
  {key: "imageid8", imgSrc: img8, title: "G, H", caption: "8/53", org: ""},
  {key: "imageid9", imgSrc: img9, title: "H", caption: "9/53", org: ""},
  {key: "imageid10", imgSrc: img10, title: "H", caption: "10/53", org: ""},
  {key: "imageid11", imgSrc: img11, title: "H", caption: "11/53", org: ""},
  {key: "imageid12", imgSrc: img12, title: "H", caption: "12/53", org: ""},
  {key: "imageid13", imgSrc: img13, title: "H, I", caption: "13/53", org: ""},
  {key: "imageid14", imgSrc: img14, title: "I, J", caption: "14/53", org: ""},
  {key: "imageid15", imgSrc: img15, title: "J", caption: "15/53", org: ""},
  {key: "imageid16", imgSrc: img16, title: "J, K", caption: "16/53", org: ""},
  {key: "imageid17", imgSrc: img17, title: "K", caption: "17/53", org: ""},
  {key: "imageid18", imgSrc: img18, title: "K", caption: "18/53", org: ""},
  {key: "imageid19", imgSrc: img19, title: "K", caption: "19/53", org: ""},
  {key: "imageid20", imgSrc: img20, title: "K", caption: "20/53", org: ""},
  {key: "imageid21", imgSrc: img21, title: "K", caption: "21/53", org: ""},
  {key: "imageid22", imgSrc: img22, title: "K, L", caption: "22/53", org: ""},
  {key: "imageid23", imgSrc: img23, title: "L", caption: "23/53", org: ""},
  {key: "imageid24", imgSrc: img24, title: "L", caption: "24/53", org: ""},
  {key: "imageid25", imgSrc: img25, title: "L", caption: "25/53", org: ""},
  {key: "imageid26", imgSrc: img26, title: "L", caption: "26/53", org: ""},
  {key: "imageid27", imgSrc: img27, title: "L", caption: "27/53", org: ""},
  {key: "imageid28", imgSrc: img28, title: "L", caption: "28/53", org: ""},
  {key: "imageid29", imgSrc: img29, title: "L, M", caption: "29/53", org: ""},
  {key: "imageid30", imgSrc: img30, title: "M", caption: "30/53", org: ""},
  {key: "imageid31", imgSrc: img31, title: "M", caption: "31/53", org: ""},
  {key: "imageid32", imgSrc: img32, title: "M, N", caption: "32/53", org: ""},
  {key: "imageid33", imgSrc: img33, title: "N", caption: "33/53", org: ""},
  {key: "imageid34", imgSrc: img34, title: "N", caption: "34/53", org: ""},
  {key: "imageid35", imgSrc: img35, title: "N, O", caption: "35/53", org: ""},
  {key: "imageid36", imgSrc: img36, title: "P", caption: "36/53", org: ""},
  {key: "imageid37", imgSrc: img37, title: "P, R", caption: "37/53", org: ""},
  {key: "imageid38", imgSrc: img38, title: "R", caption: "38/53", org: ""},
  {key: "imageid39", imgSrc: img39, title: "R, S", caption: "39/53", org: ""},
  {key: "imageid40", imgSrc: img40, title: "S", caption: "40/53", org: ""},
  {key: "imageid41", imgSrc: img41, title: "S", caption: "41/53", org: ""},
  {key: "imageid42", imgSrc: img42, title: "S", caption: "42/53", org: ""},
  {key: "imageid43", imgSrc: img43, title: "S", caption: "43/53", org: ""},
  {key: "imageid44", imgSrc: img44, title: "S", caption: "44/53", org: ""},
  {key: "imageid45", imgSrc: img45, title: "S, T", caption: "45/53", org: ""},
  {key: "imageid46", imgSrc: img46, title: "T", caption: "46/53", org: ""},
  {key: "imageid47", imgSrc: img47, title: "T, U", caption: "47/53", org: ""},
  {key: "imageid48", imgSrc: img48, title: "V", caption: "48/53", org: ""},
  {key: "imageid49", imgSrc: img49, title: "V", caption: "49/53", org: ""},
  {key: "imageid50", imgSrc: img50, title: "V", caption: "50/53", org: ""},
  {key: "imageid51", imgSrc: img51, title: "V", caption: "51/53", org: ""},
  {key: "imageid52", imgSrc: img52, title: "V, Z, Å, Y", caption: "52/53", org: ""},
  {key: "imageid53", imgSrc: img53, title: "Y, Ä, Ö", caption: "53/53", org: ""}
];