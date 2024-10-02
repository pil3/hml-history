import * as React from "react"

import Layout from "../components/layout"
import ImageCard from "../components/imageCard"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import "../styles/base/global.css"

const AhvenistoPage = () => {
  return (
    <Layout titleText="Kuvia Ahvenistolta">
      <div className="interTitleStyle">1900-luku</div>
      <Row>
        <Col sm={12} md={6} className="marginYStyle">
          <ImageCard
            imgPath="https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259093&index=0&size=large"
            title="1905"
            copyright="Lahden museot - Böök A. Th - CC BY 4.0"
            caption="Valokuvaajana toimineen Böökin tyttäret todennäköisesti Ahveniston rannalla kesällä 1905."
          ></ImageCard>
        </Col>
      </Row>
      <div className="interTitleStyle">1930-luku</div>
      <Row>
        <Col sm={12} md={6} className="marginYStyle">
          <ImageCard
            imgPath="https://digi.kirjastot.fi/files/fullsize/6f21fe590fc642a26b611abae871afa2.jpg"
            title="1930-luku"
            copyright="Hämeenlinnan kaupunginkirjasto - Julkaistu painettuna: Hämeenlinna : Suomalainen kirjakauppa Oy"
            caption="Etelä-Hämeen kuntien yhteinen keuhkotautiparantola rakennettiin Ahvenistonharjulle 1930-luvun alussa. Arkkitehti Toivo Paatelan suunnittelema 
                        funktionalistinen parantolarakennus oli huomattavan suuri omana aikanaan, sillä sairaalapaikkoja oli peräti 250. Rakennuksen torniosa parvekkeineen 
                        on kahdeksankerroksinen, siipiosat ovat kuusi- ja neljäkerroksiset. Hoitomuotoina tuohon aikaan oli lepo, ravitseva ruoka ja männyntuoksuisen ilman 
                        hengittäminen sairaalan isoilla parvekkeilla. Ahveniston parantolassa hoidettiin tuberkuloosipotilaita vielä 1960-luvun lopulla."
          ></ImageCard>
        </Col>
        <Col sm={12} md={6} className="marginYStyle">
          <ImageCard
            imgPath="https://digi.kirjastot.fi/files/fullsize/d3bc2931ce0ce3d9b67623ebfce9ad84.jpg"
            title="1930-luku"
            copyright="Hämeenlinnan kaupunginkirjasto - Julkaistu painettuna: Hämeenlinna : Suomalainen kirjakauppa Oy"
            caption="Hämeenlinnan ensimmäinen 12-paikkainen keuhkotautisten hoitola sijaitsi Myllymäessä Hämeenlinnan naisyhdistyksen vuokraamissa tiloissa. 
                        Seuraava 20-paikkainen sairaala oli Sairiossa E. A. Talpon suunnittelemassa rakennuksessa, jossa myöhemmin on toiminut päiväkoti. Etelä-Hämeen 
                        kuntien yhdessä ylläpitämä Ahveniston parantola eli Etelä-Hämeen keuhkotautiparantola rakennettiin Ahveniston harjulle 1930-luvun alussa. 
                        Rakennus edustaa funktionalistista tyyliä, ja sen suunnitteli arkkitehti Toivo Paatela. Rakennuksen kulmassa on kahdeksankerroksinen torniosa 
                        parvekkeineen. Uuteen parantolaan saatiin tilat peräti 250 potilaalle. Lisäsiipeen rakennettiin kylpy- ja valohoitotilat ja yläkerrokseen lastenosasto 
                        leikki- ja koulutussaleineen. Pääsisäänkäynnin edustaa koristi suihkulähde. Sodan aikana parantolaa käytettiin sotasairaalana, minkä jälkeen 
                        tuberkuloosin hoito jatkui Ahvenistonharjulla aina 1960-luvun lopulle asti."
          ></ImageCard>
        </Col>
      </Row>
      <div className="interTitleStyle">1950-luku</div>
      <Row>
        <Col sm={12} md={6} className="marginYStyle">
          <ImageCard
            imgPath="https://www.finna.fi/Cover/Show?source=Solr&id=postimuseo.850864c7-7728-464e-9cb1-6f1af8073412&index=0&size=large"
            title="1952"
            copyright="Postimuseo - Postimuseon kokoelmat - CC BY-NC-SA 4.0"
            caption="Ahveniston postikioski Helsingin olympialaisten aikaan."
          ></ImageCard>
        </Col>

      </Row>
      <Row>
        <Col sm={12} md={6} className="marginYStyle">
          <ImageCard
            imgPath="https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.63ACB9225079818ED16DCB71DD397B25&index=0&size=large"
            title="1955"
            copyright="Museovirasto - Saarinen, UA, kuvaaja - CC BY 4.0"
            caption="Miss Eurooppa 1955 kauneuskilpailu oli Suomessa 3.-11.6.1955. Kuvassa Miss Ranska Monique Lambert."
          ></ImageCard>
        </Col>
        <Col sm={12} md={6} className="marginYStyle">
          <ImageCard
            imgPath="https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.526A5D289C252BAD536E134ECA9FB7A6&index=0&size=large"
            title="1955"
            copyright="Museovirasto - Saarinen, UA, kuvaaja - CC BY 4.0"
            caption="Miss Eurooppa 1955 kauneuskilpailu oli Suomessa 3.-11.6.1955. Kuvassa Miss Ranska Monique Lambert."
          ></ImageCard>
        </Col>
      </Row>
      <div className="interTitleStyle">1970-luku</div>
      <Row>
        <Col sm={12} md={6} className="marginYStyle">
          <ImageCard
            imgPath="https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.816ECC778AD0F3C1D4FB492260866E41&index=0&size=large"
            title="1975"
            copyright="Museovirasto - Historian kuvakokoelma - Kanerva, Teuvo, kuvaaja - CC BY 4.0"
            caption=""
          ></ImageCard>
        </Col>
      </Row>
      
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Kuvia Ahvenistolta</title> // metadata

export default AhvenistoPage