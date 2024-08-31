import * as React from "react"

import Layout from "../components/layout"
import ImageZoomInOut from "../components/ImageZoomInOut"
import ImageModal from "../components/imageModal"

import "../styles/base/global.css"

import mapImg from "../images/content/kartta-1892.jpg"

const Kartta1892Page = () => {
  return (
    <Layout titleText="Hämeenlinnan kaupunki n. 1892">
      <ImageModal imagePath={mapImg} imageStyle="fullWidthImageStyle" titleText="Keskusta-alue vuonna 1892"></ImageModal>

      <ImageZoomInOut imageUrl={mapImg}></ImageZoomInOut>
     
      <p className="firstLetterStyle">Hämeenlinnan kaupungin kartta noin vuodelta 1892 esittelee tarkasti Hämeenlinnan keskustan 1800-luvun lopun rakennuskannan. 
        Karttaan on erilaisilla väreillä merkitty kivi- ja puurakennukset. Myös rakennusten kattomateriaali selviää kartasta, esim. turvekatot on merkitty omalla 
        värillään. Kadunnimet on kirjoitettu karttaan suomen kielellä. Kartan tekijästä ei ole tietoa. Alkuperäinen kartta on Hämeenlinnan kaupunginarkistossa.</p>
      <p className="italicSmallStyle">Julkaisija: Hämeenlinnan kaupunginkirjasto / Hämeenlinnan kaupunginarkisto (HKA 26a)</p>

    </Layout>
  )
}
export const Head = () => <title>Ojoisten ja Saaristen latokartanoiden kartta 1778</title> // metadata

// Export product component
export default Kartta1892Page