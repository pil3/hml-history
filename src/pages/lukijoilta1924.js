import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import "../styles/base/global.css"

import Divider from "../assets/divider.svg"
import SubDivider from "../assets/sub-divider.svg"

const Lukijoilta1924Page = () => {
  return (
    <Layout titleText="Hämeen Sanomat, 1924">
      <h2>Lukijoilta</h2>
      <Divider className="dividerStyle" />
      <h3>Torstai, 3.1.1924</h3>
      <Article titleText="Huomiota herättäwä henkivakuutusjuttu Hämeenlinnassa">
        <p>Ylläolewalla otsakkeella arw. lehtenne palstoilla eilen julkaistussa kirjoituksessa moititaan Suomi-yhtiötä siitä, että se kuolemantapauksessa on kieltäytynyt maksamasta wakuutusta, 
          joka ei koskaan ole ollut woimassa. Saadakseen tilaisuuden näin aiheettomaan moitteeseen silvoo kirjoittaja lukemastaan yhtiön kirjeestä irti osan yleisön nähtäwäksi, mutta salaa toisen 
          osan samaa lausettakin. Kokonaisuudessaan kuului yhtiön perustelu sen ewätessä kysytyn wakuutusssumman maksamisen seuraawasti:</p>
        <p>'Koska wakuutuksenhaltija hakemuksessaan ei sitoudu suorittamaan ensimäistä wakuutusmaksua eikä yhtiöllä ole oikeutta ulosottoteitse sitä periä jos hakija jättää wakuutuksen 
          lunastamatta, ei se, että yhtiö hywäksyy hakemuksen, wielä tiedä, että olisi syntynyt wakuutussopimus hakijan ja yhtiön kesken, eikä hywäksyminen woi yksipuolisesti welwoittaa yhtiötä. 
          Sopimus on päätetty wasta kun wakuutuksenhakija on suorittanut ensimäisen wakuutusmaksun ja wakuuttaja on antanut hänelle wakuutuskirjan. Tämä on nimenomean säddetty wakuutus ehtojen 1 
          §ssä, jossa wakuutuksen woimaanastumisen aika ja edellytys on näillä sanoin määritelty. Kun wakuutuskirjaa puheenalaisessa tapauksessa ei annettu wakuutuksenhaltijalle, ei yhtiölle ole 
          syntynyt mitään maksuwelwollisuutta'.</p>
        <p>Wielä yrittää kirjoittaja moittia yhtiötä siitä, että sen asiamies yhtiön antamien ohjeiden mukaisesti kieltäytyi wastaanottamasta sairastuneen hakijan puolesta tarjottua wakuutusmaksua 
          ja siten saattamesta woimaan sitä wakuutusta, joka sittemmin kuollut hakija puolestaan olisi halunnut saada. Tähänkin menettelyyn on kirjoittajan lukemassa kirjeessä se asianmukainen 
          selitys, että asiamies ohjesääntönsä mukaan ei saa 'wakuutusmaksua wastaanottamalla mennä sitomaan yhtiötä wastuuseen, joka sattuneen sairauden johdosta on muuttunut toiseksi kuin se 
          yhtiön saamien tietojen mukaan oli'.</p>
        <p>Ja waikka kirjoittaja on samasta kirjeestä lukenut, että 'kaikkien muitten maamme henkiwakuutusyhtiöiden kanta tällaisessa tapauksessa on sama' kuin Suomi yhtiön, yrittää tämä 
          kynäniekka lopuksi kiihoittaa yleisöä erikseen Suomi yhtiötä wastaan, jossa hän arwelee 'jokaisen ajattelewan henkilön' woiwan muodostaa käsityksensä hänen typistetyn ja erehdyttäwän 
          kertomuksensa perusteella. </p>
        <p>Kuten näkyy olisi kirjoittajalla ennen kaikkea ollut aihetta tapauksen johdosta teroittaa mieliin, kuinka lukuisat henkilöt woisiwat pelastaa leskelleen ja lapsilleen 'edes kodin' 
          -kuten kirjoittaja sanoo, jos he ajettuisiwat wähemmän kylmäkiskoiselle kannalle henkiwakuutusmiesten uudistettuihin kehoituksiin ajoissa turwata perheensä henkiwakuutuksella ja jos 
          hänen mielestään henkiwakuutusyhtiöitten wakuutusehdot olisiwat siten muutettawat, että wakuutus astuisi jo hywäksymishetkestä asti woimaan, olisi hän otettuaan asioista selkoa woinut 
          kertoa, että yhtiöt myös saisiwat oikeuden tarpeen tullen ulosottotoiminkin periä ensimmäisen wakuutusmaksun, jonka warsin monet hakijat nykyisin yhtiöiden wahingoksi jättäwät suorittamatta. Asioihin perehtyessään oli kirjoittaja lisäksi 
          saanut tietää, että tätä ehdotusta on kannattanut - Suomi Yhtiö, mutta että useimmat muut sekä meidän maamme että toistenkin pohjoismaiden henkiwakuutusyhtiöt owat sitä wastustaneet.</p>
        <p>Siltä, joka luulee olewansa kutsuttu käyttämään julkista sanaa suuren kansallisen laitoksen soimaamiseen, sopinee waatia, että hän ensin ottaa asioista selkoa ja ennen kaikkea, että hän 
          oikein lukijoillensa selittää, mitä hän jo on saanut tietoonsa. Jos arw. lehtenne kirjoittajalla olisi tätä wastuuntunnetta ollut, olisi häneltä arwatenkin jäänyt kynä musteeseen 
          kastamatta.</p>
        <p className="captionStyle">Helsingissä joulukuun 31 p. 1923</p>
        <p className="captionStyle">Lawonius, Ingman - Keskinäinen henkiwakuutusyhtiö Suomi</p>
      </Article>
      <SubDivider className="dividerStyle" />
      <h3>Perjantai, 4.1.1924</h3>
      <Article titleText="Kiitos">
        <p>Hyökkäyswaunurykmentin puolesta lausun parhaimmat kiitokseni Hämeenlinnan Sotilaskotiyhdistykselle, sen rykmentin miehistölle toimeenpanemasta hauskasta Joulujuhlasta lahjoineen ja kestityksineen sekä Kustannusliike Arwi A. Karistolle suurenmoisesta kirjalahjasta 
          ja samalla kiitän kaikkia niitä yksityisiä ja liikkeitä, jotka owat lähettäneet lahjoja jaettawaksi Jouluna. </p>
        <p className="captionStyle">Hämeenlinna 3. 1. 24.</p>
        <p className="captionStyle">Kumlin. Majuri ja v. a. Rykm. Komentaja.</p>
      </Article>
      <SubDivider className="dividerStyle" />
      <h3>Lauantai, 5.1.1924</h3>
      <Article titleText="Wastinetta Suomi Yhtiölle">
        <p>Tämän lehden kuluwan tammikuun 3 päiwän numerossa on Keskinäisen Henkiwakuutusyhtiö Suomen puolelta annettu selitys eräästä huomiota herättäneestä henkiwakuutusjutusta Hämeenlinnan 
          kaupungissa. Siihen nähden, että mainittua selitystä ei suinkaan ole pidettäwä tyydyttäwänä, siinä kun ei edes tahdota kosketella asian pääydintä, suotakoon meille tilaisuus asiasta 
          lausua muutama sana.</p>
        <p>Henkilöä, joka ottaa wakuutuksen Suomi-yhtiöstä ei saata sitoa mitkään muut kuin yhtiön säännöt, jotka wakuntuksenhankkija hänelle tawallisesti esittää. Näiden sääntöjen mukaan on 
          wakuutussuhde syntynyt silloin, kun ensimmäinen wakuutusmaksu on suoritettu. Yhtiön asiamies on welwollinen siinä tapauksessa, kuten tässäkin om asian laita, että wakuutettu wielä 
          elossa ollen suorittaa wakuutusmaksun yhtiön hywäksymästä wakuutuksesta, ottamaan maksun wastaan sekä luowuttamaan wakuutuskirjan, olipa sitten wakuutettu sairauden, waarallisen matkan 
          tai muun syyn takia tilassa, joka aiheuttaa yhtiölle tawallista suuremman riskin. Yhtiön on katsottawa sääntöjen mukaan ottaneen tällaisetkin tapaukset kuin esilläolewa huomioonsa 
          wakuutusriskiä määrätessään. Siinä tapauksessa, että toisin olisi asian laita, pitäisi kai tästä olla eri maininta yhtiön säännöissä. Missään tapauksessa eiwät kai yhtiön asiamiesten 
          ohjesäännössä annetut toimintaohjeet woi perustaa yhtiölle mitään oikeutta kolmanteen henkilöön, tässä tapausessa wakuutettuun nähden, waan on wakuutusmaksu suoritettawa siitä 
          huolimatta, että ohjesäännöissä saattaa ollakin kielto luowuttaa wakuutuskirja henkilölle joka esim. on sairas. Eihän näitä ohjesääntöjä edes wakuutusta otettaessa esitetä eikä 
          wakuutuksen ottajalla ole niihin edes mahdollisuutta tutustua. Antaessaan ohjeita, jotka eiwät ole sopusoinnussa yhtiön sääntöjen kanssa, on yhtiö katsottawa olewan welwollinen 
          sowittamaan sen, minkä asiamies näitä ohjeita noudattamalla pitänyt welwollisuutenaan tehdä.</p>
        <p>Kun näinollen yhtiön täkäläinen asiamies on ohjesääntöönsä wedoten kieltäytynyt wastaanottamasta hänelle tarjottua wakuutusmaksua sekä luowuttamasta wakuntuskirjaa, on tätä tarjottua 
          maksua pidettäwä suoritetun weroisena. Koska wakuutuksen ottajan puolelta muutenkaan ei ole mitään laiminlyöty, waan maksettu kohta wakuntuskirjan saawuttua, niin woi ilman muuta sanoa, 
          että yhtiön, joka näissä oloissa sittenkin kieltäytyy wakuutusmaksua suorittamasta, ei enää woida katsoa walwowan asiakkaittensa etua ja saattaa wakuutuksenottajilla näinollen olla 
          odotettawissa mitä yllätyksiä hywänsä. Wakuutusyhtiöthän käytännössä ylimalkaan sellaisissakin tapauksissa, joissa tulkinta jossain määrin saattaa horjua owat oman etunsakin kannalta 
          katsoneet sopiwammaksi walwoa asiakkaittensa etuja suorittamalla wakuntusmaksun. Tällainen suhtautuminen yleisöön onkin johtanut siihen, että yleinen luottamus wakuutusyhtiöihin on ollut 
          sangen suuri. Esilläolewassa tapauksessa emme sitäwastoin woi ummistaa silmiämme siltä tosiasialta, että yhtiö, jonka sekä oikeudellinen että siweellinen welwollisuns on katsottawa 
          olewan suorittaa wakuutusmaksu, kuitenkin nyt on toiminut wastoin entisiä periaatteitaan. Eiköhän tässäkin tapanksessa olisi ollut 'suurele kansalliselle laitoksellemme' joka suhteessa 
          edullisempaa suorittaa suhteellisesti pieni wakuutusmaksu säästyen siten oikeutetulta moitteelta. Selityskirjelmässä huomauttaa yhtiö edelleen puoltawansa sellaisen käytännön 
          aikaansaantia, että wakuutus olisi katsottawa tulleen woimaan jo wakuntuksen hywäksymisellä yhtiön puolelta. Esilläolewassa tapanksessa ei yhtiö ole halukas suorittamaan wakuutusmaksua, 
          waikka wakuntuskirjat jo on ollut asiamiehen hallussa, on tältä waadittu ja maksua tarjottu.</p>
        <p className="captionStyle">Suomi-yhtiössä wakuutettuja.</p>
      </Article>
      <SubDivider className="dividerStyle" />
      <h3>Sunnuntai, 6.1.1924</h3>
      <Article titleText="Pari nöyrää kysymystä Suomi-yhtiölle">
        <p>Yhtyen täydellisesti tämän lehden kuluwan tammikuun 5 päiwän numerossa 'Suomi-yhtiössä wakuutettuja' nimimerkillä julkaistuun kirjoitukseen: 'Wastinetta Suomi=yhtiölle',  pyydän samassa 
          ja edellisissä kirjoituksissa kosketellun huomiota herättäneen henkiwakuutusjutun johdosta tehdä lisäksi wielä pari kysymystä Suomi-yhtiölle.</p>
        <p>Suomi-yhtiön alkuperäisissä wakuutusehdoissa sanotaan woimaanastumisesta näin: 'Wakuutus astuu woimaan, kun ensimäinen wakuutusmaksu on suoritettu' (kohta 1). Wakuutuskirjasta ja sen 
          antamisesta wakuutetulle ei siis mainita mitään juuri siinä sääntöjen kohdassa, joka määrittelee wakuutuksen woimaanastumisen. Ainoa ehto siihen on wakuutusmaksun suorittaminen, jossa 
          suorittajana on wakuutettu ja suoritus yhtiön puolelta täysin wapaaksi tunnustettu.</p>
        <p>Wakuntuskirja kyllä silloinkin siitä huolimatta annettiin ensimäisen wakuutusmaksun suorituksen yhteydessä, mutta mahdotonta on ajatella, että wakuutuskirjan antamisesta wakuutetulle 
          Suomi-yhtiön alkuperäisten wakuutusehtojen mukaan woitaisiin tehdä sellainen määrääwä tekijä, joka lopullisesti määrää wakuutuksen woimaanastumisen. Niinkuin suoritetusta maksusta aina 
          reilujen ihmisten kesken mielellään annetaan kuitti, niin myöskin ensimäsestä wakuntusmaksusta wakuutuskirja annetaan kuitiksi, samalla kun se myöskin sisältää wakuutussopimuksen 
          wakuuttajan ja yhtiön wälillä.</p>
        <p>Suomi-yhtiö on sittemmin muuttanut wakuutusehtojensa sanamuotoa ehkä paljonkin. Niinpä wakuutuksen woimaanastumisesta nykyisissä wakuutusehdoissa herrojen Lawoniuksen ja Ingmanin mukaan 
          säädetään: 'Wakuutus astuu woimaan kun wakuutuksen haltija on suorittanut ensimmäisen wakuutusmaksun ja wakuuttaja on antanut hänelle wakuutuskirjan'. Tästä wakuutuskirjan antamisesta 
          wakuutetulle, josta itse wanhemmat wakuutusehdot eiwät mainitse mitään, on nyt tehty 'edellytys', joka kaataa kokonaan sen mitä aikaisemmin on wakuutuksen woimaanastumisesta säädetty.</p>
        <p>Nyt pyydän nöyrimmästi kysyä, milloin Suomi-yhtiön wakuutusehtoihin on wakuutuksen woimaanastumisesta tehty yllämainittu sananmuodonmuutos ja miten tätä muutosta on perusteltu. Onko 
          muutos ollut waan sananmuodonmuutos, wai onko tahdottu todellakin tehdä myös tärkeä wakuutuksen haltijan etua rajoittawa ajallinen muutos? Ja wielä. Onko asiamiesohjesäännöissä yhtiön 
          alkuajoilta asti ollut säännös, joka kieltää asiamiestä wastaanottamasta wakuutusmaksua, jos wakuutuksen ottaja on sairastunut?</p>
        <p className="captionStyle">Myöskin Suomi-yhtiössä wakuutettu.</p>
      </Article>
      <SubDivider className="dividerStyle" />
      <h3>Lauantai, 12.1.1924</h3>
      <Article titleText="Tilitys Pelastusarmeijan joulupadoista">
        <p>Pyydämme täten lausua sydämellisen kiitoksemme Smk:sta 2,165:10, jotka saimme joulupadoilla sekä Smk. 500.- lahjasta Mannerheimin Lastensuojeluliitolta köyhäin lasten waateusawustukseksi. 
          Wielä saimme 5 syltä rimapuita H:linnan Höyrysahalta, mistä kaikesta sydämellinen kiitos. Rahat on käytetty seuraawasti: Joulupaketteja 56:lle eri perheelle, sisältäen riisiä, wehnäjauhoja, 
          herneitä, keskimäärin kutakin lajia 1 kg, sianlihaa keskimäärin 800 gr. Joululehden jakelun yhteydessä tarjoiltiin kahwia woipullan kera. Menot Smk. 2,142:40. Lastenjuhla, jossa 59 lasta 
          sai tarpeellisia ja lämpöisiä waatekappaleita, Smk. 1,178.25. Yhteissumma 3,420:65. Samalla lausumme myös kiitoksemme ystäwille, jotka owat kuukausittain kannattaneet työtämme kowaosaisten 
          keskuudessa kuin myöskin ompeluseuran tarmokkaille jäsenille. Jumalan siunaus on palkkanne olewa 'Hywää tehdessänne älkäät wäsykö'.</p>
        <p className="captionStyle">H:linna tammik. 11 pnä 1924.</p>
        <p className="captionStyle">Kiitollisuudella Elin Bärlund, Rosa Nuotio.</p>
        <p className="captionStyle">Slummisisaret.</p>
      </Article>
      <SubDivider className="dividerStyle" />
      <h3>Perjantai, 18.1.1924</h3>
      <Article titleText="'Saa ansaitsemansa rangaistuksen'">
        <p>Lukiessani Hämeen Sanomain 11:stä numerosta uutista H:linnassa tapahtuneesta törkeästä puukotuksesta ajattelin millaista iwaa on uutisen lopussa olewa lause: 'poliisi on kuitenkin hänen' 
          (rikoksen tekijän) 'jäljillään ja toiwottawasti roisto saa raakalaisteostaan ansaitsemansa rangaistuksen.' Onko se ansionmukainen rangaistus, jos tuollainen roisto ja peto, joka 
          kieltolain maassa raatelee, ilman pienintäkään aihetta, kahta rauhallista kulkijaa, joita hän ei edes tunne, jos hän saa kuukauden, ehkäpä parikin istua wankilassa, jossa hän elää 
          puhtauteen ja ruokaan nähden herroiksi, paljon paremmin, kuin kunniallinen, suuren perheen isä ränsistyneessä tuwassaan. Wankila ei tuolle laiskalle lurjukselle ole rangaistus, waan 
          mitä miellyttäwin talwikortteeri, jossa ei työ rasita. Nuo onnettomat puukotetut saawat wielä kaiken kärsimänsä lisäksi elättää puukottajaansa linnassa, koska he arwattawasti owat 
          weroa maksawia kansalaisia.</p>
        <p>Ei wankila, nykyisessä muodossaan, ole ansionmukainen rangaistus tuollaisille huligaaneille. Miksi ei tuollaista sakkia edes wankilassa kohdella siten, kun he ansaitsewat, jotta 
          wankila peljättäisi heitä, ja he edes rangaistuksen pelossa jättäisiwät rikokset tekemättä, sillä mitään moraalisia arwoja he eiwät ymmärrä. Suomen wankilat owat 'kurjalla' kannalla 
          siksi, että wankeja lellitellään liiaksi. Samassa Hämeen Sanomain numerossa on myös uutinen, kuinka työtön mies Turussa on yrittänyt istua syyllisen nimessä 5 kuukauden wankila
          rangaistuksen syystä, että hänelle on syyllinen luwannut, ei maksanut, jonkun pikkusumman, eikö tämä ole mainio näyte siitä, että wankilaan meillä mennään huvin wuoksi. Mutta mitä 
          turwaa meillä kunnollisilla kansalaisilla ja weronmaksajilla silloin on laista, kun kuka huligaani hywänsä saa meidät ryöstää ja raadella rangaistuksetta silloinkin waikka hänet 
          saadaan kiinni, sillä wankilassa istuminen ei nykyisellä komennolla ole rangaistus ansion mukaan. Ruokittakoon wangit huonommin, teetettäköön heillä lujasti oikeaa työtä, niin rikokset 
          wähenewät tawattomasti ja wankilan pelko pakottaa monet tuhannet Suomen huligaanit ja wiinatrokarit rehelliseen työhön ja kunnialliseen elämään. Laitettakoon, hywin järjestetyn 
          wankien työn awulla ja säästäwäisyydellä asiat niin, että jokainen Suomen wanki tuottaisi waltiolle waikkapa waan 1 markan hyödyn wuorokaudessa sen sijaan, että nyt waltio hänen 
          työnsä lisäksi saa maksaa 15 á 16 mk. wuorokaudessa hänen elättämisekseen.</p>
        <p>Pois lellittely ja wäärä 'ihmisyys', kuri ja järjestys maahan!</p>
        <p className="captionStyle">Cato.</p>
      </Article>
      <SubDivider className="dividerStyle" />
      <h3>Keskiviikko, 30.1.1924</h3>
      <Article titleText="Kaikille Pohjois- ja Etelä Hämeen Suojeluskuntapiirien Suojeluskunnille">
        <p>Täten kutsutaan kaikkia Hämeen läänissä asuvia suojeluskuntalaisia ottamaan osaa 'Hämeen Hiihtomestaruusmalja' -kilpailuihin, jotka allaolewa Suojeluskunta järjestää sunnuntaina 
          helmikuun 17 p:nä 1924 klo 9 a.p. matkalla Hämeenlinna Riihimäki (taikka päinwastoin; matkan pituus noin 45 km).</p>
          <p>Woittaja saa haltuunsa wuodeksi Hämeenlinnan Kansallis Kerhon lahjoittaman komean, 2,500 markan arwoisen 'Hämeen Hiihtomestaruus maljan', jota ensimmäisen kerran puolustaa M. 
            Talwia Kangasalan Sksta; useita yksityispalkintoja jaetaan.</p>
          <p>Suojeluskunnat ilmoittawat osanottajien nimet allekirjoittaneelle 7. 2. 1924 mennessä. Lähemmät määräykset kilpailureitistä, majoituksesta y.m. annetaan myöhemmin.</p>
          <p>Runsasta osanottoa toiwoen lausumme kaikki suojeluskuntalaiset terwetulleiksi yllämainittuihin kilpailuihin.</p>
          <p className="captionStyle">Hämeenlinnan Suojeluskunta.</p>
          <p className="captionStyle">Helkiö, Paikallispäällikkö.</p>
          <p className="captionStyle">Juurewa, Urheilutoimik. puheenjoht.</p>
        </Article>
        <Article titleText="Wapaussodan inwalideille">
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
          <p className="captionStyle">A. Rosenberg.</p>
          <p className="captionStyle">Os.: Selki (Hangon rata).</p>
        </Article>
        <Article titleText="Sokerijuurikaswiljelyksen edistäminen Etelä-Hämeessä">
          <p>Sanomalehdissä on kierrellyt uutinen, jonka mukaan Salon Raakasokeritehtaan toimesta äsken on pidetty neuwottelukokous, johon on kutsuttu edustajia eri seuduilta ja jossa on 'todettu' 
            erinäisiä sokerijuurikaswiljelystä koskewia ponsia. Ainoa 'edustaja', joka on nimeltä mainittu, on hra J. Torppa Hattulasta, joka oli walittu kokouksessa puhetta johtamaan.</p>
          <p>Tämän johdosta täytyy kysyä, owatko todelliset sokerijuurikaswiljelijät Etelä-Hämeessä jo niin täydellisesti häwinneet, että heidän 'edustajaksi' on täytynyt ottaa pohjalainen 
            huwilanomistaja, jolla ei woi olla sanottawaa kokemusta asioista? Wai onko tahdottu antaa kokoukselle erityistä loistoa hankkimalla sille puheenjohtajaksi entinen suurlakkoajan 
            kuwernööri? Ja owatko muut edustajat olleet pätewämpiä tekemään asiasta päätöksiä kuin puheenjohtaja?</p>
          <p>Ilmoituksissaan Sokerijuurikastehdas edelleen wakuuttaa, että sokerijuurikaswiljelys antaa suurempaa woittoa hehtaaria kohti kuin muut wiljelyskaswit. Ainakin Etelä-Hämeessä owat 
            tulokset kuitenkin yleensä olleet suorastaan masentawia. Luulisi, että yhtiökin käsittäisi sen, että, jos on mieli saada innostus asiaan uudestaan syntymään, siihen toki tarwitaan 
            muita wakuutteluja kuin henkilöiden, jotka owat yhtiön warta wasten palkkaamat tahi joiden ansio korkeintaan nousee siihen, että osaawat eroittaa sokerijuurikkaan ja porkkanan 
            toisistaan.</p>
          <p className="captionStyle">Entinen sokerijuurikaswiljelijä.</p>
        </Article>
        <SubDivider className="dividerStyle" />
        <h3>Lauantai, 2.2.1924</h3>
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
          <p className="captionStyle">Lepaan Puutarhaopistolla tammikuun 23 pnä 1924.</p>
          <p className="captionStyle">Olawi Collan.</p>
          <p className="captionStyle">Waltionpomologi.</p>
        </Article>
        <SubDivider className="dividerStyle" />
        <h3>Keskiviikko, 6.2.1924</h3>
        <Article titleText="Sokerijuurikaswiljelyksen edistäminen Etelä-Hämeessä">
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
          <p className="captionStyle">T. J. Kupila.</p>
        </Article>
        <br></br>
        <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/titles/0356-2751?year=1924">Linkki tähän vuosikertaan</a>
    </Layout>
  );
};
export const Head = () => <title>Entinen Hämeenlinna - Kartta 1778</title> // metadata

// Export product component
export default Lukijoilta1924Page