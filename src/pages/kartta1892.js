import * as React from "react"

import Layout from "../components/layout"
import ImageModal from "../components/imageModal"

import Image from "react-bootstrap/Image"

import "../styles/base/global.css"

import divider from "../assets/divider.png"
import mapImg from "../images/content/kartta-1892.jpg"

const Kartta1892Page = () => {
  return (
    <Layout titleText="Hämeenlinnan kaupunki n. 1892">
      <ImageModal imagePath={mapImg} imageStyle="centeredImage" titleText="Keskusta-alue vuonna 1892"></ImageModal>
      <Image src={divider} className="dividerStyle" />
      <br />
      <p className="initialCap">Hämeenlinnan kaupungin kartta noin vuodelta 1892 esittelee tarkasti Hämeenlinnan keskustan 1800-luvun lopun rakennuskannan. 
        Karttaan on erilaisilla väreillä merkitty kivi- ja puurakennukset. Myös rakennusten kattomateriaali selviää kartasta, esim. turvekatot on merkitty omalla 
        värillään. Kadunnimet on kirjoitettu karttaan suomen kielellä. Kartan tekijästä ei ole tietoa. Alkuperäinen kartta on Hämeenlinnan kaupunginarkistossa.</p>
      <p className="caption">Julkaisija: Hämeenlinnan kaupunginkirjasto / Hämeenlinnan kaupunginarkisto (HKA 26a)</p>
      <Image src={divider} className="dividerStyle rotate" />
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Kartta 1892</title> // metadata

// Export product component
export default Kartta1892Page