import * as React from "react"

import Layout from "../components/layout"
import ImageCard from "../components/imageCard"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import "../styles/base/global.css"

const PeoplePage = () => {
  return (
    <Layout titleText="Ihmisiä">
      {/* <div className="interTitleStyle">1900-luku</div> */}
      <Row>
        <Col sm={12} md={6} className="marginYStyle">
          <ImageCard
            imgPath="https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.98193D379BADCE89F9B699B1206B96E3&index=0&size=large"
            title="Arvi A. Karisto, 1952"
            copyright="Museovirasto - Historian kuvakokoelma - Kyytinen, Pekka, kuvaaja - CC BY 4.0"
            caption="Arvi Aleksanteri Karisto (sukunimi vuoteen 1905 asti Karlsson) syntyi 31. elokuuta 1879 ja kuoli 23. toukokuuta 1958 Hämeenlinnassa. Hän oli suomalainen kirjankustantaja ja hämeenlinnalaisen kustannusliike Arvi A. Karisto Oy:n perustaja."
          ></ImageCard>
        </Col>
      </Row>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Kuvia Ihmisistä</title> // metadata

export default PeoplePage