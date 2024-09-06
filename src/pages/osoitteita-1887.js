import * as React from "react"

import Layout from "../components/layout";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import "../styles/base/global.css"

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
      <Row>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img1} alt="Kuva 1" rounded /></Col>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img2} alt="Kuva 2" rounded /></Col>
      </Row>
      <Row>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img3} alt="Kuva 3" rounded /></Col>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img4} alt="Kuva 4" rounded /></Col>
      </Row>
      <Row>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img5} alt="Kuva 5" rounded /></Col>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img6} alt="Kuva 6" rounded /></Col>
      </Row>
      <Row>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img7} alt="Kuva 7" rounded /></Col>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img8} alt="Kuva 8" rounded /></Col>
      </Row>
      <Row>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img9} alt="Kuva 9" rounded /></Col>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img10} alt="Kuva 10" rounded /></Col>
      </Row>
      <Row>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img11} alt="Kuva 11" rounded /></Col>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img12} alt="Kuva 12" rounded /></Col>
      </Row>
      <Row>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img13} alt="Kuva 13" rounded /></Col>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img14} alt="Kuva 14" rounded /></Col>
      </Row>
      <Row>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img15} alt="Kuva 15" rounded /></Col>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img16} alt="Kuva 16" rounded /></Col>
      </Row>
      <Row>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img17} alt="Kuva 17" rounded /></Col>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img18} alt="Kuva 18" rounded /></Col>
      </Row>
      <Row>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img19} alt="Kuva 19" rounded /></Col>
        <Col sm={12} md={6} className="marginYStyle"><Image className="centeredImageStyle" src={img20} alt="Kuva 20" rounded /></Col>
      </Row>
      <Row>
      <p className="italicSmallStyle">Kansalliskirjaston digitaaliset aineistot, Hämeenlinnan Osoite ja Ilmoitus Kalenteri, 1887 </p>
      </Row>
    </Layout>
  )
}
export const Head = () => <title>Osoitteita vuodelta 1887</title> // metadata

// Export product component
export default Osoitteita1887Page