import * as React from "react"

import Layout from "../components/layout"
import ImageSlider from "../components/imageSlider"

import Image from "react-bootstrap/Image"

import "../styles/base/global.css"

import divider from "../assets/divider.png"
import frontPage from "../images/content/phonebook1926/frontpage.jpg"
import imgPricing from "../images/content/phonebook1926/countryside-prices.jpg"
import img1 from "../images/content/phonebook1926/phone-1.jpg"
import img2 from "../images/content/phonebook1926/phone-2.jpg"
import img3 from "../images/content/phonebook1926/phone-3.jpg"
import img4 from "../images/content/phonebook1926/phone-4.jpg"
import img5 from "../images/content/phonebook1926/phone-5.jpg"
import img6 from "../images/content/phonebook1926/phone-6.jpg"
import img7 from "../images/content/phonebook1926/phone-7.jpg"
import img8 from "../images/content/phonebook1926/phone-8.jpg"
import img9 from "../images/content/phonebook1926/phone-9.jpg"
import img10 from "../images/content/phonebook1926/phone-10.jpg"
import img11 from "../images/content/phonebook1926/phone-11.jpg"
import img12 from "../images/content/phonebook1926/phone-12.jpg"
import img13 from "../images/content/phonebook1926/phone-13.jpg"
import img14 from "../images/content/phonebook1926/phone-14.jpg"
import img15 from "../images/content/phonebook1926/phone-15.jpg"
import img16 from "../images/content/phonebook1926/phone-16.jpg"
import img17 from "../images/content/phonebook1926/phone-17.jpg"
import img18 from "../images/content/phonebook1926/phone-18.jpg"
import img19 from "../images/content/phonebook1926/phone-19.jpg"
import img20 from "../images/content/phonebook1926/phone-20.jpg"
import img21 from "../images/content/phonebook1926/phone-21.jpg"
import img22 from "../images/content/phonebook1926/phone-22.jpg"
import img23 from "../images/content/phonebook1926/phone-23.jpg"
import img24 from "../images/content/phonebook1926/phone-24.jpg"
import img25 from "../images/content/phonebook1926/phone-25.jpg"
import img26 from "../images/content/phonebook1926/phone-26.jpg"
import img27 from "../images/content/phonebook1926/phone-27.jpg"
import img28 from "../images/content/phonebook1926/phone-28.jpg"
import img29 from "../images/content/phonebook1926/phone-29.jpg"
import img30 from "../images/content/phonebook1926/phone-30.jpg"
import img31 from "../images/content/phonebook1926/phone-31.jpg"
import img32 from "../images/content/phonebook1926/phone-32.jpg"
import img33 from "../images/content/phonebook1926/phone-33.jpg"
import img34 from "../images/content/phonebook1926/phone-34.jpg"
import img35 from "../images/content/phonebook1926/phone-35.jpg"
import img36 from "../images/content/phonebook1926/phone-36.jpg"
import img37 from "../images/content/phonebook1926/phone-37.jpg"
import img38 from "../images/content/phonebook1926/phone-38.jpg"
import img39 from "../images/content/phonebook1926/phone-39.jpg"
import img40 from "../images/content/phonebook1926/phone-40.jpg"
import img41 from "../images/content/phonebook1926/phone-41.jpg"
import img42 from "../images/content/phonebook1926/phone-42.jpg"


const Puhelin1926Page = () => {
  return (
    <Layout titleText="Puhelinluettelo - 1926">
      <ImageSlider imgArray={imageArray} showDots={false} wide={false}></ImageSlider>
      <br />
      <Image src={divider} className="dividerStyle" />

      <h3>HÄMEENLINNAN PUHELINOSAKEYHTIÖN</h3>
      <h4>Keskiötä ja johtoja käyttävälle yleisölle huomautetaan, että seuraavat määräykset ovat tarkoin noudatettavat.</h4>
      <br/>
      <p>Työn suoritusta koskevat muistutukset tehdään heti tarkastajalle, puhelin 300. Koneessa tai johdossa huomattuja vikoja koskevat muistutukset, samoin tilaukset uusista johdoista ja koneista Puhelinkonttoriin, puhelin 260.</p>
      <p>Keskusaseman henkilökuntaa ei ole viivytettävä millään muilla keskusteluilla, kuin mitä suorastaan yhdistämiseen kuuluu.</p>
      <p>Puhelua pyydettäessä on numero ehdottomasti mainittava, muussa tapauksessa ei keskiö ole velvollinen puhelua välittämään.</p>
      <p>Tulipalosta on heti ilmoitettava Paloasemalle puh. 94, eli keskiölle, joka siitä antaa tiedon asianomaisille.</p>
      <p>Jos jommalle kummalle kahdesta kaupungista keskustelevasta saapuu puhelun pyynti kaukojohdolta, katkaistaan paikallispuhelu ja jälkimäinen välitetään.</p>
      <p>Puhelinverkon ja keskusaseman hyvän hoidon sekä puhelujen kaikinpuolin mallikelpoisen välittämisen vuoksi on varsin välttämätöntä, että vähäpätöisimmistäkin epäkohdista ilmoitetaan toimitusjohtajalle, vaan jotta sellaiset ilmoitukset 
        tuottaisivat toivotun parannuksen, ovat ne tehtävät heti sen jälkeen, kuin epäkohta on huomattu.</p>
      <p>Hämeenlinnan Puhelinosakeyhtiö ei vastaa niistä häiriöistä ja vahingoista, jotka aiheutuvat vahvavirtajohtojen kosketuksesta puhelinjohtoihin tai niiden synnyttämistä sähköisistä ilmiöistä.</p>

      <h3>YLEISIÄ SÄÄNTÖJÄ PUHELIMEN KÄYTTÄMISESTÄ.</h3>
      <p>1. Katso että kuulopuhelin (mikropuhelin) aina on paikallaan kun puhelinta ei käytetä; muuten pilaantuu mikrofoonipatteri.</p>
      <p>2. Tule heti puhelimeen soiton kuultuasi. Kaukojohtopuhelut voivat muuten helposti mennä hukkaan.</p>
      <p>3. Vastaa oman puhelimesi nimellä tai numerolla, eikä vastaamalla »halloo». Tällä tavalla säästyy aikaa. Ellei kuulu mitään vastausta, toista nimi useampia kertoja, mutta älä soita.</p>
      <p>4. Puhu lähellä mikropuhelinta ja sovita äänen vahvuus johdon pituuden mukaan.</p>
      <p>5. Pidä puhelun aikana kuulopuhelin aivan kiinni korvassa.</p>
      <p>6. Jos puhelunvälittäjä ilmoittaa, että parhaillaan kestävä puhelu on keskeytettävä kauko- tai maaseutupuhelun tähden, on heti loppusoitto soitettava. Paikallispuhelu voidaan taas hetkisen kuluttua pyytää uudelleen.</p>
      <p>7. Älä käytä puhelinta ukkosilmalla.</p>
      <p>8. Älä koskaan unohda loppusoittoa (1 à 2 reipasta kiertoa).</p>

      <h3>PUHELINMAKSUT HÄMEENLINNASSA.</h3>
      <p>Tilaajan, joka haluaa saada puhelimensa yhdistetyksi Hämeenlinnan keskusasemaan, tulee lunastaa yksi osake à 500: — mk. jokaista suoraan keskusasemaan yhdistettyä puhelinta kohti.</p>
      <h3>VUOSIMAKSUT VUONNA 1926.</h3>
      <p>Puhelujen luku vuodessa:</p>
      <p>1-1000 500:-</p>
      <p>1001-2000 625:-</p>
      <p>2001-3000 750:-</p>
      <p>3001-4000 900:-</p>
      <p>4001-5000 1000:-</p>
      <p>5001-6000 1100:-</p>
      <p>6001-7000 1200:-</p>
      <p>7001-8000 1300:-</p>
      <p>8001-9000 1400:-</p>
      <p>9001-10000 1500:-</p>
      <p>yli 1000 1600:-</p>
      <p>Vuosimaksu sivupuhelimesta samassa korttelissa 75: — mk., ja eri korttelissa 125: — mk.</p>
      <p>Sivupuhelimen yhdistäminen koneeseen saattaa tapahtua ainoastaan erikoisella sopimuksella ja Hämeenlinnan Puhelinosakeyhtiön luvalla.</p>
      <p>Tilaaja on itse velvollinen kustantamaan puhelinkoneessaan tarvittavat elementit kuin myös suuremmat korjaustyöt, joihin m.m. luetaan kuluneitten osien vaihtaminen uusiin.</p>
      <p>Henkilöt, jotka ainoastaan lyhyemmäksi ajaksi haluavat saada puhelimen, voivat lunastamatta osaketta, saada sen eri sopimuksella.</p>

      <h3>PUHELINYHTEYS HÄMEENLINNAN YMPÄRISTÖN PUHELINKESKUSASEMILLE.</h3>
      <p>Seuraavassa luettelossa tarkemmin mainittuihin paikkoihin on puhelu Hämeenlinnasta maksullinen ja välitetään ne Hämeenlinnan maaseutuosaston kautta.</p>
      <p>Haluttaessa puhelua näihin paikkoihin on tilaajan ensin pyydettävä maaseutu. Kun täältä on vastattu, mainittava se keskiö ja puhelinnumero johon halutaan ja sen jälkeen oma puhelinnumeronsa.</p>
      <p>Kun tämä ilmoitus on tapahtunut saadaan vastaus »ilmoitan», jonka jälkeen kuulotorvi pannaan paikalleen.</p>
      <p>Tilaajalle ilmoitetaan heti kun yhdistäminen on suoritettu, mikä tapahtuu siinä järjestyksessä, missä tilaukset ovat vastaanotetut.</p>
      <p>Puheluaika on viisi minuuttia.</p>
      <p>Puhelumaksut peritään neljännesvuosittain. Tilaajilla, jotka ilman hyväksyttyä syytä jättävät puhelumaksunsa suorittamatta, ei ole senjälkeen oikeutta saada puheluja maaseudulle.</p>
      <p>Kun valtion — ei kunnan — siviili- tai sotilasvirastot haluavat virkapuheluja on siitä puhelua tilattaessa ilmoitettava.</p>

      <Image className="centeredImage" src={imgPricing} alt="Hinnasto"/>

      <h3>YLEISIÄ MÄÄRÄYKSIÄ.</h3>
      <h4>KAUPUNKIENVÄLISILLÄ PUHELINJOHDOILLA</h4>
      <h4>Puhelumahdollisuudet.</h4>
      <p>Puheluja välitetään kaikille paikkakunnille, mihin vaan on teknillisiä mahdollisuuksia, joka riippuu osaksi johtojen pituudesta ja laadusta, osaksi välillä olevien keskusasemien lukumäärästä. Kokemuksen perusteella voidaan suotuisimmassa tapauksessa 
        välittää puhelu korkeintaan viiden keskusaseman kautta, laskettuna tilaajan koneesta vastaanottajan koneeseen.</p>
      
      <h4>Välitysaika.</h4>
      <p>Kaupunkienvälisen yhtiön johdot pidetään yleisön käytettävissä asianomaisille maaseutukeskusasemille määrättynä aukiolo-aikana.</p>

      <h4>Puhelujen tilaus.</h4>
      <p>Tilattaessa kaupunkienvälistä puhelua on tilaajan ensin pyydettävä kaukojohto.</p>
      <p>Paikkakunnalla, missä ei ole erityistä kaupunkienvälistä välitysasemaa, on puhelu tilattava paikallisen keskusaseman kautta.</p>
      <p>Tilaajan pyytäessä kaupunkienvälistä puhelua on ilmoitettava halutun keskusaseman nimi minne puhelu tahdotaan. Kun puhelun välittäjä kysyy: »mistä numerosta ja kenelle» on oma ja haluttu numero siksi selvästi ilmoitettava, että vältetään erehdyksiä. 
        Tilattaessa on määrättävä puheluluokka, muussa tapauksessa välitetään se kuten tavallinen puhelu.</p>
      <p>Jos tavallinen puhelu muutetaan pikapuheluksi, käsitellään se puheluja välitettäessä kuten ensi tilaus.</p>
      <p>Puhelut jaetaan virka- ja yksityispuheluihin.</p>

      <h4>Virkapuhelut.</h4>
      <p>Virkapuheluoikeus on ainoastaan valtion virastoilla ja viranomaisilla.</p>

      <h4>Yksityispuhelut.</h4>
      <p>Yksityispuhelut jaetaan seuraaviin luokkiin: a) tavalliset puhelut, b) pikapuhelut (kiireellinen puh.) c) erittäin kiireelliset puhelut, d) aikapuhelut, e) henkilöpuhelut, f) sanomalehtipuhelut ja g) etuoikeutetut puhelut määrätyille liikkeille 
        (toiminimille).</p>

      <p><span className="bold">Tavalliset puhelut. </span>Tavallisilla puheluilla ymmärretään sellaisia puheluja, jotka välitetään tilauksen mukaisesti siinä järjestyksessä, kun puhelu on ilmoitettu keskusasemalle, ja yhdistetään pyydettyyn numeroon, 
        huomioonottamatta kuka vastaa.</p>
      <p><span className="bold">Pikapuhelu. Kiireellinen puhelu. </span>Pikapuhelu välitetään pyydettyyn numeroon, ennen kaikkia tavallisia puheluja, huomioonottamatta kuka vastaa.</p>
      <p><span className="bold">Erittäin kiireellinen puhelu. </span>Erittäin kiireellinen puhelu välitetään samoin ennen tilattuja kiireellisiä puheluja.</p>
      <p><span className="bold">Aikapuhelu. </span>Aikapuhelut tilataan määrätylle kellonlyönnille.</p>
      <p><span className="bold">Henkilöpuhelut. </span>Henkilöpuhelut ovat määrätylle henkilölle tilattuja puheluja. Henkilöpuhelu voi myöskin olla tavallinen, pika-, erittäin kiireellinen eli aikapuhelu.</p>
      <p><span className="bold">Sanomalehtipuhelut. </span>Sanomalehtipuheluja myönnetään ainoastaan sanomalehti- ja lennätintoimistoille tarkoituksella välittää tiedonantoja ainoastaan sanomalehtiuutisia varten.</p>
      <p><span className="bold">Etuoikeutetut puhelut. </span>Etuoikeutetut puhelut välitetään ennen kiireellisiä puheluja heti virkapuhelujen jälkeen, jotka mahdollisesti ovat tilatut samoilla johdoilla kuin etuoikeutetut pyydetään. Näitä puheluja 
        myönnetään ainoastaan määrätyille toiminimille, jotka Kulkulaitosministeriön päätöksen mukaisesti ovat siihen oikeutettuja.</p>

      <h4>Puhelun pituus.</h4>
      <p>Puheluaika lasketaan 3 minuutin sarjoissa. Mikään puhelu ei saa kestää kuin 3 sarjaa eli 9 minuuttia, jos samalle johdolle on samanaikaisesti tilattu toisia puheluja.</p>
      <p>Puhelu sallitaan jatkua huomautuksen jälkeen 20 sek. Jos puhelu kestää 1/2 minuuttia huomautuksen jälkeen, merkitään se puheluajan lisäksi yhdellä sarjalla. Kaupunkienvälinen puhelu katkaisee paikallisen.</p>

      <h4>Puhelun alku.</h4>
      <p>Puhelun alku lasketaan siitä hetkestä, kun tilaaja on saanut vastaanottokoneesta vastauksen, huomioonottamatta, kuka vastaa.</p>

      <h4>Maksut.</h4>
      <p>Puhelumaksu lasketaan määrätyn hinnaston mukaan, huomioonottamalla puheluluokka ja puhelun pituus 3 minuutin sarjoissa, joka on joko osaksi eli kokonaan käytetty puheluun.</p>
      <p>Puheluluokat veloitetaan seuraavasti:<br/>Tavallinen puhelu, yksinkertaisella maksulla.<br/>Pika (kiireellinen) puhelu, kaksinkertaisella maksulla.<br/>Erittäin kiireellinen puhelu, kolminkertaisella maksulla.<br/>Aikapuhelu kolminkertaisella maksulla.</p>
      <p>Aika- ja henkilöpuheluista veloitetaan sitäpaitsi erityinen tilausmaksu huomioonottamatta puhelun pituutta. Jos ei haluttua henkilöä tavata veloitetaan ainoastaan henkilötilausmaksu yhdellä markalla.</p>

      <h4>Maksujen suoritus.</h4>
      <p>Puhelumaksuilla veloitetaan sitä tilaajaa, jonka koneesta on puhelu tilattu. Puheluista veloitetaan kun vaan on saatu vastaus vastaanottokoneesta, riippumatta kuka vastaa.</p>
      <p>Jollei puhelua voida välittää, syystä että tilaaja ei puheinaan saadessaan ole läsnä, veloitetaan tilaaja kumminkin yksinkertaisesta yksisarjaisesta puhelusta.</p>
      <p>Tilaajan tulee suorittaa puhelumaksunsa vuosineljänneksittäin eli suuremmilla paikkakunnilla kuukausittain.</p>
      <p>Maksu suoritetaan yhtiön konttoriin eli rahastajalle kuittia ja erikoisluetteloja vastaan. Ellei tilaaja ole suorittanut maksuaan 8 päivän kuluessa, kun sitä on vaadittu, on Kaukopuhelin yhtiö oikeutettu sulkemaan tilaajan puhelut yhtiön johdoilla.</p>
      <p>Vaadittaessa toistamiseen, on tilaaja velvollinen maksamaan perimishyvitystä 5% laskumäärästä kumminkin vähintäin 1 mk. ja enintäin 10 mk.</p>
      <p>Kaupunkienvälinen yhtiö on oikeutettu harkinnan mukaisesti vaatimaan takuumaksun muodossa etumaksua.</p>

      <p className="caption">Etelä-Suomen Kaukopuhelin Osakeyhtiö.</p>
 
      <p className="caption">Hämeenlinnan kaupunginkirjasto 1926, Hämeenlinnan puhelinosakeyhtiö </p>
      <Image src={divider} className="dividerStyle rotate" />
      <a className="hyperlink" href="https://digi.kirjastot.fi/files/original/a055024005299ac22e01e536c059dc7a.pdf">Lähde</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Puhelinluettelo 1926</title> // metadata

export default Puhelin1926Page

const imageArray = [
  {key: "imageid0", imgSrc: frontPage, title: "", caption: "", org: ""},
  {key: "imageid1", imgSrc: img1, title: "", caption: "", org: ""},
  {key: "imageid2", imgSrc: img2, title: "", caption: "", org: ""},
  {key: "imageid3", imgSrc: img3, title: "", caption: "", org: ""},
  {key: "imageid4", imgSrc: img4, title: "", caption: "", org: ""},
  {key: "imageid5", imgSrc: img5, title: "", caption: "", org: ""},
  {key: "imageid6", imgSrc: img6, title: "", caption: "", org: ""},
  {key: "imageid7", imgSrc: img7, title: "", caption: "", org: ""},
  {key: "imageid8", imgSrc: img8, title: "", caption: "", org: ""},
  {key: "imageid9", imgSrc: img9, title: "", caption: "", org: ""},
  {key: "imageid10", imgSrc: img10, title: "", caption: "", org: ""},
  {key: "imageid11", imgSrc: img11, title: "", caption: "", org: ""},
  {key: "imageid12", imgSrc: img12, title: "", caption: "", org: ""},
  {key: "imageid13", imgSrc: img13, title: "", caption: "", org: ""},
  {key: "imageid14", imgSrc: img14, title: "", caption: "", org: ""},
  {key: "imageid15", imgSrc: img15, title: "", caption: "", org: ""},
  {key: "imageid16", imgSrc: img16, title: "", caption: "", org: ""},
  {key: "imageid17", imgSrc: img17, title: "", caption: "", org: ""},
  {key: "imageid18", imgSrc: img18, title: "", caption: "", org: ""},
  {key: "imageid19", imgSrc: img19, title: "", caption: "", org: ""},
  {key: "imageid20", imgSrc: img20, title: "", caption: "", org: ""},
  {key: "imageid21", imgSrc: img21, title: "", caption: "", org: ""},
  {key: "imageid22", imgSrc: img22, title: "", caption: "", org: ""},
  {key: "imageid23", imgSrc: img23, title: "", caption: "", org: ""},
  {key: "imageid24", imgSrc: img24, title: "", caption: "", org: ""},
  {key: "imageid25", imgSrc: img25, title: "", caption: "", org: ""},
  {key: "imageid26", imgSrc: img26, title: "", caption: "", org: ""},
  {key: "imageid27", imgSrc: img27, title: "", caption: "", org: ""},
  {key: "imageid28", imgSrc: img28, title: "", caption: "", org: ""},
  {key: "imageid29", imgSrc: img29, title: "", caption: "", org: ""},
  {key: "imageid30", imgSrc: img30, title: "", caption: "", org: ""},
  {key: "imageid31", imgSrc: img31, title: "", caption: "", org: ""},
  {key: "imageid32", imgSrc: img32, title: "", caption: "", org: ""},
  {key: "imageid33", imgSrc: img33, title: "", caption: "", org: ""},
  {key: "imageid34", imgSrc: img34, title: "", caption: "", org: ""},
  {key: "imageid35", imgSrc: img35, title: "", caption: "", org: ""},
  {key: "imageid36", imgSrc: img36, title: "", caption: "", org: ""},
  {key: "imageid37", imgSrc: img37, title: "", caption: "", org: ""},
  {key: "imageid38", imgSrc: img38, title: "", caption: "", org: ""},
  {key: "imageid39", imgSrc: img39, title: "", caption: "", org: ""},
  {key: "imageid40", imgSrc: img40, title: "", caption: "", org: ""},
  {key: "imageid41", imgSrc: img41, title: "", caption: "", org: ""},
  {key: "imageid42", imgSrc: img42, title: "", caption: "", org: ""}
];