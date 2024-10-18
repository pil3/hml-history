import * as React from "react"

import Layout from "../components/layout"
import ImageSlider from "../components/imageSlider"

import "../styles/base/global.css"

import img1 from "../images/content/phonebook1902/phone-1.jpg"
import img2 from "../images/content/phonebook1902/phone-2.jpg"
import img3 from "../images/content/phonebook1902/phone-3.jpg"
import img4 from "../images/content/phonebook1902/phone-4.jpg"
import img5 from "../images/content/phonebook1902/phone-5.jpg"
import img6 from "../images/content/phonebook1902/phone-6.jpg"
import img7 from "../images/content/phonebook1902/phone-7.jpg"
import img8 from "../images/content/phonebook1902/phone-8.jpg"
import img9 from "../images/content/phonebook1902/phone-9.jpg"
import img10 from "../images/content/phonebook1902/phone-10.jpg"
import img11 from "../images/content/phonebook1902/phone-11.jpg"
import img12 from "../images/content/phonebook1902/phone-12.jpg"
import img13 from "../images/content/phonebook1902/phone-13.jpg"
import img14 from "../images/content/phonebook1902/phone-14.jpg"
import img15 from "../images/content/phonebook1902/phone-15.jpg"
import img16 from "../images/content/phonebook1902/phone-16.jpg"
import img17 from "../images/content/phonebook1902/phone-17.jpg"
import img18 from "../images/content/phonebook1902/phone-18.jpg"
import img19 from "../images/content/phonebook1902/phone-19.jpg"
import img20 from "../images/content/phonebook1902/phone-20.jpg"
import img21 from "../images/content/phonebook1902/phone-21.jpg"
import img22 from "../images/content/phonebook1902/phone-22.jpg"
import img23 from "../images/content/phonebook1902/phone-23.jpg"
import img24 from "../images/content/phonebook1902/phone-24.jpg"
import img25 from "../images/content/phonebook1902/phone-25.jpg"
import img26 from "../images/content/phonebook1902/phone-26.jpg"
import img27 from "../images/content/phonebook1902/phone-27.jpg"
import img28 from "../images/content/phonebook1902/phone-28.jpg"
import img29 from "../images/content/phonebook1902/phone-29.jpg"
import img30 from "../images/content/phonebook1902/phone-30.jpg"
import img31 from "../images/content/phonebook1902/phone-31.jpg"
import img32 from "../images/content/phonebook1902/phone-32.jpg"
import img33 from "../images/content/phonebook1902/phone-33.jpg"
import img34 from "../images/content/phonebook1902/phone-34.jpg"


const Puhelin1902Page = () => {
  return (
    <Layout titleText="Puhelinluettelo vuodelta 1902">
      <ImageSlider imgArray={imageArray} showDots={false} wide={false}></ImageSlider>
      <br></br>
      <p className="captionStyle">Hämeenlinnan kaupunginkirjasto 1902, Telefooni luettelo Hämeenlinnan kaupungista ja sen ympäristöstä.</p>
      <br></br>
      <a className="hyperLinkStyle" href="https://digi.kirjastot.fi/files/original/c259ddc92fdab82be816aad497c27765.pdf">Linkki alkuperäiseen dokumenttiin</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Puhelinluettelo 1902</title> // metadata

// Export product component
export default Puhelin1902Page

const imageArray = [
  {key: "imageid1", imgSrc: img1, title: "", caption: "1/34", org: ""},
  {key: "imageid2", imgSrc: img2, title: "", caption: "2/34", org: ""},
  {key: "imageid3", imgSrc: img3, title: "", caption: "3/34", org: ""},
  {key: "imageid4", imgSrc: img4, title: "", caption: "4/34", org: ""},
  {key: "imageid5", imgSrc: img5, title: "", caption: "5/34", org: ""},
  {key: "imageid6", imgSrc: img6, title: "", caption: "6/34", org: ""},
  {key: "imageid7", imgSrc: img7, title: "", caption: "7/34", org: ""},
  {key: "imageid8", imgSrc: img8, title: "", caption: "8/34", org: ""},
  {key: "imageid9", imgSrc: img9, title: "", caption: "9/34", org: ""},
  {key: "imageid10", imgSrc: img10, title: "", caption: "10/34", org: ""},
  {key: "imageid11", imgSrc: img11, title: "", caption: "11/34", org: ""},
  {key: "imageid12", imgSrc: img12, title: "", caption: "12/34", org: ""},
  {key: "imageid13", imgSrc: img13, title: "", caption: "13/34", org: ""},
  {key: "imageid14", imgSrc: img14, title: "", caption: "14/34", org: ""},
  {key: "imageid15", imgSrc: img15, title: "", caption: "15/34", org: ""},
  {key: "imageid16", imgSrc: img16, title: "", caption: "16/34", org: ""},
  {key: "imageid17", imgSrc: img17, title: "", caption: "17/34", org: ""},
  {key: "imageid18", imgSrc: img18, title: "", caption: "18/34", org: ""},
  {key: "imageid19", imgSrc: img19, title: "", caption: "19/34", org: ""},
  {key: "imageid20", imgSrc: img20, title: "", caption: "20/34", org: ""},
  {key: "imageid21", imgSrc: img21, title: "", caption: "21/34", org: ""},
  {key: "imageid22", imgSrc: img22, title: "", caption: "22/34", org: ""},
  {key: "imageid23", imgSrc: img23, title: "", caption: "23/34", org: ""},
  {key: "imageid24", imgSrc: img24, title: "", caption: "24/34", org: ""},
  {key: "imageid25", imgSrc: img25, title: "", caption: "25/34", org: ""},
  {key: "imageid26", imgSrc: img26, title: "", caption: "26/34", org: ""},
  {key: "imageid27", imgSrc: img27, title: "", caption: "27/34", org: ""},
  {key: "imageid28", imgSrc: img28, title: "", caption: "28/34", org: ""},
  {key: "imageid29", imgSrc: img29, title: "", caption: "29/34", org: ""},
  {key: "imageid30", imgSrc: img30, title: "", caption: "30/34", org: ""},
  {key: "imageid31", imgSrc: img31, title: "", caption: "31/34", org: ""},
  {key: "imageid32", imgSrc: img32, title: "", caption: "32/34", org: ""},
  {key: "imageid33", imgSrc: img33, title: "", caption: "33/34", org: ""},
  {key: "imageid34", imgSrc: img34, title: "", caption: "34/34", org: ""}

];