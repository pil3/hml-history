import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"
import DateDivider from "../components/dateDivider"

import Image from "react-bootstrap/Image"

import "../styles/base/global.css"

import divider from "../assets/divider.png"
import subDivider from "../assets/sub-divider.png"

const Lukijoilta1924Page = () => {
  return (
    <Layout titleText="Hämeen Sanomat, 1924">
      <h2>Lukijoilta</h2>
      <Image src={divider} className="dividerStyle" />
      <p className="centered bold" style={{margin:"8px 0"}}>Torstai, 3.1.1924</p>
      <Article titleText="Huomiota herättäwä henkiwakuutusjuttu Hämeenlinnassa.">
        <p>Ylläolewalla otsakkeella arw. lehtenne palstoilla eilen julkaistussa kirjoituksessa moititaan Suomi-yhtiötä siitä, että se kuolemantapauksessa on kieltäytynyt maksamasta wakuutusta, 
          joka ei koskaan ole ollut woimassa. Saadakseen tilaisuuden näin aiheettomaan moitteeseen silwoo kirjoittaja lukemastaan yhtiön kirjeestä irti osan yleisön nähtäwäksi, mutta salaa toisen 
          osan samaa lausettakin. Kokonaisuudessaan kuului yhtiön perustelu sen ewätessä kysytyn wakuutusssumman maksamisen seuraawasti:</p>
        <p>„Koska wakuutuksenhaltija hakemuksessaan ei sitoudu suorittamaan ensimäistä wakuutusmaksua eikä yhtiöllä ole oikeutta ulosottoteitse sitä periä jos hakija jättää wakuutuksen 
          lunastamatta, ei se, että yhtiö hywäksyy hakemuksen, wielä tiedä, että olisi syntynyt wakuutussopimus hakijan ja yhtiön kesken, eikä hywäksyminen woi yksipuolisesti welwoittaa yhtiötä. 
          Sopimus on päätetty wasta kun wakuutuksenhakija on suorittanut ensimäisen wakuutusmaksun ja wakuuttaja on antanut hänelle wakuutuskirjan. Tämä on nimenomean säddetty wakuutus ehtojen 1 
          §ssä, jossa wakuutuksen woimaanastumisen aika ja edellytys on näillä sanoin määritelty. Kun wakuutuskirjaa puheenalaisessa tapauksessa ei annettu wakuutuksenhaltijalle, ei yhtiölle ole 
          syntynyt mitään maksuwelwollisuutta”.</p>
        <p>Wielä yrittää kirjoittaja moittia yhtiötä siitä, että sen asiamies yhtiön antamien ohjeiden mukaisesti kieltäytyi wastaanottamasta sairastuneen hakijan puolesta tarjottua wakuutusmaksua 
          ja siten saattamesta woimaan sitä wakuutusta, joka sittemmin kuollut hakija puolestaan olisi halunnut saada. Tähänkin menettelyyn on kirjoittajan lukemassa kirjeessä se asianmukainen 
          selitys, että asiamies ohjesääntönsä mukaan ei saa „wakuutusmaksua wastaanottamalla mennä sitomaan yhtiötä wastuuseen, joka sattuneen sairauden johdosta on muuttunut toiseksi kuin se 
          yhtiön saamien tietojen mukaan oli”.</p>
        <p>Ja waikka kirjoittaja on samasta kirjeestä lukenut, että „kaikkien muitten maamme henkiwakuutusyhtiöiden kanta tällaisessa tapauksessa on sama kuin Suomi-yhtiön, yrittää tämä 
          kynäniekka lopuksi kiihoittaa yleisöä erikseen Suomi-yhtiötä wastaan, jossa hän arwelee „jokaisen ajattelewan henkilön” woiwan muodostaa käsityksensä hänen typistetyn ja erehdyttäwän 
          kertomuksensa perusteella. </p>
        <p>Kuten näkyy olisi kirjoittajalla ennen kaikkea ollut aihetta tapauksen johdosta teroittaa mieliin, kuinka lukuisat henkilöt woisiwat pelastaa leskelleen ja lapsilleen „edes kodin” 
          -kuten kirjoittaja sanoo, jos he ajettuisiwat wähemmän kylmäkiskoiselle kannalle henkiwakuutusmiesten uudistettuihin kehoituksiin ajoissa turwata perheensä henkiwakuutuksella ja jos 
          hänen mielestään henkiwakuutusyhtiöitten wakuutusehdot olisiwat siten muutettawat, että wakuutus astuisi jo hywäksymishetkestä asti woimaan, olisi hän otettuaan asioista selkoa woinut 
          kertoa, että yhtiöt myös saisiwat oikeuden tarpeen tullen ulosottotoiminkin periä ensimmäisen wakuutusmaksun, jonka warsin monet hakijat nykyisin yhtiöiden wahingoksi jättäwät suorittamatta. 
          Asioihin perehtyessään oli kirjoittaja lisäksi saanut tietää, että tätä ehdotusta on kannattanut - Suomi-Yhtiö, mutta että useimmat muut sekä meidän maamme että toistenkin pohjoismaiden 
          henkiwakuutusyhtiöt owat sitä wastustaneet.</p>
        <p>Siltä, joka luulee olewansa kutsuttu käyttämään julkista sanaa suuren kansallisen laitoksen soimaamiseen, sopinee waatia, että hän ensin ottaa asioista selkoa ja ennen kaikkea, että hän 
          oikein lukijoillensa selittää, mitä hän jo on saanut tietoonsa. Jos arw. lehtenne kirjoittajalla olisi tätä wastuuntunnetta ollut, olisi häneltä arwatenkin jäänyt kynä musteeseen 
          kastamatta.</p>
        <p className="centered">Helsingissä joulukuun 31 p. 1923</p>
        <p className="signature">Lawonius, Ingman - Keskinäinen henkiwakuutusyhtiö Suomi</p>
      </Article>

      <DateDivider date="Perjantai, 4.1.1924"/>
      <Article titleText="Kiitos.">
        <p>Hyökkäyswaunurykmentin puolesta lausun parhaimmat kiitokseni Hämeenlinnan Sotilaskotiyhdistykselle, sen rykmentin miehistölle toimeenpanemasta hauskasta Joulujuhlasta lahjoineen ja kestityksineen sekä Kustannusliike Arwi A. Karistolle suurenmoisesta kirjalahjasta 
          ja samalla kiitän kaikkia niitä yksityisiä ja liikkeitä, jotka owat lähettäneet lahjoja jaettawaksi Jouluna. </p>
        <p className="centered">Hämeenlinna 3. 1. 24.</p>
        <p className="signature">Kumlin. Majuri ja w. a. Rykm. Komentaja.</p>
      </Article>

      <DateDivider date="Lauantai, 5.1.1924"/>
      <Article titleText="Wastinetta Suomi Yhtiölle.">
        <p>Tämän lehden kuluwan tammikuun 3 päiwän numerossa on Keskinäisen Henkiwakuutusyhtiö Suomen puolelta annettu selitys eräästä huomiota herättäneestä henkiwakuutusjutusta Hämeenlinnan 
          kaupungissa. Siihen nähden, että mainittua selitystä ei suinkaan ole pidettäwä tyydyttäwänä, siinä kun ei edes tahdota kosketella asian pääydintä, suotakoon meille tilaisuus asiasta 
          lausua muutama sana.</p>
        <p>Henkilöä, joka ottaa wakuutuksen Suomi-yhtiöstä ei saata sitoa mitkään muut kuin yhtiön säännöt, jotka wakuutuksenhankkija hänelle tawallisesti esittää. Näiden sääntöjen mukaan on 
          wakuutussuhde syntynyt silloin, kun ensimmäinen wakuutusmaksu on suoritettu. Yhtiön asiamies on welwollinen siinä tapauksessa, kuten tässäkin om asian laita, että wakuutettu wielä 
          elossa ollen suorittaa wakuutusmaksun yhtiön hywäksymästä wakuutuksesta, ottamaan maksun wastaan sekä luowuttamaan wakuutuskirjan, olipa sitten wakuutettu sairauden, waarallisen matkan 
          tai muun syyn takia tilassa, joka aiheuttaa yhtiölle tawallista suuremman riskin. Yhtiön on katsottawa sääntöjen mukaan ottaneen tällaisetkin tapaukset kuin esilläolewa huomioonsa 
          wakuutusriskiä määrätessään. Siinä tapauksessa, että toisin olisi asian laita, pitäisi kai tästä olla eri maininta yhtiön säännöissä. Missään tapauksessa eiwät kai yhtiön asiamiesten 
          ohjesäännössä annetut toimintaohjeet woi perustaa yhtiölle mitään oikeutta kolmanteen henkilöön, tässä tapausessa wakuutettuun nähden, waan on wakuutusmaksu suoritettawa siitä 
          huolimatta, että ohjesäännöissä saattaa ollakin kielto luowuttaa wakuutuskirja henkilölle joka esim. on sairas. Eihän näitä ohjesääntöjä edes wakuutusta otettaessa esitetä eikä 
          wakuutuksen ottajalla ole niihin edes mahdollisuutta tutustua. Antaessaan ohjeita, jotka eiwät ole sopusoinnussa yhtiön sääntöjen kanssa, on yhtiö katsottawa olewan welwollinen 
          sowittamaan sen, minkä asiamies näitä ohjeita noudattamalla pitänyt welwollisuutenaan tehdä.</p>
        <p>Kun näinollen yhtiön täkäläinen asiamies on ohjesääntöönsä wedoten kieltäytynyt wastaanottamasta hänelle tarjottua wakuutusmaksua sekä luowuttamasta wakuutuskirjaa, on tätä tarjottua 
          maksua pidettäwä suoritetun weroisena. Koska wakuutuksen ottajan puolelta muutenkaan ei ole mitään laiminlyöty, waan maksettu kohta wakuutuskirjan saawuttua, niin woi ilman muuta sanoa, 
          että yhtiön, joka näissä oloissa sittenkin kieltäytyy wakuutusmaksua suorittamasta, ei enää woida katsoa walwowan asiakkaittensa etua ja saattaa wakuutuksenottajilla näinollen olla 
          odotettawissa mitä yllätyksiä hywänsä. Wakuutusyhtiöthän käytännössä ylimalkaan sellaisissakin tapauksissa, joissa tulkinta jossain määrin saattaa horjua owat oman etunsakin kannalta 
          katsoneet sopiwammaksi walwoa asiakkaittensa etuja suorittamalla wakuutusmaksun. Tällainen suhtautuminen yleisöön onkin johtanut siihen, että yleinen luottamus wakuutusyhtiöihin on ollut 
          sangen suuri. Esilläolewassa tapauksessa emme sitäwastoin woi ummistaa silmiämme siltä tosiasialta, että yhtiö, jonka sekä oikeudellinen että siweellinen welwollisuns on katsottawa 
          olewan suorittaa wakuutusmaksu, kuitenkin nyt on toiminut wastoin entisiä periaatteitaan. Eiköhän tässäkin tapauksessa olisi ollut „suurele kansalliselle laitoksellemme” joka suhteessa 
          edullisempaa suorittaa suhteellisesti pieni wakuutusmaksu säästyen siten oikeutetulta moitteelta. Selityskirjelmässä huomauttaa yhtiö edelleen puoltawansa sellaisen käytännön 
          aikaansaantia, että wakuutus olisi katsottawa tulleen woimaan jo wakuutuksen hywäksymisellä yhtiön puolelta. Esilläolewassa tapauksessa ei yhtiö ole halukas suorittamaan wakuutusmaksua, 
          waikka wakuutuskirjat jo on ollut asiamiehen hallussa, on tältä waadittu ja maksua tarjottu.</p>
        <p className="signature">Suomi-yhtiössä wakuutettuja.</p>
      </Article>

      <DateDivider date="Sunnuntai, 6.1.1924"/>
      <Article titleText="Pari nöyrää kysymystä Suomi-yhtiölle.">
        <p>Yhtyen täydellisesti tämän lehden kuluwan tammikuun 5 päiwän numerossa „Suomi-yhtiössä wakuutettuja” nimimerkillä julkaistuun kirjoitukseen: „Wastinetta Suomi-yhtiölle”,  pyydän samassa 
          ja edellisissä kirjoituksissa kosketellun huomiota herättäneen henkiwakuutusjutun johdosta tehdä lisäksi wielä pari kysymystä Suomi-yhtiölle.</p>
        <p>Suomi-yhtiön alkuperäisissä wakuutusehdoissa sanotaan woimaanastumisesta näin: „Wakuutus astuu woimaan, kun ensimäinen wakuutusmaksu on suoritettu” (kohta 1). Wakuutuskirjasta ja sen 
          antamisesta wakuutetulle ei siis mainita mitään juuri siinä sääntöjen kohdassa, joka määrittelee wakuutuksen woimaanastumisen. Ainoa ehto siihen on wakuutusmaksun suorittaminen, jossa 
          suorittajana on wakuutettu ja suoritus yhtiön puolelta täysin wapaaksi tunnustettu.</p>
        <p>Wakuutuskirja kyllä silloinkin siitä huolimatta annettiin ensimäisen wakuutusmaksun suorituksen yhteydessä, mutta mahdotonta on ajatella, että wakuutuskirjan antamisesta wakuutetulle 
          Suomi-yhtiön alkuperäisten wakuutusehtojen mukaan woitaisiin tehdä sellainen määrääwä tekijä, joka lopullisesti määrää wakuutuksen woimaanastumisen. Niinkuin suoritetusta maksusta aina 
          reilujen ihmisten kesken mielellään annetaan kuitti, niin myöskin ensimäsestä wakuutusmaksusta wakuutuskirja annetaan kuitiksi, samalla kun se myöskin sisältää wakuutussopimuksen 
          wakuuttajan ja yhtiön wälillä.</p>
        <p>Suomi-yhtiö on sittemmin muuttanut wakuutusehtojensa sanamuotoa ehkä paljonkin. Niinpä wakuutuksen woimaanastumisesta nykyisissä wakuutusehdoissa herrojen Lawoniuksen ja Ingmanin mukaan 
          säädetään: „Wakuutus astuu woimaan kun wakuutuksen haltija on suorittanut ensimmäisen wakuutusmaksun ja wakuuttaja on antanut hänelle wakuutuskirjan”. Tästä wakuutuskirjan antamisesta 
          wakuutetulle, josta itse wanhemmat wakuutusehdot eiwät mainitse mitään, on nyt tehty „edellytys”, joka kaataa kokonaan sen mitä aikaisemmin on wakuutuksen woimaanastumisesta säädetty.</p>
        <p>Nyt pyydän nöyrimmästi kysyä, milloin Suomi-yhtiön wakuutusehtoihin on wakuutuksen woimaanastumisesta tehty yllämainittu sananmuodonmuutos ja miten tätä muutosta on perusteltu. Onko 
          muutos ollut waan sananmuodonmuutos, wai onko tahdottu todellakin tehdä myös tärkeä wakuutuksen haltijan etua rajoittawa ajallinen muutos? Ja wielä. Onko asiamiesohjesäännöissä yhtiön 
          alkuajoilta asti ollut säännös, joka kieltää asiamiestä wastaanottamasta wakuutusmaksua, jos wakuutuksen ottaja on sairastunut?</p>
        <p className="signature">Myöskin Suomi-yhtiössä wakuutettu.</p>
      </Article>

      <DateDivider date="Lauantai, 12.1.1924"/>
      <Article titleText="Tilitys Pelastusarmeijan joulupadoista.">
        <p>Pyydämme täten lausua sydämellisen kiitoksemme Smk:sta 2,165:10, jotka saimme joulupadoilla sekä Smk. 500.- lahjasta Mannerheimin Lastensuojeluliitolta köyhäin lasten waateusawustukseksi. 
          Wielä saimme 5 syltä rimapuita H:linnan Höyrysahalta, mistä kaikesta sydämellinen kiitos. Rahat on käytetty seuraawasti: Joulupaketteja 56:lle eri perheelle, sisältäen riisiä, wehnäjauhoja, 
          herneitä, keskimäärin kutakin lajia 1 kg, sianlihaa keskimäärin 800 gr. Joululehden jakelun yhteydessä tarjoiltiin kahwia woipullan kera. Menot Smk. 2,142:40. Lastenjuhla, jossa 59 lasta 
          sai tarpeellisia ja lämpöisiä waatekappaleita, Smk. 1,178.25. Yhteissumma 3,420:65. Samalla lausumme myös kiitoksemme ystäwille, jotka owat kuukausittain kannattaneet työtämme kowaosaisten 
          keskuudessa kuin myöskin ompeluseuran tarmokkaille jäsenille. Jumalan siunaus on palkkanne olewa „Hywää tehdessänne älkäät wäsykö”.</p>
        <p className="centered">H:linna tammik. 11 pnä 1924.</p>
        <p className="centered">Kiitollisuudella</p>
        <p className="signature zeroMargin">Elin Bärlund, Rosa Nuotio.</p>
        <p className="centered">Slummisisaret.</p>
      </Article>

      <DateDivider date="Perjantai, 18.1.1924"/>
      <Article titleText="„Saa ansaitsemansa rangaistuksen”.">
        <p>Lukiessani Hämeen Sanomain 11:stä numerosta uutista H:linnassa tapahtuneesta törkeästä puukotuksesta ajattelin millaista iwaa on uutisen lopussa olewa lause: „poliisi on kuitenkin hänen” 
          (rikoksen tekijän) „jäljillään ja toiwottawasti roisto saa raakalaisteostaan ansaitsemansa rangaistuksen.” Onko se ansionmukainen rangaistus, jos tuollainen roisto ja peto, joka 
          kieltolain maassa raatelee, ilman pienintäkään aihetta, kahta rauhallista kulkijaa, joita hän ei edes tunne, jos hän saa kuukauden, ehkäpä parikin istua wankilassa, jossa hän elää 
          puhtauteen ja ruokaan nähden herroiksi, paljon paremmin, kuin kunniallinen, suuren perheen isä ränsistyneessä tuwassaan. Wankila ei tuolle laiskalle lurjukselle ole rangaistus, waan 
          mitä miellyttäwin talwikortteeri, jossa ei työ rasita. Nuo onnettomat puukotetut saawat wielä kaiken kärsimänsä lisäksi elättää puukottajaansa linnassa, koska he arwattawasti owat 
          weroa maksawia kansalaisia.</p>
        <p>Ei wankila, nykyisessä muodossaan, ole ansionmukainen rangaistus tuollaisille huligaaneille. Miksi ei tuollaista sakkia edes wankilassa kohdella siten, kun he ansaitsewat, jotta 
          wankila peljättäisi heitä, ja he edes rangaistuksen pelossa jättäisiwät rikokset tekemättä, sillä mitään moraalisia arwoja he eiwät ymmärrä. Suomen wankilat owat „kurjalla” kannalla 
          siksi, että wankeja lellitellään liiaksi. Samassa Hämeen Sanomain numerossa on myös uutinen, kuinka työtön mies Turussa on yrittänyt istua syyllisen nimessä 5 kuukauden wankila
          rangaistuksen syystä, että hänelle on syyllinen luwannut, ei maksanut, jonkun pikkusumman, eikö tämä ole mainio näyte siitä, että wankilaan meillä mennään huwin wuoksi. Mutta mitä 
          turwaa meillä kunnollisilla kansalaisilla ja weronmaksajilla silloin on laista, kun kuka huligaani hywänsä saa meidät ryöstää ja raadella rangaistuksetta silloinkin waikka hänet 
          saadaan kiinni, sillä wankilassa istuminen ei nykyisellä komennolla ole rangaistus ansion mukaan. Ruokittakoon wangit huonommin, teetettäköön heillä lujasti oikeaa työtä, niin rikokset 
          wähenewät tawattomasti ja wankilan pelko pakottaa monet tuhannet Suomen huligaanit ja wiinatrokarit rehelliseen työhön ja kunnialliseen elämään. Laitettakoon, hywin järjestetyn 
          wankien työn awulla ja säästäwäisyydellä asiat niin, että jokainen Suomen wanki tuottaisi waltiolle waikkapa waan 1 markan hyödyn wuorokaudessa sen sijaan, että nyt waltio hänen 
          työnsä lisäksi saa maksaa 15 á 16 mk. wuorokaudessa hänen elättämisekseen.</p>
        <p>Pois lellittely ja wäärä „ihmisyys”, kuri ja järjestys maahan!</p>
        <p className="signature">Cato.</p>
      </Article>

      <DateDivider date="Keskiviikko, 30.1.1924"/>
      <Article titleText="Kaikille Pohjois- ja Etelä Hämeen Suojeluskuntapiirien Suojeluskunnille.">
        <p>Täten kutsutaan kaikkia Hämeen läänissä asuwia suojeluskuntalaisia ottamaan osaa „Hämeen Hiihtomestaruusmalja” -kilpailuihin, jotka allaolewa Suojeluskunta järjestää sunnuntaina 
          helmikuun 17 p:nä 1924 klo 9 a.p. matkalla Hämeenlinna Riihimäki (taikka päinwastoin; matkan pituus noin 45 km).</p>
        <p>Woittaja saa haltuunsa wuodeksi Hämeenlinnan Kansallis Kerhon lahjoittaman komean, 2,500 markan arwoisen „Hämeen Hiihtomestaruus maljan”, jota ensimmäisen kerran puolustaa M. 
          Talwia Kangasalan Sksta; useita yksityispalkintoja jaetaan.</p>
        <p>Suojeluskunnat ilmoittawat osanottajien nimet allekirjoittaneelle 7. 2. 1924 mennessä. Lähemmät määräykset kilpailureitistä, majoituksesta y.m. annetaan myöhemmin.</p>
        <p>Runsasta osanottoa toiwoen lausumme kaikki suojeluskuntalaiset terwetulleiksi yllämainittuihin kilpailuihin.</p>
        <p className="centered">Hämeenlinnan Suojeluskunta.</p>
        <p className="signature zeroMargin">Helkiö.</p>
        <p className="centered">Paikallispäällikkö.</p>
        <p className="signature zeroMargin">Juurewa.</p>
        <p className="centered">Urheilutoimik. puheenjoht.</p>
      </Article>
      <Article titleText="Wapaussodan inwalideille.">
        <p>Yleinen Suomen wapaussodan inwalidien kokous pidetään Helsingissä, Säätytalolla sunnuntaina tulewan helmikuun 17:tenä päiwänä ja aloitetaan kokouksen pito sanottuna päiwänä klo 
          12, mutta jos näyttää tarpeelliselta, niin jatketaan sitä wielä 18:tena eli maanantaipäiwänä. Kokouksessa tullaan keskustelemaan inwalidiyhdistyksen perustamisesta sekä monista 
          muista esille tulewista tärkeistä asioista. Koska waltioneuwosto on myöntänyt kokoukseen osaaottawille inwalideille wapaaliput rautateillä, niin kehoitetaan täten kaikkia niitä 
          wapaussodassa haawoittuneita sotureita, jotka katsotaan olewan oikeutettuja wapaalipun saantiin ja jotka haluawat ottaa osaa kokoukseen, lähettämään allekirjoittaneelle selwän 
          osoitteensa ja sen aseman nimen, josta lähtö tapahtuu.</p>
        <p>Koska käytettäwissämme on myös rajoitettu määräraha etupäässä majoitusta warten, niin ei walitettawasti woida maakyytejä korwata, jos osanottajia ilmaantuu paljon. Kuitenkin, 
          mikäli warat antawat myöten, annetaan matkakyydeistäkin korwausta kiewaritaksan mukaan niille inwaliideille, jota eläwät huonommissa olosuhteissa ja joiden matka rautatieasemalle 
          on peninkulmaa pidempi. Tästä maamatkan korwauksesta pyydetään niitä, jotka sellaisen saantiin katsowat itsensä oikeutetuiksi, tekemään eri anomus allekirjoittaneelle ja on 
          kokoukseen sitten tuotawa mukana, jos mahdollista, kuitattu lasku kyydistä. Siltä waralta taas, että monilukuisuutemme tähden täytyisimme majoituksessa turwautua yhteisasuntoihin, 
          niin kehoittaisimme kokoukseen saapuwia ottamaan mukaansa wiltin ja lakanat.</p>
        <p className="signature zeroMargin">A. Rosenberg.</p>
        <p className="centered">Os.: Selki (Hangon rata).</p>
      </Article>
      <Article titleText="Sokerijuurikaswiljelyksen edistäminen Etelä-Hämeessä.">
        <p>Sanomalehdissä on kierrellyt uutinen, jonka mukaan Salon Raakasokeritehtaan toimesta äsken on pidetty neuwottelukokous, johon on kutsuttu edustajia eri seuduilta ja jossa on „todettu” 
          erinäisiä sokerijuurikaswiljelystä koskewia ponsia. Ainoa „edustaja”, joka on nimeltä mainittu, on hra J. Torppa Hattulasta, joka oli walittu kokouksessa puhetta johtamaan.</p>
        <p>Tämän johdosta täytyy kysyä, owatko todelliset sokerijuurikaswiljelijät Etelä-Hämeessä jo niin täydellisesti häwinneet, että heidän „edustajaksi” on täytynyt ottaa pohjalainen 
          huwilanomistaja, jolla ei woi olla sanottawaa kokemusta asioista? Wai onko tahdottu antaa kokoukselle erityistä loistoa hankkimalla sille puheenjohtajaksi entinen suurlakkoajan 
          kuwernööri? Ja owatko muut edustajat olleet pätewämpiä tekemään asiasta päätöksiä kuin puheenjohtaja?</p>
        <p>Ilmoituksissaan Sokerijuurikastehdas edelleen wakuuttaa, että sokerijuurikaswiljelys antaa suurempaa woittoa hehtaaria kohti kuin muut wiljelyskaswit. Ainakin Etelä-Hämeessä owat 
          tulokset kuitenkin yleensä olleet suorastaan masentawia. Luulisi, että yhtiökin käsittäisi sen, että, jos on mieli saada innostus asiaan uudestaan syntymään, siihen toki tarwitaan 
          muita wakuutteluja kuin henkilöiden, jotka owat yhtiön warta wasten palkkaamat tahi joiden ansio korkeintaan nousee siihen, että osaawat eroittaa sokerijuurikkaan ja porkkanan 
          toisistaan.</p>
        <p className="signature">Entinen sokerijuurikaswiljelijä.</p>
      </Article>

      <DateDivider date="Lauantai, 2.2.1924"/>
      <Article titleText="Uhkaako hedelmäwiljelyämme uusi tuho?">
        <p>Jo pari wuosikymmentä on ulkomaalaisissa puutarha aikakauslehdissä, eritoten hedelmäwilelyä käsittelewissä, tuontuostakin näkynyt wakawalaatuisia uutisia eräästä uudesta 
          hedelmäwiljelyn tuholaisesta, nimittäin omenahärmästä (Spherotheca leucotricha - Podosphaera leucotricha). Wiime wuosina owat selostukset naapurimaistamme käyneet yhä 
          hälyyttäwimmiksi. Onpa jo sattunut esim. Ruotsissa hywin tuntuwia tämän tuhosienen aiheuttamia waurioita. Yleensä pidetään mahdollisena, että tämä tuhosieni wauhtiin päästyään 
          woi aikaansaada suunnatonta tuhoa hedelmätarhoissa, etupäässä omena-, mutta myöskin päärynäpuille. Wieläpä siinä määrin, että muutamien tälle tuhosienelle alttiiden laatujen wiljely 
          käy täysin mahdottomaksi. Koska allekirjoittanut on tawannut tämän tuhosienen jo ainakin yhdessä paikassa Suomessakin, joten woidaan todistaa sen maassamme olo, on syytä, että mekin 
          ajoissa jo kiinnitämme huomiomme siihen ja ryhdymme niihin toimenpiteisiin, joita näin wakawalaatuisen tuhosienen maahantulo ehdottomasti waatii, sillä ottaen huomioon, että kotimaisen 
          hedelmäwiljelymme tuotanto nousee nykyisin jo yli 100 miljoonan markan, ymmärrämme helposti kuinka suurta kansantaloudellista wahinkoa se woi wuosittain aikaansaada.</p>
        <p>Ensinnäkin olisi saatawa selwillle, onko se esiintynyt jo useammissa puutarhoissa maassamme? Koska tässä on kysymyksessä yksi pahimpia puntarhawiljelyn tärkeimmän alan wihollisia, 
          olisi kaikkien oltawa walmiit jo omankin etunsa kannalta jonkunwertaiseen waiwannäköön tämän witsauksen torjumiseksi ja pyytää allekirjoittanut sentähden, että jokainen 
          hedelmänwiljelijä, joka on mainitun loissienen hedelmätarhassaan tawannut, antaisi siitä tiedon allekirjoittaneelle.</p>
        <p>Jotta sen toteaminen olisi helpompaa, tahdon tässä muutamin sanoin selostaa sen esiintymisen ja tunnusmerkilliset ominaisuudet. Omenahärmä muistuttaa joka suhteessa karwiaismarjahometta. 
          Se tawataan hedelmätarhoissa tawallisesti ensiksi siementaimissa tai nuoremmissa hedelmäpuissa, wasta laajemmin lewittyään se siirtyy wanhempiin puihin, esiintyen ensiksi wuosikaswaimien 
          latwalehdillä ja kukilla siirtyen wasta myöhemmin wanhemmille lehdille, kuoren pinnalle ja hedelmille muuttaen ne kaikki wäriltään hohtawan harmaiksi, härmäpeittoisiksi. Omenahärmä lewiää 
          nopeasti saman hedelmätarhan kaikkiin wähänkin wastustuskywyttömämpiin hedelmäpuu-laatuihin, joten torjumistoimenpiteisiin on ryhdyttäwä heti kun se tawataan. Ehdotonta, yksinkertaista 
          häwityskeinoa ei tällekään loissienelle toistaiseksi tunneta, mutta wastustamalla sitä sitkeästi ja järkiperäisesti se wähitellen saadaan tyystin häwiämään hedelmätarhasta. Menettelytawat 
          owat samat kuin muillekin waikeasti tuhottawille loissienille ja kaswitaudeille ja on tällöin erikoisesti kiinnitettäwä huomiota kaswien terweyshoidolliseen puoleen. ja järkiperäiseen 
          torjumisaineitten käyttöön, joista seikoista on täydellinen selostus mm. 1923 - 1924 puutarhakalenterissa. </p>
        <p className="centered">Lepaan Puutarhaopistolla tammikuun 23 pnä 1924.</p>
        <p className="signature zeroMargin">Olawi Collan.</p>
        <p className="centered">Waltionpomologi.</p>
      </Article>

      <DateDivider date="Keskiviikko, 6.2.1924"/>
      <Article titleText="Sokerijuurikaswiljelyksen edistäminen Etelä-Hämeessä.">
        <p>Eräs entinen sokerijuurikkaan wiljelijä on tämän lehden numerossa 25 halpamaisesti solwannut kunnallisneuwos F. Torppaa, ja samalla hän yritää antaa letkauksen Suomen Raakasokeritehtaan 
          johdolle sekä wielä wälillisesti niille sokerijuurikkaan wiljelijöille, jotka ottiwat osaa kirjoituksessa mainittuun neuwottelukokoukseen Salon kauppalassa. </p>
        <p>Kirjoituksen laatija näyttää olewan loukkaantunut siitä, ettei häntä oltu kutsuttu tuohon edellämainittuun kokoukseen osanottajaksi, sillä kaikesta päättäen hän olisi siellä tahtonut 
          antaa oikean akateemisen neuwon ei ainoastaan sokerijuurikkaan wiljelemisessä waan myöskin muittenkin juurikaswien tuntemisessa. Tuntuu liewimmin sanoen rumalta kirjoittajan halu loukata 
          yksityistä henkilöä sellaisten asioitten yhteydessä, joilla ei ole mitään tekemistä sokerijuurikkaan wiljelemisen kanssa. Kunnallisneuwos J. Torppa ei ole tuossa kokouksessa ollut 
          erityisenä Etelä-Hämeen juurikaswiljelijäin edustajana - waikkakin hänet oli walittu kokouksen puheenjohtajaksi, enkä myöskään luule entisillä wiljelijöillä olewan mitään erityistä 
          oikeutta tutkia meitä muita kokouksen osanottajia, olemmeko pätewiä arwostelemaan, kannattaako sokerijuurikkaan wiljelys Elelä-Hämeessä, wai eikö.</p>
        <p>Tämän yhteydessä teen lyhyesti selkoa nykyisille sokerijuurikkaan wiljelijöille sekä muille asianharrastajille Salon kokouksen neuwottelujen tuloksista. Kokouspäiwänä, tammikuun 23 pnä, 
          oli Raakasokeritehtaan kutsua noudattaen kokoontunut Salon palokunnan talolle noin 25 sokerijuurikkaan wiljelijää Hämeestä ja muualta Etelä-Suomesta. Pidemmän asiallisen keskustelun jälkeen 
          kokous yksimielisesti katsoi, että sokerijuurikkaan wiljeleminen Etelä-Suomessa kannattaa seuuraawien näkökohtien perusteella:</p>
        <p>1.) Kun wiljelijöille tehdas takaa sokerijuurikkaan hinnaksi 55 p. kilolta paitsi muita etuja.</p>
        <p>2.) Jos wiljelmä ei sijaitse liian kaukana rautatieasemalta.</p>
        <p>3.) Jos wiljelijä noudattaa niitä yleisiä menettelytapoja juurikasmaan lannoituiseen kylwön ja harwennuksen sekä maanmuokkauksen suhteen, mikä on tawallista.</p>
        <p>Wielä todettiin, että sokerijuurikkaan naatti yhdessä tehtaalta edullisesti laadun leikkeleen kanssa wastaa suunnilleen sitä tuorerehumäärää, mitä samalta peltoalalta saataisiin esim. 
          naurista wiljelemällä, minkä wuoksi lähellä asemaa asuwa sokerijuurikkaan wiljelijä woi wähentää rehujuurikkaan kaswattamista ja parhaassa tapauksessa woi sen kokonaan lopettaakin, 
          tarwitsematta silti lypsykarjaltaan wähentää tuorerehunsyöttöä.</p>
        <p>Kokouksessa wallitsi yleensä toiworikas mieliala sokerijuurikkaan uudelleen wiljelemisen puolesta eikä katsottu wielä olewan pätewää syytä lakata sen kaswattamisesta, sillä wiime kesä on 
          antanut poikkeuksellisen huonon sadon yleensä muistakin wiljelyskasweista.</p>
        <p>Lopuksi pyydän entiselle sokerijuurikkaan wiljelijälle huomauttaa, että, jos Teidän ei kannata eikä sowi kaswattaa sokerijuurikasta, nim. antakaa niitten maanwiljelijäin, joilla on edelleen 
          halua ja ehkä parempia edellytyksiä kuin Teillä, sitä wiljellä, sillä ei ainakaan tätä kokeilua ole luettawa maanwiljelyksellemme taantumukseksi eikä kansantaloudellemme wahingoksi.</p>
        <p className="signature">T. J. Kupila.</p>
      </Article>

      <DateDivider date="Torstai, 7.2.1924"/>
      <Article titleText="Maalaisen mietteitä waaliliittoasiasta.">
        <p>Täällä maaseudulla, jossa ei aiwan tarkkaan tunneta puoluekeskuselimien ja sanomalehtien wälisiä kahnauksia, tuntuu käsittämättömältä että ollenkaan tarwitsee keskustella porwaripuolueiden 
          yhteisestä waaliliitosta. Wielä kummemmalta kuuluu, että sitä wastustetaan. Yhtymisen pidämme aiwan luonnollisena ja wälttämättömänä. Yksinkertaisuudessamme emme huomaa suurta eroa nykyisen 
          ajan ja wuoden 1917 painostawien olojen wälillä. Silloin saiwat sosialistit tahtonsa läpiajetuksi ryssäin pistinten awulla; nyt ei heidän tarwitse muuta kuin sanella liewiä laittomuusuhkauksia, 
          niin toiweensa toteutuwat. Kun waltiollisista oloista olemme saaneet noin lohduttoman käsityksen kunnallisasioista ja tunnemme tuon „weljeyden” ja „tasa-arwoisuuden” ikäwän irwikuwan, jonka 
          hywänä seurauksena on ollut porwarillisten puoluerajain poistuminen useissa kunnissa ja yhteisen rintaman muodostuminen kumouksellisia wastaan, emmekä tunne todellista syytä, miksi kuulumme 
          eri karsinoihin waltiollisissa waaleissa, niin itsestään syntyy kysymys: kuinkahan suuria ja waikeasti sowitettawia niitten puoluepääherrojen ja sanomalehtien erimielisyydet owat, kun ei niitä 
          woida nytkään jättää syrjään ja puhaltaa yhteen hiileen, mistä syttyisi porwarillinen waaliliitto, jonka tunnusmerkkinä olisi: Isänmaanpetturit pois yhteiskuntarakennukseltamme!</p>
        <p>Kysymykseen emme kukaan kykene tyydyttäwästi wastaamaan. Senpä johdosta herää toinen kysymys: eiköhän ole taas kärpäsistä tehty härkäsiä, joiden warjosta on joku yksityisetu päässyt määräämään 
          yhteisedun edelle?</p>
        <p>Pois kaikki siihen wiwahtawatkin! Maaseutulaisten puolesta pyydän Teidän herrain johtajain tarkistamaan kantanne, herkistämään hermonne tunteaksenne mitä isänmaallinen kansa eturiwin miehiltä 
          odottaa: hywästä ystäwyydestä järjestettyä yhteistä rintamaa isänmaattomia wastaan! Yhteistyössä ja yhteisymmärryksellä pienet erimielisyydet kyllä tasottuwat!</p>
        <p className="signature">Huolestunut maalainen.</p>
      </Article>
      <Article titleText="Entisen sokerijuurikaswiljelijän kirjoituksen johdosta.">
        <p>Tämän lehden 25 numerossa on „entinen sokerijuurikaswiljelijä” sala-ampujan tawalla hyökännyt allekirjoittaneen kimppuun ja samalla yrittänyt wahingoittaa Suomen Raakasokeritehtaan pyrkimyksiä; 
          ja koska kirjoitus woipi johtaa asiaa tuntemattoman harhaan, niin muutama sana sen walaisemiseksi.</p>
        <p>Kuten mainitussa kirjoituksessa sanotaan, oli Raakasokeritehtaan puolesta kutsuttu eri seudulta wiljelijöitä ja tehtaan asiamiehiä neuwottelemaan sokerijuurikaswiljelyksen 
          edistämismahdollisuudesta. Etelä=Hämeestä oli kokouksessa saapuwilla wiljelijöistä maanwiljelijä T. Kupila Hattulasta.</p>
        <p>Allekirjoittanut oli myöskin yhtiön asiamiehenä kehoituksesta kokouksessa ja yksimielisestä pyynnöstä toimi kokouksen puheenjohtajana, aawistamatta sen herättäwän kenessäkään mieskohtaista 
          katkeruutta.</p>
        <p>Kun olin kahtena syksynä tehtaan käyntiaikana seuraamassa sokerijuurikkaiden punnitusta ja pesua, niin tällöin olin tilaisuudessa tutustumaan juurikkaanwiljelijäin kokemuksiin, jotka oliwat 
          toisistaan eriäwiä. Toiset sanoiwat, että juurikkaat kaswawat huonosti ja sen wuoksi niiden wiljeleminen ei kannata. Toiset myönsiwät, että jos iiden kaswattamiseen kiinnitetään tarpeellista 
          huomiota, saadaan ne kyllä menestymään. Löytyi sellaisiakin wiljelijöitä, jotta wakuuttiwat wiime wuonnakin saaneensa parhaan maataloustulon ssokerijuurikkailla. Tämmöiset oliwat käsitykset 
          tähänastisesta kokemuksesta wiljelijöillä ja tämän perusteella ei woi wielä lopullisesti tuomita meillä alkunnpantua sokerijuurikkaan wiljelemistä.</p>
        <p>Kun ottaa huomioon sen suuren kansataloudellisen yrityksen ja ne pääomat, mitkä siihen on kiinnitetty, niin tulee saada warmempi käsiiys, kuin minkä lyhytaikainen kokemus on esiin tuonut, 
          kotimaisen sokerituotannon kannattawaisuudesta meillä, ennenkuin siitä luowutaan. Suotuisimmissakaan oloissa ei waikeuksitta ole päästy tarkoitukseen. Meillä sitä wähemmin sillä sokerijuurikasta 
          woidaan nimittää „kulttuurikaswiksi”, joka waatii wiljelijältään huolellista hoitoa hywin menestyäkseen. Mutta sen saatuaan palkitsee se myöskin wiljelijän waiwat arwokkaalla tuotteellaan ja 
          jättää maan seuraawille kosweille paksumultaisena ja rawintorikkaana. On todettu, että yksin juurikkaiden naattien rehuarwo wastaa samankokoiselta peltoalalta saatua apila-nurmea.</p>
        <p>Ottaessani edelläesitetyt näkökohdat huomioon, suostuin awustamaan tehtaan neuwojia wilselyssopimusten tekemisessä, enkä käsittänyt, että täten olisin pannut entisen wiljelijän leipään kiweä, 
          sitä wähemmin että tällä toimenpiteellä tulisin anastamaan kadehdittua tointa.</p>
        <p>Tähän asti käytyäni kymmenessä eri kunnassa neuwottelemassa wiljelijäin kanssa sokerijuurikkaiden wiljelys mahdollisuudesta, olen saanut heiltä samallaiset tiedot kokemuksistaan, kuin alussa 
          kerroin aikaisemmista wiljelijäin mielipiteistä. Wieläpä wiljelijöistä osa, jotka owat epäonnistuneet suoraan ja awonaisesti tunnustawat, että sokerijuurikkaan wiljelys on heillä ollut wain 
          siwuasiana ja sen wuoksi siihen ei ole kiinnitetty tarpeellista huolta. Sitä wastoin ne wiljelijät, jotka owat huolella ja järkiperäisesti hoitaneet juurikaswiljelyksensä, owat saaneet tyydyttäwiä, 
          jopa loistawiakin tuloksia. Paimiossa m.m. tapasin erään pienwiljelijäperheen, jonka isäntä ja emäntä oliwat asiaan innostuneita ja kiitollisia saawutuksiinsa. Isäntä näytti wiime kesänä 
          wiljelemänsä 27 aarin peltoalan ja Raakasokeritehtaan tilin, jonka mukaan oli saanut juurikkaistaan noin 5,000 markkaa. Tätä rahatuloa hän piti pienessä, 20 hehtaarin käsittäwässä peltowiljelyksessä, 
          suurarwoisena. Tuon paljon walittelua herättäneen junrikasmaan harwennuksen ja perkauksen sanoi itse siwutöikseen suorittaneensa ja wakuutti sen helposti sujuwan, kun siihen tottuu.</p>
        <p>Emäntä jutteli mieli lämpöisenä ja silmät kiitollisuudesta palawina sokerijuurikkaan wiljelemisen suurista eduista karjataloudessa. Hän sanoi heillä karjan tuotonnon uskomattomasti lisääntyneen 
          siitä saakka, kun he sokerijuurikasta rupesiwat wiljelemään. Juurikkaiden naatit, muun rehun ohella, hän antaa syystalwella. Sen jälkeen melassia ja kewättalwella purmussa säilynyttä leikkelyä, 
          joita pienestä hinnasta on tehtaalta saatu.</p>
        <p>Tyytywäisyys ja yksimielisyys tuntui kodissa wallitsewan, jotka owatkin ihmiselämän suurin ja kallein rikkaus ja onni. Tämmöisestä kodista tuntui riittäwän ystäwyyttä ja wieraanwaraisuutta 
          toispaikkakuntalaiselleken, sääty- y.m. ja arwoon katsomatta.</p>
        <p>Oli todellakin nautinto tawata tällaisia wiljelijöitä ja tutustua heidän kokemuksiinsa. Olisi toiwottawa, että nämät kokemukset tulisiwat yleisemmin tunnetuiksi.</p>
        <p className="centered">Hattulassa helmik. 4 pnä 1924.</p>
        <p className="signature">Juho Torppa.</p>
      </Article>

      <DateDivider date="Torstai, 14.2.1924"/>
      <Article titleText="Wastalause.">
        <p>Hämeen Sanomain numerossa 3 helmikuun 9 päiwänä olleen uutisen johdosta, koskewa syyttäjien ja poliisimestarien osuuksia kieltolakirikoksista tuomituista sakoista, saan täten yhtenä „osakkaana” 
          panna wastalauseeni sen johdosta, että sanomalehdessä julkaistaan tietoja, jotka koskewat wirkatoimestani tulewia palkkioetuuksia. Sanomalehti ei liene sitä warten olemassa, että yleisö saisi 
          tietää kuinka paljon minulla on ollut tuloja ja kieltämättä täytynee minulla olla oikeus waatia tässä suhteessa waitioloa. Miksi ei ilmoiteta nimeltä niitä lukuisia kieltolainrikkojia, wiinatrokareita, 
          jotka lakia uhmaten ja ilkkuen lewittäwät myrkkyä laajoihin kansankerroksiin ja onnettomien ihmisten juomahimoa hywäkseen käyttäen hyötywät monin kerroin ja kun joutuwat lopulta oikeuteen wastaamaan 
          rikoksestaan, edelleen saawat pysyä tuntemattomana suuren yleisön edessä ja harjoittaa ala-arwoista ammattiaan. Jos todella pantaisiin „salat julki”, niin ei minulla olisi mitään sitä wastaan, 
          waikka ansioni tulisi wastakin suuren yleisön tietoon, mutta niin kauan kun kieltolakirikkoja saa esiintyä tuntemattomana, lienee minulla myös oikeus pysyä tuntemattomana. Lahti-lehdessä oli ollut 
          myös painettuna uutinen, jonka otsikkona oli ollut „kieltolakitienistit”. Kuten jo otsikosta hywin näkyy, ei uutista parhaalla tahdollakaan woi ymmärtää muulla kuin yhdellä tawalla. Minut asetetaan 
          pahempaan asemaan kuin lainrikkoja, joudun suuren yleisön eteen tekemään tiliä tuloistani. Minun syykseni ei suinkaan woida lukea sitä, että olen osuuteni saanut, sillä olenhan sen laillisella tawalla 
          saanut. Yleisöllä lienee wähän mielenkiintoa minun yksityisiin tuloihini niin kauan kuin kieltolainrikkojat saawat rauhassa, ilman että heidän nimiään ilmastaan yleisölle, tehdä rikoksiaan ja heidän 
          toimintaansa ei julkisesti puututa. Jos arw. Toimitus yksityisesti haluaa tietoja tuloistani, niin pyydän kääntymään suoraan minun puoleeni ja rohkenen lopuksi toiwoa, että minä tulojeni puolesta saan 
          pysyä yhtä tuntemattomana kuin kieltolainrikkojakin.</p>
        <p className="centered">Koskella H.l. helmikuun 11 päiwänä 1924.</p>
        <p className="signature zeroMargin">Hannes Heinonen.</p>
        <p className="centered">Kärkölän piirin nimismies.</p>
        <Image src={subDivider} className="dividerStyle" />
        <p><span className="bold">Toimitus,</span> jota ylläolewan Herra Nimismiehen „vastalauseen” sekä säwy että sisältö suuresti kummastuttaa, pyytää huomauttaa, että kysymyksessä olewa uutinen kuuluu 
        n.s. lääninhallituksen uutisiin ja on julkaistu samalla kuin meidän lehdessämme myöskin kaikissa niissä Hämeen läänin sanomalehdissä, jotka yleensä tulewat näistä uutisista osallisiksi. Herra 
        Nimismiehen arwostelut ja wertailut woimme hywällä syyllä jättää omaan arwoonsa. Pyydämme kuitenkin herra Nimismiehelle huomauttaa, että otamme kiitollisina wastaan lehdessä uutisia julkaistawaksi 
        kieltolain ammattirikkojista ja m.m. heidän tuloistaan, jos hän meille niitä woi toimittaa.</p>
      </Article>

      <DateDivider date="Lauantai, 16.2.1924"/>
      <Article titleText="Kaikki hämeenlinnalaiset!">
        <p>Kuten tämän lehden eilispäiwän numerosta näimme, on rahankeräyksessä olympialaisia kisoja warten kerätty Hämeenlinnan piirissä noin 19.000 markkaa, josta summasta on Hämeenlinnan kaupunki antanut wain 
          murto osan Riihimäen kerätessä yksistään toistakymmentä tuhatta markkaa. Mikä häpeä? Me tuhatlukuiset hämeenlinnalaiset urheilun ystäwät ja harrastajat, jotka aina kesäsin täytämme urheilukentän reunat, 
          näyttäkäämme, että mekin woimme ja tahdomme lisätä suomalaisten olympiajoukkuetta yhdellä miehellä, kokoamalla niinkuin Riihimäkikin. Sillä mitä suuremman joukkueen Suomi woi lähettää olympialaisiin, 
          sitä suuremmat owat woitonmahdollisuudet. Jotta tämä woisi toteutua, on jokaisen hämeenlinnalaisen yhdistyksen, seuran ja muodostuman otettawa asia esille kokouksissa ja oikein wakawasti autettawa summan 
          karttumista, sillä jokainen siihen kyllä kykenee, ken tahtoo. Ehdottaisin sen tähden, että jokainen seura ja muodostuma lahjoittaisi olympiarahastoon alempana mainituista tilaisuuksista kertyneet tulot. 
          Palloseura „Ilwes” woisi järjestää kewäällä joko jalka- tai pesäpallokilpailuja, W & A : seura „Tarmo” woimisteluiltaman ja kilpailuja, Uimaseura uimanäytöksiä, oppikoulut jääpallo otteluja, eri laitokset 
          „puulaakiotteluja”, esim. Lääninhallitus, Kirjapainot, Skogster, Karisto j.n.e., raittiusseura ja W.P.K. iltamia tai kansanjuhlia, suojeluskunta ja Liik. apulaisyhdistys iltaman, Kerho-Kuoro, Kaj. Sissipatalj. 
          soittokunta, W.P.K:n soittokunta ja seminaarin kuoro konsertteja, eläwät kuwat, yhden näyttännön kumpikin, Kansalliskerho ja metsästysseura määrätyn osan arpajaiswoitoistaan j.n.e. Toiwottawaa wielä olisi, 
          että eri huoneustojen omistajat antaisiwat ilmaiseksi huoneustonsa mainittuihin tarkoituksiin. Eri yhdistykset woisiwat sitä paitsi esim. kauppayhdistys, tehtailija yhdistys j.n.e kerätä kokouksissaan 
          jonkun summan. Luullakseni täten toteutuisi ajatus, mutta olisi sentähden ripeästi ajoissa ryhdyttäwä toimenpiteisiin ja jokaisen järjestettäwä kysymyksessä olewia tilaisuuksia. Ohjelmat eiwät tietenkään 
          tarwitsisi olla mitään erikoisia, kyllä tarkoitus ja innostus toisiwat mainittuihin tilaisuuksiin yleisöä. Eikä ainoastaan Hämeenlinnan kaupungin, waan myöskin sen ympäristön yhdistysten olisi ryhdyttäwä 
          samanlaisiin toimenpiteisiin. Siis näyttäkäämme hämeenlinnalaiset, että mekin saamme kootuksi ainakin yhtä paljon kuin riihimäkeläiset ja olkoon yhteinen päätöksemme Olympialaisjoukkueemme suuremmaksi ensi 
          olympialaisiin kisoihin! Suomi woittoon!</p>
        <p className="centered">Hämeenlinna 14 p. helmik. 1924.</p>
        <p className="signature">Y. A. Wuori.</p>
      </Article>
      <Article titleText="Kieltolakia pidettäwä silmällä, asetettaessa edustajaehdokkaita.">
        <p>Kun näinä päiwinä käydään asettamaan ehdokkaita waalipiirissämme, on syytä awoimin silmin jokaisen raittiutta harrastawan  kansalaisen seurata ehdokkaiden ajattelua ja koettaa wähäiseltä osaltaan 
          waikuttaa niin, että ainoastaan todelliset raittiutta harrastawat kansalaiset asetettaisiin ehdokkaiksi. Aika jossa raittiusasian suhteen elämme on siksi merkityksellinen kysymyksessä olewalle asialle, 
          että nyt emme saa sokeasti luottaa siihen, mitä erinäisten puolueiden taholta meille tyrkytetään. Mielestäni ei riitä tällä kertaa ehdokkaalta se, että hän sanoo kannattawansa raittiusasiaa. Kieltolain 
          wastustamisyhdistyksenkin jäsenet owat muka tekewinään työtä kansamme terween elämän hywäksi raittiuskysymyksen suhteen. Mutta he melkein poikkeuksetta tekewät sitä, heidän mielestä tärkeätä isänmaallista 
          työtään, wäkijuomalakien ääressä. Tässä piilee waara, ja on wakaumukseni se, että ehdokkaalta tulee tällä kertaa waatia sitä, että hän omassa elämässään noudattaa raittiutta. Käsitykseni mukaan hän silloin 
          wasta tosiasiallisesti, tärkeällä edustajapaikallaan woi tehdä raittiusasian hywäksi tuloksellista työtä, olkoonpa sitte kysymyksessä joko nykyisen kieltolain tarkistus tai muunlainen raittiutta koskewa 
          kysymys käsittelyn ja ratkaisun alaisena, kun hän omaa wakaumukseen perustuwan raittiusmielisen katsantokannan elämässään. Tähän meidän tällä kertaa on pyrittäwä ehdokaskysymyksen suhteen.</p>
        <p className="centered">Hauho, 10. 2. 1924.</p>
        <p className="signature">Aleksi Mattila.</p>
      </Article>

      <DateDivider date="Keskiviikko, 20.2.1924"/>
      <Article titleText="Entiselle sokerijuurikkaan wiljelijälle.">
        <p>Wasta äsken näimme Hämeen Sanomien 25 numerossa „Entisen sokerijuurikaswiljelijän" sisunpurkauksen meitä ja kunnallisneuwos Juho Torppaa wastaan.</p>
        <p>Sen johdosta pyydämme saada huomauttaa, että maanwiljelijä Kupila, joka oli saapunut Salossa pidettyyn neuwottelukokoukseen, on kai yhtä hywä „todellinen sokerijuurikaswiljelijä” kuin „entinenkin 
          sokerijuurikaswiljelijä”. Muuten ei kokous Salossa ollut mikään „edustaja”-kokous, waan aiwan yksityinen, johon olimme persoonallisesti kutsuneet määrättyjä henkilöitä neuwottelemaan sokerijuurikkaan 
          wiljelyksen edistämisestä myöskin Etelä-Hämeessä, sillä uskomme kaikista „Entisen sokerijuurikaswiljelijän” ja senaattori Kairamon wakuutteluista huolimatta, että sen wiljeleminen Hämeenlinnan tienoilla 
          on erittäin kannattawaa ja samaa mieltä owat todelliset sokerijuurikkaan wiljelijätkin. Ne, jotka leikittelewät maanwilielijää, woiwat kyllä olla eri mieltä ja ne, joiden mielityönä on hywien asioitten 
          nälwiminen, owat sitä warmasti.</p>
        <p>Mitä kunnallisneuwos Torpan käyttämiseen meidän palweluksessamme tulee, niin huomautamme wain, että hän on ollut Maataloustuottajain Keskusliiton waltuuskunnassa alusta alkaen todellisten maanwiljolijöitten 
          walitsemana ja heidän luottamusmiehenään. Emme siis usko, että heidän luottamustaan häneen woi sellainen sala-ampujan parjaus kuin „Entisen sokerijuurikaswiljelijän” wähimmässäkään määrässä horjuttaa.</p>
        <p>Kuwaawaa „Entisen sokerijuurikaswiljelijän” joko tietämättömyydelle tai totuudenrakkaudelle on, että hän sanoo kunnallisneuwos Torpan olewan suurlakkoaikaisen kuwernöörin, waikka hän oli kauan sen jälkeen 
          maaherrana. Tämä asiantuntemus on samaa laatua kuin erään suurfinanssimiehen, joka painetussa alustuksessa wiime maanwiljelysseurain edustajakokoukselle wäittää, että tekemällä poistoja kirjanpito-arwoissa 
          panttiwelat suurenewat! Sitähän „Entisellä sokerijuurikaswiljelijällä” ja mainitulla finanssimiehellä olisi yhtä suuri syy kummallakin tarkistaa „asiantuntemustaan”.</p>
        <p>Se luottamus, jonka meidän neuwojamme on saawuttanut Etelä-Hämeen sokerijuurikkaan keskuudessa, yhtä wähän kuin kunnallisneuwos Torpankaan ei horju sellaisista poikamaisista puheista sokerijuurikkaasta ja 
          porkkanasta, johon „Entisen sokerijuurikaswiljelijän” sepustus loppuu.</p>
        <p>Olemme aina walmiit asialliseen keskusteluun sokerijuurikkaan wiljelyksestä, mutta tuollaisiin asiattomiin kiukunpurkauksiin kuin „Entisen sokerijuurikaswiljelijän” wastaamiseen ei meillä ole aikaa. Woimme 
          sen käyttää paljon positiiwisempaankin työhön.</p>
        <p className="centered">Salossa 14. 2. 1924.</p>
        <p className="signature">Suomen Raakasokeritehdas Osakeyhtiö.</p>
      </Article>

      <DateDivider date="Sunnuntai, 2.3.1924"/>
      <Article titleText="Mihin laululawa puistossamme olisi rakennettawa.">
        <p>Jo aikaisemmin oli tässä lehdessä maisteri A. Th. Böökin kirjoitus laululawan paikasta puistossamme. Siinä ehdotti kirjoittaja, että se rakennettaisi siellä olewien linnaraunioiden yhteyteen.</p>
        <p>Lawa rakennettuna edellämainittuun paikkaan, kirjoittajan ehdottamalla tawalla, tulisi olemaan kylläkin arwokkaan näköinen, mutta käytännössä se mielestäni ei wastaisi tarkoitustaan. Ensiksikin se olisi 
          liian kaukana kentästä, jossa yleisö tawallisesti on, toiseksi en usko, että se siihen rakennettuna akustisessa suhteessa olisi juuri entistä parempi. Raunioiden phteyteen rakennettuna lawa wäkisinkin 
          joutuisi luonnottoman korkealle, joten siltä esitetyt ääniaallot kaikuisiwat liian korkealle. Lawan paikkaa määriteltäessä on ehdottomasti huomioon otettawa, mitkä tuulet woimakkaimmin puhaltawat 
          kysymyksessä olewaan paikkaan se sen läheisyyteen. Jokainenhan tietää miten waikeata on saada ääni kuulumaan wastatuuleen ja miten helppoa päinwastaisessa tapauksessa. Warsinkin musiikkiesityksissä 
          wastatuuli häiritsee kiusallisesti hajoittaen yhteissoinnun ja tekee kuulumisen epätasaiseksi. Tuulet, jotka käywät kaupungista päin koskewat ehdottomasti woimakkaammin kuin muut tuulet puistossa olewan 
          kentän ympärillä olewiin puihin saaden ne humisemaan. Jos lawa silloin on alla tuulen raunioiden yhteydessä, nün kentällä musiikkiesityksiä, warsinkin laulua, ei kuule juuri ollenkaan, tai jos kuuluukin, 
          niin kuuluu se kowin waillinaiselta. Mutta jos lawa silloin on sillä puolen mistä tuuli puhaltaa, niin kaikuwat ääniaallot lawalta myötätuuleen siksi woimakkaina ja täyteläisinä ettei puiden humina esityksiä 
          sanottawasti häiritse. Pohjoisista ilmansuunnista tulewat tuulet eiwät tule häiritsemään kentällä, koska kentän pohjoispuolella on siksi laaja ja korkea hawumetsä, etteiwät ne tuulet kysymyksessä olewaan 
          paikkaan ollenkaan sowi.</p>
        <p>Muistan wielä wallan hywin, jo pitempi aika siitä, kun lawa tilapäisesti silloisia juhlia warten, oli rakennettu kentän kaupungin sillan puoleiseen syrjään. Siltä lawalta kaikui musiikkiesitykset 
          täydellisimmiltä kuin mitä minä puistossa milloinkaan olen kuullut.</p>
        <p>Wielä huomioon otettawa on, erittäin tärkeä seikka se, että lawa rakennetaan lähelle sitä paikkaa missä yleisö tawallisesti on, ettei esittäjien tarwitse ensin huudella kuuliakuntaa luokseen ennen kuin 
          woiwat sille mitään esittää.</p>
        <p>Edellä olewia näkökohtia huomioon ottaen ehdottaisin, että laululawa rakennettaisi kentän kaupungin sillan puoleiseen syrjään. Tältä puolelta luulisin niin hywin puhe- kuin musiikkiesitysten kuuluwan 
          parhaiten, kunhan waan lawan taustaa ei rakenneta kowin korkeata eikä aiwan suoraa, waan että sen yläosa kohtalaisesti kaareutuisi eteenpäin. Permanto ei saisi olla tarpeettoman korkealla eikä liian ulkonewa 
          eteenpäin koska se siinä tapauksessa tulisi johtamaan ääniaallot ylös.</p>
        <p>Jos lawa tälle puolelle wiitoittamaani suuntaan rakennetaan, silloin kentän ympärillä olewat kummut, wastapäätä olewat rauniot ja korkeiden puiden rungot tulisiwat antamaan esiintyjille täydentäwän kaijun.</p>
        <p className="signature">Aleksi Seppälä.</p>
      </Article>

      <DateDivider date="Tostai, 6.3.1924"/>
      <Article titleText="Hämeen Sanomain arw. Toimitukselta pyydän tilaa seuraawalle oikaisulle.">
        <p>Tämän lehden 44 numerossa kerrotaan että allekirjoittanut on kieltäytynyt edustaja ehdokkuudesta, että kaikesta maalaisliittolaisesta toiminnasta esillä olewia waaleja warten sen takia, kun Maalaisliiton 
          piirikokous Lahdessa wiime helmikuun 17 päiwänä hylkäsi Kansallisen kokoomus- ja Kansallisen edistyspuolueiden waaliliitto pyynnit.</p>
        <p>Jo ennen tätä kokousta pyysi piiritoimikunta suostumustani edustaja ehdokkaaksi, johon wastasin kieltäwästi. Sama pyyntö uudistettiin mainitussa kokouksessa, jolloin wastaus oli sama kuin piiritoimikunnallekin.</p>
        <p>Waaliliittokysymyksen kokouksessa alusti agron. Wäinö A. Rantala, joka suositteli waaliliittoa Kansallisen edistyspuolueen kanssa, waan asettui epääwälle kannalle Kansalliseen kokoomuspuolueeseen nähden. Asiasta 
          keskusteltaessa yhdyin alustajaan, mikä käsitys ei tullut kokouksen päätökseksi. Tämä päätös ei waikuttanut ehdokkaaksi kieltäytymiseeni, sillä olin aikaisemmin sen jo ilmoittanut, eikä päätös ole esteenä 
          maalaisliittolaiselle waalitoiminnallenikaan. </p>
        <p>Kertojan samoin kuin lehdenkin pitää käsittämän että kuwiteltu menettely olisi tahditonta, niinkuin asian wääristeleminen on rumaa warsinkin julkisuutta warten painettuna.</p>
        <p className="centered">Hattulassa maalisk. 3 p:nä 1924.</p>
        <p className="signature">Juho Torppa.</p>
        <Image src={subDivider} className="dividerStyle" />
        <p><span className="bold">Toimitus</span> walittaen tapahtuneita erehdyksiä pyytää ylläaolewan johdosta huomauttaa, että kyseessäolewa uutinen perustui erään kokouksessa olleen maalaisliittolaisen kertomukseen, 
          joten luulimme siihen woiwan luottaa.</p>
      </Article>

      <DateDivider date="Perjantai, 7.3.1924"/>
      <Article titleText="Requiem-kuoro!">
        <p>Hämeen Maakuntajuhlain laulu- ja soittotoimikunnan keskuudessa on herännyt ajatus Cherubinin Requiemin esittämisestä juhlien aikana. Kun kaupungissamme on koko joukko henkilöitä, jotka owat ennen ottaneet osaa 
          mainitun suursäwellyksen esittämiseen ja siis hywin tuntewat sen, pyydetään kaikkia entisiä Requiem-laulajia kokoontumaan Kerhon huoneustoon ensi lauantaina t.k. 8 pnä klo 6 i.p. keskustelemaan aiheen 
          toteuttamismahdollisuudesta.</p>
        <p className="centered">Toimikunnan puolesta:</p>
        <p className="signature">A. Th. Böök.</p>
      </Article>

      <DateDivider date="Perjantai, 7.3.1924"/>
      <Article titleText="Kristilliset yhtymät Hämeenlinnassa tarwitsewat kodin.">
        <p>Kristillisten yhtymäin toimintaa waikeuttaa ja suorastaan estääkin sopiwan kokoushuoneuston puuute. Yhtymät sellaiset kuin Nuorten naisten kr. yhdistys, Lähetysyhdistys ja Nuorten raamatunlukupiiri, jotka tahtowat 
          toimia yhteisymmärryksessä luterilaisen seurakunnan kanssa, owat tässä suhteessa kaikkein waikeimmassa asemassa. Askettäin koetettiin kysymys toistaiseksi ratkaista siten, että päätettiin wuokrata waatimaton huoneusto 
          ja sopimus siitä piti juuri tehtämän. Wäliin tulleet seikat tekiwät tämän tyhjäksi ja niin jäiwät harrastukset ja toiweet taas toteutumatta. Päätettiin ottaa asia keskusteltawaksi laajemmissa piireissä toiwossa saada 
          yleisempää kannatusta, koska sen pikainen ja suotuisa ratkaisu tietäisi sinausta koko paikkakunnallemme.</p>
        <p>Kaikkia tätä kysymystä harrastawia henkilöitä kehoitotaan sen tähden saapumaan yhteiseen kokoukseen, joka pidetään neiti Ahosen Raittiusrawintolassa torstaina t.k. 13 pnä klo 8 illalla.</p>
        <p>Asia on Herran, tarkoittaen hänen waltakuntansa edistämistä. Siksipä saammekin olla wakuutettuja siitä, sillä hän on sen puolella ja on runsaasti siunaawa kaikkia, jotka koettawat myötäwaikuttaa todella hywän asian 
          woitolle pääsemiseksi.</p>
        <p className="centered">Hämeenlinnassa 10. 3. 1924.</p>
        <p className="signature">Yksi monien puolesta.</p>
      </Article>

      <DateDivider date="Perjantai, 14.3.1924"/>
      <Article titleText="Asessorin waali Tampereen hiippakunnassa.">
        <p>Maaliskuun 27 p. toimitetaan asessorin waali Tampereen hiippakunnassa poismuuttawan T. N. Pfalerin tilalle.</p>
        <p>Muutamia ehdokkaita on julkisesti sanomalehdissä mainittu, mutta sopiwampaa miestä lienee tällä kerralla waikea löytää kuin on Hämeenlinnan ja Wanajan kirkkoherra, lääninromasti Ludwig Enkwist.</p>
        <p>Ehdotan, että arw. wirkaweljet tulewissa waaleissa äänestäwät häntä. Hänen erinomainen tunnontarkkuutensa kansliatehtäwissä ja tunnettu kohteliaisuutensa seurakuntalaisia kohtaan kansliassaan takaa, että hän woisi 
          opettaa samaa muillekin hiippakunnan papeille. Warsinkin nykyaikana, jolloin kansa wäkisinkin tahtoo wieraantua kirkosta, olisi juuri Ludwig Enkwistin kaltainen pappi saatawa hiippakunnan johtajien joukkoon.</p>
        <p className="signature">Walitsija.</p>
      </Article>

      <DateDivider date="Sunnuntai, 30.3.1924"/>
      <Article titleText="Nimimerkki „W. W:lle”.">
        <p>T.k. 23 p:ssä Hämeen Sanomissa tekemänne kyselyjen johdosta haluan lyhyesti ilmoittaa seuraawaa:</p>
        <p>Kansallisen kokoomuspuolueen waaliohjelmassa lausutaan m.m.: „Kansallinen kokoomuspuolue tahtoo säilyttää sen, mitä kansamme on aikaisemmilta sukupolwilta arwokasta perinyt, niinkuin kansan uskonnon, terwehenkisen 
          perhe-elämän, elinwoimaisen talonpoikaiswiljelyksen ja säästäwäisyyden”. Ja sisäpoliittisessa ohjelmassa on m.m.: „Kirkon ja waltion wälisiä suhteita järjestettäessä on noudatettawa tarpeellista arkatuntoisuutta 
          kansankirkkoa kohtaan. Uskonnonopetusta on yleisissä oppilaitoksissa annettawa”. Näihin ponsiin on supistettu pääasiassa se, mitä kokoomuspuolue uskonnollisissa kysymyksissä on tahtonut julkilausua.</p>
        <p>Mielestäni sisältyy näihin ponsiin se tärkein, mitä mainituissa kysymyksissä on sanottawa. Luulen, että jokainen kokoomuspuolueen eduskuntaehdokkaaksi lupautunut pitää tärkeänä tämän ohjelmakohdan toteuttamisen. Itse 
          puolestani katson sen erityisen tärkeäksi. Pidän myös luonnollisena, että waltion on awustettawa, ja samaten kuin kansanopistoja yleensä, myös kristillisiä kansanopistoja. Mitä kirkolliskokouksen päätöksiin tulee, pidän 
          selwänä, että Eduskunta woi ewätä niiden toteuttamisen ainoastaan siinä tapauksessa, että ne olisiwat waltion päämääriä wastaan suuntautuwia, jommoisia ne tietenkään eiwät ole. Pidän siis uskonnollisen elämän kehittämiselle 
          tärkeänä, että Eduskunta wahwistaa kirkolliskokouksen päätökset. </p>
        <p className="signature">Arwi A Karisto.</p>
      </Article>

      <DateDivider date="Perjantai, 18.4.1924"/>
      <Article titleText="Lain ja oikeuden kunnioittamistako?">
        <p>Eräässä pitäjässä on werotuslautakunta merkinnyt käsityöläisten, liikemiesten, wirkailijain y.m. tuloista puolet ja jopa enemmänkin „maanwiljelystuloiksi”, waikka asianomaisilla ei ole maanwiljelystä, eiwätkä ole itse niitä 
          siksi ilmoittaneetkaan. Tämän on werotuslautakunta tehnyt sentakia, että ei seurakunta eikä sen papisto woisi näitä werottaa kirkollisiin tarkotuksin koko werotettawalle pannusta weromäärästä. Kun kunnan waltuuston walitsema 
          werotuslautakunta tämän tekee tietensä ja tarkotuksella, niin on se todistuksena kuinka alhaiset käsitykset wielä on monella laista ja oikeudesta, puhumattakaan heidän omasta kunniallisuuden ja rehellisyyden käsityksestään. 
          Ja kuitenkin esiintywät samaiset henkilöt toisinaan laillisen yhteiskunnan oikeusjärjestelmän puolustajina, ettemme sanoisi sen woimakkaina suojelijoina. Muita miten woidaan puhuakaan laillisuudesta ja oikeudesta, kun wirallisissa 
          toimissa, milloin niihin joudutaan, niitä tietoisesti rikotaan. Ennenkuin woi waatia muilta lakia ja oikeutta, täytyy itsekin niitä kunnioittaa. Joka ei sitä tee, on myös itse lewittämässä laittomuuden ja kurittomuuden henkeä. 
          Ihmettelemmekö, että laittomuus ja kurittomuus kaswaa.</p>
        <p>Mainitunlainen toiminta ei myöskään osoita asianomaisissa suurta omistusoikeuden kunnioitusta. Sillä omistusoikeus ei koske yksinomaan sitä omaisuutta, joka jo on hallussa, waan myös niitä oikeuksia, joita jollakin on. Jollemme 
          nyt kuitenkaan kunnioita toisen oikeuksia, miten woimme waatia muita kunnioittamaan meidän oikeuksiamme. Ja jos taas oikeudet poljetaan niin silloin mieliwalta ja itsekkyys hallitsewat.</p>
        <p>On pitäjälle arwaamattomaksi wahingoksi, kun sillä on toimissaan miehiä, joille laki ja oikeus eiwät mitään merkitse, joille kunniallisuus ja rehellisyys on tullut ala-arwoisiksi ja joille epärehellisyys ja lainrikkominen 
          owat luwallisia, kun ei waan ole kysymyksessä oma itse. Tällainen henkinen rutto merkitsee pitäjän kurjuutta ja samalla suurta tappiota koko kansamme edistyksessä. Toiwottawasti tällaiset ilmiöt häwiäwät sitä myöten, kun siwistys 
          ja walistus lewiäwät kaikkiin pitäjiin.</p>
        <p className="signature">X.</p>
      </Article>

      <DateDivider date="Lauantai, 3.5.1924"/>
      <Article titleText="Kehoitus.">
        <p>Kuusi wuotta on kulunut wapaussodan päiwistä. Tämän ajan kauhut unohtuwat wähitellen, aika häwittää niiden katkerat muistot.</p>
        <p>Mutta jälelle on jäänyt perintö, jota meidän sukupol
          wemme ei woi niin täydellisesti lunastaa, että sen jäljet eiwät tuntuisi. Se on welwollisuutemme niitä kohtaan, joita kohtalo on kowiten koetellut ja jotka owat wapaudelle 
          suurimman uhrin kantaneet. Se on welwollisuutemme inwaliideja kohtaan.</p>
        <p>Heitä ei ole ainoastaan täällä meidän omassa maassamme, waan etäällä kowiakokeneen Saksanmaan tehtaissa, parantumattomien kodeissa, inwaliidien työsiirtoloissa ja katujen kerjäläisinä, noin 60 henkeä. Heidän elämänsä on 
          herkeämätöntä taistelua nälkää ja puutetta wastaan ja heidän työnsä raskasta, usein woimia ylittäwää. Waikein on niiden asema, joilla on waimo ja lapset huolettawa. Se awustus, jonka hädänalainen Saksanmaa woi heille tarjota, 
          ei riitä elämän tarpeisiin.</p>
        <p>Suomesta Saksaan lähetetyt awustukset on etupäässä käytetty inwaliidien ja kaatuneiden perheiden auttamiseksi. Kun warat eiwät ole kaikille riittäneet, on ensi sijassa otettu huomioon lapset, nousewa sukupolwi. Perheettömiä, 
          joita useimmat Finnlandkämpfrer-inwaliidit oliwat ja edelleen owat, ei ole yleensä katsottu woitawan ottaa huomioon.</p>
        <p>Näinä päiwinä täyttäwät mielemme muistot tuosta wapauden kewäästä, jolloin saksalaiset maihinnousujoukot woitokkaina eteniwät maassamme.</p>
        <p>Olemmeko nyt kuluneen kuuden wuoden aikana unohtaneet muukalaiset, jotka owat uhranneet terweytensä, tulewaisuutensa ja työkykynsä maamme wapauden puolesta? Tahi olemmeko jo mielestämme heille kiitollisuudenwelkamme maksaneet?</p>
        <p>On olemassa alote kutsua noin 30 näitä „Suomenkäwijöitä” (Finnlandkämpfer) pariksi kesäkuukaudeksi maahamme wirkistymään. Heidät on tarkoitus sijoittaa maaseudulle sopiwaan paikkaan, minne myös warataan wapaapaikkoja meidän 
          omille inwaliideillemme. Täällä annetaan wieraille wapaa hoito, asunto ja ruoka sekä se hywin tarpeellinen lepo, jota he eiwät kotimaassaan wallitsewan lamaannuksen wuoksi woi suotuisimmissakaan olosuhteissa saada.</p>
        <p>Mutta hanke on toteutettawissa wain sikäli kuin yleisö ottaa sen sydämen asiakseen ja awustaa sitä kykynsä mukaan.</p>
        <p>Niitä henkilöitä, joille Saksan w. 1918 antama woimakas apu on muistossa kallis ja jotka haluawat olla mukana suorittamassa osaamme kiitollisuudenwelasta Finnlandkämpfer-inwaliideille, kehoitetaan jättämään raha-awustuksensa 
          tämän lehden toimitukselle, jollekin Lotta-Swärd-yhdistyksen paikallisosaston puheenjohtajalle tai lähettämällä ne osoitteella: Neiti Dagmar Ruin, Fredrikinkatu 71, Helsinki.</p>
        <p>Maantuotteina annettawista lahjoista tehdään ilmoitus samoihin paikkoihin, jonka jälkeen ne lähetetään suoraan inwaliidien oleskelupaikalle, mistä myöhemmin sanomalehdissä ilmoitetaan.</p>
        <p className="signature">M. von Bonsdorff, K. Castren, Wald. Ruin, Dagmar Ruin, Richard Siewers, F. Langenskiöld, J. K. Paasikiwi, Jenny af Forselles, J. Gummerus, E. Suolahti.</p>
      </Article>

      <DateDivider date="Sunnuntai, 4.5.1924"/>
      <Article titleText="Sukunimen suomalaistuttamisesta.">
        <p>Kun taas lähestyy suuren kansalaisemme Snellmanin syntymäpäiwä, toukokuun 12:s, joka on muodostunut erikoisesti siksi päiwäksi, jona wieraskielisiä sukunimiä muutetaan suomenkielisiksi, teemme lyhyesti selkoa siitä, miten nimen 
          muuttaminen käytännössä tapahtuu.</p>
        <p>Ennen sukunimilain säätämistä oli nimenmuutto warsin yksinkertainen asia, sillä siihen ei tarwittu juuri muuta kuin asianomainen ilmoittaminen toimeenpannusta muutoksesta. Silloin sopi warsin mukawasti järjestää suuria 
          joukkonimenmuutoksia, joukkoilmoituksia, kuten Suomalaisuuden Liiton wälityksellä useana wuonna tehtiin. Joulukuun 23 pnä 1920 annetun sukunimilain woimaan tultua on nimenmuutto tullut siinä suhteessa mutkikkaammaksi, että 
          tuollaiset joukkoilmoitukset eiwät enää helposti käy päinsä, sillä mainitun lain mukaan on nimenmuuttoanomus tehtäwä sen läänin maaherralle, jossa nimenmuuttaja on kirkonkirjoissa, ja owat niin ollen nimenmuuttoasiat hoidettawat 
          eri läänien lääninhallituksissa sekä kunkin hakijan kotiseurakunnassa.</p>
        <p>Anomus maaherralle tehdään tawallisessa järjestyksessä, itse tai asiamiehen kautta. Hakemukseen on liitettäwä papintodistus, joka osoittaa hakijan täydellisen nimen, syntymäpäiwän ja perhesuhteet. Toisella suwulla olewaa nimeä 
          ei yleensä saa ottaa, elleiwät hakijan esi-isät ole nimeä laillisesti käyttäneet. Maaherran päätöksestä saa walittaa korkeimpaan hallinto-oikeuteen kuudenkymmenen päiwän kuluessa. Kun maaherra on uuden sukunimen hywäksynyt, on 
          hakijan kuulutettawa hywäksymisestä wirallisissa lehdissä ja jossain paikkakunnan sanomalehdessä sekä ilmoitettawa sukunimi asianomaisen seurakunnan kirkonkirjoihin merkittäwäksi.</p>
        <p>Tässä pääkohdat nimenmuuttoa koskewista säännöistä. Tarkemman tiedon näistä saa mainitusta sukunimilaista (hinta 50 p.), jonka saa tilata, mieluimmin postietuannilla, osoitteella: Waltioneuwoston julkaisuwirasto, Helsinki.</p>
        <p className="centered">Helsingissä, huhtik. 30 p. 1924.</p>
        <p className="signature">Suomalaisuuden Liiton toimisto.</p>
      </Article>

      <DateDivider date="Lauantai, 10.5.1924"/>
      <Article titleText="Awoin kysymys kaupungin Hra Rakennusmestarille.">
        <p>Pyytäisimme kohteliaimmin kysyä kaupungin Hra Rakennusmestarilta, kenelle kuuluu lautakäytäwän alkuunpano silloin, kun wesi sulkee maantien kaupungin ja Linnanniemen wäliltä? Kun Linnanniemi osaltaan kuuluu kaupunkiin, niin me, 
          joiden mainittua tietä monta kertaa päiwässä täytyy kulkea, kärsimme suurta ajanhukkaa kiertäessämme wanhan Linnantien kautta. Pyytäisimme ystäwällisesti, että, koska me kerran maksamme werot kaupungille, sen wiranomaiset 
          huolehtiwat myös meidän etujemme walwomisesta yhtä hywin kuin muidenkin kaupunkilaisten.</p>
        <p className="signature">Joukko linnanniemeläisiä.</p>
        <Image src={subDivider} className="dividerStyle" />
        <h4>Sunnuntai, 11.5.1924</h4>
        <h5>Toimitukselta on pyydetty tilaa seuraawalle:</h5>
        <p>Eilisessä lehdessänne yleisönosastossa olewan kirjoituksen johdosta saa kaupungin Rakennuskonttori, jolle kirjelmässä mainitunlaisten töiden suoritus kuuluu, täten kunnioittaen „Linnanniemeläisille” ilmoittaa, ettei konttori 
          aio laittaa minkäänlaista porrasta tulwan alle joutuneen Kasarmikadun osalle, koska Kruunuportin tie on wielä kuiwilla.</p>
        <p className="signature">Kaupungin Rakennuskonttori.</p>
      </Article>

      <DateDivider date="Tiistai, 13.5.1924"/>
      <Article titleText="Kaupungin Rakennuskonttorille.">
        <h5>Pyydämme arw. Toimitukselta tilaa wielä seuraawalle:</h5>
        <p>Meitä ihmetyttää suuresti arw. Rakennuskonttorin säädytön ja siwistymätön „wastaus”, joka on samaa kuin „pitäkää suunne kiinni”. Luulisimme, että kun tällainen luonnoton tilanne kohtaa, kuin nyt tapahtunut weden nousu, eräitä 
          kaupungin osan asukkaita, että kaupungin wiranomaiset todella huolehtisiwat kaikkien kaupunkilaisten eduista samalla tapaa kuin nyt kysymyksessäkin olewa tapaus on. -Kaupungilla on kyllä tietääksemme wälineitä, että se ei 
          kaupungin menoihin olisi suurtakaan lowea tehnyt, jos olisikin mainittu silta laitettu.</p>
        <p>Jos arw. Rakennuskonttorin herrat itse waiwautuisiwat paikalle näkemään, miten wesi nyt on noussut ja miten useat talot jo owat miltei weden ympäröimiä, niin eiköhän mainitulle Rakennuskonttorille sentään todella kuuluisi 
          joihinkin toimenpiteisiin ryhtyminen, ettei tarwitsisi käwellä wedessä päästäkseen asioilleen.</p>
        <p>Sillä kalliiksi se tulee yksityisille laittaa mainittuja lautakäytäwiä yleisille käytäwille.</p>
        <p className="signature">Joukko linnanniemeläisiä.</p>
      </Article>

      <DateDivider date="Sunnuntai, 1.6.1924"/>
      <Article titleText="Hämeenlinnan oikeusneuwosmiehen waalista.">
        <p>Kaupunkilaisten mieliä askarruttaa parhaillaan kysymys, kuka on ensi keskiwiikkona toimitettawassa waalissa walittawa kaupunkimme oikeusneuwosmieheksi.</p>
        <p>Julkisuudessa on toistaiseksi näkynyt ainoastaan kaupunkimme asianajajayhdistyksen ja liikemiesten mielipide, että nimittäin mainittuun wirkaan olisi walittawa howioikeuden auskultantti Kalle Teikari, Kokemäeltä. — Hakijoita 
          on kymmenkunta, joten walinnan waraa siinä on runsaastikin. Me allekirjoittaneet olemme myöskin tutkiskelleet asiaa, ja olemme päättäneet yhtyä kannattamaan edellämainittua ehdokasta. Tähän tulokseen olemme tulleet hra 
          Teikarin lakimiestoiminnan ja hänen persoonallisten ominaisuuksiensa tähden. Syntyneenä talonpoikaisista wanhemmista Kokemäellä w. 1893 hän käwi Porin klassillisen lyseon, josta pääsi ylioppilaaksi w. 1911. Suoritti sitten 
          oikeustutkinnon w. 1917, toimi nimismiehenä Humppilassa w. 1918 ja ylimääräisenä esittelijänä lääninhallituksessa Hämeenlinnassa w. 1919, jolta ajalta hän on jättänyt jälkeensä muiston tarmokkaasta ja toimeliaasta lakimiehestä. 
          W. 1920 alussa hän siirtyi hoitamaan kotitaloansa, ollen siellä wiime syksyyn asti, jonka jälkeen hän on istunut wiidet warsinaiset käräjät Piippolan tuomiokunnassa ja howioikeuden määräyksestä hoitaa mainittua tuomiokuntaa 
          6 kuukauden ajan. Kokemäellä ollessaan hän on ollut waltion asiamiehenä waltion tulo- ja omaisuuswerotuslautakunnassa sekä kunnan walitsemana jäsenenä maanjako-oikeudessa. Niinikään hän on harjoittanut yksityistä 
          asianajotoimintaa.</p>
        <p>Tarkastellessa hra Leikarin ansioluetteloa ja kun tuntee hänet tarmokkaaksi toiminnan mieheksi, joka järjestelykykyisenä osaa hoitaa asiat, niin mielellään yhtyy äänellään kannattamaan hänen waaliansa. Toiwomme, että 
          kaupunkilaiset yksimielisesti ensi keskiwiikkona laskewat waaliuurnaan hra Teikarin nimellä warustettuja äänestyslippuja.</p>
        <p className="signature">Kaupunkilaisia.</p>
      </Article>
      <Article titleText="Oikeusneuwosmiehen waali.">
        <h5>Kuka walittawa?</h5>
        <p>Hämeenlinnalaisilla on tämä tärkeä waali suoritettawana ensi keskiwiikkona, kesäkuun 4 pnä klo 5-8 i.</p>
        <p>Täkäläiset asianajajat owat rientäneet walitsijoille suosittelemaan ja „liikewäeksi” itseään kutsuwat moniaat yksilöt niinikään owat toistaneet saman ehdokasnimen. He owat wain tarpeettomasti lähteneet „merta edemmäksi kalaan”, 
          waikka hakijain joukossa on sopiwa oman kaupungin poikakin. Tarkoittamamme wiran hakija on Kärkölän ja Kosken piirin nimismies, howioikeuden auskultantti Hannes Heinonen. Hän on jo aikaisemmin wiran sijaisena sanottua tointa 
          hoitanutkin seitsemän kuukauden ajan ja tällöin jo, siihen aikaan juuri tuomariksi walmistuttuaan, hoiti sitä niin asianajajain kuin muidenkin asiakasten yksimielisen arwostelun mukaan hywin. Miksi nyt mennä sitten hapuilemaan 
          oikeusneuwosmiestä walitsijain suurelle enemmistölle tuntemattomista, wieraista hakijoista, kun wirkaan woimme walita tunnetun miehen. Ja mitä tunnemme miehestä? Tunnemme ensinnäkin, että tuomari Heinonen on tietojensa ja 
          taitonsa perusteella täysin pätewä sanottuun wirkaan walittamaksi. Hän on jo kuten edellä olemme wiitanneet, hoitanut sitä aijemmin hywin ja tästä on hänen hakupaperiensa joukossa kaupungin pormestarin wirallinenkin 
          suosittelewa lausunto. Tiedämme edelleen, että hän nykyistä nimismieswirkaansa on hoitanut mallikelpoisesti ja siitä tunnustuksena woinut liittää hakupapereihinsa läänin maaherran suosituksen. Tiedämme tämän lisäksi, että herra 
          Heinonen on ehdottomasti raitis mies, joka ominaisuus on kieltolakimaan tuomioistuimen jäsenelle ehdottoman wälttämätön kansalaishywe. Kun lisäksi otamme huomioon, että tuomari Heinonen on Hämeenlinnan lapsi, täällä käynyt 
          koulunsa ja ponnistelullaan kohonnut kansan riweistä, rehdistä ja raittiista suomalaisesta kodista, niin emme woi tulla muuhun johtopäätökseen kuin että hämeenlinnalaisten asiana on nyt suljetuin riwein mentäwä waaliin ja 
          walittawa oikeusneuwosmieheksi Hannes Heinonen, jonka ehdokkaakseen on asettanut</p>
        <p className="signature">Hämeenlinnan järjestynyt raittiuswäki ja walitsijoita eri yhteiskuntapiireistä.</p>
      </Article>

      <DateDivider date="Tiistai, 3.6.1924"/>
      <Article titleText="Wieläkin Hämeenlinnan oikeusneuwosmiehen waalista.">
        <p>Hämeen Sanomain wiime sunnuntain numerossa on yleisönosastossa julkaistu kirjoitus, jonka allekirjottajina esiintywät „Hämeenlinnan järjestynyt raittiuswäki ja walitsijoita eri yhteiskuntapiireistä” ja jossa kaunopuheisesti 
          käydään puolustamaan wirkaa hakeneen how, ausk. Hannes Heinosen sopiwaisuutta mainittuun wirkaan. Emme mitenkään halua halwentaa mainitun arw. wiranhakijan awuja ja edellytyksiä mainitun wiran hoitamiseen, mutta sensijaan 
          kiinnittäwät huomiotamme erinäiset perustelut, joita mainitun nimimerkin takana olewat henkilöt ehdokkaansa hywäksi owat esittäneet. Pääperuste on, ettei ole „lähdettäwä merta edemmäksi kalaan”, koska hra Heinonen on 
          „Hämeenlinnan lapsi” ja „oman kaupungin poikakin” ja „täällä käynyt koulunsa”. Täysi tunnustus nurkkapatriotismillekin määrätyissä olosuhteissa, mutta kun kysymyksessä etualalla nyt owat kuitenkin lainopillinen pätewyys ja 
          wiran kunnollinen hoito, tuntuu moisen perusteen esittäminen köyhyydentodistukselta ja liewimmin sanoen paremman puutteessa haetulta. Ei siis se sattuma, että hakija on Hämeenlinnassa syntynyt, saata suoda hänelle mitään 
          etuoikeutettua pätewyyttä mainitun wiran kunnolliseen hoitamiseen. Toinen mielenkiintoinen kohta perusteluissa on maininta hra Heinosen ehdottomasta raittiudesta, joka „ominaisuus on kieltolakimaan tuomioistuimen jäsenelle 
          ehdottoman wälttämätön kansalaishywe”. Myönnämme, kansalaishywe. Mutta samalla on muistettawa, että maamme ei ainoastaan ole kieltolakiwaltio, waan ennenkaikkea oikeuswaltio, jossa kaikki lait owat samanarwoisia ja waatiwat 
          kansalaisilta saman kunnioituksen ja tuomarilta saman pätewyyden niitä tulkitessaan. Woisimme jatkaa esittämämme kaumomaalauksen selostusta, mutta toiwottawasti jo esittämämme kohdat saawat järkewän lukijan tajuamaan sen 
          läpikuultawaisuuden.</p>
        <p>Puolestamme tahdomme edelleenkin ehdokkaanamme esittää miehen, waratuomari Kalle Teikarin, jolla, waikkaakaan ei syntymäpaikkaoikeutta, on kaikki muut — myöskin raittiusnäkökannalta — edellytykset hoitaa kysymyksessä olewa 
          wastuunalainen toimi kaupunkikuntamme yleiseksi tyydytykseksi. Hänen lainopillinen pätewyytensä on kiistämätön ja ylittää ehdottomasti lähimmän kanssakilpailijansa. Hänen kansalaiskuntonsa on taattu. Hänellä on kiistämättä 
          kaikki ne ominaisuudet, joita waaditaan kaupunkimme oikeusmieheltä. Kehoitamme siis kaupunkilaisia suljetuin riwein käymään ensi keskiwiikkona waaliin ja laskemaan waaliuurnaan lipun, jossa on wiran hakijoista pätewimmän, 
          waratuomari Kalle Teikarin nimi.</p>
        <p className="signature">Kaupunkilaisia.</p>
      </Article>
      <Article titleText="Oikeusneuwosmiehen waali.">
        <p>„Hämeenlinnan Liikewäen” äskettäin julkaiseman kehoituksen johdosta ilmoitamme, että emme katso olewan aihetta hakemaan itsellemme ehdokasta muualta silloin kun kyseessä olewaan wirkaan pyrkiwien joukossa on omalla 
          paikkakunnallamme kaswanut ja wirkaan täysin kykenewä henkilö, joka sen lisäksi nyt täytettäwänä olewaa tointa pari wuotta takaperin usean kuukauden aikana oli wiransijaisena hoitamassa ja silloin saawutti kaikkien 
          asianomaisten täyden tunnustuksen nopealla ja huolellisella tehtäwiensä suorituksella. Wiranhakija, jota tässä tarkoitamme, on howioikeuden auskultantti Johannes Aukusti Heinonen. Kun hän senkin jälkeen hoitamissaan 
          wirkatehtäwissä on osoittautunut tarmokkaaksi ja huolelliseksi, olemme „Liikewäen” kehoitusta huomioonottamatta päättäneet t.k. 4 pnä suoritettawassa oikeusneuwosmiehen waalissa äänestää J. A. Heinosta ja täten kehoittaa 
          kaikkia toisiakin äänioikeutettuja antamaan hänelle äänensä.</p>
        <p className="centered">Kunnioittaen</p>
        <p className="signature">Ryhmä hämeenlinnalaisia kauppiaita y.m. liikkeenharjoittajia.</p>
      </Article>
      <Article titleText="Raatimieskinastelua.">
        <p>„Hämeenlinnan järjestynyt raittiuswäki” on Hämeen Sanomain sunnuntainumerossa ilmaissut oikeusneuwosmiesehdokkaansa. Tätä ryhmäkuntaa, joka kaupungissamme haluaa nykyään esiintyä jonkinlaisena waltiollisena ja 
          kunnallispoliittisena „mahtina”, näyttää kuitenkin waiwaawan nurkkapolitikoimisen tympäisemä omahywäisyys ja klikkietujen palwonta. Yhteisiä asioita katsellaan yksipuolisen aateharrastelun ja henkilöintressien rajoittamasta 
          näköluukusta. Ryhmäkunnan tämänkertainen waalitouhu ei tässä suhteessa pohjaudu entistä perustaansa laajemmalle. Sama pyrkimysten ponnauslauta! Waalikehoituksessa näemme ehdokkaan ansiot: oman paikkakunnan poika, raittiusmies, 
          kykenewä, kansan sywistä riweistä ponnistuksillaan kohonnut, suositteluja j.n.e. Tätä kaikkea ei ole ensinkään tarkoitus kieltää. Ehdokas saattaa olla mies paikallaan ja mikäpä kaupunki ei olisi onnellinen saadessaan kaikissa 
          suhteissa ensiluokkaisia wirkamiehiä. Mutta se punktum, asian a ja o, joka tässä panee epäilyttämään, on tuo ryhmäkuntaisuus. Syrjäintresseistä se on ilman wakawampaa harkintaa nostanut hemmottelewile käsiwarsilleen tarjotun 
          lempiehdokkaan, joka nyt triumfisaatossa pitäisi yhteisesti kannettaman raatipöydän taakse. Wai muutako on ollut näkökulmassa?</p>
        <p>Yleinen ehdokas, jonka pätewyydellekin antaa arwoa kaupungin asianajajain arwostelu, waratuomari K. Teikari, on ulkopuolella ryhmä- ja henkilöintressien. Allekirjoittaneet kuitenkin niin ristiriitaista kuin se onkin ylläolewan 
          kanssa — haluawat häntä suositella persoonallisestikin, sillä tuntewat hänet luonnolliseksi ja tasaiseksi mieheksi.</p>
        <p className="signature">Muutamia.</p>
      </Article>

      <DateDivider date="Keskiviikko, 4.6.1924"/>
      <Article titleText="Hämeenlinnan oikeusneuwosmiehen waali.">
        <h5>Wiimeinen huomautus.</h5>
        <p>Tänään suoritetaan Hämeenlinnassa oikeusneuwosmiehen waali.</p>
        <p>Kaupunkikuntamme yhteinen etu waatii, että tähän wastuunalaiseen toimeen on saatawa mies, jolla on pätewimmät ansiot ja edellytykset tehtäwänsä kunnolliseen suorittamiseen. Tämä mies on waratuomari Kalle Teikari. Hän on 
          kaupunkimme lakimiesten - tässä suhteessa siis parhaiden asiantuntijoiden - yksimielinen ehdokas. Hänet owat ehdokkaaksensa harkintansa perusteella asettaneet kaupunkikunnan liike-elämän edustajat. Hänen ehdokkuuttaan 
          kannattawat suuret joukot kaupunkilaisia. Ainoassa waalin johdosta pidetyssä kokouksessa, kuten eilisestä Hämeen Sanomista ilmenee, on waratuomari Teikarin ansiot ja kokemus wastuumaalaisessa tuomarintoimessa tunnustettu 
          lähintä kanssahakijaansa suuremmiksi samalla kuin jälkimmäisenkin sopiwuus wiran hoitamiseen kyllä myönnetään. Raittiusnäkökannalta ehdokkaita arwostellen owat kummatkin ehdokkaat tasawertaiset.</p>
        <p>Harkitsewa, siwu- ja ryhmäwaikutteista wapaa kaupunkilainen tekee siis helposti walintansa.</p>
        <p>Oikeusneuwosmieheksi on walittawa waratuomari Kalle Teikari, hakijoista kaupunkikuntamme yhteistä etua silmälläpitäen pätewin!</p>
        <p className="signature">Kaupunkilaisia.</p>
      </Article>
      <Article titleText="Wieläkin oikeusneuwosmiehen waalista.">
        <h5>„Raatimieskinastelua”</h5>
        <p>Eilisessä Hämeen Sanomain n:ssa on nimimerkki „Muutamia” meidän mielestämme hywin arwottomalla tawalla tahtonut osoittaa, että järjestyneellä raittiuswäellä ei olisi oikeutta, ottaa osaa enempää kunnalliseen kuin 
          waltiolliseenkaan toimintaan, ja olisi sen niin ollen tullut pysyä kokonaan syrjässä oikeusraatimiehen waalistakin.</p>
        <p>Kirjoituksessaan „Muutamia” käyttää runsaasti eri laatusanoja, joilla hän tahtoo osoittaa, että raittiuswäen toiminta johtuu ainoastaan huonoista waikutteista. Me ihmettelemme, että sellaisia harhakäsityksiä woi tosiaan syntyä, 
          waikka „Muutamillekin” pitäisi olla selwiö, että raittiuswäen koko toiminta nimen omaan tähtää päämäärään, josta sille itselleen ei ole pienintäkään hyötyä. Raittiuswäen toiminnasta edut lankeawat koko yhteiskunnalle ja 
          suurimmaksi osaksi juuri raittiustyön wastustajille.</p>
        <p>Samaa johtotähteä on Hämeenlinnan järjestynyt raittiuswäki seurannut nytkin esillä olewassa asiassa. Niinhywin „Muutamia,” „Kaupunkilaisia” kuin asianajajatkin owat ehdotusta esillä olewiin waaleihin hakiessaan siwuuttaneet 
          hakijoiden wirka-ansiot ottamalla huomioonsa ainoastaan henkilöllisen tuntemuksen ja osuneetkin ehkä omasta mielestään oikeaan henkilöön, waikka hän onkin suuremmalle osalle walitsijoita kokonaan tuntematon. Raittiuswäen 
          asettama ehdokas on sen sijaan kaupungissamme yleisesti tunnettu ja tiedetään awoinna olewaan wirkaan myöskin täysin kelpoiseksi. Kun hän, paitsi niitä ominaisuuksia, mitä oikeuswaltio on welwollinen wirkamiehelleen asettamaan, 
          omaa myöskin raittiuswakaumuksen ja on tehnyt ehdottoman raittiuslupauksen, ei kukaan woine wäittää, että raittiuswäki on asettanut ehdokkaakseen sopimattoman hakijan kun se on siksi walinnut Johan Aukusti Heinosen.</p>
        <p>Yhteiskunnan yleisetu silmämääränä äänestäkäämme siis tänään oikeusneuwosmieheksi hänet.</p>
        <p className="signature">Raittiuswäkeä.</p>
      </Article>
      <Article titleText="Arwotonta menettelyä.">
        <p>Tänään toimitettawa raatimiehen waali on jälleen nostanut pikkukaupunkimme eräiden piirien intohimot liikkeelle, kuten parikin tämän päiwän lehdessä ollutta kirjoitusta osoittaa. Ei tyydytä siihen, että kehuttaisiin sitä 
          miestä, jota parhaana ja sopiwampana pidetään, waan tahdotaan toinen ehdokas, jota joku muu ryhmäkunta pitää toimeen sopiwana, maalata sangen mustilla wäreillä, wieläpä hänen kannattajansakin saattaa jossakin suhteessa 
          epäilyksen alaiseksi.</p>
        <p>Tämä on arwotonta menettelyä, „lapsentautia”, jommoisesta meidänkin hywässä kylässämme olisi aika jo päästä. Joudumme liukkaalle pinnalle ellemme kykene asioita arwostelemaan muulta näkökannalta kuin wainoamalla asioissa 
          joitakin itsekkäitä tarkoituksia. On aiwan asian luonnosta johtuwaa, että ehdokkaat tutkitaan ja seulotaan pienemmissä ryhmäkunnissa kuten esim. nyt juuri on tapahtunut. Jos tämä seulonta johtaa tulokseen, joka asettaa 
          etualalle ne henkilöt, joita paikkakunnalla tunnetaan, ei siinäkään ymmärtääksemme ole moitittawaa, kunhan waan ehdokkaat täyttäwät waatimukset. Täytyyhän myöntää, että ne ehdokkaat, jotka julkisuudessa owat mainitut, tuomarit 
          Teikari ja Heinonen, eiwät suinkaan hakijoista ole ansioituneemmat, mutta kun ottaa huomioon sen olotilan mikä kaupungissamme jo wuosikymmeniä on wallinnut, ei ole ihmeteltäwää jos kaupunkilaiset tällä kertaa tahtowat antaa 
          suuren painon hakijoiden persoonallisille ominaisuuksille, koskapa hakijoiden wirka-ansiot eiwät tunnu kowinkaan suuresti toisistaan eroawan.</p>
        <p>Mikäli tunnetaan, omaawat molemmat mainitut ehdokkaat ei ainoastaan wirkaan waadittawan pätewyyden, waan myös ne persoonalliset awut mitä tällaisen wiran hoitajalta on waadittawa. Hämeenlinnan asujamet woiwat siis olla 
          tyytywäisiä tulkoonpa heistä kumpi tahansa walituksi sillä ennen kaikkia kaipaamme reipasta, toimeksisaawaa wirkamiestä, joka tahtoo ja kykenee suorimaan asiat wiiwytyksittä ja hankaluuksitta. Olkoonpa walittu sitten tuon 
          tahi tämän ryhmän „lempilapsi”, se olkoon ja jääköön siwuasiaksi, pääasia on, että saamme kunnollisen wirkamiehen.</p>
        <p>Olemme tarttuneet kynään torjuaksemme sen matalamielisen katsantokannan mikä warsinkin eräässä t.p. kirjoituksessa on ilmennyt. Sellaisilla kirjoituksilla ei ymmärtääksemme asiaa edistetä, päinwastoin luulemme kirjoittajan 
          tehneen sillä karhunpalweluksen omalle asialleenkin, mutta yleisestikin katsoen tuollainen aiheeton syyttely ja epämääräiset wiittaukset on wastenmielisiä, repiwät enempi kuin rakentawat, eiwätkä siis ansaitsisi tulla 
          painomusteen kautta monistetuiksi.</p>
        <p className="signature">Kuntalaisia.</p>
      </Article>
      <Article titleText="Muutama sana nimimerkille „Kaupunkilaisia” ja „Muutamia”.">
        <p>Eilisessä lehdessä hyökkääwät ylläolewat nimimerkit niitä walitsijoita wastaan, jotka owat asettaneet ehdokkaakseen toisen kuin heidän ehdottamansa. Kaikki kunnia nimimerkki „Kaupunkilaisten” kirjoitukselle siitä, että se 
          on säwyltään siwistyneen ihmisen kirjoittama, jota ei walitettawasti woi sanoa „Muutamien” kirjoituksesta. „Kaupunkilaisten” kirjoituksen johdosta tahtoisin ensiksi huomauttaa, että on wäärin käyttää waratuom. Teikarista 
          nimitystä „wiranhakijoista pätewin”, sillä jos silmäilemme eilisessä lehdessä olewaa wiranhakijoiden ansioluetteloa, niin täytyy todeta, että hakijoiden joukossa on muitakin henkilöitä, jotka sekä iän, oppiarwon että 
          kokemuksensa perusteella owat asianajajien ehdokkaan edellä.</p>
        <p>Tuntuu muuten merkilliseltä, että heti edellisen wiranhaltijan kuoltua, ja ennenkuin muista ehdokkaista mitään tiedettiin, mainittiin wiranehdokkaana sama joka nyt on asianajajien ehdokkaana. Kun, kuten yllä jo huomautettiin, 
          ehdokkaiden joukossa on ansioiltaan ja oppiarwoltaan pätewämpiä, kuin waratuom. Teikari, niin on kyseenalaista, miten puhtaalla waa'alla waratuom. Teikarin ansiot on punnittu, ja onko hänen ehdokkuutensa riippunut „ryhmä- ja 
          henkilöintresseistä”? Suurelle osalle kaupunkilaisia, joille hänen ehdokkuuttaan tyrkytetään, on hän werrattain tuntematon.</p>
        <p>Se, että „kaikki lait owat samanarwoisia ja waatiwat kansalaisilta saman kunnioituksen ja tuomarilta saman pätewyyden niitä tulkitessaan” sitä wastaan ei kellään liene mitään muistuttamista. Mutta sillä ei kai tahdottane 
          wäittää, että jos tuomari on yksityisessä elämässään ehdoton raitis, olisi hän raittiutensa takia, epäpätewä tulkitsemaan kaikkia lakeja".</p>
        <p>Raittiuswäkeä ei tyydytä se, että wakuutetaan jonkun ehdokkaan olewan „myöskin raittiusnäkökannalta tyydyttäwän”, waan se: onko hän kokonaan, niin yksityisessä elämässään kuin tuomarinakin ehdoton maan lakien kunnioittaja ja 
          puoltaja.</p>
        <p>Nimimerkki „Muutamien” kirjoitus on siksi arwoton, ja suotakoon anteeksi jos käytän sanaa: „nulikkamainen” sisunpurkaus sitä ryhmää wastaan jota he todennäköisesti wihaawat, mutta joka tässä kaupungissa on tehnyt kaupungin 
          ja warsinkin sen sywien riwien hywäksi epäitsekästä ja monesti hywinkin epäkiitollista työtä, että moiseen kirjoitukseen ei kannata edes wastata. Täytyy wain merkille panna, että kyllä se on laiha ja lapsellinen suositus 
          lakimiehelle, kun „Muutamilla” ei ole waratuom. Teikarille antaa muuta omakohtaista suositusta, kuin että hän on „luonnollinen (?) ja tasainen mies”! Eiköhän asianomaista itseäänkin hymyilytä tuollainen „armolause”?</p>
        <p className="signature">Walitsija.</p>
      </Article>

      <DateDivider date="Sunnuntai, 29.6.1924"/>
      <Article titleText="Löytyykö">
        <p>Hämeenlinnassa, läänin pääkaupungissa sellaista miestä, joka woisi lopettaa tuon kaupunkiin tulewien laiwojen merkinantopuhalluksen eli useimmiten palotorwen ääntä muistuttawan mylwinän? Ketä warten sellainen merkki 
          annetaan? Olen useilta sitä tiedustellut, mutta kukaan ei tiedä. Tuossa sahan kohdalla, oli mikä wuorokauden aika tahansa, huutaa waan jok'ikinen laiwa — oli se sitten joko matkustaja — tai ohikulkewa hinaajalaiwa — 
          toisinaan puolen minuutin ajan kuin merihädässä olewa. Satamamestaria ei sen tarwitse huutaa, sillä hän näkee laiwan tulon konttoristaan ja ajureitakaan ei tarwitse huhuilla, sillä ne owat jo laiturin wieressä odottamassa 
          ja toisia saadaan puhelimella tilaten.</p>
        <p>Joku wuosi sitten poistettiin lähtöpuhallukset. Poistakaa nyt nämä tulomerkitkin ja ottakaaa huomioon nekin kauhut, mitä monet esim. sairashuoneessa wiruwat saawat sen johdosta kärsiä.</p>
        <p className="signature">Kiusaantunut.</p>
      </Article>

      <DateDivider date="Keskiviikko, 2.7.1924"/>
      <Article titleText="Wastinetta nimim. „Kiusaantunut.”">
        <p>Wastineeksi nimimerkille „Kiusaantunut” saan täten esiintuoda seuraawaa: Ollessanne tietämätön siitä, mitä laiwojen puhallukset merkitsewät en katsoisi kannattawan tuoda esiin sanomalehden palstoilla mainittua asiaa. Olisi 
          silti kyllä hywä, että nimim. „Kiusaantunut” saisi edes jonkinlaista lohdutusta waikeassa asemassaan. On tunnettu tosiasia, että laiwoilla ja niiden wihellyksillä on omat sääntönsä, jotka owat kansainwälisiä, eikä niitä käy 
          yksilön siis muuttaminen. Jos joku tahtoo saada niihin muutosta aikaan niin on hänen parasta kääntyä täällä Hämeenlinnassa paikallisen satamamestarin puoleen pyynnöllä, että hän esittäisi sen kaupungin maistraatille, jota 
          taasen woi joko hywäksyä tai hyljätä nimim. „Kiusaantuneen” pyynnön. Jos tämä ei auta, niin woi wielä wedota asiassa merenkulkuhallitukseen, joka kenties woi olla asiassa myöntywäisempi. Luultawaa kuitenkin on, että 
          merenkulkuhallituskin on asiassa kielteisellä kannalla mitä tulee signaalipuhallusten lopettamiseen.</p>
	      <p className="signature">Yksi monien puolesta.</p>
      </Article>

      <DateDivider date="Perjantai, 4.7.1924"/>
      <Article titleText="Satamaamme">
        <p>saapuwien laiwojen signaalien lopettamistoiwomukseni johdosta on „Yksi monien puolesta” noussut kiiwaasti takajaloilleen eilispäiwän lehdessä. Luettuani hänen ylwään selityksensä johtui mieleeni erään pikkukaupungin 
          keltanokka kaupungin-insinööri, joka myös aina kimpaantui, jos wain kaupungin lehdessä hänen töitään ja edesottamisiaan arwosteltiin. Hän kirjoitti selityksen asiasta tawallisesti siihen suuntaan, että olkaa ääneti, 
          minä olen diploomi-insinööri!</p>
        <p>Mutta koska kirjoittaja näkyy olewan yksi niiden monien joukosta, jotka kaupunkiin tullessaan laiwansa mylwimisapparaattia hoitawat, niin olkoon kerta kaikkiaan sanottu, ettei hän ole lainkaan ymmärtänyt minun kainoa 
          ehdotustani, waan opettaa että „laiwoilla ja niiden wihellyksillä on omat sääntönsä, jotka owat kansainwälisiä, eikä niitä käy yksilön siis muuttaminen”, mutta että kyllä kaupungin maistraatti woi ne muuttaa, jos minä 
          kehoittaisin esimerkiksi paikallista satamamestaria ottamaan alotteen asiasta. Olenpa saanut wähän huononpuoleisen käsityksen kaupunkimme „satamamestareista”. Kun nimittäin ensimmäiseltä satamamestariltamme tätä asiaa aikoinaan 
          tiedustin, niin hän ei osannut antaa siihen mitään selwitystä. Hänen seuraajansa taas oli useimmin niin täynnä „kansainwälistä”, ettei hänkään ollut asiasta tolkulla, ja mitä nykyiseen tulee, niin luulen, ettei muuta kuin 
          - lakki. Niin että ellei nyt tässä kaupungissa todellakaan löydy sellaista miestä, joka kykenisi sen asian järjestämään, niin mylwilkää päälle waan, täytyyhän sitä täällä Hämeenkin wesillä olla jotain „kansainwälistä”. 
          Mutta olen wakuutettu, että jos sattuisitte sairaana makaamaan parhaan kesäkauden tuossa wastapäätä satamaa olewassa walkoisessa tallossa - sillä niiden puolesta olen kirjoittanut - joka hermo wawisten kuulemaan noita 
          kamalia ääniä, niin luulen, että kiiwaasti waatisitte sellaiset turhanpäiwäiset signaalit poistettawiksi. Se on nytkin täynnä sellaisia, minä olen parantunut, enkä ole enään</p>
	      <p className="signature">Kiusaantunut.</p>
      </Article>

      <DateDivider date="Sunnuntai, 6.7.1924"/>
      <Article titleText="Hoitaako kukaan maanteitä">
        <h5>Rastilan kylä - Turengin silta?</h5>
        <p>Tämä tieosuus on sangen surullisessa kunnossa. Tie on Helsingin-Hämeenlinnan waltamaantie, jossa matkailijoita kulkee paljon, mutta ken sitä on kerran kulkenut, luulisi kulkeneensa jotakin pahaista karjatietä, niin kurjassa 
          kunnossa se on, kuoppainen ja loukkuinen, ajosillat sywällä maan sisällä ja rikkinäiset niin, että keskelle siltaa pystytetyillä seipäillä on osotettawa matkustajille mikä kohta on hengenwaarallinen. Kaiken kaikkiaan sangen 
          surullinen kuwa meistä hämäläisistä.</p>
        <p>Löytyykö ketään henkilöä, wirastoa tahi wirkamiestä, jolla olisi mitään woimaa asian korjaamiseksi? Jos on, niin täyttäkää toki welwollisuutenne. Säälikää edes matkustajia.</p>
	      <p className="signature">Matkustaja.</p>
      </Article>

      <DateDivider date="Lauantai, 9.8.1924"/>
      <Article titleText="Nuorisoseura Hämeenlinnaan.">
        <p>Katsellessani ja seuratessani nuorison pyrintöjä täällä Hämeenlinnassa parin wuoden ajan olen ollut huomaawinani, että nuoriso täällä elää täydellisessä hengettömyydessä. Toimihan täällä kyllä aikoinaan „Nuorten Kerho”, 
          mutta eipä sekään jaksanut kauwaa hengissä pysyä, niin että kaipa siitäkin sitten puuttui „henkeä”. Tämän nuorten kerhon lopettajaistilaisuudessa muistaakseni lausuttiin nuorisoseuran syntysanat ja walittiin tietysti 
          tarpeellinen toimikunta seuran perustamisesta huolehtimaan, mutta perustamattapa se jäi ja on wieläkin. Wiime aikoina kuitenkin on, ilahuttawaa kyllä, alkanut näyttää siltä kuin täällä Hämeenlinnassakin nuorison 
          keskuudessa alettaisiin kaiwata seuran perustamista, jonka ainoana ohjelma numerona ei olisi waan tanssi, waan että tämän seuran kokouksissa ja illanwietoissa myös muulla henkisellä ohjelmapuolella olisi täysi arwonsa. 
          Mutta yksi „mutta” on wielä esteenä, nimittäin se, että seuran alkuunpanijana pitäisi olla joku wanhempi, nuorison pyrkimyksiä ja elämää ymmärtäwä mieshenkilö, joka jos mahdollista olisi jo nuoruudessaan ollut 
          nuorisoseuroissa toimihenkilönä. Siis Te, Hämeenlinnan nuorisoseuramiehet, ryhtykää toimeen seuran perustamiseksi.</p>
        <p className="signature">Muuan asiaan innostunut.</p>
      </Article>

      <DateDivider date="Lauantai, 16.8.1924"/>
      <Article titleText="Työläisäitien kesäsiirtolasta.">
        <p>Heinäkuun 22 pnä lähti Kangasala-laiwalla joukko kaupungin äitejä lapsineen lepäämään kesäsiirtolaan Tyrwännön Mälkiäisiin. Itsessään tuo laiwamatka jo wirkisti wäsynyttä mieltä, kun ilma oli kaunis, ja kaunista oli 
          wesistökin lukemattomine saarineen ja niemineen. Saipa nähdä matkan warrella komeita taloja ja wiljawia peltoja. Selwästi tuntui nyt, kuinka paikallaan on sanat: „On Hämeen pellot wiljawat”. Perille päästyämme oli 
          herttainen emännöitsijämme walmistanut meille hywät kahwit, jota saimme nauttia runsaalla mitalla. Kohta saimme ilta-ateriankin, ja niin woimme leiriytyä nukkumaan suuriin huoneisiin. Hywä oli järjestys siirtolassa, niin 
          ruuan kuin lewon suhteenkin. Koetimme parhaamme mukaan wirkistää itseämme ja tulokset owat olleetkin hywät. Ruokahalu oli jokaisella hywä, ja saimme sen warmasti tyydytetyksi maukkaalla ja runsaalla ruualla.</p>
        <p>Erityisesti muistuu mieleen Kellaanniemi Wanajaweden rannalla. Siellä ne uinnit ja auringonkylwyt otettiin. Kaiket päiwät siellä „Eewantyttäret” lapsineen itseänsä paistatteliwat, ja neekerien ihonwäriä ihailiwat sekä 
          itseänsä samanmuotoisiksi toiwoiwat, niin kuin nyt olemmekin. Lähtiessämme loimme wiimeisen kaihomielisen katseen Kellaan saunaan. Siellä lauantaisin maistelimme maalaissaunan hywästä löylystä parikin kertaa peräkkäin. 
          Hauskaa riitti hywin koko ajaksi. Meillä oli mukana hywäntuulinen Mimmi, ja hän kyllä osasi aina sanan parhaaseen aikaan ja niin yhteinen ilo taasen alkoi. Nyt olemme jälleen kotiutuneet ja muistelemme tuota ihanaa 
          wirkistysaikaa. Ehkä herätämme wähän huomiota neekerimäisyydellämme ja lihawuudellamme, mutta nämät pian päältämme kariseawat, ja niin olemme jälleen muiden ihmisten kaltaiset.</p>
        <p>Sydämellinen kiitos uhrautuwalle emännöitsijälle kaikesta hywyydestä, jota saimme osaksemme siirtolassa ollessamme. Suurimmat kiitokset kaupungin waltuustolle, siirtolatoimikunnalle ja kaikille, jotka owat 
          myötäwaikuttaneet tämän hywän tarkoituksen eteenpäin wiemiseksi. Hartain toiwomus on, että tämä siirtola edelleenkin woisi ottaa suojiinsa monia rasittuneita äitejä lapsineen wirkistymään pieneksi ajaksi.</p>
        <p className="centered">Kiitollisin mielin.</p>
        <p className="signature">Wirkistyneet äidit.</p>
      </Article>

      <DateDivider date="Tiistai, 9.9.1924"/>
      <Article titleText="Katujen kunnossapito.">
        <p>Wähän selwitystä lauantaina syysk. 6 pnä arw. lehdessänne olleeseen kirjoitukseen, mikä muun muassa käsitteli kaupungin talonomistajain waatimusta katujen kunnosapitämisestä.</p>
        <p>Kaupunkien talonomistajat, mitäli yleisissä kokouksissa on ilmennyt, owat yleensä sitä mieltä, että kadunpitowelwollisuus olisi siirrettäwä kunnan haltuun eikä waltiolle, kuten sanotussa kirjoituksessa mainitaan. Niin 
          tapahtui talonomistajayhdistyksien wuosikokouksessa tänä kesänä Oulussa ja edellisenä kesänä Lahdessa pidetyssä kokouksessa. Ensin mainitussa kokouksessa tuli yksimieliseksi päätökseksi se, että koska nykyinen katurasitus 
          muuttuneissa liikenneoloissa talonomistajille tietää uusia haittoja ja on tontinomistukseen liian suuressa määrässä kohdistuwana rasituksena, kadunpitowelwollisuus olisi kokonaan siirrettäwä kunnan haltuun.</p>
        <p>Kirjoituksessa mainittu asemakaawalakiehdotus esittää kadunpitowelwollisuuden ratkaisua tawalla, joka tietää kaupunkitalonomistajille mitä suurinta pettymystä. Tässä lakiehdotuksessa edelleen kehitetään woimassa olewaa 
          katurasitusta erikoisesti talon- ja tontinomistajille kuuluwana welwollisuutena ja se ehdotetaan entistään laajempana ja raskaimmassa muodossa talon- ja tontinomistajien hartioilla pysytettäwäksi, siis aiwan päinwastaiseen 
          suuntaan kuin muuttuneissa taloudellisissa ja liikenneoloissa on oikein ja kohtuullista.</p>
        <p>Mikäli katuliikenne on yleistynyt ja etenkin wiime aikoina saanut entisestä suuresti muuttuneen sisällyksen, sikäli kadunpitowelwollisuus on talonomistajain rasituksena suuresti muuttunut, mutta siitä huolimatta tätä 
          laajennettua kadunpitowelwollisuutta yritetään jatkuwasti pysyttää yksistään talon- ja tontinomistajain rasituksena. Edellä mainittu Oulun kokous asettui lainwalmistelukunnan lakiehdotusta tältä osalta wastustamaan 
          yksimielisesti hywäksyen ponnen, että kadunpitowelwollisuus olisi kokonaan siirrettäwä kunnan haltuun.</p>
        <p className="signature">Kokouksessa ollut.</p>
      </Article>

      <DateDivider date="Torstai, 25.9.1924"/>
      <Article titleText="Kanadaan aikowille.">
        <p>Suomesta lähtee nykyisin yhä useampia henkilöitä ja perheitä Kanadaan, mutta useimmillakaan ei ole edes alkeellisimpia tietoja siitä, mitä waaditaan, ennenkuin maihin pääsee. Siksi on, etenkin wiime aikoina, kymmenittäin 
          suomalaisia käännytetty Halifax'ista, y.m. satamakaupungeista, takaisin kotimaahan. Viimeisen kahden wiikon ajalla on kotiin lähetettyjen suomalaisten luku noussut 31:een. Useimmilla on ollut syynä se, etteiwät ole merkinneet 
          ketään wastaanottajaksi täällä Kanadassa, tai se, että heillä on läheisiä sukulaisia Yhdyswalloissa. Ja se juuri onkin pahimpia kohtia. Jos siis jollakin, joka aikoo lähteä Kanadaan, on Yhdyswalloissa mies, waimo, isä, äiti, weli 
          tai sisar, niin on parasta jättää tulo, tai sitten olla mainitsematta sukulaisistaan mitään. Jos awiopuolisoista esim. toinen lähtee matkalle tänne, on parasta sanoa, että toinenkin tulee heti jäljessä, muutoin ei maihin lasketa.</p>
        <p>Suomessa puhutaan, että Kanadaan matkustettaessa ei ole lääkärintarkastuksia, mutta niin ei ole asia. Ruotsin ja Norjan kautta tultaessa on 2 ankaraa tarkastusta, ja Englannin kautta matkustawat saawat kestää kokonaista 7 
          tarkastusta! </p>
        <p>Kun siis Suomesta lähtee, pitää olla terwe, paitsi ulkomaanpassia, tulee hänellä olla maihinnousuraha, 25 dollaria, sekä tarkka ilmoitus siitä, kenen luokse matkustaa, onko työpaikka jo walmiina. Siitä, minkä Suomessa 
          laiwakonttorissa ilmoittaa, ei saa missään tapauksessa poiketa laiwalla, eikä määräpaikassa kyseltäessä. Kun näin on paperit kunnossa, pääsee kyllä maihin warmasti.</p>
        <p>Mielestäni laiwayhtiöiden pitäisi antaa tarkkoja neuwoja matkustawille, ettei ihmisten tarwitsisi tehdä tätä kallista ja pitää matkaa, turhan tähden.</p>     
        <p className="centered">Torontossa, 26. 8. -24.</p>
        <p className="signature">Hugo Kettunen</p>
      </Article>

      <DateDivider date="Perjantai, 26.9.1924"/>
      <Article titleText="Wanha palotorni hautakappeliksi.">
        <p>Useammalta taholta on H:linnan kaupungin Rahatoimikamarille tehty kyselyjä kohta joutilaaksi jääwän wakinaisen palolaitoksen Tähtipuistossa olewan rakennuksen myynnistä ja kuntalaisten taholta on lausuttu toiwomus, että 
          mainittu rakennus olisi, muuttamalla se kaupungin hautausmaalle sopiwin korjauksin järjestettäwä hautauskappeliksi, johon se olisi erittäin sopiwa ja jota tarkoitusta warten paikkakin hautausmaalla on warattu. Ei liene enää 
          montaa, ei ainakaan kaupunkiseurakuntaa, jonka hautausmaalla ei olisi ruumiinsiunausta warten hautauskappelia, sillä sen tarpeellisuuden owat muualla paitsi Hämeenlinnassa huomanneet ne, jotka talwiaikana wilustuneina 
          palaawat hautajaisista tuntimäärin seistyään haudan ääressä pakkasessa.</p>
        <p>Ei myöskään liene liian aikaista, että Hämeenlinnan seurakunta ja sen kirkkoneuwosto ryhtyisiwät toimenpiteisiin asian aloittamiseksi ja toteuttamiseksi, kun kerran näin sopiwa tilaisuus on olemassa. Voihan toiwoa, että 
          kaupunginwaltuusto, joka lopullisesti rakennuksen myynnin ratkaisee, asettuu asiassa myös suopealle kannalle, kunhan wain ne, joille asian alkamispano wirallisesti kuuluu, ryhtywät toimeen.</p>
        <p>On myös huomattawa, että hautakappelia warten on olemassa säätiöwaroja lähes parikymmentä tuhatta markkaa.</p>
        <p className="signature">-r</p>
      </Article>

      <DateDivider date="Tiistai, 7.10.1924"/>
      <Article titleText="Onko">
        <p>huhuissa perää että Hämeenlinnan kaupunki ei olisi niitten 26 kaupunkikunnan joukossa mitkä owat hankkineet Amerikasta edullisen lainan. Jos todella niin olisi, olemme siwuuttaneet ainutlaatuisen tilaisuuden ja on kuntamme 
          korkotappio kyseessäolleelle 5 miljoonan markan lainalle pyörein luwuin ainakin 150,000 markkaa wuodessa.</p>
        <p className="centered">Asiassa selwitystä kaipaa</p>
        <p className="signature">Veronmaksaja.</p>
      </Article>

      <DateDivider date="Keskiviikko, 8.10.1924"/>
      <Article titleText="Eläwien kuwien teatteri kunnalliseksi laitokseksi.">
        <h5>Kaupungin tontti n:o 62 tarkoitukseen sopiwa.</h5>
        <p>Kaksi wuotta takaperin kaupunki osti toisen puolen 15. korttelissa sijaitsewasta tontista n:o 62. Tarkoitus oli tälle tontille rakentaa uusi talo wakinaista palokuntaa warten ja myöntää täytyykin, että tuo tontti olisi 
          siihen tarkoitukseen erittäin hywin sopinut. Mutta palokunnantalon rakennuskysymys sai sittemmin kokonaan toisen käänteen. Kun rakennuskustannukset olisiwat nousseet werrattain kalliiksi eikä talosta olisi ollut mitään 
          suoranaista tuloa kaupungille, ehdotti palomestari, että wakinainen palokunta majoitettaisiin W.P.K:n taloon, minne molemmat palokunnat hywin sopisiwat, jos taloa hiukan laajennettaisiin ja muutettaisiin. Tämän ehdotuksen 
          kaupunginwaltuusto hywäksyikin ja, kuten tunnettua, on W.P.K:n taloa päättyneen kesän kuluessa laajennettu ja järjestelty.</p>
        <p>Palolaitoksen asemaksi ostettu tontti on siis nyt wapaa käytettäwäksi toisiin tarkoituksiin. Myymällä siitä tuskin saadaan sitä hintaa, minkä se kaupungille maksaa. Kaupungin on senwuoksi itsensä koetettawa käyttää se 
          toisiin tarpeisiin ja rakennettawa tontille sellainen laitos, josta kaupungilla on tuloja, mitkä korwaawat tonttiin sekä sille rakennettawiin rakennuksiin käytetyn pääoman.</p>
        <p>Sopiwammin woinee tuskin ajatella tonttia käytettäwäksi kuin rakentamalla sinne eläwien kuwien teatteri. Puheenaolewa tontti sijaitsee kaupungin keskustassa, lähellä liikkeen pääwäyliä. Se on pituudeltaan 44,55 metriä ja 
          leweydeltään 19,60 metriä. Tontti on siis sekä asemansa että muotonsa puolesta teatterirakennuksen paikaksi kuin luotu.</p>
        <p>Wäitettäneen kai, että kaupungissamme on jo entuudestaan kaksi toistensa kanssa kilpailewaa eläwien kuwien teatteria ja että laitos kunnan hoitamana ei kannattaisi. Mutta jos uusi teatteri rakennetaan entisiä ehommaksi ja 
          täysin ajan waatimuksia wastaawaksi, en luule sen kannattawaisuutta tarwittawan epäillä. Tällaiset teatterirakennukset owat werrattain yksinkertaisia eiwätkä ne kysy warsin suuria rakennustustannuksia. Teatterin 
          hoitokustannuksetkaan eiwät nouse warsin kalliiksi. Sitäpaitsi olisi kunnallisen teatterin käyttäminen jokaisen weroamaksawan kuntalaisen etu ja suoranainen welwollisuus ja mielellään jokainen kaupunkilainen kai 
          ohjaisikin askeleensa omaan laitokseen, jonka tulojen tietäisi juoksewan yhteiseen kukkaroon ja kewentäwän nykyisin jo liian raskaaksi paisuwaa werotaakkaa.</p>
        <p>Kunnan omistamasta eläwien kuwien teatterista muodostuisi samalla yhä huomattawampi kulttuuritekijä. Siellä woitaisiin järjestää mahdollisimman usein näytäntöjä kansakoulun ja oppikoulujen oppilaille alhaisesta maksusta, 
          kenties maksuttakin. Kun nämä näytännöt lähemmin liitettäisiin historian, maantiedon, luonnontieteiden y.m. aineiden opetukseen ja kun filmeistä huolehtimaan ja niitä walitsemaan asetettaisiin sopiwista ja pätewistä 
          henkilöistä asetettu toimikunta, tulisi laitos suorittamaan huomattawan osansa paikkakunnan nousewan nuorison kaswatus- ja siwistystyössä. Onhan paikkakunnalla sitäpaitsi silloin tällöin toimeenpantu luentoja aikuisille. 
          Niiden pitämiseen ja kuwilla walaisemiseen olisi teatterin huoneusto sopiwa ja mahdollisesti pantaisiin näin alku wastaiselle työwäen- tai kansalaisopistolle, jonka perustaminen tällekin paikkakunnalle kai piankin astuu 
          päiwäjärjestykseen.</p>
        <p>Toiwoakseni kysymys tulee lähemmän pohdinnan alaiseksi. Ainakin maksanee waiwan laatia kustannusarwio rakennuskustannuksista ja laskelmat teatterin mahdollisesta kannattawaisuudesta.</p>
        <p className="signature">A. E. Koponen.</p>
      </Article>

      <DateDivider date="Perjantai, 10.10.1924"/>
      <Article titleText="Hattulan hautausmaa.">
        <p>Hattulan seurakunnan Hautausmaa on täysi ja komitea on hommannut sille uuden paikan. Waltioneuwostolta on saatu pakkolunastuslupa erääseen alueeseen aiwan Hattulan wanhan kirkon koillispuolella. Tätä paikkaa eiwät kaikki 
          pitäjäläiset pidä onnistuneena, erittäinkin lähikylän asukkaat, jotka eiwät kernaasti halua saada hautausmaata aiwan asuntojensa ja ikkunoittensa eteen pellolle. Sitäpaitsi on paikka muutenkin ahdas, rauhaton ja suojaton; 
          wanha kirkko ei täällä hautausmaata kaipaa eikä wälttämättömältä tunnu olewan sitä tänne kylän keskuuteen ahtaa jos waan halutaan muualta paikkoja etsiä. Kun lisäksi kulkuyhteydet eiwät täältä ole yhtä hywät pitäjän eri 
          puoliin kuin esim. pappiloihin, - paikka siirtyy entiseen hautausmaahan nähden wain pitäjänrajaa kohti, - tuntuu mielestämme pakkotoimenpiteisiin ryhtyminen tällaisessa asiassa harha-askeleelta ja tahdomme mielipiteemme 
          tällä tawoin saattaa julkisuuteen.</p>
        <p className="signature">Paikkakuntalaisia.</p>
      </Article>

      <DateDivider date="Sunnuntai, 12.10.1924"/>
      <Article titleText="Kirjelaatikko Lahdensiwuun!">
        <p>Nopeasti kaswanut Hämeenlinnan „uusi kaupunginosa”, Lahdensiwu, on monessa suhteessa jäänyt lapsipuolen asemaan. Puhumattakaan syksyisistä kurjista teistä ja osittain riittämättömästä katuwalaistuksesta, katuojien ja 
          rumpuputkien puutteesta, on lahdensiwulaisille tuottanut hankaluutta se seikka, että lähin kirjelaatikko on niinkin kaukana kuin Suomen kasarmien portilla sekä reitin warrella, jota Lahdensiwulaaiset harwoin käyttäwät. 
          Sattuupa wielä usein, warsinkin sunnuntaisin, niinkin hullusti, että kirjelaatikko on sotilaitten suuren, luonnollisen kirjeenwaihdon wuoksi niin tupaten täynnä, että kirjettä ei enää mitenkään tahdo saada laatikkoon 
          mahtumaan ja että ylimmällä olewat kirjeet kuka tahansa waiwatta woi laatikosta ottaa. Haluaisin postiwiranomaistemme huomiota kiinnittää tähän seikkaan sekä ehdottaa, että nykyinen Suomen kasarmien portilla olewa 
          kirjelaatikko korwattaisiin suuremmalla laatikolla ja että nykyinen siellä olewa laatikko siirrettäisiin Lahdensiwulaisten tarwetta tyydyttämään, asettamalla se waikkapa n.s. Sokoloffin kulmaan, missä kirjelaatikolla 
          olisi keskeinen paikka. Tämän uuden laatikon tyhjentäminen kahdesti päiwässä ei tuota suurtakaan ajanhukkaa — warsinkaan, jos Lahdensiwuun asetettu postiljooni saisi tuon tyhjentämisen toimekseen. Lahdensiwulaiset 
          odottawat kysymyksen myönteistä ja pikaista järjestämistä.</p>
        <p className="signature"></p>
      </Article>

      <DateDivider date="Keskiviikko, 15.10.1924"/>
      <Article titleText="N.s. Peltokadun täyttö">
        <p>Kuten tunnettua johtaa Myllymäen „torilta” wanhalle hautausmaalle Peltokatu. Tätä katua ei nykyään kuitenkaan pidetä awoinna liikenteelle waan on henkilöiden, joiden on tätä tietä kuljettawa suunnattawa matkansa joko 
          liiankin wilkasliikkeistä Läntistä Wiertotietä myöten tai sitten oikaistawa Alasen kaupunginosan länsipuolella olewien wiljelysmaiden kautta siten turmellen näitä wiljelyksiä. Eikö siis olisi syytä awata liikenteelle siltä 
          nykyään suljettu Peltokatu, jota myöden ihmiset taas mukawammin woisiwat kulkea kuin Läntistä Wiertotietä tai peltoja pitkin.</p>
        <p className="signature">Eräs tientarwitsija</p>
      </Article>

      <DateDivider date="Sunnuntai, 19.10.1924"/>
      <Article titleText="Wanhan paloaseman käyttäminen.">
        <p>Perjantaisen Häm. San. selostuksen mukaan on waltuusto päättänyt Tähtipuistossa sijaitsewan wanhan paloaseman paikaltaan siirrettäwäksi sekä samalla antanut rahatoimikamarille waltuuden myydä rakennus „sopiwaksi katsomallaan 
          tawalla”. Niin mielellämme, kuin olisimmekin nähneet tuon wanhan rakennuksen paikallaan sijaitsewan uutta tarkotusta, ennenkaikkea seurakunnallista, palwellen, ehdotamme, kun rakennus kerta kaikkiaan on määrätty poistettawaksi, 
          että se siirretään hautausmaalle hautakappeliksi. Tämän kappelin tarwe Hämeenlinnan hautausmaalla on wälttämätön eikä asia senwuoksi suurempia perusteluja kaipaa, sillä jokainen hautajaistilaisuuksissa talwisaikana läsnäollut 
          tietää, että hautajaistilaisuudet muodostuwat Hämeenlinnassa suorastaan hengenwaarallisiksi. Kappelin yhteyteen olisi myös rakennettawa ruumiskellari, sillä tässäkin suhteessa wallitsee kaupungissamme huutama puute. 
          Hautakappeliksi siirrettynä ja sopiwalla tawalla muutettuna tulisi wanha palotorni lisäksi olemaan koko kaupunkikunnan yhteiseksi hyödyksi eikä erinäisten yhdistysten. Toiwomme siis, että seurakunnan johtajat ja waltuusto 
          ryhtyisiwät tätä asiaa tarmokkaasti ajamaan, sillä hautakappeli on Hämeenlinnan hautausmaalle wälttämätön ja sen kokonaan uudestaan rakentaminen on kuitenkin lähiwuosien tehtäwä ja werotuksella suoritettawa. Emme myöskään luule 
          rahatoimikamarin olewan tätä toiwomusta wastaan, joka tietääksemme on seurakuntalaisten keskuudessa hywin yleinen.</p>
        <p>Ehdotamme siis, että wanha palotorni siirretään sopiwasti muutettuna hautakappeliksi hautausmaalle.</p>
        <p className="signature">Hämeenlinnan seurakuntalaisia.</p>
      </Article>
      <Article titleText="Arw. Hämeenlinnan kaupunginwaltuustolle.">
        <p>Tuntuu kerrassaan merkilliseltä se hoppu, jolla kaupunkimme wanhan paloaseman kohtalo on ratkaistu. Asiaa ei oltu ennätetty wielä läheskään tarpeeksi kypsyttää, kun waltuusto wiime kokouksessaan päätti, että rakennus on 
          siirrettäwä nykyiseltä paikaltaan ja antoi rahatoimikamarille waltuuden toimittaa myynnin sopiwaksi katsomallaan tawalla. Allekirjoittaneet eiwät woi käsittää, mistä waltuustomme yht'äkkiä sai moisen ripeyden puuskan, 
          ajaessaan päätökseen asian, joka ei ollut ensinkään kiireellistä laatua. Laajoissa kaupunkilaispiireissä on tämä waltuuston päätös herättänyt mielipahaa, jopa katkeruuttakin.</p>
        <p>Warsinkin hengellisillä yhdistyksillä on kaupungissamme ollut huutawa pula kotoushuoneistosta ja nykyisenä pula-aikana on köyhien yhdistysten ollut mahdotonta itselleen sellaista hankkia. Tässä tarkoituksessa kääntyiwät 
          mainitut yhdistykset kaupungin puoleen pyytäen että se luowuttaisi wanhan paloaseman tarkoitukseen käytettäwäksi. Waltuustolle antamassaan lausunnossa walmisteluwaliokunta kuitenkin asettui anomusta wastustamaan, käyttäen 
          hywin löyhiä perusteluja, joista henki wastaan pelkkä hywän tahdon puute. Ja tämän mukaan teki waltuusto sitten päätöksensä.</p>
        <p>Me pyydämme kuitenkin kysyä, eikö asia olisi wielä korjattawissa. Mikä kiire on wanhan paloaseman maahan jaoittamisella? Se woisi kunniallisesti seisoa paikallaan waikka muistomerkkinä, kappaleena wanhaa Hämeenlinnaa. Eikä 
          Tähtipuisto sitäpaitsi kaipaa mitään laajennusta. Toiwomuksemme siis on, että waltuusto wielä muuttaisi päätöksensä ja wuokraisi wanhan paloaseman kaupungin kristillisille yhdistyksille, jotka kipeästi owat kokoushuoneen 
          tarpeessa ja joiden siunausta tuottawa toiminta woisi suuresti wilkastua, jos ne saisiwat mainitun rakennuksen kokoushuoneekseen.</p>
        <p className="signature">Joukko kaupunkilaisia.</p>
      </Article>
      <Article titleText="Kaupunkimme wiranomaiset">
        <p>näkywät jättäneen muutamien katujen ja teiden käyttökelpoisuudesta huolehtimisen. Esim. Eteläinen Niittykatu ei ole muutamilta kohdiltaan lainkaan siedettäwässä kunnossa. Waikea sinne on enään ajurikyytiäkään saada. Tämä katu 
          huonosti walaistuna on suorastaan hengenwaarallinen siellä olewine sudenkuoppineen. On tapahtunut pahoja lankeemistapauksia. Miksei asematiellä käytetä hienorakeista soraa? Tällaista näkyy olewan saatawissa, koska sitä on 
          rantatorillekin tuotu. Asematie on näin jokasella ajalla melkein mahdoton jalkamiehen kulkea, warsinkin autojen siwuuttamaan antaman kuraryöpyn wuoksi.</p>
        <p className="signature"></p>
      </Article>

      <DateDivider date="Tiistai, 21.10.1924"/>
      <Article titleText="Awoin kysymys kaupungin rakennuskonttorille.">
        <p>Lahdensiwulla asuwien kiusallista huomiota on jo pitemmän aikaa herättänyt pyykkilaiturinsa huono kunto tai paremmin sanoen kunnottomuus. Mainitun laiturin kunnossapito kuuluu tietääkseni kaupungille, mutta on laituri ainakin 
          tällä hetkellä useimmille Lahdensiwun asukkaille pääsemätön päämäärä, sillä warsinaiselle laiturille johtawasta sillasta ei paljoakaan kannata puhua siksi huonossa kunnossa se on. Olisi siis suotawaa, että asianomaiset kaupungin 
          rakennuswiranomaiset kiinittäisiwät huomionsa tähän epäkohtaan ja sen mitä pikaisemmin korjaisiwat.</p>
        <p className="signature">Eräs lahdensiwulainen.</p>
      </Article>

      <DateDivider date="Torstai, 23.10.1924"/>
      <Article titleText="Missä syy, missä pelastus?">
        <p>On hywä, että on otettu keskustelunalaiseksi ne surulliset tilastot wankien suuresta lukumäärästä, jotka maatamme rasittawat sekä „Kullerwo-hengestä”, joka kansaamme rienaa. Keskustelin erään wankila-alalla toimiwan henkilön 
          kanssa wankien lukumäärästä, ja sanoi hän syyn niiden paljouteen olewan liian liewissä tuomioissa ja liian hywässä hoidossa. Kun sota puhkesi ja kaikista rikoksista annettiin tuomiot kenttätuomioistuimissa, pysyiwät puukot ja 
          pyssyt huotrissaan sillä kenttätuomioista oli paha kaiku ja henki oli rakas. Kun huomattiin, ettei rikoksista kenttätuomioistuimeen jouduttukaan, lisääntyiwät ne, sillä jonkun wuoden istuminen ei mitään merkinnyt.</p>
        <p>Entä sitten olo, ruoka ja kohtelu wankiloissa? Niin säännöllistä ja hywää oloa kuin wangeillamme, jotka rikkowat maan lakeja, ei ole edes sotapojillamme, joita maan suojan ja turwan wuoksi kaswatetaan. Onhan nurinkurista, 
          että rikoksentekijää hoiwataan ja holhotaan, kuin mitäkin kunnon kansalaista, että kuulee wankien sanowan: ennen minä istun linnassa, kuin pusken talonjussin töitä huonolla ruualla. Ja niin saawat talonjussit kalliilla weroilla 
          ylläpitää yhteiskuntaa ja syödä ehkä huonomman murkinan kuin yhteiskunnan hylkiöt wankiloissa.</p>
        <p>Jos kansamme on raaistumiseen kulkemassa on sitä kowasti kohdeltawa, sillä kuri se on, joka raakalaisen komennossa pitää. Pelko linnaan joutumisesta, sen kowan kurin alainen järjestys, sotapoikiamme huonommalle ruualle 
          joutuminen, raskaan työn alaisuus, warmasti panewat tuumimaan wankilassa olon mukawuuden ja niin kulkeutuu tieto tällaisen „kenttätuomioistuimen” kowuudesta kansaan, jota kurin pelko kaswattaa.</p>
        <p>Siwistyskansat puhuwat kaswatuksesta, raakalaiskansat kurista. Ikäwä kyllä täytynee meidän turwautua tähän jälkimäiseen järjestyksen ylläpitämiseksi kansassamme.</p>
        <p className="signature">-a -a</p>
      </Article>

      <DateDivider date="Perjantai, 31.10.1924"/>
      <Article titleText="Kunnallisen ammattien tarkastajan toimi.">
        <p>Waikka sanomalehdissä, -ainataan toistaiseksi, ei ole näkynyt minkäänlaista uutista terweyshoitolautakunnan asettamista ehdokkaista kunnallisen ammattientarkastajan wirkaan, on kuitenkin tullut tunnetuksi, että sen enemmistö 
          tiistaisessa kokouksessa on hakijoiden waa'assa painawimmiksi hawainnut kaupungin terweyspoliisin, sekä teurastamon wahtimestarin, asettaen edellisen näistä ensimäiselle, jälkimäisen toiselle ehdokassijalle. Koska 
          hakuilmoituksessa hakijalta waadittiin niin yleis- kuin teknillistäkin siwistystä, arwatenkin ettei jouduttaisi samanlaisiin selkkauksiin, mistä wiran awoinna oleminen nykyään johtuu ja koska ensimäiselle ehdokassijalle 
          asetetulla kuuleman mukaan on ainoastaan kansakoulusiwistys, eikä hänellä tietääkseni ole erikoista käytännöllistäkään kokemusta toimessa, herää ehdottomasti kysymys miksi terweyshoitolautakunta on katsonut woiwansa kokonaan 
          syrjäyttää pätewämmät hakijat. Olihan niiden joukossa m.m. yliopistollistakin siwistystä nauttinut henkilö. Jos toimi alunpitäin oli tarkoitettu jo terweyslautakunnan hommissa olewalle, oli turha kuluttaa kaupungin waroja 
          ilmoituksiin.</p>
        <p>Olen itsekin kewyiksi hawaittujen hakijain joukossa, odotan mielenkiinnolla tuleeko kaupungin waltuusto ilman muuta antamaan siunauksensa terweyshoitolautakunnan edesottamiselle, wai tuleeko se ehkä wielä kiinnittämään 
          huomiotaan syrjäytettyjenkin hakijain pätewyyteen.</p>
        <p className="centered">Joka elää, se näkee</p>
        <p className="signature">G. E. Palm</p>
      </Article>

      <DateDivider date="Keskiviikko, 3.12.1924"/>
      <Article titleText="Kuntalaiset!">
        <p>Huomenna on meidän jälleen käytäwä waaliuurnille walitsemaan kuntamme waltuuston 10 jäsentä.</p>
        <p>Kuten jo sanomalehdissä on mainittu on useampia listoja walmistettu. Näistä tahtoisimme kuitenkin suositella wain kokoomuspuolueen listoja, joiden nimiluettelot sisältäwät kokeneitten ja kypsyneiden kunnallismiesten nimiä.</p>
        <p>Ei ole suinkaan yhdentekewää kuka on waltuustossa istumassa silloin kuin tärkeistä asioista päätetään. Muistakaamme wain kuinka käwi alkusyksyllä, kun kaupunkimme jäi ulkopuolelle sen ulkomaisen lainan, johon useimmat kaupungit 
          yhtyiwät ja joka meiltä olisi säästänyt korkomenoja noin 150,000 mk. wuosittain. Jos tässäkin olisi noudatettu kokeneiden waltuusmiesten kantaa, olisi laina otettu ja siten tuntuwa werohuojennus meille jokaiselle saatu. Tässä 
          wain yksi pieni esimerkki, samanlaatuisia woi jatkuwasti tapahtua.</p>
        <p>Tältä kannalta katsoen on jokaiselle weronmaksajalle tärkeätä huolehtia, että waltuustoon tulee taloudellisiin asioihin perehtyneitä miehiä. Sellaisia owat kaikki N:o 1 listassa olewat nimet. Antakaa wiiwanne tähän listaan ja 
          kehoittakaa naapureitannekin samoin tekemään - silloin tiedätte, että äänioikeutenne on tullut käytetyksi parhaimmalla tawalla.</p>
        <p>Wirkamiehet, liikemiehet, y.m., kaikkien Teidän on kohdistettawa wiiwanne allaolewaan listaan.</p>
        <p className="bold">Yhteinen hywä kaiken yläpuolelle!</p>
        <p className="bold">Wiiwanne listaan N:o 1!</p>
        <p className="signature">Kuntalaisia.</p>
      </Article>

      <DateDivider date="Lauantai, 20.12.1924"/>
      <Article titleText="Kaikille hewosten omistajille maassamme.">
        <p>Helsingin Eläinsuojelusyhdistys on huomauttanut, että Suomen Karjakeskuskunta nykyään harjoittaa suurta hewosten wientiä Neuwosto-Wenäjälle; nytkin juuri on 226 hewosta wiety yli rajan. Yhdistys on sentähden katsonut wakawaksi 
          welwollisuudekseen, estääkseen semmoista kuljetusta, sanomalehtien kautta kääntyä kaikkien hewosten omistajain puoleen maassamme anomuksella, että he jokainen puolestaan tekisiwät woitawansa, ettei heidän hewosiaan wietäisi 
          Wenäjälle, jossa sangen epäwarma, jopa julmakin kohtalo niitä odottaa. Kun wuosi sitten Ruotsissa nostettiin kysymys hewosten wiennistä Wenäjälle, kääntyi eräs henkilö, joka liikemiehenä monta wuotta oli oleskellut eri paikoissa 
          Wenäjää, oikeuden ja inhimillisyyden nimessä yleisön puoleen kehoituksella, että kysymyksessä olewa hewosten wienti kiellettäisiin. Hänen lausunnostaan lainaamme seuraawan otteen:</p>
        <p>„Allekirjoittanut, joka monta wuotta on asunut Wenäjällä, on siellä nähnyt mitä julminta, sydämettömintä eläinrääkkäystä, juuri mitä wanhoihin työhewosiin tulee. Ilman että tässä käyn mainitsemaan erityisiä tapauksia tai 
          kidutustapoja, joita Wenäjällä näkee, tahdon waan wedota jokaiseen, mieheen tai naiseen, jotka pitemmän aikaa owat Wenäjällä olleet, ja pyytää heitä todistamaan, että esittämäni hawainnot owat totuudenmukaisia. Olen warma siitä, 
          ettei yksikään heistä woisi muuta kuin myöntää, että hewosten kohtelu Wenäjällä on kauhistuttawa. Enkä usko, että kukaan, joka on nähnyt miten hewosia siellä kohdellaan, woisi myydä hewostaan Wenäjälle. Kuta wanhemmaksi 
          hewosparka tulee, sitä wähemmän arwoinen se on. Se menee kauppatawarana kädestä käteen yhä pienemmästä summasta, ja saa kokea yhtä kowempaa kohtelua. Kun ne sitten lopulta joutuwat semmoisiin käsiin, jotka ajattelewat, että he 
          wielä woiwat wuoden ajan lyömällä ja ruoskimalla pusertaa tuosta juhdasta jotakin woimaa, silloin woi ymmärtää, että ne owat joutuneet ihmisten käsiin, jotka owat hywin alhaisella siwistystasolla. He eiwät ollenkaan pidä hewosta 
          tuntewana ja kärsiwänä olentona, waan ainoastaan kuluwana koneena, jonka kuoliaaksi ruoskiminen ei maksa heille montataan ruplaa. Meidän welwollisuutemme ihmisinä puolustaa eläimiä, kun aiwan hywin woimme aawistaa, että ne 
          joutuwat kauhistuttawan kohtelun alaiseksi, jota myöhemmin emme enää woi auttaa.”</p>
        <p>Olisi kaunis todistus kansamme liikemoraalista, samoin kuin siwistyksestä, joka tähtää pintaa sywemmälle, jos hewosten wienti lakkaisi Neuwosto-Wenäjälle halukkaiden myyjien puutteessa. Älköön kukaan panko laastaria sairaalle 
          omalletunnolleen siten, että hän wälittäjien kautta myy hewosensa - joka sitten joutuu Wenäjälle.</p>
        <p>Eläinsuojelusyhdistys Helsingissä wetoo täten kansamme kunniantuntoon. Älkää luowuttako uskollista palwelijaanne tuntemattomiin kohtaloihin, waikkakin sen kautta kärsitte tilapäistä aineellista wahinkoa.</p>
        <p className="centered">Helsingissä, 30 pnä lokak. 1924.</p>
        <p className="signature">Helsingin Eläinsuojelusyhdistys.</p>
      </Article>
      <br />
      <Image src={divider} className="dividerStyle" />
      <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/titles/0356-2751?year=1924">Linkki vuosikertaan 1924</a>
    </Layout>
  );
};
export const Head = () => <title>Entinen Hämeenlinna - Lukijoilta 1924</title> // metadata

// Export product component
export default Lukijoilta1924Page