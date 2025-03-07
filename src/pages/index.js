import * as React from "react"

import Layout from "../components/layout"
import ReadMore from "../components/readMoreBtn"
import ImageSlider from "../components/imageSlider"

import Image from "react-bootstrap/Image"

import QuoteStart from "../assets/quotation-start.svg"
import QuoteEnd from "../assets/quotation-end.svg"
import Divider from "../assets/divider.svg"

import "../styles/base/global.css"

import img1 from "../images/content/old-painting.jpg"

const HomePage = () => {
  const [showMore, setShowMore] = React.useState(false);
  return ( 
    <Layout titleText="Palasia entisestä Hämeenlinnasta">
      <ImageSlider imgArray={carouselArray} showDots={false} auto={false} wide={true}></ImageSlider>
      <br />
      <Divider className="dividerStyle" />
      <QuoteStart className="symbol"/>
      <p className="initialCap">
        Noin samaan aikaan kuin Ruotsin mahtava valtiourho Birger Jaarli Bjelbosta päätti rakentaa
        Tukholman kaupungin noita sotaisia virolaisia vastaan, vaivasivat pakanalliset hämäläiset tuhotöillään ajoin ja usein
        Itämaan (niinkuin Suomea silloin kutsuttiin) kristillistä seurakuntaa.
      </p>
      <p> 
        Suuressa hädässään kääntyi papisto Suomessa Birger Jaarlin puoleen, pyytäen häneltä apua romalais-katolilaiselle seurakunnalle,
        jonka olemassa olo oli uhattu arveluttavassa määrässä. Ja heidän rukouksensa ei tullutkaan kuuroille korville. Wuonna 1249 laskettiin nimittän "Hämäläisten valkamaan" 
        - Pohjan pitäjän lahteen - voimakas sotajoukko maalle itse jaarlin johtamana ja samana vuonna rakennettiin Wanajaveden ihanille rannoille Ruunuporin linna eli Hämeenlinna.
      </p>
      <div style={{display: showMore ? "inherit" : "none"}}>
        <p>
          Nuo uppiniskaiset hämäläiset, jotka jo kauvan kyllä olivat Turun hurskaille piispoille tuottaneet suuria murheita, saivat nyt päällensä pakkoröijyn, heidän vastustuksensa
          heikkoni ja käytännöllisillä - jos kohta ankarilla - keinoilla onnistuttiin pian saada kristinusko ja järjestetty yhteiselämä ympärillä oleviin, silloin harvassa asuttuihin, 
          paikkoihin. 
        </p>
        <p>
          Ruunuporin linna, jonka kolmelta puolelta Wanajavesi ympäröitsi, tuli sittemmin vielä suurennetuksi ja vahvistetuksi valleilla ja juoksukaivoksilla. Aika-ajoin annettiin se 
          läänityksenä valtakunnan suurille miehille, aika-ajoin palveli se Kuninkaallisen Majesteetin ja Valtakunnan käskynhaltijan olopaikkana.
        </p>
        <p>
          Tulipalo hävitti linnarakennuksen 15 p. Tammikuuta 1659 melkein perustuksia myöten. Senjälkeen rakennettiin se uudelleen Suomalaisen sotaväen asesäilytyspaikaksi. Sota-aikana 
          palveli se tukena ja turvapaikkana ruotsalais-suomalaiselle sotajoukolle, olematta milloinkaan vihollisen piirittämänä.
        </p>
        <p>
          Kahdella tornillaan ja vanhoilla muureillaan on Ruunuporin linna yksi kauneimpia muinaismuistoja ja ajan kaikki syöpä hammas on vuosien vieriessä säälivästi käytellyt tuota 
          vanhaa varustusta.
        </p>
        <p>
          Yhdessä torneista nähtiin muinoin puukuva, esittäen linnan perustajaa, ankara näöltään, yhdessä kädessä ehtoolliskalkki ja toisessa ruoska. Sitäpaitsi löytyy eräs taru, joka 
          tietää kertoa että Birger Jaarli olisi muka yhteen komeroon linnassa elävänä muurauttanut sisarensa, syystä että tämä olisi rakastunut yhteen pakanallisten suomalaisten
          päälliköistä. Mutta tästä ei, ihme kyllä, tiedä kukaan Ruotsin historioitsijoista mitään kertoa, joten tarina sisäänmuuratusta immestä on otaksuttava keksityksi.
        </p>
        <p>
          Vuosien kuluessa nousi siellä täällä linnan ympärillä ihmisasuntoja mitkä vähitellen karttuivat pieneksi kauppalaksi, joka vuonna 1638, Pietari Brahen ollessa ensi kertaa 
          Suomen kenraalikuvernöörinä, sai kaupungin oikeudet.
        </p>
        <p>
          Kohta sen jälkeen, Toukokuun 3 päivänä 1639, perusti hän kirjeellänsä Turun linnasta tänne lasten koulun (<span className="quote">barne schola</span>) 
          eli <span className="accent">paedagogium</span>, tämän ensimmäiseksi johtajaksi nimitti hän pappismiehen Johannes Mannin, jonka samalla tuli olla linnansaarnaajana ja saada 
          näistä toimistaan palkaksi kruunun kymmenykset kolmesta likinnä kaupunkia olevasta kuninkaan latokartanosta, sekä teiniveron Pälkäneen pitäjästä. Tästä likemmin eräässä v. 1879 
          täällä ulostulleessa kirjassa nimeltä <span className="quote">Hämeenlinnan vanhemmista kouluista, kirjoitti A. E. Faven</span>.
        </p>
        <p>
          Likinnäseuraavina vuosina kaupungin perustamisesta oli ravintolanpito asukasten paraana elinkeinona ja josta heillä oli niukka elantonsa, kuin eräs vanha tilastollinen 
          käsikirja tietää. Sitäpaitsi pidettiin täällä kahdet suuret vuosimarkkinat.
        </p>
        <p>
          Mutta se ei ollut ainakaan tähdissä kirjoitettu, että asukkaat tuossa vanhassa hyvässä maakaupungissa saisivat iäti häiritsemätä viettää huomiota herättämätöntä elämäänsä. 
          Sillä koittipa sekin päivä, jolloin heidän täytyi <span className="quote">korkeain asianomaisten käskystä</span> muuttaa huonejumalansa toiseen paikkaan.
        </p>
        <p>
          Vuonna 1775 kunnioitti nimittäin kuningas Kustaa III käynnillänsä kaupunkia, ja antoi täältä säännöksen jonka mukaan Waasan hovioikeus perustettiin, jotapaitsi Suomi 
          jaettiin lisäksi kahteen uuteen lääniin ja laamannikuntaan. Tästä seurasi että Hämeenlinnan kaupunki seuraavana vuonna 1776 määrättiin maaherran asuinpaikaksi ja päätettiin 
          muuttaa se nykyiselle paikalleen Saaristen sotilaspuustellin maalle, joka, ynnä siihen kuuluvat metsät ja torpat, lahjoitettiin kaupungille.
        </p>
        <p>
          Ensimmäiset huoneukset tälle uudelle asemalle rakennettiin vuonna 1778. Uudelle kirkkorakennukselle, jota aljettiin vuonna 1793 lahjoitti Kustaa kolmas eläessään 4,000 
          specieriksiä (22,800 suomen markkaa). Neliluokkaiselle trivialikoululle määrättiin paikkansa kirkon pohjoispuolelle, ja koulurakennus, joka vuonna 1782 vihittiin toimeensa, 
          oli sen ajan vaatimuksiin katsoen pulska kahden kertanen puurakennus gothilaisella katollaan. 
        </p>
        <p>
          Tästä ajasta luetaan oikeammiten Hämeenlinnan alku. Katujen, torien ja kaupungin-osien uusi järjestys toimitettiin vasta vuonna 1798. Syyskuun 14 p. v. 1831 paloi enemmän 
          kuin kaksi kolmattaosaa kaupungista, länsi ja pohjoispuolella kirkkoa, joka jäi vahingoittumatta. Sama onnettomuus kohtasi myös trivialikoulua, joka aina vuoteen 1849, 
          jolloin se muutettiin yläalkeiskouluksi, oli oman huoneuksen puutteessa.
        </p>
        <p>
          Tämän surkean tulipalon jälkeen kohosi kaupunki uudelleen tuhastaan, kauniimpana kuin ennen. Kadut tehtiin leveämmiksi ja joukko uusia kauniita rakennuksia valmistui. 
          Wiime kuluneina vuosina on uudisrakentaminen ollut erittäinkin vilkasta ja pääkatujen varsille on muodostunut useita pulskia kivirakennuksia, joista mainittakoon: 
          uusi lyceorakennus (kolmessa kerrassa), Itäisen Linnakadun varrella, Birger Jaarlin ja Gymnasikadun välillä; Raastuvan rakennus kauppatorin ohella (kahdessa kerrassa); 
          Kunnallisneuvoksen lesken I. Lönnholts'in kivirakennus Raastuvan kadun varrella kuin myös kauppias Fr. Kiuttun ja turkkuri S. Lindqvist'in rakennukset Kasarmikadun 
          varrella sekä apteekkari Åkerman'in uusi huoneus Residensikadun varrella.
        </p>
        <p>
          Arvokkain kaduista on Raastuvan katu, joka kulkee keskellä kaupunkia idästä länteen. Eteläpuolella siitä ja yhtäsuunnassa kulkee Prykikatu ja eteläinen Niittykatu 
          sekä pohjoispuolella yhtäsuunnassa Residensi-, Birger Jaarlin-, Kymnasi- ja Koulukatu. Mainitut kadut jakaa pohjoisesta etelään Rantakatu, Itä- ja Länsi Linnankatu, 
          Kasarmikatu, Saaristenkatu ja Kaivokatu.
        </p>
        <p>
          Länsi tullin luona on 7:nen tarkk'ampuja pataljonan kasarmit vastapäätä vanhaa hautausmaata sekä vähä tuonnempana n. k. Myllymäki, yksi epäsäännöllinen etukaupunki, 
          rakennuksiltaan sisältävä suurimmaksi osaksi rauenneita puuhökkeliä, jotenkin mautonta mallia. Vähän matkaa tästä on venäläisen sotaväen kasarmit Poltinaholla ja myös 
          pieni etukaupunki nimeltä Punanen portti.
        </p>
        <p>
          Joka sitten jatkaa matkaansa pitkin Helsingin maantietä eteenpäin tulee myöskin käymään tuolla suuresta näköalastaan ylistetyllä Hattelmalan harjulla joka jatkuu 
          kaupungin lounaspuolelle. Tämän huipulla on yksi patteri eli umpilinnoitus, joka vuoden 1808 sodassa luotiin. Tässä seisoi tappeluvalmiina ja varmalla päätöksellä 
          joko voittaa tahi kuolla Suomen sotaväki, 6,000 miestä, ja odotti päästä koettelemaan voimiansa vihollisen kanssa. <span className="quote">Mutta silloin saapui Klingspor, 
          otti arvollansa komennon, antoi käskyjä kuin Klercker, mutta käski pakohon.</span>.
        </p>
        <p>
          Ja maaliskuun 7 p. 1808, alkoi Vanhan Klerckerin ja Adlercreutz'in vastustuksista huolimatta suomalaisen sotajoukon häpeällinen paluumatka pohjoista kohti.
        </p>
        <p>
          Puoli peninkulmaa Hämeenlinnasta luoteeseen on Parolan kenttä, suuri lakeus, jossa 100,000 miestä tykkineen mukavasti saattaa harjoitella. Kustaa III määräsi lakeuden 
          suomalaisen sotaväen harjoituskentäksi. Tässä taittoi <span className="quote">nerokuningas</span> vuonna 1782 pudotessaan hevosen selästä jalkansa eräissä harjoituksissa 
          ja samassa paikassa piti keisari-suuriruhtinas Alexander II yleistarkastuksen suomalaisesta ruotuväestä, jonka muistoksi mainitun väen upseerit pystyttivät paikalle 
          pronssisen leijonan (Parolan leijona). 
        </p>
        <p>
          Vuoden 1850 alussa teetti läänin silloinen kuvernöri vapaaherra Rehbinder linnan pohjoispuolelle vankien avulla tuon kauniin kaupungin parkin, joka 
          taidokkailla <span className="quote">raunioillaan</span>, huvimajoillaan, varjokkailla metsillään ja hienolla juomalallaan on rakas pakopaikka kaupunkilaisille, kun kesän 
          helle ja kuumuus on kovimmillaan. Korkeammilta huipuilta parkissa on viehättävä näköala yli linnan, kaupungin ja ihanan ympäristön.
        </p>
        <p>
          Järven, joka tässä muodostaa ainoastaan muutaman sylen levyisen salmen, toisella puolella on läpi hakometsän tehty tie tuolle jyrkälle Aulangon vuorelle, jonka juurella 
          ympäröittynä viheriöillä puilla, makaa varjokas järvi, niin ihanan viehättävä, että käyttääkseen runoilian Z. Topeliuksen lausetta siitä, <span className="quote">semmoista 
          ainoastaan löytää Skottlandissa ja Suomessa</span>.
        </p>
        <p>
          Täällä Aulangolla ottaa Hämeen luonto voiton, vaikka mailman melu on niin lähellä, kaupungissa. Yksinäisyyden valtava vaikutus leviää täällä vuorten ja metsäin, kirkkaan 
          järven ja puoleensa vetävän torpan sekä näköpiirin yli, joka täällä on himmeän sinertävä, niinkuin yleensä kaikki pohjoiset maisemat.
        </p>
        <p>
          Seuduista kaupungin lähellä mainittakoon myöskin Karlbergin kartano, metsäpuistoneen, kahden kilometrin matkalla pohjoiseen kaupungista, Wanajaveden itäisellä rannalla. 
          Kartanon omistaja Översti H. Standertskjöld on viime vuosina ryhtynyt laajoihin kaunistustoimiin. Niinpä on erään harjun laelle kaivamalla tehty vähäinen järvi, jonka 
          ohessa kaksi tornia harmaasta kivestä on rakennettu näköalan ihailioita varten, joista korkeampi on 100 jalkaa perustuksestaan ja 30 jalkaa läpimitaten. Paitsi sitä 
          rakennetaan paraikaa siellä täällä metsässä luolia ja maanalaisia käytäviä y. m.
        </p>
        <br />
        <p className="initialCap">
          Hämeenlinnan lutherilaisen seurakunnan väkiluku teki joulukuun 31 p. 1886 4,377 henkeä. Kun tähän lisää 7:n tarkk'ampuja pataljonan miehistön, tänne majoitetun venäläisen 
          sotaväen, kaupungissa lukuajoilla asuvan koulunuorison, sekä jäsenet kreikkalais-venäläisessä ja romalais-katolisessa seurakunnassa ynnä moseksen uskolaiset saattaa 
          kaupungin väkiluvun liioittelemata arvata noin 6,000 henkilöksi. Maaseurakunnassa oli samaan aikaan 1,191 henkilöä.
        </p>
        <p>
          Hämeenlinnan kaupunki ja maaseurakunta kuuluu samaan kirkkoherrakuntaan, mutta on heillä vuodesta 1804 ollut yhteinen kirkkoherra Wanajan pitäjäläisten kanssa.
        </p>
      </div>
      <ReadMore buttonText={showMore ? "Näytä vähemmän" : "Näytä enemmän..."} onClick={() => setShowMore(!showMore)}/>
      <QuoteEnd className="symbol"/>
      <p className="copyright">Kansalliskirjaston digitaaliset aineistot, Hämeenlinnan Osoite ja Ilmoitus Kalenteri, 1887 </p>
      <Divider className="dividerStyle" />
      <Image className="centeredImage" src={img1} alt="Maalaus vanhasta Hämeenlinnasta"/>
      <p className="copyright">Cordier de Bonneville, Louis-Joseph-Anger, taiteilija - valmistusaika ajoittamaton</p>
      <p className="copyright">Kansallisgalleria / Sinebrychoffin taidemuseo- CC0 </p>
    </Layout>
  );
}
export const Head = () => (
  <>
    <html lang="fi" />
    <title>Entinen Hämeenlinna - Etusivu</title>
    <meta name="description" content="Valokuvia ja tekstejä Hämeenlinnan historiasta." />
  </>
)
export default HomePage;


/* image array for carousel
-------------------------------------------------------------*/
const carouselArray = [
  {
    key: "imageid1",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.E1B3268797E211012921FB5DEEB75DDE&index=0&size=large",
    org: "Museovirasto - Historian kuvakokoelma - Lagergrén, Svante, kuvaaja - CC BY 4.0",
    caption: "Näkymä Kaupunginpuistosta kohti linnaa.",
    title: "1890"
  },
  {
    key: "imageid2",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.62b7d93e-1e24-4ef7-a38f-5107e2c9e3da&index=0&size=large",
    org: "Museovirasto - Rytkönen, Enok, kuvaaja - CC BY 4.0",
    caption: "Talonpoikaismarssin autokaravaani Hämeenlinnassa matkalla Helsinkiin 7.7.1930.",
    title: "1930"
  },
  {
    key: "imageid3",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917705462900&index=0&size=large",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma - CC BY-NC-SA 4.0",
    caption: "Hämeenlinnan vanhan rautatieaseman tornipuolen päätyseinä.",
    title: "n. 1862"
  },
  {
    key: "imageid4",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917724168400&index=0&size=large",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma - CC BY-NC-SA 4.0",
    caption: "Näkymä Hämeenlinnan kirkon tornista itään.",
    title: "n. 1890"
  },
  {
    key: "imageid5",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259858&index=0&size=large",
    org: "Lahden museot - Böök A. Th - CC BY 4.0",
    caption: "Kaksi herrasmiestä ja puinen pitkäsilta.",
    title: "n. 1907"
  },
  {
    key: "imageid6",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259121&index=0&size=large",
    org: "Lahden museot - Böök A. Th - CC BY 4.0",
    caption: "Luistelijoita Wetterhoffin rannassa.",
    title: "n. 1900"
  },
  {
    key: "imageid7",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917704842500&index=0&size=large",
    org: "Suomen Rautatiemuse - A. Alopaeus - CC BY-NC-SA 4.0",
    caption: "Hämeenlinnan vanha rautatieasema radan puolelta.",
    title: "1899"
  },
  {
    key: "imageid8",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/7a83b7a868164d7ebc9290d47de72599.jpg",
    org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma)",
    caption: "Hämeenlinnan 1870-luvulla rakennettu käännettävä rautatiesilta on tässä postikortissa kuvattuna Vanajaveden länsirannan puolelta 1900-luvun alkuvuosina.",
    title: "n. 1902"
  },
  {
    key: "imageid9",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/e54170ca820e28b93a790a6f3ef4973c.jpg",
    org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
    caption: "Postikortti 1900-luvun alusta. Kuva on otettu Läntiseltä Linnakadulta eli nykyisen Sibeliuksenkadun ja Birger Jaarlin kadun kulmalta kohti toria.",
    title: "n. 1900"
  },
  {
    key: "imageid10",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259112&index=0&size=large",
    org: "Lahden museot - Böök A. Th - CC BY 4.0",
    caption: "Venäläistä varuskuntaa Raatihuoneenkadulla.",
    title: "1905"
  },
  {
    key: "imageid11",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259113&index=0&size=large",
    org: "Lahden museot - Böök A. Th - CC BY 4.0",
    caption: "Kaupunginhotelli vasemmalla, kirkko oikealla.",
    title: "1905"
  },
  {
    key: "imageid12",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259114&index=0&size=large",
    org: "Lahden museot - Böök A. Th - CC BY 4.0",
    caption: "Kuva torin yli kohti kaupunginhotellia eli seurahuonetta.",
    title: "1905"
  },
  {
    key: "imageid13",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-260693&index=0&size=large",
    org: "Lahden museot - Böök A. Th - CC BY 4.0",
    caption: "Näkymä Myllymäenkalliolta kaupunkiin.",
    title: "n. 1908"
  },
  {
    key: "imageid14",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166927877711600&index=0&size=large",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma - CC BY-NC-SA 4.0",
    caption: "Vanajaveden ensimmäinen rautatiesilta. Silta oli kääntösilta.",
    title: "n. 1910"
  },
  {
    key: "imageid15",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/78484ca2524534a73b22c6a337f6a565.jpg",
    org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma)",
    caption: "Hämeenlinnan kirkon tornista kohti pohjoista otettua kuvaa hallitsee vuonna 1888 valmistunut Hämeenlinnan lyseon uusrenessanssityylinen rakennus.",
    title: "1890-luku"
  },
  {
    key: "imageid16",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/c1519126198cf06d9e000e41eeb8d5ef.jpg",
    org: "Hämeenlinnan kaupunginkirjasto - Suomalainen kirjakauppa",
    caption: "Hämeenlinnan kirkon tornista kohti pohjoista otettua kuvaa hallitsee vuonna 1888 valmistunut Hämeenlinnan lyseon uusrenessanssityylinen rakennus.",
    title: "n. 1914"
  },
  {
    key: "imageid17",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917716821800&index=0&size=large",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma - CC BY-NC-SA 4.0",
    caption: "Hämeenlinnan uuden rautatieaseman kaupunginpuoleinen julkisivu.",
    title: "1919"
  },
  {
    key: "imageid18",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917725458200&index=0&size=large",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma - CC BY-NC-SA 4.0",
    caption: "Hämeenlinnan uuden rautatieaseman kaupunginpuoleinen julkisivu.",
    title: "n. 1930"
  },
  {
    key: "imageid19",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/ddca4366a740af2ef683c1893378a3f9.jpg",
    org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma)",
    caption: "Vossikat odottavat kyyditettäviä torin alalaidassa. 1900-luvun alun postikortissa ei ole vielä Toripuistoa eikä paviljonkeja, jotka valmistuivat vuonna 1911.",
    title: "n. 1900"
  },
  {
    key: "imageid20",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/990c0b41ffdc807ef69fba42dee26f04.jpg",
    org: "Hämeenlinnan kaupunginkirjasto - Suomalainen kirjakauppa, Hämeenlinna",
    caption: "Hämeenlinnan laivaranta Rantapuiston laidalla. Satamaan valmistui arkkitehti Armas Rankan suunnittelema satamakonttori vuonna 1911.",
    title: "n. 1912"
  },
  {
    key: "imageid21",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/8722fd6f8e5b2d537d201c71e255969c.jpg",
    org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
    caption: "Näkymä kirkon tornista länteen. Taustalla näkyy ortodoksinen sotilaskirkko.",
    title: "n. 1900"
  },
  {
    key: "imageid22",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/29a51663daf8a4e6ad534e4cbf8df50b.jpg",
    org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma) - Rytkönen, Enok",
    caption: "Söderlundin kangaskauppa ja räätälinliike toimi Kasarmikadun ja Hallituskadun kulmatontilla nro 60 olevassa puutalossa 1900-luvun alkuvuosiin asti.",
    title: "n. 1904"
  },
  {
    key: "imageid23",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.6DE87CD82F363E2CF83A77715B3CE6AC&index=0&size=large",
    org: "Museovirasto - Historian kuvakokoelma - M. L. Carstensin kokoelma - CC BY 4.0",
    caption: "Näkymä kaupunkiin Lahdensivuntien tienoilta.",
    title: "1909"
  },
  {
    key: "imageid24",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/0d62b6510c13344c061c6e3951c1a1d3.jpg",
    org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma) - Rytkönen, Enok",
    caption: "Keinusaaren rannassa, Pitkänsillan eteläpuolella oli 1800-luvun puolivälissä rakennettu hevosuittolaituri.",
    title: "n. 1904"
  },
  {
    key: "imageid25",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/b34df7841629db2203d4086ec0da511a.jpg",
    org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma) - Palander, E",
    caption: "Linnanpuisto joutui säännöllisesti keväisin veden alle, ja vesi nousi usein myös Niittykadun ja Tampereentien varrella sijaitsevien asuinrakennusten ympärille.",
    title: "n. 1906"
  },
  {
    key: "imageid26",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/9acce7a246829ae134099135e6bd7614.jpg",
    org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
    caption: "Hämeenlinnan lääninsairaalan empiretyyliset rakennukset valmistuivat Keinusaaren rantaan vuosina 1840-1844.",
    title: "n. 1906"
  },
  {
    key: "imageid27",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/ca8acddb1930563e2fb2cbb872363e27.jpg",
    org: "Hämeenlinnan kaupunginkirjasto - Suomalainen kirjakauppa, Hämeenlinna",
    caption: "Vanajaveden poikki vievä, graniittitukimuureilla lepäävä kaksijänteinen ristikkosilta valmistui vuonna 1909.",
    title: "n. 1925"
  },
  {
    key: "imageid28",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/17fe156d41391392083ead8bfc28ece0.jpg",
    org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma) - Rytkönen, Enok",
    caption: "Kauppatorin ohella torikauppaa tehtiin myös Vanajaveden rannassa Rantatorilla.",
    title: "n. 1910"
  },
  {
    key: "imageid29",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/07a391d5517feefb150681a8344e147c.jpg",
    org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
    caption: "Hämeenlinnan ensimmäinen tavaratalo (Skogster) avattiin silloisten Raastuvankadun ja Kirkkokadun kulmaan vuonna 1907.",
    title: "n. 1910"
  },
  {
    key: "imageid30",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/6d9c6426c637cb6982d6d6a0aa9df682.jpg",
    org: "Hämeenlinnan kaupunginkirjasto - Joensuun kaupunginkirjasto",
    caption: "Skogsterin liiketalo oli maan moderneimpia tavarataloja. Rakennustekniikaltaan merkittäväksi sen tekevät betoniset välipohjat ja tukirakenteet. Raudoitetun betonin käyttö oli uutuus vuoden 1900 Pariisin maailmannäyttelystä.",
    title: "n. 1910"
  },
  {
    key: "imageid31",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/f81e5f6cc35cab5a58a3871dcf0df64a.jpg",
    org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
    caption: "Pikkutorin näkymää vuodesta 1900 alkaen hallitsi ortodoksinen varuskuntakirkko.",
    title: "n. 1910"
  },
  {
  key: "imageid32",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/0b1df811f41d26c3f12100d18e175f08.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
  caption: "Kirkon puistoalue valmistui syksyllä 1911. Samassa yhteydessä aiemmin hiekkapäällysteinen tori sai pintaansa säteittäin ladotun kiveyksen.",
  title: "n. 1911"
},
{
  key: "imageid33",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/fafd5a82c2be13fb3139389a2762fe5d.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma) - Rytkönen, Enok",
  caption: "Hämeenlinnan raittiusseura rakennutti vuonna 1905 talon silloisen Raastuvankadun, nykyisen Raatihuoneenkadun alkupäähän. Talo purettiin vuonna 1982.",
  title: "1907"
},
{
  key: "imageid34",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/90739d1b5ad9ecf065c8026bc23249e3.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma) - Rytkönen, Enok",
  caption: "Näkymä torin kulmalta pitkin Raastuvankatua eli nykyistä Raatihuoneenkatua länteen päin.",
  title: "n. 1900"
},
{
  key: "imageid35",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/ec481fff96625cb1a7ead46747f831f4.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma)",
  caption: "Postikortin kuva Varikonniemestä kohti kaupungin keskustaa. Lyseon ja rannan välissä sijaitsi olutpanimo",
  title: "n. 1904"
},
{
  key: "imageid36",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/d6bf918916d2223bc2745c0eb11512e8.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
  caption: "Kunnallissaunan talo valmistui Koulukadun ja Linnankadun kulmaukseen vuonna 1912.",
  title: "n. 1915"
},
{
  key: "imageid37",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/b40760fb35b2f8eb6d40cadd6f0b022e.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma) - Rytkönen, Enok",
  caption: "Hämeenlinnan torin etelälaitaa Raastuvankadun varrella reunustivat 1900-luvun alussa Vainikaisen talo, Kämärin talo, Raatihuone ja Bogdanoffin talo.",
  title: "n. 1900"
},
{
  key: "imageid38",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/428a9237e776ad8cff5a6511eb0b1683.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Suomalainen kirjakauppa, Hämeenlinna",
  caption: "Eteläkatu. Vasemmalla Hämeenlinnan nahkatehdas OY:n rakennuksia ja oikeassa reunassa näkyvät ns. Eteläkadun villat.",
  title: "n. 1922"
},
{
  key: "imageid39",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/108e138edc098aa76f74e5dbf0a7c4f4.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
  caption: "Hämeenlinnan anniskeluyhtiö (kuvassa vasemmalla) toimi Rauhankadun ja Raastuvankadun kulmatontilla. Vastapäätä oli satulamaakari T. Heleniuksen satulasepän- ja verhoilijaliike.",
  title: "n. 1900"
},
{
  key: "imageid40",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/aebb73e9414825b25a0b997e5722303f.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma)",
  caption: "1900-luvun alun puutaloalue (ns. Alasen alue) vanhan hautausmaan ja Seminaarin koulun välissä on Kaurialan kaupunginosan vanhinta osaa.",
  title: "1935"
},
{
  key: "imageid41",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/a781d72ecb295b424c843ddfe3b90940.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
  caption: "1920-luvun postikortissa on näkymä Rantakadulta (nykyiseltä Arvi Kariston kadulta) kohti etelää. Vasemmalle puolelle jää laivaranta, oikealla on matkustajakoti Rannan talona tunnettu hirsitalo 1880-luvulta.",
  title: "n. 1920"
},
{
  key: "imageid42",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/ec39154e2e97eef41885e661556682fb.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma)",
  caption: "1930-luvun postikortissa on näkymä Raatihuoneenkadulta, nykyiseltä kävelykadun jatkeelta, kohti toria.",
  title: "n. 1930"
},
{
  key: "imageid43",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/32db1e70e2bf03717a6a66692cfe710d.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma)",
  caption: "Rantapuistoa kaunistettiin lisäistutuksilla vuoden 1904 jälkeen lehtori A. Th. Böökin toimesta. Postikortin kuva on ilmeisesti otettu hiukan ennen tätä. Taustalla näkyy kaupungin pyykkihuone tynnyrien varassa kelluvalla lautalla.",
  title: "n. 1904"
},
{
  key: "imageid44",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/07bd8bf2cbb30e14e565a1cf6b16e7cb.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Suomalainen kirjakauppa, Hämeenlinna",
  caption: "Vuonna 1909 puretun Vanajaveden vanhan sillan eli Pitkänsillan graniittiset päätypylväät tuotiin koristamaan Rantapuiston kävelytien molempia päitä.",
  title: "n. 1930"
},
{
  key: "imageid45",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/848c08ab810c797719ca0babc0e66f76.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
  caption: "Nykyinen Sibeliuksenkatu oli vanhalta nimeltään Läntinen Linnankatu. Postikortin kuvassa on näkymä Sibeliuksenkadun ja Birger Jaarlin kadun kulmauksesta etelään päin kohti toria.",
  title: "1907"
},
{
  key: "imageid46",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/ba7feb4aff1c305e0631e0e31bfbf61f.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma)",
  caption: "Kuivasilta ja sitä reunustavat jalkäytävät on jo kivetty mukulakivillä ja 1800-luvun puukaiteiden tilalle siltaa reunustamaan ovat tulleet kivipylväät.",
  title: "n. 1909"
},
{
  key: "imageid47",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/e9b6f7ed24170ed3e6360bc887e95f99.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Suomalainen kirjakauppa, Hämeenlinna",
  caption: "Saaristen koulu eli Vanha koulu on Hämeenlinnan vanhin varsinainen kansakoulurakennus. Rakennuspäätös tehtiin vuonna 1880 ja koululle varattiin kaupungin omistama tontti Saaristenkadun varrelta.",
  title: "n. 1910"
},
{
  key: "imageid48",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/9511b72da7709a10a71f33fead3112b6.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
  caption: "Vuonna 1878 perustettu Hämeenlinnan suomalainen tyttökoulu (myöhemmin Hämeenlinnan yhteiskoulu) päätyi muutaman kiertolaisvuoden jälkeen vuonna 1887 Pikkutorin kulmalle entiseen laamanni Wetterhoffin taloon.",
  title: "n. 1920"
},
{
  key: "imageid49",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/8871d05c79804c3f40e359e4f078f73f.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
  caption: "Turuntieltä Torikadun kohdalta kohti keskustaa. Vasemmalla puolella on tori jonka paikalla on nykyään Kaurialanpuisto",
  title: "n. 1910"
},
{
  key: "imageid50",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/851cf885922f70c782e2f2473aadb7e6.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma)",
  caption: "Suomalaisen kirjakaupan ensimmäinen liikehuoneisto sijaitsi puutalossa Kasarmikadun ja Raastuvankadun (Raatihuoneenkadun) kulmassa",
  title: "n. 1910"
},
{
  key: "imageid51",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/29919faa9ee95816f1feb3e43f220b64.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Suomalainen kirjakauppa, Hämeenlinna",
  caption: "Hämeen Suojana tunnettu rakennus nousi Palokunnankadun varrelle vuonna 1930 paikallisen suojeluskunnan ja Lotta Svärd -järjestön käyttöön.",
  title: "n. 1930"
},
{
  key: "imageid52",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/3d49593aa7d60c24b3739e6e0bad4460.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
  caption: "Hämeenlinnan ruotsalainen yhteiskoulu aloitti toimintansa 1.9.1901 Prykikadun (nyk. Palokunnankatu) varrella. Tällä paikalla on nykyisin Keskustalo",
  title: "n. 1905"
},
{
  key: "imageid53",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/992d27ee321ec35bd8aca21080ae9978.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma)",
  caption: "Kaupunginpuiston puistoravintola (ravintola Park) avattiin 1861 ja purettiin ränsistyneenä 60-luvulla. Puistoravintola sijaitsi puiston itärinteessä",
  title: "n. 1901"
},
{
  key: "imageid54",
  imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.C5B1F0B4CC3B9E431D4A5AE9873D4D7E&index=0&size=large",
  org: "Museovirasto - Valokuvaamo Pietisen kokoelma - CC BY 4.0",
  caption: "Kaupunginpuiston puistoravintola (ravintola Park) avattiin 1861 ja purettiin ränsistyneenä 60-luvulla. Puistoravintola sijaitsi puiston itärinteessä",
  title: "1931"
},
{
  key: "imageid55",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/d7cda4d2f3160061b9fa0896a07faf6f.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
  caption: "Oikealla osa puista empiretaloa, johon Hämeenlinnan suomalainen tyttökoulu majoittui 1880-luvulla. Tähän rakennukseen kiinnittyy viereinen jugendtalo, joka rakennettiin vuonna 1906 silloisen yhteiskoulun lisätilaksi.",
  title: "n. 1909"
},
{
  key: "imageid56",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/fff6e6d9e1cf47e6718457aafbc26b56.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
  caption: "Vuonna 1912 torin alakulmaan valmistui rakennus, jonka länsipäähän tuli tilat yhdyspankille, keskelle kelloseppä N. Örlundin kelloliike Otavalle ja Lääninhallituksen puoleiseen päähän sijoittui Suomen pankin sivukonttori.",
  title: "n. 1920"
},
{
  key: "imageid57",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/66d0fcac1eba7f5a5a5f660c6ce02a2c.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
  caption: "Kirkontornista etelään kohti Kantolanniemeä avautuvaa näkymää hallitsi 1900-luvun alussa Wetterhoffin työkoulun rakennus.",
  title: "n. 1900"
},
{
  key: "imageid58",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/db669d8cf1e727af85290fcc9531dc24.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma)",
  caption: "Hämeenlinnan torin markkinat eli virallisemmin toripäivät olivat 1900-luvun alkupuolella kaupungin kokoon nähden suuria tapahtumia.",
  title: "19.9.1934"
},
{
  key: "imageid59",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/565f854d359ed07e9b525ec781db1843.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Suomalainen kirjakauppa, Hämeenlinna",
  caption: "Kansallisosakepankin liikerakennus valmistui vuonna 1915. Pankkitalon tieltä purettiin Nybergin perillisten talona tunnettu puutalo. Tontin pohjoispäähän jäi kavennettuna kaksikerroksinen kivitalo, joka purettiin vasta 1980-luvun alussa. Tässä talossa toimi 1920-luvulla mm. elokuvateatteri Panu.",
  title: "n. 1920"
},
{
  key: "imageid60",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/dba89cf3966663b8c59643bdb0c57d1c.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan kaupunginmuseo",
  caption: "Panoraamakuva torilta laulujuhlien aikaan kesä-heinäkuun vaihteessa vuonna 1911.",
  title: "1911"
},
{
  key: "imageid61",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/29226bd41a7f70d2905984163beafb7b.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan kaupunginmuseo",
  caption: "Lyseo sai vihdoin oman koulutalon, kun uusrenessanssityylinen „lyceekartano” valmistui kesäkuussa 1888 Itäisen Linnankadun varrelle, Tähtipuiston kohdalle.",
  title: "n. 1890"
},
{
  key: "imageid62",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/d1bca46e7988727c9481ca4bf480258a.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
  caption: "Keskustan etelärannalla sijaitsi kaupungin uimalaitos, joka oli otettu käyttöön vuonna 1911. Uimalaitos purettiin vuonna 1955 ja kaupunkilaiset siirtyivät uimaan Ahvenistolle.",
  title: "n. 1937"
},
{
  key: "imageid63",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/424f295ded1cff4316caf3746bf6bdc6.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma)",
  caption: "Kalle Vainikainen ryhtyi Hämeenlinnassa leipomo- ja kahvilayrittäjäksi vuonna 1900. Vainikaisen kahvila ja konditoria sekä muut tontin rakennukset purettiin vuonna 1963 Keskustalon tieltä.",
  title: "n. 1930-1950"
},
{
  key: "imageid64",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/517a6e0b2787ddd622f628ed83c5837b.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Suomalainen kirjakauppa, Hämeenlinna",
  caption: "Hämeenlinnan vanha puinen Pitkäsilta korvattiin kuvassa näkyvällä uudella rautarakenteisella kaarisillalla vuonna 1909.",
  title: "n. 1920"
},
{
  key: "imageid65",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/31fa34c9938eb2c4ede41db235590fb2.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Suomalainen kirjakauppa, Hämeenlinna",
  caption: "Hämeenlinnan keskustasta länteen päin johtavan Läntisen Viertotien nimeksi tuli vuonna 1924 Turuntie.",
  title: "n. 1920"
},
{
  key: "imageid66",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/adc974d241a3306d6da9a0dad4acb349.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma)",
  caption: "Huhtikuussa 1928 tuli kuluneeksi 10 vuotta kansalaissodan päättymisestä. Hämeenlinnan torilla järjestettiin 26.4. paraati ja juhlittiin kaupungin vapautusta.",
  title: "26.4.1928"
},
{
  key: "imageid67",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/91f42ea0ecf9edb94abf985112d8c759.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Suomalainen kirjakauppa, Hämeenlinna",
  caption: "Vanajaveden jäältä otetussa postikorttikuvassa näkyy Hämeenlinnan keskustan etelärannan rakennuksia 1920-luvun loppupuolelta.",
  title: "n. 1928"
},
{
  key: "imageid68",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/52ae2607c51c87cbf8890d888dc59264.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma)",
  caption: "Postikortissa on kuvattuna Wetterhoffin työkoulun rakennus ennen vuonna 1922 tehtyä itäpäädyn korotusta. Koko koulurakennus korjattiin kolmikerroksiseksi vuonna 1929.",
  title: "n. 1920"
},
{
  key: "imageid69",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/45f04bc5f3b7e553246515171bf87d89.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Suomalainen kirjakauppa, Hämeenlinna - Kaarlo Lindberg",
  caption: "Kaupunki lahjoitti Hämeenlinnan suomalaisen tyttökoulun osakeyhtiölle tontin Kaurialan kaupunginosasta, vanhan hautausmaan laidalta. Uusi koulutalo valmistui tälle tontille Erottajakadun varrelle vuonna 1928.",
  title: "1928"
},
{
  key: "imageid70",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/1fedf285c57de6811429e39e0e1e2e6e.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma)",
  caption: "Kaupunki lahjoitti Hämeenlinnan suomalaisen tyttökoulun osakeyhtiölle tontin Kaurialan kaupunginosasta, vanhan hautausmaan laidalta. Uusi koulutalo valmistui tälle tontille Erottajakadun varrelle vuonna 1928.",
  title: "1928"
},
{
  key: "imageid71",
  imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.3CBFBC2DADC43257EA6537F67A43E113&index=0&size=large",
  org: "Museovirasto - Historian kuvakokoelma - CC BY 4.0",
  caption: "Anniskeluyhtiön toimitalo valmistui v. 1900. Viinikellarit ja viinakauppa sijaitsivat alakerrassa. Ensimmäisessä kerroksessa sijaitsi konjakkikauppa, viinakauppa ja työväen anniskeluravintola Tillikka.",
  title: "1910"
},
{
  key: "imageid72",
  imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.EE69EECD021A40E9AD82610C7FFB54C2&index=0&size=large",
  org: "Museovirasto - Historian kuvakokoelma - CC BY 4.0",
  caption: "Presidentti Relander vierailulla Hämeenlinnassa.",
  title: "1925"
},
{
  key: "imageid73",
  imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.6BDF0E1B11BF36F5939AFC7874E785EF&index=0&size=large",
  org: "Museovirasto - Historian kuvakokoelma - Enok Rytkönen - CC BY 4.0",
  caption: "Sotaan lähtevien venäläisten joukko-osastojen siunaus torilla.",
  title: "1914"
},
{
  key: "imageid74",
  imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.2A95E7A86C2B48F4B8CFAFB5C2E93795&index=0&size=large",
  org: "Museovirasto - Historian kuvakokoelma - Poutvaara, Matti, kuvaaja - CC BY 4.0",
  caption: "Näkymä Myllymäen kalliolta kohti keskustaa.",
  title: "1958"
},
{
  key: "imageid75",
  imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166931506899500&index=0&size=large",
  org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma - CC BY-NC-SA 4.0",
  caption: "Hämeenlinnan ensimmäisen asemarakennuksen suunnitteli C. A. Edelfelt ja rakennus valmistui v. 1862. Rakennus tuhoutui sisällissodan aikana v. 1918.",
  title: "n. 1910"
},
{
  key: "imageid76",
  imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.C56F827F6B287982216C87DA21906ED1&index=0&size=large",
  org: "Museovirasto - Historian kuvakokoelma - CC BY 4.0",
  caption: "Tuuloslaisia vankeja ja sotasaalista torilla.",
  title: "1918"
},
{
  key: "imageid77",
  imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.1965428EC7386A7E912D23DDD8F96DAC&index=0&size=large",
  org: "Museovirasto - Historian kuvakokoelma - CC BY 4.0",
  caption: "Louis Jean Desprezin suunnittelema, vuonna 1798 valmistunut Hämeenlinnan tiilikirkko.",
  title: "1900"
},
{
  key: "imageid78",
  imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.BEA4A22E13DD92AC704F50BD2A8A2C75&index=0&size=large",
  org: "Museovirasto - Historian kuvakokoelma - Rytkönen, Enok - CC BY 4.0",
  caption: "Kuva Hallituskadulta kohti toria. Oikealla näkyy osa Sibeliuksen syntymäkotia.",
  title: "1905"
},
{
  key: "imageid79",
  imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.3B75151FE8B3679C07F53D626D02BED3&index=0&size=large",
  org: "Museovirasto - Historian kuvakokoelma - Valokuvaamo Pietisen kokoelma - CC BY 4.0",
  caption: "Valokuvaaja Pietisen auto Vanajaveden rantatiellä Hämeenlinnassa nokka kohti Aulankoa.",
  title: "1938"
},
{
  key: "imageid80",
  imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.E55D96F3A8CA34BAA362E135060864E3&index=0&size=large",
  org: "Museovirasto - Historian kuvakokoelma - Sortila, kuvaaja - CC BY 4.0",
  caption: "Valtion viljamakasiini otettiin käyttöön 1838. Vuodesta 1952 se on toiminut Hämeenlinnan taidemuseon päärakennuksena.",
  title: "1950-luku"
},
{
  key: "imageid81",
  imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.1AF93D70848D2688A56E0B14DEBA75F3&index=0&size=large",
  org: "Museovirasto - Historian kuvakokoelma - CC BY 4.0",
  caption: "Torin luoteiskulma.",
  title: "1900"
},
{
  key: "imageid82",
  imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.74C35F7EE23490647DE192ACBA8F99EA&index=0&size=large",
  org: "Museovirasto - Historian kuvakokoelma - A. Alopaeuksen kirjakauppa - CC BY 4.0",
  caption: "Raatihuone valmistui helmikuussa 1888 samalla tontilla sijainneen puisen rakennuksen paikalle. Raatihuone on lääninarkkitehti Alfred Cawénin suunnittelemista  kivirakennuksista ainoa jäljellä oleva.",
  title: "1890-luku"
},
{
  key: "imageid83",
  imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.139F20678892CC3A95610664F8093214&index=0&size=large",
  org: "Museovirasto - Historian kuvakokoelma - Rytkönen, Enok - CC BY 4.0",
  caption: "Raatihuoneenkadun ja Rauhankadun risteys. Puurakennuksesa oli Klepoffin kauppa, jossa Aleksis Kivi kävi myymässä loput Kanervala-teoksestaan, jotka käytettiin lopulta käärepaperina.",
  title: "n. 1910-luku"
},
{
  key: "imageid84",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/d38d26922da9f348a589606b2fea46e9.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma",
  caption: "Kuvassa Läntistä viertotietä (nykyinen Turuntie). Myllymäen päällä on vielä mylläri Sirénin vuonna 1883 rakennuttama hollantilaistyylinen tuulimylly, joka purettiin vuonna 1891. Kuivasilta oli pengerretty, joten se kohosi sivuilla olevasta, vesiperäisestä suosta metrin verran.",
  title: "1880-luku"
},
{
  key: "imageid85",
  imgSrc: "https://museovirasto.finna.fi/Cover/Show?source=Solr&id=museovirasto.FDC66BB3BB46DD308CC86282CEA47048&index=0&size=large",
  org: "Museovirasto - Historian kuvakokoelma - M. L. Carstensin kokoelma - CC BY 4.0",
  caption: "Hämeenlinnan venäläinen varuskuntakirkko eli Pyhien Nikolaoksen ja Aleksanteri Nevskin kirkon peruskivi laskettiin 1898. Kirkkoon suhtauduttiin paikallisten keskuudessa vihamielisesti jo alun perinkin ja lopulta venäläisten sotilaiden lähdettyä sen tornit kaadettiin ja sisustus purettiin 2.5.1923.",
  title: "1909"
},
{
  key: "imageid86",
  imgSrc: "https://museovirasto.finna.fi/Cover/Show?source=Solr&id=museovirasto.4ACF1E37A457016B2418581E5722E090&index=0&size=large",
  org: "Museovirasto - Historian kuvakokoelma - Nyblin Daniel, kuvaaja - CC BY 4.0",
  caption: "Vuosina 1878-1909 käytössä olleen puusillan kestävyyttä epäiltiin alusta asti. Sitä ei saanut ajaa hevosella kuin käyden ja sotaväen oli marssittava „sekajaloin”, ei tahdissa.",
  title: "1893"
},
{
  key: "imageid87",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/d1bca46e7988727c9481ca4bf480258a.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Julkaistu painettuna: Suomalainen kirjakauppa Oy. - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
  caption: "Hämeenlinnan keskustan mittavia rakennushankkeita 1920-1930-lukujen vaihteessa olivat mm. Kariston kustannusliikkeen uusi toimitalo, suojeluskuntatalo Hämeen Suoja sekä Paavonkulman viisikerroksinen asuin- ja liikerakennus. Etelärannalla sijaitsi kaupungin uimalaitos, joka oli otettu käyttöön vuonna 1911.",
  title: "1930-luku"
},
{
  key: "imageid88",
  imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.B3444B2827581A63DD1E80908DCE1144&index=0&size=large",
  org: "Museovirasto - Historian kuvakokoelma - Saxelin, Carl Otto, kuvaaja - CC BY 4.0",
  caption: "Hämeenlinnan palokunnantalon vihkiäiset. Palokunnantalo valmistui VPK:n rakentamana 1893 silloisen Rantatorin varteen VPK:n juhlataloksi. Talossa toimi vuosien 1924-1984 aikana Hämeenlinnan vakinainen palokunta.",
  title: "1893"
},
{
  key: "imageid89",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/207aadd0c9434417dd13be1f712beb53.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma)",
  caption: "Hämeenlinnan Rantapuistoa alettiin kaunistaa istutuksilla vuonna 1889 kaupunginlääkäri Carl Henrik Bartramin aloitteesta. Vuonna 1904 perustettu ja lehtori A. Th. Böökin johtama puistovaliokunta täydensi puiston istutuksia mm. tilaamalla ulkomailta asti koristepensaita ja -kasveja.",
  title: "n. 1905"
},
{
  key: "imageid90",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/1a8ca81d73ffaeaf723323444b7aef5c.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Suomalainen kirjakauppa, Hämeenlinna",
  caption: "Kevättulva on vallannut myös Keinusaaren ja lähes peittänyt Pikkujärven ja Vanajaveden välisen alueen veden alle. Vasemmalla Keinusaaren puoleisella rannalla näkyy kruununmakasiinin kattoa, kaupungin pesuhuone, Verkatehtaan savupiippu ja molemmat Pinellan huvilat.",
  title: "1930-luku"
},
{
  key: "imageid91",
  imgSrc: "https://digi.kirjastot.fi/files/fullsize/a31913da87aa7d06cb6902e8b421eae2.jpg",
  org: "Hämeenlinnan kaupunginkirjasto - Julkaistu painettuna: Hämeenlinna - Tavastehus : Enok Rytkönen - Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma)",
  caption: "Kaupunginpuiston länsilaidan kiviaitaa Tampereelle johtavan tien laidassa ns. Pikku-Parkin kohdalla olevassa ylämäessä. Pikku-Parkiksi kutsuttiin Tampereentien länsipuolelle jäävää aluetta, johon jo 1800-luvun lopulla syntyi harvahkoa esikaupunkiasutusta puiston kohdalle. Nykyään alue kuuluu Puistonmäen kaupunginosaan.",
  title: "n. 1900"
},
{
  key: "imageid92",
  imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.AE9FAABDB6117157420559D2B2B921D4&index=0&size=large",
  org: "Museovirasto - Historian kuvakokoelma - CC BY 4.0",
  caption: "Hämeenlinnan suojeluskunnan pesäpallojoukkue vanhalla urheilukentällä.",
  title: "1923"
},
{
  key: "imageid93",
  imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=museovirasto.5DAEF966400AADB0E4430D68A2AD982A&index=0&size=large",
  org: "Museovirasto - Historian kuvakokoelma - M. L. Carstensin kokoelma - CC BY 4.0",
  caption: "",
  title: "1909"
},
];