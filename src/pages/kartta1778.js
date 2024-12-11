import * as React from "react"

import Layout from "../components/layout"
import ImageModal from "../components/imageModal"
import ImageCompare from "../components/ImageCompare"

import "../styles/base/global.css"

import mapImg from "../images/content/kartta-1778.jpg"
import oldImg from "../images/content/kartta-1778-old.jpg"
import newImg from "../images/content/kartta-1778-new.jpg"

const Kartta1778Page = () => {
  return (
    <Layout titleText="Ojoisten ja Saaristen latokartanoiden kartta">
      <div className="interTitle">1778</div>
      <ImageModal imagePath={mapImg} imageStyle="centeredImageStyle" titleText="Keskusta-alue vuonna 1778"></ImageModal>
      <div className="interTitle">1778 / 2020</div>
      <ImageCompare imgBot={oldImg} imgTop={newImg} altText="Keskusta vuonna 1778 ja nykyään"></ImageCompare>
      <div className="verticalSpacer"></div>
      <p className="firstLetterStyle">Karttaotteessa näkyvät Ojoisten ja Saaristen latokartanoiden eli kruunun virkatalojen maitten omistukset isonjaon jälkeen. Maanjaot ja myöhempien vuosien mittaukset kokosi 
        vuonna 1778 maanmittari Pehr Kiellman. Kiellman tuli 1760 Hämeeseen komission maanmittariksi eli isojakoa toimittamaan. Hän teki myös Hämeenlinnan uuteen kaupunkiin tonttijaon. 
        Vuonna 1775 kaupungin uudeksi sijoituspaikaksi päätettiin Saaristen kruununtilan maat. Kustaa III vahvisti sijoituksen vuonna 1776. Linnoitustoimen päällikkö Axel von Arbin sai 
        tehtäväksi laatia kaupungin asemakaavan. Vuonna 1777 valmistui ensimmäinen Arbinin yksityiskohtainen suunnitelma Hämeenlinnan asemakaavaa varten ja v. 1778 "parannettu" 
        suunnitelma. Pehr Kiellmanin karttaote Ojoisten ja Saaristen virkatalojen maista on samalta vuodelta kuin Arbinin korjattu suunnitelma. Lopullisen kaavan kuningas hyväksyi 1778. 
        Kaupungin siirto suoritettiin nopeasti. Uusi asemakaava oli paalutettu maastoon jo ilmeisesti vuoden 1778 aikana. Vuodelta 1780 on olemassa myös maanmittari Kiellmanin 
        tonttijakokartta Hämeenlinnasta. Alkuperäisen kartan koko on 79 x 121,5 cm ja sitä säilytetään kuultokangaskopiona Hämeenlinnan kaupunginarkistossa.</p>
      <p className="caption">Julkaisija: Hämeenlinnan kaupunginkirjasto</p>
    </Layout>
  );
};
export const Head = () => <title>Entinen Hämeenlinna - Kartta 1778</title> // metadata

// Export product component
export default Kartta1778Page