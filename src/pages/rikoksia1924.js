import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import "../styles/base/global.css"

import Divider from "../assets/divider.svg"
import SubDivider from "../assets/sub-divider.svg"



const Crimes1924Page = () => {
  return (
    <Layout titleText="Hämeen Sanomat, 1924">
      <h2>Rikoksia Hämeenlinnasta ja lähiseudulta</h2>
      
      <Divider className="dividerStyle" />
      <h3>Torstai, 3.1.1924</h3>
      <Article titleText="Tappelu Lammilla.">
        <h5>Kolme miestä saanut haawoja.</h5>
        <p>Kun toisena joulupäiwänä Lammin Porraskosken työwäenyhdistys piti iltamaansa Porraskosken työwäentalolla, syntyi siellä kahden miesjoukon wälillä tappelu, missä käytettiin aseina puukkoja ja halkoja. Wanhoja wihoja 
          selwitellessään sai tappelussa työmies Eino Laakso puukosta haawan oikeaan käsiwarteensa, niin että siitä katkesi waltimo ja haawoittunut oli tuotawa Hämeenlinnan lääninsairaalaan hoitoa saamaan. Sitä paitsi sai 
          tappelussa pari muutakin miestä pienempiä haawoja.</p>
        <p>Tappelun johdosta on toimitettu poliisitutkinto, jota ei wielä ole päättynyt. Toistaiseksi ei myöskään ole ketään pidätetty.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Perjantai, 4.1.1924</h3>
      <Article titleText="Jokiniemen murha Jokioisissa.">
        <h5>Murhaaja Koiwula tuomittu 3 w:ksi kuritushuoneeseen.</h5>
        <p>Kuten olemme kertoneet, tapahtui joulukuun 12 p:nä Jokioisten Latowainiossa raaka murha, jonka uhriksi joutui talollisenpoika Siwart Jokiniemi. Murhajuttu oli keskiwiikkona esillä Humppilan wälikäräjillä. Oikeus tuomitsi 
          murhaajan, talollisenpoika Niilo Koiwulan 3 wuodeksi kuritushuoneeseen sekä menettämään kansalaisluottamuksen 6 wuodeksi. Tämän lisäksi welwoitettiin K. maksamaan murhatun kolmelle alaikäiselle lapselle 50 mk. kuukaudessa 
          kullekin niin kauan kuin he täyttäwät 17 wuotta.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Lauantai, 5.1.1924</h3>
      <Article titleText="Miestappo Urjalassa.">
        <h5>Eräs palstatilallinen isketty puukolla kuoliaaksi.</h5>
        <p>Uuden wuoden päiwän iltana tapahtui Urjalassa lähellä Annulan kylää pahoinpitely, jonka uhriksi joutui palstatilallinen Wihtori Saari. Saari oli erään Kalle Ahon (Perhon-Kallen) seurassa, ja jostakin syystä oli miesten 
          kesken syntynyt riita, jolloin Aho lõi Saarta puukolla reiteen ja kupeeseen, niin että lyöty kuoli Urjalan sairaalassa saamistaan haawoista t.k. 2 p:n iltana. Sekä lyöjä oliwat tunnetut kumpikin siiwoiksi miehiksi, niin että 
          kysymyksessä olewa murha on luettawa epäilemättä wäkijuomien tiliin.</p>
        <p>Saari jätti jälkeensä waimon ja 4 lasta, joista nuorin on wasta 3 kk. Aho, joka on pidätetty, on sen sijaan naimaton.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Tiistai, 8.1.1924</h3>
      <Article titleText="Tammelan wälikäräjät.">
        <SubDivider className="dividerStyle" />
        <p>Tammelan wälikäräjillä tuomittiin työm. Wihtori Ruoko Forssasta kotirauhan rikkomisesta, pahoinpitelystä ja wäkisin makaamisesta 3 wuodeksi 4 kuukaudeksi kuritushuoneeseen. Osallisena edellämainittuihin rikoksiin tuomittiin 
          työm. Toiwo Grönlund 1 wuodeksi 8 kuukaudeksi kuritushuoneeseen. Sitäpaitsi tuomittiin Ruoko maksamaan Mariana Waltoselle aiheuttamasta wahingosta, kiwusta y.m. sekä lääkärinkuluja yhteenssä 830 mk. ja kuluja 100 mk.</p>
        <SubDivider className="dividerStyle" />
        <p>Kauppias Saarenheimon Forssasta, konkurssipesän walwojaksi määrättiin waratuomari Armas Kataja Turusta. Welkojain kuulustelu tapahtuu maaliskuun 17 pnä.</p>
        <SubDivider className="dividerStyle" />
        <p>Naisten kotiteollisuusyhdistys waati kauppias Hjalmar Rinnalta satawiaan sekä hänen saattamistaan konkurssitilan. Pesän walwojaksi määrättiin waratuomari A. Leino Turusta. Welkojain kuulustelu tapahtuu t.k. 24 pnä.</p>
        <SubDivider className="dividerStyle" />
        <p>Maria Michelsson tuomittiin näpistelystä 150 markan sakkoon.</p>
        <SubDivider className="dividerStyle" />
        <p>Käräjillä oli wielä esillä 18 juopumus- ja kieltolakirikosjuttua.</p>
        <SubDivider className="dividerStyle" />
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Sunnuntai, 13.1.1924</h3>
      <Article titleText="Raaka puukotus.">
        <h5>Juopunut roisto puukottanut eilen illalla kahta iäkästä miestä.</h5>
        <p>Raaka puukotus tapahtui eilen illalla klo ½ 6 tienoissa Lääninsairaalan kohdalla. Kun ent. pika-ajuri W. Mollberg ja kruununluotsi Oksanen kulkiwat mainitun sairaalan kohdalla tuli heitä wastaan juopunut huligaani, joka 
          sanaakaan sanomatta iski edellistä puukolla käsiwarteen. Kun Oksanen alkoi roistoa moittia tämän raakamaisesta menettelystä iski huligaani häntäkin puukolla wasempaan käsiwarteen. Tämän jälkeen roisto iski wielä kerran 
          Mollbergia tälläkin kertaa käsiwarteen. Molemmat puukotetut lähtiwät heti lääninsairaalaan, jossa heidät sidottiin. Oksasen haawa oli liewempi, joten hänet päästettiin kotiin. Mollbergin tila sitä wastoin on liiallisen 
          werenhukan takia huononlainen. Toiweita paranemisesta kuitenkin on.</p>
        <p> Kumpikaan puukotetuista, jotka owat jo iäkkäitä miehiä, eiwät tunne puukottajaa. Poliisi on kuitenkin hänen jäljillään ja toiwottawasti roisto saa raakalaisteostaan ansaitsemansa rangaistuksen.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Tiistai, 15.1.1924</h3>
      <Article titleText="Huligaanit jatkawat mellastustaan kaupungissamme.">
        <h5>Jälleen rauhalliset matkaajat hengenwaarassa.</h5>
        <p>Wiime sunnuntai-iltana läksi kaksi hämeenlinnalaista herrasmiestä pika-ajurilla kaupungista tarkoituksella kulkea Ojoisten wirkatalon ohitse Hämeenlinnan maalaiskunnan Wuorentaan kylään. Linnanniemellä hyökkäsi heidän 
          kimppuunsa äkkiarwaamatta 3-miehinen huligaanisakki, johtajana tunnettu pirtutrokari Paawo Wuorela Hämeenlinnan maalaiskunnasta. Röyhkeällä tawalla turhaan waadittuaan ensin matkaajilta paperosseja ja näiden yhä waan 
          jatkaessa matkaansa, käänsi roistosakki hewosensa ja ajoi matkaajat kiinni kääntäen hewosensa maantielle poikkipuolin toisten eteen, joten näiden matkan täytyi keskeytyä. Silloin mainittu Wuorela reestänsä hypäten ja 
          rautakettingeillä uhaten waati jälleen paperosseja, mutta kun hänelle ei niitä sittenkään annettu, weti tämä pomppanja taskusta puukon tai tikarin, yrittäen sillä lyödä sitä matkaajista joka tiukimmin oli sanonut, että 
          paperosseja ei moisella tawalla esiintywille miehille anneta. Tämän aseettomana täytyi lähteä pakoon juosten läheiseen puutarhuri Anderssonin asumukseen, josta hän pyysi telefoonitse apua poliisilaitokselta. Jälelle jääneen 
          matkaajan kimppuun yritti samainen Wuorela sen jälkeen, mutta hänen towerinsa hillitsi häntä lausuen, ettei se mies ollut paha mies, waan se toinen, joka oli pakoon päässyt. Samaan myllerykseen joutui myös muuan wanginwartija, 
          jota Wuorela syyttä suotta iski kettingeillänsä. Pahempia wälttääksensä täytyi hyökkäyksen alaisiksi joutuneiden henkilöiden kaikkien pyrkiä pakoon, ja kiirehtiwät he edellä mainitun puutarhuri Anderssonin asuntoa kohti. 
          Pihamaallansa kutsui puutarhuri Andersson kaikki miehet asuntoonsa, jolloin ulko-owi suljettiin, roistojen jäädessä ulkosalle metelöimään. Aikansa metelöityään roistot lähtiwät matkaansa kulkien Ojoisten wirkataloa kohti.</p>
        <p>Eilen päiwällä tapasi toinen ensiksi mainituista herrasmiehistä Wuorelan poliisikamarin edustalla käwelemässä kahden muun miehen kanssa, jotka mahdollisesti oliwat hänen edellisiltaisia towereitaan, ja toimitti Wuorelan 
          pidätetyksi. Asiasta tulee oikeusjuttu.</p>
      </Article>
      <Article titleText="Hämeenlinnassa tapahtunut puukotus.">
        <h5>Roisto lienee saatu pidätetyksi.</h5>
        <p>Kuten sunnuntaina kerroimme, puukotettiin täällä lääninsairaalan kohdalla wiime lauantai-iltana klo ½ 6 ajoissa ent. Pika-ajuri W. Mollbergia ja kruununluotsi Oksasta. Samana iltana pidätti poliisi wielä puukotuksiin 
          syyllisenä työmies Eino Aleksi Salmisen Hattulan pitäjän Metsänkylästä. Kadulta löydettiin puukko, minkä pidätetty kyllä tunnistaa omakseen, mutta sanoo olleensa siksi paljon juowuksissa, ettei muista tapauksesta mitään. 
          Kaiken todennäköisyyden mukaan lienee Salminen kuitenkin puukotukset tehnyt.</p>
      </Article>
      <Article titleText="Aleksander Nowoschiloff saanut tuomionsa.">
        <h5>Tuomittu yhteensä 3 w. 2 kk. kuritushuoneeseen.</h5>
        <p>Raastuwanoikeuden eilisessä istunnossa oli esillä juttu joutomies Aleksander Nowoschilloffia wastaan Wanajan Kankaantakaa hänen tekemistään warkauksista. Antamallaan päätöksellä tuomitsi raastuwanoikeus wastaajan pidettäwäksi 
          toiskertaisesta murtowarkaudesta 1 w. 1 kk. kuritushuoneessa, toiskertaisesta warkaudesta 10 kk. kuritushuoneessa ja murron uusimisesta 1 w. 1 kk. kuritushuoneessa eli yhteensä pidettäwäksi,kun rangaistuksiin yhdistetään 
          wastaajalle wiime joulukuun 27 päiwä Wanajan kihlakunnan tuomitsema 1 w. 1 kk. kuritushuonerangaistus toiskertaisesta warkaudesta, 3 w. 2 kk. kuritushuoneessa sekä menettämään kansalalaisluottamuksensa 5 wuodeksi.</p>
      </Article>
      <Article titleText="Mieltäjärkyttäwä weriteko Hämeenlinnassa.">
        <h4>Mustasukkaisuuden aiheuttaman mielenhäiriön wallassa mies yrittää surmata waimonsa, 3 lastaan ja lopuksi itsensä.</h4>
        <h5>Werityön uhreista 10-wuotias poika kuollut. - Myös toisen tila huono.</h5>
        <p>Klo 2 aikaan eilistä wastaan yöllä tuli Myllymäen wartiopaikalla olewan poliisin luo Myllymäessä asuwa kiwityömies Hietanen ilmoittaen, että Myllymäessä Läntisen Torikadun 11:ssä asuwan muurari Kalle Ekholmin waimo oli tullut 
          hänen asuntoonsa ja ilmoittanut, että hänen miehensä oli häntä pahoinpidellyt. Poliisi ja paikalle sattunut ylikonstaapeli lähtiwät heti Ekholmin asuntoon, jossa heitä kohtasi kaamea näky. Keittiön lattialla makasi werissään 
          ja tiedottomassa tilassa Ekholmin tyttö sekä keittiön wiereisessä kamarissa lattialla niinikään werissään ja tiedottomina toinen pojista ja sängyssä toinen. Itse Ekholm oli tiedottomassa tilassa saman kamarin sängyn ja muurin 
          wälissä nuora kaulassaan henkitoreissaan. Tämän lisäksi oli Ekholmin waimo mainitun Hietasen asuntoon päästyään waipunut tiedottomaan tilaan. Heti tapahtuman jälkeen wietiin Ekholm poliisilaitokselle ja muut lääninsairaalaan, 
          missä nuorin pojista Olawi kuitenkin klo 5 aikaan aamulla heitti tuntoihinsa tulematta henkensä.</p>
        <p>Eilen toimitetussa alustawassa kuulustelussa on tämän kaamean werityön tekijä, muurari Kalle Konstantin Ekholm kertonut, että hän wiime syyskuun lopussa muutti Tampereelta Hämeenlinnaan perheineen asumaan. Wiime wuoden 
          maaliskuusta alkaen on hän sairastanut jonkinlaista hermotautia, joka on häntä waiwannut. Kuluwan tammikuun 5:nnen päiwän wastaisena yönä, ollessaan työssä Kauttuan tehtaalla, oli hän nähnyt unta, että hänen entisiä 
          työtowereitaan käy hänen waimonsa luona wieraisilla. Samana aamuna oli hän saanut myös hermokohtauksen ja alkanut luulotella, että hänen waimonsa on hänelle uskoton, minkä wuoksi hän wielä mainittuna 5:ntenä päiwänä matkusti 
          perheensä luo ja tiedusteli asiaa waimoltaan, joka kuitenkin kielsi niin olewan, eikä hän siihen itsekään uskonut. Tästä huolimatta tämä ajatus kiusasi häntä taukoamatta, ollen hän yhä uudestaan pakoitettu tiedustelemaan asiaa 
          waimoltaan, minkä johdosta tämä loukkaantuikin, mutta mitään riitaa ei kuitenkaan heidän wälillään tästä syntynyt. Wielä wiime sunnuntainakin hän useaan kertaan uudisti kysymyksensä, lähtien sitten illalla klo 8 aikaan waimonsa 
          ja poikansa Olawin kanssa ulos, mistä he palasiwat n. 1/2 tunnin kuluttua ja, juotuaan teetä sekä lapsien leikittyä, he meniwät klo 10 ajoissa illalla nukkumaan. Nyt ei Ekholm kuitenkaan saanut unta, minkä wuoksi hän jonkun 
          ajan kuluttua nousi ottamaan hermontippoja, joita nautittuaan hän nukahtikin 1/2:ksi tunniksi. Herättyään häntä yhä edelleen waiwasi tuo edellämainittu ajatus waimonsa uskottomuudesta, minkä wuoksi hän päätti, koska elämä näytti 
          niin toiwottomalta, tappaa sekä itsensä että waimonsa ja lapsensa. Samalla hän muisti, että keittiön owipielessä lattialla oli wasara, millä hän päättikin tekonsa suorittaa. Liikutettuaan itseään sängyssä, hänen waimonsa heräsi, 
          jolloin hän kysyi tältä jälleen: „Oletko pettänyt minua?” Tällöin oli Ekholmin waimo kieltänyt sellaista tehneensä ja sytyttänyt lamppuun tulen. Nyt nousi myös Ekholm wuoteesta, haki wasaran, jolla sitten - kuten muistelee - 
          lõi kaksi kertaa ulospyrkiwää waimoaan päähän. Mutta iskuista huolimatta tämä kuitenkin pääsi ulos, juosten wiereisen talon pihamaalle, jonne Ekholm häntä seurasi. Täällä löi hän sitten wielä waimoaan useita kertoja päähän, 
          kunnes tämä tuupertui, minkä jälkeen Ekholm palasi sisälle, sulkien ulko-owen perässään. Melusta oliwat sisällä olleet lapset kuitenkin heränneet ja juoksiwat itkien isäänsä wastaan, puhuenkin joku lapsista hänelle, mutta ei 
          hän muista sanoja. Sisällä hän sanoi lapsille, että nyt täytyy kaikkien kuolla, jolloin hän enempää puhumatta lõi wanhinta joukosta wasaralla päähän, kaatuen lyöty walittaen lattialle. Tämän jälkeen lõi hän nuorinta poikaa 
          Olawia ja sitten tyttöä, joka oli päässyt pujahtamaan keittiöön. Kun lapset waikeroiwat, lõi hän näitä wielä useita kertoja eli siksi, kunnes he lakkasiwat eiwätkä enää itseään liikuttaneet, minkä wuoksi hän luuli heidän 
          kuolleen. Sitten meni hän makuuhuoneen wiereiseen kamariin, minkä piirongin laatikosta otti lompakkonsa, laittaen sen kamarin pöydälle ja samalla kirjoitti kirjelipun, jossa pyysi, että heidät kaikki jälkeen jätetyillä waroilla 
          haudattaisiin Tampereen hautausmaalle. Tämän jälkeen palasi hän takaisin makuuhuoneeseen, jonka uunin pellistä hän otti nuoran, minkä sitten sitoi sängyn jalkaan, aikoen hirttää itsensä. Mutta nuora oli kuitenkin lyhyt, jonka 
          tähden hän sitoi sen tiukkaan kaulansa ympäri ja käsin koetti kuristaa itsensä, mennen siinä tiedottomaan tilaan, niin että wasta poliisilaitoksella tuli tajuihinsa.</p>
        <p>Edellisen lisäksi on Ekholm kuulusteluissa kertonut, että perhesuhteet owat olleet mitä parhaimmat kaiken aikaa ja samoin taloudellinen tila, joten hän itse katsoo tekonsa aiheutuneen hänelle ominaisesta luulosairaudesta. 
          Kuulusteluissa on hän waikuttanut hywin murtuneelta ja sanonut, ettei ole olemassakaan sellaista rangaistusta, mikä hänelle olisi kyllin riittäwä.</p>
        <p>Ekholm on syntynyt w. 1890 ja on kirjoissa Tampereella, mistä hän, kuten edellä on mainittu, wiime syksynä muutti Hämeenlinnaan, ja on hän ollut naimisissa wuodesta 1911 lähtien. Hänen waimonsa Katri Maria on syntynyt w. 1893. 
          Lapsista on wanhin poika Teodor 12-wuotias ja tyttö Ester 7-wuotias. Surmansa saanut Olawi oli 10-wuotias.</p>
        <p>Tiedustellessamme eilen illalla lääninsairaalasta pahoinpideltyjen tilaa, ilmoitettiin meille, että Ekholmin waimon tila on parempi, mutta sen sijaan molemmat lapset owat hywin heikot, niin että lienee epäwarmaa, jääwätkö he 
          eloon. Muuten mainittakoon, että Ekholm ehti iskeä waimoonsa kokonaista 11 haawaa.</p>
        <p>Mitä wielä Ekholmiin tulee, niin on lääkäri arwellut teon tapahtuneen äkillisessä mielenhäiriössä, sillä wäkijuomia ei hän ollut nauttinut. Kuulustelussa on hän maininnut, että hän on kyllä 20-wuotisesta lähtien wäkijuomia 
          nauttinut, mutta aina kohtuullisessa määrässä eikä nyt pidempään aikaan.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Keskiviikko, 16.1.1924</h3>
      <Article titleText="Myllymäen werityö.">
        <h5>Uhrien tila.</h5>
        <p>Maanantain wastaisena yönä Myllymäessä kaamean werityön uhreiksi joutuneitten tilan eilen illalla lääninsairaalasta tiedustellessamme saimme tietää, että Ekholmin tyttö Ester edelleenkin on tajuttomassa tilassa. Sen sijaan 
          poika Teudor on nyt täysin tajuissaan, mutta on hänenkin tilansa edelleen heikko, niin ettei mitään warmaa kummankaan eloonjäämisestä ole. Ekholmin waimon tila sen sijaan olosuhteisiin katsoen on parempi.</p>
        <h5>Ekholm passitettu lääninwankilaan.</h5>
        <p>Eilen passitettiin Ekholm, jota on säilytetty täkäläisessä etsiwässä osastossa, Hämeenlinnan lääninwankilaan odottamaan jutun oikeudellista käsittelyä. Juttu tulee esille Hämeenlinnan raastuwanoikeudessa ensi wiikolla.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Perjantai, 18.1.1924</h3>
      <Article titleText="Warkauksia Riihimäellä.">
        <h5>Matkustajalta wiety matkalaukku tawaroineen.</h5>
        <p>Eilistä wastaan yöllä Helsingistä Rajajoelle matkalla olewan junan seisoessa Riihimäen asemalla warastettiin toisen luokan matkustajawaunusta Wiipurin pitäjästä kotoisin olewan tilallisen pojan Mauri Lagerstamin matkakalaukku 
          ja naulasta harmaa pomppatakki, tawaroiden omistajan ollessa asemarawintolassa. Laukussa oli miehen puku, aluswaatteita ja laukkuja. Yhteensä nousee warastetun tawaran arwo 3,000 mk:aan. Varkaasta ei ole tietoa.</p>
        <h5>Nukkuwalta warastettu päällystakki ja lompakko.</h5>
        <p>Toissa iltana oli kauppias J. E. Anttila, kotoisin Wehkalahdelta, Riihimäen asemalla tawannut erään nuoren miehen, joka ryhtyi hänen kanssaan puheisiin ja Riihimäkeä tuntewana tarjoutui etsimään matkustajakotia, minne Anttila 
          woisi yöpyä. Kun yöhetki oli kuitenkin myöhäinen, wei maimittu mies Anttilan erääseen kauppakadun warrella olewaan saunaan, minkä pukuhuoneeseen he sitten jäiwät nukkumaan. Kun kauppias aamulla heräsi, huomasi hän miehen 
          kadonneen ja wieneen menenessään paitsi hänen peitteenään ollutta päällystakkia myös takin taskusta lompakon, missä oli rahaa 100 mk. Heidän sisälle pyrkiessään oli mies käyttänyt apunaan luultawasti tiirikkaa. Warkaasta ei 
          ole tietoa.</p>
      </Article>
      <Article titleText="Kamala werityö Humppilassa.">
        <h5>Mies ampunut ensin toista hengenwaarallisesti ja sen jälkeen itsensä.</h5>
        <p>Keskiwiikkoiltana tapahtui Humppilassa raaka werinäytelmä, mistä meille on ilmoitettu seuraawaa.</p>
        <p>Mainittuna iltana klo 7 ajoissa tuli Humppilassa asuwan maanwiljelijä Oskar Eskolan taloon talollisen poika Urpo Syyri, koputtaen owelle, koska talossa jo nukuttiin. Talon isäntä Oskar Eskola tuli tällöin awaamaan owea, 
          mutta hänet nähtyään ampui Syyri Eskolaa mauserpistoolilla watsaan, lähtien sitten juoksemaan pakoon, kadoten metsään. Ammuttu wietiin Forssan sairaalaan hoidettawaksi, missä hän edelleenkin on heikossa tilassa. 
          Poliisiwiranomaiset, jotka tapauksesta tiedon saatuaan, tuliwat paikalle, löysiwät eilen Syyrin metsästä kuolleena. Hän oli ampunut ohimoonsa kuolettawan laukauksen.</p>
        <p>Syynä tekoon lienewät jotkut perintöriidat, sillä Eskola on naimisissa mainitun Syyrin sisaren kanssa.</p>
        <p>Eskola on iältään 35-wuotias. Syyri, joka oli naimaton, oli 24 wuoden ikäinen. Hän oli wiettämyt huonoa elämää, ollen kulmakuntansa kauhuna.</p>
        <p>Muuten mainittakoon, että wuoden kuluessa on Syyrin suwusta kuollut sisar ja äiti, sitten ampui 15-wuotias poika itsensä, ennen joulua kuoli poika sotawäkeen ja nyt ampui ylläminittu Syyri itsensä.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Lauantai, 19.1.1924</h3>
      <Article titleText="Myllymäessä tapahtunut weriteko.">
        <h5>Uhrien tila.</h5>
        <p>Eilen illalla lääninsairaalasta tiedustellessamme Ekholmin waimon ja lasten tilaa, ilmoitettiin meille waimon ja pojan olewan parempaan päin. Tyttö on edelleenkin tajuttomassa tilassa.</p>
      </Article>
      <Article titleText="Taas werityö.">
        <p>Eilen illalla lyötiin Punaportilla työm. R. Flinckmania puukolla selkään keuhkopussiin asti ulottuwa haawa. Puukotettu tuotiin lääninsairaalaan, jossa häntä edelleen hoidetaan. Puukottajaa, jota ei vielä liene saatu kiinni, 
          ei Flinckman sanonut tuntevansa.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Sunnuntai, 20.1.1924</h3>
      <Article titleText="Hattulan maantiellä ryöstetty hewonen tawattu Kärkölässä.">
        <h5>Ryöstäjiä ei ole saatu kiinni.</h5>
        <p>Kuten sanomalehdissä on kerrottu, ryöstettiin t.k. 12 pnä Hattulan maantiellä klo 9 aikaan illalla eräältä Kalle Heikkilä-nimiseltä hewonen ajopeleineen ja tawaroineen. Ryöstön suoritti kaksi mieshenkilöä ja 1 nainen siten, 
          että he heittäytyiwät rekeen ja sortiwat H. maantielle ja ajoiwat edelleen. Nyttemmin owat Hollolan poliisit tawanneet ryöstetyn hewosen Kärkölästä palstatilallinen Haliselta, joka sanoo sen ostaneensa roswoilta. Hewonen on 
          palautettu omistajalleen.</p>
        <p>Ryöstön tehneistä henkilöistä ei poliisilla wielä liene tietoa.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Tiistai, 22.1.1924</h3>
      <Article titleText="Myllymäen weriteon uhrit.">
        <h5>Heidän tilansa ennallaan.</h5>
        <p>Eilen illalla Hämeenlinnan lääninsairaalasta tiedustellessamme Myllymäen werityön uhrien Ekholmin waimon ja lasten tilaa, ilmoitettiin heidän tilansa olewan ennallaan. Tyttö on edelleenkin tajuttomassa tilassa.</p>
        <p>Juttu Ekholmia wastaan tulee huomenna esille Hämeenlinnan raastuwanoikeudessa.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Keskiviikko, 23.1.1924</h3>
      <Article titleText="Hattulassa tapahtunut hewosryöstö.">
        <h5>Yksi ryöstäjistä saatu pidätetyksi.</h5>
        <p>Kuten jo on kerrottu, ryöstettiin t.k. 12 pnä Hattulassa Hauhon pitäjästä kotoisin olewalta maanwiljelijä Kalle Rauhalahdelta hewonen, minkä ryöstön suoritti kaksi miestä ja eräs naishenkilö, jotka oliwat pyytäneet 
          päästä Rauhalahden rekeen, mutta sitten wähän matkaa ajettuaan työntäneet Rauhalahden pois reestä.</p>
        <p>Wiime wiikolla onnistui Lahden poliisin pidättää ryöstöön syyllisenä satulaseppä Wilho Smolander, kotoisin Helsingistä, mutta asuwa Jywäskylässä. Hän onkin tunnustanut tekonsa ja ilmoittanut rikostowereinaan olleen 
          erään Eero Peltosen ja joutolaisnaisen Ellen Kakkisen, joka kylläkin on käyttänyt useampia nimiä. Wiimemainitut oliwat päässeet Lahdessa pakoon silloin, jolloin Smolander pidätettiin ja lähteneet ajamaan ryöstämäänsä 
          hewoseen ja rekeen waihtamillaan hewosella ja reellä tuntemattomaan suuntaan. Heitä ei ole wielä saatu pidätetyiksi.</p>
      </Article>
      <Article titleText="Raaka pahoinpitely Wiialan työwäentalolla.">
        <h5>Poliisia ammuttu ja puukotettu.</h5>
        <p>Kun Wiialan työwäenyhdistys wiime sunnuntaina piti tanssi-iltamia talossaan, saapui sinne, kuten tawallisesti, useita humalaisia huligaaneja iltaman kulkua häiritsemään. Paikalle saapui myöhemmin poliisikonstaapeli 
          Heikkilä pidättämään erästä Hilden-nimistä paikkakunnalla huonosta elämästään hywin tunnettua miestä, joka monien aikaisempien rikkomustensa takia oli määrätty wangittawaksi. Hilden ei kuitenkaan suostunut mielihywällä 
          lähtemään mukaan, waan ryhtyi tekemään wastarintaa, saaden awukseen useita muita huligaaneja. Syntyi ankara tappelunujakka, jonka aikana Hilden ampui kahdesti browningilla Heikkilää, toisen laukauksen osuessa jalkaan 
          ja toisen käteen. Lisäksi lyötiin Heikkilää useita kertoja browningin perällä päähän ja lopuksi wielä puukolla ammottawa haawa selkään. Tappelun alkaessa ryntäsi koko iltamayleisö, niin naiset kuin miehetkin, täydellisen 
          pakokauhun wallassa pihalle, jolloin jotkut saiwat liewiä ruhjewammojakin. Haawoittettu tuotiin aamujunalla Tampereen yleiseen sairaalaan hoidettawaksi. Haawat, waikka niistä muutamat owatkin pahanlaisia, eiwät ole 
          hengenwaarallisia. Hilden pakeni tekoansa tehtyään, eikä häntä wielä ole saatu kiinni.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Torstai, 24.1.1924</h3>
      <Article titleText="Myllymäessä tapahtunut murha.">
        <h5>Juttu Ekholmia wastaan ollut eilen esillä Hämeenlinnan raastuwanoikeudessa, mutta lykätty helmikuun 6:een päiwään.</h5>
        <p>Eilen oli Hämeenlinnan raastuwanoikeudessa ensi kerran esillä syyte muurari Kalle Konstantin Ekholmia wastaan, joka wiime wiikon maanantain wastaisena yönä wasaralla ruhjoi Hämeenlinnan Myllymäessä Torikadun 11:ssä 
          waimoaan ja kolmea lastaan, niin että lapsista 10-wuotias poika wähää myöhemmin heitti henkensä.</p>
        <p>Yleinen syyttäjä waati Ekholmille rangaistusta murhasta ja törkeästä pahoinpitelystä, pyytäen samalla lykkäystä, koska tutkintopöytäkirjat eiwät wielä olleet walmistuneet. Raastuwanoikeus lykkäsikin jutun käsittelyn 
          tulewan helmikuun 6:een päiwään, passittaen wastaajan takaisin lääninwankilaan.</p>
      </Article>
      <Article titleText="Wajaus Wanajan kunnan kassassa.">
        <h5>Ent. kunnankirjuri pidätetty.</h5>
        <p>Wiime maanantaina pidättiwät Hämeenlinnan poliisiwiranomaiset asianomaiselta taholta tehdystä pyynnöstä Wanajan kunnan entisen kunnankirjurin A. Wanhalan, koska kunnan kassassa oli todettu tapahtuneen wajauksen. Pidätetty 
          wäittää, että mikäli wajausta on olemassa, on se erehdyksessä tapahtunut. Summan suuruutta ei wielä ole woitu määrätä, sillä tilintarkastajat eiwät ole wielä ehtineet suorittaa tarkastusta.</p>
        <p>Mikäli olemme saaneet kuulla, lienee kysymyksessä n. 9,000 mk. suuruinen summa.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Lauantai, 26.1.1924</h3>
      <Article titleText="Ryöstö Forssassa.">
        <h5>Wiinakauppias myy pirtua puukon awulla.</h5>
        <p>Tiistai-iltana tapahtui Forssan Kuuston kylässä rohkea ryöstö. Muuan Wille Nybom-niminen irtolainen tarjosi eräälle Koiwula-nimiselle henkilölle pirtua 40 markan hinnasta limonaadipullollinen. Kun Koiwula kieltäntyi 
          ostamasta, weti Nybom esille puukkonsa ja sanoi „wai et osta”, jolloin K. ilmoitti suostuwansa kauppaan ja weti esiin lompakkonsa. Nybom ei kuitenkaan tyytynytkään kauppojen tekoon, waan anasti koko lompakon, jossa oli 
          rahaa 590 mk. Nybom pidätettiin jo torstaina ja saatiin häneltä silloin takaisin anastetuista rahoista 450 mk., kun sitä wastoin 140 mk. jo oli mennyt. Nybom on pidätettynä Forssan poliisikamarissa. Hän on aikaisemminkin 
          kärsinyt rangaistuksia warkaudesta.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Sunnuntai, 27.1.1924</h3>
      <Article titleText="Humppilan werityö.">
        <h5>Syyrin ampuma mies kuollut.</h5>
        <p>Kuten aikoinaan kerroimme, ampui Humppilassa t.k. 1 päiwän iltana U. Syyri -niminen mies sukulaistaan O. Eskolaa rintaan. Eskolaa hoidettiin Forssan sairaalassa ja on hän nyttemmin kuollut. Häneltä jäi waimo ja kaksi lasta. 
          Syyri ampui itsensä heti samana 16 päiwän iltana.</p>
      </Article>
      <Article titleText="Riihimäellä sattunut ampumistapaus.">
        <h5>Wastaaja wapautettu.</h5>
        <p>Kuten aikaisemmin olemme kertoneet, ampui Riihimäellä Kalewankadulla joku aika sitten wiilari Wäinö Willehard Hietala, kotoisin Tuusulan pitäjästä, taskuaseella wiilari Wäinö Rafael Lindholmia, tunkeutuen luoti rinnasta 
          sisälle ja tullen watsan takaosasta ulos. Mainitut miehet oliwat ensin yhdessä juopotelleet eräässä asunnossa ja sitten lähteneet ulos, jolloin heidän wälillään oli syntynyt sanakiista edelläkerrotulla seurauksella. Myöhemmin 
          Lindholm saamastaan haawasta heitti henkensä.</p>
        <p>Syyte Hietalaa wastaan oli eilen toisen kerran Hausjärwen y. m. pitäjäin wälikäräjillä Hämeenlinnassa. Antamallaan päätöksellä wapautti kihlakunnanoikeus kuitenkin wastaajan rangaistuksesta katsoen, että teko oli tapahtunut 
          hätäwarjeluksessa.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Keskiviikko, 30.1.1924</h3>
      <Article titleText="Myllymäessä tapahtunut werityö.">
        <h5>Toinenkin werityön uhreista kuollut.</h5>
        <p>Eilen kuoli Hämeenlinnan lääninsairaalassa Myllymäessä muurari Ekholmin asunnossa tapahtuneen werityön uhreista toinen, muurari Ekholmin 7-wuotias tyttö.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Keskiviikko, 6.2.1924</h3>
      <Article titleText="Tappelu Hattulassa.">
        <h5>Kolme miestä saanut puukonhaawoja.</h5>
        <p>Wiime lauantai-iltana oli Sattulan työwäentalolla Idänpään woimisteluseura „Toiween” wierailuiltama, mihin oli saapunut myös joukko huligaaneja. Näiden kesken syntyi työwäentalon pihamaalla riita sillä seurauksella, että 
          eräs Onni Salin Hämeenlinnan maalaiskunnasta iski puukolla muurari Uuno Saarista Hattulan Sattulan kylästä wasemmalle puolelle rintaa aina keuhkoihin ulottuwan haawan. Sitä paitsi sai myös lyöjä Salin puukonhaawan selkäänsä 
          ja muuuan Wilho Rantala myös wähäisen puukonpiston. Saarinen oli tuotawa Hämeenlinnan lääninsairaalaan hoidettawaksi. Siitä, ketkä owat Salinia ja Rantalaa lyöneet, ei ole wielä tietoa. Poliisi tutkii asiaa. Salinia ei ole 
          toistaiseksi pidätetty.</p>
        <p>Tappeluun osaaottaneista oliwat muutamat jonkun werran humalassa.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Torstai, 7.2.1924</h3>
      <Article titleText="Myllymäessä tapahtunut murha.">
        <h5>Juttu Ekholmia wastaan ollut eilen esillä Hämeenlinnan raastuwanoikeudessa, mutta lykätty helmikuun 20 päiwään.</h5>
        <p>Eilen oli Hämeenlinnan raastuwanoikeudessa toisen kerran esillä syyte muurari Kalle Konstantin Ekholmia wastaan, joka muutama wiikko sitten eräänä yönä wasaralla ruhjoi Myllymäessä Torikadun 11:ssa waimoaan ja kolmea 
          lastaan, niin että lapsista 10-wuotias poika wähää myöhemmin heitti henkensä.</p>
        <p>Raastuwanoikeus lykkäsi jutun enemmän käsittelyn helmikuun 20 päiwään lääninwankilan lääkärin lausunnon saantia warten Ekholmin mielentilasta.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Torstai, 14.2.1924</h3>
      <Article titleText="Wiialassa tapahtunut puukotus.">
        <h5>Toinenkin konst. Heikkilän puukottaja pidätetty.</h5>
        <p>Niinkuin aikoinaan kerroimme, puukotettiin Wiialassa joitakin aikoja sitten poliisikonstaapeli Heikkilää, hänen ollessaan wirantoimituksessa, melko pahasti, niin että hänen oli turwauduttawa lääkärinhoitoon. Toinen 
          puukottajista saatiin jo silloin pidätetyksi ja toisen rikollisen etsiskelyihin ryhdyttiin. Nyttemmin on tämä toinenkin puukottaja Akaan piirin nimismiehen pyynnöstä pidätetty Helsingissä. Mies, nimeltään Lauri Nieminen, 
          ammatiltaan työmies, on kotoisin Lempäälän Kuokkalasta. Pidätetty on tuotu Toijalaan kuulusteluja warten, ja tulee juttu häntä wastaan esille luultawasti Akaan ensi wälikäräjillä. — Toinen puukottajista on parhaillaan 
          wankilassa sowittamassa entisiä kolttosiaan.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Torstai, 21.2.1924</h3>
      <Article titleText="Myllymäessä tapahtunut murha.">
        <h5>Raastuwanoikeus määrännyt Ekholmin toimitettawaksi mielisairaalaan hänen mielentilansa selwille saamiseksi.</h5>
        <p>Hämeenlinnan raastuwanoikeuden eilisessä istunnossa oli kolmannen kerran esillä syyte muurari Kalle Konstantin Ekholmia wastaan tunnetusta Myllymäessä tapahtuneesta werityöstä. Lääninwankilan lääkäriltä, tri Sahlbergilta 
          oli saapunut raastuwanoikeudelle pyydetty lausunto, jossa tri Sahlberg ilmoitti tutkineensa wastaajan mielentilaa ja hawainneensa hänen waikuttawan hermostuneelta, woimatta kuitenkaan täkäläisissä oloissa antaa warmaa tietoa 
          wastaajan mielentilasta rikoksen teon aikana, katsoen näin ollen suotawaksi, että Ekholm lähetettäisiin johonkin keskusmielisairaalaan Ekholmin mielentilan tarkempaa tutkimista warten.</p>
        <p>Kun raastuwanoikeuden puheenjohtaja oli tehnyt Ekholmille erinäisiä kysymyksiä, joihin Ekholm sangen selwästi wastasi, päätti raastuwanoikeus passittaa Ekholmin takaisin läänin wankilaan, josta hänet on aikanaan toimitettawa 
          johonkin waltion mielisairaalaan, jotta hänen mielentilastaan saadaan lausunto.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Sunnuntai, 2.3.1924</h3>
      <Article titleText="Puukotus Riihimäellä.">
        <h5>Humalainen iskenyt poliisia puukolla.</h5>
        <p>Eilen aamupäiwällä ilmoitettiin Riihimäen poliisilaitokselle, että Riihimäen lasitehtaalla pari humalaista miestä hieroi riitaa, minkä wuoksi poliisilaitokselta lähetettiin kaksi poliisia paikalle. Poliisien saawuttua paikalle 
          iski toinen miehistä, nimeltään R. A. Ekman, poliisi Wuorista puukolla pitkän haawan poskeen. Lääkäri sitoi puukotetun, ja molemmat humalaiset wietiin poliisilaitokselle.</p>
      </Article>
      <Article titleText="Jokioisilla wiime joulukuussa tehty miestappo.">
        <h5>Rihlakunnanoikeuden päätös wahwistettu.</h5>
        <p>W. k. 27 p. wahwisti howioikeus sen tarkastettawaksi alistetun päätöksen jolla Jokioisten y. m. pitäjien kihlakunnanoikeus wiime tammikuun 1 pnä tuomitsi talollisenpojan Niilo Matias Koiwulan Urjalan pitäjästä kuoleman 
          aiheuttaneesta pahoinpitelystä pidettäwäksi 3 wuotta kuritushuoneessa ja maksamaan erikoisesti korwauksia. — Koiwula oli wiime joulukuun 12 pnä Jokioisten pitäjän Jänhijoen kylässä iskenyt puukolla lohkotilallisenpoikaa 
          Kalle Iiwari Jokinientä sillä seurauksella, että tämä kuoli.</p>
          <SubDivider className="dividerStyle" />
          <h4>Alkuperäinen artikkeli, 14.2.1923</h4>
          <h5>Sikojen teurastaja lyönyt puukolla miehen kuoliaaksi.</h5>
          <p>Julma werityö tehtiin keskiwiikkona illalla klo 8 tienoissa Jokioisten Latowainion kylässä. Tapahtumasta olemme saaneet seuraawia tietoja:</p>
          <p>Keskiwiikkona päiwällä oli talollisen poika Niilo Koiwula Matkun Mikkolasta mennyt isänsä kanssa Latowainion kylässä olewaan Jokiniemen taloon sikoja teurastamaan. Kun työ oli saatu loppuun suoritetuksi, oleskeliwat 
            miehet muutaman tunnin talossa ja lienewät silloin jonkun werran maistelleet wiinaksia. Talollisen poika Iiwari Jokiniemi läksi sen jälkeen saattamaan wieraita ulos, jolloin hänen ja edellä mainitun Niilo Koiwulan 
            wälillä syntyi jostain syystä riita. Se päättyi siten, että miesten päästyä lähellä olewan joen rantaan, Niilo K. tempasi suuren teurastusweitsen esille ja iski sillä Jokinientä keskelle rintaa. J. kuoli heti. Werityön 
            tekijä pidätettiin. Murhattu oli 26 wuotias ja jäi häneltä waimo ja yksi alaikäinen lapsi. Murhaaja on 20 wuotias.</p>
      </Article>
      <Article titleText="Kolme warkautta Riihimäellä wuorokauden kuluessa.">
        <SubDivider className="dividerStyle" />
        <h5>Murtowaras saanut saalikseen waatetawaraa.</h5>
        <p>Wiime perjantaina oli waras tunkeutunut Riihimäellä Pohjois-Rautatiekadun 60:ssä asuwan leskirouwa Maria Mäkelän asuntoon owen kautta, käyttäen wääriä awaimia. Warkaus oli tapahtunut klo 2-6 wälillä päiwällä, asunnon omistajan 
          ollessa kotoa poissa. Saaliikseen oli waras saanut yhden miesten 600 mk. arwoisen tumman puwun ja yhden naisen plyyshikapan, jonka arwo oli myös 600 mk. Warkauden tekijäksi epäillään erästä nuorenpuoleista miestä, jota 
          kylläkään wielä ei ole saatu pidätetyksi.</p>
        <SubDivider className="dividerStyle" />
        <h5>Matkustajalta warastettu päällystakki ja matkalaukku. — Waras, huomattuaan joutuwansa kiinni, hypännyt junasta Turengin ja Harwialan wälillä.</h5>
        <p>Wiime perjantaina wähän jälkeen klo 8:n, junan seisoessa Riihimäen asemalla, warastettiin eräästä toisen luokan waunusta eräältä matkustajalta, nimeltä Johan Ludwig Fagerholm, 1,800mk. arwoinen päällystakki ja matkalaukku, 
          jossa oli erilaista näytetawaraa n. 350 mk. arwosta. Junan ollessa sitten matkalla pohjoiseen päin, alkoi junailija epäillä erästä mieshenkilöä warkauden tekijäksi, minkä wuoksi hän sulki hänet waunuosastoon. Huomattuaan 
          olewansa nyt joutumassa kiinni, hyppäsi waras Turengin ja Harwialan wälillä junasta ikkunan kautta, kadoten sille tielleen.</p>
        <SubDivider className="dividerStyle" />
        <h5>Rahawarkaus asemalla.</h5>
        <p>Eilen klo 11 ajoissa warastettiin Riihimäen asemalla naisten huoneessa Lappeenrannasta kotoisin olewalta työmiehen waimolta Selma Luomalta nenäliinan sisään käärittyinä olleet 75 mk. Waras oli rahat siepannut, omistajan 
          laskettua ne huoneen pöydälle.</p>
        <SubDivider className="dividerStyle" />
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Keskiviikko, 5.3.1924</h3>
      <Article titleText="Puukotus Hattulassa.">
        <h5>Kahta miestä lyöty, joista toista hengenwaarallisesti.</h5>
        <p>Wiime sunnuntaina tapahtui Hattulan Pekolassa puukotus, jossa 2 miestä sai haawoja. Maantiellä oliwat kirwesmies Einari Heinonen ja työmies Eemeli Lundahn tawanneet työmies F. A. Heinosen, joka oli ollut päihtyneessä tilassa. 
          Jostakin syystä oli wiimemainittu tulistunut ja tarttunut puukkoonsa, iskien sillä kirwesmies Heinosta 7—8 kertaa, olematta haawat kuitenkaan mikään hengenwaarallinen. Sen sijaan sai Lundahn puukosta niin woimakkaan iskun 
          rintaansa, että haawa ulottuu aina keuhkoihin saakka. Hänen wammansa on hengenwaarallinen.</p>
        <p>Puukotetut toimitettiin wielä samana yönä Hämeenlinnan lääninsairaalaan hoitoa saamaan. Lyöjä on myös pidätetty.</p>
        <p>Niin puukotetut kuin puukottajakin owat kotoisin Hattulasta.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Torstai, 6.3.1924</h3>
      <Article titleText="Syyte kunnankirjuri Wanhalaa wastaan.">
        <h5>Wastaaja tuomittu 1 w:ksi 9 kk:ksi kuritushuoneeseen.</h5>
        <p>Hämeenlinnan raastuwanoikeuden eilisessä istunnossa oli kolmannen kerran esillä juttu Wanajan entistä kunnankirjuria Arwi Wanhalaa wastaan. Wastaaja oli oikeuteen tuotu lääninwankilasta ja awusti häntä howioik. ausk. J. 
          Mustonen. Wanajan kunnan edustajana oli oikeudessa tällä kerralla saapuwilla kiwityömies W. Grönholm, jonka lisäksi kunnallislautakunnan esimies, mw. E. Rantala oli oikeudessa.</p>
        <p>Sittenkuin oikeudelle oli esitetty erinäisiä selwityksiä asiasta, julisti oikeus päätöksensä, katsoen siinä selwitetyksi, että wastaaja, ollessaan Wanajan kunnankirjurina, oli wiime kesän aikana tässä kaupungissa 
          sijaitsewassa Wanajan kunnallistoimistossa useina eri kertoina, ilman että se kuului hänen wirkawelwollisuuksiinsa, kantanut kuntalaisilta wuoden 1923 kunnallisweroja 13,746 mk. 55 p. ja osittain salatakseen kawalluksensa 
          kantokirjan eri kohtia raaputtamalla wähentänyt kannettawaa summaa 4,967 mk:lla, minkä wuoksi raastuwanoikeus, nojautuen rikoslain 29 luwun 1 pykälään ja 7 luwun 2 pykälään katsoi oikeaksi tuomita wastaajan jatketusta 
          kawalluksesta 1 w:ksi wankeuteen ja nojautuen rikoslain 34 luwun 6 pykälään ja 7 luwun 2 pykälään jatketusta wiranomaisen julkisen asiakirjan wäärentämisestä 1 w:ksi 6 kk:ksi kuritushuoneeseen eli kerta kerrassaan 
          pidettäwäksi 1 w. 9 kk. kuritushuoneessa ja menettämään kansalaisluottamuksensa 3 w:ksi.</p>
        <p>Samalla kuin Wanajan kunnan waatimus eräästä 900 mk. erästä selwittämättömänä hylättiin, welwoitettiin wastaaja maksamaan Wanajan kunnalle 13,746 mk. 55 p. ja oikeudenkäyntikorwausta 1,000 mk.</p>
        <p>Wastaaja, jota ilmoitti tyytymättömyyttä päätökseen, passitettiin täkäläiseen lääninwankilaan.</p>
      </Article>
      <Article titleText="Ulakkowarkauksia Hämeenlinnassa.">
        <h5>Waras saatu pidätetyksi.</h5>
        <p>Toissayönä murtautui waras Rakennus Oy. Pohjan talossa, Raatihuoneenk. 8, asuwain prokuristi Joh. Lindqwistin, rehtori I. S. Suomalaisen ja tuomari H. Kankaanpään ullakko-osuuksiin särkemällä niiden kaikkien owilla olleet 
          lukot. Mikäli poliisille tähän mennessä on ilmoitettu, on prokuristi Lindqwistin ullakolta wiety 2 miehen pukua ja musta talwipalttoo, rehtori Suomalaisen ullakolta 2 miehen pukua ja pitkäwartiset saappaat sekä tuomari 
          Kankaanpään ullakolta, missä waras lisäksi oli murtanut auki erään kirstun, 3 miehen paitaa. Tämän ohessa oli kaikki paikat muutenkin tarkoin myllätty ja pengottu ylösalasin.</p>
        <p>Edelleen on samana yönä särjetty kauppias J. Ruokosen talossa, Raatihuoneenk. 9, asuwan tehtailija Hj. Emanuelsonin ullakon etulukko, mutta ainakaan wielä ei poliisille ole tehty ilmoitusta tawarain katoamisesta.</p>
        <p>Heti asiasta ilmoituksen saatuaan ryhtyi poliisi toimenpiteisiin warkaan kiinnisaamiseksi ja pidättikin pian tekoon epäluulonalaisena erään miehen, joka kuulustelussa ilmoitti nimekseen Paawo Penniö ja olewansa kotoisin 
          Inkerinmaalta. Kun matkailijakoti Betaniasta, jossa Penniö asui, löydettiin kaikki muut warastetut tawarat paitsi rehtori Suomalaisen toista pukua, katsoi hän parhaaksi tunnustaa tekonsa, kieltäen kuitenkin käyneensä 
          tehtailija Emanuelsonin ullakolla. Warkaudet sanoo hän tehneensä jo klo 8 aikaan toissailtana.</p>
        <p>Kuulusteluja jatketaan.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Perjantai, 7.3.1924</h3>
      <Article titleText="Itsemurha Hämeenlinnassa">
        <h5>Nainen päättänyt päiwänsä myrkyttämällä itsensä.</h5>
        <p>Eilen klo 2 ajoissa päiwällä päätti Hämeenlinnassa aseman takana olewassa Tuomelan huwilassa päiwänsä tarjoilijatar Lyyli Laine, nauttimalla lykooli- ja rikkihapposekoitusta. Kun tapaus huomattiin, toimitettiin hänet 
          heti lääninsairaalaan hoitoa saamaan, mutta kaikista yrityksistä huolimatta heitti hän henkensä klo ½ 6 ajoissa illalla.</p>
        <p>Iältään oli Laine n. 30-wuotias.</p>
      </Article>
      <Article titleText="Pidätetty petkuttaja.">
        <h5>Riihimäen poliisi pidättänyt helsinkiläisen wäärentäjän ja petkuttajan.</h5>
        <p>Wiime helmikuun 18 pnä pidättiwät Riihimäen poliisiwiranomaiset erään Paul Karl Aleksander Hagman-nimisen miehen epäiltynä useammasta petoksesta. Myöhemmin onnistui tämän miehen kuitenkin wapauttaa itsensä todisteitten 
          nojalla. Nyttemmin on sama mies, oikealta nimeltään „liikemies” Johan Ilmari Roswall pidätetty uudelleen ja lähetetty Helsinkiin, missä hänellä on tilillään useita petoksia ja wäärennyksiä.</p>
      </Article>
      <Article titleText="Miestä ammuttu hengenwaarallisesti Hausjärwellä.">
        <h5>Ampuja tehnyt tekonsa humalapäissään.</h5>
        <p>Laskiaistiistai-iltana tapahtui Hausjärwen pitäjän Oitin kylässä ampumatapaus, joka woi päättyä ihmishengen hukkaan. Kun yleisö oli poistumassa yöllä Oitin työwäenyhdistyksen järjestämästä iltamasta, rupesi työmies 
          Uuno Rikhard Snellman Hausjärwen Oitin kylästä ammuskelemaan käsiaseella sillä seurauksella, että yksi luodeista sattui Hausjärwen Rutajärweltä kotoisin olewaan työmies Wäinö Liljaan, mennen luoti selästä wasemmalta 
          puolelta sisään, läwistäen keuhkot. Ammuttu, jolle ensi awun antoi Riihimäellä tri Kahelin, toimitettiin keskiwiikkoaamuna Helsinkiin sairaalahoitoa saamaan. Hänen tilansa on hengenwaarallinen.</p>
        <p>Ampuja saatiin pidätetyksi myöhemmin. Hän on tunnustanut tekonsa, mutta sanoo, ettei hän muista ketään ampuneensa, koska hän oli humalassa.</p>
        <p>Niin ammuttu kuin ampujakin owat wielä nuoria miehiä. Lilja on tunnettu siiwoksi mieheksi, kun sen sijaan Snellman on tunnettu räyhääjä.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Lauantai, 8.3.1924</h3>
      <Article titleText="Hämeenlinnassa pidätetty ullakkowaras.">
        <h5>Satimeen joutunut onkin oikea ammattimies alallaan.</h5>
        <p>Niinkuin torstaina kerroimme, pidätettiin Hämeenlinnassa keskiwiikkona Inkeristä kotoisin olewa Paawo Penniö syyllisenä täällä edellisenä yönä tekemiinsä ullakkomurtoihin. Paitsi silloin mainitsemiamme tawaroita, joita 
          Penniö oli warastanut, hawaittiin jälkeenpäin, että tehtailija Emanuelsonin ullakolta oli kadonnut kupari- ja messinkikattiloita, jotka myöskin on saatu Penniöltä takaisin. Wielä murtautui hän samana yönä Panimokadun 
          warrella Oy. Asunnon ullakolle, särkien siellä 3 lukkoa, mutta ottamatta muuta mukaansa kuin yhden awaimen, jota sitten puolestaan todisti hänet syypääksi tähänkin murtoon.</p>
        <p>Mikäli meille on ilmoitettu, on Penniö alallaan ensiluokkainen ammattimies. Mikäli meille on ilmoitettu, on hän tunnustanut Tampereellakin wiime aikoina tehneensä parikymmentä warkautta ja lisäksi epäillään hänen tehneen 
          warkauksia muuallakin. Tampereella tehtyihin murtoihin osoitti Penniön syypääksi häneltä tawattu katkennut tikari. Tampereella Kouluk. 16:ssa tehdyn ullakkamurron jälkeen löydettiin nimittäin paikalta katkennut tikarin 
          kärki, jolla owia oli awattu ja kärkeä lähemmin tarkastettaessa huomattiin sen kuuluwan Penniön tikariin.</p>
        <p>Penniö, joka on syntynyt 1902, on Hämeenlinnan etsiwässä osastossa, jossa kuulusteluja edelleen jatketaan.</p>
      </Article>
      <Article titleText="Jouhi- ja sikawaras pidätetty.">
        <p>Eilen pidätti Hämeenlinnan poliisi täällä eräästä ruokalasta työmies Sulo Ilmari Koiwumäen Wanajan pitäjän Luolajan kylästä. Koiwumäki oli toissa yönä Wanajan Kinnarin ja Hakolan taloissa leikannut edellisestä paikasta 
          8:lta ja jälkimäisestä 6:lta hewoselta häntäjouhet, joita hän sitten oli täällä kaupitellut, ehtimättä niitä kuitenkaan saada myydyiksi, ennenkuin poliisi hänet pidätti.</p>
        <p>Kuten muistettanee warastettiin wiime helmikuun 22 päiwän wastaisena yönä Sammon torpasta sika, jonka sisälmykset seuraawana päiwänä löydettiin maantieltä. Tästäkin teosta rupesi poliisi Koiwumäkeä epäilemään ja onkin 
          hän tunnustanut sian warastaneensa. Lihat on hän käyttänyt osaksi itse ja osaksi myynyt ne saaden niistä 100 mk.
        </p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Tiistai, 18.3.1924</h3>
      <Article titleText="Jännittäwä pirtutrokarin takaa-ajo Janakkalan Saloisilla.">
        <h5>Laukausten waihdossa haawoittunut yksi takaa-ajajista ja kaksi hewosta.</h5>
        <p>Wiime lauantaina päiwällä lähti pari metsätyönjohtajaa Janakkalan pitäjän Salosten kylästä takaa-ajamaan erästä tunnettua pirtutrokaria, nimeltä Olli Numminen Wanajan Mallinkaisilta. Lyhentääkseen pirtutrokarin saawuttamaa 
          etumatkaa ottiwat takaa-ajajat kyytihewosen Saloisten kylässä sijaitsewasta Eerolan talosta, tullen heitä kyyditsemään mainitun talon poika Uuno Eerola. Saloisten järwellä saawuttiwat takaa-ajajat Nummisen, kehoittaen häntä 
          antautumaan, mutta sitäpä ei tämä tehnytkään, waan hyppäsi tienwiereen, alkaen sieltä ampua takaa-ajajiaan, minkä ehti. Myös takaa-ajajat, joilla oli ampuma-aseet mukanaan, ryhtyiwät wastaamaan tuleen. Laukausten waihdon 
          aikana onnistui Nummisen haawoittaa kyydissä ollutta Uuno Eerolaa, läwistäen luoti hänen toisen reitensä sekä myös reen edessä ollutta hewosta sääreen. Kun sattumat oliwat tulleet, lähtiwät toinen takaa-ajajista ja Eerola 
          takaisin Saloisten kylään hakemaan lisäapua ja soittamaan poliisiwiranomaisille, kun sen sijaan toinen työnjohtajista edelleen jatkoi trokarin takaa-ajoa. Numminen lähti juoksemaan edelleen pakoon ja päästyään järwen rantaan, 
          piiloittautui hän siellä olewan Korkeawuoren talon talliin. Kun Numminen huomasi, että häntä seuranneet miehet sekä muitakin miehiä oli saapunut paikalle ja huomanneet hänen piilopaikkansa, lähti hän tallista ulos, ampuen taas, 
          minkä ehti. Nyt pakeni hän talon tupaan, missä sillä hetkellä oli wain naiswäkeä ja lapsia. Takaa-ajajat piirittiwät nyt talon, odottaen niin kauan kuin poliisiwiranomaiset 17 km. päästä saapuiwat paikalle. Näille Numminen 
          sitten wastarinnatta antautuikin.</p>
        <p>Seuraawana aamuna huomattiin sitten, että myös Korkeawuoren pihalla ollutta Korkeawuoren hewosta oli sattunut kaksi laukausta jalkoihin. Sekä Eerolan että Korkeawuoren hewoset owat arwoltaan kumpikin n. 6,000 mk. Toistaiseksi 
          on tietämätöntä, woidaanko haawat parantaa.</p>
        <p>Uuno Eerolalle antoi saman päiwän iltana awun Janakkalan kunnanlääkäri.</p>
        <p>Kuten sanottu, pidätettiin Numminen ja on hän edelleen poliisin huostassa. Hänellä on m.m. sowitettawana 2½ kuukauden linnatuomio ja on hän jäänyt laittomasti pois asemelwollisuuskutsunnasta. Wiime syyskuussa ilmoitti hän 
          Hämeenlinnan poliisilaitoksella, jouduttuaan kiinni pirtun kuljetuksesta, itsensä Kalle Walkamaksi, jolle tuomittiin sitten raastuwanoikeudessa sakko luwattomasta poissaolosta. Asia kuitenkin selwisi myöhemmin. Sitä paitsi 
          on hän harjoittanut pitkän aikaa pirtukauppaa, ollen tunnettu oikeaksi huligaaniksi paikkakunnallaan. Näistä kaikista samoinkuin luwattomasta aseenkannostakin joutuu hän wastaamaan kihlakunnanoikeudessa.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Torstai, 20.3.1924</h3>
      <Article titleText="Suuri pirtutakawarikko Hausjärwellä.">
        <h5>300 litraa „ainetta” joutunut poliisiwiranomaisten käsiin.</h5>
        <p>Eilen takawarikoiwat Riihimäen poliisiwiranomaiset Hausjärwen Wantaan kylässä ennestään poliisille tunnetun pirtutrokarin Sakeus Mäkisen tallirakennuksesta 300 l. pirtua. Tawara oli kätketty heiniin ja oli se maanteitse 
          tuotu Helsingistä. Samalla takawarikoiwat poliisiwiranomaiset kuljetukseen käytetyn hywänlaisen hewosen sekä ajoneuwot.</p>
        <p>Mäkinen asetetaan syytteeseen ensi käräjillä. Juttuun on sekaantunut myös kaksi Mäkisen toweria.</p>
      </Article>
      <Article titleText="Wiialassa tapahtunut puukotus.">
        <h5>Puukottajat tuomittiin.</h5>
        <p>Eilen oli Akaan wälikäräjillä jälleen esillä työm. Lauri Niemistä, R. Hildeniä ja Lambert Katajaa wastaan nostettu juttu Wiialan työwäentalolla tapahtuneesta puukotuksesta, jonka uhriksi joutui poliisikonstaapeli Heikkilä 
          tämän ollessa wirantoimituksessaan.</p>
        <p>Oikeus tuomitsi työm. Hildenin 4 w. 5 p. kuritushuoneeseen, mihin rangaistukseen liittyy hänelle tuomitut rangaistukset luwattomasta ampuma-aseen hallussapidosta ja juopumuksesta, joista H. kummastakin tuomittiin 10 
          päiwäsakkoon à 15 mk. Työm. Lambert Kataja tuomittiin awunannosta pahoinpitelyyn 6 kk. wankeusrangaistukseen sekä suorittamaan Heikkilälle Hildenin kanssa sairauskuluja yhteisesti tai kummalla heistä waroja on 250 markkaa. 
          Nieminen wapautettiin, mutta tuomittiin hän luwattomasta wiinanmyynnistä 100:aan päiwäsakkoon à 15 mk. sekä luwattomasta ampuma-aseen hallussapidosta 10 päiwäsakkoon à 15 mk., mihin yhdistetään hänelle ennen tuomitut 
          uhkasakot 1,500 mk.</p>
        <p>Hilden ja Nieminen passitettiin lääninwankilaan, mutta Kataja päästettiin toistaiseksi wapaalle jalalle.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Perjantai, 21.3.1924</h3>
      <Article titleText="Kaksi kuolemantuottanutta pahoinpitelytapausta.">
        <h5>Howioikeus wahwistanut alistetut tuomiot.</h5>
        <p>Aikoinaan tuomitsi Urjalan y. m. pitäjien käräjäkunnan kihlakunnanoikeus lohkotilallisenpojan Kalle A. Yrjölän Urjalasta kuolemantuottaneesta pahoinpitelystä erittäin liewentäwien asianhaarain wallitessa pidettäwäksi 
          1 w. 6 kk. kuritushuoneessa. Yrjölä oli wiime jouluna juowuspäissään Kylmäkosken Hautaan kylässä Kallion talossa, saatuaan mainitun talon pojalta Lauri Johannes Kalliolta n:s kiljua päänsä täyteen, iskenyt puukolla Lauri 
          Kalliota tämän tapellessa isänsä kanssa. Seuraawana päiwänä kuoli Lauri Kallio saamastaan haawasta.</p>
        <p>Howioikeus on wahwistanut kihlakunnan oikeuden yllämainitun howioikeuteen alistetun tuomion.</p>
        <SubDivider className="dividerStyle" />
        <p>Tammisaaren raastuwanoikeus oli tuominnut wiime jouluk. 10 pnä työmies Juho Kustaa Lindgrenin Tampereelta kuoleman aiheuttaneesta pahoinpitelystä 4 wuodeksi kuritushuoneneeseen. Lindgren oli Tammisaaressa sikäläisen 
          piirimielisairaalan alueella puukottanut wiime marrask. 5 pnä helsinkiläistä peltiseppää August Heleniusta, joka saamaansa haawaan kuoli.</p>
        <p>Howioikeus on nyttemmin tuominnut Lindgrenin samansuuruiseen rangaistukseen kuin raastuwanoikeuskin, joskin jossain määrin eri perustein.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Torstai, 27.3.1924</h3>
      <Article titleText="Riihimäellä tapahtunut poliisin pahoinpitely.">
        <h5>Wastaaja tuomittu wuodeksi kuritushuoneeseen.</h5>
        <p>Kuten aikaisemmin olemme kertoneet, tapahtui Riihimäen lasitehtaalla joku aika sitten pahoinpitely, minkä alaiseksi joutui eräs humalaisia rauhoittamaan lähetetty poliisikonstaapeli. Tällöin iski nimittäin työmies T. A. 
          Ekman puukolla mainittua poliisia.</p>
        <p>Juttu Ekmania wastaan oli eilen esillä Hausjärwen y.m. pitäjäin kihlakunmanoikeudessa, joka tuomitsi wastaajan pahoinpitelystä wuodeksi kuritushuoneeseen, juopumuksesta 200 mk. sakkoa ja spriin nauttimisesta 100 mk. eli 
          rangaistuksen yhdistettyinä tuomittiin wastaaja pidettäwäksi 1 w. 7 p. kuritushuoneessa.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Perjantai, 28.3.1924</h3>
      <Article titleText="Tshekan urkkija murtowarkaana Suomessa.">
        <h5>Inkeriläinen Pönniö saanut eilen tuomionsa lukuisista murtowarkauksista Hämeenlinnassa.</h5>
        <p>Lempäälän pitäjästä Inkerinmaalta kotoisin olewa torpparin poika Paawo Pönniö tuomittiin eilisessä Hämeenlinnan raastuwanoikeuden istunnossa jatkuwasta murtowarkaudesta 1:ksi wuodeksi 2:ksi kuukaudeksi kuritushuoneeseen, 
          murtowarkaudesta 1:ksi wuodeksi kuritushuoneeseen, jatketusta murrosta 8:ksi kuukaudeksi kuritushuoneeseen, ja kun Pönniötä tullaan myös syyttämään Tampereen raastuwanoikeudessa Tampereella tekemistään warkausrikoksista, 
          siirrettiin asia siinä suhteessa Tampereen raastuwanoikeuteen. Penniö passitettiin Hämeenlinnan lääninwankilaan.</p>
        <p>Oman kertomuksensa mukaan on Pönniö ollut Wenäjällä tshekan palweluksessa ja puna-armeijassa, käyden Moskowan tykistökoulussa 1½ muotta, liittyen sen jälkeen Pietarissa kommunistiseen tiedusteluosastoon, jonka tehtäwänä 
          on urkkia sotilaallisia ja waltiollisia asioita Wenäjällä ja muissasin waltioissa. Pönniökin oli tässä ominaisuudessa tehnyt useampia matkoja Suomeen, saapuen tänne wiimeksi mainitussa tarkoituksessa jalateitse wiime 
          helmikuun puoliwälissä.</p>
      </Article>
      <Article titleText="Tuomittu pirtutrokari.">
        <h5>Wäärää nimeä käyttänyt pirtutrokari tuomittu sakkoihin.</h5>
        <p>Eilisessä raastuwanoikeuden istunnossa tuomittiin työmies Onni Alarik Numminen Janakkalan pitäjän Mallinkaisten kylästä julkisen wiranomaisen erehdyttämisestä 20:een päiwäsakkoon, jokainen suuruudeltaan 20 mk., eli wetämään 
          sakkoa 400 mk. ja uusitusta wäkijuomain hallussapidosta 175:een päiwäsakkoon, jokainen suuruudeltaan 20 mk., eli wetämään sakkoa 3,500 mk.</p>
        <p>Numminen oli wiime joulukuun 12 pnä Hämeenlinnan hewostorilla pidätetty laimattomasta 
          wäkijuomain hallussapidosta ja tällöin ilmoittanut nimekseen Kalle Walkama.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Sunnuntai, 30.3.1924</h3>
      <Article titleText="Roswot ryöstäneet pikajunan Hikiän ja Riihimäen wälillä.">
        <h5>Joukko entisiä punakaartilaisia ja irtipäästettyjä wankeja tuhotöissä.</h5>
        <p>Riihimäen Samomat kertowat:</p>
        <p> Lauantaina klo 1 jälkeen päiwällä huomasi Riihimäeltä Rajajoelle lähteneen pikajunan kuljettaja, että rata parin km. päässä Hikiän asemalta oli rikottu 2 kiskonmitan matkan. Hän pysäytti heti junan, jolloin sen kimppuun 
          hyökkäsi noin parinkymmenen miehen suuruinen aseistettu miesjoukko, joka tunkeutui waunuihin ryhtyen ryöstämään matkustajia. Käytyään koko junan läpi poistuiwat miehet heittäen mennessään junaa kohden useita käsipommeja, 
          jotka haawoittiwat kahta henkilöä hengenwaarallisesti. Tapahtumasta annettiin tieto Riihimäelle, josta korjausjuna lähti paikalle. Rata saatiinkin muutaman tunnin kuluttua kuntoon ja pikajuna pääsi jatkamaan matkaansa. 
          Ryöstötyön tekijöistä tiedetään, että he owat entisiä punakaartilaisia, joiden joukossa oli myös muutamia wiimeisessä suuressa armahduksessa irtipäästettyjä kuritushuonewankeja. Roistojen kiinnisaamisesta ei ole paljon 
          toiweita, sillä lähiseudun kommunistiklubit ja ammattiyhdistykset owat roistojen puolella ja ehkäisewät kaikki etsintäyritykset. Sitäpaitsi on koko tapahtuma heidän mielestä wain pelkkää wiatonta leikkiä, jonka kaiwelemiseen 
          ei kannata ryhtyä. Tällaisia uutisia woimme saada tulewaisuudessa lukea, ellemme ensi tiistaina ja keskiwiikkona toimitettawissa eduskuntawaaleissa käy wetämässä wiiwamme Kansallisen Kokoomuspuolueen listoihin!</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Sunnuntai, 13.4.1924</h3>
      <Article titleText="Petollisia pirtukauppiaita.">
        <h5>Myyneet Hämeenlinnassa ostajalleen wettä pirtun asemasta.</h5>
        <p>Eilen aamulla ilmotti H:linnassa ajawa kuorma-ajuri Oskari Yliseppä, että hän sanottuna aamuna klo ½9 ajoissa oli Hämeenlinnan kauppatorilta ostanut parilta mieheltä 20 litraa pirtua, joka oli 4:ssä 5:n litran kanisterissa, 
          mutta että kotonaan, tarkemmin tutkittuaan kanisterien sisältöä, hän olikin huomannut niiden sisältäwän suurimmaksi osaksi wettä. Poliisien onnistuikin sitten wielä eilen Hämeenlinnan asemalla pidättää miehet, jotka Ylisepälle 
          oliwat pirtun myyneet. Poliisilaitoksella oliwat miehet ilmoittaneet olewansa Lauri Armas Sawola Asikkalan pitäjästä ja Eemeli Haapamäki Lammin pitäjästä. Pidätetyt myönsiwät kyllä myyneensä Ylisepälle pirtua 900 mk. hinnasta 
          edellämainitulta määrältä, mutta kieltäwät harjoittaneensa mitään petoskauppaa.</p>
        <p>Mainittakoon, että petos pirtukaupassa oli tapahtunut siten, että kanistereihin oli pantu torwet, joissa oli n. 200 grammaa pirtua, kun sen sijaan muu osa oli wettä.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Tiistai, 15.4.1924</h3>
      <Article titleText="Hämeenlinnan kapinallispatsasjuttu.">
        <h5>Howioikeus wahwistanut raastuwanoikeuden päätöksen.</h5>
        <p>Hämeenlinnan raastuwanoikeudessa waadittiin aikoinaan toimittaja Henrif Harald Toiwolalle, liikeapulaiselle Jalmari Stefanias Kuuselalle, sanomalehtimies Kaarlo Myllymäelle ja työmies K. W. B. Aleniukselle Hämeenlinnasta, 
          työläisnaiselle Olga Maria Leinoselle ja työmies Yrjö Henrik Packalenille Helsingistä sekä palstatilalliselle Juho Niilo Aroselle Ulwilasta rangaistusta siitä, että he oliwat keränneet rahoja patsaan pystyttämistä warten 
          Hämeenlinnan punakaartilaisten haudalle sekä eräille heistä siitä, että he oliwat patsaan paljastamistilaisuudessa toukokuun 20 pnä w. 1923 pitäneet puheita.</p>
        <p>Syyskuun 5 pnä 1923 raastuwanoikeus tuomitsi Toiwolan ja Kuuselan rahankeräyksestä ja rikoksesta yleistä järjestystä wastaan kummankin pidettäwäksi 1 kk. 10 päiwää wankeudessa, Myllymäen 600 mk. sekä Leinosen, Packalenin, 
          Arosen ja Aleniuksen 375 mk. sakkoihin yleistä järjestystä wastaan.</p>
        <p>Turun howioikeus, johon syytetyt walittiwat, on katsonut, etteiwät syytetyt ole esiintuoneet syytä raastuwanoikeuden päätöksen muuttamiseen, joka siis jää woimaan. Ainoastaan Toiwola ja Kuusela woiwat hakea tähän päätökseen 
          muutosta.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Torstai, 17.4.1924</h3>
      <Article titleText="Tappelurähäkkä Toijalassa.">
        <h5>Mies saanut pirtutrokareilta parikymmentä puukon y.m. haawaa.</h5>
        <p>Wiime sunnuntaina tapahtui Toijalan työwäentalon lähistöllä tappelumetakka, jonka aikana työmies Yrjö Selniä hakattiin puukoilla ja nyrkkiraudoilla. S. oli riitaantunut jostain syystä paikkakunnalla tunnettujen pirtutrokarien 
          kanssa sillä seurauksella, että sai hulikaaneilta parisenkymmentä haawaa. Pahoinpidellyn sitoi kunnanlääkäri ja hoidetaan häntä kotonaan.</p>
        <p>Tulkoon mainituksi, että Toijalan asemaseudulla on elämä wiime aikoina kaikenlaisten hulikaanien ja pirtutrokarien ansiosta käynyt rauhallisille ihmisille aiwan sietämättömäksi.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Perjantai, 18.4.1924</h3>
      <Article titleText="Surullinen wahinkolaukaus Forssassa.">
        <h5>Aiheuttanut 18-wuotiaan tytön kuoleman.</h5>
        <p>Wiime maanantai-iltana klo 7 ajoissa tapahtui Forssassa surullinen onnettomuus. Mainittuna aikana ryhtyi nimismies Waltosen 18-wuotias tytär puhdistamaan isänsä rewolweria. Neiti Waltosen yrittäessä purkaa asetta, laukesi 
          se ja luoti tunkeutui rinnan läpi wahingoittaen keuhkoja ja maksaa. Paikalle kutsuttiin heti paikkakunnan lääkärit, jotka antoiwat tapaturman uhrille ensiawun. Aamujunalla lähdettiin neiti Waltosta wiemään Turkuun sairaalaan, 
          mutta kuoli hän jo junan saapuessa Humppilan asemalle. Kuten jo mainittiin, oli neiti W. noin 18-wuotias ja Forssan yhteiskoulun seitsemännen luokan oppilas.</p>
      </Article>
      <Article titleText="Juowuksissa räyhääwä iltamayleisö maantierauhaa häiritsemässä Kalwolassa.">
        <p>Kun wiime sunnuntai-iltana kanttori Salokannel palasi Lintumaalta tuli Taljalan kylän laidassa wastaan työwäentalolta poistunutta iltamayleisöä, joista eräs, kowasti juowuksissa olewa mies tunkeutui ohiajawain rekeen räyhäten 
          siinä. S. kehoitti miestä poistumaan jonka tämä pitemmän kinastuksensa jälkeen tekikin siwaltaen ssmalla kädessään olleilla kalosseilla S:lta wasten kaswoja, onneksi kuitenkin esti pystyssä ollut turkin kaulus pahempia wammoja 
          tulemasta. Työwäentalon ohi päästyä ryhtyi eräs juopunut suksillaan olija sauwoillan ahdistamaan ajajia, tässä pelasti kuitenkin hewosen nopeus reessä olijat iskulta - kunnes taas jonkun matkan päässä tientäyteinen juopuneiden 
          joukko sulki tien tarttuen hewoseen, pysäyttäen sen ja erään surullisen kuuluisan Taljalan talonpojan ladellessa uhkauksia, hellittämättä wielä waikka ajaja nimeltään miestä kehoitti irtautumaan ohjista ei totellut ennentuin 
          tämän towerit kädestä pitäen irroittiwat raukan.</p>
        <p>Taljalan työwäen talon seudut iltamien aikana on muulloisinkin rauhattomaksi mainittu, ei wain ohikulkioiden mutta myöskin lähipaikan asukkaiden taholta ja jotain sietäisi ehkä wiranomaisten tämän suhteen tehdä, ainakin että 
          myöntäessään iltamanpitolupia tällä talolla asettaisiwat jyrkäksi waatimukseksi järjestyksen pidon ei waan talon sisällä waan myös talon pihalla ja sen ohi kulkewalla maantiellä, mutta jollei iltaman pitäjiä woida siihen 
          welwoittaa niin asetettakoon esiwallan puolelta järjestyksen - ja lainwalwojia riittäwästi - jos muuten sentapaisten „juhlien” toimeensaantia kruunun edut ja kansan walistus wälttämättä waatiwat, jota saattaa epäillä. Nämä 
          tällaiset tapaukset eiwät ole wain yksityisten turwallisuuden, waan myös lain julkisen polkemisen kannalta paheksuttawia.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Perjantai, 24.4.1924</h3>
      <Article titleText="Waltiopetosjutut.">
        <h5>Talollinen Pulkki Hauholta syytteessä howioikeudessa.</h5>
        <p>Turun howioikeuden kolmannella osastolla, jonka puheenjohtajana on howioikeuden neuwos G. Hawu, oli eilen käsiteltäwänä Hauholta kotoisin olewaa talollista J. W. Pulkkia wastaan nostettu syyte waltiopetoksesta. Pulkki on 
          nimittäin aikaisemmin tuomittu kihlakunnanoikeudessa siitä, että hän oli ollut mukana kapinan aikana w. 1918 Toijalan ja Iittalan asemien wälillä rautatiewaunussa tapahtuneessa 19:n Mustialan maanwiljelysopiston oppilaan 
          murhassa ja 2:n oppilaan murhayrityksessä, elinkaudeksi kuritushuoneeseen. Juttu tuli alistustietä howioikeuteen, joka lähetti asiakirjat kannewiskaaliwirastolle, koska Pulkkia aikaisemmin ei oltu syytetty waltiopetoksesta.</p>
        <p>Kannewiskaali G. Westerling toisti syytteen murhista sekä waati samalla Pulkille rangaistusta waltiopetoksesta. Murhattujen omaiset yhtyiwät waatimuksiin ja waatiwat kuluja. Pulkki kielsi syyllisyytensä, myöntäen kyllä 
          olleensa mukana waunussa, mutta wäittäen, ettei ollut ampunut yhtään laukausta. Kun hän waati, että howioikeudessa kuultaisiin uudelleen erinäisiä todistajia, joita aikaisemmin jo on kuultu kihlakunnanoikeudessa, hylättiin 
          jutun käsittely heidän kuulemistaan warten toukokuun 9:nteen päiwään.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Tiistai, 29.4.1924</h3>
      <Article titleText="Miehen ruumis löydetty Wanajawedestä.">
        <h5>Ruumista arwellaan wiime joulukuussa Hattulasta kadonneen Lahden ruumiiksi.</h5>
        <p>Eilen klo ½7 ajoissa ip. ilmoitti täkäläiselle poliisilaitokselle eräs henkilö, että hän, ollessaan kokemassa rysiään Wanajawedessä, Hämeenlinnan Rantapuiston wastaisella puolella, oli tawannut siellä mätänemistilassa olewan 
          miehen ruumiin. Poliisilaitokselta lähetettiin heti poliiseja, jotka noutiwat ruumiin rantaan. Ruumista tarkastellessa huomasi sen olleen jo pidemmän aikaa wedessä. Puettuna oli wainaja ollut pomppatakkiin, saappaat jalassa ja 
          niiden päällä jotenkin uudet kalossit. Kuten ehkä wielä muistettaneen, katosi wiime joulukuussa hywin salaperäisellä tawalla Hattulassa sijaitsewan Merwen kartanon renki Nestor Lahti eli Lahtinen, joka oli tullut Hämeenlinnaan 
          suorittamaan eräitä kauppoja. Kaupoista oli hän saanut käsirahoja 1,600 mk. - toisten tietojen mukaan 2,400 mk. lähtien sitten paluumatkalle. Hänet oli wiimeksi nähty Hämeenlinnan asemalla, mutta koska hän oli ollut päihtyneessä 
          tilassa, ei häntä oltu päästetty junaan. Sen jälkeen Lahdesta ei enää woitu saada tietoja. Mainitun tapauksen yhteydessä kerroimme myös niistä epäilyksistä, joita oli olemassa siitä, että Lahti mahdollisesti oli murhattu. Kuten 
          aikoinaan kerroimme, löydettiin Hattulassa, Parolan leirin lähellä olewasta metsästä tiukkaan poljettu ala, missä oli wiljalti ollut werta, niin että mainitussa paikassa oli kaikesta päättäen tehty joku hämäräperäinen werityö. 
          Paikalta johtiwat reen jäljet Kirstulan suuntaan, mutta niitä ei woitu pitkällekään seurata, sillä ne katosiwat maantielle. Jo silloin poliisiwiranomaiset lausuiwat arwelunaan, että edelläkerrottu olisi yhteydessä Lahden 
          katoamisen kanssa, mutta walaistusta asiaan ei kuitenkaan onnistuttu saada.</p>
        <p>Käännyimme eilen asiassa Hattulan nimismiehen puoleen, joka tuntomerkkien nojalla piti jotenkin warmana, että yllämainittu Wanajawedestä löydetty ruumis on Lahden.</p>
        <p>Ruumis wietiin eilen leikkuuhuoneelle. Tänään käy Lahden waimo ruumista katsomassa, joten siis asiaan saataneen jotakin walaistusta.</p>
        <SubDivider className="dividerStyle" />
        <h4>Keskiviikko, 30.4.1924</h4>
        <h5>Tunnettu Hattulasta kotoisin olewaksi Lahdeksi.</h5>
        <p>Kuten eilen kerroimme, löydettiin toissa iltana Hämeenlinnan luota Wanajawedestä mätänemistilassa olewa miehen ruumis. Eilen käwi Hattulasta Lahden omaisia ruumista katsomassa ja tunsiwat sen joulukuussa kadonneeksi Lahdeksi 
          Hattulasta. Kysymyksessä ei kuitenkaan liene mitään rikollista, sillä wainajan taskuista löydettiin m.m. rahat ja kello. Kaiken todennäköisyyden mukaan oli Lahti yrittänyt kulkea jään yli kaupunkiin, mutta oli jää pettänyt, 
          ja Lahti waipunut weteen, pääsemättä sieltä ylös.</p>
        <p> Eilen toimittiwat poliisiwiranomaiset asiasta tutkimuksen.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Lauantai, 3.5.1924</h3>
      <Article titleText="Joulumarkkinoilla tapahtunut hewosenryöstö.">
        <h5>Toinenkin ryöstäjistä pidätetty.</h5>
        <p>Kuten aikoinaan kerroimme, ryöstettiin Hauholta kotoisin olewalta maanw. Rauhalahdelta Hattulaan wiewällä maantiellä hänen palatessaan Hämeenlinnan joulumarkkinoilta hewonen rekineen. Ryöstön suorittiwat kaksi miestä ja yksi 
          nainen, jotka Rauhalahti oli tieltä ottanut mukaan rekeensä.</p>
        <p>Toinen ryöstöön osanottaneista miehistä, irtolainen Wilho Smolander, Helsingistä saatiin sittemmin pidätetyksi ja on hän saanut tuomionsa. Nyttemmin on onnistuttu pidättämään toinenkin ryöstöon osallisista miehistä, rautasorwari 
          Eero Johannes Peltonen, synt. Hämeenkyrössä, mutta nykyisin kirjoissa Helsingissä. Pidätys tapahtui Torniossa Peltosen yrittäessä päästä Ruotsin puolelle. Peltonen lähetettiin Hattulan piirin nimismiehen kuulusteltawaksi ja on 
          täydellisesti tunnustanut syyllisyytensä. Hän kertoi ryöstäjien ajaneen ensin Lahteen sekä sieltä edelleen Kausalan kautta Lappeenrantaan, mistä matkaa jatkettiin Wiipuriin. Hewononen ja reki myytiin Wiipurissa, jolloin Peltonen 
          sai kaupasta osarahoja 1,000 mk.</p>
        <p>Peltonen on passitettu Hämeenlinnan lääninwankilaan ja tulee häntä wastaan nostettu juttu esille Hattulan ensi wälikäräjillä.</p>
        <p>Kolmas ryöstöön osaaottanut, nainen Martta Tourunen eli Kakkinen, kotoisin Kuopiosta, on edelleen karkutiellä.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Sunnuntai, 4.5.1924</h3>
      <Article titleText="Puukotus Lempäälässä.">
        <h5>„Liikemies” turwautunut tikariin „liikeasioista” keskusteltaessa.</h5>
        <p>Wiime keskiwiikkona oliwat „liikemiehet” E. Salminen ja Toiwo Mäkinen ryhtyneet juopottelemaan ensinmainitun asunnossa Lempäälän ja Akaan rajalla. Jostain syystä tuli kuitenkin herroille riita „liikeasioista” keskustellessa 
          ja päättyi se siihen, että Salminen sieppasi tikarin ja löi sillä kaksi kertaa Mäkistä selkään. Puukotettu wietiin heti päiwäjunalla Toijalaan, jossa asianomainen lääkäri totesi haawat hengenwaarallisiksi. Samana iltana wietiin 
          Mäkinen Tampereelle yleiseen sairaalaan, jossa häntä hoidetaan. Salminen on pidätetty.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Tiistai, 6.5.1924</h3>
      <Article titleText="Pidätetty seikkailijanainen.">
        <h5>Wuoden ajan ympäri maata „wieraillut” nainen pidätetty Janakkalassa.</h5>
        <p>Wiime huhtikuun 23 pnä pidättiwät Janakkalan poliisiwiranomaiset mainitun pitäjän Wiralan kylässä erään naishenkilön syystä, että tämä oli palstatilallisen Mikko Salosen luona tehnyt anastuksen ja myös samanlaisen teon 
          Rengossa seppä Nikanderin luona. Kuulustelussa esiintyi pidätetty Hämeenlinnan seminaarin oppilaana ja ilmoitti myös aikaisemmin käyneensä meijerikoulun, kauppakoulun ja kansanopiston. Kotipaikkaa häneltä tiedusteltaessa 
          ilmoitti hän siksi Hollolan pitäjän ja mainitsi talon nimenkin, missä hänen wanhempiensa piti asua. Kun asiasta otettiin selkoa eikä ilmoituksessa ollut mitään perää, sanoi hän, että hänen wanhempansa oliwatkin pääsiäisen 
          tienoilla muuttaneet Orimattilaan. Tämäkin tiedonanto osoittautui kuitenkin perättömäksi. Edelleen kuulusteltaessa mainitsi hän sitten olewansa helsinkiläisen kauppiaan tytär, joka oli hermotaudin takia ollut jonkun aikaa 
          sairaalassa ja matkusteli nyt sukulaistensa luona wirkistymässä. Myös Hämeenlinnassa oli hän käwäissyt ja wiettänyt yön Aliina Ahosen matkustajakodissa, käyttäen täällä Adler-nimeä. Loppujen lopuksi onnistui poliisiwiranomaisten 
          saada selwille, että nainen oli talonmiehen tytär Elin Raitio, Helsingistä kotoisin olewa joutolaisnainen, syntynyt Miehikkälässä w. 1903 ja kiertänyt noin wuoden ajan ympäri maata. Hän oli tehnyt aikaisemmin ainakin kaksi 
          warkautta, joista toisen Hywinkäällä ja toisen Kerawalla sekä tuomittu Kotkan raastuwanoikeudessa wiime tammikuussa warkaudesta ehdonalaiseen rangaistukseen.</p>
        <p>Kuwaawaa mainitun Raition „työskentelylle” on ollut se, että hän on tawalla tai toisella hankkinut eri paikoilla tuttawuuksia itselleen, käynyt sitten näiden luona wieraisilla, ottanut selwää heidän tuttawistaan ja 
          sukulaisistaan muilla paikkakunnilla, joille saawuttuaan sitten on käynyt näitä tapaamassa. Niinpä tawattiin häneltä muistikirja, missä oli eri henkilöiden nimiä satamäärin eri puolilta maata.</p>
        <p>Raition on Janakkalan nimismies passittanut irtolaisena wankilaan.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Torstai, 8.5.1924</h3>
      <Article titleText="Hattulan Katinalassa tapahtunut miestappo.">
        <h4>Talollisen pojan Kustaa Mäkelän todettu toimineen itsepuolustuksessa.</h4>
        <h5>Joutomies Arwo Enqwist saanut surmansa omasta puukostaan.</h5>
        <p>Kuten aikoinaan olemme kertoneet tapahtui Hattulan Katinalan kylässä wiime wuoden huhtik. 8 p. miestappo, jonka uhriksi joutui Pullerinmäeltä kotoisin olewa joutomies Arwo Enqwist.</p>
        <p>Mainittuna päiwänä oli Enqwist juopotellut lähtien senjälkeen juomatowereineen humalaisena kulkemaan pitkin Katinalan maantietä. Tiellä tuli seuruetta wastaan talollisen poika Kustaa Mäkelä, jonka kimppuun ensin eräs 
          seurueeseen kuuluwa joutomies Wilho Jokinen hyökkäsi sekä senjälkeen Enqwist paljastettu puukko kädessä. Mäkelä sai läheisestä halkopinosta puunnäreen, jolla itsepuolustuksekseen löi kahdesti Enqwistiä perääntyen tämän jälkeen 
          läheiselle pihamaalle. Perääntyessään Mäkelä kaatui, jolloin Enqwist hyökkäsi uudelleen hänen kimppuunsa onnistuen haawottamaan häntä käsiwarteen. Onnistuttuaan riuhtaista itsensä hyökkääjästä irti, lõi Mäkelä häntä wielä kerran 
          päähän, jolloin Enqwist kaatui maahan heittäen pian senjälkeen henkensä.</p>
        <p>Asia on senjälkeen ollut usean kerran oikeuden käsiteltäwänä.</p>
        <p>Antamassaan lausunnossa on ruumiintarkastuksen toimittanut lääkäri todennut, että Enqwist ei ole saanut surmaansa päähänsä saamasta iskusta, waan on kuoleman syynä ollut hänen reidessään ollut puukonhaawa, joka on katkaissut sekä 
          waltimon että laskimon. Kun Mäkelällä todistettawasti ei ole ollut mukanaan teräasetta, on siis Enqwist saanut surmansa omasta puukostaan hyökätessään Mäkelän kimppuun.</p>
        <p>Asia oli eilen lopullisesti käsiteltäwänä Hattulan käräjillä. Antamassaan päätöksessä oikeus todeten Enqwistin saaneen surmansa omasta puukostaan sekä Mäkelän toimineen itsepuolustustarkoituksessa wapautti Mäkelän kaikesta 
          edeswastuusta. Kulut määrättiin waltion kustannettawiksi lukuunottamatta erinäisiä wähäisempiä, jotka owat asianomaisten suoritettawat.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Lauantai, 10.5.1924</h3>
      <Article titleText="Werityö Myllymäessä.">
        <h5>Jääkäritykistön kersanttia ammuttu hengenwaarallisesti.</h5>
        <p>Wiime perjantain wastaisena yönä klo  ½12 aikan tuli Myllymäessä Läntisellä Wiertotiellä passissa olleen wartiokonstaapelin luo eräs mies ilmoittaen, että hänen asunnossaan oli haawoittunut sotilas, joka olisi toimitettawa 
          sairaalaan. Poliisin mentyä taloon n:o 15 b. saman kadun warrella teurastaja Kalle Nurmisen asuntoon, näki hän siellä erään jääkäritykistön kapitulanttikersantin makaawan werissään lattialla. Konstaapeli toimitti haawoittuneen, 
          jonka todettiin olewan jääkäritykistössä palwelewa kapitulanttikersantti Onni Ahonen, sekä myöskin asunnon omistajan teurastaja Kalle Nurmisen, joka myös oli haawoittunut käteen, lääninsairaalaan. Täällä todettiin Ahosen tila 
          warsinkin waaralliseksi. Hän oli saanut kuulan wasempaan kylkeensä ja oli kuula jäänyt ruumiiseen wahingoittaen pahasti munuaisia. Nurmisen haawa sitäwastoin oli mitätön ja päästettiin hänet kotiin saatuansa sitä ennen 
          määräyksen saapua seuraawana aamuna kuulusteltawaksi. Kun Nurminen ei kuitenkaan aamulla saapunut, lähetettiin häntä iltapäiwällä noutamaan, mutta oli tämä silloin siihen määrin juowuksissa, että kuulustelut oli siirrettäwä 
          seuraawaan päiwään.</p>
        <p>Eilen toimitetuissa kuulusteluissa on Nurminen kertonut mm. seuraawaa:</p>
        <p>Klo 9 aikan sanottuna iltana oli kapitulanttikersantti Ahonen tullut Nurmisen asuntoon, pyytäen saada jäädä yöksi eikä suostunut monista kehotuksista huolimatta poistumaan. N. oli wihdoin tähän suostunut. Kun asunnossa 
          olijat Ahonen, Nurminen sekä tämän waimo ja 10-wuotias tytär oliwat menneet nukkumaan, syntyi ½11 tienoissa jo wuoteessa olewien miesten kesken jostakin syystä riita, jolloin Ahonen oli noussut ylös tullen Nurmisen wuoteen 
          wiereen sekä kehuttuaan olewansa „Vaasasta kotoisin eikä mitään pelkääwänsä” tarttunut Nurmista kurkkuun. Nurmisen waimo, joka nukkui miehensä kanssa samassa wuoteessa oli tällöin lähtenyt asunnosta pakoon. Miesten jonkun 
          aikaa wuoteessa kahakoitua, otti Ahonen pöydälle asettamansa rewolwerin ojentaen sen Nurmista kohti. Nurminen tarttui aseeseen molemmin käsin, jolloin se laukesi ja kuula tunkeutui, haawottaen ensin Nurmista wasemman käden 
          keskisormeen, Ahosen wasempaan kylkeen. Nurminen kieltää sanottuna aikana olleensa juowuksissa sekä ettei hänellä myöskään ole Ahosen kanssa ollut mitään wihaa luullen tämän, joka oli juowuksissa jonkun oikun tähden hyökänneen 
          hänen kimppuunsa.</p>
        <p>Ahonen, jonka tila wielä on hywin heikko, on alustawassa kuulustelussa selittänyt Nurmisen ruwenneen kiusaamaan waimoaan, jonka wuoksi hän oli kehottanut Nurmista olemaan hiljaa ja laittautumaan nukkumaan. Kun Nurminen hänen 
          kiellostaan huolimatta yhä edelleenkin rähisi waimolleen, nousi A. wuoteeltaan mennen Nurmisen wuoteen luo kehottaen N:n waimoa siirtymään hänen wuoteeseensa ja luwaten itse nukkua Nurmisen kanssa. Tällöin oli N. kiiwastunut ja 
          hyökännyt hänen kimppuunsa, jolloin A. otti rewolwerinsa ampuen sillä warotukseksi haawottamatta ketään. Tällöin oli N. tarttunut rewolweriin, jolloin se laukesi toistamiseen edellämainitulla seurauksella. Kertoi jääneensä 
          sanottuun asuntoon Nurmisen waimon nimenomaisesta pyynnöstä sekä ettei asunnossa nautittu wäkijuomia.</p>
        <p>Nurminen, joka kuulustelujen aikana oli pidätettynä, on päästetty wapaalle jalalle.</p>
      </Article>
      <Article titleText="Hattulan y.m. pitäjäin">
        <h5>kihlakunnanoikeudessa</h5>
        <p>Perjantaina tuomittiin Hanne Jaakko Hattulan Sattulasta meluamisesta 2 kk. ja pahoinpitelystä 4 kk. wankeuteen sekä juopumuksesta 400 mk. sakkoon eli kärsimään yhteensä 5 kk. wankeusrangaistuksen. Samaa henkilöä wastaan oli 
          wireillä toinenkin juttu mikä lykättiin ensi syyskäräjiin.</p>
        <p>Eräs toinen Sattulalainen tuomittiin meluamisesta 300 mk. ja juopumuksesta 250 mk. sakkoihin.</p>
        <p>Puukotuksesta tuomittiin eräs Hämeenlinnalainen työmies 160 mk. sakkoon.</p>
        <p>Pari näpistelijää tuomittiin poissaolosakkoihin.</p>
        <p>Wiime marraskuun 7 pnä oliwat Katinasta kotoisinolewat Wille Jokinen, Kilpinen ja Koskela tunnettuun tapaansa juopotelleet ja reisullaan tulleet Kirstulan kartanon alueelle, jossa tunkeutuessaan erään rengin asuntoon 
          peloittiwat rengin waimon lapsineen ikkunasta pakosalle ja häirittyään ihmisiä maantiellä oliwat menneet kartanon pihamaalle ja wiritelleet laulujaan sielläkin. Asia oli perjantaina toisen kerran esillä kihlakunnanoikeudessa 
          ja koska Kilpinen ja Koskela eiwät olleet wieläkään suwainneet olla saapuwilla, tuomitsi kihlakunnanoikeus heidät poissaolosta oikeudesta wastaajina kummankin 500 mk. sakkoihin wastaten 50 päiwän wankeutta, sekä welwoitettiin 
          heidät olemaan ensi käräjissä saapuwilla kummankin 1,000 markan sakon uhalla.</p>
        <h5>Wiinakauppiaat selwittelemät wälejään.</h5>
        <p>Hattulan y.m. pitäjäin kihlakunnanoikeudessa tuomittiin kaksi henkilöä kumpikin wuodeksi wankeuteen semwuoksi, että oliwat yllyttäneet August Sulander ja Kaukoranta nimiset miehet Hattulassa petkuttamaan Juho August 
          Seppälältä yhden kanisterin spriitä. Petkuttajat tuomittiin kumpikin puoleksitoista wuodeksi wankeuteen ja wiinanomistaja hallussapidosta 1,125 markan sakkoihin.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Tiistai, 13.5.1924</h3>
      <Article titleText="Myllymäen ampumistapaus.">
        <h5>Kersantti Ahonen kuollut.</h5>
        <p>Jääkäritykistörykmentin kersantti Ahonen, joka wiime perjantain wastaisena yönä joutui Myllymäessä teurastaja Kalle Nurmisen asunnossa nähtäwästi wahingonlaukauksen uhriksi, kuoli saamansa waikean ampumahaawan johdosta täkäl. 
          lääninsairaalassa sunnuntai-iltana klo 11.</p>
        <p>Wainaja, joka oli syntynyt 1899, oli kotoisin Wesannon pitäjästä.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Torstai, 15.5.1924</h3>
      <Article titleText="Raaka weriteko Urjalassa.">
        <h5>Eräs 17-wuotias talollisenpoika joutunut pahoinpitelyn uhriksi.</h5>
        <p>Eilen aamulla klo 4 ajoissa tapahtui Urjalassa raaka pahoinpitely, mistä olemme saaneet seuraawat tiedot:</p>
        <p>Kun talollisenpoika Reino Talonen mainittuun aikaan oli Urjalan pitäjän Suonpään kylässä olewalla Kokonjärwellä kokemassa rysiään, tapasi hän siellä lohkotilallisen Walfrid Lehtosen eli Taipaleen, joka alkoi wäittää, että 
          Talonen olisi edellisenä yönä ollut kokemassa hänen rysiään. Tästä oli seurauksena se, että Lehtonen wihapäissään tähtäsi mukanaan olleella haulikolla Talosta, ampuen häneen haulipanoksen. Haulit tunkeutuiwat Talosen 
          kaswoihin, kylkeen ja käteen. Tähän ei Lehtonen wielä kuitenkaan tyytynyt, waan iski Talosta haulikon perällä käteen. Omin woimin jaksoi Talonen tapahtumapaikalta käwellä erääseen lähellä olleeseen asuntoon, mistä hänet sitten 
          toimitettiin edelleen hoitoa saamaan. Eilen aamulla wietiin Talonen heikossa tilassa Helsinkiin hoidettawaksi. Talonen on 17-wuotias. Lehtonen, joka on iäkkäämpi mies, on perheellinen.</p>
        <p>Asian johdosta pidettiin eilen poliisitutkinto. Lehtonen on toistaiseksi pidätettynä.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Tiistai, 20.5.1924</h3>
      <Article titleText="Wekseliwäärennyksestä pidätetty.">
        <h5>Kysymyksessä on kaikkiaan n. 23,000 mk.</h5>
        <p>Mikäli olemme saaneet tietää, on Hämeenlinnan poliisin toimesta pidätetty täällä eräs entinen kauppias, joka tehdyn ilmoituksen mukaan olisi tehnyt itsensä syypääksi 13,150 mk. suuruiseen wekseliwäärennykseen ja 10,000 mk. 
          suuruisen kassakreditiiwiluoton wäärennykseen. Wekselit lienewät myydyt Tampereen Pankkiin, mistä myös kassakreditiiwilaina on otettu.</p>
        <p>Edelläolewan tietomme johdosta käännyimme eilen illalla Hämeenlinnan etsiwän osaston puoleen, mutta ilmoitettiin meille, ettei poliisi wielä asian nykyisellä asteella ollessa woi antaa siitä mitään tietoja.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Perjantai, 23.5.1924</h3>
      <Article titleText="Miestappo Lammilla.">
        <h5>Tuuloslainen työmies ammuttu.</h5>
        <p>Wiime sunnuntai-iltana klo 8 aikaan tapahtui Lammilla Mommilan tukkityömaalla werityö, jonka uhriksi joutui työmies Jussi Hakala Tuuloksen pitäjän Teuron kylästä. Pidetyssä poliisitutkinnossa on käynyt ilmi seuraawaa:</p>
        <p>Noin 4 kilometrin päässä Mommilasta aiwan maantien wieressä sijaitsee Iso-Pippuri niminen torppa, jossa paikkakunnalla majailewat tukkityöläiset sillä kertaa pitiwät asuntoaan. Pyhäiltapäiwänä wiettiwät 4—5 miestä aikaansa 
          torpan riihiladon luona. Tällöin syntyi pientä kinastelua työnjohtaja Robert Laineen ja mainitun Hakalan wälillä. Joskin syystä oli heillä ollut wanhaa wihaa jo edellisestä wuodesta lähtien. Hakalan ilmoitettiin ensin 
          jollain tawoin esiintyneen uhkaawasti, jolloin Laine otti esiin rewolwerinsa ampuen sillä ensin ilmaan sekä, kun Hakala ei hänen mielestään ehkä wielä ollut tarpeeksi siiwolla, sen jälkeen suoraan Hakalaa kohti. Ensimäinen 
          näistä kahdesta luodista meni ohi, mutta toinen osui Hakalan päähän, jolloin tämä heti tuupertui maahan ja heitti henkensä. Noin tunnin perästä oli jo wiranomaisia paikalla, jotka samoin totesiwat, että Hakalassa ei enää 
          ollut elonmerkkejä. Käwi myös selwille, että Laine teon tehdessään oli wahwasti juowuksissa. Että miehellä olikin ollut wiinanwiljaa mukanaan, näkyi tyhjästä wiinakanisteristakin. Hakalan ruumis wietiin Lammin leikkuuhuoneelle 
          ja ampuja Laine passitettiin lääninwankilaan.</p>
        <p>Molemmat oliwat nuoria naimattomia miehiä. Laine on kotoisin Lammin pitäjän Riikosten kylästä ja toiminut erään puutawarayhtiön apulaistyönjohtajana.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Lauantai, 24.5.1924</h3>
      <Article titleText="Koulupoika ampunut ikäistään Lopella.">
        <h5>Ammuttu kuollut eilen.</h5>
        <p>T.k. 20 pnä ampui Lopella Pilpalan kansakoululla Paawo Ekholm Tauno Wiitalaa mauserpistoolilla watsaan. Haawoittunutta lähdettiin heti junalla wiemään Helsinkiin lääkärinapua saamaan. Ampuja kuten ammuttukin oliwat 
          yllämainitun koulun neljännen osaston oppilaita, kotoisiin Hunsalan kylästä. Pistoolin oli ampuja saanut palstatilallisen poika Erkki Nikanderilta, joka oli koulun kolmannen luokan oppilas.</p>
        <p>Mikäli meille eilen illalla ilmoitettiin, kuoli Tauno Wiitala eilen saamaansa haawaan Helsingissä.</p>
        <p>Kirjeenwaihtajamme ilmoituksen mukaan owat Lopella kansakoulunpojat ennenkin saaneet käsiinsä ampuma-aseita. Toiwottawasti nyt sattunut ikäwä tapaus tekee lopun tästä holtittomuudesta.</p>
      </Article>
      <Article titleText="Janakkalan, Hausjärwen, y.m. pitäjäin wälikäräjillä">
        <h5>eilen Hämeenlinnassa käsiteltiin m.m. seuraawat asiat:</h5>
        <p>Joutomies A. Sinkkonen Wiipurin Kolikkoinmäeltä tuomittiin toiskertaisesta warkaudesta pidettäwäksi 1 wuosi kuritushuoneessa ja olemaan sitä paitsi 4 wuotta wailla kansalaisluottamusta sekä maksamaan warastamistaan 
          waatteista korwausta työmiehille Nummelin ja Ylänen 1,282 mk. Kuten muistettaneen, warasti wastaaja wiime tammikuussa Harwialasta waatetawaraa.</p>
        <p>Itsellisen poika Martti Mallenius Riihimäeltä tuomittiin nuorena henkilönä tekemästään warkaudesta pidettäwäksi 6 kk. wankeudessa ja hänen weljensä Sakari Mallenius kaswatuslaitokseen. Sitä paitsi tuomittiin eräs kolmas 
          poika kuritettawaksi.</p>
        <p>Itsellisen tytär Elli Dagmar Salminen Riihimäeltä tuomittiin lapsensa surmaamisesta pidettäwäksi 1 w. wankeudessa.</p>
        <p>Kieltolakirikkomuksia käsiteltiin mainituilla käräjillä parikymmentä.</p>
      </Article>
      <Article titleText="Tuomittu pirtutrokari.">
        <h5>Wanajalainen Olli Numminen sai eilen tuomionsa.</h5>
        <p>Kuten muistettaneen, pidätettiin wiime maaliskuussa kiiwanlaisen kahakan jälkeen Wanajan pitäjän Mallinkaisilta kotoisin olewa pirtutrokari Olli Nummelin, ja tapahtui pidätys Janakkalan Saloisilla. Tässä kahakassa haawoittui 
          m.m. Nummelinia takaa-ajamassa ollut talollisen poika Uuno Eerola, läwistäen luoti hänen reitensä sekä haawoittaen myös reen edessä ollutta hewosta. Myöhemmin haawoittui myös eräs toinen hewonen.</p>
        <p>Syyte Nummelinia wastaan oli eilen esillä Janakkalan y.m. pitäjän kihlakunnanoikeudessa, joka tuomitsi wastaajan Uuno Eerolan pahoinpitelystä 2:ksi kuukaudeksi wankeuteen, korwaamaan Eerolalle työkywyn menettämisestä 450 mk., 
          kiwusta ja särystä 500 mk., lääkärinpalkkiota 75 mk. ja oikeuskuluja 300 mk., talollisen emännälle Miina Eerolalle hewosen arwon wähenemisestä 1,700 mk. ja hewosen työkywyn wähenemisestä, hoidosta 1,800 mk. ja oikeuskuluja 
          300 mk., A. Korkeawuorelle hewosen arwon wähenemisestä 1,400 mk., hewosen työkywyn wäliaikaisesta wähentymisestä ja hoidosta 1,800 mk. ja lääkärinpalkkioita 75 mk., Kalle Isomäen pahoinpitelystä, joka oli tapahtunut wiime 
          joulukuun 29 pnä, 200 mk. sakkoon, alkoholipitoisten aineiden ammattimaisesta myynnistä 6:ksi kk:ksi wankeuteen ja ampuma-aseen luwattomasta hallussapidosta 100 mk. sakkoon. Kun kaikki edellämainitut rangaistukset yhdistettiin, 
          tuomittiin wastaaja pidettäwäksi 8 kk. wankeudessa sekä menettämään takawarikoitun pistoolin ja pirtun waltiolle ja suorittamaan todistajapalkkioita 574 mk.</p>
      </Article>

      <SubDivider className="dividerStyle" />
      <h3>Lauantai, 31.5.1924</h3>
      <Article titleText="Surullisesti päättynyt automatka.">
        <h5>Janakkalan kunnan ulosottoapulainen I. Karjalainen saanut tapaturmassa surmansa.</h5>
        <p>Helatorstain wastaisena yönä tapahtui Hämeenlinnan lähistöllä Hattelmalan harjulla surullinen tapaturma, jossa Janakkalan kunnan ulosottoapulainen, ent. nimismies Iiwari Karjalainen sai surmansa. Tapahtumasta on pidetyssä 
          alustawassa kuulustelussa käynyt ilmi seuraawaa:</p>
        <p>Helatorstain wastaisena yönä klo 11—12 ajoissa oli mainittu Karjalainen erään toisen henkilön ja parin naisen seurassa ajelemassa Hämeenlinnalaisella wuokra-autolla n:o 412, jota ohjasi autonkuljettaja Eino Akseli Helin, 
          kotoisin Hattulan pitäjästä. Mainitut henkilöt oliwat ajaneet autolla Hattelmalaan ja oliwat palaamassa takaisin Hämeenlinnaan, kun auto luiskahti tieltä siwuun, kulkien n. 60 m. matkan toisen puolen pyörät tien syrjässä, 
          kuljettajan yrittäessä saada sitä jälleen tielle nousemaan. Tällöin siwuutti auto niin läheltä erään tien wieressä olewan puhelinpylwään, että auton toisessa reunassa istuwa Karjalainen löi päänsä pylwäseen, mennen heti 
          tajuttomaan tilaan. Kuljettaja lähti loukkaantunutta tuomaan heti Hämeenlinnaan lääkärin luo apua saamaan, toisten jäädessä mainitulle paikalle. Täällä wei kuljettaja Karjalaisen erään lääkärin luo, joka ei kuitenkaan ollut 
          kotona, ja sitten suoraan lääninsairaalaan, minne saawuttua woitiin wain todeta Karjalaisen kuolleen saamastaan wammasta. Mitään muuta ulkonaista merkkiä kuin pienenpuoleinen naarmu otsassa ei hänessä näkynyt.</p>
        <p>Toimitetussa kuulustelussa on käynyt selwille, että matkalla oli nautisteltu wäkijuomia. Helin myöntää ottaneensa yhden ryypyn, mutta kiistää olleensa juowuksissa. Kuitenkin on toisaalta käynyt selwille, että hän oli 
          juowuksissa. Helin, joka kuulusteluja warten on toistaiseksi pidätetty, suoritti wiime talwena autonohjaajakurssin ja on toiminut täällä autonkuljettajana kuluneen kewään aikana.</p>
        <p>Tapaturmassa surmansa saanut Karjalainen oli perheellinen mies ja iältään n. 45 wuoden ikäinen.</p>
      </Article>

      <br></br>
      <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/titles/0356-2751?year=1924">Linkki vuosikertaan 1924</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Rikoksia 1924</title> // metadata

export default Crimes1924Page 