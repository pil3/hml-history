import * as React from "react"

import Layout from "../components/layout";
import ImageSlider from "../components/imageSlider";

import Image from "react-bootstrap/Image";

import citateOpen from "../images/citation-open.png"
import citateClose from "../images/citation-close.png"

import "../styles/base/global.css"

const homePage = () => {
  return ( 
    <Layout titleText="Palasia entisestä Hämeenlinnasta">

      <ImageSlider imgArray={carouselArray} showDots={false} auto={true}></ImageSlider>

      <Image placeholder={"blurred"} className="centeredSymbolStyle" alt="Sitaatti" src={citateOpen} />
      <p className="firstLetterStyle">
        Noin samaan aikaan kuin Ruotsin mahtava valtiourho Birger Jaarli Bjelbosta päätti niinkuin "lukon Määlariin" rakentaa
        Tukholman kaupungin noita sotaisia virolaisia vastaan, vaivasivat pakanalliset hämäläiset tuhotöillään ajoin ja usein
        Itämaan (niinkuin Suomea silloin kutsuttiin) kristillista seurakuntaa.
      </p>
      <p> 
        Suuressa hädässään kääntyi papisto Suomessa Birger Jaarlin puoleen, pyytäen häneltä apua romalais-katolilaiselle seurakunnalle,
        jonka olemassa olo oli uhattu arveluttavassa määrässä. Ja heidän rukouksensa ei tullutkaan kuuroille korville. Wuonna 1249 laskettiin nimittän "Hämäläisten valkamaan" 
        - Pohjan pitäjän lahteen - voimakas sotajoukko maalle itse jaarlin johtamana ja samana vuonna rakennettiin Wanajaveden ihannille rannoille Ruunuporin linna eli Hämeenlinna.
      </p>
      <p>
        Nuo uppiniskaiset hämäläiset, jotka jo kauvan kyllä olivat Turun hurskaille piispoille tuottaneet suuria murheita, saivat nyt päällensä pakkoröijyn, heidän vastustuksensa
        heikkoni ja käytännöllisillä - jos kohta ankarilla - keinoilla onnistuttiin pian saada kristinusko ja järjestetty yhteiselämä ympärillä oleviin, silloin harvassa asuttuihin, 
        paikkoihin. 
      </p>
      <p>
        Ruunuporin linna, jonka kolmelta puolelta Wanajavesi ympäröitsi, tuli sittemmin vielä suurennetuksi ja vahvistetuksi valleilla ja juoksukaivoksilla. Aikaajoin annettiin se 
        läänityksenä valtakunnan suurille miehille, aikaajoin palveli se Kuninkaallisen Majesteetin ja Valtakunnan käskynhaltijan olopaikkana.
      </p>
      <p>
        Tulipalo hävitti linnarakennuksen 15 p. Tammikuuta 1659 melkein perustuksia myöten. Senjälkeen rakennettiin se uudelleen Suomalaisen sotaväen asesäilytyspaikaksi. Sotaaikana 
        palveli se tukeena ja turvapaikkana ruotsalais-suomalaiselle sotajoukolle, olematta milloinkaan vihollisen piirittämänä.
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
        Kohta sen jälkeen, Toukokuun 3 päivänä 1639, perusti hän kirjeellänsä Turun linnasta tänne lasten koulun ("barne schola") eli "paedagogium", tämän ensimmäiseksi johtajaksi 
        nimitti hän pappismiehen Johannes Mannin, jonka samalla tuli olla linnansaarnaajana ja saada näistä toimistaan palkaksi kruunun kymmenykset kolmesta likinnä kaupunkia olevasta 
        kuninkaan latokartanosta, sekä teiniveron Pälkäneen pitäjästä. Tästä likemmin eräässä v. 1879 täällä ulostulleessa kirjassa nimeltä "Hämeenlinnan vanhemmista kouluista, 
        kirjoitti A. E. Faven".
      </p>
      <p>
        Likinnäseuraavina vuosina kaupungin perustamisesta oli ravintolanpito asukasten paraana elinkeinona ja josta heillä oli niukka elantonsa, kuin eräs vanha tilastollinen 
        käsikirja tietää. Sitäpaitsi pidettiin täällä kahdet suuret vuosimarkkinat.
      </p>
      <p>
        Mutta se ei ollut ainakaan tähdissä kirjoitettu, että asukkaat tuossa vanhassa hyvässä maakaupungissa saisivat iäti häiritsemätä viettää huomiota herättämätöntä elämäänsä. 
        Sillä koittipa sekin päivä, jolloin heidän täytyi "korkeain asianomaisten käskystä" muuttaa huonejumalansa toiseen paikkaan.
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
        joko voittaa tahi kuolla Suomen sotaväki, 6,000 miestä, ja odotti päästä koettelemaan voimiansa vihollisen kanssa. "Mutta silloin saapui Klingspor, otti arvollansa 
        komennon, antoi käskyjä kuin Klercker, mutta käski pakohon"
      </p>
      <p>
        Ja maaliskuun 7 p. 1808, alkoi Vanhan Klerckerin ja Adlercreutz'in vastustuksista huolimatta suomalaisen sotajoukon häpeällinen paluumatka pohjoista kohti.
      </p>
      <p>
        Puoli peninkulmaa Hämeenlinnasta luoteeseen on Parolan kenttä, suuri lakeus, jossa 100,000 miestä tykkineen mukavasti saattaa harjoitella. Kustaa III määräsi lakeuden 
        suomalaisen sotaväen harjoituskentäksi. Tässä taittoi "nerokuningas" vuonna 1782 pudotessaan hevosen selästä jalkansa eräissä harjoituksissa ja samassa paikassa piti 
        keisari-suuriruhtinas Alexander II yleistarkastuksen suomalaisesta ruotuväestä, jonka muistoksi mainitun väen upseerit pystyttivät paikalle pronssisen leijonan (Parolan 
        leijona). 
      </p>
      <p>
        Vuoden 1850 alussa teetti läänin silloinen kuvernöri vapaaherra Rehbinder linnan pohjoispuolelle vankien avulla tuon kauniin kaupungin parkin, joka taidokkailla 
        "raunioillaan", huvimajoillaan, varjokkailla metsillään ja hienolla juomalallaan on rakas pakopaikka kaupunkilaisille, kun kesän helle ja kuumuus on kovimmillaan. 
        Korkeammilta huipuilta parkissa on viehättävä näköala yli linnan, kaupungin ja ihanan ympäristön.
      </p>
      <p>
        Järven, joka tässä muodostaa ainoastaan muutaman sylen levyisen salmen, toisella puolella on läpi hakometsän tehty tie tuolle jyrkälle Aulangon vuorelle, jonka juurella 
        ympäröittynä viheriöillä puilla, makaa varjokas järvi, niin ihanan viehättävä, että käyttääkseen runoilian Z. Topeliuksen lausetta siitä, semmoista "ainoastaan löytää 
        Skottlandissa ja Suomessa".
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
      <p className="firstLetterStyle">
        Hämeenlinnan lutherilaisen seurakunnan väkiluku teki joulukuun 31 p. 1886 4,377 henkeä. Kun tähän lisää 7:n tarkk'ampuja pataljonan miehistön, tänne majoitetun venäläisen 
        sotaväen, kaupungissa lukuajoilla asuvan koulunuorison, sekä jäsenet kreikkalais-venäläisessä ja romalais-katolisessa seurakunnassa ynnä moseksen uskolaiset saattaa 
        kaupungin väkiluvun liioittelemata arvata noin 6,000 henkilöksi. Maaseurakunnassa oli samaan aikaan 1,191 henkilöä.
      </p>
      <p>
        Hämeenlinnan kaupunki ja maaseurakunta kuuluu samaan kirkkoherrakuntaan, mutta on heillä vuodesta 1804 ollut yhteinen kirkkoherra Wanajan pitäjäläisten kanssa
      </p>
      <Image placeholder={"blurred"} className="centeredSymbolStyle" alt="Sitaatti" src={citateClose} />
      <p className="italicSmallStyle">Kansalliskirjaston digitaaliset aineistot, Hämeenlinnan Osoite ja Ilmoitus Kalenteri, 1887 </p>
    </Layout>
  );
}
export const Head = () => (
  <>
    <html lang="fi" />
    <title>Kotisivu</title>
  </>
)
export default homePage;


/* image array for carousel
-------------------------------------------------------------*/
const carouselArray = [
  {
    key: "imageid1",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=tmk.160997135523400&index=0&size=large",
    licence: "Public Domain",
    org: "Uudenkaupungin museo - Ugin museon valokuvakokoelma",
    caption: "Näkymä Kaupunginpuistosta kohti linnaa.",
    title: "~1900"
  },
  {
    key: "imageid2",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917705462900&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma",
    caption: "Hämeenlinnan vanhan rautatieaseman tornipuolen päätyseinä.",
    title: "~1862"
  },
  {
    key: "imageid3",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917724168400&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma",
    caption: "Näkymä Hämeenlinnan kirkon tornista itään.",
    title: "~1890"
  },
  {
    key: "imageid4",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259858&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot - Böök A. Th",
    caption: "Kaksi miestä ja puinen pitkäsilta.",
    title: "~1900"
  },
  {
    key: "imageid5",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259121&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot - Böök A. Th",
    caption: "Luistelijoita Wetterhoffin rannassa.",
    title: "~1900"
  },
  {
    key: "imageid6",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917704842500&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuse - A. Alopaeus",
    caption: "Hämeenlinnan vanha rautatieasema radan puolelta.",
    title: "1899"
  },
  {
    key: "imageid7",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166927878871200&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma",
    caption: "Vanajaveden ensimmäinen rautatiesilta, joka oli kääntösilta.",
    title: "1902"
  },
  {
    key: "imageid8",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259093&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot - Böök A. Th",
    caption: "Valokuvaaja Böökin tytot Ahveniston rannalla.",
    title: "1905"
  },
  {
    key: "imageid9",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259112&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot Böök A. Th",
    caption: "Venäläistä varuskuntaa Raatihuoneenkadulla.",
    title: "1905"
  },
  {
    key: "imageid10",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259113&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot - Böök A. Th",
    caption: "Kaupunginhotelli vasemmalla, kirkko oikealla.",
    title: "1905"
  },
  {
    key: "imageid11",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259114&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot - Böök A. Th",
    caption: "Kuva torin yli kohti kaupunginhotellia eli seurahuonetta.",
    title: "1905"
  },
  {
    key: "imageid12",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-260693&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot - Böök A. Th",
    caption: "Näkymä Myllymäenkalliolta kaupunkiin.",
    title: "~1908"
  },
  {
    key: "imageid13",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166927877711600&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma",
    caption: "Vanajaveden ensimmäinen rautatiesilta, joka oli kääntösilta.",
    title: "~1910"
  },
  {
    key: "imageid14",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166927881179300&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma",
    caption: "Pitkäsilta Vanajaveden yllä Hämeenlinnassa, keskustasta Keinusaareen päin. Silta avattiin liikenteelle v. 1909.",
    title: "1916"
  },
  {
    key: "imageid15",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917716821800&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma",
    caption: "Hämeenlinnan uuden rautatieaseman kaupunginpuoleinen julkisivu.",
    title: "1919"
  },
  {
    key: "imageid16",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917725458200&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma",
    caption: "Hämeenlinnan uuden rautatieaseman kaupunginpuoleinen julkisivu",
    title: "~1930"
  },
  {
    key: "imageid17",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/bf156bd9512edb0e82d53b53455a7eb7.jpg",
    licence: "",
    org: "Hämeenlinnan kaupunginkirjasto - Yksityiskokoelma",
    caption: "Näkymä linnan länsipuolelta nykyisen Tampereentien tienoilta. Kuvan omistaja toimi vanginvartijana Hämeenlinnassa.",
    title: "~1910"
  },
  {
    key: "imageid18",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/990c0b41ffdc807ef69fba42dee26f04.jpg",
    licence: "",
    org: "Hämeenlinnan kaupunginkirjasto - Suomalainen kirjakauppa, Hämeenlinna",
    caption: "Hämeenlinnan laivaranta Rantapuiston laidalla. Satamaan valmistui arkkitehti Armas Rankan suunnittelema satamakonttori vuonna 1911.",
    title: "~1912"
  },
  {
    key: "imageid19",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/8722fd6f8e5b2d537d201c71e255969c.jpg",
    licence: "",
    org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
    caption: "Näkymä kirkon tornista länteen. Taustalla näkyy ortodoksinen sotilaskirkko",
    title: "~1900"
  },
  
];