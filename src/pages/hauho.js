import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import "../styles/base/global.css"

import Divider from "../assets/divider.svg"
import SubDivider from "../assets/sub-divider.svg"
import QuoteStart from "../assets/quotation-start.svg"
import QuoteEnd from "../assets/quotation-end.svg"

const HauhoPage = () => {
  return (
    <Layout titleText="Hauhon kirkon arkistosta">
      <Article titleText="Nälkäwuodet 1695 - 97.">
        <SubDivider className="dividerStyle" />
        <h5>Kuwaus 1695-97 nälkäwuosista Hauholla kirkon arkistossa löytywän pahoin kuluneen irtonaisen paperin mukaan suomennettuna:</h5>
        <QuoteStart className="symbolStyle"/>
        <p>Wirkani welwoituksesta on minun todettawa, että koko isänmaamme, ja erittäinkin me, hallanarkojen seutujen asukkaat, olemme joutuneet olemaan Jumalan rangaistuksen alla, kun olemme saaneet kestää 
          kolme kowaa katowuotta peräkkäin, nimittäin wuosina 1695, 96, 97, ja kestää sellaisen nälänhädän, että todennäköisesti ei toista sellaista ole maailman alusta asti ollut, johtuu tämä osittain runsaista 
          sateista osittain kuiwuudesta ja kowista hallaöistä, niin että me wuosina 1695 ja 96 emme wuosikaswusta saaneet muuta korjata, kuin pahnoja josta oli seurauksena, että suurimmalla osalla maan asukkaista 
          waimoineen ja lapsineen oli ainoana rawintonaan oljet ja tuo kowin turmiollinen niini, johon ei ollut lisätä suolaa eikä jauhoja, joka kaikki jo oli loppuun kulutettu. Wiimekuluneena talwena he sitten 
          jättiwät kotinsa, rawinnon puutteen ajamina kuljeskeliwat, söiwät luonnotonta ruokaa, kuten raatojen lihaa, hewosia ja koiria sekä lisäksi sellaista, jota ei woi mainitakaan, sillä kaarna ei talwen kowuuden 
          tähden irtaantunut, eikä sulan tultua jäkäläsammaltakaan saada woitu osaksi sentähden, että se edellisinä wuosina jo oli käytetty, osaksi oli mädäntynyt, ja wiljaa ei ollut maalla eikä kaupungeissa 
          ostettawissa enempää siellä kuin täälläkään, ja jos sitä jostakin olisi saanutkin wähän ostaa, oli se niin kallista, 30—34 b.m., että kukaan ei sitä ostamaan kyennyt, ja kotieläimistä ja waatteistakaan ei 
          enää tähteitä ollut käytettäwissä eikä niitä ostaakaan saanut, sillä kaikki tämä oli wiimeisinä kalliina wuosina 1695 ja 1696 jo mennyt elintarpeitten hankkimiseen. Tämän tähden monet menehtyiwät kauan 
          kestettyyn nälänhätään, oliwat nähdä kuin haudoissa olewat ruumiit ja wihdoin syötyään tuota turmiollista niintä, mikä koko talwen oli pääruokana ollut, siitä turposiwat ja useimmassa tapauksessa 
          kuoliwat nälänhätään toiset kylyssä, toiset teillä ja metsissä siinä määrin, että jälellejääneet eiwät kyenneet kaikkia hautaankaan toimittamaan, waan joutuiwat ne petoeläinten ruuaksi. Sydäntäwihlowaa 
          oli tällaisissa tapauksissa nähdä pieniä lapsia, jotka oliwat jätettäwät kuolemaan, kyyneliä wuodattamatta ei woi tätä kertoa. Wuonna 1697 toimitti armollisin kuninkaamme, Kaarle XI, maahan tuhannen 
          tynnyriä rukiinsiementä. Wuonna 1698 toimitti armollisin kuninkaamme Kaarle XII tänne niille kansan tähteille, jotka elämään jäiwät, muilta seuduilta runsaasti wiljan jäännöksiä kewät- ja syyswiljan 
          siemeneksi ja ruuaksi, mutta wiljaa enempää kuin herneitäkään ja pellawan siementä ei sinä wuonna tässä maassa kylwetty, aniharwaa poikkeusta lukuunottamatta.</p>
        <p className="signatureSmall">Jonas Hirn. Kirkon isännöitsijä.</p>
        <QuoteEnd className="symbolStyle"/>
        <SubDivider className="dividerStyle" />
        <p>Myöhemmistä katowuosista löytyy arkistossa seuraawia merkintöjä:</p>
        <p>„Wuonna 1722 sattui maahamme kowa katowuosi, jota sitten jatkui 1723, 1724, 1725 ja 1726 aiheutuen milloin liiallisesta kosteudesta, milloin liiallisesta kuiwuudesta.”</p>
        <p>„Wuonna 1731 rankaisi korkein maatamme ankaralla kadolla siten että halla 16 p:nä elokuuta ja sitä seuraawina öinä turmeli kaiken kewätkylwön ja rukiinkin monin paikoin.”</p>
        <p>„Wuonna 1735 kesäkuun 18 päiwänä tuli rakeita, suurimpain haukan munain kokoisia, toiset pyöreitä toiset soikeita ja särmäisiä, puolen kyynärän wahwuudelta ja nämät eiwät wain särkeneet katot, katkoiwat 
          latwat suuremmista puista, murtaneet wahwoja oksia niistä tehneet suuria sywennyksiä seiniin, hakanneet kuoliaaksi pikkukarjaa, waan myös turmeliwat kaiken wiljanlaswun sekä heinänkaswun niityillä Kokkilan, 
          Köykän, Kelkkasen, Tulittulan, Hahkialan ja Hywikkälän kylissä, niin että nämä eiwät kaikesta kaswusta saaneet sinä wuonna jywääkään talteen korjata, waan koottiin sekasin lyödyt ja pahnoiksi hakatut oljet 
          pelloille rukoihin, ja kun sitä ei karjankaan ruuaksi woitu käyttää, tehtiin siitä wain lantaa. Sama Herran witsa on kohdannut joitakin muitakin kyliä sekä tässä lähellä että etäämmälläkin olleissa pitäjissä.”</p>
        <p>„Wuonna 1739 heinäkuun 19 päiwänä turmeltui wiljankaswu raekuuron kautta Aikkolan, Uudenkylän, Lehtelän ja Ilmolan kylissä.”</p>
        <p>Palataksemme 1697 wuoden katoon on se, tallellaolewain historiakirjain mukaan, tehnyt Hauholla hirwittäwää jälkeä. Kuolleiden luettelo esimerkiksi osottaa, että kuolemantapausten luku, joka ennen tätä wuotta 
          oli pysytellyt 100 waiheissa wuotta kohti, nousi wuonna 1697 kaikkiaan 828:aan, joka summa wastannee ainakin neljättä osaa koko seurakunnan wäkiluwusta. Että suuri kuolewaisuus johtui etupäässä rawinnon 
          puutteesta, sitä todistaa m.m. kuolemantapausten jakautuminen wuoden eri kuukausille. Niiden lukumäärä kaswoi kuukausi kuukaudelta, kunnes on päästy kesään ja supistuu mitättömän pieneksi, kun pellot owat 
          alkaneet jakaa antimiaan. Tammikuussa kuoli 41, helmikuussa 62, maaliskuussa 90, huhtikuussa 248, toukokuussa 181, kesäkuussa 117, heinäkuussa 48, elokuussa 14 j.n.e. Wuoden 828:sta kuolleesta tulee sen ensi 
          puoliskolle 739. Suurin kuolinpäiwä oli huhtikuun 10 päiwä, jolloin ilmoitettiin 54 kuolemantapausta, joista 15 tulee yhden ainoan kylän, nimittäin Ilmoilan kylän osalle. Wertauksen wuoksi eri kylän wälillä 
          mainittakoon, että runsain oli kuoleman saalis Hyömäen kylästä, joka menetti 77 asukastaan (yhtenä päiwänä toukokuun 15:nä 10), sitten tulee Witsiälä 66 kuolleineen, Eteläisistä 52, Ilmoilasta 49, Kirkonkylästä 
          43, Portaasta 43, Torwoilasta 36 (josta 16/5 tuodaan hautaan kahden perheen ruumiit, toisesta 4 toisesta 3), Sotjalasta 35, Kokkilasta 30 j.n.e. Kuinka wähäiseksi seurakunta kuolinwuotena meni, näkyy m.m. siitä, 
          että wuonna 1698 oli kuolemantapauksia koko wuonna 35 ja wuonna 1699 wain 18 ja wielä 1702 wain 19. Eikä ollut suuri syntyneidenkään luku. Vuonna 1695 oli niitä wielä ollut 75 ja w. 1696 50, mutta 1697 wain 14, 
          1698 - 37, mutta esim. 60:een nousi se wasta wuonna 1711. Nämä numerot todistawat yllämainitun Jonas Hirnin kuwausten oikeaksi.</p>
          <p className="signatureSmall">W. P.</p>
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="Lukkarijupakka Tuuloksessa.">
        <h5>Wuonna 1738 pidetyssä pitäjänkokouksessa tehdyn pöytäkirjan suomennos:</h5>
        <QuoteStart className="symbolStyle"/>
        <p>Koska lukkari tässä Tuuloksen kappelissa, Juho J:n, nyttemmin on käynyt niin wanhaksi ja raihnaiseksi, että häntä tämän tähden ja sen lisäksi siitä syystä, että hän kaikille tunnetulla wiinaanmenewäisyydellään saa 
          aikaan pahennusta, kun yhtenään juo itsensä humalaan niin arki- kun pyhäpäiwinäkin, wieläpä wirkatoimissa ollessaankin, niinkun walitettawasti tässäkin tilaisuudessa selwästi woitiin todeta, ja koska hän sopimattomasti 
          käsittelee kirkkowiiniä ja on niin lewäperäinen ja huolimaton Konsistoorion kiertokirjeiden perilletoimittamisessa, että monet niistä owat joutuneet aiwan hukkaan, ei enään mitenkään woida sietää eli toimessaan pitää, 
          warsinkin koska hän ei ole ottanut kuulewiin korwiinkaan niitä monia oikaisuja ja parannuswaatimuksia, joita hänelle on siinä tarkotuksessa kerta toisensa perään tehty, waan, kaikesta huolimatta, wain pysynyt paheissaan, 
          niin jätettiin nyt seurakunnan ratkastawaksi, eikö mainittu J:n, joka jo aikoja sitten olisi tunnettujen ja törkeiden rikkomustensa tähden ansainnut wirkaeron, nyt wihdoinkin olisi erotettawa, eritoten koska hän ei 
          ainoastaan eilenkin, kun tässä Herran huoneessa kirkkomessua jumalanpalweluksella wietettiin, ollut pahoin juowuksissa, waan nytkin näkyy ilmeisesti olewan siinä tilassa?</p>
        <p>Tämän johdosta oltiin kokouksessa aluksi hetkinen ääneti, mutta sitten esiintyi 4 tai 5 joukosta mahtipontisesti J:n puolesta, walittaen, että tämän, joka nyt on wanha ja köyhä, eikä mitenkään kykene muualta elatustaan 
          hankkimaan, on siinä tapauksessa pakko wanhan eukkonsa kanssa kuolla nälkään. Erittäinkin teki kuudennusmies, Tuomas Lepistö, mielenosotuksellisesti pauhaten ja tarpeettomasti huutaen sen wäitteen, että J:lle, joka on 
          wanha kirkon palwelija, tässä tehtäisiin kohtuuton wääryys, jos hänet nyt wanhoilla päiwillään työnnettäisiin syrjään ja että papitkaan tuskin hywäksyisiwät sellaista heidän hylkimistään, sittenkun owat wanhoiksi käyneet, 
          mikä kaikki olisi otettawa huomioon, ynnä muuta sellaista. Tähän wastattiin, että paheissa eläwä pappi, olkoonpa nuori tai wanha, on asetusten mukaan armotta erotettawa wirastaan, ja samoin on myös meneteltäwä paheisiin 
          wajonneen lukkarin kanssa. Ja kun tämä kuudennusmies Lepistökin, niinkun koko seurakunnalle on tunnettua, on kowin taipuwainen juoppouteen ja sen lisäksi on mainittu, siellä ja täällä tapahtuneitten, pienien warkauksien 
          ja näpistelyjen tekijäksi, mikä kaikki on todistettawissa, niin kysyttiin seurakunnalta, sopiiko antaa tuollaisen kuudennusmiehen, joka ylipäänsä on huonomaineinen ja todettu syypääksi mainitunlaatuisiin pahennusta 
          herättäwiin wirheisiin, ensinkään käyttää puhewaltaa asiassa, joka koskee toista rikollista, ja sopiiko häntä enää sietää edes kirkon kuudennusmiehenäkään, kun hän on tällaisten wirheitten alaiseksi joutunut, ja 
          eiköhän hän, niinkuin puheenjohtaja oli jo ennemmin ajatellutkin kokoukselle esittää, olisi katsottawa kyllin ansiokkaaksi joutumaan wirastaan erotettawaksi, ja eikö hänen tilalleen olisi wirkaan walittawa toinen siihen 
          sopiwampi ja paremmassa maineessa olewa henkilö? Tähän kokous yksimielisesti yhtyi, myöntäen olewan warsin paikallaan, että Tuomas Lepistö erotetaan kirkon kuudennusmiehen wirasta, ja nimitti heti yksimielisesti talollisen 
          Kristeri Wähäkytilän Syrjäntaan kylästä, joka on raitis, siiwo ja paremmassa maineessa olewa mies, kuudennusmieheksi hänen tilalleen, mikä niinmuodoin kaikin puolin hywäksyttiin. Edelleen wastasi puheenjohtaja noille 
          toisille, että, mitä heidän puheeseensa lukkarista tulee, J:n kylläkin on koyhä ja joutuisi waikeuksiin, mutta kun hän itse, rikollisen juoppoutensa tähden, on syypää sekä köyhyyteensä että näihin waikeuksiin, warsinkin 
          kun tunnettua on, että hän, joka tähän asti on hoitanut sekä lukkarin että suntion wirkoja, ja niin muodoin saanut kantaa molempain palkatkin, on enimmäkseen kylissä kulkien pannut wäkijuomiin pienet tulonsa, ja siten itse 
          saattanut itsensä köyhäksi, sekä että koska tuollainen, joka tuossa kulkee hoiperrellen sekä tänään, että melkeinpä aina ennemminkin, on katsottama arwottomaksi toimimaan tällaisessa seurakunnallisessa wirassa, niin olisi 
          seurakunnan käsitettäwä, kuinka kohtuutonta on, että tahdotaan suosia henkilöä, joka jo muutenkin on toimeen kykenemätön ja sen lisäksi, monen rikoksen tekijänä, olisi jo aikoja sitten ollut katsottama wirkaoikeutensa 
          menettäneeksi, kuitenkin ollakseen hänelle armelias hänen wanhoilla päiwillään, tahtoi puheenjohtaja ehdottaa, että J:n, waikkakin hän moninkertaisten rikkomustensa tähden ei mitenkään sitä ansaitse, sittenkin sallittaisiin 
          elinaikansa, s.o. niinkauan kuin elää, pitää hywänään seurakunnasta tulewat suntiokapat, ja hänen seuraajansa saisi wain lukkarin tulot palkakseen, mutta hoitaisi silti molemmat wirat, niinkun J:kin tähän asti. Jos 
          wastustajat eiwät tähän sowitteluun taipuisi, lupasi puheenjohtaja alistaa asian Konsistoriumin päätettäwäksi, ja oletti, että Konsistoriumi ei tulisi katselemaan hänen wirheitään läpi sormien, waan käwisi se asiaan wieläkin 
          ankarammin käsiksi ja saattaisi J:kin maallisessa oikeudessa wastaamaan kirkkopahennuksistaan; jonka jälkeen J:kin puoltajat rupesiwat innokkaasti pyytämään, että hänen wirheitään ei toki sentään pidettäisi niin raskaina, 
          että hänet saatettaisiin sakkotuomion alaiseksi, johon sitten muukin joukko yhtyi ja selwitti tyytywänsä puheenjohtajan ehdotukseen, koska eiwät sanoneet woiwansa esittää mitään pätewiä seikkoja J:nin puolustukseksi, waan 
          oliwat hänen wikansa kaikille tunnetut, walittiwathan wain sitä surkeutta, mikä hänellä nyt edessään oli. Asian näin päätyttyä, ehdotti puheenjohtaja seurakunnalle nyt erotetun J:nin seuraajaksi Porwoon opistosta tänne 
          tulleen ja kokouksessa saapuwilla olewan koululaisen, Samuel Palm-Barkin, joka ei ainoastaan ollut täällä muutamia kertoja tätä ennen laulanut, ja siten esittänyt tyydyttäwät näytteet taidostaan, waan myös oli 
          ominaisuuksiltaan todettu sellaiseksi, kun Kuninkaallinen Kirkkolaki lukkarin edellyttää, sekä sitäpaitsi todistettiin raittiiksi, siiwoksi ja säwyisäksi mieheksi, ja tulisi seurakunnalla hänestä, koskapa hän oli puusepän 
          työhön perehtynyt, olemaan sekin hyöty, että se woisi käyttää häntä awukseen sattuwissa kirkon rakennustöissä ja muulloinkin, tarwitsematta käydä muualta sellaista etsimään, ja kysyi, josko se tyytyisi ottamaan P:n 
          lukkarikseen edellisen tilalle, warsinkin kun hän olisi halukas edellämainituilla ehdoilla ottamaan toimet täyttääkseen, tahtomatta silti ensinkään tyrkyttää tätä P:ia seurakunnan niskoille, waan olisi seurakunnalla täysi 
          wapaus nimittää joku toinenkin toimeen, jos sillä on tiedossaan sellainen, jolla on yhtä hywät tai ehkäpä paremmatkin edellytykset siihen, kun tällä P:lla? Tähän wastattiin yksimielisesti, että heillä ei ollut mitään 
          sanottawana P:ia wastaan, waan tunnustiwat hänet kylläkin kelpaawaksi tähän toimeen, kuitenkin arweliwat ne, jotka ennemminkin oliwat J:n puolesta esiintyneet, että tämän heikkouksia sittenkin pitäisi sääliä, jonkawuoksi 
          puheenjohtaja lupasi selostaa asian Konsistoriumille, ja niin hajaannuttiin kokouksesta, uskossa jättäen toinen toisensa Jumalan huostaan.</p>
        <p className="signatureSmall">M. M.</p>
        <QuoteEnd className="symbolStyle"/>
        <br></br>
        <p className="info">Seuraawana wuonna ilmoittaa puheenjohtaja seurakunnalle, että Konsistoriumi oli asian ratkaissut hänen wälitys-ehdotuksensa mukaan eli siis erottanut J:n wirasta jättäen hänelle eläkkeeksi suntion palkan, sekä nimittänyt 
          hänen ehdokkaansa, Palmbarkin, Tuuloksen lukkariksi.</p>
        <p className="signatureSmall">W. P.</p>
        
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="Miksi waiwastalon rakentaminen Hauholla wuonna 1777 oli pakosta jätettäwä?">
        <h5>Pitäjänkokouksen pöytäkirja suomennettuna:</h5>
        <QuoteStart className="symbolStyle"/>
        <p>Kun ensin Hänen Majesteetinsa kaikkein armollisin kirjelmä 19 päiwältä lokakuuta 1775, joka koskee köyhäinhoitoa pitäjissä, ja joka korkia-arwoisesta Maaherranwirastosta oli saapunut Herra Ruununnimismiehelle, 
          Axel Fredrik Faworinille, oli julkiluettu, ei seurakunta muuta woinut, kun alamaisimmassa kunnioituksessa ylistää kaikkein armollisimman Kuninkaansa korkeasti hellää huolenpitoa köyhistä ja sääliwäisyyttä niitä 
          kohtaan, sitäkin suuremmalla syyllä, kun seurakunnan on jo pitkät ajat täytynyt kantaa rasitusta, jonka aiheuttawat wierasten kuntain täällä kuleksiwat köyhät, kun näitä on pitänyt kristillisestä 
          sääliwäisyydestä awustaa antimilla ja wielä lisäksi raihnasempia heistä kyyditä pois luotaan usein aiwan kiireisimpänä työn aikana, kun se nyt sitäpaitsi, tämän korkean esiwaltansa määräyksessä saa kuuliaisimman 
          alamaisen tehtäwäkseen kohdistaa kaiken huolenpitonsa ja hellyytensä entistäkin tuntuwammin omiin köyhiinsä ja puutteessa olewiin.</p>
        <p>Tämän jälkeen johdatettiin mieliin, waikka se ei kellekään seurakunnan jäsenelle olekaan tuntematonta, kuinka nimittäin köyhäinhoitaminen täällä jo monet ajat on ollut sellaista, että maatilat emäseurakunnassa, 
          samoinkuin Tuuloksen ja Luopioisten kappeleissakin, on jaettu määrättyihin ruotuihin, jotka sitten kukin kohdaltaan owat pitäneet huolen osalleen joutuneen köyhän rawinnosta, elatuksesta ja hoidosta, sekä että 
          seurakunnan papisto, toimeenpanemissaan katkismus- ja kinkerikuulusteluissa, on joka kylässä tutkinut, miten tätä, pitäjän köyhien hoitamisesta tehtyä sopimusta on asianmukaisesti tarkoin noudatettu, ja on silloin, 
          sopiwalla tawalla neuwoen, kehotettu sekä hoitolaista itseään että hoitajaansakin, kun owat saapuwilla olleet, tarkoin noudattamaan keskinäisiä welwollisuuksiaan, ja on myös walittelut, joita puolelta tai toiselta 
          ehkä on tehty, rakkaudessa ja ystäwyydessä käsitelty ja oijottu, ja wielä on kirkon kuudennusmiehiä wakawasti kehotettu pitämään näitä silmällä ja, missä laiminlyöntiä huomaawat, antamaan siitä papistolle 
          asianmukaisen ilmoituksen.</p>
        <p>Tämän, ruoduissa tapahtuwan hoidon lisäksi on näille köyhille Rukousmessun aikaan kesällä ja Tuomaanmessun aikaan Joulun edellä, heitä ilahduttaakseen, jaettu rehellisen keräyksen kautta kokoonsaatuja raha- ja 
          wiljalahjoja, mitkä mainittuina aikoina on papistolle lähetetty köyhille jaettawiksi sen lisäksi, mitä tuntemattomat lahjoittajat owat waiwastukkin panneet, josta wiime syksynäkin, kun se awattiin, löytyi ei wain 
          hopea- ja waskirahoja, waan wielä lisäksi huomattawa määrä pankkiseteleitä, mitkä oli työnnetty tähän, raudasta tehtyyn ja lukolla warustettuun arkkuun (fattigbyssa). Jotta nämä kerääntyneet warat sitä 
          kohtuudenmukaisemmin ja kristillisemmin tulisiwat kristillismielisten lahjoittajain tarkotuksen mukaan jaetuiksi, on köyhät luetteloissa jaettu kolmeen luokkaan, kukin raihnautensa mukaan, ja niin saaneet kukin 
          tämän mukaisen suhteellisen osuutensa niistä.</p>
        <p>Tällainen on hoito jo wuodesta 1737 ollut ja noudatetaan sitä yhä wieläkin kaikella lainkuuliaisuudella ja hellyydellä, niinkun tähän jäljennöisenä mukaanliitetty luettelokin kyllin selwästi osottaa, ja on 
          luultawaa, waikkapa nyt ei ollutkaan siitä saatawissa warmaa tietoa, että hiippakunnan Piispa ja Konsistoriumi owat tällaiselle järjestelmälle aikanaan hankkineet korkeanwiranomaisten wahwistuksen.</p>
        <p>Siitä huolimatta, ja kun Hänen Kuninkaallisen Majesteettinsä armollisin tahto kyllin selwästi näkyy olewan, että waiwastalo olisi rakennettawa kaikkialle, missä niitä ei wielä ole, ja täälläkään ei sellaista 
          ole, neuwoteltiin nyt siitä, miten tämä, lakia kunnioittaen, woitaisiin ensi tilassa toteuttaa. Oli helposti ymmärrettäwissä, että tämä tarwe ei ollut wielä sillä tyydytetty, että wain tupa rakennettaisiin. 
          Tähän tarwittaisiin niitä useampia, kuten ulkohuoneita ja keittiö, ehkä wielä muitakin. Palweluskuntaa tähän myöskin wälttämättömästi tarwittaisiin, ennenkuin kaikki olisi tarpeenmukaisessa kunnossa. Mutta, 
          waikkakin jokainen wakuutti olewansa asiaan halukas, ei sittekään tässä neuwottelussa muuhun päästy, kun että täytyi käydä haikeasti walittamaan sitä, että suurelta osalta seurakuntaa puuttui metsää, joka oli 
          seurauksena esi-isäin huolimattomasta metsänhoitamisesta ja myös useista, osittain menneinä osittain wiime aikoina, raiwonneista metsäpaloista, joiden alkuunpanijoista ei ollut woitu selkoa saada. Seurakuntalaisten 
          kaikkein hartaimpana toiwona oli sen tähden, että Hänen Kuninkaallinen Majesteettinsa, joka näin korkean armollisesti ja näin suurella hellyydellä huolehtii alamaisistaan, ei ottaisi närkästyäkseen siitä, että he 
          uskaltawat mainita tämän metsänpuutteen, warsinkin kun se metsä, mikä täällä mahdollisesti wielä jäljellä on, on kowin kaukana pitäjän emäkirkosta, minkä läheisyydessä, kun eri näkökohdat huomioon otetaan, sopiwin 
          paikka rakennettawalle waiwastalolle olisi.</p>
        <p>Lausuttiinpa tästä neuwoteltaessa wielä sellaistakin, että jos nyt, kaikista waikeuksista huolimatta tuollainen waiwastalo sittenkin tulisi rakennetuksi, niin olisi tämä paikkakunta aiwan liian kuiwaa seutua 
          särwintarpeiden saamiseki siitä köyhille, koskapa nämät, jotka näihin asti owat tyytyneet siihen, mitä talon wäki itsekin on ruuakseen käyttänyt niinkun kaalia, nauriita ja nauriinnaatteja, nyt rupeisiwat waatimaan 
          jotakin muuta; ja mitä palweluskuntaan tulee, niin olisipa melkein mahdotonta saada sitä ainakin tästä pitäjästä, jossa useilla talojaan hoitaessaankin on puute palweluswäestä, ja jossa suuri ellei suurinkin osa 
          rengeistä on lähtenyt palwelemaan ruotuwäessä ja wärwätyissä rykmenteissä tai salpetterin walmistuspaikoissa ja, sittenkun näin neuwoin owat saawuttaneet itsenäisen aseman, owat he menneet naimisiin ja niin saaneet 
          aikaan sen, että tuota toista sukupuolta nyt on palwelukseen saatawissa entistäänkin wähemmän, jättämättä tässä wielä mainitsematta sitäkään, että yksinkertaisessa kansassa on sellainen, kylläkin huonosti perusteltu 
          katsantokanta, että olisi häpeäksi joutua nimitetyksi waiwasten pikentiksi samaan aikaan kun monen yksityisen taloudessa paikkakunnalla on puute palweluswäestä.</p>
        <p>Tähän lisäsiwät wielä muutamat, että köyhät itsekään tuskin tulisiwat olemaan niinkään tyytywäisiä, jos heidät waiwastupaan sullottaisiin siitä syystä, että he, muista mukawuuksista mainitsemattakaan, joutuisiwat 
          täällä eroon seurustelupiiristään, joka on heidän elämälleen kewennykseksi ollut, warsinkin omaisistaan he joutuisiwat erotetuiksi ja tuttawistaan, ja joutuisiwat he täällä sen sijaan peilailemaan itseään toinen 
          toisensa kurjuudessa ja raihnaisuudessa, ja senkin ilon he täällä menettäisiwät, että sellainen pieni hywäntekijöittensä awustaminen, mihin he heikoilla woimillaan pystyisiwät, ei olisi täällä enään mahdollinen, ja 
          kun tulee sairautta olisi täällä toinen toiselleen wain rasitukseksi y.m. sellaisia tilanteita, joita walistuneempien mielestä oli tarpeetonta tässä harkitakaan, koskapa nyt ei ollut kysymyskään siitä, kumpi 
          hoitotapa on sopiwampi, sekä että köyhät hoidetaan ruoduissa, waiko että rakennetaan waiwastupa, sillä olihan tässä harkittawa wain tämän wiimeksimainitun toimeensaamisesta.</p>
        <p>Siirryttiinkin sentähden pääasiaa lähemmäksi ja sowittiin siitä, että koska niin on Hänen Kuninkaallisen Majesteettinsa, armollisimman Kuninkaamme, tahto ja määräys alamaisilleen, että waiwastupia on rakennettawa, 
          täälläkin on otettawa sydämen asiaksi että aiwan ensi tilassa on hankittawa paikalle tarpeelliset rakennusaineet ja hirret ja Jumalan armon awulla, minkäänlaisia kustannuksia tinkimättä, käytäwä täyttämään kaikki, 
          mitä alamaiswelwollisuus waatii; mutta jos seurakunnalle sittenkin se erinomaisen korkea Kuninkaallinen armo suotaisiin että se saisi edelleenkin hoitaa köyhänsä tawallisessa ruotujärjestyksessä tai muulla sopiwalla 
          tawalla, tarwitsematta rakentaa waiwastaloa tai koota köyhät yhteisasuntoon, joka tuskin on mahdollistakaan toteuttaa sen wuoksi, että on hirsistä puute y.m. ja erittäinkin kun tämä seurakunta on niin wesien hajottama, 
          että kaiken sen kuljettaminen, mitä köyhät tarwitsewat, käy hywin waiwalloiseksi, ellei joinakin aikoina wuodessa suorastaan mahdottomaksikin niin olisi tämä sellainen asia, että siitä ei woitaisi kyllin korkeata 
          ylistystä lausuakaan; jonkawuoksi seurakunnalla olikin täysi luottamus siihen, että korkea-arwoisa läänin hywä hallitusmies ja maaherra, luonnollisen hywäntahtoisuutensa ja helläsydämisyytensä wuoksi, ei jättäisi, 
          mikäli asia hänen wirastonsa toimenpiteestä riippuu, tätä seurakunnan toiwomusta eteenpäin ajamatta, jossa tapauksessa seurakunnan jäsenet pidättäwät itselleen oikeuden itse sopia köyhäinsä hoitamistawasta ja ehdoista. 
          Kuitenkin siinä tarkotuksessa, että köyhät entistäkin paremmin hoidettaisiin, hoidettiinpa heitä sitten kummalla tawalla hywänsä, ja että wiranomaisetkin tietäisiwät, kuinka paljon ne tulewat maksamaan, niin päätettiin 
          wielä, että kunkin ruodun entisen jakotawan mukaan on maksettawa wähintäin 2 kappaa hywäksi puhdistettua wiljaa, mikä koko kirkkoherrakunnassa tekee 114 kappaa ja lisäksi särwintä, minkä werran sitä, wuodenaikoja myöten, 
          Jumalan armosta saada woidaan. Jos jossakin niskottelua hawaittaisiin niin on kirkon kuudennusmiesten tai ruunun palwelusmiesten wirka-apua käyttäen, kultakin hänen maksettawansa osuus otettawa.</p>
        <p>Näin päätettiin asia Jumalan siunaawan käden alla ja turwaten hänen apuunsa näin kristillisessä asiassa, ja tahdomme me tämän, mitä tapahtunut on, wahwistaa, panemalla nimemme ja puumerkkimme tämän alle.</p>
        <QuoteEnd className="symbolStyle"/>
        <p className="signatureSmall">U. P.</p>
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="Huomattawia tapahtumia.">
        <SubDivider className="dividerStyle" />
        <h4>Ryssät Hauhon kirkossa wuonna 1713.</h4>
        <br></br>
        <p className="initialCap">Syyskuun 29 päiwänä murtautui eräs, Hämeenlinnasta lähetetty, ryssäjoukkue Hauhon emäkirkkoon sakariston ikkunasta, kun heidän yrityksensä päästä sisään etelänpuoleisesta kirkon owesta ei 
          ollut onnistunut, waikka owi oli, minkä wieläkin woi todeta, yritetty hakata rikki kirweellä. Samassa tilaisuudessa owat nuo jumalattomat iskeneet miekalla kirkon etelänpuoleisessa eteisessä seisowaa Bartimeus 
          kuwaweistosta päähän, josta samoinkun owenmurtautumisyrityksestäkin, wielä merkit owat selwästi nähtäwissä.</p>
        <SubDivider className="dividerStyle" />
        <h4>Hauho näihin aikoihin pitkät ajat ilman pappia.</h4>
        <br></br>
        <p className="initialCap">Wuonna 1711 oli Hauhon seurakuntaan tullut kirkkoherraksi oman pitäjän poika, Mathias Martinius, joka oli syntyisin Tuuloksesta Pohjoisten Häppölästä ja joka, ennen tänne tulemistaan, oli 
          ollut Wiipurin kimnaasin lehtorina ja sittemmin Säkkijärwen pastorina. Kun ryssä wuonna 1713 otti haltuunsa Hämeenlinnan, pakeni Martinius, samoinkun seurakunnan kappalainen Salomon Stichaeustin, Ruotsiin ja jäiwät sinne 
          kappalainen ainaiseksi ja kirkkoherra wuoteen 1722, jolloin palasi takaisin ja, wanha kun oli, sai luowuttaa wirkatehtäwänsä pojalleen Martinius Martinille, josta sitten tuli hänen seuraajansa. Pappien ollessa täältä, 
          samoinkun monesta muustakin Suomen seurakunnasta, pakosalla, toimitti Hauholla papillisia tehtäwiä yliopistolainen Cristoffer Roos. Tuuloksen kappalainen käwi myös auttamassa.</p>
        <SubDivider className="dividerStyle" />
        <br></br>
        <p className="initialCap">Hauhon kaikkina aikoina luultawasti wanhin henkilö on ollut Torwoilan Wähäpään Yrjö isäntä, joka kuoli wuonna 1712 113 wuoden ikäisenä.</p>
        <SubDivider className="dividerStyle" />
        <h4>Penkkijaot.</h4>
        <br></br>
        <p className="initialCap">Penkkijaot kirkossa owat Hauholla, niinkuin kaikkialla muuallakin, olleet melkein kaikkein tärkeimpiä asioita. Monet riidat on niistä pitänyt riidellä ja wähäwäliä on niitä pitänyt uudestaan 
          toimittaa. Wuonna 1664 on sellainen toimitettu etupäässä maatilanomistajain arwon mukaan. Samoin wuonna 1733. Wuonna 1783 toimitetussa on manttaali otettu jaon perustukseksi ja tuli silloin penkkiä 2½ kyynärää manttaalia 
          kohti. Wielä wuonna 1800 toimitettiin jako, ja tuli silloin penkkiä 2 kyynärää manttaalin osaksi.</p>
        <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389178?page=2">Linkki artikkeliin</a>
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="Syyte loihtimisesta Luopioisissa.">
        <br></br>
        <p className="initialCap">Pöytäkirjan mukaan w. 1736 Nimismies Melart ilmiantoi, että itsellismies Matti Silweri Tuuloksen Juttilasta, joka on ollut Luopioisten kirkonkyläläisillä 
          karjapaimenena, olisi Filippuksen ja Jaakopin päiwänä wiime toukokuun ensimmäisenä, kun karjaa laitumelle laskettiin, harjoittanut leppäkepeillä ja karjaa kiertämällä n.m. jotakin 
          taikatemppuja, ja todistiwat myös jotkut saapuwille sattuneet niin olleen, niin että Silweri itsekään ei woinut sitä kieltää, mutta wäitti waan, että hän ei ollut muuta tarkoittanut, 
          kun wain noudattaa wanhoja tapoja, koska tämä oli esi-isillä totuttuna tapana ollut, ja hän, samoinkun muutkin, oli tullut niitä noudattaneeksi, pyytäen nyt, että tätä, hänen 
          tietämättömyydestään johtuwaa tekoa, ei pidettäisi niin kowin raskaana rikoksena. Kappelin pastori katsoi asian sen arwoiseksi, että se olisi maallisen oikeuden käsiteltäwäksi 
          lykättäwä, mutta seurakunta waati, että se nyt pitäjänkokouksessa päätetään, koskapa hänet on ensikerran tällaisesta tawattu ja kun lisäksi oltiin sitä mieltä, että hän on 
          yksinkertaisuutensa tähden siihen ryhtynyt, ja niinpä tultiinkin siihen yksimieliseen päätökseen, että Matti Silwerin on tämän rikoksensa tähden istuttawa kahtena sunnuntaina 
          peräkkäin jalkapuussa.</p>
          <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389178?page=2">Linkki artikkeliin</a>
      </Article>
      
      <Divider className="dividerStyle" />
      
      <Article titleText="Tuittupäinen lukkari Hauholla.">
        <h5>Pöytäkirjan mukaan.</h5>
        <SubDivider className="dividerStyle" />
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
        <SubDivider className="dividerStyle" />
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
        <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389178?page=2">Linkki artikkeliin</a>
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="Kauhistuttawa murha wuonna 1769.">
        <br></br>
        <p className="initialCap">Eräs seppä Wirsiälän kylästä, jonka tiedettiin koko ikänsä eläneen hiljaista ja säädyllistä elämää, on 2:na päiwänä joulukuuta tullut murhatuksi, murhaajana 
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
        <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389178?page=2">Linkki artikkeliin</a>
      </Article>
      
      <Divider className="dividerStyle" />
      
      <Article titleText="Uuden kirkonkellon hankkiminen Tuulokseen.">
        <h5>Wuonna 1771 tehdyn pöytäkirjan mukaan.</h5>
        <br></br>
        <p className="initialCap">Tuotiin julki usealta taholta lausuttu toiwomus, että seurakuntaan hankittaisiin uusi kirkonkello, suurempi kun mikään nykysistä, koskapa täällä ei ole sellaista 
          kelloa, joka kuuluisi lähimpäin kylien takana olewiin, wielä wähemmin kirkosta etäämmällä olewiin. Kokouksessa ei ollut ainoatakaan, joka ei olisi halusta sellaista toiwonut, mutta walittiwat 
          kaikki waan köyhyyttään ja kykenemättömyyttään, jonkawuoksi ehdotettiin, että seurakunta päättäisi käydä wapaehtoisilla keräyksillä, warojen ja tilanteitten mukaan, wuosittain kannattamaan, 
          joka wuotuinen erä otettaisiin kirkon tileihin tällaisella otsikolla: „Wapaehtoinen lahja uuden kellon saamiseksi” ja jotta saataisiin innostus asiaan suuremmaksi, olisi myös erikseen merkittäwä, 
          kuinka paljon kustakin kylästä wuosittain on annettu. Määrät laskettaisiin sitten kaikilta wuosilta yhteen, kunkin kylän lahja erikseen, ja kun kello sitten waletaan, kirjoitetaan keräyksen 
          tulokset sen laitaan ikuiseksi muistoksi ja kunniaksi lahjoittajille, jonka ylistystä lapset ja lastenlapset sitten weisaisiwat ja siunaisiwat sitten antelijaita lahjoittajia lahonneen 
          muistomerkin wieressä heidän haudallaan. Tätä wastaan ei pienintäkään wäitettä tehty, ja asia päättyi siis siihen, että papisto, kun kulkee saatawiaan kantamassa ja rippikuulusteluja 
          pitämässä, panee asian alkuun ja sitten wuosittain toimittaa keräystä, kunnes seurakunnan toiwomus uuden kellon saamisesta woidaan toteuttaa. Tähän korkein siunauksensa antakoon!</p>
        <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389121?page=2">Linkki artikkeliin</a>
      </Article>
      
      <Divider className="dividerStyle" />
      
      <Article titleText="Ruumisweisusta.">
        <h5>Pöytäkirjan mukaan wuodelta 1791.</h5>
        <br></br>
        <p className="initialCap">Ehdotettiin ruumisweisun toimittamiseen, joka täällä näihin asti on tapahtunut siten, että yksi tai useampi pappi käyden ruumissaaton edellä lukkarin kanssa, 
          laulawat jotakin kuoleman ajatuksiin johtawaa wirttä, mutta joka tapa on tarkotustaan wastaamaton, eikä ole omansa herättämään hartautta, koska kantajat ja surusaatto owat pitkän matkan päässä, 
          ja joka, pahan ilman sattuessa, on hywin waiwaloistakin, sellaista, tämän pyhän toimituksen tarkotusta, joka on muistuttaa eläwiä kuolewaisuudestaan ja waatia heitä walmistautumaan autuaalliseen 
          kuolemaan sekä myös saattaa wainaja siiwosti ja kunniallisesti hautaansa, paremmin wastaawaa muutosta, että papit, kun sitä halutaan, kulkewat surujoukon mukana ja toimittawat laulun wasta haudalla 
          ennen hautauksen toimittamista ja saawat tästä saman korwauksen, mitä, entistä tapaa noudattaenkin, on maksettu. Waikkakin yksi ja toinen toi esille jonkin wastawäitteen tätä wastaan, niin 
          suurempi osa läsnäolewista sen kuitenkin hywäksyi.</p>
        <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389121?page=2">Linkki artikkeliin</a>
      </Article>

      <Divider className="dividerStyle" />
      
      <Article titleText="Ankara riita saarnatuolin paikasta,">
        <h5>jossa herrat ja talonpojat owat tiukasti wastakkain.</h5>
        <SubDivider className="dividerStyle" />
        <br></br>
        <p className="initialCap">Kokouksessa <span className="boldStyle">8—3—1795</span> owat seurakuntalaiset yksimielisiä siitä, että saarnatuoli on uusittawa mutta kun joku herrasmiehistä ehdotti, että se 
          samalla muutettaisiin silloiselta paikaltaan, toisen pilarin kohdalta nykyiselle paikalleen, ensimmäisen pilarin kohdalle, minkä muuttamisen puolesta puheenjohtajakin selitti monen seikan puhuwan, ei osa 
          kansanmiehistä sanonut tähän suostuwansa, kun toinen osa taas, joka jäi paikalle kokouksen jälkeen, yhtyi herrain tuumaan. Asia jätettiin toiseen kertaan.</p>
        <SubDivider className="dividerStyle" />
        <p><span className="boldStyle">7—6—1796.</span> Asian käsittelemistä jatkettaessa, kertoo pöytäkirja, että saarnatuolin muuttamisasiasta nousi seurakuntalaisten kesken warsin tuima riitä ja suurin osa tahtoi, 
          että se pysytettäisiin entisellä paikallaan.</p>
        <SubDivider className="dividerStyle" />
        <p><span className="boldStyle">3—7—1796</span> pidetään taasen pitäjänkokous, puheenjohtajana Konsistoriumin määräyksestä warapastori Dawid Lönneström ja maaherran, parooni Johan Henrik Munckin saapuwilla 
          ollessa. Nyt annettiin annettiin sille osalle seurakuntaa, joka on saarnatuolin muuttamista wastaan, tilaisuus tuoda wastawäitteensä esille. Puheenjohtaja kehottaa aluksi yksimielisyyteen neuwoen wastustajia 
          antamaan perään, koska kerran kaikki herrasmiehet ja talonpojista ymmärtäwimmät owat katsoneet muuttamisen wälttämättömäksi, ja kun kirkko muutenkin on korjausten kautta tullut uudemman näköiseksi, mutta puhe 
          ei waikuta wastustajiin. Kysytään heidän syitään, ja kun he tuowat esiin wain sen, että perällä istuwat ja ne, jotka seisowat porstuassa, ei woi uudesta paikasta kuulla saarnaa ja kuulutuksia niin hywin kuin 
          wanhasta, niin selittäwät herrat ja osa kansasta uudelleen, mikä oli saanut heidät ehdotuksensa tekemään ja minkä wuoksi saarnatuoli jo olikin „wain koitteeksi joksikin aikaa” uuteen paikkaansa siirretty, ja 
          että ääni tästä paikasta päinwastoin paremmin kun entisestä pääsee kuulumaan suoraan kirkon etäisimpäänkin kolkkaan, kun saarnamiehellä ei nyt, kuten ennen, ole edessään kolmen kyynärän päässä lehteriä ja 
          pilaria. Maaherra ja Konsistoriumin asiamies, jotka tänään pyynnöstä oliwat kuunnelleet saarnaa noissa epäedullisimmissa paikoissa, wakuuttiwat todeksi tämän, huomauttaen wielä, että nyt ei saarnaajalla ole 
          kuten ennen melkeinpä puolet seurakuntaa selkänsä takana, waan on koko seurakunnalla nyt hän näkywissään, mikä tietenkin on suureksi eduksi. Sitäpaitsi on tämän muutoksen kautta saatu enemmän tilaakin kirkkoon, 
          8 penkkiä naisten puolelle ja 3 miehille. Wanha saarnatuoli on sitäpaitsi suorassa linjassa kirkon ja sakariston owien wälissä, joka oli seurauksena, kun owet olimat auki, kowa weto, mikä huomattawasti waimensi 
          äänen kuulumista.</p>
        <p>Wastustajat pitiwät kaikesta huolimatta, päänsä, sanoen, että olisi kowin arweluttawaa luopua wanhoista muodoista ja tawoista. Asia jäi Konsistoriumin ratkaistawaksi.</p>
      <SubDivider className="dividerStyle" />
        <p><span className="boldStyle">16-11-1796</span> tämän päätös tulikin ja esitettyjen perusteitten nojalla se määräsi saarnatuolin muutettawaksi, welwottaen kuitenkin alistamaan piirustuksen Kuninkaallisen 
          Majesteetin wahwistettawiksi.</p>
        <p>Mutta asia ei suinkaan pääty tähän. Konsistoriumin päätöksestä tehdään walitus KuninkaalliselLe Majesteetille, walittajina talolliset Erkki Kimpari, Mikko Kolari ja Erkki Perttula. Walituskirjaa ei 
          asiapapereissa ole, mutta walitukseen osaaottamattomain kuulustelemiseksi <span className="boldStyle">26-3-1797</span> pidetyn kokouksen pöytäkirja osottaa, että se on saanut mielet kuohuksiin. Siinä sanotaan: 
          „Seurakuntaa kehotettiin ensin tarkon kuulemaan”, kun walituskirja sille luettiin ensin ruotsin kielellä ja sitten suomeksi tulkittiin.</p>
        <p><span className="boldStyle">1)</span> Kysyttiin, josko koko seurakunta noiden kolmen walittajan kanssa tahtoi wäittää, että herrasmiehistä, joita tässä seurakunnassa on paljon, ei edellisessä kokouksessa muut 
          kun majori ja ritari, jalosukuinen herra Charpentier, tuomari, korkeasti kunnioitettu herra Leopold ja papisto, sekä myös rustitilallinen Mikko Kartano Matkantakaa, yhtyneet ehdotettuun saarnatuolin muuttamiseen: 
          tähän wastattiin meluten ja rähisten, että kyllähän kaikki herrasmiehet oliwat ehdotukseen suostuneet, mutta ei kansanmiehet.</p>
        <p>Tällä kohdalla muistutti Juho Hankala Hyömäestä, että Konsistoriumin olisi pitänyt määrätä jonkun toisen pappismiehen tätä kokousta pitämään ja jättää käyttämättä siihen seurakunnassa oleawaa, niin kun 
          allekirjoittanut on, katsoen että koko toimitus olisi keskeytettäwä, mutta kun minä en katsonut itseäni tämän muistutuksen kautta jääwätyksi, niin wäitti Mikko Kolari, että jos ei Kunink. Majesteetti ole määrännyt 
          tätä kokousta pidettämäksi, niin ei seurakunta ole melwollinen tässä lausuntoaan antamaan, koskapa wain Konsistoriumi oli tämän määrännyt. </p>
        <p><span className="boldStyle">2)</span> Sowittiin, ketkä owat antaneet walittajille toimeksi teettää Kunink. Majesteetille osotetut alamaiset walitukset ennenmainittua Konsistoriumin päätöstä wastaan, mutta melun 
          tähden, jonka kansa nosti, ei tätä woitu selwille saada, minkä wuoksi allekirjoittanut koetti, käsillä olewan manttaalikirjan mukaan toimitetun esillehuudon kautta, selwittää sitä, mutta tästä melu yltyi, että oli 
          aiwan mahdotonta saada mitään selwyyttä, ja kun monta kertaa oli hiljaisuutta waadittu, rähähti Mikko Kolari, että seurakunta ei rupea äänestämään, wäittäen, että kun he wiime kesänä korkeasti jalosukuisen herra 
          paroonin ja maaherran Munckin läsnäollessa oliwat tahtoneet äänestää ja sitä ei oltu silloin sallittu, niin ei se tule tapahtumaan nytkään. Tähän wastasiwat herra kapteeni Gustaf Leisten ja pataljoonansaarnaaja, 
          korkeasti oppinut herra maisteri Joh. H. Hallenberg, että nuo kolme jotka oliwat ottaneet puhuakseen koko seurakunnan nimessä ja nyt wielä estiwät seurakuntaa tuomasta esiin mielipidettään äänestyksen kautta, 
          olisiwat langetettamat lain säätämiin sakkoihin, koskapa owat walheita kantaneet waltaistuimen eteen ja nyt wielä koettawat niitä kannattaa.</p>
        <p><span className="boldStyle">3)</span> Kysyttiin, kuka se Holmberg on, joka oli walituskirjat kokoonpannut, johon walittajat wastasiwat, että hän on Hämeenlinnan lääninkanslian sihteeri; toiset sanoiwat, että hänellä 
          on Aktuarion arwonimi.</p>
        <p><span className="boldStyle">4)</span> Kysyttiin, josko muutkin kun walittajat, tahtowat, wastoin totuutta, wäittää, että tässä kirkossa on useampia kun yksi eteinen? Wastaus: toinen eteinen on sakaristo, koskapa on 
          tapana senkin kautta kirkkoon tulla ja sieltä mennä.</p>
        <p><span className="boldStyle">5)</span> kysyttiin: kuinka woidaan wäittää ehdotetulla uudella saarnatuolinpaikalla kuuden pilarin waimentawan saarnaajan äänen, koskapa uudella paikalla yksi pilari on hänen takanaan ja 
          toinen, sitä wastapäätä olewa, on saarnaajasta takawiistoon kokonaan hänen wasemmalla puolellaan, niinkun Tuomiotapituliin jätetystä Hauhon kirkon piirustuksestakin selmästi näkyy? Tähän walittajat wastasiwat, että he 
          oliwat selwittäneet kirkossa olewan kuusi pilaria, ja että aktuario Holmberg, joka on heidän ajatuksensa wäärin ymmärtänyt, itse wastatkoon erehdyksestään.</p>
        <p><span className="boldStyle">6)</span> Ylioppilas Paul Gabriel Herkepaeus, ollen tilanomistaja seurakunnassa, wäitti, että hän woisi laillisesti toteennäyttää, että useat kansasta wiimekesäisessä kokouksessa oliwat 
          selwittäneet olemansa warsin tyytywäisiä ehdotettuun saarnatuolin muuttamiseen, ja tulee tämä wastaisuudessa todistettawaksi, jos tarwitaan. Waranimismies Sarbäck selitti, että hän en milloinkaan ollut hywäksynyt 
          walittajain wehkeitä, wielä wähemmin kehottanut heitä walituskirjoja teettämään. Samaa wäittiwät myös rustitilain osakkaat Erkki Wuolijoki ja Juho Flintman kirkonkylästä sekä jahtiwouti Aatami Erkinpoika kirkonkylän 
          Heiskalasta.</p>
        <p>Näin toimitettua, kehotti allekirjoittanut kansaa walitsemaan muutamia edustajia olemaan saapuwilla pöytäkirjan tarkastuksessa Pappilassa, sekä sitä siellä allekirjoittamaan, mutta tästä kansa kieltäytyi, jonka wuoksi 
          tämän allekirjoittawat wain herrasmiehet ja yllämainitut kolme kirkonkylän talollista.</p>
        <p className="signatureSmall">Henr. Boisman.</p>
        <SubDivider className="dividerStyle" />
        <p>Kuninkaallinen Majesteetti hylkäsi sittemmin walituksen aiheettomana ja määräsi saarnatuolin uuteen paikkaan muutettawaksi. Uusi kaunis saarnatuoli, jonka hywäksi pitäjän herrat, ja warsinkin tohtori Bonsdorff oliwat 
          lahjotuksia tehneet, ja jonka kuwanweistäjä Johan Sahlbom oli muowaillut, maalari Wijkberg maalannut ja peilimestari Söderqwist kullannut, wihittiin tarkotukseensa 9:nä sunnuntaina kolminaisuudesta, 21 päiwänä heinäkuuta 
          1799, jolloin mainittu tohtori, seurakunnan ijäkäs rowasti, saarnasi wiimeisen kerran seurakunnalleen.</p>
        <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389121?page=2">Linkki artikkeliin</a>
      </Article>
      
      <Divider className="dividerStyle" />
      
      <Article titleText="Toimenpiteitä siweettömyyttä wastaan.">
        <SubDivider className="dividerStyle" />
        <h5>Wuonna 1761 tehdyn pöytäkirjan mukaan:</h5>
        <br></br>
        <p className="initialCap">Kysyttiin seurakunnalta, miten on kyläkunnissa yhteisten rukousten pitämisen laita, noudatetaanko lukukinkereillä säädettyjä toimenpiteitä? Tähän wastattiin, 
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
        kruunun nimismiehelle, joka wiipymättä „ex nobili officio” asian korjannee. Sakot jaetaan kolmia, nim. kirkon, pitäjän köyhien ja kuudennusmiesten kesken. </p>
        <SubDivider className="dividerStyle" />
        <h5>Wuonna 1778 päätti kirkkoneuwosto:</h5>
        <br></br>
        <p className="initialCap">Kirkooneuwosto katsoi tarpeelliseksi tämän paheen poistamiseksi määrätä sakot niille, jotka pahettaan jatkawat seuraawasti:</p>
        <p><span className="boldStyle">1:ksi.</span> Wanhemmat ja talolliset, jotka salliwat lastensa ja palwelijoittensa oman tahtonsa mukaan pyhä- ja juhlapäiwinä iltaisin lähteä syntistä ja 
          pahentawaa elämää harjoittamaan, wetäkööt, welwollisuuksiensa laiminlyömisestä, sakkoa 9 taalaria 24 killinkiä.</p>
        <p><span className="boldStyle">2:ksi.</span> Jokainen lapsi tai palwelija, joka tawataan yhdestä tai toisesta wallattomuudesta tai huikentelewaisuudesta pyhä- ja juhlapäiwänä, maksakoon 
          6 taalaria 16 killinkiä.</p>
        <p><span className="boldStyle">3:ksi.</span> Salpietari-kuohuttajat, reserwiläiset ja muut, jotka eiwät ole talollisia, maksakoot kukin sellaisista rikkomuksista 24 killinkiä</p>
        <p><span className="boldStyle">4:ksi.</span> Joka sallii huoneissaan pitää sopimattomia kokouksia tai luowuttaa ne juominkien, tanssien ja korttipeluun harjoittamiseksi, maksakoon sakkoa 
          yhden waltioriksin. Sakot haetaan rikkojilta ulos ja jos waroja ei ole, istukoon hän yhden sunnuntain jalkapuussa.</p>
        <SubDivider className="dividerStyle" />
        <h5>Wuonna 1792 päätetään seuraawaa:</h5>
        <br></br>
        <p className="initialCap">Kyläkuntiin asetetaan katsannusmiehiä walwomaan nuorison elämää ja annetaan näille seuraawat ohjeet:</p>
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
        <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389136?page=2">Linkki artikkeliin</a>
      </Article>
      
      <Divider className="dividerStyle" />
      
      <Article titleText="Yhteinen julistus.">
        <h5>1785</h5>
        <p className="initialCap">Ehkä päälletarkoitus Krouwien asettamisen kanssa on se, että niissä löydyisi tarpellista ylöspitämistä erinomaittain matkustawaisille; osotta kuitengin joka 
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
        <p className="signatureSmall">Hämenlinnas Maan Cansellisa sinä 25 p. Heinä Kuusa 1785</p>
        <p className="signatureSmall">Th: de Bruce</p>
        <p className="signatureSmall">Joh. Walheim</p>
        <br></br>
        <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389187?page=2">Linkki artikkeliin</a>

      </Article>
      
      <Divider className="dividerStyle" />
      
      <Article titleText="Köyhyys Hauholla kroonillinen tauti.">
        <SubDivider className="dividerStyle" />
        <h5>1798</h5>
        <p className="initialCap">Wuonna 1798 on Turun Yliopistorakennuksissa toimitettu  korjaustöitä ja, waroja kun puuttuu, on Kunink. Majest. wedonnut seurakuntiin. Pitäjänkokouksessa 
          täällä wastataan, että seurakunnan kassat owat tyhjät. Kun wedottiin yksityisiin, niin „yleinen äänettömyys” ja sitten walittelut ajan kalleudesta osottiwat kyllin selwästi, että kukaan 
          ei ollut, waikka asia säälittikin ja tahtoakin olisi ollut, tilaisuudessa mitään lahjoittamaan.</p>
        <SubDivider className="dividerStyle" />
        <h5>1806</h5>
        <p className="initialCap">Wuonna 1806 olisi kirkko pitänyt Konsistorion kehotuksesta palowakuuttaa, mutta seurakunnan jäsenet eiwät tässä muuta woineet, kun nöyrimmässä alamaisuudessa 
          pitää ehdotusta todistuksena esiwallan isällisestä huolenpidosta, jonka he uskollisina alamaisina hywäksyiwätkin, mutta owat seurakunnan warat nykyään niin pienet, että ne eiwät korjaamatta 
          siedä mitään wähentelemisiä eiwätkä riitä edes siihen maksuun, mikä heti olisi suoritettawa, ja seurakunta ei nyt parhaalla tahdollakaan ole tilaisuudessa tuota puutetta keräyksillä poistamaan, 
          sillä sen on tänä wuonna ollut kestettäwänä kowa katowuosi.</p>
        <SubDivider className="dividerStyle" />
        <h5>1827</h5>
        <p className="initialCap">Wuonna 1827 olisi hallituksen kuulutuksen johdosta ollut päätettäwä kätilön palkkaamisesta kuntaan. Tähän antoiwat seurakuntalaiset seuraawan yksimielisen 
          wastauksen: Koska Majesteetti armollisesti jättää alamaistensa wapaan harkinnan waraan ottaa tai olla ottamatta kätilöä, niin toiwoisiwat Hauhon pitäjän miehet saada kieltäytyä tutkinnon
          suorittanutta kätilöä ottamasta, siksi että heillä on täällä, miltei joka kylässä, käytettäwinään joskaan ei tutkinnonsuorittaneita niin ainakin kokeneita ja luotettawia apulaismummoja 
          (jordegummor), jotka useinpa aiwan ilmaiseksikin tai ainakin wähäpätöisestä wapaaehtoisesta maksusta, owat auttamassa, jos waan heidän puoleensa, tarpeen sattuessa, käännytään. Sitäpaitsi 
          pitäjän miehistä näytti selwää olewan, että tutkinnonsuorittaneen kätilön ottaminen ja palkkaaminen tuottaisi heille aiwan liian suuria kustannuksia, jollaisia he eiwät näin ahtaina 
          aikoina pystyisi suorittamaan; muuten tahtoiwat Hauhon pitäjän miehet sywimmässä alamaisuudessa lausua julki kiitollisuutensa Hänen Majesteetilleen siitä, että hän pitää näin hellää huolta 
          uskollisten alamaistensa onnesta ja menestykestä.</p>
        <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389164?page=2">Linkki artikkeliin</a>
      </Article>
      
      <Divider className="dividerStyle" />
      
      <Article titleText="Ensimmäinen yksityisen teettämä kiwirakennus Hauholla.">
        <h5>Pöytäkirjassa 15. 10. 1801 luetaan:</h5>
        <br></br>
        <p className="initialCap">Koska werotilallinen täällä kirkonkylässä Aatami Heiskala omistamansa tilan hoitamisessa sekä maanwiljelykseen että rakennuksiin nähden, on osottanut 
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
        <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389187?page=2">Linkki artikkeliin</a>
      </Article>

      <Divider className="dividerStyle" />
      
      <Article titleText="Lukutaidon edistämis-yrityksiä.">
        <SubDivider className="dividerStyle" />
        <h5>Wuonna 1758 tehdyn pöytäkirjan mukaan:</h5>
        <br></br>
        <p className="initialCap">Reserwisotilas Juho Hannunpoika Uudenkylän Uotilasta, 27 wuoden ikäinen, tuomittiin Kuninkaallisen asetuksen mukaan sakkoihin senwuoksi, että hän on neljän wuoden 
          ajan, kehotuksista ja warotuksista huolimatta, laiminlyönyt sisäluwun opettelemisen, eikä osaa ulkoa kristinopin yksinkertaisimpia kappaleitakaan, jonka wuoksi häntä ei ole woitu laskea pyhälle 
          Ehtoolliselle, jota ei wielä ole kertaakaan nauttinut. Sakkomäärä oli kuusi taalaria kruununrahaa neljältä wuodelta, ja ostettiin näillä rahoilla 8 kappaletta katkismuksia, jotka jaettiin köyhille 
          lapsille.</p>
        <SubDivider className="dividerStyle" />
        <h5>Wuonna 1762 pöytäkirjan mukaan:</h5>
        <br></br>
        <p className="initialCap">Kun on joutunut mielipahakseen panemaan merkille, että useat kansanlapsista ja muistakin, huolimatta lukusioilla ja muissa tilaisuuksissa annetuista kehotuksista, hywin 
          myöhään, wasta kaksikymmenwuotisiksi jouduttuaan ja siitä ylikin, opettelewat lukemisen taitoa, elleiwät jätä sitä kokonaan tekemättäkin, josta kaikesta ei woi muuta seurata, kun että näiden 
          kristillisyyden taito jää mahdollisimman pieneksi, niin ehdotettiin nyt määräwuodet, joihin mennessä sekä nuorempien että wanhempien lasten on lukemaan opittawa ja hankittawa itselleen tietoja 
          kristinopistaan seuraawasti: nuorten ja alkawien on wiimeistään kahdeksan wuoden ikään opittawa tawaamaan aapiskirjansa sisältä ja ulkoa, ja missä näin ei ole tapahtunut, sakotettakoon wanhempia, 
          joiden welwollisuutena olisi ollut asiasta huolta pitää, heidän huolimattomuudestaan ja welwollisuutensa laiminlyömisestä yhdellä hopeataalerilla kutakin lasta kohti, mutta jos on siwuutettu kahdeksan 
          wuoden ikä ja päästy 15 wuoden ikään, johon mennessä olisi ollut opittawa katkismus ja wirsikirja, niin määrättiin lapsille, jotka oliwat olleet wastahakoisia ja antaneet ajan kulua huolettomuudessa, 
          rangaistukseksi jalkapuussa istumista tai kahden taalerin rahasakko, kaikki riippuen asianhaaroista. Tätä wastaan ei seurakunnalla ollut mitään muistuttamista, waan oli se jokaisen mielestä kohtuullista 
          ja terweellistä.</p>
        <SubDivider className="dividerStyle" />
        <h5>1771</h5>
        <br></br>
        <p className="initialCap">Wuonna 1771 on sama asia esillä Tuuloksen pitäjänkokouksessa. Kun siinä on osin edelläolewa Hauhon kokouksen päätös malliksi luettu, niin jatkuu pöytäkirja seuraawaan tapaan: 
          „Tätä kuunneltiin tarkkaawina ja kaikkien läsnäolewien joukossa oli wain yksi ainoa, joka teki sellaisen wäitteen, että tässä on liian paljon waadittu kahdeksannella wuodellaan olewalta lapselta, warsinkin kun, 
          sanoi hän, on lapsia, jotka tähän ikään eiwät wielä ole oppineet puhumaankaan niin selwästi, kun pitäisi. Kun tämä puhe oli aiwan wailla perustusta, niin ei siihen muuta huomiota kiinnitettykään, kun annettiin 
          sen wain käydä todistuksesta siitä, kuinka meidän turmeltu luontomme on taipuwainen itsepuolusteluun, kun sielumme menestymisen asiat owat kysymyksessä, ja tätä tehdessään käyttää hywäkseen kaikkien mahdottomimpiakin 
          werukkeita. Käytiin siis asiaan ja esitettiin, että täkäläinen seurakunta ryhtyisi emäseurakunnan päätökseen ja määräisi, että lapsen kahdeksan wuotta täytettyään, on osattawa aapisensa kaikilta kohdiltaan ja 
          wiisitoista wuotta täyttäneen nuorison on osattawa katkismuksensa kysymyksineen ja selityksineen: muussa tapauksessa olkoon hän edellämainitun sakon alainen, niin että kahdeksanwuotisesta lapsesta maksetaan 1 
          hopeataaleri katkismusten ostamiseksi köyhille lapsille, ja sen joka on täyttänyt 15 wuotta, eikä wielä osaa katkismustansa, on istuttawa yksi pyhä jalkapuussa. Kun tähän jalkapuurangaistukseen nähden useat tahtoiwat 
          pantawaksi sen ehdon, että sitä saisi käyttää wain mieswäelle, mutta ei naiswäelle, koskapa tällainen häpeä saattaisi näiden ruumiillisen hywinwoinnin kehitykselle tuottaa huomattawaa ja wakawaa wahinkoa, niin 
          määrättiin tämänwuoksi yksimielisesti, että nuoriso, joka on säännöstä wastaan rikkonut, sowittakoon rikoksensa, pojat istumalla yhden pyhän jalkapuussa, mutta tytöt suorittamalla ensi kerralla yhden hopeataalerin, 
          toisella kaksi j.n.e. Kuudennusmiehet määrättiin, pappien heille asiasta ilmoitettua ja sitä waatiessa, panemaan tämä täytäntöön.”</p>
        <p><span className="boldStyle">Pöytäkirjan mukaan wuodelta 1771:</span></p>
        <p>„Kirkkoherra kysyi, mitä olisi tehtäwä noille monille laiskanlukijoille seurakunnassa ja walitti sitä, että kristittyjen keskuudessa kaswaa nuorisoa, joka tietojensa wajawuuteen nähden on paremmin luettawa pakanain 
          kuin walistuneitten kristittyjen joukkoon kuuluwaksi, ja waikka näitä, kutakin erikseen, on wakawasti neuwottu, eiwät ole osottaneet parannuksen merkkiäkään, waan siitäkin huolimatta, että useat heistä jo owat päässeet 
          täysi-ikäisiksi, ja kaikki owat yli sen ikämäärän, mikä pitäjänkokouksessa useita wuosia sitten säädettiin siksi, jolloin kaikkien erotuksetta on osattawa lukea kristinoppinsa pääkappaleet, he käywät wain yhä 
          uppiniskaisemmiksi ja owat moneen kertaan jääneet pois sekä yleisistä että yksityisistä kuulusteluista. Tämän johdosta kysyttiin, eikö H. Majesteettinsa armollista asetusta 4 p:ltä joulukuuta 1765, joka säätää, 
          että tällaiset wastahakoiset lukijat owat, kirkkoneuwoston kanssa asiasta neuwoteltua, tuomittawat jalkapuuhun yhdeksi tai useammaksi pyhäksi tai erinäisiin jatkorangaistuksiin pitäjän köyhien hywäksi, olisi 
          sowellutettawa tällaisiin tapauksiin ja pantawa täytäntöön näihin laiskoihin ja huonoihin lukijoihin nähden? Ennenkuin seurakunta antoi tähän wastauksen, ilmaisi papisto muutamien huonolukuisten mimet, niinkuin nikkari 
          Mikko Juhonpojan Kokkilasta, Juho Simonpojan Mustilasta, rengin Juho Jaakonpojan ja naisen Liisa Simontyttären Ilmoilasta sekä wielä rakuunan Kustaa Juhonpojan Kiwikolta y.m., jotka kaikki seurakunta sen pahennuksen 
          wuoksi, minkä oliwat saaneet aikaan laiskuudellaan, katsoi täysin ansiokkaiksi istumaan yhden pyhän Jumalanpalweluksen ajan jalkapuussa, johon heidät on ensi sopiwassa tilaisuudessa toimitettawa, joko yksitellen tai 
          useampia yhtaikaa, miten waan papisto parhaaksi katsoo, mutta mitä rakuunaan tulee, niin esitti korpraali v. Krämer, joka on alaupseerina samassa komppaniassa, missä tämä rakuunakin palwelee, kysymyksen että eikö hänelle 
          woitaisi sallia, toimittaa tämä omassa komppaniassa siihen rangaistukseen, jonka sotalaki säätää. Tähän wastattiin, että koska sotilaat, niinkuin H.A.M:nsa armollinen asetus 28. 9. 1685 ja 28. 10. 1695 selwästi osottaa 
          yhtäpitämästi H.A.M:nsa päätöksen kanssa 10. 3. 1719 § 39, owat yleisen lain alaisia yhdessä muiden waltakunnan alamaisten kanssa ja heidän on oltawa pitäjänsä papeille kuuliaisia niissä asioissa, jotka koskewat heidän 
          autuuttaan, eikä kellään upseerilla ole oikeutta heitä tästä wapauttaa, pitäjänkokous ei uskalla, koska se alamaisesti kunnioittaa näin selwää lakia, suostua herra v. Krämerin edellämainittuun ehdotukseen rakuuna 
          Kustaa Juhonpojan wapauttamiseksi jalkapuurangaistuksesta, waan on asianomaisen komppaniankin, jos tarwetta on, täytettäwä H.K.M:nsa armollisin tahto tässä kohti.”</p>
        <SubDivider className="dividerStyle" />
        <h5>Pöytäkirjan mukaan wuodelta 1788:</h5>
        <br></br>
        <p className="initialCap">Kun walitettawa kokemus lukusioilla on osottanut, että hywinkin monet nuorisosta, waikka owatkin päässeet siihen ikään, jolloin kristinoppi jo pitäisi olla opittu, siitä huolimatta on 
          hawaittu hywinkin taitamattomiksi sekä sisä- että ulkoluwussa, ja kun tämän epäkohdan korjaamiseksi on ryhdytty siihen toimenpiteeseen, että, sopiwan ajan tultua, näitä on kutsuttu tänne kirkonkylään saamaan opetusta 
          lukkarilta papiston walwonnan alla, josta asiasta heille on silloin paikalla ilmoitettu ja wielä, kun muilta toimilta on tilaa saatu, kuulutukselle saarnatuolista heitä kutsuttu määrättynä aikana nyt Pääsiäisen 
          jälkeen saapumaan, niin on wain muutamia saapunut, eikä niilläkään ole ollut ewästä matkassaan, jonkawuoksi puheenjohtaja ehdotti, että wanhemmat rahasakoilla pakotettaisiin welwollisuuksistaan huolta pitämään ja 
          niskoittelewille lapsille, jotka owat määräikään päässeet määrättäisiin jalkapuurangaistus. Pitäjänkokous yhtyi yksimielisesti tähän ja ulotti saman sakkomäärän myös niihin wanhempiin ja talollisiin, jotka eiwät talossaan 
          olewia laiskalukijoita muistuta, kehota ja lukemaan wakawasti waadi.</p>
        <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389201?page=2">Linkki artikkeliin</a>
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="Järjestyksen walwonnasta Jumalanpalweluksissa.">
        <SubDivider className="dividerStyle" />
        <h5>Wuonna 1736 sattui Luopioisten kirkossa häiriö, josta pöytäkirja kertoo seuraawaa: </h5>
        <br></br>
        <p className="initialCap">Nimismies Melart ilmiantoi, että sotilas Yrjö Estman Miehoilan kylästä oli wiime Kynttilänpäiwänä, kun apulaispappi Ericus Procopaeus parhaillaan ripitti kansaa sakastissa, ollut juowuksissa, 
          ja Luopioisten kirkon lehterillä saanut aikaan pahennusta sopimattomilla tempuilla ja huutamalla: „kamratit käytäis pois juoman, niin toist on, jo pappi meni pilon y.m.” jonka jälkeen hän meni ulos eikä enää Jumalanpalwelukseen 
          tullut. Tämän johdosta kuultiin muita seurakuntalaisia ja erittäin niitä, jotka samassa tilaisuudessa oliwat olleet lehterillä, ja todistiwat nämä, että niin oli tapahtunut; ja kun asia oli sen laatuinen, että sitä ei woitu 
          pitäjän kokouksessa päättää, otti seurakunnan pastori toimittaakseen, että kruununnimismies Anders Herkepaeus tulisi wiran puolesta ajamaan sen maallisessa oikeudessa, mikä sitten tapahtuikin, ja sai sotilas tästä rikoksestaan 
          18 paria raippoja.</p>
        <SubDivider className="dividerStyle" />
        <h5>Hauhon pitäjänkokouksen pöytäkirjassa 10. 9. 1797 kerrotaan seuraawaa:</h5>
        <br></br>
        <p className="initialCap">Minulle on ilmoitettu, että Jumalanpalweluksessa kaksi wiikkoa sitten, talollisen poika Matti Jaakonpoika Humpolta ja torpan poika Erkki Antinpoika, molemmat Ilmoilan kylästä, oliwat heittäneet 
          rahoja miesten lehteriltä naisten lehterille ja oliwat he tämän johdosta nyt kutsutut kuultawiksi. Nämä tunnustiwat tekonsa, mutta wäittiwät, että Aikkolan Innalan nuorin tytär, Anna, oli asian alkanut, minkä todistajatkin 
          wakuuttiwat, ja päätettiin, että heidän on jonakin lähisunnuntaina, muille warotukseksi ja ojennukseksi, istuttawa jalkapuussa.</p>
        <SubDivider className="dividerStyle" />
        <h5>Luopioisten pöytäkirjassa 3. 9. 1770:</h5>
        <br></br>
        <p className="initialCap">Sen tawan wastustamiseksi, mikä joillakin nuorilla näyttää olewan, että he nimittäin Jumalanpalweluksen aikana, kun owat kirkkoon tulemisessaan myöhästyneet, ja etsiwät itselleen paikkaa, hyppiwät 
          yli penkkien, päätettiin, että se, joka tästälähin uskaltaa näin tehdä, maksakoon sakkoa ensi kerralta 3 taalaria kuparirahaa, toiselta kerralta 6, mutta kolmannelta kerralta istukoon jo täydellä syyllä jalkapuussa.</p>
        <SubDivider className="dividerStyle" />
        <h5>Pöytäkirjassa 12. 3. 1780 luetaan:</h5>
        <br></br>
        <p className="initialCap">Kun on mielipahakseen pannut merkille ja siitä on walituksiakin tehty, että useat nuoresta sukupolwesta, poikia ja nuoria miehiä, owat niin ajattelemattomia ja huonotapaisia, että he miesten 
          lehterillä tässä Herran huoneessa, Jumalanpalweluksen aikana parweilemat, ääneensä puhuwat ja käyttäytywät pahennusta aikaansaaden m.m. niin, että tuppautuwat ja työntäytywät ensimmäiseen lehteripenkkiin siinä määrin, että 
          makaawat siinä kahdessa ja kolmessa kerroksessa toistensa päällä ja sen ohessa työntäwät ja kolhiwat toisiaan, saaden toiset näkijöistä syntiseen hymyyn, toiset tassen sopimattomasti kiiwastumaan; ja on tästä jo ollut 
          seurauksena, että kaksi ensimmäisten jälessä olewaa penkkiä on särjetty ja kaadettu kumoon; niin ehdotettiin seurakunnan wanhimmille, että yksi kuudennusmies pantaisiin joka pyhä- ja juhlapäiwäksi lehterille 
          Jumalanpalweluksen alusta sen loppuun asti pitämään silmällä, että täällä kukin kuuntelisi Jumalan sanaa hiljaisuudessa. Jos hän täällä huomaisi sellaisia joilla on jotakin sopimatonta tekeillä, ja warsinkin tahtowat tunkentua 
          ensimmäiseen penkkiin senkinjälkeen kun se jo on niin täysi, että siihen ei enään useampia hywin sowi, niin olisi kuudennusmiesten ilmiannettawa ne papistolle jotka sitten saatetaan siihen rangaistukseen ja sakkoon, minkä 
          heidän rikoksensa laatu ansaitsee. Ja kun seurakunnan wanhimmat yksimielisesti tähän ehdotukseen yhtyiwät, niin määrättiin kuudennusmiehille, että heidän on kaikella huolella tätä asiaa edistettäwä ja noudatettawa keskenään 
          sellaista wuorottelua, että kukin täyden kuukauden ajan yhtämittaa joka pyhäpäiwänä saapuu lehterille ja walitsee itselleen siellä sellaisen paikan, että hän siitä woi, mikäli mahdollista, nähdä yli koko lehterin. Alkuun 
          pankoon asian rustilallinen Matti Toppola kirkonkylästä j.n.e.</p>
        <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389173?page=3">Linkki artikkeliin</a>
      </Article>

      <Divider className="dividerStyle" />
      
      <Article titleText="Kirkkohaudoista.">
        <p className="initialCap">Tapa haudata ruumiit kirkon permannon alle on Hauholla, niinkuin muuallakin, tuottanut monenlaisia waikeuksia. Näiden laatu selwiää seuraawista pöytäkirjanotteista:</p>
        <SubDivider className="dividerStyle" />
        <h5>W. 1762</h5>
        <p className="initialCap">Koska kaikenkaltaiset ihmiset, kunhan heillä wain on wähän waroja, toimittawat ruumiinsa kirkkoon haudattawiksi, ja kun kirkon alusta jo on niin täyteen ahdettu, että ruumisarkut, melkeinpä 
          joka kohdalla, owat kolmessa ja neljässä kerroksessa toistensa päällä, ja wain hywin ohueen mullalla peitetyt, jonka wuoksi kirkko, warsinkin kesäaikana, on siinä määrässä ruumiinhajun eli löyhkän wallassa, että on mitä 
          tukalinta siellä istua, ja kun wielä kirkon penkit ja permanto hautausten tähden alituisesti siirretään paikoiltaan ja saatetaan epäjärjestykseen, niin esitettiin seurakunnalle, että, tähän kaikkeen nähden, määrättäisiin 
          kaikki muut ruumiit haudattawiksi kirkkomaahan, paitsi wanhain ja kunniallisten isäntäin ja emäntäin, kunnes, tätä ennen kirkkoon haudatut, ruumiit edes jossain määrin ennättäwät maatua. Tätä wastaan ei kellään ollut mitään 
          muistuttamista, waan oli ehdotus kaikkein, sekä herrain että kansanmiesten, mielestä hywä ja hyödyllinen.</p>
          <SubDivider className="dividerStyle" />
          <h5>W. 1771</h5>
          <p className="initialCap">Seurakunnalle huomautettiin kirkkohautojen tilasta. Niiden joukossa oli Hahkialan hauta ainoa, joka on riittäwästi katettu. Muiden päällä on wain joitakin irtonaisia waatekappaleita, ja kun 
            tämä on wastoin asetuksia, niin huomautettiin seurakunnalle, että sen olisi tarkoin kiinnitettäwä huomiota tähän asiaan, koska tarkotuksena on yleisen terweyden tilan edistäminen. Päämäärä ei ole wielä sillä saawutettu, 
            että talollisia on kielletty hautaamasta ruumiitaan kirkkoon, elleiwät tahdo kaiwaa hautoja lain määräämään sywyyteen asti ja sitten peittää ne riittäwästi mullalla, waan on myös niiden, joilla on muurattuja hautoja, 
            paremmin huolehdittawa näiden kunnollisesta peittämisestä, jos muutoin tahtowat pidättää itselleen oikeuden niihin edelleen ruumiitaan haudata. On mitä tähdellisin syy walwoa tämän welwollisuuden noudattamista, sillä 
            useissa haudoissa on mätänemistilassa olewia ruumista, jotka aiheuttawat koko seurakunnalle tartunnan waaran, ja ken wähänkin tietää, mitä saastutettu ilma woi saada aikaan, hänellä on täysi syy uskoa, että juuri tässä on 
            syy siihen, miksi yksi ja toinen on kirkossa tullut sairaaksi, ja se seikka, ettei näitä tapauksia ole ollut useampia, on wain todistuksena siitä, miten Herra walwoen pitää huolta palwelijoistaan ja palwelijattareistaan. 
            Asiasta neuwoteltua, tehtiin lopulta päätös, että jokaisen asianomaisen, jolla on huonossa kunnossa olewa hauta, on ensi tilassa meneteltäwä sen kanssa lainmukaisesti; lisäksi päätettiin että se, joka ei wuoden sisään 
            tästä lukien ole sitä tehnyt, menettäköön oikeutensa kirkkohaudan omistamiseen ja tulkoon kirkko hänen sijaansa sen omistajaksi, ja olkoon se welwollinen omaksi hywäkseen tämän tehtäwän täyttämään. Tähän yhtyiwät kaikki 
            läsnäolleet.</p>
          <SubDivider className="dividerStyle" />
          <h5>W. 1777</h5>
          <p className="initialCap">Otettiin käsiteltäwäksi tärkeä kysymys hautojen kunnostamisesta. Esitettiin, että Kunink. kirjeen mukaan 22. 3. 1740 kukaan ei saa haudata ruumiita kirkkoon, ellei hauta ole muurattu ja tiiwiillä 
            holwilla katettu. Nyt owat kyllä useat haudat tässä kirkossa muurattuja, mutta holwikatto puuttuu, eikä sitä useimmassa tapauksessa woida tehdäkään, koska siten tulisi tilan ahtautta toisille. Tämän wuoksi ehdotettiin, että 
            kaikkien, joilla on muurattu hauta kirkossa, olisi näytettäwä toteen omistusoikeutensa sellaiseen hautaan joko esittämällä asianomainen wahwistuskirja tai muulla tawalla, sitäkin suuremmalla syyllä, kun jo wuonna 1771 on 
            päätetty, että joka ei wuoden sisään ole pannut hautaansa lailliseen kuntoon, on oikeutensa siihen menettänyt ja on se joutunut kirkon wapaasti käytettäwäksi.</p>
          <SubDivider className="dividerStyle" />
          <h5>W. 1770 Luopioisissa.</h5>
          <p className="initialCap">Esitettiin, että koska Kunink. asetuksen mukaan ei enää ole lupa haudata ruumiita kirkkoon muuten kuin holwattuihin hautoihin, niin mihin toimenpiteisiin olisi ryhdyttäwä, että saataisiin korwatuksi 
            se tappio, mikä tästä huomattawien tulojen menettämisestä johtuu kirkolle, ja ehdotettiin, että koska hautaaminen holwattuihin hautoihin on sallittua, kun näin menetellen, jos haudat kunnollisesti tehdään, ei tuoteta huomattawampaa 
            haittaa eikä wahinkoa terweydelle, kirkko rakennuttaisi muutamia sellaisia, ja huolehtisi niistä määrättyä korwausta wastaan käytettäwiksi, ja päätettiin, että tämä ehdotus, koska se näytti korwaawan kirkolle muuten tulewan 
            wahingon, toteuttaa ainakin siinä määrin, että yksi hywin holwattu hauta rakennetaan kirkon waroilla ja luowutetaan se korwausta wastaan niiden käytettäwäksi, jotka sitä haluawat.</p>
          <SubDivider className="dividerStyle" />
          <h5>Haudoista kirkolle tulewan korwauksen suuruus selwiää seuraawasta pöytäkirjasta:</h5>
          <h5>W. 1739.</h5>
          <p className="initialCap">Kirkon isännöitsijä, herra wänrikki Krämer ilmoitti, että hänellä ja aliluutnantti Otto Christoffer Schulmannilla oli aikomus lunastaa itselleen hautapaikka kirkossa herraswäen penkkien alla miesten 
            puolella, jonka hän mainitun luutnantin kanssa aikoi kaiwattaa ja muurauttaa, pyytäen, että seurakunta tähän suostuisi ja samalla määräisi, miten suuri korwaus heidän olisi tästä hautapaikasta kirkolle suoritettawa? Tähän wastattiin, 
            että näin kohtuulliseen pyyntöön ei woitu eikä tahdottukaan wastata kielteisesti, mutta tästä suoritettawan korwauksen suuruutta ei kansa sanonut osaawansa määrätä, waan jätti sen puolen asiassa puheenjohtajan harkinnan waraan. 
            Kuitenkin sanoi samassa lautamies Heikki Kallenpoika Kirkonkylästä, että heidän olisi maksettawa yhteensä 30 kupariplootua. Puheenjohtaja wastasi tähän, että hän on wanhoista kirkon asiakirjoista huomannut, että Hahkialan hauta joka 
            on kuorissa, on entisinä aikoina arwioitu 60:ksi kupariplootuksi, mutta koska nyt kysymyksessä olewa hauta tulisi kaiwettawaksi alemmaksi kirkkoon ja, sitä awattaessa, penkkien kohdalla, aina on enemmän waiwaa, niin arweli puheenjohtaja, 
            että tässä woitaisiin käydä keskitietä, ja siihen nähden, että maanwiljelijä Krämer on kirkon isännöitsijä, ja hänellä siinä toimessa on paljon waiwaa kirkon ja sen omaisuuden puoltamisessa, niin ehdotti hän seurakunnan harkittawaksi, 
            eikö olisi kohtuullista määrätä sekä wänrikki Krämerin että luutnantti Schulmannin maksettawa 20 kupariplootuksi, joka yhteensä tekee 40 plootua, jonka lisäksi luutnantti S:n olisi joka kerta, kun hauta hänen puoleltaan awataan, 
            maksettawa tawanmukainen haudan awajaisraha, mutta wänrikki R. saisi, niin kauan kuin eläää olla tästä maksusta wapaa sekä omasta että perheensä puolesta. Seurakunta ilmoitti tähän tyytywänsä ja määräsi siis kummankin maksamaan 20 
            kupariplootua, yhteensä 40 plootua, mutta mitä ehdotuksen jälkimmäiseen osaan, eli haudan awajaismaksusta wapauttamiseen tulee, niin jätettiin asian ratkaiseminen tältä kohdalta toiseen kertaan sen wuoksi, että tällainen kysymys 
            waatii pitempiaikaista harkintaa.</p>
          <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389152?page=3">Linkki artikkeliin</a>
        </Article>
      
      
      <br></br>
      <p className="caption">Artikkelisarja</p>
      <p className="caption">Hämeen Sanomat, 1924</p>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Poimintoja Hauhon kirkon arkistosta</title> // metadata

export default HauhoPage

