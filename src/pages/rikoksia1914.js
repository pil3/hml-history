import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import "../styles/base/global.css"

import Divider from "../assets/divider.svg"
import SubDivider from "../assets/sub-divider.svg"



const Crimes1914Page = () => {
  return (
    <Layout titleText="Hämeen Sanomat, 1914">
      <h2>Rikoksia</h2>
      
      <Divider className="dividerStyle" />
      <h3>Lauantai, 3.1.1914</h3>
      <Article titleText="Ankara tappelu Muolassa">
        <h5>20 henkeä haawoittunut.</h5>
        <p>Tapaninpäiwän iltana wietti Muolan Punnustien nuorisoseura iltaman sikäläisellä palokunnantalolla. Heti iltaman alkaessa nosti joukko juopuneita hirweän tappelun. Tappelun 
            kiihkeimmillään ollessa otti siihen osaa noin 100 henkeä. Aseina käyttiwät puukkoja, nyrkkirautoja, lyijypamppuja, tuolia, pöytiä, rewolwereja, halkoja, seipäitä, partaweitsiä 
            ja hawukirweitä. Sen mukaan kuin tähän asti on tiedossa, sai Wille Uimi-niminen mies sywän puukonhaawan rintaansa, Jalmari Monoselta lyötiin puukolla wasemman käden sormet poikki 
            ja suuri haawa olkapäähän, Mikko Pekonen sai ammottawan haawan hartioihinsa, Jalmari Tikkanen kolme puukonhaawaa päähänsä. Eräältä mieheltä taas lyötiin pois toinen korwa juuriaan 
            myöten ja löydettiin se tappelun jälkeen lattialta. Paikalla ollut Muolan apulaisnimismies 4 poliisin kera oli aiwan woimaton. Nyttemmin on 4 pahinta pukaria wangittu.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Torstai, 8.1.1914</h3>
      <Article titleText="Kaksoisryöstömurha Tuusulassa.">
        <h5>Werityöntekijä todettu.</h5>
        <p>Nyttemmin on saatu todistetuksi, että Forssassa pidätetty Robert Merinen on Tuusulan kamalan werityön tekijä, waikka hän wiimeisiin asti itse on julman työnsä kieltänyt. Tuusulan 
            piirin nimismies Seitola on passittanut Merisen Helsingin etsiwästä osastosta, jossa häntä tähän asti on säilytetty, Hämeenlinnan wankilaan, mistä hänet wiedään tänään Tammelan 
            wälikäräjille wastaamaan Tammelassa tekemästään murtowarkaudesta. Helmikuun alussa, toisten lähemmin määrättäwänä päiwänä, tulee hän lähetettäwäksi wälikäräjille Tuusulaan, 
            wastaamaan sekä Stenwall-puolisoiden murhasta että Tuusulan Rusutjärwen kylässä wuosi sitten tekemästään murtowarkaudesta. Tämän jälkeen lähetetään hänet takaisin Hämeenlinnaan 
            wastaamaan Hämeenlinnan raastuwanoikeudessa kaksi wuotta sitten tekemästään, nyt ilmisaadusta rahawarkaudesta.</p>
        <p>Tämä tunnettu pahantekijä on kotoisin Nurmijärweltä, ja on hän 39-wuotias irtolainen, jota jo ennen on kolme kertaa rangaistu, nim. kahdesti murtowarkaudesta ja kerran 
            pahoinpitelystä. Hän on tunnettujen pahantekijöiden Sinisalon ja Lepän hywiä tuttawia.</p>
      </Article>

     

      <br></br>
      <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/titles/0356-2751?display=THUMB&year=1914">Linkki vuosikertaan 1914</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Rikoksia 1914</title> // metadata

export default Crimes1914Page 