import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import Divider from "../assets/divider.svg"
import SubDivider from "../assets/sub-divider.svg"
import QuoteStart from "../assets/quotation-start.svg"
import QuoteEnd from "../assets/quotation-end.svg"

import "../styles/base/global.css"

const CivilWarPage = () => {
  return (
    <Layout titleText="Hämeen Sanomat, 1918">
      <h2>Kohti sisällissotaa</h2>

      <div className="interTitle">10.1.1918</div>
      <Article titleText="Helsingin punakaarti jälleen liikkeellä.">
        <h5>Kuwernööri Jalanderia waadittu poistumaan koko läänistä.</h5>
        <p>Helsingin punakaartin 4-miehinen lähetystö käwi tiistaina klo 11 ajoissa Uudenmaan lääninhallituksessa jättämässä kuwernööri Jalanderille punakaartin puolesta „määräyksen”, jossa 
          ilmoitettiin Helsingin punaisen kaartin päättäneen, että kaartin aikaisemmin wangitseman ja senaatin sittemmin wapauttaman kuwernööri Jalanderin on erottawa toimestaan ja poistuttawa 
          Uudenmaan läänistä 48 tunnin kuluttua tästä määräyksestä tiedon saatuaan. Muussa tapauksessa ei woida taata hänen turwallisuudestaan.</p>
        <p>Lähetystö esiintyi rauhallisesti.</p>
        <p>Vastauksessaan kuwernööri ilmoitti että hän hallituksen nimittämänä wirkamiehenä woi alistua ainoastaan sellaisiin käskyihin, joita Suomen kansan eduskunnan luottamusta nauttiwa maan 
          hallitus hänelle antaa, eikä woi tunnustaa määräyksiä, jotka joku ryhmä itsewaltaisesti esittää, warsinkaan kun ei waatimuksen perusteella ole esiintuotu minkäänlaista wirkarikosta.</p>
        <p>Kun miliisilaitokselle saapui tieto kaartin jäsenten saapumisesta lääninhallitukseen, lähtiwät poliisimestari Rowio ja eräs järjestystoimikunnan jäsenistä sinne tiedustelemaan 
          punakaartilaisten asiaa. Heille selwitti lähetystö yllämainitun kirjelmän sisällön. Kun heiltä tiedusteltiin, mitä järkeä oli tuollaisessa waatimuksessa, warsinkin kuwernööri Jalanderin 
          läänistä poistumiseen nähden, wastasi kaartin lähetystö wain, että he toimiwat määräyksen mukaan. Kun mitään rauhattomuutta ei kaartin taholta sen enemmän tapahtunut, ei miliisipäällystö 
          ryhtynyt enempiin toimenpiteisiin.</p>
        <SubDivider className="dividerStyle" />
        <h5>Punakaarti anastanut ent. kenraalikuwernöörin talon. - Sosialihallitus ja wakuutusneuwosto karkotetaan huoneustoistaan.</h5>
        <p>Tiistaina klo 3 aikaan päiwällä saapui ent. kenraalikuwernöörin taloon, jossa nyt sijaitsewat äsken toimintansa alottanut sosialihallitus ja wakuutusneuwosto, useita kymmeniä kiwääreillä 
          warustettuja punakaartilaisia, jotka asettiwat wartijat talon ulko-owille ja tunkeutuiwat talon käytäwiin. Sosialihallituksen ylitirehtöörille E. Böökille ilmoittiwat punakaartilaiset 
          komiteansa päättäneen, että talo on luowutettawa punakaartilaisten haltuun. Hra Böök huomautti tällöin, että talossa sijaitsee hallituksen asettama sosialihallitus ja piti erittäin 
          walitettamana seikkana, että punakaarti tällä tawoin tahtoo saada haltuunsa juuri sosialihallituksen huoneuston, koska sosialihallitus juuri on asettunut huolehtimaan eduskunnan 
          päättämistä työwäen asioista. Tähän wastasiwat punakaartilaiset, että sellaiset lait owat esi-isäin aikuisia ja etteiwät he tunnusta mitään hallitusta eikä senaattia eikä liion 
          parlamenttaarisia menettelytapoja, koska he aikowat tehdä wallankumouksen.</p>
        <p>Lopulla kumminkin miesten waatimus supistui siihen, että heidän talosta tuli saada haltuunsa 3 kansliahuonetta talon yläkerrasta. Tähän ylitirehtööri Böök ei kuitenkaan sanonut woiwansa 
          suostua, koska taloon sijoitetun hallituksen on saatawa kaikki ne huoneet, jotka se tarwitsee.</p>
        <p>Klo 4 ip. käwi senaatin sisäasiain toimituskunnan päällikkö senaattori D. W. Louhiwuori ent. kenraalikuwernöörin talossa. Huolimatta pistimin warustettujen punakaartilaisten estelyistä 
          meni hän rakennuksen yläkertaan waatien saada puhutella punakaartin johtajia, joita ilmestyikin 2 miestä. Senaattorin tiedustellessa heidän nimiään wastasiwat he, etteiwät he ole 
          welwolliset niitä ilmaisemaan, he oliwat ainoastaan toimeenpanneet punakaartin päätöksen. Senaattori silloin pani jyrkän wastalauseensa sitä wastaan, että eduskunnan alaisille wirastoille 
          wallattu huoneusto on wäkiwalloin wallattu, sekä ilmoitti ryhtywänsä asianomaisiin toimenpiteisiin syyllisten saattamiseksi lailliseen rangaistukseen.</p>
        <p>Punakaartilaiset ilmoittiwat noudattawansa wain omia määräyksiään eikä wälittäwänsä porwarien laeista, joiden sijaan he muutaman päiwän päästä waatiwat toiset.</p>
        <p>Mainittakoon, että aikaisemmin päiwällä punakaartin lähetystö oli käynyt senaattori Swinhufwudin luona ilmoittamassa, että kaarti waatii haltuunsa ent. kenraalikuwernöörin talon. 
          Senaattori kieltäytyi kuitenkin noudattamasta punakaartin waatimusta ja antoi senaatti määräyksen miliisipäällikkö Rowiolle, että miliisin olisi otettawa mainittu talo waltaansa.</p>
        <p>Kysyttäessä hra Rowiolta mitä miliisi aikoo wastauksen estämiseksi tehdä, wastasi hra Rowio, ettei miliisi woi mitään 400—500 aseelliselle punakaartilaisjoukolle. Ainoa toimenpide, mihin 
          miliisi woi ryhtyä, on ilmoittaa tapahtumasta työwäenjärjestöjen eduskunnalle, joka heidät on tänne lähettänyt ja jolla mahdollisesti punakaartin nähden on enemmän waikutuswaltaa kuin 
          miliisillä.</p>
      </Article>
      <Article titleText="Myöskin kuwernööri Collanin ja von Nandelstadhin eroa waaditaan.">
        <p>Senaattiin on punaisen kaartin esikunta jättänyt kirjelmän, jossa waaditaan paitsi kuwernööri Jalanderin, myös Turun ja Porin läänin kuwernöörin K. J. M. Collanin ja Oulun läänin 
          kuwernöörin Matti won Nandelstadhin heti tapahtumaan erottamista. Ellei waatimukseen suostuta, uhkaa punakaarti ryhtyä tehokkaisiin toimenpiteisiin.</p>
      </Article>
      <Article titleText="Turkuun saapunut sotawäkeä.">
        <p>Maanantaina klo puoli 12 aikaan päiwällä saapui Turkuun ylimääräinen sotilasjuna, jossa tuli noin 275 miestä meritykkimiehiä. Sotilaat tuliwat suoraan Pietarista ja lienewät he alkuaan 
          lähtöisin Moskowasta. Heillä ei ollut kuormastoa eikä juuri muutakaan suurempaa matkatawaraa, joten he joutuiwat syömään turkulaisten niukkoja ruokawaroja.</p>
      </Article>
      <Article titleText="Punakaartin mellastukset.">
        <h5>Sosialihallitus pakotettu muuttamaan huoneustoa.</h5>
        <p>Sosialihallitus on toissailtana ja eilen aamulla alkanut muuttaa kalustoaan kenraalikuwernöörin talosta nähtäwästi punakaartin esiintymisen takia. Sosialihallituksen huoneusto tulee 
          toistaiseksi sijaitsemaan Uudenmaank. 5:ssä.</p>
      </Article>
      <Article titleText="Taistelu punakaartilaisten ja suojeluskunnan välillä.">
        <h5>30 punakaartilaista wankina.</h5>
        <h5>- Kaatuneita.</h5>
        <p>Eilen aamulla klo 8 lähti 100 miehen suuruinen asestettu punakaartilaisjoukko junassa Porwooseen. Nikkilän asemalla poistui se junasta lähtien retkeilylle eteenpäin. Tällöin ilmoitetaan 
          syntyneen taistelun suojeluskunnan ja punakaartin wälillä. Taistelussa kerrotaan 30 punakaartilaisen joutuneen wangiksi ja 3 saaneen surmansa. Eräiden tietojen mukaan olisi kaatuneita 8.</p>
      </Article>
      <Article titleText="Työwäenjärjestöt ja punakaarti.">
        <p>U. P. on punakaartin johtokunnan taholta tiedustellut työwäenjärjestöjen eduskunnan suhtautumista punakaartien toimintaan ja on lehdelle ilmoitettu että työwäenjärjestöjen eduskunta on 
          tiistaisessa kokouksessaan asettanut toimikunnan laatimaan menettelyehdotusta punakaarteihin nähden. Lopullisesti päätetään asiasta muutaman päiwän kuluttua. Työwäenjärjestöjen eduskunnan 
          enemmistön ilmoitettiin kokouksessa olleen punakaartien toimintaa wastaan.</p>
      </Article>

      <div className="interTitle">12.1.1918</div>
      <Article titleText="H:linnan työväenyhdistys ja venäläisen sotaväen poistuminen.">
        <h5>Painokanne „Hämetärtä” wastaan.</h5>
        <p>Wiime tiistaisessa numerossaan on „Hämetär” kertoessaan wenäläisen sotawäen poistumisesta kaupungistamme maininnut että täällä majailewat sotilaat kyllä olisiwat halukkaat lähtemään 
          kokonaan pois kaupungista, mutta että täkäl. työwäenyhdistys olisi pyytänyt heitä jäämään, koska heitä tarwitaan sosialisteja tukemaan porwareita wastaan.</p>
        <p>Ylläolewan syytöksen torjui Hämeen Woima kirjoittaen m. m. „Emme woi uskoa, että wenäläiset sotilaat olisiwat moista walhetta keksineet, eikä työwäenyhdistyksen taholta ole milloinkaan 
          sotilaille huomautettu, että heitä työwäestö täällä tarwitsisi. Näin ollen joutuu wäkisinkin siihen käsitykseen, että moinen törkeä walhe on „Hämettären” itsensä keksimä sosialistien 
          mustaamiseksi.</p>
        <p>Hämeenlinnan työwäenyhdistyksen johtokunta on nyttemmin ylläolewan „Hämettären” uutisen johdosta antanut haasteen lehden wastaawalle toimittajalle A. Tarjanteelle.</p>
        <p>Juttu on esillä täkäl. raastuwanoikeudessa t. k. 16 p.</p>
      </Article>
      <Article titleText="Helsingin punakaartin retket.">
        <h5>Sipoon kahakka.</h5>
        <p>Helsingistä aamusella lähteneitä punakaartilaisia oli 140. Miehet oliwat asestettuina kiwääreillä, sapeleilla ja pistooleilla. Junasta jäi punakaartilaisia sekä Tikkurilaan että 
          Korsoon, loput 57 lähtiwät Porwoon rataa Nikkilään asti.</p>
        <p>Täältä he lähtiwät marssimaan aseistettuina asemalta Sipoon kirkonkylää kohti. Sipoon wanhan kirkon luona tuli heitä wastaan paikkakunnan suojeluskunta, jolloin syttyi taistelu. 
          Paikkakuntalaisten kertoman mukaan olisi punakaartilaisia 2 warmasti kuollut ja 3 haawoittunut sekä 30 otettu wangiksi.</p>
        <p>Jouduttuaan taistelussa häwiölle, peräytyiwät punakaartilaiset jälleen asemalle, jonka waltasiwat. Kun Porwoon iltajuna klo 6,30 saapui Kerawalle, oli sitä wastassa noin 150 aseistettua 
          punakaartilaista, jotka kuoleman uhalla pakottiwat junamiehistön wiemään heidät junalla Rickbyhyn. Mitään kuitenkaan Rickbyssä toimittamatta palasiwat he jälleen syystä tai toisesta 
          Kerawalle, jossa astuiwat klo 10,35 illalla junaan Helsinkiin palatakseen. Kerawan asemalle oli jätetty aseistettuja wahteja. Mainitulla asemalla nähtiin punakaartilaisten mukana 3 
          haawoittunutta.</p>
      </Article>
      <Article titleText="Lisätietoja pitäjän miesten ja punakaartilaisten wälisestä taistelusta.">
        <p>Sen lisäksi mitä wiime lehdessä kahakasta kerroimme, on eräs paikkakuntalainen antanut seuraawia lisätietoja: Punakaartilaisjoukkue saapui asemalta kirkonkylässä sijaitsewan kauppias. 
          D. Uddin taloon alkaen anastaa talon ruokawaroja. Samalla toimeenpaniwat he tawanmukaisia ase-etsintöjä löytäen joukon browningin patruunia, jotka he anastiwat. Tämän johdosta alkoiwat 
          „kaartilaiset” hakea isäntää wangitakseen hänet, mutta löytämättä. Paikalle alkoi kerääntyä asestettuja pitäjäläisiä ja kun punakaartilaiset saiwat kuulla, että lisää yhä saapuisi, niin 
          alkoiwat punakaartilaiset poistua asemalle päin. Poistuessa syntyi kahakka, jolloin kaksi punakaartilaista sai surmansa ja muutamia haawoittui. Punakaartilaiset peräytyiwät asemalle päin, 
          wieden mukanaan kuolleensa ja haawoittuneensa. Kun „kaartilaiset” peräytyiwät, eiwät pitäjän miehet lähteneet seuraamaan heitä asemalle, jonne oli tulossa apujoukkoja waan pitiwät edelleen 
          wahtia kartanon lähettywillä. Taloa suojelewista miehistä ei kukaan edes haawoittunut. Nikkilän kartanossa oliwat punakaartilaiset toimeenpanneet ase-etsintöjään ja anastaneet 
          ruokatawaroita, ulottamatta retkeilyjään etäämmälle Nikkilän asemalta.</p>
        <p>Kahakassa haawoittuneista punakaartilaisista murskautui yhdeltä toinen käsiwarsi hywin pahoin ja muuan toinen sai niin ikään waikeanlaisen ampumahaawan käsiwarteensa. Näille antoi 
          paikkakunnan lääkäri ensiawun. Hän totesi myös kahden pahoja ampumahaawoja saaneen punakaartilaisen kuolleen. Haawoittuneista tuotiin ainakin muutamia pahimmin haawoittuneita 
          sotilassairaalaan. Myöskin ilmoitetaan jonkun punakaartilaisen haawoittuneen asemalla tapaturmaisesti.</p>
        <p>Waunu, johon punakaartilaiset oliwat sijoittaneet kuolleensa, seisoi koko torstaipäiwän rautatieasemalla. Waunun oween oli liidulla kirjoitettu: „Ruumeihin ei saa koskea ilman 
          punakaartin lupaa.”</p>
        <p>Punakaartilaisten lähdettyä Sipoosta on siellä ollut rauhallista.</p>
      </Article>
      <Article titleText="Eräs punakaartilaisten apujoukko.">
        <p>Kerrotaan että samaan aikaan kuin punakaartilaiset mellastiwat Nikkilässä, wieraili satamiehinen punakaartilaisjoukko Sipoon Immersbyssä. Saatuaan tiedon toisten epäonnistumisesta, 
          riensiwät he apuun anastaen taloista hewosia. Tällä tawoin lienee warastettu noin kymmenkunta hewosta. Kun joukko saapui perille Nikkilään, oli siellä jo rauha palannut. Kaikkiaan 
          kerrotaan Nikkilän asemalle kerääntyneen noin 3-400 punakaartilaista, jotka poistuiwat toissa iltana.</p>
      </Article>
      <Article titleText="Retken syistä">
        <p>ei wielä tähän mennessä ole saatu täyttä selwyyttä, mutta arweluna on paikkakuntalaisten taholta lausuttu, että retken olisi aiheuttanut paikkakunnan n. s. punakaartin epäonnistuminen 
          toiminnassaan. Noin wiikko sitten yrittiwät muutamat huligaanit ryöstää erään kauppapuodin, mutta joutui 3 ryöstäjistä pitäjän suojeluskuntalaisten wangiksi. Myöskin muualla pitäjän eri 
          kulmilla oliwat n. s. punakaartilaiset huomanneet ettei heillä ollut toiweita järjestetyn wastarinnan wuoksi jatkaa pitäjän alueella alkamiaan ryöwäysretkiä. Tämän wuoksi lienewät he 
          kääntyneet awunpyynnöllä Helsingin punakaartin puoleen.</p>
      </Article>
      <Article titleText="Hamina punakaartilaisten wallassa.">
        <h5>Poliisilaitos wallattu ja 18 henkilöä wangittu.</h5>
        <p>Keskiwiikkona illalla ryhtyi Haminan punakaarti parin sotamiehen awustamana wäkiwaltaisuuksiin kaupungissa. Ensin wangittiin kaupunginwaltuuston puheenjohtaja ja sen jälkeen pitkin yötä 
          muita waltuuston jäseniä sekä pormestari ja kaupunginwiskaali, yhteensä 18 henkilöä.</p>
        <p>Poliisilaitokselta karkoitti kaarti poliisit ja sulki wangitut kahteen pieneen koppiin.</p>
        <p>Eilen aamulla estettiin myöskin kaupungin elintarwelautakunnan toiminta waltaamalla sen huoneusto. Kun lautakunnan puheenjohtaja yritti tilata Wiipurista wiljaa, josta kaupungissa on 
          täydellinen puute, estiwät punakaartilaiset sen.</p>
        <p>Päiwällä pidettiin kansalaiskokous, jossa pantiin wastalause punakaartilaisten mellastuksen johdosta.</p>
        <p>Klo puoli 1 aikaan päiwällä oliwat wangitut wielä punakaartilaisten hallussa.</p>
        <p>Lähimpänä syynä mellastukseen owat hätäaputyöläisten kohtuuttomat waatimukset.</p>
      </Article>
      <Article titleText="Waltuusmiehet pääsewät wapaiksi.">
        <p>Torstaina klo 3 alkaneessa lyhyessä kansalaiskokouksessa päätettiin kerääntyä Raatihuoneen ympärille ja waatia waltuusto wapautettawaksi. Ennenkuin siihen kuitenkaan ehdittiin ryhtyä, 
          tuliwat waltuusmiehet jo Raatihuoneelta pois. — Paikalle kerääntyneet punakaartilaiset uhkasiwat kiwääreillään, mutta wäkijoukko ei wäistynyt. Vähitellen hajaantui joukko. — Tämän 
          jälkeenkin liikuskeli asestettuja punakaartilaisia kaduilla, mutta iltaan mennessä näytti elämä kaupungissa palautuwan rauhalliselle tolalle.</p>
      </Article>
      <Article titleText="Hajaannus sosialistien keskuudessa.">
        <h5>Turun metallityöläisosastot eronneet sos.dem. puolueesta. Sahatyöläisten liitto seuraa esimerkkiä.</h5>
        <p>Viime liittokokouksessaan antoiwat Suomen metallityöntekijät eri osastoilleen wapauden järjestää jäsentensä suhtautumisen sos.dem. puolueeseen oman harkintansa mukaan. Seurauksena tästä 
          päätöksestä on ollut, että Turun metallityöntekijäin ammattiosastot, joita on kaikkiaan yhdeksän ja joiden yhteinen jäsenmäärä nousee noin 3,000:een, owat päättäneet olla enää 
          osastoina kuulumatta sos. dem. puolueeseen. Jäsenten wapaasta tahdosta riippuu, suorittawatko he edelleen puolue-, kunnallis- ja piirijärjestöweroja.</p>
        <p>Sahatyöläisten liiton kerrotaan pian tulewan seuraamaan metallityöläisten esimerkkiä, kertoo „Sos”.</p>
      </Article>

      <div className="interTitle">15.1.1918</div>
      <Article titleText="Suojeluskunta liikkeellä Porvoossa.">
        <h5>Perinyt Porwoon punakaartilta takaisin sen yksityisiltä ryöstämät aseet.</h5>
        <p>Wiime lauantaina klo 11 saapui Porwooseen muutamia satoja Sipoon y. m. ympäristön suojeluskuntalaisia, jotka yhdessä paikkakunnan suojeluskunnan kanssa sijoittautuiwat kaupungin 
          Palokunnantalolle. Tänne he kutsuiwat Porwoon punakaartin johtajat Merikosken, Lehtisen ja Sundqwistin, joille ilmoitettiin, että punakaartin on luowutettawa takaisin aikaisemmin 
          suojeluskuntalaisilta waltaamansa aseet. Näillä terweisillä laskettiin mainitut henkilöt menemään. Kun ei aseita eikä miehiä alkanut klo 8:lta kuulua, joksi aseiden luowuttamisen tuli 
          tapahtua, marssi osa suojeluskuntalaisista työwäentalolle aseita hakemaan. Mainitusta paikasta löytyikin 3 laatikkoa, jotka sisälsiwät muutamia kiwäärejä ja jonkunwerran patruuneja. Nämä 
          takawarikoitiin todistusta wastaan ja suoritettuaan tehtäwänsä, johon suojeluskunnalla oli kaupungin pormestarin antama waltuus, hajaantui suojeluskunta kohotettuaan waltawan eläköönhuudon 
          palokunnantalon lipputankoon wedetylle Suomen lipulle. Kaupungissa wallitsee reipas ja ihastunut mieliala suojeluskunnan menettelyn johdosta, jonka kaikki kunnon porwoolaiset hywäksywät.</p>
      </Article>
      <Article titleText="Punakaartien mellastukset.">
        <h5>Retket Sipooseen.</h5>
        <p>Wiime numerossa kerrottiin puoleen tuhanteen mieheen nousewan punakaartilaisarmeijan kerääntyneen rankaisuretkelle Sipooseen. Asiasta oli ilmoitettu sekä senaattiin että lääninhallitukseen 
          ja Sipoossa oli ryhdytty warokeinoihin punakaartilaisten hyökkäyksen waralta. Joukkoja ei kuitenkaan ole Sipooseen kuulunut eikä siitä muuallakaan lähitienoilla ollut tietoa. Näin ollen on 
          hälytys ollut wäärä tai joukko on kiireesti hajaantunut huomatessaan yrityksensä turhaksi.</p>
        <p>Sipoon retkellä kuolleet punakaartilaiset owat olleet H. F. Nylund, joka oli syntynyt 1884 ja kuulunut kuljetustyöntekijäin liittoon sekä 17-wuotias kirjansitoja Wilho Riipinen. - 
          Selostaen matkaansa „Työmiehessä” kaarti ilmoittaa sipoolaisia kaataneensa 6 ja haawoittaneensa 21. Tiedot owat kuitenkin täysin perättömät, sillä sipoolaisia ei ole edes ketään 
          haawoittunut.</p>
      </Article>
      <Article titleText="Punakaartin teot uhkaawat sosialistipuoluetta hajaannuksella.">
        <h5>Vastalauseita omasta leiristä.</h5>
        <p>„Työwäen Järjestyskaartien Esikunta” on „Työmiehessä” julkaissut kirjoituksen, jossa selostetaan täkäläisten punakaartilaisten toimintaa mainittujen järjestyskaartien hajoittajana ja 
          lausutaan, että Helsingin kaartin esikunnan toiminta on katsottawa Työwäen järjestyskaartien woimia hajottawiksi ja on sellaisena jyrkästi tuomittawa.</p>
        <p><span className="accent">Sosialistissa</span> kirjoitetaan punakaartilaisten hajoittawasta toiminnasta, että <span className="quote">tällaisena on puolueemme asema arweluttawan wakawa. 
          Jo aikaisemmin olisi sen johdon tullut ryhtyä päättäwiin toimenpiteisiin oireiden johdosta, mitkä eiwät ennustaneet yhtenäisyydellemme hywää. Nyt on ainakin puolueneuwosto kutsuttawa 
          koolle asemaa selwittämään, jollei Helsingin punakaartin taholta alulle pantua hajotustyötä muutoin saada estettyä. Pahimmassa tapauksessa on turwauduttawa puoluekokoukseenkin.</span></p>
        <p><span className="accent">Sisä-Suomen Työmies</span> kirjoittaa:</p>
        <p className="quote">Nyt olisi johtajilla ja etenkin puoluejohdolla wielä wiimeinen tilaisuus, jos ei kyllä enää anarkististen tekojen järjettömän kehityksen ehkäisemiseen, niin kuitenkin sen 
          paheksumiseen. Mutta koska puolueemme keskuudessa warmasti löytyy wielä järkewiäkin aineksia, ainakin wanhemman wäestön keskuudessa, tuntuu siltä, että todella odotetaan hiljaisuudessa 
          puoluehajaannusta.<br />Ja nyt, aiwan kohta, ennustamme, se onkin odotettavissa, ellei puoluejohto todella kuule wiimeistä warotusta: alas järjettömyys! Puoluejohdosta riippuu, tahdotaanko 
          Suomen sosialidemokraattinen puolue wielä koota siksi, mitä se on joskus ollut, wai tehdäänkö lähipäivinä alotteita, todellisen sosiaalidemokratian erottamisesta huliganismin helmasta!<br />
          Kärsiwällisyys Suoman kansalta alkaa loppua!</p>
        <p><span className="accent">Sawon Työmiehen</span> torstaisessa artikkelissa „Eikö jo ole aika?" kirjoittaa nimim. R. T. seuraawaa:</p>
        <p className="quote">Jo pitemmän aikaa owat eri seuduilla työwäen järjestyskaartit alkaneet esiintyä tawalla, joka osottaa ettei ainakaan kaikilla näillä järjestöillä itse asiassa ole 
          sos.-dem. puolueen hywäksymien menettelytapojen kanssa mitään yhteyttä.<br />Meillä on asiantila kehittynyt sellaiseksi, että maassa nykyään tosiasiallisesti on kolme waltiollista 
          puoluetta, porwarit, sosialistit ja eräät punakaartilaisainekset. Todettakoon tosiasiain tila: Erinäisten kaartien ja puolueemme menettelytawat owat poikenneet niin kauaksi toisistaan ja, 
          mikä on tärkeintä, erinäiset kaartit owat siinä määrin alkaneet elää omaa riippumatonta elämäänsä, etteiwät ne enää sowi samaan puolueeseen. Niitten wälinen muodollinen side on katkaistawa. 
          Siihen on jo aika ja siihen on syytä.</p>
      </Article>
      <Article titleText="Punakaartin rosvoukset.">
        <h5>Anastaneet Turun merikoulun.</h5>
        <p>Sunnuntaina klo 2 päiwällä waltasi n. 100 pistimin ja kiwäärein warustettua punakaartilaista Turussa Wartiowuoren mäellä sijaitsewan merikoulun sijoittuen sinne 3:een suureen 
          luentohuoneeseen. Koulun johtajan wastalauseista eiwät punakaartilaiset wälittäneet wähääkään. Tapauksesta ilmoitettiin m. m. miliisilaitokselle, jonka edustaja saapui paikalle, 
          ilmoittaen ettei asiassa woitu mitään tehdä.</p>
        <h5>Roswonneet waltion ostamaa siemenwiljaa.</h5>
        <p>Toissa yönä ottiwat Turun punakaartilaiset asemalla haltuunsa weturin ja 8 tawarawaunua. Wallatulla junalla he meniwät Mellilään, jossa he aseman lähellä sijaitsewasta Keskus-osuusliike 
          Hankkijan makasiinista ryöstiwät junansa täyteen Hankkijan waltion laskuun ostamia herneitä, ohria, kauroja y. m. Eilen aamulla he palasiwat Turkuun, jonka aseman ratapihalla 10 miestä 
          wartioi roswottuja tawaroita.</p>
      </Article>

      <div className="interTitle">17.1.1918</div>
      <Article titleText="Punakaartilaisten aseryöstöt Lammilla.">
        <h5>Punakaartilaiset jälleen aseita etsi.</h5>
        <p>Tämän kuun 8 p:nä tuli Lammin Koiwukehän Seppälän taloon paikkakunnalla hywin tunnettu aseitten etsijä ja punakaartien perustaja Einari Höbak erään toisen hulikaanin kanssa, jolla oli 
          browningi kädessä, aseita etsimään. Miesten tietojen mukaan olisi muka Janakkalan puolelta Löyttyniemestä tuotu lähitaloihin kiwääreitä m. m. Seppäläänkin. Roswojen päätarkoituksena oli 
          tietenkin wain isännän browningin ryöstäminen. Talonisäntä liiallisessa hywyydessään ilman mitään antoikin miehille browninginsa heistä päästäkseen. Tämän jälkeen roswot poistuiwat 
          mielihywällä, sillä olihan taas tienattu helposti 600-700 mk., jatkaen matkaansa Mommilaa kohti.</p>
        <p>Paikkakunnan huligaanit owatkin nyt ottaneet pääammatikseen browninkien ryöstön. Ryöstämänsä aseet he sitten myywät ja jonkun ajan kuluttua toinen joukko ne jälleen ryöwää ostajalta. 
          Niinpä wiime k:sten H. l. markkinoillakin kaupitteli moni huligaani paikkakuntalaisille browningeja useimmiten kyllä onnistumatta. Toiwottawaa olisi, että moisista ryöwäreistä jo pian päästäisiin.</p>
      </Article>

      <div className="interTitle">19.1.1918</div>
      <Article titleText="Lahden punakaarti wallannut Hennalan kasarmin.">
        <h5>Kansanedustaja Eloranta pitää terwetuliaispuheen.</h5>
        <p>Lahden punakaarti on wallannut Hennalan kasarmin. Wenäläiset jättiwät kasarmin wiime syksynä ja huoneet oliwat silloin niin kurjassa kunnossa, ettei niihin enää woitu sotilaita sijoittaa. 
          Kasarmi on siitä pitäen ollut korjauksen alaisena. Luultawasti punakaarti on sijoittunut upseerien huoneisiin. Wiime sunnuntaina wietettiin kasarmilla tupaantulijaisjuhlaa. Kasarmille 
          marssittiin juhlakulkueessa, etunenässä naisjoukko, heidän jälkeensä 140 kiwäärein ja pistimin warustettua punakaartilaista ja lopuksi muuta aseetonta joukkoa.</p>
        <p>Tupaantulijaisjuhlassa esiintyi juhlapuhujana kansanedustaja, ampuma-aseitten erikoistuntija Ewert Eloranta. Juhlanäytelmänä esitettiin „Saimaan rannalla” (...Hei hauskasti kaartis' 
          eletään).</p>
      </Article>

      <div className="interTitle">22.1.1918</div>
      <Article titleText="Raaka ryöstömurha lähellä Hämeenlinnaa.">
        <h5>Sotilasroswot, joista yksi suomalainen, murhanneet Sammon torpan isännän ja ryöstäneet torpan rahat n. 6,000 mk.</h5>
        <p>Wiime lauantaita wasten yöllä klo 12 aikaan tapahtui kamala werityö ja sen yhteydessä rahojen ryöstö lähellä Hämeenlinnaa sijaitsewassa Sammon torpassa. Werityön uhriksi joutui torpan 30 
          wuotias nuori isäntä Wihtori Niemi ja weiwät roistot saaliinaan torpasta noin 6,000 mk. rahaa.</p>
        <p>Tapahtumasta on meille kerrottu seuraawaa:</p>
        <p>Noin klo 12 aikaan yöllä heräsi torpan wäki koiran haukuntaan ja ankaraan koputukseen, jonka johdosta sisällä sytytettiin walot. Tarkoituksena ei kuitenkaan ollut awata owea, mutta kun 
          koputus käwi yhä hurjemmaksi meni torpan wanhin poika Aukusti awaamaan.</p>
        <p>Sisään tunkeutui tällöin kolme sotilaspukuista miestä, yhden kysyessä suomeksi: „Missä on emäntä”? Hänet nähtyään miehet pyysiwät maitoa, johon emäntä wastasi, ettei ollut muuta kuin 
          kuorittua. Nuorin poika Wihtori käski kuitenkin antamaan sitäkin, jos se miehille kelpaa, ja emäntä lupasikin tuoda. Roswot käweliwät hywin lewottomina edestakaisin lattialla, kunnes 
          Wihtori kysyi, millä asialla pojat oikein liikuskelewat. Tällöin suomea puhuwa heti kiukustuneena karjasi: „kädet ylös”. Toiset kaksi wetiwät heti rewolwerinsa esille, ojentaen ne wäkeä 
          kohti. Roswot asettuiwat nyt paikoilleen, yksi owelle, toinen muurin edustalle ja kolmas, suomea puhuwa, nähtäwästi joukon johtaja, keskelle lattiata, kohdistaen rewolwerit torpan wäkeen, 
          jota oli huoneessa, torpan wanha isäntä, molemmat pojat Wihtori ja Aukusti, nuori emäntä Wihtorin waimo ja tämän sisar. Sen jälkeen roswot alkoiwat tiukata rahoja uhaten tappaa jokaisen, 
          ellei rahoja anneta. Kun Wihtori, jota roswot pahimmin ahdistiwat yhä kielsi rahoja olewan, julmistui johtaja ja huusi: „ole tässä sitten, laskekaa läpi”, jonka owensuulla seisowa 
          ymmärsikin, koska heti noudatti käskyä, ampuen Wihtoria kohti, kuitenkaan osaamatta. Tämän nähtyään pamahti jälleen laukaus roswon rewolwerista ja Wihtori kaatui ääntä päästämättä 
          lattialle. Muutamia korahduksia kuului ja henki oli lähtenyt.</p>
        <p>Sen enempää kuolleesta wälittämättä alkoi johtaja nyt käydä Aukustin kimppuun waatien julmasti uhkaillen rahoja ja ryhtyi lopuksi asettelemaan torpan wäkeä riwiin, tarkoituksella ampua 
          järjestyksessä jokainen. Emäntä, joka kauhistuneena nuorin lapsi sylissään oli kyyristynyt pöydän alle, osoitti nyt seinällä olewaa kaappia, sanoen rahojen olewan siellä. Tämän kuultuaan 
          johtaja weti kaapin lattialle murskaten owen jaloillaan. Lompakon löydettyään ja tarkastettuwan sisällön hän huusi: „olipa rahoja, sinä p - le, mitä warten walehtelit” lyöden samalla 
          torpan isäntää kaksi kertaa korwalle ja temmaten nurkasta halontapaisen, jolla alkoi häntä hakata. Kalikka katkesi kuitenkin, lentäen sänkyyn ja osuen yhteen lapsista, jotka kaikki 
          alkoiwat itkeä. Kaapista löytämänsä laatikon, jossa oli hopearahoja antoi johtaja muurin luona seisowille roswoille, pannen lompakon omaan taskuunsa.</p>
        <p>Poislähtiessään uhkailiwat roswot wielä julmasti, sanoen, että heitä oli ulkona wielä wahdissa kolme miestä, sekä kielsiwät ankarasti ketään jos henkensä tahtoi säilyttää tulemasta ulos 
          ennenkuin puoli tuntia oli kulunut. Owella ottiwat roswot seinällä olewasta häkistä kaksi kirwestä ja ilmoittiwat tulewansa takaisin tasan puolen tunnin kuluttua. Jos joku tällöin olisi 
          paikastaan liikkunut, niin hänet heti tapettaisiin.</p>
        <p>Uhkauksista huolimatta torpan wanha isäntä kuitenkin ennen määräaikaa waljasti hewosen ja ajoi kiertotietä Hämeenlinnaan ilmoittamaan tapahtumasta.</p>
        <p>Tapahtuman aikana talon wanha isäntä osoitti oikeaa wanhan kansan miehuutta. Roswojen iskuista ja uhkauksista wälittämättä uhmasi wanhus heitä sanoen: „Koska tapoitte parhaan poikani, 
          niin tappakaa minutkin, hengelläni ei ole wäliä, mutta wastarintaa teen niin kauan kuin elän”. Samaten nyyhki hän nuorinta poikaansa kehoittaen: „Ota halko, Aukusti, ota halko!”</p>
        <p>Tämän kamalan werityön uhriksi joutunut Wihtori Niemi oli paikkakunnallaan tunnettu kaikin puolin reima mieheksi. Naimisissa hän oli ollut kuusi wuotta kooten tällä ajalla rahdinajolla 
          y. m. tilapäisillä töillä säästörahoja ne 6,000 mk., jotka nyt joutuiwat roswojen saaliiksi.</p>
        <p>Leski ja neljä alaikäistä lasta, joista wanhin on kuusiwuotias, jäiwät siten aiwan puille paljaille. Heidän awustamisekseen on liikkeellä lista, johon awustajat woiwat merkitä 
          awustuksensa.</p>
        <p>Roswoista oli yksi torpanwäen tunteman mukaan warmasti suomalainen. Hän oli waaleanwerinen, ääni kolea, puhui selwää suomea ja oli puettu, kuten he huomasiwat hänen pannessaan lompakon 
          taskuunsa, tummansiniseen pukuun, saappaat jalassa ja n. s. porilainen päässä, mutta oli hän samaten kuin toisetkin roswot wetänyt „paslikan” päänsä yli, joten ei kenenkään kaswoja 
          woitu selwästi nähdä. Toiset kaksi roswoa oliwat nähtäwästi wenäläisiä ymmärtäen kuitenkin jonkunwerran suomea, puetut sinelleihin, toisella saappaat, toisella kengät jalassa. Samaten oli 
          toisella heistä housunlahkeet pantu kiinni neulalla. Kaikki kolme murhamiestä oliwat n. 20 wuotiaita, keskikokoisia, johtaja tanakampi, toiset heikompia.</p>
        <p>Hämeenlinnan poliisilaitokselle toi werityöstä sanan torpan wanha isäntä noin klo ½ 3 aikaan yöllä, jolloin etsiwästä osastosta heti lähetettiin kaksi miestä koiran kera ja 
          järjestyspuolelta yksi mies tapahtumapaikalle. Heidän onnistui seurata roswojen jälkiä aina Luolajan kylässä olewan Woutilan talon kohdalle, mutta häipyiwät he sitten jäliltä. Ankara 
          lumipyry esti kokonaan enemmät tutkimukset, jälkiä ei näkynyt wähintäkään eikä koirankaan wainu riittänyt. Koska kuitenkin otaksuttiin roswojen kuuluwan Luolajassa oleilewaan 
          sotilasjoukkueeseen, niin lähti sinne laitokselta päiwällä neljä miestä w. t. poliisimestarin johtamana sekä patrullin seuraamana. Tutkimuksessa ei kuitenkaan ilmaantunut mitään 
          raskauttawaa, waikkakin torpan tytär epäili erästä sotilaista roswojoukkueeseen kuuluwaksi. Toiset sotilaat todistiwat kuitenkin hänen olleen murhayönä kotosalla.</p>
        <p>Tutkimuksia jatkaa täkäläinen etsiwä osasto eri tahoilla mutta toistaiseksi owat tulokset olleet niukat. Wainajan ruumis tuotiin eilen Hämeenlinnan leikkuuhuoneelle.</p>
      </Article>
      <Article titleText="Urjalan punakaarti mellastamassa.">
        <h5>Wenäläisin kiwäärein warustetut joukot retkeilyllä. <br />- Murtautumisia.<br />- Wangitsemisia.</h5>
        <p>Wiime sunnuntaina oli Urjalan sosialisteilla kirkonkylässä kokous, jossa oli tawallista erikoisempia neuwotteluja. Todisteena tästä on m. m. Toijalasta maanteitse tuotu aselähetys, jossa 
          oli n. 25 wenäläisiltä lainattua kiwääriä ja jotka sijoitettiin Huhdin työwäentalolle.</p>
        <p>Eilen aamulla warhain alkoikin punakaartilaisia tawallista runsaammin kerääntyä kirkonkylään, jonne myöskin Huhdista tuotiin mainitut kiwäärit. Kaikkiaan oli punakaartilaisten lukumäärä 
          n. 100. Apuwäkeä saapui myöskin Toijalasta sekä maanteitse että junalla. Kirkonkylään aseet jaettiin ja miehet jakaantuiwat eri joukkueisiin suunnaten matkansa Nuutajärwen ja Honkolan 
          kartanoihin, Huhdin kylään y. m.</p>
        <p>Honkolan kartanoon saapui joukko n. 11 tienoissa. Kun päärakennuksen owet oliwat suljetut eiwätkä awautuneet kiwäärinperillä jyskytettäessä ja ampua räiskiessä mursiwatkin huligaanit ne 
          ja tunkeutuiwat sisälle, missä toimeenpaniwat tawanomaisen santarmeilta opitun kotietsintänsä. Saaliikseen he saiwat wanhanaikaisen sapelin ja pari wanhanaikaista kiwääriä. Myöskin 
          kartanon muihin rakennuksiin metelöitsijät tunkeutuiwat, tuloksista emme onnistuneet saamaan tietoja.</p>
        <p>Kartanonomistaja asess. G. Furuhjelm istuu parhaillaan käräjiä eikä ollut tapahtumien aikana paikalla.</p>
        <p>Nuutajärwelle mennessä huligaanisakki katkaisi mennessään kartanoon johtawat puhelinjohdot, joten emme onnistuneet sieltä saamaan tietoja. Mikäli kerrotaan owat „kaartilaiset” täälläkin 
          murtaneet owet. Kerrotaan, että he owat wanginneet isännöitsijän G. W. Larssonin.</p>
        <p>Huhtiin mennyt joukkue asettui sikäläiselle työwäentalolle ryhtymättä enempään.</p>
        <p>Tapahtuman johdosta kääntyiwät eräät Urjalan kansalaiset sikäl. t. y:n johtokunnan puoleen tiedustellen mellastusten tarkotusta. Tapahtumista ei johtokunta kuitenkaan näyttänyt paljon 
          tietäwän. Se ilmoitti myöskin paheksuwansa epäjärjestyksiä. Eilen päiwällä matkustiwat paikalle läänin maaherra ja kansanedustaja H. Wälisalmi.</p>
      </Article>
      <Article titleText="Punakaartilaiset liikkeellä Wiipurissa.">
        <p>Warhain lauantai-iltana kokoontui Aleksanterinkadun 5:ssä Wiipurissa sijaitsewan Matti Pietisen ja Oy. Carbonatorin yhteisen tehdasrakennuksen seuduille punakaartilaispatrulleja, arwiolta 
          noin 15 miestä. Patrullit pitiwät silmällä kadulla liikkujia. Klo 11 tienoissa alkoi paikalle saapua lisää punakaartilaisjoukkoja. Joukot piirittiwät taajassa ketjussa tehdasrakennukset 
          alkaen sitä wastaan ammunnan.</p>
        <p>Klo 12 murtautuiwat punakaartilaiset Pietisen tehdasrakennukseen ja Carbonatorin tehtaaseen. Tehdasrakennusten konttoreihin oli sijoitettu wartioita, jotka ottiwat hyökkääwät 
          punakaartilaiset wastaan yhteislaukauksella. Syntyi kiiwas ammunta, jolloin tehdasta wartioiwa konttoristi A. R. Illukka sai kuulan watsaansa heittäen n. tunnin kuluttua henkensä. 
          Carbonatorin tehtaan isännöitsijä Toiwo Pietinen haawottui liewästi. Hyökkääjät lyötiin takaisin. Saatuaan kahakasta tiedon kerääntyi Aleksanterin ja Torkkelin katujen risteyksiin 
          kaupunkilaisia, joita oli pyydetty apuun. Paikalle saapui myöskin joukko sotilaita, jotka ryhtyiwät ampumaan. Tuleen wastattiin toiselta puolen, jolloin kahden sotamiehen ilmoitetaan 
          saaneen surmansa. Kun tehtaan wartioilta täten ehkäistiin awunsaanti, murtautuiwat he läpi tehdasta ympäröiwän piiritysketjun, ja onnistui tämä muille paitsi isännöitsijä Pietiselle, joka 
          haawottuneena jäi piirittäjien wangiksi. Lisäksi joutui wangiksi tehtaan toinen johtaja ja Carbonatorin tehtaan teknikko Wiljo Pietinen, mutta päästettiin heidät tänään maaherran 
          waatimuksesta wapaiksi.</p>
        <p>Wiimeksi saatujen tietojen mukaan on Wiipurin kahakassa saanut 4 punakaartilaista, 1 suojeluskuntalainen ja 2 sotamiestä surmansa. Haawottuneita punakaartilaisia lienee useampia. Klo 3 
          aikaan sunnuntaina paniwat punakaartilaiset toimeen kotitarkastuksia, m. m. Wiipurin Sanomain toimituksessa ja konekauppias Kempin tallissa, mitään löytämättä.</p>
      </Article>
      <Article titleText="Lappeenrannan punakaartilaiset Taawetissa.">
        <p>Eilen päiwällä ilmoitettiin Wiipurista, että edellisenä yönä oli Lappeenrannasta lähtenyt ylimääräisellä junalla Taawetin asemalle punakaartilaisia. Matkan tarkoituksena ilmoitettiin 
          olewan Taawetin suojeluskunnan kurittaminen ja aseiden etsiminen paikkakunnalta. Saatuaan tiedon punakaartilaisten tulosta oliwat paikkakuntalaiset ryhtyneet warokeinoihin ja junan 
          saapuessa syntyi taistelu, jota jatkui wielä aamuhämärässä. Kerrotaan suojeluskuntalaisten olleen woitolla ja ottaneen punakaartilaisia wangiksi. Lähempiä tietoja ei ole saatu. 
          Punakaartilaisia oli kaikkiaan n. 250 miestä.</p>
        <p>Rautatiehallitukseen saapuneen tiedon mukaan oliwat punakaartilaiset peläten suojeluskuntalaisten saawan apua rikkoneet rataa Taawetin ja Puumäen asemien wälillä. Samaten oliwat he 
          ampuneet erästä ohikulkewaa junaa. Eilen päiwällä ilmoitettiin radan jälleen saadun korjatuksi.</p>
      </Article>
      <Article titleText="Punakaartilaiset weritöissä.">
        <p>Nurmijärwellä olewaan Yli-Korwen taloon lähellä Köykän asemaa saapui wiime lauantaina joukko työläisiä, jotka waatiwat saada panna toimeen laittoman kotitarkastuksen etsiäkseen 
          elintarpeita. Talon isäntä Saxelin kieltäytyi jyrkästi ja näytti kuitin siitä, että hänen talossaan laillinen elintarwetarkastus oli toimeenpantu. Tarkastajat poistuiwat uhaten 
          wäkiwaltaisuuksilla. Illalla saapuikin Perttulan kylästä n. 40-60 asestettua miestä. Isäntä Saxelin houkuteltiin ulos pihalle, missä hänet surmattiin kuudella kiwäärinlaukauksella.</p>
        <p>Työnsä tehtyään miehet poistuiwat.</p>
      </Article>

      <div className="interTitle">24.1.1918</div>
      <Article titleText="Urjalan punakaarti.">
        <p>Kuten jo wiime lehdessä mainitsimme, pidättiwät Urjalan punakaartilaiset Nuutajärwen kartanon isännöitsijän E. L. Larssonin. Punakaartilaiset tapasiwat L:n jossain kartanon lähistöllä. 
          Herra L. tuotiin Huhdin työwäen talolle, joka näytti olleen jonkinlaisena päämajana. Maaherran ja edustaja Wälisalmen paikalle tultua hänet kuitenkin wapautettiin. Isännöitsijä Larsson on 
          Ruotsin alamainen.</p>
        <p>Nuutajärweltä ryöstiwät punakaartilaiset kaksi wanhaa rewolweria.</p>
        <p>Punakaartin johtajana näkyi olleen joku muulta paikkakunnalta kotoisin olewa Soini-niminen mies joka lienee ottanut osaa myöskin Turun ja Helsingin ympäristön punakaartilaismellastuksiin. 
          Urjalan punakaartilaiset oliwat enimmäkseen nuortawäkeä, wanhemman järjestyneen työwäen yleensä pysytellessä syrjässä.</p>
        <p>Aiheen lienewät punakaartilaiset mellastuksiinsa saaneet tuntemattomista lähteistä lewitetyistä huhuista, että paikakunnalle olisi saapunut aselasteja. Luonnollisestikin nämä huhut oliwat 
          aiwan perusteettomia, eikä paikakunnalla ole liikkunut muita asekuormia, kuin punakaartilaisten Toijalan ryssiltä lainatut kiwäärit.</p>
        <p>Maaherran ja edustaja Wälisalmen toimesta näytti rauhallisuus maanantaina palautuwan.</p>
        <p>Tiistaina kului aamupuoli päiwää yleensä rauhallisesti. Punakaartilaisjoukkueita kuljeskeli kuitenkin eri taloissa etsien aseita. Aseita ei kuitenkaan löytynyt kuin jokunen haulikko. 
          Ilalla saapui Toijalasta 30-miehinen punakaartilaisjoukkue. Punakaartilaiset pidättiwät illalla 5 henkilöä, joilta eiwät löytäneet edellyttämiään aseita.</p>
        <p>Eilen jatkoiwat punakaartilaisretkueet entistä innokkaammin aseiden etsintää. Päiwällä pidättiwät he maanwilj. Nissin, jotka he oliwat ryöstäneet 3 haulikkoa. He etsiwät myöskin eräitä 
          henkilöitä, joita eiwät kuitenkaan tawanneet. Etsimis-innossaan he piirittiwät m. m. parhaillaan toimiwan werotuslautakunnan, joka kuitenkin jonkun ajan kuluttua wapautettiin. Mikäli 
          kerrottiin aiottiin wangitut eilen illalla wapauttaa.</p>
        <p>Eilen saapui paikkakunnalle Toijalasta myöskin 4 sotilasta. Heidän tehtäwästään emme onnistuneet saamaan tietoa.</p>
      </Article>
      <Article titleText="Asema Wiipurissa uhkaawa.">
        <p>Tiistaina illalla klo puoli 11 aikaan waihdettiin Wiipurissa jälleen hajanaisia laukauksia punakaartilaisten ja suojeluskuntalaisten wälillä pääasiassa aseman lähellä sekä raatihuoneen 
          torilla. Mitään wakawampaa ei kuitenkaan tapahtunut.</p>
        <p>Rautatieasema on suojeluskuntalaisten hallussa, joten liikenne rautatiellä on woinut jatkua.</p>
        <p>Kaupungin pääkaduista owat useimmat, kuten Torkkelin ja Aleksanterin kadut, punakaartilaisten ja sotilaitten hallussa. Mellastuksiin ei kaupungissa olewista sotilaista kaikki ota osaa. 
          Useita henkilöitä on mellastuksen aikana haawoittunut, m. m. eräitä teatterista kotiinsa palaawia.</p>
        <p>Mitään suurempia yhteentörmäyksiä ei ole sattunut, mutta ahkerasti owat sotilaat ja punakaartilaiset pidätelleet ja tarkastaneet kaduilla kulkijoita. Pääpaikkoina punakaartilaisilla ja 
          sotilailla owat ryssän kasarmit. Upseereita ei mellastawien sotilaitten joukossa liene ensinkään.</p>
        <p>Kaupunki oli illalla täynnä wäkeä sen johdosta, että sinne on saapunut läheisiltä paikkakunnilta sekä punakaartilaisia että suojeluskuntalaisia.</p>
        <p>Klo puoli 2 yöllä ilmoitettiin, että tilanne ennallaan.</p>
        <p>Edelleen ilmoitettiin, että Helsingistä on lähetetty 2 punakaartilaisjunaa wiemään apujoukkoja Wiipuriin. Myös Suomen aluekomitean edustajat owat lähteneet ylimääräisellä junalla 
          Wiipuriin, mikäli ilmoitettiin, estämään wenäläisen sotawäen sekaantumista tapahtumiin.</p>
        <p>Eilisissä Wiipurin lehdissä julaistaan seuraawa yhteinen selonteko tiistaipäwältä:</p>
        <p className="quote">Tiistainen päiwä kului Wiipurissa rauhallisesti. Illalla saapui kaupunkiin suuri joukko asestettuja maalaisia ylläpitämään järjestystä. Punakaartilaisia ei sanottawasti 
          näkynyt liikkeellä ja näytti heidän majailupaikkansa olewan wenäläinen sotilaskasarmi wastapäätä ruotsalais-saksalaista kirkkoa. Linnoituksesta ammuttiin pariin otteeseen iltayöstä 
          muutamia tykinlaukauksia, jotka eiwät kuitenkaan liene olleet mihinkään tarkoitettuja.</p>
      </Article>
      <Article titleText="Taawetin kahakat.">
        <p>Taawetin suojeluskunta oli pidättänyt Lappeenrantaan sikäläisille punakaartilaisille matkalla olleen asewaunun, jossa oli 70 kiwääriä ja 10,000 patruunaa. Punakaartilaiset lähtiwät 
          hakemaan aseitansa pois, ja saapui heitä sekä Lappeenrannasta että Wiipurista. Taawetin tienoilla syntyi silloin yhteentörmäyksiä näiden punakaartilaisten ja paikkakunnan 
          suojeluskuntalaisten kesken jo sunnuntaita wastaan yöllä.</p>
        <p>Aluksi suojeluskuntalaisia oli ainoastaan 20 miestä, punaakaartilaisia sensijaan 200, mutta kuitenkin suojeluskuntalaiset kykeniwät pitämään hywin puoliaan. Sunnuntaina 
          suojeluskuntalaiset saiwat apuwäkeä Kyminlaaksosta ja punakaartilaiset Viipurista, Kaukaan tehtaalta ja Lauritsalasta. Pitkällisen taistelun jälkeen oliwat punakaartilaiset lopulta 
          pakotetut poistumaan taistelutantereelta saamatta hakemiansa aseita. Kaatuneita oli yksi kummaltakin puolelta, haawoittuneita 2 suojeluskuntalaista ja 3 punakaartilaista. Vankeja ottiwat 
          suojeluskuntalaiset 5, punakaartilaiset 14, kaikki paikkakunnan talonpoikia, jotka eiwät olleet ollenkaan mukana koko kahakassa.</p>
        <p>Neuwotteluja kuuluu käydyn wankien waihtamisesta, mutta siitä ei ole wielä tullut mitään, kun punakaartilaiset owat lisäksi waatineet, että heille on luowutettawa ne aseetkin, joita he 
          oliwat tulleet takaisin tawoittamaankin. Tähän ehtoon ei taas suojeluskuntalaisten taholta ole katsottu woitawan suostua, joten wangit edelleen owat kummallakin puolella hallussaan.</p>
        <p>Nyttemmin on paikkakunnalla täysin rauhallista. Rataa rikottiin kummaltakin puolelta. Niinpä Lappeenrannasta ei päässyt lisäwoimia punakaartilaisille, kun rata on rikki.</p>
        <p>Tämän asian yhteydessä kerrottiin, että Kotkasta matkalla ollut suojeluskuntaosasto ei päässyt myöskään perille, koska Kouwolan tienoilla olisi myöskin rikottu rataa heidän matkansa 
          estämiseksi.</p>
      </Article>
      <Article titleText="Soltut ja punakaartilaiset yhteistyössä Tampereen asemalla.">
        <h5>„Tarkastuksia” ja roswoamisia.</h5>
        <p>Maanantai-iltana klo 8,15, kun liikennetarkastaja Öller yhdessä ratainsinöörien Sandbergin ja Tornbergin kanssa saapui ylimääräisellä junalla tarkastusmatkaltaan Hämeenlinnasta Tampereen 
          asemalle ja oliwat juuri ehtineet poistua waunusta, saapui paikalle suuri, hampaisiin saakka asestettu sotilaspatrulli, joka piiritti waunun ja ilmoitti, ettei sitä saa wiedä pois 
          paikaltaan. Kun waunu oli ensimäisellä raiteella, jonne juuri oli tulossa Helsingistä saapuwa postijuna, ilmoitettiin asemawirkailijain taholta, että waunu ei woi jäädä paikalleen, waan 
          se on wietäwä pois toisen junan tieltä, sekä kehotettiin sotilaita asettamaan waunuun tarpeeksi wartijoita. Sen kummallekin sijalle sijoittuikin sitten useampia solttuja, jonka jälkeen 
          waunu siirrettiin ratapihan ulkosyrjään, jossa soltut wielä ainakin iltamyöhällä wartioiwat saalistaan.</p>
        <p>Sotilaat ilmoittiwat saaneensa käskyn waunun tarkastamiseen sotilaskomennuskunnalta Lempäälässä. Mitä he waunusta etsiwät, siitä ei ole tietoa. Ainakaan tuntikauteen eiwät he waunussa 
          minkäänlaista tarkastusta toimittaneet, lienewätkö sitten myöhemmin sen tehneet.</p>
        <p>Myöhemmin illalla käwiwät Tampereen punakaartilaiset useita kertoja waatimassa kyseessäolewan liikennetarkastajan waunun awaimia niitä kuitenkaan saamatta.</p>
        <p>Klo 11 aikaan yöllä punakaartilaisosasto tuli jälleen rautatieasemalle, waatien mainitun waunun awaimia. Kun niitä ei woitu heille luowuttaa, koska ne eiwät olleet asemalla, tunkeutuiwat 
          punakaartilaiset waunuun särkemällä waunun ikkunan. He toimittiwat waunussa tarkan nuuskinnan, tietysti tuloksetta. Ainoa mitä he waunusta saiwat saaliikseen, oli uusihopeainen 
          pöytäkalusto, jonka he toiwat asemakonttoriin ja waatiwat asemawirkailijoita laatimaan niistä luetteloa. Kun tästä kieltäydyttiin, laatiwat he itse sellaisen ja jättiwät sitten tawarat 
          asemakonttoriin ilmottaen, etteiwät he wastaa niistä.</p>
        <p>Juuri kun tämä oli tapahtunut, ilmoitettiin junanlähettäjälle, että osa kaartilaisia oli tunkeutunut etelästä tulleen yöpostijunan matkatawarawaunuun ja anastaneet siitä erään Kurikkaan 
          osoitetun suurehkon kirstun, jota lähtiwät ajurilla kuljettamaan työwäentalolle. Junanlähettäjän ilmotettua, ettei hän lähetä junaa, ennenkuin on saatu selwyys siitä, minne anastettu 
          tawaralähetys oli wiety, ilmoitti roistojoukon johtaja, että he oliwat toimittamassaan tarkastuksessa hawainneet, että kirstu sisälsi patruunoita, ja ettei matkustajajunissa ole lupaa 
          ilman erityisiä warokeinoja kuljettaa räjähdysaineita. Tämän jälkeen juna pääsi lähtemään noin 45 minuuttia myöhästyneenä.</p>
        <p>Klo 12,50 punakaartilaiset poistuiwat asemalta.</p>
      </Article>
      <Article titleText="Punakaartilaiset, maansa kawaltajat, yhteistyössä wenäläisen sotawäen kanssa.">
        <h5>Lewoton yö.</h5>
        <p>Wiipurista saatujen tietojen mukaan oli siellä toissa yönä sangen lewotonta. Kuului alituista kiwäärin pauketta ja myöskin muutamia tykin laukauksia. Ammunta kohdistettiin etupäässä 
          Aleksanterin kadun warrella sijaitsewiin liiketaloihin, joiden akkunat särjettiin. Kadulla punakaartilaiset pidättiwät ja tarkastiwat useita henkilöitä. Kaduilla liikkui sotilaita ja 
          punakaartilaisia samoilla asioilla. Jotkut henkilöt saiwat näiden mellastusten aikana liewempiä haawoja.</p>
        <h5>Junaa ammutaan.</h5>
        <p>Kun Wiipurista toissayönä Helsinkiin lähtewä postijuna oli päässyt jonkun matkaa asemalta, alkoi sitä wastaan radan kummaltakin puolelta kiiwas ammunta. Mikäli pimeässä woitiin todeta 
          oliwat ampujat siwiilipukuisia punakaartilaisia ja sotilaita. Kaikkiaan ammuttiin n. 50 laukausta. Haawoittuneita on eräs matruusi, jonka molempien polwien läpi tunkeutui kuula ja eräs 
          wenäläinen sotilas, joka sai kuulan selkäänsä ja jonka tila nykyisin on arweluttawa. Sitäpaitsi haawoittui 2 naishenkilöä.</p>
        <h5>Punakaartilaiset waltaawat poliisilaitoksen.</h5>
        <p>Puolen yön aikaan waltasiwat punakaartilaiset Wiipurin poliisilaitoksen.</p>
        <h5>Sotawäki waltaa aseman.</h5>
        <p>Yöllä waltasi sotawäki Wiipurin rautatieaseman, joka illalla oli joutunut suojeluskunnan haltuun. Asemalla pitiwät wahtia punakaartilaiset ja sotilaat, eikä sinne lasketa muita kuin 
          passilla warustettuja henkilöitä.</p>
        <h5>Surmansa saaneita.</h5>
        <p>Surmansa on saanut ainakin 4 henkilöä, joista 2 naista. Näistä Helena Puustinen sai kuulan watsansa läpi palatessaan teatterista. Prokuristin rouwa Sanni Hietanen sai kuolettawan luodin 
          otsaansa, katsoessaan ikkunasta eilen aamulla. Sairaalaan on sitäpaitsi tuotu 2 suojeluskuntalaisen ruumiit. Punakaartilaisten kuolleista ja haawoittuneista ei ole tietoa, he kun weiwät 
          ne wenäläisiin sotilassairaaloihin.</p>
        <h5>Punakaartilaiset murhaajina.</h5>
        <p>Näiden lisäksi ilmoitetaan myöhemmin, että punakaartilaiset eilen pidättiwät Wiipurin asemalla ylioppilas Takalan, jolta löysiwät rewolwerin. Takala teurastettiin paikalla muutamilla 
          kiwäärilaukauksilla. Samaan aikaan saapui asemalle asioitsija Aaro Tuowinen, jolle myönnettiin pääsy odotussaliin. Siellä kuitenkin eräs punakaartilainen ilman minkäänlaista aihetta 
          läwisti pistimellä hänen rintansa. Isku sattui sydämeen ja T kuoli paikalla.</p>
        <h5>Wangittuja.</h5>
        <p>Wangittuja on myöskin useita m. m. Wiipurin asemapäällikkö Kylmänen ja S. T. T:n palweluksessa olewa toimittaja P. Siili.</p>
        <h5>Poliisikamari luowutetaan takaisin.</h5>
        <p>Eilen aamulla punakaartilaiset luowuttiwat poliisikamarin takaisin miliisille.</p>
        <h5>Suojeluskuntalaiset poistuwat.</h5>
        <p>Kun wenäläiset sotilaat oliwat miehittäneet rautatieaseman ja luowuttaneet sen punakaartille, poistuiwat maalta tulleet suojeluskuntalaiset kaupungista. Täten tahdottiin wälttää 
          werenwuodatusta.</p>
        <h5>Aluekomitea.</h5>
        <p>Toissa yönä lähti Helsingin aluekomitea Wiipuriin selkkauksia asettamaan.</p>
        <h5>Wenäläisten uhkaukset.<br />Kaupunki ammutaan mäsäksi.<br />Werilöyly.</h5>
        <p>Koko yön oliwat linnoituksen tykit käännettyinä kaupunkia kohden. Yöllä pidetyissä neuwotteluissa ilmoittiwat wenäläiset sotilaat, että elleiwät suojeluskuntalaiset tunnin kuluessa poistu 
          kaupungista, kaupunki ammutaan maan tasalle ja pannaan toimeen yleinen werilöyly.</p>
        <h5>Vangit murhataan.</h5>
        <p>Huhut kertowat, että wangittu asemapäällikkö Kylmänen olisi myöhemmin murhattu. Samassa tilaisuudessa olisi murhattu myöskin pari muuta henkilöä.</p>
        <h5>Aluekomitea ei saa mitään aikaan.<br />Pahinta pelätään.</h5>
        <p>Wiime yönä kaupungissa pelättiin pahinta. Helsingistä saapunut aluekomitea ei ole saanut mitään aikaan.</p>
      </Article>

      <div className="interTitle">26.1.1918</div>
      <Article titleText="Wiipurin tapahtumat.">
        <p>Eilen Wiipurista saapuneet tiedot kertowat, että rauha kaupunkiin on jälleen palautumassa, waikkakaan lopullista sowintoa ei wielä ole saatu aikaan. Kotoisten ja wierasten 
          huligaaniainesten kauhunnäytäntö on toistaiseksi päättynyt ja Wiipurin linnoitus woi jälleen rauhassa kääntää tykkinsä ammottawat kidat tyhjää ulappaa kohden tarwitsematta enään 
          huligaaniainesten waatimuksille pontta antaakseen ampua rauhallista kauppakaupunkia maan tasalle.</p>
        <p>Mutta waikka ulkonainen lewollisuus jälleen onkin palautumassa, kehoittawat Wiipurissa saadut kokemukset jokaista kansalaista wakawasti ajattelemaan, missä asemassa me nykyisin elämme. 
          Itsenäisyytemme, waikka sen onkin maan mahtawat tunnustaneet, on wain harhakuwa, niinkauan kuin oma kansamme ei sen paremmin, kuin nykyiset tapaukset osottawat, käsitä sen arwoa ja 
          ennenkaikkea niin kauan kuin wenäläiset sotajoukot oleskelewat maassamme. Me olemme jälleen saaneet kokea wenäläiseen luonteeseen „erottamattomasti yhdistetyn” sanapattoisuuden. 
          Wenäläisten monennimisten neuwostojen julistukset ja kiellot wenäläisen sotawäen sekaantumisesta Suomen tasawallan sisäisiin asioihin owat osoittautuneet yhtä löyhiksi kuin kaikki 
          muutkin wenäläisten nimissä annetut julistukset. Toiselta puolen ei nähtäwästi mikään wenäläinen nenwosto tai komitea enää saata pitää kurissa täällä majailewia williintywiä 
          sotawäenaineksia. Tilanne tässä suhteessa näyttää perin synkältä. se ainakin olkoon meille suomalaisille selwä, että apua minkäänlaisten neuwostojen taholta ei ole odotettawissa.</p>
        <p>Wiipurin tapahtumat osoittawat myöskin täydelleen sen kurjuuden ja kaiken inhimillisyyden puutteen, mikä eräät kansamme kehnoimmat ainekset on wallannut. Emme tarkoita tällä yksinomaan 
          niitä petomaisia murhia, joihin punakaartilaiset owat tehneet syyllisiksi, waan yleensä sitä henkeä, sitä mielentilaa, joka on saanut nämä ainekset käsikädessä käymään wieraan heidän omaa 
          kansallisuuttaan polkewan sotawoiman kanssa. Mitä he itse eiwät kyenneet sen tekiwät heidän wieraat asetowerinsa. Wenäläiset joukot waltasiwat aseman, wasta senjälkeen saapuiwat 
          punakaartilaiset sinne rauhallisia kansalaistaan teurastamaan, wenäläiset linnoitustykit käännettiin kaupunkia kohden, ja punakaartilaiset saawuttiwat ainakin tilapäisen woittonsa! Häpeä 
          ja harmi waltaa suomalaisen mielen.</p>
        <p>Myöskin sos.-dem. puolueneuwosto on katsonut asiakseen antaa tälle wastenmieliselle liitolle siunauksensa. Wastatessaan Itämerenlaiwastokomitean kysymykseen wenäläisten joukkojen 
          poistamisesta Suomesta, on neuwosto ilmottanut tulewansa wastustamaan tätä waatimusta kansan nälänhädänkin uhalla. Sosialistien johto on siten tässä kysymyksessä asettunut samalle kannalle, 
          kuin Wiipurin esikaupunkien huligaanit hyökätessään wenäläinen kiwääri kädessä wenäläisten joukkojen seläntakana rauhaa ja järjestystä tarkoittawien kansalaistensa kimppuun.</p>
        <p>Samaten tahtoo sosialistinen johto yhtenään „Työmiehen”, puolueen pää-äänenkannattajan kirjoitustawasta päättäen rinnastaa Suomen rehelliset työläiset ja kaikenlaiset huligaanit. Täytyy 
          todella ihmetellä, kuinka kauwan tällaista rinnastelua siedetään asianomaisella taholla.</p>
        <p>Wiipurin tapahtumat ja sosialistien puoluejohdon menettely on nostawa wastaansa nekin kansanainekset, jotka eiwät wielä ole kylliksi walweilla hawaitakseen, mikä on uhkaamassa. Useat 
          paikkakunnat maassamme owat saaneet olla rauhassa, toiset ikäänkuin kohtalon sallimasta, toiset taas syystä, että kansa on herännyt ja mieswoimin ryhtynyt huolehtimaan, että järjestys 
          pitäjässä ja kunnassa säilyy. Kohtalon warjelus ei kuitenkaan nykyaikana riitä, sillä mikä eilen tapahtui Wiipurissa, se saattaa huomenna tai jonakin seuraawana päiwänä tapahtua muualla. 
          Wiipurissa wäistyiwät järjestyksestä huolehtiwat woimat wenäläisen linnoitustykistön edessä, mutta kenpä tietää, jos apua olisi ollut kylliksi saatawilla, olisiko niiden tarwinnut wäistyä 
          tykkienkään tieltä. On warmaa, että Suomessakin tällainen woima saatetaan luoda, jos kaikki wain saadaan liikkeelle.</p>
        <p>Hämeessä owat myrskykellot toistaiseksi kaikuneet kuuroille korwille. Eihän täällä wielä ole ollut sanottawampaa hätää, eikä naapurinkaan hätä ole meitä sanottawammin näihin asti 
          liikuttanut. Hitaus, heimomme peruswika on saanut aikaan, ettei täällä enempää saatu syntymään. Nähtäwästi hämäläinen haluaa ensin nahoissaan tuntea, että jotakin olisi tehtäwä. Mutta 
          saattaa käydä myöskin niin, että silloin kaikki jo on myöhäistä.</p>
        <p>On todellakin aika täälläkin herätä. Jos aikaa on hukatty, sitä suuremmalla innolla työhön! Mies talosta ja kaksi parhaasta oman pitäjän suojaksi! Ja jos apua muualla tarwitaan, niin 
          huolehdittakoon, että sitä Hämeestäkin lähtee.</p>
      </Article>
      <Article titleText="Wenäläisen sotawäen poistaminen Suomesta.">
        <h5>Sos.-dem. puolueen johto wastustaa sitä - nälänhädän uhalla.</h5>
        <p>Sos.dem puolueen puolueneuwosto on antanut wastauksensa Itämeren laiwastokomitean edustajain tiedusteluun puolueneuwoston kannasta waatimukseen wenäläisen sotawäen poistamiseksi heti 
          maastamme. Mainitsemme tästä erinomaisen kuwaawasta wastauksesta seuraawaa:</p>
        <p className="quote">Suomen sosialidemokratia taistelee leppymättömästi militarismia wastaan. Meidän puoluekokouksemme on waatimuksena lausunut, ettei Suomi itsenäisenäkään maana omaa 
          seisowaa sotawäkeä tarwitse. Suomessa ei tietysti ole pidettäwä wenäläistäkään sotawäkeä, niinpian kuin sen poiswieminen täällä käy mahdolliseksi, ja missään tapauksessa ei enään waaran 
          tultua. Mutta porwarien prowokatoorisessa muodossa esitettyyn waatimukseen, että sotawäki täältä on wiipymättä pois kuljetettawa ei Suomen työwäki ole yhtynyt huolimatta maassa 
          wallitsewasta ankarasta elintarwepulasta, joka tietysti wenäläisen sotawäen täällä olemisen kautta käy työwäestölle wielä waikeammksi, ja jonka helpottamiseksi toiwomme wenäläisten 
          towerien tarmokasta apua. Sillä me käsitämme hywin, että ainakin osaksi wenäläisen sotawäen Suomessa olo nyt ennenkuin rauha on solmittu saattaa olla tarpeen wallankumouksellisen Pietarin 
          suojelemiseksi jonkun imperialistisen hallituksen hyökkäyksiä wastaan. Me olemme sitäpaitsi sitä mieltä, että kysymys, milloin ja millä tawalla wenäläinen sotawäki on Suomesta 
          poissiirrettäwä, on keskinäisten neuwottelujen kautta ratkaistawa siinä wenäläis-suomalaisessa sekakomiteassa, jonka teidän kansankomisaarienne neuwosto on ehdottanut asetettawaksi niiden 
          kysymysten selwittämistä warten, jotka aiheuttiwat Suomen eroamista Venäjästä ja johon komiteaan Suomen Eduskunta puolestaan jo on walinnut 7 jäsentä, niistä 3 Suomen sosialidemokratian 
          ehdottamaa.</p>
      </Article>
      <Article titleText="Venäjän sotaväen oleskelu Suomessa.">
        <h5>Neuwotteluja hallituksemme ja aluekomitean wälillä.</h5>
        <h5>8 wiikon kuluttua, mahdollisesti pikemminkin, koko maa ehkä tyhjennetty wenäläisestä sotawäestä.</h5>
        <h5>Aluekomitea lupaa tehdä parhaansa.</h5>
        <p>Torstaina oli aluekomitean ja Suomen hallituksen wälillä jälleen ollut neuwotteluja sekä erityisesti Wiipurin tapahtumain johdosta että wenäläisen sotawäen esiintymisistä maassa yleensä. 
          Mikäli olemme saaneet tietää, on aluekomiteassa m. m. wäitetty, että Wiipurin melskeisiin osaaottaneet sotamiehet owat parhaasta päästä sodan aikana ja warsinkin aiwan wiime aikana 
          Wenäjän armeijan riweihin liittyneitä suomalaisia, joten siis ei täydellä syyllä woi sanoa warsinaisten wenäläisten sotamiesten sekaantuneen Suomen asioihin ainakaan siinä määrin kuin 
          yleensä luullaan. Ryhtymättä wäittelemään asian todellisesta laidasta on Suomen hallituksen puolesta jyrkästi waadittu tällaistenkin mahdollisten suomalaissyntyisten sotamiesten 
          kiireellistä siirtämistä Wenäjälle, sillä kun hekin kerran owat Wenäjän armeijan luetteloissa ja sen uniwormussa, owat Wenäjän waltiowallan pitäjät wastuunalaisia myös heidän 
          osallisuudestaan rikoksiin Suomen itsenäisyyttä ja kansalaisia wastaan.</p>
        <p>Wenäläisen sotawäen pikaista maastawiemistä koskewan waatimuksen johdosta ilmoitettiin aluekomiteassa, että yleisen ewakuoimissuunnitelman mukaan wiedään maasta pois, yksi ikäluokka joka 
          10 päiwä, niin että noin 8 wiikon kuluttua on koko maa ehkä saatu tyhjennettyä wenäläisestä sotawäestä. Kuitenkin woisi tämä sotawäki, lisättiin komiteassa, poistua Suomesta waikka 
          muutamassa päiwässäkin, kunhan Suomi wain julistatautuisi puolueettomaksi sekä Saksa ja Ruotsi Suomen puolueettomuuden tunnustaisiwat. Tähän wastasiwat Suomen hallituksen edustajat, että 
          Suomen hallitus on jo muutamia wiikkoja sitten maan eduskunnan istunnossa juhlallisesti julistanut Suomen puolueettomaksi sekä ettei tämä puolueettomuus ole myöskään ulkowalloille 
          tuntematon. Aluekomiteassa wäitettiin, että siellä ei ole ollut wirallista tietoa asiasta.</p>
        <p>Yleensä suhtautui aluekomitea kuitenkin warsin myöntywästi Suomen hallituksen waatimuksiin ja lupasi tehdä parhaansa niiden tyydyttämiseksi.</p>
        <p>Neuwotteluissa on myöskin keskusteltu olosuhteista Suomen rajoilla. Aluekomitea piti suotawana, että Suomen hallitus asettaisi jonkun wirkamiehen wenäläisten sotilaswiranomaisten awuksi 
          Ruotsin rajalle. Asiaan suhtautuu Suomen hallitus myönteisesti. Viimeksimainitun puolesta ilmoitettiin neuwotteluissa, että Suomen hallitus tulee asettamaan Ruotsin rajalle muutaman sadan 
          miehen suuruisen wartioston, jolle wenäläisen wartioston on luowutettawa tehtäwänsä.</p>
        <p>Wielä lausuttiin aluekomitean taholta toiwomus, että erinäiset tawarain wientiä ja tuontia maan molempain rajain poikki koskewat, wenäläisen sotawäen kannalta haitalliset määräykset ensi 
          tilassa muutettaisiin sellaisiksi kuin wenäläisen sotawäen taholta jo aikaisemmin on lausuttu suotawaksi. Suomen hallituksen puolesta annettiin tietää, että tämä kysymys on senaatissa 
          paraikaa käsittelyn alaisena.</p>
      </Article>
      <Article titleText="Urjalan punakaartin temmellykset.">
        <h5>Wenäläiset wieneet kiwäärinsä pois.</h5>
        <p>Wiime lehdessä mainittujen 4 wenäläisen sotilaan paikkakunnalle saapumisen tarkoituksena on nähtäwästi ollut punakaartilaisille lainaamiensa kiwäärien takaisin periminen. Tämä tapahtui 
          maaherran waatimuksesta. Näitä luowutettiin 24 kpl., mutta osa jäi jäljelle. Urjalassa majailleet sotilaat eiwät ole olleet mukana punakaartin hommissa.</p>
        <p>Wiime torstaina toimittiwat punakaartilaiset asetarkastuksiaan. Saalis tällöinkin supistui wain muutamaan haulikkorämään. Myöskin pidättiwät punakaartilaiset pari henkilöä erään 
          liikemiehen ja maanw. Uotilan jotka kuitenkin myöhemmin wapautettiin. Torstaina päiwällä saapui Urjalaan Toijalasta wenäläisiä sotilaita, jotka ottiwat punakaartilaisilta takaisin loput 
          heille lainatuista kiwääreistä. Senjälkeen palautui paikkakunnalle rauha.</p>
        <p>Myöskin eilen oli Urjalassa rauhallista.</p>
      </Article>
      <Article titleText="Sosialistit ja venäläinen sotaväki.">
        <p>Sosialistit owat osoittaneet wenäläisrakkauttaan monella tawalla. He owat weljeilleet heidän kanssaan, he owat heiltä lainanneet aseita, joilla omia kansalaisiaan owat surmanneet ja 
          hätyyttäneet. Yhteisiä juhlia owat pitäneet y. m. Nyt owat sosialistien johtajat wirallisesti puolueensa nimessä ilmoittaneet etteiwät he ole yhtyneet porwarien waatimukseen että 
          wenäläinen sotawäki suomesta poistettaisiin. He owat walmiit nälkääkin näkemään kun saawat olla wenäläisten kanssa. Yhtä waan puuttuu: eiwät ole wielä ilmoittaneet, että owat walmiit 
          nälkäkuolemaan, kun waan wenäläinen toweri tanssii heidän haudallaan. Olemme aina ajatelleet että arwokkaammat sosialistit owat toista mieltä kuin heidän johtajansa. Siinä lienemme 
          pettyneet. Ylimalkaan owat sosialistit samaa maata. Monta häpeällistä työtä owat sosialistit tehneet ja yhä tekewät.</p>
        <p>Missä ne paremmat sosialistit owat?</p>
        <p>Joku harwa ilmoittaa paheksumisensa: Siinä kaikki. Ne owat nähtäwästi sosialistileiriin eksyneitä porwareita. Yhä enempi alkaa meissä päästä wallalle se mielipide että sosialistit 
          yleensä kaikki puolustawat johtajiensa ja murhakaartiensa töitä, toiset ilolla, toiset wähän wastenmielisesti ja waijeten. Turha on nähtäwästi se luulo, joka muutamilla porwarilehdillä on, 
          että maan työwäenjärjestöt nousisiwat panemaan wastalauseensa sos.-dem. puolueneuwoston äskeiseen petokseen, jolla he Suomen itsenäisyydelle kaiwawat hautaa. Sosialistit hywäksywät sen. He 
          eiwät ymmärrä itsenäisyyttä. Wenäläisen sotilaan seura on heidän pojilleen, heidän tyttärilleen ja heidän kaarteilleen suloinen ja mieluisa. Sen saawuttamiseksi he hylkääwät maansa ja 
          kansansa rauhan ja itsenäisyyden. Mutta kaikukoon kautta maailman se tieto, että sitä tahtowat <span className="accent">waan sosialistit</span>, eikä yksikään sielu mistään muusta 
          puolueesta.</p>
        <p className="signature">Kansalainen.</p>
      </Article>
      <Article titleText="Wenäläisten hirmutöitä Kiikassa.">
        <h5>Ryöstäneet ja polttaneet Ruotsilan kartanon sekä wanginneet suojeluskunnan jäseniä.</h5>
        <p>Porista keskiwiikkona klo 12,6 päiwällä lähtewällä postijunalla matkusti Kauwatsan asemalta Kiikkaan yli 200 sotilasta. Kiikkaan saawuttuaan nämä ensi töikseen ottiwat haltuunsa Kiikan 
          puhelinkeskuksen ja suuntasiwat sitten kulkunsa Ruotsilan kartanoon, jota puolustamassa oli 23 suojeluskaartilaista. Suunnattomalla yliwoimallaan sotilaat saiwat kartanon haltuunsa, 
          wangitsiwat suojeluskaartilaiset ja kuljettiwat heidät asemalle. Saamiemme tietojen mukaan sai kahakassa 2 suojeluskuntalaista haawoja, yksi on kaatunut.</p>
        <p>Kartanossa paniwat sotilasroswot toimeen täydellisen ryöstön ja häwityksen. Huonekalut rikottiin, ikkunat murskattiin ja arwoesineet warastettiin.</p>
        <p>Klo 4,58 Kiikasta lähtewällä junalla palasiwat roswojoukot jälleen Kauwatsalle. Matkalla junassa näkiwät siwiilihenkilöt miten he toisilleen näytteliwät Ruotsilasta roswoamiaan 
          hopeita.</p>
        <p>Tiistai iltana sai Ruotsilan kahakassa hengenwaarallisen haawan, luultawasti sotilaskiwääristä lähteneestä luodista punakaartilainen Jalmari Grönlund Helsingistä. Häntä hoidetaan nykyään 
          Porin kunnallissairaalassa.</p>
        <p>Myöhemmin ilmoitetaan, että sotilaat sytyttiwät kartanon palamaan. — Kartano paloi maan tasalle.</p>
      </Article>
      <Article titleText="Wiipurin tapahtumat.">
        <h5>Eri tietoja keskiwiikkopäiwältä.</h5>
        <p>Kaduilla oli keskiwiikkona päiwällä hywin lewotonta. Punakaartilaisia liikkui pitkin katuja asestettuina ja wangitsemisia toimitettiin. Monissa työpaikoissa oliwat työt seisauksissa ja 
          useimmat kaupat, pankit ja koulut kiinni.</p>
        <p>Pietarista kerrottiin päiwällä olewan tulossa sikäläisiä punakaartilaisia tuoden kaksi panssariautoa mukanaan. Yötä odotettiin kauhulla.</p>
        <p>Punakaartilaiset jatkoiwat kaiken päiwää henkilöiden wangitsemista; pidätetyt, joiden luku klo 3 ip. jo nousi 68:aan, wietiin punakaartilaisten hallussa olewaan kaupungin keskellä 
          sijaitsewaan ent. wenäläiseen kasarmiin. Punakaartilaiset owat kääntyneet maaherran puoleen, kehoittaen häntä ryhtymään toimiin, jotta pidätetyt saisiwat ruokaa.</p>
        <p>Klo 2,35 lähti Wiipurista Pietariin matkustajajuna, jossa matkustajina oli melkein yksinomaan punakaartilaisia. Heidän matkansa tarkoitusta ei warmuudella tunneta, mutta luullaan heidän 
          lähteneen hakemaan lisäwoimia tai aseita.</p>
        <p>42:n armeijakomitea on antanut julistuksen, jossa sanotaan, että huomioonottaen Wiipurin linnoituksen turwallisuuden ei linnoituksen alueella tulla sallittamaan minkäänlaisia aseistettuja 
          henkilöitä, kuuluukootpa he punaiseen tai walkoiseen kaartiin, waan riisutaan kaikki aseista, joilla niitä tawataan. Tämä on linnan komendantin täytäntöön pantawa.</p>
        <p>Kansalaisten piireissä ei uskota tämän julistuksen tulewan kohdistumaan punakaartilaisiin, huolimatta sen sanamuodosta.</p>
        <p>Kaupungilla ei muissa suhteissa myöhemmin tapahtunut mainittawampaa.</p>
        <p>Puoliyön ajoissa näytti siltä, että sotawäki olisi ryhtynyt toteuttamaan päätöstään wäliintulosta ja aseiden riisumisesta. Yöllä nähtiin punakaartilaisten suurin joukoin kuljettawan 
          aseitaan sotawäen hallussa olewiin kasarmeihin.</p>
        <p>Muuten oli yö kaupungissa aiwan hiljainen.</p>
        <h5>Wiipurissa julistettu kunnallislakko.</h5>
        <p>Wiipurin sosialidemokraattisten työwäenjärjestöjen eduskunnan ja punakaartin esikunnan päätöksen mukaan alkoi lakko torstai yönä klo 12. Julistuksessa on otsikko: „Kansalaissota alkanut”. 
          Siinä puolustetaan lakon alkamista sillä, että porwaristo on julistanut kansalaissodan tuottamalla kaupunkiin tuhansittain aseistettuja „lahtarikaartilaisia”. Julistuksessa ilmoitetaan, 
          että lakko käsittää Wiipurin kaupungin ja Wiipurin pitäjän. Lakkotilassa owat kaikki liikkeet ja laitokset sähkö-, wesijohto- ja miliisilaitosta lukuunottamatta. Sitäpaitsi owat 
          elintarpeiden kuljetus ja myynti lakosta wapaat. Junaliikenne Wiipurin kaupungin ja pitäjän alueella on kielletty torstai yöstä klo 12 alkaen. Ainoastaan elintarpeita saa junilla kuljettaa. 
          Talonomistajille huomautetaan, että niiden talojen turwallisudesta ei wastata, joista lahtarikaartilaiset ampuiwat tahi joista tawataan aseistettuja lahtarikaartilaisia. „Rikoksista” 
          tuomitaan ankarasti pidemmittä tutkinnoitta.</p>
        <p>Lakkojulistukseen liittyy toinen julistus, jossa kehoitetaan työläisiä wastaamaan „porwariston julkeaan taisteluhaasteeseen”. „Vastatkaa niin,” sanotaan siinä, „että porwaristolla ei enää 
          ole halua toiste hyökätä työwäestön kimppuun. <span className="accent">Voitto tai kuolema!</span> olkoon sotahuutomme”.</p>
        <h5>Sanomalehdet eiwät ilmesty.</h5>
        <p>Lakon johdosta eiwät sanomalehdet ilmestyneet torstaina.</p>
        <h5>Lakkojulistuksen walheellisuus.</h5>
        <p>„Karjalan Aamu-Lehti” lewitti keskiwiikkoiltana Wiipurissa lisälehden, jossa lausutaan: Wiipurin työwäen järjestöjen eduskunta ja Wiipurin järjestyskaartin esikunta owat antaneet 
          julistuksen, jossa ilmoitetaan yleislakko alkawaksi yöllä klo 12. Sen julistamista puolustetaan sillä, että porwarilliset muka owat julistaneet kansalaissodan tuomalla suojeluskaartilaisia 
          Wiipuriin kautta Karjalaan. Tämä on wastoin parempaa tietoa lewitetty walhe. Tänne Wiipuriin ei ole porwarillisten taholta ketään tuotu eikä tänne ole kukaan tullut kansalaissotaa 
          alkamaan, waan ainoastaan puolustamaan kaupunkia niitä wäkiwallantekoja wastaan, joihin punakaartilaiset oliwat ryhtyneet. „Porwarien” tarkoituksena ei ole mikään wallananastus, ei 
          kenenkään sortaminen, waan ainoastaan huolenpito siitä, ettei yksilön wapautta loukata. Suojeluskunnan puolelta ei ole kenenkään kimppuun hyökätty, ainoastaan puolustauduttu punakaartin 
          harjoittamaa wäkiwaltaa wastaan, jota on ilmennyt asuntojen ampumisessa, ihmisten surmaamisessa y. m. Niin on todellisuudessa asianlaita.</p>
        <h5>Linnoitus waarassa.</h5>
        <p>„Helsingin Sanomille” luotettawasta lähteestä tulleen tiedon mukaan on eräs Wiipurin linnoituksen upseeri kääntynyt kansankomissarioiden hallituksen puoleen ilmoittaen, että linnoitusta 
          ja kaupunkia uhkaa 5,000 miehinen joukko-osasto. Tämän wuoksi hän pyytää heti aseellista apua linnoitukselle.</p>
        <h5>Wenäjän armeijan ylipäällikön määräys aseiden riisumisesta.</h5>
        <p>Myöhään keskiwiikkoyönä saapui Wiipuriin Wenäjän armeijan ylipäällikön Krylenkon määräys, ettei tulla sallimaan minkäänlaisia esiintymisiä ei punakaartin eikä walkokaartin taholla. 
          Punakaartin on heti luowutettawa takaisin wenäläiseltä sotamiehiltä saamansa kiwäärit ja kranaatinheittimet. Aseiden riisumista suoritetaan sekä kaupungissa että esikaupungeissa.</p>
        <h5>Torstai.</h5>
        <p>Torstaiyönä sosialistien julistama kunnallislakko oli wain osittainen.Sanomalehtien kirjapainoissa oli tawallisuuden mukaan työt lopetettawa, niin etteiwät ne päässeet ilmestymään. 
          Päiwällä ei oltu wielä kirjapainoissa päästy töihin.</p>
        <p>Puhelinlaitos toimi täydellisesti, niinkuin ennenkin, sillä sotilaswiranomaiset eiwät ole sallineet laitoksen sulkemista.</p>
        <p>Rautatieliikenne oli wain osittain häiriintynyt. Ensin kieltäytyiwät waihdemiehet liittämästä wetureita juniin ja lakkokomitea kielsi kaikkien junien, paitsi Pietarin pikajunan 
          lähettämisen mutta owat junat kuitenkin 1-2 tunnin wiiwyttelyn ja kinailun jälkeen aina päässeet lähtemään. Tähän waikutti sotilaswiranomaisten pakoitus, sillä heidän taholtaan on waadittu 
          liikenteen ylläpitämistä. Puoleenpäiwään mennessä oli ainoastaan yksi juna pysäytetty, Kouwolan paikallisjuna, johon ei ole annettu weturia.</p>
        <p>Raitiotieliikenne oli pysäyksissä ja koulut sulettuina, mutta kaupat yleensä oliwat aamupäiwällä auki. Tehtaat ja muut sellaiset työpaikat oliwat sen sijaan kiinni.</p>
        <p>Katuelämä oli werrattain hiljaista päiwällä. Liikkeellä ei näkynyt sotilas- eikä punakaartilaispatrulleja ja rautatieasemaltakin on kaikki wahdit poistettu.</p>
        <p>Klo 10 ap. alkoiwat maaherra Suhosen kotona neuwottelut, joihin ottiwat osaa ministeriwaltiosihteeri Enckell, senaattori Louhiwuori, toimittaja Moilanen, arkkitehti Ikonen, 
          howioikeuden-notari Hällström sekä työwäen, punakaartilaisten ja suojeluskuntalaisten edustajat, Alustawan keskustelun jälkeen keskeytettiin neuwottelut ja jatkettiin niitä jälleen klo 
          2:lta. - Sotawäen edustajia ei neuwotteluissa ollut.</p>
        <p>Neuwotteluja, jotka alkoiwat klo 10:ltä aamulla, jatkettiin wäliajan jälkeen klo 2 päiwällä. Tällöin tehtiin sosialistien taholta sellainen waatimus, että suojeluskuntalaisten on 
          luowutettawa aseensa, ennenkuin warsinaisiin neuwotteluihin woidaan ryhtyä. Tähän ei kuitenkaan katsottu porwarillisten puolelta mahdolliseksi suostua, sen sijaan esittiwät he, että 
          perusta, jolta neuwotteluihin lähdettäisiin, olisi se, että punakaartilaisten wangitsemat henkilöt wapautettaisiin. Punakaartilaiset pitiwät taas wuorostaan mahdottomana tätä waatimusta.</p>
        <p>Senaattori D. W. Louhiwuori teki senjälkeen sellaisen ehdotuksen, että kummatkin kaartit olisiwat nykyisellään, mutta läänin maaherran lähemmän määräyksen alaisina.</p>
        <p>Viimeksi mainittua ehdotusta kokoontuiwat kummankin puolen neuwottelijat pohtimaan klo 7 illalla.</p>
        <p>Neuwottelua kesti aina klo 12 asti, mutta ei siinä päästy minkäänlaisiin tuloksiin wielä. Sosialistiselta taholta luwattiin aamulla lähemmin ilmoittaa, aiotaanko neuwotteluja jatkaa 
          wai ei.</p>
        <h5>Kirjaltajat wastustawat lakkoa.</h5>
        <p>Torstai-iltana pitiwät Wiipurin kirjaltajat kokouksen julistetun lakon johdosta.</p>
        <p>Kokoukseen oli saapunut myöskin punakaartin edustaja joka uhkauslausunnossaan ilmoitti, ettei töitä saisi alkaa ja jos tultaisiin toisin menettelemään woisi siitä olla ikäwiä seurauksia.</p>
        <p>Samalla kun yhdistys pani jyrkän wastalauseen lakkoa wastaan katsoi se että kirjaltajat eiwät woi näissä olosuhteissa ryhtyä töihin, warsinkin kun työhön ryhtymisellä saattaisi olla 
          laajemmatkin seuraukset.</p>
      </Article>
      <Article titleText="Wenäläisten sekaantuminen Suomen asioihin.">
        <h5>Senaatti lähettänyt sähkösanoman.</h5>
        <p>Senaatista lähetettiin keskiwiikkona Smolnaan seuraawa sähkösanoma:</p>
        <p className="quote">Kansankomissarien neuwosto Pietarissa.<br />Wastoin kaikkia lupauksia ja sopimuksia sekaantuiwat wenäläiset sotilaat Suomen sisäisiin asioihin, aikaansaaden inhoittawia 
          werisiä tapahtumia Wiipurissa. Suomen hallitus panee wastalauseen tällaista aseellista sekaantumista wastaan kansainwälisesti itsenäiseksi tunnustetun puolueettoman waltion asioihin ja 
          odottaa, että Wenäjän hallitus wiipymättä ryhtyy ratkaisewiin toimenpiteisiin sotawäen kaikkien esiintymisten ehkäisemiseksi niin Wiipurissa kuin muuallakin Suomessa. Näitten uusien 
          tapahtumien perusteella on hallitus uudelleen pakoitettu waatimaan wenäläisen sotawäen poistumisen kiirehtimistä Suomesta.</p>
        <h5>Senaatilla wakawa keskustelu aluekomitean kanssa.</h5>
        <p>Tiistaina oliwat senaatin edustajat pitkissä keskusteluissa Suomen maalaisen aluekomitean kanssa, jolloin he esittiwät sen waatimuksen, että wenäläinen sotawäki Wiipurissa ei saa 
          sekaantua punakaartin ja suojeluskunnan wäliseen selkkaukseen.</p>
        <p>Kun neuwottelujen kestäessä saapui tieto, että wenäläinen sotawäki oli mennyt punakaartin puolelle ja otti aktiiwisesti osaa taisteluun, lausuiwat senaatin edustajat katsoneensa tätä 
          sellaiseksi wihollismieliseksi teoksi itsenäistä maata kohtaan, joka muissa maissa johtaisi sotaan. Tapahtumasta tulewat luonnollisesti täällä olewat niiden waltojen edustajat, jotka 
          owat tunnustaneet Suomen itsenäisyyden, antamaan wälittömän tiedon hallitukselle ja tämä woi johtaa asianomaisille itsenäisyytemme loukkaajille ikäwiin seurauksiin.</p>
        <p>Tämä wakawa huomautus tuntui tekewän waikutuksen wenäläisiin, ja komitea lähettikin heti kiireellisen sähkösanoman Wiipuriin majoitetulle sotawäelle, että sen on pysyttäwä erillään 
          selkkauksesta.</p>
        <p>Wiipurissa ryhtyiwät sotilaswirkamiehet neuwottelemaan maaherran kanssa aseistariisumisesta. Punakaartiin waikutti se masentawasti ja ilmaisiwat he halua sowitteluihin. Sen jälkeen saiwat 
          he tiedon edellämainitusta kansankomissaarien määräyksestä, joka antoi heille uutta intoa.</p>
      </Article>
      <Article titleText="Rautatieläisiä kohdannut väkivalta.">
        <h5>Rautatieläiset uhkaawat poistua toimistaan, jos punakaartin toimeenpanema wäkiwalta rautateillä jatkuu.</h5>
        <p>Koska Itä-Suomessa parhaillaan riehuwat aseistetut sotilaat ja punakaartilaiset owat surmanneet ja wanginneet lukuisia rautatiewirkamiehiä ja saattaneet aikaan suurta häiriötä liikenteen 
          säännölliselle kululle miehittämällä asemia sekä asettaen wirkamiesten toiminnan tarkastuksensa ja walwontansa alaiseksi, owat rautatieläisten keskuudesta walitut komiteat, nim. 
          wirkamiehistöä edustawa Yhteishywän Komitea ja koko rautatieläiskuntaa - lukuunottamatta rautatieläis- ja weturimiesten liittoa - edustawa Rautatieläisjärjestöjen Toimeenpanewa 
          Keskuskomitea yhteisestä päätöksestä antaneet edustamilleen rautatieläisille seuraawan julistuksen:</p>
        <p className="quote">Koska erinäisiä wirkatowereitamme on raa'asti murhattu, raastettu Wenäjän wankiloihin ja otettu suomalaisten punakaartien wangeiksi kuin myöskin, koska punakaarti on 
          wallannut useita asemia ja asettanut niille wartioita, olemme näinollen, jos tätä olotilaa wielä jatkuu, päättäneet jättää toimemme, siksi kunnes niiden hoito saa tapahtua esteettä ja 
          häiriöttä. Myöhemmin ilmoitetaan, onko ja milloin toimesta poistuttawa.</p>
        <p className="signature">Yhteishywän Komitea.<br />Rautatieläisjärjestöjen Toimeenpanewa Keskuskomitea.</p>
      </Article>
      <Article titleText="Asema Wiipurissa eilen aamulla.">
        <h5>Uhkaawa. - Punakaartilaisjoukkoja saapunut Pietarista.</h5>
        <p>Wiipurista ilmoitettiin eilen aamulla, että asema kaupungissa näyttää uhkaawalta. Punakaartilaispatrulleja ja sotawäenosastoja liikkuu kaduilla ja asemalla. Klo 4 ajoissa yöllä saapui 
          asemalle sotilasjuna, joka oli nähtäwästi suojaamassa sen jälkeen tullutta toista junaa, missä saapui 300—400 punakaartilaista täysissä warustuksissa.</p>
        <p>Mikäli helsinkiläisistä lähteistä U.S. on saanut kuulla, huhutaan, että yön kuluessa oli Pietarista käsin tullut jonkunlainen kehoitus punakaartilaisille toiminnan aloittamisesta 
          uudelleen.</p>
        <h5>Mellakoitten uhrit.</h5>
        <p>Wiime lehdessä mainittu koneasioitsija Tuominen, joka ei kuulunut kumpaakaan kaartiin, oli 37-wuotias ja jätti jälkeensä waimon ja 6 alaikäistä lasta.</p>
        <p>Toinen asemalla yhtä raa'asti murhattu tunnettiin S.T.T:n palweluksessa olewaksi toimittaja Petter Siiliksi. Hänet wangittiin keskiwiikkona klo puoli 10 aikaan ap. Karjalankadulla ja 
          wietiin rautatieasemalle, jossa joku punakaartilainen puoli tuntia myöhemmin ampui häntä kiwäärillä rintaan, niin että hän heti heitti henkensä. Siili oli noin 20-wuotias, päässyt 
          ylioppilaaksi wiime syksynä Wiipurista ja tullut t.k. alkupäiwinä S.T.T:n palwelukseen.</p>
      </Article>
      <Article titleText="Waasassakin lewottomuuksia.">
        <h5>Rauha palautumassa.</h5>
        <p>Waasan läänin maaherra on eilen puhelimitse ilmoittanut senaatin sisäasiain toimituskuntaan, että kun juna eilisen wastaisena yönä saapui Waasaan, puhkesi klo 1 tienoissa yöllä kaduilla 
          lewottomuuksia sen johdosta, että eräät matkustajat kieltäytyiwät näyttämästä passejaan. Kaduilla oli liikkellä matruuseja ja punakaartilaisia, jotka alkoiwat ampua jatkaen ampumistaan 
          klo 5:een aamulla.</p>
        <p>Kaikkiaan ammuttiin noin 400 laukausta. Monta akkunaa särkyi. Mikäli tiedetään, ei kukaan ole saanut surmaansa, mutta haawoittuneita on. Punakaarti on wanginnut 6 henkeä. Neuwottelut on 
          määrätty aloitettawaksi klo 3 ip.</p>
      </Article>
      <Article titleText="Wiime tiedot.">
        <h5>Tilanne Wiipurissa.</h5>
        <p>Junaliikenne oli eilen wielä säännöllisessä kulussa. Wiipurissa ei kannettu postia. Lakko sujuu entiseen tapaan.</p>
        <h5>Punakaartilaiset Pietarista apua hakemassa.</h5>
        <p>Eilen aamupäiwällä lähti Wiipurista Pietariin eri aikoina kolme pitkää punakaartilaisjunaa hakemaan aseita. Punakaartilaisia matkusti mainituissa junissa useita tuhansia.</p>
      </Article>

      <h2>Sisällissota<br />(27.1 - 15.5)</h2>

      <div className="interTitle">29.1.1918</div>
      <Article titleText="Suomen kansalle.">
        <QuoteStart className="symbolStyle"/>
        <p className="quotationStyle">Se kansalaisweri joka wiime päiwinä on wuotanut, waatii maan hallitusta kääntymään kansan puoleen.</p>
        <p className="quotationStyle">Kansamme on wasta nähnyt sisimmän toiweensa täyttywän. Se on saawuttanut waltiollisen riippumattomuuden, jonka jo useat Europan wallat owat tunnustaneet. Suomen 
          kansan kehityksen tiellä ei nyt enää ole mitään ulkonaista estettä. Ylintä waltaa Suomessa käyttää maan eduskunta ja sille wastuunalainen hallitus. Meidän sekä eduskunta- että kunnallinen 
          järjestyksemme owat kansanwaltaiset.</p>
        <p className="quotationStyle">Walitettawasti on niitä, jotka eiwät tyydy tähän rauhan, lain ja wakaumuksen waikuttamisen tiehen, waan ryhtywät toisenlaisiin keinoihin tarkoitustensa perille 
          wiemiseksi. Wenäläisten taholta on kansamme keskuuteen lewitetty sitä ajatusta, että Suomessakin on kansanwaltainen kehitys mahdollinen ainoastaan sisäisen wallankumouksen awulla. Sellaisia 
          kansamme aineksia, joihin tuollainen ajatus on saatu istutetuksi, on wenäläiseltä taholta asestettu, ja täten on maamme saatettu kansalaissodan partaalle. Täällä olewien wenäläisten 
          joukkojen puolelta on wiime päiwinä tapahtunut mitä törkeintä sekaantumista Suomen asioihin sekä suoranaisia mieltäkuohuttawia rikoksia Suomen kansalaisten henkeä, omaisuutta ja wapautta 
          wastaan. Ja, mikä on kaikista walitettawinta, eräät Suomen kansalaiset owat wuorostaan olleet wenäläisiä joukkoja tähän kiihoittamassa ja yhdessä näiden kanssa kääntäneet aseensa Suomen 
          kansalaisia wastaan, yhdessä näiden kanssa harjoittaen wäkiwaltaisia ja rikollisia tekoja.</p>
        <p className="quotationStyle"></p>
        <p className="quotationStyle">Suomen hallituksella ei ole, waikkakin se on eduskunnalta saanut waltuudet toimia lujan järjestyswallan aikaansaamiseksi keinoja ylläpitää maassa rauhaa ja järjestystä, niin kauan kuin 
          wenäläiset sotajoukot täällä oman maamme rikollisia aineksia awustaen toimiwat kaiken rauhallisen elämän uhkana.</p>
        <p className="quotationStyle">Tähän katsoen Suomen hallitus on pitänyt welwollisuutenaan esittää Wenäjän hallitukselle wastalauseen wenäläisten joukkojen Suomen sisäisiin oloihin 
          sekaantumista wastaan sekä uudelleen waatia näiden joukkojen poistamista Suomen alueelta. Niinikään hallitus on katsonut welwollisuutensa waatiwan esittää niille ulkowalloille, jotka owat 
          meidän riippumattomuutemme tunnustaneet, wastalausenootin kurittoman wenäläisen sotawäen täälläoloa ja sen wäkiwallantöitä wastaan.</p>
        <p className="quotationStyle">Suomen hallitus katsoo wälttämättömäksi kääntyä myös kaikkien Suomen kansalaisten puoleen. Ainoastaan järkähtämätöntä järjestystä ylläpitämällä woimme säilyttää 
          wasta saawuttamamme itsenäisyyden, järjestyshäiriöt woiwat joko kerrassaan tuhota kansamme riippuwuuden ja wapauden, saattaa maamme wieraan waltaan tai silpomisen alaiseksi. Jokainen 
          järjestyksen häiritsijä on Suomen kansan ja sen itsenäisyäden wihollinen.</p>
        <p className="quotationStyle">Mutta wielä suuremmassa määrässä koko kansaamme alentawaa on, että maan kansalaiset liittywät wieraisiin joukkoihin ja niiden kanssa yhdessä harjoittawat rikosta 
          ja wäkiwaltaa omia kansalaisiansa wastaan. Tämmöinen toiminta on rikos Suomen kansaa wastaan ja samalla rikos itse yhteiskuntajärjestystä wastaan. Ne tähtääwät Suomen Eduskuntaa wastaan, 
          joka on maassamme korkeimman waltiowallan haltijana. Jos tällainen toiminta pääsee woitolle, niin Suomen kansa häwiää pois siwistyskansojen joukosta, Suomen waltio oikeuswaltioiden 
          joukosta.</p>
        <p className="quotationStyle">Isänmaan hätä welwoittaa meitä kääntymään kaikkien Teidän puoleenne. Me toiwomme, että jokainen Suomen kansalainen on nykyhetkenä olewa walmis niihin uhrauksiin, 
          jotka maamme ja kansamme waaranalainen asema saattaa waatia kultakin yksityiseltä ja kaikilta yhteisesti. Kaikkien yhteisten ponnistusten päämääränä tulee olla yksinomaan kansalaisrauhan 
          säilyttäminen. Millään ehdolla ei woi sallia mitään ärsyttäwiä kostotoimenpiteitä eikä minkäänlaista yksityisluontotoista esiintymistä wastoin järjestyswallan määräyksiä.</p>
        <p className="quotationStyle">Kansalaiset! Liittykää kaikki yhteisesti tukemaan kotienne rauhaa, lähimmäistenne henkeä, omaisuutta, henkilökohtaista wapautta ja loukkaamattomuutta. 
          Järjestyksen ylläpitäminen on Suomen kansan itsenäisyyden ja sen tulewaisuuden puolustamista.</p>
        <p className="signature">Suomen Senaatti:</p>
        <p className="signature">P. E. Swinhufwud, E. N. Setälä, Kyösti Kallio, Jalmar Castren, Onni Talas, Arthur Castrén, Heikki Renwall, Juhani Arajärwi, Alexander Frey, E. Y. Pehkonen, 
          O. W. Louhiwuori.
        </p>
        <QuoteEnd className="symbolStyle"/>
        <p>Ylläolewaan hallituksen julistukseen kehoitamme kansalaisia kiinnittämään mitä wakawinta huomiota. Rajumyrsky lähestyy. Isänmaa on waarassa. Maan ja kotimaisen hallituksen suojaksi on 
          jokaisen kansalaisen noustawa. Welwollisuus on täytettäwä. Uhrauksia kysyy tulewa aika, mutta mitkään uhraukset eiwät nyt saa olla liian suuret.</p>
        <p>Meillä on hywiä uutisia, jotka kehoittawat pysymään toiwehikkaina. Ennen pitkää on Suomen itsenäisyys olewa turwattu ja maallemme koittawa aika, jossa wapaus, järjestys ja lakien kunnioitus on 
          wallitsewa.</p>
      </Article>
      <Article titleText="Suojeluskunnat julistetaan hallituksen määräyksiä noudattaviksi järjestyksen ylläpitäjiksi.">
        <h5>Maaherrojen annettawa niille kaikkea kannatusta.<br />— Waatimus wenäläiselle sotawäelle.</h5>
        <p>Sisäasiain toimituskunnan päällikkö, senaattori A. Castrén on lähettänyt kaikille läänien maaherroille seuraawan kirjelmän:</p>
        <p className="quote">Esiintyneestä syystä ilmoitan tiedoksenne, että ne suojeluskunnat, jotka yleisesti tunnetaan walkokaartien nimellä, owat muodostetut hallituksen kehoituksesta ja 
          noudattawat hallituksen määräyksiä. Niiden tarkoituksena on yksinomaan järjestyksen ylläpito ja epäjärjestyksien estäminen, ja on Teidän siinä tarkoituksessa annettawa niille kaikkea tukea 
          ja kannatusta. Jos niiden toiminnassa ilmenee mitään järjestyksenwastaista, on siitä heti tänne ilmoitettawa.</p>
        <p>Samansisältöisen ilmoituksen on sisäasiain toimituskunnan päällikkö lähettänyt myöskin Suomen aluekomitealle, 42:nnen armeijakunnan armeijakomitealle Wiipuriin sekä Turun, Waasan, Oulun, 
          Tornion, Porin, Tampereen, Haminan ja Kotkan toimeenpanewille sotilaskomiteoille.</p>
        <p>Tämän kirjelmän lopussa lisäksi huomautetaan, että ne Suomen kansalaiset, jotka wenäläisen sotawäen toimesta tai sen awustuksella owat wangitut, owat heti päästettäwät wapaiksi.</p>
      </Article>
      <Article titleText="Venäläisten sotajoukkojen täällä harjoittama hirmuvalta.">
        <h5>Senaatti saattaa wastalauseensa tämän johdosta ulkowaltain tiedoksi.</h5>
        <p>Suomen hallitus on Ruotsin, Norjan, Tanskan,  Ranskan, Englannin, Saksan, Itäwalta-Unkarin, Sweitsin ja Kreikan hallituksille lähettänyt seuraawan t. k. 25 p. päiwätyn kirjelmän: </p>
        <QuoteStart className="symbolStyle"/>
        <p className="quotationStyle">Huolimatta siitä, että Wenäjän hallitus on kuluwan tammikuun 4 p. wirallisesti tunnustanut Suomen waltiollisen riippumattomuuden ei wenäläisten sotajoukkojen 
          maastawiemiseen wielä ole tehokkaasti ryhdytty. Päinwastoin ylläpitää Wenäjän hallitus Suomessa edelleenkin lukuisia sotawäenosastoja, jotka samalla kun kuluttawat maan niukkoja 
          elintarpeita, eiwät ainoastaan ole esteenä järjestyksen ja turwallisuuden ylläpitämiselle maassa, waan myöskin, yhteistoiminnassa wäestön lewottomimpien ainesten kanssa, suorittawat 
          murhia, murhapolttoja ja muita ilkitöitä. Erityisen merkityksen saa tämä seikka sen kautta, että näihin rikollisiin tekoihin eiwät osaa ota ainoastaan erilliset, harhaanjohdetut sotilaat 
          tai sotilasosastot, waan että Wenäjän hallituksen täällä olewat edustajat suoranaisesti myötäwaikuttawat tällaisen itsenäiselle maalle sietämättömän olotilan jatkumiseen, sallimalla 
          Wenäjän waltiolle kuuluwien aseiden ja ampumatarpeiden jakamista epäjärjestyksiin osaaottawille kansanjoukoille sekä ehkäisemällä hallituksen määräyksiä noudattawan tehokkaan 
          järjestyswallan muodostamista. Niinpä on Suomen hallitukselle saapuneiden tietojen mukaan Wenäjän hallituksen sota-asiain komissario t. k. 23 p. Wiipuriin sijoitetulle sotawäelle antanut 
          määräyksen riisua aseet kaupungin järjestystä ylläpitämään saapuneilta suojeluskunnilta sekä aseistaa niillä ne työwäen ainekset, jotka näinä päiwinä owat ryhtyneet werisiin 
          joukkolewottomuuksiin mainitussa kaupungissa.</p>
        <p className="quotationStyle">Lopuksi on Helsingissä olewan matruusikomitean taholta, neuwottelujen yhteydessä, hallituksen jäsenille suullisesti ilmoitettu, että täällä olewa wenäläinen 
          sotawäki harrastaa sosialisen rewolutsionin toimeenpanemista Suomessa ja on walmis tämän tarkoituksen toteuttamiseksi aseilla auttamaan wallankumouksellisia joukkoja laillista 
          yhteiskuntajärjestystä ja sitä tukewia suojeluskuntia wastaan.</p>
        <p className="quotationStyle">Kun Wenäjän hallituksen taholta täten noudatettu menettely sisältää törkeän loukkauksen Suomea kohtaan itsenäisenä waltiona, tahtoo Suomen hallitus sen johdosta 
          täten saattaa jyrkän wastalauseensa niiden waltojen tietoon, jotka owat Suomen itsenäisyyden tunnustaneet.</p>
        <p className="centeredStyle quotationStyle">Suomen hallituksen puolesta:</p>
        <p className="signature">P. E. Swinhufwud.</p>
        <QuoteEnd className="symbolStyle"/>
      </Article>
      <Article titleText="Hallituksen waatimus kansankomissarien neuwostolle.">
        <p>Suomen hallituksen puolesta on lähetetty Wenäjän kansankomissarien neuwostolle näin kuuluwa sähkösanoma:</p>
        <QuoteStart className="symbolStyle"/>
        <p className="quotationStyle">Kansankomissarien Neuwostolle.</p>
        <p className="quotationStyle">Pietari.</p>
        <p className="quotationStyle">Wiime päiwinä on useissa paikoissa Suomea sattunut murhia, murhapolttoja sekä joukko lewottowuuksiakin, joihin täällä olewat wenäläiset sotilaat owat 
          osaaottaneet ei ainoastaan suojaamalla epäjärjestyksiä toimeenpanneita kansanaineksia waan jopa suoranaisesti itsekin ryhtymällä ilkiwaltaisuuksiin, joita ilman sotilasten puolelta 
          tapahtunutta awunantoa useissa tapauksissa ei olisi saatu syntymään. Kun on ilmoitettu, että wenäläisten sotilasten tässä tarkoitettu osanotto myöskin nojautuisi sotilaswiranomaisten 
          taholta annettuihin ohjeisiin ja määräyksiin, on Suomen hallitus, katsoen sotilasten tällaisen esiintymisen törkeäksi loukkaukseksi Suomen Kansankomissarien Neuwoston puoleen 
          waatimuksella ryhtyä mitä tehokkaimpiin toimenpiteisiin, jotta sotilasten osanotto wäkiwaltaisuuksiin Suomen asukkaita wastaan, sekä kaikkinainen muukin sekaantuminen maan sisäisiin 
          asioihin tulisi wiipymättä wältetyksi.</p>
          <p className="centeredStyle quotationStyle">Hallituksen Puheenjohtaja</p>
          <p className="signature">Swinhufwud.</p>
        <QuoteEnd className="symbolStyle"/>
      </Article>
      <Article titleText="Hämmästyttäwiä tietoja sosialistien pyrkimyksistä.">
        <h5>Aikowatko he tuhota Suomen itsenäisyyden?</h5>
        <p><span className="accent">Göteborgs Handels- och Sjöfartstidningin</span> kirjeenwaihtaja, joka on täällä haastatellut sosialistien puoluejohdon wasemmiston äärimmäisyysmiehiä, ilmoittaa 
          lehdelleen t.k. 21 pnä.</p>
        <p>Asiantuntewissa piireissä luullaan nyt oltawan selwillä siitä, mihin sosialistien äärimmäinen siipi lopultakin pyrkii. Yhä enemmän ilmaantuu todistuksia siitä, että se aiwan wakawasti 
          suunnittelee wallankumousta bolshewikien malliin ja sen jälkeen antaa sosialistisen Suomen tasawallan liittyä Venäjän tasawaltojen muodostamaan waltakuntaan. Itsenäisyydestä olisi siis 
          tällä taholla luowuttu ja leweä punainen wiiwa wedettäisiin kaiken sen yli, mitä itsenäisyyden hywäksi on tehty. Puolueen anarkistiset ainekset, joiden etunenässä owat punaiset kaartit, 
          esittäwät yhä uhkailewammin waatimuksiaan tilanteen ratkaisemiseksi tähän suuntaan ja näyttää siltä kuin järkewimmät ainekset eiwät woisi kauan wastustaa painostusta.</p>
        <p>Puoluejohdon tähänastinen wastustuksen muodostama sulku woi murtua milloin tahansa ja päästää wallankumouksen wirran waltoinaan wyörymään. Jos niin käy, pelätään tämän kehittywän 
          erittäin wäkiwaltaiseksi ja sen pyörteiden hirwittäwän punaisiksi. Kiihoitusta harjoittawat alhaalta käsin monet yltiöpäät agitaattorit, jotka saarnaawat leppymätöntä luokkawihaa.</p>
        <h5>Bolshewikien toiweet Suomen sosialisteista.</h5>
        <p>Bolshewikien pää-äänenkannattaja Prawda lausuu lauantaina m. m. seuraawat merkillepantawat sanat: „Me emme wähääkään epäile, että jos jo ennen Länsi-Europan köyhälistöä Ukrainan ja Suomen 
          työwäki kukistaisi porwarilliset hallituksensa, niin ne heti liittyisiwät Wenäjän neuwostotasawaltaan.”</p>
      </Article>
      <Article titleText="Punakaartin liikehtiminen Hämeenlinnassa.">
        <p>Wiime lauantaina alkoi Hämeenlinnankin punakaarti liikehtiä. Illalla nähtiin miehiä pienemmissä ryhmissä kulkewan asemalle päin. Täällä asettuiwat he ratapihalle ja radan warrelle 
          kumpaankin suuntaan. Kaikkiaan lienee ollut liikkeellä 30 - 40 miestä. Osalla oli kiwääriä, osa ilman. Samaan aikaan liikkui asemalla pistinkiwääreillä warustettuja sotilaita. Rataa 
          wartioiwat punakaartilaiset poistuiwat aamun koittaessa.</p>
      </Article>
      <Article titleText="Punakaartilaisten taistelusuunnitelmat.">
        <h5>Punakaartilaisjoukot keskitetään Helsingin edustalle.</h5>
        <p>Täkäläisen toimeenpanewan komitean kokouksessa on punakaartin edustaja Turun Iswestijan mukaan pyytänyt sotilailta apua punakaartille porwarien walkokaartia wastaan, joka taistelee muka 
          terroristisin teoin ja salakähmässa hakkaa punakaartilaisia. Sotilaitten olisi lähetettäwä pienempi asestettu joukko-osasto punakaartin pääkortteerin turwaksi, sillä aikaa kuin punakaarti 
          käy awointa ja edullisempaa taistelua walkokaartia wastaan Helsingin ympäristössä, jonne punakaartin muodostetut joukko-osastot aiotaan keskittää. Lisäksi olisi punakaartin saatawa 
          kuularuiskun patruunanauhoja.</p>
        <p>Toimeenpanewa komitea päätti antaa kuularuiskun patruunia, kun ilmoitetaan, paljonko niitä tarwitaan, sillä ehdolla, että punakaarti esittää wallankumouksellisen komitean wahwistamat 
          asiapaperit tämän aseistuksen tarpellisuudesta.</p>
        <h5>Turun punakaarti pyytää tykkejä wenäläisiltä.</h5>
        <p>Turun sosialistien wallankumouksellinen komitea on kääntynyt täkäläisen toineenpanewan komitean puoleen pyytäen, että ins. Ahlbergin tehtaassa Venäjän waltion tilauksesta walmistetuista 
          30 kappaleesta 35 mm. tykkejä, joita Wenäjän hallitus on kieltäytynyt wastaanottamasta, osa luowutettaisiin Turun punakaartin tarpeisiin. Toimeenpanewa komitea antoi sotilasteknillisen 
          jaoston tehtäwäksi ottaa selwää, onko mainitussa tehtaassa tykkejä, jolloin ne kai punaiselle kaartille luowutetaan.</p>
        <h5>Wenäjän sota-asiain komissari lupaa auttaa Suomen punakaartilaisia.</h5>
        <p>Kun Suomen edustajat Pietarissa eilen, koettaessaan saada sowinnollisesti järjestetyksi Wiipurin tapahtumia, kääntyi sota-asiain kansankomissarion Podwoiskin puoleen, ilmoitti tämä 
          hänelle seuraawaa:</p>
        <p>Pietariin saapuneista tiedoista päättäen on sosialinen wallankumous Suomessa alkanut. Wenäjän hallitus on ohjelmansa mukaisesti welwollinen auttamaan Suomen köyhälistöä sen taistelussa 
          Suomen porwaristoa wastaan. Suomeen on komissario lähettänyt apua Suomen punakaartilaisille ja tulee sen tekemään wastakin.</p>
        <p>Tämä on sota-asiain komissarion yksityinen mielipide, mutta oli asia esitettäwä eilen illalla klo 8 pidettäwässä kansankomissarien neuwoston kokouksessa, jossa siitä tehdään 
          wirallinen päätös.</p>
        <h5>Pietarin punakaartilaiset auttamaan wiipurilaisia.</h5>
        <p>Paitsi Wiipurin asemaa on suomalainen punakaarti wallannut Raiwolan, Mustanmäen ja Terijoen asemat sekä koko Wenäjän rajan ja Wiipurin wälisen radan asemat. Suomalaisten punakaartilaisten 
          awuksi on matkustanut Pietarista wenäläisiä punakaartilaisia, kiwääreillä ja kuularuiskuilla asestettuina. Lauwantaita wasten yöllä lähti Suomen rautatieasemalta Pietarista 600 wenäläistä 
          punakaartilaista kuularuiskuineen awustamaan Suomen punakaartilaisia. Wenäläiset punakaartilaiset ilmottiwat matkustawansa Wiipuriin ja jos tarwitaan, Karjalan rataa pitkin Imatraan ja 
          Sortawalaan sekä wieläkin kauemmaksi. Meidän apumme, sanowat punakaartilaiset, on Suomen punakaartilaisile wälttämätön, koska he kärsiwät suuria tappioita suomalaisten walkokaartilaisten 
          wuoksi. Pietarin punakaartilaiset weiwät mukanaan paljon kuularuiskuja.</p>
      </Article>
      <Article titleText="Asemapäällikkö Kylmäsen murha.">
        <p>Toissapäiwänä toimitti Wiipurin kaupunginlääkäri Gadd asemapäällikkö Kylmäsen ruumiinawauksen kunnallis-sairaalassa. Ruumiinawauksessa todettiin, että Kylmänen oli murhattu teräaseella, 
          jolla oli leikattu kaulawaltimo ja kurkkutorwi poikki.</p>
        <p>Punakaartilaisten taholta on wäitetty, että Kylmänen olisi tehnyt itsemurhan leikkaamalla kynäweitsellä kaulawaltimonsa poikki. Lääkärintarkastus on kuitenkin osoittanut, ettei niin 
          ammottawa haawa ole woitu tehdä niin pienellä aseella. Lisäksi on huomattawa, että punakaartilaiset oliwat wangitessaan hänet nuuskinet tarkoin hänen taskunsa.</p>
        <p>Kun asemapäällikkö Kylmäsen sukulaiset wiime perjantaina aikoiwat siirtää hänen ruumiinsa Wiipurin kunnallissairaalan ruumishuoneelta muualle, esti punakaartiosasto sen, ilmoittaen 
          katsowansa ruumiintarkastuksen olleen wajawaisen, koska itsemurhaa ei ollut siinä todettu.</p>
      </Article>
      <Article titleText="Taistelu Säiniön asemalla.">
        <h5>Kaatuneita, haawoittuneita.</h5>
        <p>U. S:lle ilmoitettiin lauantai-iltana Viipurista, että Säiniön aseman paikkeilla, 10 km. päässä Viipurista, oli klo 7 tienoissa syntynyt ankara taistelu suojeluskuntalaisten ja 
          punakaartilaisten wälillä.</p>
        <p>Toisaalta saatujen tietojen mukaan olisi yhteentörmäys siellä tapahtunut suojeluskunnan etujoukkojen ja Pietarin punakaartilaisten kesken. Suojeluskuntalaisten riweistä kerrotaan 
          kaatuneen 1 ja haawoittuneen pari, punakaartilaisten häwiöt oliwat 3 kaatunutta ja useita haawoittuneita.</p>
        <p>Kolmansien tietojen mukaan olisi kaatuneita 2. Taistelu suojeluskuntalaisten ja Wiipurin punakaartilaisten kesken oli aiheutunut siitä, että Pietarista matkalla ollutta sotilasjunaa oli 
          ammuttu radan siwusta, niin että 3 sotilasta haawoittui. Nämä tuotiin Wiipuriin ja siirrettiin siellä sotilassairaalaan.</p>
        <p>Tämän jälkeen lähti Wiipurista pari sataa punakaartilaista, jotka sitten Säiniöllä joutuiwat tappelukseen. Illalla palasi osa punakaartilaisista kaupunkiin. Haawoittuneita lienee myös 
          tuotu kaupunkiin useita. Punaisen ristin osasto lähti senjälkeen taistelupaikalle.</p>
      </Article>
      <Article titleText="Kahakoimiset Etelä-Pohjanmaalla.">
        <h5>Itämeren laiwaston keskuskomitea uhkaa häwittää Waasan kaupungin maan tasalle.</h5>
        <p>Perjantain wastaisena yönä kutsuttiin Itämeren laiwaston keskuskomiteaan sos.-dem. puoluetoimikunnasta pari edustajaa. Sinne lähtiwätkin hrat K. Manner ja E. Haapalainen. Paikalle 
          saapuiwat myöskin senaatin puheenjohtaja, senaattori Swinhufwud ja tri K. G. Idman.</p>
        <p>Sotamiesten edustajat waatiwat senaatin puheenjohtajalta että Etelä-Pohjanmaan suojeluskunnat on riisuttawa aseista, koska ne muka owat harjoittaneet kaikenlaista ilkiwaltaa sotilaita 
          kohtaan.</p>
        <p>Mikäli Hels. Sanomat on saanut tietää, ilmottiwat senaatin edustajat, joihin myöhemmin liittyi senaattori A. Castrén, että senaatti ei tule ryhtymään minkäänlaiseen aseiden riisuntaan, 
          waan kehottaa sekä sotawäkeä että suojeluskuntia lakkaamaan rettelöimisistä, jolloin myöskin kaikki wäkiwaltaisuudet päättywät.</p>
        <p>Keskuskomitean jäsenet oliwat kiihottuneina uhkailleet, että ellei heidän waatimuksiinsa suostuta, niin ammutaan Waasan kaupunki maan tasalle Myöskin muita uhkauksia sateli sotamiesten 
          taholta runsaasti.</p>
      </Article>
      <Article titleText="Pohjanmaan kansa nousee.">
        <p>Suomen Senaatin puheenjohtajalle.<br />Kaikkiin sähkösanomakonttoreihin ilmoitettawaksi. Kopio kaikille Suomen wiranomaisille.</p>
        <p>Venäjän sotawäen huonoimpain ainesten kanssa tehdyt wäkiwaltaisuudet, ryöstöt ja murhat rauhallisia kansalaisia wastaan, joista erittäinkin Wiipurin tapahtumat owat kowasti kuohuttaneet 
          Pohjanmaan wapautta rakastawia talonpoikia, owat saattaneet minut riisumaan aseet wenäläisiltä joukoilta Waasassa, Lapualla, Ylistarossa, Seinäjoella, Pietarsaaressa ja Kokkolassa.</p>
        <p>Elleiwät punakaartilaiset alistu laillisen hallituksen alle, tulewat maan harmistuneet talonpoikaisjoukot, ase kädessä itse tuomitsemaan maan petturit. Aseista riisutuille 5,000:lle 
          sotamiehelle wakuutetaan persoonallinen turwallisuus ja wapautetaan heidät heti, kun sopimus Suomen ja Wenäjän waltain wälillä on saawutettu.</p>
        <p className="signature">Mannerheim s. k.</p>
      </Article>
      <Article titleText="Tilanne Helsingissä.">
        <p>Helsingistä emme wiime aikoina ole saaneet täysin luotettawia tietoja.</p>
        <p>Eilen puolenpäiwän tienoista katkesi puhelinyhteys. Samaten lakkasi puolenpäiwän tienoissa junaliikenne Helsingin ja Riihimäen wälillä.</p>
        <p>Senaatin kohtalosta on ristiriitaisia tietoja. Sunnuntaina aamulla oli katujen kulmauksiin naulattu julistuksia, jossa kehoitettiin ihmisiä wälttämään ulkosalla liikkumista, koska 
          kaduilla saattoi syntyä lewottomuuksia. Mikäli olemme saaneet tietää kului sunnuntaipäiwä kuitenkin lewollisesti.</p>
        <p>Lauantaina ja sunnuntain wastaisena yönä alkoiwat Helsingin punakaartilaiset kerääntyä asemapaikkoihinsa, osa keskittyi Malmin seuduille.</p>
        <p>Myöskin eilinen aamu kului yleensä rauhallisesti. Pankit oliwat suljettuina. Punakaartilaiset oliwat wallanneet säätytalon. Yhteentörmäyksiä ei sattunut. Päiwällä sitäwastoin näyttää 
          eri tahoilla kaupunkia syntyneen kahakoita. Ampumista kuului kaduilla ja pakenewien ihmisten hätähuutoja. Suurempia kahakoita kerrotaan syntyneen rautatien torilla ja Kaartin torilla. 
          Aamulla kerrottiin punakaartilaisten piirittäneen tai pitäneen hallussaan eräitä julkisia rakennuksia. Erityisesti tällaisia rakennuksia mainitaan asemarakennus, senaatin talo, ja 
          pohjalaisten osakuntatalo „Ostrobotnia”.</p>
      </Article>

      <Divider className="dividerStyle" />
      <p className="centeredStyle">Lehti ei ilmesty 30.1 - 29.4.</p>
      <Divider className="dividerStyle" />

      <div className="interTitle">30.4.1918</div>
      <Article titleText="Kehoitus">
        <h5>Hämeenlinnan kaupungin lainkuuliaisille kansalaisille.</h5>
        <p>Kaupunginkomendantti saa täten kehoittaa kaupungin asukkaita täydellä luottamuksella vastaanottamaan saksalaiset joukot. Ne ovat saapuneet Suomen laillisen hallituksen nimenomaisesta 
          pyynnöstä palauttaakseen mahdollisimman nopeasti rauhan ja järjestyksen meillä ja siten pelastaakseen maamme ja kansamme taloudellisesta perikadosta. Minkäänlainen valloitushanke ei 
          kuulu saksalaisten joukkojen ohjelmaan.</p>
        <p>Komendantti saa edelleen saksalaisten joukkojen nimessä kiittää asukkaita erinomaisen ystävällisestä ja sydämellisestä vastaanotosta, joka on tullut niitten osaksi, ja vakuuttaa, ettei 
          enään ole olemassa minkäänlaista vaaraa punakaartin taholta. Vaikkakin pienempiä taisteluita kaupungin läheisyydessä vielä sattuisi, niin tapahtuvat ne ainoastaan pienempien hajallaan 
          olevien vihollisjoukkojen tuhoamiseksi. Minkäänlaista kaupungin pommitusta ei tarvitse lainkaan pelätä, ja älköönkä sentähden minkäänlaista rauhattomuutta syntykö.</p>
        <p>Sotilaallisista syistä on kuitenkin lähimpinä päivinä välttämätöntä, että asukkaat pimeän tultua pysyttelevät sisällä huoneustoissaan; henkilöiden, joitten on toimiensa vuoksi pakko 
          kulkea öiseen aikaan kaduilla, on senvuoksi hankittava itselleen erityinen komendanttihallituksen antama todistus.</p>
        <p>Saattaakseen mahdollisimman nopeasti kaiken vaarallisen ja epäluotettavan punasen kansanaineksen varman katsannon alle, on välttämätöntä antaa sotilaspatrullien lähipäivinä toimittaa 
          tarkastuksia erinäisissä rakennuksissa ja huoneustoissa. Asukkaita kehoitetaan kaikella tavalla neuvoilla ja ilmoituksilla avustamaan näitä patrulleja toimessaan.</p>
        <p>Kaikki asukkaitten aseet ovat viipymättä jätettävät Lääninhallituksen huoneustoon; myöhemmin jätetään nämät ynnä lupatodistus aseen kantamiseen luotettaville henkilöille 
          (Valkoinen kaarti).</p>
        <p>Punasen kaartin erikoiset ampuma- ja elintarvevarastot ovat mahdollisimman nopeasti ilmoitettavat komendanttihallitukselle.</p>
        <p className="centeredStyle">Hämeenlinnassa 27 p:nä huhtikuuta 1918.</p>
        <p className="centeredStyle">Kaupungin Komendantti, vapaaherra</p>
        <p className="signature">von Brandenstein.</p>
      </Article>
      <Article titleText="Hämeenlinnan walloitus.">
        <p>Torstai-iltana alkoi Hämeenlinnaan etelästä päin kuulua kumea tykkien jyske. Kaupungissa liikkuwa huhu kertoi, että saksalaiset oliwat tulleet Leppäkosken sillan yli ja nopeasti 
          läheniwät Hämeenlinnaa. Punasten keskuudessa näytti wallitsewan suuri lewottomuus. Joukkoja, jotka edellisinä päiwinä oliwat osottaneet niskuroimisen oireita lähetettiin yhtenään 
          asemalle ja junat weiwät niitä edelleen Turengin suuntaan. Pimeän tultua tykinlaukaukset waikeniwat.</p>
        <p>Tilanne näytti punasille perin uhkaawalta. Kaupungista oli taisteluun lähetetty kaikki liikenewät taistelukelpoiset joukot. Hattelmalaan johtawaa tietä alettiin kiireesti warustaa ja 
          sijoitettiin sille kuularuiskuja. Asemalla oli tykistö taisteluwalmiina. Kaikesta näkyi, että punaset odottiwat hyökkäystä jo yön kuluessa. </p>
        <p>Waikka punasten johtomiehet huolellisesti salasiwatkin tilanteen waarallisuuden, oli huhu uhkaawasta waarasta kuitenkin jollain tawoin päässyt tunkeutumaan täällä majailewan tuhansiin 
          nousewan pakolaisjoukon korwiin. Ennen pitkää wallitsi näiden keskuudessa täydellinen pakokauhu. Keskellä yötä koottiin tawarat omat ja ryöstetyt, kiireesti kuormiin, hewoset 
          waljastettiin ja pimeydessä wieri yhtenäinen kuormajono kaduilla kaupungista itään johtawalle maantielle. Kauhu tarttui myöskin täällä olewiin punakaarteihin ja ennenpitkää marssi 
          kuormien lomassa kadun leweydeltä asestettuja punakaartilaisia. Pakolaiswirtaa jatkui herkeämättä koko yön.</p>
        <p>Aamulla ryhtyi punasten esikunta peläten nähtäwästi menettäwänsä koko miehistönsä tarmokkaisiin toimenpiteisiin pakolaiswirran tukkeamiseksi. Järjestyksestä otti huolehtiakseen 
          Hämeenlinnaan majoitettu Helsingin miliisikomppania. Idänpäähän johtawalle tielle asetettiin luja wartiosto, joka pidätti kaikki kaupungista aikowat. Tällöin pidätettiin m. m. 
          Hämeenlinnaan kulkeutunut Porin tykkiwäki, johon kuten muihinkin kaartilaisjoukkoihin oli tarttunut pakokauhu.</p>
        <p>Koko aamupäiwän seisoiwat kuormat ja punakaartilaisjoukkueet asemalle johtawalla tiellä odottaen tilaisuutta matkansa jatkamiseen. Rautatien ylikäytäwällä alkoi joukko ryöstää 
          rautatiellä olewia tawarawaunuja.</p>
        <p>Aamulla ilmestyi kaupungin yläpuolelle saksalainen lentokone, joita useana edellisenäkin päiwänä oli kaupungissa wieraillut.</p>
        <p>Taistelu Turengissa uusiintui aamun kuluessa. Punaset, jotka yön kuluessa oliwat koettaneet lujittaa asemiaan, alkoiwat horjua ja ennen pitkää sekasorrossa perääntyä.</p>
        <p>Punasten esikunta alkoi tällöin hätääntyä. Pakolaisille annettiin lupa jatkaa matkaansa. Mikäli kerrotaan, herätti kysymys kaupungin puolustamisesta eri mieliä, lopulta puolustamiseen 
          kuitenkin päätettiin ryhtyä.</p>
        <p>Tykkejä ja kuularuiskuja sijoitettiin kaupunkiin etelästä johtawille teille. Tykkejä asetettiin myöskin itse kaupunkiin, laiwalaiturille, Punasen Ristin lipun suojaaman lääninsairaalan 
          edustalle, rantatorille ja Kuiwansillan läheisyyteen. Kuularuisku sijoitettiin m. m. sillan kaupunginpuoleiseen päähän.</p>
        <p>Hiukan ennen klo 3 alkoiwat ensimäiset tykinlaukaukset kaupungin lähistöllä kumahdella. Äkkiä tärisytti ilmaa waltawa räjähdys. Aseman lähellä ollut punasten ampumatawarawaunu oli 
          lentänyt ilmaan wahingoittaen samalla wieressä olewaa asemarakennusta ja sytyttäen sen palamaan.</p>
        <p>Puolen tunnin kuluessa laukaukset huomattawasti läheniwät ja klo 24 tienoissa ensimäiset shrapnellit putosiwat kaupunkiin. Tästä alkaen alkoiwat tykit jyskyä taajaan. Hetken kuluttua 
          kuului jälleen räjähdys. Puhelinkeskusaseman kohdalla alkoi kohota mustia sawupilwiä. Taloon ei kuitenkaan ollut sattunut shrapnellia, waan oliwat punaset sen räjäyttäneet. Talossa 
          olewille asukkaille, jotka kuin ihmeen kautta pelastuiwat ei räjäyttämisaikomuksesta oltu ilmoitettu mitään. Palokunta riensi heti paloa sammuttamaan. Sammutustöiden kestäessä sai 
          palomestari Kusti Laurela shrapnellin sirusta päähänsä pahanlaisen haawan.</p>
        <p>Klo ½5 tienoissa tykistötuli oli kiihkeimillään. Ilkeästi wiheltäen lensiwät shrapnellit ja granaatit räjähtäen kaupungin yläpuolella. Tykkien jyskeeseen sekottautui kuularuiskujen 
          rätinä.</p>
        <p>Klo 5 tienoissa iski granaatti Hougbergin apteekkiin sytyttäen sen palamaan. Paikalle saapui palokunta ja jonkun werran myös muuta yleisöä ryhtyen sammutustöihin.</p>
        <p>Klo ½6 tienoissa alkoi tykkituli harwentua laaten hetken kuluttua kokonaan. Kuularuiskut rätisiwät wielä edelleen. Wähitellen alkoi niidenkin rätinä waimentua.</p>
        <p>Kun ihmiset uskalsiwat jälleen kadulle huomattiin, että punakaarti oli kaupungista poistunut. Lääninhallituksen yllä liehui walkoinen lippu.</p>
        <p>Hougbergin apteekin ja puhelinkeskiön luona puuhailee ihmisiä sammutustöissä. Aseman seuduilla ja Idänpäästä päin kohoawat paksut sawupilwet.</p>
        <p>Äkkiä näkyy Myllymäestä johtawilla kaduilla kymmenkunta wihertäwiin uniwormuihin ja teräskypäriin puettua miestä. Kiwääri walmiina he eteniwät katua pitkin warowasti. Yleisön waltaa 
          riemastus. Se syöksyy tulijoita wastaan terwehtii heitä ilohuudoin. He owat saksalaisia. Kukitettuina jatkawat sotilaat matkaansa siltaa kohden. Hetken kuluttua saapuu uusia 
          sotilasjoukkoja. Toiset näistä suuntaawat kulkuaan linnaa kohden, jossa on säilytetty satakunta punakaartilaisten wangitsemaa kansalaista. Nämä wapautetaan ja riemukulussa saatetaan 
          kaupunkiin.</p>
        <p>Pommituksesta on kaupunki päässyt werrattain wähäisin waurioin. Paitsi Hougbergin apteekiin oli granaatti sattunut Kansallispankin taloon surmaten täällä neiti M. Tirkkosen sekä 
          haawoittaen pahasti hänen weljentyttöään, joka kuoli seuraawaana aamuna ja rouwa Stenfeldtiä. Samaten iski shrapnelli Birger Jaarlin kadun warrella olewaan Gottlundin taloon, missä 
          haawoittuiwat muuan wenäläinen rouwa ja hänen pieni tyttärensä. Myöskin muutamiin muihin taloihin iski shrapnelli aiheuttamatta kuitenkaan sanottawampia waurioita.</p>
        <p>Pahimmin kärsi pommituksesta lääninsairaala, jonka suojaan punakaartilaiset oliwat sijoittaneet tykkinsä. Rakennuksiin oli sattunut kaksi granaattia sekä muutamia pihamaalle ja 
          lähimpään ympäristöön. Sairaista haawoittui kultaseppä Rantonen menettäen toisen kätensä. Ikkunat kaikki pirstoutuiwat.</p>
        <p>Illalla wielä raiwosi tuli asemalla. Tulen uhriksi joutui myöskin muutamia rautatiewaunuja, joissa oli ampumatarpeita ja punakaartien ryöstötawaraa.</p>
        <p>Aseman takaisista huwiloista paloi 5 perustuksiaan myöden. Wielä suurempaa wahinkoa tuli teki Idänpäässä. Täällä paloi kaikkiaan 15 rakennusta. Kaupungista lähtiessään punakaartilaisille 
          tuli niin kiire, että heiltä jäi kaksi tykkiä ja muutamia kuularuiskuja.</p>
        <p>Idänpäässä ja sen kautta kulkewalla maantiellä oli tykki ja kuularuiskutuli tehnyt hirweätä jälkeä. Kaatuneita makasi pitkin tien warsia paikottain aiwan röykkiöittäin. Maantiellä oli 
          surmansa saaneita hewosia, ajoneuwoja joissa oli kaikenmoista tawaraa. Jonkun matkaa Idänpään kylästä oli maantien wieri täynnään kumoontuneita ajoneuwoja, hewosia ja punakaartilaisten 
          ruumiita. Röykkiössä oli myöskin punasten jättämä tykki, kuularuiskuja, kiwäärejä, patruunalaatikoita y. m.</p>
        <p>Hämeenlinnasta saaduista sotasaaliista ei meillä wielä ole tarkempaa tietoa, mutta on se kaikesta päättäen hywin huomattawa.</p>
      </Article>
      <Article titleText="Hirmuwallan päiwiltä Hameenlinnassa.">
        <h5>I</h5>
        <p>Kapinan mainingit alkoiwat Hämeenlinnassa warsinaisesti tuntua maanantai iltana, jolloin paikkakunnalla olewat wenäläiset sotilaat lupauksistaan huolimatta waltasiwat puhelinkeskiön, 
          antaen sen senjälkeen punakaartin käytettäwäksi.</p>
        <p>Samana iltana oli H:linnan sos.dem. kunnallisjärjestöllä kokous, jossa oli esillä kysymys lakkoon ja wallankumousseikkailuun yhtymisestä. Mikäli kerrotaan oli keskustelu warsin 
          myrskyisää. Paikkakunnan työwäestön runsas enemmistö oli jyrkästi seikkailuun yhtymistä wastaan. Kokouksessa ei punakaartin taholta säästetty uhkauksia, m. m. uhkailtiin, että ellei 
          Hämeenlinna taiwu on Toijalassa ja Riihimäellä walmiina tuhatkunta punakaartilaista, jotka täälläkin panewat asiat heidän waatimalleen tolalle.</p>
        <p>Tiistaina aamulla saapui kaupunkiin junalla Turusta n. 30 punakaartilaista Hyrskymurron johdolla. Ensi töikseen repi tämä joukko Raatihuoneen owelle naulatun kenraali Mannerheimin 
          tiedonannon wapaustaisteluun nousseiden Pohjanmaan suojeluskuntain woitoista. Senjälkeen alettiin kaupungissa pitää kiiwaita neuwotteluja, joihin eiwät kuitenkaan kaupungin työwäen 
          laajat kerrokset ottaneet osaa, mutta sensijaan wenäläiset sotilaat. Neuwottelujen tuloksena oli, että paikkakunnan punakaarti turkulaisten ja wenäläisen sotawäen tukemana päätti ryhtyä 
          aktiiwisiin toimiin.</p>
        <p>Klo 2 aikaan päiwällä marssikin yhdistynyt punakaartilaisjoukko wenäläisin kiwäärein asestettuna Suomalaisen seuran huoneustolle, joka piiritettiin. Punakaartilaiset tunkeutuiwat 
          sisälle pannen toimeen kotitarkastuksen. Mitään ei löytynyt. Täältä marssi punakaartilaisjoukko A. Gust. Skogsterin liiketalolle. Kiwäärit ja rewolwerit ojennettuina tunkeutuiwat 
          kotitarkastajat sisälle. Sisälle päästyä nuuskittiin kaikki lokerot ja liikkeen henkilökunta joutui ruumiintarkastuksen alaiseksi. Eräs owi, jonka awaimia ei kyllin kiireesti löytynyt, 
          särettiin mieswoimalla. Saalis supistui liikkeen ruutikaupasta tawattuun kymmenkuntaan haulikkoon.</p>
        <p>Tämän jälkeen „kaarti” alkoi wallata julkisia laitoksia. Ensiksi wallattiin järjestyslaitos. Sisälle tunkeutui punakaartilaisjoukkue kiwäärit ojennettuina kieltäen ampumisen uhalla 
          ketään laitoksessa ollutta liikahtamasta. Saapuwilla oli m. m. kaupungin w. t. poliisimestari, sosialistinen kansanedustaja H. Wälisalmi. Kaikki huoneustossa olleet henkilöt, m. m. 
          edustaja Wälisalmi, pidätettiin ja saiwat he olla wangittuina useita tunteja. Kuulustelua toimitti jonkunlainen tutkintokomitea, jonka kuulusteltawiksi kaikki pidätetyt joutuiwat. 
          Järjestyslaitoksen miehistön keskuudessa toimitettiin karsinta ja kaikki punakaartia wierowat ainekset poistettiin, osan erotessa wapaasta tahdostaan.</p>
        <p>Raatihuoneen ja järjestyslaitoksen wallattuaan hyökkäsiwät punakaartilaiset lääninhallitukseen. Ase kädessä pakotettiin wirkailijat täältäkin poistumaan. Kuwernööri pani 
          punakaartilaisten waltausta wastaan ankaran wastalauseensa.</p>
        <p>Tämänjälkeen alkoi kaduilla oikea hirmuwalta. Punakaartilaisia asettui paljastettu rewolweri tai kiwääri kädessä katujen kulmauksiin. Wenäläisiä sotilaspatrulleja liikkui kaikkialla ja 
          ratsumiehiä laukkasi pitkin katuja. Rauhallisia ohikulkijoita pysäytettiin, rewolwereilla tai kiwääreillä uhaten komennettiin kädet ylös ja tarkastettiin ruumista myöden. 
          Punakaartilaisten uhkaawat eleet eiwät kohdistuneet ainoastaan miehiin, myöskin naisia ja pieniä lapsia kohden tähtäiltiin rewolwereilla ja kiwääreillä, ärjyttiin ja lausuttiin 
          kaikenlaisia uhkauksia. Kaduilla liikkuminen oli perin waarallista jo senkin wuoksi, että punakaartilaiset yleensä oliwat tottumattomia aseitaan hoitelemaan. Useita henkilöitä pidätettiin 
          ja raahattiin järjestyslaitoksen wankikomeroihin. Täällä saiwat useat kansalaiset oleskella useampia tunteja, toiset samassa kopissa warkaiden ja muiden pahantekijäin kanssa. Kohtelu oli 
          yleensä huonoa. Päälliköt kyllä koettiwat jonkun werran teroittaa alaisiaan noudattamaan inhimillisyyttä käytöksessään, mutta kehoitus kaikui enimmäkseen kuuroille korwille. Wankeja 
          solwaistiin ja uhkailtiin rewolweja ojennellen.</p>
        <p>Hämärtäessä naulattiin katujen kulmiin julistuksia, joissa ampumisen uhalla kiellettiin kaduilla liikkuminen klo 9 jälkeen illalla.</p>
        <p>Kun suojeluskunnalla paikkakunnalla majailewan werrattain suuren sotilasmäärän ja maaseudun järjestymättömyyden wuoksi olisi toiminnassaan ollut wähän menestymismahdollisuutta oli 
          päätetty, että sen oli poistuttawa kaupungista ja koetettawa nostaa Hämeen maaseutu maan ja wapauden suojaksi. Yön pimeydessä hiipiwat uljaat pojat kiwääri mukanaan punakaartilaisten ja 
          wenäläisten muodostamain saartoketjujen läpi kaupungista. Kaupungista päästyä suojeluskuntalaiset kokoontuiwat jälleen ryhmiin ryhtyen tehtäwäänsä täyttämään.</p>
        <p>Ensimäinen yö kului yleisen lewottomuuden wallitessa. Mitään erinomaisempaa ei kuitenkaan sattunut.</p>
        <p>Keskiwiikkoaamuna liikkui kaduilla lukuisasti kiwäärein asestettuja punakaartilaispatrulleja. Sotilaita näkyi wähemmän. Kaduilla saattoi hiukan wapaammin liikkua. Punakaartilaisten 
          toiminta suuntautui nyt pankkeihin, joiden awainta alettiin waatia kaartin haltuun. Osan he saiwatkin, mutta Suomen pankin kassaholwin, jonne oli huomattawia summia talletettu, awaimet 
          onnistui pankinjohtaja B. Sundgrenin wiedä mukanaan kaupungista poistuessaan. Pankkien owille asetti punakaarti wartioita, jotka eiwät ainakaan ilmeiltään ja ulkomuodoltaan herättäneet 
          erikoista luottamusta.</p>
        <p>Päiwän kuluessa pidätettiin edelleen useita henkilöitä. Useampituntisen wankinaolon ja kuulustelun jälkeen toiset laskettiin wapaaksi, toisten jäädessä edelleen wankisäiliöihin.</p>
        <p>Tämänjälkeen kaupunki alkoi saada wallankumouksellisen leimansa. Raatihuoneen yllä liehui punanen lippu. Raatihuoneen oli punakaarti ottanut päämajakseen, paitsi sen esikuntaa sijaitsi 
          täällä myöskin tuomioistuin ja erinäisiä toimistoja.</p>
        <p>Kaupungista sai poistua wain kaartin antamilla lipuilla. Samaten asetti punakaarti erityisen pankkiwaltuuskunnan, jonka luwalla ainoastaan saattoi pankkitalletuksia nostaa sittenkin 
          suorittaen huikeita weroja. </p>
        <p>Hämeenlinnan punakaartin lisäksi, joka lukumäärältään oli wähäinen saapui maaseudulta ja myöskin muilta paikkakunnilta punakaartinosastoja. Elatuksensa saiwat nämä joukot tekemällä 
          maaseudulle pakkoluowutusretkiä. Maaseudulta laahattiin joka päiwä useita kuormallisia lihaa, jauhoja, siemenwiljaa, woita, juustoa. Juustoa ja woita saatiin huomattawampi määrä Parolan 
          meijeristä, mistä anastettiin Hämeeenlinnan elintarwelautakunnan ostamat 42 juustoa. Myöskin usea sika sai heittää henkensä punakaartilaisten herkutteluhalun tyydyttämiseksi. Hewosia 
          otettiin taloista ja kartanoista keneltäkään lupaa kysymättä.</p>
        <p>Muuten oli elämä ainakin kuin piiritetyssä kaupungissa, kenties muutamissa suhteissa wielä waikeampaa. Tietojen saanti muusta maailmasta oli perin waikeata. Huhuja liikkui jos 
          jonkinlaisia, milloin toiwoa herättäwiä, milloin taas masentawia. Punakaartin wallankumouskomitea naulautti kulmiin julistuksen, jossa wastawallankumouksellisten tietojen wäärien huhujen 
          lewittäjät uhattiin rangaista wallankumouksen kaikella ankaruudella. Walwonta tässä suhteessa meni niin pitkälle, että ihmiset kaduilla estettiin toistensa kanssa keskustelemasta.</p>
      </Article>






      <br></br>
      <a className="hyperLink" href="https://digi.kansalliskirjasto.fi/sanomalehti/titles/0356-2751?display=THUMB&year=1918">Linkki vuosikertaan 1918</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Kohti sisällissotaa</title> // metadata

export default CivilWarPage 