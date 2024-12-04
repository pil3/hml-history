import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"
import DateDivider from "../components/dateDivider"

import "../styles/base/global.css"

import Divider from "../assets/divider.svg"

const Crimes1914Page = () => {
  return (
    <Layout titleText="Hämeen Sanomat, 1914">
      <h2>Arveluttavia tapahtumia</h2>
      
      <Divider className="dividerStyle" />
      <p className="centeredStyle boldStyle" style={{margin:"8px 0"}}>Lauantai, 3.1.1914</p>
      <Article titleText="Ankara tappelu Muolassa">
        <h5>20 henkeä haawoittunut.</h5>
        <p>Tapaninpäiwän iltana wietti Muolan Punnustien nuorisoseura iltaman sikäläisellä palokunnantalolla. Heti iltaman alkaessa nosti joukko juopuneita hirweän tappelun. Tappelun 
            kiihkeimmillään ollessa otti siihen osaa noin 100 henkeä. Aseina käyttiwät puukkoja, nyrkkirautoja, lyijypamppuja, tuolia, pöytiä, rewolwereja, halkoja, seipäitä, partaweitsiä 
            ja hawukirweitä. Sen mukaan kuin tähän asti on tiedossa, sai Wille Uimi-niminen mies sywän puukonhaawan rintaansa, Jalmari Monoselta lyötiin puukolla wasemman käden sormet poikki 
            ja suuri haawa olkapäähän, Mikko Pekonen sai ammottawan haawan hartioihinsa, Jalmari Tikkanen kolme puukonhaawaa päähänsä. Eräältä mieheltä taas lyötiin pois toinen korwa juuriaan 
            myöten ja löydettiin se tappelun jälkeen lattialta. Paikalla ollut Muolan apulaisnimismies 4 poliisin kera oli aiwan woimaton. Nyttemmin on 4 pahinta pukaria wangittu.</p>
      </Article>

      <DateDivider date="Torstai, 8.1.1914" />
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

      <DateDivider date="Tiistai, 13.1.1914"/>
      <Article titleText="Mies paleltunut kuoliaaksi.">
        <p>Keskiwiikkona iltapäiwällä lähti palstatil. poika Janne Malin Wanajan pit. Kappolan kylästä kyyditsemään metsäkoulun oppilasta Kaarlo Kallioo hewosella Ewolle. Kuljettuaan noin 5 km. oli Malin kieltäytynyt edemmäksi 
          lähtemästä, josta tuli pieni riita. Tällöin saawuttiwat 2 saman koulun oppilasta Kallion, jolloin tämä pyysi päästä Syrjäntaka. Malin jäi hewosineen tielle. Wähän ajan kuluttua ajoi Malin ohi sekä taas wastaan, jonka jälkeen 
          ei Kallio nähnyt Malinta. Kun Malinia ei seuraawan päiwän iltana kuulunut kotiin, alkoi kotiwäki kaiwata ja saadakseen tietoa, soittiwat Ewon opistolle, missä Kallio kertoi, mitä hän asiasta tiesi. Tämän jälkeen lähtiwät Malinin 
          isä ja konstaapeli Mäkinen lauantai-aamuna Syrjäntaan majataloon ja saiwat kuulla, että puolenpäiwän aikaan mies heiniä hakiessaan oli tawannut irtonaisen hewosen lähellä sitä paikkaa, johon Malin ajoi. Hewonen, joka oli sidottu 
          puuhun, tunnettiin M. omaksi. Malin itse löydettiin tien suusta, metsästä kuolleena. Kumpikin sekä kyyditsijä että kyydittäwä lienewät olleen humalassa.</p>
      </Article>

      <DateDivider date="Tosrstai, 22.1.1914"/>
      <Article titleText="Kuolemanrangaistuksen käytäntöönottamista">
        <h5>törkeistä murhista tuomitessa suosittelee nimim. T. M. K. „U. Aurassa".</h5>
        <p>Kirjoittaja huomauttaa ensin, että törkeät wäkiwallanteot eiwät ole meillä wiime wuosina wähentyneet, waan päinwastoin lisääntyneet. Hänen mielestään waikuttaa tähän osaltaan myös se, että rangaistuksia liian liewästi 
          sowelletaan -  Mitä merkitsee tätä nykyä murhamiehelle elinkautinen kuritushuone? Werraten mukawaa oleskelua waltion kustannuksella näinä taloudellisesti waikeina aikoina.</p>
        <p>Toista on, jos näistä rikollisen toiweista tehdään lyhyt loppu: asetetaan hänen silmäinsä eteen mahdollisuus, että teosta woi mennä henki ja elämä. Täytyy olla jo parantumattoman paatunut, joka henkensä jättää ainoastaan 
          sen uskon waraan, ettei joudu teostaan kiinni.</p>
        <p>Se siweellinen willintyminen, jota Tuusulan kaksoismurha ja monet muut yhtä pöyristyttäwät kalmantyöt osoittawat, waatiwat woimakasta wastawaikutusta. Taliooniperiaate: <span className="quote">joka weljensä weren wuodattaa, 
          hänen werensä pitää myöskin wuodatettaman</span>, on otettawa käytäntöön. Sitä waatii paitsi turwallisuus, murhatun omaisten ja yhteiskunnan oikeutettu sowituksen tunnekin.</p>
        <p>Kuolemantuomiotakin on taidolla käytettäwä. Asetta ei saa kuluttaa. Mutta törkeät murhat owat kuolemalla sowitettawat. Tieto yhdenkin kuolemantuomion täytäntöönpanosta on herättäwä terweellistä kauhua uusien hirmutöiden 
          suunnittelijoissa, sen sijaan että kuoleman-rangaistuksenuhka, jota ei koskaan toteuteta, on wain omansa lewittämään käsitystä lain woimattomuudesta. Senwuoksi, tuomarit, soweltakaa kuolemanrangaistusta törkeissä murhissa. 
          Sitä waatii tätä nykyä yleinen oikeuskäsitys.</p>
        
      </Article>

     

      <br></br>
      <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/titles/0356-2751?display=THUMB&year=1914">Linkki vuosikertaan 1914</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Rikoksia 1914</title> // metadata

export default Crimes1914Page 