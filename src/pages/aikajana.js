import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout"
import TimelineEvent from "../components/timelineEvent";

/* image imports
-------------------------------------------------------------*/
import Img1831 from "../images/content/timeline-1831.jpg"
import Img1879 from "../images/content/timeline-1879.jpg"
import Img1862 from "../images/content/timeline-1862.jpg"

const AikajanaPage = () => {
  return (
    <Layout titleText="Hämeenlinnan Aikajana">
      <TimelineEvent eventYear="1200"></TimelineEvent>
      <TimelineEvent />
      <TimelineEvent eventTitle="Linnavuoriketjun rakentaminen" eventYear="1220"
      eventInfo={<div><p>Kansantarujen mukaan Janakkalassa sijaitseva Hakoisten linnavuori olisi ollut varhaisin Hämeen linna. 
        Linnavuoriketjua käytettiin 1220-luvulla puolustamista varten idästä tulevaa hyökkääjää vastaan. Osa linnoituksista on
        ollut käytössä viikinkiajoista lähtien. Esimerkiksi Aulangon linnavuori ilmeisesti hävitettiin kun Hämeen linnaa ryhdyttiin 
        rakentamaan lähistölle.
        </p> </div>}></TimelineEvent>
      <TimelineEvent />
      <TimelineEvent eventTitle="Puulinnoitteen rakentaminen" eventYear="1249"
      eventInfo={<div><p>Birger Jaarli rakennutti Ruununporin eli Tavastborgin linnan ristiretkensä yhteydessä. Linnoitus valmistui todennäköisesti vuonna 1249.
        </p> </div>}></TimelineEvent>
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent eventYear="1300"></TimelineEvent>
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent eventYear="1400"></TimelineEvent>
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent eventTitle="Tiililinnan rakennustyöt alkuun" eventYear="1472"
      eventInfo={<div><p>Hämeen linna oli näihin aikoihin Ruotsin itäisin linnoitus. Aikaisemman puuvarustuksen ei katsottu olevan riittävä idästä tulevaa vihollista 
        vastaan, joten Hämeen linnaa alettiin muuttamaan tiililinnaksi 1400-luvun loppupuolella.
        </p> </div>}></TimelineEvent>
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent eventYear="1500"></TimelineEvent>
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent eventYear="1600"></TimelineEvent>
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent eventTitle="Kaupunkioikeudet" eventYear="1639"
      eventInfo={<div><p>Keskiajalla kaupunkeja perustettiin enimmäkseen rannikoille. Syyt olivat kaupalliset. Verotus ja ulkomaankaupan hallinnointi oli näin helpommin toteutettavissa.
        Sisämaahan ei ollut tarvetta perustaa kaupunkeja, koska niiden liikenneyhteydet olivat huonot kaupankäyntiä ajatellen. Tästä syystä suomen sisämaan kaupungistuminen tapahtui keskiajan 
        jälkeen hitaasti.
        </p>
        <p>
        Tammikuussa vuonna 1639 kaupunkioikeudet saaneena Hämeenlinna on maamme vanhin sisämaakaupunki ja ensimmäinen leimallisesti suomenkielinen kaupunki. Rannikon kaupungit olivat 
        ruotsin- tai monikielisiä. Kaupunkioikeudet myönsi Suomen kenraalikuvernööri, kreivi Pietari Brahe. Samana vuonna kreivi Brahe myönsi kaupunkioikeudet myös Savonlinnalle, mutta 
        kaupunki ei saanut tuolloin vielä nimeä ja oikeudetkin peruttiin myöhemmin.
        </p> </div>}></TimelineEvent>
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent eventYear="1700"></TimelineEvent>
      <TimelineEvent eventTitle="Venäläiset saapuvat" eventYear="1713"
      eventInfo={<div><p>Isonvihan aikana venäläiset sotajoukot ottivat haltuunsa linnan ja kaupungin sekä polttivat pappilan ja suuren osan kaupunkia, jonka asukkaat olivat paenneet maaseudulle. 
        Pidettyään kaupunkia ja linnaa hallussaan seitsemän vuotta, venäläiset sotajoukot jättivät ne takaisin Ruotsin hallitukselle v. 1720, jonka jälkeen paenneet kaupunkilaiset palasivat kaupunkiin
        ja alkoivat rakentamaan poltettuja ja häviteltyjä talojaan.
        </p> </div>}></TimelineEvent>
      <TimelineEvent />
      <TimelineEvent eventTitle="Kaupunki paloi toisen kerran" eventYear="1739"
      eventInfo={<div><p>Kaupunki oli juuri saatu venäläisten jäljiltä kuntoon, kun kesäkuun 8. päivänä tuli tuhosi raatihuoneen sekä kaupungin 33 rakennetusta talosta 24. Kaupungin porvarit olivat
        satttumoisin juuri samana päivänä Turussa ostamassa suolaa ja palatessaan heitä vastassa oli lähinnä savuavia raunioita.
        </p> </div>}></TimelineEvent>
        <TimelineEvent eventTitle="Venäläiset saapuvat jälleen" eventYear="1742"
      eventInfo={<div><p>Pikkuvihan aikana venäläiset sotajoukot ottivat jälleen linnan ja kaupungin haltuunsa. Viranomaiset katsoivat, että puolustustaistelut olisivat turhia ylivoimaista vihollista
        vastaan. Venäläiset lähtivät jälleen seuraavana vuonna jättäen tapansa mukaan jälkeensä raunioituneen kaupungin. Heidän mukaansa lähti myös kirkon hopeiset alttariastiat.
        </p> </div>}></TimelineEvent>
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent eventTitle="Kustaa III siirtää kaupungin etelämmäksi" eventYear="1777"
      eventInfo={<div><p>Kaupunkilaiset elivät tukalia aikoja, sillä suurin osa kaupunkia oli poltettu tai hävitetty ja kaupunkilaisia kiellettiin korkean sakon uhalla rakentamasta uudelleen hävitettyjä talojaan,
        koska hallitus oli todennut, että kaupunki sijaitsi liian lähellä linnaa ja oli siksi muutettava toiseen paikkaan.</p>
        <p>Kustaan käväistessä työasioilla hämeenlinnassa hän kävi katselemassa maisemia Pyövelinmäen laella. Pohjoisessa Hattulan suunnalla tienoo näytti
        soveliaalta ja kuningas pohti kaupungin siirtämistä linnan kupeesta sinne, mutta kaupunkilaisten painostuksesta kaupunki lopulta päätettiin siirtää 
        Niementaustan mäelle Saaristen latokartanon maille. Siirtoa nykyiselle paikalleen puolsi myös se, että tällöin kaupunki olisi tykinkantaman päässä linnasta.
        </p> </div>}></TimelineEvent>
        <TimelineEvent eventTitle="Kustaa III katkaisee jalkansa" eventYear="1783"
        eventInfo={<div><p>Kustaa käväisi jälleen Hämeenlinnassa kesällä 1783. Käydessään tarkastamassa Parolaan kokoontuneita Suomen sotajoukkoja, hän putosi hevosen selästä 
          ja taittoi toisen jalkansa. Tämän johdosta hän makasi kaupungissa toipilaana muutaman viikon, sekä sopi sinä aikana uuden kivikirkon rakentamisesta ja lahjoitti 
          merkittävän summan tulevan kirkon kuparikaton hankkimista varten. Ehtona oli, että kirkko rakennettaisi hänen hankkimien piirrustusten mukaan. 

        </p> </div>}></TimelineEvent>
      <TimelineEvent />
      <TimelineEvent eventYear="1800"></TimelineEvent>
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent eventTitle="Mikko polttaa lähes koko kaupungin" eventYear="1831" imageData={ Img1831 } 
      cc="Juseliuksen talon sijainti (Palotorvi 1903, Hämeenlinnan kaupunginkirjasto)"
      eventInfo={<div><p>Hämeenlinna paloi 14.9. Kauppias Juseliuksen talon renki Mikko oli tullut humalassa kotiin, 
        jolloin kauppias oli kehoittanut tätä menemään nukkumaan. Mikko poistuikin talliparvelle ja sytytettyään piippunsa 
        hän itse oli sammunut ja tuli levisi kuivia heiniä pitkin polttaen lopulta kaupungin 165:sta rakennetusta tontista kokonaisuudessaan 102. 
        Mikko menehtyi tulipalossa.
      </p> 
      <p>
        Varsinaista paloa kesti n. 12 tuntia, mutta vielä kuusi päivää palon jälkeen kyti tuli palaneen kaupungin raunioissa. Palaneista taloista vain 9 oli vakuutettu, 
        joten suurin osa kaupunkilaisista jäi puille paljaille. Aluksi kodittomat majoitettiin säästyneisiin taloihin ja hätäapukomitea ryhtyi ottamaan vastaan lahjoituksia 
        ja jakamaan apua sitä tarvitseville. Kaikissa Suomen kirkoissa ryhdyttiin keräämään kolehtia, Turusta tuotiin tonneittain jauhoja ja koko Venäjän valtakunnassa 
        toimeenpantiin rahankeräys hämeenlinnalaisten hyväksi. Lisäksi kaupunkilaisille myönnettiin verovapaus 10 vuodeksi.
      </p>
      <p>Juseliuksen talo sijaitsi Hallituskadun varrella torin luoteiskulmassa:</p>
      </div>}></TimelineEvent>
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent eventTitle="Lemminkäinen vetää junan Hämeenlinnaan" eventYear="1862" imageData={ Img1862 } 
      cc="Lemminkäinen - A1 veturi (Hämäläinen -lehdessä 31.1.1862 julkaistu piirroskuva)"
      eventInfo={<div><p>Ensimmäinen radan pohjoispäähän asti ajettu vihkiäisjuna saapui Hämeenlinnaan 31. tammikuuta 1862 kello 11 aamupäivällä. Lemminkäinen-veturin 
        vetämään junaan oli kytketty useita vaunuja, joissa oli yhteensä 30 kutsuvierasta. Matkalippujen hinnasto julkaistiin helmikuussa ja ensimmäinen aikataulu maaliskuussa. 
        Radan viralliset avajaiset pidettiin 17. maaliskuuta, joka on nykyään VR:n syntymäpäivä. Radan avaamisen aikaan matka Helsingistä Hämeenlinnaan kesti 4 tuntia 40 minuuttia.
        </p> </div>}></TimelineEvent>
      <TimelineEvent eventTitle="Hämeen Sanomien perustaminen" eventYear="1879" imageData={ Img1879 } 
      cc="Kaarlo J. Blomstedt (Daniel Nyblin / Museovirasto, CC BY 4.0)"
      eventInfo={<div><p>Suomen vanhin yhä samalla nimellä toimiva suomenkielinen sanomalehti Hämeen Sanomat perustettiin Hämeenlinnassa vuonna 1879. 
        Näytenumero ilmestyi 12. joulukuuta. 
        </p>
        <p>Kuvassa lehden perustaja rehtori, latinankielisen kirjallisuuden kääntäjä ja valtiopäivämies Kaarlo J. Blomstedt.
        </p> </div>}></TimelineEvent>
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent eventYear="1900"></TimelineEvent>
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
      <TimelineEvent />
    </Layout>
  );
};
export const Head = () => (
  <>
    <html lang="fi" />
    <title>Aikajana</title>
  </>
)
export default AikajanaPage
