import * as React from "react"

import Layout from "../components/layout"
import ImageCard from "../components/imageCard"

import "../styles/base/global.css"

import alanko from "../images/content/people/matti-alanko.jpg"
import sibelius from "../images/content/people/sibelius.jpg"
import kummila from "../images/content/people/kummila.jpg"

const PeoplePage = () => {
  return (
    <Layout titleText="Ihmisiä">
      <h3>Ihmisiä kadunnimien takana:</h3>
      <ImageCard
        imgPath="https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.6DEDFD788A3BF180323E3A0F668BBB5C&index=0&size=large"
        title="Birger Magnusson"
        copyright="Museovirasto - Historian kuvakokoelma - Antellin kokoelmat/Wadströmin kokoelma- CC BY 4.0"
        caption="Birger Maununpoika eli Birger-jaarli syntyi n. vuonna 1200 ja kuoli 21. lokakuuta 1266. Hän kuului mahtavaan Bjälbo-sukuun. Birger-jaarli teki Suomeen laajan sotaretken (ns. toinen ristiretki), 
        jonka seurauksena ainakin Häme liitettiin Ruotsin valtakuntaan. Retki on ajoitettu joko vuoteen 1239 tai 1249. Saksalaisen Lyypekin kronikan mukaan Birger alisti Suomen Ruotsin herruuteen. Hämeen linnan rakennustyöt aloitettiin toisen ristiretken seurauksena."
      ></ImageCard>
      <ImageCard
        imgPath="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Portr%C3%A4tt._Per_Brahe_d.y._Beck_-_Skoklosters_slott_-_13452.tif/lossy-page1-484px-Portr%C3%A4tt._Per_Brahe_d.y._Beck_-_Skoklosters_slott_-_13452.tif.jpg?20131007180757"
        title="Per Abrahamsson Brahe"
        copyright="David Beck, Public domain, via Wikimedia Commons"
        caption="Pietari Brahe nuorempi syntyi 18. helmikuuta 1602 ja kuoli 12. syyskuuta 1680. Hän oli ruotsalainen valtiomies, sotilas, kreivi ja toimi Suomen kenraalikuvernöörinä kahteen otteeseen. Hän kehitti ja uudisti Suomea merkittävästi. Suomi maana oli Brahen mielestä vauras ja 
          luonnonolot suotuisia, mutta hän sai suomalaisista sellaisen kuvan, että kansalta puuttui sivistystä ja usein myös ahkeruutta. Rannikkoseutujen asukkaita hän piti ahkerina, mutta sisämaan asukkaita hän piti itsepäisinä, alkukantaisina, tottelemattomina, riitaisina, 
          taikauskoisina ja laiskoina. Ensimmäisellä kaudellaan Brahe perusti Hämeenlinnan ja Savonlinnan kaupungit."
      ></ImageCard>
      <ImageCard
        imgPath="https://upload.wikimedia.org/wikipedia/commons/b/b9/Gustav_III%2C_King_of_Sweden%2C_in_armour.jpg?20080827150723"
        title="Gustav III"
        copyright="After Alexander Roslin, Public domain, via Wikimedia Commons"
        caption="Kustaa III syntyi 24. tammikuuta 1746 ja kuoli 29. maaliskuuta 1792 Tukholmassa. Hän oli Ruotsin kuningas vuosina 1771-1792. Kustaa III palautti ylimmän hallitusvallan säädyiltä kuninkaalle, edisti kulttuuria ja kävi sodan Venäjää vastaan. Hänen itsevaltainen 
          hallitsemistapansa aiheutti lopulta vakavan konfliktin aateliston kanssa, ja häntä vastaan syntyi salaliitto, joka johti hänen murhaansa. Kuningas Kustaa III suhtautui suopeasti Hämeenlinnan kaupunkiin, jossa hän vieraili peräti neljästi. Hämeenlinnassa hän muun muassa 
          korjautti pahoin rapistuneen linnan ja siirrätti kaupungin nykyiselle paikalleen."
      ></ImageCard>
        <ImageCard
        imgPath="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Otto_Carl_Rehbinder.tif/lossy-page1-335px-Otto_Carl_Rehbinder.tif.jpg?20231004134427"
        title="Otto Rehbinder"
        copyright="Finnish Heritage Agency, CC BY 4.0, via Wikimedia Commons"
        caption="Otto Carl Rehbinder syntyi 27. huhtikuuta 1797 Rautalammella ja kuoli 13. tammikuuta 1873 Hämeenlinnassa. Hän oli suomalainen salaneuvos, Venäjän armeijan eversti ja Hämeen läänin kuvernööri (1841-1862). Tarmokkaaksi ja velvollisuudentuntoiseksi uudistajaksi osoittautunutta 
        kuvernööri Rehbinderiä pidetään ehkä merkittävimpänä Hämeessä 1800-luvulla toimineista läänin päämiehistä. Erityistä kiinnostusta hän osoitti köyhäinhoidon parantamista, raittiuden edistämistä ja luonnonsuojelua kohtaan, ja hän puuttui usein henkilökohtaisesti havaitsemiinsa epäkohtiin. 
        Residenssikaupunkiinsa Hämeenlinnaan Rehbinder jätti pysyvän jäljen rakennuttamalla vankityövoimalla karusta ja kallioisesta Pyövelinmäestä viehättävän Kaupunginpuiston eli Parkin, joka edelleen on kaupungin suosituimpia ulkoilualueita. 
        Rehbinderin hautamuistomerkki sijaitsee Hämeenlinnan vanhalla hautausmaalla."
      ></ImageCard>
      <ImageCard
        imgPath="https://upload.wikimedia.org/wikipedia/commons/3/3c/Uno_Cygnaeus2.jpg"
        title="Uno Cygnaeus"
        copyright="Public domain, via Wikimedia Commons"
        caption="Uno Cygnaeus syntyi 12. lokakuuta 1810 Hämeenlinnassa ja kuoli 2. tammikuuta 1888 Helsingissä. Hän oli suomalainen pappi, joka tunnetaan Suomen kansakoulun isänä. Cygnaeus muun muassa laati senaatin pyynnöstä Suomen kansakoulutoimesta suorastaan vallankumouksellisen 
        ehdotuksen, jonka mukaan kansakoulusta tulisi kaikille yhteiskuntaluokille ja molemmille sukupuolille yhteinen valtion koulu ja niissä opetettaisiin sekä teoreettisia että käytännöllisiä aineita. Vuonna 1861 hänet nimitettiin kansakoulujen ylitarkastajaksi, missä tehtävässä hän jatkoi kuolemaansa saakka."
      ></ImageCard>
      <ImageCard
        imgPath="https://upload.wikimedia.org/wikipedia/commons/1/1f/Gustaf_Euren.jpg"
        title="Gustaf Eurén"
        copyright="hämewiki, Public domain, via Wikimedia Commons"
        caption="Gustaf Erik Eurén syntyi 20. syyskuuta 1818 Porissa ja kuoli 13. helmikuuta 1872 Hämeenlinnassa. Hän oli suomalainen opettaja, kirjailija ja kielentutkija. Eurén päätyi Hämeenlinnaan valtiovallan määräämänä. Hänen tuli huolehtia uuden lukion perustamisesta. Eurén piti siviilikoulua eli kymnaasia 
          Saaristenkatu 10:ssä vuosina 1858-1872. Samalla hänet nimitettiin historian lehtoriksi, jota työtä hän hoiti elämänsä ehtooseen asti. Eurén perusti Hämeenlinnaan kaupungin ensimmäisen sanomalehden vuonna 1858 ja toimi muiden töidensä ohessa „Hämäläisen” päätoimittajana vuosina 1858-1860 ja 1862-1872."
      ></ImageCard>
      <ImageCard
        imgPath="https://upload.wikimedia.org/wikipedia/commons/4/42/Aleksis_Kivi.jpg?20051216132239"
        title="Aleksis Stenvall"
        copyright="Public domain, via Wikimedia Commons"
        caption="Aleksis Kivi syntyi 10. lokakuuta 1834 Nurmijärvellä ja kuoli 31. joulukuuta 1872 Tuusulassa. Hän kirjoitti kansallisromaanin aseman saavuttaneen romaanin Seitsemän veljestä (1870), näytelmiä, kuten Nummisuutarit (1864), ja runoja. Aleksis Kivi laittoi Seitsemässä veljeksessä Simeonin ja Eeron kokemaan 
          kovia kapakoiden täyttämässä Hämeenlinnassa. Vuonna 1871 sairaalloinen Kivi toimitettiin Lapinlahden mielisairaalaan. Lapinlahdessa Kiven sairaus diagnosoitiin krooniseksi melankoliaksi, jonka arveltiin johtuvan verenvähyydestä, juoppoudesta ja loukatusta kirjailijakunniasta. Hänet kotiutettiin helmikuussa 1872 
          lääkäreiden havaittua, ettei hoidoilla ollut suotuista vaikutusta potilaan kuntoon. Alpertti-veli otti hänet tuolloin asumaan luokseen Tuusulan Syvälahteen, jossa hän kuoli vain 38-vuotiaana."
      ></ImageCard>
      <ImageCard
        imgPath="https://upload.wikimedia.org/wikipedia/commons/3/3f/Fredrika_Wetterhoff.jpg"
        title="Fredrika Wetterhoff"
        copyright="Karl Emil Ståhlberg, Public domain, via Wikimedia Commons"
        caption="Fredrika Sofia Wetterhoff syntyi 14. tammikuuta 1844 Helsingissä ja kuoli 14. huhtikuuta 1905 Hämeenlinnassa. Hän oli suomalainen pedagogi, joka vuonna 1885 perusti nimeään kantavan ompelu- ja kudontakoulun, „Työkoulun”. Fredrika Wetterhoff toimi kotiopettajana 
        Kuljun kartanossa, opiskeli suomen kielen ja kiinnostui kansakoulun perustamisesta Hattulaan. 1872 perhe muutti Hämeenlinnaan, mutta Fredrika lähti Pariisiin opiskelemaan. Myöhemmin Tukholmassa opiskellessaan hän tutustui naisasianaisiin ja työväestön sivistysharrastuksiin 
        ja sai herätteen ryhtyä kehittämään koulutusta kansannaisille. Tästä sai alkunsa idea käsityökoulusta."
      ></ImageCard>
      <ImageCard
        imgPath="https://upload.wikimedia.org/wikipedia/commons/d/d1/Paavo_Cajander_%28Tietosanakirja%29.jpg"
        title="Paul Emil Cajander"
        copyright="Daniel Nyblin, Public domain, via Wikimedia Commons"
        caption="Paavo Cajander syntyi 24. joulukuuta 1846 Hämeenlinnassa ja kuoli 14. kesäkuuta 1913 Helsingissä. Hän oli suomalainen runoilija ja kaikkien aikojen työteliäin suomentaja. Cajanderin oma tuotanto runoilijana oli niukka ja on pääosin jäänyt unohduksiin, mutta suomennoksista 
          suuri osa on säilyttänyt asemansa uudempien suomennosten rinnalla. Näistä mainittakoon Runebergin Vänrikki Stoolin tarinat, Topeliuksen Maamme kirja sekä lukuisat Shakespearen näytelmät."
      ></ImageCard>
      <ImageCard
        imgPath={sibelius}
        title="Johan Christian Julius Sibelius"
        copyright="Linsén Natalia, alkuperäisen kuvan tekijä"
        caption="„Jean” Sibelius syntyi 8. joulukuuta 1865 Hämeenlinnassa ja kuoli 20. syyskuuta 1957 Järvenpäässä. Hänen kansallisromanttinen musiikkinsa oli tärkeässä osassa Suomen kansallisen identiteetin muodostumisessa. Sibelius on kansainvälisesti tunnetuin ja esitetyin 
          suomalainen säveltäjä. Sinfonioiden ja sinfonisten runojen luojana Sibelius oli 1900-luvun merkittävimpiä."
      ></ImageCard>
        <ImageCard
        imgPath="https://upload.wikimedia.org/wikipedia/commons/7/71/Larin-Ky%C3%B6sti_%28Ky%C3%B6sti_Larson%29.jpg"
        title="Karl Gustaf Larson"
        copyright="Finnish Museum of Photography, Public domain, via Wikimedia Commons"
        caption="Larin-Kyösti syntyi 5. kesäkuuta 1873 Hämeenlinnassa ja kuoli 2. joulukuuta 1948 Helsingissä. Hän oli suomalainen runoilija. Larin-Kyösti karkotettiin 1892 Hämeenlinnasta hänen tapeltuaan ystävineen toisen nuorisojoukon kanssa Tähtipuistossa. 
         Riita oli alkanut kun pojat tempaisivat kännin halvalla Muscat viinillä ja soittivat suutaan piioille. Ilta oli huipentunut joukkotappeluun. Larin-Kyösti vietti tämän karkotusajan Tuuloksessa ja tutustui sinä aikana perusteellisesti hämäläiseen 
         kyläyhteisöön ja sen kansanihmisiin. Hämeenlinnan lyseossa Larin-Kyöstin luokkatoverina oli Eino Leino. He valmistuivat yhdessä ylioppilaiksi 1895 ja lähtivät opiskelemaan Helsingin yliopistoon."
      ></ImageCard>
      <ImageCard
        imgPath="https://upload.wikimedia.org/wikipedia/commons/9/9c/Juho_Kusti_Paasikivi.jpg"
        title="Juho Kusti Paasikivi"
        copyright="Public domain, via Wikimedia Commons"
        caption="Juho Kusti Paasikivi (vuoteen 1887 Johan Gustaf Hellstén) syntyi 27. marraskuuta 1870 Koski Hl:ssä ja kuoli 14. joulukuuta 1956 Helsingissä. Hän oli suomalainen poliitikko, pankinjohtaja ja diplomaatti, joka toimi Suomen tasavallan seitsemäntenä presidenttinä vuosina 1946-1956. 
         Paasikivi lähetettiin syksyllä 1882 tuon ajan johtavaan suomenkieliseen oppikouluun Hämeenlinnan normaalilyseoon mistä hän valmistui vuonna 1890 ylioppilaaksi."
      ></ImageCard>
      <ImageCard
        imgPath="https://upload.wikimedia.org/wikipedia/commons/5/57/Eino_Leino.jpg"
        title="Armas Einar Leopold Lönnbohm"
        copyright="Elsa Roschier, Public domain, via Wikimedia Commons"
        caption="Eino Leino syntyi 6.heinäkuuta 1878 Paltamossa ja kuoli 10. tammikuuta 1926 Hyvinkäällä. Hän oli suomalainen kirjailija, lehtimies ja kriitikko. Leinon laaja ja monipuolinen kirjallinen tuotanto sisältää runoutta, romaaneja, näytelmiä, esseitä ja lehtipakinoita 
        sekä suomennoksia ulkomaisesta kirjallisuudesta. Leino luetaan Suomen merkittävimpiin kirjailijoihin. Sekä hänen lyriikkansa että aaterunonsa ovat vuosikymmenestä toiseen pysyneet laajojen lukijapiirien suosiossa. Käytyään Kajaanin alkeiskoulua ja Oulun suomalaista lyseota 
        Leino siirtyi veljensä, toimittaja Oskar Lönnbohmin luokse Hämeenlinnaan, missä hän valmistui 16-vuotiaana ylioppilaaksi 1895."
      ></ImageCard>
      <ImageCard
        imgPath="https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.98193D379BADCE89F9B699B1206B96E3&index=0&size=large"
        title="Arvi A. Karisto"
        copyright="Museovirasto - Historian kuvakokoelma - Kyytinen, Pekka, kuvaaja - CC BY 4.0"
        caption="Arvi Aleksanteri Karisto (sukunimi vuoteen 1905 asti Karlsson) syntyi 31. elokuuta 1879 ja kuoli 23. toukokuuta 1958 Hämeenlinnassa. Hän oli suomalainen kirjankustantaja ja hämeenlinnalaisen kustannusliike Arvi A. Karisto Oy:n perustaja."
      ></ImageCard>
      <ImageCard
        imgPath="https://upload.wikimedia.org/wikipedia/commons/d/d9/Armas_Launis.jpg"
        title="Armas Launis"
        copyright="CC BY-SA 3.0, via Wikimedia Commons"
        caption="Armas Emanuel Launis (vuoteen 1900 Lindberg) syntyi 22. huhtikuuta 1884 Hämeenlinnassa ja kuoli 7. elokuuta 1959 Nizzassa, Ranskassa. Hän oli suomalainen säveltäjä, kansanmusiikintutkija, musiikinopettaja, kirjailija ja toimittaja."
      ></ImageCard>
      <ImageCard
        imgPath={kummila}
        title="Hilpi Kummila"
        copyright=""
        caption="Hilpi Kummila syntyi 1887 Orimattilassa ja kuoli 1945 Hämeenlinnassa. Hän muutti Hämeenlinnaan 1919 Harvialan kartanon omistajan Carl Wilhelm Rosenlewin pyynnöstä. Rosenlew tarvitsi kartanoonsa hyvän rakennusmestarin. Hilpi Kummila pääsi heti töihin 
        kun Rosenlew alkoi rakentaa metsästysmajaansa. Maja valmistui viisi vuotta myöhemmin ja tunnetaan nykyisin nimellä Vanajanlinna. Vuonna 1924 hän perusti oman rakennusliikkeen ja sementtivalimon. Liike kasvoi 1930-luvulla jo useamman sata henkilöä työllistäväksi. 
        Kummila johti perustamaansa yhtiötä kuolemaansa asti."
      ></ImageCard>
      <ImageCard
        imgPath={alanko}
        title="Matti Alanko"
        copyright=""
        caption="Matti Edvard Alanko (sukunimi vuoteen 1906 asti Helander) syntyi 17. kesäkuuta 1889 ja kuoli 16. tammikuuta 1963 Hämeenlinnassa. Hän oli suomalainen lehtiyhtiön toimitusjohtaja ja kunnallisneuvos, joka toimi vuosikymmeniä Hämeenlinnan kunnalliselämässä. 
          Raittiusmiehenä tunnettu Alanko sai nimikkokadun Hämeenlinnan Kaurialaan vuonna 1979."
      ></ImageCard>
      <ImageCard
        imgPath="https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.91FD2807168BE4EBE1CDA85EE17CFE14&index=0&size=large"
        title="Tauno Palo"
        copyright="Museovirasto - Historian kuvakokoelma - Tenhovaara, Aarne, kuvaaja 1941 - CC BY 4.0"
        caption="Tauno Valdemar Palo (ent. Brännäs, Paloniemi) syntyi 25. lokakuuta 1908 Hämeenlinnassa ja kuoli 24. toukokuuta 1982 Helsingissä. Hän oli näyttelijä ja laulaja. Teatteriura alkoi Sörnäisten Työväen Näyttämöllä Helsingissä vuonna 1927. 
        Suomen Kansallisteatteriin hän siirtyi vuonna 1932, josta jäi eläkkeelle 1973."
      ></ImageCard>     
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Kuvia Ihmisistä</title> // metadata

export default PeoplePage