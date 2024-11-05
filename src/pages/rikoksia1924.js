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

      <Divider className="dividerStyle" />
      <h3>Perjantai, 4.1.1924</h3>
      <Article titleText="Jokiniemen murha Jokioisissa.">
        <h5>Murhaaja Koiwula tuomittu 3 w:ksi kuritushuoneeseen.</h5>
        <p>Kuten olemme kertoneet, tapahtui joulukuun 12 p:nä Jokioisten Latowainiossa raaka murha, jonka uhriksi joutui talollisenpoika Siwart Jokiniemi. Murhajuttu oli keskiwiikkona esillä Humppilan wälikäräjillä. Oikeus tuomitsi 
          murhaajan, talollisenpoika Niilo Koiwulan 3 wuodeksi kuritushuoneeseen sekä menettämään kansalaisluottamuksen 6 wuodeksi. Tämän lisäksi welwoitettiin K. maksamaan murhatun kolmelle alaikäiselle lapselle 50 mk. kuukaudessa 
          kullekin niin kauan kuin he täyttäwät 17 wuotta.</p>
      </Article>

      <Divider className="dividerStyle" />
      <h3>Lauantai, 5.1.1924</h3>
      <Article titleText="Miestappo Urjalassa.">
        <h5>Eräs palstatilallinen isketty puukolla kuoliaaksi.</h5>
        <p>Uuden wuoden päiwän iltana tapahtui Urjalassa lähellä Annulan kylää pahoinpitely, jonka uhriksi joutui palstatilallinen Wihtori Saari. Saari oli erään Kalle Ahon (Perhon-Kallen) seurassa, ja jostakin syystä oli miesten 
          kesken syntynyt riita, jolloin Aho lõi Saarta puukolla reiteen ja kupeeseen, niin että lyöty kuoli Urjalan sairaalassa saamistaan haawoista t.k. 2 p:n iltana. Sekä lyöjä oliwat tunnetut kumpikin siiwoiksi miehiksi, niin että 
          kysymyksessä olewa murha on luettawa epäilemättä wäkijuomien tiliin.</p>
        <p>Saari jätti jälkeensä waimon ja 4 lasta, joista nuorin on wasta 3 kk. Aho, joka on pidätetty, on sen sijaan naimaton.</p>
      </Article>

      <Divider className="dividerStyle" />
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

      <Divider className="dividerStyle" />
      <h3>Sunnuntai, 13.1.1924</h3>
      <Article titleText="Raaka puukotus.">
        <h5>Juopunut roisto puukottanut eilen illalla kahta iäkästä miestä.</h5>
        <p>Raaka puukotus tapahtui eilen illalla klo ½ 6 tienoissa Lääninsairaalan kohdalla. Kun ent. pika-ajuri W. Mollberg ja kruununluotsi Oksanen kulkiwat mainitun sairaalan kohdalla tuli heitä wastaan juopunut huligaani, joka 
          sanaakaan sanomatta iski edellistä puukolla käsiwarteen. Kun Oksanen alkoi roistoa moittia tämän raakamaisesta menettelystä iski huligaani häntäkin puukolla wasempaan käsiwarteen. Tämän jälkeen roisto iski wielä kerran 
          Mollbergia tälläkin kertaa käsiwarteen. Molemmat puukotetut lähtiwät heti lääninsairaalaan, jossa heidät sidottiin. Oksasen haawa oli liewempi, joten hänet päästettiin kotiin. Mollbergin tila sitä wastoin on liiallisen 
          werenhukan takia huononlainen. Toiweita paranemisesta kuitenkin on.</p>
        <p> Kumpikaan puukotetuista, jotka owat jo iäkkäitä miehiä, eiwät tunne puukottajaa. Poliisi on kuitenkin hänen jäljillään ja toiwottawasti roisto saa raakalaisteostaan ansaitsemansa rangaistuksen.</p>
      </Article>

      <Divider className="dividerStyle" />
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

      <Divider className="dividerStyle" />
      <h3>Keskiviikko, 16.1.1924</h3>
      <Article titleText="Myllymäen werityö.">
        <h5>Uhrien tila.</h5>
        <p>Maanantain wastaisena yönä Myllymäessä kaamean werityön uhreiksi joutuneitten tilan eilen illalla lääninsairaalasta tiedustellessamme saimme tietää, että Ekholmin tyttö Ester edelleenkin on tajuttomassa tilassa. Sen sijaan 
          poika Teudor on nyt täysin tajuissaan, mutta on hänenkin tilansa edelleen heikko, niin ettei mitään warmaa kummankaan eloonjäämisestä ole. Ekholmin waimon tila sen sijaan olosuhteisiin katsoen on parempi.</p>
        <h5>Ekholm passitettu lääninwankilaan.</h5>
        <p>Eilen passitettiin Ekholm, jota on säilytetty täkäläisessä etsiwässä osastossa, Hämeenlinnan lääninwankilaan odottamaan jutun oikeudellista käsittelyä. Juttu tulee esille Hämeenlinnan raastuwanoikeudessa ensi wiikolla.</p>
      </Article>

      <Divider className="dividerStyle" />
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

      <Divider className="dividerStyle" />
      <h3>Lauantai, 19.1.1924</h3>
      <Article titleText="Myllymäessä tapahtunut weriteko.">
        <h5>Uhrien tila.</h5>
        <p>Eilen illalla lääninsairaalasta tiedustellessamme Ekholmin waimon ja lasten tilaa, ilmoitettiin meille waimon ja pojan olewan parempaan päin. Tyttö on edelleenkin tajuttomassa tilassa.</p>
      </Article>
      <Article titleText="Taas werityö.">
        <p>Eilen illalla lyötiin Punaportilla työm. R. Flinckmania puukolla selkään keuhkopussiin asti ulottuwa haawa. Puukotettu tuotiin lääninsairaalaan, jossa häntä edelleen hoidetaan. Puukottajaa, jota ei vielä liene saatu kiinni, 
          ei Flinckman sanonut tuntevansa.</p>
      </Article>

      <Divider className="dividerStyle" />
      <h3>Sunnuntai, 20.1.1924</h3>
      <Article titleText="Hattulan maantiellä ryöstetty hewonen tawattu Kärkölässä.">
        <h5>Ryöstäjiä ei ole saatu kiinni.</h5>
        <p>Kuten sanomalehdissä on kerrottu, ryöstettiin t.k. 12 pnä Hattulan maantiellä klo 9 aikaan illalla eräältä Kalle Heikkilä-nimiseltä hewonen ajopeleineen ja tawaroineen. Ryöstön suoritti kaksi mieshenkilöä ja 1 nainen siten, 
          että he heittäytyiwät rekeen ja sortiwat H. maantielle ja ajoiwat edelleen. Nyttemmin owat Hollolan poliisit tawanneet ryöstetyn hewosen Kärkölästä palstatilallinen Haliselta, joka sanoo sen ostaneensa roswoilta. Hewonen on 
          palautettu omistajalleen.</p>
        <p>Ryöstön tehneistä henkilöistä ei poliisilla wielä liene tietoa.</p>
      </Article>

      <Divider className="dividerStyle" />
      <h3>Tiistai, 22.1.1924</h3>
      <Article titleText="Myllymäen weriteon uhrit.">
        <h5>Heidän tilansa ennallaan.</h5>
        <p>Eilen illalla Hämeenlinnan lääninsairaalasta tiedustellessamme Myllymäen werityön uhrien Ekholmin waimon ja lasten tilaa, ilmoitettiin heidän tilansa olewan ennallaan. Tyttö on edelleenkin tajuttomassa tilassa.</p>
        <p>Juttu Ekholmia wastaan tulee huomenna esille Hämeenlinnan raastuwanoikeudessa.</p>
      </Article>

      <Divider className="dividerStyle" />
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

      <Divider className="dividerStyle" />
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

      <Divider className="dividerStyle" />
      <h3>Lauantai, 26.1.1924</h3>
      <Article titleText="Ryöstö Forssassa.">
        <h5>Wiinakauppias myy pirtua puukon awulla.</h5>
        <p>Tiistai-iltana tapahtui Forssan Kuuston kylässä rohkea ryöstö. Muuan Wille Nybom-niminen irtolainen tarjosi eräälle Koiwula-nimiselle henkilölle pirtua 40 markan hinnasta limonaadipullollinen. Kun Koiwula kieltäntyi 
          ostamasta, weti Nybom esille puukkonsa ja sanoi „wai et osta”, jolloin K. ilmoitti suostuwansa kauppaan ja weti esiin lompakkonsa. Nybom ei kuitenkaan tyytynytkään kauppojen tekoon, waan anasti koko lompakon, jossa oli 
          rahaa 590 mk. Nybom pidätettiin jo torstaina ja saatiin häneltä silloin takaisin anastetuista rahoista 450 mk., kun sitä wastoin 140 mk. jo oli mennyt. Nybom on pidätettynä Forssan poliisikamarissa. Hän on aikaisemminkin 
          kärsinyt rangaistuksia warkaudesta.</p>
      </Article>

      <Divider className="dividerStyle" />
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
      


      
      
      
      <Divider className="dividerStyle" />
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

      <br></br>
      <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/titles/0356-2751?year=1924">Linkki vuosikertaan 1924</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Ilmoituksia 1922</title> // metadata

export default Crimes1924Page 