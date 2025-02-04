import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import QuoteStart from "../assets/quotation-start.svg"
import QuoteEnd from "../assets/quotation-end.svg"
import Divider from "../assets/divider.svg"
import SubDivider from "../assets/sub-divider.svg"

import "../styles/base/global.css"

const War1914Page = () => {
  return (
    <Layout titleText="Hämeen Sanomat, 1914">
      <h2>Kohti sotaa</h2>

      <div className="interTitle">30.6.1914</div>
      <Article titleText="Ruhtinasmurha.">
        <h5>Itäwallan kruununperillinen, arkkiherttua Frans Ferdinand puolisoineen murhattu.</h5>
        <p><span className="accent">Serajevo</span>, kesäk. 28 p.<br />Arkkiherttua Frans Ferdinandin ajaessa tänään puolisonsa Hohenbergin herttuattaren seurassa Raatihuoneelle heitettiin 
          automobiiliin pommi, joka wahingoittamatta arkkiherttuaa tahi hänen puolisoaan surmasi useita ihmisiä. Pommin heittäjä, muuan kirjapainotyömies, on wangittu. Saawuttuaan Raatihuoneelle 
          joutui arkkiherttua ja hänen puolisonsa myrskyisten suosionosotusten esineeksi.</p>
        <p>Raatihuoneella tapahtuneiden juhlallisuuksien jälkeen tehtiin arkkiherttuaa ja hänen puolisoaan wastaan toinen murhayritys. Heidän palatessaan automobiilillä asuntoonsa haawoitti muuan 
          kymnasisti kahdella browringinlaukauksella waikeasti arkkihertttua Frans Ferdinandia ja hänen puolisoaan. Sairaalaan wietyinä kuoliwat molemmat.</p>
        <p><span className="accent">Serajewo</span>, kesäk. 28 p.<br />Murhaaja nimeltään Princip on kymnasisti ja ijältään wasta 19-wuotias. Hän on jonkun aikaa opiskellut Belgradissa. Kuulustelussa 
          hän on ilmoittanut jo kauan nationalistisista syistä aikoneensa surmata jonkun korkeassa asemassa olewan henkilön. Hän odotti arkkiherttuan automobiiliä Appelin rantakadulla eräässä kadun 
          kulmauksessa, jossa sen täytyi hiljentää wauhtiaan. Nähdessään autossa myöskin arkkiherttuan puolison Hohenbergin herttuattaren epäröi hän hetkisen mutta ampui senjälkeen nopeasti 
          browningillaan 2 laukausta. Murhaaja kielsi omaawansa rikostowereita.</p>
        <p><span className="accent">Serajewo</span>, kesäk. 27 p.<br />Ensimäinen murhayrityksentekijä on ammatiltaan kirjapainaja ja nimeltään Nedelko Zabrenowitsh. Hän kertoo saaneensa pommin 
          belgradilaisilta anarkisteilta, joiden nimiä hän ei tiedä. Hän wäittää, ettei hänellä ole rikostowereita. Kuulustelussa hän on esiintynyt hywin kylmäniwallisesti. Murhayrityksen tehtyään 
          hän heittäytyi jokeen, josta hänen jälessään heittäytyneet poliisit ja muut henkilöt hänet ottiwat kiinni. Toisen murhapaikan läheisyydestä löydettiin räjähtämätön pommi, jonka 
          todennäköisesti on jättänyt kolmas murhaaja, joka huomattuaan Principin teon onnistuneen on paennut.</p>
        <p><span className="accent">Serajewo</span>, kesäk. 28 p.<br />Ensimäisen laukauksen kajahdettua arkkiherttuatar waipui puolisonsa syliin. Luoti oli tunkenut automobiilin laidan läpi hänen 
          uumeniinsa. Waikeasti haawoitettuna hän meni heti tainnuksiin. Toinen luoti sattui arkkiherttuan kaulaan. Kuolema seurasi silmänräpäyksessä. Murhaaja toimi salamannopeasti. Kaikki lähellä 
          seisowat eiwät kuulleet edes laukauksia. Katu murhapaikalla on erittäin kapea.</p>
        <p><span className="accent">Serajewo</span>, kesäk. 29 p.<br />Ensimäisessä murhayrityksessä sai surmansa tahi haawoittui 20 henkeä, niiden joukossa useita waimoja ja lapsia. Koko kaupunki on 
          surun wallassa.</p>
        <h5>* * *</h5>
        <p>Tällä werityöllä woi olla suuremmat seuraukset kuin saatetaan aawistaakkaan. Saksan keisari Wilhelm oli Franz Ferdinandin läheinen ystäwä ja kolmiliitto nojasi suurelta osalta juuri 
          tähän ystäwyyteen. Mitenkä tämä tapaus tutee liiton lujuuteen waikuttamaan, on waikea määritellä, mutta tuntuwa tappio se sille joka tapauksessa oli.</p>
        <p>Toiseksi on Itäwalta-Unkari nyt ilman kruununperillistä. Kuten tiedetään, oli Franz Ferdinand morganaattisessa awioliitossa ja waikka hän monasti, wiimeksi aiwan hiljakkoin, oli pyytänyt 
          keisari Josefia sitä laillistuttamaan, ei tämä siihen suostunut. Wainajan lapset eiwät näin ollen woi periä waltaistuinta. Sitäpaitsi owat he alaikäisiä ja täten tulisi Itäwalta-Unkari 
          ennen pitkää saamaan holhoojahallituksen. Siihen se ei uskaltaudu, sillä tunnettuahan on, että Unkari itsepintaisesti pyrkii itsenäiseksi ja eteläslaawit, josta murhaajakin on kotoisin, 
          seuraawat kernaasti esimerkkiä.</p>
        <p>Kaiken kaikkiaan woi olettaa, että tämä werityö saa suuria muutoksia Euroopan politiikassa aikaan.</p>
      </Article>

      <div className="interTitle">2.7.1914</div>
      <Article titleText="Itävallan kruununperijän murha.">
        <h5>Yksityiskohtaisia lisätietoja tapahtumasta.</h5>
        <p><span className="accent">Wienistä</span>, kesäk. 28 p.<br />Ensimäinen luoti osui arkkiherttuan puolisoon. Arkkiherttuatar ennätti huudahtaa ja teki liikkeen ikäänkuin tahtoen ruumiillaan suojella miestään. Mutta samassa seurasi toinen laukaus ja 
          luoti läwisti arkkiherttuan kaulan ja waltimon. Kuolema seurasi paikalla. Seurueeseen kuuluwat henkilöt ympäröiwät heti automobiilin, jonka jälkeen wiipymättä annettiin käsky ajaa 
          sairaalaan. Arkkiherttua kuoli tiellä sinne ja hänen puolisonsa melkein heti sairaalaan saawuttua. Bosnian ja Herzegowinan käskynhaltija, joka oli arkkiherttuan automobiilissä, jäi 
          wahingoittumatta. Arkkiherttuan ja hänen puolisonsa ruumiit asetettiin, heti kun lääkärit oliwat todenneet heidät kuolleiksi, katafalkeille. Sairaalaan saapuiwat wiipymättä seudun 
          korkeimmat edustajat ja arkkiherttuan seurueen jäsenet.</p>
        <p>Tällä wälin koetti murhapaikalle kokoontunut kansanjoukko turhaan riistää murhaajaa poliisin hallusta lynkatakseen hänet.</p>
        <p><span className="accent">Wienistä</span>, kesäk. 28 p.<br />Ensimäinen murhayritys arkkiherttuaa ja hänen puolisoansa wastaan tehtiin klo 11,20 aam. heidän ollessaan matkalla raatihuoneelle. 
        Heidän saapuessaan raatihuoneelle seisoi siellä suuria kansanjoukkoja ja wahwistettuja santarmi- ja sotawäkiosastoja. N. 20 m. päässä raatihuoneesta heitettiin arkkiherttuan automobiiliin 
        pommi. Arkkiherttua huomasi ajoissa lentäwän pommin ja työnsi sen kädellään syrjään. Noin 4 metrin päässä automobiilistä tapahtui räjähdys, jolloin haawoittui seurueesta noin 10 henkilöä ja 
        saman werran yleisöstä. Pommin heittäjä wangittiin lähellä räjähdyspaikkaa. Arkkiherttua osoitti murhayrityksen aikana suurta kylmäwerisyyttä ja rauhoitti puolisoaan ja seurueen jäseniä. 
        Jo kahden minuutin kuluttua räjähdyksen jälkeen antoi arkkiherttua käskyn jatkaa matkaa raatihuoneelle.</p>
        <p>Juhlallisuuksien jälkeen raatihuoneella lähti arkkiherttuan automobiili ensimäisenä, suunnaten kulkunsa rantakadulle. Automobiili oli tuskin ennättänyt Frans Josefin kadun kulmaan, joka 
          tällä kohdalla on ainoastaan noin 10 metrin lewyinen, kun äkkiarwaamatta kuului peräkkäin kaksi rewolwerinlaukausta. Seurueeseen kuuluwat henkilöt ennättiwät ainoastaan huomata, että 
          automobiiliä läheni joku nuori mies, joka pitäen rewolweria kohollaan ampui arkkiherttuaa ja hänen puolisoaan.</p>
        <h5>Kun Frans Josef sai tiedon tapahtumasta.</h5>
        <p><span className="accent">Wienistä</span>, kesäk. 29 p.<br />Kerrotaan, että kun keisari Frans Josef sai tiedon murhasta, alkoi hän horjua ja pysyi seisaallaan ainoastaan adjutanttiensa 
          tukemana. Toiwuttuaan oli keisariwanhus lausunut: <span className="quote">Minä nähtäwästi olen kokewa kaikki tässä maailmassa. Kunpahan saisin edes rauhassa päättää päiwäni.</span></p>
        <h5>Tapahtuman waikutus Wienissä.</h5>
        <p><span className="accent">Wienistä</span>, kesäk. 29 p.<br />Heti kun tieto murhasta saapui, keskeytettiin poliisin toimesta näytännöt teattereissa ja puistoissa sekä muissa 
          huwittelutilaisuuksissa. Kansanjoukko huusi useissa paikoin: <span className="quote">Alas Serbia! On aika tehdä loppu serbialaisesta agitatsionista.</span></p>
        <p><span className="accent">Wienistä</span>, kesäk. 28 p.<br />Tieto arkkiherttua Frans Ferdinandin ja hänen puolisonsa murhasta iski kuin ukkonen kaupunkiin. Myöhäisestä illasta huolimatta 
          piirittiwät tuhansiin nousewat kansanjoukot kadut ja torit sanomalehtitoimistojen, sisäministeriön y.m. wiranomaisten edustalla. Suusta suuhun kulkiwat tiedot murhan yksityiskohdista.</p>
        <h5>Waikutus Berlinissä.</h5>
        <p><span className="accent">Berlinistä</span>, kesäk. 29 p.<br />Arkkiherttua Frans Ferdinandin ja hänen puolisonsa murha on täällä tehnyt järkyttäwän waikutuksen. Keisari käski Kielissä 
          keskeyttää kaikki juhlat ja huwittelut ja kuuluu aikowan matkustaa Wieniin.</p>
        <p>Sanomalehdet waroittawat tapahtumasta olewan waltiollisia seurauksia, kun arkkiherttua wainaja oli Saksan keisarin läheinen ystäwä. Mitään muutosta liittosuhteeseen ei uskota olewan 
          odotettawissa.</p>
        <h5>Todistuksia laajasta salaliitosta.</h5>
        <p><span className="accent">Parisista</span>, kesäk. 29 p.<br />„Matinin” Sarajewosta saamien tietojen mukaan on murhaajan asunnosta löydetty suuria rahasummia, joista murhaaja on kieltäytynyt 
          antamasta mitään tietoja. Sarajewon ja Bistrikin wäliseltä rautatieltä on löydetty useita pommeja. Tätä rataa myöten piti arkkiherttuan matkustaa.</p>
        <h5>Murha serbialaisen agitatsionin tulos</h5>
        <p><span className="accent">Wienistä</span>, kesäk. 29 p.<br />„Reichspost” ja useat muut sanomalehdet wakuuttawat, että arkkiherttuan murha on ollut tuloksena suur-serbialaisesta agitatsionista. 
          Lehtien tietojen mukaan tiedettiin Belgradissa jo edeltäpäin murhasta ja oliwat siellä ilmestywät sanomalehdet tehneet wiittauksiakin siihen.</p>
        <h5>Werilöylyjä serbialaisia wastaan.</h5>
        <p><span className="accent">Wienistä</span>, kesäk. 29 p.<br />Tänne Serajewosta saapuneiden tietojen mukaan on sikäläisen serbialaisen wäestön keskuudessa pantu toimeen werilöylyjä. Poliisin 
          ja sotawäen tarmokkaista turwallisuustoimenpiteistä huolimatta alkoiwat saksalaiset ja unkarilaiset kansanainekset kiihottajien yllyttäminä harjoittaa wäkiwaltaisuuksia kaupungissa asuwia 
          serbialaisia wastaan. Noin klo 5 aikaan i. p. saiwat wäkiwaltaisuudet erittäin uhkaawan luonteen ja oli maan käskynhaltija pakotettu antamaan kaupungin wäestölle erityisen julistuksen, 
          jossa huomautettiin, että sotawäki on pakotettu turwautumaan aseisiin, jos wäkiwaltaisuudet jatkuwat. Uhkaus ei kumminkaan auttanut. Keskikaupungilla ryhtyi useihin satoihin nousewa 
          kansanjoukko häwittämään serbialaisia kauppoja, kouluja, sairaaloita ja asunnoita, joukossa oli paljon saksalaisia, jotka huusiwat: Alas murhaaja, alas serbialaiset. Klo 6 aikaan illalla 
          yhtyi osa kaupungin muhamettilaisia mellastajiin sen wuoksi, että erästä muhamettilaista wastaan oli heitetty pommi. Kansanjoukko kaswoi pian useihin tuhansiin. Kaikki kaduille ilmestyneet 
          serbialaiset piestiin, ei säästetty edes waimoja lapsia eikä wanhuksiakaan. Serbialaiset yrittiwät tehdä wastarintaa, mutta turhaan.</p>
        <p>Frans Josefin kadulla ampui kansanjoukko rewolwereilla. Toinen joukko hyökkäsi Appelin rantakadulla olewia työmiehiä wastaan, käyttäen aseinaan puukkoja ja tikareita.</p>
        <p>Samanaikaisesti alettiin serbilaisten asumissa kaupunginosissa sytyttää tulipaloja.</p>
        <p>Werilöylyssä sai surmansa eilispäiwän kuluessa yli 200 serbialaista. Eräässä mellastajain sytyttämässä talossa paloi eläwänä 12 henkeä. Serbian Pietarissa olewan lähettilään Salaikowitshin 
          apen omistamassa Eurooppa-hotellissa tapettiin kaikki miehet. Hotelli yritettiin sytyttää tuleen. Kaikki paikallisten serbialaisten lehtien julkaisijat ja toimittajat owat waikeasti 
          haawoittuneet. Viranomaiset toimiwat löyhäperäisesti. Kansanjoukko poltti yhden serbialaisen kirkonkin ja pieksi sieltä paenneen papin.</p>
        <p>Myöhemmin illalla waltasiwat kansanjoukko ja poliisit kaikki kadut ja asukkaita kiellettiin erityisen käskynhaltijan määräyksen nojalla saapumasta kaduille jälkeen klo 10 illalla.</p>
        <h5>Kapinahankkeita ollut yhteydessä murhan kanssa. — Serajewo julistettu sotatilaan.</h5>
        <p><span className="accent">Parisista</span>, kesäk. 30 p.<br />„Matininille” Wienistä saapuneiden tietojen mukaan on lähellä Serbian rajaa wangittu Serajewossa olewan Eurooppa-hotellin omistaja 
          Serbian Pietarissa olewan lähettilään Salaikowitshin appi Oditsch, jota takawarikkoon otettujen salaisten asiapapereiden perusteella syytetään osallisuudesta kapinan walmisteluun, joka piti 
          alettaman heti arkkiherttuan murhan jälkeen. Sarajewo on julistettu sotatilaan näiden asiapaperien eikä mielenosotusten wuoksi. Asiapaperien sisältöä pidetään tarkoin salassa.</p>
        <h5>Murhattu arkkiherttua.</h5>
        <p><span className="accent">Frans Ferdinand</span> oli syntynyt joulukuun 18 pnä 1863 Grazissa. Wanhemmat, keisari Frans Josefin nuorempi weli, arkkiherttua Kaarle Ludwig ja tämän puoliso 
          Molempain Sisilian prinsessa Maria Annunziata. Perittyään Modenon herttuan Frans V:n kuoltua 1875 tämän suuren omaisuuden, sai hän arwonimekseen Itäwalta-Esten arkkiherttua. Kun 
          perintöruhtinas Rudolf, keisarin ainoa poika, tawattiin yhdessä rakastajattarensa kreiwitär Wetseran kanssa murhattuna tai itsensä surmanneena Mayerlingin metsästyslinnassa w. 1889, 
          siirtyi wallanperimys keisarin weljelle, arkkiherttua Kaarle Ludwigille, Frans Ferdinandin isälle. Tämän kuoltua w. 1896 tuli perintöruhtinaaksi Frans Ferdinand. Siitä huolimatta meni 
          heinäkuun 1 pnä 1900 naimisiin w. 1868 syntyneen tsekkiläisen kreiwittären Sofie Chotekin kanssa, joka silloin korotettiin Hohenbergin ruhtinattareksi ja sittemmin herttuattareksi. Ennen 
          awioliittoa oli Frans Ferdinandin kuitenkin luopuminen kaikista wallanperimysoikeuksista tästä awiosta syntywäin lasten suhteen.</p>
        <h5>Uusi kruununperillinen.</h5>
        <p>Itäwalta-Unkarin uusi kruununperillinen arkkiherttua Karl Frans Josef on surmansa saaneen arkkiherttua Frans Ferdinandin weljenpoika, jonka hywäksi arkkiherttua Frans Ferdinand luopui 
          mennessään naimisiin kreiwitär Sofie Chotekin kanssa wallanperimysoikeudesta lastensa suhteen. Uusi kruununperillinen on syntynyt w. 1887 ja palwelee upseerina Itäwallan armeijassa. W. 
          1911 meni hän naimisin Parman prinsessan Zitan kanssa.</p>
      </Article>

      <div className="interTitle">4.7.1914</div>
      <Article titleText="Itävallan kruununperijän murha.">
        <h5>Belgradin sanomalehtien ennustukset.</h5>
        <p>„Berl. Tageblattin” kirjeenwaihtaja sähkötti lehdelleen Serajewosta heti murhapäiwänä:</p>
        <p>Ei kukaan epäile, etteikö murhateko ole aiheutunut serbialaisesta yllyttelystä. Todistuksena siitä on m. m. eräs lausunto Belgradissa ilmestywässä sanomalehdessä „Nowosti”, joka 
          torstaisessa numerossaan kirjoitti arkkiherttuan saapumisesta Bosnian manööwereille: <span className="quote">Itäwalta-Unkarin perintöruhtinas katselkoon tällä kertaa Bosniaa ja 
          Herzegowinaa tarkasti, sillä se on wiimeinen kerta, jolloin hänellä on siihen tilaisuutta</span>.</p>
        <h5>Serbialaiswaino Itäwallassa.</h5>
        <p><span className="accent">Wienistä</span>, kesäk. 30 p.<br />Koko Bosniassa, Herzegowinassa ja Kroatiassa wallitsee suunnaton mielten kiihtymys. Hallitsijasuwulle uskollinen wäestön osa panee 
          toimeen mielenosoituksia ja wäkiwaltaisuuksia serbialaisia kohtaan. Tästä huolimatta owat Budapestistä saapuneet tiedot, että Herzegowinan pääkaupunki Mostar palaa ja että siellä on 
          murhattu 2 serbialaista, melkoisesti liioiteltuja. Kaikissa Bosnian ja Herzegowinan kaupungeissa on pantu toimeen wakawia werilöylyjä serbialaisten keskuudessa.</p>
        <p><span className="accent">Serajewosta</span>, kesäk. 30 p.<br />Eilisten serbialaiswastaisten mellakoitten aikana häwitettiin kaikki serbialaisten kaupat. Europa-hotellissa pantiin toimeen 
          perinpohjainen häwitys. Etenkin muhamettilaiset ottiwat innokkaasti osaa serbialaiswainoihin. Paljon serbialaisia pakenee perheineen Serajewosta Mostariin.</p>
        <h5>Itäwallan esitys Serbian hallitukselle.</h5>
        <p><span className="accent">Wienistä</span>, heinäk. 1 p.<br />Itäwalta-Unkarin hallitus aikoo lähettää Belgradiin nootin, jossa waaditaan salaliittolaisjärjestön toiminnan lopettamista 
          Serbiassa, joiden järjestöjen tarkoituksena on kapinan aikaansaaminen Itäwalta-Unkarissa ja terroristisen liikkeen kehittäminen. Nootissa ehdotetaan myöskin, että Serbian ja Itäwallan 
          wiranomaiset toimisiwat yhdesssä arkkiherttuata wastaan tehdyn salaliiton paljastamiseksi. Tätä ehdotusta perustellaan sillä, että kaikki arkkiherttuan murhaa koskewat tiedot wiittaawat 
          Serbiassa olleen rikollisen järjestön.</p>
        <h5>Serbian sanomalehdistä.</h5>
        <p><span className="accent">Belgradista</span>, heinäk. 1 p.<br />Sanomalehdistö ilmoittaa yksimielisesti että Serajewon murha on tehnyt sywän waikutuksen, arwostelee tapahtumaa mielettömän 
          anarkistin tekona sekä wäittää wääräksi wäitettä, että ilkityön alkujuuri on löydettäwissä Serbiasta. Serbialla ei ole mitään tekemistä werityön kanssa, jonka juuret owat Bosnian 
          tyydyttämättömässä hallinnossa. Kuningas Pietari ja perintöruhtinas Aleksanteri owat ilmituoneet walittelunsa keisari Frans Josefille tapahtuman johdosta.</p>
        <p>Itäwalta-Unkarin waltuutetut, jotka saapuiwat tänne neuwottelemaan itäisistä radoista, owat matkustaneet Wieniin ja neuwottelut owat toistaisekst keskeytetyt.</p>
        <h5>Arkkiherttuan henkivakuutus.</h5>
        <p><span className="accent">Wienistä</span>, heinäk. 1 p.<br />Kerrotaan, että arkkiherttua-wainaja oli wakuutettu eräässä hollantilaisessa henkiwakuutusyhtiössä 30 milj. kruunusta ja hänen 
          puolisonsa 15 milj. kruunusta.</p>
        <h5>Serbia ja Montenegro liittywät yhteen.</h5>
        <p><span className="accent">Parisista</span>, heinäk. 1 p.<br />„Figaron” luotettawista lähteistä saamien tietojen mukaan owat Serbia ja Montenegro päättäneet liittyä unioniksi.</p>
        <h5>Kowa kohtalo</h5>
        <p>näyttää erityisesti seuraawan wanhan keisarin Frans Josefin lähimpää perhepiiriä. Yksi toisensa jälkeen hänen likeisimmistään on saanut kaatua wäkiwaltaisen kuoleman uhrina.</p>
        <p>Itse oli hän murhayrityksen alaisena 18 päiwänä helmikuuta 1858, jolloin unkarilainen Libenyi arweluttawasti haawoitti häntä tikarilla.</p>
        <p>Hänen nuorempi weljensä Maksimilian, Meksikon keisari, teloitettiin wallankumouksen jälkeen, kesäk. 19 pnä 1867.</p>
        <p>Hänen ainoa poikansa, lahjakas arkkiherttua Rudolf, löydettiin 30 päiwänä tammikuuta 1889 Mayerlingissä wäkiwaltaisesti kuolleena salaperäisissä oloissa. Virallisen selityksen mukaan oli 
          hän tehnyt itsemurhan yhdessä rakastajattarensa, kreiwitär Maria Wetseran kanssa, myöhempien yksityistietojen mukaan oliwat molemmat murhatut.</p>
        <p>Keisarin puolison, keisarinna Elisabetin, murhasi muuan anarkisti Bucheni Genewessä tikarilla 10 pnä syysk. 1898.</p>
        <p>Nyt on toinen hänen aikaisistaan perintöruhtinaista, hänen weljensä poika Frans Ferdinand puolisoineen murhattu.</p>
        <p>On siinä wäkiwaltaista kuolemaa yhden perheen osaksi yhden perheen isän eläessä.</p>
      </Article>

      <div className="interTitle">11.7.1914</div>
      <Article titleText="Serbian lähetystöjen „toiminta”.">
        <p><span className="accent">Berlinistä</span>, heinäk. 9 p.<br />Sähkösanomatoimisto „Unionin” Lontoosta saamien tietojen mukaan on Serbian sikäläisessä lähetystössä ollut erityinen salainen 
          toimisto, jonka tehtäwänä oli agiteerata Itäwaltaa Unkaria wastaan. Toimiston salaisessa osastossa laadittiin kolme erilaisia salaliittosuunnitelmaa arkkiherttua Frans Ferdinandin wastaan. 
          Wiime huhtikuussa muutti Serbian lähetystö toiseen huoneistoon ja silloin joutui muutamia salaista toimistoa koskewia asiakirjoja sanomalehtien käsiin.</p>
      </Article>
      <Article titleText="Serajewon murhan seurauksia.">
      <h5>Useita salaliittolaisia wangittu, m. m. Zabrinowitshin sisar.</h5>
      <p><span className="accent">Wienistä</span>, heinäk. 8 p.<br />Sarajewosta saapuneiden tietojen mukaan owat arkkiherttuan ja hänen puolisonsa murhaa tutkiwat wiranomaiset saaneet ilmi suuren 
        joukon murhaan osallisia henkilöitä. Eilen wangittiin Sarajewossa Zabrinowitshin sisar ja tämän mies, kaupunginlääkäri Bulinitsh. Huhujen mukaan löydettiin Bulinitshin luota joukko kirjeitä, 
        joiden awulla tutkimusta toimittawat wiranomaiset owat päässeet muitten murhaan osaaottaneiden jäljille.</p>
      </Article>

      <div className="interTitle">14.7.1914</div>
      <Article titleText="Serbia ja Itävalta.">
      <h5>Saksa jyrkästi Itäwallan puolella.</h5>
      <p><span className="accent">Berlinistä</span>, heinäk. 10 p.<br />Wirallisista lähteistä ilmoitetaan, että Saksa on päättänyt kannattaa kaikissa olosuhteissa niitä waatimuksia, joita Itäwalta 
        esittää Serbialle, sekä waatia, että ne tarkoin täytetään. Jos Wenäjä ja Ranska koettawat yllyttää Serbiaa wastarintaan tai Serbia koettaa pettää Itäwalta-Unkarin hallitusta tai Wenäjä 
        kannattaa Serbiaa aseita helistelemällä, niin Saksa, sodankin uhatessa Wenäjän kanssa, tulee mitä jyrkimmin puolustamaan Itäwallan waatimuksta. Saksa tulee tarkoin täyttämään 
        welwollisuutensa Itäwalta-Unkaria kohtaan liittowaltiona, sillä Saksa on sitä mieltä, että sodan sattuessa Serbian ja Itawalta-Unkarin wälillä woidaan yleis-europalainen sota wälttää 
        ainoastaan siten, että Wenäjä ja Ranska estetään sekaantumasta asiaan.</p>
      </Article>

      <div className="interTitle">18.7.1914</div>
      <Article titleText="Italia asettaa sotajoukkonsa liikekannalle.">
        <p>Wiikon alkupuolella määräsi Italian hallitus yli 100,000 miestä asetettawaksi liikekannalle. Syyksi ilmoitettiin Italiassa parhaillaan wallitsewa rautatielakko. Syy tuntui kuitenkin 
          hywin etsityltä ja yleensä pidetäänkin näiden sotilaallisten liikkeiden tarkoituksena painostuksen harjoittaminen Italian naapureihin, Itäwaltaanko waiko Kreikkaan on wielä epätietoista 
          kummallakin taholla on osotettu ilmeistä hermostumista Italian toimenpiteiden wuoksi. Lewottomuutta lisää wielä Itäwallan ja Serbian äärimmilleen jännittyneet wälit ja Albanian 
          tapahtumat.</p>
      </Article>

      <div className="interTitle">23.7.1914</div>
      <Article titleText="Itäwalta ja Serbia.">
        <h5>Wälit huononewat silminnähtäwästi.</h5>
        <p><span className="accent">Belgradista</span>, heinäk. 20 p.<br />Itäwallan ja Serbian wälien huonontuminen on silminnähtäwä. Paikallisissa sanomalehdissä on jyrkkä wastalause Itäwallan puoliwirallisten lehtien Serbiaa wastaan tähdättyjen kirjoitusten 
          johdosta, jotka owat käyneet päiwä päiwältä yhä räikeämmiksi. Hallitus kehoittaa sanomalehdistöä maltillisuuteen. Itäwallan tawarain boikottauksella ei ole yleistä luonnetta, joskin monet 
          pelolla katsowat lähimpään tulewaisuuteen. Yleinen mielipide waatii hallitusta ottamaan selon siitä, miten muut suurwallat, etenkin Wenäjä, tulewat menettelemään, jos Itäwalta esittää 
          Serbialle mahdottomia waatimuksia. Täällä on suurella tyytywäisyydellä otettu wastaan Rumanian sanomalehdistön wakuutukset, että Serbia saa olla warma Rumanian myötätunnosta, sen kun on 
          omien etujensa wuoksi toimittawa yhdenmukaisesti Serbian kanssa.</p>
      </Article>

      <div className="interTitle">25.7.1914</div>
      <Article titleText="Itäwallan ja Serbian suhteet paranemaan päin?">
      <p><span className="accent">Pietarista</span>, heinäk. 23 p.<br />Wetsy Wremja kertoo serbialaisista lähteistä saamiensa tietojen mukaan, että Itäwalta-Unkarin ja Serbian suhteet owat paranemaan 
        päin, sillä useat kaksoismonarkian poliittiset toimihenkilöt owat sitä mieltä, että nykyoloissa olisi waarallista aiheuttaa selkkauksia. Yleensä arwellaan, että Itäwallan hallitus kehoittaa 
        Serbian hallitusta toimittamaan Sarajewon murhasta tutkimuksia Serbiassa sillä perusteella, mitä Itäwallassa on saatu ilmi. Serbian johtawat piirit hywäksywat täydellisesti tämän waatimuksen 
        ja tulee Serbian hallitus antamaan wastauksia kaikkiin kysymyksiin, joita Itäwalta esittää.</p>
      </Article>
      <Article titleText="Sodan uhka Itävallan ja Serbian välillä.">
        <p><span className="accent">Wien</span>, heinäk. 23 p.<br />Wirallisesti ilmoitetaan, että Itäwallan nootit on jätetty Serbian hallitukselle. Nootissa waaditaan, että Serbian tulee lopettaa n. k. 
          suurserbialainen propaganda sekä pitää huolta siitä, ettei uusia terroristista tekoja Serbiasta käsin enään suunnitella. Serbian wirallisessa lehdessä tulee julkaista kuningas Pietarin 
          allekirjoituksella wahwistettu manifesti, jossa lausutaan paheksuminen Serajewon murhan johdosta. Serbian hallituksen tulee lakkauttaa Narodna Obrana sekä muut poliittiset Itäwallan 
          wastaista kiihotustyötä harjoittawat seurat. Nootilla on uhkawaatimuksen luonne. Wastaus on annettawa 48 tunnin kuluessa. Aika päättyy lauantai-iltana klo 5.</p>
        <p><span className="accent">Belgrad</span>, heinäk. 24 p.<br />Itäwallan nootti on täällä herättänyt suurta huomiota ja kiihtymystä, tehden samalla masentawan waikutuksen. Muuan hallitusmies on 
          ilmoittanut hallituksen tulewan säilyttämään maltillisuutensa.</p>
        <p><span className="accent">Pietari</span>, heinäk. 24 p.<br />Wienistä on warmoista lähteistä saapunut tietoja Itäwallan ryhtyneen asettamaan Bosniassa, Herzegowinassa ja Serbian rajalla olewia 
          joukkojaan liikekannalle.</p>
        <p><span className="accent">Berlin</span>, heinäk. 24 p.<br />Berlinin aamulehdet suhtautuwat hywin pahaaennustawasti asemaan. Täkäläisissä poliittisissa piireissä pidetään sotaa wälttämättömänä. 
          Waltiollinen asema on synkempi kuin w. 1912 ensimäisen Balkanin sodan puhjetessa. Serbia on uskaltanut jatkaa uhittelewaa käytöstään luottaen Wenäjän apuun. Saksa tulee asettumaan 
          Itäwallan puolelle.</p>
      </Article>

      <div className="interTitle">28.7.1914</div>
      <Article titleText="Sodan uhka.">
        <Divider className="dividerStyle" />
        <h4>Asema äärimmilleen jännitetty.</h4>
        <h5>Wenäjän toimenpiteet.</h5>
        <p><span className="accent">Pietarista</span>, heinäk. 25 p.<br />Ministerineuwoston istunnossa eilen, jossa käsitteltiin Itäwalta-Unkarin ja Serbian wälistä selkkausta, oltiin yksimielisiä 
          siitä, ettei Wenäjä mitenkään woi sallia tasapainon järkyttämistä Balkanilla. Edelleen päätettiin antaa Wenäjän Wienissä olewan lähettilään tehtäwäksi ilmoittaa Itäwalta-Unkarin 
          hallitukselle, että Wenäjän hallitus pyytää wastausta koskewan määrä-ajan pitentämistä, woidakseen tutustua itäwaltalaisen tutkimuksen aineistoon. Tämän ohessa huomautetaan Itäwalta-
          Unkarin hallitukselle, että suurin osa Itäwalta-Unkarin nootissa olewia kysymyksiä koskee myöskin muiden suurwaltojen etuja, jonka wuoksi olisi tarkoituksenmukaista, että niille annetaan 
          mahdollisuus wälittää Itäwalta-Unkarin ja Serbian wälisessä seikkauksessa. Samalla päätettiin kehottaa waltoja kaikin tawoin kannattamaan Wenäjän esiintymistä.</p>
        <p><span className="accent">Pietarista</span>, heinäk. 25 p.<br />Ministerineuwoston eilisen istunnon jälkeen ilmoitti Venäjän hallitus, mikäli Birsh. Wjedomostille kerrotaan, Ranskan ja 
          Englannin hallituksille, että jos Itäwalta-Unkari toteuttaa uhkauksensa, ryhtyy Wenäjä mitä tarmokkaimpiin toimenpiteisiin.</p>
        <h5>Sota walmistukset täydessä käynnissä.</h5>
        <p><span className="accent">Berlinistä</span>, heinäk. 25 p.<br />Wienistä ilmoitetaan, että Itäwalta-Unkari katkaisee tänään diplomaattiset suhteensa Serbiaan, jos Serbia antaa 
          uhkawaatimukseen epääwän wastauksen. Saksalaisten sanomalehtien kirjeenwaihtajalle on ilmoitettu, että Itäwalta-Unkari on jo ryhtynyt laajoihin sotatoimenpiteisiin. Tänä iltana antaa 
          keisari Frans Josef käskyn armeijan liikekannalle asettamisesta. Sotaretki Serbiaa wastaan tulee olemaan lyhytaikainen. Sotilaspiireissä toiwotaan, että Serbia lyödään kahdessa tai 
          kolmessa taistelussa ja pakoitetaan pyytämään rauhaa. Serbiaa wastaan asetetaan 350,000 miestä. Osa Itäwalta-Unkarin sotajoukoista tulee kulkemaan Montenegron alueen läpi.</p>
        <p><span className="accent">Belgradista</span>, heinäk. 25 p.<br />Itäwalta-Unkari keskittää suuria sotajoukkoja Sawen ja Tonawan warsille. Semlinin kaupunki on tulwillaan sotawäkeä. 
          Pääministeri Basitsh on palannut, kenraali Putnik on kiireellisesti kutsuttu Belgradiin.</p>
        <h5>Serbian aikeet.</h5>
        <p><span className="accent">Berlinistä</span>, heinäk. 25 p.<br />Ulkoministeriö on tänä aamuna saanut Belgradista sähkösanoman, jossa ilmoitetaan Serbian hallituksen aikowan hylätä 
          Itäwalta-Unkarin ultimaatumin. Serbia ei nähtäwästi anna siihen yksityiskohtaista wastausta, waan ilmoittaa lyhyesti, ettei se woi hywäksyä kaikkia esitettyjä waatimuksia. Heti kun 
          tämä kielteinen wastaus on annettu, lähtee Belgradin linnawäki kaupungista. Samalla siirretään waltio-arkisto ja waltiorahasto Nishiin, jonne myös howi muuttaa. Pasitsh on sitä mieltä, 
          että Belgrad on laukaustakaan ampumatta jätettäwä Itawalta-Unkarin joukkojen käsiin, mikä heti aiheuttaa suurwaltain sekaantumisen. Belgradissa olewat Itäwalta-Unkarin ja Saksan 
          lähettiläät owat wakuutetut siitä, ettei Itäwalta-Unkari suostu pitentämään määräaikaa, jonka kuluessa wastaus on annettawa. Jos ultimaatumi hylätään, kutsuu Itäwalta-Unkari jo tänään 
          lähettiläänsä pois Belgradista.</p>
        <h5>Serbian wastaus on kielteinen.</h5>
        <p><span className="accent">Wienistä</span>, heinäk. 25 p.<br />Serbia on antanut hylkääwän wastauksen Itäwallan noottiin. Itäwallan lähettiläs on kutsuttu pois Belgradista. Kreikka ja 
          Montenegro kannattawat Serbiaa.</p>
        <p><span className="accent">Pietarista</span>, heinäk. 25 p.<br />Wetsh. Wremjan tietojen mukaan tulewat Kreikka ja Montenegro kannattamaan Serbiaa sodassa. Rumanian kanta on epämääräinen.</p>
        <p><span className="accent">Wienistä</span>, heinäk. 25 p.<br />Täällä on tehnyt suuremmoisen waikutuksen se, että Rumania on alkanut asettaa sotajoukkojaan liikekannalle Unkarin rajalla.</p>
        <p><span className="accent">Parisi</span>, heinäk. 26 p.<br />Matinille saapuneiden tietojen mukaan on Bulgaria luwannut Serbialle pysyä puolueettomana tulewassa sodassa.</p>
        <h5>Suurwallat.</h5>
        <p><span className="accent">Pariisi</span>, heinäk. 26 p.<br />Kaikki ministeriöt etenkin sotaministeriö työskentelewät kuumeentapaisesti. Armeija walmistetaan taistelukuntoon.</p>
        <p><span className="accent">Pietari</span>, heinäk. 26 p.<br />Täällä liikkuu huhuja, että Englannin laiwasto sodan sattuessa saapuisi Itämerelle estämään Saksan laiwaston liikkeitä 
          itämerellä.</p>
        <h5>Pietari erityiseen suojelustilaan.</h5>
        <p><span className="accent">Pietari</span>, heinäk. 26 p.<br />Kaikkein korkeimmalla käskykirjeellä on Pietarin kaupunki julistettu lisätystä suojelustilasta erityiseen suojelustilaan.</p>
      </Article>
      <Article titleText="Rauha taikka sota?">
        <p>Now. Wremja kirjoittaa sunnuntaina:</p>
        <QuoteStart className="symbolStyle"/>
        <p>Rauha taikka sota? Aamulla kaikkialla puhuttiin rauhasta, senwuoksi kun sekä Serbia, jonka kurkkuun käytiin keskellä päiwää kiinni, että Wenäjä, jonka 
        rauhaa rakastawaisuudella ei ole rajoja, oliwat walmiita tekemään kaiken, jotta miekat pysyisiwät huotrissaan. Itäwalta teki itsenäisesti, kun hallitsewalle Serbialle jätti mitä 
        alentawimmat waatimukset, jollaisia ei ole koskaan tehty, ei edes wasalliwaltiollekaan, ja Serbia wastasi: me olemme walmiit alistumaan kaikkeen, olemme walmiit wastaanottamaan minkä 
        arwon tahansa, mutta jättäkää te riitamme waltioille, mikä on ainoa oikeudenmukainen ratkaisu, mikä perustuu kansainwäliseen sopimukseen, mutta mihinkä sowinto-oikeuteen, tai yleensä 
        mihinkä oikeuteen menee se, joka on päättänyt mennä waltamaantielle ryöstöaikomuksessa. Wenäjälle esitettiin tutkimuksen toimeenpano muutamaa tuntia ennen rankaisua, jonka Itäwalta oli 
        päättänyt tehdä. Wenäjä, joka suurilla uhrauksilla ja kansansa werellä on luonut Balkanin waltioiden wapauden, waatii ainoastaan: laskekaa miekkanne ja ilmoittakaa, mistä te syytätte 
        Serbiaa, mikä on ollut syynä tällaiseen ennen kuulumattomaan rankaisuun? Tätä seurasi röyhteä wastaus, ilman mitään sääliä heikompaa ja syytöntä kohtaan, ilman mitään kunnioitusta aina 
        rauhaa rakastawan suurwallan arwoa wastaan. Oikeutta wastaan on huutawa mieliwaltaisuus, oikeudenmukaisuutta - ryöstö waltamaantiellä. Mutta tämä tie ei kulje synkän metsän kautta ja 
        pienen onnettoman waltion huuto, jonka Itäwalta aikoo tukahuttaa, ei jää tyhjiin. Hänen wanhin slaawilainen weljensä on hänen wieressään, ja hywin ymmärtäen ketä wäkiwallanharjoittaja 
        haastaa taisteluun, pienen Serbian pään yli on kohotettu miekka suurta Wenäjää wastaan. Emme me ole synnyttäneet sotamyrskyä, minkä wuoksi ryöstäjiä ja wäkiwallanharjoittajia kohtaan 
        sowellutettanee suuret sanat: „joka miekkaan tarttuu, hän miekkaan lankee”. Alottajaa wastaan on itse Jumala! Me, jos kohtalo niin tahtoo, otamme ainoastaan wastaan haasteen ja wanhan 
        tawan mukaan yhteiswoimin puolustamme oikeuttamme ja kunniaamme, me emme hae mitään, mutta emme myöskään mitään anna. Itäwallalla ja sen innostuttajilla on wielä aika tuumia eikä 
        surkutella kohtaloaan. Wielä on aika wäistää weristä oikeutta.</p>
        <p>Alottajaa wastaan on itse Jumala!</p>
        <QuoteEnd className="symbolStyle"/>
      </Article>
      <Article titleText="Sodan uhka.">
        <h5>Mielenosoituksia.</h5>
        <p><span className="accent">Berlin</span>, heinäk. 26 p.<br />Eilen myöhään yöllä pani suuri kansanjoukko täällä toimeen wenäläiswastaisia mielenosotuksia. 
          Kuului huutoja: <span className="quote">Alas Wenäjä! Eläköön sota!</span></p>
        <p><span className="accent">Wien</span>, heinäk. 26 p.<br />Myöhään yöllä pantiin täällä toimeen suuria serbialaiswastaisia mielenosotuksia.</p>
        <p><span className="accent">Pietari</span>, heinäk. 26 p.<br />Eilen toimeenpani täällä satalukuinen kansanjoukko mielenosotuksen Serbian lähetystön edustalla. Kuului 
          serbialaisystäwällisiä huutoja. Serbian lähettiläs kiitti mielenosottajia kohottaen eläköönhuudon H. M. Keisarille.</p>
        <p><span className="accent">Hampuri</span>, heinäk. 26 p.<br />Tänään wallitsee täällä suuri lewottomuus. Kaduilla on suuria wäkijoukkoja, isänmaallinen innostus on suuri. Wenäläiset 
          arwopaperit owat huimasti laskeneet.</p>
        <h5>Serbian wastaus.</h5>
        <p><span className="accent">Belgrad</span>, heinäk. 26 p.<br /> Itäwallalle antamassaan wastauksessa Serbia ilmoittaa mielellään suostuwansa kaikkiin kohtuullisiin waatimuksiin. Wastaus 
          on laadittu ystäwälliseen muotoon.</p>
        <h5>Sotajoukot liikekannalla.</h5>
        <p><span className="accent">Belgrad</span>, heinäk. 26 p.<br />Wirallisessa lehdessä on julkaistu kuninkaallinen käskykirje sotajoukkojen liikekannalle asettamisesta. Skupshina on 
          kutsuttu kokoon. Wenäjän lähetystö siirtyy Grusewalkiin.</p>
        <h5>Kenraali Putnik wangittu ja wapautettu.</h5>
        <p><span className="accent">Berlin</span>, heinäk. 26 p.<br />Eräästä Itäwallan kylpypaikasta Berliniin matkalla olewa Serbian yleisesikunnan päällikkö kenraali Putnik on sotaministerin 
          määräyksestä wangittu Unkarissa.</p>
        <p>Myöhemmin saapuneen tiedon mukaan on kenraali Putnik wapautettu.</p>
        <h5>Wenäjä ja sodan uhka.</h5>
        <p><span className="accent">Kiew</span>, heinäk. 26 p.<br />Tänään saapunut sähkösanoma tietää, että owat kaiki rautatiet Itäwallan itäosassa lähellä Wenäjän rajaa annettu erityisten 
          komendanttien päällikkyyden alaiseksi</p>
        <p><span className="accent">Pietarista</span>, heinäk. 26 p.<br />Pariisiin saapuneiden tietojen mukaan on Pietarissa ilmoitettu Serbian lähettiläälle Wenäjän awustawan Serbiaa.</p>
        <h5>Montenegro yhtyy Serbiaan.</h5>
        <p><span className="accent">Wien</span>, heinäk. 27 p.<br />Montenegero on ryhtynyt asettamaan sotajoukkoja liikekannelle. Tulewassa sodassa se kannattaa Serbiaa.</p>
        <h5>Ensimäiset sotatapaukset.</h5>
        <p><span className="accent">Pietari</span>, heinäk. 27 p.<br />Berlinistä ilmoitetaan, että eilen klo puoli 2 ip. awasiwat serbialaiset kiiwaan tulen itäwaltalaista sotawäkeä Tonawalla 
          kulettawaa höyrylaiwaa wastaan. Ampumista kesti 10 min. Kupinin luona on itäwaltalainen monitorilaiwasto walmiina. Rene Freie Presse pitää eilistä tapausta sodan alkuna.</p>
        <h5>Paniikki pörsseissä.</h5>
        <p><span className="accent">Berlin</span>, heinäk. 25 p.<br />Kaikissa pörsseissä wallitsee paniikki. Arwopaperit owat laskeneet neljännen osan arwostaan. Wenäjän 36 %</p>
        <h5>Rauhan toiweet?</h5>
        <p><span className="accent">Lontoo</span>, heinäk. 27 p.<br />Grey on ilmottanut Wenäjän lähettiläälle, että ainoa keino yleiseurooppalaisen sodan ehkäisemiseksi, on kansainwälisen 
          kongressin kokoonkutsuminen. Tätä warten on wälttämätöntä, että Itäwalta luopuu kaikista sotatoimenpiteistä.</p>
        <p><span className="accent">Parisi</span>, heinäk. 27 p.<br />Suuri osa aamulehdistä suhtautuu toiwehikkaasti rauhan säilymiseen.</p>
      </Article>

      <div className="interTitle">30.7.1914</div>
      <Article titleText="Sota julistettu.">
        <p>Äärimmilleen jännitetty asema on wihdoinkin lauennut. Itäwalta-Unkarin keisarilliskuninkaallista hallitusta ei ole tyydyttänyt Serbian wastaus Itäwalta-Unkarin t. k. 22 pnä sille 
          jättämä nootti, ja senwuoksi se on päättänyt asewoimin ryhtyä puolustamaan oikeuksiaan ja etujaan katsoen olewansa wiime tiistaista lähtien sodassa Serbian kanssa.</p>
        <p>Itäwalta-Unkari saattoi tuskin odottaakaan uhkawaatimuksen muotoon laadittuun noottiinsa myöntäwää wastausta. Sisälsihän nootti m. m. waatimuksen, että Serbiassa Serajewon murhan 
          johdosta toimeenpantawien tutkimusten tulee tapahtua Itäwallan walwonnan alaisena. Tällainen waatimus, joka suorastaan tahtoi alistaa Serbian oikeuslaitoksen Itawallan tarkastuksen 
          alaiseksi oli omiaan entistä enemmän lisäämään kiihkeätä mielialaa Serbiassa. Serbialaiset owat sotaista kansa, jonka sotaisuutta ja itsetuntoa wiime Balkansodissa saawutettu menestys 
          on wielä suuresti lisännyt. Lisäksi luottaa Serbia wahwasti Wenäjän apuun ja sen turwissa se uskalsikin antaa kielteisen wastauksen, jonka seurauksena on nyt sodan julistus.</p>
        <p>Tietenkään eiwat wain nootissa mainitut waatimukset ole olleet ainoina sodan syinä, sillä on juurensa paljon sywemmällä. Jo kauwan owat serbialaiset unelmoineet mahtawasta 
          suurserbialaisesta waltiosta, joka rajojensa sisälle sulkisi kaikki nyt niin hajallaan asuwat serbialaiset. Wain murto-osa serbialaisista asuu nykyisessä Serbiassa, neljä miljoonaa 
          „huokaa Itäwallan ikeen alla” Glamoniassa, Kroatiassa, Bosniassa, Herzegowinassa ja Dalmatiassa. Yhä enemmän owat nämä Itäwallan serbialaiset wiime aikoina alkaneet tuntea kuuluwansa 
          yhteen Sawen ja Tonawan tuolla puolen wapaina asuwien serbialaisten kanssa. Näiden Balkanin sodassa saawuttammat woitot herättiwät wastakaikua Itäwallankin serbialaisissa ja sitä 
          raskaammalta on Itäwallan herruus alkanut tuntua heidän harteillaan. </p>
        <p>Seurauksena on ollut laajalle ulottuwa salainen toiminta serbialaisten wapauttamiseksi Itäwallan yliherruudesta. Todennäköisesti on näitä wapautuspyrkimyksiä johdettu warsinaisesta 
          Serbiasta ja sekin on osaltaan suuresti kylmentänyt slaawilaisten pyrkimyksiä walppaasti seuraawan Itäwallan ja Serbian jo ennestään jäykkiä wälejä. Näiden wapautuspyrkimysten raakana 
          ilmauksena on myöskin äskeinen Itäwallan arkkiherttuan ja hänen puolisonsa murha Serajewossa, jonka aiheuttama wastenmielisyydentunne kaikkea serbialaista kohtaan nyt on saanut aikaan, 
          että Itäwalta yhdellä iskulla tahtoo tehdä lopun kaikesta itäwallanwastasesta kiihotuksesta slaawilaismaakunnissaan. </p>
        <p>Toimenpide on kuitenkin waarallinen ja saattaa hetkellä millä tahansa herättää „maailmanpalon”. Venäjä on luwannut apuaan Serbialle. Saksa sitäwastoin on jyrkästi asettunut Itäwallan 
          puolelle. Englanti ja Ranska owat epäröimässä haluten mieluummin ratkaista kysymyksen rauhallista tietä. Se on kuitenkin jo myöhäistä Itäwallan alotettua warsinaiset sotatoimenpiteet. 
          Ranska ja Englanti owatkin asettuneet Serbian puolelle sekä Italia Itäwallan.</p>
        <p>Tulewat päiwät saattawat tuoda mukanaan arwaamattomia seurauksia.</p>
      </Article>

      <Article titleText="Sota Itäwallan ja Serbian wälillä.">
        <Divider className="dividerStyle" />
        <h4>Sota julistettu.</h4>
        <p className="centered">Itäwallan sotajoukot kulkeneet Serbian rajan yli.</p>
        <h5>Itäwalta julistanut sodan.</h5>
        <p><span className="accent">Pietarista</span>, heinäk. 28 p.<br />Serbian pääministeri Pashitsh on lennättänyt Serbian täkäläiselle lähettiläälle, että Itäwalta tänään klo 12 päiw. on 
          julistanut sodan Serbiaa wastaan.</p>
        <p><span className="accent">Wienistä</span>, heinäk. 28 p.<br />Wirallisen lehden julkaisemassa lisälehdessä on Itäwalta-Unkarin hallitus antanut seuraawan tiedonannon:<br />
          <span className="quotationStyle">Koska Serbian hallitus ei ole antanut tyydyttäwää wastausta Itäwalta-Unkarin noottiin t. k. 23 päiwältä, on Itäwalta-Unkarin hallitus päättänyt turwautua aseisiin puolustaakseen 
          oikeuksiaan ja etujaan ja katsoo olewansa sodassa Serbian kanssa.</span></p>
        <h5>Serbian pääministeri panee syyn Itäwallan niskoille.</h5>
        <p><span className="accent">Parisista</span>, heinäk. 28 p.<br />Keskustellessaan Matinin kirjeenwaihtajan kanssa on Pashitsh huomauttanut, että oikeus on kokonaan Serbian puolella. 
          Serbian hallitus on tehnyt woitawansa tyydyttääkseen Itäwalta-Unkarin hallituksen waatimukset, mutta se tuntee samalla edeswastuunsa maan ja siwistyneen maailman edessä. Kysymykseen, 
          onko totta, että itäwaltalaiset owat Tonawalla wallanneet kaksi serbialaista kuletuslaiwaa, wastasi Pashitsh myönteisesti.</p>
        <h5>Itäwallan ja Serbian wälinen silta räjäytetty ilmaan.</h5>
        <p><span className="accent">Wienistä</span>, heinäk. 28 p.<br />Sanomalehtien tietojen mukaan owat serbialaiset räjäyttäneet ilmaan sillan Shemlinin ja Belgradin wälillä.</p>
        <h5>Serbialaiset sotajoukot jättäneet Belgradin.</h5>
        <p><span className="accent">Belgradista</span>, heinäk. 28 p.<br />Kuningas Pietari, heikosta terweydestään huolimatta on saapunut armeijan pääkortteriin. Sotajoukkojen liikekannalle 
          asettaminen tapahtuu menestyksellisesti. Tänään aamulla owat wiimeiset serbialaiset sotajoukot lähteneet Belgradista. Kruununperillinen Aleksander on ryhtynyt armeijan ylikomentajaksi. 
          Elämä kaupungissa on kokonaan kuollut. Pankit owat suljetut.</p>
        <h5>Itäwalta-Unkarin armeija marssinut Serbian rajan yli.</h5>
        <p><span className="accent">Berlinistä</span>, heinäk. 27 p.<br />Tänne on juuri saapunut pikainen sähkösanomatieto Wienistä, että arkkiherttua Friedrich, Itäwallan armeijan ylitarkastaja, on nimitetty toimiwan armeijan ylikomentajaksi. Wienissä 
          wallitsee suuri mieltenkiihko hallituksen ilmoituksen johdosta, että sota aletaan tänään aamulla. Itäwaltalaiset sotajoukot hyökkääwät Mitrowitsaa kohti.</p>
        <p><span className="accent">Parisista</span>, heinäk. 28 p.<br />Matinin tietojen mukaan owat Itäwallan sotajoukot menneet Serbian rajan yli. Itäwallan diplomatit ilmoittawat, että 
          waltaus on wäliaikainen.</p>
        <h5>Serbian sotatoimet.</h5>
        <p><span className="accent">Wienistä</span>, heinäk. 28 p.<br />Tänne saapuneiden tietojen mukaan keskittää Serbia suuria sotajoukkoja Semedrowoon Tonawan lähellä.</p>
        <SubDivider className="dividerStyle" />
        <h4>Toimet rauhan säilymiseksi.</h4>
        <h5>Englannin ulkoasiainministeri tehnyt tärkeän ehdotuksen muille walloille.</h5>
        <p><span className="accent">Lontoosta</span>, heinäk. 28 p.<br />Grey ilmoitti alahuoneessa, että Englannin Berlinissä, Parisissa ja Roomassa olewien lähettiläitten tehtäwäksi on annettu 
          tiedustella, suostuwatko mainitut waltiot siihen, että niiden Lontoossa olewat lähettiläät saawat ottaa osaa kongressiin, jonka etupäässä on Grey ja joka tulee keskustelemaan 
          toimenpiteistä nykyisten waikeuksien poistamiseksi. Samalla on Grey käskenyt Englannin Wienissä, Pietarissa ja Belgradissa olewia lähettiläitä ilmoittamaan aijotusta kongressista ja 
          pyytämään, että sotatoimenpiteet lopetettaisiin, siksi kunnes kongressin tulokset owat käyneet selwille.</p>
        <p><span className="accent">Parisista</span>, heinäk. 28 p.<br />Asiantuntewista lähteistä ilmoitetaan, että jollei Saksa tänään yhdy Greyn kongressin kokoonkutsumista koskewaan 
          ehdotukseen, niin kansainwälinen asema saa yhtä jännitetyn luonteen, kuin sillä oli wiime lauantaina. Arwellaan, että Itäwalta-Unkari antaa wiipymättä käskyn sotajoukoilleen hyökätä 
          Serbian rajan yli ja wallata joitakuita strategisia paikkoja sekä, että se pitää niitä hallussaan siksi kunnes Serbia on antanut tyydyttäwän wastauksen. Serbialaiset sotajoukot eiwät 
          tässä tapauksessa aijo ryhtyä wastarintaan. Mitä Wenäjään tulee, asettuu se aluksi odottawalle kannalle sekä waatii wasta jälkeenpäin, että Serbian alueen ja itsenäisyyden 
          koskemattomuus turwataan.</p>
        <p><span className="accent">Pietarista</span>, heinäk. 28 p.<br />Tänään aamulla oli kolmiliiton lähettiläillä pitkäaikainen neuwottelu. Tänään tulewat lähettiläät keskustelemaan 
          Sasonowin kanssa. Kaikki nämä neuwottelut owat yhteydessä Greyn tekemän ehdotuksen kanssa.</p>
        <p><span className="accent">Lontoosta</span>, heinäk. 28 p.<br />Ulkoministeriöön on saapunut tieto, että Ranska ja Italia owat hywäksyneet Greyn ehdotuksen.</p>
        <p><span className="accent">Parisista</span>, heinäk. 27 p.<br />Täällä toiwotaan erityisten toimenpiteiden, joihin Englannin diplomatia on ryhtynyt, johtawan hywiin tuloksiin. Lontoossa 
          on laadittu kokonainen sarja ehdotuksia. Ranskan lähettiläs, joka on ollut Parisissa, on palannut takaisin Lontooseen.</p>
        <p><span className="accent">Pietarista</span>, heinäk. 28 p.<br />Wenäjän diplomaattien ilmoituksen mukaan oli asema eilen illalla yhä jännitetty, joskin edellytykset yhteentörmäyksen 
          wälttämiseen oliwat jonkun werran lisääntyneet. Suurin paino asetetaan nykyään Berlinin ja Lontoon wälisille keskusteluille. Kysymys Itäwalta-Unkarin ja Serbian wälisen selkkauksen 
          keskittämisestä on näistä keskusteluista kokonaan erotettu.</p>
        <h5>Sota ja rauha riippuu Saksasta.</h5>
        <p><span className="accent">Pariisista</span>, heinäk. 28 p.<br />Kaikki katseet owat tänään kiintyneet Berliniin, jossa keisari Wilhelm, kuten ilmoitetaan, on ryhtynyt johtamaan 
          poliittisia tapahtumia. Suurta hämmästystä owat Parisissa herättäneet tiedot Saksan sotawalmistuksista pitkin Ranskan rajaa. Saksa lisää sotajoukkojaan Metzissä, Trierissä ja 
          Friedenhafenissa. Näillä seuduilla on huomattawissa suuria sotajoukkojen liikuntoja. Ulkoministeriöstä on Serbian wastauksen johdosta ilmoitettu sanomalehtien edustajille, ettei lainkaan 
          woitu odottaa Serbian suostuwan niin suuriin myönnytyksiin ja tyydyttäwän melkein kaikki Itäwallan waatimukset. Aamulehdet owat yksimielisiä siitä, että sota ja rauha riippuwat niistä 
          päätöksistä, jotka tänään tehdään Berlinissä. Myöhään yöllä alkoiwat mielenosotukset suurilla bulewardeilla uudestaan. Yli 100 henkeä on wangittu. Tänne on saapunut tieto, että Belgia 
          ja Sweitsi owat yleisen sodanuhkan wuoksi ryhtyneet sotawalmistuksiin.</p>
        <h5>Mielenosotuksia Pietarissa.</h5>
        <p><span className="accent">Pietarista</span>, heinäk. 28 p.<br />Wiime yönä tapahtui Pietarissa pari pienempää mielenosotusta nykyisen poliittisen aseman johdosta. Toinen pantiin toimeen 
          Newskillä ja otti siihen osaa muutamia satoja henkilöitä. Toinen mielenosottajain joukko, johon kuului noin satakunta henkeä Pietarin alhaisoa, lähti liikkeelle Taurian puiston luota 
          suunnaten kulkunsa Serbian lähetystön edustalle. Joukon etunenässä kannettiin kolmea waltakunnan lippua. Kaikki mielenosottajat kulkiwat awopäin. Milloin hymniä laulaen, milloin hurraata 
          huutaen saapui joukko Serbian lähetystön edustalle, jossa Wenäjän hymni laulettiin useita kertoja ja huudettiin eläköön-huutoja. Täältä aikoiwat mielenosottajat lähteä Itäwallan 
          lähetystön luo panemaan toimeen mielenosotuksen, mutta wankat poliisijoukot estiwät sen tunkeutumasta perille. Sen sijaan lähti joukko Englannin lähetystön edustalle, jossa se myöskin 
          lauloi Wenäjän hymniä ja kohotti hurraahuutoja. Tämän jälkeen huusi joukko: Alas Itäwalta! Pian saapui paikalle ratsastawa poliisiosasto, joka hajotti joukon. Mielenosotukseen ei 
          Pietarin parempi kansan aines ottanut osaa, ilmoittaa S. T. T:n kirjeenwaihtaja, waan kulki se kadulla täysin wälinpitämättömänä joukon siwu. Kaikesta päättäen oli mielenosotus 
          mustasotnialaisten järjestämä. Kerrotaan, että myöskin useat muut mielenosotukset owat saaneet alkunsa samalta taholta.</p>
        <p><span className="accent">Pietarista</span>, heinäk. 28 p.<br />Klo puoli 10 illalla: Kaikkialla kaupungilla panewat kansanjoukot toimeen monilukuisia mielenosotuksia. Newski ja sen 
          läheisyydessä olewat kadut owat tulwillaan kansaa, joka hurraata huutaen ja hymniä laulaen ohjaa kulkunsa Serbian ja Ranskan lähetystöjen edustalle pannen siellä toimeen suurenmoisia 
          myötätunnonosotuksia. Poliisi suhtautuu erittäin kohteliaasti yleisöön kieltäen siltä kuitenkin jyrkästi pääsyn Itawalta-Unkarin ja Saksan lähetystöjen edustalle, joita wartioiwat 
          wankat poliisi- ja sotajoukko-osastot</p>
        <h5>Wenäjän hallitus antanut julistuksen.</h5>
        <p><span className="accent">Pietarista</span>, heinäk. 28 p.<br />Hallitus on tänään antanut seuraawan julistuksen:</p>
        <QuoteStart className="symbolStyle"/>
        <p className="quotationStyle">Monilukuiset isänmaalliset mielenosotukset, joita wiimeksi kuluneina päiwinä on pantu toimeen pääkaupungissa y. m. keisarikunnan osissa, osottawat, että hallituksen luja ja 
          rauhallinen politiikka on saanut osakseen wäestön laajojen piirien myötätunnon. Hallitus toiwoo kuitenkin, etteiwät nämä kansallisten tunteiden ilmaukset saa wihamielisyyden wiwahdusta 
          suurwaltoja kohtaan, joiden kanssa Wenäjä on ja aina haluaa olla rauhallisessa suhteessa. Ammentaen woimaa kansallishengen kohoamisesta ja kehottaen Wenäjän asukkaita maltillisuuteen 
          ja rauhallisuuteen, tulee keisarillinen hallitus lujasti walwomaan Wenäjän arwoa ja etuja.<QuoteEnd className="symbolStyle"/></p>
        <h5>Yleinen asema tawattoman wakawa.</h5>
        <p><span className="accent">Pietarista</span>, heinäk. 28 p.<br />Ulkoministeriöstä on tänä iltana myöhään ilmotettu pietarilaisille sanomalehtimiehille, ettei asema wielä milloinkaan ole 
          ollut niin wakawa kuin tänään.</p>
        <h5>Rauhoittawia tietoja. — Englanti pysyy puolueettomana.</h5>
        <p><span className="accent">Berlinistä</span>, heinäk. 28 p.<br />Saksan ulkoastain ministeriö on waltuuttanut ilmoittamaan seuraawaa:</p>
        <QuoteStart className="symbolStyle"/>
        <p className="quotationStyle">Saksan hallituksen Wenäjältä saamain tietojen mukaan on siellä ryhdytty toimenpiteisiin sodan waralta wain sangen pienessä määrin, ainoastaan eräissä 
          piireissä. Walmistuksiin yleistä liikekannalle panoa warten ei ole ryhdytty. Siitä päättäen näyttää Wenäjän sekaantuminen pysywän diplomaattisissa rajoissa.
          <QuoteEnd className="symbolStyle"/></p>
        <p>Englannin kanta on yhtä rauhoittawa. Englanti koettaa waikuttaa wälittäjänä. Mutta jos asema kehittyy äärimmilleen, tulee Englanti pysymään puolueettomana. Samaa on wakuutettu 
          täkäläisissä asioita tuntewissa englantilaisissa piireissä.</p>
        <h5>Kreikan ja Rumanian suhtautuminen selkkaukseen.</h5>
        <p><span className="accent">Atenasta</span>, heinäk. 27 p.<br />Täkäläinen diplomatia ilmottaa jyrkästi, että liittosopimus ei pakota Kreikkaa sekaantumaan Itäwalta-Unkarin ja Serbian 
          wäliseen selkkaukseen.</p>
        <p><span className="accent">Pietarista</span>, heinäk. 28 p.<br />Luotettawasta romanilaisesta lähteestä ilmoitetaan, että Romanian hallitus ei aijo ottaa osaa sotaan ja on se asettanut 
          sotajoukkonsa liikekannalle yksinomaan sen wuoksi, että se tahtoo säilyttää tasapainon Balkanilla.</p>
        <h5>Sodan uhka lewinnyt „kaakosta luoteeseen asti”.</h5>
        <p><span className="accent">Lontoosta</span>, heinäk. 28 p.<br />Koko Englantia on hämmästyttänyt Belgian sotajoukkojen liikekannalle asettaminen, joka tapahtui samana päiwänä kuin 
          Serbiankin. Tätä pidetään todisteena siitä, että sodanuhka on lewinnyt kaakosta luoteeseen asti.</p>
        <h5>Itäwallan laiwat mustalla merellä.</h5>
        <p><span className="accent">Konstantinopoli</span>, heinäk. 29 p.<br />Itäwallan höyrylaiwayhtiö on kieltänyt laiwojaan poikkeamasta Mustanmeren satamtiin.</p>
      </Article>

      <Article titleText="Sota.">
        <h5>Serbialaiset hyökkääwät. - Greyn wälitysehdotus rauennut.</h5>
        <p><span className="accent">Berlin</span>, heinäk. 28 p.<br /> Serbian rajalla owat sotatoimenpiteet alkaneet. Greyn wälitysehdotus ei ole menestynyt. Serbialaiset owat yrittaneet mennä 
          Drinajoen yli, mutta itäwaltalaiset owat torjuneet hyökkäyksen. Ei ole ajateltawissakaan, että Itäwalta keskeyttäisi sotatoimet.</p>
        <p>Wienistä ilmoitetaan, ettei Itäwalta enään missään tapauksessa peräydy, ei edes siinäkään, että Serbia korwaisi sille kulut armeijan liikekannalle asettamisesta. Greyn wälitysehdotus 
          tarkotti etupäässä Itäwallan ja Wenäjän wälien sowittamista. Saksa on ilmoittanut täydellisesti yhtywänsä Itäwaltaan. Greyn suunnitelmat owat kokonaan rauenneet. Tästä huolimatta 
          tullaan keskusteluja suurwaltain kesken jatkamaan.</p>
        <h5>Itäwaltalaiset kulkeneet Sawejoen yli.</h5>
        <p><span className="accent">Parisi</span>, heinäk. 28 p.<br />Wiime yönä tänne saapuneiden sähkösanomain mukaan owat itäwaltalaiset ponttoonisiltaa myöden kulkeneet Sawejoen yli. Liikkeen 
          tarkoituksena on katkaista yhteys Semlinin ja Belgradin wälillä.</p>
        <h5>Saksan ja Englannin warustelut.</h5>
        <p><span className="accent">Lontoo</span>, heinäk. 29 p.<br />Tänne saapuneiden tietojen mukaan on Saksa kiireellisesti warustautunut sotaan. Wenäjän rajalle on koottu suuria 
          armeijaosastoja.</p>
        <p>Portsmouthissa tehdään kiireellistä sotawalmistuksia. Laiwaston reserwi on asetettu liikekannalle. Arsenaalit ja warastot warustetaan sodan waralta.</p>
        <h5>Itäwallan armeija liikekannalla.</h5>
        <p><span className="accent">Berlin</span>, heinäk. 28 p.<br />Sotawäen liikekannalle asettaminen sujuu oiwallisesti. Rautatiet kulettawat yksinomaan sotilasjunia.</p>
        <h5>Balkanwaltioiden suhtautuminen.</h5>
        <p><span className="accent">Konstantinopoli</span>, heinäk. 29 p.<br />Turkki ilmoittaa tulewansa noudattamaan puolueettomuutta tulewassa sodassa.</p>
        <p><span className="accent">Sofia</span>, heinäk. 29 p.<br />Bulgaria tulee pysymään puolueettomana.</p>
        <p><span className="accent">Bukarest</span>, heinäk. 29 p.<br />Rumania on ilmoittanut noudattawansa puolueettomuutta.</p>
        <p><span className="accent">Atena</span>, heinäk. 29 p.<br />Wirallisesti ilmoitetaan, ettei Kreikka woi pysyä wälinpitämättömänä tulewaan sotaan nähden. Bukarestin sopimus sitoo Kreikan 
          Serbiaan.</p>
        <h5>Sosialistit wastustawat sotaa.</h5>
        <p><span className="accent">Berlin</span>, heinäk. 28 p.<br />Täällä owat sosialistit pitäneet 8 suurta kokousta, joissa hywäksyttiin sodan wastaisia ponsia. Mielenosottajat kulkiwat 
          Unter den Lindeniä huutaen: <span className="quote">alas sota!</span> Poliisi hajoitti mielenosottajat.</p>
        <h5>Tanskakin asettaa liikekannalle.</h5>
        <p><span className="accent">Köpenhamina</span>, heinäk. 29 p.<br />Armeija on asetettu liikekannalle maan puolueettomuuden turwaamiseksi.</p>
      </Article>

      <div className="interTitle">1.8.1914</div>
      <Article titleText="Suomi julistettu osittaiseen sotatilaan.">
        <p>Eilen julkaisimme lisälehdessämme seuraawan tiedon:</p>
        <p>S. T. T.:lta saamamme tiedon mukaan on Wiaporin linnoitusesplanaadi, johon m. m. koko Helsingin kaupunki kuuluu, julistettu sotatilaan. - Samaten on julistettu sotatilaan Wiipurin 
          linnoitusesplanaadi, johon m. m. kuuluu Wiipurin kaupunki. Koko Venäjän armeija ja laiwasto on asetettu liikekannalle.</p>
      </Article>
      <Article titleText="Sodan waikutukset Suomessa.">
        <h5>Sotasalaisuudet.</h5>
        <p>Senaatille annetun wallan nojalla sekä kesäkuun 22 p. 1898 annetun wallan nojalla edeswastauksesta waltiosalaisuuksien ilmiannosta annetun asetuksen perusteella on senaatti w. k. 28 p. 
          tekemällään päätöksellä päättänyt ilmoittaa yleisölle tiedoksi, että sanomalehdissä mainitut määräykset sotilassalaisuuksien julkaisemisesta, jotka paitsi suorastaan sotalaitosta 
          koskewia tiedonantoja, ulottuwat myöskin m. m. tietoihin rautateiden kuljetuskywystä ja teknillisestä tilasta sekä töistä niiden kuljetuskywyn lisäämiseksi, niiden toiminnasta 
          sota-aikaan ja sotatarpeiden kuljetuksessa ja rakenteilla olewista uusista rautateistä rajakuwernementeissa ja -alueilla, maan ja wiertoteiden sekä wesiteiden tilasta ja uusien 
          laittamisesta rajakuwernementeissa ja -alueilla sekä töistä niillä, sähkölennätin- ja puhelinlinjojen teknillisestä tilasta, niiden lukumäärästä, pituudesta ja suunnasta sekä uusien 
          linjojen awaamisesta (oliwatpa ne sitten waltion, kuntain tahi yksityisten) rajakuwernementeissa ja -alueilla samoin kuin langattomista sähkölennätinasemista koko keisarikunnassa, 
          Wenäjän armeijaa ja laiwastoa koskewista toimenpiteistä ulkomailla, otaksumista armeijan ja laiwaston sotatoimien suhteen, kaikellaisista walmistuksista ja tilauksista sotalaitoksen 
          tarpeiksi niin Wenäjällä kuin ulkomailla, wakoilijain wangitsemisesta, heidän tuomioistaan ja niiden täytäntöönpanoista, owat toistaiseksi ja kunnes toisin määrätään, pidettäwä 
          woimassa ja ettei kysymyksessäolewia tietoja saa sanomalehdissä julkaista paitsi kun niiden julkaiseminen tapahtuu hallituksen toimesta tai sota- tai merisotalaitoksen luwalla.</p>
        <h5>Painohallituksen toimenpiteitä.</h5>
        <p>Painotoimen ylihallituksen puolesta on sanomalehdille ilmoitettu, että äsken julaistua sotilassalaisuuksien luetteloa on noudatettawa lehden koko painoksen takawarikoimisen uhalla. 
          Wiime lehdessä kerrottu „Wiborgs Nyheterin” takawarikkoonotto tapahtui juuri kysymyksessä olewasta syystä.</p>
        <h5>Lentokielto Suomenlahdella.</h5>
        <p>Meriministerin päiwäkäskyllä w. k. 10 p:ltä ilmoitetaan yleisön tiedoksi, että alueella, joka ulottuu 59 asteelta 60 asteelle 10 min. pohjoista leweyttä sekä 22° 45':stä itäistä 
          pituutta Greenwichistä 25° 40':een, on kielletty lentäminen kaikilla lentolaitoksilla.</p>
        <h5>Taas karkotus Wiipurista.</h5>
        <p>Toissapäiwänä kutsuttiin Wibors Nyheterin toimittaja D. Sjöström poliisimestari Pekosen puheille, jolloin tämä ilmoitti wiipurin linnoituksen komendantin määränneen, että toimittaja 
          Sjöströmin on lähdettäwä kaupungista 24 tunnin kuluessa. Mitään tarkempaa perustelua ei määräyksen johdosta annettu, mutta ilmoitettiin suullisesti, että toimittaja Sjöström on 
          kirjoittanut lehdessään liian paljon tuhmuuksia sekä sodasta että muusta.</p>
        <h5>Sanomalehtiä takawarikoon.</h5>
        <p>Turussa otettiin wiime torstaina takawarikoon Uusi Aura ja Åbo Underrättelser S. U. T:n wälittämän, sotatilaa Suomessa käsittelewän uutisen johdosta. Åbo Underrättelser oli kuitenkin 
          jo lewitetty sekä kaupunkitilaajille että maaseudulle, joten konttorista saatiin ainoastaan 103 kpl. kyseenalaista lehden numeroa.</p>
        <p>Eilen klo 8 aikaan päiwällä otettiin Wiipurissa takawarikoon Karjalan lisälehti, joka sisälsi rautatieliikennettä ja postinkulkua koskewia tietoja.</p>
      </Article>

      <Article titleText="Maailmansota puhkeamaisillaan.">
        <Divider className="dividerStyle" />
        <h4>Saksa lähettää sotajoukkoja Suomeen.</h4>
        <h5>Taistelut Itäwalta-Unkarin ja Serbian wälillä täydessä käynnissä. Belgrad walloitettu. Suurwallat warustautuwat kuumeisesti.</h5>
        <SubDivider className="dividerStyle" />
        <h5>Belgradia pommitetaan.</h5>
        <p><span className="accent">Wienistä</span>, heinäk. 29 p.<br />Itäwalta-Unkarin sotajoukot pommittawat Belgradia. Sawen yli wiewä silta on rikottu. Serbian kruununperilliuen oli 
          Belgradissa pommituksen alussa.</p>
        <p><span className="accent">Pietarista</span>, heinäk. 30 p.<br />Serbian lähettiläs on saanut pääministeri Pashitsilta seuraawan sähkösanoman: Tänään klo 2 alkaen aamulla owat 
          itäwaltalaiset monitorit uudelleen ankarasti pommittaneet Belgradia ja sen ympäristöä.</p>
        <p><span className="accent">Wienistä</span>, heinäk. 30 p.<br />Yksityistietoja Belgradin pommituksesta ei ole wielä saatu. Mikäli tiedetään, owat pommituksesta kärsineet seuraawat 
          rakennukset: tulli, joka on kokonaan palanut, kasarmi, upseeriklubi ja linnotuksen luona olewa pommiwarasto. Serbialaisten räjäyttämä Sawen yli wiewä silta on jo korjattu.</p>
        <h5>Belgrad wallattu?</h5>
        <p><span className="accent">Wienistä</span>, heinäk. 30 p.<br />Aamulehtien tietojen mukaan on pienempi osasto serbialaisia sotajoukkoja, jotka pidättiwät itawaltalaisia Sawen yli 
          wiewän sillan raunioiden luona, tehneet sen antaakseen asukkaille tilaisuuden paeta kaupungista. Tehtäwänsä täytettyään joukot perääntyiwät Nishiin.</p>
        <p>Itäwallan sotajoukot owat saapuneet pommituksesta kowasti kärsineeseen Belgradiin. Siellä liehuu Itäwalta-Unkarin lippu. Toisten tietojen mukaan keskeytyiwät Belgradia wastaan 
          suunnatut taistelut tänään klo 5 a., johtamatta tuloksiin.</p>
        <h5>Taisteluja.</h5>
        <p><span className="accent">Berlinistä</span>, heinäk. 30 p.<br />Belgradista lennätetään: Klo 1 aikaan yöllä kuului kiwäärien pauketta ja sitten tykkien jyskettä Serbian puoleiselta 
          rannalta. Serbialaiset ampuiwat kahta lotjaa hinaawaa laiwaa. Itäwaltalaiset sotajoukot ja Tonawalla olewa monitori Teness wastasiwat tuleen. Taistelu kesti lyhyen aikaa. Sillä wälin 
          räjäyttiwät serbialaiset sillan ilmaan. Klo puoli 4 aikaan aamulla alkoiwat monitorit Teness, Samos ja Bodrog ampua serbialaista linnotusta. Pommit sytyttiwat kasarmin katon tuleen. 
          Useissa muissakin paikoin syttyi tulipalo. Itäwaltalaiset ampuiwat myös haupitseilla muutamia laukauksia. Serbialaiset wastasiwat ainoastaan kiwääritulella. Klo puoli 5 aamulla 
          poistuiwat monitorit Serbian puoleiselta rannalta.</p>
        <p><span className="accent">Lontoosta</span>, heinäk. 30 p.<br />Serbian lähettiläs on tänään saanut Nishistä sähkösanoman, että Itäwallan sotajoukot Kostamanin luona owat alottaneet 
          ankaran tulen serbialaisia wastaan. Itäwaltalaiset owat wallanneet kolme matkustajalaiwaa, joihin on nostettu Itawallan lippu. Kuolleita ja haawottuneita ei toistaiseksi wielä ole.</p>
        <h5>Sota Montenegroa wastaankin julistettu. - Antiwarin satama suljettu.</h5>
        <p><span className="accent">Berlin</span>, heinäk. 28 p.<br />Illalla lewisi huhu, että Itäwalta-Unkari, saatuaan tiedon Montenegron sotawäen liikekannalle asettamisesta, on julistanut 
          sille sodan. Myöhemmin ilmoitetaan, että Itäwalta todella on julistanut sodan Montenegroa wastaan.</p>
        <p><span className="accent">Lontoosta</span>, heinäk. 30 p.<br />Yöllä on tänne saapunut tieto, että Itäwallan sotajoukot owat sulkeneet Antiwarin sataman.</p>
        <h5>Kapina Itäwallan armeijassa.</h5>
        <p><span className="accent">Lontoosta</span>, heinäk. 30 p.<br />Kroatiassa owat 8:s ja 9:s rykmentti tehneet kapinan.</p>
        <p>Tänne ilmoitetaan, että kroatilaisen reserwiwäen keskuudessa sattuneet lewottomuudet owat saaneet wakawan luonteen. Sanomalehdet owat wakuutettuja siitä, että jos serbialaisten 
          onnistuu tunkeutua Bosniaan, menee sen wäestö ehdottomasti serbialaisten puolelle.</p>
        <h5>Bulgaria Itäwallan puolelle?</h5>
        <p><span className="accent">Berlin</span>, heinäk. 30 p.<br />Saksasta ilmotetaan, että Bulgaria ei jää puolueettomaksi ja että tästä nykyään kiistelee hallitus ja Kendaniewin puolue. 
          Majuri Atanasow, joka wiime Turkin sodassa komensi makedonilaista pataljoonaa, on antanut julistuksen, jossa hän kehottaa saapumaan taistelemaan serbialaisia wastaan.</p>
        <h5>Kreikka antaa Serbialle 110,000 miestä.</h5>
        <p><span className="accent">Ateenasta</span>, heinäk. 30 p.<br />Kreikan hallitus on ilmottanut Serbialle, että se lähipäiwinä antaa Serbian käytettäwäksi 110,000 miestä.</p>
        <h5>Turkki walmistautuu kiireellisesti.</h5>
        <p><span className="accent">Konstantinopoli</span>, heinäk. 30 p.<br />Huolimatta siitä, että Turkki on julistautunut puolueettomaksi, walmistautuu se kiireellisesti sotaan. Eilen lähti 
          kolme osastoa sotawäkeä Dardanellein kautta Gallipoliin.</p>
        <h5>Itäwallan sota Serbiaa wastaan „mielenosotus- ja rankaisuretki”?</h5>
        <p><span className="accent">Parisista</span>, heinäk. 29 p.<br />Tänne saapuneiden tietojen mukaan on kreiwi Berchtold, heti kun Itäwalta oli julistanut sodan, ilmoittanut ulkomaalaisille 
          diplomaateille, että joskin sota on julistettu ja sotatoimenpiteet alkaneet, ei Itäwalta kuitenkaan aijo tunkeutua sisämaahan, waan tyytyy waltaamaan muutamia serbialaisia rajaseutuja. 
          Diplomaatit saiwat keskusteluista kreiwi Berchtoldin kanssa sen waikutelman, että sodalla tulee olemaan mieltäosottawa luonne ja että se luultawasti muutaman päiwän kuluttua päättyy. 
          Riidanalaiset kysymykset jätetään suurwaltain ratkaistawaksi.</p>
        <p>Itäwallan lähettiläs on ilmoittanut ulkoministerin tointa hoitawalle Martenille, ettei Itäwalta aijo lisätä alueitaan Serbian kustannuksella tai saattaa Serbiaa holhouksen alaiseksi, 
          waan se tahtoo yksinomaan rangaista Serbiaa. Suurwaltain wälitys on mahdollinen heti ensimäisten sotatoimenpiteitten jälkeen. Itäwallan lähettilään sanojen mukaan on Wenäjä luwannut 
          asettua odottawalle kannalle, siksi kunnes ensimäisten sotatoimenpiteiden tulokset owat käyneet selwille ja se on tullut wakuutetuksi siitä, ettei Serbian olemassaolo waltiona ole 
          uhattu. Edelleen kehotti lähettiläs Ranskaa Europan rauhan nimessä neuwomaan Wenäjää maltillisuuteen. Wenäjän on tunnustettawa, että Itäwalta-Unkarin on saatawa hywitystä Serbialta.</p>
        <h5>Wenäjä asettaa sotajoukkoja liikekannalle.</h5>
        <p><span className="accent">Pietarista</span>, heinäk. 30 p.<br />Kaikkein korkeimmalla käskyllä hallitsewalle senaatille owat heinäk. 29 p. 1914 Wenäjän sotajoukot kaikkiaan 28:n 
          kuwernementtien kihlakunnissa ja lisäksi muutamien muiden kuwernementtien kihlakunnissa, joista luettelo annettiin eilen, asetettawa liikekannalle. Donin, Rubanin, Berekin, Astrakaanin, 
          Orenburgin ja Uralin kasakkajoukkojen wapaana olewat kasakat owat kutsuttawat täyttämään ja saattamaan sotakuntoon mainitut kasakkaosastot. Wakinaiseen palwelukseen on kutsuttawa 
          armeijan ja laiwaston reserwien upseerit ja wirkamiehet sekä yllälueteltujen kasakkajoukkojen upseerit ja wirkamiehet sekä armeijan reserwiin kuuluwat lääkärit, eläinlääkärit ja 
          farmaseutit.</p>
        <SubDivider className="dividerStyle" />
        <h4>Saksan sotasuunnitelma wahwistettu.</h4>
        <h5>Saksa asettaa liikekannalle 1 milj. miestä. Suomen rannikoille maihin tykkejä ja 140,000 sotamiestä.</h5>
        <p><span className="accent">Berlin</span>, heinäk. 30 p.<br />Sotaministerin asunnossa pidetyssä ministeristön ylimääräisessä kokouksessa päätettiin jättää keisari Wilhelmin 
          wahwistettawaksi seuraawa sotasuunnitelma:</p>
        <p>Saksan armeija jaetaan kahteen osaan. Toinen johon kuuluu 19 armeijakuntaa lähetetään Wenäjää wastaan pitkin koko rajaa. Toinen osa, joka tulee olemaan jonkun werran pienempi, tulee 
          aluksi puolustamaan Saksaa Ranskan hyökkäyksiltä. Siinä tapauksessa että sotatoimet Wenäjää wastaan menestywät tulee se hyökkäämään rajan yli.</p>
        <h5>Suomen rannikolle lasketaan maihin tykkejä ja 140,000 sotamiestä. Sitäwarten asetetaan liikekannalle kaikki Itämerellä purjehtiwat saksalaiset laiwat.</h5>
        <p>Sotaministeri ilmoitti keisari Wilhelmille, että hän aluksi saa liikekannalle 1 milj. miestä. Tämän sotasuunnitelman on keisari Wilhelm nyttemmin wahwistanut.</p>
        <p>Yleiseurooppalaiseen sotaan tulisi ottamaan osaa n. 8 milj sotamiestä.</p>
        <h5>Sotajoukot Wenäjän rajalle.</h5>
        <p><span className="accent">Breslausta</span>, heinäk. 30 p.<br />Saksalaiset rajalla olewat sotajoukot on lähetetty Wenäjän rajalle, jonne kiireellisesti tuodaan yhä uutta sotawäkeä.</p>
        <SubDivider className="dividerStyle" />
        <h4>Englannin suhtautuminen.</h4>
        <p><span className="accent">Berlinistä</span>, heinäk. 30 p.<br />Grey on ilmoittanut suurwaltain hallituksille, että Englanti ei ryhdy ratkaisewiin toimenpiteisiin niin kauan kuin sotaa 
          käydään maalla, mutta heti kun Saksa ja Wenäjä siirtäwät sodan merelle, luopuu Englanti puolueettomuudesta. Se ei woi sallia, että sen kauppaetuja Pohjanmerellä häiritään.</p>
        <p><span className="accent">Lontoosta</span>, heinäk. 30 p.<br />Ensimäinen eskaderi on isänmaallisten laulujen kaikuessa lähtenyt länttä kohti suletuin määräyksin.</p>
        <p><span className="accent">Lontoosta</span>, heinäk. 30 p.<br />Aamulehtien tietojen mukaan tulee Englannin laiwasto suojelemaan Itämeren rannikkoa Saksan laiwaston hyökkäyksiltä. 
          Wälimeren eskaderi tulee pidättämään Italiaa hyökkäämästä Ranskan rannikolle. Wälimeren laiwasto on lähtöwalmiina ja täydessä taistelukunnossa.</p>
        <h5>Ranska tukee Wenäjää.</h5>
        <p><span className="accent">Berlinistä</span>, heinäk. 30 p.<br />Aamulla olleessa ministeristön istunnossa on päätetty, että Ranska tulee toimimaan yhdenmukaisesti Wenäjän kanssa ja pysyy 
          loppuun asti uskollisena liitolleen.</p>
        <p>„Lokal-Anzeigerin” tietojen mukaan owat Ranskassa kaikki itärajalle johtawat rautatiet tulwillaan sotajoukkoja.</p>
        <h5>Englanti warustautuu edelleen.</h5>
        <p><span className="accent">Lontoo</span>, heinäk. 31 p.<br />Portsmouthissa walmistaudutaan kuumeisella kiireellä sotaan. Laiwaston taistelukuntoon asettaminen edistyy nopeasti. 
          Panssarilaiwat owat lähtöwalmiina ja samoin miinaristeilijät, odottaen wain käskyä. Gibralttarin linnotusta walmistetaan sotakuntoon öin ja päiwin.</p>
        <SubDivider className="dividerStyle" />
        <h4>Saksa lähettää sotawäkeä Suomeen?</h4>
        <h5>Saksan laiwasto aikoo äkkiä hyökätä Hankoniemeen.</h5>
        <p><span className="accent">Berlinistä</span>, heinäk. 30 p.<br />Täysin luotettawista lähteistä ilmoitetaan, että Itämeren satamiin saapuneisiin ja niissä pidätettyihin kauppalaiwoihin 
          asetetaan kiireellisesti sotajoukkoa ja tykistöä. Saksan sotalaiwasto on walmiina. Ilmoitetaan, että Saksan laiwaston aikomuksena on hyökätä äkkiä Hankoniemeen, jonka saksalaiset 
          aikowat ottaa laiwastonsa tukikohdaksi.</p>
        <h5>Sotawäen liikekannalle asettaminen.</h5>
        <p>Toissa iltana klo 9 tienoissa saapui Uudenmaan läänin lääninhallitukseen sotaministeri Suhomlinowin, meriministeri Grigorowitshin ja sisäministeri Maklakowin allekirjoittama 
          sähkösanoma, joka sisälsi määräyksen, että armeijan maa- ja meriwäki tulee arm. käskystä asetettawaksi liikekannalle. Tämän määräyksen mukaan tulee kaikkien Suomessa olewien Wenäjän 
          reserwiwäkeen kuuluwien upseerien, lääkärien ja miehistön lähteä wakinaiseen palwelukseen 24 tunnin kuluessa liikekannalle asettamisesta tiedon saatuaan. Eilen oli ensimäinen 
          mobilisatsonipäiwä.</p>
        <p>Määräys liikekannalle panosta on lähetetty Hangon, Lowiisan, Porwoon ja Tammisaaren poliisimestareille sekä Helsingin, Lohjan, Raaseporin ja Pernajan kihlakuntain kruununwoudeille 
          määräyksellä antaa asiasta heti tieto alaisilleen nimismiehille.</p>
        <SubDivider className="dividerStyle" />
        <h4>Belgradin pommitus.</h4>
        <p><span className="accent">Parisi</span>, heinäk. 31 p.<br />Tänne on saapunut tietoja itäwaltalaisten uudelleen alottaneen Belgradin pommituksen ja suunnanneen murhaawan tulen 
          keskikaupunkia kohden. Pääkadulla on kymmenen taloa sortunut raunioiksi. Tulipalot häwittäwät kaupunkia. Kuninkaan palatsi on waarassa. Pommituksen kestäessä yrittiwät itäwaltalaiset 
          kulkea joen poikki, mutta heidän täytyi peräytyä kärsittyään suuria tappioita.</p>
        <p><span className="accent">Belgrad</span>, heinäk. 31 p.<br />Kaupungin pommitus jatkuu. Itäwaltalaiset käyttäwät piiritystykkejä. Suuria aloja on raunioina. Kaupunki on jaettu neliöihin, 
          jotka itäwaltalaiset järjestelmällisesti ampuwat maan tasalle. Asukkaat eiwät ehtineet poistua kaupungista sen wuoksi, että itäwaltalaiset alkoiwat pommituksen siitä edeltäpäin tietoa 
          antamatta. Paljon asukkaita on saanut surmansa.</p>
        <h5>Sotanäyttämöltä.</h5>
        <p><span className="accent">Lontoo</span>, heinäk. 31 p.<br />Nischista ilmotetaan, että serbialaiset owat wiime yönä ryhtyneet hyökkäykseen Razissa ja Losnitzassa. Luoteis-Serbiassa on 
        tapahtunut werisiä taisteluja. Hoz, jonka luona itäwaltalaisten tietojen mukaan serbialaiset owat kärsineet tappion, on wain 10 pnk. päässä Serajewosta.</p>
        <h5>Ranska wälittäjäksi.</h5>
        <p><span className="accent">Parisi</span>, heinäk. 31 p.<br />Ranska on uudelleen ottanut käsiteltäwäkseen wälitysehdotuksen. Itäwalta on sille wakuuttanut ottawansa osaa asian 
          käsittelyyn, jos wälikirjan sanamuoto laaditaan sellaiseksi, että se ei loukkaa pienen waltion kimppuun hyökänneen suurwallan arwoa.</p>
        <h5>Saksa walmistautuu taisteluun.</h5>
        <p><span className="accent">Warsowasta</span>, heinäk. 31 p.<br />Kashewosta ilmoitetaan tänne, että Saksa keskittää kuumeisella kiireellä joukkojaan rajalle.</p>
        <p><span className="accent">Pietari</span>, heinäk. 31 p.<br />Tänne saapuneiden tietojen mukaan owat kaikki Itäwallan ja Saksan itärajoilla sijaitsewat automobiilipataljonat niihin 
          kuuluwine sotawäkineen täydessä sotakunnossa.</p>
        <p><span className="accent">Lontoo</span>, heinäk. 31 p.<br />Sanomalehdet kertowat, että huhujen mukaan Saksa on ehdottanut Englannille puolueettomuutta merellä. Tästä päättäen aikoo siis 
          Saksa käydä sotaa yksinomaan maalla.</p>
        <p><span className="accent">Berlin</span>, heinäk. 31 p.<br />Parhaillaan on täällä ministeristöllä salainen kokous. Kokouksessa tullaan tekemään tärkeitä päätöksiä</p>
        <SubDivider className="dividerStyle" />
        <h4>Wenäjän sodanjulistusta odotetaan.</h4>
        <p><span className="accent">Moskowa</span>, heinäk. 31 p.<br />Täällä odotetaan huomenna Wenäjän julistawan sodan Saksalle.</p>
        <p><span className="accent">Pietari</span>, heinäk. 31 p.<br />Kaikkein korkein käskykirje armeijan ja laiwaston liikekannalle asettamisesta julkaistiin klo 4 tänä aamuna. Punaselle 
          paperille painettuna on se naulattuna kaikkien katujen kulmiin. Tehtaiden ja teollisuuslaitosten isännistöjä on kehoitettu heti suorittamaan palkat sotapalwelukseen astuwille 
          työmiehilleen.</p>
        <h5>Tärkeä ministerineuwoston istunto.</h5>
        <p><span className="accent">Pietari</span>, heinäk. 31 p.<br />Tänä aamuna lähtiwät Pietarhowiin kaikki ministerineuwoston jäsenet pääministeri Goremykin etupäässä. Klo 11 alkoi 
          Pietarhowissa istunto, jossa tullaan tekemään tärkeitä päätöksiä.</p>
        <SubDivider className="dividerStyle" />
        <h4>Sekatietoja.</h4>
        <p><span className="accent">Berlin</span>, heinäk. 31 p.<br />Saksan kylpylaitoksissa olewat wenäläiset kylpywieraat owat joukottain alkaneet palata kotiin. Rajalle wiewät ylimääräiset 
          junat owat tulwillaan matkustajia. Wenäläisten reserwiläisten luku Beriinissä nousee 20 tuh.</p>
        <p><span className="accent">Parisi</span>, heinäk. 31 p.<br />Espanja on ilmoittanut asettuwansa Ranskan ja Englannin puolelle.</p>
        <p><span className="accent">Lontoo</span>, heinäk. 31 p.<br />Pörssissä wallitsee lewottomuus. L'loyd George on ilmoittanut, ettei ole syytä erityiseen huoleen.</p>
        <p><span className="accent">Pietari</span>, heinäk. 31 p.<br />Japanin täkäläinen lähettiläs on ilmoittanut ulkoministeri Sasonowille, ettei Japani jää puolueettomaksi tulewassa sodassa. 
          Sen myötätunto on kokonaan Wenäjän ja osaksi Ranskan ja Englannin puolella. Lähettilään sanoille annetaan suuri merkitys.</p>
      </Article>

      <div className="interTitle">4.8.1914</div>
      <Article titleText="Sota alkanut.">
        <p>Mahtawat ja seurauksiltaan laajakantoiset tapahtumat owat wiime päiwinä seuranneet toinen toistaan. Koko Europan on täyttänyt aseiden kalske, waltio toisensa jälkeen on asettanut 
          sotawäkensä liikekannalle. Satamissa odottawat sotalaiwastot taisteluwalmiina käskyä lähteä merelle, osan kyntäessä jo waltamerta. Diplomaatit owat ponnistaneet kaiken neuwokkuutensa 
          walwoessaan kukin maansa etua ja koettaessaan keksiä pulmalle rauhallista ratkaisua. Tässä he owat epäonnistuneet, miekalla on Saksa tällä kertaa ryhtynyt heittämään arpaa kansojen 
          kohtalosta.</p>
        <p>Syttymässä on siten maailmanpalo, jonka seurauksia ei nykyhetkellä saata edes aawistaa. Yksikään kansa, olkoon se kuinka wähäpätöinen tahansa, ei tule sen seurauksilta säilymään, 
          myöskin meidän maamme niin etäistä kuin sille ristiriidan aiheet owatkin, tulee saamaan ja on jo saanutkin niistä osansa.</p>
        <p>Kuten tähänkin asti, tulee Suomen kansa nytkin näinä wakawina aikoina täyttämään welwollisuutensa sitä suurta waltakuntaa kohtaan, jonka osa se on. Tyyntä, wakawaa, harkittua käytöstä 
          on jokaiselta waadittawa. Mitä uhreja kansamme lähimmässä tulewaisuudessa saa kantaa, ei wielä kukaan woi tietää. Yhdestä kuitenkin suurimmista ja waikeimmista, joita kansat muualla 
          saawat kokea, meidän kansamme kuitenkin säästynee. Meillä ei ole omaa sotawäkeä ja senwuoksi meidän miespuolinen wäestömme sodankin aikana säilyy maanwiljelyksen, teollisuuden ja muiden 
          rauhallisten elinkeinojen toimille. Ja nykyisissä painostawissa oloissakin on meidän jatkettawa rauhan töitämme entiseen tapaan, siten mikäli mahdollista liewentääksemme poikkeustilan 
          waikutusta yhteiskunnalliseen ja liike-elämäämme.</p>
      </Article>
      <Article titleText="Sotatila.">
        <h5>Mitä se tietää?</h5>
        <p>Sotatilan woimaanastuttua jossakin paikkakunnassa, lakkaa siellä woimassa olemasta asetus toimenpiteistä waltiollisen järjestyksen ja yleisen rauhan turwaamiseksi ja waltiollisen 
          järjestyksen ja yleisen rauhan säilyttämistä tarkoittawien toimenpiteiden ylin johto siirtyy ylipäällikölle ja armeijan päällikölle.</p>
        <p>Sotatilaan julistetuissa paikkakunnissa on armeijan päällikkö oikeutettu:</p>
        <p className="leftP">1) kieltämään poistumasta oleskelupaikaltaan semmoisia henkilöitä, jotka tietojensa, ammattinsa tai toimensa wuoksi woidaan kutsua sotatarkoituksia edistäwiin 
          töihin;<br />2) määräämään yleisiä ja yksityisiä tilauksia toimitettawaksi; ja<br />3) kieltämään poiskuljettamasta töihin tarwittamia työkaluja ja aineita sekä elanto- ja 
          kuljetuswälineitä, rehuja, halkoja ja muita sen tapaisia aineita, joita woidaan tarwita sotajoukkoja warten.</p>
        <p>Jokainen sotawäenpäällikkö on oikeutettu omalla mieskohtaisella wastuullaan purkauttamaan rakennuksia ja häwittämään kaikkea, mikä sotilaalliselta kannalta saattaa waikeuttaa 
          sotajoukkojen liikkeitä tai toimia tahi olla wiholliselle eduksi.</p>
        <p>Armeijan toiminta-alueella on paikallinen kenraalikuwernööri tai se henkilö, joka käyttää kenraalikuwernöörin toimiwaltaa, armeijan päällikön käskynalainen, joka sen ohessa on oikeutettu 
          kumoamaan niitä toimenpiteitä, joihin ensinmainitut owat ryhtyneet waltiollisen järjestyksen ja yleisen rauhan säilyttämiseksi, sekä antamaan heille tästä asiasta määräyksiä.</p>
        <p>Sotatilaan julistettujen paikkakuntain poliisiwiranomaiset owat welwolliset antamaan sotilaspäällystölle kaikkea mahdollista wirka-apua sanotulle päällystölle pantujen welwollisuuksien 
          täyttämisessä.</p>
        <p>Kaikki siwiiliwiranomaiset samoin kuin kaupunginkamarit ja maalaislautakunnat owat welwolliset waadittaessa antamaan sotilaspäällystölle ehdotonta wirka-apua tietojen hankkimiseksi 
          wäestön ja yksityisten henkilöiden luotettawaisuudesta. Nämä tiedot kootaan mikäli mahdollista, suullisten tiedustelujen ja keskustelujen kautta, ilman tarpeetonta kirjeenwaihtoa, ja 
          pidetään salassa.</p>
        <p>Staappikomendantin tai etaappi-piirin päällikön alaisella alueella owat kaikki kaupunki- ja maalaispoliisiin sekä maanwartiostoon kuuluwat henkilöt sekä kaupunki- ja maalaiswiranomaiset 
          ja paikkakunnan asukkaat welwolliset wastaansanomatta alistumaan etaappikomendantin tai etaappipiirin päällikön waatimuksiin ja määräyksiin kaiken sen puolesta, mikä koskee 
          sotilaspoliisi-toimenpiteiden täytäntöönpanoa, majoitus- ja kyyditysrasitusta, samoinkuin tarpeiden, työwäen ja kuljetusneuwojen hankkimista, ollen heillä oikeus wastedes walittaa 
          näistä waatimuksista ja määräyksistä.</p>
        <p>Kenraalikuwernööri tai henkilö, jolle on uskottu ylin toimiwalta, on oikeutettu:</p>
        <p>1) julkaisemaan pakollisia määräyksiä yleisen järjestyksen ja waltion turwallisuuden loukkaamisen ehkäisemistä; kiinteistöjen omistajain tahi haltijain welwoittamisesta sisäiseen 
          silmälläpitoon tilustensa alueella, tämän silmälläpidon toimittamisen tawasta niiden henkilöiden walitsemisen ja erottamisen järjestyksestä, joiden huolehdittawaksi omistajat jättäwät 
          mainittujen welwollisuuksien täyttämisen y. m.;</p>
        <p>2) wahwistamaan tämmöisten pakollisten määräysten rikkomisesta rangaistuksia, ei kuitenkaan enempää kuin wankeus- tai linnarangaistusta kolme kuukautta tai sakkoa enintään kolmetuhatta 
          ruplaa;</p>
        <p>3) siirtämään, edelläkäyneen yleisön tiedoksi kuuluttamisen jälkeen hallinnollisessa järjestyksessä ratkaistawaksi semmoisia, rikoksia ja rikkomuksia koskewia juttuja ja asioita, jotka 
          yleisen järjestyksen mukaan owat tuomioistuinten käsiteltäwiä;</p>
        <p>4) Waatimaan yleiseltä syyttäjäwiranomaiselta tarkastettawakseen enintään kahden wiikon ajaksi jokaisen eri tutkimus- ja poliisitutkintoasiakirjawihkon ennenkuin se on jätetty 
          oikeuteen;</p>
        <p>5) lykkäämään sotaoikeuden käsiteltäwäksi yksityisiä juttuja, jotka koskewat kaikenlaisia yleisissä rikoslaeissa edellytettyjä rikoksia, syyllisten tuomitsemista warten sodan aikana 
          woimassa olewien lakien mukaan;</p>
        <p>6) kieltämään kaikenlaatuiset kansan-, kunnalliset ja yksityiset kokoukset;</p>
        <p>7) suljetuttamaan kaikenlaatuisia kauppa- ja teollisuuslaitoksia määräajaksi tai koko siksi ajaksi, joksi sotatila on julistettu;</p>
        <p>8) sallimaan ylimääräisiä sääty, kaupunki- ja maalaislaitosten kokouksia sekä peruuttamaan ja hajoittamaan näiden warsinaisia kokouksia, niin myös kussakin yksityisessä tapauksessa 
          määräämään mitkä asiat owat poistettawat mainittujen kokousten käsiteltäwistä; </p>
        <p>9) lakkauttamaan aikakauskirjain julkaisemisen koko siksi ajaksi joksi sotatila on julistettu;</p>
        <p>10) sulkemaan oppilaitoksia enintään yhden kuukauden ajaksi ja armeijanpäällikön luwalla koko sotatilan ajaksikin, josta on tehtäwä ilmoitus asianomaiselle laitoksen johtokunnalle;</p>
        <p>11) kieltämään yksityisiä henkilöită oleskelemasta sotatilaan julistetuilla paikkakunnilla;</p>
        <p>12) karkottamaan yksityisiä henkilöitä keisarikunnan sisäkuwernementteihin;</p>
        <p>13) julistamaan sotatilan ajaksi takawarikkoon kiinteistöjä ja irtainta omaisuutta sekä niistä lähtewät tulot, kun omistajat, sellaista omaisuutta tai tuloa käyttämällä ajawat 
          rikollisia tarkoitusperiä tahi, kun mainitun omaisuuden hallinnossa jatkuwat laiminlyömiset woiwat aiheuttaa yleiselle rauhalle waarallisia seurauksia;</p>
        <p>14) erottamaan sotatilan ajaksi wirantoimituksesta semmoisia kaikkien wirastojen wirkamiehiä, jotka eiwät ole ensimmäisten arwoluokkain wiroissa, kuin myöskin sääty, kaupunki- ja 
          maalaislaitoksissa waalin perusteella palwelewia henkilöitä.</p>
        <p>Kuwernööreillä ja kaupunginpäälliköillä on yleisen kuwernementtiohjesäännön 511 artiklassa mainittujen oikeuksien lisäksi walta maalais-, kaupunki- ja rauhanoikeuslaitosten kaikkia 
          wirkoja täytettäessä ewätä nimitys, jos hawaitsewat wirkatoimeen ehdotetun henkilön epäluotettawaksi.</p>
        <p>Asianomaisilla poliisipäälliköillä samoinkuin santarmihallitusten päälliköillä ja heidän apulaisillaan on walta ryhtyä toimenpiteisiin: 1) kaikkien semmoisten henkilöiden 
          kiinniottamiseksi enintään kahdeksi wiikoksi, joiden woidaan syystä epäillä tehneen waltiorikoksen tahi armeijan olennaisia etuja loukkaawan rikkomuksen tahi olewan sellaisiin rikoksiin 
          osallisia sekä kuuluwan laittomaan yhdistykseen ja 2) etsintöjen toimittamiseksi mihin aikaan tahansa kaikenlaisissa huoneistoissa poikkeuksetta sekä kaikellaisen semmoisen omaisuuden 
          takawarikkoon panemiseksi, siihen asti kuin asianomainen antaa määräyksensä, mikä wiittaa siihen, että epäluulonalaisella henkilöllä on rikolliset hankkeet tahi aiheet</p>
      </Article>

      <Article titleText="Saksa julistanut sodan Wenäjälle ja Ranskalle.">
        <h5>Saksa julistanut sodan Wenäjää wastaan.</h5>
        <p><span className="accent">Pietarista</span>, elok. 1 p.<br />Tänään kääntyi Saksan Pietarissa olewa lähettiläs, kreiwi Pourtales Wenäjän ulkoministerin Sasonowin puoleen ultimatumilla, 
          jossa waadittiin Wenäjää pysäyttämään sotajoukkojen liikekannallepano 12 tunnin kuluessa. Kun Wenäjä ei kahdentoista tunnin kuluessa antanut ultimatumiin wastausta niin Saksan lähettiläs 
          antoi ulkoministeri Sasonowille werbaalinootin, kirjelmän, jossa Saksa julistaa sodan Wenäjää wastaan.</p>
        <h5>Saksa jättänyt uhkawaatimuksen myöskin Ranskalle.</h5>
        <p><span className="accent">Pietarista</span>, elok. 1 p.<br />Parisissa on saapunut sähkösanoma, jossa kerrotaan, että Saksa on kääntynyt Ranskan puoleen kysymyksellä, mihin toimiin Ranska 
          aikoo ryhtyä Saksan julistettua sodan Wenäjää wastaan. Saksa waati myöskin Ranskalta selitystä Ranskan sotajoukkojen liikekannallepanon johdosta.</p>
        <h5>Saksa kutsuu alamaisensa pois Ranskasta.</h5>
        <p><span className="accent">Berlinistä</span>, elok. 1 p.<br />Saksan hallitus on käskenyt kaikkia Ranskassa olewia alamaisiaan palaamaan kotimaahan. Ranskassa asuu yli 100,000 saksalaista.</p>
        <h5>Tieto Belgradin walloituksesta ei saa wahwistusta.</h5>
        <p><span className="accent">Pariisista</span>, elok. 1 p.<br />Huhut Belgradin waltaamisesta eiwät saa wahwistusta wirallisissa piireissä. On syitä otaksua, että itäwaltalaiset aikowat 
          rajoittaa toimintansa Serbian pääkaupungin häwittämiseen ja sitte esittää Serbialle ehtonsa.</p>
        <h5>Wenäjä sodan kynnyksellä.</h5>
        <p><span className="accent">Pietari</span>, elok. 2 p.<br />Sanomalehdessä on julkaistu hallituksen tiedonanto sodasta sisältäen selostuksia nykyisten selkkausten waiheista ja Wenäjän 
          ponnistuksista koettaa säilyttää rauha. Tiedonannon lopussa sanotaan Wenäjän hallituksen olleen walmiina kaikkiin keinoihin riidan ratkaisemiseksi, joiden ohella sen asettamat ehdot 
          olisiwat noudatettawat. Tästä huolimatta kääntyi Saksan hallitus w. k. 31 p. Wenäjän hallituksen puoleen waatien, että Wenäjän klo 12 mennessä elok. 1 p. olisi keskeytettäwä 
          sotawarustukset. Päinwastaisessa tapauksessa Saksa ryhtyisi sotawäkensä liikekannalle panoon. Seuraawana päiwänä kello 12 jätti Saksan lähettiläs Wenäjän ulkoministerille hallituksensa 
          nimessä Saksan sodanjulistuksen.</p>
        <p>Tänään klo 8 a.p. lähti kreiwi Pourtales ylimääräisellä junalla Helsinkiin. Häntä seurasi Baierin Pietarissa olewa lähettiläs ja 
          lähes 100 Pietarissa asuwaa saksalaista.</p>
        <p>Itäwallan lähettiläs Szapary ei wielä ole lähtenyt Pietarista. Diplomaattiset wälit Itäwallan ja Wenäjän wälillä eiwät wielä ole katkenneet.</p>
        <p>Wetsh. Wremja luetteloi Wenäjän Itäwallan rajalla olewien armeijakuntien pääliköt. Ne owat kenraalit Rennenkampf, Iwanoff, Nikitin ja Shilinski.</p>
        <h5>Wenäjän sotajulistusta odotetaan.</h5>
        <p><span className="accent">Pietari</span>, elok. 2 p.<br />Tänään pidettiin Talwipalatsissa H. M. Keisarin läsnäollessa juhlallinen jumalanpalwelus, jossa rukoiltiin menestystä Wenäjän 
          aseille. klo 1 pantiin toimeen suuria yleis-slaawilaisia mielenosotuksia kasanin kirkon edustalla. Wenäjän sodanjulistusta odotetaan tänään.</p>
        <h5>Rjetsh lakkautettu.</h5>
        <p>Sotajoukkojen ylikomentaja suuriruhtinas Nikolai Nikolajewitsh on määrännyt suuren pietarilaisen wapaamielisen sanomalehden Rjetshin lakkautettawaksi.</p>
        <h5>Saksalaiset Wenäjän rajan yli.</h5>
        <p><span className="accent">Pietari</span>, elok. 3 p.<br />Golos Moskwy kertoo huhujen mukaan, että saksalaiset kolmesta kohdin owat hyökänneet Wenäjän rajan yli.</p>
        <h5>Saksa sodassa.</h5>
        <p><span className="accent">Bryssel</span>, elok. 2 p.<br />Saksalaiset owat tunkeutuneet Luksenburgiin ja wallanneet hallintorakennukset ja puhelinjohdot.</p>
        <p><span className="accent">Köpenhamina</span>, elok. 2 p.<br />Saksalaiset wiranomaiset owat Sleswig-Holsteinissa wanginneet kaikki sleswig-Holsteiniläisten sanomalehtien toimittajat 
          niiden joukossa kaikki kolme tanskalaista edustajaa Saksan waltiopäiwillä Hansenin, Norren ja Mollerin. Kaikki aseet Sleswig-Holsteinin asekaupoissa owat otetut takawarikkoon.</p>
        <p><span className="accent">Berlin</span>, elok. 2 p.<br />Kun sota oli julistettu kokoontui suuria wäkijoukkoja keisarillisen palatsin edustalle. Keisari Wilhelm kääntyi kansanjoukon 
          puoleen seuraawilla sanoilla: „Me asuimme hiljaa ja rauhallisesti, meidän päällemme hyökättiin ja hyökättiin alhaisella tawalla. Menkää temppeleihinne ja rukoilkaa armeijan meidän 
          kunniakkaan sotajoukkomme puolesta. Minä olen paljastanut miekkani ja pistän sen tuppeen kunnialla”.</p>
        <p>Kansa terwehti keisaria innokkain Hurraahuudoin.</p>
        <h5>Wenäjän lähettiläs ei wielä ole lähtenyt Berlinistä.</h5>
        <p><span className="accent">Pietari</span>, elok. 2 p.<br />Tänne saapuneiden tietojen mukaan ei Wenäjän Berlinissä olewa lähettiläs tänä aamuna saatuaan Wenäjän ulkoministerin käskyn 
          lähteä Saksasta kaikkien lähetystön jäsenien kanssa, wielä ole lähtenyt Berlinistä. Hän wiipyy siellä wielä yhden wuorokauden turwatakseen Wenäjän Saksassa olewain alamaisten etuja.</p>
        <h5>Taisteluja Ranskan rajalla.</h5>
        <p><span className="accent">Brysselistä</span>, elok. 2 p.<br />Tänne on saapunut tieto, että saksalaiset joukot kuljettuaan Altkirchenin luona Ranskan rajan yli owat törmänneet yhteen 
          ranskalaisten etujoukkojen kanssa ja alkaneet näiden kanssa taistelun. Taistelu riehuu parhaillaan. Tänne on saapunut tieto että osasto saksalaista jalkawäkeä siwuutettuaan Luksenburgin 
          owat pikamarssissa kulkeneet Belgian alueen kautta pitkin Ranskan pohjoista rajaa tahtoen katketi kiertää lujasti warustetun Ranskan rajan wasemmalle puolelle.</p>
        <p><span className="accent">Belfast</span>, elok. 3 p.<br />Rajalla on tapahtunut useita pieniä kahakoita. Belforen lähellä on wangittu 2 saksalaista ulaania. Jaceren luona on tapahtunut 
          kahakka etuwartioiden wälillä, jolloin 1 saksalainen upseeri ja 1 ranskalainen sotamies saiwat surmansa.</p>
        <h5>Sodan uhka Ranskassa.</h5>
        <p><span className="accent">Pariisi</span>, elok. 2 p.<br />Ylhäisistä piireistä ilmoitetaan, että Saksa tänään julistaa sodan Ranskaa wastaan.</p>
        <p>Täällä on muodostettu kaksi wapaaehtoista joukkoa toinen wenäläinen ja toinen italialainen.</p>
        <p>Mieliala on erittäin jännittynyt. Tänään odotetaan Saksan lähettilään lähtewän Ranskasta. Sanomalehdet owat sitä mieltä, että on tehty kaikki, mitä on woitu sodan estämiseksi 
          Saksan kanssa.</p>
        <p>Tänä aamuna on saksalaisia lentokoneita lentänyt hywin korkealla Ranskan rajan yli palaten jälleen Saksan puolelle.</p>
        <h5>Saksan ja Englannin laiwastojen toimintaa.</h5>
        <p><span className="accent">Köpenhamina</span>, elok. 2 p.<br />Saksan sotalaiwat risteilewät yhä Belteissä. Muuan saksalainen miinaristeilijä on koettanut katkaista Saksaa ja Tanskaa 
          yhdistäwän kaapelin.</p>
        <p>Suuri englantilainen eskaaderi, käsittäen 21 laiwaa, ilmestyi tänään awoimelle merelle Köpenhaminan edustalle. Beltien luona odotetaan ensimäistä meritaistelua Englannin ja Saksan 
            laiwastojen wälillä.</p>
        <p><span className="accent">Kristiania</span>, elok. 2 p.<br />Taiwaarannalla on nähty sotalaiwoja, mutta ei olla woitu erottaa, owatko ne olleet englantilaista waiko saksalaisia. 
          Etäältä kuuluu tykkien jyskettä.</p>
        <p><span className="accent">Antwerpen</span>, elok. 2 p.<br />Hawasin toimisto ilmoittaa, että eräs Wliessingeniin saapunut hinaajalaiwa on kertonut merellä tawanneensa 17 suurta 
          saksalaista sotalaiwaa, jotka sammutetuin tulin tuliwat täyttä wauhtia Skagerakia kohti.</p>
        <p>Myöskin on nähty Wliessingenissä englantilaisia laiwastoeskaadereja pyrkiwän pohjoista kohti.</p>
        <h5>Belgradin pommitus.</h5>
        <p><span className="accent">Parisi</span>, elok. 2 p.<br />Nishistä lennätetään, että Belgrad palaa. Serbialaiset owat sytyttäneet kaupungin useasta kohdin. Tykistö ja muut tarwewarat on 
          räjäytetty ilmaan, tiet on rewitty. Kaupunkiin on jäänyt wain pieni wapaaehtoisten osasto, joka on päättänyt taistella wiimeiseen mieheen asti. Kaupungin päällä on liidellyt 2 
          itäwaltalaista lentokonetta, jotka putosiwat 300 m. korkeudesta maahan ja niissä olleet sotilaat saiwat surmansa.</p>
        <h5>Taisteluja.</h5>
        <p><span className="accent">Lontoo</span>, elok. 2 p.<br />Yöllä lennätetään tänne, että Belgradin eteläpuolella on käymässä suuri taistelu. Molemmin puolin on paljon kaatuneita ja 
          haawottuneita.</p>
        <h5>Tonawan yli.</h5>
        <p><span className="accent">Bukarest</span>, elok. 2 p.<br />Eilispäiwän kuluessa kulki juuri itäwaltalaisia sotawäenosastoja useista kohdin Tonawan yli.</p>
        <h5>Rumania ei puolueeton.</h5>
        <p><span className="accent">Bukarest</span>, elok. 2 p.<br />Hallitusta lähellä olewat piirit wakuuttawat, että Rumania tulee sekaantumaan Itäwallan ja Wenäjän wälisiin selkkauksiin.</p>
        <h5>Japanin laiwasto liikkeellä.</h5>
        <p><span className="accent">Lontoo</span>, elok. 2 p.<br />Tänne on juuri saapunut tieto, että Japanin laiwasto on suljetuin käskyin lähtenyt awoimelle merelle.</p>
        <h5>Italia ja Norja puolueettomia.</h5>
        <p><span className="accent">Rooma</span>, elok. 2 p.<br />Italia on wirallisesti ilmoittanut pysywänsä puolueettomana.</p>
        <p><span className="accent">Kristiania</span>, elok. 2 p.<br />Kuningas allekirjoitti eilen käskykirjelmän Norjan puolueettomuudesta.</p>
        <h5>Sekatietoja.</h5>
        <p><span className="accent">Lontoo</span>, elok. 2 p.<br />Täällä wallitsee suuri kullan puute. Diskonttokorko on kohonnut 10 pros.</p>
        <p><span className="accent">Pietari</span>, elok. 2 p.<br />Tänne on saapunut tieto, että Makedoniassa on puhjennut kapina.</p>
        <p><span className="accent">Pietari</span>, elok. 3 p.<br />Köpenhaminasta ilmoitetaan että Juutinmaan länsirannikolla on nähty englantilainen laiwasto, johon kuuluu 42 laiwaa.</p>
        <h5>Saksa julistanut sodan Ranskaa wastaan.</h5>
        <p><span className="accent">Pietari</span>, elok. 2 p.<br />Tänne ilmoitetaan wirallisesti, että Saksa on julistanut sodan Ranskaa wastaan. Mitään tietoa, että Englanti olisi julistanut 
          sodan Saksaa wastaan ei ole saapunut.</p>
        <h5>Keisari Frans Josef kuollut?</h5>
        <p><span className="accent">Pietari</span>, elok. 2 p.<br />Rusk. Kur:lle on ilmoitettu, että keisari Frans Josef kuultuaan, että Saksa on julistanut sodan Wenäjää wastaan on saanut 
          sydänhalwauksen ja kuollut.</p>
        <h5>Frans Josef ei ole kuollut.</h5>
        <p><span className="accent">Pietari</span>, elok. 3 p.<br />Tänne ei toistaiseksi ole saapunut wahwistusta tietoon keisari Frans Josefin kuolemasta.</p>          
      </Article>

      <Article titleText="Kaikkein korkein manifesti sodanjulistuksen johdosta.">
        <Divider className="dividerStyle" />
        <br />
        <p className="initialCap">Jumalan armosta Me Nikolai II, koko Wenäjänmaan Keisari ja Itsewaltias, Puolan Tsaari, Suomen Suuriruhtinas y. m. y. m. teemme tiettäwäksi kaikille 
          uskolliselle alamaisillemme:</p>
        <br />
        <p className="initialCap">Seuraten historiallista tehtäwäänsä ei Wenäjä ollen samaa uskontoa ja werta slaawilaisten kansain kanssa ole milloinkaan katsonut niiden kohtaloa 
          wälinpitämättömänä. Täysin yksimielisinä ja erityisellä woimalla owat Wenäjän kansan weljestunteet heränneet slaawilaisia kohtaan wiimeksi kuluneina päiwinä, jolloin Itäwalta-Unkari 
          esitti Serbialle waatimuksia, joita itsenäinen waltakunta ei mitenkään woi hywäksyä. Katsoen ylön Serbian hallituksen myödenantawan ja rauhaarakastawan wastauksen ja hyläten Wenäjän 
          hywää tarkoittawan wälityksen ryhtyi Itäwalta kiireellisesti aseelliseen hyökkäykseen alkaen pommittaa turwatonta Belgradia.</p>
        <br />
        <p className="initialCap">Ollen pakotettuja näin aiheutuneiden olosuhteiden wuoksi ryhtymään wälttämättömiin warowaisuustoimenpiteisiin käskimme Me saattaa armeija ja laiwasto 
          sotatilaan. Mutta pitäen arwossa alamaistemme henkeä ja omaisuutta ponnistimme Me kaikki woimamme saattaaksemme alkaneet keskustelut rauhalliseen päättymiseen.</p>
        <br />
        <p className="initialCap">Kesken ystäwällisiä suhteita Itäwallan liittolainen Saksa wastoin Meidän toiweitamme wuosisataisista hywistä naapuruussuhteista ja kuulematta Meidän 
          wakuutuksiamme ettei toimenpiteet joihin olemme ryhtyneet ole lainkaan sille wihamielisessä tarkotuksessa alkoi se waatia niiden wiipymätöntä peruuttamista ja saatuaan tähän 
          waatimukseen kieltäwän wastauksen, julisti se äkkiarwaamatta sodan Wenäjälle.</p>
        <br />
        <p className="initialCap">Nykyään ei Meidän tehtäwämme ole enään puolustaa wääryydellä loukattua sukulaistamme, waan warjella Wenäjän kunniaa, arwoa ja kokonaisuutta sekä asemaa 
          suurwaltain joukossa.</p>
        <br />
        <p className="initialCap">Me uskomme horjumatta, että Wenäjänmaata yksimielisesti ja itseuhraawasti on nousewa puolustamaan kaikki Meidän uskolliset alamaisemme. Uhkaawan waaran hetkellä 
          unohdettakoon sisäiset riitaisuudet.</p>
        <br />
        <p className="initialCap">Wahwistukoon yhä lujemmaksi tsaarin yhteys hänen kansansa kanssa ja torjukoon Wenäjä, joka on noussut kuin yhtenä miehenä, wihollisen röyhkeän hyökkäyksen.</p>
        <br />
        <p className="initialCap">Lujasti uskoen meidän aseittemme oikeuteen ja nöyrästi luottaen Kaikkein Korkeimman kaitselmukseen me rukoilemme pyhälle Wenäjänmaalle ja sen kunniakkaalle 
          sotajoukolle Jumalan siunausta.</p>
        <br />
        <p className="initialCap">Allekirjoitettu Pietarissa heinäk. 20 p. 1914 kesänä Kristuksen syntymästä Meidän 20:ntenä hallituswuotenamme.</p>
        <p>Alkuperäiseen on korkeimmanomakätisesti allekirjoitettu.</p>
        <p className="signature">Nikolai.</p>
        <SubDivider className="dividerStyle" />
      </Article>

      <div className="interTitle">6.8.1914</div>
      <Article titleText="Yleiseuropalainen sota.">
        <h5>Jumalanpalwelus Talwipalatsissa.</h5>
        <p><span className="accent">Pietari</span>, elok. 2 p.<br />Tänään oli Talwipalatsissa sodan johdosta juhlallinen jumalanpalwelus, jossa rukoiltiin woittoa Wenäjän aseille. 
          Jumalanpalwelukseen saapui Pietarhowista H. M. Keisari korkeine perheineen. Tilaisuudessa oli läsnä keisarillisen huoneen jäseniä, ministereitä, korkeimpia siwilimiehiä, Ranskan ja Serbian 
          lähettiläät y. m. Talwipalatsin edustalla olewa tori oli tulwillaan kansaa. Rukoiltaessa woittoa Wenäjän aseille laskeutuiwat kaikki läsnäolewat polwilleen.</p>
        <p>Sen jälkeen kääntyi Hänen Majesteettinsa läsnäolewien puoleen seuraawilla sanoilla: <span className="quote">Rauhallisena ja arwokkaana on Wenäjä-äitimme ottanut wastaan tiedon sodan 
          julistamisesta. Olen wakuutettu, että me rauhallisella tunteella käymme sotaan, olipa se sitten millainen tahansa. Minä ilmotan tässä juhlallisesti, etten solmi rauhaa, ennenkuin wiimeinen 
          wihollisen sotilas on poistunut meidän maastamme. Teidän minulle rakkaiden kaartin ja Pietarin sotilaspiirin edustajat teidän yksimielisesti kuin graniittiseinä lujana seisten, armeijan 
          puoleen käännyn ja siunaan sen sotatyön</span>.</p>
        <p>Hänen Majesteettinsa puheen ottiwat läsnäolijat wastaan raikuwin hurraahuudoin. Sen jälkeen suwaitsiwat H. M. Keisari ja keisarinna saapua Talwipalatatsin parwekkeelle. Palatsin edustalle 
          oli kokoontunut sataan tuhanteen nousewa kansanjoukko, joka laskeutui polwilleen ja lauloi hymnin ja kohotti senjälkeen woimakkaan hurraahuudon. Talwipalatsista lähti H. M. Keisari 
          huwilaiwalla „Aleksandria” takaisin Pietarhowiin.</p>
        <h5>Ensimäiset laukaukset Wenäjän ja Saksan rajalla.</h5>
        <p><span className="accent">Pietari</span>, elok. 4 p.<br />Wirallisesti ilmoitetaan että ensimäiset laukaukset Wenäjän ja Saksan rajalla ammuttiin t.k. 2 pn wastaisena yönä. Useita 
          pienempiä kahakoita on sattunut. Suurempia sotatoimenpiteitä Wenäjän ja Saksan wälillä ei wielä toistaiseksi woida odottaa.</p>
        <p>Rajalta on saapunut tietoja, että Wenäjän sotawäen liikekannalle asettaminen sujui menestyksellisesti.</p>
        <p>Wenäjän yleisesikunta ilmoittaa wirallisesti, että Wenäjän sotajoukot owat tulleet kosketukseen wihollisen kanssa suurimmalla osalla Wenäjän ja Saksan rajaa. Nykyään liikkeet rajottuwat 
          tiedustelutoimintaan. Jalabarschiman luona owat saksalaiset peräytyneet päiwän matkan häwittäen ja polttaen samalla kyliä laajalla alueella. Pienempi wihollisjoukko miehitti t.k. 1 p. 
          Wendin ja Kalishin ja t.k. 2 p. Shemtshowin. Wenäjän armeijan liikekannalle asettaminen sujuu oiwallisesti.</p>
        <h5>Luxemburg wetoo wastalauseella suurwaltoihin.</h5>
        <p><span className="accent">Luxemburgista</span>, elok. 3 p.<br />Tänään kääntyi Luxemburgin hallituksen presidentti suurwaltain puoleen, jotka owat taanneet Luxemburgin puolueettomuuden, 
          seuraawalla wastalauseella:</p>
        <p>Minulla on kunnia ilmoittaa Teidän ylhäisyydellenne seuraawista asioista: Suurherttualaisen hallituksen saamien tietojen mukaan tunkeutuiwat saksalaiset elokuun 2 päiwänä 
          Wasterbillingin ja Redichin siltoja myöden Luxemburgin alueelle suunnatten kulkunsa pääasiassa etelään Luxemburgin kaupunkia kohti. Useita sotajoukkoja kulettawia panssaroituja  junia on 
          lähetetty rautateitse Wasterbilingistä Luxemburgiin, jonne niitä odotetaan joka hetki. Tällainen toiminta on selwästi ristiriidassa suurherttuakunnan puolueettomuuden kanssa, joka on 
          taattu Lontoon traktaatissa wuodelta 1886. Luxemburgin hallitus on wiipymättä jättänyt wastalauseen tämän hyökkäyksen johdosta Saksan Luxemburgissa olewalle edustajalle. Samallainen 
          wastalause on sähköteitse lähetetty Saksan ulkoministeriölle Berliiniin.</p>
        <h5>Englanti tyytymätön Saksan hyökkäyksen johdosta Luxemburgiin.</h5>
        <p><span className="accent">Lontoosta</span>, elok. 2 p.<br />Ennen ministerineuwoston kokousta käwi Saksan lähettiläs Asquithin ja Greyn puheilla. Suunnattomat ihmisjoukot odottawat kadulla 
          tietoa ministerineuwoston päätöksestä. Saksan sotatoimia puolueetonta Luxemburgia wastaan paheksutaan yleisesti Englannissa.</p>
        <h5>Sotakysymys Englannissa.</h5>
        <p><span className="accent">Lontoosta</span>, elok. 3 p.<br />Sanomalehti „Obserwer” on kirjoittanut johtawan artikkelin, jossa lehti innokkaasti kehoittaa hallitusta uskollisesti awustamaan 
          waltakunnan ystäwiä. Jos ei Englanti, kirjoittaa „Obserwer”, nyt awusta Ranskaa ja Wenäjää, niin tulemme ensi sodassa olemaan yksin mahtawaa mannermaalaista wihollista wastaan, jolloin 
          Wenäjä ja Saksa saattawat taistella rinnakkain.</p>
        <p><span className="accent">Pietarista</span>, elok. 3 p.<br /> Pietarin diplomaattisista piireistä ilmoitetaan, että Englannin hallitus on päättänyt rajoittaa sotatoimenpiteensä yksinomaan 
          Ranskan, Hollannin ja Belgian rannikoiden suojelemiseen. Tästä huolimatta pidetään Pietarissa mahdollisena, että Englannin hallitus tekee uuden Wenäjän etujen mukaisen päätöksen.</p>
      </Article>
      <Article titleText="Englanti julistanut sodan Saksaa wastaan.">
        <p><span className="accent">Pietari</span>, elok. 4 p.<br />Englannin täällä olewa lähettiläs on ilmoittanut ulkoministeri Sasonowille Englannin hallituksen käskeneen hänen ilmoittaa, että 
          Englanti yhtyy Wenäjän ja Ranskan kanssa ja julistaa sodan Saksaa wastaan.</p>
        <p><span className="accent">Lontoo</span>, elok. 4 p.<br />Sotaministeriö ja amiraliteetti owat olleet tarmokkaassa toiminnassa. Laupeudensisaret owat saaneet kutsun saapua toimiinsa. Paljon 
          reserwiläisiä on saapunut määräpaikkoihinsa.</p>
        <p> Täältä ilmoitetaan, että laiwastoesikunnan laatiman ohjelman mukaan tulee laiwasto ryhtymään ratkaisewaan toimintaan. Sen toiminta tulee olemaan yksinomaan hyökkääwää laatua.</p>
        <p>Sodanjulistus on täällä herättänyt innostusta, jollaista hallitus ei woinut odottaa. Buckinghamin palatsin edustalle kokoontui tuhansiin nousewa kansajoukko. Kuningas ja kuningatar 
          astuiwat parwekkeelle kansan myrskyisästi osoittaessa suosiotaan.</p>
        <p>Englannin laiwasto on täysin taisteluwalmiina Pohjanmeren suulla.</p>
        <SubDivider className="dividerStyle" />
        <h5>Belgia julistanut sodan Saksalle.</h5>
        <p><span className="accent">Pietari</span>, elok. 4 p.<br />Wirallisesti ilmoitetaan, että Belgian hallitus, sen johdosta että saksalainen sotajoukko on kulkennt Belgian alueen läpi ja siten 
          rikkonnt Belgian puolueettomuutta wastaan, on julistanut sodan Saksaa wastaan.</p>
        <h5>Saksalaiset waltaawat Belgiaa.</h5>
        <p><span className="accent">Parisi</span>, elok. 4 p.<br />Tänne saapuneen tiedon mukaan tekee liikekannalle asetettu Belgian armeija ankaraa wastarintaa maahan tunkeutuneille saksalaisille. 
          Ranskan armeijakunnat tulewat tukemaan Belgian sotajoukkoja.</p>
        <p><span className="accent">Brüssel</span>, elok. 4 p.<br />Ranskan täkäläinen lähettiläs ilmoitti wiime yönä klo 2,30 Belgian ulkoministerille että Brüsselin yläpuolella on nähty 3 
          saksalaista ilmalaiwaa ja että saksalainen sotawäki miehittää Belgian aluetta. Lähettiläs ilmoitti tästä myöskin hallitukselle ja Englannin lähettiläälle.</p>
        <SubDivider className="dividerStyle" />
        <h5>Wirallinen ilmoitus Saksan sodanjulistuksesta Ranskaa wastaan.</h5>
        <p><span className="accent">Pietari</span>, elok. 4 p.<br />Tänne ilmoitetaan wirallisesti että Saksa on julistanut sodan Ranskaa wastaan.</p>
        <p><span className="accent">Parisi</span>, elok. 4 p.<br />Saatuaan passinsa ilmoitti Saksan lähettiläs Ranskan hallitukselle, että Saksa katsoo olewansa sodassa Ranskan kanssa.</p>
        <h5>Ranskan rajalta.</h5>
        <p><span className="accent">Lontoo</span>, elok. 4 p.<br /> Brysselistä ilmoitetaan että 100,000 miehen suuruinen saksalaisarmeija kulkee pitkin Ranskan pohjoista rajaa.</p>
        <p><span className="accent">Parisi</span>, elok. 4 p.<br />Hawasin toimisto huomauttaa, että yleisen mielialan ei pidä antautua lewottomuuden waltaan, waikka saksalaiset sotajoukot ensi 
          päiwinä waltaisiwatkin Ranskan rajaseuduilla alueita, joilla sotilaallisessa suhteessa ei ole merkitystä.</p>
        <p><span className="accent">Pietari</span>, elok. 4 p.<br />Hawasin toimisto ilmoittaa, että tiedot Ranskan sotajoukkojen keskityksistä erittäin tyydyttäwiä. Liikkeet rajan puolustamiseksi 
          owat hywin onnistuneet.</p>
        <p><span className="accent">Parisi</span>, elok. 4 p.<br />Luxenburgin rajan yli on kulkenut 35 saksalaisia upseereja kulettawaa automobiilia, joita seurasi suuri ratsuwäenosasto.</p>
        <SubDivider className="dividerStyle" />
        <h5>Italia wirallisesti puolueeton.</h5>
        <p><span className="accent">Pietari</span>, elok. 4 p.<br />Eilen pidettiin Roomassa ministeristön istunto kuninkaan johtaessa puhetta. Istunnossa päätettiin, että Italia Saksan ja Wenäjän 
          sotaan nähden pysyy puolueettomana, koska Saksa on ollut hyökkääwänä puolena.</p>
        <p><span className="accent">Pariisi</span>, elok. 4 p.<br />Italian lähettiläs on wirallisesti ilmoittanut Italian puolueettomuudesta.</p>
        <h5>Italialaiset sotalaiwat Adrianmerellä.</h5>
        <p><span className="accent">Atena</span>, elok. 4 p.<br />Italialaiset sotalaiwat owat sulkeneet koko Italian rannikon. Eilen ajoiwat italialaiset sotalaiwat merellä takaa Montenegron 
          kuninkaan huwipurtta, joka töin tuskin pelastautui Antiwarin satamaan.</p>
        <SubDivider className="dividerStyle" />
        <h5>Itäwaltalaiset Wenäjän rajalla.</h5>
        <p><span className="accent">Lontoo</span>, elok. 4 p.<br />Huhujen mukaan owat Itäwaltalaiset sotajoukot lähteneet Bosniasta ja Semlinistä Wenäjän rajaa kohti. Wain pienempiä sotawäenosastoja 
          on jätetty puolustamaan rajaa Serbiaa wastaan.</p>
        <h5>Rumania hyökkää Itäwaltaa wastaan.</h5>
        <p><span className="accent">Konstantinopolista</span>, elok. 4 p.<br />Täällä on liikkeellä itsepintaisia huhuja, että Rumania lähinnä seuraawina päiwinä katsoo itsensä pakoitetuksi 
          sekaantumaan yleiseuropalaiseen selkkaukseen ja tulee tekemään tarmokkaan hyökkäyksen Transsilwaniaan, jossa Itäwalta-Unkarilla on wain pienehköjä sotajoukkoja. Rumanian sotawäen 
          liikekannalle asettamista woidaan pitää päättyneenä.</p>
        <h5>Turkki walmistautuu sotaan.</h5>
        <p><span className="accent">Pietari</span>, elok. 4 p.<br />Yleisesikunnalle on saapunut wahwistus tietoon, Turkin sotawäen liikekannalle asettamisesta. Rautateiden ja maanteiden kehnouden 
          wuoksi on se loppuunsuoritettu wasta muutaman wiikon kuluttua.</p>
        <p><span className="accent">Konstantinopoli</span>, elok. 4 p.<br />Nuorturkkilainen komitea on päättänyt, jos sota lewiää Turkin alueelle, Turkki silloin yhtyy Saksaan ja Itäwaltaan.</p>
        <h5>Bulgarian laiwasto liikekannalle.</h5>
        <p><span className="accent">Sofia</span>, elok. 4 p.<br />Tänään on annettu julistus laiwaston liikekannalle asettamisesta. Ensimäinen eskaaderi on maalattuna taisteluwärein lähtenyt 
          merelle.</p>
        <h5>Hollantikin asettaa liikekannalle.</h5>
        <p><span className="accent">Tukholma</span>, elok. 4 p.<br />Hollannin hallitus on julkaissut käskyn armeijan liikekannalleasettamisesta. 15,000 reserwiläistä on kutsuttu palwelukseen.</p>
      </Article>
      <Article titleText="Englannin sodanjulistus vahvistettu.">
        <h5>Englannin laivastolle annettu käsky kaapata saksalaiset kauppalaivat.</h5>
        <h5>Pohjanmeren rannikko sulettu.</h5>
        <h5>Elintarpeiden kulettaminen Saksaan estetty.</h5>
        <p><span className="accent">Pietari</span>, elok. 5 p.<br />Klo 6 tänä aamuna on Englannin täkäläinen lähettiläs virallisesti ilmoittanut, että Englanti on julistanut sodan Saksaa vastaan.</p>
        <p>Heti sodanjulistuksen annettua, annettiin langattomalla lennättimellä kaikilla maailman merillä oleville Englannin sotalaivoille käsky kaapata kaikki saksalaiset kauppalaivat, sekä samalla 
          tarkat tiedot niiden olinpaikoista ja matkoista.</p>
        <p>Sotaväkeä on lastattu sota- ja kuletuslaivoihin laskettavaksi maihin Belgian rannikoille. Ne tulevat suojelemaan niitä paikkoja, joita saksalaiset yrittävät vallata. Samalla tulevat ne 
          tukemaan Ranskan armeijaa, jota saksalaiset yrittävät kiertää.</p>
        <p>Tänään sulkevat Englannin laivat Saksan koko Pohjanmeren rannikon. Vilja sekä elintarpeet ovat julistettu sotakieltotavaraksi, niiden kuletus Saksaan estetty.</p>
        <p>Englanti on ottanut suojellakseen ja pitääkseen voimassa Belgian, Hollannin, Tanskan ja Norjan puoluettomuuden.</p>
        <p>Saksa tulee tämän kautta kokonaan eristetyksi muusta maailmasta ja ruokatavarain tuonti sinne lakkaa.</p>
        <p><span className="accent">Lontoo</span>, elok. 4 p.<br />Kuningas Yrjö on kääntynyt laiwaston puoleen julistuksella, jossa hän lausuu toiwomuksensa että upseerit ja miehistö ylläpitäwät 
          laiwaston wanhaa mainetta osoittaen wielä kerran, että se on Suur Britannian turwa koettelemuksien hetkenä.</p>
      </Article>
      <Article titleText="Myrskyisiä mielenosotuksia Pietarissa.">
        <p><span className="accent">Pietari</span>, elok. 5 p.<br />Myöhään eilen illalla kuultuaan suuriruhtinas Konstantin Konstantinowitshin vangitsemisesta lähti raivostunut kansajoukko Saksan 
          lähetystöä kohti, jonka huoneustossa se toimeenpani täydellisen hävityksen. Paikalle saapuneet poliisit ja kasakat olivat aluksi voimattomia. Suurilla ponnistuksilla ja paloruiskujen avulla 
          saatiin mielenosottajat vihdoin hillityksi. Nevskyn ja Sadovajan kulmassa hävitti kansajoukko Reuterin kahvilan.</p>
        <p><span className="accent">Pietari</span>, elok. 5 p.<br />Yhdyswaltain lähettiläs on pannut wastalauseensa Saksan lähetystöä kohdanneen häwityksen johdosta. Ulkoministeri Sasonow on 
          tehnyt anteeksipyynnön. Pietarin kaupunginpäällikkö on kieltänyt mielenosotukset kehoittaen asukkaita rauhallisuuteen.</p>
      </Article>
      <Article titleText="Serbian ja Itävallan sotavoimat.">
        <p>Ennen Balkansotaa oli Serbian maa-alue noin 48,000 neliökm. ja asukasluku 3 milj. mutta nämä luwut owat edellisen sodan kautta kohonneet n. 83,000 neliökm:iin ja 4 1/2 milj. asukkaaseen. 
          Siellä on, ainakin warsinaisessa Serbiassa hywät tiet ja hywin järjestetty rautatiewerkko, joka on maksanut wain 36 wuotta wanhalle waltakunnalle huomattawia summia. Paljon enemmän kuin 
          näihin rauhallisiin tarkotuksiin, on Serbia kuitenkin uhrannut sotalaitoksensa kuntoon saattamiseksi, senjälkeen kuin Itäwalta w. 1908 liitti itseensä Bosnian ja Hewzegowinan. Kansa on 
          kuin sotilaiksi luotua: sitä yhdistää woimakas yhteenkuuluwaisuuden tunne, se on urhoollista, ankaraan kuriin tottunutta, wähään tyytywää ja kestäwää.</p>
        <p>Serbia ei ole uhrannut pikkusummia sotalaitoksensa hywäksi, sen menoarwiosta on jo wuosikymmeniä mennyt neljäsosa noin 20 milj. mk. sotawalmistuksiin ja w. 1908 jälkeen on se käyttänyt 
          yli 200 milj. mk. täysin nykyaikaisen ja nykyaikaisesti warustetun sotajoukon luomiseen. Lukumäärältään on tämä sotajoukko aiwan hämmätyttäwä werrattuna maan asukasmäärään.</p>
        <p>W. 1901 säädetyn asemelwollisuuslain mukaan wallitsee maassa yleinen 25-wuotinen asewelwollisuus, nim. 11 wuotta 1:ssä, 6 w. 2:ssa ja 3 w. 3:ssa ikäluokassa. Lisäksi tulee nostowäki, 
          johon kuuluwat miehet 18 ja 20, sekä 46 ja 50 w. wälillä.</p>
        <p>Warsinainen palwelusaika waihtelee 1½—2 wuoteen. Liewennystä saawat siwistyneet sekä ne, jotka tuowat mukanaan hewosen ratsuwäkeen.</p>
        <p>Aliupseeriksi kohoaminen on hywin helppoa ja usean upseerin tieteellinen siwistys hämmästyttäwän pieni. Balkansodassa kärsityt tappiot eiwät todista suurta tieteellisyyttä, mutta sen 
          sijaan on päälliköillä kokemusta, jonka arwoa ei saata arwostella kyllin suureksi.</p>
        <p>Serbian warsinaiseen armeijaan kuuluu 190,000 miestä jalkawäkeä, 8,500 ratsumiestä, 500 tykkiä ja 200 konekiwääriä.</p>
        <p>Serbian koko armeija täydelleen liikekannalle asetettuna w. 1912 nousi 347,000 mieheen. Mainittu luku teki 12 % Serbian silloisesta asukasluwusta.</p>
        <p>Kiwäärit ja tykit owat täysin ensiluokkaisia. Hewosista on Serbian ratsuwäellä alituinen puute, sillä wetojuhtana serbialainen yleensä käyttää härkiä.</p>
        <p>Terweydenhoito on hywin järjestetty, mutta maassa on wähän lääkäreitä, joten wieraaseen apuun oli Balkansodissa suuressa määrin turwauduttawa.</p>
        <p>Serbialla on 8 lentokonetta ja 8 koeteltawana, joten maa myöskin tässä suhteessa on hywin seurannut aikaansa.</p>
        <p>Liikekannalle asettaminen tapahtuu rautateillä wallitsewista puutteista huolimatta nopeasti, joten se wiime Balkansodassa saatiin loppuunsuoritetuksi 10 päiwässä. Miehistöllä on kaikki, 
          mitä se sodassa tarwitsee, kotonaan kiwääri ja warustukset, joten se heti paikalla on walmis lähtemään.</p>
        <p>Serbian sotajoukko on mitä parhaimmassa kunnossa. Kahdesta kunnialla kestetystä sodasta saawuttamine kokemuksineen tulee se warmaan olemaan hywinkin kunnioitettawa wastustaja Itäwallalle, 
          joka ei ole ollut sodassa jälkeen 1866. Serbian wuorinen maanlaatu harwoine solineen soweltuu erinomaisesti Serbian armeijan liikkeille, mutta Itäwallan raskaasti warustettu armeija on 
          warmaan wieraassa maassa saawa kokea, että Serbia pienuudestaan huolimatta on wastustaja, jota ei ole helppo kukistaa.</p>
        <p>51½ milj. nousewine asukasmäärineen saattaa Itäwalta nykyään asettaa jalkeille 2 milj. sotamiestä, tähän ei kuitenkaan ole laskettu nostowäkeä.</p>
        <p>Maassa wallitsee yleinen asewelwollisuus. Varsinainen palwelu-aika on 2 wuotta ja sen jälkeen 10 w. reserwissä ja 12 w. nostowäessä. Täälläkin on sotarasituksessa myönnetty eri syistä 
          liewennyksiä. Sitäpaitsi on säädetty erityinen asewelwollisuuswero niiden suoritettawaksi, jotka syystä tai toisesta owat sotapalweluksesta wapautetut.</p>
        <p>Vuosittain uhrataan menoarwiossa n. 735 milj. Itäwaltalaisia kruunuja armeijan ja laiwaston menoihin ja uuden w. 1913 woimaanastuneen järjestyksen mukaan nousee tämä menoerä 1 
          miljardiin.</p>
        <p>Rauhan aikana Itäwalta-Unkarin armeijaan kuuluu 48 diwisioonaa jalkawäkeä ja 10 ratsuwäkidiwisioonaa eli yhteensä 16 armeijakuntaa. Sodan armeijakuntien lukua on lisättäwä. Tämän 
          armeijan käytettäwänä on noin 2,261 tykkiä.</p>
        <p>Varsinaisen armeijan lisäksi on Itäwallalla suuria insinööri-, rautatie- ja sähkölennätinpataljooneja. Edelleen on erityinen automobiili-komennuskunta, ja ilmalaiwaosasto, johon kuuluu 
          wähintäin 3 suurta ilmalaiwaa ja lukuisia lentokoneita.</p>
        <p>Luonteenomaista itäwaltalaiselle armeijalle  on, että sillä on suhteellisesti wähän aliupseereja, josta seuraa, että wakinaisten upseerien täytyy työskennellä kowin. Armeijan aseistus on 
          yleensä parasta, mitä rahalla woi saada.</p>
        <p>Itäwalta-Unkarin armeijalla on kuitenkin heikotkin puolensa. Se on kokoonpantu 4 eri kansallisuuden asewelwollisista. Ennen kaikki nämä kansallisuudet oliwat sekoitetut samoihin 
          rykmentteihin, mutta nyt jokainen rykmentti on kokoonpantu saman kansallisuuden asewelwollisista. Näin ollen 102:sta rykmentistä on 16 saksalaista, 19 unkarilaista, 7 rumanialaista, 15 
          tshekkiläistä, 9 rutenilaista, 9 puolalaista, 9 serbialais-kroatialaista, 4 slowakilaista ja 2 sloweenilaista rykmenttiä. Muista 12 rykmentistä on 1 puolalais-rutenilainen, 1 slowenilais-
          italialainen ja loput 10 rykmenttiä on kokoonpantu 3-4 kansallisuuden asewelwollisista. Wain wahän enemmän kuin puolet on siis saksalaisia, unkarilaisia ja rumanialaisia.</p>
        <p>Sellaisella hajanaisista aineksista kokoonpannulla armeijalla kaikista eduistaan huolimatta on waikea kukistaa yksimielistä woimakkaan kansallistunnon yhdistämää Serbiaa.</p>
      </Article>

      <div className="interTitle">8.8.1914</div>
      <Article titleText="Itäwalta julistanut sodan Wenäjää wastaan.">
        <p><span className="accent">Pietari</span>, elok. 6 p.<br />Tänään klo 6 i. p. jätti Itäwallan lähettiläs, kreiwi Szapary ulkoministeri Sasonowille suullisen nootin, jossa Itäwalta julistaa 
          sodan Wenäjälle.</p>
        <p><span className="accent">Pietari</span>, elok. 7 p.<br />Itäwallan lähettiläs kreiwi Szaparyn ulkoministerille jättämä suullinen nootti jolla Itäwalta julisti sodan Wenäjää wastaan 
          sisälsi, että Itäwalta-Unkari on pakoitettu julistamaan sodan.</p>
        <p>1. Wenäjän Itäwallan rajalla tekemien sotawarustusten uhkaawan luonteen wuoksi.</p>
        <p>2. Itäwallan Saksan kanssa tekemän liittosopimuksen welwoittamana, koska Saksa nykyään on sodassa Wenäjän kanssa.</p>
        <h5>Itäwallan lähetystö poistunut Pietarista.</h5>
        <p><span className="accent">Pietari</span>, elok. 7 p.<br />Tänään klo 8 ap. lähtee Itäwallan täkäläinen lähetystö Pietarista. Matka tapahtuu Suomen kautta Tornioon.</p>
        <h5>Itäwalta keskittää sotajoukkojaan Wenäjän rajalle.</h5>
        <p><span className="accent">Pietari</span>, elok. 6 p.<br />Luotettawista lähteistä ilmoitetaan, että Itäwalta-Unkari on wiime päiwinä alkanut keskittää suuria sotajoukkoja Galiziaan. 
          Sotajoukkojen tulwa on niin suuri, että täytyy otaksua Itäwallan luopuneen sotatoimista Serbiaa wastaan.</p>
        <h5>Itäwaltalaiset ryhtyneet sotatoimiin.</h5>
        <p><span className="accent">Pietari</span>, elok. 7 p.<br />Wirallisten tietojen mukaan alkoiwat itäwaltalaiset sotatoimet Wenäjän rajalla eilen klo 7, 12 tuntia ennen sodan julistamista.</p>
      </Article>
      <Article titleText="Suurwaltojen liikekannalle asettamat sotawoimat.">
        <p>Niistä joukkomääristä, joita suurwallat nyt alkaneessa maailmansodassa owat panneet liikekannalle, sisältää eräs ulkomaalainen lehti seuraawia tietoja:</p>
        <p>Itäwalta laskee liikkeelle 2½ miljoonaa miestä. Toiset kolmiliiton walloista, Saksa ja Italia asettawat liikekannalle, edellinen 5½, jälkimäinen 2 miljoonaa sotilasta. Silloin nämä 
          kolmisin wallitsewat 10 miljoonaista maa-armeijaa. Kolmisopimuksen waltojen armeija on 9-miljoonainen, niistä Englanti, jonka woima on laiwastossa, woi asettaa 150-tuhantisen maa-armeijan. 
          Serbialla on liittää näihin 300,000 wiime sodan aikana karaistua miestä ja Montenegrolla 30,000 erinomaisen harjaantunutta ampujaa. Yhteensä siis liikkeellä 19 miljoonaa parhaassa 
          ijāssä olewaa miestä kahdeksaa eri kansallisuutta.</p>
        <p>Itäwallan laiwastoon kuuluu 16,000 miestä ja 20,000 reserwiläistä. Dreadnoughteja on laiwastossa 8. Saksan laiwastossa on 18 dreadnoughtia, sen miehistö on 70 tuhantinen, reserwiläisiä 
          80,000. Italian laiwaston wastaawat luwut owat 10, 37,000 ja 40,000. Kolmiliitolla on siis meriwoimaa: 37 dreadnoughtia ja miehistöä 129,000.</p>
        <p>Kolmisopimuksen walloilla on yhteensä 48 dreadnoughtia ja miehistöä 264,000. Englannilla on tällöin yksistään 32 dreadnoughtia, wakinaista miehistöä 146,000 ja reserwiä 63,000. Ranskan 
          laiwaston wastaawat luwut owat 12, 63,000 ja 70,000.</p>
        <p>Maalla ja merellä taistelewien luku on siis yhteensä 19,393,000. Mutta ei siinä kyllin. Liikekannallepanoon owat suursodan syttyessä pakotetut myöskin Europan pienemmatkin wallat 
          puolueettomuutensa säilyttämisen nimessä. Kreikka kutsuu aseisiin 200,000, Bulgaria 550,000, Rumania 700,000 ja Turkki lopuksi 500,000 miestä, siis yhteensä noin 2 miljoonan miehen 
          lisäys. Otetaan wielä lukuun Hollanin 175,000, Belgian 300,000, Ruotsin 600,000, Norjan 115,000, sen lisäksi wielä Tanskan 100,000 ja Sweitsin 300,000 miestä, niin loppusumma nousee 
          23,000,000 sotilaaseen.</p>
        <p>Europan wäkiluwusta wie maailmansota siis aseisiin kokonaista 5 prosenttia.</p>
      </Article>

      <div className="interTitle">15.8.1914</div>
      <Article titleText="Sodan ja rauhan rajamailla.">
        <p>T. k. 4 p:nä jätettiin Saksan waltiopäiwille n. k. „walkoinen kirja”, jossa hallitus tekee selkoa sodan syistä ja omasta osallisuudestaan tähän suureen onnettomuuteen. Erikoisesti on 
          omiaan kiinnittämään mieltä seuraawa Saksan ja Wenäjän hallitsijoitten wälinen sähkösanomawaihto.</p>
        <p>Heinäk. 31 p. lähetti keisari Nikolai keisari Wilhelmille seuraawan sähkösanoman:</p>
        <p className="quotationStyle">„Kiitän sinua sydämestäni wälityksestä, joka antaa toiwon pilkoittaa, että kaikki wielä woi päättyä rauhallisesti. Meidän on teknillisesti mahdoton lakkauttaa 
          sotilaallisia walmistuksiamme, jotka Itäwallan mobilisoimisen takia owat käyneet wälttämättömiksi. Me emme halua sotaa, kaukana sitä, niinkauan kuin neuwottelut Itäwallan kanssa Serbian 
          asiasta owat käymässä. Minun joukkoni eiwät ryhdy mihinkään uhkaawaan toimintaan. Wakuutan sen sinulle kunniasanallani. Luotan kaikin woimin Jumalan armoon ja toiwon wälityksesi 
          tulosten Wienissä koituwan maittemme onnen ja Europan rauhan hywäksi.</p>
        <p className="quotationStyle">Sinuun sydämellisesti kiintyneenä</p>
        <p className="signature">Nikolai.”</p>
        <p>Keisari Wilhelmin wastaus kuului seuraawasti:</p>
        <p className="quotationStyle">„Wedotessasi minun ystäwyyteeni ja pyytäessäsi minun apuani, olen minä ryhtynyt wälitystoimintaan Sinun ja Itäwalta-Unkarin hallituksen hywäksi. Sillä aikaa 
          kun tämä toiminta oli wireillä, owat Sinun joukkosi asetetut liikekannalle minun liittolaistani Itäwalta-Unkaria wastaan, ja sen kautta, kuten jo olen Sinulle ilmoittanut, minun 
          wälitykseni on käynyt melkein mahdottomaksi. Tästä huolimatta olen minä jatkanut wälitystäni. Sittemmin sain minä luotettawia tietoja wakawista sotawalmistuksista myöskin minun itäisellä 
          rajallani. Wastuu waltakuntani turwallisuudesta pakottaa minut ryhtymään puolustawiin wastatoimenpiteisiin. Pyrkimyksissäni maailmanrauhan säilyttämiseksi olen minä mennyt mahdollisuuden 
          äärimmäiselle rajalle. Minä en ole wastuunalainen siitä pahasta, joka nyt uhkaa koko siwistynyttä maailmaa. Wielä tällä hetkellä woit Sinä torjua sen. Mikään ei uhkaa Wenäjän waltaa ja 
          kunniaa, ja Wenäjä olisi woinut sangen hywin odottaa minun wälitykseni tulosta. Se ystäwyys Sinuun ja Sinun waltakuntaasi, jonka isoisäni kuolinwuoteellaan jätti minulle perinnöksi, on 
          aina ollut pyhä minulle. Minä olen uskollisesti auttanut Wenäjää, milloin se on ollut waikeassa ahdinkotilassa, etenkin wiime sodan aikana. Europan rauhan woit Sinä wielä tällä hetkellä 
          pelastaa, jos Wenäjä päättää lakkauttaa ne sotilaalliset toimenpiteet, jotka uhkaawat Saksaa ja Itäwaltaa.”</p>
      </Article>



      <br></br>
      <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/titles/0356-2751?display=THUMB&year=1914">Linkki vuosikertaan 1914</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Kohti maailmansotaa</title> // metadata

export default War1914Page 