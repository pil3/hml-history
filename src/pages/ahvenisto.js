import * as React from "react"

import Layout from "../components/layout"
import ImageModal from "../components/imageModal"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import "../styles/base/global.css"

const AhvenistoPage = () => {
  return (
    <Layout titleText="Kuvia Ahvenistolta">
      <Row><div className="interTitleStyle">1900</div></Row>  
      <Row className="marginYStyle">
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle maxHeightStyle"
            imagePath="https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259093&index=0&size=large"
            titleText="1905"
            detailsText="Valokuvaaja Böökin tytöt Ahveniston rannalla kesällä 1905."
            copyrightText="Lahden museot - Böök A. Th - CC BY 4.0"
          />
        </Col>
      </Row>
      <Row><div className="interTitleStyle">1930</div></Row>  
      <Row className="marginYStyle">
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/6f21fe590fc642a26b611abae871afa2.jpg"
            titleText="1930-luku"
            detailsText="Etelä-Hämeen kuntien yhteinen keuhkotautiparantola rakennettiin Ahvenistonharjulle 1930-luvun alussa. Arkkitehti Toivo Paatelan suunnittelema 
                        funktionalistinen parantolarakennus oli huomattavan suuri omana aikanaan, sillä sairaalapaikkoja oli peräti 250. Rakennuksen torniosa parvekkeineen 
                        on kahdeksankerroksinen, siipiosat ovat kuusi- ja neljäkerroksiset. Hoitomuotoina tuohon aikaan oli lepo, ravitseva ruoka ja männyntuoksuisen ilman 
                        hengittäminen sairaalan isoilla parvekkeilla. Ahveniston parantolassa hoidettiin tuberkuloosipotilaita vielä 1960-luvun lopulla."
            copyrightText="Hämeenlinnan kaupunginkirjasto - Julkaistu painettuna: Hämeenlinna : Suomalainen kirjakauppa Oy"
          />
        </Col>
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/d3bc2931ce0ce3d9b67623ebfce9ad84.jpg"
            titleText="1930-luku"
            detailsText="Hämeenlinnan ensimmäinen 12-paikkainen keuhkotautisten hoitola sijaitsi Myllymäessä Hämeenlinnan naisyhdistyksen vuokraamissa tiloissa. 
                        Seuraava 20-paikkainen sairaala oli Sairiossa E. A. Talpon suunnittelemassa rakennuksessa, jossa myöhemmin on toiminut päiväkoti. Etelä-Hämeen 
                        kuntien yhdessä ylläpitämä Ahveniston parantola eli Etelä-Hämeen keuhkotautiparantola rakennettiin Ahveniston harjulle 1930-luvun alussa. 
                        Rakennus edustaa funktionalistista tyyliä, ja sen suunnitteli arkkitehti Toivo Paatela. Rakennuksen kulmassa on kahdeksankerroksinen torniosa 
                        parvekkeineen. Uuteen parantolaan saatiin tilat peräti 250 potilaalle. Lisäsiipeen rakennettiin kylpy- ja valohoitotilat ja yläkerrokseen lastenosasto 
                        leikki- ja koulutussaleineen. Pääsisäänkäynnin edustaa koristi suihkulähde. Sodan aikana parantolaa käytettiin sotasairaalana, minkä jälkeen 
                        tuberkuloosin hoito jatkui Ahvenistonharjulla aina 1960-luvun lopulle asti."
            copyrightText="Hämeenlinnan kaupunginkirjasto - Julkaistu painettuna: Hämeenlinna : Suomalainen kirjakauppa Oy"
          />
        </Col>
      </Row>
      <Row><div className="interTitleStyle">1950</div></Row>  
      <Row className="marginYStyle">
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle maxHeightStyle"
            imagePath="https://www.finna.fi/Cover/Show?source=Solr&id=postimuseo.850864c7-7728-464e-9cb1-6f1af8073412&index=0&size=large"
            titleText="1952"
            detailsText="Ahveniston postikioski Helsingin olympialaisten aikaan."
            copyrightText="Postimuseo - Postimuseon kokoelmat - CC BY-NC-SA 4.0"
          />
        </Col>

      </Row>
      <Row className="marginYStyle">
      <Col>
          <ImageModal
            imageStyle="centeredImageStyle maxHeightStyle"
            imagePath="https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.63ACB9225079818ED16DCB71DD397B25&index=0&size=large"
            titleText="1955"
            detailsText="Miss Eurooppa 1955 kauneuskilpailu oli Suomessa 3.-11.6.1955. Kuvassa Miss Ranska Monique Lambert."
            copyrightText="Museovirasto - Saarinen, UA, kuvaaja - CC BY 4.0"
          />
        </Col>
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle maxHeightStyle"
            imagePath="https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.526A5D289C252BAD536E134ECA9FB7A6&index=0&size=large"
            titleText="1955"
            detailsText="Miss Eurooppa 1955 kauneuskilpailu oli Suomessa 3.-11.6.1955. Kuvassa Miss Ranska Monique Lambert."
            copyrightText="Museovirasto - Saarinen, UA, kuvaaja - CC BY 4.0"
          />
        </Col>
      </Row>
      
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Kuvia Ahvenistolta</title> // metadata

export default AhvenistoPage