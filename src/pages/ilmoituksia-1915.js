import * as React from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from "../components/layout"
import Image from 'react-bootstrap/Image';
import * as pageStyles from "../styles/pages/ilmoituksia-1927.module.css"

import img1 from "../images/content/guide15-ad-1.jpg"
import img2 from "../images/content/guide15-ad-2.jpg"
import img3 from "../images/content/guide15-ad-3.jpg"
import img4 from "../images/content/guide15-ad-4.jpg"
import img5 from "../images/content/guide15-ad-5.jpg"
import img6 from "../images/content/guide15-ad-6.jpg"
import img7 from "../images/content/guide15-ad-7.jpg"
import img8 from "../images/content/guide15-ad-8.jpg"
import img9 from "../images/content/guide15-ad-9.jpg"
import img10 from "../images/content/guide15-ad-10.jpg"
import img11 from "../images/content/guide15-ad-11.jpg"
import img12 from "../images/content/guide15-ad-12.jpg"
import img13 from "../images/content/guide15-ad-13.jpg"
import img14 from "../images/content/guide15-ad-14.jpg"
import img15 from "../images/content/guide15-ad-15.jpg"
import img16 from "../images/content/guide15-ad-16.jpg"
import img17 from "../images/content/guide15-ad-17.jpg"
import img18 from "../images/content/guide15-ad-18.jpg"
import img19 from "../images/content/guide15-ad-19.jpg"


const Ilmoituksia27Page = () => {
  return (
    <Layout titleText="Ilmoituksia vuodelta 1915">
      <Row className={pageStyles.rowStyle}>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img1} alt="Kuva 1" rounded /></Col>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img2} alt="Kuva 2" rounded /></Col>
      </Row>
      <Row className={pageStyles.rowStyle}>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img3} alt="Kuva 3" rounded /></Col>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img4} alt="Kuva 4" rounded /></Col>
      </Row>
      <Row className={pageStyles.rowStyle}>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img5} alt="Kuva 5" rounded /></Col>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img6} alt="Kuva 6" rounded /></Col>
      </Row>
      <Row className={pageStyles.rowStyle}>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img7} alt="Kuva 7" rounded /></Col>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img8} alt="Kuva 8" rounded /></Col>
      </Row>
      <Row className={pageStyles.rowStyle}>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img9} alt="Kuva 9" rounded /></Col>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img10} alt="Kuva 10" rounded /></Col>
      </Row>
      <Row className={pageStyles.rowStyle}>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img11} alt="Kuva 11" rounded /></Col>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img12} alt="Kuva 12" rounded /></Col>
      </Row>
      <Row className={pageStyles.rowStyle}>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img13} alt="Kuva 13" rounded /></Col>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img14} alt="Kuva 14" rounded /></Col>
      </Row>
      <Row className={pageStyles.rowStyle}>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img15} alt="Kuva 15" rounded /></Col>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img16} alt="Kuva 16" rounded /></Col>
      </Row>
      <Row className={pageStyles.rowStyle}>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img17} alt="Kuva 17" rounded /></Col>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img18} alt="Kuva 18" rounded /></Col>
      </Row>
      <Row className={pageStyles.rowStyle}>
        <Col sm={12} md={6} className={pageStyles.colStyle}><Image className={pageStyles.imgStyle} src={img19} alt="Kuva 19" rounded /></Col>
      </Row>
    </Layout>
  )
}
export const Head = () => <title>Ilmoituksia vuodelta 1927</title> // metadata

// Export product component
export default Ilmoituksia27Page