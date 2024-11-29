import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import Image from "react-bootstrap/Image";

import "../styles/base/global.css"

import Divider from "../assets/divider.svg"
import SubDivider from "../assets/sub-divider.svg"

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

const KunnallisHistoriaPage = () => {
  return (
    <Layout titleText="Kunnallis-historiallinen kertomus">
      <Image className="centeredImageStyle" src={front} alt="Etusivu"/>
      <p className="captionStyle">Hagman, Tyko</p>
      <p className="captionStyle">Hämeenlinnan kaupunginkirjasto, 1900</p>
      <Divider className="dividerStyle"/>
      
      <p className="tocHeader">Piirteitä Hämeenlinnan kaupungin historiasta.</p>
      <p className="tocHeader">I</p>
      <Article titleText="Vanhan kaupungin perustus ja asema.">
        <br />
        <p className="firstLetterStyle">Hämeenlinnan kaupunki on saanut alkunsa pienestä linnakylästä eli kauppalasta, joka aikojen kuluessa vähitellen oli  muodostunut Birger jaarlin v. 1249 kristinuskon ja Ruotsin vallan vahvistukseksi 
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
        <p className="firstLetterStyle">Tuli sitten Ison Vihan kovat ajat. V. 1713 hyökkäsivät venäläiset maahan, valloittivat sen suurimmaksi osaksi ja ottivat vielä samana vuonna haltuunsa myöskin Kruununlinnan ja Hämeenlinnan kaupungin, 
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
        <p className="firstLetterStyle">Mutta yhtäkaikki on tämä virallinen puserrus pidettävä ensimäisenä ehdoituksena kaupungin muuttamisesta toiselle paikalle. V. 1736 esittää nyt nimenomaan maaherra että koko kaupunki muutettaisiin 
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
        <p className="firstLetterStyle">Kaupungin ollessa Ison Vihan aikana vihollisten vallassa olivat, kuten luonnollista onkin, sen yleiset rakennukset jääneet kokonaan hoitoa vajalle ja joutuneet perin kurjaan kuntoon. Omista 
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
        <p>Näillä vähillä varoilla korjattiin sitten kirkko, niinkuin kovin ränstyneessä tilassa-oleva tapulikin, jotakuinkin käytettävään kuntoon. Mutta ei suinkaan hyvään. Siihen olisi tarvittu melkein yhtä paljon varoja kuin kokonaan 
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
        <p className="firstLetterStyle">Ensimäisen koulunsa sai Hämeenlinnan kaupunki, kuten olemme maininneet, jo v. 1639 valistusta harrastavan perustajansa toimesta. Se oli pieni lastenkoulu, jossa opetettiin katkismusta, ruotsinkieltä, 
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
        <p className="firstLetterStyle">Jo ennen Ison Vihan aikoja oli kaupungissa tullihuone, Mutta sodan kestäessä, kun kauppa oli peräti lamassa ja olot muutenkin mullin mallin, ei myöskään tulleja säännöllisesti kannettu, ja 
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
        <p className="firstLetterStyle">Kaupunkilaisten elinkeinoista olisi tietysti kauppa asetettava ensi sijaan. Mutta sen laita oli niin ja näin, jos pidämme silmällä nykyajan tavara-kauppaa. Kun edellä mainitsimme että Ison Vihan 
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
        <p className="firstLetterStyle">Tuskin hiukkasen toinnuttuaan Ison Vihan iskemistä haavoista, sai Hämeenlinna monien muiden vastoinkäymisten ohessa, niinkuin 1739 vuoden suuren palon, ennenkun vuosisata oli ehtinyt puoliväliin, 
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
        <p className="firstLetterStyle">Elämän-tavoiltaan olivat vanhat kaupunkilaisemme viime vuosisadalla vielä sangen vaatimattomia ja yksinkertaisia; mistään hienostuksesta ei ollut puhettakaan. Tähän oli syynä sekä heidän köyhyytensä 
          että paikkakunnan etäisyys suuremman maailman markkinoilta ja ylellisyystavarain kalleus, niinkuin suuressa määrässä ajan valtiollisesti myrskyiset olotkin, jotka eivät olleet omiansa luomaan sivistyksen tasoitusta tapoihin. 
          Mutta valtavimpana syynä näiden karkeuteen oli epäilemättä kaupunkilaisten etevin elinkeino eli viinan- ja oluen-valmistus.</p>
        <p>Pukuna käyttivät kaupunkilaiset tavallisesti kotitekoisia sarkavaatteita polvihousuineen, eivätkä naisetkaan tietäneet tavallisen kaupunki-elämän koreilemisesta juuri mitään.</p>
        <p>Tee ja kahvi oli herkkuja, jotka ainoastaan hyvin harvoin tulivat kysymykseen. Monessa talossa niitä tuskin tunnettiinkaan. Sitä vastoin oli hyvin yleisenä tupakka, ja sitä nauttivat melkein kaikki kaupunkilaiset, nuoret ja 
          vanhat, toiset polttamalla, toiset suussa pitämällä, naiset enimmäkseen nuuskaamalla. Ei se kuitenkaan ollut mitään hienoa tupakkalajia, vaan melkein yksinomaan kotimaan <span className="quote">nurkantaustaa</span>, jota 
          jalostettiin miten paraiten voitiin. Kuinka yleinen sen käyttäminen muuten oli koko valtakunnassakin, nähdään siitä, että hallitus v. 1741 katsoi tarpeelliseksi erinäisellä asetuksella kieltää 21 vuotta nuorempaa väkeä käyttämästä 
          tupakkaa.</p>
        <p>Juopotteleminen oli tuon yleisen elinkeinon seurauksena aivan yleinen. <span className="quote">Diem noctemque continuare potando nulli probrum</span>, ( = viettää yöt päivät juopotellen ei ole kellekkään häpeäksi) valittaa 
          Tacitus muinais-germaanilaisilta, ja se näkyy aivan säntilleen sopivan myös muinais-hämeenlinnalaisiin, sillä olut ja viina oli aivan yleisenä juomana sekä miehillä että naisilla, eikä se liene tullut kysymykseenkään että 
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
        <p className="firstLetterStyle">Edellisessä on jo mainittu niistä porvarien toiveista, jotka heidän edusmiehensä 1751 vuoden valtiopäivillä toi esiin. Ja vihdoinkin näkyy nyt anomus tepsineen. Jo samana vuonna käski näet kuningas 
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
        <p className="firstLetterStyle">Jo toukokuussa 1774 sai kaupungin maistraati kirjeen maaherralta, joka siinä käskee maistraatia ryhtymään toimiin katujen ja maanteiden parantamista sekä kaupungin siistittämistä varten kaikin 
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
        <p className="infoStyle">Suullinen taru, jonka täällä olemme kuulleet, kertoo että Kustaa kuningas, matkustaessaan pois Hämeenlinnasta ja hetkeksi seisattuessaan Hattelmalan harjulle ottaakseen pienen aamuryypyn, oli 
          katsellut taakseen ja silloin osoittanut Niementaustan metsäistä mäkeä lausuen, että siinähän olikin paras ja kauniin paikka uudelle kaupungille.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">XII</p>
      <Article titleText="Muuttaminen tapahtuu. Jätteet vanhasta kaupungista.">
        <br />
        <p className="firstLetterStyle">Vuonna 1780 oltiin siis jo paraimmassa muuttotouhussa, ja raivattiin sinä vuonna erittäinkin uuden kaupungin katuja ja toria. Mutta moni uudisrakennuskin kohosi jo siihen aikaan uuden kaupungin 
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
        <p className="captionStyle">Väkiluku Hämeenlinnan kaupungissa vv. 1749 - 1800.</p>
        <Image className="centeredImageStyle" style={{marginTop: "4px"}} src={img1} alt="Väkiluvun kehitys"/>
        <SubDivider className="dividerStyle"/>
        <p className="captionStyle">Syntyneet.</p>
        <Image className="centeredImageStyle" style={{marginTop: "4px"}}  src={img2} alt="Syntyneet"/>
        <SubDivider className="dividerStyle"/>
        <p className="captionStyle">Kuolleet.</p>
        <Image className="centeredImageStyle" style={{marginTop: "4px"}}  src={img3} alt="Kuolleet"/>
        <SubDivider className="dividerStyle"/>
        <p className="captionStyle">Hämeenlinnan kaupungin käsityöläiset jaettuina ammattinsa mukaan sekä kauppiaat.</p>
        <Image className="centeredImageStyle" style={{marginTop: "4px"}}  src={img4} alt="Ammatit"/>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">XIV</p>
      <Article titleText="„Hattelmalan harjanteilla” v. 1808 Kauppa- ja käsiteollisuustilastoa samalta vuodelta.">
        <br />
        <p className="firstLetterStyle">Näillä vaatimattomilla piirteillä, jotka tietysti eivät vähennä vastaisen kaupungin historian tarvetta, vaan päin vastoin toivoaksemme ovat jonkinmoisena kehoituksena semmoisen toimittamiseen, koska 
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
        <p className="firstLetterStyle">Siirrymme viimein nyt kerrassaan vuoteen 1831, jolloin Hämeenlinnan kaupunkia kohtasi ankara onnettomuus kamalan tulipalon muodossa. Kaupunki tietysti ei siilien aikaan vielä ollut läheskään niin iso 
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
        <p className="infoStyle">Jo pintapuolisellekkin katsojalle selviää melkein heti tämän raunion oikea luonne; mutta vapaaherra Rehbinder koetti, kuten kerrotaan, kerran eksyttää muutamia matkustavia ruotsalaisia tiedemiehiäkin 
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
        <p className="infoStyle">Oli kaupungissa toki niitäkin, jotka toisinaan antoivat ylpeälle kuvernöörille pikku läksytyksiä. Niinpä muun muassa kerrotaan eräästä vanhasta lääkäristä, jonka hän kerran kipeänä ollessaan tavallisella 
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
        <p className="captionStyle">Jo luonto, kuljettua kesä-illan,<br />Yö vaipan ylleen oli heittänyt<br /> Ja liepeellänsä Hämeenlinnan sillan<br />Himmeesen varjohon jo peittänyt.<br />Siell' yksin seisoin, silloin nuorukainen,<br />
          Seuduilla näillä vieras, matkalainen.</p>
        <br />
        <p className="captionStyle">Kun katsolin siell' luonnon ihanuutta,<br />Outoihin vaivuin ajatuksihin,<br />Hempeetä kesä-yön mä hiljaisuutta<br />Sydämmin ihaelin sykkivin.<br />Siell' oli näky mitä ihaninta.<br />Maa tyyni oli, 
          tyyni järven pinta.</p>
        <br />
        <p className="captionStyle">Vaan mikä tuolla luonnon suloutta<br />Jylhällä muodollansa varjostaa?<br />Se kohoutuen kohden korkeutta<br />Ylpeesti ympärilleen katsastaa.<br />Syvästi järveen kuvauu sen muuri,<br />Sisässä maan 
        kuin oisi sillä juuri.</p>
        <br />
        <p className="captionStyle">Hengille luonnon liekö hennommille<br />Se peljättävä, paha kummitus?<br />Ilmoittavalta tuntuneeko sille<br />Yörauhassansa seudun kauneus,<br />Kun uhaten näin katsoo kaikkialle,<br />Järvelle, maalle 
          sekä taivahalle?</p>
        <br />
        <p className="captionStyle">Ei, hengeksi sen mieleni vaan houraa,<br />Olento on se tosi itsestään.<br />Se muistuttaapi miestä, rautakouraa,<br />Jok' ennen voimakkaalla kädellään<br />Sen rakensi ja nimess' uskon uuden<br /> Sen 
          kautta sorti Hämeen vapauden.</p>
        <br />
        <p className="captionStyle">Ei ihme, että tätä miettiessä<br />Povessa tunsin tunteen katkeran:<br />Myös syntynyt mä olen Hämehessä<br />Ja synnyinmaana sitä rakastan.<br />Ken orjuuteen ja sortoon sitä sallis,<br />Jok' ain' on 
          ollut sydämelle kallis?</p>
        <br />
        <p className="captionStyle">Näin miettiess' on huomannut ma aamun<br />Taas taivaan kannelle jo astuneen,<br />Kun jylhältä näin linnalt' öisen haamun<br />Ja synkeyden kaiken kadonneen.<br />Se kirkastumia seisoi aamukoissa<br />
          Ja peljätys kaikk' oli siltä poissa.</p>
        <br />
        <p className="captionStyle">En peljästy stil luonnossakaan muussa<br />Sen lähellä mä nähnyt ollenkaan.<br />Pelotta lintu likimmässä puussa<br />Ilolla lauloi aamulauluaan.<br />Ja itse jylhän linnan räystähässä<br />Näin pienen 
          pääskysen mä pesimässä.</p>
        <br />
        <p className="captionStyle">Mielestä haihtui haikeus; nyt vasta<br />Ma muistin, aamukoissahan sen näin,<br />Ett' uskon sätehet se taivahasta<br />Johdatti kerta Hämeesenkin päin,<br />Ja poistaessaan meiltä pakanuuden,<br />Ehk' 
          ankarast', toi oikeen vapauden.</p>
        <br />
        <p className="captionStyle">Maamiehen kun ma kuulin sitte siellä<br />Kulkeissaan työhön riemull' laulavan,<br />Yömatkan päästä matkamiehen vielä<br />Kun tervesnä näin tietään kulkevan,<br />Niin vielä muistin, pait sen 
          muinaisuuden,<br />Sen suojass' olevan maan rauhaisuuden.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">Kertomus Hämeenlinnan kaupungin kunnallis-taloudellisista oloista.</p>
      <Article titleText="Kaupungin asema, rakennusalue ja ympäristö.">
        <br />
        <p className="firstLetterStyle">Nykyinen Hämeenlinnan kaupunki on rakennettu Niementausta nimiselle niemelle Wanajaveden läntisellä rannalla. Wanajavesi kapenee tällä kohdalla vähäpätöiseksi, joenkaltaiseksi väyläksi, joka 
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
        <p className="firstLetterStyle">Länteenpäin kaupungista johtaa läntinen viertotie, joka Myllymäen etukaupungin halki menee n. s. Poltinahon suurelle sotaväen harjoituskentälle, jonka itäsyrjästä tie haaraantuu kolmelle taholle: 
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
        <p className="firstLetterStyle">Kaupungin maat ja tilukset kotipalstalla sijaitsevat asutun kaupungin ympärystössä ja käsittävät kaikkiaan 304,847 hehtaaria, joista kuitenkin jokunen pienempi määrä on pakkoluovutuksen kautta 
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
        <p className="firstLetterStyle">Sairionmaan tilukset käsittävät maa-alueen Wanajaveden itärannasta Aulangon järvelle sekä pienemmän lohkon tämän järven itäpuolella. Nykyään on tämä alue jaettu 34 osuuteen ja sisältää:</p>
        <Image className="centeredImageStyle" src={img9} alt="Maa-alat"/>
        <p>Tästä alasta on Venäjän valtio lunastanut ruutimakasiiniansa y. m. tarpeitaan varten 80,350 hehtaaria viljelemätöntä maata. Pienempiä mäkipalstoja on luovutettu talontonteiksi, kuten Toivolan huvila.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Viljelysmaiden vuokraehtoja.">
        <br />
        <p className="firstLetterStyle">Kaupungin viljelysmaat, paitsi torpat ei, ovat vuokratut: Kuralassa ja Sairiossa 15 vuodeksi, pellot lähemmällä kaupunkia 10 vuodeksi sekä niityt ja suolohkot 15 vuodeksi.</p>
        <p>Valtuusmiesten huhtik. 24 p. 1896 tekemän päätöksen mukaan vuokrataan kaikki viljelysmaat sillä välipuheella, että vuokraajalla, jos hän viljelee lohkonsa kunnollisesti ja suorittaa vuokramaksunsa säännöllisesti, on oikeus 
          vuokra-ajan loputtua saada lohkonsa uudestaan vuokrattavakseen suorittamalla vuosittain lisämaksuksi 10 prosenttia edellisestä vuokrasummasta.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="Kaupungin metsät.">
        <br />
        <p className="firstLetterStyle">Löytyvien karttain ja selitysten mukaan on kaupungin metsäjakoon otettujen metsien pinta-ala 505,35 hehtaaria. Tämä ala on jaettu 8 eri talouspalstaan seuraavalla tavalla:</p>
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
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="">
        <br />
        <p className="firstLetterStyle"></p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <Article titleText="">
        <br />
        <p className="firstLetterStyle"></p>
      </Article>
      <SubDivider className="dividerStyle"/>


      <a className="hyperLinkStyle" href="https://digi.kirjastot.fi/files/original/e1b4670159cbca4f0346f6b9ef7f93da.pdf">Lähde</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Kunnallishistoria</title> // metadata

export default KunnallisHistoriaPage