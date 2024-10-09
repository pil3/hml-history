import * as React from "react"

import Layout from "../components/layout"
import ImageCard from "../components/imageCard"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import "../styles/base/global.css"

import alanko from "../images/content/people/matti-alanko.jpg"

const PeoplePage = () => {
  return (
    <Layout titleText="Ihmisiä">
      <h3>Heidän mukaansa on Hämeenlinnassa nimetty tie:</h3>
      <Row>
      <Row>
        <Col sm={12} md={6} className="marginYStyle">
          <ImageCard
            imgPath="https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.6DEDFD788A3BF180323E3A0F668BBB5C&index=0&size=large"
            title="Birger Magnusson"
            copyright="Museovirasto - Historian kuvakokoelma - Antellin kokoelmat/Wadströmin kokoelma- CC BY 4.0"
            caption="Birger Maununpoika eli Birger-jaarli syntyi n. vuonna 1200 ja kuoli 21. lokakuuta 1266. Hän kuului mahtavaan Bjälbo-sukuun. Birger-jaarli teki ruotsalaisen Eerikinkronikan mukaan Suomeen laajan sotaretken (ns. toinen ristiretki), 
            jonka seurauksena ainakin Häme liitettiin Ruotsin valtakuntaan. Retki on ajoitettu joko vuoteen 1239 tai 1249. Saksalaisen Lyypekin kronikan mukaan Birger alisti Suomen Ruotsin herruuteen. Hämeen linnan rakennustyöt aloitettiin toisen ristiretken seurauksena."
          ></ImageCard>
        </Col>
      </Row>
        <Col sm={12} md={6} className="marginYStyle">
          <ImageCard
            imgPath="https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.98193D379BADCE89F9B699B1206B96E3&index=0&size=large"
            title="Arvi A. Karisto"
            copyright="Museovirasto - Historian kuvakokoelma - Kyytinen, Pekka, kuvaaja - CC BY 4.0"
            caption="Arvi Aleksanteri Karisto (sukunimi vuoteen 1905 asti Karlsson) syntyi 31. elokuuta 1879 ja kuoli 23. toukokuuta 1958 Hämeenlinnassa. Hän oli suomalainen kirjankustantaja ja hämeenlinnalaisen kustannusliike Arvi A. Karisto Oy:n perustaja."
          ></ImageCard>
        </Col>
        <Col sm={12} md={6} className="marginYStyle">
          <ImageCard
            imgPath={alanko}
            title="Matti Alanko"
            copyright=""
            caption="Matti Edvard Alanko (sukunimi vuoteen 1906 asti Helander) syntyi 17. kesäkuuta 1889 ja kuoli 16. tammikuuta 1963 Hämeenlinnassa. Hän oli suomalainen lehtiyhtiön toimitusjohtaja ja kunnallisneuvos, joka toimi vuosikymmeniä Hämeenlinnan kunnalliselämässä. 
              Raittiusmiehenä tunnettu Alanko sai nimikkokadun Hämeenlinnan Kaurialaan vuonna 1979."
          ></ImageCard>
        </Col>
      </Row>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Kuvia Ihmisistä</title> // metadata

export default PeoplePage