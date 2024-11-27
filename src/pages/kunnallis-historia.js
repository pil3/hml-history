import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import Image from "react-bootstrap/Image";

import "../styles/base/global.css"

import Divider from "../assets/divider.svg"
import SubDivider from "../assets/sub-divider.svg"

import front from "../images/content/kunnallisHistoria/front.jpg"

const KunnallisHistoriaPage = () => {
  return (
    <Layout titleText="Kunnallis-historiallinen kertomus">
      <Image className="centeredImageStyle" src={front} alt="Etusivu"/>
      <p className="captionStyle">Hagman, Tyko</p>
      <p className="captionStyle">Hämeenlinnan kaupunginkirjasto, 1900</p>
      <Divider className="dividerStyle"/>
      
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
          malliin rakennettuja „taloja” (hus), mutta myöskin melkoinen määrä turvekattoisia „tupia” (stugor), vieläpä savupirttejäkin. „Talot” lienevät olleet enimmäkseen tiilikattoisia. Kadut ja kujat tietysti tavallisia kyläteitä ilman 
          minkäänmoista kivitystä.</p>
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
          11 navettaa, 21 saunaa ja 15 „kamaria”. Yleiset rakennukset, kirkon ja koulun, olivat kaupungin harvalukuiset asukkaat jättäneet oman onnensa nojaan, joten nekin olivat peräti huonossa kunnossa.</p>
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
          päin, mutta - se oli tämän omaa, ja sitä paitsi oli kaupunkia jo ennaltaankin linnan alueella. V. 1733 tuli virallinen ilmoitus maistraatille, että korkeat asianomaiset olivat päättäneet rakennuttaa uusia varustuslaitoksia 
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
          n. s. „Ojosmäelle”, mutta maistraatti ei vastaa hänen kirjelmäänsä mitään eikä uudistettuunkaan lausunnon pyyntöön. Ja samalla tapaa käy alusta vuotta 1739, jolloin vastaus oli annettava 14 päivän kuluessa. Kaupunki 
          maistraatineen menettelee ikäänkuin ei asia sitä koskisikaan. Viimein panee maaherra - A. E. Gyllenstjerna - kuninkaan käskystä nimismiehen katsomaan uutta paikkaa uppiniskaiselle kaupungille ja käskee hänen määrätä 
          muutto-ajankin. Porvaristo saisi kuitenkin edusmiesten kautta valvoa etujaan.</p>
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
          valituksen seurauksena oli kuninkaallinen kirje heinäk. 15 p:ltä 1740, jossa käskettiin maaherraa estämään, „kaikkinaisia uudisrakennuksia Hämeenlinnassa, kunnes kunink. Majesteetti olisi suvainnut vastaan-ottaa Valtiokamari- 
          ja Kauppakolleegionsa alamaiset lausunnot asiassa ja nämä sitten vahvistaa”.</p>
        <p>Mutta näistä lausunnoista ja niiden vahvistuksesta ei kuulu tuon enempää. Koko muuttohanke kaikkine syntyneine ehdoituksineen näkyy hallituksenkin puolelta jäävän sikseen, ja toiselta puolen on porvaristo kuitenkin kiellettynä 
          rakentamasta itselleen uusia huoneita.</p>
        <p>Ja tämmöistä kiusallista välipulaa vallitsee lähes puoli vuosisataa.</p>
        <p>Onko niin ollen mahdollistakaan että Hämeenlinna voi edistyä muiden kaupunkien rinnalla? Ihmetellä tosiaan täytyy etteivät arvoisat porvarit jättäneet koko loukkoansa hiiteen. Mutta suomalaisen ja eritoten hämäläisen 
          liikuttavalla rakkaudella kotikuusensa huminaa kuullellen rakentavat he, kuninkaallisista käskyistä huolimatta, itselleen edes jonkinmoiset suojat talven pakkasia vastaan. Ja miten onkaan, näkyy kaupunki ennen Pikku Vihaa jälleen 
          olevan, vaikkapa heikostikin, jaloilleen pääsemässä — kuin loisen tölli luvattomalla maalla.</p>
        <p>Mutta tuo alituinen pelko, että heidän on täytyminen muuttaa kotinsa muuanne, lamauttaa tietysti porvareilta kaiken sen liikkeellisen toimeliaisuuden, jota muuten voisi odottaa heidän puoleltaan.</p>
        <p>Muuan pastori Oimelaus antaa kaupungin tilasta näihin aikoihin seuraavan atestin: „Kaupunkilaisten elinkeinoliike on silminnähtävästi onnettoman tulipalon jälkeen, joka kesäkuussa v. 1739 raivosi kaupungissa, vähentynyt sen 
          kautta, että heitä, koska talot muka ovat liian lähellä linnaa, on 100 hopeatalarin sakon uhalla kielletty uudelleen rakentamasta palaneita talojaan. Senpätähden olisi toivottava että korkea esivalta armossa tahtoisi peruuttaa 
          edellä-mainitun kiellon taikkapa antaa köyhille alamaisilleen sopivan ja edullisen paikan, jossa he rauhassa saisivat rakentaa ja asua”.</p>
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
          parastaan näitä hankkiaksensa, ei saatu moneen vuoteen mitään kokoon, ja v. 1729 rovastin-käräjäin pöytäkirjassa mainitaan jo viimein että kirkko - niinkuin pappilakin - menivät perikatoaan kohti. Samana vuonna pyysi kuitenkin 
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
        <p>Mutta tähän „kirkkohistoriaan” palaamme vielä edempänä.</p>
        <p>Kaupungin pappila sijaitsi ammoisista ajoista eli kaupungin perustamisesta asti sen kehyksen ulkopuolella, nim. n. s. Pyövelinmäellä eli melkeittäin sillä paikalla, josta nykyinen kaupungin puisto alkaa. Sen oli valtio 
          rakennuttanut omalla kustannuksellaan ja sitten jättänyt kaupungin huostaan. Suuri se ei ollut: matala, turvekattoinen rakennus pienine akkunoineen ja akkunaluukkuineen, sisältäen ainoastaan salin ja kaksi kamaria.</p>
        <p>Ison Vihan temmellyksessä hävittivät ja osaksi polttivatkin venäläiset tämän pappilarakennuksen, niin että se pitkät ajat oli peräti rappiolla, ja 1732 vuoden rovasti-käräjäin pöytäkirjassa mainitaan viimein, että pappi 
          perheineen siinä asuessansa oli alituisessa hengenvaarassa. Jo v. 1723 olivat kaupunkilaiset köyhyydessään pyytäneet valtiolta apua sen korjaamiseen, mutta mitään semmoista ei saatu. Kääntyi sitten maaherra samassa tarkoituksessa 
          kuninkaan puoleen, ja nyt lienee vähän apua tullut, koska v. 1733 mainitaan, että kaupunkilaiset alkoivat rakentaa uutta pappilaa „maaherran ja linnanpäällikön osoittamalle paikalle”. Kuninkaan apuvarat eivät kuitenkaan 
          lähimäärinkään tarpeeksi asti riittäneet, vaan mainitaanpa nimenomaan että porvaristo lopultakin jatkoi pappilan rakentamista „omilla varoillaan”. Se oli kunnossa jo ennenkun uutta kirkkoa ruvettiin rakentamaan.</p>
        <p>Mutta pappilastakin vielä pari sanaa tuonnempana.</p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">V</p>
      <Article titleText="Koulu.">
        <br />
        <p className="firstLetterStyle"></p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">VI</p>
      <Article titleText="Tullihuone ja tulli-aita. Tiet ja silta.">
        <br />
        <p className="firstLetterStyle"></p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">VII</p>
      <Article titleText="Kauppaliike. Viinan-poltto ja oluenpano. Käsiteollisuus.">
        <br />
        <p className="firstLetterStyle"></p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">VIII</p>
      <Article titleText="Pikku Viha. Uusia kirkonkorjauksia.">
        <br />
        <p className="firstLetterStyle"></p>
      </Article>
      <SubDivider className="dividerStyle"/>

      <p className="tocHeader">IX</p>
      <Article titleText="Elämän-tavat.">
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