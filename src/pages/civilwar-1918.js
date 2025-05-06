import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import Image from "react-bootstrap/Image"

import "../styles/base/global.css"

import divider from "../assets/divider.png"
import quoteStart from "../assets/quotation-start.png"
import quoteEnd from "../assets/quotation-end.png"

const CivilWarPage = () => {
  return (
    <Layout titleText="Hämeen Sanomat, 1918">
      <h2>Sisällissota</h2>
      <div className="interTitle">29.1.1918</div>
      <Article titleText="Suomen kansalle.">
        <Image src={quoteStart} className="symbol"/>
        <p className="quotation">Se kansalaisweri joka wiime päiwinä on wuotanut, waatii maan hallitusta kääntymään kansan puoleen.</p>
        <p className="quotation">Kansamme on wasta nähnyt sisimmän toiweensa täyttywän. Se on saawuttanut waltiollisen riippumattomuuden, jonka jo useat Europan wallat owat tunnustaneet. Suomen 
          kansan kehityksen tiellä ei nyt enää ole mitään ulkonaista estettä. Ylintä waltaa Suomessa käyttää maan eduskunta ja sille wastuunalainen hallitus. Meidän sekä eduskunta- että kunnallinen 
          järjestyksemme owat kansanwaltaiset.</p>
        <p className="quotation">Walitettawasti on niitä, jotka eiwät tyydy tähän rauhan, lain ja wakaumuksen waikuttamisen tiehen, waan ryhtywät toisenlaisiin keinoihin tarkoitustensa perille 
          wiemiseksi. Wenäläisten taholta on kansamme keskuuteen lewitetty sitä ajatusta, että Suomessakin on kansanwaltainen kehitys mahdollinen ainoastaan sisäisen wallankumouksen awulla. Sellaisia 
          kansamme aineksia, joihin tuollainen ajatus on saatu istutetuksi, on wenäläiseltä taholta asestettu, ja täten on maamme saatettu kansalaissodan partaalle. Täällä olewien wenäläisten 
          joukkojen puolelta on wiime päiwinä tapahtunut mitä törkeintä sekaantumista Suomen asioihin sekä suoranaisia mieltäkuohuttawia rikoksia Suomen kansalaisten henkeä, omaisuutta ja wapautta 
          wastaan. Ja, mikä on kaikista walitettawinta, eräät Suomen kansalaiset owat wuorostaan olleet wenäläisiä joukkoja tähän kiihoittamassa ja yhdessä näiden kanssa kääntäneet aseensa Suomen 
          kansalaisia wastaan, yhdessä näiden kanssa harjoittaen wäkiwaltaisia ja rikollisia tekoja.</p>
        <p className="quotation"></p>
        <p className="quotation">Suomen hallituksella ei ole, waikkakin se on eduskunnalta saanut waltuudet toimia lujan järjestyswallan aikaansaamiseksi keinoja ylläpitää maassa rauhaa ja järjestystä, niin kauan kuin 
          wenäläiset sotajoukot täällä oman maamme rikollisia aineksia awustaen toimiwat kaiken rauhallisen elämän uhkana.</p>
        <p className="quotation">Tähän katsoen Suomen hallitus on pitänyt welwollisuutenaan esittää Wenäjän hallitukselle wastalauseen wenäläisten joukkojen Suomen sisäisiin oloihin 
          sekaantumista wastaan sekä uudelleen waatia näiden joukkojen poistamista Suomen alueelta. Niinikään hallitus on katsonut welwollisuutensa waatiwan esittää niille ulkowalloille, jotka owat 
          meidän riippumattomuutemme tunnustaneet, wastalausenootin kurittoman wenäläisen sotawäen täälläoloa ja sen wäkiwallantöitä wastaan.</p>
        <p className="quotation">Suomen hallitus katsoo wälttämättömäksi kääntyä myös kaikkien Suomen kansalaisten puoleen. Ainoastaan järkähtämätöntä järjestystä ylläpitämällä woimme säilyttää 
          wasta saawuttamamme itsenäisyyden, järjestyshäiriöt woiwat joko kerrassaan tuhota kansamme riippuwuuden ja wapauden, saattaa maamme wieraan waltaan tai silpomisen alaiseksi. Jokainen 
          järjestyksen häiritsijä on Suomen kansan ja sen itsenäisyäden wihollinen.</p>
        <p className="quotation">Mutta wielä suuremmassa määrässä koko kansaamme alentawaa on, että maan kansalaiset liittywät wieraisiin joukkoihin ja niiden kanssa yhdessä harjoittawat rikosta 
          ja wäkiwaltaa omia kansalaisiansa wastaan. Tämmöinen toiminta on rikos Suomen kansaa wastaan ja samalla rikos itse yhteiskuntajärjestystä wastaan. Ne tähtääwät Suomen Eduskuntaa wastaan, 
          joka on maassamme korkeimman waltiowallan haltijana. Jos tällainen toiminta pääsee woitolle, niin Suomen kansa häwiää pois siwistyskansojen joukosta, Suomen waltio oikeuswaltioiden 
          joukosta.</p>
        <p className="quotation">Isänmaan hätä welwoittaa meitä kääntymään kaikkien Teidän puoleenne. Me toiwomme, että jokainen Suomen kansalainen on nykyhetkenä olewa walmis niihin uhrauksiin, 
          jotka maamme ja kansamme waaranalainen asema saattaa waatia kultakin yksityiseltä ja kaikilta yhteisesti. Kaikkien yhteisten ponnistusten päämääränä tulee olla yksinomaan kansalaisrauhan 
          säilyttäminen. Millään ehdolla ei woi sallia mitään ärsyttäwiä kostotoimenpiteitä eikä minkäänlaista yksityisluontotoista esiintymistä wastoin järjestyswallan määräyksiä.</p>
        <p className="quotation">Kansalaiset! Liittykää kaikki yhteisesti tukemaan kotienne rauhaa, lähimmäistenne henkeä, omaisuutta, henkilökohtaista wapautta ja loukkaamattomuutta. 
          Järjestyksen ylläpitäminen on Suomen kansan itsenäisyyden ja sen tulewaisuuden puolustamista.</p>
        <p className="signature">Suomen Senaatti:</p>
        <p className="signature">P. E. Swinhufwud, E. N. Setälä, Kyösti Kallio, Jalmar Castren, Onni Talas, Arthur Castrén, Heikki Renwall, Juhani Arajärwi, Alexander Frey, E. Y. Pehkonen, 
          O. W. Louhiwuori.
        </p>
        <Image src={quoteEnd} className="symbol"/>
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
        <Image src={quoteStart} className="symbol"/>
        <p className="quotation">Huolimatta siitä, että Wenäjän hallitus on kuluwan tammikuun 4 p. wirallisesti tunnustanut Suomen waltiollisen riippumattomuuden ei wenäläisten sotajoukkojen 
          maastawiemiseen wielä ole tehokkaasti ryhdytty. Päinwastoin ylläpitää Wenäjän hallitus Suomessa edelleenkin lukuisia sotawäenosastoja, jotka samalla kun kuluttawat maan niukkoja 
          elintarpeita, eiwät ainoastaan ole esteenä järjestyksen ja turwallisuuden ylläpitämiselle maassa, waan myöskin, yhteistoiminnassa wäestön lewottomimpien ainesten kanssa, suorittawat 
          murhia, murhapolttoja ja muita ilkitöitä. Erityisen merkityksen saa tämä seikka sen kautta, että näihin rikollisiin tekoihin eiwät osaa ota ainoastaan erilliset, harhaanjohdetut sotilaat 
          tai sotilasosastot, waan että Wenäjän hallituksen täällä olewat edustajat suoranaisesti myötäwaikuttawat tällaisen itsenäiselle maalle sietämättömän olotilan jatkumiseen, sallimalla 
          Wenäjän waltiolle kuuluwien aseiden ja ampumatarpeiden jakamista epäjärjestyksiin osaaottawille kansanjoukoille sekä ehkäisemällä hallituksen määräyksiä noudattawan tehokkaan 
          järjestyswallan muodostamista. Niinpä on Suomen hallitukselle saapuneiden tietojen mukaan Wenäjän hallituksen sota-asiain komissario t. k. 23 p. Wiipuriin sijoitetulle sotawäelle antanut 
          määräyksen riisua aseet kaupungin järjestystä ylläpitämään saapuneilta suojeluskunnilta sekä aseistaa niillä ne työwäen ainekset, jotka näinä päiwinä owat ryhtyneet werisiin 
          joukkolewottomuuksiin mainitussa kaupungissa.</p>
        <p className="quotation">Lopuksi on Helsingissä olewan matruusikomitean taholta, neuwottelujen yhteydessä, hallituksen jäsenille suullisesti ilmoitettu, että täällä olewa wenäläinen 
          sotawäki harrastaa sosialisen rewolutsionin toimeenpanemista Suomessa ja on walmis tämän tarkoituksen toteuttamiseksi aseilla auttamaan wallankumouksellisia joukkoja laillista 
          yhteiskuntajärjestystä ja sitä tukewia suojeluskuntia wastaan.</p>
        <p className="quotation">Kun Wenäjän hallituksen taholta täten noudatettu menettely sisältää törkeän loukkauksen Suomea kohtaan itsenäisenä waltiona, tahtoo Suomen hallitus sen johdosta 
          täten saattaa jyrkän wastalauseensa niiden waltojen tietoon, jotka owat Suomen itsenäisyyden tunnustaneet.</p>
        <p className="centered quotation">Suomen hallituksen puolesta:</p>
        <p className="signature">P. E. Swinhufwud.</p>
        <Image src={quoteEnd} className="symbol"/>
      </Article>
      <Article titleText="Hallituksen waatimus kansankomissarien neuwostolle.">
        <p>Suomen hallituksen puolesta on lähetetty Wenäjän kansankomissarien neuwostolle näin kuuluwa sähkösanoma:</p>
        <Image src={quoteStart} className="symbol"/>
        <p className="quotation">Kansankomissarien Neuwostolle.</p>
        <p className="quotation">Pietari.</p>
        <p className="quotation">Wiime päiwinä on useissa paikoissa Suomea sattunut murhia, murhapolttoja sekä joukko lewottowuuksiakin, joihin täällä olewat wenäläiset sotilaat owat 
          osaaottaneet ei ainoastaan suojaamalla epäjärjestyksiä toimeenpanneita kansanaineksia waan jopa suoranaisesti itsekin ryhtymällä ilkiwaltaisuuksiin, joita ilman sotilasten puolelta 
          tapahtunutta awunantoa useissa tapauksissa ei olisi saatu syntymään. Kun on ilmoitettu, että wenäläisten sotilasten tässä tarkoitettu osanotto myöskin nojautuisi sotilaswiranomaisten 
          taholta annettuihin ohjeisiin ja määräyksiin, on Suomen hallitus, katsoen sotilasten tällaisen esiintymisen törkeäksi loukkaukseksi Suomen Kansankomissarien Neuwoston puoleen 
          waatimuksella ryhtyä mitä tehokkaimpiin toimenpiteisiin, jotta sotilasten osanotto wäkiwaltaisuuksiin Suomen asukkaita wastaan, sekä kaikkinainen muukin sekaantuminen maan sisäisiin 
          asioihin tulisi wiipymättä wältetyksi.</p>
          <p className="centered quotation">Hallituksen Puheenjohtaja</p>
          <p className="signature">Swinhufwud.</p>
        <Image src={quoteEnd} className="symbol"/>
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

      <Image src={divider} className="dividerStyle" />
      <p className="centered">Lehti ei ilmesty 30.1 - 29.4.</p>
      <Image src={divider} className="dividerStyle" />

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
        <p className="centered">Hämeenlinnassa 27 p:nä huhtikuuta 1918.</p>
        <p className="centered">Kaupungin Komendantti, vapaaherra</p>
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
        <div className="interTitle">2.5.1918</div>
        <h5>II</h5>
        <p>Keskiwiikkona naulattiin katujen kulmiin julistus, jossa kaikkia aseita omistawia kansalaisia kehotettiin ilmoittamaan aseistaan wallankumouskomitealle. Niitä, jotka eiwät tätä tehneet 
          ja joilta aseita sittemmin kuitenkin tawattaisiin, uhattiin ankaralla rangaistuksella. Kun määräaika oli mennyt umpeen, alkoiwat punakaartilaiset toimeenpanna kotitarkastuksia aseita 
          etsiäkseen. Tarkastuksia toimitettiin päiwin ja öin. Tarkastajat esiintyiwät yleensä maltillisesti, waikka kyllä poikkeuksiakin ilmeni.</p>
        <p>Myöhemmin wiikolla ilmestyi wielä julistus elintarpeiden luowuttamisesta rajahintoihin.</p>
        <p>Perjantai-iltana marssii wahwa asestettu punakaartilaisosasto lääninwankilaan. Osasto tunkeutui wankilan portista sisälle wastusta kohtaamatta. Wankilaan päästyään ryhtyi se heti 
          pidättämään muutamia wartioita sekä myöskin wankilan johtajan B. Andersinin. Pidätyksen syynä oli nähtäwästi wain suojeluskuntaan kuuluminen. Wartiat oliwat pidätettyinä keskimäärin 
          kaksi wuorokautta, jolloin heidät päästettiin wapaaksi pysyen kuitenkin edelleen punakaartin silmälläpidon alaisena. Wankilan johtaja ja wahtimestari jäiwät edelleen punakaartin 
          waltaan.</p>
        <p>Wenäläinen sotawäki, joka alussa näytti tehokkaasti ottawan osaa wallankumouksen toteuttamiseksi ei ainoastaan kaupungissa waan wieläpä yhdessä punakaartilaisten kanssa tehden 
          retkeilyjä maaseudulle, alkoi wiikon lopulla enemmän pysytellä syrjässä. Samalla se alkoi hankkia poislähtöä myyden kaupungin torilla hewosiaan. Hewoshuutokauppoja pidettiin useina 
          päiwinä perätysten yksin sunnuntainakin ja myytiin tällöin muutama sata hewosta. Hewosten hinnat oliwat tawattoman halpoja. Tawallisen työhewosen hinta waihteli 100-200 mk. waiheilla.</p>
        <p>Lauantaina tiukennettiin punakaartin kaduilla harjoittamaa walwontaa huomattawasti. Tämä nähtäwästi johtui Suomen pankin holwin murtamisyrityksestä, johon punakaartilaiset ryhtyiwät. 
          Yritys kuitenkin raukesi ja holwiin murtautujat onnistuiwat panssarioween saamaan wain sormenpäänkokoisen reijän. Murtautujien yrittäessä pankkiin tunkeutua oli koko kaupunki ympäröity 
          wartiostoilla eikä edes lähimmässä ympäristössä asuwia päästetty kaupungista poistumaan tunnussanaa tietämättä.</p>
        <p>Sunnuntaina oli elämä kaupungissa jälleen hiukan wapaampaa. Aamulla saapui kuitenkin ensimäinen murhawiesti läheisyydestä. Edellisenä yönä oli nimittäin joukko punakaartilaisia 
          tunkeutunut Ojoisten pehtoorin asuntoon ja ampuneet pehtoori Yli-Paawolan asuntonsa kynnykselle. Pehtoori Yli-Paawola oli jonkun aikaa ollut punakaartilaisten pidättämä, mutta sittemmin 
          wapautettu. Murhaan syyllisiä ei punakaarti saattanut mihinkään edeswastuuseen.</p>
        <p>Seuraawa wiikko kului jotenkin samaan tapaan kuin edellinenkin. Päiwittäin pidettiin torilla edelleenkin wenäläisten huutokauppoja. Punakaartilaisia liikkui asestettuina kaduilla. 
          Wäestön mieliala oli yleensä painostunut, minkä aiheutti miltei täydellinen tietämättömyys ulkomaailman tapahtumista. Lisäksi kiihdytti mieliä lukuisat tiedot punakaartilaisten 
          harjoittamista weritöistä. Jo wiikon alussa saapui tieto Hattulassa sunnuntai-iltana tapahtuneen maanwiljelijä K. O. Hakarin ja Walfrid Uotilan murhista. Kummankin murhasiwat 
          punakaartilaiset ilman mitään näkywää aihetta. Syyllisiä ei nytkään saatettu mihinkään edeswastuuseen. Wiikon keskiwaiheilla saapui Lopelta kamalia wiestejä punakaartilaisten siellä 
          harjoittamista murhatöistä, jotka tehtiin mitä raaimmalla tawalla. Kaikkiaan murhasiwat punakaartilaiset 7 henkilöä, Lopen iäkkään kirkkoherran Töyryn, joka murhaajien saapuessa makasi 
          sairaana wuoteessaan, Lopenpiirin nimismiehen Forsténin, joka oli kyllä Lopen punakaartilta saanut luwan matkustaa paikkakunnalta, mutta siitä huolimatta murhattiin poikansa silmien 
          edessä pakomatkallaan, maanwiljelijä I. Mäkisen, paikkakuntansa eturiwin miehen, Lopen elintarwelautakunnan sihteerin yliopp. Ilmari Laakson ja hänen weljensä, sekä kauppias Borgströmin 
          hänkin paikkakuntansa huomattawimpia henkilöitä. Murhien syitä ei ainakaan tällä hetkellä tunneta eikä punakaarti ryhtynyt wähimpiinkään toimenpiteisiin syyllisten saattamiseksi 
          edeswastuuseen teoistaan. Työwäen sanomalehdistö sekä paikallinen että pääkaupungin waikeni näistä kammottawista murhatöistä kokonaan. Wain Hämeen Woiman toimittaja Heikki Laakso, jonka 
          lehti jälleen wiikolla alkoi ilmestyä yksityisesti rohkeni panna wastalauseensa punakaartin murhia wastaan. Kunnia siitä miehelle.</p>
        <div className="interTitle">4.5.1918</div>
        <h5>III</h5>
        <p>Wiikon kuluessa jatkuiwat wangitsemiset ja pidätykset entiseen tapaan. Pidättämisen syyt oliwat perin heikot, tawallisesti ilmianto, usein perätön. Siitä huolimatta saattoi ilmiannettu 
          joutua wiikkokaudeksi ja kauemmaksikin aikaa wirumaan punakaartin wankisäiliössä. Pidätyksen syy saattoi toisinaan olla aiwan käsittämätönkin, niinpä eräs arwoisa kansalainen joutui 
          sellolaatikon kantamisesta wiikon ajan pidätetyksi. Samalla pidätettiin myöskin hänen seurassaan olleet kaksi henkilöä, joista toinen tosin muutaman tunnin kuluttua wapautettiin mutta 
          toinen, joka oli saapunut Helsingistä täysin laillisella passilla warustettuna lähetettiin irtolaisena kotipaikalleen, missä hänet kyllä heti wapautettiin. Samaten pidätettiin eräs 
          henkilö säärystimiensä wuoksi. Riittäwä syy pidättämiseen oli myöskin, jos joku henkilö sairauden tai jonkun muun esteen takia oli jonkun aikaa pysytellyt kotosallaan ja sitten 
          ilmestynyt kaupungille. Waarallinen oli myöskin n. s. pomppatakki ja pitkäwartiset saappaat, jotka molemmat yhdessä tai kumpikin erikseen saattoiwat olla syynä kansalaiswapauden 
          menettämiseen.</p>
        <p>Useimpain pidätysten ja kotitarkastusten syynä oliwat kuitenkin enemmän tai wähemmän julkiset ilmiannot. Koskaan ei ilmiantojärjestelmä ole wiettänyt sellaisia riemupäiwiään kuin näinä 
          „kansanwallan” aikoina. Ilmiantoja tehtiin niin lukuisasti, että niiden todenperäisyyden tutkijat wäsyiwät ja walittiwat uupumustaan. Ilmiannon aihe saattoi toisinaan olla hywin 
          eriskummallinen. Niinpä erästä henkilöä, jolla ei liene wähäisimpiäkään teknillisiä taipumuksia syytettiin langattoman lennättimen laittamisesta huoneeseensa. Erästä henkilöä syytettiin 
          walomerkkien antamisesta huoneestaan. Ilmiannettujen pidättäminen tapahtui useimmiten säädyllisyyttä noudattaen, mutta tapahtui kyllä niinkin, että 5—6 henkilöä hyökkäsi mitään 
          aawistamattoman kadulla kulkijan kimppuun ojentaen kiwäärinsä ja rewolwerinsa hänen päätään kohti. Samaten saattoiwat punakaartilaiset hyökätä rauhalliseen kotiin ja pistimet ojossa ja 
          kiwäärit kohti suunnattuina komentaa kädet ylös.</p>
        <p>Ilmiannettujen kuulustelussa ei alussa pidetty kiirettä. Niinpä alussa saattoi kulua useita wuorokausia ilman että heidän pidättämisensä johdosta annettiin minkäänlaista päätöstä. Jos 
          ilmianto hawaittiin aiwan perättömäksi, niin silloinkin waadittiin pidätetyllä kunniasana tahi sitoumus, ettei hän ryhdy mihinkään „wastawallankumouksellisiin” toimiin.</p>
        <p>Erityisinä silmätikkuina punakaartilaisilla kumouksensa alkupuolella oliwat paitsi pankkeja, koulut ja wirastot, näistä erikoisemmin kansakoulu ja postikonttori. Kansakoulua kaarti 
          useamman kerran koetti saada käyntiin, mutta hanke raukesi aina opettajiston wastustuksen wuoksi. Samaten oli postiliikenne pitkät ajat pysähdyksissä. Wihdoin saiwat he postinkantajat 
          toimiinsa ja yksinkertaisen postinjakelun käyntiin, postikonttorin wirkamiehet pysytteliwät kuitenkin toimistaan poissa. Rautatieliikenne oli kokonaan punakaartin hallussa, kaikki 
          wirkamiehet oliwat asemilta poissa. Junainkulku oli hankalaa. Wain harwoja junia kulki. Matkustaminen oli perin kiusallista punakaartilaisten turhantarkan nuuskinnan wuoksi. Niinpä sai 
          Hämeenlinnan ja Helsingin wälillä täysillä passeilla ja todistuksilla warustettu henkilö tawallisimmin 8 kertaa tarkastuttaa itsensä ja passinsa.</p>
        <p>Toinen kumouswiikko kului siten hiljalleen loppuunsa. Lauwantaina saiwat punakaartilaiset Helsingistä sulatuslaitoksen, jolla he wihdoinkin onnistuiwat saamaan Suomen pankin kassaholwin 
          auki. Saalis olikin melko runsas, wahän waille 3 milj. mk.</p>
        <p>Seuraawan wiikon alussa tapahtui Hämeenlinnan punakaartin keskuudessa päällikön waihdos. Kaartin päällikkö Tiiro ei ollut wäkijuomatakawarikkoja tehtäessä jaksanut olla walwomatta 
          myöskin omaa hywäänsä ja tässä tarkoituksessa hän oli antanut kulettaa yhden takawarikoidun konjakkilaatikon kotiinsa. „Takawarikoitsija” ei kuitenkaan ollut woinut olla maistamatta 
          saalistaan ja seuraus oli, että hän juopuneena esiinnyttään päämajassaan menetti wirkansa ja tuomittiin sodan loppuajaksi wankeuteen. Punakaartin uudeksi päälliköksi walittiin puuseppä 
          Hannes Laakso.</p>


      </Article>
      <Article titleText="Punaiset pyövelit.">
        <h5>Riihimäellä teurastaneet joukon wankejaan.</h5>
        <p>Pari maanwiljelijää, jotka sanomattomia kärsimyksiä kestettyään owat päässeet hengissä Riihimäellä tapahtuneesta wankien teurastuksesta, on U. S:lle kertonut, että Riihimäelle oli 
          raahattu maaseudun rauhallista wäestöä 7—8 tuhatta henkeä, maanwiljelijöitä, maatyöwäkeä, pari pappia, kauppiaita, wirkamiehiä j. n. e. Wangit pakoitettiin ottamaan aseet käsiinsä, 
          kunnes kasarmissa oli wain n. 500 sellaista, jotka siitä jyrkästi kieltäytyiwät.</p>
        <p>Kun sunnuntain ja maanantain wälisenä yönä taistelun melske rupesi kuulumaan kasarmiin, tekiwät nuo 500 jälelle jäänyttä wankia päätöksen, että he eiwät poistu minkään syyn warjolla 
          kasarmista ennen kuin taistelu on päättynyt. Kun punaiset saiwat tästä tiedon, toiwat he paikalle jalka- ja ratsuwäkeään, joka piiritti kasarmin. Sisälle kasarmiin tuli ratsumiehiä ja 
          punakaartilaisnaisia, jotka miehittiwät kaikki sisäänkäytäwät ja huoneet. Naispyöwelit nousiwat seisomaan tyhjille wuoteille asettuen ampuma-asentoon. Wangeille karjaistiin: poistutteko 
          wai ei? Ja kun ei kukaan hiewahtanu paikaltaan, kajahti yhteislaukaus. Kun ammuntaa, useasti yhteislaukauksittain, oli kestänyt liki neljännestuntia ja huoneet jo oliwat aiwan 
          walkoisenaan ruudinsawua, huusiwat kuolewat ja haawoittuneet, että kaikki, jotka kykenewät, poistuisiwat, koska kuolema joka tapauksessa olisi seurauksena. Kehoitusta totteliwatkin ne, 
          jotka oliwat wahingoittumattomina säilyneet, joukossa kuitenkin useita haawoittuneitakin. Kasarmin edustalla ympäröiwät ratsumiehet wankijoukon, jota lähdettiin kuljettamaan Riihimäen 
          asemalle päin.</p>
        <p>Joukkoa kuljetettiin sitten aseman eteläpuolella raiteiden yli kulkewaa maantiesiltaa kohti, jota lähetessä edessä ratsastaneet wartijat siirtyiwät taemmaksi. Mutta juuri kun oltiin 
          tulossa sillalle, juoksi toiselta puolen wastaan eräs punakaartilainen, joka huutamalla kehoitti joukkoa hajaantumaan, koska silta räjähtää siinä paikassa. Huudon kuultuaan hajaantuiwatkin 
          wangit siinä silmänräpäyksessä joka taholle kylään. Kun he oliwat ehtineet muutaman sadan metrin päähän, kuuliwat he takanaan maata tärisyttäwän jyrähdyksen sillan räjähtäessä ilmaan.</p>
        <p>Pakoon päässeet juoksiwat minkä jaksoiwat Riihimäen asemalta länteen päin wiewää maantietä pitkin. Arwiolta oli heitä nyt koossa parisatainen joukko. Tykkien jyrinä ja taistelun melske, 
          joka koko ajan oli kuulunut kauempaa, oli siirtynyt lähemmäksi ja pakolaiset joutuiwat keskelle saksalaisten shrapnellitulta. Juostessaan joutuiwat he niinikään kulkemaan kolmen 
          punakaartilaisten warustuslinjan läpi. Yksitoista tuntia pitkin metsiä, soita ja rämeitä kulkien, Hausjärwen pitäjässä olewan Isolan talon kautta kaartaen saapuiwat kertojat kymmenen muun 
          pakolaisen seurassa lopen näännyksissä wihdoin 10 tienoissa maanantai-iltana Hywinkäälle, jossa pääsiwät ystäwällisten paikkakuntalaisten hoitoon.</p>
        <p>Lopuksi mainittakoon wielä, että wankien kohtelu oli koko ajan raainta mitä ajatella saattaa. Useat onnettomista eiwät jaksaneetkaan tätä koettelemusta kestää. Useita 
          mielipuolisuuskohtauksia sattui.</p>
      </Article>
      <Article titleText="Urjalassa.">
        <h5>Murhattu 14 henkeä.</h5>
        <p>Punaisten hirmuwalta Urjalassa puhkesi heti alun pitäen weritekoihin. Jo helmikuun 3 päiwä waati ensimäiset wiattomat uhrit. Silloin pysäyttiwät punaiset Matkun asemalla ampumalla junan, 
          jolloin matkustajista kuoli kauppias K. G. Horsma.</p>
        <p>Samana päiwänä joutui 3 Mustialan maanwiljelyskoulun oppilasta julmain werihurttien uhriksi, yksi Tiirikosken talon pihalla, toinen n. k. Nummelan pihassa ja kolmas työwäen talossa. 
          Kaksi ammuttiin sen jälkeen kuin heidät oli pakoitettu riisuutumaan alasti ja luowuttamaan waatteensa telottajilleen. Näistä kolmesta murhatusta oli kaksi weljestä, mutta ei heitä wielä 
          liene tunnettu; kolmas oli nimeltään Palmroth ja kotoisin Pirkkalasta.</p>
        <p>Wielä löydettiin saman päiwän iltana Urjalan aseman ja Nissin talon wäliltä radalta 4 junassa surmatun miehen ruumiit. Löydettäessä oli yksi wielä sen werran woimissa että kykeni 
          ilmoittamaan olewansa kotoisin Kiikasta tahi Kiikoisista.</p>
        <p>Helmikuun 7 päiwänä murhattiin maanwiljelijä Juho Jussuri (Wiinikka) Wälkkilästä. Hänen ruumiinsa löydettiin parin päiwän perästä erään torpan perunakuopasta 1 km. päässä talosta, 
          kokonaan ryöstettynä; päällyswaatteetkin oli wiety. Kurkku oli wiilletty poikki ja ampumahaawa kyljessä.</p>
        <p>Ennenkuin wainajaa lähdettiin wiemään kotoaan oli hänelle sanottu „pitkän matkan” olewan edessä ja kehoitettu ottamaan mukaansa rahaa wähän enemmänkin.</p>
        <p>Urjalan kirkossa, jossa oli punaryssien wankila, murhattiin eräänä yönä wiisi wangittua, niistä 4 Mustialan koulun oppilasta.</p>
      </Article>
      <Article titleText="Sääksmäki.">
        <h5>Punaisten roistojoukkojen häwitykset.</h5>
        <p>Ennen poislähtöään Sääksmäen Metsäkansasta toimittiwat punaiset nykyisin perin tunnetuksi tullutta häwitystyötänsä. Noin 25:destä Metsäkansan alueeseen kuuluwasta talosta on nykyisin 
          parikymmentä taloa raunioina. Harwoissa taloissa on jäänyt jälelle sauna tai riihet, siinä kaikki. Monissa taloissa on ihmisille jäänyt waan waatekerta päälle kaikki muu on mennyt. 
          Hiiltyneitä eläimen ruhoja, sikoja, lampaita, lehmiä ja hewosiakin on palaneissa nawetoissa ja talleissa.</p>
        <p>Kun punaset näitä murhapolttojaan tekiwät, saattoiwat he samalla isäntien ja muiden talon wäkien hengen kauheaan waaraan. Erittäinkin etsiwät nuo hornanhenget isäntiä murhatakseen ja 
          tappoiwatkin ainakin neljä talonisäntää yöllä wiime torstaita wastaan. Samalla kulmakunnalla owat he perääntyessään tappaneet Walkeakosken tehdaskylässä wangiksi ottamiaan Walkeakosken 
          toimihenkilöitä tuntemuksemme mukaan 22, joiden joukossa insinööri Wendt, kasööri Pehrman, hrat Ohlsson, Nyqwist y. m. maanwiljelijä Öllenberg, Konhon kartanon entinen isäntä, maanwilj. 
          Kustaa Laine y. m. joista meillä wielä ei ole tarkempia tietoja.</p>
        <p>Kuin ihmeen kautta owat pelastuneet jo ammunnan alaisina olleet pastori Mustala ja hra Saukko.</p>
        <p>Sääksmäen Saarioispuoli on joutunut perinpohjaisen ryöstön ja raaston alaiseksi. Nyt on Sääksmäki wapaa, sillä wiimeiset punaiset poistuiwat sieltä kuudella laiwalla ja lotjalla 
          ryöstettyine tawaroineen ja perheineen wiime perjantai-aamuna klo 4 korwissa siwuuttaen Huittulan ja Salonkylän tienoot. He poistuiwat aikaisemmin laiwoille aukaisemaansa reittiä pitkin 
          Hämeenlinnaa kohti. Kuulemamme mukaan lienee yksi laiwa upotettu Tyrwännön selällä.</p>
        <p>Wiimeisimpiä taisteluja käytiin Sääksmäellä Lotilan kartanon maalla lähellä Walkeakoskea, jossa taistelussa punasia kaatui kolmatta sataa. Taistelu kesti wain 15 minuuttia, jonka 
          jälkeen walkokaartilaiset marssiwat Walkeakoskeen.</p>
      </Article>
      <Article titleText="Riihimäen valtaus.">
        <h5>Sotasaalis</h5>
        <p>Eräs Riihimäen waltauksessa mukana ollut henkilö on sanomalehdille kertonut waltauksesta ja sen tuottamasta sotasaalista m. m. seuraawaa:</p>
        <p>Rautatielinjaa pitkin etenewät joukot saiwat jo taistelun alkuwaiheessa haltuunsa suuren sotasaaliin. Jonkun matkan päässä Riihimäen ja Wantaan kylän tällä puolella tawattiin 
          rautatiellä seisomassa pitkä juna. Lähellä olewalta metsän peittämältä mäentöyräältä awattiin tykkituli ja juna wallattiin. Kolmas kraanaatti osui erääseen junan etupäässä olewaan 
          waunuun, jossa oli räjähdysaineita. Tästä aiheutunut räjähdys tuhosi kaiken, mitä lähellä oli. Ilmaan lensi palasiksi pirstautuneita ratakiskoja, tykkejä ja sotatarpeita. Myöskin 
          lähellä olewat talot sortuiwat.</p>
        <p>Junaa kuljettawa weturi porhalsi pakoon täydellä wauhdilla wieden mennessään muutaman siihen kytketyksi jääneen waunun. Hyökkääjäin saaliiksi jäi 47 waunua, jotka sisälsiwät tawattoman 
          runsaan sotasaaliin. Waunuissa oli 454 kiwäärilaatikkoa, kussakin 20 kiwääriä, 1,295 kranaattilaatikkoa, joissa oli kussakin 20 kranaattia, noin 1,000 laatikkoa ampumatarpeita, 4 
          kuularuiskua, 8 tykkiä, 2 miinanheittäjää, 262 laatikkoa käsikranaatteja, suuri määrä nahkahihnaa, satuloita y. m. Sitä paitsi oli sotasaaliin joukossa satakunta kirjoituskonetta, 
          (nähtäwästi Helsingin wirastoista ryöstetyt), 10 paalua willaa, suuri määrä elintarpeita, pääasiallisesti leipää, mutta myöskin maitoa ja muuta.</p>
        <p>Punaiset pakeniwat warta wasten walmiiksi järjestetyillä junilla pohjoista kohden Hämeenlinnaan päin. Kuten tiedetään, on Toijala erikoisessa piiritysrenkaassa, joten punasten 
          peräytymistie nousee pian pystyyn, samoin kuin itäänpäin lähteneen 50 waunua käsittäwän panssarijunan, joka on pysäytetty Herralassa, jollei ennen. Punasia arwellaan Riihimäellä olleen 
          noin 13,000 miestä. Mutta he eiwät pystyneet pidättämään woittoihin tottuneitä joukkoja. Punaisten riweissä taisteli useita naisia, joista muutamat oliwat pukeutuneet miehenpukuun.</p>
      </Article>
      <Article titleText="Tunnelma ainoa laatuaan.">
        <p><span className="accent">Perjantaina klo 3 ehtoopäiwällä.</span> Wanhan Birger Jaarlin kaupungin kadut yhä autiot muista kansalaisista paitsi „punaisista” aseniekoista. Ryöstetyt ja 
        ryöstämättömät myymälät kiinni. Asuntojen katuowet lukossa. Naiset ja lapset hoitelewat warowaa tähystelyä ikkunoissa ja ilmoittawat punakaartilaisten kuhinan jatkuwan ennallaan. 
        Pihateitse liikutaan sen werran, että wiesti lewiää parista uudesta järjettömästä murhasta. Linnassa säilytetyille wangeille — porwareille, sillä kaikki rikolliset on aikaisemmin päästetty 
        wapaiksi — kerrotaan kuolemantuomio julistetuksi. Perheenisät ja wanhimmat pojat, jotka owat wielä wälttäneet pakkotyön ja rintamaanwiemisen apajakerääjiä, huoahtelewat ullakkopiiloissa ja 
        waatekaappien peittämissä konttorikomeroissa.</p>
        <p><span className="accent">Kello 4.</span> Alkaa olla kuuluwinaan laukausten jymyä. Asuntoani wastapäätä lukusalissa majailewa punakaartilaisosasto saa kaikuwan käskyn: „Kaikki miehet 
        riwiin!” Ikkunawerhojen raoista nähdään heidän kiireisesti järjestäytywän, pieniä poikasia mukana, muutamilla kaswot harmaina pelosta, horjuen. Entisen remun sijasta synkkä katsanto 
        kaikilla. Siinä menewät nekin turkulaiset, jotka wiime yönä istuiwat ulko-oweni porraskiwellä keskustelemassa, miten tänä iltana pistetään talot täällä roihuamaan, jos alkaa huonosti 
        käydä.</p>
        <p><span className="accent">Kello 5.</span> Kaupunki aiwan tyhjillään. Roistokratian edustajat owat joutuneet lähtöön ihan äkillisesti. Ankara pamaus aiwan lähellä. Yhä uusia. 
        Rautatieaseman tienoo alkaa palaa. Pian on itse asemakin ilmiliekeissä, hehkuen kilpaa lenseän kewät-ehtoopäiwän auringonhohteen kanssa. Owatko punakaartilaiset räjähdyttelemässä taloja — 
        hehän owat niitä miinoitelleet — wai walkoistenko tykit tekewät työtänsä? Tutisuttawa räjähdys järäyttää kaupungin perustuksia, ja sen paikka ilmenee, kun nähdään puhelinkeskus-aseman 
        kohdalta sawun nousewan. Ja jo wiuhuu shrapneleja ilmassa kaupungin yli asematielle, Hattelmalan harjulta päin. Pihaamme putoaa kuuma pomminsiru. No, wapauttajatkin siis joka tapauksessa 
        owat lähellä.</p>
        <p><span className="accent">Kello 7.</span> Pamahdukset taukoawat. Täysi hiljaisuus, wain kuularuiskujen rätinää jossakin. Olisiko näiden tuhansien, jotka kaikilta suunnilta oliwat 
        peräytyneet pitämään kaupunkia hallussaan, onnistunut torjua ensimäinen awunyritys? Uskaltaudutaan ulos kotinurkkiin katselemaan. Ei näy mitään punaisen hirmun merkkiä enää. Kitkerää 
        sawua liirii ilmassa. Pari tulipaloa itse kaupungissa. Aseman seutu yhäti lewiäwänä tulimerenä. Mitä? Walkoinen lippuhan liehuu lääninhallitus-rakennuksen katolla Kaupunginhotellin 
        wieressä, jossa punaisten esikunta on sijainnut! Ja raatihuoneen katolla! Porwarilliset owat heränneet huomaamaan, että kaupunki onkin jätetty heille. Torille alkaa ilmaantua yksitellen 
        wäkeä, — pian ryhminäkin. Etäältä kuuluu hurrausta. Auttajat todella tulewat! Palokunta yrittää sammutella torin alakulmassa Olanderin apteekkirakennusta. Kuullaan, että siihen sattuneen 
        shrapnelin siru on surmannut läheisen muotikaupan omistajattaren ja että riwakka palomestarimme on saanut toisen sirpaleen päähänsä, järjestäessään puhelinkeskuksen sammutusta. Samassa 
        ilmestyy Myllymäen kaupunginosasta päin pieni soturiryhmä. Kypärilakit kuten wiimeksi punaisilla. Kentänwihreät takit. Reippaan näköisiä nuoria miehiä, hiestyneitä ja wäsyksissä silti. 
        Nenäliinat liehuwat, hurrataan wimmatusti, silmät sumeina Riennän puhuttelemaan etumaista, näköjään pohjalaista.</p>
        <p>„Mistä ihmeestä te tulette? Me olemme eläneet ihan hornan ahdistuksessa!”</p>
        <p>„Wie?”</p>
        <p>Mitä! Walehtelewatko korwani. „Zum Teufel, können sie Deutschen sein?”</p>
        <p>„Jawohl. lch bin ein Berliner.” Ranskan rintamalla taistellut, nyt oliwat tulleet auttamaan suomalaisia.</p>
        <p>Kuin säkissähän me olimme eläneet. Ennen äärimäistä sulkutilaa olimme huhuna kuulleet, että saksalaisia oli noussut maihin — mutta sen huhun todenperäisyys oli kiwenkowaan kielletty 
          punaisten taholla, ja suupuheet oliwat lopulta menettäneet kaiken uskottawuutensa.</p>
        <p>Rajattoman riemun pauhinassa saatellaan tätä pienoista etujoukkoa sen marssiessa suoraa päätä wankilaan. Omaa kohtaloansa peljäten owat punaisten asettamat wartijat suojelleet siellä 
          kaittawiansa. „Maamme”-laulu kiirii ilmoille, kun tuttujen arwohenkilöiden jono pääsee sieltä ulos. Kalpeita, parroittuneita, huumaantunelta hengen ja omaisuuden turwan äkillisestä 
          paluusta.</p>
        <p><span className="accent">Kello 7.</span> Jälleen torilla. Kaikki asujamisto koolla. Ripeätä soturiwäkeä saapuu suuremmin joukoin. „Maamme” laulun säweleet wyörywät uudestaan ja entistä 
          waltawammin ilmoille. Saksalaiset ryhmittywät, ja harjaantunein äänin jyrähtää „Din Wacht am Rhein” kesäisen ilan ihanuuteen, „Lieb' Vaterland, magst ruhig sein!” Saat todellakin olla 
          huoletta tulewaisuudestasi, sinä saksalaisten isänmaa, jonka kunto riittää muidenkin isänmaan järjestywistä kohtaloista huolehtimaan oman suunnattoman sotataakkasi ohella. Nuo 
          terwekatseiset, todelliset miehet owat warma warjeluksesi. Pyhä innostus paisuttaa satoja powia, jotka eiwät kuukausimäärin ole täysin keuhkoin hengtttäneet. Woimalliset säweleet 
          kiiriwät, saksalaisen kunnon mahtawana kuorona — ja säestäjänään wiereisen kirkkomme palotorwi torin yläpäässä, yhä säännöllisesti törähdellen, sekä liekkipatsaan ritinä apteekin 
          katolla torin ali päässä. . .</p>
        <p>Tämä on todella ainoalaatuinen tunnelma. . . arwaamattoman harwinainen loppu raa'alle hirmuhallitukselle, joka kansanwallan nimessä nousi kapinaan kansanwaltaa ja isänmaan itsenäisyyttä 
          wastaan julman harwainwallan woimaansaattamiseksi weriwihollisemme awulla.</p>
        <p>Tuotapikaa lankeaa tenho. On ryhdyttäwä käytännölliseen järjestelyyn. Nopeasti waihdetaan samalla kuulumisia, terwehdyksiä towerien kanssa. „Ka, sinä siis elät!” „Missä sinua on 
          piinattu?” „Otan osaa — huomaan suruharson hihassasi. — Niin, poikani teurastiwat, ne paholaiset.”</p>
        <p>Illan warjot laskeutuwat. Aiottiin järjestellä majoitusta — mutta saksalaiset oliwat jo järjestäneet, merkiten talojen owiin, montako miestä kuhunkin tulee; niin yksinkertaista! 
          Puhelinkeskuksen katolla heitä oli jo laittelemassa lankoja . . . Kaikki kunnossa kohtiseltään. Oi, järjestystä — mitä siunausta sen tajuammekaan nyt olewan enemmän kuin koskaan ennen.</p>
        <p>Lännessä hiipuu wapautuksen päiwä. Idän taiwaalla hehkuu palawien kylien loimu niiden punakaartilaisten jäljiltä, jotka maatansa wiimeistä kertaa häwittäen yrittäwät sitä kautta pyrkiä 
          rajantakaisten bolshewikkien syliin uutta kostosotaa walmistelemaan. Mutta he owat kaswattaneet taaksensa woiman, joka ei enää ole yllätettäwissä.</p>
        <p>Tykit jymähtelewät wielä kuuluwissa. Huomenna kait aletaan jo päästä muun maailman yhteyteen. Kuulemme sanomia suuresta sodasta ja Suomen suurista kärsimyksistä. Meidän on odotettawa 
          tihutietoja kansallisista waurioista, ystäwien ja omaisten kuolinsanomia; suuri sarja raskaita wiestejä on kerääntynyt warallemme. Mutta meillä on nyt wapaus wiimewuotisesta 
          matelemisesta roskawäen armoilla ja näiden kuukausien järkyttäwästä painajaisesta — työn ja toiminnan wapaus, kansamme pelastamisen wapaus.</p>
        <p>Minä luulen, että meidän hywä kaupunkimme sitäennen tänä yönä nukkuu, huolettoman lapsen unta pitkästä aikaa jok'ainoa laintuntoinen asukas. </p>
        <p className="centered">26.4.1918</p>
        <p className="signature">W. H.-A.</p>
      </Article>
      <Article titleText="Kauhunaika Wiipurissa.">
        <p>Wiipurissa oliwat kapinalliset wanginneet sadottain ihmisiä. Wankien kohtelu on ollut mitä epäinhimillisintä, niin että se on aiheuttanut m. m. ulkowaltain konsulien yksimielisen 
          wastalauseen. Pääkiduttajana riehui „itäisen rintaman ylipäällikkö” entinen rangaistuswanki H. Kaljunen, joka aina uhkaili kuolemalla wangittuja.</p>
        <p>Uudella woimalla alkoiwat kidutus- ja  wainotoimet, kun suuret taistelut Antrean - Jääsken sekä Raudun - Raasulin rintamalla päättyiwät punaisten häwiöön ja Wilppulan tappio pakoitti 
          punaisen hallituksen siirtymään Wiipuriin, ollakseen walmiina luikkimaan itäisen rajan taakse. Raudussa ajettuaan taistelurintamansa edellä joukottain lapsia ja talollisten waimoja ja 
          tyttäriä suojamuurinaan walkoisia wastaan, päättiwät Turkia ja kumppanit ryhtyä samaan keinoon muillakin Karjalan rintaman osilla. „Porwarit” piti wiedä kaikki rintamaan ja asettaa 
          heidän joukkojensa eteen, walkoisten ammuttawiksi. „Täältä Wiipurista me emme enää eläwinä lähde, tänne me jäämme; mutta meidän jälkeemme ei tänne ole jääwä ainoata porwariakaan henkiin” 
          — kuuluu lausuneen eräs tunnettu punaisten edusmies ja heidän hallituksensa tärkeä toimihenkilö. Ja huhtikuun 8 p:stä julistettiin pakollinen mobilisoiminen kaikille 16 — 55 wuotisille 
          „säätyyn ja yhteiskunnalliseen asemaan katsomatta”.</p>
      </Article>
      <Article titleText="Tasavallan armeija saanut suuria voittoja.">
        <h5>- Parola, Walkiakoski, Hämeenlinna y. m. tärkeitä paikkoja walloitettu.<br />- Wiipuri täydellisesti saarrettu.<br />- Kullerwo Mannerin pyyntö sowinnonhieromisesta hyljätty.<br />- Paljon 
        wankeja ja sotasaalista.</h5>
        <p>Päämajan tiedonanto 27 pnä huhtik. 1918 klo 5,40 ip.</p>
        <p><span className="accent">Länsi-armeijan</span> joukot owat walloittaneet Parolan, missä 40 tonnia punaisten wiljaa takawarikoitiin.</p>
        <p>Eilen wallattiin Walkiakoski Alwettulassa. Lehdesmäellä, Tuuloksessa yöllä taisteluita, kaikki wihollisen hyökkäykset torjuttu.</p>
        <p><span className="accent">Sawon joukot:</span> Kiiwaan taistelun jälkeen owat joukkomme wäkirynnäköllä ottaneet wihollisen asemat 1 kilometrin päässä Hillonsalmelta pohjoiseen. Niinikään 
          miehitettiin taistelun jälkeen Waltolan ja Kääwän kylät.</p>
        <p><span className="accent">Itäarmeija.</span> Jääkärikapteeni Sarlinin joukko walloitti eilen Lappeenrannan, jolloin kolme tykkiä, tuhansittain kiwäärejä, ampumatarpeita y. m. joutui käsiimme; 
          kaksi tykkiä, joita wihollinen yritti kuljettaa jään yli Taipalsaarelle, upposi.</p>
        <p>Ewerstiluutnantti Sihwon joukot owat tänä aamuna katkaisseet rautatieradan Howinmaan luona.</p>
        <p>Kenraalimajuri Wilkmannin ryhmä on täydellisesti saartanut Wiipurin Lawolan, Suomenwedenpohjan ja Wiipurin lahden puolelta.</p>
        <p>Ewersti Ausfeldin ryhmä on miehittänyt koko rautatielinjan Säiniöltä rajasille, wallannut Kuolemajärwen ja Uudenkirkon. Muolan kirkonkylässä Oinolassa ja Perkjärwellä otti wänrikki 
          Sihwo kaikkiaan 5 tykkiä, 14 kuularuiskua, 400 kiwääriä, suuren joukon käsigranaatteja sekä 500 wankia. Punaisten johtajat, entinen puheenjohtaja Manner etunenässä, owat sowinnonhierojan 
          lipun suojassa eilen klo 12 päiwällä pyytäneet neuwotteluiden alottamista, mikä hyljättiin, meidän waatiessamme ehdotonta antautumista. Kronstatista on Inoon saapunut 500 miestä 
          wenäläisiä joukkoja sekä dreadnought „Respublika”.</p>
        <p><span className="accent">Saksalainen Itämereren diwisioona:</span> Wolffin prikaati walloitti t. k. 26 päiwän iltana Hämeenlinnan ja ajaa takaa wihollista Lammille ja Tuulokseen päin. 
          Saatu suuri sotasaalis. Lahden seudulla jatkuu taistelu. Karjan—Hywinkään rataosa puhdistettu wihollisista.</p>
        <p className="centered">Päämajoitusmestari</p>
        <p className="signature">Ignatius.</p>
      </Article>
      <Article titleText="Helsingin waltaus.">
        <p>Torstaina huhtik. 17 p. alkoi Albergan suunnalta kuulua Helsinkiin ankaraa tykkien jyskettä, mikä tiesi että Helsinki pian oli wapautuwa punaisesta painajaisesta. Saksalainen lentokone 
          liiteli kaupungin yllä pudottaen suomen ja ruotsinkielisiä julistuksia, joissa ilmoitettiin maihinnousseiden saksalaisten pääjoukkojen joiden komentaja oli kenraali von der Goltz 
          perinpohjin woittaneen punakaartin Karjan aseman lähettywillä ja etenewän Helsinkiä kohti. Rauhallisia asukkaita kehoitettiin olemaan turwassa. Punakaartilaisille luwattiin taata henki, 
          jos heittäwät pois aseensa ja merkkinsä, mutta ankarin sotalakien mukainen kohtelu, jos yrittäwät toiwotonta wastarintaa.</p>
        <p>Iltapäiwällä alkoi tykkien jyske kiihtyä ja kumeisiin jymähdyksiin sekaantui kuularuiskujen rätinä. Kaupungissa olewien punakaartilaisten keskuudessa alkoi ilmaantua hermostuneisuutta, 
          mutta kaikesta päättäen aikoiwat he yrittää wastarintaa wiimeiseen saakka. Huopalahden suunnalle kulki komppania komppanian jälkeen apuwäkeä, auto auton perään kuletti sinne 
          kuularuiskuja ja ampumawaroja. Pakolaisia alkoi pitkin läntistä Wiertotietä saapua kaupunkiin.</p>
        <p>Yöllä ammunta taukosi. Aamulla alkoi se uudelleen, tällä kertaa paljon lähempänä. Taistelu riehui jo tällöin tullin tienoilla. Ennen pitkää oli se siirtynyt sokeritehtaan seudulle. 
          Jonkun ajan kuluttua alkoi saapua autoja ja miehiä jotka katosiwat Heikinkadulle. Näkyi että punaisten wastarinta oli murtunut. Wiertotietä pitkin marssi warowasti parikymmentä 
          wihreisiin uniwormuihin ja kypäriin puettua saksalaista tuoden mukanaan kuularuiskun, jonka he sijoittiwat Wiertotien ja Pohjois-Rautatienkadun kulmaukseen awaten tulen Heikinkadulle 
          päin. Samaan aikaan pakeniwat punaset myös Töölön länsi-osassa. Töölö oli puhdistettu. Katuja pitkin marssiwat saksalaiset otetaan wastaan innostuksella, miehet kukitetaan, heille 
          tarjotaan sawukkeita, woileipiä ja wirwokkeita.</p>
        <p>Hetken kuluttua taistelu alkaa uudelleen. Töölöstä paenneet punakaartilaiset owat sijoittautuneet Turun kasarmiin awaten tulen sen akkunoista. Saksalaisten kuularuiskut ja konekiwäärit 
          wastaawat. Kun taistelua on jonkun aikaa kestänyt syttyy kasarmi palamaan. Tästä huolimatta wastarinta jatkuu ja wielä lauantaina kuuluu kasarmista laukauksia. Useimmat kasarmin 
          puolustajista oliwat tällöin jo kuitenkin joko saaneet surmansa tai paenneet. Lauantaina iltapäiwällä kasarmi waikeni.</p>
        <p>Tälläwälin oli kaupungissa ollut suojeluskunta alottanut taistelun. Punasten pääwoimat oliwat keskittyneet Heikin- ja Aleksanterinkadun kulmaukseen, missä ne tykistön ja panssariautojen 
          tukemana parin tunnin ajan pitiwät puoliaan. ½6 tienoissa saksalaiset waltasiwat kuitenkin heidän asemansa. Punasten seuraawa warustus Ruotsalainen teatteri antautui n. tunnin kuluttua. 
          Sitä ennen oli antautunut Koiton talo, jonne Turun kasarmista oli paennut n. 250 punakaartilaista.</p>
        <p>Iltapäiwän kuluessa puhdistiwat saksalaiset ja suojeluskuntalaiset kaupungin länsiosan, joissa syntyi taisteluja m. m. Hietalahden satamassa, Isolla Roobertin kadulla, Engel-aukiolla, 
          Eiran luona ja Pietarin kadulla. Iltaan mennessä oli suurin osa aluetta walloitettu, muutamia yksityisiä taloja wallattiin seuraawana aamuna.</p>
        <p>Perjantain kuluessa puhdistettiin myöskin Rautatieaseman puoli ja Katajanokka. Wiimemainitun waltasi 300 salsalaista merisotilasta.</p>
        <p>Warhain lauantaiaamuna waltasi 15 miehinen saksalainen osasto Kaartin kasarmin, jota puolusti 30 punasta. Kasarmissa olleet 200 wankia wapautettiin. Samalla wallattiin myöskin 
          Uusmaalaisten talo.</p>
        <p>„Smolnan” wihatun punasen hirmuwallan pesäpaikan wuoro tuli lauantaiaamuna klo 6 tienoissa, jolloin saksalaiset alkoiwat sitä ahdistaa. Talossa oli paljon punakaartilaisia ja oli se 
          hywin warustettu. Jouduttuaan ahtaalle nosti talo pari kertaa hengähdysaikaa saadakseen walkean lipun ryhtyen tämänjälkeen kuitenkin uudelleen taisteluun. Tästä kiihtyneinä saksalaiset 
          waltasiwat talon klo 10 tienoissa tulisella wäkirynnäköllä.</p>
        <p>Senaatin taloon ja sitä ympäröiwiin rakennuksiin sekä työwäentalolle oliwat punaset koonneet suuria joukkoja. Tehdäkseen taistelusta pikemmin lopun saksalaiset awasiwat taloja wastaan 
          tulen laiwoista. Seurauksena oli, että punaset komppania komppanian jälkeen alkoiwat antautua. Samalla antautuiwat myöskin Uudenmaan kasarmissa ja realilyseossa olleet punaset. Kaikkiaan 
          on antautuneita toista tuhatta. </p>
        <p>Seuraawina päiwinä jatkui Pitkän sillan takaisten kaupunginosien Siltasaaren, Kallion ja Sörnäisten puhdistaminen. Täällä tawattiin suuria asewarastoja tykkejä, kuularuiskuja, 
          tuhansittain kiwääreitä ja joukottain ampumatarpeita. Punaisten joukot pakeniwat kaikkialla heittäen aseensa. Yksityiset joukot keinoista wälittämättä koettiwat kuitenkin yhä tehdä 
          wastarintaa. Puhdistustyö jatkui tämän wuoksi useita päiwiä.</p>
      </Article>
      <Article titleText="Tampereen valloitus.">
        <h5>Taistelut tavattoman verisiä.</h5>
        <p>„Åbo Underrättelser” on saanut Tampereen taisteluista Vaasan kautta t.k. 6 p. päivätyn kuvauksen, joka osoittaa että kaupungin valloittaminen on maksanut paljon verta ja aiheuttanut 
          kaupungille suuria vaurioita.</p>
        <p>Kirjeen lähettäjä ilmoittaa Tampereella saatujen vankien lukumäärän nousevan 8,000. Taistelussa on kaatunut 2,000 henkeä. Punaisia oli 1,000 miehen onnistunut päästä pakenemaan Kuruun 
          päin, mutta on heidät myöhemmin otettu kiinni.</p>
        <p>Vaikka kaupunkiin oli pudotettu lentokoneista kenraali Mannerheimin julistuksia, joissa ilmoitettiin vastarinta turhaksi ja kehoitettiin luopumaan aseista, jatkoivat punaiset mieletöntä 
          vastarintaansa.</p>
        <p>Kaupungin valloitukseen otti osaa m. m. 341 miestä käsittävä ruotsalainen brigadi kapteeni Fritsellin johdolla. Brigadi joutui tuleen pääsiäisen edellisenä torstaina, jolloin se sai 
          klo 9 aikaan aamulla määräyksen sijoittua Tampereen itäpuolelle jossa sen lähimpänä tehtävänä oli metsän puoleisen seudun vihollisesta puhdistaminen ja sitten marsittava kaupunkia 
          kohti. Ruotsalaiset ryhtyivät reippaasti toimeensa joutuen kahdelta puolen sivusta tulen alaisiksi, joka aiheutti mieshukkaa kahden tunnin ajan.</p>
        <p>Pääsiäislauvantain taistelut olivat kiivaimmat koko sodan aikana ennen sitä. Punaiset puolustivat asemiaan vimmatusti. Vangit kertovat punaisten toimeenpanneen katutaisteluja, joista 
          syntyi suorastaan verilöylyjä. Sairasvaunut kulkivat lakkaamatta pohjoiseen täynnä haavoittuneita.</p>
        <p>Huhtik. 1 p. ilmoitettiin, että Tampereen valloitus oli osoittautunut paljon vaikeammaksi kuin mitä yleensä oli luultu. Hyökkäyskolonnat tulivat mitä suurimmasta urhoudesta huolimatta 
          verisesti pysäytetyiksi ja kärsivät monin paikoin tavattomia vaurioita. Lopullinen rynnistys kaupunkiin oli jo kerran määrätty, mutta joukkojen säästämiseksi siitä luovuttiin ja sen 
          sijaan alettiin työläiskortteleita vastaan yleinen pommitus. Kortteleissa syttyi tulipaloja. Punaiset sijoittivat talojen katoille kuularuiskuja myyden henkensä kalliisti. Kirjeen 
          lähettäjän taistelukuvaukset päättyivät pääsiäisillan taisteluihin, ilmoittaen vain lopuksi edellä mainitut vankien ja kaatuneiden määrät.</p>
      </Article>
      <Article titleText="Turun vapauttaminen punaisista.">
        <h5>Tapahtunut verrattain rauhallisesti.</h5>
        <p>Eräs turkulainen, joka vaivaloisen matkan jälkeen on torstaina saapunut tänne, on Hbl:lle kertonut viime päiväin tapahtumista Turussa m. m:</p>
        <p>Ennen punaisten lähtöä Turusta höltyi järjestys entisestäänkin. Usein nähtiin juopuneita kaduilla, varsinkin sen jälkeen, kun punaiset olivat ryöstäneet viimeisetkin väkijuomat 
          Nordforsin varastosta.</p>
        <p>Torstaina t. k. 4 p. saatiin tietää, että suojeluskuntalaiset olivat rikkoneet Turun—Toijalan rataa, jota punaiset olivat ahkeraan käyttäneet joukkojensa siirtämiseksi pois kaupungista. 
          Punaiset saivat kuitenkin radan seuraavana päivänä korjatuksi, niin että he voivat edelleenkin tyhjentää uhattua kaupunkia joukoistaan. Kaikenlaisia huhuja oli kiertelemässä punaisten 
          aikeista. „Diktaattori” Lungberg jäi kaupunkiin aina viime hetkeen asti ja kerrottiin hänen omakätisesti ampuneen kolme punakaartilaista, koska näiden ei ollut onnistunut aiheuttaa 
          rannikkoradalle tarpeeksi suuria vaurioita. Vangitsemiset jatkuivat viime hetkeen asti.</p>
        <p>Kaupungin puhdistaminen punaisista tapahtui sitten jokseenkin vaivattomasti. Kertoja itse, ent. poliisi, oli perjantaina klo 12 aikaan päivällä riisunut suurella torilla muutamia 
          punaisia aseista ja tämä oli tietenkin merkkinä yleiseen vapautukseen. Klo 2 aikaan päivällä ryntäsi 100 punaista asemalta kaupungin keskustaan, jolloin laukaustenvaihtoa syntyi m. m. 
          lähellä toria. Ketään ei kaatunut ja haavoittuneitakin oli vain muutamia. Pian ajettiin punaiset takaisin pesäänsä asemalle. Iltapäivällä vallitsi kaupungissa täydellinen rauha ja 
          väestö liikkui suurin joukoin kaduilla.</p>
        <p>Perjantai-iltana t. k. 5 p. matkustivat viimeiset punaiset Turusta Toijalaan päin. Lauantaina sai valkokaarti apua kahden miinalaivan ukrainalaisilta sotilailta, jotka lähettivät 
          kaupungille patrulleja. Aikaisemmin olivat punaiset tahtoneet riisua ukrainalaiset aseista, mutta nämä panivat vastaan ja punaisten oli luovuttava yrityksestään menetettyään muutamia 
          kaatuneita.</p>
        <p>Perjantaista alkaen oli tietysti valkokaarti toimessa päällikkönsä eversti Westmanin johdolla. Maanantaina saapui saaristosta pieni valkokaartilaisjoukko ruotsalaisen kapteenin kreivi 
          Ehrensvärdin johdolla. Nämä kehoittivat nyt ukrainalaisia luovuttamaan aseensa, minkä nämä tekivätkin ilman muuta.</p>
        <p>Punaisten ottamat vangit oli vapautettu jo torstaina, kun punaiset olivat kuulleet huhun, että saksalaiset ryhtyisivät asiaan, ellei vapauttaminen tapahtuisi. Perjantain vastaisena yönä 
          lienevät punaiset räjäyttäneet satamassa 15 suurempaa ja pienempää laivaa. Kertojan sanojen mukaan ovat punaiset pahoin turmelleet puhelinasemaa ja kirjapainoja sekä ryöstäneet m. m. 
          tullikamarin ja Hummelinin tupakkatehtaan.</p>
      </Article>
      <Article titleText="Porin walloitus.">
        <h5>Tapahtunut t. k. 13 p:nä.</h5>
        <p>Walkoiset marssiwat Poriin lauantaina t. k. 13 p., ensimäisenä luutnantti Lissisen johtama Porin rykmentin kolmas komppania, joka edellisenä yönä oli pistimin woittanut wiholliset 
          Ruosniemessä, kaupungista 6 km. koilliseen. Yhtaikaa nousi toinen komppania maihin Mäntyluodossa ja miehitti Poluksen jääkäri Sundellin johdolla. Ennen pakoaan punakaartilaiset 
          toimittiwat tawanmukaista häwitystyötään, polttiwat rautatieaseman, räjäyttiwät siltoja ja upottiwat laiwoja, tehden wielä roswouksia lisäksi.</p>
        <p>Walkoiset saiwat 450 wankia ja paljon sotasaalista, m. m. eräitä wenäläisiä sotalaiwoja. Maanantaina oli sitten Porissa sotilasparaati, jolloin Porin rykmentti sai oman lipun.</p>
      </Article>
      <Article titleText="Wangittujen punakaartilaisten kohtalo.">
        <h5>Joutuwat Suomen wiranomaisten tuomittawiksi.</h5>
        <p>Wangittujen punakaartilaisten omaisten ei tarwitse olla lewottomia niiden wankien kohtalosta, jotka owat saksalaisen sotawäen haltuun joutuneet, mitä wankien kohteluun ja hengen 
          turwallisuuteen tulee. Mikäli olemme saksalaisen johdon taholta saaneet tietää, wastaa sotawäki wankien kohtelusta niin kauan kuin he owat sotilaiden huostassa. Sen jälkeen jätetään 
          he laillisten suomalaisten wiranomaisten tutkittawiksi ja tuomittawiksi.</p>
        <p>Saksalainen maihinnousuarmeija ei ole tänne saapunut sekaantuakseen maan sisäisiin oloihin tai puolueiden wälisiin riitoihin, ja asettuu se niihin nähden täysin puolueettomalle 
          kannalle. Maihinnousuarmeijan tarkoituksena on ainoastaan yhteissopimuksen nojalla ja yhteiswoimin Suomen laillisen hallituksen kanssa turwata maan wapaa itsenäisyys ja kansan sisäinen 
          turwallisuus.</p>
        <p>Sentähden lausuwat saksalaiset sotilaswiranomaiset sen toiwomuksen, että elämä niin pian kuin mahdollista saataisiin palautumaan säännölliseen uomaansa, että liikenne, siwistyselämä 
          j. n. e. pian uudelleen elpyisiwät ja siten säännölliset olot jälleen palautuisiwat.</p>
        <p>Missä sotilaswiranomaiset waan woiwat, esim. mitä rautateihin tulee tekewät he parhaansa auttaaksensa suomalaisia wiranomaisia asiain nopeassa järjestämisessä, mikä on erittäin tärkeätä 
          esim. elintarwepulan helpottamiseksi.</p>
      </Article>
      <Article titleText="Miten vallankumous sai alkunsa.">
        <h5>Punakaarti alkoi metelinsä bolshewikikomisario Trotskin määräyksestä.</h5>
        <p>Jo pitkät ajat tiedettiin niin porwarillisissa kuin kapinaliikkeestä erossa olleissa sosialidemokratisissakin piireissä Wenäjän bolshewikien ja meidän sosialistiemme n. s. wasemmiston 
          wälillä käytäwän salaperäisiä neuwotteluja. Niitten laadusta ei kuitenkaan oltu täysin selwillä, waikka kaikki merkit wiittasiwat siihen, että woimat yhdessä suunnitteliwat wenäläisten 
          ja suomalaisten punakaartilaisten awulla Suomen laillisen hallituksen ja Kansan eduskunnan kukistamista ja maan saattamista samanlaiseen kaaostilaan, mihin bolshewikihallitus Wenäjän jo 
          oli saattanut. Nyttemmin on saatu todisteita siitä, että meidän sosialistiemme johtomiehet owat olleet nöyriä Wenäjän bolshewikien käskyläisiä, tahdottomia wälikappaleita, joitten 
          tehtäwänä on ollut wain wenäläisten „towerien" määräysten täytäntöönpano omaa kansaansa ja maataan wastaan. Kun myöhemmin tullaan julkaisemaan asiasta laajempia selostuksia, mainitsemme 
          tällä kertaa wain pari todistetta.</p>
        <p>Muutamia päiwiä ennen wallankumouksen alkamista onnistuttiin kaappaamaan eräs Pietarista lähetetty sähkösanoma meidän sosialistiemme johtomiehille. Se kuului seuraawasti:</p>
        <p className="quote">Toiminnan alkamisen hetki on tullut. Keskittäkää 15,000 punakaartilaista Helsinkiin ja sen ympäristöön. Ottakaa walta haltuunne. Wangitkaa hallitus. — Trotski.</p>
        <p>Julkisuudessa bolshewikihallitus samaan aikaan antoi julistuksen, jolla määrättiin wenäläinen sotawäki poistettawaksi Suomesta. Mutta mitalin toinen puoli osottikin todellisen 
          tarkotuksen. Helsingissä ilmestywässä sotilaslehdessä julkaistiin helmik. 19 pnä näin kuuluwa ilmoitus:</p>
        <p className="quote">Täten ilmoitetaan niille wenäläisille towereille, jotka haluawat astua Suomen punaiseen kaartiin tykkimiehinä, kuularuiskumiehinä tai muussa ominaisuudessa, että he 
          saawat lähempiä tietoja ent. senaatintalossa klo 11 ap. ja klo. 3—5 ip. Paraatikäytäwä. Waaditaan sen komppaniakomitean tai järjestön antama identisyystodistus, mihin asianomainen 
          kuuluu. Ehdot: 15 Suomen markkaa päiwässä ynnä wapaa ylöspito.</p>
      </Article>
      <Article titleText="Mitä punaset veivät mukanaan.">
        <p>Tyhjentäessään Helsinkiä veivät punaset mukanaan omia tekemiään seteleitä 77 milj. mkn ja vanhempia oikeita seteleitä 160 milj. mkn arvosta.</p>
        <h5>Uusi suunta sos. dem. puolueessa.</h5>
        <p>Viisikolmatta sosialidemokraattia (m. m. hra Väinö Vuolijoki) ovat julaisseet „julistuksen Suomen työväelle“. Siinä tuomitaan jyrkästi se kumouksellinen menettely, jota Suomen sos.-dem. 
          puolueen tähänastinen johto Venäjän bolshevistien esimerkin mukaan ja niiden aseelliseen apuun nojaten on käynyt noudattamaan, ja kehoitetaan Suomen työväkeä jälleen palaamaan laillisen 
          toiminnan tielle. Julistus loppuu sanoihin: „Siis alas aseet kaikkialla ja palatkaamme länsimaisen sosialidemokratian taistelutapoihin, palatkaamme rakentavaan eduskunnalliseen työhön 
          ja aseettomaan järjestötoimintaan”.</p>
        <h5>Punaisten venäläiset auttajat.</h5>
        <p>Tampereen valloituksessa joutui vangiksi myöskin Tampereen puo lustuksen järjestäjä, usein mainittu venäläinen eversti Svetshnikov, joka nyttemmin on saanut ansaitsemansa lopun.</p>
        <h5>Taiteilija Axel Gallen Kallela</h5>
        <p>on innosta ja ansiokkaasta toiminnasta korotettu reservivänrikiksi.</p>
        <h5>Punainen „hallitus“ pakenee Venäjälle.</h5>
        <p>T. k. 17 p:nä tulleen tiedon mukaan on kansanvaltuuskunta ilmoittanut venäläisen hallituksen jäsenille, että se aikoo asettua Pietariin. Saman tiedon mukaan ovat Tokoi ja Lumivuokko 
          paenneet Venäjälle.</p>
        <h5>Pidätettyjä punaisia.</h5>
        <p>Punaisen hallituksen vangituista toimihenkilöistä mainittakoon maist. Sulo Vuolijoki sekä Jean Boldtin surullisenkuuluisa asetoveri, „sisar“ Huttunen.</p>
      </Article>
      <Article titleText="Kuritushuonevangit punakaartilaisten riveissä.">
        <p>Jo helmik. alussa vapautti punainen hallitus 600 Sörnäisten kuritushuoneen vankia. Viime perjantaina vapauttivat punakaartilaiset 300 jälellä olevista rikollisista, kuljettivat heidät 
          Kansantalolle, missä heidät riemulla otettiin vastaan, aseistettiin ja liitettiin punakaartilaisten riveihin. Vankilassa on jälellä vain joitakuita vankeja, jotka sairaina ollen eivät 
          päässeet lähtemään. Nyttemmin on vangeista saatu suurin osa kiinni.</p>
      </Article>
      <Article titleText="Punaset ryöstäneet hurjasti Somerolla.">
        <h5>Mitään ei säästetty.</h5>
        <p>T. S:lle kirjoitetaan, että ensimäiset punakaartilaispakolaiset tuliwat keskiwiikkona huhtik. 10 p:nä Joensuun kylään. Heitä oli n. 40 hewoskuormallista: perheitä ja asesteituja miehiä. 
          Nämä esiintyiwät rauhallisesti ja jatkoiwat matkaansa Högforssiin päin. Torstaina tuli monta sataa hewoskuormaa punaisia, jotka nekin wielä esiintyiwät rauhallisesti. Mutta perjantaita 
          wastaan yöllä alkoi melkein kaikissa Someron kirkonkylän taloissa ryöstö. Arwokkaammat esineet: kulta- ja hopeatawarat, sänky- ja pitowaatteet y. m. sekä käsillä olleet rahat wietiin. 
          Postista meni punaisten mukana kassakaappikin.</p>
        <p>Perjantaina saapui sadottain roswoja lisää. Kiirun talon pihalla esim. majaili 300 hewosta. Ryöstöt jatkuiwat edelleen. Tällöin tyhjennettiin m. m. kauppias Maleniuksen tawarawarasto 
          ihan tyhjäksi. Mitä worot eiwät woineet wiedä mukanaan, se monessa paikoin hakattiin kirweellä pirstaleiksi. Pakokauhu wallitsi kaikkialla ja kylä oli tyhjä haltiawäestä. Lauantai-aamuna 
          suurin osa lähti Hämeenlinnaan päin. Niitten mukana lähti paikallinen punakaarti osittain, mukanaan perheetkin, jättäen palstansa oman onnensa nojaan. Lautelan osuuskauppa ryöstettiin.</p>
        <p>Sunnuntaina lähtiwät wiimeiset näistä jatkamaan matkaansa. Pakolaiset ajeliwat mitä kauniimmilla hewosilla ja ajelukaluilla, jotka tietysti oliwat roswottuja.</p>
        <p>Punaiset naiset owat esiintyneet hywin hurjasti, wieden paikka paikoin kodit puti puhtaiksi. Kotien seinillä kunniapaikoilla olleista morsiusseppeleistäkin oliwat roswot riistäneet 
          kukat rintoihinsa.</p>
      </Article>
      <Article titleText="Asewelwollisuus valkoisessa Suomessa.">
        <h5>Sosialisteja ei pakoiteta taistelemaan punakaartia wastaan.</h5>
        <p>Koska sosialistilehdet alinomaan wakuuttiwat, että walkoiset pakoittiwat Pohjanmaan sosialisteja taistelemaan luokkatowereita wastaan, owat T. S:t tiedustelleet miten tämän asian laita 
          on. Kohta selwisi, etteiwät walkoiset tällaista waatineet. Pohjanmaalla on woimassa asewelwollisuus, jonka mukaan asekuntoiset miehet jaetaan kolmeen luokkaan. A-luokkaan kuuluwat terweet 
          ja luotettawat miehet jotka lähetetään rintamalle. B-luokkaan wanhemmat ja muuten wähemmän sotapalwelukseen kelpoiset sekä sellaiset, joiden kannasta ei ole tarkkaa tietoa. Nämä miehet 
          muodostawat rintamatakaisen armeijan. C-luokkaan kuuluwat asekuntoiset miehet jotka owat sosialisteja mielipiteiltään ja muuten epäluotettawia. Nämä saawat tehdä yleisiä töitä, mikäli 
          niitä on. Heidän ei siis ole tarwinnut taistella luokkaweljiään wastaan.</p>
      </Article>
      <Article titleText="Suomalaisten jääkärien saksalainen päällystö tilanteesta.">
        <h5>„Wapautta ei saada lahjaksi”.</h5>
        <p>Waasaan saapuiwat maaliskuun 8 p:nä suomalaisten jääkärien saksalaiset päälliköt, ewersti Ansfeldt, w. Colm ja majuri Stakel. Asemalla heidät otettiin juhlallisesti wastaan ja saman päiwän 
          iltana jääkärien suomalaiset upseerit toimeenpaniwat heille juhlan. H. S:n kirjeenwaihtajalle lausui ewersti w. Colm m.m. seuraawaa:</p>
        <p className="quote">Olen ottanut eron Saksan armeijasta ja puhun nyt teille suomalaisena upseerina. Täällä towereitteni ja oppilaitteni keskuudessa tunnen jälleen olewani kotona. Matkani 
          jälkeen toiwon saawani suomalaisten towerieni kanssa ottaa osaa taisteluun Suomen itsenäisyyden puolesta. Mutta Suomi samoin kuin Saksakin, taistelee idässä suuremman, waikkakin 
          kaukaisemman päämäärän puolesta, nimittäin lännen wartijana Aasian barbariaa, bokshewismia wastaan.<br />Taistelun tulos on warma. Järjestys tulee ehdottomasti saamaan woiton sekasorrosta. 
          Taistelumme idässä on koko Europan taistelua, ja tulewaisuudessa Europa tulee warmaankin olemaan Suomelle kiitollinen siitä, mitä se nyt suorittaa.<br />Olen nähnyt Suomen nuorison 
          aseissa: kaunis rotu, hywää sotilasainesta, kuuliaista ja innokasta wäkeä.<br />Waikka maan wapauttaminen maksaa werta, niin en kuitenkaan woi walittaa wälttämätöntä mieshukkaa, sillä 
          jokaisen kansan, woidakseen pitää arwossa wapauttaan, täytyy ostaa se werellä ja kärsimyksillä. Uhrit tulewat liittämään koko kansan woimakkaaksi ja päämäärästään tietoiseksi 
          kansakunnaksi. Wapautta ei woida saada lahjaksi!</p>
      </Article>

      <div className="interTitle">2.5.1918</div>
      <Article titleText="Hauhon taistelut.">
        <p>Hauhon taisteluista olemme saaneet seuraawia tietoja:</p>
        <p>Maanantaina saapuiwat kenraali Mannerheimin joukot Pälkäneeltä ja Luopioisista Hauholle, jossa syntyi taisteluja lähellä Hauhon selkää. Punaset pakeniwat Syrjäntakaa kohden, jonka 
          läheisyydessä saksalaiset ottiwat pakenijat wastaan kahdelta taholta suunnatulla kuularuiskutulella. Taistelu päättyi punaisille erittäin weriseen tappioon. Heidän mieshukkansa on 
          hywin suuri. Wankien lukumäärä nousee yli 1000. Osa punasista pääsi pakenemaan Kärkölän suunnalle, missä heitä wastassa on saksalaisia joukkoja. Täällä syntyneistä taisteluista emme ole 
          saaneet lähempiä tietoja. Saksalaisten mieshukka tähänastisissa taisteluissa on erittäin wähäinen.</p>
        <p>Kärkölään perääntyneet punaset yrittäwät nähtäwästi perääntyä Lahden eteläpuolitse Kotkaa kohti.</p>
        <h5>Wankeja</h5>
        <p>tuotiin Hämeenlinnaan wiime tiistaina Hauholta päin suuria joukkoja. Sotasaaliina on tuotu myöskin 3 tykkiä, useita kuularuiskuja, kiwääreitä, ampumawaroja, suuret määrät hewosia, 
          ajoneuwoja y. m.</p>
      </Article>
      <Article titleText="Hämeenlinnassa saatu sotasaalis.">
        <p>Hämeenlinnan asemalla saatu sotasaalis on huomattawasti suurempi Riihimäellä saatua. Asema-alue on aiwan täynnään kaikenlaisilla tawaroilla lastattuja waunuja. Helsinkiin jossa nykyään 
          wallitsee tuntuwa puute elintarpeista, on jo lähetetty useita kymmeniä rukiilla, kauralla, ohralla, wehnällä, sardiineilla y. m. lastattua waunua. Hämeenlinnassa on kuitenkin wielä 
          useita waunuja täynnä wiljaa ja muita elintarpeita, kankaita, kirjotuskoneita, sotatarpeita. Asema-alueella on myöskin 22 weturia, joista osa on wioitettu, 11 matkustajawaunua, 
          kokonainen sanitäärijuna ja suuri joukko tawarawaunuja. Harwialan ja Hämeenlinnan wälillä owat punaiset räjäyttäneet panssarijunansa, Asemalla tapahtuneessa räjähdyksessä ja sitä 
          seuranneessa tulipalossa tuhoutui n. 20 waunua, joukossa muutamia matkustajawaunuja. Sanitäärijuna, joka oli likainen ja pahasti pidetty, on lähetetty Helsinkiin.</p>
      </Article>
      <Article titleText="Kenraali Mannerheimin sähkösanoma.">
        <p>Kenraali Mannerheim'iltä on kaupungin Waltuustolle eilen saapunut seuraawa sähkösanoma:</p>
        <p className="quote">Nuori armeija on saawuttanut uuden suuren menestyksen. Kowien taistelujen jälkeen on Wiipuri walloitettu. Karjala on täten lopullisesti wapautettu ja maan wapaus 
          turwattu. Osa joukkojamme on edennyt rajalle saakka sitä wartioimaan.<br /><span className="signature">Kenraali Mannerheim.<br />Mikkeli.</span></p>
      </Article>
      <Article titleText="H:linnan miliisipäällikkö Siimes Kanervion viimeiset päivät.">
        <p>En tuntenut häntä ennen. Tiesin waan että hän oli punainen ja jäi tointansa hoitamaan punasten nostaman kansalaissodan ajaksi. Opin tuntemaan hänet wasta putkassa, kun hän oli wangittu. 
          Mutta hänen elämänsä päiwät oliwat mielenkiintoa herättäwät.</p>
        <p>Tunnettu suurpyöweli, suurhirmu, punakaartilaisten tiedustelutoimiston johtaja Oiwa Wirtanen otti wähitellen kaiken wallan käsiinsä Hämeenlinnassa ja sen ympäristöllä. Miliisipäällikkö S. 
          Kanerwio tuli tietysti hänen kanssaan tekemisiin. Wirtasen käskystä pidätettiin suuret joukot, miehiä ja naisia sekä kaupungissa että ympäristöllä. Tutkimatta heitä säilytettiin 
          wankiloissa ja poliisilaitoksella wiikkokausia. Kun Kanerwio ja wallankumousoikeuden yleinen syyttäjä J. Niemi tahtoiwat tutkia pidätettyjä, esti sen Wirtanen. Rintamalta lähettiwät 
          muutamat punakaartin päälliköt wangittuina Hämeenlinnaan suurimpia ryöwäreitä. Mutta Wirtasen käskystä ne wapautettiin, eikä hän sallinut niitä tutkia. J. Niemi kertoi että hän waati 
          tällaisia roswoja pidettäwäksi wangittuina ja yleensä tahtoi että oikeutta koetettaisiin noudattaa ja sai Wirtaselta wastauksen: mitä wallankumouksessa on tehty sen owat tehneet nämä 
          warkaat ja roswot; ne jotka lakia ja oikeutta noudattawat eiwät saa mitään aikaan. Wirtasen käskystä myöskin surmattiin wapaaksi laskettuja wankeja ja pantiin toimeen murhia Kalwolassa, 
          Rengossa, Hattulassa y. m. S. Kanerwio ilmoitti että hänellä oli warmat todistukset siitä että useita ihmisiä oli murhattu Wirtasen käskystä. Hänen ja Wirtasen wälit käwiwät yhä 
          kireämmiksi, Wirtanen oli uhannut wangita Kanerwion, jos ei hän tottele Wirtasta. S. Kanerwio sanoi että koska hänen tehtäwänään oli suojella ihmisten henkeä ja omaisuutta Hämeenlinnassa 
          eikä hän Wirtaselta saanut sitä tehtäwäänsä suorittaa, täytyi hänen poistaa Wirtanen. Ensin teki hän hänestä muutamien muiden kanssa kirjallisen syytteen Punakaartin esikunnalle, se ei 
          mitään auttanut. Kun hän sai tietää että Wirtanen aikoi murhauttaa kymmeniä ehkä satoja wiattomia ihmisiä, päätti hän asiata harkittuaan surmata hänet. Tiistai iltana 16 p. huhtikuuta, 
          wapautti Kanerwio J. Niemen kanssa useita naisia, nähtäwästi sentähden että seuraawana yönä piti joukkomurhia tehtämän. Samana iltana myöhään wangitsi Kanerwio miliisien awulla 
          Wirtasen, pani hänet käsirautoihin wei rantatorille wenäläisen kirkon seinustalle ja ammutti hänet siinä. Sen tehtyään hän puhelimitse ilmoitti asiasta esikuntaan. Esikunta oli Wirtasen 
          kaltaisia roistoja täynnä. Sieltä tuli suuri joukko aseistettuja miehiä. Ne ampuiwat kuin hullut poliisikamarissa, wangitsiwat miliisit ja Kanerwion, jota pahasti rääkkäsiwät. Yöllä 
          perjantaita wastaan 19 p. huhtikuuta käwiwät punaset kahdesti poliisiputkassa pampulla rääkkäämässä Kanerwiota, joka sen jälestä ei enään näyttäytynyt toisille. Seuraawana yönä lauantaita 
          wasten 20 p. huhtikuuta istui sotaoikeus, joka tuomitsi Kanerwion ammuttawaksi. Missä ja kuka sen suoritti, sitä en tiedä.</p>
        <p>Kidutettaessa ja tutkittaessa Kanerwio lausui työnsä suorittaneensa wakawan harkinnan jälkeen. „Se oli minun welwollisuuteni minun täytyi se tehdä”, sanoi hän „minä wastaan siitä hengelläni, 
          wielä minua työstä tulewat Suomen sosialistitkin kiittämään”. Hän arweli että roistoja on muitakin kuin Wirtanen, mutta etteiwät toiset rohkene yhtä julkeasti menetellä, kun yhdeltä on 
          otettu henki. Ja siinä hän oli oikeassa.</p>
        <p>Oli Siimes Kanerwio ollut mikä tahansa, elämänsä hän uhrasi puolustaaksensa oikeutta ja kuolemallaan pelasti hän meidät monet wangitut siitä surmasta, jota suurhirmu O. Wirtanen oli 
          suunnitellut. Ja meidän täytyy kunnioituksella muistella häntä.</p>
        <p className="signature">W. W.</p>
      </Article>
      <Article titleText="Punaisten häwityksiä maaseudulla.">
        <p>Kaikkialla Hämeenlinnan ympäristöllä owat punaset roswojoukot ryöstäneet ja häwittäneet. Kalwolassa on poltettu kirkko, Kankaisten kartano ja Hommosen talo. Hattulassa on poltettu 
          Parolan rautatieasema. Osuusmeijeri on räjäytetty ilmaan. Janakkalassa on poltettu Tohwelan talo ja pappila. Hauholla, Tuuloksessa ja Lammilla tapahtuneista häwitystöistä emme wielä ole 
          saaneet tietoa. Kaiken maaseudun owat punaset ryöstäneet puhtaaksi. Taloista on wiety hewoset, ajoneuwot, elintarpeet, waatetawarat, kulta- ja hopeaesineet, yleensä kaikki, mitä on irti 
          saatu. Karjaa on suuret määrät teurastettu. Murhattujen lukumäärä Hämeenlinnan ympäristöpitäjissä nousee useisiin kymmeniin.</p>
      </Article>
      <Article titleText="Punaisten viimeisiä hävitystöitä.">
        <h5>Uudessakaupungissa.</h5>
        <p>T.k. 13 pnä päättyneen wiikon loppupuolella saiwat Uudenkaupungin punakaartilaiset wihdoin lähtökäskyn. Mutta ennen lähtöään he tietenkin päästiwät wielä kerran kaikki intohimonsa ja 
          pahat woimansa walloilleen. Kaikki kaupungissa olleet öljy-, bentsiini- y.m. warastot kaadettiin mereen ja tynnyrit heitettiin rannalle. Telefoonikeskusasema taottiin moukareilla 
          kokonaan säpäleiksi. Saman kohtalon sai osakseen Wakka-Suomen kirjapaino, jossa koneet ja kastit kokonaan särjettiin. Uudenkaupungin Sanomain kirjapaino tuhottiin jo aikaisemmin. 
          Liikkeet ja kaikki warastot ryöstettiin ja niin alkoi tämän ryöwärilauman matka kaupungista, joka muistuttaa hunnilaislauman siellä käyntiä.</p>
        <h5>Mäntyluodolla.</h5>
        <p>Ennen lähtöään Mäntyluodolta upottiwat ja särkiwät punaiset satamassa olleet Suomen Höyrylaiwa-Osakeyhtiön laiwat Westa ja Lyra, Waasan-Pohjanmeren höyrylaiwaosakeyhtiön laiwan Iris, 
          W. Rosenlew & C:o A. B:n höyrylaiwan Mars ja raumalaisen höyrylaiwan Kalewa.</p>
        <p>Waltion Mäntyluodolla sijaitsewa höyryruisku huoneineen räjäytettiin.</p>
        <p>Toiminimi Lars Krogiuksen makasiineista ryöstettiin kaikki tawarat.</p>
        <p>Miten perinpohjaisesti punaiset toimittiwat häwitystyönsä mainittakoon, että tulliwarastossa Mäntyluodolla oli 100 kirjoituskonetta, kukin omassa laatikossaan. Aiwan joka ainoa laatikko 
          awattu ja joka ainoa kirjoituskone myös hakattu säpäleiksi.</p>
        <h5>Raumalla.</h5>
        <p>Raumalta weiwät punaiset mukanaan suurimman osan kaupungin puhelinkaapeista, elintarwelautakunnan ja rautatieaseman kassat sekä osuuskaupan n. 40,000 mk. sisältäwän kassan. Wielä weiwät 
          he kaikki kaupungissa olewat wiljawarat sekä maaseurakunnan makasiinissa säilytettyä siiemenwiljaa 20 kuormaa.</p>
        <p>Rauman siiwot sosialistit kaasiwat suurien ryöstämiensä wiljawarastojen päälle öljyä ja sytyttiwät sitten palamaan. Kangastawaroita on myös koottu asemille ja — poltettu.</p>
        <p>Rauman museotakaan ei jätetty rauhaan. Punaiset särkiwät museohuoneuston alaowen ja molemmat yläowet he löiwät kappaleiksi. Kaapeista ja witriineistä he löiwät lasit rikki, repiwät 
          alttariwerhon ja yhden arkun kannen kiskoiwat irti, tawaroita owat paiskelleet pitkin lattiata, warastaneet rintaneuloja, korwarenkaita, sormuksia ja rahoja raha- ja mitalikokoelmasta.</p>
      </Article>
      <Article titleText="Sotatapahtumat Suomessa.">
        <h5>Wiipuri wallattu.</h5>
        <p className="quotation">Päämajan tiedonanto huhtikuun 29 p:ltä 1918. (STT)</p>
        <p><span className="accent">Koko Wiipuri on walloitettu.</span> Wihollinen pysyttelee wielä länsiosassa Sorwalia ja Tienhaaraa. 6,000 punaista koetti murtautua läpi Haminaa kohden. Yritys 
          torjuttiin sangen suurin tappioin. Tämän woiton kautta on Suomen urhoollinen armeija murtanut wihollisen wiimeisen wahwan turwapaikan.</p>
        <p className="signature">Päämajoitusmestari Ignatius.</p>
        <h5>* * *</h5>
        <p className="quotation">Päämajantiedonanto n:ro 2217, huhtikuun 28 p:ltä 1918. (STT)</p>
        <p><span className="accent">Läntinen rintama:</span> Hämeenlinnassa on suoranainen yhteys saawutettu Länsiarmeijan ja saksalaisen itämerendiwisionan joukkojen wälillä. Lyöty wihollinen on 
          saksalaisten takaa-ajamana wäistynyt osaksi Renkoon, osaksi Hauholle ja Tuulokseen päin, missä sen yritys päästä läpimurtautumaan pohjoista kohti on ankarasti taistellen tehty tyhjäksi. 
          Wielä jälellä olewia taistelukuntoisia wihollisjoukkoja wastaan on aloitettu liikkeet, oltaessa yhteistoiminnassa saksalaisten kanssa.</p>
        <p><span className="accent">Sawon rintama:</span> Joukkomme tunkeutuwat pitkin koko rintamaa eteenpäin. Rautatien länsipuolella olewalla alueella on Taipaleen, Koskenniskan, Huhdasjärwen, 
          Hartolan ja Wesalan kylät meidän käsissämme, rautatien itäpuolella on Parola miehitetty.</p>
        <p><span className="accent">Itärintama:</span> Ripeästi eteenpäin tunkeutuen owat ewerstiluutnantti Sihwon joukot saawuttaneet ja kulkeneet yli Simolan—Howinmaan wälisen rautatielinjan. 
          Simolassa ja Wainikkalassa mursi kolmas Karjalan rykmentti kiihkeän taistelun jälkeen wihollisen wastarinnan sekä waltasi yhden tykin.</p>
        <p>Kenraalimajuri Wilkmanin rynnistys nyttemmin täydellisesti eristettyä Wiipuria wastaan kehittyy edelleen. Ewersti Ausfeld on eilen ottanut haltuunsa Härkälän ja Koiwiston, jolloin on 
          saatu runsas sotasaalis, m. m. 25 tykkiä, 14 kuularuiskua ja otettu 1,000 wankia. — Inon linnoitus on saarrettu maan puolelta.</p>
        <p className="signature">Päämajoitusmestari Ignatius.</p>
        <h5>* * *</h5>
        <p>Loimaalta ilmoitetaan meille sunnuntai-iltana myöhään, että Tammelan suunnalla on otettu 700 punaista wangiksi, 3 kuularuiskua, 200 hewosta ja paljon sotatarpeita.</p>
        <p>Samalla ilmoitetaan että Toijala on walloitettu sunnuntain wastaisena yönä. Sunnuntaina iltapäiwällä oli puhelinyhteys sinne jo kunnossa Loimaalta.</p>
      </Article>
      <Article titleText="Hindenburg onnittelee Tampereen walloituksen johdosta.">
        <p>Suomen Sanomalehtitoimisto ilmoittaa: Senaatin puheenjohtaja on Saksan päämajasta Suomen Berlinissä olewan lähettilään kautta saanut wastaanottaa seuraawan onnittelusähkösänoman:</p>
        <p className="quote">Tampereen kunniakkaan walloituksen johdosta, joka on wienyt Suomen kansan suuren askeleen eteenpäin odotettua wapautta kohti, pyydän Teidän ylhäisyyttänne esittämään 
          Suomen hallitukselle parhaat onnitteluni.<br />Sotamarsalkka <span className="signature">Hindenburg.</span></p>
      </Article>
      <Article titleText="Kunnianosotus kenraali Mannerheimille.">
        <p>Suomen wirallinen sanomalehtitoimisto ilmoittaa, että senaatti on kenraali Mannerheimille ja hänen joukoilleen Tampereen walloituksen johdosta lähettänyt kiitossähkösanoman loistawasta 
          menestyksestä sekä antanut kenraali Mannerheimille henkilökohtaisesta urhollisuudesta neljännen luokan wapaudenristin ja sotatoimien taitawasta johdosta ensimäisen luokan wapaudenristin.</p>
      </Article>
      <Article titleText="Tampereen punainen naiskaarti.">
        <p>Katuelämän ja esikaupunkien huonoimmista aineksista wärwätyllä naiskaartilla on warsin huomattawa osa Tampereen piirityksen kestäessä ja warsinkin sen jälkeen, kun kaupungin kohtalo oli 
          lopullisesti ratkaistu ja wastustus ilmeni wain mielettöminä ilkitöinä. Housupukuisina, usein korkeakorkoiset kengät jaloissa ja paksulti maalia poskissa, oliwat nämä kaartilaiset warsin 
          hassunkurisen näköiset, kun he kiwääri olalla asteliwat wahdissaan. Mutta todellisuudessa he oliwat oikeita pikku paholaisia.</p>
        <p>Kun joen itäpuolinen kaupunginosa jo oli walloitettu, hiipiwät he sinne, nyt naisen puwussa, wieden mennessään paloöljyä ja bentsiiniä, ja sytyttiwät rappukäytäwissä rakennukset tuleen. 
          Näin paloi Hämeenkadun warrella monta taloa poroksi.</p>
        <p>Erään talon, missä punaiset säilyttiwät wankejaan, kerrotaan samoin joutuneen näiden raiwotarten uhriksi. Kymmenkunta walkoista wankia lienee tällöin saanut surmansa.</p>
        <p>Jo puhdistetussa kaupunginosassa istui ruotsinmaalainen upseeri ja suomalainen jääkäri eräässä kahwilassa. Silloin astui muuan nainen sisään ja ampui upseerin. Luonnollisesti hän sai 
          rangaistuksensa seuraawassa tuokiossa.</p>
      </Article>
      <Article titleText="Pappien murhat.">
        <p>Suodenniemen kirkkoherran <span className="accent">K. I. Kalwan</span> owat punaiset murhanneet. Hänen ruumiinsa sai useita päiwiä wirua lumessa eikä omaisten sallittu huolehtia sen 
        hautaamisesta. Murhamiehet asettiwat kangistuneen ruumiin kirkon portin wiereen ja paniwat raamatun uhrinsa käteen.</p>
        <p>Längelmäen kirkkoherra <span className="accent">Iisakki Wirtanen</span> sai kaamean lopun. Punaryssät ristiinnaulitsiwat hänet kirkon alttaripöytään. Hänen rintansa oli puhkaistu ja 
        haawaan siroteltu suolaa. Ruumiin pään yläpuolelle oli werellä kirjoitettu: „Auttakoon Jumalanne”.</p>
      </Article>
      <Article titleText="Nälän järjestäjät.">
        <p>Kaikkialla punaisten hallitusalueilla esiintyy silmiinpistäwänä harrastuksena saatta wäestö nälänhätään. Kaikkialla mässättiin muutamassa wiikossa sekä elintarwewiranomaisten että 
          yksityisten kokoamat ruokawarat, jotka säästäen käyttämällä olisiwat riittäneet kuukausiksi liewentämään pahinta pulaa. Mitään ei sijaan hankittu, waan häwitettiin tai paetessa wietiin 
          pois jääneet rippeetkin. Helsingistä roswosiwat punaiset lähtiessään minkä irti saiwat. Esim. Huittisissa owat nämä häwityshaluiset nälänjärjestäjät walelleet paloöljyllä 10,000 kg. 
          lihaa ja suuren joukon sillitynnyreitä. — Eiköhän tänne jääneiden punaisten kannattajain sopisi miettiä, miksi meillä on nyt nälkä?</p>
      </Article>
      <Article titleText="Kun hämeenlinnassa alkoi vallankumous.">
        <p className="caption">(Muistelma 29. 1. 1918.)</p>
        <p>Se oli ikäänkuin ilmassa leijunut. Jo moninaita päiwiä oli tukahduttawa henki painostanut kaikkea, aawistettiin, odotettiin ja jo aiwan warmistuttiinkin, että jotakin ihmeellistä oli 
          aiwan lähitulewaisuudessa tapahtuwa. Wiipurin weriset tapahtumat, joista wiikon warrella oli wiestiä saapunut, antoiwat ikäänkuin jotain aawistusta siitä mitä kuohumistilassa olewasta 
          paiseesta oli puhkeawa...</p>
        <p>Lauwantai-iltana 26 p. tammikuuta oli Hämeenlinnassa huomattawissa ensimäiset oireet siitä, että „punaisen armeijan” liikehtiminen oli alkanut. Silloin illan suussa lewisi tieto, että 
          täkäläinen punakaarti kiwäärit olalla oli lähtenyt liikkeelle ja hajaantunut wartioimaan rataa Hämeenlinnasta etelään päin.</p>
        <p>Sunnuntaipäiwä walkeni, sanomalehdet Helsingistä saapuiwat kertoen samansuuntaisista toimenpiteistä ja yleensä lisäten tilanteen uhkaawaisuutta. Puolenpäiwän jälkeen tilanne kärjistyi, 
          ei enää päässyt telefonitse Helsinkiin, hurjia huhuja alkoi kiertää - käsitettiin, että oltiin jälleen uuden suurlakon alkuwaiheissa, millaisen, sitä ei wielä sillä hetkellä liene 
          monikaan osannut kuwitella.</p>
        <p>Patoutunut sähkö oli purkautumassa - miten ja mihin, sitä kyseltiin ja otaksuttiin.</p>
        <p>Samanlaisen epämääräisen tilanteen wallitessa kului wielä maanantaipäiwä, hurjien huhujen ja mielikuwitelmien wallassa elettiin, mitään pitäwää tietoa miltään tahotta ei saatu.</p>
        <p>Tällaisen epämääräisen tilanteen wallitessa walkeni tiistai, tammikuun 29 p., jolloin wallankumous Hämeenlinnassa toimeenpantiin. Heti aamulla kuultiin, että tänne oli saapunut Turusta 
          (toisten tietojen mukaan Riihimäestä) 50 aseistettua punakaartilaista kuuluisan Hyrskynmurron johdolla. Nyt käsitettiin, että Hämeenlinnan idyllinen rauhallisuus oli loppuwa.</p>
        <p>Aamupäiwä elettiin kuumeisen odotuksen wallassa, mutta kun mitään erikoisempaa ei kuulunut, alkoiwat mielet rauhoittua. Silloin, klo 2 jpp. lensi kulona wiesti läpi kaupungin, että 
          Turun punakaartilaiset, lisättynä paikkakunnan kaartilaisilla, noin 100-miehisenä ryhmänä oliwat marssineet Suomalaisen Seuran huoneustolle, piirittäneet sen ja toimittaneet 
          pintapuolisen kotitarkastuksen. Otaksuttiin kyseessä olewan tawallisen „aseiden etsinnän”. Mutta pian huomattiin, että suunnitelma olikin toinen. Noin 10 minuutin kuluttua marssi joukko 
          ylös torin alikulmaan, hajaantui nopeasi hyökkäysketjuun ja kiwäärit ojona, hajaketjussa läheniwät toinen osa lääninhallitusta, toinen raatihuonetta.</p>
        <p>Waltausta „wallankumousta” oltiin siis toimittamassa. Nähtäwästi oliwat punakaartilaiset olettaneet saawansa aseellista wastarintaa, muuten ei moinen hyökkäys ole ymmärrettäwissä. 
          Sensijaan tapasiwatkin wain aseettomia, rauhallisia wirkamiehiä, jotka komennettiin taloista pois. Pian ilmestyi Raatihuoneen katolle 4 miestä, punainen lippu wedettiin liehumaan 
          - wallankumous oli suoritettu.</p>
        <p>Samaan aikaan kuin tämä „hyökkäys” toimitettiin, järjestyi torin joka kulmaan 4 - 8 miestä, jotka huutaen, huitoen ja kiwääreillä sekä rewolwereilla tähdäten liikkeellä olewia ihmisiä 
          ajoiwat heitä pois — hywällä menestyksellä muuten, sillä parissa minuutissa oliwat kadut tyhjät, kaduilla liikkujat kun kauhistuksissaan syöksyiwät lähimpään puotiin tai porttikäytäwään 
          henkensä säästääkseen.</p>
        <p>Samaan aikaan kuin tämä tapahtui, järjestettiin kaikkialle tulleihin wahdit, jotka eiwät päästäneet ketään kaupunkiin tahi sieltä ulos. Ainakin Myllymäkeen wiewällä tiellä toimitti tätä 
          palwelusta ryssät. Siellä asuwat päiwällisille menijät saiwat jäädä nälkäisinä kaupunkiin ja sinne jääneet eiwät päässeet takaisin työpaikkoihinsa.</p>
        <p>Tällä tawalla „Hämeenlinnan waltaus” tapahtui. Yhtään laukausta ei ammuttu, mutta sensijaan kyllä kowasti uhkailtiin, tähtäiltiin ja kiroten herjattiin kaikkia, jotka uskalsiwat 
          porttikäytäwistä tahi puotien owilta kurkistaa mitä oikeastaan oli tekeillä. Karkeita kirosanoja kaikui pitkin katuja, sellaisia kuin: „Ettekö te perkeleen ämmät sieltä mene taikka minä 
          saatana annan tulla” j. n. e., jolloin aina kiwäärin tähtäys wahwisti karjuntaa.</p>
        <p>Kuin kulo lewisi tieto waltauksesta ja yleinen hätäännys oli huomattawissa. Kello 4 aikaan annettiin jo yleisön käwellä kaduilla, samaan aikaan naulailtiin katujen kulmiin 
          „Wallankumouskomitean” allekirjoittamia määräyksiä, että klo 9 jälkeen on liikkuminen kaduilla kielletty.</p>
        <p>Kun asejoukkue wielä oli tehnyt kotitarkastuksen Skogsterin liikkeissä hajaantui se kaksimiehisiksi patrulleiksi, joiden päätehtäwänä oli kaduillaliikkujien ruumiinmukainen tarkastus 
          - etsittiin aseita. Siwely ja kouriminen oli wallan perinpohjaista, mutta tiettäwästi ei kenenkään lompakkoa wiety.</p>
        <p>Wallankumouspäiwä painui ehtooseen, katuliikenne hiljeni ja hämmästyneet ihmiset pysytteliwät kotinsa turwissa, itsekseen ajatellen mihin kaikkeen tämän päiwän ihmeelliset tapahtumat 
          saattoiwatkaan olla alkusoittona. Kukin käsitti, että nyt ei enää ollut kysymyksessä tawallinen suurlakko, mutta sittenkään ei moni liene woinut kuwitella mitä tästä seuraisi. Yksinpä 
          sosialistitkin oliwat hämmästyksissään. Hekin, rauhallisimmat ainekset, eiwät kai olleet käsittäneet, että rauhallisten wirastojen waltaus ja rauhallisten ihmisten härnäily ja aseilla 
          uhkailu, pitäisi tapahtua tällaisessa raa'assa muodossa — tuskinpa tällä hetkellä kellään oli selwillä, mihin tämä hyökkäys johtaisi. Arwatenkin moni mielessään mietti, että heidän 
          ihannoimansa wallankumous ei ollut tällälailla tapahtuwa, ja luulenpa, että tällöin ensi hämmästyksessään monikaan ei sydämessään woinut olla huokailematta, mikä on tämän maan ja kansan, 
          mikä on sosialismin kohtalo, kun sen aatteita tällä tawoin ryhdytään toteuttamaan. Luulenpa, että sillä hetkellä moni, joka myöhemmin on suopeasti ja myötämielinkin ollut mukana 
          wallankumousliikkeessä, olisi asettunut sitä jyrkästi wastustamaan, jos hänelle ratkaisuwalta olisi annettu. Mutta selwinkin järki pimenee kun se joutuu yhtämittaisen intohimoisen 
          willityksen ja wallankumouksellisten fraasien tulenliekeissä liemettäwäksi...</p>
        <p>Lähinnä seuraawat päiwät oliwat perin lewottomia ja sähköisiä. Alkoiwat aseiden etsiskelyt, kotitarkastukset ja wangitsemiset. Se kauhu ja mielentyrmistys, minkä kaikki tämä aikaan sai 
          tuskin kenenkään muistista katoaa.</p>
        <p>Täällä ei tosin ainoatakaan murhaa tehty, mutta kaikkialta ympäristöpitäjistä toi jokainen uusi päiwä uusia kauhuntapauksia. Moniin kymmeniin nousewat ne murhat, mitä näinä päiwinä 
          lähimmissä pitäjissä toimeen pantiin — wallankumouksen nimessä raa'asti teurastettiin, jopa sairaswuoteelleen ammuttiin, rauhallisia, aseettomia kansalaisia, jotka eiwät muuta pyytäneet 
          kuin elää omaa elämäänsä kotinsa seinien sisällä.</p>
        <h5>* * *</h5>
        <p className="info">Tämä muistelma on kirjoitettu wallankumouksen alkupäiwinä. Myöhemmät tapahtumat ja aiwan wiimeaikaiset roistontyöt owat niin kerrassaan kauheita ja saastaisia, että niitä ei tawallisen 
          kuolewaisen kynä pysty eikä kykene kuwailemaan. Kuka woikaan unohtaa ja anteeksi antaa sen kaiken ihmisarwon alapuolelle kuuluwan konnuuden, joita tuhannet roistontyöt meille 
          todistawat?</p>
      </Article>

      <div className="interTitle">4.5.1918</div>
      <Article titleText="Rengossa">
        <p>alkoi kapina saada werisen käänteen huhtikuun puoliwälissä. Lauantaina huhtik. 13 saapui Renkoon Oinaalan Kuusiwaaran taloon kaksi Hämeenlinnan „tiedustelu-osastoon” kuuluwaa Roos ja 
          Nuutinen nimistä miestä. Näistä meni N. sisälle ojentaen heti kiwäärinsä Kuusiwaaraa kohden luwaten kuitenkin säästää hänen henkensä, jos hän suostuisi laatimaan ja allekirjoittamaan 
          hänen sanelemansa pöytäkirjan. Pelastaakseen henkensä K. suostui. Nuutisen sanelun mukaan laati hän senjälkeen pöytäkirjan, joka olisi muka pidetty Ali-Hakkolan talossa huhtikuun 5 p. 
          olleessa kokouksessa, jossa suojeluskunta päätettiin uudelleen herättää eloon. Kokouksen puheenjohtajaksi merkittiin opettaja Santalahti ja kirjuriksi Kuusiwaara. Pöytäkirjan alle 
          kirjoitti Kuusiwaara nimensä, jonka jälkeen N. wäärensi siihen opettaja Santalahden nimen. Tämänjälkeen N. uudelleen alkoi tähtäillä Kuusiwaaraa kiwäärillä, tämän kuitenkin onnistui 
          pujahtaa ulos ja sieltä edelleen rakennusten taitse metsään roswojen ampuessa hänen jälkeensä useita laukauksia.</p>
        <p>Kuusiwaarasta roistot meniwät Uudenkylän kansakoululle etsimään opettaja Santalahtea, joka wiime ajat oli piileskellyt asuntonsa ylisillä. Puhumalla kauniisti he saiwat kuitenkin 
          opettajan waimon kutsumaan miehensä alas. Tämän tultua keittiönsä portaille roistot surmasiwat hänet 6—7 laukauksella.</p>
        <p>Täältä miehet meniwät kanttori Salorannan asunnolle, jossa kyseliwät erästä kanttorin pojista. Tämä, joka sattui olemaan tallissa, huomasi waaran ja pelasti henkensä pakenemalla 
          tallinluukusta metsään. Tallin oween roswot ampuiwat useita laukauksia.</p>
        <p>Senjälkeen lähtiwät roistot kauppias Kustaa Kyläkallion luo waatien häntä tulemaan ulos. Kun hän ei tähän suostunut toiwat miehet hänet wäkisin. Hänet raahattiin läheiselle peltosaralle, 
          jossa häntä käwelytettiin edes ja takaisin, jotta miehet saisiwat sopiwan ampuma-matkan. Työnsä tehtyään roistot raahasiwat ruumiin läheiseen kalustowajaan, jossa tunkiwat sen suun 
          täyteen kalkkia.</p>
        <p>Yönsä wiettiwät miehet Rengon „elintarwepäällikön” Lehtosen luona.</p>
        <p>Aamulla warhain lähti Nuutinen ja eräs paikkakunnalla majailewa salolainen jälleen liikkeelle. Matka suunnattiin ensin Oinaalan kylään Markkulan taloon, jossa isäntä pakotettiin 
          nousemaan wuoteeltaan ja ammuttiin heti pihalle tultuaan.</p>
        <p>Kowalla kiireellä jatkettiin matkaa Ali-Hakkulaan. Täällä oli isäntä kuullut kauhuntöistä ja oli juuri wiemässä wiimeistä hewostaan piiloon, kun roswot tuliwat ja ampuiwat hänet tallin 
          owelle.</p>
        <p>Murhatöiden johdosta eiwät Rengon punaset ryhtyneet mihinkään toimenpiteisiin.</p>
        <p>Tiistaina huhtik. 16 p. murhattiin Rengessa talollinen K. Juppala tullessaan myllystä. Murha tapahtui punasten wartiopaikan läheisyydessä Ahosten Oinaalan wälillä. Juppalan murhaajan 
          punaset ampuiwat.</p>
        <p>Pakolaisia alkoi Renkoon saapua huhtik. 11 p:stä lähtien. Kahden wiikon ajan senjälkeen oli pitäjä alituisena pakolaisleirinä. Pakolaiset majoittuiwat taloihin ja ryöstiwät, minkä irti 
          saiwat. Häikäilemättömässä ryöstössä kunnostautuiwat warsinkin naiset. Taloista wietiin kullat ja hopeat, waatetawarat, elintarpeet, rehu-warat, hewoset ja ajoneuwot. Waatteet wietiin 
          monessa paikoin niin tarkkaan, ettei asukkaille jäänyt muuta kuin, mitä päällä oli. Wielä pakolaisten ollessa wiimeistä päiwää kahdelta emännältä ryöstettiin kengät jalasta. Rengon 
          säästöpankki ryöstettiin, kassakaapit särettiin ja kirjat hukattiin. Murhatun opettaja Santalahden asunto ryöstettiin aiwan puhtaaksi. Meijerin kassa 16,000 mk. ryöstettiin samaten.</p>
        <p>Puhelinasema särettiin ja sentraalikone kannettiin perunakuoppaan. Ennen lähtöään oli punasilla aikomus räjäyttää kirkko ja polttaa talot, mutta lähtö tuli hiukan kiireellisempi, 
          kuin mitä he oliwat luulleet.</p>
        <p>Renkoon kerääntyneiden punakaartien, joiden miesluku nousi aina pariin tuhanteen tuhanteen, päällikkönä toimi joku Pitkänen. Tämä toimitti Rengossa m. m. pakko-oton lähettäen näin 
          otetuista miehistä 50 Riihimäelle. Nämä eiwät kuitenkaan ehtineet perille ja myöhemmin onnistui osan heistä karata kiwääreineen antaen siten alun Rengon suojeluskunnalle, 
          „nummikaartille”.</p>
        <p>Punasten poistuminen pitäjästä tapahtui lauantaina huhtik. 27 p.</p>
        <p>Edellisenä yönä oliwat saksalaiset tyhjentäneet Kosken sillan luona olewat juoksuhaudat punasista. Lauantaina waltasi Rengon punakaartit ankara pakokauhu, jota „nummikaarti” wielä 
          lisäsi sirottelemalla joukkoon muutamia rautarakeita. Punaset pakeniwat Turun suunnalle. Samana päiwänä alkoi „nummikaarti” metsien puhdistamisen saaden 20—30 wankia. Kyliin ja teille 
          asetettiin wartiat.</p>
        <p>Sunnuntaina marssi kaarti walkoset merkit hioissa, torwisoittokunta etunenässä, juhlamarssissa kirkolle. Tänne saapui myöskin pienempi saksalainen joukko-osasto joka otettiin wastaan 
          juhlallisesti torwisoitolla. Myöhemmin saapui wielä Teurolta Uudenmaan rakuunaosasto kersantti Lehtosen ja kopraali Oeschin johdolla. Tämäkin sai yhtä juhlallisen wastaanoton.</p>
        <p>Nykyään Rengossa alkaa olla jälleen rauhallista.</p>
      </Article>
      <Article titleText="Punasten hirmutyöt.">
        <h5>Mustialan maamiesopistolaisten murha.</h5>
        <p>Perjantaina huhtik. 19 p. saapui Mustialan maamiesopistolle, jossa työt oliwat jatkuneet koko kapinan ajan, Mustialan punakaartilta käsky, että opiston ja karjakkokoulun oppilaiden 
          tuli lähteä Forssaan. Matkan tarkotuksesta ei mitään ilmotettu. Huomattuaan wastustuksen turhaksi, oppilaat 38 luwultaan päättiwätkin noudattaa käskyä ja saapuiwat Forssaan samana 
          päiwänä.</p>
        <p>Forssaan tultua oppilaille ilmoitettiin, että heidän täytyi ottaa kiwääri ja liittyä punakaartiin. Kun he osottautuiwat haluttomiksi käskyä noudattamaan, sullottiin heidät junaan ja 
          lähetettiin wielä samana päiwänä Toijalaan, sieltä edelleen Riihimäkeen lähetettäwiksi. Oppilaat saapuiwat illalla Toijalaan, jossa he punakaartilaisten wartioimana sijoitettiin yöksi 
          kansakoululle.</p>
        <p>Aamulla tuotiin oppilaat asemalle, jossa heitä odotti juna täynnä punakaartilaisia. Junassa sijoittuiwat he awowaunuun, jonka toiseen päähän asettu kymmenkunta punakaartilaista 
          wartioimaan.</p>
        <p>Heti junan liikkeelle lähdettyä alkoiwat wartiomiehet solwata oppilaita uhkaillen heille kostoa. Kun nämä eiwät heille mitään wastanneet wartiat kiihtyiwät yhä enemmän alkaen ojennella 
          kiwääreitään. Äkkiä kajahti laukaus ja eräs oppilaista Aarne Sohlberg waipui maahan. Senjälkeen seurasi useampia laukauksia oppilaiden sulloutuessa yhteen kasaan waunun toiseen päähän. 
          Ammuttuaan useita laukauksia punaiset hirwiöt hyökkäsiwät pistimin uhriensa kimppuun. Huomatessaan haawoittuneessa elonmerkkejä pistiwät roistot uhrinsa armotta kuoliaaksi. Kaikkiaan 
          sai surmansa ensimäisessä teurastuksessa kymmenen oppilasta muiden pelastuessa toweriensa ruumiiden taa. Kaiken aikaa juna kulki täyttä wauhtia.</p>
        <p>Teurastuksen päätyttyä alkoiwat roistot ryöstää ruumiita. He riisuiwat niiltä palttoot pukien ne werisinä ylleen. Samaten roswottiin ruumiita kellot, lompakot, rahat ja kaikki 
          arwoesineet. Ruumiit heitettiin radan warteen.</p>
        <p>Hetken kuluttua pääsi roswoissa murhahimo uudellelleen waltaan. Hyökäten uhriensa kimppuun he alkoiwat jälleen ampua, pistää ja lyödä minkä kerkisiwät. Erästä oppilasta lyötiin 
          saappaalla kaswoihin, jolloin hän hyppäsi junasta pelastaen siten henkensä. Junasta hyppäsi toinenkin oppilas, loukaten tällöin itseään jonkun werran. Hengissä pelastui wielä kolmas 
          oppilaista, jonka roistot luullen hänet kuolleeksi heittiwät junasta. Jälellä olewista murhattiin 16, kymmenkunnan ollessa wielä hengissä junan saapuessa Kuurilaan. Kaikkiaan murhattiin 
          oppilaista 26. Helsingissä olleet lähetettiin edelleen Riihimäkeen. Heidän myöhemmästä kohtalostaan ei ole tietoa.</p>
        <p>Murhattujen nimistä olemme saaneet tietoomme seuraawat: Aarne Sohlberg Helsingistä, Antti Lehikoinen Juukasta, A. Rinne Sysmästä, Samuli Puhakka Siikajoelta, Jaakkola Wesilahdelta, 
          Lehtonen Saarijärweltä, Uuno Saarinen Halikosta, Kaarela Sauwosta, Tuominen Ypäjältä ja Niinimäki Ätsäristä.</p>
      </Article>
      <Article titleText="Päämajan tiedonanto.">
        <h5>Kiiwaita taisteluita Hämeen rintamalla. — Joukot etenewät huomattawasti Sawossa. — Runsas sotasaalis Wiipurissa.</h5>
        <p className="quotation">Päämaja ilmoittaa huhtik. 30 p. (S. T. T.)</p>
        <p><span className="accent">Läntinen sotanäyttämö:</span> Hauhon ja Tuuloksen seuduilta ilmoitetaan kiiwaista taisteluista. Lahden seudulla wihollinen jatkaa murtautumisyrityksiään.</p>
        <p><span className="accent">Sawon rintama:</span> Joukkomme jatkawat etenemistään. Edeten rautatien länsipuolella olemme Wuolenkoskelta ja Rihusta saapuneet Wanhataloon, kahdeksan 
        kilometriä länteen Jaalasta. Hillosenalueella on wihollinen pakotettu luopumaan wahwoista asemistaan. Rautatien itäpuolella walloitti etelä-Sawon rykmentin luutnantti Spåren pataljoona 
        pitkällisen ja kiiwaan taistelun jälkeen Heikkilän ja Tuohikodin kylät, jolloin saimme kaksi kuularuiskua ja muuta saalista. Waltaamalla mainituissa kylissä sijaitsewa tärkeä tienristeys 
        on yhteys itäarmeijan oikean siiwen kanssa saawutettu.</p>
        <p><span className="accent">Itäinen sotanäyttämö:</span> Sorwalin puhdistamisen jälkeen on Wiipurin linnoitus kokonaan hallussamme. Kenraali Wilkmanin joukot, jotka tarkalla 
          tykistötulella walmistiwat hyökkäystään waltasiwat rynnäköllä kaupunginosan toisensa jälkeen. Runsas sotasaalis, jota ei wielä ole ennätetty laskea, on joutunut käsiimme. Saaliin 
          joukossa on m. m. yli 100 tykkiä.</p>
      </Article>
      <Article titleText="Ryssät toimimassa.">
        <p className="accent">Itäinen sotanäyttämö:</p>
        <p>Wiipurista peräytywiä wiholliswoimia takaa ajaessaan owat joukkomme ehtineet Säkkijärwelle. Wahwoja wenäläisiä sotawoimia kootaan Pietarin pohjoispuolelle. Wenäläiset rajajoukot 
          ammuskelewat johtajiensa puolueettomuuswakuutuksista huolimatta yhä edelleen joukkojamme sekä tykki- että jalkawäkitulella.</p>
        <p className="signature">Päämajoitusmestari Ignatius.</p>
      </Article>
      <Article titleText="Hanhon ja Pälkäneen taisteluista">
        <p>ja punasten siellä wiime lauantaina aikomasta murtautumisyrityksestä on eräs taisteluihin osaa ottanut m. m. kertonut seuraawaa:</p>
        <p>Hänen joukkonsa oliwat saapuneet Kangasalta Pälkäneelle edellisenä tiistaina. Punasten asemat sijaitsiwat silloin n. 5 km. päässä. Walkoiset alkoiwat heti hyökätä työntäen punasia 
          edellään. Erään sillan luona Pälkäneellä oli walkosilla 27 miehinen wartiosto, ja paikkakuntalaisten kertomusten mukaan sillä oli wastassaan kokonaista 4,000 punasta. Nämä eiwät 
          kuitenkaan uskaltaneet ryhtyä hyökkäykseen, he kun luuliwat, että tämä pieni joukko oli asetettu wain syötiksi ja, että sen takana oli suurempia joukkoja. Punasten epäröidessä tekiwät 
          walkoset kiertoliikkeen ja pääsiwät siten punasten selkäpuolelle. Huomattuaan olewansa saarroksiin joutumaisillaan, alkoiwat punaset perääntyä Hauhoa kohden. Mutta pitkälle he eiwät 
          ennättäneet kulkea, ennenkuin kohtasiwat saksalaisia ja toisia hallituksen joukkoja. Pahasti ahdistettuna joka taholta, he yrittiwät n. 6 km. Hauhon kirkolta murtautua walkoisten linjain 
          läpi. Tämä ei kuitenkaan onnistunut ja hyökkääjät lyötiin suuria tappioita kärsien takasin. Eräälle sillalle, jonka yli punasten pakomatkallaan täytyi kulkea jättiwät he n. 300 
          kaatunutta. Walkoisten tappiot owat wähäiset. Sunnuntain seuduilla punaset oliwat ahtaassa saarroksessa Hauhon kirkon paikkeilla.</p>
      </Article>
      <Article titleText="Punaisten johtajien petos Helsingissä.">
        <h5>Miten antautuminen saatiin estettyä.</h5>
        <p>Kun Helsinkiin alkoi saapua tietoja saksalaisten lähestymisestä, niin ryhtyivät eräät oikeistososialistit toimenpiteisiin, joiden tarkoituksenä oli saada punakaarti verenvuodatuksen ja 
          mielettömän taistelun välttämiseksi antautumaan. Keskiviikkona t.k. 10 p:nä oli punakaartilla kokous, jossa tehtiin selkoa punaisten joukkojen toivottomasta asemasta ja jossa oli mukana 
          myöskin Ruotsin konsulaatin edustaja. Hänen kanssaan oli pari punakaartilaista käynyt Albergassa omin silmin näkemässä, että kaupunkia kohti tulevat joukot todella olivat saksalaisia.</p>
        <p>Kokouksessa olijat olivat olleet yksimielisiä siitä, että vastarinta niitä vastaan oli aivan toivoton. Tätä käsitystä vastaan laadittiin antautumiskirja, jonka punakaartin „päälliköt“ 
          allekirjoittivat ja joka kokonaisuudessaan oli seuraava:</p>
        <Image src={quoteStart} className="symbol"/>
        <p className="quotation">Koska Helsingin kaupungissa nykyään ei löydy puolustusjoukkoja, kehoitetaan verenvuodatuksen ja kaupungin hävittämisen välttämiseksi täkäläisiä 
          punakaartilaisia olemaan ryhtymättä vastarintaan, kun saksalaiset joukot, jotka ovat jo aivan Helsingin lähistössä ja Ruotsin konsulaatin antaman vakuutuksen mukaan tekevät noin 
          40,000 miestä, astuvat maihin. Sentähden ylipäällikkö on täkäläisen Ruotsin konsulaatin kautta esittänyt punakaartilaisille seuraavat antautumisehdot:</p>
        <p className="leftP quotation">1) Aseet ovat paikalla luovutettavat;<br />2) Kaikesta vastarinnasta on luovuttava;<br />3) Kaikkien valkoisten kannattajien turvallisuus on taattava;
          <br />4) Yleisten sotilaallisten varastojen hävittämiseen ei saa ryhtyä;<br />5) Ylipäällikkö takaa hengenvarmuuden punakaartien jäsenille, jos nämä ehdot täytetään.</p>
        <p className="quotation">Arvoisalle yleisölle ilmoitamme, että yleisestä järjestyksestä kaupungissa vastaa miliisilaitos.</p>
        <p className="quotation">Helsingissä huhtik. 10 p:nä 1918.</p>
        <p className="centered"><span className="signature">F. E. Johansson.</span><br /><span className="caption">Helsingin paikallisen Punaisen kaartin esikunnan sekä sota-asiain 
          päällikkö.</span></p>
        <p className="centered"><span className="signature">Robert H. Hurskainen.</span><br /><span className="caption">Paikallisen esikunnan Työasiain päällikkö.</span></p>
        <p className="centered"><span className="signature">Edv. Nyqvist.</span><br /><span className="caption">Helsingin järjestyspäällikkö.</span></p>
        <Image src={quoteEnd} className="symbol"/>
        <p>Asiakirjaa kirjoitettiin kaksi kappaletta. Samalla sovittiin siitä, että jo yön aikana painatetaan poliisikirjapainossa ja jaetaan aamusella punakaartilaisille ja kaupungin asukkaille. 
          Ruotsalaisella realilyseolla olleitten vankien aseman turvaamiseksi taas toimitettiin heidän vartioikseen luotettavia vanginvartioita ja poistettiin punakaartilaisvartiosto.</p>
        <p>Yön aikana saivat asiat kuitenkin uuden käänteen. Viipurista oli Helsinkiin saapunut „valtuutettu“ Kiviranta villitsemään helsinkiläisiä joukkoja ja onnistui tehtävässään erittäin 
          hyvin. Torstaita vasten yöllä pidetyssä kokouksessa oli hän leimannut kaikki tiedot saksalaisten saapumisesta porvarien katalaksi petokseksi. „Kansanvaltuuskunta“ oli muka saanut varmat 
          tiedot, että valkoiset joukot käsittävät vain muutamia sotamiehiä. Tämän johdosta oli „valtuuskunta“ lähettänyt hänet „järjestämään“ Helsingin puolustusta.</p>
        <p>Kuultuaan „selvityksen“ huusivat punakaartilaiset „aseisiin“, päättivät pidättää antautumista puuhanneet johtajansa ja estivät antautumisjulistuksen julkaisemisen. Vanginvartijat 
          reaalilyseolta poistettiin ja kenenkään ei sen jälkeen sallittu edes puhua antautumisesta.</p>
        <p>Miliisipäällikkö Nyqvist, joka etenkin pontevasti oli koettanut toimia antautumisen aikaansaamiseksi, oli jo aikaisemmin joutunut hurjien mellastajien vihoihin. Kun Vuorimiehenkadun 
          1:ssä toiminut rosvojoukko koetti saada aikaan miliisien lähettämistä rintamalle, niin hän oli asettunut jyrkästi vastustamaan tätä hanketta ja saanut myöskin aikaan sen että roistojen 
          katala alote jäi toteuttamatta. Voimme aavistaa, mitä kaikkea kaupungissamme olisi saattanut koettujen hirmuisuuksien lisäksi tapahtua, jos Savinaisen johtama „kaarti” olisi päässyt 
          yksin huolehtimaan kaupungin „järjestyksestä” ja asukkaiden turvallisuudesta.</p>
      </Article>

      <div className="interTitle">7.5.1918</div>
      <Article titleText="Sakasalaisten sankarien hautaus.">
        <p>Eilen illalla tapahtui jälleen Hämeenlinnan Tähtipuistossa 20:n Suomen wapaustaistelussa kaatuneen saksalaisen sankarin hautaus. Hautaus tapahtui suurin kunnianosotuksin saksalaisten 
          ja suomalaisten sotawäenosostojen, kaupungin wiranomaisten ja suuren yleisöjoukon läsnäollessa. Haudalla pidettiin useita puheita. Haudalle laskettiin seppeleitä m. m. 
          kaupunginwaltuuston, kaatuneiden towerien, Suomen Länsiarmeijan, Suomalaisten jääkärien, Hämeenlinnan suojeluskunnan y. m. puolesta.</p>
      </Article>
      <Article titleText="Vangittujen kohtaloita.">
        <h5>Wiipuriin wiedyt.</h5>
        <p>Jo tammikuun loppupäiwinä, punasen hirmuwallan alkaessa, wangittiin täällä m.m. herrat Kaarlo Welan, A. Lindeqwist, E. Kilpi ja K. Pyhämäki, H:linnasta. Heidät sijoitettiin täkäl. 
          lääninwankilaan, minne wähitellen kerääntyi „waltiollisia wankeja” yhä useampia. — Kun maa wihdoin alkoi polttaa punaisten jalkojen alla ja Siperian matkan haaweet kangastella, heidän 
          mielissään, siirrettiin wankilan waarallisimmat asukkaatkin „turwallisempaan” paikkaan. Tästä matkasta, joka muodostui warsin seikkailurikkaaksi, olemme onnistuneet saamaan seuraawan 
          kuwauksen:</p>
        <p>Paitsi yllämainittuja, oli matkalla mukana 19 muuta henkilöä, joiden joukossa m. m. pankinjohtaja W. Airola, ja hra M. Arwola Toijalasta, & Palomäki, Urjalasta, K. Tuulos, Tampereelta, 
          P. Siiwola, Hollolasta ja E. Salminen, Riihimäeltä. Tätä joukkuetta saattoi itse komissari Kallio, ja wartijoina oli m. m. pari wasta wapautettua rikollista. Matkan määränä piti olla 
          Lappeenranta. Ensi pysäytys tapahtui kuitenkin jo Riihimäessä, missä wangit saiwat odottaa 14 tuntia, sullottuina 4 miestä kuhunkin wankiwaunun komeroon, jonka lattian pinta-ala on 
          noin 1+1 m, Toisen kerran pysähtyi matka 3 päiwäksi Lahdessa, missä wangit wietiin kaupungintalolle. Tällä wäliajalla muutettiin nähtäwästi matkan päämääräkin, sillä 18 p. huhtik. 
          saapuiwat wangitut Wiipuriin, missä heidät sijoitettiin keskuskasarmiin. Täällä oleskeliwat he hirwittäwän saastaisissa komeroissa noin kahden wiikon ajan. Sattui tapaus, joka jälleen 
          muutti heidän olinpaikkaansa. Noin 180 miestä käsittäwä urhoollinen joukko nuoria miehiä, jotka luultawasti oliwat Wiipurin suojeluskuntalaisia, aikoi wapauttaa kaikki wankeina olewat 
          walkoiset. Heidän aikeensa onnistuikin jo n.s. Kolikkoinmäen esikaupungissa, mutta keskikaupungille saawuttuaan oli joukon yliwoiman wuoksi antauduttawa. Tämän joukon uhatessa 
          keskuskasarmia, siirrettiin wangit, wapauttajain kiiwääri ja kuularuiskutulen soidessa aiwan läheisyydessä, Wiipurin wanhaan linnaan, minne jo aikaisemmin oli kerätty muita samanosaisia. 
          Matkalle lähdettäissä uhattiin wangit heittää „upseerien hautaan kiwi kaulassa” toisin sanoen heittää sillalta mereen, kuten wenäläiset upseerit wiime kewäänä. Pakolaisia alkoi saapua 
          kaupunkiin eri suunnilta ja walkoisten saartorengas oli jo kolmelta taholta warsin lähellä. Heidän ketjunsa lienee ollut Papulan puolella, koska aiwan linnan läheisellä niemellä olewa 
          punaisten tykistöpatteri innokkaasti pommitti sitä suuntaa. Tämä patteri oli luonnollisesti asetettu walkoisille „syötiksi” ampua linnaa, jolloin wankien kohtalokin saisi ratkaisunsa. 
          Huolimatta punaisten melkein herkeämättömästä tykkitulesta eiwät walkoiset siihen wastanneet ennenkuin 2 wuorokauden kuluttua. Heidän ensi laukauksensa sattui punaisten erään tykin 
          eteen, toinen taakse, mutta jo kolmas osui tarkasti maaliin. Tällöin oliwat punikit jo jättäneet asemansa. Tykkituli waikeni ja taas uskalsiwat punaisetkin saapua takaisin, awatakseen 
          wielä ehjinä olleista tykeistä tulen uudelleen. Nyt alkoiwat walkoisten laukaukset hiwellä myöskin wanhan linnan seiniä. Punaset jättiwät jälleen asemansa, tällä kerralla ainaiseksi. 
          — Oli huhtik. 28 p:n ilta. Tykkituli kiihtyi kiihtymistään, ruudin sawuun peittyiwät linnan huoneet. Wankien n.s. tupakkahuoneeseen iski yöllä tykinammus. Huone tuli hohtawan punaiseksi 
          ja peittyi sawuun ja seinistä irtaantuneisiin sorapilwiin. Kolme miestä meni tärähdyksestä tainnoksiin, mutta säilyiwät kuin ihmeen kautta enemmistä wammoista. Linnan torniin sattuiwat 
          enimmät luodit ja awoinna ammottaa sen seinissä aukkoja. — Nyt heräsi hra Airolan aiwoissa rohkea tuuma. Hän ehdotti, että wangit waltaisiwat linnan. Keskusteltuaan kaikkien 
          osatowereittensa kanssa hän alkoi warowasti puhua asiaa wartioille. Helposti olikin nämä saatu tuumaan mukaan ja saatuaan wielä linnan komisaarilta asewarastojen awaimet, oliwat wangit 
          tuota pikaa aseman herroja. He päättiwätkin taistella wiimeiseen mieheen, jos punaiset yrittäisiwät wielä tulla linnaa waltaamaan. Otetttin tunnussanaksi: „wapaita miehiä”. Saapui 
          sitten yht'äkkiä linnan portille punaisten patrulli. Sen laskiwat wartiat estelemättä sisään, mutta saatuaan siltä paluutien suletuksi, riisuttiin se aseista, ja otettiin „sotawangiksi” 
          — Pommitus jatkui yhä, tosin werkkaisemmin, ja siksi päättiwät linnan haltijat lähettää walkoisen raketin ilmaan antautumisen merkiksi. Niin tehtiin, mutta se ei tuottanut toiwottua 
          tulosta. Myöhemmin saiwat wangit kuulla, että walkoiset kyllä oliwat merkin nähneet, mutta pitäneet sitä wain sotajuonena. — Jostakin linnan warastoista löytyi walkoista ja sinistä 
          kangasta ja näistä neulottiin lippu, joka wedettiin tornin lipputankoon. Alkoi jo waljeta aamu ja walkoiset huomasiwat linnan lipun waihtaneen wäriä. ja nyt katsottiin olewan syytä 
          waihtaa tunnussanaakin „eläköön!”. Aamuhämärässä hiipi ensimäinen suojeluskuntalaisjoukko warowasti kaupungista päin linnaan, missä se raikuwin eläköönhuudoin otettiin wastaan. — 
          Punaiset oliwat paenneet Sorwaliin päin, jossa taistelut jatkuiwat noin päiwän ajan. Oleskeltuaan wielä pari päiwää wiipurilaisten parissa, m. m. etsien uusia asukkaita tyhjiksi 
          jääneisiin wankikomeroihin, palasiwat nämä paljon kokeneet miehet koteihinsa. Heidän usein niin synkältä näyttänyt retkensä oli nyt päättynyt ja kaikki oliwat wahingoittumattomina 
          pelastuneet kohtalonsa koetuksista.</p>
      </Article>
      <Article titleText="Armeijamme viime voitot.">
        <h5>Koskella on 8,000 punasta antautunut, sitä ennen hurjasti riehuttuaan rauhallisen wäestön keskuudessa. — Luumäen kirkonkylä ja Kouwola walloitettu.</h5>
        <p className="quotation">(S. W. T.) Päämajan tiedonanto toukokuun 3 p:ltä.</p>
        <p><span className="accent">Läntinen sotanäyttämö:</span> Kun wielä noin 8,000 punaista antautui eilen ewersti, wapaaherra von Brandensteinin joukoille Kosken seuduilla, woidaan sotatoimet 
          Hämeenlinnan ja Lahden wälisellä alueella katsoa loppuun suoritetuiksi. Antautumisen edelliset päiwät oli wihollinen käyttänyt yhä lisätäkseen harjoittamiensa häpeällisten rikosten sarjaa. 
          Seudut, missä wihollinen on liikkunut, on laajalti häwitetty ja rauhallinen wäestö murhattu, sen kotieläimet ammuttu ja talot poltettu. Seudun puhdistaminen hajallaan kiertelewistä 
          roistojoukoista on parhaillaan käynnissä ja otetaan tällöin talteen kaikenlaisia aseita, hewosia, elukoita ja muuta wihollisen warastamaa tawaraa.</p>
        <p><span className="accent">Sawon rintama:</span> Eilen waltasi kolmas Karjalan rykmentti taistelulla Luumäen kirkonkylän, jolloin saatiin yksi tykki ja 7 kuularuiskua. Muutamat osat 
          Etelä-Sawon rykmentistä, rykmentinpäällikkö Londenin johdolla owat tänä aamuna wallottaneet Kouwolan siellä olewine kasarmeineen. Otettiin satakunta wankia ja jonkunwerran sotasaalista.</p>
        <p className="centered">Päämajoitusmestari</p>
        <p className="signature">Ignatius.</p>
      </Article>

      <div className="interTitle">9.5.1918</div>
      <Article titleText="Kapinallisten tuomitseminen.">
        <h5>Waasan senaatin kanta.</h5>
        <p>Wankeja koskewassa kysymyksessä on Waasan hallitus sitä mieltä, ettei wangittuja kapinallisia woida tuomita sotaoikeudessa, waan että heidän asiansa on maan lakien mukaan käsiteltäwä ja 
          ratkaistawa howioikeudessa. Toinen asia on, woiwatko howioikeudet wankien suureen lukumäärään katsoen käytännössä suorittaa tämän tehtäwän. Sen wuoksi on suunniteltu perustettawaksi 
          erityinen howioikeuden tapainen tuomioistuin, johon kuuluu 5 jäsentä. Tämä tuomioistuin tulee tuomitsemaan woimassa olewan rikoslain mukaan, jossa on säädetty kylläkin ankara rangaistus 
          kysymyksessä olewista rikoksista.</p>
        <p>Pohjoisessa on ylipäällikkö nimenomaan kieltänyt tuomitsemasta kumouksellisia sotaoikeudessa, joka on olemassa armeijaa ja sen jäseniä warten. Ainoastaan aniharwoissa tapauksissa, 
          jolloin wanki on huomattu wikapääksi erittäin törkeihin ja kauhistuttawiin tekoihin, on hänet tuomittu sotaoikeudessa, jonka langettama tuomio on heti pantu täytäntöön.</p>
        <p>Näitä tapauksia lukuunottamatta ei Pohjois-Suomessa ole wielä tuomittu wankeja, waan owat siellä tähän asti toimineet yksinomaan tutkintokunnat.</p>
      </Article>
      <Article titleText="Sotawangit.">
        <h5>Tähän mennessä noin 60,000.</h5>
        <p>Yhteenlaskemalla walkokaartin ja saksalaisten tiedonantojen mainitsemat luwut wangiksi joutuneista punakaartilaisista, huomataan, että Tampereella, Wiipurissa, Helsingissä ja 
          Toijalan—Riihimäen—Lahden seuduilla wangiksi joutuneita on noin 60,000.</p>
      </Article>
      <Article titleText="Sos. dem. kansanedustajat.">
        <h5>10—15 edustajaa jälellä.</h5>
        <p>Sos. dem. eduskuntaryhmään kuului ennen kapinaa 92 edustajaa. Sikäli kuin tähän mennessä saapuneista tiedoista woi päättää, on näistä yli 70 paennut maasta tai joutunut wangeiksi. 
          Jäljellä on 10—15 edustajaa.</p>
      </Article>
      <Article titleText="Punasten murhatyöt.">
        <h5>Urjalan murhat.</h5>
        <p>Wiime aikoina liikkuneet huhut asessori E. Furuhjelmin ja ewersti Otto Furuhjelmin murhista owat nyttemmin osottautuneet tosiksi. Paitsi näitä on saatu selwille, että murhatuiksi owat 
          tulleet myöskin asess. Furuhjelmin apulainen how. ausk. Otto v. Törne ja lak. kand. Hildin Granholm, kumpikin kotoisin Helsingistä, sekä lak. yliopp. Carolus Asplund Turusta.</p>
        <p>Asessori Furuhjelmin wangitsiwat punaset jo kapinan alkupuolella omistamassaan Honkolan kartanossa. Senjälkeen häntä pidettiin wangittuna Urjalan hulluinhuoneessa. Kohtelu waihteli 
          wartioiden mukaan. Paikkakuntalaisten yrityksillä hänen wapauttamisekseen ei ollut menestystä.</p>
        <p>Huhtik. puoliwälissä alkoiwat punaset Toijalassa joutua erityisemmän raiwon waltaan. Kotitarkastuksia pidettiin taajaan, asukkailta ryöstettiin kaikki mitä irti saatiin. Myös Honkolan 
          kartanoon saapuiwat „tarkastajat” pitämään yhdettätoista tarkastustaan. Tarkastuksen päätyttyä wangittiin ylioppilas Asplund ja wietiin Toijalaan. Paria päiwää myöhemmin saapui kartanoon 
          jälleen roswojoukko ryöstäen rahat ja arwoesineet. Tällöin hrat v. Törne ja Granholm asetettiin toistensa taa ja yritettiin ampua. Kuula hipaisi kuitenkin wain etumaisena seisowan v. 
          Törnen ohimoa, jonka jälkeen roswot päästiwät heidät wapaaksi. Seuraawana aamuna pidätettiin hrat v. Törne ja Granholm uudelleen sekä myöskin ewersti Furuhjelm ja wietiin Toijalaan, 
          jonne myöskin asessori Furuhjelm samoihin aikoihin oli tuotu.</p>
        <p>Tästä alkaen katosiwat mainitut henkilöt täydelleen, kunnes huhtik. 29 p. ewersti Furuhjelmin sekä tuom. v. Törne ja Granholmin ruumiit löydettiin kaiwettuna erääseen suohon n. 2 km. 
          Toijalasta Hämeenlinnaan johtawan maantien warrella. Mikäli kerrotaan aiottiin wangitut ensin wiedä Riihimäkeen, mutta wähän matkaa Toijalasta pysäytettiinkin juna ja wangitut tuotiin 
          ulos sekä ammuttiin läheisellä maantiellä. Tuomari Furuhjelmin, yliopp. Asplundin sekä kolmen tuntemattoman ruumiit tawattiin huhtik. 30 p. haudattuina suohon Toijalasta Wiialaan päin 
          johtawan tien warrella. Murhatut oliwat kaikki ammutut räjähtäwillä kuulilla, jonka jälkeen ruumiit oli ryöstetty.</p>
        <h5>Kylmäkoskella surmattu lähes 20 miestä.</h5>
        <p>Kylmäkoskella punaryssät ennättiwät toimeenpanna suunnittelemansa werityöt laajemmassa mittakaawassa kuin useimmissa muissa paikoissa näillä seuduin, Walkeakoskea lukuunottamatta. Ja 
          kamalaa jälkeä he tekiwät: pienestä, muutaman tuhannen asukkaan pitäjästä murhattiin lähes parikymmentä henkilöä, minkä lisäksi suuri joukko kuljetettiin wankeina Riihimäelle. 
          Wiimemainituista on muutamien kohtalo wielä epäwarma.</p>
        <p>Jo helmikuun 1 p:nä punakaartilaiset tekiwät kolme murhaa, joista jo aikaisemmin olemme kertoneet. Silloin he nimittäin murhasiwat maanwilj. Erland Käräwän sekä talollisenpojat 
          Kaarle Johannes Kelon ja Arwo Einar Riipan.</p>
        <p>Mutta wasta wiime wiikolla pakonsa edellisinä päiwinä punikit oikein yltyiwät ihmisiä murhaamaan. Silloin tapettiin eri päiwinä maanwilj. Emil Torkko ja hänen poikansa Matti Torkko, 
          maanwiljelijät Oskari Seppälä, Kustaa Pusa, Juho Rannikko, Juho Maijala, Alfred Nääppä, E. Kassari ynnä hänen poikansa sekä kauppias Wihtori Tuomaala ja poliisikonstaapeli Walfrid 
          Sipilä.</p>
        <p>Murhat tehtiin tawallisesti siten, että asianomainen henkilö käytiin wangitsemassa kotoansa ja lähdettiin kuljettamaan pois. Jonkun matkan päässä poikettiin metsään ja siellä uhri 
          ammuttiin. Ruumiit sitten useimmiten wielä silwottiin ja ryöstettiin.</p>
        <p>Useita kymmeniä paikkakuntalaisia kuljetettiin sitäpaitsi wangittuina Riihimäelle „pakkotöihin”. Täällä toimeenpannussa werilöylyssä, josta ennemmin olemme kertoneet, saiwat surmansa 
          ainakin maanwiljelijät Oskari Suomela ja Wäinö Kannisto, jonka lisäksi maanwilj. Frans Suoranta, maanwilj. poika Antti Ojanen ja Ilanniston talon renki Woittonen haawoittuiwat. Useat 
          Riihimäelle wiedyistä eiwät wielä ole palanneet, joten murhattujen lukumäärä saattaa wielä kohota.</p>
        <h5>Ananias Abrahamsson.</h5>
        <p>Tullipäällysmies Ananias Abrahamsson ammuttiin Parkun pellolla huhtik. 26 p:nä. 22 päiwänä weiwät tullikamarin punaset roistot, Oskar Fredrik Bergman ja Johan Albert Petäjä wanhan 
          esimiehensä hänen kotoaan Kaupungin hotelliin kuulusteltawaksi sillä seurauksella, että Esikunta wapautti hänet. Mutta tähän eiwät nuo roistot tyytyneetkään, waan wangitsiwat hänet wähän 
          ajan kuluttua uudelleen ja pitiwät häntä sitten wangittuna siksi, kunnes hän useiden muiden H:linnalaisten kera wietiin 24 p:nä huhtik. muka työhön rintamalle. Mutta joukkueen tultua 
          Parkulle, komensiwatkin punaset wankinsa ampumaan 19 towereistaan, näiden joukossa wanhan tullipäällysmiehen Ananias Abrahamsson'in.</p>
        <p>Ananias A. syntyi Janakkalassa 12 p:nä syysk. 1854. Otettiin asema mieheksi täkäläiselle asemalle 1 p:nä huhtik. 1876, mutta siirtyi jo 5 p:nä kesäk. 1876 Tullilaitoksen palwelukseen 
          tultuaan silloin määrätyksi ylimääräiseksi tulliwartijaksi H:linnan wäliaikaiseen tullitoimistoon. 1888 nimitettiin, A. wanhemmaksi wartijaksi H:linnan tullikamariin, josta hän 1900 
          yleni päällysmieheksi.</p>
        <p>A. oli wirkatoimiinsa eriomaisen hywin perehtynyt ja täsmällisenä, uutterana wirkatoimissaan, oli hän esimerkkinä nuoremmille. Tunnustuksena uutteruudestaan saikin hän wuosien kuluessa 
          niin hywin kulta-, kuin hopeamitallin, edellinen rinnassa ja jälkimäinen kaulassa kannettawaksi. Nyt on wanha palwelija päässyt lepoon pitkästä työpäiwästään, mutta kauniina on hänen 
          muistonsa kauwan eläwä hänen wirkatowereittensa keskuudessa.</p>
        <p>Kunnia isänmaansa edestä wirassaan kaatuneelle wanhalle palwelijalle!</p>
      </Article>
      <Article titleText="Lopullinen voitto kapinallisista saatu">
        <h5>Haminakin jo wallattu. Otettu 4 wenäläistä sotalaiwaa ja 2 kokonaista panssarijunaa y. m. arwokasta saalista. — Wankeja 4,300.</h5>
        <p className="quotation">(S. W. T.) Päämajan tiedonanto toukokuun 5 päiwältä:</p>
        <p>Punaisista saatu lopullinen woitto. Heidän wiimeinen warustuksensa Hamina wallattu. Eräs ratsuwäkijoukko Sarlinin ryhmästä marssi Haminaan ja kohta sen jälkeen osa majuri Heiskasen 
          rykmenttiä. Haminassa otettiin puoli tusinaa tykkejä, parikymmentä kuularuiskua ja 1,000 kiwääriä, kaksi asestettua wenäläistä laiwaa. Kotkassa saatu saaliiksi 2 kokonaista panssarijunaa 
          asestettuna woimakkailla tykeillä ja 12 kuularuiskulla. Sitä paitsi saatiin yli 30 tykkiä, monta kuularuiskua ja 4,000 kiwääriä. Wankien luku nousee Kotkassa 4,000 mieheen ja Haminassa 
          300:aan.</p>
        <p className="centered">Päämajotusmestari</p>
        <p className="signature">Ignatius.</p>
        <h5>* * *</h5>
        <p className="quotation">(S. W. T.) Päämajan tiedonanto toukokuun 5 päiwältä:</p>
        <p>Puhdistustyö jatkuu säännöllisesti. Yhteinen saksalaisten awulla otettujen wankien luku suurenee yhä.</p>
        <p><span className="accent">Sawon armeija:</span> Kenraali Linderin urheat joukot, jotka eilen waltasiwat Kotkan, ottiwat haltuunsa kaksi wenäläistä laiwaa, jotka eilen tuliwat satamaan 
          tietämättä sitä, että olimme miehittäneet Kotkan. Toinen oli asestettu tykeillä ja kuularuiskuilla sekä kuljetti mukanaan kiwääreitä, toinen, isompi, toi sotatarpeita. Itäarmeijan 
          rintamilta ei mitään uutta kerrottawana.</p>
        <p className="centered">Päämajotusmestari</p>
        <p className="signature">Ignatius.</p>
      </Article>

      <div className="interTitle">11.5.1918</div>
      <Article titleText="Oskari Vekka.">
        <h5>In memoriam.</h5>
        <p>Olen lukenut sanomalehdistä Sinun kuolinilmoituksesi.</p>
        <p> Kuollut. Kaatunut isänmaan puolesta.</p>
        <p> Minä muistan Sinut. Kuinka monta vuotta sitä onkaan? Kahdeksan, yhdeksän, ehkä kymmenen vuotta. Me olimme nuoria, oli kevät, koko maailmassa oli kevät ja juhla. Hämeenlinna - sen 
          hiljaiset kadut - meidän värikkäät tulevaisuuden unelmamme . . . Niin, jotakin merkillistä piti meistä tulla, ja me rakensimme tuulentupiamme, ja ilmassa oli aavistus jostakin 
          salaperäisestä ja suuresta. Sillä meillä oli verissämme nuoruus ja sen hehku ja jäsenissämme lauloi voima ja terveys. Ja lukemattomat eri seikat sitäpaisi yhdistivät meitä toisiimme. 
          Me olimme ystäviä niinkuin vain harvat. Meillä ei ollut toisiltamme mitään salattavaa.</p>
        <p>Minä muistan Sinut, kaatunut ystäväni. Sinähän se keksit minun kirjailijanimenikin. Ja Sinä tunsit siihen aikaan kaikki minun nuoret suruni.</p>
        <p>Sitten Helsingissä... Kokonainen maailma muistoja. Yhteiset iltahetket, samat harrastukset, samat pyrkimykset ja toiveet, kummallakin sydämessään yhä sama polttava kaipuu. Minne? 
          Mihin? Jumala sen tiesi. Jonnekin olemattomaan, kauas — meidän valtimomme löivät kiihkeämmässä tahdissa kuin tavallista, ja me tahdoimme ottaa elämältä osamme, me emme halunneet 
          ummehtua lukukamarien ahtaudessa. Ja sillävälin lujittuivat ystävyyssiteet välillemme. Me emme koskaan puhuneet siitä, mutta me ymmärsimme toisiamme niinkuin vain harvat.</p>
        <p>Minä muistan Sinut. Ystävä! Sinä olet nyt saavuttanut päämääräsi. Sinun veresi hehkuva polte on sammunut. Mutta minä en valita Sinun kohtaloasi, pikemmin kadehdin. Sinulle suotiin onni 
          olla niiden urhojen joukossa, jotka verellään ostivat maallemme vapauden, ja Sinä kaaduit sankarina kunnian kentällä. Minusta tuntuu — kun nyt Sinua ajattelen — ikäänkuin kaikki Sinun 
          askeleesi, pyrkimyksesi, kaipuusi olisivat suuntautuneet tätä ainoaa kohti — ikäänkuin kaikki Sinun ajatuksesi olisivat keskittyneet tähän ainoaan... </p>
        <p>Sinä olit erikoinen persoonallisuus, syvä luonne — ja Sinä tahdoit saavuttaa — joko kaikki tai ei mitään. Sinä et voinut tyytyä puolinaiseen.</p>
        <p> Ja sinä saavutitkin kaikki.</p>
        <p className="centered">17. IV. 18</p>
        <p className="signature">U. W. Walakorpi.</p>
      </Article>
      <Article titleText="Roistovaltaa Kalvolassa.">
        <h5>Parikymmentä murhaa. — Murhapolttoja, kirkkoja ja 7 taloa maan tasalla. — Kuulumatonta ryöstöä ja raiskausta.</h5>
        <p>Helmikuun 2 p. kauniina lauantaina, alkoi Kalvolan surullisen kuuluisa punakaarti julkisen toimintansa. Miehiä vilisi virtanaan joka kujalla ja kankaalla. Kaikilta epäilyttäviltä 
          otettiin aseet pois, taloista ja kartanoista kuljetettiin suuret joukot ruokatarpeita Väinölään, Suomal. seuran talolle, jonne sakki kokoontui hurraten ja meluten. Siellä sitte syötiin, 
          juotiin ja mässättiin lähes kolme kuukautta. Välillä toimitettiin moniä kymmeniä kotitarkastuksia ja vangitsemisia, otettiin sakkoja ja vangittiin taas. Kauppaliikkeistä vietiin tuhansien 
          markkain edestä tavaraa ja ulkokuntiin tehtiin lukemattomia ryöstöretkiä. (Sotasaaliina komeili Haukilan kartanon pellin tupsutkin kiväärin kahvassa). Kaikki saivat ihmiset antaa: 
          leipänsä, maitonsa, teurastaa elukkansa, riisua vaatteet päältään ja tyhjentää sänkynsä, luovuttaa jalkineensa, ajokalunsa ja hevosensa. Kuten ainakin ryövärit, marssivat punikit 
          pyssyineen, pistimineen, puukkoineen. Jos vastustit, niin vangiksi ja sakko piti maksaa. Maaliskuun 1 p:nä ei enää riittänyt raha, silloin jo ammuttiin ja pistimillä mitä raaimmalla 
          tavalla murhattiin tilanomistajat Arvi Stenvik ja Kaarlo Marttila, edellinen Saviniemen talon pihamaalla ja jälkimäinen kotonaan. Kaksi päivää jälkeen päin surmattiin yhtä julmalla 
          tavalla tilanomistaja August Seppälä sekä kuljetettiin pitäjän hautausmaalle. Sittemmin murhainto kasvoi kasvamistaan, listalla oli kuolemaan tuomittujen nimiä jo yli 60. 
          Vieraspaikkakuntalaisia ammuttiin aina kun tavattiin. Niiden lukumäärästä ei tiedetä, mutta paljon niitä joka tapauksessa on. Metsästäjä Kustaa Pero ammuttiin myös ja kidutettiin, kun 
          oli saatu kiinni Pälkäneellä ja sieltä lähetetty Kalvolaan. Hän oli aikonut yhtyä valkoisiin. Viimeiset viikot olivat vallan kauheita. Kaikki pitäjän miehet, jotka saatiin kiinni, 
          lähetettiin Riihimäelle. Sieltä osa karkasi kotiin, osa vietiin rintamille, josta he nyt monien seikkailujen jälkeen ovat päässeet kotiinsa tai jääneet sopivan hetken tullen valkoisten 
          riveihin. Moni on haavoittunut (m. m. Finnilä) ja jokunen tietysti kuollutkin. Riihimäen kasarmissa, jossa yhteislaukauksilla roistot koettivat aseettomat kansalaisensa kaikki surmata, 
          joutui kuoleman omaksi insinööri Riku Stenvik (Arvi Stenvikin veli), Arvo Leipälä sekä nuorukaiset Sukki ja Hietamäki. Vaikeasti haavoittui tilanomistaja K. Saviniemi, joka sentään 
          paranee. Riihimäeltä palanneista murhasivat Kalvolan kauhut ainakin kolme: Mölin, Tajasen ja Kalle Vahteran. Sitäpaitsi vangitsivat he kartanonomistaja A. Anderssonin, jonka sittemmin 
          ovat myös murhanneet. Ampumalla murhattiin vielä palstatilall. Väinö Mäkelä ja talollisenpoika Arvi Puhtila (Tammelasta.) Palstatil. A. Siivola yritettiin ampua, mutta sai riistetyksi 
          aseen ampujalta ja pelasti henkensä. Raa'asti murhattiin myös torpanpoika Kalle Vesikivi kotonaan ja Mustialan opiston oppilaita kuljetettiin kuolleiksi rääkättyinä 18 Kalvolan 
          leikkuuhuoneeseen. Pois lähtiessään v. k. 25 pnä murhasivat roistot vielä ainakin kolme: Viljami Lähtisen, Adolf Tannerin ja Franssilan tilan pehtoorin (ulkovallan alamaisen). Lähtisen 
          olivat pistimillä kiduttaneet kuoliaaksi m. m. toiseen silmään oli jäänyt pistimen suojustuppi. — Murhapolttoja tekivät monta: suomal. seuran talon polttivat, leski Pahlmannin talon, 
          Marjasen huvilan sekä Marttilan, Franssilan ja Hommosen talot ja Lilljevikin (Kutisten) kartanon sekä loppujen lopuksi seurakunnan kirkon, jonka sitä ennen ryöstivät. Useita muitakin 
          yritettiin polttaa, mutta ei saatu syttymään. Hommosella polttivat joukon eläimiäkin ja aikoivat polttaa ihmisetkin, mutta pääsivät pakenemaan. Samoin aijottiin Lilljevikissä tehdä. — 
          Kunnan viljat veivät he myös mukanaan, samoin yksityisten viljaa. Yksin siemen kauratkin ja -ohrat. Punikit varastivat yhdessä pois menevien kanssa satoja hehtoja ja ryöstivät m. m. 
          Kankaisten kartanosta vaatteet, huonekaluja. Akkuna verhoista, seinäkelloista ja valokuvista alkaen kaikki kelpasi.</p>
        <p>Sen lisäksi ampuivat Kankaisissa 5 isoa sonnia, joiden yhteinen arvo on kymmeniä tuhansia. Niemisten kartanossa rikottiin ikkunat, huonekalut ja kaikki; talo ei palanut, kun on kivestä. 
          Yhtäläinen hävitys tehtiin insin. Nordstedt'in huvilassa, jossa roistot viimeksi majailivat. Seuraavana päivänä oli määrä polttaa Kankainen ja muitakin taloja, mutta lähtö tapahtuikin 
          ennen aikojaan, kun valkoiset olivat jo niin lähellä. Kartanoiden elukat, useita satoja, piti ajettaman vaunuihin, mutta ne eivät menneet. Seuraavana päivänä ne ammuen palasivat 
          poltetuille raunioille katselemaan korkeammalla asteella olevien tekemää hävitystyötä. </p>
        <p>Kauhea oli näky lähdön jälkeen: miehet pakko-otolla viety rintamille, hevoset jotenkin kaikki ryövätty, siemenviljat varastettu, muut tavarat rosvojen saaliina ja rahat sekä kulta- ja 
          hopeaesineet menneet punikkien matkassa. Yksin vihkisormuksetkin kiskottiin naisten käsistä ja pienimmätkin muistoesineet kokoiltiin. Karjat ammuivat nälkäisinä maanteillä ja naiset ja 
          lapset sekä ihmeen kautta pelastuneet miehet piilosilla korpien kohduissa. Ei milloinkaan unohdu mielestä. Mutta aamulla 26 p:nä saapuivat valkoiset ja siitä asti on taas voinut 
          rauhassa hengittää. Mutta selvittelemistä on paljo, paljo!</p>
      </Article>
      <Article titleText="Punaisten hirmutyöt.">
        <h5>Verityöt Kymintehtaalla.</h5>
        <p>jo useat päivät on pidetty tutkintoja Kymintehtaan veritöistä ja toimitettu Kymi-joessa ruumiiden etsintöjä. Ruumiita ei vielä ole ankarasta uurauksesta huolimatta löydetty, joten 
          murhia ei suoranaisesti ole voitu todeta. Todistajain kautta on kuitenkin voitu saada selvlle, että murhatuiksi ovat tulleet kauppaneuvos G. Björkenheim, insinöörit B. Lönegren, E. 
          Bruun, B. Gripenberg, H. Timgrén, H. F. Heikel, hovioik. neuvos K. E. Saxén, tehtaan elintarveosaston johtaja G. Sandman, prokuristi O. Forss, konttoristi U. Starck ja tri K. Hjelt sekä 
          poliisi Kuusela, porttivahti Anttila ja paperinleikkausmestari Qvick, siis kaikkiaan 14 henkilöä. Ruumiit on Korian sillalta heitetty jokeen.</p>
        <p>Näiden murhien alkuunpanijaksi täydellä syyllä epäilty tehtaiden kapinanaikainen „johtaja“ Vihriä on saatu vangituksi. Hän on laatinut ja jätti eilen illalla tutkijoille pitkän 
          jonkunmoisen tunnustuksen, jossa hän kyllä kieltää tietävänsä murhista mitään. „Tunnustuksessa“ kertoilee hän elämänsä vaiheista ja itsestään kaikenmoista ja tuomitsee äskettäin niin 
          ihailemansa bolshevismin. Lopuksi hän suoraan myöntää, että sosialistien johtajat ja hän niiden mukana ovat avoimin silmin pettäneet joukkoja ja johtaneet heitä harhaan. Veritekojen 
          tutkiminen ja onnettomien uhrien naarausta jatketaan yhä.</p>
        <h5>Haminalaisia 30 murhattu.</h5>
        <p>Sanoin kuvaamatonta raakuutta ja verenhimoa osoittavat punaryssien veriteot Kouvolassa. Ei vielä läheskään ole itse paikkakunnallakaan selvyyttä siitä laajuudesta, jonka murhanhimo 
          kouvolassa ja sen ympäristössä on saavuttanut. Mutta jo tähänastisetkin tiedot saattavat veren jähmetyksiin. Kymmenittäin rauhallisia kansalaisia, joukossa naisiakin jotka ovat 
          yhteiskunnassa olleet huomattavassa asemassa ja ponnistaneet kaiken voimansa sen hyväksi, on joutunut noiden verihurttien raivon esineiksi ja sortuneet, useimmat mitä julmimmalla 
          tavalla, ennenaikaiseen hautaan.</p>
        <p>Kouvolassa murhatuista on tunnettu seuraavat haminalaiset: kirkkoherrat U. M. Renvall ja G. A. Taube, sanomal. toimittajat J. A. Teirikari, Leo Syrjänen ja Paavo Aho, insinööri L. 
          Helenius, pastori A. Manninen, lasitehtaan isännötsijä A. Peterson, tehtailija Fr. Bask, poliisimestari Y. Nopanen, kirjakauppias Berlin, kauppiaat J. Leino ja A. Vinter, asianajaja 
          V. Tompuri, maanviljelysneuvoja O. Viljamaa, asioitsija E. Riikonen, konttoristi E. Sipari ja ent. poliisiylikonst. A. Nopanen sekä maanvilj., ent. valtiopäivämies Tulikoura 
          Vehkalahdelta. Kymmenkunta punakaartilaisten vangitsemaa haminalaista on vielä kateissa, m. m sairaanhoitajattaret Elsa Silvo ja Tuulikki Näätänen, trit K. Myréen ja A. Kivalo, 
          pormestari J. Fr. Ekholm, eversti V. Björk, postinhoitaja K. Siivola, tullinhoitaja K. V. Knorrinä ja rautatievirkamies Br. Vulff. Niiden kohtalosta ei varmuudella vielä mitään tiedetä, 
          mutta toiveita ei juuri ole, että yksikään heistä olisi pelastunut kauheasta väkivaltaisesta kuolemasta.</p>
        <p>Ylläluetellut haminalaiset vangitsivat kapinalliset viime kuun 17 p. ja kuljettivat seuraavana päivänä Kouvolaan. Teurastus lienee toimeenpantu huhtik. 21 p:nä.</p>
        <h5>Ruumiiden kaivaminen.</h5>
        <p>Tämän viikon ensimmäisinä päivinä on kaivettu Kouvolan läheisyydestä sijaitsevasta suosta paljon punakaartilaisten ja heidän tuomioistuintensa murhaamien henkilöiden ruumiita. 
          Kaivauksen ovat suorittaneet vangitut punakaartilaiset ja „tuomarit“. Useat murhatuista ovat niin silvotut ja raadellut, ettei läheskään kaikkia ole voitu tuntea, sillä useimmilta 
          on ennen kuoppaamista riistetty melkein kaikki vaatteet.</p>
      </Article>
      <Article titleText="Kapinalliset Venäjällä.">
        <h5>Suunnittelut oman siirtokunnan perustamiseksi Wenäjällä.</h5>
        <p>Eräs Pietarista saapunut asioita tuntewa henkilö on kertonut „Karjalalle”, että Pietarissa on nykyään noin 9,000 suomalaista pakolaista, joukossa kaikki johtomiehet ja komissarit 
          alkaen Mannerista ja Tokoista aina Latukkaan asti. Tuskin yhtään johtomiestä on saatu täällä kiinni, sillä jo 28 pw. saapuiwat kauimmin Wiipurissa wiipyneet Manner, Kirjarinta y. m. 
          mukanaan hallussaan olewat rahastot ja arkistot. 30 pw. saapui Pietariin noin 50 à 60 wangiksi otettua walkokaartilaista, jotka punit lähettiwät laiwoissa ja joita kai yhä edelleen 
          säilytetään Pietarissa. Aikaisemmin oliwat punaset lähettäneet rautateitse suuren määrän, noin 200 à 300 waunulastia kaikenlaista tawaraa, etupäässä willakankaita, koneita ja kenties 
          kultaakin.</p>
        <p>Kaikki nämä tawarat oli aiottu wiedä perustettawaan suomalaisten siirtolaan. Manner ja Tokoi owat olleet siirtolahomman päämiehet. He eiwät kuitenkaan halunneet lähteä Siperiaan asti, 
          waan waatiwat Leniniltä maa-aluetta Euroopan Wenäjällä. Matkarahoiksi luwattiin kullekin perheelle 8,000 rupl. ja Leniniltä waadittiin siirtolaisille asuntoa, leipää ja palkkaa 
          korwaukseksi niistä palweluksista, joita Suomen sosialistit owat tehneet koko maailman köyhälistölle, ja erikoisesti Wenäjän bolshewismille. Nähtäwästi ei Lenin pitänyt suomalaisten 
          ansioita tarpeeksi suurina, koska waadittua aluetta ei oltu taipuwaiset luowuttamaan. Wasta pitkien neuwottelujen jälkeen on luwattu, että Suomesta tulleet pakolaiset saawat siirtyä 
          Pui-nimiseen kaupunkiin Kostroman läänissä Wologdan ja Wjatkan tienoilla. Sinne on nyt jo osa pakolaisia wiety, mutta paljon sinne ei sowi, sillä pakolaisten käytettäwäksi on toistaiseksi 
          luowutettu ainoastaan 40 taloa.</p>
        <p>Perjant. t. k. 3 p. ajettiin Pietarin kommunin toimesta punaset pois ministeriwaltiosihteerin wirastosta, jonka punikit oliwat wallanneet. Talo on Pietarin kommunin sinetillä suljettu.</p>
        <p>Suomen Pankin konttori ja Suomen rautatieasema Pietarissa owat yhä edelleen punaisten hallussa.</p>
        <h5>Mannerin pakeneminen Wiipurista Pietariin.</h5>
        <p>Kullerwo Manner, Suomen „diktaattori” ja punakaartin wiimeinen ylipäällikkö, pakeni Wiipurista (ei Kotkasta) Wenäjälle. Keskiwiikon ja torstain wälisenä yönä, jolloin Wiipurin pommitus 
          oli jo alkanut (walloitus tapahtui seuraawana maanantaina), oli hän wielä nähty Wiipurissa, jossa hän autolla ajeli hywästejä sanomassa. Samana yönä hän ja otaksuttawasti useimmat muut 
          wielä Wiipurissa silloin olewat punaisten johtajat — lähti wenäläisellä laiwalla Wiipurista Wenäjälle. Wenäjän neuwostowallan lipun alla pääsiwät Suomen kapinan johtohenkilöt pujahtamaan 
          pois sekä maan että meren puolelta saarretusta Wiipurista.</p>
        <p>Laumat jäiwät jälelle.</p>
        <h5>Johtajat eläwät yltäkylläisyydessä, joukot kurjuudessa.</h5>
        <p>Eräs näinä päiwinä Pietarista saapunut henkilö on Hbl:lle kertonut, että pakolaisia ja punasten johtajia toi Suomesta Pietariin ensin 5 ja senjälkeen 7 laiwaa. Kerrotaan, että Mannerin 
          on pitänyt pysytellä piilossa, hänen henkeään kun uhkaawat punaset, jotka eiwät ole saaneet palkkojaan. Punasten johtajat joilla on runsaasti ryöstettyä rahaa wiettäwät komeata elämää. 
          Heidän tarpeikseen on otettu Astorian hotelli, joka on Pietarin hienoimpia. He owat ostaneet upeita autoja, joilla he ajelewat ympäri, toimeenpanewat ylellisiä päiwällisiä ja illallisia 
          wenäläisille ystäwilleen. Kapinajohtajain eläessä täten yltäkylläisyydessä, on asianlaita aiwan toinen moniin tuhansiin nousewain pakolaisjoukkojen keskuudessa. Ne owat sijoitettu 
          Pawlowin kasarmiin ja on kurjuus niiden keskuudessa kuulumaton, heiltä kun puuttuu kaikkea, ruokaa ja waatteita.</p>
        <p>Warastettua tawaraa on Pietarissa suunnattomat määrät. Tawaran joukossa on paljon maanwiljelyskoneita, paperia, huonekaluja, arwoesineitä y. m. Osa tawaroista on jo lähetetty sisä-
          Wenäjälle ja Siperiaan.</p>
        <h5>Saksa waatii kapinallisten luowuttamista.</h5>
        <p>Kuinka pitkälliseksi näiden maamme suurimpain pahantekijäin oleskelu Wenäjällä woi tulla, saadaan nähdä. On tietoja, jotka wiittaawat siihen, ettei tämäkään turwapaikka heille tule 
          olemaan pysywäinen. Mikäli eräät walkoisen Suomen lehdet kertowat warmalta taholta saaneensa tietää, on Saksa näinä päiwinä antanut Wenäjalle jyrkkään muotoon laaditun uhkawaatimuksen, 
          jossa waaditaan Wenäjälle paenneitten Suomen maankawaltajien ja kapinaliikkeen johtajien luowuttamista määräajan kuluessa. Ellei tätä pyyntöä täytetä, katsoo Saksa olewansa pakoitettu 
          ryhtymään niihin toimenpiteisiin, joita pidetään tarpeellisina.</p>
      </Article>

      <div className="interTitle">14.5.1918</div>
      <Article titleText="Wankien tutkiminen">
        <p>jatkuu Hämeenlinnassa entiseen tapaan. Tutkimista waikeuttaa kuitenkin wankien suuri lukumäärä. Kun wankien joukossa yhä wieläkin saattaa olla pakolla otettuja ja syyttömiä, olisi 
          suotawaa, että eri paikkakuntien suojeluskunnat waltuuttaisiwat muutamia henkilöitä matkustamaan Hämeenlinnaan ja tarkastamaan wangit, jotta woitaisiin wapauttaa ne, jotka owat syyttään 
          pidätettyjä.</p>
      </Article>
      <Article titleText="Rautatieaseman uudelleen rakentaminen.">
        <p>Hämeenlinnan rautatieaseman uudelleen rakentamiseen ryhdytään lähimmässä tulewaisuudessa. Uusi asemarakennus aiotaan kuitenkin siirtää nykyiseltä paikaltaan Idänpäähän johtawaan 
          maantien kohdalle. Tarkoituksena on myöskin samalla laajentaa Hämeenlinnan nykyään ahdasta ratapihaa. Idänpäähän johtawa maantie aiotaan siirtää nykyisen asemarakennuksen kohdalle, johon 
          tullaan rakentamaan silta rautatien yli. Lauantaina käwi täällä rautatiehallituksen edustaja ja lienee hän yleensä asettunut suunnitelmaa kannattamaan.</p>
      </Article>
      <Article titleText="Punasten murhatöitä.">
        <h5>Eräs ihmeellinen pelastus.</h5>
        <p>Lauantaina huhtik. 13 p. saapui Ahosen raittiusrawintolaan Hämeenlinnassa punasten pahamaineinen urkkijapäällikkö Oiwa Wirtanen mukanaan muutamia miehiä, jotka pidättiwät rawintolassa 
          asuwat kontröllööri Th. Enqwistin ja kauppias K. Tapiolan. Pidätetyt oliwat kumpikin matkan keskeytymisen wuoksi jääneet Hämeenlinnaan. Rawintolasta wietiin pidätetyt punasten esikuntaan, 
          jossa heidät asiaankuuluwasti „kuulusteltiin” ja ryöstettiin. Oltuaan yön pidätettynä lähti kontrollööri Enqwistiä seuraawana sunnuntai-iltana 5 miestä wiemään hewosella Janakkalaan päin. 
          Matkalla lähellä Tammisaaren tienhaaraa alkoiwat miehet tiukata E:ltä rahoja luwaten päästää hänet wapaaksi jos hän suostuisi roistoille maksamaan 1,000 mk. E, jolta jo mukana olleet 
          rahat oliwat ryöstetyt kieltäytyi luonnollisesti. Tällöin weti eräs roistoista esille rewolwerin ampuen sillä E:tä päähän kaksi kertaa. Tämän jälkeen roswo koetti katsoa oliko uhri jo 
          kuollut kohottaen tässä tarkoituksessa hänen silmäluontaan. Huomattuaan hänessä tällöin wielä joitakin elonmerkkejä ampui roswo arwellen „kyllä se wielä yhden tällin tarttee” E:tä wielä 
          kerran päähän anastaen samalla hänen kellonsa. Luullen uhrinsa kuolleeksi roswot jättiwät hänet senjälkeen maantienojaan. Ihmeellistä kyllä wirkosi E. kuitenkin myöhemmin ryömien 
          erääseen läheiseen torppaan, josta hän sai toimitetuksi sanan Janakkalaan, jonka järjestysmiehen toimesta hänet tuotiin sairaalaan. Nyttemmin on hra E. täysin toipunut.</p>
        <p>Muutama tunti myöhemmin löydettiin kauppias Tapiola murhattuna läheltä sitä paikkaa jossa murhayritys kontrollööri Enqwistiäkin wastaan oli tehty.</p>
        <h5>Löydettyjä murhattujen ruumiita.</h5>
        <p>Wiime perjantaina löydettiin Kosken sillan luona olewista juoksuhaudoista Hämeenlinnasta wiime huhtik. puoliwälissä punasten wangitsemat ja senjälkeen kadoksissa olleiden 
          rautatienkirjuri August Nyholmin ja liikemies I. Honkasen ruumiit. Murha oli tapahtunut ampumalla, jonka jälkeen ruumiita wielä oli kolhittu kiwäärinperillä ja teräaseilla. Itse 
          murhatapahtumasta ei ole mitään tietoa. Murhattuja säilytettiin ensin wankina Suomen kasarmilla, mutta huhtik. 13 p wietiin heidät esikuntaan „kuulusteltawaksi” jonka jälkeen heidät 
          ilmoitettiin päästettäwän wapaaksi. Wiimeisen kerran heidät nähtiin samana iltana Luolajassa ajaen punikkien wartioimana Renkoa kohden.</p>
        <p>Rautatienkirjuri Aug. Nyholm oli synt. H:linnassa w. 1867. Päätettyään koulunsa wainaja suoritti ylioppilastutkinnon 1890, antautuen senjälkeen rautatiealalle. Palweltuaan eri asemilla 
          wainaja tuli Hämeenlinnaan w. 1895 ensin piletin myyjäksi senjälkeen toiseksi kirjuriksi ja wuodesta 1907 ensimäiseksi kirjuriksi, jossa wirassa hän sitten oli kuolemaansa asti. Wainaja 
          oli tunnettu tunnolliseksi wirkamieheksi ja kelpo kansalaiseksi. Lähinnä häntä kaipaa sisar.</p>
        <p>Liikemies I. Honkanen oli syntynyt w. 1878. Joku aika sitten hän osti ent. Koskisen polkupyöräliikkeen. Wainaja oli tunnettu erittäin hywäntahtoiseksi mieheksi, jotta hänen 
          wäkiwaltainen kuolemansa senkin wuoksi tuntuu käsittämättömältä. Lähinnä häntä surewat äiti, weli ja siskot.</p>
      </Article>
      <Article titleText="Mommilan werilöyly.">
        <h5>Maanwiljelysneuwos Kordelinin murhaaja wangittu.</h5>
        <p>Wiime torstaina wangittiin Mommilan werilöylyssä tunnetuksi tulleen ja saamistaan haawoista kuolleen suutari Skottin lesken luona kuulusaksi tullut santarmiurkkija Kondrajeff. 
          Skottin leski wakuuttaa, että K. on Mommilaa wastaan tehdyn rosworetken warsinainen alkuunpanija, ja että hän myös on maanwiljelysneuwos Kordelinin surmaaja. Toisaalta saatu selwitys 
          osoittaa myös, että K. oli päätekijöitä Mommilan jutussa. Mies on passitettu Sörnäisin kuritushuoneeseen odottamaan tuomiotaan.</p>
      </Article>

      <div className="interTitle">16.5.1918</div>
      <Article titleText="Punaisten länsiarmeijan tuhoaminen.">
        <p className="info">„Suomi—Finland” julkaisee saksalaisen Itämeren diwisionan esikunnan antaman kuwauksen Punaisten läsiarmeijan tuhoamisesta. Kirjoitus kuuluu suomennettuna seuraawasti:</p>
        <h5>Lahden ja Hämeenlinnan taistelu.</h5>
        <p>Wihollisen johto oli tuonut wain osia kenttäarmeijastaan Helsingin awuksi ja nekin liian myöhään, kyetäkseen estämään pääkaupungin punaisen waruswäen tuhoutumisen. Pelastusyritykset 
          raukesiwat tyhjiin suurin tappioin.</p>
        <p>Helsingin walloitukseen liittyi saksalaisten toiminnan lähimpänä päämääränä Riihimäelle ja sen pohjoispuolelle kokoontuneen punaisen länsiarmeijan tuhoaminen. Se erinomainen merkitys, 
          joka Suomen ominaisen maaperän waikutuksesta on rautatiesodalla joukkojen liikkeille ja siirroille, waati, että oli wallattawa Hywinkään ja Riihimäen tärkeät solmukohdat. Huolimatta 
          melkoisesta wastarinnasta tapahtui eteneminen warmasti. Huhtik. 21 p. kukistui Hyvinkää kiiwaan ja werisen kamppailun jälkeen. Huhtik. 22 p. wallattiin Riihimäki taistelun tapahduttua. 
          Walitettawasti ei woitu enää estää niitä kuulumattomia julmuuksia, joitten uhreiksi joutuiwat awuttomat haawoittuneet saksalaiset ja walkoiset wangit.</p>
        <p>Jo ennen Helsingin waltausta oli saksalaisia lisäwoimia noussut maihin Lowiisassa. Niitten tehtäwänä oli katkaista Hämeenlinnan—Wiipurin rautatie, joka oli punaisten joukkosiirtojen 
          selkärankana. Huhtik. 20 p. wallattiin Lahti wäkirynnäköllä. Taistelujen kiiwautta kuwaa se tosiseikka, että taistelukentälle haudattiin toistatuhatta wihollisruumista. Lahden 
          walloituksen kautta katkesi yhteys itäisen ja läntisen armeijan wälillä täydellisesti. Samaan aikaan kun Suomen armeija kenraali wapaaherra Mannerheimin johdolla walmistui suureen 
          ratkaisewaan taisteluun Wiipurin luona sijaitsewaa wihollisen itäistä ryhmää wastaan, ryhtyi saksalainen johto nyt wastustajan länsiarmeijan tuhoamiseen.</p>
        <p>Sotatoimien ensimäisenä jaksona oli Hämeenlinnan waltaus Riihimäeltä käsin, jotta siten päästäisiin kosketuksiin pohjoisesta päin marssiwan walkoisen prikaatin kanssa. Sitkeitten 
          taistelujen jälkeen lyötiin wihollinen huhtik 26 p. Hämeenlinnan luona. Saksalaisen tykistön tehokkaan tulen alaisina pakeniwat wihollisjoukot pohjoista kohti. Wäestön tawattomasti 
          riemuitessa — sellaista iloa lienee tuskin Suomessakaan muualla ilmennyt — tunkeutuiwat huhtik. 26 p. iltapäiwällä ensimäiset saksalaiset joukot kaupunkiin. Sadat walkoiset wangit, 
          jotka oli ahdettu ylwääseen ruotsalaislinnaan, pääsiwät wapaiksi epätoiwoisesta asemastaan. Kun saksalaiset tarkka-ampujat äkkiä astuiwat Hämeenlinnan torille, waikutti se wäestöön, joka 
          ei ollut saanut mitään tietoja tapahtumista ja joka oli menettänyt kaiken pelastustoiweensa, aiwan ihmeen tawoin.</p>
        <p>Wiipurin ja Hämeenlinnan tappioitten waikutuksesta näytti punaisen länsiarmeijan johto tajunneen täydellisesti asemansa wakawuuden. Huomattawalla tarmolla sen onnistui yhdistää Turun ja 
          Porin, Uudenmaan, Hämeenlinnan ja Tampereen punaiset kaartit. Näiden toiminnan ilmeisenä päämääränä oli yhdistyneittein woimien murtautuminen piirityksestä Lahden kautta.</p>
        <p>Oikein arwaten wihollisen tarkoitukset saksalaisten johto ryhtyi saartamaan tätä punaista armeijaryhmää. Kiiwaita, waihtelewia taisteluja, joihin wihollinen öin päiwin ja tappioista 
          wälittämättä ryhtyi kiihkoisella tarmolla, syntyi huhtik. 28 ja 29 p. Hämeenlinnan pohjoispuolella ja Lahden luona. Mutta wastustajan jokainen yritys murtaa saksalaisten sulku idässä tai 
          etelässä raukesi tyhjiin.</p>
        <p>Erikoisen waikeita ja kunniakkaita taisteluja saiwat käydä Hämeenlinnan pohjoispuolella saksalainen ratsuwäki ja Preussin kaartin ulaanit, joita tehokkaasti tuki ampumalinjoihin 
          kohdistuwa bajerilaisen wuoritykistön tuli.</p>
        <p>Huhtik. 30 alkoi wihollista ympäröiwä saartorengas supistua. Saksalaisten kolonnain, jotka oli sijoitettu konsentrisesti, onnistui hyökätessään päästä wähitellen keskenään kosketuksiin. 
          Pohjoisesta käsin otti kaksi suomalaista pataljoonaa urhoollisesti osaa taisteluun.</p>
        <p>Toukok. 1 p. alkoi Lahden länsipuolella taistelewan punaisen ryhmän wastarinta lamaantua; osittain se laski aseensa. Sitä epätoiwoisemmin jatkoiwat wastustajan pääwoimat hyökkäyksiään 
          toukok. 2 p:n wastaisena yönä. Wihollinen kärsi tuloksettomissa hyökkäyksissään suunnattoman werisiä tappioita. Yksistään Lahden länsipuolella olewalle taistelukentälle haudattiin yli 
          3,000 ruumista.</p>
        <p>Toukok. 2 p. koitti wihdoin huhtik. 28 p. alkaneitten taistelujen ratkaisu. Saarrettuna joka taholta laski wihollinen iltapäiwällä aseensa.</p>
        <p>Wiisipäiwäisten taistelujen kokonaistuloksena oli 20,000 wankia, 50 tykkiä ja 500 kuularuiskua. Lisäksi saatiin tuhansittain ajopelejä ja hewosia. Kaksi wihollisen Wenäjältä saamaa 
          panssarijunaa joutui saksalaisten käsiin.</p>
        <p>Saksalaisten sotatoimien sotilaallinen päämäärä Suomessa oli täysin saawutettu. Pääkaupungin wapauttamiseen liittyi wihollisen kenttäarmeijan täydellinen tuhoaminen. Toukok. 2 p. oli 
          Länsi-Suomi wapautettu punaisesta waarasta. Jo muutamia päiwiä myöhemmin kohtasiwat itää kohti marssiwat Saksan sotawoimat Wiipurista päin etenewät Suomen walkoiset pataljoonat. Koko 
          Suomi totteli jälleen laillista hallitustaan.</p>
      </Article>
      <Article titleText="Kouvolan verilöyly.">
        <p>Ruumiita on löydetty alun toista sataa useasta eri paikasta kuten yhteiskoulun takana olewalta kankaalta, wenäläisen kirkon portaitten wiereltä y. m. Kyminjoesta on saatu esille yli 
          30 ruumista.</p>
        <p>Kaikki ruumiit owat olleet mitä kamalimmalla tawalla silwotut, kuten on jo aikaisemmin mainittu. Wain yhdessä ruumiissa ei ole ulkonaisia wäkiwallan merkkejä, mutta toiselta puolelta 
          ei myöskään wielä tunneta, mikä on aiheuttanut wainajan kuoleman, sillä ruumista ei ole wielä ehditty leikata. Piirilääkäri arwelee, että wainaja on kuollut sydänhalwaukseen, nähdessään 
          sen kaamean kohtalon, joka tuli hänen onnettomuustoweriensa osalle, eräs toinen lääkäri arwelee wainajan tukehtuneen. Ruumiit owat täynnä pistinten ja kuulien jättämiä reikiä, pää 
          murskattuna ja jäsenet silwottuina. Paikalla on käynyt joka päiwä suuret määrät ihmisiä kadonneita omaisiaan etsimässä. Sattuu sydäntäsärkewiä kohtauksia. Eräs nuori waimo löysi yhdellä 
          kerralla isänsä, miehensä ja weljensä. Useat sitä paitse erehtywät, sillä tawallisesti konnat owat raadelleet muodottomiksi wainajain pään ja yläruumiin, pääkuori, silmät ja nenä owat 
          lyödyt mäsäksi. Saapuwilla olewat lääkäri- ja tutkintowiranomaiset owat walokuwanneet ruumiitten yläosat ja sitäpaitse on kuhunkin kuwaan liitetty lyhyt selonteko tuntomerkeistä.</p>
        <p>Tähän asti löydetyt ruumiit owat wiedyt pois ja haudatut. Haminalaiset, joitten ruumiit wietiin omalle paikkakunnalle, haudattiin sunnuntaina.</p>
        <p>Kymintehtaan henkilökunnan murhatut jäsenet owat löydetyt jo kaikki. Wain kauppaneuwos Björkenheim ja insinööri Timgren owat wielä kadoksissa.</p>
        <p>Sunnuntaina löytyi erään nuoren naisen ruumis. Wainajan arwellaan olewan toisen niistä kahdesta sairaanhoitajattaresta, jotka häwisiwät Haminasta yhdessä lääkäri Kiwalon kanssa.</p>
        <p>Nyttemmin on Kouwolassa rauhallista. Walkealan metsissä on tähän saakka tawattu harwalti punaisia, jotka owat tuodut Kouwolaan tutkittawiksi ja tuomittawiksi.</p>
        <p>Wankeja on noin 4,000. Punaisen hirmuwallan aikana Kouwolassa toiminut „miliisitoimikunta”, joka siellä suoritti pirullisimmat roistontyöt, on päässyt kokonaisuudessaan pakosalle. Sen 
          sijaan on wangittu muita johtomiehiä, jotka todistettawasti syyllisinä weritekoihin owat jo saaneet palkkansa.</p>
        <p>Ruumiita katsomassa on käynyt myöskin Mannerheim Ignatiuksen seuraamana.</p>
      </Article>
      <Article titleText="Punaisten häwitys Etelä-Satakunnassa.">
        <p>Eräs Porin rykmentin sotilas kertoo Poriin lähettämässään kirjeessä joukkonsa matkalla Etelä-Satakunnassa m. m. seuraawaa:</p>
        <p className="quote">Kaikkialla owat punaiset raiwonneet kuin willipedot. Poltettuja taloja ja nawettoihin poltettuja eläimiä (eräässäkin paikassa yli 10 lehmää poltettu, kun niitä ei 
          ollut ehditty ampua) - liwekkalaa wiskelty tielle kilometrimäärin, ompelukoneita, walokuwa-albumeja, wiljaa, perunoita j. n. e. Kaikki telefoonitolpat sahattu poikki ja kaadettu poikki 
          tien sekä ainakin joka kymmenen metrin päässä suuri puu kaadettuna tielle. . .</p>
      </Article>
      <Article titleText="Kotkan walloitus.">
        <h5>„Kansanwaltuuskunnan” jäseniä puriwat omat koirat.</h5>
        <p>Toissa iltana saapui Helsinkiin eräitä kotkalaisia saksalaisten sotalaiwojen mukana. He kertoiwat, että Kotkan walloittamisen toimitti n. 50 Oulun ja Raahen suojeluskuntalaista, jotka 
          tuliwat sinne junalla. Punakaartilaiset 4 à 5 tuh. antautuiwat laukaustakaan ampumatta. Mitään häwitystä ei Kotkassa oltu toimeenpantu, waikka punaiset kyllä oliwat uhkailleet polttaa ja 
          häwittää. Murhiin oliwat sentään kerinneet: kauppa-apul. Helwe ja seppä Naakka joutuiwat heidän werenhimonsa uhriksi. Useita kaupungin wirkamiehiä oli wangittu, mutta heidän oli 
          onnistunut paeta jo ajoissa walkoisten puolelle saatuaan wartijansakin yhtymään samaan tuumaan.</p>
        <p>Kotkassa käwi myös 17 kansanwaltuuskuntalaista miljoonat mukanaan aikomuksella paeta meritse Wenäjälle. Tawarat oli jo lastattu laiwoihin, kun omat miehet estiwät pakomatkan ja 
          lähettiwät wangittuina Kouwolaan.</p>
      </Article>

      <br></br>
      <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/titles/0356-2751?display=THUMB&year=1918">Linkki vuosikertaan 1918</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Sisällissota</title> // metadata

export default CivilWarPage 