import * as React from "react"

import Layout from "../components/layout";
import ImageSlider from "../components/imageSlider"

import Image from "react-bootstrap/Image"

import "../styles/base/global.css"

import divider from "../assets/divider.png"

import img1915_1 from "../images/content/guide15/ad-1.jpg"
import img1915_2 from "../images/content/guide15/ad-2.jpg"
import img1915_3 from "../images/content/guide15/ad-3.jpg"
import img1915_4 from "../images/content/guide15/ad-4.jpg"
import img1915_5 from "../images/content/guide15/ad-5.jpg"
import img1915_6 from "../images/content/guide15/ad-6.jpg"
import img1915_7 from "../images/content/guide15/ad-7.jpg"
import img1915_8 from "../images/content/guide15/ad-8.jpg"
import img1915_9 from "../images/content/guide15/ad-9.jpg"
import img1915_10 from "../images/content/guide15/ad-10.jpg"
import img1915_11 from "../images/content/guide15/ad-11.jpg"
import img1915_12 from "../images/content/guide15/ad-12.jpg"
import img1915_13 from "../images/content/guide15/ad-13.jpg"
import img1915_14 from "../images/content/guide15/ad-14.jpg"
import img1915_15 from "../images/content/guide15/ad-15.jpg"
import img1915_16 from "../images/content/guide15/ad-16.jpg"
import img1915_17 from "../images/content/guide15/ad-17.jpg"
import img1915_18 from "../images/content/guide15/ad-18.jpg"
import img1915_19 from "../images/content/guide15/ad-19.jpg"
import img1927_1 from "../images/content/guide27/ad-1.jpg"
import img1927_2 from "../images/content/guide27/ad-2.jpg"
import img1927_3 from "../images/content/guide27/ad-3.jpg"
import img1927_4 from "../images/content/guide27/ad-4.jpg"
import img1927_5 from "../images/content/guide27/ad-5.jpg"
import img1927_6 from "../images/content/guide27/ad-6.jpg"
import img1927_7 from "../images/content/guide27/ad-7.jpg"
import img1927_8 from "../images/content/guide27/ad-8.jpg"
import img1927_9 from "../images/content/guide27/ad-9.jpg"
import img1927_10 from "../images/content/guide27/ad-10.jpg"
import img1927_11 from "../images/content/guide27/ad-11.jpg"
import img1927_12 from "../images/content/guide27/ad-12.jpg"
import img1927_13 from "../images/content/guide27/ad-13.jpg"
import img1927_14 from "../images/content/guide27/ad-14.jpg"
import img1927_15 from "../images/content/guide27/ad-15.jpg"
import img1927_16 from "../images/content/guide27/ad-16.jpg"
import img1927_17 from "../images/content/guide27/ad-17.jpg"
import img1927_18 from "../images/content/guide27/ad-18.jpg"
import img1927_19 from "../images/content/guide27/ad-19.jpg"
import img1927_20 from "../images/content/guide27/ad-20.jpg"
import img1927_21 from "../images/content/guide27/ad-21.jpg"
import img1927_22 from "../images/content/guide27/ad-22.jpg"
import img1927_23 from "../images/content/guide27/ad-23.jpg"
import img1927_24 from "../images/content/guide27/ad-24.jpg"
import img1927_25 from "../images/content/guide27/ad-25.jpg"
import img1927_26 from "../images/content/guide27/ad-26.jpg"
import img1927_27 from "../images/content/guide27/ad-27.jpg"
import img1927_28 from "../images/content/guide27/ad-28.jpg"
import img1927_29 from "../images/content/guide27/ad-29.jpg"
import img1927_30 from "../images/content/guide27/ad-30.jpg"
import img1927_31 from "../images/content/guide27/ad-31.jpg"
import img1927_32 from "../images/content/guide27/ad-32.jpg"
import img1927_33 from "../images/content/guide27/ad-33.jpg"
import img1927_34 from "../images/content/guide27/ad-34.jpg"
import img1927_35 from "../images/content/guide27/ad-35.jpg"
import img1927_36 from "../images/content/guide27/ad-36.jpg"
import img1927_37 from "../images/content/guide27/ad-37.jpg"
import img1927_38 from "../images/content/guide27/ad-38.jpg"
import img1927_39 from "../images/content/guide27/ad-39.jpg"
import img1927_40 from "../images/content/guide27/ad-40.jpg"


const MainoksiaPage = () => {
  return (
    <Layout titleText="Mainoksia">
      <ImageSlider imgArray={imageArray1915} showDots={false} wide={false}></ImageSlider>
      <Image src={divider} className="dividerStyle" />
      <ImageSlider imgArray={imageArray1927} showDots={false} wide={false}></ImageSlider>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Mainoksia</title> // metadata

// Export product component
export default MainoksiaPage

const imageArray1915 = [
  {key: "imageid1", imgSrc: img1915_1, title: "1915", caption: "", org: ""},
  {key: "imageid2", imgSrc: img1915_2, title: "1915", caption: "", org: ""},
  {key: "imageid3", imgSrc: img1915_3, title: "1915", caption: "", org: ""},
  {key: "imageid4", imgSrc: img1915_4, title: "1915", caption: "", org: ""},
  {key: "imageid5", imgSrc: img1915_5, title: "1915", caption: "", org: ""},
  {key: "imageid6", imgSrc: img1915_6, title: "1915", caption: "", org: ""},
  {key: "imageid7", imgSrc: img1915_7, title: "1915", caption: "", org: ""},
  {key: "imageid8", imgSrc: img1915_8, title: "1915", caption: "", org: ""},
  {key: "imageid9", imgSrc: img1915_9, title: "1915", caption: "", org: ""},
  {key: "imageid10", imgSrc: img1915_10, title: "1915", caption: "", org: ""},
  {key: "imageid11", imgSrc: img1915_11, title: "1915", caption: "", org: ""},
  {key: "imageid12", imgSrc: img1915_12, title: "1915", caption: "", org: ""},
  {key: "imageid13", imgSrc: img1915_13, title: "1915", caption: "", org: ""},
  {key: "imageid14", imgSrc: img1915_14, title: "1915", caption: "", org: ""},
  {key: "imageid15", imgSrc: img1915_15, title: "1915", caption: "", org: ""},
  {key: "imageid16", imgSrc: img1915_16, title: "1915", caption: "", org: ""},
  {key: "imageid17", imgSrc: img1915_17, title: "1915", caption: "", org: ""},
  {key: "imageid18", imgSrc: img1915_18, title: "1915", caption: "", org: ""},
  {key: "imageid19", imgSrc: img1915_19, title: "1915", caption: "", org: ""}
];
const imageArray1927 = [
  {key: "imageid1", imgSrc: img1927_1, title: "1927", caption: "", org: ""},
  {key: "imageid2", imgSrc: img1927_2, title: "1927", caption: "", org: ""},
  {key: "imageid3", imgSrc: img1927_3, title: "1927", caption: "", org: ""},
  {key: "imageid4", imgSrc: img1927_4, title: "1927", caption: "", org: ""},
  {key: "imageid5", imgSrc: img1927_5, title: "1927", caption: "", org: ""},
  {key: "imageid6", imgSrc: img1927_6, title: "1927", caption: "", org: ""},
  {key: "imageid7", imgSrc: img1927_7, title: "1927", caption: "", org: ""},
  {key: "imageid8", imgSrc: img1927_8, title: "1927", caption: "", org: ""},
  {key: "imageid9", imgSrc: img1927_9, title: "1927", caption: "", org: ""},
  {key: "imageid10", imgSrc: img1927_10, title: "1927", caption: "", org: ""},
  {key: "imageid11", imgSrc: img1927_11, title: "1927", caption: "", org: ""},
  {key: "imageid12", imgSrc: img1927_12, title: "1927", caption: "", org: ""},
  {key: "imageid13", imgSrc: img1927_13, title: "1927", caption: "", org: ""},
  {key: "imageid14", imgSrc: img1927_14, title: "1927", caption: "", org: ""},
  {key: "imageid15", imgSrc: img1927_15, title: "1927", caption: "", org: ""},
  {key: "imageid16", imgSrc: img1927_16, title: "1927", caption: "", org: ""},
  {key: "imageid17", imgSrc: img1927_17, title: "1927", caption: "", org: ""},
  {key: "imageid18", imgSrc: img1927_18, title: "1927", caption: "", org: ""},
  {key: "imageid19", imgSrc: img1927_19, title: "1927", caption: "", org: ""},
  {key: "imageid20", imgSrc: img1927_20, title: "1927", caption: "", org: ""},
  {key: "imageid21", imgSrc: img1927_21, title: "1927", caption: "", org: ""},
  {key: "imageid22", imgSrc: img1927_22, title: "1927", caption: "", org: ""},
  {key: "imageid23", imgSrc: img1927_23, title: "1927", caption: "", org: ""},
  {key: "imageid24", imgSrc: img1927_24, title: "1927", caption: "", org: ""},
  {key: "imageid25", imgSrc: img1927_25, title: "1927", caption: "", org: ""},
  {key: "imageid26", imgSrc: img1927_26, title: "1927", caption: "", org: ""},
  {key: "imageid27", imgSrc: img1927_27, title: "1927", caption: "", org: ""},
  {key: "imageid28", imgSrc: img1927_28, title: "1927", caption: "", org: ""},
  {key: "imageid29", imgSrc: img1927_29, title: "1927", caption: "", org: ""},
  {key: "imageid30", imgSrc: img1927_30, title: "1927", caption: "", org: ""},
  {key: "imageid31", imgSrc: img1927_31, title: "1927", caption: "", org: ""},
  {key: "imageid32", imgSrc: img1927_32, title: "1927", caption: "", org: ""},
  {key: "imageid33", imgSrc: img1927_33, title: "1927", caption: "", org: ""},
  {key: "imageid34", imgSrc: img1927_34, title: "1927", caption: "", org: ""},
  {key: "imageid35", imgSrc: img1927_35, title: "1927", caption: "", org: ""},
  {key: "imageid36", imgSrc: img1927_36, title: "1927", caption: "", org: ""},
  {key: "imageid37", imgSrc: img1927_37, title: "1927", caption: "", org: ""},
  {key: "imageid38", imgSrc: img1927_38, title: "1927", caption: "", org: ""},
  {key: "imageid39", imgSrc: img1927_39, title: "1927", caption: "", org: ""},
  {key: "imageid40", imgSrc: img1927_40, title: "1927", caption: "", org: ""}
];