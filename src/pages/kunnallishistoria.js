import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import Image from "react-bootstrap/Image";

import "../styles/base/global.css"

import Divider from "../assets/divider.svg"
import SubDivider from "../assets/sub-divider.svg"
import QuoteStart from "../assets/quotation-start.svg"
import QuoteEnd from "../assets/quotation-end.svg"

import front from "../images/content/kunnallishistoria/front.jpg"
import img1 from "../images/content/kunnallishistoria/img-1.jpg"
import img2 from "../images/content/kunnallishistoria/img-2.jpg"
import img3 from "../images/content/kunnallishistoria/img-3.jpg"
import img4 from "../images/content/kunnallishistoria/img-4.jpg"
import img5 from "../images/content/kunnallishistoria/img-5.jpg"
import img6 from "../images/content/kunnallishistoria/img-6.jpg"
import img7 from "../images/content/kunnallishistoria/img-7.jpg"
import img8 from "../images/content/kunnallishistoria/img-8.jpg"
import img9 from "../images/content/kunnallishistoria/img-9.jpg"
import img10 from "../images/content/kunnallishistoria/img-10.jpg"
import img11 from "../images/content/kunnallishistoria/img-11.jpg"
import img12 from "../images/content/kunnallishistoria/img-12.jpg"
import img13 from "../images/content/kunnallishistoria/img-13.jpg"
import img14 from "../images/content/kunnallishistoria/img-14.jpg"
import img15 from "../images/content/kunnallishistoria/img-15.jpg"
import img16 from "../images/content/kunnallishistoria/img-16.jpg"
import img17 from "../images/content/kunnallishistoria/img-17.jpg"

const KunnallisHistoriaPage = () => {
  return (
    <Layout titleText="Kunnallis-historiallinen kertomus">
      <Image className="centeredImageStyle" src={front} alt="Etusivu"/>
      <p className="caption">Hagman, Tyko</p>
      <p className="caption">Hämeenlinnan kaupunginkirjasto, 1900</p>
      <Divider className="dividerStyle"/>
      
      <p className="tocHeader">Piirteitä Hämeenlinnan kaupungin historiasta.</p>
      <p className="tocHeader">I</p>
      <Article titleText="Vanhan kaupungin perustus ja asema.">
        <br />
        <p className="initialCap">Hämeenlinnan kaupunki on saanut alkunsa pienestä linnakylästä eli kauppalasta, joka aikojen kuluessa vähitellen oli  muodostunut Birger jaarlin v. 1249 kristinuskon ja Ruotsin vallan vahvistukseksi 
          rakennuttaman Kruununlinnan eli Hämeen linnan läheisyyteen, nimittäin kapealle maakaistaleelle tämän pohjoispuolella. V. 1638 antoi näet Pietari Brahe tälle vähäiselle kauppakylälle kaupungin-oikeudet.</p>
        <p>Se kuului Hämeen-Uudenmaan lääniin, Etelä-Suomen  laamannikuntaan, alisen Hollolan kihlakuntaan ja Vanajan pitäjään. Suuren suuri se ei ollut eikä liikepaikkana sisämaassa tietysti voinutkaan saavuttaa samaa merkitystä kuin 
          merikaupungit. Asemakin oli sangen ahdas, kuten paikallisuuteen perehtynyt heti huomaa. Etelässä esti luonnollista laajenemista linnoitus, idässä ja pohjoisessa virta ja lännessä suoperäinen niitty, joka keväisin ja syksyisin 
          oli tykkänään veden vallassa. Paikka oli sama, jossa meidän päivinämme sijaitsevat venäläisen sotaväen kivikasarmit ja sen päällyskunnan asunnot. Mitään suurempaa kaupunkia siihen ei mahtunut, mutta, miten olikaan, vaurastui 
          tämä Pietari Brahen perustus kuitenkin aikojen kuluessa, huolimatta kaikista ehkäisevistä rajoituksista, sikseen, että se jotakuinkin piti paikkansa suomalaisena sisämaan kaupunkina ja osoitti olemassa-olonsa tarpeellisuuden.</p>
        <p>Mitään mainetta kauppa- tai teollisuuskaupunkina ei ole Hämeenlinna koskaan saavuttanut eikä näy olleen siksi luotukaan. Sen asema sisämaassa koskettoman vesistön varrella ja maailman markkinoille vievien kulkuneuvojen kehnous 
          oli luonnollisena esteenä. Mutta sitä vastoin on Hämeenlinnan kaupungilla alusta alkaen ja meidän päiviimme saakka varsin huomattava merkitys sivistyksen ahjopaikkana Suomen sisämaassa, suomalaisen väestön keskuudessa, niinkuin 
          Birger jaarlin linnoituskin vuosisatojen vieriessä on seisonut kristinopin ja länsimaisen viljelyksen perustavana ja puolustavana pylväänä supi-Suomen saloilla. Merkittävä tässä suhteessa onkin että kaupunki sai ensimäisen 
          koulunsa jo perustuksensa jälkeisenä vuonna eli 1639, koulun, joka myöhempinä aikoina, huolimatta sotien saattamasta turmiosta ja opetuksen pysäyksestä, kehittyi varsin korkealle, kuten alempana saamme nähdä.</p>
        <p>Miltä näytti nyt puusta katsoen tämä vanha Hämeenlinna, pienoinen kujakauppala Vanajaveden rannalla?</p>
        <p>Kaupunkia ympäröitsi korkea pystyaita, aikakauden ankara tulliraja. Sen pohjoispäässä oli tulliportti, jonka kautta päästiin kaupunkiin. Tältä portilta kulki sitten pääkatu jotensakin suorana koko kaupungin läpi, leveten sen 
          keskikohdalla eli nykyisten kivikasarmien ja rannan välillä toriksi ja päättyen etelässä linnaan vievään porttiin. Pääkadun kanssa yhdessä suunnassa meni kaksi lyhyempää katua, ei kuitenkaan aivan suorina. Poikkikatuina oli 
          sikin sokin ahtaita kujia. Ja porvarien talorakennukset sijaitsivat myös hujan hajan tonteillaan, ilman säädettyä rakennusjärjestystä. Kaikkinainen komeus ja loisto oli niistä kaukana. Oli siinä tosin joukko alkuperäisimpään 
          malliin rakennettuja <span className="quote">taloja</span> (hus), mutta myöskin melkoinen määrä turvekattoisia <span className="quote">tupia</span> (stugor), vieläpä savupirttejäkin. <span className="quote">Talot</span> lienevät 
          olleet enimmäkseen tiilikattoisia. Kadut ja kujat tietysti tavallisia kyläteitä ilman minkäänmoista kivitystä.</p>
        <p>Kirkko sijaitsi kaupungin pohjoispäässä, kellotapuli lähellä sitä kaupungin puolella, koulu aivan lähellä linnaa.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">II</p>
      <Article titleText="Ison Vihan hävitys. Ahtauden ahdinko.">
        <br />
        <p className="initialCap">Tuli sitten Ison Vihan kovat ajat. V. 1713 hyökkäsivät venäläiset maahan, valloittivat sen suurimmaksi osaksi ja ottivat vielä samana vuonna haltuunsa myöskin Kruununlinnan ja Hämeenlinnan kaupungin, 
          joka runsaassa mitassa sai kokea hävityksen kauhistusta. Viholliset sytyttivät melkoisen osan kaupunkia palamaan, ja muutenkin ryöstettiin ja hävitettiin tunnetun venäläisen sota-ohjelman mukaan. Asukkaita pakeni paljon 
          turvallisempiin seutuihin.</p>
        <p>Seitsemän vuotta herrastelivat venäläiset kaupungissa. Erään senaikuisen valaisevan luettelon mukaan oli rauhan syntyessä heidän hallussaan: 14 asuttavaa taloa, 11 asuttavaa tupaa, 4 hävitettyä (ödelagda) taloa, 14 aittaa, 5 
          hävitettyä aittaa, 13 kauppapuotia, 15 kamaria, 11 saunaa, 3 kellaria ja 2 tallia. Suomalaisten ja ruotsalaisten hallussa oli: 15 asuttavaa ja 11 hävitettyä taloa, 3 asuttavaa ja 6 hävitettyä tupaa, 13 aittaa ja 2 hävitettyä 
          aittaa, 9 kauppapuotia, 10 saunaa, 10 tallia, 11 navettaa, 1 paja, 2 kellaria ja kirkko.</p>
        <p>Yhteensä löytyi siis kaupungissa Ison Vihan loputtua: 20 tupaa, joista 6 hävitettyä; 44 taloa, joista hävitettyjä 15; aittoja 34, joista 7 hävitettyä; kauppapuoteja 22, joista enemmän kuin puolet venäläisten hallussa; 12 tallia, 
          11 navettaa, 21 saunaa ja 15 <span className="quote">kamaria</span>. Yleiset rakennukset, kirkon ja koulun, olivat kaupungin harvalukuiset asukkaat jättäneet oman onnensa nojaan, joten nekin olivat peräti huonossa kunnossa.</p>
        <p>Venäläisiltä vastaanotti rauhan tultua sekä linnan että kaupungin Ruotsin valtakunnan valtuutettuna silloinen koulunrehtori Michael Sadelin, jonka tulisi niitä hoitaa kunnes vakinainen linnan-päällikkö määrättäisiin. Ruotsin 
          valtiopäivät myönsivät, kuten tiedetään, maallemme vapaavuosia ja tänne lähetettiin kommissiooneja tutkimaan maan tilaa. Näiden antamien tietojen johdosta myönnettiin sodassa enimmän kärsineille kaupungeille, kuten Helsingille, 
          Porvoolle, Tammisaarelle ja Hämeenlinnalle, vielä erityisiäkin vapaavuosia, mutta niin kurjaksi arveltiin Hämeenlinnan tilaa, ettei porvaristo voisi vapaavuosinakaan saada kaupunkiansa kuntoon. Tämänpä tähden ehdoitti jo maaherra 
          Stierncrantz, joka täällä oli tarkastuksen toimittanut, m. m. että koetettaisiin taivuttaa muutamia rikkaita kauppiaita joko Turusta tai muualta muuttamaan Hämeenlinnaan, jonka syntyperäiset porvarit eivät enää laisinkaan 
          jaksaisi maakuntaa liikkeellään hyödyttää.</p>
        <p>Kesällä v. 1724 kysyivät kaupungin porvarit, kiittäen saamistaan vapaavuosista, maaherralta, eivätkö he köyhyytensä takia voisi päästä maksamasta kotitarpeiden aksiisia, s. o. tulliveroa kaloista, viljasta, puista y. m. Pyyntöön 
          ei voitu suostua, varsinkin koska, kuten selitettiin, tulo tästä verosta vuoden lopulla tulisi jaettavaksi kaupunkien vahinkoa kärsineiden porvarien kesken. Ei myöskään Turusta tai muualta ilmestynyt mitään rikkaita kauppiaita 
          hävitettyyn sisämaan kaupunkiin.</p>
        <p>Mutta maalta tuli sen sijaan koko joukko uutta väkeä, muutamat tosin asettuakseen vakinaisesti asumaan kaupungissa, mutta toiset vain saadakseen kaupungin asukkaina nauttia sille suotuja vapaavuosia. Hallitus huomasi juonen ja 
          määräsi kuninkaallisella säädöksellä varsin viisaasti, että edellisten tuli saada porvari-oikeus ja siten, vapaavuosia nauttien, auttaa alkuperäisiä porvareita saamaan kaupunkia kuntoon, jota vastoin jälkimäisten eli tilapäisten 
          asukkaiden tuli maksaa kaikki ulosteot. Verovapaudesta oli myöskin palvelusväki suljettu pois, sille kun sodan kautta ei ollut mitään vahinkoa tullut.</p>
        <p>Oli täten joutunut jokunen määrä uusia porvareita kaupunkiin, ja suomalaisen sitkeydellä ryhdyttiin minkä jaksettiin korjaamaan sodan saattamia vaurioita. Puute kelvollisista asunnoista oli kuitenkin pitkät ajat. Niinpä m. m. v. 
          1725 oli korkean esivallan pakko kolme kertaa, jopa sakonkin uhalla, käskeä kaupunkilaisia hankkimaan huoneita muutamalle 12-henkiselle tutkijakunnalle, eikä niitä sittenkään saatu muulla tavoin kuin että viimein kaupungissa 
          asuskelevat upseerit komennettiin muuttamaan linnaan — pois tutkijakunnan tieltä. V. 1728 sai maistraati käskyn hankkia huone kaupunkiin saapuvalle mestaajalle. Mutta siihenkin vastasi maistraati että käskyn täyttäminen oli 
          mahdoton, koska kaikki liikenevät huoneet ankaran sotaväen-majoituksen takia olivat sen hallussa. Vasta uusittujen käskyjen perästä hankittiin jotenkuten mainitulle virkailijallekkin asunto.</p>
        <p>Vuosien kuluessa tämä asuntojen vähyys kenties kuitenkin olisi johonkin määrään tullut autetuksi, mutta kohtasipa kaupunkilais-parkoja uusi ja odottamaton este. Ainoa hitunen luonnollisen laajentamisen alaa olisi ollut linnaan 
          päin, mutta — se oli tämän omaa, ja sitä paitsi oli kaupunkia jo ennaltaankin linnan alueella. V. 1733 tuli virallinen ilmoitus maistraatille, että korkeat asianomaiset olivat päättäneet rakennuttaa uusia varustuslaitoksia 
          Hämeenlinnaan, ja koska osa kaupunkia oli rakennettu linnan alueelle, niin tulisi tällä kohdalla asuvien omalla kustannuksellaan muuttaa rakennuksensa toiseen paikkaan. Näiden joukossa oli myöskin koulu, joka siis kaupungin 
          kustannuksella muutettaisiin. Ainoastaan kaupungin arestihuone, joka sekin oli tiellä, luvattiin jalomielisesti muuttaa valtion kustannuksella.</p>
        <p>Koko muuttopuuha raukesi kuitenkin sillä kertaa tyhjiin. Kaupunkilaiset eivät näy olleen käskystä millänsäkään, vaan odottivat levollisesti asiain menoa, ja hallitus, jonka omatkin raha-asiat näihin aikoihin olivat kaikkia muuta 
          kuin kehuttavalla kannalla, ei varustuslaitoksiansa varten ryhtynytkään tuumasta toimeen.</p>
      </Article>
      <SubDivider className="dividerStyle"/>
      
      <p className="tocHeader">III</p>
      <Article titleText="Kysymys kaupungin muutosta. Kova tulipalo v. 1739.">
        <br />
        <p className="initialCap">Mutta yhtäkaikki on tämä virallinen puserrus pidettävä ensimäisenä ehdoituksena kaupungin muuttamisesta toiselle paikalle. V. 1736 esittää nyt nimenomaan maaherra että koko kaupunki muutettaisiin 
          n. s. <span className="quote">Ojosmäelle</span>, mutta maistraati ei vastaa hänen kirjelmäänsä mitään eikä uudistettuunkaan lausunnon pyyntöön. Ja samalla tapaa käy alusta vuotta 1739, jolloin vastaus oli annettava 14 päivän 
          kuluessa. Kaupunki maistraatineen menettelee ikäänkuin ei asia sitä koskisikaan. Viimein panee maaherra — A. E. Gyllenstjerna — kuninkaan käskystä nimismiehen katsomaan uutta paikkaa uppiniskaiselle kaupungille ja käskee hänen 
          määrätä muutto-ajankin. Porvaristo saisi kuitenkin edusmiesten kautta valvoa etujaan.</p>
        <p>Ja ennenkun tätä käskyä ennätettiin panna toimeen, kohtasi kaupunkia kamala onnettomuus, joka, samalla kun se saattoi koko silloisen kujakauppalan melkein autioksi ja niin muodoin mitättömäksi, muodostui uudeksi kehoittimeksi 
          sen muuttamiseen.</p>
        <p>Syttyi näet eräänä kauniina kesäpäivänä tulipalo.</p>
        <p>Kesäkuun 8 p:nä 1739 pääsi se valloilleen porvari Juhana Toreenin talosta, joka sijaitsi kaupungin läntisellä puolella. Kaikki porvarit mainitaan olleen poissa kotoaan, toiset suolan ja muiden puoti-tavarain ostossa Turussa, 
          toiset maaseudulla hankkimassa maalaistuotteita. Vaimot, lapset, harvat kotosalla olevat miehet muodostivat huonon vapaaehtoisen palokunnan, eikä liene virallistakaan semmoista ollut olemassa. Kaupungissa mainitaan silloin 
          löytyneen 33 eheää taloa. Niistä paloi poroksi 24, joten siis ainoastaan 9 taloa, jotka sijaitsivat rannemmalla eli torin itäpuolella, pelastui. Yleisistä rakennuksista paloi raatihuone, joten tulipalon jälkeisinä vuosina 
          oikeutta istuttiin hyyryhuoneissa.</p>
        <p>Irtaimistostakin paloi suurin osa. Vahinko arvattiin kaikkiaan noin 9,349 hopeatalariksi.</p>
        <p>Tulipalon raivotessa oli linnakin ollut vaarassa. Hallitus sentähden kielsi kaupunkilaisia 100 talarin sakon uhalla rakentamasta talojaan uudelleen. Ne olivat liian suurena vaarana Kruununlinnalle. Hätätilaan joutuneiden 
          asukkaiden pyynnöstä anoi silloin maaherrakin kuninkaalta, että kaupunkilaiset saisivat rakentaa itselleen edes väliaikaisia asumuksia palaneiden sijalle, kunnes määrätty muuttaminen voisi tapahtua.</p>
        <p>Tähänkään pyyntöön ei kuitenkaan suostuttu. Kieltävä vastaus annettiin kuninkaallisessa kirjeessä syyskuan 20 p:ltä. Ja tuli maaherran viipymättä ryhtyä toimiin uuden paikan hankkimiseksi kaupungille. Valtiopäivät samana vuonna 
          olivat, katsoen siihen, että kaupunki oli liian lähellä linnaa ja vallituksia, niinikään määränneet sen muutettavaksi pois. Maaherra, joka ei itse mitään sopivaa paikkaa tietänyt, asetti nyt kaksi nimismiestä ja everstiluutnantti 
          Michael von Bütnerin kaupungille paikkaa valitsemaan. Ja tämä kommissiooni ehdoitti uuden kaupungin alaksi läheisen Ojoisten latokartanon pellot. Mutta Ojoisten silloinen haltija, eversti Carl Johan Ramsay, pani vastaan, ja tämän 
          valituksen seurauksena oli kuninkaallinen kirje heinäk. 15 p:ltä 1740, jossa käskettiin maaherraa estämään, <span className="quote">kaikkinaisia uudisrakennuksia Hämeenlinnassa, kunnes kunink. Majesteetti olisi suvainnut 
            vastaan-ottaa Valtiokamari- ja Kauppakolleegionsa alamaiset lausunnot asiassa ja nämä sitten vahvistaa</span>.</p>
        <p>Mutta näistä lausunnoista ja niiden vahvistuksesta ei kuulu tuon enempää. Koko muuttohanke kaikkine syntyneine ehdoituksineen näkyy hallituksenkin puolelta jäävän sikseen, ja toiselta puolen on porvaristo kuitenkin kiellettynä 
          rakentamasta itselleen uusia huoneita.</p>
        <p>Ja tämmöistä kiusallista välipulaa vallitsee lähes puoli vuosisataa.</p>
        <p>Onko niin ollen mahdollistakaan että Hämeenlinna voi edistyä muiden kaupunkien rinnalla? Ihmetellä tosiaan täytyy etteivät arvoisat porvarit jättäneet koko loukkoansa hiiteen. Mutta suomalaisen ja eritoten hämäläisen 
          liikuttavalla rakkaudella kotikuusensa huminaa kuullellen rakentavat he, kuninkaallisista käskyistä huolimatta, itselleen edes jonkinmoiset suojat talven pakkasia vastaan. Ja miten onkaan, näkyy kaupunki ennen Pikku Vihaa jälleen 
          olevan, vaikkapa heikostikin, jaloilleen pääsemässä — kuin loisen tölli luvattomalla maalla.</p>
        <p>Mutta tuo alituinen pelko, että heidän on täytyminen muuttaa kotinsa muuanne, lamauttaa tietysti porvareilta kaiken sen liikkeellisen toimeliaisuuden, jota muuten voisi odottaa heidän puoleltaan.</p>
        <p>Muuan pastori Oimelaus antaa kaupungin tilasta näihin aikoihin seuraavan atestin: <span className="quote">Kaupunkilaisten elinkeinoliike on silminnähtävästi onnettoman tulipalon jälkeen, joka kesäkuussa v. 1739 raivosi kaupungissa, 
          vähentynyt sen kautta, että heitä, koska talot muka ovat liian lähellä linnaa, on 100 hopeatalarin sakon uhalla kielletty uudelleen rakentamasta palaneita talojaan. Senpätähden olisi toivottava että korkea esivalta armossa tahtoisi 
          peruuttaa edellä-mainitun kiellon taikkapa antaa köyhille alamaisilleen sopivan ja edullisen paikan, jossa he rauhassa saisivat rakentaa ja asua</span>.</p>
        <p>Sekä 1740-41 että 1746-47 vuosien valtiopäivillä huomautti kaiken tämän vallitsevan epäkohdan ja lamauskannan johdosta kaupungin edusmies, kuinka tärkeää sen vaurastumiselle olisi että mitä kiireellisimmin päätettäisiin, tuleeko 
          kaupunki todellakin muutettavaksi vai ei, sekä mikä edellisessä tapauksessa sen paikaksi oli tuleva. Mutta kaikista näistä huomautuksista ei mitään näkyvää tulosta lähtenyt. Sillä v. 1751 ei vielä ollut tullut minkäänmoista 
          päätöstä asiassa. Samana vuonna avattaville valtiopäiville lähtiessään evästetään näet Hämeenlinnan edusmies porvarien puolesta uudelleen anomaan että edes jonkinlainen päätös asiassa annettaisiin, jonka ohessa erityisessä 
          anomuskirjassa edusmiehen kautta pyydetään, että kuninkaall. Majesteetti armahtaisi kaupungin asukasten köyhyyttä ja kurjaa tilaa antamalla heille valtiovaroista jonkun raha-avun niiden huoneiden muuttamista varten, jotka he 
          palon jälkeen ovat itsellensä rakentaneet.</p>
        <p>Mutta tulos on kauvas toistaiseksi sama kuin ennenkin. Sentähden näistä muuttopuuhista edempänä enemmän.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">IV</p>
      <Article titleText="Kirkonrakennus-puuhia. Pappila.">
        <br />
        <p className="initialCap">Kaupungin ollessa Ison Vihan aikana vihollisten vallassa olivat, kuten luonnollista onkin, sen yleiset rakennukset jääneet kokonaan hoitoa vajalle ja joutuneet perin kurjaan kuntoon. Omista 
          mieskohtaisista murheistaan huolimatta alkoivat porvarit kuitenkin niiden parantamista ajatella, sitoutuen köyhyydessään suuriin uhrauksiin kyllä. Ja se on kaunis todistus tämän pienen paikkakunnan ikääskuin synnynnäisestä 
          taipumuksesta henkisiin pyrintöihin, että nämäkin aikoina jo ennen kaikkea tahdottiin pitää huolta kirkollisen ja koulu-opetuksen menestymisestä.</p>
        <p>Vanhimpina aikoina, jolloin Hämeenlinna vielä oli kauppalana, kuului se Vanajan seurakuntaan, jonka pappi kävi saarnaamassa linnan rukoushuoneessa, Tämä muutettiin sitten viljamakasiiniksi, kaupunki muodostettiin omaksi 
          seurakunnaksi ja kirkkoa ruvettiin rakentamaan heti Pietari Brahen perustuksen perästä. Se valmistui v. 1652, oli puusta ja pienenläntä, vaan mainitaan somaksi ja sieväksi. Sijaitsi kuitenkin epäkäytännöllisesti valitulla 
          paikalla, nimittäin pienellä mäenrinteellä kaupungin pohjoispäässä, jossa tuon tuostakin maaperä lohkeili rakennuksen kohdalta ja keväisin ja syksyisin tulvavesi lähes seiniä myöten saarteli melkein koko kirkon. Hautausmaana 
          käytettiin tämän mäen läntisellä puolella olevaa suoperäistä niittyä, joka tulva-aikoina oli tykkänään veden vallassa. Kellotapuli oli kappaleen matkaa kirkosta kaupunkiin päin.</p>
        <p>Ison Vihan tuhotyöt muunsivat nyt tuon ennen siroisen kirkonkin viheliäiseksi, ränstyneeksi variksen-pesäksi. Kaupunkilaiset pelkäsivät sen kokonaan hajoavan. Kernaasti olisivat he itse heti rauhan tultua ryhtyneet sitä 
          korjaamaan, ja tuumia näkyy tässä suhteessa olleen sinne ja tänne, mutta heidän oma varattomuutensa, jonka vallitessa itsekkin elivät melkein kuin taivaan linnut, oli ankarana esteenä, ja kirkon kassa puolestaan typi-tyhjänä. 
          Sen olivat sotavuosina, kuten muutamasta rovastin-käräjäin pöytäkirjasta selvenee, silloinen pastori Chosselius ja hänen kirkkoväärtinsä Biur, itsekkin vihollista Ruotsiin paeten, vieneet sinne — ja siellä jakaneet ja 
          hävittäneet.</p>
        <p>Useissa rovastin-käräjissä oli nyt kirkon korjausasia esillä, ja porvarit lupasivat kyllä itse suorittaa työt, kunhan vain keinolla tai toisella saataisiin siihen tarvittavat varat ja ainekset. Mutta vaikka maaherrakin pani 
          parastaan näitä hankkiaksensa, ei saatu moneen vuoteen mitään kokoon, ja v. 1729 rovastin-käräjäin pöytäkirjassa mainitaan jo viimein että kirkko — niinkuin pappilakin — menivät perikatoaan kohti. Samana vuonna pyysi kuitenkin 
          maaherra kuninkaalta lupaa, että saataisiin koota kolehti ympäri valtakuntaa Hämeenlinnan kirkon korjaamista varten, ja se keino tepsi niin pitkälle, että seuraavana vuonna tuli lupa koota pyydetty kolehti, mutta ainoastaan 
          Turun ja Porvoon hiippakunnista. Tämä keräys tuotti nyt 254 vaskitalaria, jota paitsi h. kunink. Majesteettinsa itse lahjoitti 94 taiaria kirkon korjaamista varten.</p>
        <p>Näillä vähillä varoilla korjattiin sitten kirkko, niinkuin kovin ränstyneessä tilassa oleva tapulikin, jotakuinkin käytettävään kuntoon. Mutta ei suinkaan hyvään. Siihen olisi tarvittu melkein yhtä paljon varoja kuin kokonaan 
          uuden kirkon rakentamiseen. Koska vaillinaisen tilansa ohessa vanha kirkko oli sopimattomalla paikallakin, nousi sentähden jo 1731 vuoden rovastin-käräjillä kysymys uuden kirkon rakentamisesta. Tähän ei kuitenkaan silloin vielä 
          arveltu saatavan varoja kokoon, jonka tähden seurakunta rupesi hommaamaan aineksia vanhan kirkon korjaamiseen uudestaan. Hämeenlinnan kirkolliseen seurakuntaan kuuluivat myöskin läheiset kuninkaalliset latokartanot, Ojoisten, 
          Saaristen ja Hätilän, ja näiden talonpojat nyt hämeenlinnalaisten pyynnöstä sitoutuivat tuomaan yhteensä 150 tukkia. Hakalan ja Suon torpat antaisivat myös osansa. Mutta näin oli, kun kaikki haalittiin yhteen, itse teossa jo 
          saatu varoja ja aineksia uudenkin kirkon rakentamista varten, ja niinpä vihdoin v. 1734 kaupunkilaiset päättivät ryhtyä tähän siihen aikaan suurenmoiseen työhön. Itse sitoutuivat he melkoisiin uhrauksiin: kaksi taloa yhteisesti 
          rakentaisi 10 kyynärää perustusta paikalle; kaupungista löytyvistä 41 savusta antaisi kukin 6 lautaa ja 140 kattopaanua; kolme taloa yhteisesti hankkisi tynnyrillisen kalkkia.</p>
        <p>Rakennusmestariksi tuli semmoisena kuuluisa Hattulan lukkari Heikki Oikolin, jolle seurakunta suostui maksamaan palkkaa 250 vaskitalaria. Rakennustyöt alkoivat sitten toukokuussa 1735, ja v. 1738 oli kirkko sikseen valmistunut, 
          että penkkijako voitiin toimittaa. 49 eri perhettä sai siinä osansa. V. 1740 tervattiin uusi kirkko ja oli siten täydelleen valmiina, mutta mainitaan tulleen tarkoitukseensa vihityksi jo lokakuussa 1735.</p>
        <p>Se ei seisonut aivan samalla paikalla kuin entinen, vaan vähän ylemmällä mäen päällä, joten tulvavedet eivät voineet rakennuksen perustuksia kalvaa. Muodoltaan oli se tavallinen ristikirkko.</p>
        <p>Hautausmaa oli niinikään tulvavesien takia muutettu samalle mäelle. V. 1747 rakennettiin sitten uusi aitaus kirkon ja hautausmaan ympärille ja muutamia muitakin pienempiä korjauksia suoritettiin.</p>
        <p>Mutta tähän <span className="quote">kirkkohistoriaan</span> palaamme vielä edempänä.</p>
        <p>Kaupungin pappila sijaitsi ammoisista ajoista eli kaupungin perustamisesta asti sen kehyksen ulkopuolella, nim. n. s. Pyövelinmäellä eli melkeittäin sillä paikalla, josta nykyinen kaupungin puisto alkaa. Sen oli valtio 
          rakennuttanut omalla kustannuksellaan ja sitten jättänyt kaupungin huostaan. Suuri se ei ollut: matala, turvekattoinen rakennus pienine akkunoineen ja akkunaluukkuineen, sisältäen ainoastaan salin ja kaksi kamaria.</p>
        <p>Ison Vihan temmellyksessä hävittivät ja osaksi polttivatkin venäläiset tämän pappilarakennuksen, niin että se pitkät ajat oli peräti rappiolla, ja 1732 vuoden rovasti-käräjäin pöytäkirjassa mainitaan viimein, että pappi 
          perheineen siinä asuessansa oli alituisessa hengenvaarassa. Jo v. 1723 olivat kaupunkilaiset köyhyydessään pyytäneet valtiolta apua sen korjaamiseen, mutta mitään semmoista ei saatu. Kääntyi sitten maaherra samassa tarkoituksessa 
          kuninkaan puoleen, ja nyt lienee vähän apua tullut, koska v. 1733 mainitaan, että kaupunkilaiset alkoivat rakentaa uutta pappilaa <span className="quote">maaherran ja linnanpäällikön osoittamalle paikalle</span>. Kuninkaan apuvarat 
          eivät kuitenkaan lähimäärinkään tarpeeksi asti riittäneet, vaan mainitaanpa nimenomaan että porvaristo lopultakin jatkoi pappilan rakentamista <span className="quote">omilla varoillaan</span>. Se oli kunnossa jo ennenkun uutta 
          kirkkoa ruvettiin rakentamaan.</p>
        <p>Mutta pappilastakin vielä pari sanaa tuonnempana.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">V</p>
      <Article titleText="Koulu.">
        <br />
        <p className="initialCap">Ensimäisen koulunsa sai Hämeenlinnan kaupunki, kuten olemme maininneet, jo v. 1639 valistusta harrastavan perustajansa toimesta. Se oli pieni lastenkoulu, jossa opetettiin katkismusta, ruotsinkieltä, 
          luvunlaskua ja kirjoitusta. Opetuskielenä käytettiin todennäköisesti suomea, ainakin alkaville oppilaille. Lieneekö varttuneempia varten, kuten muissa samankaltaisissa kouluissa, käytetty latinaa vaiko ruotsia, ei varmaan 
          tiedetä.</p>
        <p>Ensimäiseksi rehtoriksi ja opettajaksi Pietari Brahe määräsi Johannes Manni nimisen pappismiehen, jonka samalla tulisi olla linnan saarnaajana, ja tämä sai valita itselleen myöskin apuopettajan, joten luultavaa on että jo 
          tässäkin koulussa, — paedagogium'issa, kuten tällaisia alkeiskouluja tavallisesti nimitettiin — oli kaksi luokkaa. Samoin kuin Manni olivat koulun neljä seuraavaakin rehtoria samalla linnansaarnaajia ja kaupungin kirkkoherroja. 
          V. 1688 eroitettiin rasittava rehtorin- ja opettajan virka kirkkoherran toimista, joka kuitenkin näkyy yhä edelleenkin pysyneen koulun inspehtorina.</p>
        <p>Kouluhuoneusto, jonka arvattavasti valtio oli rakentanut, vaan kaupunki piti kunnossa, sijaitsi lähellä linnaa.</p>
        <p>Mutta sivistyksen tarve paikkakunnalla kasvoi, ja v. 1690 muutettiin niinmuodoin tämä lastenkoulu neliluokkaiseksi triviaalikouluksi. Siinä olisi annettujen määräysten mukaan pitänyt olla viisi opettajaa: rehtori, konrehtori, 
          vanhempi ja nuorempi kolleega sekä <span className="quote">apologisti</span> eli alimman koulun opettaja. Latinankieli ja uskonto olivat opetuksen pääaineina, niinkuin ajan henki vaati.</p>
        <p>Missä määrässä tämä tällä tavoin virallisesti lavennettu koulu oikeastaan pääsi vaikuttamaan, on kuitenkin vallan epätietoista. Sillä lavennuksen jälkeen tuli samalla vuosikymmenellä maahamme tunnettu kauhea nälänhätä, ja pian 
          pestautui myös melkoinen määrä koulun oppilaita sotaväkeen. V. 1710 on Hämeenlinnan koulussa ainoastaan kolme luokkaa ja yhtä monta opettajaa sekä 23 oppilasta. Ja kolme vuotta myöhemmin, kun venäläiset karkasivat kaupunkiin, 
          näkyy koulu kokonaan lakanneen toimestansa ja siten olleen olemattomana Ison Vihan loppuun asti. Eräs sen entisistä rehtoreistakin, joka tästä virasta oli tullut Hämeenkyrön kirkkoherraksi v. 1695, sai persoonallisesti kokea 
          sodan kovuutta: vietiin näet sotavankina Venäjälle 1714, päästen kuitenkin rauhan tultua kirkkoherranvirkaansa jälleen.</p>
        <p>Mitään jälkiä koulun uudesta vaikutuksesta ei tule näkyviin ennenkun v. 1723. Ainakin pari vuotta myöhemmin on siinä taasen kolme luokkaa ja kolme opettajaa; ja sellaisena pysyikin koulu luokkaluvun puolesta aina 
          kevätlukukauden alkuun v. 1817.</p>
        <p>Ison Vihan loputtua oli koulurakennus niin kurjassa tilassa, että sitä tuskin voitiin käyttää. V. 1733 se hajoitettiinkin maan tasalle ja uusi rakennettiin toiselle paikalle, nim. lähelle kirkkoa. Se tuli maksamaan 218 talaria 
          25 äyriä. Sekään ei ollut suuri: yksi avarampi sali vain, pienempi kamari ja porstua. Jo v. 1754 tarvittiinkin sentähden ja hankittiin uusi avarampi koulurakennus. Siinä oli kaksi koulusalia ja etehinen, ja sitä käytettiin 
          vuoteen 1783 asti, jolloin uusi, entistä paljon uhkeampi koulukartano rakennettiin uuteen kaupunkiin.</p>
        <p>Hämeenlinnan triviaalikoulu oli tosin ainakin opettajaluvun puolesta pienempi Porin, Vaasan ja Oulun kouluja. Mutta jo viime vuosisadan keskivaiheilla oli siinä kuudettakymmentä oppilasta ja 1777 koko 80. Enemmänkin olisi ollut 
          — sanoo kirjelmässään kuninkaalle maaherra A. de Bruce — joll'ei kaupungissa olisi vallinnut alituinen asuntojen puute.</p>
        <p>Tässä kirjelmässään puuhaa maaherra de B. muuton lisää opettajavoimia koululle, pyytäen että Lohjan pitäjässä sijaitsevan pedagogiumin opettaja siirrettäisiin Hämeenlinnaan, koska hänellä Lohjalla oli kovin vähän oppilaita. Ja 
          niinpä mainitaankin Lohjan pikkukoulun opettajan tulleen konrehtoriksi Hämeenlinnan triviaalikouluun.</p>
        <p>Pienet oli palkat sen ajan koulunopettajilla. Niinpä Hämeenlinnan triviaalikoulun rehtorilla oli palkkaa 50 hopeatalaria, kolleegalla 40 talaria ja apologistilla 33 talaria. Vuodesta 1762 alkaen saivat opettajat kuitenkin 
          palkkansa viljassa, ja se näkyy käyneen heille edullisemmaksi. Rehtori tuli siten saamaan 22 tynnyriä 7 1/2 kappaa, kolleega 17 tynnyriä 24 8/9 kappaa ja apologisti 14 tynnyriä 26 kappaa ruista. V. 1774 määräsi Kustaa kuningas 
          että kaikkien virkamiesten palkat olisivat maksettavat rahassa, mutta maaherra de Brucen erityisestä pyynnöstä saivat Hämeenlinnan koulunopettajat edelleenkin nauttia palkkansa viljassa. He näkyvät asuneen vuokrahuoneissa.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">VI</p>
      <Article titleText="Tullihuone ja tulli-aita. Tiet ja silta.">
        <br />
        <p className="initialCap">Jo ennen Ison Vihan aikoja oli kaupungissa tullihuone, Mutta sodan kestäessä, kun kauppa oli peräti lamassa ja olot muutenkin mullin mallin, ei myöskään tulleja säännöllisesti kannettu, ja 
          tullihuonetta tarvittiin tuskin nimeksikään. Senpä tähden se pahasti rappeutuikin, ja rauhallisten olojen palattua ja kaupan jälleen hieman elvyttyä sai hallitus tämän johdosta monta kertaa muistuttaa maistraatia että kaupungin 
          tuli pitää tullihuone kunnossa. Sitä korjattiinkin maistraatin omasta toimesta yhtä monta kertaa, koska porvarit näkyvät olleen varsin vastahakoiset tämän velvollisuuden täyttämiseen.</p>
        <p>Pienenä riidan-kapulana pysyi myös pitkät ajat kaupunkia ympäröivä tulli-aita. Se oli paikka paikoin aivan rikki ja tulliportit huonossa kunnossa, niin ettei innokas tullinhoitaja voinut tunnollisesti virkaansa hoitaa, kuten 
          hän itse valittaa. Mutta porvarit eivät korjauksilla hätää pitäneet, sillä jokainen tappio tullin kassassa oli tietysti voittoa heidän omassaan. V. 1734 tuli maaherran kautta käsky, että maistraatin heti tuli 200 talarin sakon 
          uhalla saattaa tulli-aita kuntoon. Mutta siitä ei näy mitään tulleen, sillä jo seuraavana vuonna valittaa tullinhoitaja, nimeltä Wallman, m. m. että kaupunkilaiset ja muutkin kursailematta käyttävät muuanta linnan alla olevassa 
          itäisessä aidassa löytyvää suurta aukkoa, ajaen siitä sekä sisään että ulos; ja kun siinä ei löydy mitään virallista tulliporttia, niin on hänen, tullinhoitajan, mahdotonta periä tullia siinä. Nytpä ryhtyi tosin maistraati siihen 
          toimeen, että suomeksi ja ruotsiksi kuulututti asianomaiset ankarat tulliasetukset kirkossa, mutta kuuroille korville, sillä porvaristo ei pannut kahta kortta ristiin korjatakseen tuota hauskaa reikää tulli-aidassa. Tullinhoitaja 
          silloin valitti maaherralle, joka (v. 1736) käski että aita olisi tarkastettava ja kertomus sen tilasta hänelle tuota pikaa lähetettävä. Tokko tästäkään käskystä sitten mitään tehokasta tulosta seurasi, emme varmuudella tiedä, 
          sillä lähteissämme on aukko niinkuin tulli-aidassakin.</p>
        <p>Samankaltaista jupakkaa kuin tullihuoneesta ja -aidasta kesti jonkun aikaa myöskin myllyverosta sekä vaa'asta painoineen. V. 1731 valitti näet tullinhoitaja ettei Hämeenlinnan porvareilla ollut mitään erityistä myllyrakennusta, 
          vaan että he kotonaan pitivät koti- ja käsimyllynsä, joilla kaikki jauhettavat jauhettiin. Ja kun näin ollen oli mahdotonta tietää paljonko viljaa kukin jauhatti, niin ei myöskään voitu tarkasti koota myllyveroa. Tullinhoitajan 
          valitusten johdosta määräsikin sitten maaherra, että, kuten 1696 vuoden asetus sääti, kaupunkilaisten tuli kovan rangaistuksen uhalla hankkia myllyrakennus ja viedä sinne myllynsä. Tämä käsky ja uhkaus tepsikin vihdoin, 
          porvaristo rakensi jonkinmoisen avaramman vajan, johon myllyt vietiin, ja tullinhoitaja sai veronsa.</p>
        <p>Markkina-aikoina tuotiin usein kaupunkiin niin paljon tavaraa, ett'ei sitä voitu punnita tullihuoneessa. Senpä tähden tarvittiin vaakahuone, selitti tullinhoitaja, mutta koska erityinen rakennus sitä varten kävisi kalliiksi, 
          suostui hän puolestaan siihen, että tähän tarkoitukseen käytettäisiin myllyrakennusta, jossa oli tilaa kylliksi. Porvaristo lupasikin sen markkina-ajoiksi muodostaa vaakahuoneeksi, mutta vaakaa ja painoja, joita kaupungissa ei 
          löytynyt, he eivät tahtoneet ostaa. Tullinhoitaja lykkäsi asian maaherran päätettäväksi, ja käsky tulikin ennen pitkää että painot piti joka kaupungissa löytymän, kuten kuninkaallinen asetus vuodelta 1672 määräsi. Porvariston 
          tuli siis sellaiset viipymättä kaupunkiinsa hankkia; vaakahuoneena saataisiin myllyrakennusta käyttää.</p>
        <p>Kaupunkilaisten rasittavimpia velvollisuuksia oli kaupungin osalle kuuluvain maanteiden ylläpito. Ja vuodesta 1696 oli heidän hoidettavanaan myöskin kaupungin pitkä silta.</p>
        <p>Teiden risteyksenä oli Ojoisten kylä vähän eteläänpäin samannimisestä latokartanosta. Siihen yhtyi etelästä päin tuleva Helsingin tie ja pohjoisesta päin tuleva n. s. vanha maantie, johon hiukkasen pohjoispuolella kylää yhtyi 
          Turun tie. Tästä risteyksestä meni kaupunkiin vievä tie itäänpäin pienellä kaarella etelään ja päättyi kaupungin pohjoiseen tulliporttiin. Tästä tiestä taasen erosi, melkein keskikohdalta Ojoisten ja kaupungin välillä, eräs 
          pohjoiseen päin menevä maantie, joka kulki melkein samaa väylää kuin nykyinen Tampereen tie.</p>
        <p>Vanha maantie kävi jokseenkin nykyisen rautatiesillan kohdalta joen yli, jossa siten oli kaupungin vanhin silta. Tätä maantietä kuljettiin Helsinkiin kunnes uusi silta ja uusi maantiekin, joka Sairion mäen alta erosi mainitusta 
          <span className="quote">vanhasta maantiestä</span>, valmistui.</p>
        <p>Sillan hoitoa ja ylläpitämistä varten maksoivat kaikki läänin talolliset kapan viljaa. Alussa kantoi nämä <span className="quote">siltakapat</span> hallitus itse ja piti samalla myöskin kunnossa siltaa, mutta mainittuna vuonna, 
          1696, annettiin ne kaupungille velvollisuudella että se siltaa hoitaisi. Täten kaupunkilaisille karttuneita varoja lienee kuitenkin käytetty myöskin muiden yleisten rakennusten ylläpitoon.</p>
        <p>Kun venäläiset Ison Vihan puhjettua täällä valloittivat Hämeenlinnan, hävittivät he suurimmaksi osaksi myöskin sillan eivätkä sallineet sen kuntoon asettamista, joten se hajoamistaan hajosi. Levottomien aikojen takia ei myöskään 
          koottu siltakappoja. Rauhan tultua kokivat tosin kaupunkilaiset saada siltaa jommoiseenkin kuntoon ja paikkasivat sitä tuon tuostakin, mutta huolimatta heidän korjauksistaan se yhä vain huononi. V. 1738 kaupunkilaiset vihdoin 
          pyysivät päästä sekä siltakapoista että sillan hoidosta, ilmoittaen että se nyt oli kokonaan hajalla. Valtio ottikin jälleen siltakapat hoitoonsa, mutta määräsi samalla, v. 1739, että uusi silta oli rakennettava. Ja jo seuraavana 
          vuonna se kruunun varoilla rakennettiinkin. Se ei tullut entiselle paikalle, vaan vähän etelämmäksi, kulkien veden poikki n. s. Linnanniemestä Hätilän kartanoon kuuluvalle Kallioniemelle.</p>
        <p>Tähän aikaan rakennettiin myöskin uusi maantiepätkä kaupunkia kaartelevan rantaman poikki uudelle sillalle, ja sitä myöten sitten Helsingistä tulijat ajoivat kaupunkiin ja päin vastoin. Sen rakentamiseksi tuli kunkin porvarin 
          tehdä 2 päivätyötä hevosella tai 3 jalkaisin, vaan porvarit eivät ryhtyneetkään työhön ennenkun heitä ankaran sakon uhalla pakoitettiin. Siihen ottivat kuitenkin osaa myöskin lähiseudun talonpojat ja puustellien haltiat. 
          Syksypuoleen v. 1741 tie luultavasti valmistui, mutta huomattiin pian kelvottomaksi. Tämänpä tähden jo lokakuussa mainittuna vuonna maaherra antoi käskyn, että porvarien piti auttaa talonpoikia <span className="quote">sen tien 
          korjaamisessa ja kohoittamisessa, joka on rakennettu linnan alapuolitse kaupunkiin, jotta matkustajat voivat keväällä ja syksylläkin veden ollessa korkealla sitä myöten kulkea, koska laissa kerran on määrätty, että kaupunkilaisten 
          tulee pitää kunnossa kaupungin alueella olevat.</span></p>
        <p>Uutta siltaa pidettiin yhä kunnossa valtion varoilla. Mutta kaikesta päättäen huonosti. V. 1757 määrättiin uudelleen koko Hämeen—Uudenmaan lääni maksamaan tätä varten siltakappoja ja vuodesta 1764 myöskin kaupungin asukkaat. 
          Maistraatinsa kautta vaati kaupunki, alistuen määräykseen, että jyvävarasto siirrettäisiin läheisen piirin kruununnimismiehen hallusta kaupungin viranomaisten huostaan. Mutta tähän pyyntöön ei suostuttu. Silta oli näihin aikoihin 
          jo joutunut pahasti rappiolle, ja siltakapoista huolimatta ei sen korjauksista näkynyt kenkään tahtovan huolta pitää. 1765 vuoden valtiopäivillä anoi jo kaupungin edusmies, että Hämeenlinnalaisten sallittaisiin rakentaa 
          kaupungille oma silta <span className="quote">sille paikalle, jossa se ennenkin maailmassa oli ollut, koska matkustavaisten olisi sitä myöten mukavampi kaupunkiin tulla ja koska »vanha» silta jo on niin huonossa kunnossa, ettei sen 
          yli kukaan ilman hengenvaaratta voi kulkea</span>. Tähän anomukseen ei kuitenkaan suostuttu, ja kohta sen jälkeen näkyykin silta tulleen perinpohjaisesti korjatuksi. Sitä käytettiin, sanovat länteemme, vielä senkin jälkeen, kun 
          kaupunki oli muutettu nykyiselle paikallensa.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">VII</p>
      <Article titleText="Kauppaliike. Viinan-poltto ja oluenpano. Käsiteollisuus.">
        <br />
        <p className="initialCap">Kaupunkilaisten elinkeinoista olisi tietysti kauppa asetettava ensi sijaan. Mutta sen laita oli niin ja näin, jos pidämme silmällä nykyajan tavara-kauppaa. Kun edellä mainitsimme että Ison Vihan 
          aikoina kaupungissa oli 22 kauppapuotia, niin on tämä seikka ymmärrettävä omituisella tavallaan. Mitä näet näissä puodeissa enimmäkseen myötiin? Sen saamme kohta nähdä.</p>
        <p>Suurimpana syynä tavallisen kauppaliikkeen kehnouteen oli epäilemättä siinä, että tuontitavarat olivat tuotavat aina Turusta asti, 16 ½ penikulman päästä, joten ne tulivat jokseenkin kalliiksi. Ja niinpä mainitaan aikakirjoissa 
          että vielä kymmenentenä vuonna Pikku Vihan jälkeen kaupungissa oli ainoastaan yksi ainoa kauppias. Porvarit elivät enimmäkseen toisella elinkeinolla.</p>
        <p>Mitä kaikkea porvari-oikeus entiseen aikaan sisälsi, se kävisi liian pitkäksi tässä esitellä. Olkoon kylliksi, kun sanomme, että siihen yhdistyi, paitsi valtaa käyttää omanaan vissin alueen kaupungin maata, koko joukko 
          etu-oikeuksia, joita ei ollut esim. maalaisilla eikä kaikilla kaupungin käsityöläisilläkään, jotka viime mainitut puolestaan taas muodostivat joukon eri oikeuksilla varustettuja ammattikuntia. Porvarit oikeastaan hallitsivat 
          kaupunkia ja koko sen aluetta, ostivat maalaisten raaka-aineet ja myivät niitä jalostettuna miten mikin taisi, — valmistivat siten useita kotitekoisia tarvetavaroita ja nautintoaineita ja myivät niitä mielin määrin — ja pitivät 
          oikeuksistaan lujasti kiinni. Porvariksi kaupungissa pääsemiseen vaadittiin monet temput, eikä se ennen aikaan suinkaan helppoa ollut, vanhoilla porvareilla kun oikeus oli asia ratkaista ja maksut määrätä. Kun esim. Hämeenlinnaan 
          otettiin uusia porvareita, täytyi pyrkijäin hankkia neljän porvarin takuu että suorittaisivat kaikki ulostekonsa ja muuten käyttäytyisivät niinkuin porvareille sopii. Niinikään täytyi pyrkijän maksaa omasta puolestaan 15 talaria 
          ja sama verta vaimon puolesta, jos tämmöistä oli. Kauppa-oikeudet olivat erikseen porvarioikeudesta, käsittivät vallan ostaa ja myydä myöskin ulkomaan tavaroita, ja näistä oikeuksista maksettiin eri verot, niinkuin ulkomaan 
          tavaroista myöskin korkeat tullit. Kauppa-oikeuksia ei laisinkaan ollut kaikilla porvareilla, mutta näyttää siltä kuin pienessä Hämeenlinnassa ei aina olisi pidetty niin tarkkaa rajaa varsinaisten kauppa- ja porvari-oikeuksien 
          välillä. Tavalliset porvaritkin toivat Turun-matkoiltaan tuon tuostakin kotiin myytäväksi yhtä ja toista ulkomaan tavaraa, välittämättä oikeuksiensa rajoista.</p>
        <p>Mutta hyvin <span className="quote">flau</span> oli yhtäkaikki kaikkina aikoina pienen kaupunkimme kauppaliike. Ainoa aika, jolloin siinä enemmän vilkkautta nähtiin, oli markkinapäivät, jolloin tuonti kaupunkiin oli vapaa. 
          Hämeenlinnassa pidettiin markkinoita kaksi kertaa vuodessa, talvimarkkinat tammikuun 7 ja 8 päivänä, syysmarkkinat elokuun 29 ja 30 päivänä. Näistä olivat talvimarkkinat vilkkaimmat, talviseen aikaan kun tiet oli paremmat ja 
          lyhyemmätkin. 1752 vuoden talvimarkkinoilla esim. oli saapuvilla 52 kauppiasta, mutta syysmarkkinoilla ainoastaan 40. Enimmät ulkolaiset tulivat Turusta, Helsingistä, Porvoosta ja Viipurista.</p>
        <p>Eivät kuitenkaan markkinatkaan olleet omiansa kehittämään pienen Hämeenlinnan kauppaliikettä. (V. 1741 oli kaupungissa yksi varsinainen kauppias, v. 1751 kolme, v. 1771 neljä.) Merikaupungeista saapuneet kauppiaat, jotka saivat 
          tavaransa suorastaan ulkomailta, myivät niitä kilpailun vuoksi huokeammasta kuin kaupungin vähälukuiset kauppiaat ja pienempää kauppaa harjoittelevat porvarit. Ja siitä tietysti oli seurauksena että maakansa niin paljon kuin 
          suinkin säästi ostoksensa markkinoilla tehtäviksi.</p>
        <p>Maalaiset ylimalkain näkyvät kammoksuneen koko kaupunkia. Sen kauppiaat pitivät tavaroitaan kalliissa hinnassa, ja sitä paitsi kiskottiin heiltä, maalaisilta, kaupungin portilla tuo harmittava pikkutulli, joka muodostaa niin 
          omituisen pykälän entis-ajan elinkeino-säädöksissä. He sentähden eivät juuri tuoneetkaan tavaroitaan kaupunkiin muulloin kuin markkina-aikoina.</p>
        <p>Sen sijaan matkustelivat porvarit itse ahkerasti maaseuduilla ostelemassa näiden tuotteita talonpojilta. Myivät niitä sitten kaupunkilaisilleen vaihtelevalla voitolla.</p>
        <p>Jos tavallinen kauppaliike oli varsin vähäpätöinen, niin oli hämeenlinnalaisten maanviljelyskin samaa laatua, tämä elinkeino, joka muuten menneen ajan kaupunkilaisillekkin oli mitä suurimmasta merkityksestä, koska porvari-
          oikeutta melkein aina seurasi melkoisen maapalstan hallinto ja perinnöllinen nautinto. Hämeenlinnan kaupungilla, jonka alue oli kaikin puolin ahdas, oli niin vähän tiluksiakin, että ainoastaan 2 à 3 kapanalaa maata tuli kunkin 
          porvarin osalle. Näillä näkyy olleen yleisin tupakan ja pellavan viljelys, mutta muuta tuskin nimeksikään.</p>
        <p>Mainitut kaksi kasvilajia saivat kuitenkin, hallituksenkin kehoittavaan suosioon vähitellen jouduttuaan, 1750 ja -60-luvuilla aikaan jonkinmoisen tehdasliikkeenkin. V. 1755 perustettiin näet yksi tupakkatehdas (tobaksspinneri) 
          ja 7 vuotta myöhemmin liinatehdas (linnefabrique) 20 kangaspuulla. Mainitsemista ansainnee sen ohessa että vuonna 1782 kaupunkiin järjestettiin myöskin n. s. halli-oikeus, jonka tehtävänä oli antaa kauppakolleegiolle tietoja 
          paikkakunnan tehtaista, valmistusmäärästä y. m.</p>
        <p>Mitään suurempaa merkitystä ei tupakan- ja pellavanviljelyksellä eikä siitä johtuneella pienellä tehdasliikkeellä kuitenkaan ollut, vaan ovat nämä päin vastoin pidettävät vähäpätöisempinä sivu-elinkeinoina. Turhaa vaivaa oli 
          myöskin hallituksen osoittama into puutarhan-hoidon edistämiseksi kaupungissa. V. 1760 julkaisi tunnettu professori Pietari Adrian Gadd neuvoja niityn ja metsän hoidossa sekä puiden istutuksessa, ja näitä neuvoja käski sitten 
          maaherra kaupungin asukasten ottaa huomioonsa, mutta maistraati vastasi, etteivät kaupunkilaiset voineet ruveta istuttamaan puita niinkauvan kuin kaupungin muutto-asia oli ratkaisematta; metsiä muka taas ei tarvinnut hoitaa, 
          koska kaupunkilaisilla sellaisia ei ollut.</p>
        <p>Mutta mikä sitten oli arvoisan kaupunkimme porvarien pääelinkeinona? Täytyihän heidän jollakin elää, kun ei tavallisesta kaupasta, ei viljelyksistä eikä teollisuudesta ollut sanottavaa apua. He turvautuivat viinanpolttoon ja 
          oluenpanoon. Kaupungin perustamisesta saakka oli kapakoitseminen ollut sen pääelinkeinona. Kuningas Kaarlo XI:s velvoitti sitten muutamassa asetuksessa, marraskuun 11 p:ltä 1680, Hämeen-Uudenmaan läänin maaherraa kaikin tavoin 
          edistämään myöskin <span className="quote">Tavasteborgin</span> kaupungissa harjoitettuja elinkeinoja, joiden joukossa etevimpänä mainittiin juuri kapakoitseminen (krögerinäring). Kuinka yleinen tämä oli, huomataan jo siitäkin, 
          että vielä v. 1742 kaupungin 43 porvarista 26 ilmoitti valmistavansa paloviinaa ja olutta kaupaksi, ja kuitenkin oli tämä elinkeino jo kymmenkunta vuotta sitä ennen tullut johonkin määrin rajoitetuksi, kuten kohta saamme nähdä.</p>
        <p>Viinaansa ja oluttansa myivät porvarit osittain maalaisille, mutta enimmäkseen kuitenkin kaupunkiin ja linnaan sijoitetulle sotaväelle. Ja tämä kauppa meni toisinaan niin pitkälle, että linnan-päällikön täytyi tulla väliin. 
          Niinpä esim. tämä vuonna 1735 valittaa maistraatille että kaupunkilaiset myyvät sotaväelle viinaa ja olutta ottaen poika-paroilta maksuksi heidän univormunsa ja varustuksensa, vieläpä antavat heille velaksikin kunnes kruunu 
          toimittaa miehilleen uudet vaatteet; maistraatin tulisi sentähden kieltää porvareita ottamasta sotamiehiltä maksuksi vaatteita tai muuta kruunun tavaraa. Ryhtyikö maistraati tai porvaristo tämän kuvaavan määräyksen johdosta 
          mihinkään kankkeesen, ei tiedetä.</p>
        <p>Se vain tiedetään että ammoisista ajoista useimmilla porvareilla oli oma viinapannu, jolla elämän vettä melkein mielin määrin keitettiin ja nähtävästi myöskin koetettiin kierrellä voimassa-olevia verosäädöksiä. V. 1730 kysyy 
          sentähden hallitus, suostuisivatko porvarit rakentamaan kaupunkiin polttimoa. Mutta he vastasivat kieltävästi, ja siispä määrää hallitus seuraavana vuonna, että koska porvaristo ei ole suostunut polttimoa rakentamaan, täytyi 
          jokaisen, jolla viinapannu on, kuninkaallisen asetuksen mukaan maksaa aksiisia 2 hopeatalaria joka pannusta. Sitä paitsi saisi maistraati viinan menekin mukaan määrätä, kuinka monta kapakoitsijaa eli krouvaria kaupungissa saisi 
          olla, sekä sitten veroittaa näitä viinan myymisestä.</p>
        <p>Vuodesta 1741 alkaen mainitaan kaupungin taksoituskirjoissa <span className="quote">kapakoitsijat</span> ja <span className="quote">kotitarpeen-polttajat</span> tarkasti erikseen. Edellisiä oli esim. v. 1748 ainoastaan 6, mutta 
          jälkimäisiä 28. V. 1754 oli kapakoitsijoita 7, kotitarpeen-polttajia 33.</p>
        <p>V. 1756 rajoitettiin viinan-polttaminen vielä enemmän. Kotitarpeen-poltto näet kokonaan kiellettiin, ja ainoastaan kapakoitsijat, joita Hämeenlinnassa tulisi olla 4, saisivat vastedes viinaa polttaa. Mutta kielto näkyy 
          vaikuttaneen salapolttoa ja salakapakoitsemista, sillä jo v. 1762 ehdoittelee maaherra kaupungin porvaristolle, että se määrättyä veroa vastaan ottaisi polttaakseen ja myydäkseen vissin määrän viinaa. Tämän ehdoituksen porvarit 
          kuitenkin, viisaasti kyllä, hylkäsivät, sanoen vain haluavansa että viinan kauppa edelleenkin olisi määrättyjen kapakoitsijain hallussa.</p>
        <p>Kun sitten Kustaa kuningas teki viinanpolton valtion monopooliksi, rakennettiin Hämeenlinnaankin erityinen polttimo, joka tuli sijaitsemaan kaupungin koillisella kulmalla järven rannalla.</p>
        <p>Käsiteollisuus, joka tunnetun ammattikuntalaitoksen kautta oli kaupungeissa suojattuna kilpailulta maaseudun puolelta, kehittyi aikojen kuluessa ja väkiluvun kasvaessa Hämeenlinnassakin mikäli sodat ja muut ehkäisevät suhteet 
          myönsi. Niinpä v. 1729 mainitaan kaupungissa olleen: 1 räätäli, 1 suutari, 1 muurari, 1 seppä, 1 nikkari ja 1 kankuri; v. 1736: 3 kankuria, 2 suutaria, 2 räätäliä ja 1 seppä; vuonna 1737: sama määrä sekä lisäksi vielä yksi
           muurari. Vuonna 1741 oli käsityöläisiä yhteensä 18, v. 1751 22 ja kymmentä vuotta myöhemmin 45.</p>
        <p>Muuten antaa kaupungin kaupasta ja teollisuudesta sekä muista elinkeinoista Pikku Vihan jälkeisinä aikoina varsin hyvän yleiskäsityksen eräs maistraatin vuonna 1751 maaherralle lähettämä kertomus. Siinä sanotaan näet 
          muunmuassa: <span className="quote">Mitä kauppaan tulee, on se viime aikoina ollut jotensakin huonolla kannalla, kun sopivista huoneistakin on ollut puute, ja vielä enemmän sentähden, että tavaroita on vaikea pitkien matkojen 
          päästä kuljettaa. Tähän aikaan on kaupunki kuitenkin paljon vaurastunut. Porvarit ovat taas valtion antamalla avulla päässeet niin pitkälle, että voivat itsellensä kauvempaakin tavaroita hankkia. Mitään suurempia käsityö- ja 
          tehdaslaitoksia ei kaupungissa löydy; tähän aikaan on kuitenkin aikomus kaupunkiin perustaa liinatehdas (linnefabrique). Tupakan, juuri- ja puuhedelmien sekä humalan, pellavan ja hampun viljelemistä ei porvaristo voi paljonkaan 
          harjoittaa sentähden, että kaupungilla on niin perin vähän tilaa; kalastus on niin vähäpätöinen, että siitä tuskin kannatta mainita.</span></p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">VIII</p>
      <Article titleText="Pikku Viha. Uusia kirkonkorjauksia.">
        <br />
        <p className="initialCap">Tuskin hiukkasen toinnuttuaan Ison Vihan iskemistä haavoista, sai Hämeenlinna monien muiden vastoinkäymisten ohessa, niinkuin 1739 vuoden suuren palon, ennenkun vuosisata oli ehtinyt puoliväliin, 
          jälleen kestää vieraan vallan iestä. Vaikk'ei <span className="quote">Pikku Vihan</span> aika lähimainkaan ollut niin kauhea kuin edellisen sodan, sai kaupunki kuitenkin silläkin ajalla sangen paljon kärsiä. Jo ennenkun 
          ruotsalais-suomalainen sotajoukko Helsingissä oli antautunut, joutui Hämeenlinna venäläisten valtaan. V. 1742 jätti näet Hämeenlinnan linnoituksen silloinen komentaja everstiluutnantti von Bütner yhdessä katteini Ernandlerin 
          kanssa linnan ja kaupungin venäläiselle sotapäällikölle kreivi Lascylle, he kun katsoivat aivan turhaksi vaivaksi ruveta niitä puolustamaan ylivoimaa vastaan.</p>
        <p>Tämä toinen vihollisvalta kesti syyskuun 15 p:ään 1743, jolloin Kievin rakuunarykmentin eversti Gabriel Roisanoff jätti Hämeenlinnan linnoituksen Porin rykmentin majurille J. A. Gripenbergille. Tässä tilaisuudessa oli läsnä 
          myöskin kaupungin maistraati ja arvattavasti porvaristokin, todistamassa mitä kaikkea kaupunki oli sodan aikana kestää saanut. Maistraatin antaman kertomuksen mukaan oli näet kaupunki koko sodan aikana ollut edestakaisin 
          kulkevien sotajoukkojen jaloissa, alituisen temmellyksen, hyörinän ja pyörinän, melun ja metelin vallassa. Sekä omat että erittäinkin venäläiset sotajoukot ottivat, sota-oikeuttansa käyttäen, kaupungin asukkailta mitä ikinä 
          tarvitsivat, harjoittivatpa mitä törkeimpiä väkivallan töitäkin. Vaikk'ei pakeneminen maastamme Ruotsin puolelle Pikku Vihan aikana ollut ollenkaan yleinen, näyttää kuitenkin, asiakirjoista päättäen, moni Hämeenlinnan kaupungin 
          asukas jättäneen kotinsa, kontunsa ja paenneen pois vihollisen jaloista. Kotiväen poissa-ollessa mellastelivat venäläiset mielin määrin heidän asunnoissaan, jotka täten joutuivat peräti rappiolle. Paikoilleen jääneet taasen 
          saivat maksaa sotaveroa, saivat antaa hevosensa kuormastojen kuljettamiseen ja huoneitaan sotaväen asunnoiksi. Maistraatin arvion mukaan nousi asukasten kärsimät vahingot noin 6,000 hopeatalariin.</p>
        <p>Yleisistä rakennuksista, jotka näkyvät saaneen vahinkoa kärsiä, on mainittava kaupungin uusi kirkko, ja parin vuoden perästä sodan loputtua oli tämän vuoksi täytymys ryhtyä uusiin korjauksiin siinä. Sen ohessa ryöstivät 
          venäläiset sen hopeiset alttari-astiat, niin että rauhan tultua täytyi hankkia uudet yksityisistä lahjoituksista kertyneillä varoilla.</p>
        <p>Sittenkun v. 1756 pitkällisten puuhain perästä oli saatu uusi kellotapuli rakennetuksi, huomattiin että kirkko taaskin tarvitsi korjausta. Kaupunkilaiset olivatkin siihen aikaan jo joltisestikin toipuneet kovista 
          vastoinkäymisistään, niin että harrastus edistymiseen oli mahdollisempi. Päätettiin siis korjata etupäässä kirkon katto ja rakentaa siihen kaksi uutta lehteriä. Mutta vasta v. 1768 saatiin näistä valmiiksi toinen ja. v. 1775 
          toinen.</p>
        <p>Kun kaupunki, kuten kohta tulemme kertomaan, vihdoin kuninkaan määräyksen kautta v:lta 1777 oli päätetty muutettavaksi pois vanhalta paikaltaan, heräsi kysymys kirkonkin rakentamisesta uudelle kaupungin paikalle. Tätä pitivät 
          kuitenkin useimmat seurakuntalaiset tarpeettomana, koska muka vanha kirkko vielä oli hyvässä kunnossa ja sitä edelleenkin voitaisiin käyttää. Sille kannalle iäikin tämä asia, niin että muutonkin jälkeen vanhaa kaupungin kirkkoa 
          käytettiin vielä kymmenkunnan vuotta eli siksi kunnes Hämeenlinnan nykyinen, omituiseen malliin rakennettu kirkko valmistui.</p>
        <p>Hautausmaata ei silloin kuitenkaan, kuninkaan nimenomaisen kiellon johdosta, enää sijoitettu uuden kaupungin kirkon ympärille, vaan jonkun matkan päässä kaupungista olevan matalan mäen lappeesen.</p>
        <p>V. 1750 oli se uusi pappila, jonka, kuten ennen olemme kertoneet, oli saatu rakennetuksi 1733—35 vuosien välillä, jo jokseenkin ränsistyneenä, niin että sitä nyt korjattiin; mutta kymmenen vuoden kuluttua oli se taas niin 
          huonossa kunnossa, että v. 1764 oli täytymys rakentaa kokonaan uusi. Sen rakentaminen sekä kirkon samaan aikaan tapahtunut korjaaminen näkyy käyneen porvareille kovaksi rasitukseksi. 1765 vuoden valtiopäivillä he näet anovat 
          että valtio antaisi apua näihin tarkoituksiin, koska muka sotaväkikin käyttää kaupungin kirkkoa. Tokko pyyntöön suostuttiin, ei lähteistämme ilmene.</p>
        <p>Yhteen jaksoon tämän kanssa mainittakoon tässä että kaupungissa löytyi sekä suomalainen että ruotsalainen seurakunta, joista ruotsalainen näkyy väkiluvun puolesta olleen hyvin mitätön, koska koko kaupungissa v. 1775 oli 
          ainoastaan vähän toistakymmentä henkeä, jotka eivät <span className="quote">osanneet suomea</span>. Kuitenkin pidettiin joka pyhä ruotsalainenkin jumalanpalvelus, talvisaikana tavallisesti kouluhuoneustossa.</p>
        <p>Mutta palataksemme jälleen Pikku Vihan aikoihin, tulee meidän vielä mainita että hallituskin näkyy käsittäneen kaupungin hädänalaisen tilan vuosina lähinnä jälkeen sodan. Paitsi 3 yleistä vapaavuotta myönnettiin Hämeenlinnan 
          asukkaille sitä paitsi vielä 6 ylimääräistä, joiden aikana verovapaus kuitenkin lienee ollut enemmän rajoitettu kuin 3 yleisenä vapaavuonna. Tätä vapautta nauttivat muuten ainoastaan porvarit koko sen laajuudessa, jota vastoin 
          esim. kaupungin virkamiehet ja maistraatin jäsenet saivat ainoastaan puolinaisen vapauden.</p>
        <p>Ylen köyhiä muuten olivat kaupungin porvarit siihenkin aikaan. Sitä todistaa muun muassa se seikka, että he eivät kyenneet palkkaamaan edusmiestä 1742 vuoden valtiopäiville, vaan täytyi hallituksen suorittaa tämän saatavat. V. 
          1747 kohtasi pientä kujakauppalaamme myöskin vanha onnettomuus uuden tulipalon muodossa, joka hävitti jonkun osan köyhempien porvarien kurjia, turvekattoisia tupia.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">IX</p>
      <Article titleText="Elämän-tavat.">
        <br />
        <p className="initialCap">Elämän-tavoiltaan olivat vanhat kaupunkilaisemme viime vuosisadalla vielä sangen vaatimattomia ja yksinkertaisia; mistään hienostuksesta ei ollut puhettakaan. Tähän oli syynä sekä heidän köyhyytensä 
          että paikkakunnan etäisyys suuremman maailman markkinoilta ja ylellisyystavarain kalleus, niinkuin suuressa määrässä ajan valtiollisesti myrskyiset olotkin, jotka eivät olleet omiansa luomaan sivistyksen tasoitusta tapoihin. 
          Mutta valtavimpana syynä näiden karkeuteen oli epäilemättä kaupunkilaisten etevin elinkeino eli viinan- ja oluen-valmistus.</p>
        <p>Pukuna käyttivät kaupunkilaiset tavallisesti kotitekoisia sarkavaatteita polvihousuineen, eivätkä naisetkaan tietäneet tavallisen kaupunki-elämän koreilemisesta juuri mitään.</p>
        <p>Tee ja kahvi oli herkkuja, jotka ainoastaan hyvin harvoin tulivat kysymykseen. Monessa talossa niitä tuskin tunnettiinkaan. Sitä vastoin oli hyvin yleisenä tupakka, ja sitä nauttivat melkein kaikki kaupunkilaiset, nuoret ja 
          vanhat, toiset polttamalla, toiset suussa pitämällä, naiset enimmäkseen nuuskaamalla. Ei se kuitenkaan ollut mitään hienoa tupakkalajia, vaan melkein yksinomaan kotimaan <span className="quote">nurkantaustaa</span>, jota 
          jalostettiin miten paraiten voitiin. Kuinka yleinen sen käyttäminen muuten oli koko valtakunnassakin, nähdään siitä, että hallitus v. 1741 katsoi tarpeelliseksi erinäisellä asetuksella kieltää 21 vuotta nuorempaa väkeä käyttämästä 
          tupakkaa.</p>
        <p>Juopotteleminen oli tuon yleisen elinkeinon seurauksena aivan yleinen. <span className="quote">Diem noctemque continuare potando nulli probrum</span>, ( = viettää yöt päivät juopotellen ei ole kellekkään häpeäksi) valittaa 
          Tacitus muinais-germaanilaisista, ja se näkyy aivan säntilleen sopivan myös muinais-hämeenlinnalaisiin, sillä olut ja viina oli aivan yleisenä juomana sekä miehillä että naisilla, eikä se liene tullut kysymykseenkään että 
          <span className="quote">yleinen mielipide</span> olisi leimannut toista juopporalliksi enemmän kuin toistakaan. Tästä hurjasta tavasta seurasi tietysti sitten tiheitä tappeluita kapakoissa, kaduilla ja kujilla, kotosalla tuimat 
          tukkanuotat. Mutta tuon tuostakin miestappoja ja murhiakin, ja niinpä näkyy yleiseen moraliseen katsantokantaan juurtuneen se mielipide, että vasta se oli pahasti pöhnässä, joka toisen tappoi.</p>
        <p>V. 1739 oli Ruotsista saapuvut kaupunkiin peltiseppä Berg korjaamaan linnan peltikattoa. Samana vuonna valittaa hän maaherralle että kaupunkilaiset myyvät olutta ja viinaa hänen miehilleen, vaikka hän itsekkin kokee pitää sitä 
          heille saatavana. Maaherra tämän johdosta kielsi ankarasti porvareita myymästä näille miehille viinaa, etteivät he juovuspäissään putoaisi katolta ja loukkaisi itseään. Mutta Bergin kävi itsensäkin hullusti. Vielä samana vuonna 
          pantiin hän ynnä muutamain miestensä kanssa kiinni epäiltyinä siitä, että he juovuksissaan olisivat tappaneet erään oppipojan.</p>
        <p>Kaupungissa majaileva sotaväki joi myöskin vahvasti viinaa, ja edellä on kerrottu, miten he rahan puutteessa ollessaan hankkivat ilolientään myymällä tai panemalla pantiksi vaatteensa ja varustuksensakin.</p>
        <p>Juopottelemista vastaan kokivat parastansa seurakunnan papit taikka ainakin useimmat heistä, koska esim. pastori Oimelaus muutamassa kertomuksessaan ennen Pikku Vihaa mainitsee: <span className="quote">Vanhempina ja myöhempinä 
          aikoina ovat seurakunnan opettajat valittaneet, että heidän kuulijansa ovat olleet kovin viinaan-meneviä ja riidan-haluisia sekä laiminlyöneet kirkossakäyntinsä, kuten piispain- ja rovastin-käräjäin pöytäkirjoista voi huomata, 
          ja tämä valitus, paha kyllä, vieläkin on paikallansa.</span> Hän valittaa sitten, miten kaupungin asukkaat ovat kovin taipuvaisia juoppouteen ja pahaan elämään <span className="quote">siten tuottaen Jumalan vihaa koko 
          paikkakunnalle, vieläpä koko valtakunnan ylitse</span>. Pastori Oimelaus näkyy täten virkansa puolesta kurittaneen hämeenlinnalaisia minkä jaksoi heidän juoppoustavoistaan. Vähän näkyy kuitenkin olleen apua hänen hyväntahtoisista 
          ojennuksistaan, koska maistraatiakin alinomaa korkeiden asianomaisten puolelta muistutetaan pitämään huolta siitä, että rikokset ja rikkomiset tulisivat ansion mukaan rangaistuiksi. Kuninkaallisia asetuksia löytyikin näet, joilla 
          koetettiin ehkäistä ylenpalttista juopottelemista ja kapakoissa venymistä. Niinpä esim. v. 1737 säädettiin, ettei mikään renki, kisälli tai laiskuri saisi jälkeen k:lo 6 pyhä- tai juhla-aattoina eikä jälkeen k:lo 10 arki-iltasin 
          istua kapakassa; jos sen tekevät, värvätään heidät pitkittä mutkitta sotapalvelukseen. Mutta vähänpä näkyy maallisen vallankaan kurinpidosta apua olleen. Eiväthän syrjäisen Hämeenlinnan asukkaat muutenkaan suuresti välittäneet 
          hallituksen määräyksistä, niinkuin edellisessä monin kerroin olemme nähneet.</p>
        <p>Turvallisuuskin arvoisassa kaupungissa oli tämmöisissä oloissa kaikkea muuta kuin kehuttavaa laatua. Senpä tähden esim. v. 1759 linnan-päällikkö käskettiin lähettämään sotilaallinen vahtipatrulli määrätyillä tunneilla kiertämään 
          kaupungin katuja ja tarpeen vaatiessa käyttämään aseitansa.</p>
        <p>Kirkollisen seurakunnan kristinopista on mainittuna että se 1723 vuoden rovastin-käräjissä huomattiin hyväksi, mutta v. 1727 oli paljon huonontunut, jonka jälkeen se taasen parantumistaan parani. Lukutaitoisia mainitaan 
          kaupungissa v. 1723 löytyneen 70 henkeä, v. 1727 74, mutta kaksi vuotta myöhemmin 120.</p>
        <p>Aikakauden taika-usko kävi tietysti käsi kädessä tapojen raakuuden kanssa, mutta mitään Hämeenlinnalle omituista eivät tiedä länteemme siinä kohden mainita.</p>
        <p>Tavat ja järjestys eivät myöhempinäkään aikoina suuresti parantuneet, ei edes siitäkään, kun Kustaa kuninkaan hallitus otti viinan-polton valtion huostaan. Tavara oli yhtäkaikki aina saatavissa, ja silloin sitä myöskin juotiin. 
          Niinpä nimenomaan mainitaan, että Kustaan hallituksen lopulla viinan-juonti Hämeenlinnassa paremmin oli enentynyt kuin vähentynyt entisestään. Kaupungissa oli yhä edelleen toinen juomapaikka toisensa vieressä, ja niissäkös 
          varsinkin juuri pyhäpäivinä hurjaa elämää vietettiin. Näytti siltä kuin tunnetun hovin esimerkki olisi tännekkin asti vaikuttanut, mutta ainoastaan huonolla puolellaan; mistään kustaviaanisesta hienoudesta, joka olisi sisällistä 
          pahennusta peittänyt, ei mitään tiedetty.</p>
        <p>V. 1785 tarttui vihdoin maaherra asiaan. Varoittaen kaupunkilaisia heidän huonosta elämästään, kielsi hän kaikkinaisen soiton ja pelaamisen kapakoissa ja määräsi että k:lo 9:stä lauvantai-iltana k:lo 4:jään seuraavana 
          sunnuntaina kaikkien kapakkojen tulisi olla suljettuina.</p>
        <p>Ei ole meidän kuitenkaan liiallisella ankaruudella tuomitseminen pikku-porvareitamme vanhassa rehellisessä Hämeenlinnassa. Eiväthän he itse teossa olleet sen kummempia kuin virkaveljensä muissakaan maamme kaupungeissa, ja 
          muistaa tulee sen ohessa aina että köyhyys ei ole omiansa tapoja hienontamaan. Tuo niin sanoaksemme pakollinen elinkeino, jota parempaa ahtaassa kylässä oli siihen aikaan vaikea keksiä, vaikutti tietysti ehkäisevästi kaikkeen 
          terveelliseen edistykseen, mutta olipa tähän vaurioon monta muutakin ja mielestämme paljon tehokkaampaa syytä. Muistamme tulipalot, joiden perästä kaupunki kauvan aikaa oli milt'ei rauniona, niin että vasta vähitellen matalat, 
          turvekattoiset töllit jälleen kohosivat tuhkaläjästä; muistamme sodat ja niiden aina tuottaman sekä taloudellisen että siveydellisenkin taantumisen; muistamme kaupunkilaisten asutusoikeuden epävarmuuden. Liioittelematta voinee 
          sanoa että kohtalo itse oli osoittanut heidät elämään niin kuin joka päivä olisi ollut viimeinen, kuten sanotaan. Se oli epätoivon tanssia kuolon-kuilun partaalla, jonkinmoista yhteiskunnallista 
          <span className="quote">Galgenhumoria</span>, joka muutenkin on suomalaiselle luonteelle niin ominaista. Virkamiesten ja aateliston juonet sekä silloisen säätyhallituksen huono huolenpito oli porvari-paroilla alinomaisena 
          puheenaineena, ja moni tuikea harmiryyppy siitä aiheutui. Kernaammin kuin heitä ja muita kaupunkilaisiamme moittisimme, tulee meidän ihmetellä heidän suomalaista sitkeyttään siinä, että sittenkin, huolimatta kaikista vastuksista, 
          pysyivät pystyssä ja osoittivat kuntoa monen uuden yrityksen toteuttamisessa.</p>
        <p>Näistä oli tärkein kysymys kaupungin muuttamisesta, joka tuon ränstyneen kujakauppalan kovia kokeneille asukkaille vihdoin onnistuikin. Kustaa-kuninkaan jalomielinen osanotto elähytti heidän alkuperäistä tarmoansa, ja ikäänkuin 
          pitkällisen horrostilan perästä saattoivat he tämän osanoton suojassa turvallisemmin ruveta rakentamaan uutta Hämeenlinnaa, uusilla ja paremmilla elämän-ehdoilla kuin ennen.</p>
        <p>Mutta nämät myöhemmät muuttopuuhat ansaitsevat tässä vielä eri lukunsa.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">X</p>
      <Article titleText="Uusia muuttopuuhia.">
        <br />
        <p className="initialCap">Edellisessä on jo mainittu niistä porvarien toiveista, jotka heidän edusmiehensä 1751 vuoden valtiopäivillä toi esiin. Ja vihdoinkin näkyy nyt anomus tepsineen. Jo samana vuonna käski näet kuningas 
          everstin, vapaaherra Vreden yhdessä Hämeen—Uudenmaan läänin maaherran, Nordenskiöldin, kanssa valitsemaan Hämeenlinnan kaupungille uutta paikkaa. Vreden kuitenkin ollessa pitemmällä matkalla, määräsi maaherra hänen sijaansa 
          kaupungin asiamieheksi everstiluutnantti Glansenstjernan, jonka tulisi määrätä aika tarpeellista katselmusta varten. Tämä tapahtuikin sitten lokakuun 17 päivänä mainittuna vuonna. Hallituksen asiamiehenä oli siinä maaherran 
          puolesta läsnä majuri Antti Lilljebrun, ja kaupungin paikaksi määrättiin n. s. Koiramäki Ojoisten kartanon maalla. Kartanon haltija eversti Ramsay, näkyy sen itse ehdoittaneen, sillä Koiramäki oli niin huonoa maata, ettei 
          kartano sillä mitään tehnyt. Mutta tähän paikkaan olivat sitä vastoin kaupunkilaiset peräti tyytymättömät. Kun kartta uudelle kaupungille oli valmistunut, eli vuonna 1754, lähettivät he sentähden asiamiehelleen Glansenstjernalle 
          valitus-anomuksen, että määräys kaupungin paikasta kumottaisiin. Koiramäki oli, valittivat he, kaupunginpaikaksi aivan sopimaton. Siinä olisi vaikea saada kunnollisia kaivoja; se oli liian kaukana järvestä ja siten epämukava 
          varsinkin karvareille; kaupungin tori joutuisi syrjäpuoleen ja kiviselle, epätasaiselle mäelle. Parempi paikka olisi muuan alue alapuolella Ojoisten kylää ja siellä olevaa mäkeä. Siitä nyt vähintäin 16 tonttimaata mitattaisiin. 
          — Tällä paikalla tarkoittivat porvarit epäilemättä alaa, joka oli n. s. Pyövelin-mäen pohjoispuolisen rinteen takana, eli siis nykyisen puiston pohjoispuolta. He näet anomuskirjassaan pyytävät <span className="quote">että 
          kaupunki siirrettäisiin paikalle, johon ei voi ampua kanuunoilla linnasta, koska niin korkea mäki (epäilemättä Pyövelinmäki) on edessä, että ainoastaan linnan korkeimmista huipuista voi sen ylitse nähdä</span>.</p>
        <p>Koiramäki oli kaupungin paikaksi senkin puolesta sopimaton, että se oli vähän pienempi vanhaa alaa ja sitä paitsi sijaitsi 1/8 penikulman päässä kaupungin melkein uudesta kirkosta. Tämän näkyvät katselmusmiehetkin kyllä 
          oivaltaneen, ja siispä he nyt ehdoittivatkin sitä jo ennen kysymykseen tullutta alaa, joka käsitti osan Ojoisten latokartanon pelloista. Mutta tätä ehdoitusta ei otettu huomioon. Maaherra näkyy kannattaneen eversti Ramsayn 
          etuja. Ja kyllästyneenä koko juttuun ja siitä päästäkseen ehdoitti samainen maaherra jo, että Hämeenlinnan kaupunki tykkänään lakkautettaisiin ja muutettaisiin markkina-paikaksi. Mutta tämmöistä Gordionsolmun selvittämistä 
          vastustivat katselmusmiehet kuitenkin kiivaasti, vakuuttaen että kaupunki kyllä vaurastuisi, kunhan sitä vain autettaisiin tulipalon ja sodan saattamista vaurioista.</p>
        <p>Kesken näitä riitoja ja selkkauksia teki Adolf Fredrik kuningas hauskasti kuuluisan matkansa Suomeen ja kävi pikimmältään Hämeenlinnassakin, mutta ei kaikesta päättäen huolinut perehtyä sen muuttopuuhiin. Hänen ansiokseen ei 
          siis liene luettava että porvariston v. 1754 tekemät anomukset vihdoinkin johtivat tulokseen. Todenmukaisemmalta näyttää että tämä seuraus saatiin aikaan sen kautta, että kaupungin edusmies uudisti porvariston anomukset 1755 
          vuoden valtiopäivillä. Lokakuun 14 p:nä 1756 allekirjoitti näet majesteetti päätöksen kaupungin muuttamisesta — arvattavasti Pyövelinmäen pohjoispuolelle, sanovat länteemme.</p>
        <p>Mutta tämän päätöksen toimeenpanoa viivytettiin. Senpätähden maistraati taas heinäkuussa v. 1758 valittaa kaupungin asiamiehelle, everstiluutnantti Glansenstjernalle, asuntojen ahtautta kaupungissa, jossa ei enää ollut tilaa, 
          ei perheille eikä sotaväelle, ja pyytää että uudesta kaupungista kartta tehtäisiin ja muutto vihdoin viimeinkin toimeenpantaisiin. Joll'ei tätä tapahtuisi, sanoi maistraati valittavansa Hänen Majesteetilleen.</p>
        <p>Tämä uhkaus näkyykin vaikuttaneen. Jo elokuussa samana vuonna ilmoittaa näet Glansenstjerna että kartta oli lähetetty maaherralle, jonka tulisi se toimittaa kuninkaan vahvistettavaksi ja, sen sieltä palattua, kaupungin 
          maistraatille. Pormestari kääntyi nyt, tällaisen ilmoituksen saatuansa, maaherran luo pyytäen että tämä jouduttaisi asiaa, jotta sitten vihdoinkin voitaisiin ryhtyä tonttien jakamiseen.</p>
        <p>Maaherra toimittikin kartan kuninkaalle, mutta — korkeimmassa paikassa sitä nyt ei hyväksyttykään eikä siis vahvistettu. Syitä ei varmaan tiedetä. Kirjeellä marraskuun 4 p:ltä 1758 ilmoittaa vain maaherra Nordenskjöld 
          porvaristolle että uuden kaupungin paikan kartta ainoastaan siinä tapauksessa voisi tulla hyväksytyksi, että kaupunkilaiset sitoutuisivat maksamaan Ojoisten latokartanon haltialle veroa siitä maasta, jonka kaupungin uusi alue 
          tulisi mainitun kartanon alasta ottamaan. Mutta tällaiseen maa-orjuuteen ei porvaristo mitenkään tahtonut suostua. <span className="quote">Kaupungin uusi asema otti näet melkein puolet latokartanon pelloista, jonka tähden vero 
          olisi käynyt porvaristolle sangen rasittavaksi</span>. Maistraatin mielestä ei Ojoisten haltian sopinut vetää vastahankaa, vaan täytyisi hänen muka tyytyä Ojoisten sijasta hänelle katselmuksessa luvattuun Luolajan kruununtilaan, 
          ja anoi maistraati sentähden että maaherra mitä pikemmin saattaisi katselmusmiesten päätöksen täytäntöön. Mutta kaupungin anomusta ei otettu huomioon, ja asia jäi, kun jäikin, entiselle kannalleen. Vieläpä osoitti hallitus 
          vitkastelemis-haluansa muuton suhteen siinä, että tähän samaan aikaan kruunun kustannuksella vanhaan kaupunkiin rakennettiin uusi tullihuone — <span className="quote">Ilomäki</span> nimiselle tontille, joka sijaitsi pääkadun 
          ja järven välissä.</p>
        <p>Näiden uusien vastuksien johdosta antaa porvaristo edusmiehelleen 1760—61 vuoden valtiopäivillä pitkän anomuskirjan, jossa ensiksi kerrotaan minkälaisten vaiheiden alaisena kaupungin muutto-asia siihen asti oli ollut, miten 
          sitä jo oli ajettu 21 vuotta, miten porvaristo aikoinaan kiellettiin palaneiden huoneittensa sijalle rakentamasta uusia, mitä kaikkea se oli saanut kärsiä j . n. e. Sitten pyytävät porvarit että heille myönnettäisiin edes 
          jonkinmoinen korvaus tämän pitkällisen viivytyksen heille tuottamasta vahingosta; asuntojen vähyyden ja ahtauden tähden eivät näet olleet voineet esteettömästi harjoittaa elinkeinoaan. Myöskin syytetään Ojoisten latokartanon 
          haltiaa juonittelemisesta ja sitten huomautetaan kuninkaallisesta päätöksestä lokakuun 14 p:ltä 1756 sekä Glansenstjernan ja Lilljebrunin toimittamasta katselmuksesta, jonka mukaan kaupungin uusi asema olisi tuleva Ojoisten 
          maalle. Tämä latokartano oli muka kokonaisuudessaan luvattu antaa kaupungille. Porvarit rukoilevat että kunink. Majesteetti tahtoisi vahvistaa tämän oman määräämänsä katselmuksen päätöksen ilman pitempää viivytystä, sitä 
          suuremmalla syyllä, kun seuraavan vuoden alussa alkavien linnoitustöiden tähden muutamia yleisiä rakennuksia ja porvarienkin asuntoja tulisi revittäväksi. Lopuksi anotaan että, jos toivottavasti kaupunki nyt todellakin 
          muutettaisiin, kullekkin porvarille myönnettäisiin jonkinlainen muuttoapu yleisistä varoista. Jos taasen kaupunki ei tulisikaan Ojoisten maalle, pyytävät porvarit että heille myönnettäisiin oikeus rakentaa edes jonnekkin sekä 
          että he siinä tapauksessa saisivat rakennuksiansa varten ottaa hirsiä kruununtilojen metsistä.</p>
        <p>1760—61 vuoden valtiopäivillä oli Hämeenlinnalla yhteinen edusmies Tammisaaren kaupungin kanssa, nimittäin raatimies Lillja Tammisaaresta. Sen lisäksi, mitä anomuskirjassaan olivat esittäneet, pyysivät hämeenlinnalaiset häntä 
          vaikuttamaan siihen suuntaan, että jos syystä tai toisesta ei kaupungille annettaisi koko Ojoisten latokartanon maita, se ainakin saisi Gladbackan ja Hakalan torpat, joiden maalle uuden kaupungin asema juuri oli määrätty. Nämä 
          torpat voitaisiin sitä helpommasti luovuttaa, kuin ne eivät maksaneet mitään veroa Ojoisten kartanolle, joka siten ei tulisikaan kärsimään mitään vahinkoa.</p>
        <p>Porvariston valitukset ja anomukset sanotuille valtiopäiville näkyvät myöskin tepsineen. Syyskuun 23 p:nä 1761 antoi näet Hänen Majesteettinsa nyt — huolimatta Ojoisten latokartanon silloisen haltian, vapaaherra Flemingin, 
          valituksesta — sellaisen päätöksen, että kaupunki olisi muutettava Pyövelinmäelle, ja maaherraa käsketään tiedustelemaan, paljonko muuttoapua porvarit tarvitsisivat, sekä pitämään huolta siitä, että asukkaat saisivat 
          muuttamistöissä käyttää kaupungissa majailevaa sotaväkeä <span className="quote">samasta päiväpalkasta kuin puustellitöissäkin on tavallista</span>.</p>
        <p>Seuraavan vuoden alussa kirjoitti tämän johdosta maistraati maaherralle kirjeen, jossa pyydettiin porvareille muuttoapua sekä, sittenkun kaupungin paikka olisi varmasti vaajoitettu ja tonttimaat jaettu, pari arviomiestä, joiden 
          tulisi antaa lausuntonsa siitä, paljonko apua kukin porvari tonttimaansa suhteen tarvitsisi. Samassa kokouksessa, jossa tämä kirje päätettiin lähetettäväksi, lausui porvaristo huolensa siitä, että uudella kaupungin-paikalla oli 
          niin kovasti vaikea saada kaivoja.</p>
        <p>Jo samana vuonna ryhdyttiin vaajoittamaan uutta kaupungin asemaa, ja syyskuussa 1762 valmistui ensimäinen kartta, jossa kaupunki on merkitty sijaitsevaksi Pyövelinmäen pohjoisrinteellä. Tämä paikka kuitenkin pian taas 
          hyljättiin, luultavasti siitä syystä, että siihen oli vaikea saada kaivoja. Jo marraskuussa samana vuonna tuli näet toinen kartta, jossa kaupungin ala on asetettu vähän kauvemmaksi rannasta, kuitenkin niin, että suurin osa 
          siitä sijaitsee Pyövelinmäellä; pohjoinen osa on vain siirretty vähän länteen päin.</p>
        <p>Mutta tämäkään ehdoitus, kumma kyllä, ei näy tulleen vahvistetuksi, jonka tähden ei vielä nytkään voitu ryhtyä muuttamiseen. Minkä tähden paikka hyljättiin, ei asiakirjoista selvene. Siihen vain ei näy kuuluneen Ojoisten maita 
          ollenkaan, vaan käsitti se luultavasti yksinomaan kaupungin omia tiluksia, joita muuten oli hyvin vähäsen. 1765 vuoden valtiopäivillä, jolloin Hämeenlinnaa edusti Naantalin pormestari Herkepaius, anovat näet kaupungin porvarit 
          muun muassa että heille korvaukseksi siitä maasta, jonka he kaupungin muuttamisen johdosta <span className="quote">vanhan sillan luo</span> tulevat menettämään, annettaisiin Suotorpan ja Hakalan torppien maat.</p>
        <p>Jonkinlainen este oli kohdannut kaupungin muuttamisen toteuttamista. Sen voi kenties päättää siitäkin, että maistraati v. 1765 määrää jokaisen talonomistajan omalle katuosalleen laittamaan kävelypolkuja (»spångar») eli 
          trottoaareja. Ja tällä tavoin elettiin kuin ennenkin vielä kymmenkunta vuotta edelleen; muuttopuuhista ei kuulu mitään.</p>
        <p>Mutta vuosiluku 1775 muodostuu viimein käännekohdaksi Hämeenlinnan kaupungin historiassa. Silloin käypi näet pienessä kujalassamme Vanajaveden rannalla Pohjoismaiden nerokuningas, nuori Kustaa III.</p>
        <p>Muutama sana siis erikseen vielä tästä merkkitapauksesta, sen suuresta vaikutuksesta kaupungin vaiheisiin ja muista siihen yhtyvistä asioista.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">XI</p>
      <Article titleText="Kustaa III käy Hämeenlinnassa. Päätös kaupungin muutosta.">
        <br />
        <p className="initialCap">Jo toukokuussa 1774 sai kaupungin maistraati kirjeen maaherralta, joka siinä käskee maistraatia ryhtymään toimiin katujen ja maanteiden parantamista sekä kaupungin siistittämistä varten kaikin 
          puolin, koska näet kuningas pian oli tulossa. Ja kesäkuussa samana vuonna uudistetaan käsky.</p>
        <p>Mutta sinä vuonna ei kuitenkaan vielä kuninkaan matkasta Suomeen mitään tullut. Vasta huhtikuussa v. 1775 ilmoitti maaherra jälleen että ensi toukokuussa Kustaa aikoisi käydä täällä. Turusta matkustaisi hän Helsinkiin ja 
          sieltä Porvoon ja Hämeenlinnan kautta takaisin Turkuun. Hämeenlinnan maistraatin tulisi muiden vastaan-ottotoimien ohessa kuuluttaa että Alisen ja Ylisen Hollolan sekä Sääksmäen komppaniiain piti kokoontua Poltinahon kentälle 
          kappaleen matkaa lounaasen päin kaupungista. Toisessa kirjeessä samalta huhtikuulta käsketään maistraatia pitämään huolta siitä, että hyvää ruokaa olisi saatavissa kuninkaalle, niinkuin sopivat asunnotkin sekä hänelle että 
          hänen loistavalle seurueelleen. Viimeinen käsky ei liene ollut aivan helppo täyttää, sillä tässä seurueessa oli 70 à 80 henkeä ja kaupungissa kovin vähän asuntoja, nekin varsin alkuperäisessä tilassa.</p>
        <p>Kesäkuun 19 päivänä illalla saapuikin vihdoin Pohjan kuuluisa nuori kuningas Hämeenlinnaan, mutta hänen vastaanotostaan emme tiedä mitään mainita. Länteemme vaikenevat. Luultavasti oli kaupunkilaisilla niin paljon hommaa 
          juhlallisuuksissa, ettei kenkään tullut ajattelemaan kertomusta tulevia sukupolvia varten.</p>
        <p>Muuttamalla alkuperäistä matkasuunnitelmaa tulikin kuningas suoraa päätä Turusta. Vasta Hämeenlinnasta matkusti hän Helsinkiin ja Porvoosen. Henkilöistä hänen seurueessaan mainittakoon valtioneuvokset Lieven ja Ulrik Scheffer 
          sekä eversti Sprengtporten, joka vasta Suomessa lienee siihen yhtynyt.</p>
        <p>Yhden päivän ainakin viipyi kuningas Hämeenlinnassa. Täällä allekirjoitti hän — heinäkuun 20 p:nä — asetuksen Vaasan hovioikeuden perustamisesta ja näkyy muutenkin panneen alkuun koko joukon niistä hyödyllisistä muutoksista, 
          jotka sitten olivat seurauksena hänen matkastaan. Nyt saivat myös hämeenlinnalaiset välittömästi valittaa kuninkaallensa kurjaa ja epävarmaa asemaansa, ja epäilemättä tuotiin silloin esille muuttamisasiakin, koska tätä jo 
          seuraavana vuonna taas ruvetaan uudella innolla puuhaamaan.</p>
        <p>Jo ennen käyntiään Suomessa oli Kustaa, päätöksellä kesäkuun 20 p:ltä 1774, määrännyt että Hämeen—Uudenmaan läänin maaherran-istuin oli muutettava Helsingistä Hämeenlinnaan, hanke, jonka kautta siihen aikaan mitätön 
          pikkukaupunki Vanajaveden rannalla siis tuli hallinnollisessa suhteessa maaherrakunnan tärkeimmäksi paikaksi. Kesäkuun 11 p. 1775 ilmoittaa Hämeen—Uudenmaan läänin silloinen maaherra sitten kaupungin maistraatille että 
          <span className="quote">Kuninkaallisen Majesteetin armollisen määräyksen mukaan tulee maaherran-istuin jo ensi vuoden alusta alkaen sijaitsemaan Hämeenlinnan kaupungissa</span>, ja maistraatia käsketään antamaan kirjallinen 
          lausunto siitä, paljonko maaherran virkatalo tulisi maksamaan, vaikka työhön voitaisiinkin ryhtyä vasta ensi kesänä. Maistraatin tulisi hankkia maaherralle, lääninsihteerille, lääninkamreerille ja rahastonhoitajalle väliaikaiset 
          asunnot.</p>
        <p>Lääninhallituksen muutto pantiin kuitenkin toimeen vasta 1776 vuoden huhtikuussa, jonka 27 päivänä maaherranvirasto oli ensimäistä päivää vaikutuksessaan Hämeenlinnassa.</p>
        <p>Porvarien anomukset kaupungin muutto-asiassa Kustaa kuninkaan täällä käydessä otettiin suosiolliseen huomioon. Jo samana vuonna eli siis 1775 määrätään näet maamittari Olof Henström tekemään mittauksia uutta kaupungin paikkaa 
          varten. Hän näkyy kannattaneen sitä maakaistaletta, joka kävi Pyövelinmäestä alkaen pitkin Wanajaveden läntistä rantaa koko joukon pohjoispuolelle nykyistä rautatie-siltaa. Tähän alaan kuului osaksi kaupungin, osaksi Ojoisten 
          latokartanon alaisen Hakalan torpan maita. Mutta tämä ehdoitus ei kuitenkaan tullut hyväksytyksi. Kruunun asiamies, kenraalimajuuri Arbin, teki kuninkaalle sitä vastaan huomautuksia: ala oli liian kaukana linnasta ja kaupunki 
          tulisi sijaitsemaan korkean Pyövelinmäen takana, niin että sitä linnan tykeillä ei ollenkaan voisi puolustaa.</p>
        <p>Arbin ehdoitteli kaupungin paikaksi n. s. Niementaustan mäkeä Saaristen latokartanon maalla. Tämän ehdoituksen nyt kuningas hyväksyikin ja määräsi kirjeellä kesäkuun 11 p:ltä 1776 Arbinin toimittamaan kartan uudesta kaupungin 
          asemasta.</p>
        <p>Tämä kartta valmistui seuraavan vuoden alkupuoliskolla, ja Drottningholman linnassa tuli se elokuun 25 p. 1777 hyväksytyksi. Samassa tilaisuudessa Kustaa III myös allekirjoitti määräyksen Hämeenlinnan kaupungin muuttamisesta 
          Niementaustan mäelle Saaristen sotilaspuustellin maalla eli sille paikalle, jossa kaupunki nyttemmin sijaitsee.</p>
        <p>Helpoittaakseen muuttamiskustannuksia määräsi kuningas niinikään että tie olisi kruunun kustannuksella rakennettava linnasta uudelle kaupungin paikalle sekä että porvarit saisivat rakennustöihinsä käyttää kaupungissa majailevaa 
          sotaväkeä 16 hopeaäyrin päiväpalkasta.</p>
        <p>Mutta tässä ei kylliksi. Kaupungille lahjoitettiin koko Saaristen sotilaspuustelli, jonka haltialle (silloin eräs katteini Jägerhorn) korvaukseksi annettiin Heinon kylässä lähellä kaupunkia sijaitseva kruununtila, joka 
          veroäyriltään oli Saaristen puustellin arvoinen. Hämeenlinnan kirkkoherrakuntaan yhdistettiin viisi kylää: <span className="quote">Luhtiala, Kirstula, Parola, Vorentausta (Vuorentausta), Jervis (Järviöinen)</span>, jotka ennen 
          olivat kuuluneet Wanajan pitäjään.</p>
        <p>Oli siis vihdoinkin saatu kunnollinen tulos 38 vuoden ponnistuksista, ja huktikuun 19 päivänä 1779 antoi läänin maaherra kirjeellisesti maistraatille luvan ottaa haltuunsa Saaristen latokartano. Katteini Jägerhorn'ille tulisi 
          kaupungin kuitenkin maksaa se veromäärä, joka meni häneltä hukkaan kunnes hän ehtisi saada haltuunsa mainitun kruununtilan Heinon kylässä; summa tekisi noin 22: 17 Sp. r. Saaristen kartanon pellot saisi maistraati niin pian kuin 
          mahdollista jakaa erityisiin <span className="quote">plantage</span>ihin eli kasvimaihin.</p>
        <p>Kesäkuun 7 p:nä 1779 pidettiin lähtökatselmus Saaristen tilalla, joka siis nyt lopullisesti tuli Hämeenlinnan kaupungin omaksi. Ja kun siis täten oli saatu uusi hyvä ja sopiva paikka kaupungille, rupesivat sen porvarit myös 
          innolla muuttamista puuhaamaan. V. 1779 oli tie linnalta kaupungin uudelle paikalle jo valmiina, ja nyt ruvettiin laskemaan uuden Hämeenlinnan perustusta. Porvareille jaettiin kullekkin oma tonttimaa ja yleisille rakennuksille, 
          niinkuin kirkolle, pappilalle ja koululle, määrättiin omat alat. Rohdoskasvien kasvatusta varten annettiin kuninkaan erityisestä määräyksestä kaupungin apteekarille erityinen <span className="quote">ryytimaa-alue</span>, josta 
          hänen kuitenkin tuli maksaa kaupungille sama verta veroa kuin porvarit kasvimaistaan maksoivat.</p>
        <p>1778 vuoden valtiopäivillä oli Hämeenlinnan edusmies, raatimies Henrik Stephanus, pyytänyt kaupungillensa tullivapautta erityisille tavaroille, ja heinäk. 12 p. 1779 antoikin hallitus sille erityisen vapauskirjan, jossa m. m. 
          sanotaan: <span className="quote">muuton edistämiseksi ja helpoitukseksi asukkaille sen saattamissa kustannuksissa, saatakoon tulevan vuoden alusta 1789 vuoden loppuun saakka uuden kaupungin paikalle tullittomasti tuoda 
          rakennettuja taloja, hirsiä, palkkia, parruja, ruoteita, lautoja harmaata kiveä, kalkkia sekä muuri- ja kattotiiliä, eikä ole tässä kohden asukkailla minkäänlainen velvollisuus atestien kautta todistaa miten sanottuja aineksia 
          on käytetty; mutta sitä vastoin on hallitus katsonut arveluttavaksi myöntää samalla anottua tullivapautta talojen sisustusta ja kuntoon-panemista varten tarvittaville aineksille raudasta, lyijystä, ikkunalasista, öljystä, 
          väri-aineista ja muusta senkaltaisesta tavarasta, koska näiden suhteen on vaikeampi valvoa ettei tullikavallusta tapahdu </span>.</p>
        <p>Muuttamisavuksi annettiin kaupunkilaisille sitä paitsi yleisistä varoista 907: 7,8 Sp. riksiä. Näistä rahoista meni v. 1780 työväen palkkoihin 286: 17,5 Sp. riksiä, v. 1781 51: —,5, v. 1782 50: — Sp. r. Markkinakojujen 
          teettämiseen meni 444: 13,8 Sp. r. ja tullihuoneen rakentamiseen 08: 46 Sp. r. Jäännös eli 26,2 Sp. r. pantiin kaupungin-kassaan.</p>
        <p className="info">Suullinen taru, jonka täällä olemme kuulleet, kertoo että Kustaa kuningas, matkustaessaan pois Hämeenlinnasta ja hetkeksi seisattuessaan Hattelmalan harjulle ottaakseen pienen aamuryypyn, oli 
          katsellut taakseen ja silloin osoittanut Niementaustan metsäistä mäkeä lausuen, että siinähän olikin paras ja kauniin paikka uudelle kaupungille.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">XII</p>
      <Article titleText="Muuttaminen tapahtuu. Jätteet vanhasta kaupungista.">
        <br />
        <p className="initialCap">Vuonna 1780 oltiin siis jo paraimmassa muuttotouhussa, ja raivattiin sinä vuonna erittäinkin uuden kaupungin katuja ja toria. Mutta moni uudisrakennuskin kohosi jo siihen aikaan uuden kaupungin 
          tonteilla, varsinkin torin ympärillä. Sanotaanpa mainittuna vuonna m. m. uudessa kaupungissa jo olleen useita taloja, jotka olivat vanhan kaupungin paraimpiakin <span className="quote">mukavammat ja muhkeammat, ja moni näistä 
          oli kaksikertainenkin</span>. Tämä <span className="quote">muhkeus</span> ei kuitenkaan näy olleen yleinen, vaan paljon siinä silminnähtävästi <span className="quote">fuskattiinkin</span>. Niinpä m. m. oli maaherralla tuon 
          tuostakin syytä puuttua rakennustavan valvomiseen. Eräs porvari määrättiin asettamaan talonsa yläkerran ikkunat samalle kohdalle kuin alakerroksenkin olivat, ja torin puolelta piti hänen laudoittaa rakennuksensa. Toinen, jonka 
          talo sijaitsi lähellä kirkon alueeksi määrättyä tonttia, oli sen rakennuttanut niin rumasti, että maaherra velvoitti hänet joko muuttamaan rakennuksensa jollekkin syrjaisemmälle tontille tai rakentamaan sen kauniimmasti ja 
          paremmista aineista.</p>
        <p>Sanottuna vuonna syyskesällä mainitaan suurin osa kaupunkilaisia asuneen uudessa kaupungissa, ja niinpä pidettiin jo syysmarkkinatkin täällä. V. 1781 sitten jatkettiin rakentamista ja muuttoa ja ruvettiin kaupungin yleisiäkin 
          rakennuksia rakentamaan. Tällä tavoin oli jo v. 1783 valmistunut läänin-sairashuone, jonka perustamisesta jo v. 1768 oli puhetta ollut. Se sijaitsi vanhan hautausmaan läntisellä puolella, lähimmittäin nykyisen Leppäsen talon 
          paikalla, ja oli kaksinkertainen puurakennus. Uusi koulutalo, joka tuli sijaitsemaan juuri kirkon vieressä, sen pohjoispuolella, tuli valmiiksi samana vuonna. Maaherran virkatalo niinikään.</p>
        <p>Vuonna 1783 kävi Kustaa kuningas toistamiseen näillä tienoilla, ollen silloin sotilaallisella tarkastusmatkalla. Kenttäharjoituksissa Parolan nummella taittui häneltä tapaturmaisesti toinen jalka, jonka jälkeen hän makasi kaksi 
          viikkoa sairaana Hämeenlinnassa. Tällä ajalla mainitaan hänen kaupungin kanssa sopineen kirkon rakentamisesta ja luvanneen, jos hänen vastaisuudessa annettavansa piirustus omaksuttaisiin, lahjoittaa kirkolle kuparikaton. Tämän 
          lupauksensa pitikin sitten kuningas lahjoittaen 4,000 Sp. r., mutta valmistettuaan kirkolle piirustuksen aivan omituisen mallin mukaan. Siinä noudatettiin näet Vespasianuksen amfiteaterin rakennustapaa, ja semmoiseksi 
          rakennettuna kirkko sitten pysyikin v. 1892 asti.</p>
        <p>1783 vuoden kuluessa piti oikeastaan kaikkein asukkaidenkin olla muuttaneina uuteen kaupunkiin. Mutta sen lopussa asui kuitenkin vielä melkoinen joukko kaupunkilaisia, varsinkin kapakoitsijoita, vanhalla paikallansa, johon 
          vielä vähäksi aikaa jäädäkseen he myös pyysivät lupaa maaherralta. Pyyntöön suostuttiinkin, mutta määrättiin samalla että tämä lupa saisi ulottua ainoastaan lokakuun loppuun v. 1784, jolloin heidän viimeistäänkin piti olla 
          asuvina uudessa kaupungissa ja jolloin mitään asuinhuoneita vanhassa ei enää saisi olla.</p>
        <p>Näihin asti säilyneitä vanhimpia rakennuksia uudessa kaupungissa on kauppias Willgrenin omana olevan talon päärakennus torin kulmassa (Itäisen Linnakadun ja Raastuvankadun risteyksessä), joka rakennettiin vuonna 1783 ja joka 
          omituisine kattoineen ja ikkunaluukkuineen oudoksuttaa nykyisen sukupolven silmää, sekä saman talon pihassa oleva ja samana vuonna rakennettu makasiini. Talon portista oikealle astuessa on vielä vanhempi eli v. 1773 rakennettu, 
          fasaadineen I. Linnakadulle antava rakennus. Se on siis vanhasta kaupungista tänne muutettu.</p>
        <p>Varmuudella voinemme sanoa että 1785 vuoden alussa muuttaminen oli päättynyt ja asukkaat niinmuodoin uusille konnuilleen siirtyneet. Hämeenlinnan kaupunki kävi uusia vaiheita kohti.</p>
        <p>Vanhan kaupungin sijalle nousi useita taloja kruunun tarpeita varten, mutta muutamia vanhojakin jäi paikallensa, erittainkin noita turvekattoisia töllejä, joita ei kenkään viitsinyt muuttaa tai käyttää aineksina uusiin 
          rakennuksiin uudessa kaupungissa. Vielä kymmenkunta vuotta sitten oli niitä joitakuita pystyssä muistomerkkeinä Hämeenlinnan kaupungin menneistä ajoista, ja vielä tänäpäivänäkin nähdään tällä paikalla viime vuosisadalta pari kolme 
          ikäloppua ihmissuojaa, joita nyttemmin venäläinen sotaväki käyttää talleina, liitereinä j . n. e. Alussa tätä vuosisataa löytyi niinikään vielä hautaristiä vanhan kaupungin hautausmaalla. Venäläisiä kivikasarmia myöhemmin 
          rakennettaessa vietiin siitä luita ja pääkalloja uuden kaupungin hautausmaalle.</p>
        <p>Se kaksinkertainen rakennus vanhassa kaupungissa, joka seisoo koillisimmalla mäentöyräällä lähellä rantaa ja jonka alakerran toinen puoli on harmaasta kivestä, ei oikeastaan ole vanhan Hämeenlinnan rakennuksia, vaan niitä, jotka 
          kaupungin muuton jälkeen rakennettiin sen entiselle sijalle. Tätä taloa käytettiin näet 18-luvun alkupuoliskolla kruunun-apteekkina. Vastapäätä sitä nykyisen puiston puutarhurin rakennuksen kohdalla eli entisellä pappilan 
          tontilla sijaitsi samaan aikaan kuvernööri Stichaeuksen v. 1834 rakennuttama vaivais- ja työhuone.</p>
        <p>Jätteenä vanhasta kaupungista mainittakoon vielä myöskin tässä muuan uuteen kaupunkiin muutettu vanha aitta, joka on nähtävänä nykyisessä leskirouva Klepoffin talossa Raastuvankadun varrella ja jota nyt käytetään tallina. 
          Siinä on eräässä hirressä sisäpuolella vuosiluku 1760. Muita pienempiä vanhoja muistoja muinaisesta Hämeenlinnasta, joita olemme nähneet erään kaupunkilaisen luona ja jotka hyvin pitäisivät paikkansa kerran kenties syntyvässä 
          Hämeenlinnan muinaiskalujen museossa, ovat: vanhan kirkon viiri (vuosiluvulla 1737); vanha 3 leiviskän puntari (vuosiluvulla 1723), myöhempinä aikoina saatu eräästä torpasta Kalvolassa, jonka emäntä mainitaan kertoneen että 
          aikoinaan joku Hämeenlinnan sianlihanostaja olisi sen matkoillaan torppaan unohtanut; sekä suutari-ammatin kaunis sinetti reunakirjoituksella: <span className="quote">Skomakare. Ämbets. Sigill . 1 . Tavastehus</span> ja puiseen 
          varteen piirretyllä vuosiluvulla 1660.</p>
        <p>Mitä valaisevimpina muistoina vanhasta kaupungista ovat kuitenkin pidettävät ne hyvät ja selvät kartat, joita tallennetaan maistraatin muutenkin rikkaassa ja hyvän säilyneessä arkistossa ja joista muutamat esittävät niitä eri 
          ehdoituksia kaupungin uudeksi asemaksi, jotka aikojen kuluessa syntyivät. Suuri kartta vuodelta 1770 antaa erinomattain havaannollisen kuvan kaupungin silloisesta asemasta ja sen pienistä viljelysmaista pitkin kapeaa 
          rannikko-kaistaletta molemmin puolin yhtä kapeaa itäistä vesiväylää.</p>
        <p>Tämän kirjasen loppuun liitetty kopio A. Arbinin kartasta vuodelta 1778, jonka kuningas, kuten kopioon piirretystä facsimilestä näkyy, vahvisti toukok. 19 p. samana vuonna, esittää uuden kaupungin alkuperäisen aseman 
          ympäristöineen. Lyhyt kertomus ja selitys tästä kartasta, johon tässä viittaamme, on liitettynä kopioon. Siitä saa lukija kenties paraimman käsityksen 
          uudesta kaupungista sen ensi aikoina.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">XIII</p>
      <Article titleText="Asukastilastoa 1700-luvun loppupuoliskolta.">
        <p className="caption">Väkiluku Hämeenlinnan kaupungissa vv. 1749 - 1800.</p>
        <Image className="centeredImageStyle" style={{marginTop: "4px"}} src={img1} alt="Väkiluvun kehitys"/>
        <SubDivider className="dividerStyle"/>
        <p className="caption">Syntyneet.</p>
        <Image className="centeredImageStyle" style={{marginTop: "4px"}}  src={img2} alt="Syntyneet"/>
        <SubDivider className="dividerStyle"/>
        <p className="caption">Kuolleet.</p>
        <Image className="centeredImageStyle" style={{marginTop: "4px"}}  src={img3} alt="Kuolleet"/>
        <SubDivider className="dividerStyle"/>
        <p className="caption">Hämeenlinnan kaupungin käsityöläiset jaettuina ammattinsa mukaan sekä kauppiaat.</p>
        <Image className="centeredImageStyle" style={{marginTop: "4px"}}  src={img4} alt="Ammatit"/>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">XIV</p>
      <Article titleText="„Hattelmalan harjanteilla” v. 1808 Kauppa- ja käsiteollisuustilastoa samalta vuodelta.">
        <br />
        <p className="initialCap">Näillä vaatimattomilla piirteillä, jotka tietysti eivät vähennä vastaisen kaupungin historian tarvetta, vaan päin vastoin toivoaksemme ovat jonkinmoisena kehoituksena semmoisen toimittamiseen, koska 
          ne kaikessa katkelman-tapaisessa muodossaan osoittanevat että tämänkin pienen paikkakunnan vaiheissa on varsinaiselle historijoitsijallekkin yhtä ja toista taiteenotettavaa, — näillä pienillä piirteillä on melkein yksinomaan 
          ollut tarkoituksena näyttää mimmoisten elämän-ehtojen vallitessa asukkaat vanhassa Hämeenlinnassa elivät, jotta syyt kaupungin muuttamiseen jotakuinkin kävisivät selville.</p>
        <p>Vanha kaupunki oli, kuten olemme kertoneet, rakennettu kovin ahtaalle paikalle, jossa se sen ohessa viimein tuli ristiriitaan linnan alue-oikeuksien kanssa, ja uutta asemaa etsittäessä jäätiin, kun aika oli täytetty, nykyiselle 
          laveammalle ja kaikin puolin sopivammalle paikalle. Uuden kaupungin-aseman kanssa sai Hämeenlinnan pieni yhteiskunta myös koko joukon viljelysmaita ja metsiä, jopa torppiakin. Saaristen sotilastila käsitti näet yhteensä koko 
          12 11/12 manttaalia, mikä suuri kartano alusmaineen muodosti melkoisen omaisuuden.</p>
        <p>Mutta, kuten ylempänä olemme huomauttaneet, se kosketon vesistö, jonka varrelle kaupunki oli perustettu ja muuteltunakin jäi, ei ollut omiansa luomaan mitään suurempaa teollisuutta eikä, kapeutensa tähden, myöskään voinut 
          välittää liikettä useammille suunnille. Tämän seikan huomasi kyllä Kustaa III:n tarkka silmä. Ja niinpä perustettiin hänen toimestaan v. 1779, eli kolme vuotta jälkeen Hämeenlinnan lopullista muuttamispäätöstä, mahtavan 
          Tammerkosken partaalle kilpailijakaupunki, joka kasvussa, kaupassa ja teollisuudessa on jättänyt paljon jälkeensä Birger jaarlin vähäisen linnakaupungin. Että tämä, kun kenties olisi voinut tulla kysymykseen sen oikeuksien 
          yksinkertainen siirto Tammerkosken alueelle, kuitenkin jäi yhä edelleen olemaan ja elämään, siihen kaiketikkin oli syynä juuri sen ominaisuus linnakaupunkina ja sen vanhat traditsioonit Hämeenmaan keskustana, mutta myöskin ja 
          ehkä etupäässä se, että asukkaat aina olivat pysyneet kiinni oikeuksissaan.</p>
        <p>Ja miten onkaan, osoittaa kaupunkimme myöhäisempi kehityskin että se yhä edelleen, huolimatta naapurikaupungin vilkkaasta vaurastuksesta, on <span className="quote">ollut paikallansa</span>, kuten sanotaan, vieläpä kaikella 
          kunnialla.</p>
        <p>Tästä Hämeenlinnan kaupungin myöhemmästä kehityksestä, joka yhtäjaksoisen kertomuksen muodossa olisi, viitatuista syistä, varsinaisen aineemme ulkopuolella vielä enemmän kuin täydellisempi esitys sen varhemmista vaiheista ja 
          jota varten sitä paitsi vaadittaisiin pitkällisempiä ja tarkempia arkisto-tutkimuksia kuin mihin näiden piirteiden toimittajan kyky ja aika sekä tätä kirjasta varten osoitetut varat riittävät, — tästä kehityksestä saanee arvoisa 
          lukija jonkinmoisen käsityksen alempana olevasta kunnallis-kertomuksesta ja siinä esiintuomistamme.tilastollisista numeroista sekä kaupungin eri laitosten ja rahastojen kertomuksiin liitetyistä lyhykäisistä historiallisista 
          tiedonannoista.</p>
        <p>Tässä jaksossa nyt huomautamme vain vielä sivumennen miten Hämeenlinna ja sen ympäristö <span className="quote">Suomen viimeisessä sodassa</span>, maaliskuun 1—6 päivinä 1808, tavallaan oli jonkunmoisena tapausten surullisena 
          keskustana, esiintuomme vähän tilastoa samalta ajalta ja kerromme sitten eräästä suuresta onnettomuudesta, joka parikymmentä vuotta myöhemmin kohtasi uutta kaupunkia keskeyttäen joksikin aikaa sen yhtäjaksoista kehitystä, sekä 
          esitämme lopuksi muutamia tilastollisia tietoja samalta ajalta ja pari muuta siihen liittyvää seikkaa. Sen ohessa loppuhöysteeksi muutamia pikku-tietoja ja juttuja.</p>
        <p>Runoilijan muistamilla <span className="quote">Hattelmalan harjanteilla</span> ovat vielä tänä päivänäkin nähtävinä jätteet niistä vallituksista, joiden suojaan vanha K. N. af Klercker, sotaväen ylipäällikkö Suomessa, oli 
          koonnut enimmän osan maamme armeijaa vastustaakseen etelästäpäin samoavain vihollisten etenemistä. <span className="quote">Silloin Klingspor saapuu, ottaa arvollansa komennon, antaa käskyjä kuin Klercker, mutta käskee 
          pakohon</span>, vaikka Klercker sotaneuvostossa kaikin voimin koetti todistaa että tappelua pitäisi yrittää, pannen seitsemän-kymmenen vuotiaan päänsä pantiksi asian onnistumisesta. Suru mielessä pakoitettiin Suomen soturit 
          täällä miekan-lyömättä heittämään etevin osa maastansa vihollisten valtaan. Markkina-laulajan valvottu <span className="quote">tähtiyö Hämeenlinnan jäillä</span>, jolloin <span className="quote">miehuus turhaks, toivo tyhjäks 
          tehtihin</span>, jolloin <span className="quote">kurjan raukan tähden unelmaks jäi voittokin</span>, on tietysti aina omiansa herättämään alakuloisuutta nykyisessäkin suku-polvessa, joka mainituille kuuluisille harjanteille 
          tekee kävelymatkojaan, muistellen miten esi-isäin palava taistelu-into pakollisesti raukesi näillä maisemilla voidakseen saada odottamatonta tyydytystä vasta myöhemmin mainehikkaissa taisteluissa Pohjanmaan lakeuksilla.</p>
        <p>Mutta kaikki nämä muistot, niinkuin sekin, miten <span className="quote">Hämeen pojat</span>, s. on Hämeen läänin jalkaväenrykmentti ja Hämeen jääkäripataljoona, noissa myöhemmin tapahtuneissa taisteluissa muodostivat, 
          runoilijan sanojen mukaan, <span className="quote">vankan muurin</span>, — ovat yleisesti tunnettuja asioita eivätkä kaivanne sen pitempää mainitsemista tässä lyhyessä muistelussa <span className="quote">surun, voiton 
          kultapäivist', ajoist' ikikunnian</span>.</p>
        <p>Mikäli me olemme joutaneet tämän ajan muistolehtiä kaupunkimme maistraatin arkistossa selailemaan, ei pienen kuntamme jokapäiväisessä elämässä sotakohtausten ja niiden sittemmin vaikuttaman suuren valtiollisen muutoksen kautta 
          tapahtunut niinkään melkoisia mullistuksia kuin kenties olisi voinut odottaa. Vaan jäivät itse käännekohdassakin, ja tietysti vielä enemmän rauhan tultua, julkiset ja yksityiset olot jokseenkin yhtäjaksoiseksi jatkoksi menneen 
          ajan olosta ja elämästä — maan säilyneiden perustuslakien ja niiden luomain laitosten turvissa.</p>
        <p>Ne vähemmät häiriöt ihmisten ja kaupunkikunnan elämässä, jotka sota-aika ja sitten uudet valtiolliset olot toivat muassaan, jätämme siis varsinaisen kaupungin-historioitsijan kerrottaviksi, jos semmoinen kerran ilmestyy, 
          huomauttamalla vain tässä sivumennen että kaupungin maistraatin arkistossa löytyy koko joukko tätä aikaa valaisevia asiakirjoja, m. m. kaikki venäläisen sotapäällikön, Kreivi Buxhöwdenin, kuuluisat, Turusta lennättämät ruotsin- 
          ja suomenkieliset proklamatsioonit eli julistukset, joilla hän koki peljättää Suomen asukkaita pois velvollisuuden tieltä ja muuten osoitti pitävänsä tätä maata jo valloitettuna <span className="quote">provinssina</span>. Eräästä 
          toisen venäläisen mahti- ja valtiomiehen, ulko-asiain ministeri Rumanzovin, lähettämästä <span className="quote">Julistuksesta</span> teemme tähän seuraavan otteen:</p>
          <Image className="centeredImageStyle" src={img5} alt="Julistus"/>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">XV</p>
      <Article titleText="Tulipalo 1831. Asukastilastoa samalta vuodelta. Otto Reinhold Rehbinder. „Birger Jaarlin linna”">
        <br />
        <p className="initialCap">Siirrymme viimein nyt kerrassaan vuoteen 1831, jolloin Hämeenlinnan kaupunkia kohtasi ankara onnettomuus kamalan tulipalon muodossa. Kaupunki tietysti ei siilien aikaan vielä ollut läheskään niin iso 
          kuin meidän päivinämme, — asemakarttakin osoittaa ainoastaan 14 korttelia (57 vastaan nykyään), — mutta yhtäkaikki jäi liekkien nieltäväksi — vähän toista sataa taloa, joten nämä siis oli rakennettu hyvin tiheään. Ainoastaan 
          kaksi asuttua pääkatua löytyi, Residenssi- ja Raastuvan-katu, joita yhdisti neljä poikkikatua. Rannimmainen osa nykyisen kaupungin itäpuolta ja samaten nykyisen kaupungin pohjoispuoli Tähtipuistosta linnaan päin oli tukevana 
          honkametsänä, mutta Residenssi- ja nyk. Birger jaarlin kadun välillä sijaitsi kuitenkin jo melkoinen paljous taloja. Länsipuolella torilta lähtien oli suurin osa asuttua kaupunkia ja jokunen määrä taloja myös eteläpuolella toria.</p>
        <p>Kertomuksessaan puheenalaisesta palosta sanoo silloinen pormestari Lagerblad Hämeenlinnan kaupunkia somaksi ja sieväksi (<span className="quote">vår täcka stad</span>).</p>
        <p>Tulipalo syttyi syyskuun 14 p:nä k:lo 7 illalla kauppias J. A. Juseliuksen talossa torin luoteisessa kulmassa (nyk. apt. Pomoell'in talo) eräästä siinä olevasta rehuladosta, jossa Juseliuksen renki sanotaan venyneen humalassa ja 
          savipiippua polttaen. Hän näkyy tälle tilalleen nukkuneen ja hänen piipustaan tuli syttyneen ladossa oleviin heiniin ja olkiin. Kaupunki oli varsinkin juuri sillä kohdalla tiheästi rakettuna, ja tuulen alkaessa kovasti käymään 
          idästä länteenpäin levisi valkea, huolimatta kaikista sammutus-ponnistuksista, hyvin nopeasti 5 à 6 taloon. Silloin sammutusväki ei enää arvellut voivansa hillitä palon etenemistä, kuri höltyi kokonaan, ruiskuttajat jättivät 
          paikkansa ja vedentuojat tynnyrinsä. Ja vaikka pormestari ratsasti katuja pitkin kokien ko'ota miehet jälleensä yhteen, hajosivat nämä sinne tänne pelastaakseen irtaimesta omaisuudesta mitä pelastettavissa oli. Kiitoksella 
          mainitaan muuan kasakkaluutnantti Ivanoff, joka sotamiehineen hoiti ruiskua eräässä puutarhassa ja tällä tavoin ehkäisi tulen leviämistä enemmän eteläänpäin, sekä senaatin ylimäär. kopisti A. Sundberg, joka asettui muutamaan 
          solaan erään palavan talon ja toisen, tulen vielä koskemattoman talon väliin johtaen suihkua niin onnellisesti, että tämä eheä talo pelastui ja <span className="quote">sen kanssa loput korttelista</span>. Sundbergin silmäkarvat 
          kärventyi ja hänen vaatteensa paloivat. Myöskin maalaisia läheisistä kylistä oli sill'aikaa tullut paljon kaupunkiin, ja heidän ja sotamiesten avulla onnistuttiin viimein — yhteensä oli käytettävissä 4 paloruiskua — saada 
          raivoava tuli hillityksi.</p>
        <p>Mutta silloin oli jo palanut, kuten pormestari Lagerblad sanoo seuraavana aamuna tekemässään kertomuksessa, <span className="quote">suurin osa torin pohjoispuolella olevasta kaupungista sekä kaikki talot, paitsi yhtä ei, 
          länsipuolella toria</span>. Julkisista rakennuksista paloivat maaherran virkatalo ja koulukartano. Raastuvanoikeuden ja maistraatin arkistot, joita säilytettiin pormestarin talossa, saatiin pelastetuiksi, mutta hänen talonsa 
          paloi tykkänään. Kirkko tosin näkyi sinä päivänä pelastuneen, mutta seuraavana aamuna huomattiin että kauhea kuumuus oli tunkeutunut sen vaskisen kupoolin läpi ja tätä kannattava puulaki syttynyt palamaan. Nopeat sammutusvehkeet 
          ehkäisivät auttamatonta vahinkoa syntymästä, mutta yhtäkaikki tapahtui vaurioita kirkon sisustuksessa, koska mainittuna on että jumalanpalveluksia sen perästä jotkut ajat pidettiin tilapäisessä vajassa kaupungin torilla.</p>
        <p>6 ½ päivää kyti tuli palaneiden talojen raunioissa. Yhtenä ainoana yönä oli — kuten toisessa, vähän myöhemmin tehdyssä kertomuksessa mainitaan — palanut poroksi kaikki rakennukset 102:lla talon tontilla.</p>
        <p>Löytyi näet kaikkiaan kaupungissa 176 tonttia, joista ainoastaan 11 ennen tulipaloa oli rakentamatta.</p>
        <p>Niin oli siis tuli niellyt lähes 3/4 koko asutusta kaupungista. 1,207 ihmistä oli joutunut kodittomaksi, mutta tulen uhriksi ainoastaan yksi ihmishenki, mainittu renki, jonka ruumiin jäännöksiä seuraavana päivänä löydettiin 
          tulipalon alkupaikalta.</p>
        <p>Palaneiden rakennusten raha-arvio laskettiin 875,000 ruplaksi, siihen luettuna palovakuutettujen talojen arvo; yksityinen vahinko palaneessa irtaimistossa noin 100,000 ruplaksi, kaikki banco-assignatsioonia.</p>
        <p>Syyksi tämän tuhoavan tulipalon hillitsemättömään leviämiseen mainitaan viimeiksi siteeraamassamme kertomuksessakin <span className="quote">mahdoton tonttijärjestely</span> (orimlig tomtreglering), joka ilmestyi siinä, että 
          rakennukset kaikkialla olivat niin kovin tiheässä.</p>
        <p>Tämä seikka antoikin sitten aiheen uuteen tontti-järjestelyyn, jolle vahvistus haettiin ennenkun palanutta kaupunginosaa ruvettiin jälleen rakentamaan. Ja uusi järjestely uusine karttoineen pysyi sitten voimassa vuoteen 1872 
          asti, jolloin taasen muutoksia kaupungin asemassa tuli kysymykseen.</p>
        <p>Ennen tulipaloa, löytyi kaupungissa kesäk. 14 p. 1831 päivätyn luettelon mukaan:</p>
        <Image className="centeredImageStyle" src={img6} alt="Asukasmäärät"/>
        <p>Oppilaitoksia ei löytynyt muita kuin triviaalikoulu 159 oppilaalla.</p>
        <p>Hyväntekeväisyyslaitoksia ainoastaan lääninsairaala 92 sairaalla.</p>
        <p>Mitään laivakulkua ei silloin vielä täällä harjoitettu, ei myöskään löytynyt mitään tehtaita tai senkaltaisia laitoksia (<span className="quote">inga fabriker, inga bruk, verk och inrättningar</span>).</p>
        <p>Tulipalon jälkeen ryhdyttiin innolla ja uutteruudella rakentamaan kaupunkia uudestaan uuden tonttijärjestelyn mukaan. Mutta koska lukija jo tietää että meidän ei ole tarkoituksena venyttää näitä piirteitä nykyaikoihin asti, 
          viittaamme tässä vain toistamiseen, mitä koko kaupungin myöhempiin vaiheisin ja kehitykseen tulee, alempana-olevaan tilastolliseen kertomukseen Hämeenlinnan kaupunkikunnan nykyisistä yhteisistä oloista, siihen liitettyine 
          lyhykäisine historiallisine tiedon-antoineen.</p>
        <p>Ainoastaan muutamia hajanaisia muistelmia tässä vielä, enimmäkseen suullisten kertomusten mukaan.</p>
        <p>Venäläisestä sotaväestä alussa vuosisataa mainitaan että heitä asui joka talossa 10 à 15 miestä, josta siis voi päättää että talot eivät olleet vallan pieniä. Harjoituksiaan piti tämä sotaväki nykyisen meijerin edustalla 
          olevalla pienellä tasangolla, ja kaupunkilaiset, erittäinkin naiset, pitivät hauskuutenaan käydä niitä katselemassa. Sekä upseerit että sotamiehet sitoivatkin siihen aikaan paljon avioliittoja suomalaisten tyttöjen kanssa.</p>
        <p>Sittemmin pitivät omat ruotusotamiehemme alustavia harjoituksiaan sillä kohdalla nyk. Gymnaasi-katua, missä kansakoulu nyt sijaitsee. Suuremmat harjoituksensa pitivät samaan aikaan sekä venäläiset sotamiehet että ruotuväki 
          torilla, vielä 1860-luvullakin.</p>
        <p>V. 1858 tuli Hämeenlinnaan majailemaan Turun kranatöörit, ja heidän komeaa marssiaan pitkin Raastuvan-katua torille ja siitä kivikasarmeille oli <span className="quote">koko kaupunki</span> ihmetellen katselemassa. Näistä 
          kranatööreistä kerrotaan muuten, että he olivat <span className="quote">hurjan raakaa ja juoppoa väkeä</span>. Harjoituksiaan pitivät he kivikasarmin pihalla.</p>
        <p>Sillä paikalla sillan itäpäässä, missä nykyiset kruununmakasiinit ja lääninsairaala sijaitsevat, eli n. s. Keinusaarella (Gungholmen), oli tämän vuosisadan alkuvuosina patterioita, josta seikasta kenties voidaan päättää, että 
          tältä paikalta jo silloin kävi ainakin jonkinmoinen tienpätkä Hätilän tilalle lähellä nykyistä rautatie-asemaa ja niinmuodoin myös kaupunkiin silta, jonka rakennusvuodesta muuten emme ole onnistuneet tarkkaa selkoa saamaan. 
          Arbinin karttaan vuodelta 1778 liitetystä selityksestä käy myöskin ilmi, että salmea tällä kohdalla tahdottiin suojella linnan tykeillä, joten mahdollisesti otaksuttiin jo sillankin siitä vastedes tulevan käymään poikki.</p>
        <p>Myöhemmin ja vielä vähää ennen 1831 vuoden tulipaloa oli Keinusaarella joukko työväen asuntoja. Kun kruunun-makasiini v. 1828 rakennettiin, lienevät ne kuitenkin tulleet suurimmaksi osaksi revityiksi alas. Muuten sopii kenties 
          tässä mainita että kaikki nykyiset siviili-hallinnon alaiset ruunun-rakennukset samalla Keinusaarella keisari Nikolain v. 1827 vahvistaman määräyksen mukaan seisovat paikallansa ainoastaan sillä ehdolla, että ne vastaisuudessa 
          mahdollisesti tarvittavien uusien patteriain varalta voidaan purkaa kokonaan pois, — jotenkin omituinen ehto tosiaan, Suomen valtiolliseen asemaan katsoen.</p>
        <p>Tällä samalla paikalla sanotaan ennen myöskin tullihuoneen sijainneen. Se oli aikoinaan koko iso rakennus, ja tie suljettiin kuten muissakin kaupungeissa puomeilla. Myllymäen puolella oli samallainen tulli.</p>
        <p>Entinen ruiskuhuone, joka oli tiilistä rakettu ja säntilleen juuri niin iso, että siihen mahtui kolme ruiskua, sijaitsi siinä, missä H:linnan raittiusseuran talon päärakennus nykyään seisoo.</p>
        <p>Vielä 1850-luvulla oli nykyisen kaupungin-hotellin eli ent. Nordinin hotellin nimenä Hotel St. Pétérsbourg. Se maakertapuoti samassa talossa, jossa nykyään harjoitetaan lihakauppaa, oli mainittuna aikana viini-kauppana ja 
          nimitettiin sitä <span className="quote">Stadskällaren</span>.</p>
        <p>1831 vuoden tulipalon jälkeen oli, kuten mainitsimme, palanutta kaupungin-osaa jälleen ruvettu innolla ja uutteruudella rakentamaan. Toinen talo toisensa perästä kohosi ennen pitkää vanhojen raunioille. Hämeen—Uudenmaan lääni, 
          jonka kuvernöörinvirasto oli täällä sijainnut, oli vuonna 1831 tullut jaetuksi kahteen lääniin nykyisillä niinillään, ia Hämeen lääninhallitus kuvernöörilleen voi jo tammikuun 1 p. 1832 alkaa täällä toimintansa, joten palaneen 
          virkatalon sijaan siis jo silloin oli uusi saatu rakennetuksi.</p>
        <p>Vuosina 1840—1862 <span className="quote">hallitsi</span> täällä kuvernöörinä Otto Reinhold Rehbinder, joka paikkakunnan historiaan on jättänyt pysyväisen muiston Hämeenlinnan kauniin ulkopuiston raivaajana ja rakentajana. Ennen 
          häntä oli koko nykyinen avara puisto-alue epämiellyttävänä kivikkona; mutta Rehbinder komensi sinne ojennusvankilan vangit linnasta ankaraan työhön, joka monen monta vuotta läpitsensä pusersi runsaat hikipisarat varikiparkain 
          ihosta. Kivet kiskottiin maasta irti ja koottiin, mitkä rantasillaksi, mitkä kivi-aidaksi, mitkä taasen tasoitettuina <span className="quote">vanhaksi linna-raunioksi</span>, joka seisoo lähes keskellä puistoa ja vuosiluvullaan 
          <span className="quote">1250</span> on käyvinään Birger jaarlin ensimmäisestä linnasta.</p>
        <p className="info">Jo pintapuolisellekkin katsojalle selviää melkein heti tämän raunion oikea luonne; mutta vapaaherra Rehbinder koetti, kuten kerrotaan, kerran eksyttää muutamia matkustavia ruotsalaisia tiedemiehiäkin 
          rakennuksellaan, osoittaen vuosilukua seinässä ja väittäen kiven kovaan sen muka keski-aikaista alkuperää. Oppineet herrat olivat uskovinaan, ja iloissaan piti nyt tuo muuten raharakas parooni heille hyvät ja kalliit 
          sampanja-kekkerit. Vasta näiden lopussa yksi herroista, kiittäen isäntää nautituista herkuista, rupesi antamaan hänelle rakennusohjeita vanhain linnan-raunioiden jäljittelemistä varten.</p>
        <p>Ojennus-vangeilla rakennutti Rehbinder Perttulan tilan maalle, 5 kilometriä kaupungista, itselleen sen komean, kaukaa katsoen linnantapaisen huvilan, joka kaupungin sillasta eteläänpäin silmäillessämme heti herättää huomiota ja 
          jossa nyttemmin sijaitsee tylsämielisten lasten kasvatuslaitos. Sen johdosta, että se rakennettiin <span className="quote">Pirun linna</span> nimiselle paikalle, sai huvila kansan seassa vähitellen tämän nimen, — seikka, joka 
          kovasti suututti kuvernööriä. Hän kuulutteli ja kielteli sentähden kansaa käyttämästä mokomaa ilkeää nimitystä, mutta huonolla menestyksellä — kuten ainakin — sillä sen ahkerammasti sitä käytettiin.</p>
        <p>Mutta vielä muullakin tavoin koki parooni Rehbinder paikkakuntaamme ja seutuamme sievistää. Sopiville paikoille kaupunkiin ja sen laita-osiin istututti hän lehdoiksi ja lehtokujiksi melkoisen paljouden saksanhaapoja eli 
          poppeleita ja raivasi rakennutti myös Aulangon kauniille <span className="quote">alppijärvelle</span> vieviä mukavia polkuja.</p>
        <p>Luolajan kylästä lähellä kaupunkia rakennettiin sen ohessa, kaikki tyyni vankien työllä, Rengon kappeliin melkein linjasuoraan vievä tie, huolimatta vastuksena olevista jyrkistä mäistä. Paroonille näkyi ainakin tässä kohden 
          suorin tie olevan paras.</p>
        <p>Mutta kaupungin väestössä ei näy Rehbinder olleen mikään suosittu henkilö, eikä maalaisissakaan. Häntä kuvataan äärettömän kopeaksi ja itsevaltaiseksi, jopa ylen määrin itsekkääksikin ihmiseksi. Tänne oli hän tullut Suomen 
          passitoimistosta Pietarissa, jonka laitoksen päällikkönä hän, sotilaana varsinaiselta ammatiltaan, sitä ennen oli ollut ja muutenkin kauvan Venäjällä palvellut — imeytyen hartaasti kiinni sikäläisiin virkavaltaisiin 
          katsantotapoihin. Ynseästi kohteli hän hämeenlinnalaisiakin, vaati tervehtimistä kaduilla vierailtakin henkilöiltä, ei viitsinyt ostoksilla ollessaan astua puotiin eikä edes nousta vaunuistansa, vaan oli hänelle tavara tuotava 
          nähtäväksi kadulle, j.n.e. Paronin ollessa ajelulla ratsasteli kaksi kasakkaa täysissä aseissa vaunujen perästä, ja hänen kävelyillään kulki myös kasakka parin askeleen päässä perästä — vesikarahvi muassa siltä varalta, että 
          herra kuvernööriä rupeisi janottamaan. Nöyrästi tuli vastaan-tulijain kumartaa ja tervehtiä, jolleivät tahtoneet joutua mahtavan maaherransa epäsuosioon.</p>
        <p className="info">Oli kaupungissa toki niitäkin, jotka toisinaan antoivat ylpeälle kuvernöörille pikku läksytyksiä. Niinpä muun muassa kerrotaan eräästä vanhasta lääkäristä, jonka hän kerran kipeänä ollessaan tavallisella 
          jyrkällä tavallaan oli komennuttanut luokseen, ettei tohtori tullutkaan ennenkun R. viimein lähetti vaunuilla noutamaan. Tohtorin silloin vihdoinkin saapuessa maaherran luo, ärjyi tämä aika lailla ja sanoi m. m.: „Tietäkää te, 
          hra tohtori, että minä yhdellä kynänvedolla voin lähettää teidät virasta." „Tietäkää te, hra parooni”, — vastasi tohtori —, „että minä yhdellä kynänvedolla voin lähettää teidät — helvettiin”</p>
        <p>Rehbinder joutui viimein ikäviin selkkauksiin ojennushuonelaitoksen talouden takia. Tämän laitoksen johtajana oli näet siihen aikaan eräs Rennerfelt, joka tässä taloudessa oli harjoittanut keinottelua, ja kuvernööri oli — kuten 
          tämän n. s. <span className="quote">Linnajutun</span> asiakirjoista on selvinnyt — sekaantuneena hänen asioihinsa. Koko seikan paljasti viimein prokuraatorille eräs linnankirjuri, joka oli joutunut riitaan esimiestensä kanssa. 
          Prokuraatori puolestaan nosti kanteen, ja loppuseuraus oli se, että sekä Rehbinder että Rennerfelt joutuivat pois paikoiltaan, — suureksi helpoitukseksi, niinkuin kerrotaan, sekä Hämeenlinnan asukkaille että koko läänillekkin.</p>
        <p>Seuraelämästä kaupungissa Rehbinderin ajoilta olkoon tässä sivumennen mainittu että se tavallaan näkyy olleen vilkkaampaa kuin meidän päivinämme. Tosin pidettiin vain kerta vuodessa yhteiset, kaikkia kansanluokkia käsittävät 
          suuret tanssiaiset eli paalit, n. s. Nikolai-paalit, mutta hyvin usein, muutamin ajoin joka viikko ja aina erikseen, n. s. aatelis-paaleja ja porvari-paaleja. Ja näissä tilaisuuksissa kerrotaan yhteiselämän olleen hauskaa, 
          teeskentelemätöntä ja herttaista, niinkuin ylimalkain muutenkin varsinkin porvaristo vanhojen säilyneiden tapojen mukaan tunsi itsensä ikäänkuin kaikki-yhteiseksi, solidaariseksi yhdyskunnaksi. Lasia kilisteltiin vanhaan tapaan 
          myös jotenkin ahkerasti, ja ikivanha hämeenlinnalainen elinkeinokin kukoisti, joskin tosin rajoitettuna, kaikessa rauhassa porvarien keskuudessa vielä kappaleen matkaa tämän vuosisadan toisen puoliskon sisään. — Ruotsin kieltä 
          käyttivät keskenään kaikki, jotka tahtoivat vähänkin <span className="quote">paremmasta käydä</span>, huolimatta siitä, kuinka sitä osasivat.</p>
        <p>Rehbinderin ajat ovat olleet ja menneet. Siitä päivin ei ole näillä mailla mitään tiedetty paikallishallinnollisista hirmujutuista, ja muutenkin on samainen aika katsottava poikkeukseksi Hämeen historiassa, sillä sen 
          edellisetkin maaherrat olivat silminnähtävästi kaikki hienompaa rotua. Reqviescat Rehbinder in pace, levätköön hän rauhassa. Pienoinen Hämeenlinnan kaupunkikunta on vuosisatamme loppuvuosikymmeninä ylimalkain viettänyt 
          rauhallista, hiljaisen edistyksen elämää, kasvanut ja vaurastunut luonnollisten ehtojensa mukaan ja erittäinkin vanhana sivistyksen ahjopaikkana Hämeessä levittänyt henkisen viljelyksen taimia runsaasti yltympärilleen 
          maakunnassaan ja koko maassaankin. Niinkuin se oli ennenkin tehnyt. Hämeenlinnan koulupenkillä istuivat muiden muassa aikoinaan mainiot Cygnaeuksemme, Fredrik ja Uno, täällä myöskin Agaton Meurman on koulua käynyt.</p>
        <p>Siitä kun tykit viimeiksi paukkuivat Birger jaarlin linnasta länsimaisen uskon ja länsimaisen viljelyksen kuuluvana kaikuna ja niiden suojelemiseksi Itämeren tällä puolen, siitä on pitkät ajat kulunut. Mutta vielä tänä 
          päivänäkin, kuten ennen, lähettää vähäinen linnakaupunki Wanajaveden rannalla toisen nuorukaisparven toisensa perästä ulos Suomen suurille tiloille taistelemaan saman uskon ja saman viljelyksen puolesta. Sallittakoon meidän tätä 
          muistellessamme päättää nämät yksinkertaiset sivut erään myöskin syntyperäisen hämäläisen, runoilija-vainaja Antti Törneroosin eli Tuokon sointoisilla säkeillä:</p>
        <h4>Birger Jaarlin linna.</h4>
        <p className="caption">Jo luonto, kuljettua kesä-illan,<br />Yö vaipan ylleen oli heittänyt<br /> Ja liepeellänsä Hämeenlinnan sillan<br />Himmeesen varjohon jo peittänyt.<br />Siell' yksin seisoin, silloin nuorukainen,<br />
          Seuduilla näillä vieras, matkalainen.</p>
        <br />
        <p className="caption">Kun katsolin siell' luonnon ihanuutta,<br />Outoihin vaivuin ajatuksihin,<br />Hempeetä kesä-yön mä hiljaisuutta<br />Sydämmin ihaelin sykkivin.<br />Siell' oli näky mitä ihaninta.<br />Maa tyyni oli, 
          tyyni järven pinta.</p>
        <br />
        <p className="caption">Vaan mikä tuolla luonnon suloutta<br />Jylhällä muodollansa varjostaa?<br />Se kohoutuen kohden korkeutta<br />Ylpeesti ympärilleen katsastaa.<br />Syvästi järveen kuvauu sen muuri,<br />Sisässä maan 
        kuin oisi sillä juuri.</p>
        <br />
        <p className="caption">Hengille luonnon liekö hennommille<br />Se peljättävä, paha kummitus?<br />Ilmoittavalta tuntuneeko sille<br />Yörauhassansa seudun kauneus,<br />Kun uhaten näin katsoo kaikkialle,<br />Järvelle, maalle 
          sekä taivahalle?</p>
        <br />
        <p className="caption">Ei, hengeksi sen mieleni vaan houraa,<br />Olento on se tosi itsestään.<br />Se muistuttaapi miestä, rautakouraa,<br />Jok' ennen voimakkaalla kädellään<br />Sen rakensi ja nimess' uskon uuden<br /> Sen 
          kautta sorti Hämeen vapauden.</p>
        <br />
        <p className="caption">Ei ihme, että tätä miettiessä<br />Povessa tunsin tunteen katkeran:<br />Myös syntynyt mä olen Hämehessä<br />Ja synnyinmaana sitä rakastan.<br />Ken orjuuteen ja sortoon sitä sallis,<br />Jok' ain' on 
          ollut sydämelle kallis?</p>
        <br />
        <p className="caption">Näin miettiess' on huomannut ma aamun<br />Taas taivaan kannelle jo astuneen,<br />Kun jylhältä näin linnalt' öisen haamun<br />Ja synkeyden kaiken kadonneen.<br />Se kirkastumia seisoi aamukoissa<br />
          Ja peljätys kaikk' oli siltä poissa.</p>
        <br />
        <p className="caption">En peljästy stil luonnossakaan muussa<br />Sen lähellä mä nähnyt ollenkaan.<br />Pelotta lintu likimmässä puussa<br />Ilolla lauloi aamulauluaan.<br />Ja itse jylhän linnan räystähässä<br />Näin pienen 
          pääskysen mä pesimässä.</p>
        <br />
        <p className="caption">Mielestä haihtui haikeus; nyt vasta<br />Ma muistin, aamukoissahan sen näin,<br />Ett' uskon sätehet se taivahasta<br />Johdatti kerta Hämeesenkin päin,<br />Ja poistaessaan meiltä pakanuuden,<br />Ehk' 
          ankarast', toi oikeen vapauden.</p>
        <br />
        <p className="caption">Maamiehen kun ma kuulin sitte siellä<br />Kulkeissaan työhön riemull' laulavan,<br />Yömatkan päästä matkamiehen vielä<br />Kun tervesnä näin tietään kulkevan,<br />Niin vielä muistin, pait sen 
          muinaisuuden,<br />Sen suojass' olevan maan rauhaisuuden.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">Kertomus Hämeenlinnan kaupungin kunnallis-taloudellisista oloista.</p>
      <Article titleText="Kaupungin asema, rakennusalue ja ympäristö.">
        <br />
        <p className="initialCap">Nykyinen Hämeenlinnan kaupunki on rakennettu Niementausta nimiselle niemelle Wanajaveden läntisellä rannalla. Wanajavesi kapenee tällä kohdalla vähäpätöiseksi, joenkaltaiseksi väyläksi, joka 
          ainoastaan eteläpuolella kaupunkia taasen lavenee isommaksi lahdeksi.</p>
        <p>Kaupunki jakautuu kahteen rakennusalueesen, nim. vanhempaan eli kantakaupunkiin ja nuorempaan eli lännemmässä olevaan Myllymäen kaupunginosaan, joka nykyään vielä ainoastaan yhdellä kivitetyllä, viljelysniityn poikki vievällä 
          kadulla eli oikeastaan viertotiellä on yhdistettynä edelliseen.</p>
        <p>Rakennettu osa kaupungin asemasta käsitti v. 1883 noin 34,5 hehtaaria ja on siitä asti pienempäin asemamuutosten ja uudisrakennusten kautta lisääntynyt niin, että rakennettu osa kantakaupunkia nyttemmin käsittää 49,168 heht. ja 
          rakennettu osa Myllymäkeä 12,560 heht. Jos tähän luetaan lisäksi 7 heht. arentitonttia Myllymäessä, on koko kaupungin rakennettu pinta-ala tällä haavaa 68,728 heht., siihen luettuna torit ja kadut.</p>
        <p>Voimassa-oleva aseinakartta, josta kopio on liitettynä tämän kertomuksen loppuun, osoittaa kaupungin sisältävän yhteensä 57 korttelia. Näistä tulee kantakaupungin osalle 43 ja Myllymäen osalle 14. Kaikilla 57 korttelilla 
          yhteensä on 250 talontonttia, nim. kantakaupungissa 164 ja Myllymäessä 86.</p>
        <p>Kartta on laadittu 1872 vuoden aseman mukaan niine muutoksineen, jotka asianomaisesti myönnettiin vuosina 1882 ja 1886, sekä vahvistettu marraskuun 22 p. 1887. Vahvistus tapahtui sillä ehdolla, että R.-kirjaimella merkitty 
          kävely-paikka Residenssi- ja Raastuvankatujen sekä Kaivo- ja Saaristenkatujen välillä, joka alkuperäisen aseman mukaan oli määrätty venäläisen kirkon paikaksi, edelleen pidätettäisiin tätä tarkoitusta varten. Paikalla kohoaakin 
          nyt uusi venäläinen kirkko.</p>
        <p>Mainittuina vuosina myönnettyjen pienempäin asema-muutoksien kautta joutui alkuaan puistoksi aiottu pieni kulma kaupungin kaakkoisimmalla niemellä rakennustonteiksi (n:o 104, 105 ja 106) ja samaten kortteli n:o XXXII, jossa sitä 
          ennen palanut kaupungin Seurahuone sijaitsi, yhdeksi ainoaksi rakennustontiksi. Näille lisätonteille onkin jo varsin kauniita rakennuksia kohonnut. Kantakaupungissa on nyttemmin ainoastaan 9 rakentamatonta tonttia, mutta vielä 
          25 taloa 19:lla järjestämättömällä tontilla. Sitä vastoin on Myllymäen kaupungin-osassa, joka näennäisesti muodostaa Hämeenlinnan etukaupungin, vielä rakentamatta ja osaksi myymättäkin koko se kuusi korttelia sisältävä alue, 
          joka sijaitsee vanhan hautausmaan pohjois-puolella, niinkuin vielä on rakentamatta melkoinen osa rakennustontteja Viertotiekadun eteläpuolellakin. Pohjoispuolella tätä tietä on jo useita, osaksi varsin sieviäkin rakennuksia, 
          koko Myllymäessä rakennettuja ja järjestettyjä tonttia yhteensä 11. Järjestämättömiä arenti- eli vuokratontteja on Myllymäessä 29, järjestettyjä arentitontteja 19, järjestämättömiä varsinaisia tontteja 10.</p>
        <p>Kantakaupungissa on eri rakennustonttien keskimääräinen pinta-ala 1,764.18 neliömetriä, Myllymäessä 1,146.42.</p>
        <p>Myllymäen kaupungin-osaan on myöskin luettava Hämeenlinnan pataljoonan kasarmi-ryhmäin alue, joka ennen oli tiluslohkoina.</p>
        <p>Kaupungilla on kolme toria, joista Iso-toria, joka on keskuspaikkana pidettävä, käytetään varsinaisena kauppa-torina, kun sitä vastoin nykyään vielä järjestämättömällä <span className="quote">Kauppatorilla</span> etelärannassa 
          harjoitellaan melkein yksinomaan kalakauppaa, sitäkin enimmäkseen vain markkina-aikoina.</p>
        <p>Yleisistä rakennuksista mainittakoon tässä seuraavat: kaunis, alkuaan omituiseen malliin rakennettu kirkko; varsin uhkea raatihuonekartano, kivestä, Iso-torin etelä varrella; lääninhallituksen talo saman torin pohjoispuolella; 
          hienoon, miellyttävään stiiliin rakennettu lyseo-kartano omassa kaupunginkorttelissaan; postikonttori, jota 1870-luvun lopulla ja 1880-luvun alussa käytettiin silloin täällä sijaitsevan suomalaisen normaalilyseon huoneustona; 
          sekä läänin sairaala, n. s. Keinusaarella sillan itäpäässä.</p>
        <p>Birger jaarlin ja Gymnaasikadun sekä Itäisen ja Läntisen Linnakadun välillä oleva kortteli on puoleksi puistona (n. s. Tähtipuisto eli Stjärnan). Puiston muodostaa myöskin kirkon ympärystö.</p>
        <p>Mutta Hämeenlinnan varsinainen puisto, joka on tunnettuna kauneudestaan ja suurenmoisuudestaan, sijaitsee 1 1/4 kilometrin matkan päässä asutusta kaupungista pohjoseen ja käsittää yhteensä noin 25 hehtaaria.</p>
        <p>Ulkomuodoltaan on Hämeenlinnan kaupunki hyvinkin soma ja miellyttävä, erittäinkin kesän aikana, kun puistot ja lukuisat yksityiset puutarhat ovat vihreässä asussaan. Kaikkein enimmät rakennukset ovat yksikerroksisia ja puusta. 
          Yksityisiä kivirakennuksia löytyy kuitenkin jo 44. 2-kertaisia puurakennuksia 12.</p>
        <p>Paikkakunnan kauneuteen vaikuttavat etupäässä vanha mahtava linna torneineen, valleilleen ja suurenmoinen luonto kaupungin ympärillä järvineen, harjuineen, kukkuloineen. Aulangon ihanat järvimaisemat ja Karlbergin puutarhat 
          huviloineen ja monine taidetöineen ovat maan kuuluja.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kaupungista johtavat tiet ja tienteko-velvollisuus.">
        <br />
        <p className="initialCap">Länteenpäin kaupungista johtaa läntinen viertotie, joka Myllymäen etukaupungin halki menee n. s. Poltinahon suurelle sotaväen harjoituskentälle, jonka itäsyrjästä tie haaraantuu kolmelle taholle: 
          kaupungin hautausmaalle, Helsinkiin, Turkuun ja Toijalaan. Kaupungista lähtien suoraan pohjoseen johtaa kaksi tietä, jotka yhtyvät linnan kohdalla, vieden Tampereelle. Itäänpäin rautatie-asemalle ja tämän lähellä olevalle 
          Hätilän kruununtilalle viepi sillan ylitse neljäs tie, Viipurin tie.</p>
        <p>Näistä teistä on suorastaan kaupungin ylläpidettävänä ja omana se tienpätkä, joka Kasarmikadun pohjoispäästä johtaa linnan kohdalle eli risteykseen toisen, itäisemmän pohjoistien kanssa. Se rakennettiin kaupungin puolesta 
          vasta tämän vuosisadan keskivaiheilla. Vanhempi on mainittu itäisempi eli rannempi tienpätkä; se näet rakennettiin kruunun kustannuksella jo samaan aikaan kuin kaupunki muutettiin nykyiselle paikalleen ja ulottuu 
          Pohjois-Niittykadun itä-päästä oikeastaan vain kivikasarmien portille asti. Parinkymmenen metrin pituinen pätkä tästä kohdasta äsken mainittuun risteykseen kaupungin tien kanssa on tienteko-velvollisuuden puolesta 
          epämääräinen. Tienosa suuren sillan itäpäästä vähän toiselle puolen lääninsairaalaa eli Hätilän virkatalon rajalle asti on myös kaupungin oma ja kunnossa-pidettävä, ja on kaupunki sen tänä vuonna kivillä laskenut.</p>
        <p>Mainittua vanhaa tietä Pohjoisen Niittykadun pohjoispäästä kivikasarmien portille, läntistä viertotietä Kaivokadulta Poltinaholle Myllymäen halki sekä itäistä viertotietä Hätilän virkatalon rajalta rautatieportille pitää 
          valtio kunnossa, siten kuitenkin, että kruunu kaikkien kolmen tien ylläpitämistä varten suorittaa kaikkiaan 1,100 ja kaupunki kaikkiaan 500 markkaa vuodessa.</p>
        <p>Suurta siltaa kaupungista Keinusaarelle, jonka synnystä on mainittu ylempänä olevissa <span className="quote">piirteissä Hämeenlinnan historiasta</span>, pitää kunnossa valtio erityisellä rahastolla. Tämän kasvuun vaikuttaa 
          Hämeen läänin maalaiskansa vieläkin maksamalla kapan jyviä talon-numerolta. Rahaston suuruus viime tilivuoden lopulla oli 157,020 m. 84 p. Sitä hoitaa lääninhallitus. V. 1878 rakennettiin silta, jonka kunnossa-pitämiseen 
          kaupunki ei ollenkaan ota osaa, kokonaan uudestaan. Samaan aikaan tehtiin viertoteiksi mainitut itäiset ja läntiset tiet.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kaupungin tilukset kotipalstalla.">
        <br />
        <p className="initialCap">Kaupungin maat ja tilukset kotipalstalla sijaitsevat asutun kaupungin ympärystössä ja käsittävät kaikkiaan 304,847 hehtaaria, joista kuitenkin jokunen pienempi määrä on pakkoluovutuksen kautta 
          joutunut osaksi Suomen, osaksi Venäjän valtion haltuun, kuten tässä alempana lähemmin merkitään.</p>
        <p>Kotipalstan maa-alueesta on:</p>
        <Image className="centeredImageStyle" src={img7} alt="Maa-alat"/>
        <p>Nämä maat, joihin tässä on luettu myöskin n. s. Kuralan tilukset kappaleen matkaa länteenpäin kaupungista, on jaettu 300 erisuuruiseen lohkoon. Niistä lohkot 58—100 ovat enimmäkseen arennille annettuja viljelysmaita. Myllymäen 
          ja n. s. Hevosha'an lohoille on järjestettynä arentitonttia noin 150. Talonluku näillä tonteilla on nykyään 48. Lohkot 89, 90 ja 103 ovat hietamaata ja käsittävät yhteensä noin 1 hehtaarin. Lohko n:o 196 on vanha hautausmaa, 
          joka käsittää 1,004 hehtaaria.</p>
        <p>Lohkot 243-247, 250, 251 ja osia lohkoista 248, 249, 252-257, 259 262 on pakkoluovutettu Suom. asevelvollisten kasarmi- ja katu-alueeksi, joka v. 1883 käsitti 6,338 hehtaaria. Tänä vuonna on siihen vielä lisätty pienempi alue.</p>
        <p>N. s. Hämeensaarella eteläpuolen kaupunkia on parille lohkolle järjestetty seitsemän makasiinitonttia ja kaksi varastopaikkaa sekä irralleen kaupungin alueesta eroitettu polttimotontti ja arentivapaa saunatontti, josta kuitenkin 
          viime kesänä sauna paloi.</p>
        <p>Lohkot 285-300 sijaitsevat n. s. Keinusaarella itäpuolen Wanajavettä eli virtaa. Näistä on kuitenkin suurin osa luovutettu tontti-alueeksi kaupungin yleiselle teurastus-laitokselle ja kahdelle tehdaslaitokselle sekä pienempi osa 
          eräälle liikemiehelle makasiinin tontiksi.</p>
        <p>Kartassa on eri kirjaimilla merkitty seuraavat paikat ja laitokset, jotka käsittävät seuraavan määrän hehtaaria:</p>
        <Image className="centeredImageStyle" src={img8} alt="Maa-alat"/>
        <p>Yleisenä kivenottopaikkana on Myllymäen kallion reuna, N. s. Hevosha'an reuna on luovutettu ampumaradaksi Hämeen läänin metsästysseuralle.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kaupungin tilukset Sairionmaalla.">
        <br />
        <p className="initialCap">Sairionmaan tilukset käsittävät maa-alueen Wanajaveden itärannasta Aulangon järvelle sekä pienemmän lohkon tämän järven itäpuolella. Nykyään on tämä alue jaettu 34 osuuteen ja sisältää:</p>
        <Image className="centeredImageStyle" src={img9} alt="Maa-alat"/>
        <p>Tästä alasta on Venäjän valtio lunastanut ruutimakasiiniansa y. m. tarpeitaan varten 80,350 hehtaaria viljelemätöntä maata. Pienempiä mäkipalstoja on luovutettu talontonteiksi, kuten Toivolan huvila.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Viljelysmaiden vuokraehtoja.">
        <br />
        <p className="initialCap">Kaupungin viljelysmaat, paitsi torpat ei, ovat vuokratut: Kuralassa ja Sairiossa 15 vuodeksi, pellot lähemmällä kaupunkia 10 vuodeksi sekä niityt ja suolohkot 15 vuodeksi.</p>
        <p>Valtuusmiesten huhtik. 24 p. 1896 tekemän päätöksen mukaan vuokrataan kaikki viljelysmaat sillä välipuheella, että vuokraajalla, jos hän viljelee lohkonsa kunnollisesti ja suorittaa vuokramaksunsa säännöllisesti, on oikeus 
          vuokra-ajan loputtua saada lohkonsa uudestaan vuokrattavakseen suorittamalla vuosittain lisämaksuksi 10 prosenttia edellisestä vuokrasummasta.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kaupungin metsät.">
        <br />
        <p className="initialCap">Löytyvien karttain ja selitysten mukaan on kaupungin metsäjakoon otettujen metsien pinta-ala 505,35 hehtaaria. Tämä ala on jaettu 8 eri talouspalstaan seuraavalla tavalla:</p>
        <h4>I. Aulanko.</h4>
        <p>On enimmäkseen viettävää kangasta, joka kasvaa eri-ikäistä, 30—70 vuotista kuusta. Yhteensä 2571 kuutiometriä puita 33 hehtaarilla.</p>
        <h4>II. Sairionmaa.</h4>
        <p>Suurimmaksi osaksi viettävää kuivaa kangasta, joka enimmäkseen kasvaa 30—80 vuotista mäntyä, vähemmän kuusta. Muutamissa paikoin hiukan koivuja ja haapoja. Yhteensä 8789 kuutiometriä puita 109,07 hehtaarilla.</p>
        <h4>III. Ahvenistonmaa sekä Myllymäki.</h4>
        <p>Ahvenistonmaa on mäkistä, kuivaa kangasta ja kasvaa enimmäkseen 25—40 vuotista mäntyä, hiukan kuusta. Myllymäki samoin kuivaa, mäkistä kangasta, joka kasvaa katajaa, osittain harvinaisia männyntaimia. Yhteensä tällä 
          talouspalstalla 491 kuutiometriä puuta ja pensasta 17,72 hehtaarilla.</p>
        <h4>IV. Rengonvaha.</h4>
        <p>Suurimmaksi osaksi kuivia, osittain tuoreita kankaita, jotka kasvavat mäntyä, kuusta ja koivua. Vähemmän soita ja rämeitä, jotka kasvavat mäntyä ja koivua. Eräällä alhaisella kankaalla on harvinaisia siemenpuita. Yhteensä 
          5090 kuutiometriä puita 54,81 hehtaarilla.</p>
        <h4>V, VI, VII ja VIII talouspalstat eli Viialan käsittävät:</h4>
        <p>V 62,10 hehtaaria 3,842 kuutiometrillä puita,</p>
        <p>VI 88,77 hehtaaria 1,957 kuutiometrillä puita,</p>
        <p>VII 67,30 hehtaaria 5,196 kuutiometrillä puita,</p>
        <p>VIII 72,58 hehtaaria 4,090 kuutiometrillä puita.</p>
        <p>Kaikkien kaupungin metsäjakoon otettujen metsien yhteinen puumäärä on tämän laskun mukaan 32,026 kuutiometriä 505,35 hehtaarin alalla</p>
        <h4>Viialan metsäpalsta Rengon kappelissa.</h4>
        <p>Koska tämä metsäpalsta alaltaan on varsin iso ja sen omistus kaupungille melkoisesta arvosta, laadimme siitä tässä, käyttäen lähteenä metsänhoitaja Knut Mobergin kesäkuussa v. 1898 antamaa lausuntoa, seuraavan erityisen 
          kertomuksen:</p>
        <p>Viialan metsäpalsta on paikoittain leveämpi, paikoittain kapeampi ja lähes 10 kilometriä pitkä. Sen pohjoisosa on 23 kilometrin päässä Hämeenlinnan kaupungista, sen eteläkulmasta 2 kilometriä Lietsan kestikievariin. 
          Valtamaantie Hämeenlinnasta Tammelan pitäjään käy pitkin palstaa, ja poikki palstan juoksee puro, jota myöten sopii lautata metsätuotteita Vanajan vesistöön.</p>
        <p>Kooltaan on palsta 534,90 hehtaarin alan suuruinen, lukuun-ottamatta viljeltyjä tiluksia (peltoja, niittyjä y. m.), jotka ovat vuokrattuina useammille torppareille. Näistä 534,90 hehtaarista on 392,95 hehtaaria kasvullista 
          metsämaata ja 141,95 hehtaaria hylkymaata y. m.</p>
        <p>V. 1896 jakoi metsänneuvoja, vapaahra Hj. Carpelan metsän järkiperäistä metsänhoitoa varten. Tässä jaossa lohkaistiin 102,20 hehtaarin suuruiset hakamaat torppareja varten ja loppuala, 290,75 hehtaaria, jaettiin lohkohakkausta 
          varten niin, että siemenpuut jätettäisiin. Puumäärä arvosteltiin silloin kasvullisella metsämaalla jakometsässä 15,085 kuutiometriksi (kiinteää mittaa) eli keskimäärin 52 kuutiometriä hehtaarilla.</p>
        <p>Metsänhoitaja Moberg toimitti sitten myöskin arvostelun puumäärästä hakamaissa ja laski metsässä löytyvät hirsi- ja hirsi-ainepuut erikseen.</p>
        <p>Tämän arvostelun mukaan löytyy metsässä seuraava määrä hirsi- ja hirsipuita, jotka ainoastaan muutamia kuusipuita lukuun-ottamatta ovat mäntyjä:</p>
        <Image className="centeredImageStyle" src={img10} alt="Runkomäärät"/>
        <p>Hakomaissä arvosteli hra M. puumäärän keskimäärin 40 kuutiometriksi hehtaarilla.</p>
        <p>Koska metsää pitempänä aikana on harvennettu säännöttömästi, niin löytyy vahvempia hirsipuita ainoastaan vähemmässä määrässä, ja seurauksena harvennuksesta on myöskin että tiheysmäärä on hyvin vaihtelevainen. Tasa-ikäisiä, 
          tiheitä metsikköjä on ainoastaan siellä täällä pienemmillä aloilla; metsiköt ovat suurimmaksi osaksi keski-ikäisiä, osaksi nuoria. Kulovalkean polttamia aukkomaita löytyy kyllä, mutta on näillä kasvanut paikoittelin jokseenkin 
          hyvä uusikasvu. Mänty on pääpuulajina ja kuusi kasvaa ainoastaan pienemmässä määrässä sekapuuna viljavammilla kankailla. Hakamaissa on maanlaatu viljavampi, ja kasvavat ne mänty-, kuusi- ja koivu-sekametsää.</p>
        <p>Maanlaatu on suuremmaksi osaksi pienen-kivensekaista vierinkivisoraa, ja koska kulovalkeat ovat raivonneet useammalla kankaalla, on kasvinvoima huono. Murtokivikankaita löytyy kuitenkin ja etenkin hakamaiksi lohkaistuilla 
          aloilla, ja on kasvinvoima näillä mailla hyvä.</p>
        <p>Huonokasvulliset maat, joita alaltaan on 141,95 hehtaaria, ovat vesiperäisiä ja metsättömiä. Niitä voisi kuitenkin, sanoo hra M., ojittamalla kuivata, jolloin osa niistä olisi viljelykseen kelpaavia.</p>
        <p>Kaadettavan metsän arvon on hra M., paikkakunnalla viime aikoina (v. 1898) maksettujen hintojen mukaan, laskenut seuraavasti:</p>
        <Image className="centeredImageStyle" src={img11} alt="Kaadettavan metsän arvo"/>
        <p>Nuoren metsän arvosta lausuu hra M.: Metsä on keskimäärin 45 vuoden vanhaa ja sen puumäärä keskimäärin 45 kuutiometriä (kiinteätä mittaa) hehtaarilla. Varteen-ottamalla paikkakunnalla maksettuja hintoja ja hyvää menekkiä olisi 
          kantohinta arvosteltava 50 penniksi kuutiometriltä. Tämän metsän arvo olisi siis, kun koko alalla löytyy (393 X 45 k:m.) 17,685 k:metriä, (17,685 X 50) 8,842 markkaa 50 penniä. Metsän arvo siis yhdeltä hehtaarilta 22 mk. 22 p.</p>
        <p>Itse maan arvon kasvullisella metsämaalla on hra M. laskenut 8 markaksi hehtaarilta eli yhteensä (393 X 8) 3,144 mk., ja huonokasvullisten metsämaiden arvon 4 markaksi hehtaarilta eli yhteensä (142X4) 568 mk. Koko Viialan 
          metsäpalstan arvo olisi siis, viljelysmaita lukuun-ottamatta:</p>
        <Image className="centeredImageStyle" src={img12} alt="Kaadettavan metsän arvo"/>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kaupungin koko ulkopalsta Rengossa">
        <br />
        <p className="initialCap">Muodostaa hyvin pitkänsoikean kolmion eli kiilan, jonka leveämpi pää (Mäkelän ja Haapalan torppien kanssa) on noin 2 penikulmaa kaupungista ja kapea suippu (Pitkäjärven torpan kanssa noin 1 
          kilometrin päässä sen kärjestä) lähimmittäin 31 kilometriä kaupungista. Tämän kaistaleen rajoina ovat Ojoisten latokartanon maat sekä Rengon kappalaistilan ja kahden muun renkolaisen maatilan tilukset.</p>
        <p>Mutta paitse tätä suurempaa kiilaa eli kolmiota on kaupungilla ulkopalstana tänneppäin myöskin toinen aivan samanmuotoinen, vaikka paljon pienempi alue, yllämainittu Rengonvaha, joka on aivan erikseen edellisestä. Sen kapea 
          suippu alkaa Alajärvestä, ja jatkuu se sitten Suur-Luolajan kylän ja Ojoisten latokartanon maiden välitse Viialan suurta palstaa kohden, josta sen leveämpi pää on noin 1 penikulman matkan etäisyydellä. Rengonvaha on asumaton 
          ja ilman viljelyksittä, kasvaa ainoastaan metsää. Siitä on polttopuita hakattu kaupungin tarpeiksi ja kauniimmat männyt jätetty siemenpuiksi. Sammon torppari on saanut ottaa puutarpeensa kuivista puista rämeillä, 
          tuulenkaatamista ja sellaisista. Paitse metsää on Rengonvahan alueella vain rämeitä ja kivikkoja.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kunnan tulot kaupungin metsistä.">
        <br />
        <p className="initialCap">Kaupungin metsistä on kunnalla vuosittain jommoisetkin tulot. Niinpä viimeisten 4 vuoden aikana niistä on otettu rakennusaineita kaupungin yleisiin töihin noin 3,000 markan edestä joka vuosi ja sen 
          ohessa polttopuita kaupungin laitoksiin. V. 1898 tuotiin näitä; sairashuonetta varten 16 syltä mäntypuita = 192 m., vaivaishuonetta varten 25 syltä mäntypuita = 300 m., palokunnan taloa varten 7 syltä koivuhalkoja = 105 m., 
          raatihuonetta varten 81 syltä koivuhalkoja = 1,134 m., ja 24 syltä mäntypuita = 276 m. Yhteensä siis polttopuita kaupungin yleisiin laitoksiin 2,007 markan arvosta.</p>
        <p>Täten tuottaa kaupungin metsä tätä nykyä vuosittain kaupungille noin 5,000 markkaa.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kaupungin torpat Rengon kappelissa.">
        <br />
        <p className="initialCap">Torpparien metsät ja laitumet, jotka ennen olivat yhteisesti käytettävät, ovat nyttemmin palstoitetut erikseen kullekkin. Rakennukset kaikissa torpissa ajanmukaiset ja hyvässä kunnossa. 
          Vuokrasopimukset 25 vuodeksi v:sta 1893.</p>
        <p>Mäkelän torppa (perustettu 1808) sijaitsee 2 penikulman päässä kaupungista yleisen maantien varrella, Ojoisten virkatalon ulkopalstan rajalla. Haltia Heikki Heikinpoika, jonka huonekunnassa v. 1898 oli 6 aika-ihmistä, elättää 
          (tietojen mukaan samalta vuodelta): 2 hevosta, 6 lypsävää lehmää, 4 hiehoa, 10 lammasta, 1 sian. Kylvö (v. 1898): 2 tynnyriä rukiita, ½ tynn. ohria, 3 tynn. kauroja, 5 tynn. perunoita, 4 kappaa papuja, 10 kapp. pellavia. 
          Peltomaata on 4,166 heht. Niittyjä 14,237 heht. Vuokra 130 markkaa (edellisenä vuokra-aikana 81 mk.)</p>
        <p>Haapalan torppa (kartassa v:sta 1786) on edellisen naapurina. Haltia Kaarle Vihtori Pietarinpoika (huonekunta: 5 aikaihmistä), elättää: 3 hevosta, 6 lypsävää lehmää, 3 hiehoa, 8 lammasta, 1 sian. Kylvö: 2½ tynn. rukiita, 3 
          tynn. kauroja, ½ tynn. ohria, 4 tynn. perunoita, 4 kapp. papuja. 10 kapp. pellavia. Peltomaata: 6,649 heht. Niittyjä 11,581 heht. Vuokra 121 m. (edell. v. 100 m.)</p>
        <p>Santalan torppa (kartassa v:sta 1786) sijaitsee noin 1 kilom. päässä edellisestä eli 22 kilom. kaupungista yleisen maantien varrella. Haltia Antti Fredrikinpoika (huonekunta: 4 aikaihmistä ja 7 lasta) elättää: 3 hevosta: 6 
          lypsylehmää, 4 hiehoa, 10 lammasta, 1 sian. Kylvö: 2½ tynn. rukiita, ½ tynn. ohria, 2½ tynn. kauroja. 5 tynn. perunoita. 4 kapp. papuja, 8 kapp. pellavia. Peltomaata: 4,092 heht. Niittyjä: 12,203 heht. Vuokra 101 m. (edel. v. 
          89 m.).</p>
        <p>Rantalan torppa (kartassa v:sta 1786) sijaitsee luonnonkauniilla paikalla Leskijärven rannalla. Haltia Antti Kustaanpoika (huonekunta: 6 aika-ihmistä ja 3 lasta) elättää: 2 hevosta, 6 lypsylehmää, 3 hiehoa, 14 lammasta, 2 
          sikaa. Kylvö: 2½ tynn. rukiita, 3½ tynn. kauroja, 1 tynn. ohria, 5 tynn. perunoita, 5 kapp. papuja, 6 kapp. pellavia. Peltomaata: 3,130 heht. Niittyjä: 11,033 heht. Vuokra 100 m. (edell. v. 89 m.)</p>
        <p>Pitkäjärven torppa (perustettu v. 1800) sijaitsee kauvimpana eli 30 kilom. kaupungista, yleisen maantien varrella. Haltia Mikko Matinpoika (huonekunta: 5 aika-ihmistä ja 4 lasta) elättää: 3 hevosta, 8 lypsylehmää, 4 hiehoa, 14 
          lammasta, 2 sikaa. Kylvö: 3 tynn. rukiita, 3 tynn. kauroja, ½ tynn. ohria, 6 tynn. perunoita, 6 kapp. papuja, 6 kapp. pellavia. Peltomaata: 4,823 heht. Niittyjä: 15,436 heht. Vuokra 1.11 m. (edell. v. 84 in.)</p>
        <p>½ Sotkan torpasta (kartassa v:sta 1786) on rajatusten Santalan, Rantalan ja Korvenmaren torppien kanssa, johon viimemainittuun se nykyään on yhdistettynä yhden haltian alle. Haltia Kaarle Nikander (huonekunta; 5 aika-ihmistä 
          ja 3 lasta) elättää yhteensä molemmilla torpilla: 3 hevosta, 7 lypsylehmää, 3 hiehoa, 10 lammasta, 3 sikaa. Yhteinen kylvö: 4 tynn. rukiita, 1 tynn. ohria, 7 tynn. kauroja, 6 tynn. perunoita, 5 kapp. papuja, 10 kapp. pellavia. 
          Peltomaata: Sotkalla 3,465 heht.; Korvensaarella: 2,883 heht. Niittyjä: yhteensä 14,029 heht. Yhteinen vuokra: 155 m. (edell. v. Sotkasta 100 m., Korvensaaresta 78 m.)</p>
        <p>½ Sotkan torpasta (1786 vuoden kartassa yhdessä toisen Sotkan kanssa). Haltia Heikki Heikinpoika (huonekunta: 4 aikaihmistä ja 4 lasta) elättää 3 hevosta, 6 lypsylehmää, 4 hiehoa, 12 lammasta, 3 sikaa. Kylvö: 3 tynn. rukiita, 
          ½ tynn. ohria, 3 tynn. kauroja, 5 tynn. perunoita, 5 kapp. papuja, 10 kapp. pellavia, Peltomaata 5,173 heht. Niittyjä: 14,518 heht. Vuokra 162 m. (edell. v. 84 m.)</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Sammon torppa.">
        <br />
        <p className="initialCap">kartassa vuodesta 1778. Sijaitsee noin 6 kilometriä luoteesen päin kaupungista. Torpan tiluksia ympäröivät Iso-Luolajan Parolan ja Ojoisten latokartanon tilukset. Haltia Kaarle Karlsson 
          (huonekunta: 5 aika-ihmistä ja 5 lasta) elättää: 2 hevosta, 6 lypsylehmää, 2 hiehoa, 10 lammasta, 2 sikaa. Kylvö: 3 tynn. rukiita, ½ tynn. ohria, 6 tynn. kauroja, 5 tynn. perunoita, 5 kapp. papuja, 4 kapp. pellavia, Vuokra 264 
          markkaa. Vuokraaika nykyään: 1879-1905.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Rengon torppien vuokra-ehdot.">
        <br />
        <p className="initialCap">Kaupungin torpat Rengossa ovat nykyään vuokratut seuraavilla ehdoilla:</p>
        <br />
        <p><span className="bold">l:o.</span> Vuokra-aika alkaa Maarian päivästä v. 1893 ja kestää samaan aikaan vuonna 1918.</p>
        <p><span className="bold">2:o.</span> Vuokramiehellä on valta käyttää torppaan kuuluvaa metsää omaksi tarpeeksensa ja torpan rakennusaineiksi, mutta, myytäväksi ei sitä saa millään ehdoilla käyttää eikä myöskään kaskeksi kaataa, joll'ei kaupungin 
          valtuusmiehet ole siihen erityistä lupaa antaneet ja paikkaa määränneet. Vuokramiehellä ei ole myöskään oikeutta myydä karjan ruokaa.</p>
        <p><span className="bold">3:o.</span> Vuokramies vastaa torpan rakennuksista, jotka aina ovat laillisessa kunnossa pidettävät; myöskin on hän vastaava niiden maantie-osien kunnossa pitämisestä, jotka nyt ovat torpan osaksi jaetut taikka vasta ehkä jaetaan. 
          Samoin on hän suorittava kaikki torpalle määrätyt verot ja maksut, olkoot ne mitä laatua tahansa.</p>
        <p><span className="bold">4:o.</span> Vuokramies on suorittava vuokransa, joka tekee ____ markkaa vuosittain, ennakolta helmikuun kuluessa.</p>
        <p><span className="bold">5:o.</span> Jos vuokramies osoittaa huolimattomuutta tai velttoutta, taikka yhdessä tai toisessa kohdin rikkoisi edellä olevat määräykset, ei hoitaisi torppaa hyvin eikä pitäisi sitä hyvässä kunnossa, niin on hän torpasta heti 
          paikalla, laissa määrättyä muutto-aikaa nauttimatta, eroitettava, vaikka hän olisikin vuokransa jo siltä vuodelta suorittanut.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Metsänhoitosäännöt kaupungin kaikille torppareille.">
        <p className="info centered">(Rahatoimikamarin julkaisusta maalisk. 21 p:ltä 1899).</p>
        <p><span className="bold">l:si.</span> Torppari, joka haluaa saada rakennusaineita kotitarpeeksi, ilmoittakoon Rahatoimikamarin syyskuun pitämässä kokouksessa minkä verran rakennuspuita, aidaksia ja polttopuita sekä muita tarvepuita hän seuraavaksi vuodeksi 
          tarvitsee. Se, joka ei edellä mainitussa kokouksessa ilmoita itseään saadakseen sanotuita metsäntuotteita, menettää kaiken oikeutensa niihin seuraavaksi vuodeksi.</p>
        <p><span className="bold">2:si.</span> Kaikenlainen puiden hakkuu metsässä kielletään muilla kuin siksi määrätyillä paikoilla. Samoin kielletään kaatamasta muita kuin hakattavaksi määrätyltä puita.</p>
        <p><span className="bold">3:si.</span> 10 sentimetriä korkeampia kantoja ei saa jättää.</p>
        <p><span className="bold">4:si.</span> Kaikki hakkuu, paitsi kerpun-taitto ja veistopuuaineitten hankkiminen, on kesällä kielletty, ja alkakoon hakkuu vasta syksyllä rahatoimikamarin määräämän päivän jälkeen.</p>
        <p><span className="bold">5:si.</span> Hirren hakkuusta jääneet latvat ja isommat oksat ovat polttopuiksi hakattavat. Pienemmät oksat sekä risut ovat, jollei niitä käytetä pahnoiksi, tasaisesti hakkaus-alalla levitettävät, niin ettei roukkioita synny.</p>
        <p><span className="bold">6:si.</span> Hakkaus-alojen kylvämiseksi ovat selvästi merkityt puut jätettävät ja kielletään jokaista laillisen edesvastauksen uhalla niitä kaatamasta tahi millään tavalla vahingoittamasta.</p>
        <p><span className="bold">7:si.</span> Kaikki kaadetut puut ovat rekikelin aikana vietävät pois metsästä. Aidaksia ja polttopuita saapi kuitenkin jättää hakkuupaikalle seuraavaksi vuodeksi ainoastaan mitallisiin pinoihin pantuina.</p>
        <p><span className="bold">8:si.</span> Metsää ei saada millään ehdolla kaskeksi kaataa. Samoin on metsäntuotteiden myyminen ankarasti kielletty. Niinikään on metsästys ilman erityistä lupaa kielletty laissa määrätyllä uhalla.</p>
        <p><span className="bold">9:si.</span> Kaikki metsälain määräykset, niinkuin tulen sytyttämisestä metsässä, kulovalkean sammuttamisesta y. m., ovat tarkasti noudatettavat.</p>
        <p><span className="bold">l0:si.</span> Torpparien tulee ehdottomasti noudattaa niitä metsänhakkuuta koskevia määräyksiä, joita kaupungin metsänvartija heille antaa.</p>
        <p><span className="bold">ll:si.</span> Joka rikkoo näitä sääntöjä ja metsänvartian antamia määräyksiä vastaan, hän rangaistaan rikoksen laadun mukaan joko laissa määrätyillä sakoilla ja vahingon korvaamisella tahi häätämisellä.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kaupungin tuloa tuottavat oikeudet.">
        <p>Vuokra viljelysmaista, torpista, arentitonteista yhteensä: 15,512: 97</p>
        <p>Laitumet: 200:-</p>
        <p>Torimaksut: 3,520:-</p>
        <p>Liikennemaksut: 3,261: 99</p>
        <p>Puistoravintolan vuokra: 1,400:-</p>
        <p>Yht.: 23,894: 96</p>
        <p className="bold">Muist:</p>
        <p className="info">1: Torimaksuja suorittavat ainoastaan ulkolaiset paikoistaan markkinoilla. Torikauppiaat kaupungissa eivät maksa mitään paikoistaan torilla eivätkä myöskään kaupunkilaiset markkinoilla.</p>
        <p className="info">2: Liikennemaksut kantaa tullinhoitaja ja nauttii siitä palkkiota vuosittain 300 markkaa.</p>
        <p className="info">3: Laidunmaan käyttämisestä suoritetaan joka lehmältä 3 markan ja samoin joka hevoselta 3 markan vuotuinen maksu.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kunnan rahastoja ja laitoksia.">
        <p className="signature">Vaivaistalo- ja vaivaishoito. Stichceuksen vaivais- ja työhuone-rahasto.</p>
        <br />
        <p className="initialCap">Se lahjoituskirja toukok. 20 p:ltä 1834, jolla silloinen maaherra Joh. Fr. Stichaeus perusti tämän nyttemmin suuren rahaston, on osoitettu kirkkoherra Math. Churbergille ja kuuluu suomennettuna 
          näin:</p>
        <QuoteStart className="symbolStyle"/>
        <p>Ruvetessani täkäläisen lääninhallituksen hoitajaksi, olen minä huomannut että Hämeenlinnan kaupungissa on ollut ja vieläkin on enemmän kerjäläisiä kuin kaupungin itsessään vähäpätöinen väkiluku saisi 
          sallia. Olen ensi aluksi arvellut tämän seikan johtuvan osaksi v. 1831 kaupunkia kohdanneesta tulipalosta, joka saattoi paljon ihmisiä kodittomiksi, elinkeinottomiksi ja leivättömiksi, osaksi siitä paljoudesta köyhiä 
          pohjolaisia, jotka ovat tänne tulleet etsiäkseen työnansiota ja joiden vaimot ja lapset myöskin ovat tehneet kerjäämisen elinkeinokseen; mutta sittemmin olen havainnut, että tähän kerjäämiseen melkoisessa määrässä myöskin on 
          syynä laiskuus, epäsiveellisyys ja vallattomuus. Niinkauvan kuin ei ole löytynyt mitään paikkaa, jossa köyhiä voitaisiin pitää ruoassa ja työssä, on ollut turhaa kokea vastustaa ja juurineen hävittää tätä epäkohtaa, Sentähden 
          olen aikonut perustaa yksityisen vaivaisia työhuone-laitoksen (fattig- och arbetshus-inrättning), joka, vaikka alkuansa järjestettynä pienimpään mittakaavaan, kuitenkin aikaa voittaen voitaisiin laventaa täydellisemmäksi, jos 
          tarve sitä vaatii ja asianhaarat niin myöntävät.</p>
        <p>Tällä perustuksella olen minä mielestäni sopivalle paikalle, Hämeenlinnan entiselle pappilan tontille vanhassa kaupungissa taikka nyttemmin Ojoisten latokartanon hakaan, lähelle järven rantaa vastapäätä kruunun-apteekin taloa, 
          rakennuttanut talon, jossa on neljä suurempaa huonetta tilavan vinnin kanssa, ja määrännyt piha- eli tontti-alan sekä ulkorakennuksille että puutarhalle eli perunamaalle.</p>
        <p>Tämän talorakennuksen sekä kymmenen tuhannen ruplan (banko-assignatsioonia) suuruisen pääoman lahjoitan ja jätän minä täten kaupungin vaivaishoidolle, liittäen tähän myöskin ehdoituksen ohjesäännöksi vaivaishoidolle, ja on 
          minulla tätä tehdessäni se iloinen toivo, että jälkeiseni virassa, joiden palkkaehtoihin Ojoisten latokartanokin kuuluu, sallivat vaivais- ja työhuoneen pysytettäväksi samalla paikalla, jossa se nyt on, niinkauvan kun johtokunta 
          pitää sitä edullisena.</p>
        <p>Herra kirkkoherralle, joka on puheenjohtajana nykyisessä vaivaishoito-johtokunnassa, saan täten ystävällisesti jättää toimeksi yhdessä johtokunnan jäsenten kanssa ottaa mainittu rakennus haltuunsa ja käytettäväksi, minun 
          elinaikanani vuosittain minulta periä lahjoitus-pääoman korot kuudella sadalla ruplalla banko-assignatsiooneja sekä, ehdoituksen tultua tarkastetuksi ja vahvistetuksi, mahdollisimmasti pikaiseen käytäntöön saattaa puheenalainen 
          vaivais- ja työhuonelaitos, pysyen kunnioittaen ja ystävyydellä</p>
        <p className="centered">Kunnianarvoisan ja korkeasti-oppineen herra kirkkoherran nöyrimpänä palvelijana</p>
        <p className="centered">H:linnassa toukok. 20 p. 1834.</p>
        <p className="signature">Joh. Fr. Stichaeus.</p>
        <QuoteEnd className="symbolStyle"/>
        <p>Tämän lahjoituksen nojassa järjestettiin ja pantiin toimeen vaivais- ja työhuonelaitos v. 1836. Mutta jo 1837 vuoden alussa, tammik. 8 p:nä päätettiin kirkonkokouksessa että ne harvat vaivaiset, joita vaivais- ja työhuoneessa 
          ylläpidettiin, olisivat maaliskuun 1 p:stä samana vuonna annettavat elätettäviksi vähimmän vaativalle. Tämä siitä syystä, että <span className="quote">kaupungin maksuvelvolliset asukkaat olivat saaneet kärsiä kalliita 
          kustannuksia viime vuonna köyhien ylläpitämisestä, kun vaivaisia oli elätetty maaherra Stichseuksen lahjoittamassa vaivaistalossa, varsinkin koska tähän oli tarvittu sänky vaatteet ja muuta pysyvää kalustoa</span>. — Kuitenkin 
          tehtiin kokouksessa se nimenomainen päätös, että vaivaistalo jälleen käytettäisiin jalon lahjoittajan määräämään tarkoitukseen niin pian kuin kaupunki ennättäisi tointua tulipalon jälkeen.</p>
        <p>Mutta kirjelmässä vaivaishoidon johtokunnalle helmik. 1 p:ltä 1837 peruutti maaherra Stichaeus koko lahjoituksen, koska, sanoi hän, vaivais- ja työhuonelaitos kirkonkokouksen päätöksen kautta oli tullut lakkautetuksi (»upplösts») 
          ja siten lahjoituksen tarkoitus jäänyt täyttämättä. — Huomattavaa tämän peruutuksen suhteen on että, kuten asiakirjoista selvenee, lahjoituspääoman korko maaliskuun 1 p:stä 1835 samaan päivään 1836 oli tullut oikeudenkäynnin 
          kautta kuvernööriltä otetuksi (»blifvit guvernören genom rättegång aftvungen»). Kun kuvernööri Stichaeus ei seuraavinakaan vuosina maksanut tätä korkoa, syntyi uusi prosessi, ja Uudenmaan läänin kuvernöörinvirasto tuomitsi 
          Stichaeuksen maksamaan korot 12 vuodelta, nim. maalisk. 1 p:stä 1836 samaan aikaan 1848. Ne tekivät yhteensä 7,200 ruplaa banko-assign. eli 2,057 rupl. 14½ kop. hopeassa. Mutta tämän tuomion kumosi hovioikeus ja lykkäsi asian 
          kihlakunnan-oikeuteen. Tämä puolestaan tuomitsi huhtik. 8 p. 1850 Stichaeuksen, koska lahjoitus oli tapahtunut ilman ehdoitta, peruutuksesta huolimatta maksamaan korot viimeiksi kuluneilta 10 vuodelta 6,000 ruplalla b.-assign. 
          eli 1,714 r. 28 4/7 kopekalla hop. Mutta asia meni ylempiin oikeuksiin ja viimein senaatiin asti, joka lykkäsi sen takaisin laamannin-oikeuteen. Laamannin-oikeus tuomitsi kesäk. 30 p. 1854 Stichseuksen perilliset -— kuvernööri 
          itse oli sillä välin kuollut — heti suorittamaan mainitut kymmenen vuoden korot. Perilliset vetosivat 4/7 1854. Mutta nyt syntyi taaskin uusi prosessi itse pääomasta ja vaivais- ja työhuonerakennuksesta, joita vaivaishoidon 
          johtokunta vaati kaupungin haltuun, vaan joita Stichaeuksen perilliset eivät tahtoneetkaan luovuttaa, koska muka alkuperäisen lahjoituksen ehdot olivat jääneet täyttämättä. Porvoon pitäjän kihlakunnan-oikeus tuomitsi kuitenkin, 
          päätöksellään huhtik. 14 p. 1858 — siihen nähden, ettei lahjoittaja ollut määrännyt mitään selvää aikaa, jolloin vaivais- ja työhuoneen tulisi alkaa vaikutuksensa, saatikka sitten sitonut lahjoituksen pätevyyden tämmöisen ehdon 
          täyttämiseen — perilliset luovuttamaan sekä rakennukset että pääoman ja tämän korot maalisk. 1 p:stä 1848 vaivaishoidon johtokunnalle. Tämän tuomion vahvisti laamannin-oikeus jouluk. 9 p. 1858 tekemällään päätöksellä, joka on 
          jäänyt lailliseen voimaan.</p>
        <p>Stichamksen vaivaistalo vanhassa kaupungissa myytiin v. 1860, ja vaivaiset asetettiin vastaiseksi huudolle. Uutta ruvettiin rakentamaan uuteen kaupunkiin syysk. 25 p. 1861, ja valmistui se syyskuun 18 p. 1862. 
          Rakennuskustannukset nousivat 2,800 hopearuplaan, johon kuitenkaan ei ole luettu menoja laudoittamisesta ja maalauksesta. Tätä uutta taloa käytettiin kuitenkin ensimältä, kunnes varsinainen kansakoulu alkoi, pienten lasten 
          kouluhuoneustona, ja vaivaiset pysyivät yhä huudolla.</p>
        <p>Vasta tammikuun 9 p. 1880 avattiin, tarpeellisten muunnosten jälkeen, tämä talo varsinaiseen tarkoitukseensa. Se sijaitsee kanta-kaupungin luoteisessa eli Kaivo- ja Koulukatujen kulmassa samalla yhteistontilla kuin kaupungin 
          sairastalo, ja kuuluu siihen, paitsi tonttimaata, 1,64 tynnyrin-alaa peltoa. Rakennuksia on: 1) päärakennus puusta, jossa on 5 huonetta, keittiö ja johtajan huone; sekä 2) leipoma- ja ulkohuone-rakennus kivestä, jossa on 3 
          houruinkoppia y. m. Sairaat hoidetaan läheisessä kaup. sairaalassa.</p>
        <p>Kaupungin valtuusmiesten kokouksessa maaliskuun 16 p. 1885 oli kysymys siitä, olisiko Stichaeuksen rahasto oikeutettu saamaan korvausta siitä tontista, jota kuumelasarettia varten käytetään. Valmistava valiokunta todisti 
          otteella maistraatin pöytäkirjasta helmik. 7 p:ltä 1848, että maistraati ja kaupungin vanhimmat olivat päättäneet luovuttaa silloiset tontit n:o 7 ja 8 kolmannessa korttelissa vaivaishoito-johtokunnalle vastaisuudessa 
          käytettäviksi, ilman lunastinta, ehdolla että vaivaistalo niihin rakennetaan ja vuotuiset ulosteot niistä suoritetaan. Ja hyväksyivät valtuusmiehet valiokunnan ehdoituksen, että Stichaeuksen työhuoneen vastapäätä oleva lohko 
          n:o 233 annettaisiin Stichccuksen varaston nautittavaksi 50 vuodeksi ilman vuokratta.</p>
        <p>Leskirouva Sofia Ulriika Annerstén testamenttasi tammik. 24 p. 1877 <span className="quote">Hämeenlinnan vaivaisrahastolle</span> (fattigkassan i Tavastehus) sen epämääräisen summan, joka jäisi jälelle sittenkun useat 
          testamentissa mainitut henkilöt olisivat siinä määrätyt osansa saaneet. Täten tuli vaivaisrahastoon 2,221 m. 96 p. Valtuusto, jonka määrättäväksi vaivaishoito-johtokunta jätti rahojen käyttämisen, määräsi pääoman korkoa 
          kantavana säilytettäväksi rahatoimikamarin huostassa ja vuotuiset korot jaettaviksi ylimääräisenä vaivaisapuna kaupungin köyhille vuosittain vaivaishoito-johtokunnan harkinnan mukaan. Valtuuston kirjelmä tästä vaivaishoito-
          johtokunnalle on kesäk. 15 p:ltä 1881.</p>
        <p>Rahasto yhdistettiin v. 1891 valtuuston tekemästä päätöksestä 2,200 markan suuruisena Stichseuksen vaivais- ja työhuonerahastoon.</p>
        <p>Leskirouva Eva Katarina Stephanius testamenttasi helmik. 18 p. 1868 <span className="quote">vaivaiskassaan</span> sen epämääräisen osan talonsa hinnasta, joka jäisi jälelle sittenkun testamentissa mainittu perillinen olisi 
          saanut määrätyn osansa. Valtuuston kokouksessa 31 p:nä toukok. 1878 päätettiin talon hinta kasvulle pantavaksi, ja olisi puolet vuosi-korosta annettava kaupungin köyhille ylimääräiseksi joulu-avuksi vuosittain; toinen puoli 
          korkoa pantaisiin pääomaan, kunnes se olisi kasvanut 10,000 markaksi, ja tulisi myöhempäin valtuusmiesten päättää miten näin kasvanut pääoma olisi käytettävä.</p>
        <p>9,934 m. 16 p:n suuruisena yhdistettiin tämäkin rahasto v. 1891 valtuuston päätöksestä Stichaeuksen vaivais- ja työhuonerahastoon.</p>
        <p className="bold">Huomautus:</p>
        <p className="info">V. 1876 oli hoitovaivaisia yhteensä 45 sekä kuukaus- ja tilapäistä apua nauttivia yhteensä 56. Edellisistä oli alaikäisiä 24 eli 10 poikaa ja 14 tyttöä, joten siis täysi-ikäisiä hoitovaivaisia oli 21.</p>
        <p className="info">V. 1898 oli hoitovaivaisia yhteensä 22 sekä kuukausapua nauttivia 32 ja tilapäistä apua nauttivia 33. Edellisistä eli hoitovaiv. oli alaikäisiä 18 ja täysik. siis 4.</p>
        <p>Käydessämme tämän vuoden (1899) joulukuun alussa kaupungin vaivaistaloa katselemassa, oli siinä hoidettavana yhteensä 34 hoitolaista eli 15 miespuolta ja 19 naispuolta, kaikki vanhoja ihmisiä, paitsi yksi ala-ikäinen 
          tylsämielinen poika. Naisten käytettävänä oli 3 asuin- ja makuu-huonetta, miesten 1. Erityinen ruokasali yhteinen.</p>
        <p>Laitoksessa hoidetaan tätä nykyä 5 mielisairasta henkilöä. Köyhät ja vaivaiset eivät yleensä tahdo asettua vaivaistaloon asumaan. Syy tähän seikkaan on siinä, että vaivaistalo- järjestelmä vaatii hoitolaisilta työtä ja 
          säädetyn järjestyksen noudattamista, joten yksilöllistä vapautta rakastavat köyhät ja vaivaiset, jos vain suinkin kykenevät, kokevat tulla toimeen vaivaistalon ulkopuolella ja yleensä ilman vaivaishoidon avutta.</p>
        <p>Ruokajärjestys vaivaistalossa on seuraava: Murkinaksi joka päivä: keitetyitä perunoita (joskus soosin eli kasteen kanssa) ja silakkaa. Päivälliseksi: sunnuntaina: maitoon keitettyä ryynivelliä; maanantaina ja torstaina: 
          tuoretta lihaa perunain kanssa; tiistaina ja perjantaina: hernesoppaa tuoreen lihan kanssa; keskiviikkona: ryynipuuroa ja maitoa (kortteli henkeä kohti); lauvantaina: jauhopuuroa maidon kanssa. Illalliseksi; sunnuntaina: 
          maitoon keitettyä ryynivelliä; maanantaina, keskiviikkona ja perjantaina: ruisjauhovelliä ja maitoa; tiistaina, torstaina ja lauvantaina: maitoon keitettyä ohraräätijauho-velliä. Joka ateriaksi sitä paitsi leipää ja kaljaa 
          mielin määrin sekä joka sunnuntai 3 luotia voita henkilöä kohti.</p>
        <br />
        <p className="signature">Carl J. Kellroos'in lahjoitusrahasto.</p>
        <br />
        <p className="initialCap">Kauppakonttoristi Kaarlo Johana Kellroos määräsi huhtik. 28 p. 1897 päivätyn testamentin kautta että, sittenkun pääperilliset, tehtailija G. A. Fältmars puolisoineen, lapsineen ja veljineen, olivat 
          määrätyt osansa saaneet, mahdollinen jäännös hänen omaisuudestaan olisi tuleva köyhille Hämeenlinnan kaupungissa, <span className="quote">näiden hyväksi käytettäväksi sillä tapaa kuin G. A. Fältmars määrää</span>. — Tehtailija 
          Fältmars määräsi tämän johdosta asiakirjalla heinäkuun 5 p:ltä 1898 että pesäjaossa, joka osoitti enemmän varoja kuin oli odotettukaan, kaupungin köyhille langenneet 18,627 m. 6 p. käytettäisiin seuraavalla tavalla: 1) mainittu 
          summa pidetään rahatoimikamarin toimesta korkoa kasvavana ja korko lisätään pääomaan, kunnes tämä on 20,000 markkaa; 2) nämä 20,000 m. hoidetaan ja pidetään korkoa kasvavana Carl J. Kellroos'in lahjoitusrahaston nimellä; 3) 
          pääoma pidetään vähentymättömänä, vaan korot käytetään Stichaeuksen vaivais- ja työhuoneen hyväksi; 4) jos tämä syystä tai toisesta lakkaa olemasta, käytetään korot jonkun kaupungissa olevan samallaisen laitoksen hyväksi; 5) 
          sen laitoksen toimikunta, jonka hyväksi korot lankeevat, pitäköön huolen vainajan haudasta.</p>
        <p>Rahaston kanta oli tammikuun 1 p. 1899:</p>
        <p>Lainassa olevaa rahaa: 6,000:-</p>
        <p>Pankissa olevaa rahaa: 13,000:-</p>
        <p>Käteistä rahaa: 36: 29</p>
        <p>Yhteensä: 19,036: 39</p>
        <br />
        <p className="signature">Rosenqvistin rahasto.</p>
        <br />
        <p className="initialCap">Sepänleski Karolina Vilhelmina Rosenqvist testamenttasi syysk. 23 p. 1870 jälkeen-jäävästä omaisuudestaan <span className="quote">kaupungin köyhille</span> 2,000 markkaa, jotka hänen kuoltuansa 
          tammik. 2 p. 1872 jätettiin vaivaisrahastoon. Varoista muodostettiin testamentin toimeenpanijan ehdoituksesta erityinen rahasto vaivaishoito-hallituksen hoidettavaksi, ja olisivat korot vuosittain käytettävät osaksi 
          palkinnoiksi, osaksi koulutarpeiksi ja vaatteiksi kaupungin köyhille kansakoulunoppilaille.</p>
        <p>Rahaston kanta oli tammikuun 1 p. 1899:</p>
        <p>Lainassa olevaa rahaa: 2,000:-</p>
        <p>Käteistä rahaa: 110:-</p>
        <p>Yhteensä: 2,110:-</p>
        <br />
        <p className="signature">Jeremejeffin rahasto.</p>
        <br />
        <p className="initialCap">Kauppias Pietarissa Afanasii Jeremejeff oli eräällä matkallaan Hämeenlinnassa — arvattavasti lopussa v. 1842 tai 1843 vuoden alussa — selittänyt tahtovansa kaupungin köyhille lahjoittaa 500 ruplaa 
          hopeassa, jonka summan käyttämisestä seurakunnan kirkkoherra saisi määrätä. Kirkkoherra Mathias Churberg, joka siihen aikaan myöskin oli vaivaishoito-johtokunnan esimies, päätti nyt yksissä neuvoin johtokunnan muiden jäsenten 
          kanssa että lahjasta oli muodostettava korkoa kasvava pääoma, jonka korkoja käytettäisiin vasta pääoman kasvattua 1,000 ruplaan hopeaa. Sen perästä olisivat vuotuiset korot jaettavat köyhille ja saamattomille (»afsigkomna») 
          kauppiaiden leskille ja lapsille; ainoastaan jos näitä ei löytyisi, saisivat muutkin porvarien lesket ja lapset koroista osaa. Rahastoa hoitaisi vaivaishoidon johtokunta.</p>
        <p>Sen kanta oli tammik. 1 p. 1899:</p>
        <p>Lainassa olevaa rahaa: 7,100:-</p>
        <p>Pankissa olevaa rahaa: 400:-</p>
        <p>Käteistä rahaa: 3: 49</p>
        <p>Yhteensä: 7,503: 49</p>
        <p>V. 1898 nautti tästä rahastosta 5 henkeä apua 80 markalla kukin.</p>
        <br />
        <p className="signature">Jenny Costianderin rahasto.</p>
        <br />
        <p className="initialCap">Kirjelmässä kaupungin valtuusmiehille elokuun 4 p:ltä 1891 lahjoittivat kuvernööri Torsten Costiander ja hänen puolisonsa Jenny Costiander, muistoksi hopeahäistään samana päivänä, ja jättivät 
          valtuustolle 6,000 markkaa <span className="quote">köyhien hyväksi</span> seuraavalla määräyksellä: sopankeittolaitos perustetaan, jossa köyhimmät ja työhön kykenemättömät yhteiskuntalaiset voisivat huokeasta maksusta, ja 
          ainoastaan poikkeustilassa ilmaiseksi, saada lämmintä ruokaa ja leipää itselleen ja lapsilleen. Lahjoitus on pidettävä kantarahana. Vasta sitten kun rahasto mahdollisten pääoma-lisäysten ja korkojen kautta on noussut 20,000 
          markkaan, perustetaan laitos paikkakunnan rouvasväenseuran kautta, joka sitä ylläpitääkin, ja korko vuosittain sille suoritetaan, mutta näin muodostunut pääoma jää koskematta.</p>
        <p>Tähän lahjoitukseen lisäsivät kirjelmällä helmik. 7 p:ltä 1896 lahjoittajat, jotka <span className="quote">kahdeksan vuotisella olollaan Hämeenlinnassa olivat tähän yhteiskuntaan lämpimästi kiintyneet</span>, vielä 3,000 
          markkaa, mitkä lisättäisiin rahastoon, joka tarkoituksen ja hallinnon puolesta pysyisi entisillään. Semmoisiin poikkeustiloihin, jolloin ruokaa ja leipää vastaisesta sopankeittolaitoksesta annettaisiin ilmaiseksi, luettaisiin 
          erikseen köyhien kansakoululasten ruokitseminen. <span className="quote">Jos nämä — mainitsivat lahjoittajat kirjelmässään — tulisivat semmoista etua nauttimaan, niin voitaisiin muita heidän hyvinvointiinsa tarpeellisia maksuja 
          säästää, kuten esim. oppilasten kustantaminen kesälomalle maalle</span>.</p>
        <p>Rahaston kanta tammik. 1 p. 1899:</p>
        <p>Lainassa olevaa rahaa: 4,000:-</p>
        <p>Talletuskonttokuranti: 16,000:-</p>
        <p>Käteistä rahaa: 852: 45</p>
        <p>Yhteensä: 20,852: 45</p>
        <p>Helmikuun 8 p. 1899 luovutettiin lahjoittajani määräysten mukaan rouvasväen seuralle yhden vuoden korot 852 markalla 45 p.</p>
        <br />
        <p className="signature">Kaupungin sairashuone. Sairashuonerahasto ja muut sairaanhoitoa koskevat rahastot.</p>
        <br />
        <p className="initialCap">Kirjelmässä Vaivaishoitohallitukselle Hämeenlinnassa jouluk. 11 p:ltä 1868 esiintuo silloinen kuvernööri H. Molander pääasiassa seuraavaa: Samana päivänä pidetyssä kaupunkilaisten kokouksessa 
          päätettiin, kuvernöörin ehdoituksesta, että äskeisenä kovana katovuonna täällä perustetun vaivaismajan (fattigherberge) toiminnasta jälelle jääneet 647 markkaa 80 penniä sekä majan lakattua myytyjen tarvekalujen arvo 
          laskettaisiin pohjarahaksi kuumelasaretille kaupungissa ja rahasto pantaisiin kasvulle kunnes se korkojen ja mahdollisten lisäysten kautta olisi noussut 10,000 markkaan. Tämän summan koroilla arveltiin lasaretti voitavan 
          pienemmässä mittakaavassa perustaa ja kunnossa pitää. Vaivaishoitohallitus ottaisi rahat haltuunsa ja hoitaisi niitä. Kuvernööri lähettää rahat, 647: 80, vaivaishoitohallitukselle, jonka tulee vuosittain tehdä tili varoista ja 
          kuvernöörille ilmoittaa milloin rahasto on noussut säädettyyn määrään.</p>
        <p>Tämä vähäinen summa oli täten sairashuone-yrityksen ensimäinen pääoma. V. 1877 määräsivät sitten kaupungin valtuusmiehet kaupungille tulevan viinavero-osuuden, 540 m. 80 p., meneväksi tähän rahastoon. Se oli saman vuoden 
          lopussa 1,700 m. 34 p. suuruinen ja kasvoi vuosien kuluessa sitten lahjoitusten ja testamenttien kautta. Niinpä on joka vuosi, paitsi v. 1879 ei, valtuuston kautta siihen liitetty kaupungin osuus viinaverosta, niinkuin myöskin 
          suurempia tai pienempiä varoja anniskelu-yhtiön voittovaroista, jonka ohessa Säästöpankki vuosina 1883, 85, 86 ja 87 lahjoitti erisuuruisia summia.</p>
        <p>Seuraavasta taulusta käy selville lasaretti-rahaston lisääntyminen eri vuosina:</p>
        <Image className="centeredImageStyle" src={img13} alt="Lasaretti-rahasto"/>
        <p>Vähittäismyynti- ja anniskeluyhtiön voittovaroista siirrettiin sairashuonerahastoon v. 1896 20,000 markkaa, jonka koroista lääkärin palkkio suoritetaan 800 markalla.</p>
        <p>Sairashuoneen rakennusrahastoon siirrettiin v. 1897 vähittäismyynti- ja anniskeluyhtiön varoista 10,000 markkaa.</p>
        <p>Samoista viinavoittorahoista saaduilla 10,000 markalla syntyi myöskin (v. 1890) Laupeuden-sisaren (diakonissan) palkkausrahasto, jonka koroilla sairashuoneen diakonissa palkataan.</p>
        <p>Lasarettitalo rakennettiin v. 1885 ja tuli maksamaan 18,550 mk. Seuraavana vuonna alkoi laitos vaikutuksensa. Marraskuun 16 p. 1886 otettiin näet siihen ensimäinen potilas. Ensimäinen varustus oli tullut maksamaan 3,024 m. 
          65 p. Laitoksen kuntoon-panemisessa ja myöhemmässäkin kehityksessä on etusijassa vaikuttanut kollegineuvos toht. Carl Bartram. Sen ensimäisenä lääkärinä oli toht. L. Hedlund.</p>
        <p>Vuoteen 1891 asti toimi sairashuone kuumelasaretin nimellä, se kun alkujaan oli aiottu tarttuvien kuumetautien parantolaksi, jommoisena se siis pääasiallisesti tämän ensimäisen aikansa työskentelikin. Vuodesta 1891 on sitä 
          enempi käsitetty yleiseksi sairashuoneeksi, vaikka ohjesääntöjen 1 §:n mukaan sen <span className="quote">päätarkoituksena on estää tarttuvien kuumetautien leviämistä kaupungissa</span>. Koska kuitenkin samoissa säännöissä 
          sanotaan, että <span className="quote">milloin semmoisia tauteja paikkakunnalla ei liiku</span>, sairashuoneesen otetaan muitakin sairaita, niin on laitos itse teossa, täällä kun ei mitään vaikeampia kulkutauteja ole 
          liikkunut, saanut laveamman merkityksensä, niin että siinä nyttemmin hoidetaan akuutisia ja kroonillisia potilaita yleensä. Siihen onkin sentähden varustettu pienempi operatsiooni-huone.</p>
        <p>Sairashuone sijaitsee samalla yhteistontilla vaivaistalon kanssa ja sisältää 7 sairashuonetta, 1 leikkuuhuoneen, 1 huoneen lääkäriä varten, 1 kylpyhuoneen, 1 huoneen hoitajattarille, kyökin ja ruokakammion. Vesijohto antaa 
          vettä kylpyhuoneesen ja kyökkiin, josta myöskin likaviemäri on johdettu ulos. Sähkökellot on kaikissa sairas-huoneissa ja leikkaushuoneessa. Erityinen ruumiinavaushuone on pihassa.</p>
        <p>Laitoksen kalusto on jo varsin monipuolinen. Paitsi jotenkin täydellistä haavurikalujen kokoelmaa löytyy myöskin muita lääketieteellisiä koneita. V. 1898 lisättiin kalustoa vieläkin uusilla ajanmukaisilla koneilla.</p>
        <p>Ensi aikoina ei tätä kaupungin hyödyllistä laitosta käytetty läheskään niin suuressa määrässä kuin myöhempinä vuosina, ja siihen lienee ollut pääsyynä suomalaisen väestön vanha ennakkoluulo lasaretteja vastaan yleensä. Mutta 
          sivistyksen kohotessa ja levitessä on tämä ennakkoluuloinen vastahakoisuus vähitellen kadonnut, ja niinpä varattomampi väestö nyttemmin turvautuu kaupungin sairashuoneesen melkein säännöllisesti.</p>
        <p>Päivämaksu on 1 markka oman kaupungin asujamilta ja 1 m. 25 p. henkilöiltä muista kunnista. 15 vuotta nuoremmista lapsista maksetaan puolet. Vuodesta 1893 löytyy 2 sisustettua yksityishuonetta. Niistä tietysti on päivämaksu 
          kalliimpi, noin 3 tai 4 m., riippuen siitä, tuleeko erityinen ruoka tai hoito kysymykseen.</p>
        <p>Periaatteena noudatetaankin tässä sairashuoneessa että se on olemassa kaikkia kansankerroksia varten, ja sairaiden hoito on kaikille yhdenmukainen.</p>
        <p>Sairashuoneen pääjohto on palkattomalla johtokunnalla, jonka kolme jäsentä kaupungin valtuusto valitsee kolmeksi vuodeksi. Laitoksen taloutta hoitaa rahatoimikamari. Diakonissa eli laupeuden-sisar toimittaa sekä sairaanhoidon 
          että ostokset ruoanpitoon, joka siis ei ole urakalle annettu.</p>
        <br />

        <p className="signature">Charlotta Valdstedtin rahasto.</p>
        <br />
        <p className="initialCap">Apteekarinleski Charlotte Valdstedt määräsi lokakuun 27 p. 1893 päivätyn testamentin kautta, että hänen jälkeenjäävästä omaisuudestaan m. m. luovutettaisiin Hämeenlinnan kaupungille 30,000 markkaa, 
          joka pääoma jäisi koskematta. Korot käytetään vuosittain niin, että kaupungissa olevassa taikka vastedes perustettavassa sairashoitolaitoksessa kustannetaan vapaavuode varattomille henkilöille, kernaimmin naisille säätyluokasta. 
          Kuitenkin suoritetaan testamentin määräyksen mukaan korot tästä pääomasta vuosittain kahdelle testamenttaajan sisarelle niinkauvan kuin nämä elävät. (Leskirouva Valdstedt kuoli jouluk. 18 p. samana vuonna Naantalin kaupungissa, 
          jolle hän myös testamenttasi osan omaisuudestaan ehdolla että sikäläisessä kylpylaitoksessa pääoman koroilla kustannetaan sairashoitoa varattomille henkilöille, kernaimmin naisille säätyluokasta). Joulukuun 24 p. 1894 joutui 
          pääoma Hämeenlinnan kaupungille.</p>
        <p>Rahaston kanta tammik. 1 p. 1899:</p>
        <p>Lainassa olevaa rahaa: 30,000:-</p>
        <br />

        <p className="signature">Joh. Gust. ja Albertina Grönforsin vapaavuoderahasto.</p>
        <br />
        <p className="initialCap">Kauppias Joh. Gust. Grönforsin ja hänen puolisonsa Albertinan tytär, katteininleski Mathilda Zilliacus lahjoitti v. 1898 parantumattomain sairasten vapaavuoderahastoksi 5,000 m:kaa.</p>
        <p>Rahaston kanta tammik. 1 p. 1899:</p>
        <p>Pankissa rahaa: 30,000:-</p>
        <p>Tähän summaan on rouva Zilliacus huhtik. 17 p. 1899 lisännyt 1,000 markkaa.</p>
        <br />

        <p className="signature">Fredrika Zittingin vapaavuoderahasto.</p>
        <br />
        <p className="initialCap">Vuonna 1889 lahjoitti tirehtööri C. Zitting 2,000 markkaa rahastoksi, joka hänen tätinsä Fredrika Zittingin muistoksi tulisi kantamaan nimeä <span className="quote">Fredrika Zittingin vapaavuoderahasto 
          lapsia varten</span> ja josta korot käytettäisiin tämmöiseen tarkoitukseen.</p>
        <p>Rahaston kanta tammik. 1 p. 1899:</p>
        <p>Lainassa olevaa rahaa: 2,000:-</p>
        <p>Käteistä rahaa: 110:-</p>
        <p>Yhteensä: 2,110:-</p>
        <br />

        <p className="signature">Kansakoululaitos. Sen rahastoja.</p>
        <br />
        <p className="initialCap">Ensimäisen oppilaitoksen kansan lapsia varten Hämeenlinnassa avasi v. 1856 paikkakunnan rouvasväen-seura. Siinä annettiin kuitenkin opetusta ainoastaan tytöille. V. 1859 pani sitten kaupungin 
          vaivaishoitokunta toimeen alemman kansakoulun poikiakin varten. Nämä koulut olivat vaikuttamassa vuoteen 1871, jolloin kaupunkiseurakunta järjesti varsinaiset kansakoulut. Niille laaditut säännöt määräsivät toimeen-pantavaksi 
          kaksi kolmeluokkaista ylempää kansakoulua, toisen pojille ja toisen tytöille, joihin kumpaiseenkin piti alempana kansakouluna liitettämän yksi luokka valmistavaa opetusta varten. Valmistavilla luokilla ja molempain ylempien 
          koulujen ensimäisellä eli alimmalla luokalla saisi antaa yhteisopetusta poika- ja tyttölapsille.</p>
        <p>Näiden sääntöjen mukaisina avattiinkin sitten puheenalaiset koulut syysk. 1 p. mainittuna vuonna 118 oppilaalla sekä I mies- ja 4 nais-opettajalla. V. 1876 perustettiin alemman kansakoulun 1 luokkaa varten apu- eli 
          rinnakkaisluokka naisopettajalla ja seuraavana vuonna samanlainen saman koulun II luokalle.</p>
        <p>V. 1878 vahvisti kouluhallitus uudet säännöt, joiden l:ssä pykälässä sanotaan, että <span className="quote">kunta ylläpitää tarpeellisen määrän ylempiä ja alempia kansakouluja</span>. Nämä säännöt tiesivät kuitenkin ainoastaan 
          yhdestä miesopettajasta, nim. ylemmän poikakoulun johtajasta. Kaup:n valtuusmiehet myönsivät sentähden, koska tarve tätä vaati, varoja apuopettajan palkkaamiseksi ylemmässä poikakoulussa, ja tämä opettaja astui toimeen 
          kevätlukukauden alussa v. 1879. Näin sai ylempi poikakoulu toisen luokkansa, johon syksystä v. 1880 vielä tuli toinen apuopettaja lisäksi. Koulu kasvoi kolmeluokkaiseksi. V. 1881 tulivat nämä kaksi apuopettajan virkaa 
          vakinaisiksi. Tyttökoulu sai kolmannen luokkansa vasta syksyllä 1882.</p>
        <p>Oppilasmäärä ylemmässä ja alemmassa kansakoulussa yhteensä oli v. 1879 253, v. 1883 282, v. 1885 276.</p>
        <p>Ylempi tyttökoulu asui aina kevätlukukauden loppuun asti v. 1877 rouvasväen-seuran talossa vuokraa maksamatta, mutta muutti silloin n. s. vanhaan raastupaan. Ylempi poikakoulu ja alemman kansakoulun luokat olivat halvasta 
          vuokrasta sijoitetut Stichaiuksen vaivaistaloon. Yksi alemman kansakoulun luokka siirrettiin kevätlukukauden alusta v. 1879 tyttökoulun huoneustoon, ja syksystä v. 1880 muutettiin tilan puutteen takia muutkin alemman 
          kansakoulun luokat vaivaishuoneesta lehtori Gaddin normaalilyseota varten rakennuttamaan taloon.</p>
        <p>Sillä välin oli kuitenkin valmistunut kansakoulujen oma rakennus vanhan raastuvan viereiselle tontille n:o 123, jonka kaupunki oli lunastanut 2,000 markalla. Rakennus maksoi urakalla tehtynä 33,950 markkaa. V. 1882 saatiin 
          valmiiksi kansakoulujen ulkohuoneusto, joka on tiilistä tehty ja maksoi 2,950 markkaa. V. 1884 rakennettiin sitten hajoitetun vanhan raastuvan tontille toinen kansakoulurakennus, myöskin puusta. Se tuli maksamaan 16,950 m. — 
          Molemmat kansakoulurakennukset sisältävät, paitse yhteistä rukoussalia ja voimisteluhuonetta, yhteensä 12 luokkahuonetta, vahtimestarin asunnon y. m. Rakennusten keskellä on lavea hiekoitettu piha.</p>
        <p>Koko kansakoulutalo kaikkineen on maksanut 70,196 m. 70 p:niä, kustannus, johon pieni kaupunkikunta tuskin olisi kyennyt, joll'ei anniskeluyhtiö olisi sitä runsaasti avustanut. Vuosina 1878—1885 lahjoitti täten tämä yhtiö 
          kansakoulurakennuksiin 50,800 markkaa.</p>
        <p>Vaikka kansakouluilla täten on hyvinkin avarat huoneustot, on tila kuitenkin jälleen käynyt ahtaaksi, niin että nytkin koko neljä luokkaa on sijoitettu vuokrahuoneisin lehtori Gadd-vainajan perillisten talossa.</p>
        <p>Ennen syysk. 1 p. 1888 oli alemman kansakoulun oppiaika ainoastaan kaksi-vuotinen, mutta muutettiin silloin kolmivuotiseksi. Siten syntyi alempaan kansakouluun kolmas luokka sekä poika- että tyttö-osastolle, ja kumpaankin 
          asetettiin eri naisopettaja. Täten tuli oppiaika kansakouluissa kuusivuotiseksi.</p>
        <p>V. 1895 syyskuun 1 p:nä lisättiin alempaan kansakouluun yksi rinnakkaisluokka, jolle otettiin apuopettajatar.</p>
        <p>V. 1898 syyskuun 1 p:nä lisättiin vielä alempaan kansakouluun kaksi uutta rinnakkaisluokkaa, joihin otettiin yhtä monta apuopettajatarta. Siitä alkain on alemmassa kansakoulussa ollut 9 luokkaa.</p>
        <p>V. 1898 syyskuun 1 p:nä asetettiin myös ylempään kansakouluun yksi rinnakkaisluokka, poikia ja tyttöjä varten, johon otettiin miesapuopettaja.</p>
        <p>Kansakoulukassan varoista maksetaan nykyään (vuodelta 1899) palkkaa seuraaville henkilöille:</p>
        <Image className="centeredImageStyle" src={img14} alt="Etusivu"/>
        <p>Kun kalenterivuoden 1900 alusta on päätetty sekä ylemmän poika- että tyttökansakoulun jokaisen opettajan alkuperäinen pohjapalkka koroitettavaksi 300:lla ja alemman kansakoulun kunkin opettajan 200 mk:lla, nousevat koroitukset 
          kaikkiaan 3,900 m:kaan, ja menee niinmuodoin mainittuna vuonna palkkoihin yhteensä 24,925 m:kaa. Tätä paitsi maksetaan kansakoulun johtokunnan kirjurille vuosittain 80 mk. ja ylemmän kansakoulun rinnakkaisluokan tyttöjen 
          käsitöiden opettajattarelle palkkiota 165 m:kaa. Kun nämä määrät vielä lisäämme varsinaisiin palkkoihin, nousee kansakoululaitoksen palkkojen summa 25,170 markkaan.</p>
        <p>V. 1887 oli koko oppilasmäärä kansakouluissa yhteensä 295, v. 1892 284 ja syyslukukauden alussa v. 1899 429.</p>
        <p>Iltakoulu alkoi toimensa kansakoulutalossa vuoden 1892 alusta. Se on aiottu sitä nuorisoa varten, joka ei enää ole kansakoululasten ijässä, mutta on jäänyt tarpeellisimpia, kansakoulussa saatavia tietoja vaille. Koulussa on 
          poika- ja tyttöosasto erikseen, kummassakin osastossa kaksi luokkaa ja yhtä monta opettajaa. Opetusaika ensiksi 6, vuodesta 1895 alkaen 12 tuntia viikossa. Koulun kustannukset nykyään 1,659 markkaa, jotka kaupungin valtuusto 
          on myöntänyt.</p>
        <p>Opettajakirjasto perustettiin v. 1879 kunnan varoilla, Siinä oli 1898 vuoden lopulla 901 nidosta.</p>
        <p>Perustus lastenkirjastolle laskettiin toukokuussa 1891, jolloin kuvernööri T. Costiander sitä varten lahjoitti 300 markkaa. Ahkerasti ja suurella halulla nuoriso sitä käyttää. Nidosmäärä nykyään 330.</p>
        <p>Stipendejä ja vaatetusapua jaetaan varattomille oppilaille seuraavista rahastoista ja laitoksista:</p>
        <p><span className="quotation">Walheimin testamenttivarastosta</span> vuosittain 150 mk. 5 ja 10 markan stipendeinä.</p>
        <p><span className="quotation">Rosenqvistin testamentti-varastosta</span> vuosittain 120 mk., joilla rahoilla on ostettu varattomille oppilaille kirjoja.</p>
        <p><span className="quotation">Köyhien kansakoululasten vaatetusrahastosta</span> josta, kuten nimi osoittaa, jaetaan vaatetusapua köyhimmille oppilaille.</p>
        <p>Vaatetusapua on niinikään jakanut kaupunpin sivistyneiden naisten keskuudessa aikoinaan muodostunut neulomusseura.</p>
        <p>Sekä <span className="quotation">Hämeenlinnan vanha anniskelu-yhtiö</span> että nykyinen <span className="quotation">vähittäismyynti- ja anniskeluosakeyhtiö</span> ovat voittovaroistaan muistaneet 
          kansakoulunoppilaita, edellinen aikoinaan runsailla rahalahjoituksilla ruoka-annoksiin, jälkimäinen vielä runsaammilla varoilla vaatetusavuksi ja stipendeiksi.</p>
        <p>Mitä vanhan anniskeluyhtiön ruoka-annoksiin lahjoittamista varoista oli jäänyt tähteeksi, on kansakoulun johtokunta pitänyt Säästöpankissa korolla yhteydessä vaatetusrahaston korkojen tähteiden kanssa. Niitä varoja on 
          nykyään noin 1,700 markkaa.</p>
        <p><span className="quotation">Cygnaeuksen stipendi-rahasto</span> muodostui v. 1888 sen seppeleen hinnan tähteistä, joka H:linnasta lähetettiin U. Cygnaeuksen haudalle, ja jätettiin 108 markan suuruisena 
          kansakoulujohtokunnan haltuun. Tästä rahastosta, jota tallennetaan säästöpankissa, jaetaan stipendejä vasta sitten, kun se on noussut 2,000 markan suuruiseksi. Sitä on säästöpankki kerran lisännyt 498 markalla, ja sen suuruus 
          on nykyään 690 mk.</p>
        <p><span className="quotation">Kansakoulun kansanopisto-rahastosta</span> ei myöskään vielä ole stipendejä annettu, vaan jatketaan keräystä. Se sai alkunsa siten, että neiti Hilda Eklöf v. 1895 rupesi keräilemään varoja 
          stipendeiksi niille kansakoulunoppilaille, jotka haluavat jatkaa opintojaan jossain kansanopistossa. Kerättyyn summaan lisäsi sitten Säästöpankki 2,800 markkaa, niin että rahastossa nykyään on 3,360 markkaa.</p>
        <p><span className="quotation">Z. Topeliuksen stipendi-rahasto</span> on syntynyt säästöpankin lahjoittamista varoista sekä keräyksistä ja on nykyään 700 markan suuruinen.</p>
        <p>Mutta yhteen jaksoon kansakoulun kanssa mainittakoon tässä vielä <span className="quotation">kansankirjastosta</span> ja <span className="quotation">lukusalista</span>. Kansankirjasto on yhtä vanha kuin 
          kansakoulutkin täällä. Vuosittain on siihen hankittu uutta kirjallisuutta noin 200 markan edestä, niin että nidosten lukumäärä nyt on lähes 2,000. Kirjastoon yhdistettiin v. 1888 lukusali kaupungin työväenluokkaa varten. Siinä 
          on melkoinen määrä kotimaisia sanomalehtiä ja aikakauskirjoja, joita ahkerasti luetaan, niinkuin kirjaston nidoksiakin oikein kilvan lainataan kodeissa luettaviksi. Molemmat laitokset sijaitsevat nykyään vapaaehtoisen 
          palokunnan entisessä talossa.</p>
        <br />

        <p className="signature">Käsityöläiskoulu ja sen talous.</p>
        <br />
        <p className="initialCap">Armollisella julistuksella käsityöläiskouluista marrask. 25 p:ltä 1885 muutettiin vanhat sunnuntaikoulut maassa käsityöläiskouluiksi. Hämeenlinnan sunnuntaikoulurahastossa oli v. 1876 4,886 m. 43 
          p., joista 500 m. valtioapua. Sittenkun palkkauksiin y. m. menoihin samana vuonna oli suoritettu 1,141 markkaa, siirrettiin loput eli 3,745: 43 kaupungin kassaan, josta sittemmin sunnuntaikoulun menot suoritettiin. 
          Käsityöläiskoulu alkoi sitten alemmalla osastolla v. 1889, jolloin siinä oli 22 oppilasta. Ylempi käsityöläiskoulu avattiin v. 1892, mutta oli oppilaiden puutteessa työskentelemättä v:teen 1894 saakka, jolloin ylempi ja alempi 
          käsityöläiskoulu yhdistettiin yhdeksi laitokseksi 2:lla luokalla, niin että erotodistuksia siitä lähtien annetaan ainoastaan ylemmältä näistä.</p>
        <p>Koulun koko vaikutusalalla on siinä käynyt yhteensä 246 oppilasta. Erotodistuksen alemmalta osastolta on saanut 31, yhdistetystä koulusta 69 oppilasta.</p>
        <p>Oppi-aineet ovat alemmalla luokalla: äidinkieli, kaunokirjoitus, laskento, kirjanpito, mittausoppi, viivoitin- ja vapaakäden-piirustus; ylemmällä luokalla: äidinkieli, laskento, mittausoppi, projektsiooni-oppi, kirjanpito, 
          ammatti- ja ornamenttipiirustus. Tuntimääriä on alemmalla luokalla 9 ja ylemmällä 11 tuntia viikossa. Huoneustona käytetään kansakoulua.</p>
        <p>Opettajia on 5. Koulun johtajana vuoteen 1894 oli lehtori J. E. Sargren, sittemmin arkkitehti H. Helin. Hallituksen valitsemana puheenjohtajana johtokunnassa on viimeisinä kolmena vuonna ollut lehtori J. S. Pajula. Vuodesta 
          1898 on käsityöläis- ja tehdastelijain-yhdistyksen määräämänä oppilaiden tarkastajana räätäli J. Erlander.</p>
        <p>Vuodesta 1896 alkaen on paraimmille oppilaille jaettu pienempiä palkintoja mainitun yhdistyksen varoista. Oppilasmaksu 1 vuodelta on 1, toiselta 2 markkaa.</p>
        <p>Koulun ylläpitämistä varten maksaa valtio noin puolet opettajain palkoista eli keskimäärin 1,095 markkaa vuodessa. Loput kustannuksista suorittaa kaupunki, ja nousi tämä kustannus v. 1898 1,490 markkaan 10 p:iin.</p>
        <br />

        <p className="signature">Käsityöläisten ja tehdastelijain yhdistyksen stipendirahasto</p>
        <br />
        <p className="initialCap">on syntynyt siten, että vv. 1889 ja 1890 viinavoittorahoista tähän tarkoitukseen siirrettiin yhteensä 12,000 markkaa. Korot käytetään vuosittain stipendeihin, joita puheenalainen yhdistys jakaa 
          ammatti-opillisia matkoja varten.</p>
        <br />

        <p className="signature">Sähkövalaistusrahasto ja sähkövalaistuslaitos.</p>
        <br />
        <p className="initialCap">Kaupungin sähkövalaistus-rahasto syntyi 1888 ja 1889 vuosien viinavoitto-varoista siirretyllä 20,000 markan suuruisella summalla, ja oli rahaston kanta tammik. 1 p. 1899:</p>
        <p>Lainassa olevaa rahaa: 25,000:-</p>
        <p>Talletuskonttokurantilla: 18,760: 58</p>
        <p>Samoin: 2,300:-</p>
        <p>Käteistä rahaa: 179: 76</p>
        <p>Yhteensä: 46,240: 34</p>
        <p>Vaikka selonteko tänä vuonna (1899) hankitusta sähkövalaistuslaitoksesta oikeastaan kuuluu seuraavan vuoden kunnalliskertomukseen, mainitsemme siitä tässä seuraavaa:</p>
        <p>Uusi laitos, joka toimii hyvin ja valaisee kaupungin valtavan kirkkaasti — Poltinahon itälaidasta läntiseen tienrajaan ja etelärannasta Kruununlinnalle asti — on 1899 vuoden kuluessa pantu toimeen kaupungin omana yrityksenä. 
          Konehuone on kivestä ja sijaitsee korkealle ulottuvine savupiippuineen raatihuonekartanon pihalla.</p>
        <p>Huhtikuun alussa oli sähkövalaistusta varten säästössä 47,390 m:kaa, jotka on käytetty rakennuskustannuksiin. Alkuperäinen rakennuskustannus-ehdoitus nousi kuitenkin 58,051 markkaan. Sentähden siirrettiin sähkövalaistus-
          rahastoon vähittäismyynti- ja anniskelu-yhtiön voittorahoista jo keväällä 10,661 markkaa.</p>
        <p>Valaistus on ollut toimessa viime lokakuun alkupäivistä lähtien, mutta täysin valmiina oli se vasta marraskuun 26 päivänä, jolloin laitos tarkastettiin ja hyväksyttiin. Kustannukset nousivat korkeammiksi kuin alkuperäinen 
          ehdoitus, nim. 79,545 markkaan 5 p:iin. Lisäys kustannuksissa syntyi pääasiallisesti sen kautta, että kone, joka alkuaan oli arvattu 30 hevosvoimaiseksi, otettiinkin 50 hevosvoimainen, jotta kaupunki voisi saada 64 kaarilamppua 
          asetetuksi kaupunkiin 48 sijaan, johon määrään ne alkuaan oli laskettu, sekä vielä sen lisäksi 75 hehkulamppua sisävalaistusta varten. Tarvittavat lisävarat rakennuskustannuksia varten, 21,494 markkaa, siirsivät valtuusmiehet 
          tämän johdosta jouluk. 20 p. Vähittäismyynti- ja anniskelu-yhtiön voittovaroista sähkövalaistus-rahastoon.</p>
        <p>Sähkövalaistuksen ylläpitämistä varten siirrettiin mainituista voittovaroista marraskuun lopulla 100,000 markkaa, jonka summan koroilla korvataan valaistukseen tarvittavat lisämenot siinä tarkoituksessa, etfei sähkövalaistus 
          tulisi veroitettaville kaupunkilaisille kalliimmaksi kuin entinenkään valaistuskeino.</p>
        <br />
        
        <h5>Muita rahastoja.</h5>

        <p className="signature">Aleksanteri Ilsen stipendirahasto.</p>
        <br />
        <p className="initialCap">Hämeenlinnan kaupungin asukkaat jättivät helmikuun 15 p. 1883 päivätyn lahjoituskirjan kautta 6,000 Suomen markkaa kaupungin kunnallishallituksen huostaan, hartaasti toivoen että tätä pääomaa, 
          Aleksanteri II:n stipendirahaston nimellisenä, huolellisesti ja varovaisesti hoidettaisiin, niin että tulevatkin sukupolvet saisivat aihetta siunaamaan sitä armasta hallitsijaa, jonka muistoksi tämä rahasto oli koottu, ja 
          tahtoivat lahjoittajat rahaston käyttämisestä määrätä seuraavasti: 1) Rahaston vuotuisesta korosta on 25 % vuosittain lisättävä pääomaan, siksi kuin se nousee 10,000 markkaan; 2) jälellä oleva vuotuinen korko jaetaan siten, 
          että 50 % koko korosta annetaan kaupungin oppikoululle opettajakunnan määräyksen mukaan stipendinä jaettavaksi köyhille, siivoille ja eteville oppilaille; sekä 3) 25 % koko korosta käytetään täkäläisen käsityöläisyhdistyksen 
          lähemmän määräyksen mukaan niin, että tilaisuutta hankitaan siivoille ja lupaaville käsityön harjoittajille tässä kaupungissa yhä enemmän edistymään ammattitaidossansa; 4) kun pääoma l:ssä pykälässä mainitun korkomäärän kautta 
          tahi muulla tavalla on karttunut 10,000 markaksi, käytetään kaikki tämän pääoman tuottamat korot siten, että kaupungin oppikoulu jo mainittua tarkoitusta varten saapi niistä kaksi kolmatta osaa ja käsityöläisyhdistys yhden 
          kolmasosan.</p>
        <p>Rahaston kanta tammik. 1 p. 1899:</p>
        <p>Lainassa olevaa rahaa: 6,500:-</p>
        <p>Säästöpankissa: 1,062: 95</p>
        <p>Käteistä rahaa: 506: 32</p>
        <p>Yhteensä: 8,069: 27</p>
        <br />

        <p className="signature">Työväenyhdistyksen sairas- ja hautausapurahasto.</p>
        <br />
        <p className="initialCap">Vuosina 1888 ja 1889 siirrettiin tämän rahaston perustamista varten viinavoitto-varoista 10,000 markkaa, ja oli rahaston kanta tammik. 1 p. 1899:</p>
        <p>Lainassa olevaa rahaa: 10,000:-</p>
        <p>Käteistä rahaa: 505:-</p>
        <p>Yhteensä: 10,505:-</p>
        <br />

        <p className="signature">Svahnin lääkerahasto.</p>
        <br />
        <p className="initialCap">Anders Svahn, apteekari Hämeenlinnassa 1757—1795, testamenttasi m. m. kahta sairasvuodetta varten Uudenmaan--Hämeenläänin lasaretissa 4,000 riksiä, palkkarahastoksi kaupungin-lääkäriä varten 
          Hämeenlinnassa 2,000 r., Hämeenlinnan kirkolle ja koululle 5,000 r., kuudelle köyhälle leskelle Hämeenlinnan seurakunnassa vuotuiset korot 500 riksistä sekä kirkon urkuja varten vielä 1,000 r.</p>
        <p>Pääomaa hoitaa Suomen Talousseura. Vuotuisista koroista on H:linnan rahatoimikamarin hoidettavana vuosittain 330 m. 60 p., joista 166 m. käytetään köyhäin lääkkeisin ja 164: 60 palkkioksi kaupungin-lääkärille köyhäin hoidosta.</p>
        <p>Sitä paitse lähetetään Suom. Talousseurasta vuosittain tästä rahastosta eri korkomääriä, jotka vastaavat yllä-mainittuja pääoman osia, täkäläisen papiston jaettavaksi. Niin saa esim. Hämeenlinnan kappalainen vuosittain 109 m. 
          ja urkuri yhtä paljon. Kirkkoherra, 2 kolleegaa, urkujen polkija sekä kuusi köyhää leskeä saavat kaikki erityiset eränsä.</p>
        <br />

        <p className="signature">Blanckin rahasto.</p>
        <br />
        <p className="initialCap">Kaupungin valtuuston arkistossa löytyvien asiakirjain mukaan testamenttasi kauppa-oikeuksilla Hämeenlinnassa varustettu kauppias Karl Ivanowitsh Blanck, joka kuitenkaan ei asunut eikä kauppaa 
          harjoittanut täällä, vaan Pietarissa, kesäkuun 16 p. 1876 — sukulaisille ja omaisille eri osuudet melkoisesta omaisuudestaan sekä — erityisiä arvopapereita <span className="quote">kasvatuslaitoksen tai turvakodin perustamista 
            varten köyhille lapsille Suomessa, ilman eroitusta uskonnossa tai kansallisuudessa</span>. Hämeenlinnan kaupungille lankesi täten, kun asianomaiset arvopaperit oli Pietarissa selväksi rahaksi muutettu, 4,312 ruplaa, joka 
            summa huhtikuun 20 p. 1892 Hämeen läänin kuvernöörin kautta jätettiin kaupungin valtuustolle.</p>
        <p>Rahaston kanta oli tammik. 1 p. 1899:</p>
        <p>Lainassa olevaa rahaa: 11,000:-</p>
        <p>Käteistä rahaa: 550:-</p>
        <p>Yhteensä: 11,550:-</p>
        <p>Mainittuna vuonna 1892 päättivät valtuusmiehet että korot rahastosta toistaiseksi vuosittain annettaisiin rouvasväenseuralle tämän kunnan köyhäin lasten kasvatusta varten seuran ylläpitämässä lastenkodissa, uskonnosta 
          huolimatta.</p>
        <br />

        <p className="signature">Waihelmin rahasto.</p>
        <br />
        <p className="initialCap">Carl Walheim, <span className="quote">Bureau Chef och förste Expeditions Sekreterare i Kongl. Svenska regeringens Justitiedepartement"</span> (Toimistopäällikkö ja ensimäinen sihteeri kunink. 
          Ruotsin hallituksen Oikeusosastossa), testamenttasi Hämeenlinnassa syysk. 23 p. 1843 tekemällään testamentilla täkäläisiin tarkoituksiin yhteensä 5,000 ruplaa, joista 4,000 ruplaa pääomana stipendien jakamista varten 
          varattomille kouluoppilaille Hämeenlinnan kaupunki-kunnasta ja 1.000 ruplaa pääomana sairaanhoidon kustantamista varten köyhille lapsille samasta kunnasta. Pääomia ei saa vähentää, mutta kyllä lisätä.</p>
        <p>1899 vuoden alussa oli pääomaa:</p>
        <p>l:ssä rahastossa: 21,670: 22</p>
        <p>2:ssa rahastossa: 12,510: 86</p>
        <p>Yhteensä: 34,181: 08</p>
        <p>Walheimin rahastoa, josta tässä mainitsemme yhteen jaksoon, vaikk'ei kaupunki olekkaan missään suoranaisessa tekemisessä sen kanssa, hoitaa v. lääninsihteeri R. L. Wigren.</p>
        <br />
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kaupungin virkamiesten ja palvelijain palkat.">
        <br />
        <p className="initialCap">Joulukuun 7 p. 1875 vahvisti keis. senaati kaupungin virkamiehille ja palvelijoille seuraavan palkkaussäännön:</p>
        <p>1 pormestari, palkkaa: 7000:-</p>
        <p>1 oikeusraatimies, joka samalla on suomenkielen kääntäjä, palkkaa: 2,500:-</p>
        <p>1 kunnallisraatimies, palkkaa: 1.750:-</p>
        <p>1 notario maistraatissa ja raastuvanoikeudessa, joka sen ohessa kantaa lunastusrahat näiden virkakuntain pöytäkirjoista, palkkaa: 1,500:-</p>
        <p>Oikeusraatimiehen- ja notaarion-virat voidaan myöskin yhdistää.</p>
        <p>1 kaupunginviskaali, palkkaa: 1,400:-</p>
        <p>1 kaupunginvouti, palkkaa: 600:-</p>
        <p>Sittenkun nykyinen (1875) kaupunginvouti on eronnut virastaan, voidaan, joll'ei esteitä tule, kaupunginviskaalin ja kaupunginvoudin virat yhdistää, jolloin kaupunginviskaali tulisi siinä tapauksessa nauttimaan palkkaa 
          2,000 markkaa.</p>
        <p>1 poliisipalvelija, palkkaa: 750:-</p>
        <p>5 poliisipalvelijaa, à 700 m kullekkin: 3,500:-</p>
        <p>2 kaupunginpalvelijaa, palkkaa à 500 m. kummallekkin: 1,000:-</p>
        <p>Muistutuksena tähän palkkaussääntöön lisätään: Maistraatin jäsenet ovat velvolliset, ilman muuta korvausta kuin mitä asiakirjain lunastuksena lähtee, toimittamaan pesänkirjoituksia ja perinnönjakoja sekä semmoisissa 
          kuolinpesissä, jotka voimassa-olevain asetusten mukaan ovat velvolliset niissä käyttämään maistraatin henkilöitä, että pyynnöstä semmoisissakin kuolinpesissä, jotka ovat vapautetut senkaltaisesta velvollisuusuudesta, 
          jota vastoin pesänkirjoitus- ja perinnönjako-prosentit, niinkauan kuin niitä kannetaan, tulevat kaupungin kassalle.</p>
        <SubDivider className="dividerStyle"/>
        <p>Sittemmin on tässä palkkaussäännössä tapahtunut muutamia muutoksia, niinkuin alla-olevasta luettelosta lähemmin nähdään. Oikeusraatimiehen- ja notaarion-virat on yhdistetty, mutta kaupunginviskaalin- ja kaupunginvoudin-
          virat ei. Täten nauttivat kaupungin virkamiehet ja palvelijat nykyjään palkkaa:</p>
        <p><span className="bold">Pormestari</span> palkkaa 7,000, korvausta huutokauppaprosentin lakkauttamisesta 400, yht 7,400:-</p>
        <p><span className="bold">Oikeusraatimies</span> palkkaa 2,500, korvausta huutokauppa-pros. lakkauttamisesta 800 m: 3,300: —</p>
        <p><span className="bold">Notaario</span> maistraatissa ja raastuvanoikeudessa, joka sen ohessa kantaa lunastusr. pöytäk., palkkaa: 1,500:-</p>
        <p><span className="bold">Kunnallisraatimies</span> palkkaa 1,500, korvausta huutokauppa-pros. lakkauttamisesta 1,000: 2,500:-</p>
        <p><span className="bold">Kaupunginviskaali</span> palkkaa: 1,800:-</p>
        <p><span className="bold">Kaupunginvouti</span> palkkaa: 1,000:-</p>
        <p><span className="bold">Ruununkassööri</span>: 600:-</p>
        <p>7 <span className="bold">poliisipalvelijaa</span> palkkaa kukin 900: 6,300:-</p>
        <p>2 <span className="bold">kaupunginpalvelijaa</span> à 600: 1,200:-</p>
        <p><span className="bold">Venäjän kielen kääntäjä</span>: 700:-</p>
        <p><span className="bold">Kaupunginlääkäri</span>: 2,000:-</p>
        <p>Sama palkkiota: 800:-</p>
        <p><span className="bold">Kaupungin kätilö</span>: 400:-</p>
        <p><span className="bold">Rokottaja</span>: 120:-</p>
        <p><span className="bold">Valtuusmiesten sihteeri</span>: 900:-</p>
        <p><span className="bold">Raatihuoneen vahtimestari</span>: 1,200:-</p>
        <p><span className="bold">Rahatoimikamarin puheenjohtaja</span>: 200:-</p>
        <p><span className="bold">Kaksi rahatoimik. jäsentä</span>: 200:-</p>
        <p><span className="bold">Rahatoimikamarin kamreeri</span>: 3,000:-</p>
        <p><span className="bold">Vaakamestari</span>: 800:-</p>
        <p><span className="bold">Työnjohtaja</span>: 1,000:-</p>
        <p><span className="bold">Järvipoliisi</span>: 50:-</p>
        <p><span className="bold">Rankkuri</span>: 100:-</p>
        <p>Yht. palkkoja ja palkkioita 37,070:-</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kaupungin valtuuskunta.">
        <br />
        <p className="initialCap">Seikkaperäisempi historiiki Hämeenlinnan kaupungin valtuuskunnasta ja sen vaikutuksesta niinä 25 vuotena, kuin kaupunkikuntain edustuslaitos on maassamme voimassa ollut, tullee laadittavaksi sitä 
          yhteistä laajaperäistä kaupunki-edustusten kertomusta varten samalta ajalta, joka pääkaupungin valtuuston ehdoituksesta on aiottu julkaistavaksi. Tässä esiintuomme vain ulkonaisimmat piirteet kaupunki-edustuksen synnystä sekä 
          Hämeenlinnan valtuuston vaikutuksesta ja vaiheista.</p>
        <p>Jo ensimäisillä valtiopäivillä perustuslaillisen valtio-muotomme elvyttyä uuteen vaikutukseen ehdoitettiin laki kunnallishallinnosta kaupungeissa laadittavaksi. Perustukset tähän lakiin tarkoittivat semmoista muutosta 
          kaupunkikuntain järjestyksessä, että kaikki ei-kirkolliset asiat, jotka koskivat kaupunkia kuntana, asetettaisiin yhtäläisen käsittelyn alaisiksi ja kuuluisivat saman vallan toimi-alaan. Kaupungit jakautuivat siihen aikaan 
          kolmeen eri yhdyskuntaan. Ensimäisen muodosti porvaristo, varsinainen kaupunkikunta, s. o. ne, jotka saavuttamansa porvari-oikeuden nojassa harjoittivat elinkeinoa kaupungissa ja jotka painavammasti kuin muut vaikuttivat 
          kaupunkien hallitukseen ja hallintoon. Toisen yhdyskunnan kaupungissa muodostivat porvarit ja talonomistajat yhdessä, koska jälkimäiset olivat velvoitetut osaltansa pitämään voimassa <span className="quote">palovahtia, 
          tientekoa, kirkkoa ja pappilan-rakennusta ynnä muiden rasitusten kanssa, joita ei voi eikä käy pitää hengeltä maksettavina veroina</span>. Kuitenkin olivat muutamat talonomistajat <span className="quote">erityisten 
          etu-oikeuksien ja saamiensa päätösten kautta</span> vapautetut muutamista rasituksista. Kaikki näitä molempia luokkia koskevat asiat käsitteli maistraati, mutta ainoastaan porvaristolla oli pysyvä edustuslaitos, 
          <span className="quote">kaupungin vanhimmat</span>, joita maistraati kuunteli kaikissa asioissa, jotka yksinomaan koskivat porvaristoa. Jos jokin asia koski porvaristoa ja talonomistajia yhteisesti, kutsuttiin kaikki 
          <span className="quote">maksuvelvolliset</span> yhteensä maistraatin eteen asiassa <span className="quote">kuulusteltaviksi</span>. Kolmantena luokkana oli köyhäinhoito-yhdyskunta eli <span className="quote">seurakunta
          </span>, johon kuuluivat sekä porvarit ja talonomistajat että kaikki muut kaupungissa asuvat; sen asiat ratkaistiin kirkonkokouksissa. Sittenkun 1864 vuoden säädyt olivat useilla muutoksilla hyväksyneet uuden asetuksen 
          perusteet, laadittiin ehdoitus, joka 1872 vuoden valtiopäivillä hyväksyttiin ja jonka hallitus vahvisti jouluk. 8 p. 1873 voimaan-astuvaksi tammik. 1 p. 1875. Siihen on myöhemmin tehty muutamia muutoksia asetuksilla elokuun 
          15 p:ltä 1883 ja jouluk. 15 p:ltä 1897.</p>
        <p>Ne suuret muutokset kaupunkien kunnallishallinnossa ja niiden koko yhteiselämässä, jotka täten syntyivät ja voimassaoleva <span className="quote">arm. asetus kunnallishallituksesta kaupungissa</span> on aikaan-saanut, 
          selvenevät paraiten siitä itsestä, jos verrataan sen säädöksiä tähän lyhykäiseen huomautukseen entisaikain olosuhteista.</p>
        <p>Mitä oleellista toimeen-pantu itsehallinnon periaate täällä Hämeenlinnassakin kuluneena neljännesvuosisatana on vaikuttanut sekä henkisen että aineellisen kehityksen hyväksi, käy osaksi näkyviin yllä-olevista kertomuksista 
          kaupungin eri laitoksista ja rahastoista, osaksi seuraavastakin osastosta tässä kirjasessa. Vaivaishoito, terveydenhoito, kansakoululaitos ovat saavuttaneet ajanmukaisen kehitysasteen, monet yksityiset hyväntekeväisyys-
          laitokset ovat eduskunnan avustamina päässeet, virkeämpään toimintaan, kaupunki on myötävaikutuksellaan edistänyt korkeamman opetuksenkin kallista asiaa ja aina ollut valmiina sitä palvelemaan. Niinpä esim. voinemme tähän 
          merkitä että, kun v. 1898 oli eleillä kysymys uuden kansakoulu opettaja-seminaarin sijoittamisesta Hämeenlinnnaan, kaupunki eduskuntansa kautta sitoutui melkoisiin uhrauksiin tämän aikeen toteuttamiseksi, luvaten uutta 
          laitosta varten lunastaa kaksi rakennustonttia, — joista toinen (käsittäen koko korttelin) laskettiin 90,000:n, toinen 22,000 markan arvoiseksi, — ja tarjota nämä valtiolle ilmaiseksi. Se ei suinkaan ollut kaupungin eikä sen 
          eduskunnan syy, että laitos tästä huolimatta tuli sijoitetuksi muualle.</p>
        <p>Muista rakennusyrityksistä kuin yllämainituista vaivais- ja terveydenhoitoa sekä kansakouluja varten, jotka kaupunginvaltuuston vaikutuksesta ovat toteutuneet, mainittakoon tässä etevimpinä: kaupungin uusi raatihuone kivestä, 
          joka rakennettiin vuosina 1886 ja 87 ja m. m. sisältää mukavat huoneustot raastuvanoikeutta ja maistraattia, rahatoimikamaria ja poliisilaitosta varten sekä isonlaisen juhlasalin, jossa kaupungin valtuusmiehetkin pitävät 
          kokouksiaan; pakkahuone, joka valmistui v. 1890 ja sijaitsee kaupungin rajojen ulkopuolella, itäisen viertotien ja rautatien risteyksessä; uusi vaakahuone, joka valmistui v. 1898. Näiden rakennusten rakennuskustannukset ovat 
          yhtäpitäviä sen arvon kanssa, johon ne kukin erikseen ovat lasketut yllä-olevassa kaupungin rahastojen 1898 vuoden summittaisessa tilissä.</p>
        <p>Kaupungin ensimäiset valtuusmiehet valittiin maistraatin edessä joulukuun 2 p. 1874 k:lo 4 iltapäivällä. Ne olivat seuraavat: toht. J. G. Geitlin, vankilan-tirehtööri P. A. Brofeldt, vankilankirjuri G. A. Eklund, pastori H. 
          Malin, kauppias J. F. Grönlund, kirjakauppias A. W. Grönholm, satulaseppä H. Forsgren, pastori G. R. Böök, kelloseppä K. Lampén, maisteri A. W. Lindgren, maalari H. Helin, tohtori H. Sucksdorff, toht. J. Hårdh, rakennusmestari 
          A. Nylund, rakennusmestari G. Eklöf, toht. A. Lilius, kauppias J. G. Grönfors, rehtori V. Sundel, seppä K. J. Nyberg, apteekari J. Åkerman, lehtori M. Gadd.</p>
        <p>Nämä 21 valtuusmiestä pitivät ensimäisen kokouksensa jouluk. 14 p. 1874, jolloin puheenjohtajaksi valittiin vankilantirehtööri P. A. Brofeldt ja varapuheenjohtajaksi toht. A. Lilius. Valtuuston viralliseksi kieleksi tuli 
          enemmistön päätöksen mukaan suomi, jolla kielellä siis pöytäkirjat ja kaikki valtuustosta menevät kirjoitukset olisi laadittavat. Tähän päätökseen tehtiin kokouksessa tammik. 2 p. 1875 lehtori M. Gaddin ehdoituksesta se 
          väli-ehto, että ne, jotka osaavat ainoastaan ruotsia, saisivat keskusteluissa käyttää tätä kieltä. Kaikkinainen kirjeenvaihto tapahtuisi kuitenkin empimättä suomeksi. Sihteeriksi valittiin yksi valtuusmiehistä, maist. A. W. 
          Lindgren.</p>
        <p>Viimeisessä kokouksessa v. 1875 erosi vankilan-tirehtööri Brofeldt puheenjohtaja-toimesta, ja varapuheenjohtaja toht. A. Lilius astui vastaiseksi hänen sijaansa.</p>
        <p>Huhtikuussa 1876 valittiin sitten toht. Lilius vakinaiseksi puheenjohtajaksi. Varapuheenjohtajaksi tuli samalla kertaa pastori G. R. Böök ja sihteeriksi uudestaan maisteri Lindgren.</p>
        <p>Valtuuston puheenjohtajina eli esimiehinä ovat eri aikoina olleet:</p>
        <p>1875 vankilantirehtööri P. A. Brofeldt, 1876—1879 tohtori A. Lilius, 1880-82 pastori G. R. Böök, 1883—84 yliopettaja K. Krvast, 1885—86 lehtori K. Blomstedt, 1887—94 tohtori Carl Bartram, 1895—97 vankilantirehtööri P. A. 
          Brofeldt, 1898 assessori L. Peterson, 1899 tohtori Carl Bartram. 1900 vuoden alussa luopui toht. Bartram, uudelleen valtuusmieheksi valittuna, eduskunnasta. Puheenjohtajaksi on valittu tohtori K. 0. Lindeqvist.</p>
        <p>Valtuuston sihteereinä ovat olleet:</p>
        <p>1875—82 maisteri A. W. Lindgren, 1883-huhtikuuhun 1884 varatuomari A. W. Becker, huhtikuusta 1884—87 ruununvouti A. Grönros, 1888—kesäkuuhun 1897 vankilankirjuri 0. Öhman, kesäkuusta 1897 kaupunginviskaali O. Fr. Wenäläinen.</p>
        <p>Kaupungin väkiluvussa ei ole mitään niin melkoisia muutoksia tapahtunut, että olisi syntynyt aihetta valtuusmiesten lukumäärää muuttamaan, vaan on tämä yhä vieläkin sama kuin ensi vuonna eli 21.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kaupungin rahatoimikamari.">
        <br />
        <p className="initialCap">Alkoi toimensa tammik. 1 p:nä 1876. Sen ensimäisinä jäseninä olivat lääninkirjuri L. Peterson, katteini A. Bollfras ja kauppias A. Novoshiloff, joista puheenjohtajana L. Peterson. V. 1899: lehtori 
          J. S. Sargren (puheenjohtajana), kamreeri J. A. Moberg ja apteekkari V. Pomcell.</p>
        <p>Rahatoimikamarin kamreerina on alusta alkaen ollut pastori A. W. Appelqvist, joka jo ennen sen perustamista eli vuodesta 1869 oli vaivaishoidon sihteerinä ja kamreerina hoitanut tämän raha-asioita.</p>
        <p>Veroäyrin perusteena on eri aikoina ollut 400, 300 ja viimeiksi 200 markkaa. Veroäyri v. 1899 teki 3 m. 20 p.</p>
        <p>V. 1898 yhdistettiin linna ja vanha kaupunki oikeudellisessa, kirkollisessa ja hallinnollisessa suhteessa kaupunkikuntaan.</p>
        <h5>Kaupungin edusmiehinä valtiopäivillä ovat olleet:</h5>
        <p>1863—64 pormestari A. Thermén,</p>
        <p>1867 talousraatimies O. R. Grönholm,</p>
        <p>1872 oikeusraatimies A. Helsingius,</p>
        <p>1877—78 oikeusraatimies A. Helsingius,</p>
        <p>1882 lääninkamreeri G. W. Liukkonen,</p>
        <p>1885 pormestari A. Helsingius,</p>
        <p>1888 kauppias J. Strömberg,</p>
        <p>1891 lääninsih teeri E. Forsman,</p>
        <p>1894 lääninkamreeri G. W. Liukkonen,</p>
        <p>1897 vankilanterehtööri P. A. Brofeldt,</p>
        <p>1899 lääninkamreeri G. W. Liukkonen.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kaupungin valtuusmiehet.">
        <h5>v. 1898:</h5>
        <p>Ahlgren, J., nahkuri.</p>
        <p>Alopaeus, A., kirjakauppias,</p>
        <p>Rackmansson, K., pankinjohtaja.</p>
        <p>Bartram, C, kolleegineuvos (varapuheenjohtaja).</p>
        <p>Björkbom, K. F., kauppias.</p>
        <p>Bogdanoff, A., pankinjohtaja.</p>
        <p>Favén, A. E , kolleega.</p>
        <p>Heino, H., kauppias.</p>
        <p>Helenius, J. E., kauppias.</p>
        <p>Hägg, S., maalarimestari.</p>
        <p>Johansson, J., rovasti.</p>
        <p>Kämäri, K., kaupppias.</p>
        <p>Lampén, G. H., kauppias.</p>
        <p>Lindeqvist, K. O., rehtori.</p>
        <p>Lund, F., kelloseppä.</p>
        <p>Nylund, A., rakennusmestari.</p>
        <p>Pdlander, E. V., lehtori.</p>
        <p>Peterson, L., assessori (puheenjoht.)</p>
        <p>Skogster, F., kauppias.</p>
        <p>Strömberg, J., kauppias.</p>
        <p>Wallenius, S., nahkuri.</p>
        <SubDivider className="dividerStyle"/>
        <h5>v. 1900:</h5>
        <p>Ahlgren, J., nahkuri.</p>
        <p>Alopaeus, A., kirjakauppias.</p>
        <p>Backinansson, K., pankinjoht.</p>
        <p>Björkbom, K. F., kauppias.</p>
        <p>Bogdanoff, A. pankinjoht.</p>
        <p>Böök, A. Th., kolleega.</p>
        <p>Chydenius, K. IL, vankilantireht.</p>
        <p>Favén, A. E., kolleega.</p>
        <p>v. Fieandt, K., piirilääkäri.</p>
        <p>Heinonen, M., kansakoulunopettaja.</p>
        <p>Helenius, J. E., kauppias.</p>
        <p>Hägg, S., maalarimestari.</p>
        <p>Johansson, J., rovasti., (varapuheenj.)</p>
        <p>Kämäri, K., kauppias.</p>
        <p>Lampén, C. H., kauppias.</p>
        <p>Lindeqvist, K. O., rehtori, (puheenjohtaja).</p>
        <p>Lund, F., kelloseppä.</p>
        <p>Skogster, F., kauppias.</p>
        <p>Strömberg, J., kauppias.</p>
        <p>Tötterman, L. J., ruununvouti.</p>
        <p>Wallenius, S., nahkuri.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">Tietoja Hämeenlinnan kaupungin yhteiselämän eri aloilta.</p>

      <Article titleText="Kirkollinen seurakunta ja väkiluku.">
        <br />
        <p className="initialCap">Vanhimpina aikoina, jolloin Hämeenlinna vielä oli kauppalana, kuului se Wanajan seurakuntaan, joka puolestaan on kaikkein vanhimpia maassa eli vuodelta 1250. Sittemmin, eli kauppalan saatua 
          kaupungin-oikeudet v. 1638, muodostettiin tämä kaupunki omaksi seurakunnaksi ja liitettiin siihen kirkollisessa suhteessa läheiset kuninkaalliset latokartanot, Ojoisten, Saaristen ja Hätilän. Tällä tavoin syntyi 
          <span className="quote">Hämeenlinnan kaupunki- ja maaseurakunta</span>. Tähän taasen liitettiin v. 1803, jotta Hämeenlinnan kirkkoherralla olisi, kuten asiakirjoissa lausutaan, kohtuullinen toimeentulo (en anständig 
          lifsbergning) Wanaja yhdeksi kirkkoherrakunnaksi, niin että tällä kirkollisella yhdyskunnalla sittemmin on yhteisnimityksenä <span className="quote">Hämeenlinnan ja Wanajan kirkkoherrakunta</span>.</p>
        <p>Kaupunki- ja maaseurakunta palkkaavat yhdessä kaksi pappia: kirkkoherran ja kappalaisen. Kirkkoherran palkka-etuna on 3,000 markkaa ja virkatalo, jota paitse hän Wanajan kirkkoherrana nauttii erityiset tulot. Kappalaisella 
          on palkkaa 2,400 markkaa ja hyyryrahoja 600 m:kaa. Kirkkoväärti nauttii palkkaa 1,200 m:kaa, lukkari 1,000 m. ja urkunisti 1,000 m. sekä molemmat viimemainitut viljaa maaseurakunnalta.</p>
        <p>Kaupungin kirkko, jonka vaiheista eri aikoma on kerrottuna ylempänä <span className="quote">Piirteissä H:linnan kaupungin historiasta</span>, rakennettiin uudestaan v. 1892, ja tuli tämä rakennustyö kaikkiaan maksamaan 
          74,681 m. 9 p.</p>
        <p>Kirkollinen diakonaati sai ensimäisen perustuksensa kirkonkokouksessa syysk. 24 p. 1894, jolloin päätettiin kollehtien kautta koota sitä varten varoja. V. 1898, jolloin laitos alkoi vaikutuksensa yhdellä diakonissalla, oli 
          tällä tavoin kertynyt 545 m. 73 p. Kaupungin säästöpankki lahjoitti samana vuonna tarkoitukseen 6,000 markkaa ja kaup. valtuusto 800 m. Yhteisesti oli v. 1898 diakonaatin kassassa varoja 7,541: 99. Vuoden kuluessa oli menoja 
          836: 96 p., joista diakonissan palkka 800 m. V. 1899 lahjoitti säästöpankki diakonaatiin vielä 2,000 markkaa. Laitoksen varat ovat nykyään 9,115: 80, johon on luettava lisäksi 1,000 markkaa, jotka rakennusmestari A. Nylund 
          hiljakkoin on lahjoittanut perittäväksi hänen kuolemansa jälkeen. — Dikaonaati toimittaa diakonissansa kautta sairaanhoitoa melkein yksinomaan kaupungin köyhille ja ilmaiseksi.</p>
        <p>Sunnuntaikoulua ylläpitää seurakunnan papisto yksityisenä laitoksena, siten että harrastavat henkilöt (yhteensä 8 opettajaa, joista enimmät naispuolisia) sunnuntai-iltaisin pitävät hartaushetkiä, osaksi kaupungin kirkossa, 
          osaksi vuokrahuoneessa Myllymäellä. Oppilaita on ollut lähes 300.</p>
        <p>Kaupungin väkiluku kirkonkirjain mukaan on vuodesta 1872 muuttunut seuraavalla tavalla:</p>
        <Image className="centeredImageStyle" src={img15} alt="Etusivu"/>
        <p>Väkiluku maaseurakunnassa oli 1900 vuoden alussa 1,523 henkeä. Kaupunki- ja maaseurakunnassa yhteensä siis samaan aikaan 6,759, Vanajan kanssa yhteensä 9,578.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kouluja.">
        <br />
        <p className="initialCap">Hämeenlinnan vanha triviaali-koulu, joka oli tullut neliluokkaiseksi v. 1817, pysyi sellaisena kevätlukukauden alkuun asti v. 1842, jolloin se muuttui yli-alkeiskouluksi (högre elementarskola), 
          mutta vasta syyslukukauden alusta v. 1844, sittenkun uusi gymnaasi- ja koulujärjestys v:lta 1843 oli vahvistettu, voitiin koulun opetus tämän uuden järjestyksen mukaiseksi muuttaa. — 1831 vuoden tulipalossa paloivat kirkon 
          vieressä olevat koulurakennuksetkin, ja luokat joutuivat hajalle sinne tänne kaupungissa. V. 1849 muutti koulu vihdoin siihen taloon, joka nyt on postikonttorina.</p>
        <p>V. 1857 perustettiin Hämeenlinnaan siviili-gymnaasi, joka pysyi vaikuttamassa vuoteen 1872 saakka. Se lakkautettiin silloin, mutta sen sijaan muutettiin ylä-alkeiskoulu samana vuonna 7-luokkaiseksi alkeisopistoksi. Tämä 
          taasen puolestaan lakkautettiin v. 1879.</p>
        <p>Kaikissa näissä kouluissa oli ollut opetuskielenä ruotsi. V. 1873 sijoitettiin tänne suomalainen normaalilyseo, joka semmoisena v. 1886 muutettiin Helsinkiin. Kouluun oli sen vaikutuskautena otettu yhteensä 593 oppilasta. 
          Sen jatkona täällä on pidettävä</p>
        <h5>Klassillinen lyseo.</h5>
        <p>Sen kartano, joka valmistui vuonna 1888, kohoaa kaupungin kauniimpana rakennuksena omalta, kunnan ilmaiseksi luovuttamalta tontilta, joka käsittää kokonaisen korttelin. Lyseoon on (vv. 1887—1899) otettu yhteensä 488 
          oppilasta. Normaalilyseon ja klassillisen lyseon yhteenlasketusta oppilasmäärästä (1,081) on 414 suorittanut ylioppilastutkinnon.</p>
        <p>Näistä ylioppilastutkinnon suorittaneista ovat: 62 pappeja, 62 lakimiehiä ja hallinnollisia virkamiehiä, 41 oppikoulujen opettajia, 44 käytännöllisissä toimissa (arkkitehtiä, insinööriä, metsäherroja y. m.), 25 rautatien 
          virkamiehiä, 15 lääkärejä, 9 upseereja, 9 maanviljelijöitä, 5 sanomalehden-toimittajia, 6 kansakoulunopettajia, 1 professori, 2 dosenttia, 1 taiteilija, 7 ei mitään; 87 jatkavat lukujaan (monet näistä ovat jo tutkintoja 
          suorittaneet), 11 on kuollut ja 27:stä ei ole tietoja.</p>
        <h5>Ruotsalainen tyttökoulu.</h5>
        <p>Ensimäisenä tyttökouluna Hämeenlinnassa, joll'ei oteta lukuun pienten lasten kouluja, mainitaan <span className="quote">rouva Lojanderin koulua</span>, josta meillä ei kuitenkaan ole sen tarkempia tietoja kuin että siellä 
          m. m. opetettiin myös uudempia kieliä. Se vaikutti v. 1834 paikkeilla. Suurempi, moniluokkainen tyttökoulu oli kuitenkin jo vaikuttamassa v. 1838 ja vähän myöhemmin neiti Margaretha Langensköldin tyttökoulu, jota nimitettiin 
          <span className="quote">Langensköldska pension</span>. Sittemmin mainitaan Amanda Åkessonin ja neiti Haltermannin koulut, jotka toimivat yhteen aikaan. Neiti Haltermann oli kotoisin Saksasta.</p>
        <p>V. 1852 perusti neiti Augusta Grunér, joka itse oli lapsena käynyt rouva Lojanderin koulua, tänne pienemmän tyttökoulun, joka avattiin ainoastaan 3 oppilaalla, mutta pian kehittyi ja tuli suureen suosioon. Se sai sitten 
          armollisen luvan senaatilta lokak. 24 p. 1856, jolloin siinä oli 4 luokkaa, ja asetettiin tuomiokapitulin valvonnan alaiseksi. Vähän myöhemmin yhdistettiin siihen myös valmistava luokka, jonka johtajattareksi tuli neiti 
          Eeva Savonius.</p>
        <p>Mutta v. 1865 syysk. 1 p. hälveni neiti Grunérin koulu gymnaasin-opettajain silloin perustamaan tyttökouluun, jossa neiti G:kin pysyi opettajana vuoteen 1868 asti, jolloin hän siirtyi opettajaksi Waasan tyttökouluun. 
          Neiti G:n koulu H:linnassa ei ennättänyt tulla nauttimaan mitään julkista apua, jota hän kuitenkin, koulun viimeisenä vuonna hänen omanaan ollessaan, oli hakenut. Ennen anomuksen tultua ratkaistuksi senaatissa, luopui näet 
          neiti G. avusta, joka sitten annettiin uudelle, gymnaasin-opettajain perustamalle koululle. Tämä oppilaitos naisia varten puolestaan vaikutti vuoteen 1872 saakka, Sen johtajana oli vv. 1869—72 hiljakkoin kuollut maisteri 
          K. G. Renvall. Neiti Grunér on vielä elossa ja asuu nykyään Heisingissä.</p>
        <p>Gymnaasin-opettajain naiskoulun lakattua perustivat tänne yksityisen tvttökoulun neidit H. ja A. Tavaststjerna. Se alkoi toimensa 3 luokalla ja oli täysivalmiina 6-luokkainen. Suurin oppilasluku siinä oli 48. Koulu, joka 
          toukok. 30 p. 1879 muutettiin Helsinkiin, nautti valtioapua 1,400 markkaa.</p>
        <p>Neiti Eva Savonius avasi täällä syysk. 1 p. 1865 ruotsinkielisen oppilaitoksen, joka alkoi vaikutuksensa yhdellä luokalla ja 8 oppilaalla. V. 1866 tuli lisäksi toinen ja seuraavana vuonna kolmas luokka. Siitä lähtein 
          työskenteli koulu kolmiluokkaisena, valmistavana kouluna, ollen yhteisenä pojille ja tytöille, syyslukukauteen 1872 saakka, jolloin useiden vanhempain pyynnöstä koulu lavennettiin neljännellä luokalla. Syyslukukautena 1877 
          oli luokkamäärä noussut kuudeksi. Ensimäiset kolme luokkaa olivat edelleen valmistavana kouluna, neljäs, viides ja kuudes luokka jaettiin kukin kahteen osastoon eli 2:teen vuosikurssiin. — Ensimäiset 12 vuotta rakentui koulun 
          talous yksinomaan oppilaiden vuosimaksuihin ja omistajattaren omiin varoihin, jolloin menot useasti nousivat tuloja suuremmiksi. V. 1877 sai koulu ensimäisen kerran valtio-apua, nim. 1,200 markkaa, joka apu v. 1881 
          koroitettiin 1,600, v. 1890 5,000 ja v. 1896 6,000 markkaan. Kaupungilta ei ole koulu koskaan saanut eikä pyytänytkään mitään apua. Kuitenkin on kaikkiaan 204 kaupungin lapsista siinä saanut maksuttoman opetuksen. Mitään muita 
          lahjoja ei koulu myöskään ole saanut kuin vuotuisia stipendejä Valheimin rahastosta, jaettavaksi varattomille ahkerille oppilaille Hämeenlinnan kaupunkikunnasta, sekä Eläinsuojelusseuralta kirjasia ja aikakauskirjoja oppilaille 
          jaettavaksi. Suurin oppilasmäärä, 114, oli koulussa lukuvuonna 1880—81. Syyslukukautena 1899 oli oppilasmäärä 81. Opetusta hoiti samaan aikaan yksitoista opettajatarta ja yksi opettaja. V. 1889 vietti laitoksen johtajatar 
          25-vuotisen kouluvaikutuksensa muistojuhlan.</p>
        <h5>Suomalainen tyttökoulu</h5>
        <p>avattiin syyskuun 1 p:nä 1878 yhdellä luokalla. Joka seuraavana vuonna lisättiin kouluun aina yksi uusi luokka, kunnes se v. 1881 tuli neliluokkaiseksi. Sen jälkeen haettiin ja saatiinkin v. 1882 lupa laajentaa koulua 
          6-luokkaiseksi. Tämän johdosta pantiin toimeen syysk. 1 p:nä 1.882 viides ja samana päivänä 1883 kuudes luokka. Tänkaltaisena on oppilaitos vaikuttanut tähän päivään asti. Sen perustivat seitsemän täällä sijainneen 
          normaalilyseon opettajista, joista useat siinä myös ovat opetusta antaneet, niinkuin toht. Geitlin, yliopettajat Ervast, Bonsdorff ja Tavaststjerna, lehtorit Blomstedt ja Palander, maisterit S. Yrjö-Koskinen ja E. Genetz 
          y. m. Johtajattarina ovat olleet: neidit Fr. Wetterhoff, J. Petander (sittemmin rouva Yrjö-Koskinen), Anna Lilius ja Hilda Nordlund. Koulun nykyinen johtajatar on neiti Anni Löfgren. Oppilasten lukumäärä nykyään 1G6. Oppilaan 
          koulumaksu 100 m. vuodessa. Sisaruksille myönnetään 20 % alennus. Vapaaoppilaita on tätä nykyä 25. Koulu nauttii valtio-apua 8,000 markkaa vuodessa.</p>
        <h5>Suomalainen valmistava koulu</h5>
        <p>perustettiin syksyllä v. 1875. Sen ensimäiset omistajat olivat normaalilyseon opettajat K. Blomstedt, A. E. Faven, J. G. Geitlin, H. E. Hårdh ja E. Palander, jotka v. 1885 luovuttivat laitoksen K. Blomstedtille yksinään. Sen 
          johtajattarena vuoteen 1886 saakka oli neiti Lucina Hagman, sittemmin neiti Helmi Blomstedt. V. 1893 joutui koulu neitien Anna Lampön'in ja Aina Montén'in omaksi, joista edellinen on johtajattarena. Oppilasluku on viime 
          vuosina vaihdellut 40 50 välillä. Valm. koulu, joka jakautuu kolmeen luokkaan valmistaen oppilaita lyseoon ja tyttökouluun, ei nauti mitään apua valtiolta eikä kaupungilta.</p>
        <h5>Kiertokouluseminaari</h5>
        <p>ja siihen yhdistetty 3-luokkainen mallikoulu on yksityisten perustama. Perustavassa kokouksessa marraskuun 20 päivänä 1889 jätettiin alustavat hankkeet opettaja J. H. Tuhkasen toimeksi ja samalla valittiin aiotulle 
          oppilaitokselle 6-henkilöinen johtokunta. Perustamislupa ja vahvistus koulun ohjesäännöille saatiin maaliskuun 5 päivänä 1890.</p>
        <p>Oppilaitos ryhtyi toimeensa 1 p:nä syyskuuta 1890. Ensimäisenä lukuvuotena oli oppilaita seminaari-osastolla 9 mies- ja 27 naishenkilöä. Sittemmin on oppilasluku vuosi vuodelta kasvanut niin suuressa määrässä, että nykyään 
          on voitu ainoastaan kolmas osa pyrkijöistä vastaanottaa.</p>
        <p>Ensimäisen lukuvuoden työskenteli oppilaitos yksityisten lahjoittamilla ja oppilasten sisäänkirjoituksista karttuneilla varoilla. Seuraavana lukuvuotena myönnettiin valtio-apua 3,000 markkaa viiden vuoden ajaksi ja sen 
          jälkeen 4,500 markkaa yhtä pitkäksi ajaksi.</p>
        <p>Mallikoulussa on myös ollut pyrkijöitä joka vuosi kyllin riittävä määrä. Siinä on annettu opetusta lapsille ilmaiseksi.</p>
        <p>Vakinaisena opettajana ja samalla oppilaitoksen johtajana alusta alkaen on työskennellyt J. H. Tuhkanen. Tunti-opettajina kolmena ensimäisenä lukukautena olivat kansakoulunopettajat W. Waltanen ja E. Hämäläinen. 
          Kevätlukukauden alusta 1891 tuli vakinaiseksi apu-opettajattareksi neiti Auni Hällström, joka sittemmin syyslukukauden lopulla 1893 erosi toimestaan. Hänen jälkeläisensä neiti Hilma Aakkula on ollut apu-opettajana ja 
          mallikoulun johtajattarena. Lukuvuonna 1893—94 oli tunti-opettajana kansakoulunopettaja K. Hämäläinen. Lukuvuovuodesta 1894—95 on toisena vakinaisena apu-opettajana ollut neiti Siiri Lampén.</p>
        <p>Opettajain nykyiset palkat: johtajalla 2,500 mk ja apuopettajilla 1,600 mk kummallakin.</p>
        <p>Seminaarin oppilaat maksavat koulun ohjesäännön mukaan koulumaksua 60 markkaa lukuvuodelta. Oppikurssi on yksivuotinen.</p>
        <h5>Työkoulu Hämeenlinnassa, ammattikoulu kankaankutomista varten,</h5>
        <p>avattiin maaliskuun 1 p:nä 1885 Rouvasväenseuran talossa. Silloin tuli kouluun 20 oppilasta, joille opetettiin liinavaatteiden ompelemista, sukkain kutomista, pitsien virkkaamista, oljen punomista ja koristeveistoa. 
          Kesäkuussa v. 1886 avattiin ensimäinen kurssi kankureille kansakoulun veistohuoneessa, johon sopi 8 kangaspuuta. Saman vuoden syksyllä suostui kaupunki antamaan laitokselle 200 m:kaa vuokra-apua. V. 1887 antoi Hämeen ja 
          Uudenmaan läänin maanviljelysseura 1,000 markkaa kutoma-opettajan palkkaamiseksi. Kaupunki lisäsi vuokrarahoja sitä myöden kuin koulu laajeni ja suostui vihdoin antamaan apua myöskin opettajain palkkaamiseksi, joten koulu 
          voi pitää ompelu-opettajan ja kaksi kutoma-opettajaa. 1890 lakkautettiin muut käsityökurssit ja koulusta tuli varsinainen kutomakoulu. Tähän aikaan perustettiin myös n. s. opettaja-osasto, jossa opetettiin kutomataidon 
          teoriaa. Tätä ainetta opetti koulun saksalainen mestari, jonka esitelmät suomennettiin luokalla. Kaupunki oli nyt lisännyt apurahansa 3,000:teen ja vapaa-oppilaita otettiin paljon. Valtio oli suostunut antamaan saman summan. 
          Tähän aikaan oli koulussa 4 opettajaa. Oppilaiden lukumäärä nousi sataan vuodessa ja oli koulussa yhtaikaa vähintäin 50. Sitten kaupunki ei enää myöntänyt apurahoja, ja koulu jäi ahtaalle. Paitsi sitä oli koulu usein ahtaalla 
          huoneuston tähden. 64:lle kangaspuulle ei ollut helppo saada tilaa. Silloin myönsi valtio koulun omistajalle talon ostamista varten 45,000 m:kan kuoletuslainan. V. 1894, jolloin opettaja-osasto tehtiin kaksiluokkaiseksi, 
          suostui valtio antamaan kolmena seuraavana vuonna 10,000 m:kaa vuosittain. Tämä kannatussumma on sittemmin uudistettu, ja annettiin se tänäkin vuonna koululle, jossa nyt oli 80 kangaspuuta käynnissä.</p>
        <p>Koulun omistajatar ja johtajatar on neiti Fredrique Wetterhoff. Se alistuu Teollisuushallituksen alle, insinööri Th. Durchman tarkastajana.</p>
        <p>Töistään on koulu saanut Suomen yleisen teollisuusnäyttelyn palkinnon Wiipurissa v. 1887, Uudenmaan ja Hämeenläänin maanviljelysseuran ensimäisen palkinnon ja suuremman hopeamitalin vv. 1889 ja 1892, Hämeen läänin 
          maanviljelysseuran ensimäisen palkinnon vv. 1894 ja 1898, Nishni-Novgorodin teollisuusnäyttelyn ensi palkinnon v. 1896 sekä Lyypekin pohjoismaisen teollisuusnäyttelyn ensi palkinnon kultamitalin v. 1887.</p>
        <h5>Lastentarhaa</h5>
        <p>ylläpitää neiti Hanna Schrey vuodesta 1887 alkaen vuokrahuoneessa ilman minkäänlaista kannatusta kunnalta tai valtiolta. Lastentarhan tarkoitus on pientenlasten toimiskeluhalun tyydyttäminen leikin ja työn luonnonmukaisella 
          vaihtelulla. Laitoksessa on ollut kaikkiaan 83 lasta, viime syyslukukaudella 9. Lasten vanhemmat maksavat 10 markkaa lukukaudelta.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Hämeenlinnan rouvasväen-seura.">
        <br />
        <p className="initialCap">Tämä seura, joka pitkällisen olemassa-olonsa aikana on vaikuttanut varsin monipuolisesti yhteiselämään paikkakunnalla, on saanut alkunsa seuraavalla tavalla:</p>
        <p>Vuodesta 1848 oli kaupungissa löytynyt eräs lauluseura, jota johti rouva von Schoultz-Brand ja johon kuului etupäässä nuorisoa sivistyneestä kansanluokasta. Saadakseen aikaan tarpeen vaatimaa koulua <span className="quote">
          köyhien ja turvattomain lasten kasvattamista varten uskonnossa ja opettamista varten tavallisissa käsitöissä</span> liittyi tähän nuorisoseuraan myöskin koko joukko vanhempia kansalaisia, ja niinpä pantiin mainitun vuoden 
          lopussa ja seuraavan alussa toimeen pari seuranäytelmää, jonka ohessa kaupungin porvariston keskuudessa kerättiin varoja puheenalaista koulua varten. Saatiin tällä tavoin kokoon vähän toista sataa ruplaa, ja johtokunta 
          muodostui varojen hoitamista ja lisäämistä varten. Sen puheenjohtajaksi valitsi porvaristo kuvernöörin vapaahra O. Rehbinderin puolisoineen. Ensimäisessä johtokunnan kokouksessa helmik. 8 p. 1849 valittiin sihteeriksi ja 
          rahaston-hoitajaksi pormestari A. Thermen. Jatkettiin sitten toimintaa uusilla seuranäytelmillä sekä ompeluseuroilla, joiden teoksia myytiin, y. m. Varat pantiin kasvulle, m. m. Saimaan kanavan obligatsiooneja ostamalla. 
          Maaliskuussa v. 1850 erosi kuitenkin vapaahra Rehbinder puolisoineen johtokunnasta ja muutamat muut jäsenet heidän kanssaan. Seuranäytelmäin ja muiden huvi-iltamain sekä myytyjen teosten ja lahjain kautta (m. m. oli 
          tukkukauppias Krantzoff lahjoittanut 400 ruplaa) olivat seuran eli yhdistyksen varat silloin nousseet 2,932 ruplaan 7 kop.</p>
        <p>Rikkoutuneen johtokunnan rahaston-hoitaja, pormestari Thermén, kutsui silloin porvariston kokoukseen huhtikuun 5 p:nä valitsemaan uutta johtokuntaa. Porvarit nyt mainitsivat tietävänsä että kaupungin rouvasväen keskuudessa 
          oli tekeillä yhdistys <span className="quote">samankaltaista tarkoitusta varten</span>, ja arveli porvaristo että hajaantuneen johtokunnan kokoomat varat voitaisiin jättää tämän yhdistyksen eli seuran haltuun, sen 
          hoidettaviksi ja hallittaviksi ennen määrättyyn tarkoitukseen.</p>
        <p>Kolmen alustavan kokouksen jälkeen huhtikuussa, joissa aiotun seuran puheenjohtajaksi valittiin majuurin-rouva Louise Grigorkoff, rahastonhoitajaksi lääninrahastonhoitaja katteini O. Gylling ja sihteeriksi kappalainen P. A. 
          Polviander, kutsuttiin rouvasväen-seuran kaikki jäsenet ensimaiseen kokoukseen seurahuoneelle toukokuun 6 p. 1856. Tässä hyväksyttiin alustavissa kokouksissa syntyneet säännöt, ja rahaston-hoitaja sai toimekseen hankkia 
          niille asianomaista vahvistusta. Tämä saatiinkin elokuun 20 p. samana vuonna.</p>
        <p>Näiden sääntöjen mukaan tuli seuran johtokuntansa kautta, jossa oli 13 jäsentä, - paitse päätarkoitustaan: koulun perustamista ja ylläpitämistä köyhän kansanluokan tyttölapsia varten - valvoa koululasten koti-oloja sekä 
          muidenkin köyhään kansanluokkaan kuuluvien lasten hoitoa ja kasvatusta sekä, mikäli varat kannatti, valmistaa köyhille naisille työnansiota hankkimalla työaineksia. Pohjarahasto määrättiin 3,000 ruplaksi ja toukokuun 6 päivä 
          vuosipäiväksi. Jo ennen ensimäistä varsinaista kokoustaan oli yksistään jäsenmaksujen kautta karttunut 414 ruplaa.</p>
        <p>Tässä kokouksessa päätettiin myös pyytää kaupungin porvaristolta vuokravapaata kouluhuoneustoa. Vastaus tuli siinä muodossa, että porvaristo toimittamansa keräyksen tuloksena jätti seuralle 57 ruplaa 65 kop. huoneuston 
          hankkimista varten. Sitä paitse lahjoitti mainittu tukkukauppias Krantzoff vieläkin 100 ruplaa seuran rahastoon, joka sen ohessa pienempäin lahjoitusten kautta lisääntyi 21 ruplalla.</p>
        <p>Seuran koulu avattiin lokakuun 13 p. 1856 50 tyttö-oppilaalla (eräänä seuraavana vuonna oli näiden luku koko 101). Opetus kohdistui uskontoon ja käsitöihin. Seuran aineksista valmistetulta käsitöitä myytiin sitten, ja oli 
          tämä myynti kauvan aikaa yhtenä seuran tulolähteenä, niinkuin pienempäin vaatteiden-tilausten suorittaminenkin. Sen ohessa valmistettiin oppilaille kouluvaatteita, ja moni johtokunnan jäsen lahjoitti tätä varten pumpuli- ja 
          puolivilla-kankaita, — niinkuin kenkiäkin. Muutamille lapsille köyhimmistä perheistä kustansi seura myös muun ylläpidon. — Opetus, jota annettiin suomeksi ja ruotsiksi, oli säännön-mukaisesti oppilaille maksuvapaa kuten 
          kaikki koulutarpeetkin. Myöhempinä vuosina kannettiin kuitenkin varakkaimmilta oppilailta joku pienempi maksu, yhteensä 3 à 5 ruplaa koko koulua kohti. Tietopuoliseen opetukseen, jonka pää-esineenä oli uskonto aapiskirjan, 
          katkismuksen ja raamatun-historian avulla, liittyi jo ensimäisenä vuonna vähän päässä-laskua. Sittemmin lisättiin tähän ohjelmaan kirjoitus ja laskento taululle sekä maantieto kartan mukaan, ja <span className="quote">Luonnon 
          kirjaa</span> ruvettiin käyttämään sisälukua varten. Pienimmät oppilaat oppivat kirjoittamaan piirtämällä kirjaimia hiekkaan, jota tätä varten pidettiin varalla erityisessä hiekkalaatikossa. Tutkinto koulussa pidettiin 
          kahdesti vuodessa, joulun edellä ja kesän alussa, ja oli näissä tilaisuuksissa aina paljon väkeä. Tutkinnon loputtua kestitettiin koululapsia aterialla ja ahkeriminille jaettiin pienempiä lahjoja, lastenkirjoja, kenkiä y. m., 
          mutta muutamille vähän rahaakin. Lahjain jakamista varten koottin varoja erityisesti; kenraalikuvernööri kreivi Berg lahjoitti m. m. tarkoitukseen kerran 10 ruplaa.</p>
        <p>Ensimäisenä opettajana koulussa mainitaan neiti Perdén, jolla oli vuosipalkkana ensiksi 75 ruplaa sekä huone, polttopuut ja valaistus, sittemmin 100 ruplaa rahassa. Kevät-tutkinnossa kesäk. 17 p. 185S oli läsnä arkkipiispa 
          Bergenheim, joka kovasti kiitti koulua.</p>
        <p>Koulun ohessa jatkui seuran muu toimi-ala. Rahoja koottiin seuranäytelmäin, tanssi-iltamain (yhtenä vuonna esim. 11 arki-iltamaa ja 2 lasten-paalit) ja keräysten kautta. M. m. lahjoitti kenraalikuvernööri Rokassowski kerran 
          25 ruplaa, ja neiti Grunér'in naiskoulusta tuli kerran oppilaiden käsitöitä arpomalla 21 ruplaa 20 kop.</p>
        <p>V. 1858 rakensi seura oman koulukartanon ent. kauppiaan Mik. Feod. Balkoffin lahjoittamalle tontille (n:o 38 10:ssä korttelissa). Kustannakset nousivat 2,192 ruplaan 36 kop. Tästä ja muista menoista huolimatta kasvoi seuran 
          pääoma vuosittain 465 ruplalla. Yhtenä seisovana tulolähteenä oli isomman koulusalin vuokraaminen silloisen siviili-gymnaasin oppilaiden lauantai-iltamia varten, laulajaisiin y. m. Talvella 1866—67 piti eräs kaupungin 
          sivistyneen nuorison keskuudessa muodostunut näytelmällinen yhdistys näytelmä-iltamia samassa salissa ja maksoi tästä oikeudestaan rouvasväen-seuralle 400 ruplaa.</p>
        <p>V. 1870 syyskuussa päätti seura kestävän kouluvuoden loputtua jättää koulunsa silloin paraikaa muodostuvan kansakoulun johtokunnan hoidettavaksi, jonka ohessa seuran kouluhuoneustoa saataisiin käyttää sillä ehdolla, että 
          kansakoulunjohtokunta pitäisi huolen talon ylläpidosta ja maksuista. Syntyvän kansakoulun kannattamiseen tahtoi seura myöskin ottaa osaa mahdollisesti käytettävissä olevilla koroilla. Neljä yhdistyksen jäsenistä, rouvat 
          Grigorkoff, Barck ja Boisman sekä neiti af Enehjelm, astui seuran puolesta jäseniksi vasta muodostuneesen kansakoulun johtokuntaan keväällä 1871.</p>
        <p>V. 1871 tuli seuran puheenjohtajaksi everstinrouva Mathilda Petander. Seuran huoneusto vuokrattiin edelleen kansakoululle, jota sen ohessa seura avusti neljän vuoden aikana keskimäärin 675 markalla vuosittain.</p>
        <p>Mutta näinä vuosina oli seura puheenjohtajansa initsiatiivista alkanut toimia uudella vaikutusalalla perustamalla turvakodin turvattomia lapsia varten työväen luokasta, joita julkisissa huutokaupoissa jätettiin vähimmän 
          vaativalle hoidettavaksi. Uuden aatteen toteuttamista varten muodostettiin toinen rahasto uusia huvituksia toimeenpanemalla. Näitä huvituksia mainittiin ensiksi nimellä: <span className="quote">kirjalliset seurustelut
          </span> (litterärasamqväm), sitten <span className="quote">arki-iltamat</span> (hvardagssoircer) eli, kuten niitä jokapäiväisessä puheessa nimitettiin, <span className="quote">rouva Petanderin lastenkotipaalit</span> ( fru 
          P:s barnhemsbaler), sekä <span className="quote">naamiaiset</span> (maskerader). Sitä paitse kansanhuveja kaupungin puistossa. Ja toimitettiin näitä tämmöisiä huvituksia vuoteen 1885 saakka, jonka jälkeen niitä ei enää voitu 
          voitolla pitää. Vähän tuloja kertyi kuitenkin siten, että seuran huoneustoa vuokrattiin eri tarkoituksia varten, kuten esitelmien pitämiseen, kokouksiin y. m.</p>
        <p>V. 1872 oli bruttotuloja huvituksista 2,001 mk. 15 p., jonka ollessa seura sai koko joukon lahjoja, kuten esim. 130 m. neiti Tavaststjernan tyttökoulusta, 500 markkaa eräältä johtokunnan jäseneltä, neiti Fredrika Zittingiltä, 
          70 markkaa neiti Eeva Savoniuksen tyttökoulusta, 500 markkaa testamentissa rouva Raskashikoffilta, jota hoidettiin lastenkodissa muutamia kuukausia ennen hänen kuolemaansa, 1,000 markkaa testamentissa laamanni Wetterhoffilta, 
          y. m.</p>
        <p>Lastenkoti vihittiin tarkoitukseensa tammik. 1 p. 1875, jolloin siihen vastaanotettiin 3 hoidokasta. Sitä pidettiin vuokrahuoneustossa, asianlaita, jota seuran puheenjohtaja rouva Petander katsoi epäkohdaksi. Hänen toimestaan 
          vaati seura sentähden kaupungilta takaisin entistä huoneustoansa, ja kun kaupungin valtuusmiehet, jotka pitivät seuran ennen tekemiä lupauksia sitovina, eivät tähän suostuneet, syntyi oikeudenkäynti, jonka tulokseksi jäi, että 
          seura toukokuun 25 p. 1877 jälleen sai käyttö-oikeuden taloonsa. Samana vuonna sijoitettiin lastenkoti siihen.</p>
        <p>Jo ennenkun seura oli saanut takaisin käyttö-oikeuden taloonsa, oli sen keskuudessa ajatus syntynyt uuden talon rakentamisesta lastenkotia varten, ja rouva P. ryhtyi tässä tarkoituksessa välipuheisin ent. kauppiaan Kusma 
          Bjeljakoffin kanssa, jolla oli rakentamaton tontti lähellä seuran vanhaa taloa. Tämän tontin on sittemmin seura saanut vastaan-ottaa lahjaksi mainitulta kauppiaalta, ja on lahjoituskirja päivätty huhtikuun 16 p. 1874 v.</p>
        <p>V. 1881 muutettiin seuran säännöt, ja 3 vuotta myöhemmin siirrettiin 7,400 markkaa seuran kassasta lastenkodin kassaan tämän laitoksen turvaamista varten. V. 1882 annettiin Stichaeuksen vaivais- ja työhuoneelle 400 markkaa 
          avuksi seuran puolelta kerjäämisen ehkäisemiseksi kaupungissa, ja vuonna 1884 aljettiin ylläpitää <span className="quote">kerjäläiskotia</span> eli työkotia kuljeksiville lapsille, joita sinne otettiin isommaksi osaksi päivää 
          työskentelemään ruoastansa. Tätä työkotia ylläpidettiin osaksi seuran kustannuksella, osaksi pienillä keräyksillä kaupunkilaisten keskuudessa. Yleisöä kehoitettiin olemaan jakamatta almuja, ja muutenkin koetettiin kerjäämistä 
          ehkäistä; mutta sitä harjoitettiin sittenkin, eikä työkodissa monta lasta päivässä käynyt.</p>
        <p>Valmistaakseen vaihtelevampaa työtä, kuin mitä seura siihen saakka oli kuljeksiville pienokaisille tarjonnut, otti se v. 1890 erityiseksi vaikutusalakseen työkodin ylläpitämisen lapsille sekä töiden jakamisen vanhemmille 
          henkilöille. Tämän toimihaaran järjestämiseksi sai seura raha-apua valtuusmiehiltä ja asetti yritystä johtamaan seuran jäsenistöstä valitun 6-henkilöisen johtokunnan. Lapsia opetettiin työkodissa kaikenlaisissa käsitöissä, 
          tyttöjä neulomisessa, sukkain kutomisessa ja virkkaamisessa, poikia sukkain kutomisessa ja koritöissä sekä niinimattojen valmistamisessa, niinkuin vähemmän aikaa myöskin suutarin ja puusepän töissä erittäin asetettujen 
          opettajain johdolla. Niitä lapsia, jotka eivät olleet käyneet mitään koulua, opettivat ensimäisinä vuosina kaupungin nuoret naiset tavallisissa koulu-aineissa, mutta myöhempinä vuosina pantiin nämä lapset kiertokouluseminaarin 
          pienten lasten kouluun. Työkodissa kävi runsaasti ennen kuljeskelevia lapsia, keskimäärin 50 à 60 päivässä, ja joka vuosi oli täytymys supistaa vastaanotettavien lukumäärä, koska lasten vanhemmat muuten olisivat tulleet liian 
          paljon vapautetuiksi niiden hoidosta, niitä kun lastenkodissa ruokittiin yhdellä à kahdella aterialla päivässä. Yhdestä perheestä ei siten enää vastaan-otettu niin monta lasta kuin ennen. Lasten ikä oli 6—14 vuotta.</p>
        <p>TyÖkotiin yhdistetty töiden jakaminen, jota ennen oli melkein yksinään hoitanut seuran väsymätön puheenjohtaja, toimitettiin nyt määrättyinä aikoina kahdesti viikossa työkodin huoneustossa. Joukko erinkaltaisia töitä jaettiin 
          suoritettavaksi noin sadalle köyhälle naiselle vuosittain. Kolmena vuonna myönsivät valtuusmiehet työkodin johtokunnalle 3,000 markkaa, katovuonna 1893 koko 4,000 m. työkodin ylläpitämistä ja vaikutusta varten, jonka ohessa 
          valtuusto työkodin johtokunnalle vielä jätti 3,000 markkaa apuvaroiksi köyhille naisille Hämeenlinnan kunnasta sekä 1,000 mk. polttopuiden jakamista varten. Mutta seuraavana vuonna olivat valtuusmiehet tulleet siihen 
          kokemukseen, että yllämainittu hyväntekeväisyyslaitos oli kaupunkikuntaan houkutellut joukon köyhiä työväen-perheitä läheisistä maalaiskunnista, eivätkä enää myöntäneetkään seuralle enemmän kuin 1,500 markkaa. Tämän johdosta 
          oli työkodin johtokunta pakoitettuna sulkemaan tämän lapsia varten ylläpitämänsä laitoksen ja pitämään voimassa ainoastaan työnjakamisen vanhemmille henkilöille. Tämä jatkuu yhä vieläkin ja toimitetaan joulukuun keskivaiheilta 
          maaliskuun loppuun saakka kerran viikossa. Sen kautta saavat erittäinkin voimattomimmat köyhät naiset tässä kunnassa helpompaa työnansiota.</p>
        <p>V. 1894 päätettiin rakentaa oma huoneusto työnjakamista ja tulevaisuudessa mahdollisesti tarvittavaa työhuonetta varten, joka päätös pian sen jälkeen pantiinkin toimeen. Tämän johdosta on seuran koko kiinteä omaisuus, — 
          jota alussa monina vuosina arvioittiin ainoastaan 11,946 markaksi 36 penniksi, myöhemmin 17,000 markaksi, johon tulee lisäksi lankku-aita ja puuliiteri 1,500 markasta, — nyttemmin lisärakennuksineen ja korjaustöineen noussut 
          23,500 markan arvoon.</p>
        <p>Lasten lukumäärä seuran lastenkodissa on vaihdellut 9 ja 23 välillä, mutta ei ole myöhempinä aikoma noussut 20 ylemmälle. Sen asioita hoiti kesään asti v. 1894 laitoksen perustajatar, everstinrouva Petander, joka silloin 
          muutti pois paikkakunnalta jättäen tämän toimensa seuran huostaan. Tämä taasen puolestaan uskoi lastenkodin asiat 6-henkilöiselle toimikunnalle, joka vaikutuksensa alussa asetti lastenkotiin sivistyneen johtajattaren, 
          sittenkun ulkonaisessakin suhteessa oli toimitettu perinpohjainen ja ajanmukainen uudesta-järjestely varojen kautta, jotka — nousten 1,837 markkaan 65 p:iin — oli koottu arpajaisilla.</p>
        <p>Vielä myöhimpinäkin aikana eli v. 1899 on lastenkotia muistettu lahjoituksella, kun eversti Bollfrasin perilliset lahjoittivat sille 500 markkaa, joka summa enimmäksi osaksi, eli 450 m., on kävtetty kaivon rakentamiseksi 
          lastenkodin tarvetta varten.</p>
        <p>Yhteydessä lastenkotinsa kanssa on seura jo monta vuotta ylläpitänyt n. s. lasten-seintä, johon köyhät äidit suorittamalla 30 penniä päivässä voivat jättää pienet lapsensa siksi aikaa kun itse päivätöittensä tähden ovat 
          pakoitetut olemaan poissa omista kodeistaan. Tätä lastenseintä on kuitenkin ainoastaan vähässä määrässä käytetty.</p>
        <p>Työjakoansa ja muuta vaikutustaan varten on seura saanut apua valtuusmiehiltä: vuosina 1895 ja 1897 2,000 markkaa sekä vv. 1898 ja 1899 1,000 markkaa. Hämeenlinnan säästöpankki on voittovaroistaan lahjoittanut seuralle: 1893 
          1,000 m., 1894 500 m., 1895-97 1,000 m. sekä 1898-99 500 mk.</p>
        <p>Seuran puunjakamista varten, joka oikeastaan alkoi v. 1888, on tarpeen mukaan varoja ko'ottu arpajaisten ja myyntien kautta. Koivupuita ostetaan ja luovutetaan sitten puolesta hinnasta köyhille perheille, seuran viimeiksi 
          säätämän periaatteen mukaan ei kuitenkaan enemmän kuin puoli syltä perhettä kohti talvessa.</p>
        <p>Monina vuosina on seura joulu-avuksi jakanut rahalahjoja l:stä 20:een markkaan asti useille köyhille kodeille täällä kaupungissa. Näihin lahjoihin on varoja saatu kokoon keräyslistan kautta, johon seura itse on merkinnyt 100 
          markkaa. Viime vuosina, eli joulusta 1894 asti, ovat nämä joululahjarahat lisääntyneet 150 markalla eli koroilla muutamasta eversti H. Standertskjöldin seuralle tekemästä, 3,000 markan suuruisesta lahjoituksesta muistoksi 
          hänen sisarensa rouva Kenny af Enehjelmin lämpimästä harrastuksesta köyhien hyväksi. Myöskin rouvasväen-seura on kunnioittanut tätä unohtumatonta jäsentänsä kokoomalla rahastoa, joka — vielä aivan pienenä ollen eli 398 markkaa 
          — kantaa nimeä <span className="quote">rouva Kenny af Enehjelmin rahasto vastaista lasten työhuonetta varten</span>.</p>
        <p>V. 1889 sai seura haltuunsa n. s. <span className="quote">Molanderin työrahaston</span>, jossa silloin oli 1,230 markkaa. Tämän rahaston oli aikoinaan pannut alkuun kuvernöörin-rouva Molander toimittamainsa arpajaisten kautta. 
          V. 1894 lahjoitti seuralle Hämeenlinnan musiikki-yhdistys 195 mk. 19 p.; v. 1896 rouva J. Åkerman lahjoitettaviksi köyhille 510 markkaa, joista vielä on jälellä 209: 45. Vuodesta 1896 alkaen on seura vuosittain saanut vastaan-
          ottaa Blanckin rahastosta korkorahoja noin 550 markkaa. V. 1898 jakoi seura köyhille kaupungissa 3,000 m. jotka tätä varten oli lahjoittanut ent. kauppias Grönfors-vainaja.</p>
        <p>V. 1897 kasvoi seuran työ vieläkin yhdellä toimi-alalla, nim. sopankeittolaitoksen ylläpitämisellä, joka nyttemmin vuosittain kantaa korot <span className="quote">Jenny Costianderin rahastosta</span>. Laitoksen asioita hoitaa 
          6-henkilöinen toimikunta, ja siitä saavat huokealla maksulla, 10 p. litra, köyhät ihmiset hyvää ja sopivaa keittoruokaa, jonka ohessa joukko kansakonluoppilaita (viime vuonna 15) siinä on saanut ilmaiseksi ruokaa yhdeksi 
          ateriaksi päivässä marraskuusta toukokuuhun asti. Sopankeittolaitoksen toimiala ei, johdonmukaisesti, vielä ole mainittuna seuran v. 1873 kolmas kerta uudestaan laadituissa ja nyt voimassa-olevissa säännöissä, vaan on 
          laitoksen noudatettavana vastaiseksi ainoastaan kirjallinen sääntöehdoitus.</p>
        <p>Kuten yllä-olevasta nähdään, on seura 43-vuotisen vaikutuksensa aikana saanut vastaan-ottaa paljon lahjoituksia, mutta tunnustettava on myöskin että se tunnollisesti on niitä käyttänyt määrättyihin tarkoituksiin eikä liioin 
          voimiansa, aikaansa tai vaivojansa säästänyt suorittaakseen hiljaista työtään yleiseksi hyväksi.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Käsityöläis- ja tehdastelija-yhdistys.">
        <br />
        <p className="initialCap">Tämä yhdistys, jonka synty ja ensimäiset vaiheet ansaitsisivat pitemmän kertomuksen kuin tässä voi tulla kysymykseen, tuli perustetuksi v. 1868 elokuun 7 päivänä, ja asetuksen mukaisesti 
          siirrettiin lähimpinä vuosina vanhojen ammattikuntain kassat uuden yhteis-yhdistyksen pohja-rahastoksi. Niinpä esim. suutari-ammattikunnan kassa siirrettiin 49 m. 50 p. suuruisena, karvarien kassa 1,656 m. 77 p:n, 
          puuseppäin 11 m:n, kulta- ja hopeaseppäin 1,379 m. 49 p:n, rautaseppäin 118 m. 82 p:n, vaskiseppäin 523 m. 32 p:n suuruisena käsityöläis- ja tehdastelija- yhdistyksen rahastoon. Mutta useiden ammattikuntain kassain tileistä 
          syntyi oikeuden-käynnit, ja kassasäästöt joutuivat vasta vuosien kuluessa uuden yhdistyksen omaksi. Vaskenvalajain kassanhoitaja esim. eräässä selityskirjassaan valittaa että häneltä oli tullut ammattikunnan kassa. 112 
          markkaa, varastetuksi muutamasta laatikosta, jossa hiin sitä säilytti ja jonka pohjassa oli reikä, eikä hän ollut, sanoo hän, laatikkoa avannut viiteen vuoteen; kun tämä vihdoin tapahtui, olivat rahat, jotka hän lupaa maksaa, 
          kadonneet reiästä.</p>
        <p>Käsityöläis- ja tehdastelija-yhdistyksen kassassa oli tammik. 1 p. 1899 varoja Sm. 17,505: 25.</p>
        <p>Sitä paitse löytyi Aleksanteri H:n stipendirahastosta käsityöläisiä varten tulevassa osuudessa, jota yhdistyksen rahastonhoitaja hoitaa, Sm. 551: 54.</p>
        <p>Yhdistyksen hoidettavaksi joutui v. 1880 myöskin <span className="quote">Hämeenlinnan kisälliyhdistyksen</span> kassa. Tämä yhdistys, joka oli perustettu neljä vuotta sitä ennen, lakkasi näet mainittuna vuonna toimimasta, ja 
          sen varat joutuivat sääntöjen mukaisesti käsityöläis-yhdistykselle. Tässä kisälli-yhdistyksen kassassa on varoja Sm. 2,667: 99 sekä 64 m. 40 p:n arvoinen hopeamalja, jossa on vuosiluku 1824.</p>
        <p>Käsityöläis- ja tehdastelija-yhdistys jakaa vuosittain 2 stipendiä à 300 m. ammatti-opillisia matkoja varten erityisestä stipendirahastosta, jota hoitaa kaupungin rahatoimikamari.</p>
        <p>Aleksanteri II:n stipendirahastosta lähtevää osuutta on käytetty työnantajien käyntiä varten ulkomaisissa näyttelyissä. Niinpä v. 1897 kävi Tukholman näyttelyssä apuvaroilla tästä rahastosta 5 työnantajaa. — Stipendeillä 
          yhdistyksen omista varoista kävi samassa näyttelyssä myöskin 5 työmiestä. Yhdistyksessä on nykyjään 68 jäsentä.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Hämeenlinnan kauppiasyhdistys.">
        <br />
        <p className="initialCap">Lukee alkunsa vuodesta 1881 ja on olemassa asetuksen säätämänä laitoksena, johon osallistuu jokainen palkattujen kauppapalvelijain avulla liikettä harjoittava kauppias. Jäsenmaksu on 6 markkaa 
          vuodelta. Puheenjohtaja: pankintirehtööri A. Bogdanoff. Jäseniä tätä nykyä noin 40. Yhdistyksen varat tämän tilivuoden alussa: 2,016 m. 36 p.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Hämeenlinnan Työväenyhdistys.">
        <br />
        <p className="initialCap">On perustettu v. 1888. Sen säännöt ovat Hämeenläänin kuvernöörin vahvistamat 15 p. jouluk. sanottuna vuonna. Yhdistyksen ensimäisinä puuhaajina ja sittemmin hartaimpina jäseninä voimme mainita 
          turkkuri S. Lindqvist-vainajan, lääninkamreeri G. V. Liukkosen, joka 10 vuotta toimi puheenjohtajana, sekä räätäli J. Erlanderin.</p>
        <p>Yhdistyksen tarkoitus sääntöjen 1 §:n mukaan on olla yhdyssiteenä Hämeenlinnan asukasten kesken edistääkseen työväen parasta sekä henkisessä että aineellisessa suhteessa. Sen hallituksena on johtokunta, johon kuuluu 9 
          henkeä. Näistä eroaa vuosittain 3 kauimmin ollutta, joiden sijalle vuosikokouksessa valitaan uudet. Vuosikokous pidetään tammikuun kuluessa. Johtokunta valitsee keskuudestaan esimiehen, vara-esimiehen ja rahastonhoitajan. 
          Nykyään on esimiehenä räätäli J. Erlander, rahastonhoitajana kirjanpainaja A. V. Leinonen ja kirjurina opettajatar Hilda Eklöf. Yhdistyksen jäseninä oli v. 1899 161 henkeä. Samana vuonna oli yhdistyksellä omaisuutta yhteensä 
          5,663 mk. 62 p. talletettua rahaa sekä irtainta omaisuutta huoneustossaan noin 1,200 mk. arvosta.</p>
        <p>Sitä paitse on johtokunnan huostassa pienempi rahasto <span className="quote">kesäsiirtola-rahaston</span> nimellä. Siihen on saatu säästöpankin johtokunnalta kerta lahjaksi 500 mk. ja kerta 1,000 mk., joten kahtena viime 
        kuluneena kesänä on voitu panna toimeen kesäsiirtola työnaisille.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Hämeenlinnan Eläinsuojelusseura.">
        <br />
        <p className="initialCap">Seuran säännöt vahvistettiin ensimäinen kerta senaatin talous-osastossa huhtikuun 28 p. 1875. Nykyiset säännöt on Hämeenläänin kuvernööri vahvistanut päätöksellä syysk. 8 p:ltä 1891 ja toukokuun 
          4 p:ltä 1894.</p>
        <p>Seura on katsonut parhaiten saavuttavansa tarkoitustaan osaksi esitelmien kautta, osaksi kaikellaisten eläinystävällisten kirjasten, aikakauskirjojen, taulujen y. m. levittämisellä kansan keskuuteen. Näitä on lähetetty, 
          paitsi jäsenille ja yksityisille, poliiseille, kansa- ja muihin kouluihin, lukutupiin, kievareihin, pitäjätupiin, maanviljelyskouluihin, kasarmeihin y. m. paikkoihin, missä on luultu niistä hyötyä olevan.</p>
        <p>Eläinsuojelusasian pääkysymyksiä, niinkuin teurastus-asiaa, pikkulintujen suojelusta ja semmoista on tarkoilleen silmällä pidetty.</p>
        <p>Toiselta puolen on seura suoranaisesti ryhtynyt eläinten puolustajaksi monituisissa tilaisuuksissa, joissa sen apua on tarvittu. Satoja hevosia on markkinoilla korjattu ja kärsimyksistä vapautettu. Ei myöskään ole 
          laiminlyöty juridillista puolta seuran vaikutusalassa, ja niin on moni eläinten rääkkääjä seuran toimesta sakotettu raa'asta teostaan. Ilmiantajalle, joka saattaa syyllisen langettamiseen eläinrääkkäyksestä, maksaa seura 
          10 m:kn palkinnon.</p>
        <p>Jäsenmaksuna maksavat jäsenet joko kerrassaan 25 markkaa tahi vuosimaksuna miehet 2 mk., naiset 1 mk. Useampina vuosina on kaupungin valtuusto myöntänyt seuralle 300 markan raha-avun.</p>
        <p>Seuran vuosikokous pidetään maaliskuun kuluessa. Jäsenien luku v. 1899 on 253, joista kaupungissa 143 (89 m. ja 54 n.) ja maalla 110 (78 m. ja 32 n.). Seuran tulot vuonna 1898 olivat 1,451: 05 ja menot 1,192: 09, joten 
          säästö seuraavaan vuoteen oli 258: 90.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Hämeenlinnan Raittiusseura.">
        <br />
        <p className="initialCap">Perustettiin 16 päivä maaliskuuta v. 1884, lehtorin, nyk. professori A. Genetzin toimesta, joka myös oli sen ensimäisenä puheenjohtajana. Seura alistuu Raittiuden Ystävien alle Helsingissä. 
          Jäsenluku vaihteleva 150:stä vähän päälle 200:n. Nykyään on puheenjohtajana lehtori E. V. Palander, sihteerinä kansak. opettaja K. Reunanen.</p>
        <p>Jäsenten tulee luvata, niin kauvan kuin osastoon kuuluvat, vähintäänkin yhden vuoden ajan olla itse käyttämättä ja muille tarjoomatta ravinto- tai nautinto-aineina minkäänlaisia juovuttavia juomia.</p>
        <p>Jäseniksi yhdistykseen ei saa ottaa 16 vuotta nuorempia, ei viinatehtailijoita eikä -kaupitsijoita, ja on yhdistys oikeutettu, varotettuansa, sulkemaan pois jäsenen, joka rikkoo näitä sääntöjä vastaan tai käytöksellään 
          vastustaa yhdistyksen tarkoitusta.</p>
        <p>Yhteisiä menoja varten tulee jäsenten suorittaa määrätty maksu, jonka yhdistyksen kokouksissa kantaa sitä varten asetettu virkailija. Tämä maksu suoritetaan yhtä suurissa osissa, joko kunkin kuukauden alussa tahi edeltäpäin, 
          korkeintaan 12 kuukauden maksut kerralla. Toimikunta on oikeutettu kokonaan tahi osaksi vapauttamaan köyhiä jäseniä maksusta. Kaikilla jäsenillä on sama äänestysvalta.</p>
        <p>Jos jäsenluku alenee kymmentä vähemmäksi, lakkaa yhdistys semmoisena toimimasta, josta on päätoimikunnalle ilmoitus annettava. Uusia yhdistyksiä voi tämä yhdistys synnyttää sillä lailla, että vähintäin kymmenen jäsentä 
          keskenänsä suostuu uuden yhdistyksen muodostamisesta ja hankkii säännöillensä päätoimikunnan hyväksymisen.</p>
        <p>Raittiusseura pitää kokouksiaan vuokratussa huoneustossa leht. Gadd'-vainajan talossa, jossa Seura myös hoitaa kestikievaria nimellä <span className="quote">Raittiusravintola</span>. Jäsenmaksu on 10 p. kuukaudelta. 
          Varattomat eivät maksa mitään.</p>
        <p>Raittiusseuralla on Raastuvankadun varrella oma talo, jonka se kuitenkin on vuokrannut pois yksityisille. Talon arvo 19,000 mk.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Hämeenlinnan Nuorisoseuran">
        <br />
        <p className="initialCap">Ensimäinen perustava kokous pidettiin Työväenyhdistyksen huoneustossa marrask. 22 p. 1897. 2:nen perustava kokous oli raittiusravintolassa marrask. 28 p. 1897. Perustajina olivat ylioppilas K. 
          Reunanen (myös puheenjohtaja), yliopp. Severi Alanne (sihteerinä), neidet Alma Villgrön ja Hilja Lindberg sekä nahkuri Kyösti Nefling ja kauppias H. Helenius.</p>
        <p>Tammikuun 8 päivänä 1898 sai seura sääntönsä vahvistetuiksi Etelä-Pohjanmaan nuorisoseuran kautta, josta se muodostaa haara-osaston.</p>
        <p>Ensimäinen vakinainen kuukausikokous pidettiin tammik. 28 p. 1898.</p>
        <p>Haaraosastoja seurassa ovat:</p>
        <p><span className="bold">Seuran Ompeluseura</span> perustettu 9/9 1898</p>
        <p><span className="bold">Puhuja-seura</span> perustettu 12/9 1898</p>
        <p><span className="bold">Urheilu-osasto</span> perustettu 1/6 1899</p>
        <p><span className="bold">Sekakööri</span> perustettu 16/9 1899</p>
        <p>Seuran jäsenluku on 18/12 1899 276 henkeä. Seuran varallisuus noin 1,200 markkaa.</p>
        <p>Seura on vastakkoin perustanut oman lukutuvan, jossa on sanomalehtiä ja uudempaa kirjallisuutta.</p>

      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Hämeenläänin Metsästysseura.">
        <br />
        <p className="initialCap">Hämeenläänin Metsästysseuran säännöt hyväksyttiin ja vahvistettiin ensimäinen kerta senaatin talous-osastossa 24 p. tammik. v. 1873. Seuran tarkoitus on alusta, alkaen ollut metsästyslakia 
          tarkoin noudattamalla ja vahingollisia petoeläimiä hävittämällä koettaa edistää hyödyllisen metsäriistan yhä runsaampaa karttumista. Ampumaharjoituksia ja yleisiä kilpa-ampumisia toimeenpanemalla on seura koettanut 
          kasvattaa taitavia ja kiväärin käyttämiseen kykeneviä metsästäjiä. Sittemmin päätti seura järkiperäisen metsänriistan-hoidon ylläpitämiseksi vuokrata jäsenilleen metsästysmaita, joita seuralla nykyään onkin koko laajalti, 
          niinkuin Luolajan, Miemalan, Ojoisten, Eteläisten, Kokkilan ja Juntulan kylien maat. Kun seuran tarkoitus täten laajennettiin, oli sääntöjen muuttaminen välttämätön, ja uudet säännöt vahvisti Hämeenläänin kuvernööri 
          marraskuun 10 p. v. 1896.</p>
        <p>Erittäinkin petoeläinten hävittämisessä on seuran vaikutus läänissä ollut suuresta merkityksestä, ja kun sudet pari vuosikymmentä sitten lapsia ryöstämällä herättivät kauhua kautta Suomen niemen, tuli seura kuuluisaksi 
          sangen pontevasti ja suurella menestyksellä ottamalla osaa niiden hävittämiseen. Petoeläinten hävittämistä varten on seura aikoinaan nauttinut 600 markkaankin nousevaa vuotuista raha-apua valtiolta.</p>
        <p>Uuden metsästyslain voimaan astuttua ei tätä apua, yhtä vähän kuin muillekkaan maamme metsästysseuroille, enää ole annettu, koska kunnat nyttemmin itse suorittavat tapporahoja vahingollisimmista petoeläimistä. Tästä 
          huolimatta maksaa seura yhä edelleen tapporahaa varpuishaukasta 1 mk. ja sen poikasesta 25 p., hiirihaukasta 50 p. ja sen poikasesta 25 p., muuttohaukasta ja tunturipöllöstä 1 mk. Näistä eläimistä eivät näet kunnat ole 
          velvoitetut tapporahaa maksamaan.</p>
        <p>Jäsenmaksun suorittavat jäsenet joko kerrassaan 40 mk. tahi vuosittain 4 mk., jota paitsi metsästysmaita varten voidaan jäseniltä vuosittain taksoittamalla kantaa korkeintain 20 markan lisämaksu. Jäsenten luku v. 1899 on 
          33. Seuran tulot v. 1898 olivat 498: 85 ja menot 196: 58, joten säästö seuraavaan vuoteen oli Smk. 302: 27.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Hämeenläänin Hevosystäväin yhdistys,">
        <br />
        <p className="initialCap">Joka lukee alkunsa vuodesta 1869, pitää tarkoituksenaan <span className="quote">kannattaa harrastusta maamme hevoshoidon edistämisessä ja suomalaisen hevosrodun parantamisessa sekä koettaa 
          valaista yleisön käsitystä siitä, että hevosta on lempeydellä kohdeltava</span>. Yhdistys toimeenpanee kilpa-ajoja, nuorten hevosten ja varsain näyttelyitä ja jakaa varojensa mukaan niissä palkintoja. Pitää myöskin huolta 
          valtion kilpa-ajoista. Varoja viime tilivuoden lopussa Sm. 1,019: 90. Vakinaisia jäseniä nykyään 25, vuosijäseniä 61. Yhdistyksen puheenjohtaja: maanviljelijä J. R. Vuolijoki (Hauholla), varapuheenjohtaja ja sihteeri kauppias 
          W. C. Wilhelmsson.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Hämeenlinnan Säästöpankki (Sparbanken i Tavastehus)">
        <br />
        <p className="initialCap">Lukee perustuksensa joulukuun 8 p:stä 1843. Silloin näet kirkkoherra Mathias Churberg useiden henkilöiden kehoituksesta pani kiertämään listan pohjarahaston perustamista varten. Listassa 
          pyydettiin joko a) lahjaa taikka b) korotonta lainaa 10 vuodeksi.</p>
        <p>Ensimäisenä merkitsi listaan vapaahra O. Rehbinder 10 hopearuplaa lahjaksi, joukko muita henkilöitä vähempiä määriä. Yhteensä merkittiin lahjaksi 156 ja lainaksi 50 ruplaa. Merkitsijöitä oli kaikkiaan 45 henkilöä, jotka 
          muodostivat pankin ensimäisen isännistön. Tuli sitten ajan pitkään muutamia lahjoja lisäksi, niin että kesäk. 13 p. 1846 oli pohjavaroja 223 ruplaa ja korkoja 138 r.</p>
        <p>Ensimäiset säännöt ovat huhtik. 18 p:ltä 1846. Ensimäisenä johtokuntana olivat: O. Rehbinder (puheenjohtaja), Math. Churberg, A. T. Sandberg, C. Z. Schultz, J. K. Gustafsson, O Ahlbom, O. G. Utter, G. A. Ekholm, C. J. 
          Collin, J. F. Lönnholtz ja H. Holm.</p>
        <p>13/6 1846 - 1/1 1848 olivat varat lisääntyneet niin, että tallentajilla oli saatavaa pääomaa ja korkoa 2,987 rupi. 34 kop. 1855 v:n lopulla oli pääoma 12,828 r. 4 kop., 1856 v:n lopussa 18,398 r. ja 1857 v:n lopussa 
          22,210 r. 84 k.</p>
        <p>Johtokunnan kokouksessa maaliskuun 12 p:nä 1856 luopui vapaahra Rehbinder puheenjohtaja-toimesta nousten tuoliltaan (»och reste sig från sätet»), ja puheenjohtajaksi valittiin maakamreeri Nordensvan. Oli näet syntynyt 
          selkkauksia laitoksen hoidossa, ja pankin sihteeri ja kamreeri, vankilansaarnaaja O. Churberg, joutunut vähän ahtaalle. Tämmöisenä virkailijana pankissa oli Churberg kuitenkin vielä v. 1869.</p>
        <p>Mutta mainittuna ja vielä seuraavanakin vuonna 1870 oli säästöpankki, varojen hoidossa tapahtuneiden varomattomuuksien vuoksi, kovassa ahdinkotilassa, ja vararikko olisi kenties syntynyt, joll'ei iso joukko tallettajia 
          olisi luopunut saatavistaan koroista ja sitoutunut olemaan vastaiseksi vaatimatta pois talletuksiaan. Kamreeriksi valittiin tällöin varalääninkamreeri Aug. Rydman, joka pysyi siinä toimessaan vuoteen 1876 saakka, jolloin 
          kamreeriksi tuli lääninkirjuri L. Peterson. Vuodesta 1880 on pankin kamreerinvirkaa hoitanut varalääninsihteeri F. W. Schrey.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kaupungin Yksityinen apu- ja eläkerahasto.">
        <br />
        <p className="initialCap">Tämä laitos perustettiin v. 1863. Sen kanta-varasto oli 31 p. Jouluk. 1898 Smk. 101,538: 85. Ensimäiset eläkkeet maksettiin jo v. 1873 kahdelle leskelle ja erään osakkaan lapsille. Nämä lapset 
          ja yksi leskistä nauttivat vieläkin vuotuista eläkettä. 35 vuoden kuluessa on 25 jäsentä poistettu rahastosta, syystä etteivät ole suorittaneet vuosimaksujaan. Kolmen perheen jäsenet ovat kaikki kuolleet, kahden ovat 
          luovuttaneet eläkkeensä rahaston hyväksi.</p>
        <p>Tappiota on rahasto tullut kärsimään ainoastaan kaksi kertaa, nimittäin vuonna 1871 1,410 mk. 95 p., kun säästöpankki ei maksanut mitään korkoa vuosilta 1869 ja 1870, ja v. 1891 erään vararikon kautta 4,044 mk. 25 p., eli 
          yhteensä Smk. 5,455: 20.</p>
        <p>Rahastonhoitajina ovat olleet vv. 1863—1873 hra O. R. Grönholm, 1874—1877 hra J. F. Grönlund ja vuodesta 1878 hra J. J. Jägerroos. Nykyään on rahastossa 76 jäsentä, joista 57 maksavaa ja 17 eläkettä nauttivaa sekä 2, jotka 
          eivät vielä ole täyttäneet 65 vuotta. Rahaston sääntöjä on muutettu kaksi kertaa, nimittäin ensi kerran v. 1885 ja toisen kerran 1898.</p>
        <p>Laitokseen osallisiksi oikeutettuja ovat kaikki Hämeenlinnan kaupunkiin kuuluvat hyvämaineiset mies- ja naishenkilöt, jotka sitoutuvat laitoksen kassaan suorittamaan ennenkuin ovat täyttäneet 40 ikävuotta. Ne, jotka 40 
          vuotta täyttäneinä laitokseen pyrkivät, maksavat 25 % korotuksen ja 45 vuotta täyttäneinä 50 % korotuksen.</p>
        <p>Siis on edullisinta tulla laitokseen hyvin nuorena eikä ainoastaan siitä syystä, että nuorena pääsee vähemmillä maksuilla, vaan silloin osakas tulee myös pikemmin vapaaksi maksuista, jotka usein ovat vaikeat täyttää hänen 
          tullessaan vanhaksi ja työhön kykenemättömäksi.</p>
        <p>Osakas, joka on täyttänyt 65 vuotta ja suorittanut velvollisuutensa, on oikeutettu nauttimaan eläkettä</p>
        <p className="quotation">l:ssä luokassa 600 markkaa vuosittain</p>
        <p className="quotation">2:ssa luokassa 360 markkaa vuosittain</p>
        <p className="quotation">3:nnessa luokassa 240 markkaa vuosittain</p>
        <p className="quotation">4:nnessä luokassa 150 markkaa vuosittain</p>
        <p className="quotation">5:nnessä luokassa 90 markkaa vuosittain</p>
        <p>Osakas, joka kivulloisuuden takia tahi tunnettujen tapaturmien kautta on joutunut semmoiseen tilaan, ettei hän kykene itseänsä elättämään, on oikeutettu saamaan kassasta apua kivulloisuutensa tai häviötilansa aikana.</p>
        <p>Jos osakas kuolee ennenkun on ollut kaksitoista vuotta osallisena laitoksessa, tulee jälkeenjääneiden maksaa sanottuun aikaan asti määrätyt vuosimaksut, jonka jälkeen he saavat puoli eläkettä, josta kuitenkin vuosittain 
          vähennetään vuosimaksut, siksi kuin kaksikymmentäneljä vuotta on kulunut siitä kun vainaja tuli osalliseksi laitoksesta, jonka jälkeen koko eläke maksetaan leskelle tai lapsille. Tämäkin seikka kehoittaa pyrkimään laitokseen 
          niin nuorena kuin mahdollista.</p>
        <p>Eläkettä ei saa takavarikkoon ottaa eläkkeensaajan velkain maksamiseksi. Osakas sekä hänen leskensä tahi lapsensa, jotka muuttavat toiseen seurakuntaan, ovat kuitenkin osallisia tässä laitoksessa.</p>
        <p>Pohjarahasto ei saa koskaan tulla käytetyksi. Sitä lisätään sisäänpääsymaksuilla, lahjojen ja testamenttivarojen kautta, niillä jäännöksillä, jotka syntyvät kassaan sitten kun kaikki vuosimenot on suoritettu, sekä tilapäisten 
          tulojen kautta. Jos pohjarahasto syystä tai toisesta vähenee, täytetään vajaus vuosimaksuista.</p>
        <p>Eläkkeet suoritetaan koroista ja vuosimaksuista. Joll'eivät nämä riitä, vähennetään eläkkeet itsekultakin suhteellisesti eläkemäärän mukaan.</p>
        <p>Osalliset sekä heidän leskensä ja lapsensa, jotka kuuluvat laitokseen vanhemman ohjesäännön mukaan, pysytetään velvollisuuksissaan ja oikeuksissaan mitä tulee sisäänmaksuihin ja eläkemääriin, mutta tulee heidän muuten 
          noudattaa uusia vahvistettuja sääntöjä.</p>
        <p>Laitosta hoitaa toimikunta, jossa on yhdeksän jäsentä, jotka osakkaat vuosikokouksessa valitsevat; johtokunta on vastuunalainen mahdollisesti syntyvistä vahingoista. Eläkkeet maksetaan vuosittain joulukuun keskivaiheilla, 
          josta aina lähemmin ilmoitetaan sanomalehdissä. Varsinainen yleinen vuosikokous pidetään vuosittain maaliskuulla.</p>
        <p>Laitosta koskevien kysymyksien ja asiain päättämisessä on jokainen osakas, huolimatta hänen kassaan tekemiensä maksujen määrästä, oikeutettu itse tai valtuutetun osakkaan kautta ottamaan päätöksiin osaa ainoastaan 
          yksinkertaisen äänilaskun mukaan.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Hämeenlinnan vapaaehtoinen palokunta.">
        <br />
        <p className="initialCap">Tämä hyödyllinen laitos, joka on laatuaan vanhimpia maassa, lukee perustuksensa maalisk. 30 päivästä 1873, jolloin kaupungin silloinen palomestari, kauppias J. J. Jägerroos, oli kutsunut asiaa 
          harrastavia kaupunkilaisia kokoontumaan raatihuoneen saliin. Kokoukseen saapui noin 40 henkeä, jotka päätvät perustaa vapaa-ehtoisen palosammutuskunnan vakinaiselle palokunnalle avuksi. Uuden laitoksen päälliköksi valittiin 
          polttimomestari K. P. Doll ja varapäälliköksi proviisori A. Nordfors. Saatuaan ensiksi vähän kalustoa käytettäväkseen vakinaiselta palokunnalta, rupesi kunta iltahuvien, arpajaisten ja keräysten kautta puuhaamaan itselleen 
          varoja oman kaluston hankkimista varten. Ja hyvällä menestyksellä. Kertyi rahoja ja niillä kalustoa, jota säilytettiin raatihuoneen talon liiterissä. 1873 vuoden lopussa oli palokunnassa jo neljä komppaniaa, joiden 
          päällikköinä olivat polttimomestari A. Tamelander, leipuri O. Gustafsson, satulaseppä J. Forsgren ja kelloseppä F. Lund. Proviisori Nordforsin muutettua pois syksyllä 1873, valittiin varapäälliköksi kelloseppä Lund, jonka 
          sijaan tuli komppaniapäälliköksi rautatienkirjuri A. Ahlroth. Samana syksynä valittiin palokunnan asioita hoitamaan toimikunta, jonka puheenjohtajaksi tuli lääninsihteeri O. Idestam.</p>
        <p>Ensimäinen tulipalo, jossa palokunta sai kykyänsä näyttää, tapahtui syysk. 10 p. 1873 Hämeensaarella.</p>
        <p>Ensimäisessä yleisessä kokouksessa toukok. 11 p. 1874 jaettiin kunta kahteen osastoon, sammutus- ja pelastus-osastoon, kumpikin 2:lla komppanialla. Kunnan päälliköksi valittiin samassa tilaisuudessa lääninsihteeri Idestam, 
          sammutusosaston päälliköksi polttimomestari Doll ja pelastusosaston päälliköksi kelloseppä Lund. Jäsenluku kunnassa oli silloin 91. Tunnusmerkkinä käytettiin sammutusosastossa keltaista ja pelastusosastossa punaista nauhaa 
          lakissa.</p>
        <p>Ensimäinen vuosijuhla vietettiin kesäkuun 14 p. 1874 kaupungin puistossa harrastavalla osanotolla yleisön puolelta. Juhlapuheen piti maisteri O. Borg. Juhlalipun, jota vieläkin käytetään, oli kunta saanut kaupungin naisilta.</p>
        <p>1874 vuoden kuluessa tapahtui ainoastaan kaksi vähäpätöistä tulipaloa. Jäsenluku oli noussut 150:een. Lauluseura, jonka johtajaksi ryhtyi kellosppä Lund, oli muodostunut kunnan keskuudessa.</p>
        <p>Vuosikokouksessa huhtik. 13 p. 1875 hyväksyttiin palokunnan säännöt, jotka erityinen komitea oli laatinut. Puvuksi hyväksyttiin valkoinen mekko värillisine kauluksineen ja hihansuineen. Päällikön ja varapäällikön merkiksi 
          tuli keltapunainen nauha. Sammutusosastoon päätettiin perustaa yksi komppania lisää pelastetun tavaran vartioimista varten. Muiden komppaniain tehtävät määrättiin säännöissä seuraavalla tavalla: I käyttää ruiskuja, II 
          hajoittaa tarvittaessa huoneita, III sijoittaa tikapuita ja palopurjeita, IV pelastaa vaaraan joutuneita ihmisiä ja tavaraa.</p>
        <p>Samana vuonna hankittiin kunnan keltapunainen lippu sekä eri liput kummallekkin osastolle. Kalustoa lisättiin niinikään huveista ja arpajaisista kertyneillä varoilla.</p>
        <p>Kesäkuun 7 p. samana vuonna 1875 oli palokunta sammuttamassa tulipaloa Ojoisten virkatalossa ja sai urheudestaan tässä tilaisuudessa talon haltialta, katteini F. Kuhlefelfiltä, rahasumman. Joulukuussa sai kunta ankarasti 
          taistella Linnaniemen sahan palossa.</p>
        <p>Syksystä samana vuonna vuokrattiin huoneusto, jossa palokuntalaiset saivat lukea sanomalehtiä.</p>
        <p>Vuosijuhlassa 1876 annettiin kelloseppä Lundille, joka väsymättömällä uutteruudella oli järjestänyt palokunnan lauluseuran, kallisarvoinen hopeakannu.</p>
        <p>Tammikuusta samana vuonna oli toimeenpantu yövartioiminen kalustohuoneella. Kuntalaisista oli vuorotellen kaksi joka yö tässä toimessa. Reippaudestaan tulipalossa joulukuun 28 p. kauppias F. Kiutun talossa sai palokunta 
          ensimäisen kerran rahapalkinnon, 200 m:kaa, kaupunkien paloapuyhtiöltä irtaimistoa varten.</p>
        <p>1876 vuoden alusta oli V. P. K:n kalusto sijoitettuna kaupungin kalustohuoneesen. Samana vuonna perustettiin myös lainakirjasto, jota varten hra A. Axeen lahjoitti lähes 200 nidosta.</p>
        <p>Vuosikokouksessa maalisk. 31 p. 1878 päätettiin antaa kelloseppä F. Lundille, joka uutteruudella oli hoitanut kirjastoa ja myöskin ollut laulun ja soiton johtajana, palkkioksi 200 markkaa. Tässä kokouksessa esiintyi 
          ensimäisen kerran kunnan septetti, jota varten entisen Hämeenlinnan tarkkampuja-pataljoonan varastosta oli ostettu muutamia torvia ja nuottikirjoja. Vapunpäivänä samana vuonna kävi kunta puistossa ensimäisen kerran 
          soittokuntansa soittaessa.</p>
        <p>Syyskuun 11 p. 1878 aamulla kävi palokunta toivottamassa onnea päälliköllensä lääninsihteeri Idestam'ille, joka silloin täytti 50 vuotta, lahjoittaen hänelle kallisarvoisen kultakellon. Puheen kunnan puolesta piti tässä 
          tilaisuudessa maisteri A. W. Lindgren.</p>
        <p>Seuraavien vuosien tapahtumista mainittakoon tässä:</p>
        <p>V. 1883 kesäkuussa vietti V. P. K. kymmenennen vuosijuhlansa.</p>
        <p>1884 hankittiin nahkaisia kaskia päähineiksi. Samana vuonna vahvistettiin senaatissa ensimäiset yleiset säännöt.</p>
        <p>1886 tammikuussa kuoli kunnan varapäällikkö, polttimomestari Doll. Koko palokunta saattoi hänet hautaan.</p>
        <p>Vuosijuhlassa 1889 jaettiin kunniamerkkejä 17 jäsenelle 15 vuoden ja 30 jäsenelle 10 vuoden palveluksesta. Sen jälkeen on näitä merkkejä jaettu joka vuosi, niin että niitä jo on saanut toista sataa henkeä.</p>
        <p>Vuodesta 1891 kuuluu sammutusosastoon 4 ja korjausosastoon 3 komppaniaa. Samana vuonna otettiin käytäntöön tummanvärisiä kuntapukuja.</p>
        <p>1892 saatiin kaupungin Valtuusmiesten ja kaupunkien Yleisen paloapuyhtiön lahjoittamilla rahoilla hankituksi lähes 4,000 markan maksava voimakas vedenimukone siihen kuuluvine tarpeineen.</p>
        <p>Vuosikokouksessa 1892 tapahtui muutos palokunnan ylijohdossa. Lääninsihteeri Idestam, joka melkein palokunnan perustamisesta asti oli ollut sen päällikkönä, joutui jäsenten riveissä syntyneiden rettelöiden takia pois tästä 
          toimestaan. Kiitollisuuden osoitukseksi siitä taitavuudesta ja väsymättömästä innosta, jolla lääninsihteeri Idestam oli ohjannut palokuntaa, kutsuttiin hän sen ensimäiseksi kunnia-jäseneksi. Kunnan-päälliköksi valittiin 
          oikeusneuvosmies Hjalmar Sundel.</p>
        <p>Syksyllä 1893 perustivat muutamat palokuntalaiset urheilu-seuran, joka kilpailujen ja huvien toimeenpanemisella on pitänyt erittäinkin talvi-urheilua vireillä miehistön kesken ja hankkinut varoja rahastoon.</p>
        <p>Palokalusto, johon vähitellen oli hankittu m. m. uudet ajanmukaisemmat purjeet, hakatikapuut, tukevat paloha'at, kirveet ja kahdet keveät kalustorattaat, lisääntyi vuonna 1896 kolmannella ruiskulla, joka maksoi noin 1,800 
          markkaa ja jonka hinnasta suurin osa on suoritettu Kaupunkien Yleiseltä Paloapuyhtiöltä saaduilla rahoilla. Tältä yhtiöltä on palokunta vuosien kuluessa saanut kaluston hankkimista varten yhteensä Smk. 4,150:-. Muutamilta 
          muilta paloapu- ja vakuutus-yhtiöiltä on palokunta samoin saanut lahjaksi yhteensä Smk. 1,350:-.</p>
        <p>Lähtiessään paikkakunnalta helmikuussa 1896 lahjoitti kuvernööri salaneuvos Torsten Costiander 1,000 markkaa käytettäviksi palokunnalle hyödyllisiin tarkoituksiin.</p>
        <p>Kaupungilta on palokunta vuodesta 1878 alkaen saanut joka vuosi raha-apuja, pääasiallisesti lukusalin ja kirjaston kannattamista varten, yhteensä noin 20,000 markkaa.</p>
        <p>Vähitellen oli huveilla ja lahjoituksilla koottu rahoja oman talon rakentamista varten, ja 1892 v. alussa oli rakennusrahastossa noin 8,360 markkaa. Jo kesäkuussa 1889 oli valittu rakennus-toimikunta, joka oli ryhtynyt 
          alusteleviin toimiin asiassa. Sen esimiehenä oli ensin lääninsihteeri Idestam ja hänen erottuaan 1892 kauppias W. C. Wilhelmson. 1891 saatiin rakennuspaikaksi kaupungin omistama raatihuoneen tontin rannanpuoleinen osa. 
          Rakennuspiirustukset valmisti lääninarkkitehti A. Cavéen. 1892 ryhdyttiin perustus-töihin ja elokuun 4 p:nä samana vuonna laskettiin juhlallisesti rakennuksen perustuskivi. Katonharjaiset vietettiin huhtikuun 29 p:nä 1893. 
          Seuraavan kesäkuun 1 p:nä muutti palokunta sisään kalustoineen kapineineen. (Palokunta oli siihen asti <span className="quote">asunut hyyryllä</span> yhdeksässä eri paikassa kaupunkia). 1893 elokuun 20 p:nä vihittiin 
          juhlallisesti talo vietettäessä riemujuhlaa palokunnan 20 vuoden olemassa-olon johdosta. Rakennuskustannuksien korvaamiseksi olivat kaupungin Valtuusmiehet lahjoittaneet yhteensä noin 32,630 mk. ja myöntäneet palokunnalle 
          20,000 markan suuruisen kuoletuslainan. Kustannuksien koko määrä nousi siis noin 61,000 markkaan.</p>
        <p>Antamassaan velkakirjassa kaupungille oli palokunta sitoutunut, paitsi koron maksamiseen, vähentämään velkaa tuhannella markalla vuodessa, ehdolla että rakennus muuten joutuisi kaupungin omaksi. Palokunta ei kyennyt 
          suorittamaan vähennysmaksua muuta kuin kahdelta vuodelta, jonka tähden kaupungin valtuusmiehet eräässä kokouksessa vuonna 1897 päättivät ottaa rakennuksen haltuunsa. Nyttemmin ovat valtuusmiehet poistaneet kaupungin 
          tilikirjoista koko jäljellä olleen velan, 18,000 markkaa. Palokunta saa toistaiseksi käyttää tarpeelliset huoneustot rakennuksessa.</p>
        <p>Jälkeen v. 1876 on palokunta ollut avullisena noin 30 kaupungin ja sen ulkopuolella tapahtuneen tulipalon sammuttamisessa.</p>
        <p>Heinäkuun 3 p. 1898 vietti palokunta suurilla juhlallisuuksilla kaupungin puistossa 25-vuotisen olemassa-olonsa muistoa.</p>
        <p>Huhtikuussa 1898 erosi oikeusraatimies Hjalmar Sundel kunnan päällikkötoimesta, ja valittiin hänen seuraajakseen pankinjohtaja K. Backmansson. Varapäällikkönä on kauppias W. C. Wilhelson. Kunniapäällikkönä lääninsihteeri O. 
          Idestam, kunniajäsenenä kauppias J. J. Jägerroos.</p>
        <p>Vap. palokunnan jäsenluku on nykyään 219.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Telefooni.">
        <br />
        <p className="initialCap">Telefooni-yhdistys syntyi täällä kesäk. 4 p. 1884. Sitä ennen oli ainoastaan yksi lanka löytynyt, nim. <span className="quote">Riga</span>-nimisestä hotellista kauppias A. Bogdanoffin puotiin. 
          Telefooni-yhdistys muodostui yhtiöksi ja sai oikeutensa marrask. 9 p. 1893, 200:lle osakkeelle à 100 m. Apparaateilla varustettuja osallisia on tällä haavaa 198.</p>
        <p>Osallismaksu on 100 markkaa, jota paitse suoritetaan vuosimaksua 30 à 40 m. Apparaatit maksavat 75—125 m.</p>
        <p>Hämeenlinnan telefooni-verkko, jonka sentraalissa palvelee 6 henkilöä, on suoranaisessa yhteydessä Helsingin, Tampereen, Leppäkosken, Iittalan, Hattulan, Hauhon, Lammin, Orimattilan ja Urjalan keskusasemien kanssa, mutta 
          välillisessä yhteydessä koko <span className="quote">Etelä-Suomen kaupunkien välisen telefooniverkon</span> kanssa. Pisin taipale, jonka päähän Hämeenlinnan yhtiön lanka ulottuu, on 9 kilometriä (Lahdentakaan Tyrvännössä).</p>
        <p>TAKSA puhelusta allamainittuihin paikkakuntiin on seuraava:</p>
        <Image className="centeredImageStyle" src={img16} alt="Puheluhinnat"/>
        <p>Puheluaika on neljä minuuttia. Kiireiset puhelut maksavat kaksinkertaisesti ja toimitetaan etuoikeudella.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kauppa ja teollisuus, laivakulku ja rautatieliike.">
        <br />
        <p className="initialCap">Kuten ylempänä on kerrottu, ei Hämeenlinnassa vielä v. 1831 ennen silloista tulipaloa harjoitettu mitään laivakulkua, ei myöskään löytynyt mitään tehtaita tai senkaltaisia laitoksia. Liikettä 
          välittivät ainoastaan maantiet sekä vesistöllä vähäpätöiset purjeroomut, jotka enimmäkseen vain kuljettivat lautoja Walkeakosken ja Hämeenlinnan välillä. Ennen vuotta 1867 ei ollut olemassa mitään paikkakunnallista 
          höyryalusta. Mutta lähimpinä kesinä sitä ennen oli kaksi pienempää venäläistä kruunun propelli-höyryalusta, <span className="quote">Udatscha</span> ja <span className="quote">Strjela</span> käynyt merkitsemässä laivareittiä 
          niin pitkälle pohjoiseen kuin pääsivät. Ja tämän johdosta muodostui v. 1866 <span className="quote">Wanajavesi ångbåtsbolag</span> niminen yhtiö. Sen toimeen-panijana oli Laukon kartanon omistaja, tuomari Adolf Törngren, joka 
          muutenkin on tunnettu tienraivaajana monelle uudelle yritykselle maassamme. Yhtiö vuokrasi nyt Strjela-laivan, jota Wenäjän kruunu ei enää tarvinnut, ja rupesi sillä välittämään pienempää matkustajaliikettäkin pohjoseen päin, 
          kunnes se myöhemmin vietiin kokonaisena pois rautatiellä ja joutui kenraalikuvernöörin huvilaivaksi Suomenlahdelle. Sitä ennen oli laiva-yhtiö <span className="quote">Tammerfors jernmanufaktur-aktiebolag</span> nimiseltä 
          yhtiöltä tilannut uuden höyrylaivan, joka sai nimekseen <span className="quote">Wanaja</span> ja keväällä v. 1867 rupesi välittämään liikettä Hämeenlinnan ja Lempoisten välillä. Se oli pyörälaiva ja sen höyrykone 30 
          hevosvoimainen. Laivan kuljettaminen Kuokkalan koskesta ylös oli aika urostyö. Jo sitä ennen oli <span className="quote">Lönnrot</span>-laiva kulkenut Tampereen ja Lempoisten väliä. Liikettä Lempoisten virstan-pituisen 
          kannaksen ylitse välitettiin tietysti hevosilla. Kanavaa ruvettiin hätä-aputyönä rakentamaan vasta v. 1867. Samana kovana katovuonna oli tavaraliike Hämeenlinnan ja Tampereen välillä kuitenkin jo hyvin vilkas, vaikka hevosella 
          kuljettava kannas sitä hidastutti. Niinpä m. m. tätä väliä kuljetettiin laivoilla sinä yhtenä vuonna noin 40,000 jauhomattoa — matkalla pohjoseen päin. <span className="quote">Wanajan</span> asiamiehenä oli kaupp. J. J. 
          Jägerroos.</p>
        <p>V. 1870 rakennutti yhtiö Hämeenlinnassa, lehtori M. Gadd'in ollessa sen toimeenpanevana tirehtöörinä, uuden laivan, joka sai nimekseen <span className="quote">Roine</span> ja oli noin 15 hevosvoimainen propelli-alus. Silläkin, 
          joka myös kulki Hämeenlinnan ja Lempoisten väliä, oli tointa yllin kyllin. Ja kun Lempoisten kanava, työn aika ajoittain seisottua, vihdoin v. 1873 valmistui ja avattiin liikenteelle, rupesi useita vieraitakin laivoja käymään 
          Hämeenlinnassa lisäten liikettä paikkakunnalla, jonka ohessa tietysti hämeenlinnalaiset laivat kävivät Tampereella ja pohjoisempanakin Lehtori Gadd oli myös rakennuttanut kaksi pienempää höyrypurtta paikallisliikettä 
          varten, <span className="quote">Alku</span> ja <span className="quote">Jatko</span>.</p>
        <p>Mutta kun kesäkuussa v. 1876 H:linnan-Turun-Tampereen rata-osa luovutettiin liikenteelle, loppui tämä vilkas höyrylaivaliike täällä kuni kerrassaan. <span className="quote">Wanaja</span> myötiin Reposaarelle 
          Pohjanlahdessa, <span className="quote">Roineesta</span> otettiin kone pois ja muunnettiin rovi roomuksi, joka vieläkin on liikkeellä Valkeakosken ja Hämeenlinnan välillä, ja <span className="quote">Elias Lönnroot</span>, jonka 
          yhtiö myös oli ostanut, myötiin niinikään.</p>
        <p>Nyttemmin välittävät täällä säännöllisesti pientä paikallisliikettä lähimmällä vesistöllä ainoastaan pienet höyryalukset <span className="quote">Urho</span> ja <span className="quote">Veikko</span> sekä 
          maitolaiva <span className="quote">Toimi</span>. Nämä ovat hämeenlinnalaisia aluksia. Hinaaja-alukset Valkeakoskelta ja Pälkäneeltä tuovat melkoisen paljouden kauttakulku-tavaraa rautatielle.</p>
        <p>Helsingin—Hämeenlinnan rautatie, ensimäinen maassa, oli avattu vakinaiselle liikkeelle maaliskuun 17 p. 1862 ja tietysti suuressa määrin kohottanut tämän paikkakunnan liikemerkitystä, joka sitten höyrylaivaliikenteen 
          aljettua yhä enemmän kohosi. Mutta mainittujen Hämeenlinnan Turun-Tampereen rata-osien valmistuttua alenivat tulot Hämeenlinnan rautatieasemalla noin puolella entisestä ja Tampere vei melkoisen osan siitä kaupastakin, joka 
          ennen oli kohdistunut Hämeenlinnaan.</p>
        <p>Että kauppaliike paikkakunnallamme kuitenkin, jos otetaan alkuvuodeksi mainittu rautatienjatko-vuosi 1876, jolloin liike täällä sai alkaa ikääskuin uudestaan, on ollut yhä kohoamassa ja lisääntymässä, sen todistavat sekä 
          vuosi vuodelta kasvavat tulot Hämeenlinnan rautatie-asemalla että tullitulot.</p>
        <p>Tila ei tässä myönnä vertailevan taulun julkaisemista, joka osoittaisi kuinka paljon kutakin tavaraa Hämeenlinnan asemalta viedään ja siihen tuodaan muiden asemain liikemäärän suhteen, jonka tähden tässä kohden viittaamme 
          viralliseen rautatietilastoon. Siitä käy m. m. ilmi että Hämeenlinnan asema, useiden vientitavarain, kuten muutamain maanviljelykseen kuuluvain tavaralajien ja varsinkin puutavarain, kannalta katsottuna seisoo asteikon 
          ensimäisten joukossa Helsingin-Hämeenlinnan-Pietarin rautatiellä. Samoin useiden tuontitavarain kannalta katsottuna.</p>
        <p>Ilman vertailua muihin asemiin mainitsemme tässä v. 1898 Hämeenlinnan asemalta lähetettyjen ja siihen tulleiden päätavaralajien painomäärät tonneissa merkitsemällä lähetetyn tonnimäärän ensiksi ja tulleen tonnimäärän 
          sulkumerkkeihin:</p>
        <p>I. Ruista läh. 108 (tuli. 1,303), kauraa 158 (226), ohraa ja muita jyviä 103 (127), jauhoja ja ryyniä 1,644 (1,401), perunoita ja juurihedelmiä 226 (57), heiniä, olkia ja voimarehua 285 (272), maitoa 179 (4), voita 104 (6), 
          lihaa 585 (319), juustoa ja kalataloustuotteita 0 (14), turveaineita 4 (16), lannoitusaineita 108 (566), muita näihin tavaralajeihin kuuluvia 29 (49); yhteensä maanviljelykseen kuuluvia tavaralajia 3,533 (4,360) tonnia.</p> 
        <p>II. Lankkuja ja lautoja 16,872 (109), hirsiä ja propsia 34 (13), puita 676 (11), muita puutavaroita 192 (92); yhteensä puutavaroita 17,774 (225) tonnia.</p>
        <p>III. Paperiteollisuuteen kuuluvia tavaralajia 2,921 (559), kiviä, kalkkia ja sementtiä 52 (4,340), hiekkaa ja muita maalajeja 41 (482), hiiliä 1 (79), metalliteollisuuteen kuuluvia tavaralajia 212 (799), tiiliä 15 (4,577), 
          asfalttia ja asfalttihuopaa 29 (164), lankaa ja kutomatöitä 262 (305), vuotia ja nahkoja 78 (100), lasi- ja saviteoksia 27 (192), käsiteollisuuteen kuuluvia tavaralajia 14 (37), kemikalioita 10 (1,460), öljyjä, tervoja ja 
          valaistusaineita 139 (634), muita näihin tavaraluokkiin kuuluvia aineita 67 (193); yhteensä sekateollisuuteen kuuluvia tavaralajeja 3,868 (13,921) tonnia.</p>
        <p>IV. Kaloja 117 (487), suolaa 42 (1,026) sokuria 51 (441), kahvia, teetä ja kaakaota 36 (196), paloviinaa ja viinejä 38 (212), olutta ja mallasjuomia 6 (10), tupakkaa 12 (66), marjoja ja hedelmiä 11 (78), muita tämmöisiä 
          ravinto- ja nautintoaineita 34 (153); yhteensä tähän tavaraluokkaan kuuluvia aineita 347 (2,669) tonnia.</p>
        <p>V. Muita tavaralajeja ja kappaletavaraa 133 (480). Summa tavallista rahtitavaraa 25,655 (21,655) tonnia. Pikatavaraa 260 (81), muuta tavaraa 140 (130), sotilastavaraa 275 (166).</p>
        <p>Summa summarum lähetettyä tavaraa 26,330 (tullutta tavaraa 22,032) tonnia.</p>
        <p>Ne tehdaslaitokset ulkopuolella Hämeenlinnan kaupunkia, jotka enimmin vaikuttavat tavaraliikkeen vilkkauteen rautatieasemalla, ovat: Hämeenlinnan höyrysaha puutavaroilla; Valkeakosken tehtaat, jotka kuljettavat tavaraa 
          tänne 2:11a hinaajahöyryaluksella ja yksinään suorittavat liikennemaksua asemalla läpimitaten 10 à 12 tuhatta markkaa kuukaudessa; Pohjan höyrysaha Sääksmäellä, Elis Valdensin tehtaat Pälkäneellä ja Pätiälän & Lemmittylän 
          tehdaslaitokset Luopioisissa, jotka tuovat kauttakulku-tavaraa (enimmäkseen puutavaraa) tänne kukin hinaajahöyryllänsä ja lähettävät rautateitse kukin keskimäärin 200 tavaravaunua kesässä.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Pankkeja.">
        <p><span className="quotation">Suomen Yhdyspankin</span> haarakonttori perustettiin Hämeenlinnaan heinäkuun 1 p. 1862. Sen toimeenpanevina johtajina ovat olleet: apteekari F. 0. Winter 1 p:stä heinäkuuta 1862, rehtori 
          V. A. Sundel 23 p:stä syyskuuta 1864, katteini A. Bollfras 27 p:stä joulukuuta 1875, Knut Backmansson 1 p:stä heinäkuuta 1894.</p>
        <p><span className="quotation">Pohjoismaiden Osakepankki Kauppaa ja Teollisuutta varten</span> perusti haara-osaston tänne lokakuussa 1883. Johtajia: piirilääkäri Th. Tigerstedt v:sta 1883 1 p:ään elok. 1893, Ivar Gadd 1 
          p:stä elok. 1893.</p>
        <p><span className="quotation">Kansallis-Osake-Pankki</span> avasi konttorinsa 4 p. huhtikuuta 1891. Johtaja: A. Bogdanoff.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Apteekit.">
        <br />
        <p className="initialCap">Ensimäisen apteekin Hämeenlinnaan perusti Helsingin apteekari Johana Magnus Tingelund, joka v. 1753 sai väliaikaiset oikeudet Hämeenlinnan apteekille. Hänestä mainitaan että hän 
          myöskin <span className="quote">harjoitteli rokonistutusta ja muuta praktiikkaa kuin apteekkiliikettänsä</span>. Kuoli 1765.</p>
        <p>Tingelundin luona palveli v. 1753-56 Helsingissä harjoittelijana Anders Svahn, joka v. 1757 sai pysyväiset oikeudet Hämeenlinnan kanta-apteekille. A. Svahn oli syntynyt Tukholmassa 1730, sai syvällistä opetusta tieteessä ja 
          kielissä, palveli oppilaana Upsalan apteekissa ja tuli 1751 ylioppilaaksi sikäläiseen yliopistoon. Hänen apteekkiansa Hämeenlinnassa mainittiin nimellä <span className="quote">Rosen</span>, jonka kehittämistä varten hän sai 
          oikeuden vuosittain tuoda tullittomasti maahan määrätyn paljouden lääkeaineita. Kun apteekki-liike ensi alussa ei tahtonut vastata tarvetta, harjoitti hän sen ohessa mausten-kauppaa ja toimi myöskin, kunnes piirilääkäri 
          paikkakunnalle saatiin, toisinaan lääkärinä, ei kuitenkaan tulojansa lisätäkseen. Svahn muutti apteekin 1781 uuteen Hämeenlinnaan, joka valitsi hänet pankkirevisooriksi Tukholmaan 1785. Apteekinsa möi hän 1795. Tuli Suomen 
          talousseuran jäseneksi 1799.</p>
        <p>Anders Svahn on, paitse apteekarina, kunnan luottamusmiehenä ja lääkärinä, jättänyt jälkeensä pysyväisen muiston Hämeenlinnaan myöskin lahjoittajana. Hän, joka oli nainut porvarintyttären Arbogan kaupungista (Anna Ekenbergin, 
          kuoli Hämeenlinnassa 1824), kuoli lapsetonna ja testamenttasi, eläissäänkin hyväntekijäksi tunnettuna, omaisuutensa, nimittäin: sukulaisille ja ystäville 3,500 rdr. rgs.; Suomen talousseuralle kokonaisen rustitilan, jonka 
          tulot käytettäisiin palkinnoiksi semmoisille talonpojille, jotka osoittivat huolellisesti hoitavansa metsiä; rahastoksi kahta sairasvuodetta varten Uudenmaan ja Hämeenläänin lasaretissa 4,000 rdr.: palkkarahastoksi 
          kaupungin-lääkäriä varten Hämeenlinnassa 2,000 rdr.; Hämeenlinnan kirkolle ja koululle 5,000 rdr. ja koululle sitä paitse koko kirjastonsa; 6:lle köyhälle leskelle H:linnan seurakunnassa vuotuiset korot 500 riksistä sekä 
          kirkon urkuja varten vielä 1,000 rdr.</p>
        <p>Svahnin apteekin osti hänen apulaisensa L. J. Bjugg, joka sai oikeudet kaupungin- ja piiri-apteekille 1795. Tämän poika G. A. Bjugg jatkoi liikettä vuodesta 1829. Suuressa tulipalossa 1831 paloi apteekkikin, mutta Bjugg pani 
          sen uudelleen kuntoon. Hänen kuoltuaan 1848 ovat kanta-apteekareina olleet: F. W. Palander 1850, G. J. Lagerberg 1855, H. W. Elfsberg 1861, V. F. Pomoell 1885, Alfr. Ölander jouluk. 1899.</p>
        <p>Toisen apteekin Hämeenlinnaan perusti v. 1811 Henrik Johan Kjöllerfeldt, joka kuitenkin, saatuaan oikeudet toiselle apteekille Turussa, jo v. 1815 muutti apteekinsa sinne, jossa se 1822 paloi ja K. menetti kaiken 
          omaisuutensa. Oikeudet H:linnan 2:lle apteekille sai v. 1816 D. U. Videll, joka kuitenkin v. 1822 anoi että ne siirrettäisiin apteekari Bjuggin leskelle ja 2:n apteekki lakkautettaisiin. Uudet oikeudet tälle sai v. 1848 
          O. F. Vinter, joka avasi liikkeensä v. 1850 ja möi sen 1861 G. A. Örnström'ille. Tämä puolestaan taasen möi oikeutensa 1865 G. J. Åkermanille. Häneltä osti apteekin v. 1886 A. G. F. Cumlander, joka kuoli 1889. V. 1891 sai 
          oikeudet F. K. Schauman.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kirjapainoja ja sanomalehtiä.">
        <br />
        <p className="initialCap">Osakeyhtiö Hämäläisen kirjapaino, perustettu v. 1846. Sanomalehti <span className="quote">Hämäläinen</span>, perustettu v. 1859, ilmestyy nykyään kahdesti viikossa. Sen toimittajina eri aikoina 
          ovat olleet: lehtori G. E. Euron, filos, maisterit A. Malin, A. W. Lindgren ja Tyko Hagman.</p>
        <p>Hämeen Sanomain kirjapaino, perust. v. 1878. Osakeyhtiön omana. Sanomalehti <span className="quote">Hämeen Sanomat</span>, perust. v. 1878, ilmestyy nykyään kolme kertaa viikossa. Sen toimittajina eri aikoina ovat olleet: 
          lehtori K. Blomstedt, filos, maisterit Y. K. Yrjö-Koskinen, Uno von Schrove, A. E. Favén ja E. W. Palander, opettaja O. A. E. Lönnbohm, filos, maist. Severi Nyman, arkkitehti H. R. Helin, ylioppilaat Jukka Asp, E. Forsgren 
          ja Väinö Andelin.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kirja- ja paperikauppoja.">
        <p><span className="bold">A. Alopaeuksen kirjakauppa</span> v:lta 1888, kustannuskirjakauppa. Edelliset omistajat: Gr. Carberg (v:sta 1886), A. W. Grönholm. Lund'in perilliset.</p>
        <p><span className="bold">Armas Jantusen paperikauppa</span> v:lta 1897.</p>
        <p><span className="bold">E. Johanssonin kirjakauppa</span>, perust, v. 1899.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Teollisuuslaitoksia.">
        <p><span className="bold">Hämeenlinnan verkatehdas</span> perustettiin v. 1895, sijaitsee kaupungin kaakkoisrajalla, osakeyhtiön omana. On paikkakunnan suuremmoisin tehdaslaitos. Valmistaa hienompia ja halvempia kankaita kammatuista langoista, cheviottia, 
          verkaa, satiinia, doffelia y. m. Rakennus kivestä.</p>
        <p><span className="bold">Gust. R. Fältmars & Kumpp:n Tupakkatehdas</span> vuodelta 1885.</p>
        <p>Tupakkatehdas <span className="quote bold">Samson</span> v:lta 1898.</p>
        <p><span className="bold">H. Heinon höyrymylly</span> vuodelta 1890.</p>
        <p><span className="bold">Hämeenlinnan kirjansitoma-tehdas</span>, perust. v. 1877. Omistajat: neidet L. Schrey ja E. Lagerbohm.</p>
        <p><span className="bold">H.linnan meijeri-osakeyhtiön meijeri</span> v:lta 1871.</p>
        <p><span className="bold">H:linnan uusi kivennäisvesitehdas</span> v:lta 1890. Omistaja Adolf Spåre.</p>
        <p><span className="bold">Hämeensaaren polttimo ja väkiviinatehdas-osakeyhtiön väkiviinan-jalostustehdas</span>, perustettu v. 1870.</p>
        <p><span className="bold">Oluttehtaita:</span> Hugo Bastmanin v:lta 1856, C. O. Saxelinin v:lta 1875 ja J. F. Schmausserin v:lta 1850.</p>
        <p><span className="bold">Hämeenlinnan höyrysaha</span> v:lta 1873 salmen toisella puolen, vastapäätä linnaa, Hätilän kylässä Hämeenlinnan maaseurakunnassa. Omistaja: Aug. Eklöf.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Hämeenlinnan kaupungin Väkijuomain Vähittäismyynti- ja Anniskelu-osakeyhtiö.">
        <br />
        <p className="initialCap">Perustettiin kesäk. 13 p. 1887. Osakepääoma on 30,000 markkaa, jaettuna 300 osakkeesen à 100 m., jotka juoksevat 6 % korolla. Asetuksen mukaisesti on puhtaasta voitosta eri vuosina suoritettu 
          kaupungille seuraavat määrät:</p>
        <Image className="centeredImageStyle" src={img17} alt="Viinanmyyntivoitot"/>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Hämeenlinnan kaupungin viinien ja muiden miedompain väkijuomain kauppa-osakeyhtiö.">
        <br />
        <p className="initialCap">On perustettu 1 p:nä kesäk. 1896. Pääoma on 20,000 markkaa, jaettu 200 osakkeesen à 100 markkaa, jotka juoksevat 6 % korolla. Kunakin vuotena on yhtiö suorittanut edellisen vuoden puhtaan voiton, 
          säännöissä olevan määräyksen mukaan, kaupungin rahatoimikamarille. Vuoden 1896 voitto oli Sm. 1,441: 87, 1897 Sm. 1,458: 62, ja 1898 Sm. 563: 42.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <a className="hyperlink" href="https://digi.kirjastot.fi/files/original/e1b4670159cbca4f0346f6b9ef7f93da.pdf">Lähde</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Kunnallishistoria</title> // metadata

export default KunnallisHistoriaPage