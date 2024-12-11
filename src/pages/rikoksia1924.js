import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"
import DateDivider from "../components/dateDivider"

import "../styles/base/global.css"

import Divider from "../assets/divider.svg"
import SubDivider from "../assets/sub-divider.svg"



const Crimes1924Page = () => {
  return (
    <Layout titleText="Hämeen Sanomat, 1924">
      <h2>Rikollista toimintaa Hämeenlinnassa ja lähiseuduilla</h2>
      <Divider className="dividerStyle"/>
      <p className="centeredStyle boldStyle" style={{margin:"8px 0"}}>Torstai, 3.1.1924</p>
      <Article titleText="Tappelu Lammilla.">
        <h5>Kolme miestä saanut haawoja.</h5>
        <p>Kun toisena joulupäiwänä Lammin Porraskosken työwäenyhdistys piti iltamaansa Porraskosken työwäentalolla, syntyi siellä kahden miesjoukon wälillä tappelu, missä käytettiin aseina puukkoja ja halkoja. Wanhoja wihoja 
          selwitellessään sai tappelussa työmies Eino Laakso puukosta haawan oikeaan käsiwarteensa, niin että siitä katkesi waltimo ja haawoittunut oli tuotawa Hämeenlinnan lääninsairaalaan hoitoa saamaan. Sitä paitsi sai 
          tappelussa pari muutakin miestä pienempiä haawoja.</p>
        <p>Tappelun johdosta on toimitettu poliisitutkinto, jota ei wielä ole päättynyt. Toistaiseksi ei myöskään ole ketään pidätetty.</p>
      </Article>

      <DateDivider date="Perjantai, 4.1.1924"/>
      <Article titleText="Jokiniemen murha Jokioisissa.">
        <h5>Murhaaja Koiwula tuomittu 3 w:ksi kuritushuoneeseen.</h5>
        <p>Kuten olemme kertoneet, tapahtui joulukuun 12 p:nä Jokioisten Latowainiossa raaka murha, jonka uhriksi joutui talollisenpoika Siwart Jokiniemi. Murhajuttu oli keskiwiikkona esillä Humppilan wälikäräjillä. Oikeus tuomitsi 
          murhaajan, talollisenpoika Niilo Koiwulan 3 wuodeksi kuritushuoneeseen sekä menettämään kansalaisluottamuksen 6 wuodeksi. Tämän lisäksi welwoitettiin K. maksamaan murhatun kolmelle alaikäiselle lapselle 50 mk. kuukaudessa 
          kullekin niin kauan kuin he täyttäwät 17 wuotta.</p>
      </Article>

      <DateDivider date="Lauantai, 5.1.1924"/>
      <Article titleText="Miestappo Urjalassa.">
        <h5>Eräs palstatilallinen isketty puukolla kuoliaaksi.</h5>
        <p>Uuden wuoden päiwän iltana tapahtui Urjalassa lähellä Annulan kylää pahoinpitely, jonka uhriksi joutui palstatilallinen Wihtori Saari. Saari oli erään Kalle Ahon (Perhon-Kallen) seurassa, ja jostakin syystä oli miesten 
          kesken syntynyt riita, jolloin Aho lõi Saarta puukolla reiteen ja kupeeseen, niin että lyöty kuoli Urjalan sairaalassa saamistaan haawoista t.k. 2 p:n iltana. Sekä lyöjä oliwat tunnetut kumpikin siiwoiksi miehiksi, niin että 
          kysymyksessä olewa murha on luettawa epäilemättä wäkijuomien tiliin.</p>
        <p>Saari jätti jälkeensä waimon ja 4 lasta, joista nuorin on wasta 3 kk. Aho, joka on pidätetty, on sen sijaan naimaton.</p>
      </Article>

      <DateDivider date="Tiistai, 8.1.1924"/>
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

      <DateDivider date="Sunnuntai, 13.1.1924"/>
      <Article titleText="Raaka puukotus.">
        <h5>Juopunut roisto puukottanut eilen illalla kahta iäkästä miestä.</h5>
        <p>Raaka puukotus tapahtui eilen illalla klo ½ 6 tienoissa Lääninsairaalan kohdalla. Kun ent. pika-ajuri W. Mollberg ja kruununluotsi Oksanen kulkiwat mainitun sairaalan kohdalla tuli heitä wastaan juopunut huligaani, joka 
          sanaakaan sanomatta iski edellistä puukolla käsiwarteen. Kun Oksanen alkoi roistoa moittia tämän raakamaisesta menettelystä iski huligaani häntäkin puukolla wasempaan käsiwarteen. Tämän jälkeen roisto iski wielä kerran 
          Mollbergia tälläkin kertaa käsiwarteen. Molemmat puukotetut lähtiwät heti lääninsairaalaan, jossa heidät sidottiin. Oksasen haawa oli liewempi, joten hänet päästettiin kotiin. Mollbergin tila sitä wastoin on liiallisen 
          werenhukan takia huononlainen. Toiweita paranemisesta kuitenkin on.</p>
        <p> Kumpikaan puukotetuista, jotka owat jo iäkkäitä miehiä, eiwät tunne puukottajaa. Poliisi on kuitenkin hänen jäljillään ja toiwottawasti roisto saa raakalaisteostaan ansaitsemansa rangaistuksen.</p>
      </Article>

      <DateDivider date="Tiistai, 15.1.1924"/>
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

      <DateDivider date="Keskiviikko, 16.1.1924"/>
      <Article titleText="Myllymäen werityö.">
        <h5>Uhrien tila.</h5>
        <p>Maanantain wastaisena yönä Myllymäessä kaamean werityön uhreiksi joutuneitten tilan eilen illalla lääninsairaalasta tiedustellessamme saimme tietää, että Ekholmin tyttö Ester edelleenkin on tajuttomassa tilassa. Sen sijaan 
          poika Teudor on nyt täysin tajuissaan, mutta on hänenkin tilansa edelleen heikko, niin ettei mitään warmaa kummankaan eloonjäämisestä ole. Ekholmin waimon tila sen sijaan olosuhteisiin katsoen on parempi.</p>
        <h5>Ekholm passitettu lääninwankilaan.</h5>
        <p>Eilen passitettiin Ekholm, jota on säilytetty täkäläisessä etsiwässä osastossa, Hämeenlinnan lääninwankilaan odottamaan jutun oikeudellista käsittelyä. Juttu tulee esille Hämeenlinnan raastuwanoikeudessa ensi wiikolla.</p>
      </Article>

      <DateDivider date="Perjantai, 18.1.1924"/>
      <Article titleText="Warkauksia Riihimäellä.">
        <h5>Matkustajalta wiety matkalaukku tawaroineen.</h5>
        <p>Eilistä wastaan yöllä Helsingistä Rajajoelle matkalla olewan junan seisoessa Riihimäen asemalla warastettiin toisen luokan matkustajawaunusta Wiipurin pitäjästä kotoisin olewan tilallisen pojan Mauri Lagerstamin matkakalaukku 
          ja naulasta harmaa pomppatakki, tawaroiden omistajan ollessa asemarawintolassa. Laukussa oli miehen puku, aluswaatteita ja laukkuja. Yhteensä nousee warastetun tawaran arwo 3,000 mk:aan. Warkaasta ei ole tietoa.</p>
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

      <DateDivider date="Lauantai, 19.1.1924"/>
      <Article titleText="Myllymäessä tapahtunut weriteko.">
        <h5>Uhrien tila.</h5>
        <p>Eilen illalla lääninsairaalasta tiedustellessamme Ekholmin waimon ja lasten tilaa, ilmoitettiin meille waimon ja pojan olewan parempaan päin. Tyttö on edelleenkin tajuttomassa tilassa.</p>
      </Article>
      <Article titleText="Taas werityö.">
        <p>Eilen illalla lyötiin Punaportilla työm. R. Flinckmania puukolla selkään keuhkopussiin asti ulottuwa haawa. Puukotettu tuotiin lääninsairaalaan, jossa häntä edelleen hoidetaan. Puukottajaa, jota ei vielä liene saatu kiinni, 
          ei Flinckman sanonut tuntevansa.</p>
      </Article>

      <DateDivider date="Sunnuntai, 20.1.1924"/>
      <Article titleText="Hattulan maantiellä ryöstetty hewonen tawattu Kärkölässä.">
        <h5>Ryöstäjiä ei ole saatu kiinni.</h5>
        <p>Kuten sanomalehdissä on kerrottu, ryöstettiin t.k. 12 pnä Hattulan maantiellä klo 9 aikaan illalla eräältä Kalle Heikkilä-nimiseltä hewonen ajopeleineen ja tawaroineen. Ryöstön suoritti kaksi mieshenkilöä ja 1 nainen siten, 
          että he heittäytyiwät rekeen ja sortiwat H. maantielle ja ajoiwat edelleen. Nyttemmin owat Hollolan poliisit tawanneet ryöstetyn hewosen Kärkölästä palstatilallinen Haliselta, joka sanoo sen ostaneensa roswoilta. Hewonen on 
          palautettu omistajalleen.</p>
        <p>Ryöstön tehneistä henkilöistä ei poliisilla wielä liene tietoa.</p>
      </Article>

      <DateDivider date="Tiistai, 22.1.1924"/>
      <Article titleText="Myllymäen weriteon uhrit.">
        <h5>Heidän tilansa ennallaan.</h5>
        <p>Eilen illalla Hämeenlinnan lääninsairaalasta tiedustellessamme Myllymäen werityön uhrien Ekholmin waimon ja lasten tilaa, ilmoitettiin heidän tilansa olewan ennallaan. Tyttö on edelleenkin tajuttomassa tilassa.</p>
        <p>Juttu Ekholmia wastaan tulee huomenna esille Hämeenlinnan raastuwanoikeudessa.</p>
      </Article>

      <DateDivider date="Keskiviikko, 23.1.1924"/>
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

      <DateDivider date="Torstai, 24.1.1924"/>
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

      <DateDivider date="Lauantai, 26.1.1924"/>
      <Article titleText="Ryöstö Forssassa.">
        <h5>Wiinakauppias myy pirtua puukon awulla.</h5>
        <p>Tiistai-iltana tapahtui Forssan Kuuston kylässä rohkea ryöstö. Muuan Wille Nybom-niminen irtolainen tarjosi eräälle Koiwula-nimiselle henkilölle pirtua 40 markan hinnasta limonaadipullollinen. Kun Koiwula kieltäntyi 
          ostamasta, weti Nybom esille puukkonsa ja sanoi „wai et osta”, jolloin K. ilmoitti suostuwansa kauppaan ja weti esiin lompakkonsa. Nybom ei kuitenkaan tyytynytkään kauppojen tekoon, waan anasti koko lompakon, jossa oli 
          rahaa 590 mk. Nybom pidätettiin jo torstaina ja saatiin häneltä silloin takaisin anastetuista rahoista 450 mk., kun sitä wastoin 140 mk. jo oli mennyt. Nybom on pidätettynä Forssan poliisikamarissa. Hän on aikaisemminkin 
          kärsinyt rangaistuksia warkaudesta.</p>
      </Article>

      <DateDivider date="Sunnuntai, 27.1.1924"/>
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

      <DateDivider date="Keskiviikko, 30.1.1924"/>
      <Article titleText="Myllymäessä tapahtunut werityö.">
        <h5>Toinenkin werityön uhreista kuollut.</h5>
        <p>Eilen kuoli Hämeenlinnan lääninsairaalassa Myllymäessä muurari Ekholmin asunnossa tapahtuneen werityön uhreista toinen, muurari Ekholmin 7-wuotias tyttö.</p>
      </Article>

      <DateDivider date="Keskiviikko, 6.2.1924"/>
      <Article titleText="Tappelu Hattulassa.">
        <h5>Kolme miestä saanut puukonhaawoja.</h5>
        <p>Wiime lauantai-iltana oli Sattulan työwäentalolla Idänpään woimisteluseura „Toiween” wierailuiltama, mihin oli saapunut myös joukko huligaaneja. Näiden kesken syntyi työwäentalon pihamaalla riita sillä seurauksella, että 
          eräs Onni Salin Hämeenlinnan maalaiskunnasta iski puukolla muurari Uuno Saarista Hattulan Sattulan kylästä wasemmalle puolelle rintaa aina keuhkoihin ulottuwan haawan. Sitä paitsi sai myös lyöjä Salin puukonhaawan selkäänsä 
          ja muuuan Wilho Rantala myös wähäisen puukonpiston. Saarinen oli tuotawa Hämeenlinnan lääninsairaalaan hoidettawaksi. Siitä, ketkä owat Salinia ja Rantalaa lyöneet, ei ole wielä tietoa. Poliisi tutkii asiaa. Salinia ei ole 
          toistaiseksi pidätetty.</p>
        <p>Tappeluun osaaottaneista oliwat muutamat jonkun werran humalassa.</p>
      </Article>

      <DateDivider date="Torstai, 7.2.1924"/>
      <Article titleText="Myllymäessä tapahtunut murha.">
        <h5>Juttu Ekholmia wastaan ollut eilen esillä Hämeenlinnan raastuwanoikeudessa, mutta lykätty helmikuun 20 päiwään.</h5>
        <p>Eilen oli Hämeenlinnan raastuwanoikeudessa toisen kerran esillä syyte muurari Kalle Konstantin Ekholmia wastaan, joka muutama wiikko sitten eräänä yönä wasaralla ruhjoi Myllymäessä Torikadun 11:ssa waimoaan ja kolmea 
          lastaan, niin että lapsista 10-wuotias poika wähää myöhemmin heitti henkensä.</p>
        <p>Raastuwanoikeus lykkäsi jutun enemmän käsittelyn helmikuun 20 päiwään lääninwankilan lääkärin lausunnon saantia warten Ekholmin mielentilasta.</p>
      </Article>

      <DateDivider date="Torstai, 14.2.1924"/>
      <Article titleText="Wiialassa tapahtunut puukotus.">
        <h5>Toinenkin konst. Heikkilän puukottaja pidätetty.</h5>
        <p>Niinkuin aikoinaan kerroimme, puukotettiin Wiialassa joitakin aikoja sitten poliisikonstaapeli Heikkilää, hänen ollessaan wirantoimituksessa, melko pahasti, niin että hänen oli turwauduttawa lääkärinhoitoon. Toinen 
          puukottajista saatiin jo silloin pidätetyksi ja toisen rikollisen etsiskelyihin ryhdyttiin. Nyttemmin on tämä toinenkin puukottaja Akaan piirin nimismiehen pyynnöstä pidätetty Helsingissä. Mies, nimeltään Lauri Nieminen, 
          ammatiltaan työmies, on kotoisin Lempäälän Kuokkalasta. Pidätetty on tuotu Toijalaan kuulusteluja warten, ja tulee juttu häntä wastaan esille luultawasti Akaan ensi wälikäräjillä. — Toinen puukottajista on parhaillaan 
          wankilassa sowittamassa entisiä kolttosiaan.</p>
      </Article>

      <DateDivider date="Torstai, 21.2.1924"/>
      <Article titleText="Myllymäessä tapahtunut murha.">
        <h5>Raastuwanoikeus määrännyt Ekholmin toimitettawaksi mielisairaalaan hänen mielentilansa selwille saamiseksi.</h5>
        <p>Hämeenlinnan raastuwanoikeuden eilisessä istunnossa oli kolmannen kerran esillä syyte muurari Kalle Konstantin Ekholmia wastaan tunnetusta Myllymäessä tapahtuneesta werityöstä. Lääninwankilan lääkäriltä, tri Sahlbergilta 
          oli saapunut raastuwanoikeudelle pyydetty lausunto, jossa tri Sahlberg ilmoitti tutkineensa wastaajan mielentilaa ja hawainneensa hänen waikuttawan hermostuneelta, woimatta kuitenkaan täkäläisissä oloissa antaa warmaa tietoa 
          wastaajan mielentilasta rikoksen teon aikana, katsoen näin ollen suotawaksi, että Ekholm lähetettäisiin johonkin keskusmielisairaalaan Ekholmin mielentilan tarkempaa tutkimista warten.</p>
        <p>Kun raastuwanoikeuden puheenjohtaja oli tehnyt Ekholmille erinäisiä kysymyksiä, joihin Ekholm sangen selwästi wastasi, päätti raastuwanoikeus passittaa Ekholmin takaisin läänin wankilaan, josta hänet on aikanaan toimitettawa 
          johonkin waltion mielisairaalaan, jotta hänen mielentilastaan saadaan lausunto.</p>
      </Article>

      <DateDivider date="Sunnuntai, 2.3.1924"/>
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

      <DateDivider date="Keskiviikko, 5.3.1924"/>
      <Article titleText="Puukotus Hattulassa.">
        <h5>Kahta miestä lyöty, joista toista hengenwaarallisesti.</h5>
        <p>Wiime sunnuntaina tapahtui Hattulan Pekolassa puukotus, jossa 2 miestä sai haawoja. Maantiellä oliwat kirwesmies Einari Heinonen ja työmies Eemeli Lundahn tawanneet työmies F. A. Heinosen, joka oli ollut päihtyneessä tilassa. 
          Jostakin syystä oli wiimemainittu tulistunut ja tarttunut puukkoonsa, iskien sillä kirwesmies Heinosta 7—8 kertaa, olematta haawat kuitenkaan mikään hengenwaarallinen. Sen sijaan sai Lundahn puukosta niin woimakkaan iskun 
          rintaansa, että haawa ulottuu aina keuhkoihin saakka. Hänen wammansa on hengenwaarallinen.</p>
        <p>Puukotetut toimitettiin wielä samana yönä Hämeenlinnan lääninsairaalaan hoitoa saamaan. Lyöjä on myös pidätetty.</p>
        <p>Niin puukotetut kuin puukottajakin owat kotoisin Hattulasta.</p>
      </Article>

      <DateDivider date="Torstai, 6.3.1924"/>
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

      <DateDivider date="Perjantai, 7.3.1924"/>
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

      <DateDivider date="Lauantai, 8.3.1924"/>
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

      <DateDivider date="Tiistai, 18.3.1924"/>
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

      <DateDivider date="Torstai, 20.3.1924"/>
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

      <DateDivider date="Perjantai, 21.3.1924"/>
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

      <DateDivider date="Torstai, 27.3.1924"/>
      <Article titleText="Riihimäellä tapahtunut poliisin pahoinpitely.">
        <h5>Wastaaja tuomittu wuodeksi kuritushuoneeseen.</h5>
        <p>Kuten aikaisemmin olemme kertoneet, tapahtui Riihimäen lasitehtaalla joku aika sitten pahoinpitely, minkä alaiseksi joutui eräs humalaisia rauhoittamaan lähetetty poliisikonstaapeli. Tällöin iski nimittäin työmies T. A. 
          Ekman puukolla mainittua poliisia.</p>
        <p>Juttu Ekmania wastaan oli eilen esillä Hausjärwen y.m. pitäjäin kihlakunmanoikeudessa, joka tuomitsi wastaajan pahoinpitelystä wuodeksi kuritushuoneeseen, juopumuksesta 200 mk. sakkoa ja spriin nauttimisesta 100 mk. eli 
          rangaistuksen yhdistettyinä tuomittiin wastaaja pidettäwäksi 1 w. 7 p. kuritushuoneessa.</p>
      </Article>

      <DateDivider date="Perjantai, 28.3.1924"/>
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

      <DateDivider date="Sunnuntai, 30.3.1924"/>
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

      <DateDivider date="Sunnuntai, 13.4.1924"/>
      <Article titleText="Petollisia pirtukauppiaita.">
        <h5>Myyneet Hämeenlinnassa ostajalleen wettä pirtun asemasta.</h5>
        <p>Eilen aamulla ilmotti H:linnassa ajawa kuorma-ajuri Oskari Yliseppä, että hän sanottuna aamuna klo ½9 ajoissa oli Hämeenlinnan kauppatorilta ostanut parilta mieheltä 20 litraa pirtua, joka oli 4:ssä 5:n litran kanisterissa, 
          mutta että kotonaan, tarkemmin tutkittuaan kanisterien sisältöä, hän olikin huomannut niiden sisältäwän suurimmaksi osaksi wettä. Poliisien onnistuikin sitten wielä eilen Hämeenlinnan asemalla pidättää miehet, jotka Ylisepälle 
          oliwat pirtun myyneet. Poliisilaitoksella oliwat miehet ilmoittaneet olewansa Lauri Armas Sawola Asikkalan pitäjästä ja Eemeli Haapamäki Lammin pitäjästä. Pidätetyt myönsiwät kyllä myyneensä Ylisepälle pirtua 900 mk. hinnasta 
          edellämainitulta määrältä, mutta kieltäwät harjoittaneensa mitään petoskauppaa.</p>
        <p>Mainittakoon, että petos pirtukaupassa oli tapahtunut siten, että kanistereihin oli pantu torwet, joissa oli n. 200 grammaa pirtua, kun sen sijaan muu osa oli wettä.</p>
      </Article>

      <DateDivider date="Tiistai, 15.4.1924"/>
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

      <DateDivider date="Torstai, 17.4.1924"/>
      <Article titleText="Tappelurähäkkä Toijalassa.">
        <h5>Mies saanut pirtutrokareilta parikymmentä puukon y.m. haawaa.</h5>
        <p>Wiime sunnuntaina tapahtui Toijalan työwäentalon lähistöllä tappelumetakka, jonka aikana työmies Yrjö Selniä hakattiin puukoilla ja nyrkkiraudoilla. S. oli riitaantunut jostain syystä paikkakunnalla tunnettujen pirtutrokarien 
          kanssa sillä seurauksella, että sai hulikaaneilta parisenkymmentä haawaa. Pahoinpidellyn sitoi kunnanlääkäri ja hoidetaan häntä kotonaan.</p>
        <p>Tulkoon mainituksi, että Toijalan asemaseudulla on elämä wiime aikoina kaikenlaisten hulikaanien ja pirtutrokarien ansiosta käynyt rauhallisille ihmisille aiwan sietämättömäksi.</p>
      </Article>

      <DateDivider date="Perjantai, 18.4.1924"/>
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

      <DateDivider date="Perjantai, 24.4.1924"/>
      <Article titleText="Waltiopetosjutut.">
        <h5>Talollinen Pulkki Hauholta syytteessä howioikeudessa.</h5>
        <p>Turun howioikeuden kolmannella osastolla, jonka puheenjohtajana on howioikeuden neuwos G. Hawu, oli eilen käsiteltäwänä Hauholta kotoisin olewaa talollista J. W. Pulkkia wastaan nostettu syyte waltiopetoksesta. Pulkki on 
          nimittäin aikaisemmin tuomittu kihlakunnanoikeudessa siitä, että hän oli ollut mukana kapinan aikana w. 1918 Toijalan ja Iittalan asemien wälillä rautatiewaunussa tapahtuneessa 19:n Mustialan maanwiljelysopiston oppilaan 
          murhassa ja 2:n oppilaan murhayrityksessä, elinkaudeksi kuritushuoneeseen. Juttu tuli alistustietä howioikeuteen, joka lähetti asiakirjat kannewiskaaliwirastolle, koska Pulkkia aikaisemmin ei oltu syytetty waltiopetoksesta.</p>
        <p>Kannewiskaali G. Westerling toisti syytteen murhista sekä waati samalla Pulkille rangaistusta waltiopetoksesta. Murhattujen omaiset yhtyiwät waatimuksiin ja waatiwat kuluja. Pulkki kielsi syyllisyytensä, myöntäen kyllä 
          olleensa mukana waunussa, mutta wäittäen, ettei ollut ampunut yhtään laukausta. Kun hän waati, että howioikeudessa kuultaisiin uudelleen erinäisiä todistajia, joita aikaisemmin jo on kuultu kihlakunnanoikeudessa, hylättiin 
          jutun käsittely heidän kuulemistaan warten toukokuun 9:nteen päiwään.</p>
      </Article>

      <DateDivider date="Tiistai, 29.4.1924"/>
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

      <DateDivider date="Lauantai, 3.5.1924"/>
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

      <DateDivider date="Sunnuntai, 4.5.1924"/>
      <Article titleText="Puukotus Lempäälässä.">
        <h5>„Liikemies” turwautunut tikariin „liikeasioista” keskusteltaessa.</h5>
        <p>Wiime keskiwiikkona oliwat „liikemiehet” E. Salminen ja Toiwo Mäkinen ryhtyneet juopottelemaan ensinmainitun asunnossa Lempäälän ja Akaan rajalla. Jostain syystä tuli kuitenkin herroille riita „liikeasioista” keskustellessa 
          ja päättyi se siihen, että Salminen sieppasi tikarin ja löi sillä kaksi kertaa Mäkistä selkään. Puukotettu wietiin heti päiwäjunalla Toijalaan, jossa asianomainen lääkäri totesi haawat hengenwaarallisiksi. Samana iltana wietiin 
          Mäkinen Tampereelle yleiseen sairaalaan, jossa häntä hoidetaan. Salminen on pidätetty.</p>
      </Article>

      <DateDivider date="Tiistai, 6.5.1924"/>
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

      <DateDivider date="Torstai, 8.5.1924"/>
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

      <DateDivider date="Lauantai, 10.5.1924"/>
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
          wiereen sekä kehuttuaan olewansa „Waasasta kotoisin eikä mitään pelkääwänsä” tarttunut Nurmista kurkkuun. Nurmisen waimo, joka nukkui miehensä kanssa samassa wuoteessa oli tällöin lähtenyt asunnosta pakoon. Miesten jonkun 
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

      <DateDivider date="Tiistai, 13.5.1924"/>
      <Article titleText="Myllymäen ampumistapaus.">
        <h5>Kersantti Ahonen kuollut.</h5>
        <p>Jääkäritykistörykmentin kersantti Ahonen, joka wiime perjantain wastaisena yönä joutui Myllymäessä teurastaja Kalle Nurmisen asunnossa nähtäwästi wahingonlaukauksen uhriksi, kuoli saamansa waikean ampumahaawan johdosta täkäl. 
          lääninsairaalassa sunnuntai-iltana klo 11.</p>
        <p>Wainaja, joka oli syntynyt 1899, oli kotoisin Wesannon pitäjästä.</p>
      </Article>

      <DateDivider date="Torstai, 15.5.1924"/>
      <Article titleText="Raaka weriteko Urjalassa.">
        <h5>Eräs 17-wuotias talollisenpoika joutunut pahoinpitelyn uhriksi.</h5>
        <p>Eilen aamulla klo 4 ajoissa tapahtui Urjalassa raaka pahoinpitely, mistä olemme saaneet seuraawat tiedot:</p>
        <p>Kun talollisenpoika Reino Talonen mainittuun aikaan oli Urjalan pitäjän Suonpään kylässä olewalla Kokonjärwellä kokemassa rysiään, tapasi hän siellä lohkotilallisen Walfrid Lehtosen eli Taipaleen, joka alkoi wäittää, että 
          Talonen olisi edellisenä yönä ollut kokemassa hänen rysiään. Tästä oli seurauksena se, että Lehtonen wihapäissään tähtäsi mukanaan olleella haulikolla Talosta, ampuen häneen haulipanoksen. Haulit tunkeutuiwat Talosen 
          kaswoihin, kylkeen ja käteen. Tähän ei Lehtonen wielä kuitenkaan tyytynyt, waan iski Talosta haulikon perällä käteen. Omin woimin jaksoi Talonen tapahtumapaikalta käwellä erääseen lähellä olleeseen asuntoon, mistä hänet sitten 
          toimitettiin edelleen hoitoa saamaan. Eilen aamulla wietiin Talonen heikossa tilassa Helsinkiin hoidettawaksi. Talonen on 17-wuotias. Lehtonen, joka on iäkkäämpi mies, on perheellinen.</p>
        <p>Asian johdosta pidettiin eilen poliisitutkinto. Lehtonen on toistaiseksi pidätettynä.</p>
      </Article>

      <DateDivider date="Tiistai, 20.5.1924"/>
      <Article titleText="Wekseliwäärennyksestä pidätetty.">
        <h5>Kysymyksessä on kaikkiaan n. 23,000 mk.</h5>
        <p>Mikäli olemme saaneet tietää, on Hämeenlinnan poliisin toimesta pidätetty täällä eräs entinen kauppias, joka tehdyn ilmoituksen mukaan olisi tehnyt itsensä syypääksi 13,150 mk. suuruiseen wekseliwäärennykseen ja 10,000 mk. 
          suuruisen kassakreditiiwiluoton wäärennykseen. Wekselit lienewät myydyt Tampereen Pankkiin, mistä myös kassakreditiiwilaina on otettu.</p>
        <p>Edelläolewan tietomme johdosta käännyimme eilen illalla Hämeenlinnan etsiwän osaston puoleen, mutta ilmoitettiin meille, ettei poliisi wielä asian nykyisellä asteella ollessa woi antaa siitä mitään tietoja.</p>
      </Article>

      <DateDivider date="Perjantai, 23.5.1924"/>
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

      <DateDivider date="Lauantai, 24.5.1924"/>
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

      <DateDivider date="Lauantai, 31.5.1924"/>
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

      <DateDivider date="Tiistai, 3.6.1924"/>
      <Article titleText="Hämeenlinnassa pidätetty wekselinwäärentäjä.">
        <h5>Tunnustanut tekonsa.</h5>
        <p>Kuten olemme kertonneet, pidättiwät Hämeenlinnan poliisiwiranomaiset täällä joku aika sitten erään entisen kauppiaan epäiltynä wekseli- ja kassakreditiiwilainan nimikirjoituksien wäärentämisestä. Pidätetty, joka on nimeltään 
          Wihtori Teeri, on nyttemmin tunnustanut wäärentäneensä nimet aikaisemmin mainittuihin kahteen paperiin, joilla sitten on Tampereen Osake-Pankista nostanut 23,000 mk.</p>
        <p>Teeri passitettiin eilen lääninwankilaan ja tulee juttu häntä wastaan esille piakoin täkäl. raastuwanoikeudessa.</p>
      </Article>
      <Article titleText="Miesmurha Leppäkoskella.">
        <h5>Mies ammuttu lähellä Leppäkosken asemaa.</h5>
        <p>Wiime maanantain wastaisena yönä tapahtui Leppäkoskella n. 1½ km. Leppäkosken asemalta Ryttylään päin radan warrella murha, jonka uhriksi joutui työmies J. Stolt. Palattaessa Rauhaniemen Pirtillä pidetystä iltamasta syntyi 
          tiellä pientä kinastelua mainitun Stoltin ja työm. T. Niinimäen wälillä, joka päättyi siten, että Niinimäki weti esiin rewolwerinsa ja ampui sillä Stoltia sillä seurauksella, että luoti, joka osui rintaan, lopetti 
          silmänräpäyksessä Stoltin elämän.</p>
        <p>Sekä murhattu että murhaaja oliwat kumpikin naimattomia nuoria miehiä ja oli murhattu, mikäli meille on ilmoitettu, jonkun werran juowuksissa, jotawastoin murhaaja oli aiwan selwä.</p>
        <p>Murhaaja on pidätetty. Murhan syytä ei woida sanoa kun tutkimukset owat wielä kesken.</p>
      </Article>
      <Article titleText="Jälleen epäilyttäwä „seikkailijatar” liikkeellä.">
        <p>Wiime lauantaina saapui Rengon majataloon hywin puettu nainen ilmoittaen tulleensa Lopelta wieraisilta ja majataloon jäämisensä syyksi autosta myöhästymisen sekä aikowansa jatkaa matkaansa sunnuntaina. Kun auto ei kuitenkaan 
          sunnuntaisin kulje, jäi nainen majataloon sitä maanantaihin odottamaan. Sunnuntai-iltana nainen lähti käwelemään ilmoittaen aikowansa käydä hautausmaalla, mutta jäikin sille tielle. Samalla huomattiin majatalosta kadonneen rahaa, 
          pukukankaita y.m. Nainen oli pitkähkö, tummatukkainen, puettu tummaan käwelypukuun ja tummaan hattuun, josta riippui kaksi nauhaa.</p>
      </Article>
      <Article titleText="Wanajan y. m. pitäjäin">
        <h5>wälikäräjillä</h5>
        <p>Hämeenlinnassa eilen tuomittiin Saima Aaltonen, joka oli warastanut kellon perineen 2-kertaisesta warkaudesta 9 kuukaudeksi kuritushuoneeseen. Kun Aaltonen aikaisemmin on tuomittu warkaudesta Helsingissä 10 kk. ja Hämeenlinnassa 
          samoin 10 kk. wankeuteen, tuomittiin hänet pidettäwäksi kuritushuoneessa yhteensä 1 w. 10 kk. sekä olemaan 5 wuotta ilman kansalaisluottamusta.</p>
        <p>Työm. F. A. Heinänen, joka wiime maaliskuun 2 pnä oli Ahlbackan lähellä maantiellä puukottanut kahta henkilöä, tuomittiin toisesta pahoinpitelystä 1 wuodeksi ja toisesta 1 wuodeksi 2 kk. wankeuteen sekä juopumuksesta 200 mk. 
          sakkoon. Lisäksi tuomittiin hänet maksamaan pahoinpitelemilleen henkilöille kuluja, lääkärinpalkkioita y.m. yht. 4,420 mk.</p>
      </Article>

      <DateDivider date="Keskiviikko, 4.6.1924"/>
      <Article titleText="Leppäkoskella tapahtunut miesmurha.">
        <h5>Poliisitutkinta toimitettu.</h5>
        <p>Niinkuin eilen kerroimme, ampui Leppäkoskella wiime maanantain wastaisena yönä talollisenpoika T. Niinimäki työmies J. Stoltia rewolwerilla rintaan, niin että haawoitettu paikalla heitti henkensä.</p>
        <p>Asian johdosta pidetyssä poliisitutkinnossa on käynyt ilmi seuraawaa, josta lähemmin selwiää tapahtuman kulku:</p>
        <p>Kun mainittuna yönä muutamia Uhkoilan kylän nuoria oli palaamassa Leppäkosken Pirtillä pidetystä nuorisoseura Silmun iltamasta, oli työm. J. Stolt yrittänyt lyöttäytyä talollisenpoika T. Niinimäen sisaren seuraan tämän 
          koettaessa tungettelijaa kartella. Jonkun ajan kuluttua oli T. Niinimäki pyytänyt, että Stolt lähtisi pois ja antaisi ihmisten kulkea rauhassa. Stolt olikin noudattanut kehoitusta ja lähtenyt pois, mutta kääntyi pian takaisin 
          yhdessä weljensä kanssa juosten Uhkoilan nuorten perässä. Kun wiimeksimainitut Stoltin weljesten huudoista oliwat hawainneet, että kysymyksessä oli takaa-ajo, huusi T. Niinimäki, kun J. Stolt oli tullut n. 10 metrin päähän: 
          „Pysähdy, ei sinulla ole täällä mitään asiaa.” J. Stolt ei kuitenkaan totellut kehoitusta, waan läheni lähenemistään, jolloin T. Niinimäki uudisti kehoituksensa. Tällöin tempasi J. Stolt rewolwerin ja ampui, mutta samalla weti 
          T. Niinimäkikin aseen taskustaan ja laukasi kohti J. Stoltia sillä seurauksella, että luoti läwisti rinnan ja haawoittunut tuupertui kuoliaana maantielle. Stoltin kaatuessa laukesi hänen rewolwerinsa wielä kerran nähtäwästi 
          tärähdyksen waikutuksesta.</p>
        <p>Niinkuin jo eilen mainitsimme, oli ammuttu juowuksissa, mutta ampuja sitäwastoin aiwan selwä. Kumpikin oliwat nuoria naimattomia miehiä. Stolt syntynyt 1900 ja Niinimäki 1899.</p>
        <p>Niinimäki, joka on tunnettu siiwoksi nuorukaiseksi, on pidätetty tutkintoa warten ja tulee asia käsiteltäwäksi wälikäräjillä t.k. 18 pnä.</p>
      </Article>

      <DateDivider date="Lauantai, 7.6.1924"/>
      <Article titleText="Pirtutakawarikko Forssassa.">
        <h5>Helsinkiläinen ompelijatar kauppamatkalla.</h5>
        <p>Wiime lauantai-illalla oli Forssaan saapunut Helsingistä ompelijatar Anna Hillenberg tarkoituksenaan harjoittaa paikkakunnalla pientä pirtukauppaa. Poliisiwiranomaiset saiwat kuitenkin wihiä asiasta ja ryhtyiwät ottamaan 
          siitä selwää. Toissa iltana toimitettiin Raikonmäessä asuwan, ennestäänkin tämänkaltaisten asiain yhteydessä huomatuksi tulleen Amanda Ranssilan luona kotitarkastus. Tällöin hawaittiin, että mainittu Hillenberg piti täällä 
          asuntoa sekä että nämä henkilöt joko oliwat ennättäneet myymään jonkun määrän pirtua taikka oliwat he piilottaneet sen. Hillenbergillä oli kuitenkin asemalla wielä eräs faneerilaatikko, joka joutui poliisiwiranomaisten käsiin. 
          Tässä laatikossa oli 15 litraa pirtua. Mainittakoon tämän yhteydessä, että Amanda Ranssila aiwan hiljattain saapui kotipaikkakunnalleen Hämeenlinnasta, jossa hän lääninwankilassa oli ollut suorittamassa 5 kuukauden 
          wankeusrangaistusta pirtukaupasta.</p>
      </Article>

      <DateDivider date="Torstai, 12.6.1924"/>
      <Article titleText="Werityö Hattulassa.">
        <h5>Mies pistetty tikarilla kuoliaaksi.</h5>
        <p>Helluntain aattona tapahtui Hattulassa Nihattulan kylässä miesmurha, jonka uhriksi joutui maalari Frans Halminen Porista. Sanottuna iltana klo ½11 ajoissa oli Halminen, joka oli wahwasti humalassa, käwellyt 3 sotamiehen kanssa 
          Nihattulan maantietä pitkin eikä heidän wälillään näyttänyt olewan mitään riitaa. Wähän ajan kuluttua kuitenkin tawattiin Halminen werissään maantiellä Kupilan talon kohdalla sywä tikarin haawa rinnassa. Haawoittunut tuotiin 
          heti Hämeenlinnan lääninsairaalaan, jossa hän sunnuntaiaamuna klo 4 ajoissa kuoli.</p>
        <p>Iältään oli wainaja 30 wuoden waiheilla ja naimaton.</p>
        <p>Kun toimitettawat tutkimukset owat wielä kesken, ei tapahtumasta anneta lähempiä tietoja.</p>
      </Article>
      <Article titleText="Surullisesti päättynyt helluntaimellakka Lammilla.">
        <h5>Yksi mies saanut surmansa, toinen haawoittunut.</h5>
        <p>Helluntaiaattoiltana sattui Lammilla ikäwä tapaus, josta oli seurauksena, että yksi mies menetti henkensä ja toinen sai haawan päähänsä.</p>
        <p>Toimitetun poliisikuulustelun mukaan oli tapahtuman kulku seuraawa:</p>
        <p>Mainittuna iltana saapui Lammin kirkonkylään Hämeenlinnasta auto, jossa oli 3 miestä ja 2 naista, joukossa weljekset Arwid ja Niilo Salminen, jotka kumpikin oliwat juowuksissa. Kirkolla nousiwat Salmisen weljekset autosta 
          sukulaisensa seppä Lehtosen asunnon kohdalla ja meniwät Lehtosen asuntoon. Weljekset, joilla oli wanhaa wihaa Lehtosta kohtaan, ryhtyiwät ensin ahdistelemaan Lehtosen waimoa ja sitten Lehtosta itseään, sillä seurauksella, että 
          Lehtosen wäki lähti pakoon, minkä jälkeen Salmisen weljekset rikkoiwat Lehtosen asunnon kaikki ikkunat sekä erilaista irtainta omaisuutta, jatkaen sitten autolla matkaansa.</p>
        <p>Wiranomaiset lähtiwät heti ajamaan heitä autolla takaa, mutta kun eiwät saawuttaneet pakolaisia, palasiwat takaisin Lammin kirkolle. Saatuaan täällä kuulla, että toinen weljeksistä Niilo Salminen oli nähty kirkolla, lähtiwät he 
          autolla hänen perässään saawuttaenkin Salmisen maantiellä n. 200 m. etäisyydellä kirkosta. Wiranomaisten auton äkkiä pysähtyessä Salmisen kohdalle lensi auton takaosassa istunut poliisikonstaapeli Wirtanen seisomaan noustessaan 
          auton etuistuimen selkänojaa wastaan, sillä seurauksella, että hänen kädessään ollut rewolweri laukesi ja luoti osui Salmisen päähän. Saatuaan ensi awun Lammin kunnanlääkäriltä lähdettiin haawoittunutta kulettamaan Hämeenlinnan 
          lääninsairaalaan, mutta matkalla tänne hän heitti henkensä.</p>
        <p>Myöskin toinen Salmisen weljeksistä haawoittui. Lehtosen asunnossa mellakoidessaan löi nimittäin Lehtonen häntä jakoawaimella päähän, mutta haawa ei ole mikään waarallinen.</p>
        <p>Salmisen weljekset owat joutomiehiä ja ainakin A. Salmista on useat kerrat rangaistu wiinarikoksista.</p>
        <p>Milloin asia tulee oikeuden käsiteltäwäksi, siitä ei ole wielä tietoa.</p>
      </Article>

      <DateDivider date="Perjantai, 13.6.1924"/>
      <Article titleText="Suuri rahawarkaus Hauholla.">
        <h5>Poliisi pidätetty epäluulonalaisena warkauteen.</h5>
        <p>Helatorstaina tapahtui Hauholla suuri rahawarkaus, johon syyllisenä epäiltynä on pidätetty Witsiälän kylässä asuwa poliisikonstaapeli Toiwonen. Asia olisi tapahtunut siten, että mainitun päiwän iltana oliwat tilanomistaja 
          Ilmari Laurila Hywämäestä ja mainittu Toiwonen tulleet Wäinölän kylästä iltamasta ja tällä tiellä oli Laurilalta kadonnut lompakko, jossa oli ollut rahaa 36,000 markkaa. Asiaa ryhdyttiin tutkimaan, mutta ei saatu siihen 
          selwyyttä, ennenkuin wasta sitte, kun lompakko löydettiin Laurilan eräästä huoneesta sängyn alta, johon se siis oli tuotu. Kun huoneessa ei pitänyt käydä muita wieraita henkilöitä kuin poliisi Toiwonen, kohdistuiwat epäilyt 
          häneen ja Toiwonesta tutkittua ilmeni seikkoja, joiden perusteella hänet pidätettiin. Juttu tullenee käsiteltäwäksi kesäk. 17 pnä pidettäwillä wälikärijillä. </p>
      </Article>

      <DateDivider date="Lauantai, 14.6.1924"/>
      <Article titleText="Hurja mustalaisnainen.">
        <h5>Iskenyt miehen puukolla henkitoreisiin.</h5>
        <p>Toissailtana tapahtui Pullerinmäen ja Hattulan wälisellä maantiellä werityö, joka woi waatia uhrikseen ihmishengen.</p>
        <p>Hämeenlinnan markkinoita warten oli mainittuna päiwänä Rinkelinmäelle ja sen lähitienoille kerääntynyt harwinaisen paljon mustalaisia. Klo 8 aikaan illalla oli Rinkelinmäeltä lähtenyt Hattulaan päin ajamaan mustalaiskuorma, 
          jossa oli 2 miestä ja 3 naista. Näistä oliwat kaikki muut paitsi toinen miehistä wahwasti humalassa. Heti mustalaiskuorman lähdettyä matkaan lähti Helmisen talosta sen perässä juoksemaan Nihattulassa asuwa maalari Kustaa 
          Tamminen aikomuksessa päästä mustalaisten rattailla kotiinsa. Hänkin oli wahwasti juowuksissa. Waikka mustalaiset eiwät päästäneet Tammista rattaille, seurasi hän heitä kumminkin, kunnes Wiisarin ja Nihattulan wälillä sai 
          mustalaisen puukosta ammottawan haawan rintaansa. Mustalaiset saatiin pian pidätetyiksi ja haawoittunut tuotiin lääninsairaalaan, jossa häntä edelleen hoidetaan. Täällä todettiin, että hänen rinnassaan oikealla puolella on 
          3 sm. pituinen keuhkoihin ulottuwa, hengenwaarallinen haawa.</p>
        <p>Tamminen on 30-wuotias, naimisissa ja usean lapsen isä.</p>
        <p>Pidätettyjen mustalaisten kuulustelu alotettiin heti, mutta tarkkaa selkoa tapahtumasta on waikea saada, kun kukin mustalaisista tahtoo puhua wain omaan pussiinsa. Puukotuksen tekijä on kumminkin jo tiedossa ja on hän 
          itsekin tunnustanut tekonsa. Hän on 27-wuotias mustalaisnainen Hilja Nyman, kotoisin Kouwolasta. Hän on kertonut, että Tamminen oli ensin wetänyt esiin puukkonsa. Peläten, että Tamminen käyttäisi puukkoaan, oli Hilja Nyman 
          temmannut puukkonsa ja iskenyt sillä Tammista rintaan edelläkerrotulla seurauksella.</p>
        <p>Kuinka paljon tämä Nymanin kertomus pitää paikkansa ja kuinka kaikki oikeastaan tapahtui, sen selwittänewät tutkimukset, joita edelleenkin jatketaan.</p>
      </Article>

      <DateDivider date="Tiistai, 17.6.1924"/>
      <Article titleText="Hattulan maantiellä tapahtunut puukotus.">
        <h5>Puukottaja tunnustanut.</h5>
        <p>Pullerinmäen ja Hattulan wälisellä maantiellä tapahtuneeseen puukotukseen, jonka uhriksi joutui Nihattulasta kotoisin olewa maalari Kustaa Tamminen, on jatkuwien kuulustelujen perusteella nyttemmin selwitetty, että 
          mustalaisnainen Hilja Nyman on tunnustanut syyllisyytensä. Puukottaja on passitettu Hämeenlinnan lääninwankilaan. Tamminen on edelleen heikkona sairaana. Muita mustalaisia kuulustellaan wielä tänään.</p>
      </Article>

      <DateDivider date="Keskiviikko, 18.6.1924"/>
      <Article titleText="Katala murhayritys Padasjoella.">
        <h5>Eläkemies yritetty murhata strykniinillä.</h5>
        <p>Katala murhayritys tehtiin w.k. 24 pnä eläkemies Konstantin Långia wastaan Heikkilän torpassa Wirmailassa. Lång, joka poikansa kanssa asuu mainitussa torpassa omassa huoneessaan, oli työstä tultuaan keittänyt kahwia ja 
          nauttinut sitä, sen kowin karwaasta mausta huolimatta, noin puoli kupillista, ja heti sen jälkeen saanut ankaria kouristuksia ja ylenannatuksia sekä kaatunut pitkäkseen lattialle. Paikalle kiireesti kutsutettu kunnanlääkäri 
          epäili heti kysymyksessä olewan strykniini-myrkytyksen ja wastamyrkkyä saatuaan alkoi sairas wähitellen toipua. Lääkintöhallituksessa tehdyn analyysin mukaan sisälsi 25 gr. tätä kahwia siksi paljon strykniiniä, että se jo 
          lähenteli kuolettawaa annosta.</p>
        <p>Kuka tämä murhayrityksen on tehnyt, ei ole wielä paikallisten wiranomaisten tutkimuksista käynyt selwille.</p>
      </Article>

      <DateDivider date="Torstai, 19.6.1924"/>
      <Article titleText="Leppäkoskella tapahtunut miesmurha.">
        <h5>Niinimäki wapautettu.</h5>
        <p>Kuten muistettanee, tapahtui Leppäkoskella t.k. 2 p. miesmurha, jolloin talollisenpoika T. Niinimäki ampui työmies J. Stoltia rintaan, niin että tämä kuoli heti. J. Stolt oli nimittäin ryhtynyt ahdistelemaan J. Niinimäen 
          sisarta, joka weljensä kanssa oli palaamassa Leppäkosken Pirtillä pidetystä iltamasta, ja oli kyllä Niinimäen waroituksen johdosta ensin lähtenyt omille teilleen, mutta oli jonkun ajan kuluttua palannut weljensä kanssa ja 
          huolimatta N:n waroituksesta ja aseesta hyökännyt N:n ja tämän sisaren kimppuun kuitenkaan ehtimättä 4 askelta lähemmäs, ennenkuin N:n ampuman luodin kuolettawasti haawoittamana kaatui maahan heittäen miltei heti henkensä. 
          Niinimäki pidätettiin ja oli asia eilen esillä Wanajan ym. muitten kuntain wälikäräjillä. Toimitetuissa tutkinnoissa tuli oikeus seuraawaan päätökseen:</p>
        <p>Kihlakunnan oikeus katsoi selwitetyksi, että Toiwo Niinimäki oli tehnyt enemmän wäkiwaltaa, kuin hyökkäyksen torjumiseksi olisi ollut tarpeen, mutta katsoen pakoittawaan waaraan ei oikeus katsonut woiwansa tuomita Niinimäkeä 
          tästä rangaistukseen. Kuitenkin määrättiin hänet suorittamaan hautauskuluja Stoltiin äidille 800 mk. sekä korwaamaan todistajapalwelut 120 mk. ja ruumiinawauskustannukset 298 mk. Niinimäki laskettiin wapaalle jalalle ja päätös 
          alistettiin howioikeuden tarkastettawaksi.</p>
        <p>Wastaaja Niinimäen awustajana oikeudessa toimi warat. Yrjö Kiwikari.</p>
      </Article>
      <Article titleText="Kapinanaikuiset joukkomurhat.">
        <h5>Hauholainen Pulkki tuomittu Turun howioikeudessa 12 w. kuritushuoneeseen.</h5>
        <p>Aikoinaan syytettiin Sääksmäen ja Kalwolan pitäjien ynnä Walkeakosken kauppalan kihlakunnanoikeudessa Hauhon pitäjän Tuittulan kylästä kotoisin olewaa talollista Juho Wihtori Edwardinpoika Pulkkia siitä, että hän oli huhtik. 
          20 pnä 1918 kuljettaessaan yhdessä muiden kanssa kapinallisten wangitsemia kansalaisia murhannut toisten kanssa yhdessä 19 henkilöä sekä lisäksi ottanut osaa näiden ryöstämiseen. Kihlakunnanoikeus tuomitsi Pulkin osallisuudesta 
          waltiopetokseen sekä sen kanssa yhteydessä olewista murhista elinkautiseen kuritushuonewankeuteen sekä suorittamaan erinäisiä korwauksia.</p>
        <p>Tämä kihlakunnanoikeuden päätös alistettiin Turun howioikeuden tutkittawaksi. Howioikeus kumosi kihlakunnanoikeuden päätöksen, koska O. K. 8 Luw. 2 § mukaan ensimäinen oikeusaste waltiopetosjutuissa on howioikeus.</p>
        <p>Juttua howioikeudessa käsiteltäessä tuli Pulkin syyllisyys täydellisesti toteen näytetyksi, jonka wuoksi howioikeus, ottaen huomioon kapinarikollisista annetut armahdusasetukset, harkitsi oikeaksi tuomita wastaajan 
          kuritushuoneeseen 12 wuodeksi. Tästä rangaistuksesta wähennettiin kuitenkin kaksi kuukautta, koska Pulkki on ilman omaa syytään ollut kauan tutkintowankeudessa.</p>
      </Article>

      <DateDivider date="Perjantai, 20.6.1924"/>
      <Article titleText="Lopen y.m. pitäjäin wälikäräjillä">
        <h5>eilen käsiteltiin m.m. seuraawat asiat:</h5>
        <p>Kuten muistettaneen, tapahtui Lopen pitäjän Salon kylässä ensimäisenä pääsiäispäiwänä werityö, jonka uhriksi joutui työmies Otto Kanerwa. Eräässä tappelussa iski Hakalan torpan poika Kalle Ahlstedt Kanerwaan 4 puukonhaawaa 
          joista yksi oli hengenwaarallinen, aina keuhkoihin asti ulottuwa. Juttu oli uudelleen käsiteltäwänä eilen, mutta ei oikeus kuitenkaan katsonut wieläkaan woiwan päätöstä antaa, koska Kanerwaa yhä edelleen hoidetaan 
          lääninsairaalassa, eikä häntä niin ollen woida asiassa kuulustella. Oikeus lykkäsi jutun seuraawille wälikäräjille.</p>
        <p>Pienwiljelijää Kalle Einari Kiwisaarta Lopen Sajaniemen kylästä syytettiin siitä, että hän kesäkuun alkupäiwinä oli erääseen welkakirjaan wäärentänyt takaajien nimet ja kun asia oli tullut ilmi oli Kiwisaari tunnustanut 
          wäärennyksen tehneensä sekä nostaneensa wäärennetyllä welkakirjalla pankista Smk. 6,000:-, mitkä rahat hän oli käyttänyt ostamansa mäkitupa-alueen kauppahinnan suorittamiseen. Oikeus tuomitsi syytetyn 9 kk. 
          kuritushuonerangaistukseen, ollen tuomio kuitenkin ehdollinen 4 wuoden koeajalla.</p>
        <p>Palwelijatar Lempi Elwiira Heinonen tuomittiin sikiönsä surmaamisesta 6 kk. wankeuteen.</p>
        <p>Spriin myynnistä tuomittiin eräs henkilö 1,875 mk. sakkoon.</p>
      </Article>

      <DateDivider date="Lauantai, 21.6.1924"/>
      <Article titleText="Hauholla tapahtunut rahawarkaus.">
        <h5>Poliisi tuomittu 8 kuukauden ehdolliseen wankeusrangaistukseen.</h5>
        <p>Kuten aikaisemmin kerroimme, pidätettiin Hauholla poliisikonstaapeli Toiwonen epäiltynä noin 36,000 markan rahawarkauteen syylliseksi. Mainittu summa oli kadonnut helatorstaina tilanomistaja Ilmari Laurilalta matkalla 
          Wäinölän kylästä iltamasta ja jolloin Toiwonen oli ollut hänen mukanaan. Rahat löydettiin kuitenkin myöhemmin Laurilan erään sängyn alta, jonne ne oli kaikesta päättäen asian selwilletuloa peläten jätetty.</p>
        <p>Asia oli esillä tiistaina Hauhon y.m. pitäjien wälikäräjillä. Wastaaja Toiwonen kielsi syyllisyytensä, mutta todistukset häntä wastaan oliwat siksi raskauttawat, että oikeus tuomitsi wastaajan warkaudesta 8 kk. wankeuteen, 
          joka kuitenkin muutettiin 4 wuoden ehdonalaiseksi. Samalla tuomittiin Toiwonen menettämään wirkansa. Wastaaja määrättiin laskettawaksi wapaalle jalalle.</p>
      </Article>

      <DateDivider date="Torstai, 23.6.1924"/>
      <Article titleText="Urjalan ryöstömurhaajan loppu.">
        <p>T.k. 17 pnä oli Sodankylän välikäräjillä jälleen esillä tunnettu Mannelinin murhajuttu, jonka johdosta owat olleet syytettyinä talollisenpojat Antti Teräs ja Aleksi Alariesto eli Ollila. Niinkuin aikaisemmin on kerrottu, 
          löydettiin äskettäin Mannelinin ruumis Sodankylästä läheltä Wenäjän rajaa. Jutun käsittelyssä teki Alariesto täyden tunnustuksen. Murhan on suorittanut Teräs ampumalla Mannelinia eräällä yöpymäpaikalla haulikolla päähän. 
          Yhdessä oliwat sitten miehet ryöstäneet hänen rahansa, joita oli ainoastaan toista tuhatta markkaa. Teräs ja Alariesto oliwat otaksuneet M:llä olewan rahaa enemmän, sillä tämä oli aina kehunut rahojaan. Rahaa hänellä oli 
          paitsi mitä edellä sanottiin 20,000 Saksan markkaa. Juttu lykättiin wielä seuraawille wälikäräjille.</p>
        <p>Murhattu Karl Einar Mannelin oli syntyisin Urjalasta, missä hän taannoin oli suorittanut kaksoisryöstömurhan. Sodankylässä on hän piileskellyt toista wuotta, kunnes wiime joulukuulla, jolloin hänet piti wangittaman, Mannelin 
          yritti paeta Wenäjälle, pakoittaen Teräksen ja Alarieston Muteman kylästä oppaakseen. Nämä kuitenkin tappoiwat hänet erään kaukaisen kiweliön piilopirtillä, jossa siis päättyi ryöstömurhaajan mainen matka.</p>
      </Article>

      <DateDivider date="Lauantai, 28.6.1924"/>
      <Article titleText="Pirtua takawarikoitu Forssassa.">
        <h5>70 litraa talteen.</h5>
        <p>Pitemmän aikaa on Forssassa kuulunut puhetta, että lohkotilallinen Jalmari Koiwula Portaan kylässä Tammelassa olisi harjoittanut luwatonta wäkijuomien kauppaa. Asian jouduttua poliisiwiranomaisten tietoon toimitettiin 
          Koiwulan asunnossa wiime lauantaina tarkastus ja etsintä ja tawattiin asuinrakennuksen winnillä suuri joukko tyhjiä astioita sekä täysinäisiäkin, joissa yhteensä oli 70 litraa pirtua, ja takawarikoitiin nämä kaikki. — 
          Koiwulaa tullaan syyttämään käräjillä wäkijuomien myynnistä.</p>
      </Article>

      <DateDivider date="Tiistai, 8.7.1924"/>
      <Article titleText="Wanki karannut Lopella.">
        <h5>Saanut puunkappaleella ristikkoikkunan murretuksi.</h5>
        <p>Kuten w.k. 22 pnä kerroimme, oli juhannusaattona Lopen pitäjän Launosten kylässä takawarikoitu 360 litraa spriitä eräästä autosta, mutta oliwat salakuljettajat päässeet liwistämään. Myöhemmin kuitenkin pidätettiin heistä 
          toinen, Toiwo Mäkelä, Tammelan Kydön kylästä Helsingissä ja passitettiin Lopelle wanginwartian luo siellä edelleen säilytettäwäksi kuulustelua warten. Wiime lauantain ja sunnuntain wälisenä yönä on pidätetty kuitenkin 
          saanut jaloissaan olleet jalkaraudat murtumaan ja sen jälkeen onnistunut murtamaan jollakin puukapulalla koppinsa ristikkoikkunaan niin suuren aukon, että siitä tuskin luulisi miehen woiwan päästä läpi. Pidätettyä 
          säilytettiin wanginwartian luona n.k. päiwystäjähuoneessa, kun ei wielä ollut ilmennyt häntä wastaan mitään erikoisen raskauttawaa. Heti kun pako aamulla huomattiin, aloitettiin takaa-ajo, joka wielä jatkuu. Mäkelan toweri 
          Rantanen on edelleen karkuteillä. Mäkelän tuntomerkeistä mainittakoon, että hän on lyhyenläntä, hintelä mies. Erikoisena tuntomerkkinä on oikeassa poskessa olewa ammuttu hywin punanen, ruma arpi.</p>
      </Article>

      <DateDivider date="Keskiviikko, 9.7.1924"/>
      <Article titleText="Salaperäinen katoaminen Forssassa.">
        <h5>Mies kadonnut ja löytynyt surmattuna joesta.</h5>
        <p>Wiime juhannuspäiwäiltana katosi Forssassa herastuomari I. F. Laakson palwelija Toiwo Ratio. Etsiskelyistä huolimatta ei häntä löydetty, ennenkuin t.k. 2 p:nä tukkimiehet löysiwät noin 3 km. Forssasta Loimijoesta Haision 
          kartanon luona wedessä jokusia päiwiä olleen miehen ruumiin, joka todettiin kadonneeksi Ratioksi. Wainajalla oli wasemman korwan wieressä reikä, josta werta oli walunut waatteille, ruumis oli mustunut. Kello oli seisahtanut 
          klo ½1. Wainaja oli 22/6 saanut kuukausipalkkansa, ja oli hänellä kotoa lähtiessä ollut rahat lompakossa, mutta löydettäessä oliwat lompakko ja rahat poissa. Epäluulonalaisina on kuulusteluja warten toistaiseksi pidätetty 
          pari henkilöä. Oikeuslääketieteellinen tutkimus selwittänee kuoleman syyn.</p>
        <p>Wainaja ijältään 25 wuotta, oli kotoisin Somerolta, jätti jälkeensä waimon ja yhden lapsen. Isäntänsä kertoman mukaan oli wainaja hiljainen, siiwo, kotonapysywäinen ahkera mies.</p>
      </Article>

      <DateDivider date="Torstai, 10.7.1924"/>
      <Article titleText="Hattulan y.m. pitäjäin">
        <h5>wälikäräjillä</h5>
        <p>eilen käsiteltiin seuraawat asiat:</p>
        <p>Mustalaisnaista Hilja Nymannia, kotoisin Kouwolasta, syytettiin siitä, että hän kesäk. 12 p:n iltana oli puukolla iskenyt Hattulan pitäjän Nihattulan kylästä kotoisin olewaa maalari Kustaa Tammista oikealle puolen rintaa 
          keuhkoihin asti ulottuwan, hengenwaarallisen haawan, mainitun Tammisen päihtyneenä yrittäessä wäkisin tunkeutua rattaille, joilla syytetty ja muutamat muut mustalaiset oliwat palaamassa Hämeenlinnan markkinoilta. Juttu 
          lykkääntyi elok. 8 pnä pidettäwille seuraawille wälikäräjille, koska lääkäri ei wielä woinut antaa lopullista lausuntoa haawoitetun Tammisen tilasta.</p>
        <p>Syytettiin kers. W. Martikaista, kotoisin Mikkelin kaupungista, kuoleman tuottaneesta pahoinpitelystä, mutta lykkääntyi juttu ensi elok. 8 pnä pidettäwille wälikäräjille lisäselwitysten saamista warten. Helluntai-aattona 
          oli nimittäin joukko armeijan aliupseereita, joukossa syytetty Martikainen, Hattulan pitäjän Nihattulan kylässä kohdannut Noormarkusta kotoisin olewan, mutta samassa kylässä palweluksessa olleen työmies Frans Halmisen, ja 
          oli mainittu Halminen heti sen jälkeen löydetty waikeasti watsan yläosaan haawoitettuna makaamassa Kupilan talon rannassa. Tammisen ja mainittujen aliupseerien wälillä ei woitu todeta olleen mitään riitaa. Halminen oli 
          mainittuna iltana ollut wahwasti päihtynyt. Juttu lykättiin sisäselwitysten saamista warten ensi elok. 8 pnä pidettäwille wälikäräjille.</p>
        <p>Eräs henkilö tuomittiin wäkijuomain hallussapidosta 1,125 mk sakkoon, wastaten 75 päiwää wankeutta.</p>
        <p className="signature"></p>
      </Article>

      <DateDivider date="Perjantai, 11.7.1924"/>
      <Article titleText="Humalainen hyökännyt poliisin kimppuun Myllymäessä.">
        <h5>Poliisi pakotettu turwautumaan aseeseen.</h5>
        <p>Eilen illalla klo 7 ajoissa konstaapeli R. Mäen ollessa wartiossa Länt. Wiertotiellä, talon n:o 16 b. kohdalla hyökkäsi hänen kimppuunsa ent. teurastaja Kalle Nurmi, joka ollen juowuksissa löi konstaapeli Mäkeä kiwellä 
          wasempaan ohimoon, johon tuli ammottawa haawa. Konstaapeli Mäen yrittäessä pidättää häntä, hyökkäsi Nurmi uudelleen hänen kimppuunsa, koettaen lyödä, jolloin Mäki ampui ilmaan waroituslaukauksen, josta Nurmi ei kuitenkaan 
          wälittänyt, minkä tähden Mäki ampui kohti ja sattui laukaus Nurmen reiteen. Haawoittunut lääninsairaalaan, jossa sidottiin. Haawa ei liene hengenwaarallinen.</p>
        <SubDivider className="dividerStyle" />
        <h4>Tiistai, 2.9.1924</h4>
        <h5>Eilisessä raastuwanoikeuden istunnossa</h5>
        <p>tuomittiin teurastaja Kalle Nurmi, joka oli wiime heinäk. 10 pnä pahoinpidellyt konstaapeli Mäkeä tämän ollessa wirantoimituksessa 4 kuukaudeksi wankeuteen ja juopumuksesta 100 mk. sakkoon sekä korwaamaan konst. Mäen kulut 
          asiassa 500 markalla.
        </p>
      </Article>

      <DateDivider date="Lauantai, 12.7.1924"/>
      <Article titleText="Kowa tappelunrytäkkä junassa.">
        <h5>M.m. hämeenlinnalainen taskuwaras ja korttipeluri Kaarlo Orell pidätetty.</h5>
        <p>Wiime torstai-aamuna, kun Rajajoelta tulewa postijuna, joka saapuu Helsinkiin klo 8,55 ap., oli lähdössä Hywinkäältä, ilmoitettiin sieltä Kerawan poliisiwiranomaisille, että junassa matkustaa useita taskuwarkaita, jotka 
          Wiipurin ja Hywinkään wälillä oliwat jo yön aikana tehneet useita taskuwarkauksia. Junan saapuessa wähän yli 8 Kerawalle astui Kerawan etsiwä poliisikonstaapeli A. Toiwonen junaan pidättämään ilmoitettuja warkaita, joita 
          oli kaikkiaan neljä. Näistä sai kostaapeli Toiwonen heti kaksi pidätetyksi junan lähdettyä liikkeelle. Toiset kaksi ryhtyiwät pidätettäessä tekemään tiukkaa wastarintaa. Poliisin awuksi tuli muutamia matkustajia. Waunussa 
          syntyi hurja temmellys, jonka aikana pirstoutui useita akkunoita. Ennen Helsinkiin saapumista oli kuitenkin koko warasjoukko, joka nähtäwästi pyrki sekin messuille, saatu kytketyksi.</p>
        <p>Kuten sanottu, oli pidätettyjä warkaita kaikkiaan neljä. Yksi näistä laskettiin sitowien todistusten puutteessa wapaaksi, mutta toiset kolme wangittiin ja tuotiin talteen Kerawalle, missä heidän suhteensa jatketaan edelleen 
          tutkimuksia. Miehet owat: Niilo Tähtinen, kotoisin Luhangasta, ent. kapinawanki, tunnettu taskuwaras ja korttihuijari; räätäli Albin Lind, kotoisin Kerimäeltä sekä Kaarlo Orell Hämeenlinnasta, hekin tunnettuja taskuwarkaita 
          ja kortinpelaajia. Wiimeksimainittua on rangaistu kolme kertaa taskuwarkauksista ja on hän äskettäin päässyt wapaaksi wankilasta.</p>
        <p>Syntyneen temmellyksen aikana ja junan saawuttua Helsinkiin ei poliisi woinut päästä selwille kaikista niistä henkilöistä, jotka näkiwät pidätettyjen tekewän warkauksia. Olisi sen wuoksi hywä, että warsinkin ne kaksi 
          herrasmiestä, joilta warkaat yrittiwät anastaa lompakot, ilmoittaisiwat Kerawan poliisiwiranomaisille nimensä ja osoitteensa.</p>
      </Article>

      <DateDivider date="Perjantai, 18.7.1924"/>
      <Article titleText="Spriitakawarikko Hämeenlinnassa.">
        <h5>Poliisi takawarikoinut 15 l. spriitä autosta.</h5>
        <p>Toissa päiwänä ilmoitettiin poliisilaitokselle yöpikajunan saawuttua Hämeenlinnan asemalle, että joku tuntematon mieshenkilö nähtäwästi oli tuonut matkalaukussaan pienemmän määrän spriitä, jonka hän aikoi kuljettaa 
          kaupunkiin. Miehen saapuessa wuokra-autolla kaupunkiin pidättikin poliisi hänet ja tunnettiin pidätetty tällöin työmies August Kaiwannoksi, kotoisin Wanajan Punaportilta. Sprii, jota oli matkalaukussa kaikkiaan 15 l. 
          takawarikoitiin ja saa mies wastata teostaan oikeudessa.</p>
      </Article>
      <Article titleText="Murtowarkaus Lepaassa.">
        <h5>Waras yritetty pidättää Karlbergissa, mutta päässyt pakoon.</h5>
        <p>Toissapäiwänä ilmoitettiin täkäläiselle poliisilaitokselle Lepaalta, että siellä oli eräässä torpassa tapahtunut murtowarkaus ja että waras nähtäwästi oli tulossa Hämeenlinnaan Karlbergin kautta. Poliisilaitokselta 
          lähetettiin heti etsiwä Karlbergin tielle pidättämään warkaan tämän pyrkiessä kaupunkiin. Jonkun ajan kuluttua poliisi näkikin erään mieshenkilön lähestywän polkupyörällä, mutta ei tuntenut tätä heti warkaaksi, kun 
          tuntomerkit, jotka warkaasta oli annettu, oliwat huonot. Mies ehti siis saada jonkun werran etumatkaa, ennenkuin häntä lähdettiin takaa ajamaan, mutta huomatessaan paon mahdottomaksi liwisti tien wierellä kaswawaan 
          metsään jättäen maantielle polkupyöränsä ja mukanaan olleet täydelliset ja ensiluokkaiset murtowarkaan työkalut. Polkupyörä tunnettiin myöhemmin pari wiikkoa sitten eräältä maanwiljelysharjoittelijalta Wanajassa 
          warastetuksi.</p>
      </Article>

      <DateDivider date="Tiistai, 21.7.1924"/>
      <Article titleText="Surullinen ampumistapaus Hausjärwellä.">
        <h5>Waromattoman aseenkäsittelyn seurauksena eräs naishenkilö saanut surmansa.</h5>
        <p>T.k. 8 pnä sattui Hausjärwellä surullinen wahingonlaukaus, joka waati uhrikseen ihmishengen. Tapauksesta olemme saaneet seuraawia tietoja:</p>
        <p>Mainittuna päiwänä klo 2 ajoissa iltapäiwällä ammuskeliwat Hausjärwen pitäjän Torholan kylässä sijaitsewan Ruokolan talon työmiehet salonkikiwäärillä maaliin Ruokolan talon pihamaalla. Kun he oliwat joitakin 
          kertoja ampuneet, niin meni eräs heistä muuttamaan pilkkaa, antaen kiwäärin Torholan kylästä kotoisiin olewalle työmies Kalle Wiljaselle. Tämä kuitenkin, luullen kiwäärin olewan panoksettoman, ojensi sen leikillään 
          paikalla ollutta palwelijatar Martta Mäenpäätä kohti sillä seurauksella, että kiwääri laukesi ja luoti osui Mäenpään kaulaan, katkaisten waltimon. Paikalle lähdettiin heti hakemaan lääkäriä, mutta ennenkuin tämä ehti 
          perille, oli Mäenpää jo heittänyt henkensä.</p>
        <p>Näin surullisen onnettomuuden uhriksi joutunut Martta Mäenpää oli syntynyt w. 1905. Wiljanen taas, joka on pidätetty, ja jota wastaan tullaan nostamaan oikeusjuttu, on syntynyt 1891.</p>
      </Article>
      <Article titleText="Pirtuautojen matkat.">
        <h5>Pirtuauto ajanut maitokuorman kumoon Ypäjällä.</h5>
        <p>Perjantaina aamupuolella siwuutti Ypäjän kirkonkylän, liian kowaa wauhtia muuan turkulainen wuokra-auto, jossa oli matkustajana eräs Loimaan Kauhanojalta kotoisin olewa henkilö. Wähän matkaa Ypäjän kirkonkylältä Loimaan 
          kauppalaa kohden tuli autoa wastaan maitokuorma matkalla meijeriin. Auto ei wäistänyt kylliksi, waan iski sen wasen kurasuojus kärryjen pyörään, jolloin kärryt särkyiwät, silat katkesiwat. Ajomies suistui maahan, loukkasi 
          oikean käsiwartensa ja sai naarmuja kaswoihinsa sekä löi päänsä niin, että meni tajuttomaksi. Autoilijat ottiwat miehen autoonsa ja lähtiwät wiemään häntä Loimaalle lääkärille. Täällä mies toipui ja laskettiin kotiinsa. 
          Hänen wammansa todistettiin wähäisiksi. Hewonen ei rähäkässä loukkaantunut.</p>
        <p>Kun yhteentörmäys oli tapahtunut, alettiin autosta nakella spriiastioita tien oheen, ja sittemmin matkan jatkuessa kauppalaa kohti lensi wielä jokunen purtilo autosta. Nämä kerättiin sittemmin, ja todettiin, että 
          miekkosten lasti oli ollut noin 100 litraa. Tämän johdosta Loimaan poliisit perjantaina klo 10 aikaan aamupäiwällä pidättiwät auton ohjaajineen ja matkustajineen keskellä kauppalaa. Auto, Buick merkkiä, jäi Loimaan poliisin 
          haltuun, kun taas miehet jätettiin Ypäjän poliisin huostaan. Takawarikon tapahtuessa ei autossa enää ollut wiinaksia. Sen sijaan oli sen wasen kurasuojus hieman kasassa yhteentörmäyksen johdosta.</p>
      </Article>
      <Article titleText="Lehmäwarkaus Jokioisten pitäjässä.">
        <h5>Worot wieneet lehmän laitumelta ja myyneet Lounais-Suomen Osuusteurastamon Humppilan konttoriin käyttäen kuittauksessaan wäärennettyä nimeä.</h5>
        <p>T. k. 9 päiwän wastaisena yönä häwisi Jokioisten Kiipun kylän Kutilan talon laitumelta tuntemattomalla tawalla lehmä. Tapahtumaa epäiltiin warkaudeksi, ja ryhdyttiin asian waatimiin tutkimuksiin, jotka eiwät kuitenkaan 
          johtaneet minkäänlaisiin tuloksiin. Samaan aikaan myi muuan mies Lounais Suomen Osuusteurastamon Humppilan konttoriin lehmän 1,150 markan hinnasta. Kuittaukseen hän kirjoitti nimen Kolinkanta. Myöhemmin käwi kuitenkin 
          selwille, että mainittu nimi oli wäärennetty ja myyjät siis aiwan toisia henkilöitä. Tapaus näytti olewan yhteydessä edellämainitun lehmäwarkauden kanssa.</p>
        <p>Nyttemmin on rikoksiin syyllisiksi epäiltyinä wangittu teurastaja Kustaa Wuolle ja irtolainen Wäinö Toiwonen molemmat Yläneen Kartanonkylästä.</p>
      </Article>

      <DateDivider date="Lauantai, 9.8.1924"/>
      <Article titleText="Hattulassa tapahtunut murha.">
        <h5>Wastaaja kers. W. Martikainen tuomittu 2 wuoden kuritushuonerangaistukseen.</h5>
        <p>Kuten muistettanee tapahtui Hattulan pitäjän Nihattulan kylässä wiime helluntaiaattona werityö, joka waati uhrikseen ihmishengen. Mainittuna päiwänä oli nimittäin joukko armeijan aliupseereita, joukossa m.m. kers. W.
          Martikainen, Hattulan pitäjän Nihattulan kylässä kohdannut Noormarkusta kotoisin olewan, mutta samassa kylässä palweluksessa olleen työmies Frans Halmisen, ja oli mainittu Halminen heti sen jälkeen löydetty waikeasti 
          watsan yläosaan haawoitettuna makaamassa Kupilan talon rannassa. Tammisen ja mainittujen aliupseerien wälillä ei woitu tällöin todeta olleen mitään riitaa. Halminen oli mainittuna iltana ollut wahwasti päihtynyt.</p>
        <p>Syyte kers. W. Martikaista wastaan oli esillä eilen pidetyillä Hattulan n.m. pitäjäin wälikäräjillä ja katsoi oikeus syytetyn tehneen itsensä syypääksi kuolemantuottaneeseen pahoinpitelyyn tuomiten kers. W. Martikaisen 
          2 wuoden kuritushuonerangaistukseen. Tuomio alistettiin Turun howioikeuden tarkistettawaksi.</p>
      </Article>

      <Article titleText="Pullerinmäellä tapahtunut murha.">
        <h5>Wastaaja Hilja Nyman tuomittu 2 wuodeksi kuritushuoneeseen.</h5>
        <p>Kuten aikaisemmin olemme kertoneet, tapahtui Pullerinmäellä wiime kesäk. 12 pnä murha, jolloin mustalaisnainen Hilja Nyman, kotoisin Kouwolasta, lôi maalari Kustaa Tammista, kotoistin Nihattulasta, oikealle puolen rintaa 
          3 sm. pituisen, keuhkoihin asti ulottuwan haawan, josta tämä myöhemmin lääninsairaalassa kuoli. Tapahtuman kulku oli tällöin lyhyesti kerrottuna seuraawa:</p>
        <p>Hämeenlinnan markkinoita warten oli mainittuna päiwänä Rinkelinmäelle ja sen lähitienoille kerääntynyt harwinaisen paljon mustalaisia. Klo 8 aikaan illalla oli Rinkelinmäeltä lähtenyt Hattulaan päin ajamaan mustalaiskuorma, 
          jossa oli 2 miestä ja 3 naista. Näistä oliwat kaikki muut paitsi toinen miehistä wahwasti Humalassa. Heti mustalaiskuorman lähdettyä matkaan lähti Helmisen talosta sen perässä juoksemaan Nihattulassa asuwa maalari Kustaa 
          Tamminen aikomuksessa päästä mustalaisten rattailla kotiinsa. Hänkin oli wahwasti juowuksissa. Waikka mustalaiset eiwät päästäneet Tammista rattaille, seurasi hän heitä kumminkin, kunnes Wiisarin ja Nihattulan wälillä sai 
          mustalaisen puukosta ammottawan haawan rintaansa. Mustalaiset saatiin pian pidätetyiksi ja haawoittunut tuotiin lääninsairaalaan, jossa hän myöhemmin kuoli. </p>
        <p>Juttu mustalaisnaista Hilja Nymania wastaan oli eilen esillä Hattulan y.m. pitäjäin wälikäräjillä ja tuomitsi oikeus tällöin syytetyn kuoleman tuottaneesta pahoinpitelystä 2 wuodeksi kuritushuoneeseen, samalla alistaen 
          tuomion howioikeuden tarkastettawaksi.
        </p>
      </Article>

      <DateDivider date="Sunnuntai, 10.8.1924"/>
      <Article titleText="Hukkumistapaus Janakkalassa.">
        <h5>Mies hukkunut humalapäissään Kernaalan järween.</h5>
        <p>Toissailtana klo 7 ajoissa lähtiwät Kernaalan järwellä sijaitsewalta Kokemäen Lauttaus Oy:n tukinniputuskoneelta töiden päätyttyä siellä olleet neljä tukkilaista maihin juopottelutarkoituksessa palaten klo 11 illalla 
          takaisin päihtyneinä. Tällöin alkoi kuitenkin eräs miehistä nimeltään Kalle Nieminen, kotoisin nähtäwästi Luopioisista, räyhätä lautalla uhaten puukolla towereitaan, jotka tästä pelästyneinä lähtiwät weneellä pakosalle 
          järwelle. Lautalle jäiwät ainoastaan edellämainittu Nieminen sekä tukkilainen Nyman, joka koetti juopunutta hillitä sillä seurauksella, että molemmat wihdoin wierähtiwät niputuskoneen sillalta järween, josta kuitenkin 
          Nyman pelastettiin, mutta K. Nieminen painui pahemmin päihtyneenä pohjaan. Paikalla ryhdyttiin heti toimenpiteisiin hukkuneen saamiseksi ylös, mutta onnistuttiin tässä wasta niin myöhään, että henki jo oli ennättänyt 
          hukkuneesta paeta.</p>
        <p>Näin surullisella tawalla loppunsa saanut työm. Kalle Nieminen oli ijältään wasta 20-wuotias. Hänen tuntomerkeistään mainittakoon, että hän oli ruumiiltaan suurikokoinen ja waaleatukkainen. Hukkuneen omaisia kehoitetaan 
          ilmoittautumaan Janakkalan nimismiehelle Turengissa.</p>
      </Article>

      <DateDivider date="Tiistai, 12.8.1924"/>
      <Article titleText="Pidätetty pirtutrokari.">
        <h5>Ollut wahwasti aseistettu.</h5>
        <p>Perjantaina päiwällä on Forssan poliisi pidättänyt anmattimaisesta pirtutrokauksestaan tunnetuksi tulleen Toiwo Mäkilän Kydöstä. Kuten muistetaan, on Mäkilän pirtua kuljettanut auto lastineen äskettäin takawarikoitu 
          Lopella samoinkuin hänelle kuuluwa pirtua kuljettawa hewonen pidätettiin myöhemmin Tammelassa.</p>
        <p>Mäkilä tawattiin Kydössä Mäkilän torpan mailla parastaikaa nukkumassa kun poliisi hänet tawoitti. Mäkilällä oli taskussaan Colt-pistooli sekä 20 panosta, mutta hän ei woinut niitä käyttää, kun poliisi hänet 
          äkkiarwaamatta yllätti.</p>
        <p>Mäkilää tullaan syyttämään Forssan käräjillä anmmattimaisesta spriin salakuljetuksesta sekä Lopella samoista asioista.</p>
      </Article>

      <DateDivider date="Tiistai, 19.8.1924"/>
      <Article titleText="Toinenkin Otto Nyströmin ryöstäjistä saanut tuomionsa.">
        <h5>Tuomittiin eilen kihlakunnanoikeudessa 3 wuodeksi kuritushuoneeseen.</h5>
        <p>Kuten muistettaneen, tapahtui Wanajassa wiime wuoden heinäkuussa julkea pahoinpitely ja ryöstö, jonka uhriksi joutui lumppuja ja luita keräämällä itseään elättäwä Otto Nyström -niminen mies. Poliisiwiranomaisten onnistui 
          sittemmin wangita toinen ryöstäjistä, nimeltä Paawali Saarinen ja sai hän kihlakunnanoikeudessa tuomionsa.</p>
        <p>Eilen pidetyillä Janakkalan y.m. pitäjäin wälikäräjillä Hämeenlinnassa oli esillä syyte myös toista Otto Nyströmin pahoinpitelyyn ja ryöstöön osaaottanutta, nimittäin Lauri Arheniusta wastaan, kotoisin Pälkäneen pitäjän 
          Onkkaalan kylästä. Antamallaan päätöksellä tuomitsi kihlakunnanoikeus wastaajan pidettäwäksi 3 wuotta kuritushuoneessa ja olemaan 5 wuotta wailla kansalaisluottamusta sekä korwaamaan oikeuskulut 100:lla markalla.</p>
      </Article>
      <Article titleText="Järkyttäwä auto-onnettomuus.">
        <h5>Ihmishengen hukka.</h5>
        <p>Eilen illalla klo ½10 jälkeen tapahtui Myllymäessä järkyttäwä auto-onnettomuus, joka waati uhrikseen ihmishengen. Kun muurarin waimo Wilhelmina Nieminen, joka Riihimäestä palattuaan oli n.s. 2 mk. autossa tullut asemalta 
          Myllymäkeen, oli juuri nousemassa autosta jalkakäytäwälle, jäi hän samalla ohitse kulkewan sotilasauton alle sillä seurauksella, että pääkallo meni kokonaan halki ja oikea käsiwarsi katkesi. Loukkaantunut kuljetettiin heti 
          lääninsairaalaan, mutta perille saawuttaessa oli hän jo heittänyt henkensä.</p>
        <p>Iältään oli wainaja 43-wuotias.</p>
        <p>Tänään pidettäwä poliisitutkinto selwittää lähemmin tämän surullisen tapahtuman.</p>
      </Article>
      <Article titleText="Weriteko Somerolla.">
        <h5>Miehen otsaluu lyöty murskaksi. - Kuolema seurauksena.</h5>
        <p>Perjantain wastaisena yönä klo 11—12 wälillä pidettiin Someron Kaskiston kylässä Jäppi-nimisessä talossa leikkuutalkoot. Tilaisuudessa, missä oli wäkeä useita kymmeniä, löi työmies Elis Koskinen talollista Bryno Ilanderia 
          jollakin tylsällä aseella niin, että otsaluu murskaantui. Tapahtumapaikalle kutsuttiin kohta paikkakunnan lääkäri, joka totesi haawoittuneen tilan sellaiseksi, että hän oli yötä myöten wietäwä Hämeenlinnan läänin sairaalaan, 
          jossa hän myöhemmin kuoli.</p>
        <p>Mikäli paikkakunnan nimismies on ilmoittanut, oli talkoon miehinen wäki siihen määrään alkoholin liikuttamaa, ettei poliisikuulustelua kohta tapahtuman jälkeen woitu pitää, joten tapahtuman kulusta ei ole wielä tarkempia 
          tietoja.</p>
        <p>Lyöjä Elis Koskinen, on paikkakunnalla tunnettu tappelupukariksi. Lyöjän arwellaan tehneen tihutyönsä kiwäärin perällä, sillä hänellä kerrottiin nähdyn yöllä kiwääri kädessään.</p>
        <p>Tämä oli jo kahdeksas murha Somerolla kuluwan wuoden aikana.</p>
      </Article>

      <DateDivider date="Keskiviikko, 20.8.1924"/>
      <Article titleText="Maanantainen auto-onnettomuus.">
        <h5>Poliisitutkinto alulla.</h5>
        <p>Kuten eilen kerroimme, tapahtui täällä toissa iltana klo ½ 10 ajoissa järkyttäwä auto-onnettomuus, missä sai surmansa muurarin waimo Wilhelmiina Nieminen. Eilen aloitettiin asian johdosta poliisitutkinto, mutta woitiin 
          tällöin kuulustella wain tapauksen näkijöitä, koska yliajaneessa autossa olleet upseerit eiwät manööwerien wuoksi woineet saapua kuulusteltawiksi. Auto, jolla yliajo tapahtui, oli Hyökkäyswaunurykmentin auto n:o 1, missä 
          ohjaajana toimi mainitun rykmentin adjutantti, luutnantti Muukkonen, ja oliwat siinä mukana Hyökkäyswaunurykmentin w.t. komentaja, majuri Kumlin ja ewerstiluutnantti Wallenius. Mikäli wiiden eri todistajan lausunnoista on 
          käynyt ilmi, tuli Hyökkäyswaunurykmentin auto Poltinaholta päin, ja oli Niemisen tarkotuksena kulkea kadun yli, mutta huomattuaan auton tulewan 4-5 metrin päässä, perääntyi hän, kääntyen autokin kuitenkin samaan suuntaan. 
          Tällöin oli Nieminen wieläkin perääntynyt, mutta kun auto edelleen oli kääntynyt samaan suuntaan, oli hän jäänyt alle, kaatuen katukäytäwälle. Auton etupyörä oli ensin raahannut häntä pari metriä ja samoin takapyörä, mikä 
          sitten wiskasi hänet katukäytäwälle. Tapauksen jälkeen kulki auto wielä n. 15 metriä. Mikäli todistajain lausunnoista on käynyt ilmi, ei autossa tapahtuman sattuessa ollut waloja eitä siitä myöskään annettu waroitusmerkkejä. 
          Kuten sanottu, ei autossa olleita upseereita edellämainitusta syystä ole woitu wielä kuulustella. Heidän kuulustelunsa suoritetaan torstaina.</p>
      </Article>

      <DateDivider date="Lauantai, 23.8.1924"/>
      <Article titleText="Maanantainen auto-onnettomuus.">
        <h5>Poliisitutkinto päättynyt.</h5>
        <p>Hämeenlinnassa maanantaina sattuneen ikäwän auto-onnettomuuden johdosta päättyi poliisitutkinto eilen, jolloin kuulusteltiin autossa onnettomuuden tapahtuessa olleita luutnantti Muukkosta, majuri Kumlinia ja 
          ewerstiluutnantti Walleniusta. Kaikki edellämainitut upseerit owat kuulusteluissa wäittäneet, että auton lyhdyt onnettomuuspaikalle saawuttaessa paloiwat, mutta sammuiwat ne onnettomuuden tapahtuessa. Auton nopeuden 
          wäittäwät upseerit olleen sillä hetkellä 10 km. tunnissa. Myös on luutnantti Muukkonen wäittänyt, että hän jarrutti sekä jalka- että käsijarruilla, mutta siitä huolimatta auto kuitenkin luisti alamäessä. Mitä itse 
          allejäämiseen tulee, wäitetään, että Nieminen ei jäänyt pyörien alle, waan jäi oikeanpuoleisen kurasiiwen päälle, mistä sitten, auton kuljettua muutamia metrejä ja törmättyä katuun, putosi katukäytäwälle sekä auto sai 
          sysäyksen keskikadulle päin pysähtyen 4—5 m. perästä.</p>
        <p>Edelleen upseerit wäittäwät, että paikka ei ollut walaistu muuten, paitsi että autojen walot ennen onnettomuutta walaisiwat, sekä että he oliwat antaneet waroitusmerkkejä. Upseerit wäittäwät, että tapahtuma on suoranainen 
          tapaturma eikä huolimattomuudesta milllään tawalla aiheutunut.</p>
        <p>Asia tulee oikeuden käsiteltäwäksi.</p>
      </Article>

      <DateDivider date="Tiistai, 26.8.1924"/>
      <Article titleText="Nuorta naista ammuttu jalkaan.">
        <h5>Ampuja wäittää kysymyksessä olewan wahingonlaukauksen.</h5>
        <p>Toissa iltana sattui täällä ampumistapaus, jossa palwelijatar Olga Sipinen sai nähtäwästi wahingossa lauenneesta rewolwerista waikean haawan oikeaan sääreensä. Mainittuna iltana oliwat Sipinen ja wiilari Armas Akseli 
          Saren olleet käwelyllä ja oli Saren lähtenyt saattamaan seuratoweriaan tämän asunnolle Panimokatu 3. Portilla jonkun aikaa keskusteltuaan laukesi Sirenin päällystakin taskussa ollut amerikkalaismallinen rewolweri ja 
          kuula tunkeutui Sipisen wasempaan sääreen wikuuttaen myös luuta. Haawoitettu toimitettiin heti kaupungin sairaalaan lääkärinapua saamaan ja ampuja pidätettiin eilen aamulla. Toimitetussa kuulustelussa on Saren kertonut, 
          että kysymyksessä on wahingonlaukaus ja oli ase lauennut taskussa hänen sitä hypistellessään. Mainittuna iltana wäitetään Sarenin olleen hiukan päihtyneen. Asia tulee käsiteltäwäksi oikeudessa ja tullaan Sarenia samalla 
          syyttämään luwattomasta ampuma-aseen hallussapidosta.</p>
      </Article>

      <DateDivider date="Sunnuntai, 31.8.1924"/>
      <Article titleText="Hämäräperäinen pahoinpitely Hattulassa.">
        <h5>Muuatta kapitulanttikersanttia lyöty teräaseella hengenwaarallisesti.</h5>
        <p>Keskiwiikon ja torstain wälisenä yönä tapahtui Hattulassa werityö erittäin hämäräperäisissä olosuhteissa. Mainittuna yönä oli Hyökkäyswaunurykmentin alikersantti Lohikoski ollut kuljettamassa pois leiriltä muuttawien 
          sotilaiden warusteita asemalle ja täällä poikennut kauppias Järwisen luo siellä asuwia kapitulanttialiupseereita tapaamaan. Hetken kuluttua oli alik. Lohikoski kuitenkin poistunut näiden luota ja löydettiin hänet sen 
          jälkeen klo 1 tienoissa makaamassa kauppias Järwisen asunnon portaitten ääressä wasemmassa ohimossa ammottawa werihaawa. Paikalle saapuneet henkilöt kuljettiwat haawoitetun Jääkäritykistörykmentin sotilassairaalaan 
          lääkärinapua saamaan. Toimitetussa lääkärintarkastuksessa todettiin, että haawa oli isketty jollain teräaseella ja oli murtanut pääluun. Kersantti Lohikoskea hoidetaan edelleen sotilassairaalassa ja on hän jo toipunut 
          saamastaan wammasta siksi paljon, että hän on tajuissaan, mutta on hänen muistinsa toistaiseksi kadonnut. Asian johdosta on ryhdytty tarmokkaisiin toimenpiteisiin lyöjän kiinnisaamiseksi ja onkin toiweita hänen 
          pidättämisestään.</p>
      </Article>
      <Article titleText="Taas puukko heilunut Ypäjällä.">
        <h5>Kuusi reikää isketty mieheen.</h5>
        <p>Torstaina warhain aamulla tapahtui Ypäjällä jälleen kamala werityö. Juuri wankilasta päässyt työmies Frans Mäkinen ja työmies Oskar Raitinen, molemmat Ypäjältä, oliwat keskiwiikkoiltana alkaneet yhdessä juopotella. 
          Yön aikana kehittyiwät juomaweikkojen wälit riidaksi, mikä päättyi siihen, että Raitinen hakkasi puukolla Mäkisen henkihieweriin. Mäkinen ryömi aamulla klo 7 ajoissa wähissä hengin Mattilan pihaan, mistä tilanomistaja 
          Mikkola toimitti hänet lääkärin hoidettawaksi. Puukottaja oli mennyt kotinsa pihamaalle, missä sikahumalassa makaili, kun poliisi ja tilanomistaja Mikkola meniwät häntä rautoihin kytkemään. Wasta myöhemmin tuli hän 
          tajuihinsa.</p>
        <p>Tohtori Aaltonen Loimaalta, jonka hoitoon puukotettu saatettiin, kertoi, että Mäkisen haawoista ainakin kylkihaawa, joka ulottui aina keuhkoihin asti, on hengenwaarallinen. Kaikkiaan on miehessä 6 haawaa, joista yksi 
          kyljessä ja yksi seljässä, muut rinnassa. Puukotetun lähetti tohtori Aaltonen Hämeenlinnan sairaalaan hoidettawaksi. Täällä hän kuitenkin heitti henkensä perjantai-aamuna.</p>
        <p>Molemmat, sekä puukottaja että puukotettu, owat naimattomia ja tunnettuja ryyppymiehiä.</p>
      </Article>
      <Article titleText="Poika ampunut äitiään Hattulassa.">
        <h5>Onko kysymyksessä tahallinen teko tai tapaturma, ei ole wielä selwillä.</h5>
        <p>Wiime perjantai-iltana klo 10 tienoissa oli Hattulan pitäjän Parolassa asuwan koneenkäyttäjä Karppisen luo tullut Karppisen emännöitsijän, leskiwaimo Olga Lakstedtin poika Kalle Lakstedt. Tämä oli aikaisemmin äitinsä 
          mukana ollut Karppisen luona, mutta sitten joutunut sieltä pois. Poliisikuulustelussa on Kalle Lakstedt kertonut, että hänen tultuaan sanottuna iltana Karppisen asuntoon, oli hänen äitinsä ottanut pöytälaatikosta 
          Mauser-pistoolin ja pannut sen pöydälle. Kalle Lakstedt oli sitten mennyt Karppisen asunnon keittiöön, missä hän oli alkanut sormeilla pistoolia sillä seurauksella, että se laukaisi, tunkeutuen luoti hänen äitinsä 
          Olga Lakstedtin oikeasta kädestä sisälle ja siitä edelleen kylkeen watsan kohdalle, mennen luultawasti aina maksaan saakka.</p>
        <p>Edelläkerrotun lailla on Kalle Lakstedt poliisikuulustelussa kertonut. Näin ollen olisi siis kysymyksessä tapaturmalaukaus, mutta toisaalta on herännyt epäilyksiä myös siitä, että ampuminen oli ollut tahallinen, sillä 
          Kalle Lakstedt on kertonut useammalla tawalla kuulusteluissa. Hänen äitiään, jota hywin heikossa tilassa hoidetaan Hämeenlinnan lääninsairaalassa, ei ole woitu toistaiseksi kuulustella. Jatkuwa poliisitutkinto selwittänee 
          tapahtuman oikean laidan.</p>
        <p>Kalle Lakstedt, joka on iältään 16-wuotias, on toistaiseksi poliisiwiranomaisten hallussa, jotka, kuten sanottu, jatkawat tutkimuksia asian johdosta.</p>
      </Article>

      <DateDivider date="Tiistai, 2.9.1924"/>
      <Article titleText="Hattulassa tapahtunut ampumistapaus.">
        <h5>Wahingonlaukauksen uhriksi joutunut leskiwaimo Olga Lackstedt kuollut.</h5>
        <p>Kuten kerroimme tapahtui Hattulassa wiime perjantai-iltana ampumistapaus, jossa leskiwaimo Olga Lackstedtin poika Kalle Lackstedt ampui äitiään niin, että tämä wiime lauantain ja sunnuntain wälisenä yönä kuoli täkäläisessä 
          lääninsairaalassa. Asian johdosta toimitetussa kuulustelussa on käynyt selwille, että kysymyksessä on nähtäwästi wahingonlaukaus. Tähän wiittaa sekin, että ammuttu wahingonlaukauksen uhriksi joutunut Olga Lackstedt ennen 
          kuolemaansa kertoi, että ampuminen oli tapahtunut wahingossa. Asiassa kuullut todistajat kertowat myös ampujan olleen teon tapahtuessa erittäin hermostuneessa mielentilassa.</p>
      </Article>

      <DateDivider date="Tiistai, 9.9.1924"/>
      <Article titleText="Pirtutakawarikko Hausjärwellä.">
        <h5>Auto ja 310 l. spriitä poliisin huostaan.</h5>
        <p>Wiime sunnuntaiaamuna klo 5 ajoissa oli eräs pirtuauto matkalla Helsingistä Hämeenlinnaan päin. Hausjärwen pitäjässä olewan Ryttylän kaswatuslaitoksen kohdalla sattui auto kuitenkin rikkoutumaan, jolloin autossa olleet 
          alkoiwat kiireesti siirrellä spriikanistereita erään pellolla olleen kauraseipään juurelle. Tapauksen huomasiwat kuitenkin Ryttylän kaswatuslaitoksen johtajat, jotka ilmoittiwat tästä Riihimäen poliisilaitokselle. Täältä 
          lähetettiinkin heti miehiä paikalle, saaden nämä haltuunsa, paitsi autoa, 310 litraa spriitä. Samalla pidätettiin autossa mukana olleet autonkuljettaja Wilho Peltonen, työmies Lauri Toiwonen ja juoksupoika Waldemar Astrèn, 
          kaikki Helsingistä.</p>
        <p>Miehet joutuwat pirtunkuljetuksesta wastaamaan kihlakunnanoikeudessa.</p>
      </Article>

      <DateDivider date="Keskiviikko, 10.9.1924"/>
      <Article titleText="Hämeenlinnalaiset huligaanit mellastelleet Hattulassa.">
        <h5>Autonkuljettaja Ylistä lyöty syntyneessä kahakassa pullolla päähän.</h5>
        <p>Wiime lauantai-iltana klo 4 ajoissa oliwat muutamat myllymäkeläiset huligaanit lähteneet kaupungista juopottelumatkalle kahdella autolla, joita ohjasiwat autonkuljettajat Ylinen ja Salminen Hämeenlinnasta. „Retkeilijät” 
          ohjasiwat ensin matkansa Hattulaan jossa kuitenkin Lehijärwelle ehdittyä puhkesi autonkummi. Sitä korjattaessa ryyppiwät miehet läheisessä metsässä, sillä seurauksella, että kun matkaa jatkettaessa oli saawuttu Kiltille 
          wiewän tien haaraan oli pakko pysäyttää auto syntyneen sanaharkan wuoksi. Kun ei sowintoon päästy ärtyiwät mielet siinä määrin, että lopuksi eräs huligaaneista heitti pullolla autonkuljettaja Ylistä päähän, oikeaan ohimoon, 
          johon tuli waikea werihaawa. Myöhemmin pidätettiin mellastelijat ja joutuwat he teostaan wastaamaan oikeudessa.</p>
      </Article>

      <DateDivider date="Lauantai, 13.9.1924"/>
      <Article titleText="Salaperäinen ryöstö Hämeenlinnan lähistöllä.">
        <h5>Eräs pika-ajuri lyöty tajuttomaksi, minkä jälkeen häneltä ryöstetty hewonen ajopeleineen ja rahat. - Hewonen ja ajopelit löydetty myöhemmin metsästä.</h5>
        <p>Toissa yönä aamuyöstä tapahtui Hämeenlinnan maalaiskunnan ja Hattulan pitäjien rajalla ryöstö, mikä toistaiseksi on wielä hämärän peitossa. Hämeenlinnalainen pika ajuri n:o 42 Kustaa Aalto oli ½ 12 junalta sanottuna yönä 
          ollut kyyditsemässä erästä mieshenkilöä Wiisarille, mistä sitten oli palaamassa takaisin kaupunkiin. Tällöin oli hän Pullerinmäen kohdalla tawannut pari tuntematonta miestä, jotka oliwat pyytäneet Aaltoa tulemaan heitä 
          kyyditsemään Wiisarille, mihin Aalto oli suostunutkin, kääntyen ympäri. Jonkun matkaa ajettuaan oliwat he kohdanneet erään kolmannen miehen, joka myös nousi ajopeleihin. Kun sitten oli jonkun matkaa ajettu, oli joku takana 
          istuwista miehistä lyönyt ajuri Aaltoa päähän, niin että tämä meni joksikin aikaa tajuttomaksi. Tällöin oliwat miehet ryöstäneet häneltä päällystakin taskussa olleen rahakukkaron, missä oli 60 mk. rahaa, sekä hewosen ja 
          ajoneuwot, lähtien kiireesti jatkamaan matkaa, Aallon jäädessä maantielle tajuttomana makaamaan. Tultuaan jälleen tajuihinsa meni Aalto Wiisarilla olewan kauppiaan asuntoon, mistä ilmoitti tapahtumasta Hämeenlinnan 
          poliisilaitokselle, mistä sitten edelleen ilmoitettiin asiasta Hattulan piirin nimismiehelle, joka heti erään konstaapelin seurassa lähtikin ottamaan tapahtumasta selkoa. Tiellä näkyikin wielä jäljet, niin että niitä 
          woitiin seurata, ja wihdoin löydettiinkin sekä hewonen että ajopelit Hämeenlinnan maalaiskunnan alueen eräästä syrjäkolkasta, eräältä metsätieltä. Hewonen oli riisuttu waljaista ja wiety läheiseen heinälatoon, kun taas 
          ajopelit oli sysätty pensaaseen. Ajopeleistä löytyi myös hieno miehen päällystakki, jonka aluksi luultiin kuuluwan ryöstön tehneille miehille, mutta eilen päiwällä ilmaantui kuitenkin eräs konemestari, joka ilmoitti 
          päällystakin olewan hänen, se kun oli unohtunut ajopeleihin, Aallon kyyditessä häntä ½ 10 illalla Hämeenlinnaan saapuneelta junalta.</p>
        <p>Ryöstäjistä ei toistaiseksi ole tietoa. Voi kuitenkin olla mahdollista, että teon owat tehneet jotkut pirtutrokarit, jotka warastojensa siirtämiseen owat tarwinneet hewosta ja ottaneet sen näin häikäilemättömällä tawalla. 
          Tässä suhteessa ei kuitenkaan woida mitään warmaa sanoa.</p>
        <p>Poliisiwiranomaiset jatkawat tapahtuman johdosta tutkimuksia.</p>
      </Article>

      <DateDivider date="Keskiviikko, 17.9.1924"/>
      <Article titleText="Hurja kotinäytelmä Hattulassa.">
        <h5>Ehdonalaisuuteen laskettu mies riehunut kotonaan kirwes kourassa.</h5>
        <p>Maanantaiaamuna tuotiin lääninsairaalaan sidottawaksi työm. Martti Rossi Hattulan pitäjän Hurttalan kylästä. Hänellä oli leuwassa liewänlainen ampumahaawa. Rossi oli sunnuntaiyön juopotellut ja aamulla kohmeloa 
          parannellessaan joutunut riitaan isänsä ja sisarensa kanssa sillä seurauksella, että hän lopulta oli temmannut kirween ja uhannut sillä isäänsä ja sisartaan, jotka turhaan koettiwat häntä rauhoittaa. Kun räyhäämistä 
          yhä jatkui pakeni tytär lopulta ikkunan kautta ja toi paikalle poliisin. Mellastelija ei kuitenkaan talttunut tämänkään kehoituksesta waan sen sijaan hyökkäsi poliisin ja muiden paikalla olleiden kimppuun kirwes ojossa. 
          Wihdoin oli poliisin pakko ampua ensinnä waroituslaukaus, ja kun ei tästäkään ollut apua, toinen laukaus joka osui mellastelijaa leukaan, aiheuttamatta kuitenkaan wakawampia wammoja. Rossi on jo pidemmän aikaa wiettänyt 
          juopottelewaa elämää, joten on kyseenalaista, aiheuttaako tämä mellastelu hänen ehdonalaisen wapautensa loppumisen.</p>
      </Article>

      <DateDivider date="Perjantai, 19.9.1924"/>
      <Article titleText="Padasjokelainen murhattu ja ryöstetty lähellä Lappeenrantaa.">
        <h5>Ryöstämisen ja murhan jälkeen ruumis heitetty radalle.</h5>
        <p>T.k. 9 päiwän wastaisena yönä löydettiin radalta n. 4 km. päässä Lappeenrannasta miehen ruumis, jolta weturin pyörät oliwat irroittaneet pään ja wasemman käden kokonaan irti ruumiista. Miehen taskuista löydetyistä 
          papereista woitiin todeta, että wainaja oli työmies Edward Saarinen, syntynyt Padasjoella 1886.</p>
        <p>Piirilääkäri J. Sonck toimitti maanantaina wainajan ruumiin awauksen ja tuli siinä siihen tulokseen, että Saarinen on ensin murhattu ja sitten asetettu kiskoille. Murha on tapahtunut hywin raa'alla tawalla, mitä todistaa 
          surmatun kokonaan ruhjottu ja raadeltu ruumis. Häneltä oli ensikisi pääluu molemmin puolin halennut ja murskautunut, oikeasta kylestä wiisi ja wasemmasta kylestä kaksi kylkiluuta poikki, oikea solisluu poikki, samoin 
          rintalasta, oikea keuhko pahoin rutistunut ja hyytynyttä werta täynnä, samoin watsa hyytynyttä werta täynnä, maksa rewennyt j.n.e. Tutkimus osoitti, että wainajan pääluu on ensin jollain esineellä murskattu ja sitten hänen 
          rintansa ja watsansa päällä jaloin polettu. Kun mitään ulkonaisia wäkiwallan merkkejä ei ruumiissa näy, täytyy olettaa, että hänet on tällä tawoin tapettu. Jos Saarinen olisi joutunut weturin ruhjottawaksi olisi hänen 
          ruumiissaan täytynyt olla myöskin näkywiä haawoja, joita weturin rautaiset osat olisiwat aikaansaaneet.</p>
        <p>Ryöstömurhaan wiittaa myöskin se seikka, että wainajan rahalompakko löytyi radalta aiwan tyhjänä. Kellonsa hän oli asettanut työpuseron taskuun, jolla oli taas sitonut myttyyn eräitä työwaatteitaan. Tätä myttyä ei 
          murhamies ollut arwannut ottaa mukaansa.</p>
        <p>Surmansa saaneesta Saarisesta ja hänen omaisistaan ei ole mitään lähempiä tietoja.</p>
      </Article>

      <DateDivider date="Sunnuntai, 21.9.1924"/>
      <Article titleText="Tappelu Myllymäessä.">
        <h5>Kahta miestä isketty puukolla.</h5>
        <p>Eilen illalla klo 7 tienoissa tapahtui Hämeenlinnassa Myllymäessä werityö, missä kahta miestä lyötiin puukolla. Eräs juopottelewa joukko, mihin kuuluiwat kuorma-ajuri Kalle Salmi, ajuri Kalle Henriksson ja eräs kolmas 
          mies, jonka nimestä ei ole wielä tietoa, oli tullut Myllymäessä talon n:o 35 pihamaalle, missä heidän wälillään oli syntynyt jostakin syystä riitaa. Pihamaalta siirtyiwät sitten miehet pois, jatkaen tappelua kalliolla. 
          Tällöin iskettiin ajuri Henrikssonia puukolla rintaan melkein sydämen kohdalle ja toista miestä, jonka nimestä ei ole tietoa, mutta joka lienee Harwialasta, kaswoihin ja käteen. Paikalle lähetettiin poliiseja, jotka 
          pidättiwät Salmen, kun sen sijaan toiset kaksi oli wietäwä lääninsairaalaan sidottawiksi. Warsinkin Henrikssonin tila lienee huono.</p>
        <p>Poliisitutkinto selwittänee tarkemmin, miten puukotus on tapahtunut ja ketkä siinä owat toisiaan lyöneet.</p>
      </Article>

      <DateDivider date="Tiistai, 23.9.1924"/>
      <Article titleText="Myllymäen werityö.">
        <h5>Ajuri K. Henriksson kuollut.</h5>
        <p>Niinkuin sunnuntaina kerroimme, iskettiin lauantai-iltana Myllymäen kalliolla ajuri Kalle Henrikssonia puukolla rintaan melkein sydämen kohdalle ammottawa haawa. Heikossa tilassa kuletettiin haawoitettu lääninsairaalaan, 
          jossa hän sunnuntaina klo 5 ip. heitti henkensä.</p>
        <p>Puukotukseen epäluulonalaisena on poliisi nyttemmin pidättänyt Hauhon pitäjän Miehoilan kylästä kotoisin olewan työmiehen Wieno Johannes Salosen. Kuorma-ajuri Kalle Salmi, joka pidätettiin heti lauantai-iltana, on 
          päästetty wapaalle jalalle.</p>
        <p>Poliisitutkintoa jatketaan, mutta kieltäytyy poliisi siitä toistaiseksi antamasta mitään tietoja.</p>
      </Article>
      <Article titleText="Juttu löydettyjen rahojen salaamisesta.">
        <h5>Sepänwaimo Anna Elisabet Markkanen tuomittu 750 mk. sakkoon.</h5>
        <p>Kuten muistettaneen, ilmoitti joku aika sitten puuseppä Niilo Sywäniemi täkäläiselle poliisilaitokselle, että hän oli täällä kadottanut lompakon, missä, paitsi postilähetyswekseliä ja muita papereita, oli rahaa 4,700 mk. 
          Samana päiwänä toi eräs korpraali poliisikamariin lompakon, josta löytyiwät kaikki muut paperit, paitsi rahoja, ja ilmoitti korpraali nähneensä erään naisihmisen piiloittaneen sanotun lompakon Rantapuistoon erään puun 
          alle. Kun mainittu korpraali wielä ilmoitti tuntewansa mainitun naisen, joka oli lähtenyt asemalle päin, lähti eräs poliisi korpraalin seurassa asemalle, missä naishenkilö pidätettiin. Poliisilaitokselle tuotuna hän ensin 
          jyrkästi kielsi mitään lompakkoa käsitelleensä. Toimitetussa tarkastuksessa löydettiin kuitenkin hänen sukastaan 4,700 mk. paperiin käärittynä. Pidätetty, sepänwaimo Anna Elisabet Markkanen Turengista, myönsi myöhemmin 
          kuulustelussa lompakon löytäneensä.</p>
        <p>Syyte Markkasta wastaan on jo aikaisemmin ollut, kuten olemme kertoneet, esillä Hämeenlinnan raastuwanoikeudessa löydetyn tawaran salaamisesta. Wiime raastuwanoikeuden istunnossa wastaaja kuitenkin kielsi rahoja löytänensä 
          ja wäitti niitä omikseen. Tässä wäitteessä hän myös eilen, jolloin asia oli toisen kerran esillä, pysyi edelleenkin. Oikeus katsoi kuitenkin tulleen toteennäytetyksi, että wastaaja oli kysymyksessä olewat rahat löytänyt, 
          mikä wuoksi hänet tuomittiin löydetyn tawaran salaamisesta 750 mk. sakkoon. Wastaaja ilmoitti tyytymättömyyttä päätökseen.</p>
      </Article>

      <DateDivider date="Sunnuntai, 28.9.1924"/>
      <Article titleText="Werityö Hattulassa.">
        <h5>Mies surmattu ampumalla Parolan aseman läheisyydessä.</h5>
        <p>Eilen iltapäiwällä klo 3 tienoissa tapahtui Hattulan Parolan aseman läheisyydessä werityö, joka waati uhrikseen ihmishengen. Mainittuun aikaan ampui nimittäin toistaiseksi tuntemattomissa olosuhteissa torpparin poika 
          Kyösti Johansson erään toistaiseksi tuntemattoman mieshenkilön. Murhaaja pidätettiin ja on hänen kuulustelemisensa aloitettu. Torppa, jossa murha tapahtui, sijaitsee n. kilometrin päässä Parolan asemalta. Myöhäisen ajan 
          tähden emme kuitenkaan eilisiltaan mennessä onnistuneet saamaan murhasta lähempiä tarkistettuja tietoja.</p>
      </Article>

      <DateDivider date="Tiistai, 30.9.1924"/>
      <Article titleText="Hattulassa tapahtunut werityö.">
        <h5>Ampuja kieltää syyllisyytensä.</h5>
        <p>Kuten kerroimme tapahtui Hattulassa wiime lauantaina iltapäiwällä klo 3 tienoissa werityö, joka waati uhrikseen ihmishengen. Nyttemmin pidetyssä poliisitutkinnossa on käynyt ilmi seuraawaa:</p>
        <p>Wiime lauantaina iltapäiwällä klo ½ 3 tienoissa oli työmies Koskinen Pälkäneeltä saapunut Parolan aseman läheisyydessä sijaitsewalle leskiwaimo Johanssonin mökille, jossa mainittu leskiwaimo asustaa lastensa kanssa. 
          Mikäli asiassa kuullut todistajat kertowat oli Koskisella ollut mukanaan wäkijuomia, joita hän oli, torpan pojan Kyösti Johanssonin hiukan myöhemmin saawuttua ruwennut tämän kanssa yhdessä nauttimaan, muun wäen ollessa 
          mökin lähellä pellolla työskentelemässä. Äkkiä oliwat ulkona olijat kuulleet sisältä laukauksen ja rientäessään sisään katsomaan tapasiwat wieraan makaamassa werissään tuwan lattialla, otsassa wasemmalla puolen ammottawa 
          ampumahaawa ja kirwes kourassa. Asiasta ilmoitettiin heti poliisille, joka saapui paikalle ja pidätti ampujan.</p>
        <p>Pidätetty on kuulustelussa kertonut, että hän oli ampunut hätäwawjeluksessa suojellessaan itseään kirwes kourassa päälleen hyökkääwää Koskista wastaan. Eräistä merkeistä päättäen on kuitenkin todennäköisempää, että 
          kysymyksessä on ollut tappelu, jonka kuluessa murha on tapahtunut. Murhan tapahtuessa ei, kuten sanottu, huoneessa ollut ketään. Wiereisessä huoneessa oli kyllä werityön tapahtuessa nukkunut muuan torpan pojista, mutta 
          ei hän huonokuuloisena ollut edes kuullutkaan laukausta. Murhattu työmies Juho Heikki Koskinen oli kotoisin Pälkäneen pitäjän Rukkolan kylästä.</p>
      </Article>

      <DateDivider date="Torstai, 2.10.1924"/>
      <Article titleText="Hattulassa tapahtunut werityö.">
        <h5>Ampuja K. Johansson passitettu lääninwankilaan.</h5>
        <p>Poliisitutkinto Hattulassa wiime lauantaina iltapäiwällä tapahtuneen werityön johdosta, jossa kuten muistettanee torpparinpoika Kyösti Johansson ampui työm. Juho Heikki Koskisen, kotoisin Pälkäneeltä, on nyttemmin 
          loppuunsuoritettu ja pidätetty Johansson tutkinnossa ilmenneiden seikkojen perusteella passitettiin eilen Hämeenlinnan lääninwankilaan. Huolimatta siitä, että ampuja yhä edelleenkin kieltää syyllisyytensä on yhä 
          todennäköisempää, että kysymyksessä ei Johanssonin puolelta ole itsepuolustus waan tahallinen tappo. Tähän wiittasi m.m. se, että ampujan, joka teon tehdessään oli paitahihasillaan, paita oli sekä edestä että takaa 
          weren tahraama sekä repeytynyt, joten on todennäköistä, että sekä ammuttu että ampuja owat ennen tekoa olleet ankarassa kamppailussa keskenään. Miten teko on tapahtunut selwinnee lopullisesti asian jouduttua käräjillä 
          käsiteltäwäksi.</p>
      </Article>

      <DateDivider date="Lauantai, 4.10.1924"/>
      <Article titleText="Juopumus ja kieltolakirikkomukset Hämeenlinnassa.">
        <h5>Hämeenlinnassa wiime kuukauden aikana pidätetty 97 henkilöä juopumuksesta ja 32 luwattomasta wäkijuomien hallussapidosta.</h5>
        <p>Hämeenlinnassa pidätettiin wiime syyskuun aikana juopumuksesta 97 henkilöä ja luwattomasta wäkijuomain hallussapidosta 32 henkilöä. Kumpikin on suurin määrä, mitä Hämeenlinnassa koskaan on juopumus- ja 
          kieltolakirikoksista pidätetty.</p>
      </Article>
      <Article titleText="Hattulan werityö.">
        <h5>Ammuttu Tammisaaresta karannut kapinawanki.</h5>
        <p>Wiime lauantaina Hattulassa tapahtuneen werityön johdosta on aikaisemmin kertomamme lisäksi saatu selwille, että ammuttu Juho Heikki Koskinen, kotoisin Pälkäneeltä, on joitain aikoja sitten päässyt karkaamaan Tammisaaren 
          pakkotyölaitokselta, minne hän oli joutunut kapinan aikana tekemistään rikoksista. Koskinen oli kapinan aikana ollut paikkakuntansa kauhu. Karkumatkallaan oli hän tehnyt luultawasti useitakin warkauksia. Niinpä waatteet, 
          mitkä oliwat hänen päällänsä, hänen tullessaan ammutuksi, oliwat warastetut eräältä Hauhon isännältä.</p>
      </Article>

      <DateDivider date="Lauantai, 11.10.1924"/>
      <Article titleText="Irtolaisuus Hämeen läänissä.">
        <h5>Jälleen lisääntymässä.</h5>
        <p>Niinkuin tunnettua, on yleensä tunnusmerkillistä, että syksyn tullen irtolaisuus aina suuresti lisääntyy. Mikäli meille on ilmoitettu, on tämä ilmiö jälleen tänäkin syksynä ollut hawaittawissa myöskin Hämeen läänissä, sillä 
          irtolaisia, joita kesällä oli wain nimeksi, on taasen syksyn saawuttua passitettu wankilaan runsaammin ja jos wanhat merkit pitäwät paikkansa, tulee heidän lukumääränsä lisääntymään pitkin talwea, wähentyen taas kewäään 
          kuluessa.</p>
        <p>Todisteena tästä on meille mainittu, että wiime kesäkuun irtolaiskuulustelussa oli pidätettynä 25 henkilöä. Aikaisempiin wuosiin werrattuna on irtolaisuus tänä syksynä entisestäänkin lisääntynyt.</p>
      </Article>
      <Article titleText="Kamala onnettomuus Hämeenlinnan asemalla.">
        <h5>Juna ajanut eilen illalla miehen yli.</h5>
        <p>Kun eilen illalla klo 8,20 Turusta tänne saapuwa matkustajajuna oli tulossa asemalle, huomasi junan konduktööri miehen makaawan radalla weturitallin ja asemasillan wälillä. Kuljettaja koetti saada junan pysäytetyksi, mutta 
          se oli silloin jo myöhäistä. Juna ajoi miehen yli sillä seurauksella, että hänen molemmat jalkansa ruhjoituiwat kokonaan ja muutenkin sai hän pahoja ruhjewammoja eri osiinsa ruumista. Sitäpaitsi repiwät junan pyörät hänen 
          waatteensa kokonaan rikki, niin että kun juna saatiin pysäytetyksi oli onneton, joka silloin jo oli heittänyt henkensä, kokonaan alastomana ja weren peitossa.</p>
        <p>Mikäli eilen illalla wainajan taskuista löydetyistä papereista saatiin selwille, on hän nimeltään Gabriel Jokinen, kotoisin Hämeenlinnan Maalaiskunnasta. Iältään oli hän n. 25-wuotias.</p>
        <p>Poliisitutkinta onnettomuuden johdosta toimitetaan tänään. Ruumis kuljetettiin eilen illalla lääninsairaalan ruumishuoneelle.</p>
      </Article>

      <DateDivider date="Sunnuntai, 12.10.1924"/>
      <Article titleText="Hämeenlinnan asemalla tapahtunut yliajo.">
        <h5>Tapaturman uhri työm. G. Jokinen todennäköisesti päihtyneenä joutunut junan alle.</h5>
        <p>Kuten eilen kerroimme ajoi wiime perjantai-iltana Turusta tulewa matkustajajuna n.k. sahan waihteen kohdalla työm. Gabriel Jokisen yli, sillä seurauksella, että hänen molemmat jalkansa ruhjoutuiwat ja hän sai niin pahoja 
          ruhjewammoja muihin osiin ruumistaan, että niistä kuolema oli seurauksena. Nyttemmin suoritetussa poliisitutkinnossa on käynyt ilmi, että tapaturman uhri nähtäwästi on kulkenut radalla junan saapuessa ja tällöin takertunut 
          junan weturin häkkiin, jonka mukana hän oli laahaantunut kunnes juna saatiin pysäytetyksi. Tarkastettaessa ruumista löydettiin wainajan taskusta pullo, joka oli särkynyt ja siinä ollut sprii wuotanut maahan, joten on 
          todennäköistä, että Jokinen yliajon tapahtuessa on ollut päihtynyt. Mikäli kuulustelussa on selwinnyt oli Jokinen ollut nähtäwästi matkalla Sairioon morsiantaan tapaamaan ja tällöin lähtenyt kulkemaan pitkin rataa.</p>
        <p>Veturinkuljettajaa ja lämmittäjää, jotka owat olleet yliajon tapahtuessa lähimpinä silminnäkijöinä ei wielä ole woitu kuulustella, joten tapahtuman kulkua ei wielä ole saatu täysin selwille. Jatkuwassa poliisitutkinnossa 
          selwinnee lopullisesti miten yliajo on tapahtunut.</p>
        <p>Tapaturman uhriksi joutunut työm. Gabriel Jokinen oli syntynyt w. 1893 ja oli hän kotoisin Hämeenlinnan maalaiskunnasta Parolan kylästä.</p>
      </Article>

      <DateDivider date="Tiistai, 14.10.1924"/>
      <Article titleText="Werityö Hämeenlinnan maalaiskunnan työwäentalolla.">
        <h5>Miestä isketty puukolla hengenwaarallisesti.</h5>
        <p>Wiime sunnuntai-iltana klo 9 ajoissa tapahtui Hämeenlinnan maalaiskunnan työwäentalolla raaka puukotus, minkä uhriksi joutui sepän poika Aarne Luoma Hämeenlinnan maalaiskunnan Pullerinmäeltä. Toimitetussa alustawassa 
          poliisikuulustelussa on lyöjä, nimeltään Onni Salin ja kotoisin Hämeenlinnasta, kertonut, että hän sanottuun aikaan seisoi työwäentalon portailla, joiden edustalla oli eräs hänelle tuntematon mies. Kun tämä sitten oli 
          tullut Salinia kohti — on Salin kertonut — oli hän huomaawinaan miehen kädessä jonkun aseen, millä luuli tämän yrittäwän lyödä häntä. Tällöin oli Salin ilman muuta iskenyt puukolla Luomaa rintaan keuhkoihin saakka 
          ulottuwan haawan.</p>
        <p>Luoma tuotiin Hämeenlinnan lääninsairaalaan hoidettawaksi. Hänen tilansa on huono.</p>
      </Article>
      <Article titleText="Puistossa tapahtunut autohurjastelu.">
        <h5>Wastaaja tuomittu sakkoon ja maksamaan korwausta.</h5>
        <p>Autonkuljettaja Tyko Ekholm, joka wiime elokuussa eräänä yönä oli autolla ajellut pitkin puiston kenttää ja ruohikoita, särkien 14 penkkiä ja 1 saarnipuun, tuomittiin raastuwanoikeuden eilisessä istunnossa 500 mk. sakkoon 
          ja korwaamaan kaupungille tekemänsä wahingon 660 markalla.</p>
      </Article>
      <Article titleText="Hattulassa tapahtunut mellastus.">
        <h5>Rossi tuomittu menettämään ehdollisen wapautensa.</h5>
        <p>Kuten olemme kertonneet, mellasteli wiime kuun puoliwälin paikkeilla kotonaan Hattulan Hurttalassa työmies Martti Rossi. Rossi oli juopotellut ja aamulla kohmeloan parannellessaan joutunut riitaan isänsä ja sisarensa kanssa 
          sillä seurauksella, että hän lopulta oli temmannut kirween ja uhannut sillä isäänsä ja sisartaan, jotka turhaan koettiwat häntä rauhoittaa. Kun räyhäämistä yhä jatkui pakeni tytär lopulta ikkunan kautta ja toi paikalle 
          poliisin. Mellastelija ei kuitenkaan talttunut tämänkaan kehoituksesta, waan sen sijaan hyökkäsi poliisin ja muiden paikalla olleiden kimppuun kirwes ojossa. Wihdoin oli poliisin pakko ampua ensinnä waroituslaukaus, ja kun 
          ei tästäkään ollut apua, toinen laukaus joka osui mellastajaa leukaan, aiheuttamatta kuitenkaan wakawampia wammoja. Rossi jo pidemmän aikaa oli wiettänyt juopottelewaa elämää.</p>
        <p>Nyttemmin annetulla päätöksellä on Rossi, joka on ehdonalainen wanki, tuomittu menettämään wapautensa. Rossin ehdollinen tuomio olisi päättynyt elokuun 21 p:nä 1926.</p>
      </Article>
      <Article titleText="Rahawarkaus Janakkalassa.">
        <h5>Eräs maanwiljelijä menettänyt 8,000 mk.</h5>
        <p>Wiime Lauantaina tapahtui Janakkalan pitäjän Wähikkälän kylässä suurehko rahawarkaus. Kun mw. Kalle Siukola Rengosta oli hewosellaan ajamassa maantietä, otti hän rattailleen erään miehen, jatkaen sitten tämän kanssa matkaa 
          eteenpäin. Kun Siukola kuitenkin oli humalassa, oli mies, jonka nimi on poliisin tiedossa, käyttänyt tilaisuutta hywäkseen, anastaen lompakon, missä oli yli 8,000 mk. rahaa, pannen sen sitten takaisin Siukolan taskuun.</p>
        <p>Warkauden tekijä, kuten sanottu, tunnetaan, mutta ei poliisi ole häntä wielä saanut pidätetyksi.</p>
      </Article>
      <Article titleText="Mies löydetty kuolleena metsästä.">
        <h5>Kuoleman syynä luultawasti spriin nauttiminen.</h5>
        <p>Wiime sunnuntai-iltana klo 9 ajoissa löydettiin Wanajan pitäjän Kontuwuoren kulmalta n.k. Seppälänniitty-nimiseltä paikalta, n. 5 m. kylätien siwulla kuolleena Wanajan pitäjän Luolajasta kotoisin ollut työmies Sulo Nurminen. 
          Alustawassa poliisikuulustelussa on käynyt selwille, että Nieminen sunnuntaina iltapäiwällä ja wielä myöhemmin illallakin oli juopotellut parin towerinsa kanssa. Näin ollen on todennäköistä, että Nieminen on kuollut spriin 
          nauttimiseen, sillä mitään ulkonaisia wäkiwallan merkkejä ei hänessä hawaittu.</p>
        <p>Nieminen oli iältään 25-30 wuotias ja naimaton.</p>
        <p>Ruumis on wiety Wanajan leikkuuhuoneelle.</p>
      </Article>

      <DateDivider date="Torstai, 16.10.1924"/>
      <Article titleText="Janakkalan, Wanajan, y.m. pitäjäin">
        <h5>syyskäräjillä</h5>
        <p>eilen tuomittiin työmies Ewert Hattin Hausjärwen Tenholasta ilmiannosta, saman pitäjän Rutajärweltä kotoisin olewa talollinen H. Maaranta pahoinpitelystä 1,000 mk. sakkoon ja suorittamaan erinäisiä korwauksia ja kuluja.</p>
        <p>Samoin tuomittiin Janakkalan Hakoisista kotoisin olewa renki Konstantin Seppälä näpistelystä ja eläimille määrätyn spriin wäärinkäyttämisestä yht. 600 mk. sakkoon.</p>
        <SubDivider className="dividerStyle"/>
        <p><span className="boldStyle">Humalapäissään mellasteli</span> eilistä wastaan yöllä klo 12 ajoissa Hattulassa Metsänkylän kartanossa työmiehen poika Lauri Aaltonen. Hän oli rautalapiolla rikkonut kaksi ikkunaa ja lisäksi kolmannen jollakin muulla aseella. 
          Asiasta sukeutunee oikeusjuttu.</p>
      </Article>
      <Article titleText="Janakkalassa tapahtunut raaka puukotus.">
        <h5>Puukottaja wangittu ja tunnustanut tekonsa.</h5>
        <p>Niinkuin tiistaina mainitsimme, tapahtui Janakkalan Mallinkaisilla wiime sunnuntai iltana raaka puukotus, jonka uhriksi joutui lohkotilallinen Kristian Niemi samasta kylästä. Mainittuna iltana oli Niemi tullut maantiellä 
          lohkotilallisen poikaa Wilho Mannista wastaan, joka ilman mitään syytä oli iskenyt Niemeä puukolla wasemmalle puolelle rintaa.</p>
        <p>Niemi toimitettiin heti Janakkalan sairaalaan, jossa häntä edelleenkin hoidetaan ja on hänen tilansa hengenwaarallinen.</p>
        <p>Heti teon tehtyään lähti Manninen pakoon, mutta pidättiwät poliisiwiranomaiset hänet tiistai-iltana Janakkalan Wenosta. Toimitetussa kuulustelussa tunnusti hän tekonsa, mutta wäitti, että Niemi oli ensin käynyt kiinni hänen 
          kurkkuunsa. Tämä wäite ei kuitenkaan pidä paikkaansa.</p>
        <p>Puukottaja Manninen passitetaan tänään lääninwankilaan odottamaan asian käsittelyä kihlakunnanoikeudessa.</p>
      </Article>
      <Article titleText="Hämeenlinnan maalaiskunnassa tapahtunut werityö.">
        <h5>Puukottaja O. Salin passitettiin eilen lääninwankilaan.</h5>
        <p>Kuten aikaisemmin kerroimme, tapahtui Hämeenlinnan maalaiskunnan työwäentalolla wiime sunnuntai-iltana klo 9 ajoissa raaka puukotus, jonka uhriksi joutui sepänpoika Aarne Luoma Hämeenlinnan Pullerinmäeltä. Puukottaja, 
          työm. Onni Salin Hämeenlinnasta pidätettiin heti teon tehtyään. Poliisitutkintoa asian johdosta on jatkettu edelleen ja on siinä kuulustelujen lausunnoista käynyt ilmi, että puukotus on tapahtunut ilmeisesti tahallisesti 
          puukottajan ollessa juowuspäissään ja on puukottaja O. Salin tämän nojalla eilen passitettu lääninwankilaan. Mikäli asiassa kuultujen lausunnoista woidaan päättää on puukotus tapahtunut siten, että puukottaja oli 
          juowuspäissään asettunut työwäentalon owelle seisomaan ja järjestysmiehenä esiintyen koettanut estää iltamassa olijoita sisään pääsemästä. Puukotettu ei kuitenkaan ollut wälittännyt tästä, waan aikonut mennä Salinin ohi 
          suoraan sisään, jolloin kuitenkin Salin oli häntä iskenyt puukolla rintaan keuhkoihin asti ulottuwan haawan.</p>
        <p>Puukotetun Luoman tila on edelleenkin hywin huono, mutta toiweita hänen henkiin jäämisestään kuitenkin on.</p>
      </Article>

      <DateDivider date="Tiistai, 21.10.1924"/>
      <Article titleText="Myllymäessä tapahtunut werityö.">
        <h5>Salonen tuomittu 4:ksi wuodeksi kuritushuoneeseen.</h5>
        <p>Kuten muistettaneen, tapahtui Myllymäessä joku wiikko sitten werityö, minkä seurauksista ajuri K. Henriksson heitti henkensä. Kuten aikainaan kerroimme, oli työmies Wieno Johannes Salonen yhdessä ajurien Henrikssonin ja K. 
          Salmen kanssa kalliolla juopottelemassa. Täällä oli syntynyt Henrikssonin ja Salosen wälillä riita sillä seurauksella, että kumpikin tempasi esiin puukkonsa. Kahakassa sai Salonen oikeaan käteensä 2 haawaa ja samoin Henriksson 
          haawan kumpaankin käsiwarteen. Toinen Salosen antamista iskuista katkaisi waltimon, mistä oli seurauksena niin ankara werenwuoto, että Henriksson sen johdosta heitti lääninsairaalassa henkensä.</p>
        <p>Syyte Salosta wastaan oli eilen Hämeenlinnan raastuwanoikeudessa esillä. Antamallaan päätöksellä tuomitsi raastuwanoikeus wastaajan pahoinpitelystä, mistä oli kuolema seurauksena, pidettäwäksi 4 wuotta kuritushuoneessa ja 
          maksamaan erinäisiä kuluja 1575 mk.</p>
      </Article>
      <Article titleText="Hattelmalan harjulla tapahtunut auto-onnettomuus.">
        <h5>Autonkuljettaja Eino Helin tuomittu waromattomasta ja huolimattomasta ajosta sakkoihin.</h5>
        <p>Kuten muistettanee tapahtui Hattelmalan harjulla wiime helatorstain wastaisena yönä auto-onnettomuus, jossa Janakkalan kunnan ulosottoapulainen Iiwari Karjalainen menetti henkensä autonkuljettajan waromattoman ajon wuoksi. 
          Juttu autonkuljettajaa Eino Akseli Heliniä wastaan oli eilen esillä Hausjärwen y.m. pitäjien syyskäräjillä ja tuomittiin hänet kuoleman aiheuttaneesta waromattomasta ja huolimattomasta ajosta 50 päiwäsakkoon, yht. 1,000 mk. 
          sekä korwaamaan wainajan leskelle Hilma Karjalaiselle hautauskuluja 2,500 mk. sekä maksamaan wainajan wiidelle alaikäiselle lapselle elatusapua 100 mk. kuukaudessa sekä korwaamaan asianomaisen oikeudenkäyntikulut.</p>
      </Article>

      <DateDivider date="Keskiviikko, 22.10.1924"/>
      <Article titleText="Wiinakauppiaat mellastelleet Lammilla.">
        <p>Wiime perjantaina wietettiin Yläneen kylässä Maasillan talossa häitä. Huolimatta siitä, että kuokkawieraille oli etukäteen tehty tiettäwäksi, ettei heillä ole häätaloon asiaa, oli näitä kerääntynyt suuri joukko talon 
          läheisyyteen, joukossa useita wiinatrokareita, jotka aiwan julkisesti harjoittiwat kauppaa. Kun elämä ulkona rupesi käymään kowin riwoksi, meni Asikkalasta kotoisin olewa Eino Sawola kuokkawieraiden joukkoon palauttamaan 
          järjestystä. Tästä suuttuneena eräs trokareista, Wäinö Äijälä sieppasi esiin taskuaseensa ja alkoi ampua. Kuula ei kuitenkaan sattunut Sawolaan, waan lähellä olewaan W. Saarinkoon, jonka päätä kuula sipaisi, tehden siihen 
          naarmun. Syntyneessä rytäkässä lyötiin Eino Sawolaa aika pahasti. Äijälä saatiin pidätetyksi, mutta toiset trokarit, m.m. eräs Malin, pääsiwät karkuun. Kun oliwat näin joutuneet alakynteen, särkiwät trokarit taloon wiewän 
          sillan. Tästä olisi woinut olla hywinkin wakawat seuraukset, jos yön pimeässä joku olisi sattunut ajamaan esim. autolla, tietämättä, että silta oli poissa. Kaikeksi onneksi ei trokarien ilkityöstä tällä kertaa kuitenkaan 
          suurempia wahinkoja koitunut.</p>
      </Article>
      <Article titleText="Spriitakawarikko Leppäkoskella.">
        <h5>Junan pakaasijarrumies ottamassa osaa kuljetukseen.</h5>
        <p>Matkustajajunan n:o 203:n saapuessa wiime maanantai-iltana klo 8,50 Leppäkosken asemalle hawaitsi raittiuswalwoja, kansak. op. U. Airisto mitenkä junan pysähtyessä asemalle hyppäsi heti eräs samassa junassa matkustawa 
          mieshenkilö siitä kiiruhtaen pakaasiwaunun luo ja n.k. pakkaasijarrumiehen awattua mainitun waunun wastakkaisella puolella asemaa olewan owen ja yrittäen antaa tälle henkilölle kaksi hywin suurikokoista pakettia, tullen 
          kuitenkin tässä yrityksessään estetyksi. Mies, huomaten aikeensa epäonnistuneen hyppäsi jälleen junaan ja päästen siten pakenemaan.</p>
        <p>Paketteja lähemmin tarkastettaessa huomattiin niissä toisessa olewan osoitteena „Larsen, Leppäkoski” ja toisen „Larson, Leppäkoski”. Sisällyksenä niissä kummassakin oli kaksi kymmenen litran kanisteria, siis yhteensä 
          neljäkymmentä litraa „ainetta”. Epäilemättä oli näitä lähetyksiä aikomus kuljettaa saman junan matkustajawaunussa wielä eteenpäin. Mainittakoon wielä, että Leppäkoskella on ennenkin tapahtunut samantapaisia takawarikoita.</p>
      </Article>

      <DateDivider date="Torstai, 30.10.1924"/>
      <Article titleText="Myllymäen huligaanit jälleen ilkitöissä.">
        <h5>Tällä kertaa heittäneet kissan erään asunnon ikkunan läpi sisään.</h5>
        <p>Eilen iltapäiwällä klo ½ 3 tienoissa oli pari Myllymäen huligaania juopotteluretkellään suunnannut matkansa Punaportille ja täällä ohimennen heittäneet eläwän kissan läpi ikkunoiden waimo Mathilda Oksasen asuntoon. Näin 
          pahan kohtelun alaiseksi joutunut kissa oli lentomatkallaan saanut werihaawoja ruumiiseensa. Eläinrääkkääjät lähtiwät teon tehtyään täydessä rauhassa Myllymäkeen juopotteluaan jatkamaan. Heidät kuitenkin tunnetaan ja tullaan 
          heitä syyttämään eläinrääkkäyksestä ja kotirauhan rikkomisesta.</p>
      </Article>

      <DateDivider date="Perjantai, 31.10.1924"/>
      <Article titleText="Kuolemalla päättynyt itsemurha.">
        <h5>Itseään partaweitsellä wiileskellyt kiwenhakkaaja J. Salo kuollut saamiinsa haawoihin.</h5>
        <p>Kuten aikaisemmin kerroimme, yritti Hämeenlinnan maalaiskunnasta Pullerinmäeltä kotoisin olewa kiwenhakkaaja Jalmari Salo wiime wiikon maanantaina surmata itsensä wiileskelemällä kaulaansa ja käsiinsä partaweitsellä 
          ammottawia haawoja. Mies toimitettiin tällöin lääninsairaalaan hoitoa saamaan ja osoittikin hän jo wiime wiikolla toipumisen merkkejä. Toissailtana hänen tilansa yhtäkkiä huononi ja haawoista aiheutunut werenmyrkytys 
          aiheutti kuoleman.</p>
      </Article>

      <DateDivider date="Lauantai, 1.11.1924"/>
      <Article titleText="Janakkalan, Wanajan, y.m. pitäjäin">
        <h5>syyskäräjillä</h5>
        <p>eilen käsiteltiin m.m. seuraawat asiat:</p>
        <p>Ent. poliisikonstaapelin poika O. W. Wuorinen Janakkalan Leppäkoskelta tuomittiin ammattimaisesta alkoholipitoisten aineiden myynnistä 6:ksi kuukaudeksi wankeuteen, korwaamaan waltiolle saamansa hyödyn 500:lla markalla, 
          maksamaan todistajapalkat ja menettämään takawarikoidut 13 litraa spriitä waltiolle. Wastaaja ilmoitti tyytymättömyyttä päätökseen.</p>
        <p>Joutomies O. Tilder Hämeenlinnasta tuomittiin ammattimaisesta alkoholipitoisten aineiden myynnistä 6:ksi kuukaudeksi wankeuteen, eläinrääkkäyksestä 1:ksi kuukaudeksi wankeuteen eli rangaistukset yhdistettyinä pidettäwäksi 
          6 kk. 20 p. wankeudessa, minkä lisäksi hänet wielä tuomittiin juopumuksesta 20 päiwäsakkoon wastaten 400 mk., korwaamaan wiinanmyynnistä saamansa hyödyn waltiolle 500:lla markalla ja maksamaan todistajapalkkioita 310 mk. Tilder 
          pidätettiin heti ja passitettiin lääninwankilaan. Mainittu Tilder oli, kuten joku päiwä sitten kerroimme, heittänyt kissan sisään erään talon akkunasta, minkä johdosta hänet tuomittiin mainittuun 1 kk. wankeusrangaistukseen.</p>
        <p>Tehtaalainen P. A. Koskinen Terwakoskelta tuomittiin wiinanmyynnistä 75:een päiwäsakkoon ja korwaamaan waltiolle saamansa hyödyn 50:llä markalla.</p>
        <p>Sekatyömies W. E. Jokinen Terwakoskelta tuomittiin juopumuksesta 40:een päiwäsakkoon ja pahoinpitelystä 15:een päiwäsakkoon.</p>
        <p>Syyte Lyydia Sulosta wastaan, joka asuu n.k. Pilwilinnassa, alkoholipitoisten aineiden myynnistä lykkäytyi, koska eräs todistaja ei ollut saapunut oikeuteen. Mainittu todistaja tuomittiin 250 mk. sakkoon ja welwoitettiin 
          saapumaan ensi kerralla oikeuteen 500 mk. sakon uhalla.</p>
        <p>Joutomies T. Lehtinen Hausjärwen Karhin kylästä tuomittiin murrosta 6:ksi kuukaudeksi wankeuteen. Wastaaja oli murtautunut mm. P. Lundellin asuntoon, tullen kuitenkin warkausyrityksessään estetyksi.</p>
      </Article>

      <DateDivider date="Torstai, 6.11.1924"/>
      <Article titleText="Hämeenlinnan maalaiskunnassa tapahtunut werityö.">
        <h5>O. Salin tuomittu törkeästä pahoinpitelystä wuodeksi wankeuteen.</h5>
        <p>Kuten aikoinaan kerroimme, tapahtui Hämeenlinnan maalaiskunnan työwäentalolla joku aika sitten puukotus, jonka uhriksi joutui sepänpoika Aarne Luoma Hämeenlinnan Pullerinmäeltä. Puukottaja oli työm. Onni Salin Hämeenlinnasta 
          ja pidätettiin hänet heti teon tehtyään.</p>
        <p>Syyte Salinia wastaan oli eilen esillä Hattulan wälikäräjillä. Antamallaan päätöksellä tuomitsi kihlakunnanoikeus wastaajan juopumuksesta 20:een päiwäsakkoon, wastaten 200 mk., luwattomasta wäkijuomain hallussapidosta 
          15:een päiwäsakkoon ja törkeästä pahoinpitelystä yhdeksi wuodeksi wankeuteen eli kaksi wiimemainittua rangaistusta yhdistettynä pidettäwäksi 1 wuosi 10 päiwää wankeudessa. Samalla tuomittiin wastaajalta tawattu sprii 
          waltiolle menetetyksi.</p>
      </Article>
      <Article titleText="J. H. Koskisen tappo.">
        <h5>Wastaaja Kyösti Johansson tuomittu taposta 3:ksi wuodeksi kuritushuoneeseen.</h5>
        <p>Kuten kerroimme, tapahtui Hattulassa joku aika sitten werityö, joka waati uhrikseen ihmisen. Eräänä iltapäiwänä oli työmies Juho Heikki Koskinen Pälkäneeltä saapunut Parolan aseman läheisyydessä sijaitsewalle leskiwaimo 
          Johanssonin mökille, jossa mainittu leskiwaimo asustaa lastensa kanssa. Äkkiä oliwat ulkona olijat kuulleet sisältä laukauksen ja rientäessään sisään katsomaan tapasiwat Koskisen makaamassa werissään tuwan lattialla, otsassa 
          wasemmalla puolen ammottawa ampumahaawa ja kirwes kourassa. Asiasta ilmoitettiin heti poliisille, joka saapui paikalle ja pidätti ampujan. Pidätetty kertoi, että hän oli ampunut hätäwarjeluksessa suojellessaan itseään kirwes 
          kourassa päälle hyökkääwää Koskista wastaan.</p>
        <p>Hattulan wälikäräjillä eilen Hämeenlinnassa tuomittiin Johansson taposta pidettäwäksi 3 w. kuritushuoneessa ja luwattomasta ampuma-aseen hallussapidosta 12:een päiwäsakkoon eli rangaistukset yhdistettyinä pidettäwäksi 
          kaikkiaan 3 w. 5 p. kuritushuoneessa.</p>
      </Article>
      <Article titleText="Miestä lyöty halolla päähän.">
        <h5>Kauppias Oksanen Teurolta saanut hengenwaarallisen iskun.</h5>
        <p>Viime perjantaina, kun kauppias Swante Oksanen Tammelan Teurolta wei markkinawäkeä kuorma-autollaan kotiin Forssasta, riitaantuiwat kauppias Oksanen ja talollisen poika Lauri Ali-Tuomola. Oksanen ajoi autonsa kauppansa eteen, 
          jolloin wäki siitä poistui. Wähän ajan kuluttua palasi Lauri Ali-Tuomola kuitenkin takaisin hakemaan autoon jäänyttä hattuaan. Tällöin hänen riitansa kauppias Oksasen kanssa jatkui, ja kiihtyi Ali-Tuomola niin, että hän löi 
          kauppias Oksasta halolla päähän. Kauppias Oksanen sai niin pahan aiwotärähdyksen, että hän heti meni tajuttomaksi. Hänet tuotiin Hämeenlinnan lääninsairaalaan hoidettawaksi.</p>
      </Article>
      <Article titleText="Puukotus Rengossa.">
        <h5>Muuatta talollisenpoikaa puukotettu keskellä maantietä.</h5>
        <p>Toissailtana klo ½ 6 tienoissa tapahtui Rengon pitäjän Kuittilan kylässä puukotus, joka wielä toistaiseksi on hämärän peitossa. Mainittuun aikaan oli nimittäin kolme samassa kylässä asuwaa nuorta mieshenkilöä kohdannut 
          maentiellä talollisen pojan Heikki Karttisen ja lyöneet häntä puukolla selkään kolme haawaa. Haawoittunut toimitettiin heti lääninsairaalaan apua saamaan ja on hänen tilansa ainakin toistaiseksi hywä, joten hengenwaaraa ei ole. 
          Puukottajia ei wielä eilisiltaan mennessä oltu pidätetty, mutta tunnetaan heidät.</p>
      </Article>

      <DateDivider date="Lauantai, 8.11.1924"/>
      <Article titleText="Tammelan Teurolla tapahtunut pahoinpitely.">
        <h5>Kauppias Oksanen edelleen puolitajuttomassa tilassa.</h5>
        <p>Kuten kerroimme, lyötiin kauppias Swante Oksasta Tammelan Teurolla toissa perjantaina niin pahasti päähän, että hänet tajuttomassa tilassa oli tuotawa Hämeenlinnan lääninsairaalaan.</p>
        <p>Eilen tiedustelimme sairaalasta hänen tilaansa ja ilmoitettiin sieltä, että hän edelleen on puolitajuttomassa tilassa ja että hänen toipumisestaan on waikea mennä mitään sanomaan. Lääkärit luulewat, että Oksanen on saanut 
          jonkinlaisen werenwuodon aiwoihinsa.</p>
        <p>Lauri Ali-Tuomolan suhteen on nyt pidetty poliisikuulustelu ja on siinä käynyt ilmi, että Oksanen ei ollut erikoisemmin härnäillyt Ali-Tuomolaa, waan että hän on itse ollut syyllinen. Ali-Tuomola on pidätetty ja tultanee 
          häntä syyttämään myös ammattimaisesta wiinanmyynnistä.</p>
      </Article>

      <DateDivider date="Keskiviikko, 12.11.1924"/>
      <Article titleText="Tappelu Idänpään seuratalolla.">
        <h5>Erästä iltamawierasta ammuttu lantiolihaksiin.</h5>
        <p>Wiime lauantai-iltana Idänpään seuratalolla wietettäessä W.P.K:n iltamaa alkoi iltamaan saapunut kersantti Koskela tikari kädessä mellastella iltamahuoneessa. Kun mellasteljia poistettiin iltamahuoneesta alkoi hän ulkona 
          ammuskella sillä seurauksella, että muuan luodeista tunkeutui Hämeenlinnan maalaiskunnasta kotoisin olewan työm. R. Enkwistin lantioon wahingoittaen kuitenkin ainoastaan lihaksia. Poliisin saapuessa paikalle oli ampuja jo 
          ehtinyt lähteä pois. Enkwistin haawa sidottiin lääninsairaalassa. Kun asianomaisia ei wielä ole tawattu ei poliisitutkintoa asiassa wielä ole pidetty.</p>
      </Article>

      <DateDivider date="Torstai, 20.11.1924"/>
      <Article titleText="Wiralan hiiwatehtaalla tapahtunut kawallus.">
        <h5>Rosenqwist tuomittu toiskertaisesta warkaudesta 6:ksi kk:si kuritushuoneeseen ja jatketusta kawalluksesta 2:ksi kk:ksi wankeuteen. - Rosenqwistiä tullaan syyttämään myös Hämeenlinnan ja Helsingin raastuwanoikeuksissa.</h5>
        <p>Kuten lehdessämme on aikaisemmin kerrottu, pidätettiin poliisiwiranomaisten toimesta joku aika sitten Janakkalassa sijaitsewan Wiralan hiiwatehtaan konttoristi Georg Rosenqwist syylliseksi epäiltynä warkauksiin ja 
          kawalluksiin, joiden yhteisen määrän laskettiin nousewan 12,000:een markkaan.</p>
        <p>Syyte Rosenqwistia wastaan oli wiime tiistaina esillä Janakkalan y.m. pitäjien wälikäräjillä Hämeenlinnassa. Antamallaan päätöksellä tuomitsi kihlakunnanoikeus wastaajan pidettäwäksi toiskertaisesta warkaudesta 6 kk. 
          kuritushuoneessa ja jatketusta kawalluksesta 2 kk. wankeudessa sekä maksamaan korwauksia 2,750 mk. Mikäli asia koskee kolmen postiwekselin wäärennystä, siirrettiin se siltä osaltaan käsiteltäwäksi Hämeenlinnan ja Helsingin 
          raastuwanoikeuksiin. Wastaaja passitettiin lääninwankilaan.</p>
      </Article>
      <Article titleText="Otto Nyströmin ryöstöjuttu.">
        <h5>Howioikeus palauttanut jutun Arrheniukseen nähden takaisin kihlakunnanoikeuteen.</h5>
        <p>Kuten muistettaneen, joutui Hämeenlinnassa wiime wuonna lumppujen keruulla itseään elättäwä Otto Nyström-niminen mies Wanajassa pahoinpitelyn ja ryöstön uhriksi. Tekoon syylliseksi epäiltynä pidätettiin sittemmin paria 
          miestä, joista molemmat kihlakunnanoikeus tuomitsi rangaistukseen. Nyttemmin on kuitenkin howioikeus palauttanut toista syytettyä, nimittäin Lauri Arrheniusta, kotoisin Pälkäneeltä, koskewan jutun takaisin kihlakunnanoikeuteen. 
          Juttu olikin jälleen esillä wiime tiistaina Janakkalan y.m. pitäjien wälikäräjillä, mutta lykättiin se mälikäräjiin.</p>
      </Article>
      <Article titleText="Ruma teko.">
        <h5>Hirwi ammuttu Pälkäneellä.</h5>
        <p>Wiime wiikolla oli eräs salametsästäjä Pälkäneen pitäjän Kostamon takamailla ampunut upean, n. 400 kg. painoisen naarashirwen. Syystä tai toisesta oli salametsästäjä kuitenkin ollut pakoitettu jättämään riistansa metsään, 
          mistä se sitten löydettiin. Tekoon syylliseksi epäilewät poliisiwiranomaiset erästä itsellistä, joka kylläkin kieltää syyllisyytensä, mutta jota wastaan oli sitowia todistuksia. Jäljissä nimittäin hawaittiin erikoisia naulojen 
          merkkejä, jotka sopiwat mainitun itsellisen kotona löydettyihin saappaisiin.</p>
      </Article>

      <DateDivider date="Sunnuntai, 23.11.1924"/>
      <Article titleText="Kauppias Oksasen pahoinpitely Tammelassa.">
        <h5>Oksanen kuollut sairaalassa.</h5>
        <p>Kuten aikanaan kerroimme, löi wiime lokakuun 31 pnä Tammelan Teuron kylässä talollisenpoika Lauri Ali-Tuomola kauppias Swante Oksasta mainitusta kylästä halolla päähän. Oksanen tuotiin heti Hämeenlinnan lääninsairaalaan 
          hoidettawaksi. Täällä kuoli Oksanen saamansa wamman johdosta keskiwiikkoa wasten yöllä klo 3. Ali-Tuomola on passitettu wankilaan ja tullaan häntä wastaan nostamaan syyte kuoleman aiheuttaneesta pahoinpitelystä.</p>
        <p>Oksanen jätti jälkeensä waimon ja yhden lapsen.</p>
      </Article>

      <DateDivider date="Keskiviikko, 26.11.1924"/>
      <Article titleText="Rauhaton yö Riihimäellä.">
        <h5>Hurjistunut mies pommittanut Elantolan akkunoita kattotiilillä. — Humalainen pudonnut toisesta kerroksesta Käräjäkatu 6:ssa.</h5>
        <p>Wiime sunnuntain wastaimen yö oli Riihimäen kauppalassa tawallista rauhattomampi. Poliisilaitoksen kirjoihin tuli sen tapahtumista pitkät kertomukset, joita seuraawassa lyhyesti selostamme. Lewottomuuksien sarja alkoi 
          noin klo 12 ajoissa yöllä, jolloin muuan „wirolaisen” wiljelemisestä hurjalle päälle tullut mies, Riihimäeltä kotoisin olewa työmies Johan Walter Salminen kiipesi Elantolan tiiliaidan yli mainitun talon pihaan ja sieltä 
          sitten piharakennuksen katolle. Talonmies heräsi kiipeilijän aiheuttamaan rapinaan ja riensi katsomaan, kuka siellä keskellä yötä liikehti. Huomattuaan Salmisen katolla hän kehoitti tätä tulemaan alas, mutta S. wastasi 
          kehoitukseen tiilikiwellä, jonka oli irroittanut rakennuksen katosta. Tämä ei kuitenkaan osunut. Paikalle kertyi sitten pian muitakin ihmisiä, joiden kehoituksiin Salminen wastasi kattotiiliannoksilla. Tällöin syntyi 
          todellinen tiilisade, jota jatkui pitemmän aikaa. Paitsi ihmisiä kohti, paiskeli S. kattotiilejä myös Elantolan päärakennuksen seiniin ja akkunoihin, jotka meniwät säpäleiksi. Onneksi eiwät kiwet kuitenkaan wahingoittaneet 
          ketään. Paikalle hälyytettiin poliiseja, jotka ampumalla parisenkymmentä warotuslaukausta, wihdoin saiwat hurjistuneen miehen alas katolta, minkä jälkeen hänet wietiin putkaan rauhoittumaan. Kaikiaan lienee mies 
          heittänyt katolta n. 40—50 kattotiiltä, jotka särkyiwät. Päärakennuksen ensimmäisen ja toisen kerroksen pihanpuoleisista akkunoista meni suuri osa rikki. Mellastelijalle koituu näin ollen siewänlainen lasku huwittelustaan.</p>
        <p>Lujasti päissään oli samana yönä työmies Otto Seweri Hietaharjukin, joka klo 12,45 putosi Käräjätatu 6:ssa toisesta kerroksesta rappukäytäwään kaswot edellä, jotka osuiwat kohdalla olleeseen akkunapenkkiin sillä 
          seurauksella, että huulet ja osa nenää ruhjoutuiwat pahoin. Paikalle kutsuttu lääkäri määräsi loukkaantuneen wietäwäksi sairaalaan, koska hänen tilansa näytti kowin heikolta. Sairaalasta ilmoitettiin kuitenkin myöhemmin yöllä, 
          että H. oli ruwennut siellä mellastamaan ja hieromaan tappelua, jonka wuoksi hänet oli tuotawa yöllä putkaan selwiämään, jonka jälkeen hän aamulla pääsi lähtemään tiehensä.</p>
        <p>Pahalla tuulella oli myös suutari Waldemar Lehtinen, joka samana yönä klo 4,15 korjattiin putkaan. Hän oli särkenyt asuntonsa akkunat ja pidellyt pahoin waimoaan, minkä jälkeen oli horjunut kadulle, jossa joutui poliisin 
          apajaan. Tämäkin „lasimestari” joutuu oikeudessa antamaan „meriselityksensä”.</p>
        <p>„Wäsyneitä” korjattiin edellämainittuna yönä poliisikamarin pahnoille kaikkiaan 8 kpl. Yö oli siis ainakin poliiseille warsin wilkas ja rauhaton.</p>
        </Article>

      <DateDivider date="Sunnuntai, 30.11.1924"/>
      <Article titleText="Hattulan y.m. pitäjäin käräjät.">
        <h5>Päättyneet eilen.</h5>
        <p>Hattulan y.m. pitäjäin warsinaiset käräjät pättyiwät eilen. Mitään suurempia juttuja ei käräjillä tällä kertaa ollut, koska ne jo aikaisemmin owat tulleet käsitellyiksi wälikäräjillä.</p>
        <p>Juopumus ja wäkijuomain hallussapitojuttuja oli käräjillä kaikkiaan n. 60 ja waihteliwat sakot juopumuksesta 200 - 500 mk. sekä hallussapidosta 200 - 1,500 markkaan.</p>
        <p>Alkoholipitoisten aineiden luwattomasta kaupasta tuomittiin lohkotilallisen poika Willehad Laakso 80 päiwäsakkoon à 5 mk. sekä hallussapidosta 75 päiwäsakkoon samaten à 5 mk. sekä menettämään häneltä tawatut 8 l. spriitä 
          waltiolle.</p>
        <p>Lohkotilallinen Juho Aukusti Seppälä Takajärweltä tuomittiin jatketusta wiinakaupasta 80 päiwäsakkoon à 10 mk. sekä korwaamaan todistajapalkkiot 250 markalla.</p>
        <p>Kotirauhan rikkomisesta tuomittiin työm. K. A. Saarinen Sattulasta 3 kk. wankeuteen ja 400 mk. juopumussakkoon. S. oli wiime syksynä juopuneena tunkeutunut Sattulan Naskilan taloon, missä oli seipäällä lyönyt owia säpaleiksi 
          ja puukolla uhannut talon isäntää.</p>
        <p>Pelkolasta kotoisin olewa Otto Myllymäki tuomittiin samoin kotirauhan rikkomisesta 40 päiwäsakkoon à 40 mk. M. oli wiime juhannusyönä tunkeutunut Pelkolassa asuwan lohkotilallisen Sawimäen pihamaalle lyöden seipäällä 
          ikkunoita rikki.</p>
        <p>Näpistelystä tuomittiin palwelijatar Iida Saimi Rantanen Ojoisilta 200 mk. sakkoon. R. oli ottanut eräältä mäkitupalaiselta erinäistä waatetawaraa.</p>
        <p>Syytejuttuja oli kaikkiaan 70, joista pienempiä juopumus- ja mellastelujuttuja kymmenkunta. Spriin myynnistä tuomittujen sakot waihteliwat 750 - 1,500 mk.</p>
        <p> Käräjät kestiwät kaikkiaan 6 päiwää.</p>
      </Article>

      <DateDivider date="Tiistai, 2.12.1924"/>
      <Article titleText="Warkaita liikkeellä kaupungissamme.">
        <h5>Yleisöllä syytä warowaisuuteen.</h5>
        <p>Eilen päiwällä klo 12 ja 1 wälillä oliwat warkaat suomalaisella yhteiskoululla anastaneet opettajahuoneen eteisestä naulakosta miehen talwitakin ja hatun sekä erään oppilaan willapaidan ja housut. Warkaudesta ilmoitettiin 
          heti poliisille, joka onkin ryhtynyt warkaista selwää ottamaan.</p>
        <p>Mikäli meille on wiranomaisten taholta ilmoitettu on kaupungissa taas alkanut ilmestyä tawallista enemmän epäilyttäwää huligaani-ainesta. Tämä ilmiö onkin jokasyksyinen ja nähtäwästi työttömyydestä johtuwa. Yleisön on siis 
          syytä tarkoin pitää silmällä, että owet huolellisesti yöksi suljetaan ja muutenkin ryhdytään tarpeellisiin warowaisuustoimenpiteisiin warkaiden waralta.</p>
      </Article>

      <DateDivider date="Keskiviikko, 3.12.1924"/>
      <Article titleText="Pahoinpitely Riihimäellä.">
        <h5>Mies löydetty tiedottomassa tilassa Lopentien warrelta.</h5>
        <p>Sunnuntai-iltana klo 8,45 ilmoitettiin puhelimella läkkiseppä Markkaselta Riihimäen poliisilaitokselle, että heidän asuntonsa kohdalla Lopentien warrella oli löydetty eräs mies ammuttuna. Poliisilaitokselta lähti tällöin 3 
          poliisikonstaapelia paikalle, jossa he tapasiwatkin miehen makaamassa näköjään kuolleena. Jonkun ajan kuluttua mies kuitenkin toipui. Samalla todettiin, ettei häntä oltu ammuttu, waan sen sijaan lyöty jollain tylsällä esineellä 
          päähän. Mies wietiin tri Kahelinin sidottawaksi. Pahoinpidelty on lasitehtaan työläinen Teudor Edward Lehtonen. Hän on syntynyt Janakkalassa 1907 mutta kirjoilla Riihimäen Herajoella. Lyöjää ei wielä toistaiseksi tunneta, mutta 
          toiweita pidättämisestä on, sillä tielle on jäänyt eräitä todistuskappaleita, joista woidaan päätellä kuka pahoinpitelijä on.</p>
      </Article>

      <DateDivider date="Perjantai, 5.12.1924"/>
      <Article titleText="Kauppias Oksasen murha.">
        <h5>Murhaaja saanut tuomionsa.</h5>
        <p>Kuten muistettanee tapahtui lokak. 31 pnä Tammelan Teurolla pahoinpitely, jossa talollisenpoika Lauri Ali-Tuomola löi kauppias Swante Oksasta halolla päähän niin pahoin, että Oksanen Hämeenlinnan lääninsairaalassa kuoli 
          lyönnin aiheutuksesta.</p>
        <p>Oikeusjuttu lyöjä Ali-Tuomolaa wastaan oli esillä wiime maanantai-iltana Tammelan käräjäkunnan syyskäräjillä ja tuomittiin hänet murhasta 5 wuodeksi kuritushuoneeseen, sekä maksamaan murhatun leskelle 5,000 mk., lesken 
          alaikäiselle lapselle 150 mk. kk. siksi kunnes hän itse kykenee elättämään itsensä sekä lisäksi hautaus y.m. kuluja.</p>
        <p>Kuten muistetaan, oli tähänkin surulliseen tapaukseen osuus myöskin wäkijuomilla.</p>
      </Article>

      <DateDivider date="Tiistai, 9.12.1924"/>
      <Article titleText="Myllymäessä tapahtunut yliajo.">
        <h5>Kanne kumottu.</h5>
        <p>Kuten muistettaneen, ajoi Hyökkäyswaunurykmentin auto n:o 1 wiime elokuun 17 päiwän illalla Myllymäessä muurarinwaimo Wilhelmina Niemisen yli sillä seurauksella, että hän heti kuoli.</p>
        <p>Wainajan miehen, muurari Niemisen nostama juttu kuolemantuottamuksesta luutnantti Muukkosta, majuri Kumlinia ja ewerstiluutnantti Walleniusta wastaan oli eilen kolmannen kerran Hämeenlinnan raastuwanoikeuden käsiteltäwänä.</p>
        <p>Kantaja Nieminen ei ollut itse saapuwilla, waan awusti häntä kuten aikaisemminkin waratuomari Arwi Kiwikari. Vastaajien Muukkosen ja Kumlinin awustajana oli edelleen samoin waratuomari T. Hyrkki. Ewerstiluutnantti Walleniusta 
          ei ollut saatu nytkään haastetuksi.</p>
        <p>Asiasta kuultiin tällä kerralla wielä yhtä uutta todistajaa.</p>
        <p>Antamallaan päätöksellä katsoi raastuwanoikeus selwitetyksi, että kysymyksessä on ollut suoranainen tapaturma, minä wuoksi kanne wastaajia wastaan kumottiin.</p>
      </Article>

      <DateDivider date="Keskiviikko, 10.12.1924"/>
      <Article titleText="Murtowarkaus Leppäkoskella.">
        <h5>Waras käynyt „wieraisilla” kahdesti anastaen 900 mk.</h5>
        <p>Wiime perjantaina iltapäiwällä oli waras tunkeutunut Leppäkoskella työmies Heikki Jokisen asuntoon tämän ollessa poissa kotoa ja anastanut kaapinlaatikosta 700 mk. Illalla kotiin palattuaan ilmoitti Jokinen asiasta poliisille, 
          joka ryhtyi asiaa tutkimaan. Seuraawana päiwänä waras kuitenkin saapui uudelleen asuntoon ja murtauduttuaan samaan laatikkoon, josta oli edellisenä päiwänä rahat anastanut, wei sieltä löytämänsä 200 mk. Poliisi tutkii asiaa, 
          mutta tietoa warkaasta ei wielä ole.</p>
      </Article>
      <Article titleText="Rohkea ryöstö Turengissa?">
        <h5>Humalaiselta mieheltä anastettu 1,150 mk. rahaa ja litra spriitä.</h5>
        <p>Viime perjantaina iltapäiwällä ilmoitti taloll. Kustaa Toffela Turengin kylässä joutuneensa röyhkeän ryöstön uhriksi. Mainittuun aikaan oli ilmoituksen tekijä kylän läpi johtaneella maantiellä kohdannut itsellisen pojan Sulo 
          Ilmarisen, joka sen pitemmittä puheitta oli päihdyksissä olleen Toffelan taskusta anastanut 1,150 mk. rahaa ja litran spriitä. Pidätetty Ilmarinen on tutkisteluissa tunnustanut anastaneensa kadonneen spriilitran, mutta kieltää 
          jyrkästi anastaneensa rahoja. Mahdollista onkin, mikäli poliisikuulustelussa on käynyt selwille, että anastajia on ollut useampia.</p>
      </Article>

      <DateDivider date="Perjantai, 12.12.1924"/>
      <Article titleText="Werityö Hämeenlinnassa.">
        <h5>Kiwityömies E. Lainetta Wanajasta ammuttu kadulla toissa yönä hengenwaarallisesti.</h5>
        <p>Toissa yönä ½ 12 aikaan tapahtui Hämeenlinnassa Birger-Jarlinkadun ja Saaristenkadun kulmassa werityö, minkä uhriksi joutui kiwityömies Ewert Laine Wanajan Kankaantakaa. Laine oli mainittuun aikaan palaamassa Hämeenlinnan 
          työwäentalolta jostakin näytännöstä eräiden muiden miesten kanssa. Sanotussa kulmauksessa kohtaasiwat miehet sitten parturintyöntekijä Fredrik Teodor Serginin, joka oli tulossa Häme-yhtiöltä, minne hän oli ollut saattamassa 
          erästä toweriaan. Miesten kesken ei aikaisemmin ollut mitään riitaa, mutta on Sergin kuulustelussa kertonut, että miehet oliwat pyytäneet häneltä pirtua, jolloin hän oli wastannut, ettei hän ole mitään pirtukauppias. Lisäksi 
          on hän maininnut, että oli tällöin näkemässä jonkun tulewan puukko kädessä itseään kohti, minkä wuoksi hän oli taskuaseella ampunut kaksi laukausta, joista toinen oli osunut Lainetta oikeaan kupeeseen. Teon tehtyään oli Sergin 
          lähtenyt pakenemaan, mutta pidätettiin hänet myöhemmin. Laine toimitettiin Hämeenlinnan lääninsairaalaan hoidettawaksi. Miehet oliwat jonkun werran juowuksissa tapahtuman sattuessa.</p>
        <p>Laineen saama haawa on hengenwaarallinen.</p>
        <p>Sekä Laine että Sergin owat kumpikin nuoria miehiä.</p>
        <p>Poliisitutkinto asiasta jatkuu tänään.</p>
      </Article>

      <DateDivider date="Lauantai, 13.12.1924"/>
      <Article titleText="Owela petkuttaja Hämeenlinnassa.">
        <h5>Esiintynyt Rautatiekirjakauppa Oy:n wähittäismyyjänä, yrittäen nostaa rahoja, mutta kuitenkin tuloksetta. - Petkuttaja päässyt pakoon.</h5>
        <p>Wiime keskiwiikkona ilmaantui Rautatiekirjakauppa Oy:n täkäläiseen haarakonttoriin eräs hywinpuettu mies, joka esitti tilauslistat, joiden mukaan hän Hämeenlinnassa kaikkiaan kahdeksalle eri henkilölle olisi myynyt kirjoja 
          wähittäismaksuehdoilla yhteensä 10,000 mk. arwosta. Ehtojen mukaan olisi hänen tullut näistä saada palkkiota kaikkiaan lähes 1,000 mk. Kun kuitenkin kirjakaupan johtajassa heräsi epäilyksiä, että mies mahdollisesti ei 
          ollutkaan mainittuja tilauksia saanut, päätti hän tiedustella listoihin merkityiltä tilaajilta, oliwatko nämä todellakin tilaukset tehneet, pyytäen samalla miestä tulemaan iltapäiwällä uudelleen nostamaan rahat. Kun tällainen 
          tiedustelu sitten tehtiin, käwikin ilmi, ettei kukaan kysymyksessä olewista henkilöistä ollut mitään tilauksia tehnyt. Kun asia sai nyt tämän käänteen, kutsuttiin paikalle etsiwiä pidättämään mies, jos tämä ilmaantuisi rahoja 
          nostamaan. Huomattuaan kuitenkin, että hänen petosyrityksensä oli tullut ilmi, ei miestä enää kuulunut eikä hänestä sen jälkeen ole mitään tietoa saatu.</p>
        <p>Tilauslistoihin oli mainittu „asiamies” merkinnyt nimekseen W. Tolonen, mikä tietystikin on tekaistu nimi. Kaikkiaan oli hän wäärentänyt, kuten sanottu, kahdeksan henkilön nimikirjoitukset. Tulkoon wielä mainituksi, että 
          mies oli sanonut aikaisemmin jättäneensä jo erääseen täkäläiseen kirjakauppaan myös tilauksia, mutta ei ollut sitä kuitenkaan tehnyt.</p>
        <p>Petkuttaja oli ulkomuodosta päättäen n. 30 wuoden ikäinen.</p>
      </Article>
      
      <DateDivider date="Tiistai, 16.12.1924"/>
      <Article titleText="Hämeenlinnassa esiintynyt petkuttaja.">
        <h5>Käyttänyt useita eri nimiä. — Porissa onnistunut petkutuksessaan.</h5>
        <p>Kuten kerroimme, yritti täkäläisestä rautatiekirjakaupan haarakonttorista eräs W. Toloseksi itseään nimittäwä mies nostaa eräistä wäärennetyistä kirjatilauksista kaikkiaan lähes 1,000 mk., tässä kuitenkaan onnistumatta. 
          Samainen mies on käyttänyt useita eri nimiä, kuten L. A. Puolamäki, Toiwo Päiwärinne, Arwi Palomaa, K. A. Koponen, W. Wikman ja K. D. Paulasmäki. Porissa hän onkin onnistunut petkutuksessaan, nostaen sikäläisestä 
          rautatiekirjakaupasta tekaistuilla tilauksilla 1,006 mk. 85 p. Miestä ei toistaiseksi ole saatu pidätetyksi.</p>
      </Article>

      <DateDivider date="Torstai, 18.12.1924"/>
      <Article titleText="Pirtukanisteri aiheuttanut laajanlaisen oikeusjutun.">
        <h5>Kaikkiaan 7 henkilöä tuomittu.</h5>
        <p>Kuten olemme kertoneet, ilmoitti parisen wiikkoa sitten talollinen Kustaa Toffela Janakkalan Turengista joutuneensa ryöstön uhriksi. Toffela ilmoitti Turengin kylän läpi johtawalla maantiellä kohdanneensa itsellisen pojan Sulo 
          Ilmarisen, joka ilman muuta olisi päihtyneen Toffelan taskusta anastanut 1,150 mk. rahaa ja pirtukanisterin.</p>
        <p>Poliisiwiranomaiset tutkiwat sittemmin asiaa, ollen juttu, paitsi Ilmarista, myös eräitä muita siihen osallisia wastaan eilen esillä Janakkalan y.m. pitäjäin kihlakunnanoikeudessa. Antamallaan päätöksellä tuomitsi 
          kihlakunnanoikeus Sulo Uljas Ilmarisen pirtukanisterin anastamisesta, törkeästä warkaudesta nuorena henkilönä pidettäwäksi 2 kk. wankeudessa ja olemaan 3 w. wailla kansalaisluottamusta ja juopumuksesta 225 mk. sakkoon, hyläten 
          oikeus kuitenkin syytteen rahojen ryöstöstä. Samaan juttuun sekaantuneista tuomittiin kirwesmies Juho Hakala, Janakkalasta, warastetun tawaran kätkemisestä 450 mk., juopumuksesta 300 mk. ja eläimille määrätyn spriin 
          nauttimisesta kahwilassa 450 mk. sakkoon, lohkotilallisen poika Niilo Nestor Siren, Janakkalasta, juopumuksesta 300 mk. ja wäkijuomain nauttimisesta kahwilassa 375 mk. sakkoon sekä warastetun tawaran uudestaan kätkemisestä 6 
          kk:ksi wankeuteen eli kaksi wiimemainittua rangaistusta yhdistettynä pidettäwäksi 6 kk. 15 päiwää wankeudessa, itsellisen poika Juho Kustaa Sihwonen, Janakkalasta, näpistelystä 300 mk., warastetun tawaran kätkemisestä 300 mk., 
          wäkijuomain nauttimisesta kahwilassa 375 mk. ja juopumuksesta 300 mk. sakkoon, työmies Hugo Ilmari Holm, Janakkalasta, juopumuksesta 30 mk., wäkijuomien nauttimisesta kahwilassa 375 mk. ja warastetun tawaran kätkemisestä 300 mk. 
          sakkoon ja itsellisen poika Toiwo Sihwonen, Janakkalasta, warastetun tawaran kätkemisestä 300 mk. sakkoon. Sitä paitsi tuomittiin asianomistaja Toffela juopumuksesta 600 mk., wäkijuomien nauttimisesta kahwilassa 750 mk. ja 
          wäkijuomien luwattomasta kuljetuksesta 2,250 mk. sakkoon.</p>
        <p>Wastaajat oliwat ensin ryypiskelleet eräässä kahwilassa Turengissa, lähtien sieltä pois. Matkalla oliwat he tawanneet Toffelan, jolta Ilmarinen oli taskusta ottanut kanisterin, minkä sisällön miehet sitten myöhemmin oliwat 
          keskenään jakaneet.</p>
      </Article>

      <DateDivider date="Tiistai, 30.12.1924"/>
      <Article titleText="Puukotuksia Riihimäellä.">
        <h5>Eräs nainen saanut kolme puukonhaawaa.</h5>
        <p>Ensimäisenä joulupäiwänä tapahtui Riihimäellä puukotus, minkä uhriksi joutui tehtaalainen Ida Karoliina Nieminen Hywinkäältä. Hän oli aikaisemmin asunut yhdessä maalari Yrjö Lindbergin kanssa Hywinkäällä, mutta sitten jättänyt 
          tämän, pakoillen häntä. Lindberg oli saanut wihiä Niemisen oleskelusta Riihimäellä ja tullut häntä etsimään, ollen tällöin humalassa. Erään Riihimäen lasitehtaan asumuksen pihamaalla olikin Lindberg sitten Niemisen tawoittanut, 
          iskien tätä puukolla kolmasti. Nieminen wietiin sairaalaan hoidettawaksi, kun taas Lindberg, joka saatiin pidätetyksi, on poliisin huostassa.</p>
        <p> Kuten sanottu, oli Lindberg teon tapahtuessa humalassa. Sen lisäksi häntä ei woida pitää myöskään selwänä täysin normaalina.</p>
        <p>Toinenkin puukotus tapahtui Riihimäellä. Tapaninpäiwänä iskettiin nimittäin Hämeenkadulla erästä henkilöä käsiwarteen pienellä weitsellä. Poliisi tutkii asiaa.</p>
      </Article>
      <br />
      <Divider className="dividerStyle"/>
      <a className="hyperLink" href="https://digi.kansalliskirjasto.fi/sanomalehti/titles/0356-2751?year=1924">Linkki vuosikertaan 1924</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Rikoksia 1924</title> // metadata

export default Crimes1924Page 
