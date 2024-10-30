import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import "../styles/base/global.css"

import Divider from "../assets/divider.svg"
import SubDivider from "../assets/sub-divider.svg"

const HauhoPage = () => {
  return (
    <Layout titleText="Poimintoja Hauhon kirkon arkistosta">
      <Article titleText="Huomattawia tapahtumia.">
        <SubDivider className="dividerStyle" />
        <h4>Ryssät Hauhon kirkossa wuonna 1713.</h4>
        <br></br>
        <p className="firstLetterStyle">Syyskuun 29 päiwänä murtautui eräs, Hämeenlinnasta lähetetty, ryssäjoukkue Hauhon emäkirkkoon sakariston ikkunasta, kun heidän yrityksensä päästä sisään 
          etelänpuoleisesta kirkon owesta ei ollut onnistunut, waikka owi oli, minkä wieläkin woi todeta, yritetty hakata rikki kirweellä. Samassa tilaisuudessa owat nuo jumalattomat iskeneet 
          miekalla kirkon etelänpuoleisessa eteisessä seisowaa Bartimeus kuwaweistosta päähän, josta samoinkun owenmurtautumisyrityksestäkin, wielä merkit owat selwästi nähtäwissä.</p>
        <SubDivider className="dividerStyle" />
        <h4>Hauho näihin aikoihin pitkät ajat ilman pappia.</h4>
        <br></br>
        <p className="firstLetterStyle">Wuonna 1711 oli Hauhon seurakuntaan tullut kirkkoherraksi oman pitäjän poika, Mathias Martinius, joka oli syntyisin Tuuloksesta Pohjoisten Häppölästä 
          ja joka, ennen tänne tulemistaan, oli ollut Wiipurin kimnaasin lehtorina ja sittemmin Säkkijärwen pastorina. Kun ryssä wuonna 1713 otti haltuunsa Hämeenlinnan, pakeni Martinius, 
          samoinkun seurakunnan kappalainen Salomon Stichaeustin, Ruotsiin ja jäiwät sinne kappalainen ainaiseksi ja kirkkoherra wuoteen 1722, jolloin palasi takaisin ja, wanha kun oli, sai 
          luowuttaa wirkatehtäwänsä pojalleen Martinius Martinille, josta sitten tuli hänen seuraajansa. Pappien ollessa täältä, samoinkun monesta muustakin Suomen seurakunnasta, pakosalla, 
          toimitti Hauholla papillisia tehtäwiä yliopistolainen Cristoffer Roos. Tuuloksen kappalainen käwi myös auttamassa.</p>
        <SubDivider className="dividerStyle" />
        <br></br>
        <p className="firstLetterStyle">Hauhon keikkina aikoina luultawasti wanhin henkilö on ollut Torwoilan Wähäpään Yrjö isäntä, joka kuoli wuonna 1712 113 wuoden ikäisenä.</p>
        <SubDivider className="dividerStyle" />
        <h4>Penkkijaot.</h4>
        <br></br>
        <p className="firstLetterStyle">Penkkijaot kirkossa owat Hauholla, niinkuin kaikkialla muuallakin, olleet melkein kaikkein tärkeimpiä asioita. Monet riidat on niistä pitänyt riidellä 
          ja wähäwäliä on niitä pitänyt uudestaan toimittaa. Wuonna 1664 on sellainen toimitettu etupäässä maatilanomistajain arwon mukaan. Samoin wuonna 1733. Wuonna 1783 toimitetussa on 
          manttaali otettu jaon perustukseksi ja tuli silloin penkkiä 2½ kyynärää manttaalia kohti. Wielä wuonna 1800 toimitettiin jako, ja tuli silloin penkkiä 2 kyynärää manttaalin osaksi.</p>
          <br></br>
          <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389178?page=2">Linkki artikkeliin</a>
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="Syyte loihtimisesta Luopioisissa.">
        <br></br>
        <p className="firstLetterStyle">Pöytäkirjan mukaan w. 1736 Nimismies Melart ilmiantoi, että itsellismies Matti Silweri Tuuloksen Juttilasta, joka on ollut Luopioisten kirkonkyläläisillä 
          karjapaimenena, olisi Filippuksen ja Jaakopin päiwänä wiime toukokuun ensimmäisenä, kun karjaa laitumelle laskettiin, harjoittanut leppäkepeillä ja karjaa kiertämällä n.m. jotakin 
          taikatemppuja, ja todistiwat myös jotkut saapuwille sattuneet niin olleen, niin että Silweri itsekään ei woinut sitä kieltää, mutta wäitti waan, että hän ei ollut muuta tarkoittanut, 
          kun wain noudattaa wanhoja tapoja, koska tämä oli esi-isillä totuttuna tapana ollut, ja hän, samoinkun muutkin, oli tullut niitä noudattaneeksi, pyytäen nyt, että tätä, hänen 
          tietämättömyydestään johtuwaa tekoa, ei pidettäisi niin kowin raskaana rikoksena. Kappelin pastori katsoi asian sen arwoiseksi, että se olisi maallisen oikeuden käsiteltäwäksi 
          lykättäwä, mutta seurakunta waati, että se nyt pitäjänkokouksessa päätetään, koskapa hänet on ensikerran tällaisesta tawattu ja kun lisäksi oltiin sitä mieltä, että hän on 
          yksinkertaisuutensa tähden siihen ryhtynyt, ja niinpä tultiinkin siihen yksimieliseen päätökseen, että Matti Silwerin on tämän rikoksensa tähden istuttawa kahtena sunnuntaina 
          peräkkäin jalkapuussa.</p>
          <br></br>
          <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389178?page=2">Linkki artikkeliin</a>
      </Article>
      
      <Divider className="dividerStyle" />
      
      <Article titleText="Tuittupäinen lukkari Hauholla.">
        <h4>Pöytäkirjan mukaan.</h4>
        <p><span className="boldStyle">W. 1783:</span> Wiime syyskuun 12 pnä on kastetilaisuudessa rusthollari Poltin luona kirkonkylässä tapahtunut julkinen pahennus, joka on jo laajalti tunnetukin. 
          Apulainen Eric Ferrinin alettua aterian jälkeen wirren, oli lukkari Salomo Pihlman tarpeettomasti korottanut ääntänsä ja wenyttänyt laulua, ja oli apulainen silloin ruotsinkielellä huomauttanut 
          hänelle, että hänen ei olisi pitänyt erottautua laulussa kristillisen seurakunnan edessä ja aikaansaada häiriötä, waan olisi olisi hänen ollut mukauduttawa ja, pahennusta herättämättä, wain 
          oikaistawa laulua, missä se tarpeenwaatimaa oli. Mutta wastoin welwollisuuttaan ei hän ollutkaan taipunut esimiehensä huomautukseen, waan oli päinwastoin ruwennut halweksiwasti pauhaamaan, 
          että häntä ei tarwitse tulla lauluasioissa neuwomaan ja olipa, nyrkkiä puiden, rehennellyt, että hänen ei ole pakko alistua, ja kun apulainen, menemällä toiseen huoneeseen, oli tahtonut päästä 
          eroon hänen häwyttomyyksistänsä, oli tämä sellaisella kiihkolla työntäytynyt hänen jälkeensä, että apulaisen oli pakko kutsua pihalla seisowia miehiä huoneeseen, jossa ei muita ollut, ja P. 
          tunki jälessä, kunnes lopultakin hillitsi itsensä. Tästä olen lukkarille antanut wakawan warotuksen, samalla huomauttaen, että lukkarin on oltawa kuuliainen ja alamainen ei wain minulle, 
          waan wirkatowereillenikin sanan palweluksessa, jotka owat hänen esimiehiänsä, enkä woi muulla ehdolla tällä kertaa hänen karkeata tekoansa anteeksi antaa, kun että hän rikoksensa tunnustaa 
          ja sitä anteeksi pyytää minulta ja seurakunnalta, jota on pahentanut, sekä myös apulaiselta Ferriniltä, jota on loukannut, sydämestään katuen huonoa käytöstään ja luwaten wastedes tehdä 
          täydellisen parannuksen, ja esitän nyt pitäjän herroille ja miehille, että tämä asia tässä tapauksessa saisi jäädä unohduksiin, mutta jos, wastoin luuloa, parannusta ei tulisi, se sitten 
          uudelleen esille otettaisiin. Mikä täysin hywäksyttiin.</p>
        <p><span className="boldStyle">Wuonna 1789 marraskuun 8 päiwänä:</span> Kun asessori Faworin 2:na päiwänä elokuuta Maaherran puolesta piti kokousta työmiesten toimittamiseksi ruunun 
          makasiinin lasiaustöihin, oli P. taas tehnyt rikoksen siten, että kun minä, jonka Kuninkaan päällysmies oli pyytänyt olemaan hänen edustajansa apuna tässä, olin istuutunut alttarikehän 
          sisäpuolelle, niin hän sopimattomasti tunkeutui sinne ja aiwan tarpeettomasti sekaantui keskusteluun kansan kanssa ja kieltäytyi poistumasta, kun häntä siihen parikin kertaa säwwyisästi 
          kehotin, ja minä senwuoksi olin pakotettu, wälttäätseni wielä suurempaa pahennusta, toimituttamaan hänet mieswoimalla pihalle. Tämän kaiken olin, liittäen mukaan neljän luotettawan ja paikalla 
          olleen miehen todistuksen, kertonut Konsistoriumille, mainiten samalla, että hän jo wuonna 1783 oli saanut pitäjänkokouksessa julkisen warotuksen apulaiselleni Ferrinille osottamastaan 
          tottelemattemuudesta ja kunniontuksen puutteesta sillä nimenomaisella ehdolla, että jos parannus jäisi tekemättä, asia luetaan hänelle wiaksi. Konsistoriumi oli tämän johdosta määrännyt minun, 
          hänelle tarpeelliseksi warotukseksi, erottamaan hänet kirkkolain 33 §:n nojalla wirasta amnakin puoleksi wuodeksi, tai, jos niin tarpeelliseksi katsotaan, kirkkoneuwoston myöntymyksellä 
          erottamaan hänet kokonaan. Kun nyt olemme tulleet kokoon panemaan määräystä täytäntöön, otaksun, että herrain ja kirkkoneuwoston jäsenten joukossa ei ole ketään, joka häntä kannattaisi, sekä 
          että kaikki olemme siitä yksimieliset, että tällä kertaa jätämme asian Konsistoriumin päätöksen waraan, erottaen hänet puoleksi wuodeksi, emmekä sentään, parannusta kun toiwomme, käy häntä 
          lopullisesti wirastaan erottamaan. Se on kuitenkin nimenomaiseksi ehdoksi pantawa, että kun hän tuittupäisyytensä tähden, minkä muulloinkin olen huomannut, ei ole sowelias lasten opettajaksi, 
          jossa toimessa waaditaan ennen kaikkia kärsiwällisyyttä enemmän kun hänen luonteensa sallii, hänen on sille, joka lasten opettajaksi otetaan, annettawa joko ruoka ja asunto tai kuusi 
          tynnyriä wiljaa wuodessa.</p>
        <p>Mutta kun kysymys P:n erottamisesta lopullisesti piti päätettämän, niin rupesiwat kaikki yhdessä pyytämään, että hänelle wielä tälläkin kertaa anteeksi annettaisiin, mutta jos hän wieläkin 
          kerran kuuliaisuuswelwollisuuttaan wastaan rikkoisi, miin wakuutti seurakunta yksimielisesti hänet silloin erottawansa, sitäkin paremmalla syyllä, kun hän ei ole laillisen waalin kautta 
          lukkariksi tullutkaan. Pöytäkirja lähetetään Konsistoriumille ja toiwotaan, että sekin tähän tyytyy.</p>
        <br></br>
        <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389178?page=2">Linkki artikkeliin</a>
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="Kauhistuttawa murha wuonna 1769.">
        <br></br>
        <p className="firstLetterStyle">Eräs seppä Wirsiälän kylästä, jonka tiedettiin koko ikänsä eläneen hiljaista ja säädyllistä elämää, on 2:na päiwänä joulukuuta tullut murhatuksi, murhaajana 
          hänen oma waimonsa ja oppilaansa, joka wuoden alkupuolella oli tullut tänne Sääksmäeltä. Näiden tarkotuksena oli ensin kiireisen hautaamisen kautta laasta tämän kauhean teon jäljet 
          umpeen, mutta kun tämä herätti huomiota ja sellaisia puheita oli liikkeessä, että ruumis olisi täynnä mustelmia, niin pakotettiin hautaus lykkäämään, kunnes wiranomaiset oliwat asian tutkineet, 
          mikä äskettäin onkin tapahtunut ja on asianomaisetkin saatu tekemään täydellisen tunnustuksen, ja on nyttemmin wiety, laillisen tuomion päätöksen nojalla, elinkautiseen wankeuteen 
          Hämeenlinnaan. Aiwan erikoisen julmana piirteenä tässä teossa on täydellä syyllä mainittawa, että kun murhattu, jota oppilaansa, paiskattuaan hänet nurin, kiristi kurkusta, huusi, 
          senwerran kun siinä tilassa huutaa taisi, että waimonsa tulisi häntä auttamaan, tämä, sensijaan että olisi pyyntöä noudattanut ja rientänyt pelastamaan miestänsä murhaajan käsistä, oli 
          päinwastoin auttanut tätä lopettamaan hänen miehensä, tukkimalla hänen suutansa ja niin saaden aikaan tukehtumisen, jota hän mitä woimakkaimmin ruumiinliikkein, täten aiheuttaen mustelmat, 
          oli koettanut estää, mutta ei sittenkään ollut woinut saada mitään aikaan, waan oli hänen näin surkealla tawalla menetettäwä henkensä. Jokainen kristitty ihminen on tämän johdosta pakotettu 
          kysymään: eiköhän tuollainen kauheus ole todistuksena siitä, miten koko ihmisyys woidaan riisua yltä ja miten saatana on julma ja wäkewä?</p>
        <p>Kaikki nuo kolme oliwat äskettäin tulleet Sääksmäeltä ja on oppilas jonkun aikaa pitänyt yhteyttä waimon kanssa, ja on tämä muutama wiikko ennen kuolemaansa synnyttänyt lapsen.</p>
        <p>Tämän rikoksen tähden mies mestattiin ja teilattiin ja waimo myös mestattiin ja poltettiin rowiolla, kun sitä ennen kummaltakin oli oikea käsi poikki hakattu.</p>
        <br></br>
        <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389178?page=2">Linkki artikkeliin</a>
      </Article>
      
      <Divider className="dividerStyle" />
      
      <Article titleText="Uuden kirkonkellon hankkiminen Tuulokseen.">
        <SubDivider className="dividerStyle" />
        <h4>Wuonna 1771 tehdyn pöytäkirjan mukaan.</h4>
        <br></br>
        <p className="firstLetterStyle">Tuotiin julki usealta taholta lausuttu toiwomus, että seurakuntaan hankittaisiin uusi kirkonkello, suurempi kun mikään nykysistä, koskapa täällä ei ole sellaista 
          kelloa, joka kuuluisi lähimpäin kylien takana olewiin, wielä wähemmin kirkosta etäämmällä olewiin. Kokouksessa ei ollut ainoatakaan, joka ei olisi halusta sellaista toiwonut, mutta walittiwat 
          kaikki waan köyhyyttään ja kykenemättömyyttään, jonkawuoksi ehdotettiin, että seurakunta päättäisi käydä wapaehtoisilla keräyksillä, warojen ja tilanteitten mukaan, wuosittain kannattamaan, 
          joka wuotuinen erä otettaisiin kirkon tileihin tällaisella otsikolla: 'Wapaehtoinen lahja uuden kellon saamiseksi' ja jotta saataisiin innostus asiaan suuremmaksi, olisi myös erikseen merkittäwä, 
          kuinka paljon kustakin kylästä wuosittain on annettu. Määrät laskettaisiin sitten kaikilta wuosilta yhteen, kunkin kylän lahja erikseen, ja kun kello sitten waletaan, kirjoitetaan keräyksen 
          tulokset sen laitaan ikuiseksi muistoksi ja kunniaksi lahjoittajille, jonka ylistystä lapset ja lastenlapset sitten weisaisiwat ja siunaisiwat sitten antelijaita lahjoittajia lahonneen 
          muistomerkin wieressä heidän haudallaan. Tätä wastaan ei pienintäkään wäitettä tehty, ja asia päättyi siis siihen, että papisto, kun kulkee saatawiaan kantamassa ja rippikuulusteluja 
          pitämässä, panee asian alkuun ja sitten wuosittain toimittaa keräystä, kunnes seurakunnan toiwomus uuden kellon saamisesta woidaan toteuttaa. Tähän korkein siunauksensa antakoon!</p>
        <br></br>
        <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389121?page=2">Linkki artikkeliin</a>
      </Article>
      
      <Divider className="dividerStyle" />
      
      <Article titleText="Ruumisweisusta.">
        <SubDivider className="dividerStyle" />
        <h4>Pöytäkirjan mukaan wuodelta 1791.</h4>
        <br></br>
        <p className="firstLetterStyle">Ehdotettiin ruumisweisun toimittamiseen, joka täällä näihin asti on tapahtunut siten, että yksi tai useampi pappi käyden ruumissaaton edellä lukkarin kanssa, 
          laulawat jotakin kuoleman ajatuksiin johtawaa wirttä, mutta joka tapa on tarkotustaan wastaamaton, eikä ole omansa herättämään hartautta, koska kantajat ja surusaatto owat pitkän matkan päässä, 
          ja joka, pahan ilman sattuessa, on hywin waiwaloistakin, sellaista, tämän pyhän toimituksen tarkotusta, joka on muistuttaa eläwiä kuolewaisuudestaan ja waatia heitä walmistautumaan autuaalliseen 
          kuolemaan sekä myös saattaa wainaja siiwosti ja kunniallisesti hautaansa, paremmin wastaawaa muutosta, että papit, kun sitä halutaan, kulkewat surujoukon mukana ja toimittawat laulun wasta haudalla 
          ennen hautauksen toimittamista ja saawat tästä saman korwauksen, mitä, entistä tapaa noudattaenkin, on maksettu. Waikkakin yksi ja toinen toi esille jonkin wastawäitteen tätä wastaan, niin 
          suurempi osa läsnäolewista sen kuitenkin hywäksyi.</p>
        <br></br>
        <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389121?page=2">Linkki artikkeliin</a>
      </Article>

      <Divider className="dividerStyle" />
      
      <Article titleText="Ankara riita saarnatuolin paikasta,">
        <SubDivider className="dividerStyle" />
        <h4>jossa herrat ja talonpojat owat tiukasti wastakkain.</h4>
        <br></br>
        <p className="firstLetterStyle">Kokouksessa <span className="boldStyle">8—3—1795</span> owat seurakuntalaiset yksimielisiä siitä, että saarnatuoli on uusittawa mutta kun joku herrasmiehistä ehdotti, että se samalla muutettaisiin silloiselta 
          paikaltaan, toisen pilarin kohdalta nykyiselle paikalleen, ensimmäisen pilarin kohdalle, minkä muuttamisen puolesta puheenjohtajakin selitti monen seikan puhuwan, ei osa kansanmiehistä sanonut tähän 
          suostuwansa, kun toinen osa taas, joka jäi paikalle kokouksen jälkeen, yhtyi herrain tuumaan. Asia jätettiin toiseen kertaan.</p>
        <p><span className="boldStyle">7—6—1796.</span> Asian käsittelemistä jatkettaessa, kertoo pöytäkirja, että saarnatuolin muuttamisasiasta nousi seurakuntalaisten kesken warsin tuima riitä ja suurin osa tahtoi, että se pysytettäisiin entisellä 
          paikallaan.</p>
        <p><span className="boldStyle">3—7—1796</span> pidetään taasen pitäjänkokous, puheenjohtajana Konsistoriumin määräyksestä warapastori Dawid Lönneström ja maaherran, parooni Johan Henrik Munckin saapuwilla ollessa. Nyt annettiin annettiin sille 
          osalle seurakuntaa, joka on saarnatuolin muuttamista wastaan, tilaisuus tuoda wastawäitteensä esille. Puheenjohtaja kehottaa aluksi yksimielisyyteen neuwoen wastustajia antamaan perään, koska kerran kaikki 
          herrasmiehet ja talonpojista ymmärtäwimmät owat katsoneet muuttamisen wälttämättömäksi, ja kun kirkko muutenkin on korjausten kautta tullut uudemman näköiseksi, mutta puhe ei waikuta wastustajiin. Kysytään 
          heidän syitään, ja kun he tuowat esiin wain sen, että perällä istuwat ja ne, jotka seisowat porstuassa, ei woi uudesta paikasta kuulla saarnaa ja kuulutuksia niin hywin kuin wanhasta, niin selittäwät herrat 
          ja osa kansasta uudelleen, mikä oli saanut heidät ehdotuksensa tekemään ja minkä wuoksi saarnatuoli jo olikin 'wain koitteeksi joksikin aikaa' uuteen paikkaansa siirretty, ja että ääni tästä paikasta päinvastoin 
          paremmin kun entisestä pääsee kuulumaan suoraan kirkon etäisimpäänkin kolkkaan, kun saarnamiehellä ei nyt, kuten ennen, ole edessään kolmen kyynärän päässä lehteriä ja pilaria. Maaherra ja Konsistoriumin 
          asiamies, jotka tänään pyynnöstä oliwat kuunnelleet saarnaa noissa epäedullisimmissa paikoissa, wakuuttiwat todeksi tämän, huomauttaen wielä, että nyt ei saarnaajalla ole kuten ennen melkeinpä puolet seurakuntaa 
          selkänsä takana, waan on koko seurakunnalla nyt hän näkywissään, mikä tietenkin on suureksi eduksi. Sitäpaitsi on tämän muutoksen kautta saatu enemmän tilaakin kirkkoon, 8 penkkiä naisten puolelle ja 3 miehille. 
          Wanha saarnatuoli on sitäpaitsi suorassa linjassa kirkon ja sakariston owien wälissä, joka oli seurauksena, kun owet olimat auki, kowa weto, mikä huomattawasti waimensi äänen kuulumista.</p>
        <p>Wastustajat pitiwät kaikesta huolimatta, päänsä, sanoen, että olisi kowin arweluttawaa luopua wanhoista muodoista ja tawoista. Asia jäi Konsistoriumin ratkaistawaksi.</p>
        <p><span className="boldStyle">16-11-1796</span> tämän päätös tulikin ja esitettyjen perusteitten nojalla se määräsi saarnatuolin muutettawaksi, welwottaen kuitenkin alistamaan piirustuksen Kuninkaallisen Majesteetin wahwistettawiksi.</p>
        <p>Mutta asia ei suinkaan pääty tähän. Konsistoriumin päätöksestä tehdään walitus KuninkaalliselLe Majesteetille, walittajina talolliset Erkki Kimpari, Mikko Kolari ja Erkki Perttula. Walituskirjaa ei 
          asiapapereissa ole, mutta walitukseen osaaottamattomain kuulustelemiseksi <span className="boldStyle">26-3-1797</span> pidetyn kokouksen pöytäkirja osottaa, että se on saanut mielet kuohuksiin. Siinä sanotaan: 'Seurakuntaa kehotettiin ensin 
          tarkon kuulemaan', kun walituskirja sille luettiin ensin ruotsin kielellä ja sitten suomeksi tulkittiin.</p>
        <p><span className="boldStyle">1)</span> Kysyttiin, josko koko seurakunta noiden kolmen walittajan kanssa tahtoi wäittää, että herrasmiehistä, joita tässä seurakunnassa on paljon, ei edellisessä kokouksessa muut kun majori ja ritari, 
          jalosukuinen herra Charpentier, tuomari, korkeasti kunnioitettu herra Leopold ja papisto, sekä myös rustitilallinen Mikko Kartano Matkantakaa, yhtyneet ehdotettuun saarnatuolin muuttamiseen: tähän wastattiin 
          meluten ja rähisten, että kyllähän kaikki herrasmiehet olivat ehdotukseen suostuneet, mutta ei kansanmiehet.</p>
        <p>Tällä kohdalla muistutti Juho Hankala Hyömäestä, että Konsistoriumin olisi pitänyt määrätä jonkun toisen pappismiehen tätä kokousta pitämään ja jättää käyttämättä siihen seurakunnassa oleawaa, niin kun 
          allekirjoittanut on, katsoen että koko toimitus olisi keskeytettäwä, mutta kun minä en katsonut itseäni tämän muistutuksen kautta jääwätyksi, niin wäitti Mikko Kolari, että jos ei Kunink. Majesteetti ole määrännyt 
          tätä kokousta pidettämäksi, niin ei seurakunta ole melwollinen tässä lausuntoaan antamaan, koskapa wain Konsistoriumi oli tämän määrännyt. </p>
        <p><span className="boldStyle">2)</span> Sowittiin, ketkä owat antaneet walittajille toimeksi teettää Kunink. Majesteetille osotetut alamaiset walitukset ennenmainittua Konsistoriumin päätöstä wastaan, mutta melun tähden, jonka kansa nosti, ei tätä woitu 
          selwille saada, minkä wuoksi allekirjoittanut koetti, käsillä olewan manttaalikirjan mukaan toimitetun esillehuudon kautta, selwittää sitä, mutta tästä melu yltyi, että oli aiwan mahdotonta saada mitään selwyyttä, ja 
          kun monta kertaa oli hiljaisuutta waadittu, rähähti Mikko Kolari, että seurakunta ei rupea äänestämään, wäittäen, että kun he wiime kesänä korkeasti jalosukuisen herra paroonin ja maaherran Munckin läsnäollessa 
          oliwat tahtoneet äänestää ja sitä ei oltu silloin sallittu, niin ei se tule tapahtumaan nytkään. Tähän wastasiwat herra kapteeni Gustaf Leisten ja pataljoonansaarnaaja, korkeasti oppinut herra maisteri Joh. H. 
          Hallenberg, että nuo kolme jotka oliwat ottaneet puhuakseen koko seurakunnan nimessä ja nyt wielä estiwät seurakuntaa tuomasta esiin mielipidettään äänestyksen kautta, olisiwat langetettamat lain säätämiin sakkoihin, 
          koskapa owat walheita kantaneet waltaistuimen eteen ja nyt wielä koettawat niitä kannattaa.</p>
        <p><span className="boldStyle">3)</span> Kysyttiin, kuka se Holmberg on, joka oli walituskirjat kokoonpannut, johon walittajat wastasiwat, että hän on Hämeenlinnan lääninkanslian sihteeri; toiset sanoiwat, että hänellä on Aktuarion arwonimi.</p>
        <p><span className="boldStyle">4)</span> Kysyttiin, josko muutkin kun walittajat, tahtowat, wastoin totuutta, wäittää, että tässä kirkossa on useampia kun yksi eteinen? Wastaus: toinen eteinen on sakaristo, koskapa on tapana senkin kautta kirkkoon tulla 
          ja sieltä mennä.</p>
        <p><span className="boldStyle">5)</span> kysyttiin: kuinka woidaan wäittää ehdotetulla uudella saarnatuolinpaikalla kuuden pilarin waimentawan saarnaajan äänen, koskapa uudella paikalla yksi pilari on hänen takanaan ja toinen, sitä wastapäätä olewa, on 
          saarnaajasta takawiistoon kokonaan hänen wasemmalla puolellaan, niinkun Tuomiotapituliin jätetystä Hauhon kirkon piirustuksestakin selmästi näkyy? Tähän walittajat wastasiwat, että he oliwat selwittäneet kirkossa olewan 
          kuusi pilaria, ja että aktuario Holmberg, joka on heidän ajatuksensa wäärin ymmärtänyt, itse wastatkoon erehdyksestään.</p>
        <p><span className="boldStyle">6)</span> Ylioppilas Paul Gabriel Herkepaeus, ollen tilanomistaja seurakunnassa, wäitti, että hän woisi laillisesti toteennäyttää, että useat kansasta wiimekesäisessä kokouksessa oliwat selwittäneet olemansa warsin tyytywäisiä 
          ehdotettuun saarnatuolin muuttamiseen, ja tulee tämä wastaisuudessa todistettawaksi, jos tarwitaan. Waranimismies Sarbäck selitti, että hän en milloinkaan ollut hywäksynyt walittajain wehkeitä, wielä wähemmin kehottanut 
          heitä walituskirjoja teettämään. Samaa wäittiwät myös rustitilain osakkaat Erkki Wuolijoki ja Juho Flintman kirkonkylästä sekä jahtiwouti Aatami Erkinpoika kirkonkylän Heiskalasta.</p>
        <p>Näin toimitettua, kehotti allekirjoittanut kansaa walitsemaan muutamia edustajia olemaan saapuwilla pöytäkirjan tarkastuksessa Pappilassa, sekä sitä siellä allekirjoittamaan, mutta tästä kansa kieltäytyi, jonka wuoksi 
          tämän allekirjoittawat wain herrasmiehet ja yllämainitut kolme kirkonkylän talollista.</p>
        <p className="captionStyle">Henr. Boisman.</p>
        <SubDivider className="dividerStyle" />
        <p>Kuninkaallinen Majesteetti hylkäsi sittemmin walituksen aiheettomana ja määräsi saarnatuolin uuteen paikkaan muutettawaksi. Uusi kaunis saarnatuoli, jonka hywäksi pitäjän herrat, ja warsinkin tohtori Bonsdorff oliwat 
          lahjotuksia tehneet, ja jonka kuwanweistäjä Johan Sahlbom oli muowaillut, maalari Wijkberg maalannut ja peilimestari Söderqwist kullannut, wihittiin tarkotukseensa 9:nä sunnuntaina kolminaisuudesta, 21 päiwänä heinäkuuta 
          1799, jolloin mainittu tohtori, seurakunnan ijäkäs rowasti, saarnasi wiimeisen kerran seurakunnalleen.</p>
        <br></br>
        <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389121?page=2">Linkki artikkeliin</a>
      </Article>
      
      <Divider className="dividerStyle" />
      
      <Article titleText="Toimenpiteitä siweettömyyttä wastaan.">
        <SubDivider className="dividerStyle" />
        <h4>Wuonna 1761 tehdyn pöytäkirjan mukaan:</h4>
        <br></br>
        <p className="firstLetterStyle">Kysyttiin seurakunnalta, miten on kyläkunnissa yhteisten rukousten pitämisen laita, noudatetaanko lukukinkereillä säädettyjä toimenpiteitä? Tähän wastattiin, 
          että ne hywin niukasti wetäwät kansaa puoleensa ja että nuoriso pyhäpäiwäkokouksissaan harjoittaa kortinlyöntiä, juopottelua, tanssia, tappelua, maanteillä räyhäämistä öisin ja muuta 
          tällaista, ja walitettiin sitä suuresti. Tämän jälkeen neuwoteltiin, miten tällainen epäkristillinen meno olisi ehkäistäwä, ja päätettiin papiston etuoikeuslain wuodelta 1723 §:n 23 sekä 
          Kuninkaan armollisen asetuksen lepopäiwän rikkomisesta nojalla:</p>
        <p><span className="boldStyle">1:ksi</span> säättää sakot ja rangaistukset niille, jotka tästedes uskaltawat jäädä pois rukoustilaisuuksista tai jättää rukoukset pitämättä, tullen tällainen 
        ensimmäisestä laiminlyönnistään, ellei hänellä poisjäämiseensä ole laillista syytä ollut wetämään sakkoa 18 killinkiä, toisella puolta enemmän ja kolmannella kertaa istukoon jalkapuussa. Se 
        taasen, joka tahallisesti jää pois rukouskokouksesta, kun torween puhaltamalla merkki on annettu wetäköön sakkoa 12 äyriä, toiselta kerralta puolta enemmän, kolmannelta pantakoon jalkapuuhun.</p>
        <p><span className="boldStyle">2:ksi,</span> ne, jotka tawataan lyömässä korttia, juopottelemassa tai tappelemassa wetäkööt sakkoa yhden taalarin tai warojen puutteessa, pantakoon 
          yhdeksi pyhäksi istumaan jalkapuuhun.</p>
        <p><span className="boldStyle">3:ksi,</span> ne, jotka pitäwät tapoinaan kylänjuoksamista, kokoontuen tanssimaan, cirkumaan ja hoilaamaan sekä muuta sopimatonta ajanwiettoa harjoittamaan, 
        olkoot sitten palweluswäkeä tai muuta nuorisoa, wetäwät sakkoa ensi kerralla taalarin 16 killinkiä, toisella 2 taalaria ja kolmannella pantakoon jalkapuuhun. Kuudennusmiesten on perittäwä 
        nämä sakot heti, kun owat asiasta tiedon saaneet. Jos joku uskaltaisi asettua kuudennusmiehiä wastustamaan, jotka owat kuninkaallisten wirastojen suojeluksessa, niin ilmoitettakoon tämä heti 
        kruunun nimismiehelle, joka wiipymättä 'ex nobili officio' asian korjannee. Sakot jaetaan kolmia, nim. kirkon, pitäjän köyhien ja kuudennusmiesten kesken. </p>
        <SubDivider className="dividerStyle" />
        <h4>Wuonna 1778 päätti kirkkoneuwosto:</h4>
        <br></br>
        <p className="firstLetterStyle">Kirkooneuwosto katsoi tarpeelliseksi tämän paheen poistamiseksi määrätä sakot niille, jotka pahettaan jatkawat seuraawasti:</p>
        <p><span className="boldStyle">1:ksi.</span> Wanhemmat ja talolliset, jotka salliwat lastensa ja palwelijoittensa oman tahtonsa mukaan pyhä- ja juhlapäiwinä iltaisin lähteä syntistä ja 
          pahentawaa elämää harjoittamaan, wetäkööt, welwollisuuksiensa laiminlyömisestä, sakkoa 9 taalaria 24 killinkiä.</p>
        <p><span className="boldStyle">2:ksi.</span> Jokainen lapsi tai palwelija, joka tawataan yhdestä tai toisesta wallattomuudesta tai huikentelewaisuudesta pyhä- ja juhlapäiwänä, maksakoon 
          6 taalaria 16 killinkiä.</p>
        <p><span className="boldStyle">3:ksi.</span> Salpietari-kuohuttajat, reserwiläiset ja muut, jotka eiwät ole talollisia, maksakoot kukin sellaisista rikkomuksista 24 killinkiä</p>
        <p><span className="boldStyle">4:ksi.</span> Joka sallii huoneissaan pitää sopimattomia kokouksia tai luowuttaa ne juominkien, tanssien ja korttipeluun harjoittamiseksi, maksakoon sakkoa 
          yhden waltioriksin. Sakot haetaan rikkojilta ulos ja jos waroja ei ole, istukoon hän yhden sunnuntain jalkapuussa.</p>
        <SubDivider className="dividerStyle" />
        <h4>Wuonna 1792 päätetään seuraawaa:</h4>
        <br></br>
        <p className="firstLetterStyle">Kyläkuntiin asetetaan katsannusmiehiä walwomaan nuorison elämää ja annetaan näille seuraawat ohjeet:</p>
        <p><span className="boldStyle">1:o.</span> Heidän on kuljeskeltawa ympäri kylän kerran tai kahdesti kunakin juhlapäiwänä yhden talon isännän kanssa, wuoroonsa kunkin.</p>
        <p><span className="boldStyle">2:o.</span> Otettawa siiwolla tawalla selkoa, miksi yksi tai toinen kylässä pistäytyy naapurissa.</p>
        <p><span className="boldStyle">3:o.</span> Yritettäwä kaswattawan ja kristillisen keskustelun kautta waikuttaa nuorisoon, jotta näistä katoisi halu tyhjänpäiwäisiin ajanwiettoihin.</p>
        <p><span className="boldStyle">4:o.</span> Suurempiin kyliin on walittawa useampia katsastusmiehiä ja näiden wuoroonsa hoidettawa katsastustointa.</p>
        <p><span className="boldStyle">5:o.</span> Kuudennusmiesten ja lautamiesten, missä niitä on, on ryhdyttäwä näiden kanssa samaan toimeen.</p>
        <p><span className="boldStyle">6:o.</span> Kaikkia kunnollisia kylänmiehiä on kehotettawa auttamaan näitä tiedonannoilla, neuwoilla ja toimilla.</p>
        <p>Sowittiin wielä siitäkin, että jos katsannusmiehet laiminlyöwät welwollisuutensa ja se saadaan toteennäytetyksi, saakoot he kaksinkertaisen rangaistuksen.</p>
        <p>Päätöksen toteuttamisesta käytännössä, kuwaa pöytäkirja wuodelta 1792.</p>
        <p>Pitäjänkokous on kutsuttu koolle sen johdosta, että huhu on kertonut Kokkilassa metsästäjä Kädin luona pyhänä syyskuun 9 päiwänä pidetyn laitonta kokousta tansseineen ja soittoineen. 
          puheenjohtaja oli huhun johdosta jo waremmin kuulustellut asiaa Kelkkasten hewostien tyttäreltä Annalta, ja oli tämä todistanut asian niin olleen, samalla sanoen, että hän ei tiennyt 
          niiden nimiä, sekä että hänen luullakseen useat, samoin kuin hänkin, oliwat muissa asioissa paikalle tulleet. Senwuoksi ei puheenjohtaja ollut hänen todistukselleen sen enempää arwoa antanut, 
          koska piti häntä ensimmäisenä ilmiantajana, kuin että se jäi hänelle ohjeeksi enemmille tutkimuksille asiassa. Ja sentähden, koska minun on lakia noudatettawa, koetettawa saada epäluulon 
          alla olewille heidän rikoksensa tunnon asiaksi, selittämällä, miten he näin pahoja tapoja noudattaessaan, owat sitä syyllisempiä ja suuressa wastuussa, ja tätä tietä koettaa heitä oikaista 
          ja saattaa parannukseen, kutsuin luokseni Kädin waimoineen ja koetin parhaani mukaan, isällisesti neuwoen, saada heitä tunnustamaan asian suoraan sekä nimittämään siihen osalliset henkilöt, 
          mutta selittiwät he tämän ilmiannon johtuneen wihasta ja wahingoittamisen halusta, wakuuttaen, että heidän luonaan ei muuta kokousta ollut pidetty, kuin että muutamat, jotka oliwat tulleet 
          laitumelta palaawaa karjaa wastaan, oliwat, sattuneen sadekuuron tähden, juosseet heidän kattonsa alle. Kuitenkin, kun tämä selitys tuntui aika paljon epäilyttäwältä, eikä sopinut yhteen 
          huhun kertoman asian kanssa, warsinkin kun on saatawissa useita todistajia, jotka oliwat saapuwilla walaehtoisin todistuksin woiwat asian oikean menon kertoa, niin kehotin komissaariota 
          Schmidtiä kutsumaan näitä tähän pitäjänkokoukseen. Nyt kertoiwat nämä totuutena, jonka woiwat walalla wahwistaa, Juho Matinpoika Kiwikosta, että hän oli ollut Kädin tuwassa ja oli nähnyt 
          tämän pojan Juhon sekä Mikkolan Mikon soittawan ja Mikkolan Marin, Pulkin Cewan ja Mari Erkintyttären Tuittulasta tanssiwan; muut todistajat, että, tiellä seistessään, oliwat selwästi 
          kuulleet soiton ja tanssin. Samaa oli kirkonwaiwanen Juho Antinpoikakin minulle todistanut. Nimismies Schmidt waati siis, että ne, jotka nyt oli todistettu syylliseksi rikokseen, 
          langetettaisiin asetuksen säätämään sakkoon, mutta talonpojat seurakuntalaisista paniwat wastaan siinä mielessä, että kun asia oli tapahtunut ajattelemattomuudesta ja ennenkuin ajatus 
          oli tullut oikein kaikkien tietoon, ja asianomaiset lupasiwat parannusta, heille tällä kertaa woitaisiin tekonsa anteeksi antaa. Puheenjohtaja katsoi kuitenkin, että joku pienempi sakko, 
          joka annettaisiin waiwasille, olisi warotukseksi heille tarpeen.</p>
        <br></br>
        <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389136?page=2">Linkki artikkeliin</a>
      </Article>
      
      <Divider className="dividerStyle" />
      
      <Article titleText="Yhteinen julistus.">
        <h3>1785</h3>
        <p className="firstLetterStyle">Ehkä päälletarkoitus Krouwien asettamisen kanssa on se, että niissä löydyisi tarpellista ylöspitämistä erinomaittain matkustawaisille; osotta kuitengin joka 
          päiwäinen koettelemus, mikä häpiällinen wärinkäyttämys niissä harjoitetan juomisen ja spelamisen kautta, enimmäst Pyhäpäiwinä ja niissä Krouweissa, jotka makawat Kirkonkylisä.</p>
        <p>Samassa mitassa kuin yxi nijn Jumalatoin elämäkerta mutamina wuosina on tygökaswanut, on myös hawaittu ne suurimmat rikoxet ja pahattyöt hirmuttawalla tawalla ottawan ylikäden. 
          Yhden wuoden sisällä owat usiammat murhat tässä Länissä tapahtunnet kuin ennen usiambina wuosina yhtenlukein. Lyhyen ajan sisällä owat. myös kaxi talonpoika nijn ylöllisesti täyttännot 
          itzens palowinalla, että he owat kuollet kohta samassa paikassa. Sille kaikkinäkewäiselle ja wanhurskalle Jumalalle on senkaldainen meno yxi kauhistus, joka ei jää ilman kostamata. 
          Yhdelle armolliselle ja hywätekewäiselle Kuningalle tuottapi se haikian mielen, ja murhellisexi saattapi myös kaikki Christilliset oikeinajattelewaiset waldakunnan kansa asujat sillä se 
          on tietty, että yhteisten syndien päälle, seura yhteiset maanwaiwat.</p>
        <p>Kuinga nämät waiwat meidän Isämme maata muutamina wuosina itze työssä jo owat kohdannet ja wielä nyt tarjondetewat, taita se parhain todista, jolla usein ei ole ollut yhtän leiwän pala 
          hänen huonesans, waan on täytyny sammutta hänen pienden lastensa nälkä wiheljäisellä ja luonottomalla rawinnolla.</p>
        <p>Ennenkun se juhma juopumuxen wika, joka on lähde kaicken pahuiten, syy raskainbijn synnin rangaistuxijn, ja yri wika joka tuskin on tuttu nijden tygönä, joilla ei ole se etuus, että 
          kanda Christityn nime, ennenkuin, sanon minä, tämä wika saa wielä lawiammalda uloslewittä itzens ja ehti myös myrkyittä wiattomain nuorukaisten sydämmet ja mielet; Nijn waroitan minä 
          tämän kautta haluisimmasti ja yxiwakaisimmasti Huonen Isändiä ja wanhembia, että he, ei ainoastans oman onnellisudens tähden, kantaisit itzens kaikista wiettelewäisistä tiloista, mutta 
          myös erinomattain, ettei he turmelisi heidän ylöskaswawia lapsians ja palkollisians pahoilla esimerkillä.</p>
        <p>He ei suingan taida olla tundemattomat, koska Jumala on andanut heille järken ja ymmärryxen. Minä tahdon sentähden johdatta heidän mielens sitä kuin enimmäst taita panna heitä 
          peräänajatuxeen: Kuinga monda Talonpoika, jolla on ollut hywä talo, juomisen kautta on nijn upottanut itzens welkaan, että ensist hänen irtain kaluns on tullut myydyxi pois, aina 
          wiimeiseen nautaan asti, ja siijtten on hän waimons ja lastensa kanssa täytynyt jättä huonens ja taloins, maxaisans Restiä kootusta ja kartutctusta welastans; Tainkaldaiset usiasti 
          tapahtunnet murhelliset tapauxet, todistawat kyllä, kuinga yxi jurtunut ja totutettu halu, että ylöllisesti nautita wijna ja wäkewiä juomia, waikutta wahingollisest päälleseurannot, 
          sekä talonpojalle itze, että myös hänen turwattoman tilaan sen kautta saatetuille lapsillens ja jälkentulewaisillens. Mutta koska moni on niin peränajattelematoin, ettei hän hywiä 
          neuwoja ja waaroituxia ensingän tottele; Nijn olen minä waadittu minun wirkani puolesta ja Kuningallisen Majestetin armollisten asetusten päällepanemisest, yhteisexi rickomattomaxi 
          jälken elämiseksi tämän kautta julistaman ja tietä andaman.</p>
        <p>1:o Ettei mingänkaldaisia speliä, mistä nimestä ne olla mahtawat, aina monain ja keilien heittämiseen asti ja kanssa, pidä pidettämän jossakussa Krouwi elli Gästgifwari taloissa, 
          myymisen wapauden poiskadottamisen haastolla, jos se on palowiinan Krouwi, mutta jos se on yxi nijstä tawallisista Krouweista, joissa myös olutta myydän, elli Gästgifwarin talo, 
          nijn wetäwät ne sen sakon päällens kuin 1733 wuoden asetus ulospane ja määrä, koska tainkaldaiset spelit andawat tilan kansan kokontulemiseen, ja siijtten senkaldaisten kelwottomain 
          ajanwietetten alla yxi yllyttä ja kehoitta toista wäkewistä juotawista nautitzeman enämbi kuin hyödyllinen on.</p>
        <p>2:o Että kello yhdexäst ehtolla ennen Pyhäpäiwä, nijn kello neljän asti Pyhäpäiwä ehtopuoleen, ei pidä yhtäkän Krouwia awattaman olwen ja palowijnan myymijeen saman sakon ja 
          rangaisturen haastolla kuin edelläpäin nimitetty on, ei myös Gästgifwarien taloissa, muuta kuin ainoastans matkustawaisten tarpexi.</p>
        <p>Ne kaickein parhaimmat ja hyödyllisimmät Asetuxet jääwät kuitengin woimattomixi, jollei nijden ylitte walwota ja pidetä kättä yxiwakaisesti; Tämäntähden on se Krunun Fougdien, 
          Fiskalien, Nimismiesten, Sildafougdien ja Neljännesmiesten, welwollisuus, että jokainen maans paikalla tarkasti peräänkatzowat ettei mitän rickomista tapahdu nijn tässä kuin 
          muissakijn asioissa jotka johdattawat hywään järjestyxeen, ja hwijn awuin, sen jälken kuin Kuningallisen Majestetin Armolliset Asetuxet käskewät ja päällenpanewat, että he kaikisa 
          mahdollisisa tiloisa peräänkysywät, ja itze peräänkatzowat, kuinga Krouwarit ne heidän päällensäpannut welwollisudensa täyttäwät. Ja nijn kuin tämä peräänkatzomus pitä erinomattain 
          tapahtuman Nimismiehildä, joilla siehen paras tila on, nijn tulewat he myös kowan edeswastauxen alle, ja muistawat wirkans, jos minä tulen ylitzetodistetuxi siijtä, että he tässä 
          asiasa owat katzonnet läpi sormiens ja welwollisudens laiminlyönnet.</p>
        <p>Nijstä Krouweista, jotka makawat likemmin kircoja pitä enimmäst waari otetaman. Ja jos nijn tapahduis, että, ehkä paras peränkatzomus olis, yhtähywin tätä wastan salaisesti rikottaisin, 
          ja waikka se laillisesti ei taita todistetta, kuin ainoastans KirckoHerrat andawat minulle sijtä tiedon, nijn pitä se suotu palowinan myymisen wapaus kohta poisotettaman, nijnkuin 
          wäärinkäytetty ja waldakunnalle wahingollinen. Sillä se on peräti sotiwainen päälletarkoitusta wastan, että Krowarit sillä saawat woitto, koska Jumalan tundo, hywät säädyt ja tawat 
          tulisi kärsimän sen kautta.</p>
        <p>Tämä minun Julistuxeni, pitä wähimmäiten pari kerta wuodes ulosluettaman, suurimbina Juhlapäiwinä, ja koska enimmäst kansa on kirckoon kokontullut. Jonga ylitten pitä Nimismiehet 
          ottaman Papipen todistuxet, ja ne sijtten Kruunun Fougdien kautta minulle lähettämän.</p>
        <p className="captionStyle">Hämenlinnas Maan Cansellisa sinä 25 p. Heinä Kuusa 1785</p>
        <p className="captionStyle">Th: de Bruce</p>
        <p className="captionStyle">Joh. Walheim</p>
        <br></br>
        <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389187?page=2">Linkki artikkeliin</a>

      </Article>
      
      <Divider className="dividerStyle" />
      
      <Article titleText="Köyhyys Hauholla kroonillinen tauti.">
        <SubDivider className="dividerStyle" />
        <h3>1798</h3>
        <p className="firstLetterStyle">Wuonna 1798 on Turun Yliopistorakennuksissa toimitettu  korjaustöitä ja, waroja kun puuttuu, on Kunink. Majest. wedonnut seurakuntiin. Pitäjänkokouksessa 
          täällä wastataan, että seurakunnan kassat owat tyhjät. Kun wedottiin yksityisiin, niin 'yleinen äänettömyys' ja sitten walittelut ajan kalleudesta osottiwat kyllin selwästi, että kukaan 
          ei ollut, waikka asia säälittikin ja tahtoakin olisi ollut, tilaisuudessa mitään lahjoittamaan.</p>
        <SubDivider className="dividerStyle" />
        <h3>1806</h3>
        <p className="firstLetterStyle">Wuonna 1806 olisi kirkko pitänyt Konsistorion kehotuksesta palowakuuttaa, mutta seurakunnan jäsenet eiwät tässä muuta woineet, kun nöyrimmässä alamaisuudessa 
          pitää ehdotusta todistuksena esiwallan isällisestä huolenpidosta, jonka he uskollisina alamaisina hywäksyiwätkin, mutta owat seurakunnan warat nykyään niin pienet, että ne eiwät korjaamatta 
          siedä mitään wähentelemisiä eiwätkä riitä edes siihen maksuun, mikä heti olisi suoritettawa, ja seurakunta ei nyt parhaalla tahdollakaan ole tilaisuudessa tuota puutetta keräyksillä poistamaan, 
          sillä sen on tänä wuonna ollut kestettäwänä kowa katowuosi.</p>
        <SubDivider className="dividerStyle" />
        <h3>1827</h3>
        <p className="firstLetterStyle">Wuonna 1827 olisi hallituksen kuulutuksen johdosta ollut päätettäwä kätilön palkkaamisesta kuntaan. Tähän antoiwat seurakuntalaiset seuraawan yksimielisen 
          wastauksen: Koska Majesteetti armollisesti jättää alamaistensa wapaan harkinnan waraan ottaa tai olla ottamatta kätilöä, niin toiwoisiwat Hauhon pitäjän miehet saada kieltäytyä tutkinnon
          suorittanutta kätilöä ottamasta, siksi että heillä on täällä, miltei joka kylässä, käytettäwinään joskaan ei tutkinnonsuorittaneita niin ainakin kokeneita ja luotettawia apulaismummoja 
          (jordegummor), jotka useinpa aiwan ilmaiseksikin tai ainakin wähäpätöisestä wapaaehtoisesta maksusta, owat auttamassa, jos waan heidän puoleensa, tarpeen sattuessa, käännytään. Sitäpaitsi 
          pitäjän miehistä näytti selwää olewan, että tutkinnonsuorittaneen kätilön ottaminen ja palkkaaminen tuottaisi heille aiwan liian suuria kustannuksia, jollaisia he eiwät näin ahtaina 
          aikoina pystyisi suorittamaan; muuten tahtoiwat Hauhon pitäjän miehet sywimmässä alamaisuudessa lausua julki kiitollisuutensa Hänen Majesteetilleen siitä, että hän pitää näin hellää huolta 
          uskollisten alamaistensa onnesta ja menestykestä.</p>
        <br></br>
        <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389164?page=2">Linkki artikkeliin</a>
      </Article>
      
      <Divider className="dividerStyle" />
      
      <Article titleText="Ensimmäinen yksityisen teettämä kiwirakennus Hauholla.">
        <h3>1801</h3>
        <h4>Pöytäkirjassa 15. 10. 1801 luetaan:</h4>
        <br></br>
        <p className="firstLetterStyle">Koska werotilallinen täällä kirkonkylässä Aatami Heiskala omistamansa tilan hoitamisessa sekä maanwiljelykseen että rakennuksiin nähden, on osottanut 
          erinomaista tarmoa ja uutteruutta, on seurakunnan pastori katsonut täytywänsä esittää hänet Kunink. Suomen Talousseuralle ansiokkaana saamaan sellaisen palkinnon, jollaisia sanottu seura 
          on jakanut ahkerille kansalaisille. Tässä tarkotuksessa owat seurakunnan jäsenet nyt kutsutut kokoon asiasta kuultawiksi ja antamaan siitä lausuntonsa. Tässä tilaisuudessa esitettiin 
          syynikirja Aatami Heiskalan rakentamasta kiwirakennuksesta (nawetta) jonka oliwat allekirjoittaneet kihlakunnan lautamies Erkki Maula ja seurakunnan lukkari Carl Holmberg, jossa rakennuksen 
          laatu on lähemmin selitetty. Tämän asiakirjan tunnustiwat kaikki seurakunnan jäsenet totuudenmukaiseksi, warsinkin kun jokainen oli ollut tilaisuudessa näkemään niinhywin pellon 
          maantien warressa, josta kiweä oli lohkottu ja wedätetty, kun itse rakennuksenkin sekä rakennuksen aikana että nyt walmiina. Ja waikka A. Heiskala, joka 15 wuotta sitten otti wastaan 
          tämän tilansa rappeutuneena sekä wiljelyksiltään että warsinkin rakennuksiltaan, ja tänä aikana on pannut sen parhaimpaan kuntoon ja täten osottanut pitäjäläisilleen hywää 
          maanmiesesimerkkiä, niin oli kuitenkin yksimielisenä mielipiteenä, että hän wasta nyt, walmistettuaan kiwirakennuksen, on ansainnut yleisen Suomen kansalaisten kunnioituksen, koskapa 
          hän on ollut ensimäisiä näillä seuduin, joka on ryhtynyt niin isänmaalliseen yritykseen, jonka tarkotuksena on sekä pellon puhdistaminen kiwistä että tuo niin tärkeä metsän säästäminen, 
          jonka lisäksi itse työkin hawaitaan niin kelwollisoksi ja kestämään tarkotetuksi, että se on aina olewa todistuksena mestarinsa tarmosta ja harkitsewaisuudesta.</p>
        <p>Elokuun 8:nä päiwänä 1802 antoikin Hämeen jalkawäkirykmentin päällikkö, ewersti Gustaf Bogislaus won Platen, juhlallisesti kirkossa Aatami Heiskalalle edellämainitun seuran hopeamitalin.</p>
        <br></br>
        <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389187?page=2">Linkki artikkeliin</a>
      </Article>
      
      
      <br></br>
      <p className="captionStyle">Artikkelisarja</p>
      <p className="captionStyle">Hämeen Sanomat, 1924</p>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Poimintoja Hauhon kirkon arkistosta</title> // metadata

export default HauhoPage

