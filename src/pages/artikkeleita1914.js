import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import Image from "react-bootstrap/Image";

import "../styles/base/global.css"

import SubDivider from "../assets/sub-divider.svg"
import QuoteStart from "../assets/quotation-start.svg"
import QuoteEnd from "../assets/quotation-end.svg"

import img1 from "../images/content/hasa1914/img-1.jpg"
import img2 from "../images/content/hasa1914/img-2.jpg"

const Articles1914Page = () => {
  return (
    <Layout titleText="Hämeen Sanomat, 1914">
      <h2>Artikkeleita</h2>
      <div className="interTitle">8.1.1914</div>
      <Article titleText="Nuorison kasvatuksesta käytännölliseen elämään.">
        <p>Tänä wuonna on ympäri suomea wietetty kotimaisen työn wiikkoa. Osanotto juhliin on kaikkialla ollut melkoinen ja yleisön innostus suuri. Epäilemättä juhlatilaisuuksissa pidetyt 
            puheet ja esitelmät owat olleet omiaan awaamaan ihmisten silmiä ymmärtämään kansallisen teollisuuden arwoa ja merkitystä. Ainakin on kuulunut, että eräitten kotoisten 
            teollisuuslaitosten tuotteet owat tuon wiikon jälkeen saawuttaneet ilahuttawan suuren menekin.</p>
        <p>Tämän yhteydessä tulee ajatelleeksi sitä tosiseikkaa, että käytännöllisen elämän alalla maassamme tarwittaisiin enemmän woimia, kuin mitä nykyisin on käytettäwissä. 
            Käytännöliselle työlle tuskin wielä annetaan meillä tarpeeksi arwoa ja tunnustusta. Sitä todistaa sekin, että monet nuoret pitäwät miltei häpeällisenä antautua sanotulle alalle. 
            Nuorison katsantokanta olisi tässä suhteessa saatawa muuttumaan, ja muutos on mahdollinen kodin ja koulun yhteiswaikutuksen kautta.</p>
        <p>Ensinnäkin olisi kodeissa kiinnitettäwä suurempaa huomiota lasten käytännölliseen kaswatukseen. Löytyy wielä paljon sellaisia koteja - ainakin siwistyneissä piireissä, - joissa 
            tyttöjen osanottoa keittiöhommiin ja käsitöihin pidetään täysin sopimattomana. Sellaiset työt kuuluwat palwelijoille ja ompelijattarille - warsinaisten perheenjäsenten on muka 
            aiwan tarpeeton puuttua niihin. Tällainen käsityskanta on kahdessakin suhteessa turmiollinen. Ensinnäkin se on omiaan herättämään nuorissa wahingollista säätytunnetta, joka luo 
            onnettoman kuilun eri yhteiskuntakerrosten wälille, ja toiseksi se kaswattaa epäkäytännöllisiä ihmisiä, joiden warttuneemmallakin iällä ensi pulan sattuessa täytyy turwautua 
            toisten apuun. Kodissa on kaswatus aloitettawa, ja kotikaswatuksen päämääränä tulee olla lasten mahdollisimman monipuolinen kehittäminen. Sillä eihän sitä koskaan etukäteen 
            woi aawistaa, mitä kaikkea ihminen elämän taipaleella tulee tarwitsemaan. Warakkaimmissakin olosuhteissa kaswaneen elämän ehdot woiwat muuttua sellaisiksi, että hänen on mahdoton 
            tulla toimeen ilman melkoista käytännöllistä kätewyyttä. Tämä koskee tietysti myöskin poikien kaswatusta. Heillekin woidaan kodissa walmistaa tilaisuus erilaisiin käytännöllisiin 
            hommiin, halkojen hakkaamiseen, weistoon j.n.e.</p>
        <p>Monasti on myöskin julkisuudessa huomautettu siitä, että käytännöllinen opetus on kouluissamme aiwan liiaksi syrjäytetty. Seurauksena tästä on, että siinä suuressa nuorisojoukossa, 
            joka meillä wuosittain suorittaa ylioppilastutkinnon, on paljon aineksia, joille toimeentulo myöhemmin käy hywinkin waikeaksi. Warsinaisen henkisen työn alalla ei tahdo kaikille 
            paikkoja riittää, ja monasti täytyy akateemisen kansalaisen tyytyä sangen pienipalkkaiseen toimeen ansaitakseen joten kuten jokapäiwäisen leipänsä. Siitä huolimatta lisääntyy 
            ylioppilastulwa wuosi wuodelta, ja uusia, puhtaasti teoreettisia kouluja perustetaan tuhkatiheään maaseudullekin. Tietystihän tämä on ilahduttawa todistus henkisen elämän 
            wirkeydestä, eikä kukaan woi tietää, ettei pohjakoulun - s.o. wiiden alemman luokan - jakama tietomäärä olisi tarpeellinen kelle tahansa. Mutta opettajien ja wanhempien pitäisi 
            suuremmassa määrässä kehoittaa sellaisia oppilaita, joilla on enemmän käytännöllisiä taipumuksia, eroamaan pohjakoulun suoritettuaan ja antautumaan käytännöllisille aloille. 
            Tämän kautta warmaankin akateeminen liikatuotanto melkoisesti wähenisi, samalla kuin ylioppilaaksi tulewien henkinen taso kohoaisi, ja käytännöllinen elämä saisi enemmän 
            kywykkäitä ja innostuneita työntekijöitä.</p>
        <p>Suuri edistysaskel olisi myöskin, jos oppikouluihimme - ainakin muutamiin - klassillisen ja reaalilinjan lisäksi woitaisiin perustaa erikoinen „kansalaisopintojen linja”. Tämän 
            asian otti ensi kertaa puheeksi professori E. N. Setälä Helsingin Sanomissa wiime syyskuulla julkaisemassaan kirjoitussarjassa. Uudella linjalla tultaisiin laajentamaan oppilaiden 
            yleistä siwistystä ilman, että ylioppilastutkintoa pidettäisiin ehdottomana päämääränä. Mutta samalla warattaisiin melkoinen tuntimäärä myös puhtaasti käytännöllisille aineille. 
            Täten olisi oppilailla myöhemmin mahdollisuus, luontaisten taipumustensa mukaan, antautua joko luku- tai käytännölliselle uralle. - Muuten löytyykin maassamme tällainen oppilaitos. 
            Neiti Edith Bergholmin perustamassa Naisopistossa Porwoon kaupungissa käywät tietopuolinen ja käytännöllinen opetus käsi kädessä. Opisto tahtoo kaswattaa walistuneita ja samalla 
            käytännölliseen elämään pystywiä naisia. Sitä paitsi kiinnitetään siellä, kuten kansalaisopistoissammekin, erikoista huomiota oppilaiden luonteen kehitykseen. Ilman suurempia 
            ponnistuksia woiwat ainakin lahjakkaammat oppilaat, suoritettuaan opiston 2-wuotisen kurssin, wuoden tai parin itseopiskelun jälkeen tulla ylioppilaiksi, jos niin haluawat. 
            Muille taasen awautuu monenlaisia mahdollisuuksia käytännöllisillä aloilla.</p>
          <p>Muitakin kouluja on maassamme, joissa niin tietopuolisia kuin käytännöllisiä näkökohtia pidetään silmällä. Erikoisen sopiwaa on tulewille maanwiljelijöille ja maatalouden 
            miehille, jotka owat käyneet 5 luokkaa jossakin oppikoulussa, siirtyä Helsingin maanwiljelyslyseoon. Sieltä he saawat suorittaa pääsytutkinnon yliopiston maataloudelliseen osastoon. 
            Wihdoin on kansanopistojemme opetusohjelma laadittu talonpoikaisen nuorison monipuolista kehitystä silmällä pitäen. Opiston käyneet omaawat suuren määrän yleissiwistystä ja niin 
            paljon käytännöllisiä tietoja, että he menestyksellä woiwat jatkaa opiskeluaan maamies- käsityö- ja emäntäkouluissa.</p>
          <p>Kansakunnan terween ja elinwoimaisen kehityksen ensimäisenä ehtona on, että sillä on luja sekä aineellinen että henkinen pohja. Käden työ ja ajatuksen työ owat kumpikin yhtä 
            wälttämättömiä ja kunnioitettawia. Ilman toista ei toinenkaan woi menestyä. Tämän seikan tulisi olla myös meille suomalaisille selwänä, warsinkin nykyisinä ahtaina aikoina, jolloin 
            niin paljon isänmaallista työtä joka puolella tarwittaisiin, kirjoittaa „Kodin Joulussa”</p>
          <p className="signature">Mikko W. Erich</p>
      </Article>

      <div className="interTitle">29.1.1914</div>
      <Article titleText="Osakemarkkinoiden tila.">
        <p>Uusi wuosi on tuonnut muassaan melkoisen parannuksen osakemarkkinoilla. Ostohalu on yleensä ollut warsin huomattawasti suurempi kuin wuoden lopulla, mikä onkin luonnollista 
          huomioonottaessa että osingon jakoaika on tuossa tuokiossa käsissä.</p>
        <p>Yleisön huomionesineenä ensisijassa owat edelleenkin pankkiosakkeet, ja nyttemmin päätetyt korkeammat osingot sekä uusien osakkeiden liikkeelle laskeminen owat tuntuwasti lisänneet 
          mielenkiintoa toisiin osakkeisiin nähden. Niinpä, tätä kirjoitettaessa, seuraawat pankit owat kohottaneet osinkoaan:</p>
        <p>Kiinteistöpankki 7 %:sta 7 1/5 %:iin, Yhdyspankki 5 prosentista 8 prosenttiin, Primatbanken 18 prosentista 14 prosenttiin, Uudenmaanpankki 11 prosentista 11 1/2 prosenttiin, 
          Pohjoispankki 12 prosentista 13 prosenttiin ja Helsingin Osake-pankki 4 prosenttiin.</p>
        <p>Kaikkien pankkien wuosituloksista ei ole wielä tietoja.</p>
        <p>Pohjoismaiden Osakepankki, Uudenmaanpankki, Landtmannabanken ja Helsingin Osakepankki owat sitä paitsi julkaisseet kutsun uusien osakkeiden merkitsemiseen.</p>
        <p>Yhteensä lähemmä 8 miljoonan markan arwosta tullaan tänä wuonna merkitsemään uusia osakkeita, eli tarkemmin sanottuna 7,975,000. Uusien osakkeiden maksuajat owat edulliset.</p>
        <p>Lopuksi merkitsemme tähän tärkeimmät kurssit pörssinoteerausten mukaisesti.</p>
        <Image className="centeredImageStyle" src={img1} alt="Osakekurssit"/>
      </Article>

      <div className="interTitle">31.1.1914</div>
      <Article titleText="Suoraa puhetta sosialidemokratiasta.">
        <h5>Erään kirjasen johdosta.</h5>
        <p>O. Y. Hämeenlinnan Uudesta kirjapainosta on ilmestynyt maisteri Timo Korpimaan kirjoittama ja kustantama kirjanen <span className="quote">Maamme Sosialidemokratia, Mietteitä ja 
          arwosteluja</span>. Kirjasen sisältö on seuraawa: Alkusana, Suhde porwaristoon ja wenäläiseen taantumukseen, Puolueen siwistys ja kehitys ja Puolueen ohjelma.</p>
        <p>Kirjasen lukee mielenkiinnolla. Se poikkeaa sangen suuresti muiden sosialistien kirjasista ja sepustuksista. Siinä paljastetaan sosialistien epärehelliset taistelukeinot ja koetetaan 
          ymmärtää porwaristoakin. Tekijä näet myöntää, että <span className="quote">porwaristo etujensa ja kansallistuntonsa mukaisesti pyrkii turwaamaan Suomen waltiollista itsenäisyyttä ja ainakin 
          unelmoi tämän itsenäisyyden laajentamistakin. Eduskunnassa saattaa yhteinen esiintyminen taantumusta wastaan olla suotawa - -</span>. <span className="quote">Katson puolestani, että 
          porwariston wastarintataistelussa nykyään on paljon tunnustusta ansaitsemaa. Sillä ei ole marzilaista eikä totta sekään wäite, että porwarit wastustawat köyhälistön pienimpiäkin waatimuksia. 
          Jokainen tuomari, olkoonpa hän waikka sosialidemokrati, on pakotettu tuomitsemaan woimassa olewien lakien mukaan, waikka ne olisiwatkin luokkalakeja, muutenhan eksyttäisiin anarkiaan. Ei 
          suinkaan jokainen torpparihäätötuomio ole luokkatuomio, kuten Työmiestä lukiessa woi luulla, waan perustuu lakiin tai ainakin tuomarin käsitykseen maanwuokralaeista. Erittäin räikeän 
          waikutuksen on huuto luokkatuomiosta tehnyt minuun ja, tiedän, moneen muuhunkin sosialistiin n. s. Ewon tukkityöläisten jutussa. Kun Turun korkeaoikeus oli tuominnut useita kymmeniä entistä 
          tukkityöläisiä wankeusrangaistukseen kiristämisyrityksestä, katsoi sosialidemokratinen puoluetoimikunta olewan syytä kehoittaa kautta maan yleisiin puoluekokouksin näitä luokkatuomioita 
          wastaan. En woi uskoa, että howioikeus ilman laillisiksi harkitsemiaan perusteita on päätöksensä langettanut — mitä syytä sillä olisi ollut wainota yksinkertaista tukkityöläistä? 
          Puoluetoimikunnan kehoitus wastalauseisiin oli selwää anarkismin suosimista</span>.</p>
        <p>Onhan tämä suoraa ja rehellistä puhetta, jota wain harwoin kuulee sosialistin suusta. Olen antanut tekijän puhua, ottamalla muutamia hajanaisia otteita. Mitä hän sanoo sosialistien 
          toiminnasta? Annan taaskin tekijän omilla sanoilla pienen kuwauksen:  <span className="quote">- - eräs ikäwä ilmiö, kaswannainen, joka wiime aikoina etupäässä „Työmies” -lehden 
          waikutuksesta, näkyy kotiutuneen puolueeseemme. Tarkoitan rehellisyyden, totuudenrakkauden puutetta. On kowin ikäwätä panna merkille, että osa puolueen korkeimpaakin siwistystä saaneita 
          jäseniä eiwät woi olla eksymättä walheellisuuden poluille, etenkin maalatessaan porwariston toimintaa. Puhutaan sitten Walppaan katkerasta ja pilkallisesta säwystä.</span> Sitten hän 
          kysyy: <span className="quote">Luulewatko todellakin towerit W. Kuusinen, Kullerwo Manner y. m., että walheellakin palwellaan työwäenasiaa? En ole woinut tulla muuhun käsitykseen, kuin 
          että walhe on heillä itse tietoista, harkittua. Joko he sillä pyrkiwät näyttelemään jyrkkyyttä tawoitellessaan työwäen suosiota --. Soweltuuko tällaiseen ohjelmaan jesuiittain oppi 
          walheestakin aseena? Eikö tällaisella menettelyllä wain tehdä karhunpalwelusta puolueelle, wieroiteta siitä parhaita totuutta kunnioittawia kansalaista? Minä olen leimannut osan puoluetta 
          walheen tietoisiksi opettajiksi tahi sen tiedottomiksi kannattajiksi, minun tehtäwäni on nyt todistaa tämä wäitteeni.</span> Hywin hän todistaakin. <span className="quote">
          Sosialidemokratiammekin keskuudessa on ollut ja on kai wieläkin pettureita, henkilöitä, jotta sosialisteista owat muuttuneet urkkijoiksi, ilmiantajiksi, prowokaattoreiksi. Ja onko 
          sosialidemokratian wastarinta muutenkaan ollut ehjää? Miksi luopuwat jotkut sosialistilehdet laillisiksi katsomastaan kannasta sanomalehtien pakkokappalejutussa? Aiwan samasta taloudellisesta 
          syystä, jonkatähden wirkamieskin taipuu laittomuuteen. Liiottelu kaswaa ilmeisesti wailheeksi ja wääristelyksi, kun wäitetään, että porwaristomme on salaliitossa, taantumuksen kanssa 
          työwäkeämme wastaan.</span> Tekijä ihmetteee sosialistien waalijulistusta, n. k. siltasaarelaisten suuntaa sekä sitä, että laajalla tietomäärällä warustetut <span className="quote">sosialistit 
          woiwat puhua näin walheellisesti ja kerrassaan epähistoriallisesti. Walheellisuus, jota tässä wastustan on juuri tuollaista yleistämistä. - - puoluejohdon taktiikka porwaristoon nähden on 
          ollut monessa suhteessa liioiteltua, walheellista haukkumista, jopa saanut joskus anartistisenkin wiwahduksen, Historiallinen silmä ei ole puolueen wahwimpia puolia. Ea puolestani woi 
          hywäksyä ylläesittämääni taktiikkaa, jonka tunnusmerkkinä on walheellinen intoilu sisäänpäin porwaristoa wastaan, laimennus ulospäin, taantumusta wastaan. Warottakoon, ettemme näissä 
          asioissa tule rypemään walheellisuuden meressä. Sillä kun puolueen johto luisuu siihen, mitä silloin saarnaawatkaan kansalle maaseutulehdet, piirisihteerit ja agitaattorit</span>?</p>
        <p>Hra R. waatii lopuksi sanomalehtiin enemmän kaswattawaa sisältöä. Jäsenillä ei ole selwillä sosialismin alkeet. Puolueen siwistystaso on hywin alhainen. Ydistykset hommaawat 
          alituisia tanssihuweja, joissa usein puukon heilutus korwaa muun ohjelman. Waltiopaiwäedustajat owat nuoria ja kehittymättömiä. Waaleissa on päässyt waltaan ikäwä nurkkakuntaisuuden 
          henki. Monet waalipiirit lähettäwät eduskuntaan hywin köykäisiä aineksia. Sosialisti-edustajista wain pieni osa pystyy tehtäwäänsä --. Ylioppilassosialismi näkyy melkein kokonaan 
          sammuneen. Korkeampaa siwistystä saaneita sosialisteja on mitätön kourallinen. Puolue kaipaa enemmän siwistystä, enemmän tietoa. Sosialisinen sanomalehtimies ja agitattori esiintyy 
          puolisiwistyneen wäärällä tietoisuudella. Eduskuntaryhmä on waatinut asinanajo-oikeutta kaikille kansalaisille. Hra R. leimaa tämän kannan taantumukseltseksi ja köyhälistölle 
          suorastaan wahingolliseksi, kun kuka poropeukalo hywänsä saisi tärwellä ihmisten oikeusetuja. Sosialistit panewat siweellisen rappeutumisen ja rikokset muitta mutkitta kokonaan 
          yhteiskunnan ja kapitalismin syntiluetteloon. Juoppous, kawallukset j.n.e. pilaawat sosialistiselta liikkeeeltä useita sen parhaita miehiä. Mellastus ja puukotukset työwäentaloilla 
          ja siweetömään kirjallisuuden lewittäminen saa oman lukunsa  Sosialistilehdet eiwat tee woitawaansa lukijainsa siweellisen kannan kohottamiseksi. Sen käyttämä kieli os joskus raakaa 
          jopa wallan tökeröä. Uutisten wäritetyt otsakkeet owat typeriä ja tympäisewiä.</p>
        <p>Puolueen ohjelmankin suhteen tehdään useita muistutuksia. Moititaan sitä, ettei oteta osaa kunnalliseen elämään, osuustoimintaan, jonka takia Hämeessä on sosialistinen köyhälistö. 
          Kolmestasadasta tuhannesta walitsijasta kuuluu järjestöihin wain pari kolmekymmentatuhatta! Kokonaan hyljättäwä tapa on esittää lakiehdotuksia, jotka muodoissa owat aiwan 
          mahdottomia. Tätä woi sanoa sosialidemokratisen eduskuntaryhmän wanhuudenwakuutusehdotuksesta, jossa luwattiin 350 mkn eläkkeitä. Puolueen wanhuudenwakuutusehdotusta ei todellakaan 
          woi nykyinen waltio toteuttaa.</p>
        <p>Selostukseni on wenynyt pitkäksi, mutta se on johtunut kirjasen mielenkiinnosta. Häm. W:ssa y. m. on porwarit leimattuna yötäkin mustemmaksi ja towerit itse owat olleet pulmuakin 
          puhtaammat. Tässtä on monasti julkisestikin huomautettu, mutta kuuroille korwille. Kaikki tämän lehden huomautukset on leimattu parjaukseksi. Hra K. kysymysmyksiä tekewät 
          tawallisesti porwarimme, mutta niitä saattaa tehdä myös järkewästi ajattelewa sosialisti, kuten hän huomauttaa. Hän lisää, että sosialisteille on sangen epäkiitollista lähteä 
          puhdistamaan porwaristoa sosialistien syytöksistä, sillä kansa on yleensä epäluuloinen ja jo wanhastaan omaa liiallisia käsityksiä herrojen metkuista. Senpä takia onkin kirjoittajan 
          yritys kiitettäwä ja tunnustuksen arvoinen. Hänet warmaan tämän kirjan perustuksella leimataan porwariksi, rewisionistiksi y. m, mutta sitä nimeä hän ei lupaa säikähtyä, tietäen 
          olewansa täydellisesti sosialidemokratian teorian kannalla. Tekijä on halunnut palwella totuutta.</p>
        <p>Kirjaa, joka maksaa 75 p. saa m. m. Hämeenlinnan kirjakaupoista.</p>
        <p className="signature">Lukija.</p>
      </Article>

      <Article titleText="Ruotsinmieliset pöyhkeilewät.">
        <h5>Pakina</h5>
        <p>Meidän ruotsikkomme owat häikäilemättömyydestään tunnettuja. He owat niin tottuneita täällä isännöimään ja suomalaisia sortamaan, että pienimmissäkin asioissa aiheuttawat ristiriitaisuuksia. 
          Wiime päiwinä on Suomen pääkaupungissa syntynyt juttuja siitä, että sikäläinen rahatoimikamari on antanut suomenkielisiin taksoituswalituksiin ruotsinkielisiä selityksiä, joita niiden 
          saajat eiwät olleet ymmärtäneet. Kun kuwernööri kowisti tästä rahatoimikamarin herroja, antoiwat nämä ruotsinkielisen selityksen. Tästä prokuraattori nosti jutun rahatoimikamarin jäseniä 
          wastaan. Helsingin ruotsalainen raastuwan oikeus tietysti hylkäsi kanteen, selittäen, että herroilla on ollut oikeus käyttää ruotsinkieltä. Oikeusneuwosmies Heimbürgerin mielestä ei ollut 
          oikein se, että prokuraattoriwiraston edustaja tässä asiassa esiintyi suomeksi, waikka wastaajilla oli äidinkielenään ruotsi!</p>
        <p>Muuten on merkillistä, että ruotsikot katsowat nykyisenkin ajan, jolloin meille wäkisin tyrkytetään wenäjänkieltä, erittäinkin soweliaaksi rettelöimiseen suomenkielen käyttämistä wastaan. 
          Ja tämä tällainen häikäilemättömyys tapahtuu Suomen pääkaupungissa, jonka waltawa enemmistö on suomenkielistä. Puolissataa wuotta sitten annettiin asetus suomenkielen oikeuksista, mutta 
          wieläkin pyrkii ruotsinkiihkoisuus häiritsemättä wallitsemaan. Sokeudessaan unohtawat nuo isänmaan <span className="quote">ritarit</span>, millä mielellä rajan takaiset kadehtijanne tätä 
          menoa seuraawat. Härkäpäisyyttään katsowat ruotsalaiset lehdet wielä sopiwaksi puolustaa. Niiden röyhkeydellä ei näy olewan rajoja. Ensin niskottelewat kaikkea hywää tapaa ja oikeutta 
          wastaan, ja sitten leimaawat suomalaiset walittajat ja kielensä oikeuksien walwojat <span className="quote">juonitelijoiksi</span> ja suomalaiset sanomalehdet raiwopäiksi natsionalisteiksi. 
          Niin sitä pitää pauhata!</p>
        <p>Mitä isot edellä, sitä pienet perässä. Hangon maistraatti on eilispäiwän lehtien mukaan asettunut pääkaupungin aateweljien kannalle.</p>
      </Article>

      <div className="interTitle">3.2.1914</div>
      <Article titleText="Tärkeä maalaiskuntia koskeva ehdotus.">
        <p>Woimassa olewan kunnallisasetuksen mukaan tulee kunnallislautakunnan walwoa järjestystä kunnan alueella sekä estää wallattomuutta ja yleisen lain ja kunnan itsensä laatimien, wahwistettujen 
          järjestys-sääntöjen rikkomista. Awukseen saa kunnallislautakunta ottaa, milloin kuntakokous katsoo sen tarpeelliseksi, erityisiä palkattuja katsontamiehiä. Mutta sitä paitsi woi 
          kunnallislautakunta järjestyksen walwonnassa waatia apua ja tukea myöskin <span className="quote">muilta kunnan jäseniltä siinä järjestyksessä ja sillä tawalla, kuin kuntakokous saattaa 
          määrätä</span>. Yleisen järjestyksen ja turwallisuuden edistämiseksi kunnassa woi kuntakokous hywäksyä erityisiä järjestyssääntöjä ja määrätä niiden rikkomisesta sopiwia uhkasakkoja. 
          Tällaiselle kunnan päätökselle on hankittawa kuwernöörin wahwistus. Näihin kunnallisasetuksen 6, 8, 57 ja 64 §§:ssä olewiin säännöksiin nojaten owat useat kunnat, warsinkin Länsi-Suomessa, 
          hankkineet itselleen järjestyssääntöjä siwellisyyden ja hywän järjestyksen edistämiseksi alueellaan sekä walinneet erityisiä järjestysmiehiä, kunnanpalwelijain ohella, kunnallislautakunnan 
          apuna walwomaan järjestystä ja estämään wallattomuutta. Kun tällaisten järjestyssääntöjen käyttäntöön ottamisesta ja järjestysmiesten walitsemisesta olisi muun hywän ohella sekin etu, että 
          woimassa olewien juowutusjuoma-asetusten walwomiseen ja juopotteluun ehkäisemiseen tulisi kiinnitetyksi entisestä suurempaa huomiota, on asia jo pitemmän aikaa ollut Raittiuden Ystäwien 
          taholla käsittelyn alaisena. Yleiselle raittiuskokoukselle, joka wuonna 1912 pidettiin Lahdessa, esitettiin Raittiuden Ystäwien asettaman komitean laatima ehdotus kunnallisiksi 
          järjestyssäännöiksi. Kokous pitikin suotawana, että mainittu ehdotus, sittenkun se olisi wielä tarkastettu, lähetettäisiin kaikille maalaiskunnille. Päätöksen toteuttaminen uskottiin 
          sittemmin wasta perustetulle Raittiusjärjestöjen Keskustoimistolle, joka puolestaan asetti erityisen komitean järjestyssääntöehdotusta lopullisesti tarkastamaan.</p>
        <p>Komitea, johon kuuluiwat senaattorit R. J. Ståhlberg ja Hugo Rautapää sekä tohtori Matti Helenius-Seppälä, on nyt saanut ehdotuksensa walmiiksi, ja on Raittius-järjestöjen Keskustoimisto 
          päättänyt lähettää maamme kaikille maalaiskunnille tämän ehdotuksen järjestyssäännöksi. Tarkoitus on, että kunnat hywäksyisiwät puheenaolewan ehdotuksen johdoilla laaditun järjestyssäännön 
          ja hakisiwat sille kuwernöörin wahwistuksen. Sittenkun järjestyssääntö on saanut asianomaisen wahwistuksen, olisi pidettäwä huoli erityisten järjestysmiesten walitsemisesta 
          kunnallislautakunnan awuksi sitä walwomaan. Nämä järjestysmiehet on tarkoitettu kunnallisiksi luottamushenkilöiksi, joiden toiwotaan uhraawan siihen aikaansa hywän asian wuoksi.</p>
        <p>Ehdotusta laatiessaan on komitea pitänyt silmällä, ettei siihen tulisi mitään sellaista, jonka ottaminen woisi olla esteenä järjestyssääntöjen wahwistamiselle. Samalla on koetettu 
          ehdotuksesta poistaa sellaiset määräykset, joiden on arweltu woiwan yleisön kannalta herättää epäilystä.</p>
        <p>Ehdotus on seuraawa:</p>
        <SubDivider className="dividerStyle" />
        <h5>1 §</h5>
        <p>Siweellisyyttä ja hywää järjestystä kunnan alueella walwoo, kruununpalwelijain ohella, kunnallislautakunta sekä kokonaisuudessaan että jäsentensä kautta, niinkuin woimassa olewassa 
          maalaiskuntain kunnallishallintoa koskewassa asetuksessa säädetään.</p>
        <p>Kuhunkin kunnallislautakunnan jäsenen silmälläpidon alaiseen piiriin walitsee kuntakokous (kunnanwaltuusto) tämän jäsenen awuksi järjestystä walwomaan yhden tai tarpeen waatiessa useampia 
          järjestysmiehiä.</p>
        <h5>2 §</h5>
        <p>Järjestysmiehiksi walitaan kolmeksi wuodeksi kerrallaan, sittenkun kunnallislautakunta on tehnyt ehdotuksen, soweliaita kunnan jäseniä.</p>
        <p>Waalikelpoisuudesta järjestysmiehen toimeen, siihen rupeamisen esteistä, walitun järjestysmiehen kieltäytymisoikeudesta ja wirantoimituswelwollisuudesta sekä eroamisesta kuoleman taikka 
          poismuuttamisen tahi muun laillisen syyn takia olkoon woimassa, mitä kunnallisasetuksessa säädetään kunnallislautakunnan jäsenistä.</p>
        <p>Milloin järjestysmiehen paikka on joutunut awoimeksi, pitäköön kunnallislautakunta huolen siitä, että uusi järjestysmies tulee walituksi.</p>
        <p>Walitulle järjestysmiehelle annetaan ote waalitilaisuudessa tehdystä pöytäkirjasta, joka waltuuttaa hänet toimeensa.</p>
        <p>Paikkakunnan nimismiehelle on annettawa tieto siitä, kutka järjestysmiehen tointa eri piireissä hoitawat. Niinikään ilmoitettakoon tämä yleisölle sillä tawoin, kuin kunnallisista 
          kuulutuksista on määrätty.</p>
        <h5>3 §</h5>
        <p>Järjestysmiehen welwollisuutena on walwoa siweellisyyttä ja hywää järjestystä ja erittäinkin juowutusjuoma-asetusten noudattamista piirinsä alueella sekä, jos hänen tietoonsa on tullut 
          rikkomuksia lain ja asetuksen säännöksiä tai wahwistettuja järjestyssääntöjä wastaan, ilmoittaa ne piirinsä kunnallislautakunnan jäsenille tahi kunnall. laut. esimiehelle tahi 
          paikkakunnan kruununpalwelijalle.</p>
        <h5>4 §</h5>
        <p>Jokainen kunnan jäsen on welwollinen kunnallislautakunnan tai sen jäsenen kehoituksesta ja osotuksen mukaan antamaan apua järjestyksen ylläpitämisestä. Jos hän ei tällaista kehotusta 
          noudata, sakotettakoon enintään wiisikolmatta markkaa.</p>
        <h5>5 §</h5>
        <p>Jos wäentungos tiellä tai muulla yleisellä paikalla saa aikaan huomattawaa epäjärjestystä tai estää yleistä liikettä, tulee wäkijoukon kunnallislautakunnan jäsenen tai järjestysmiehen 
          käskystä heti hajaantua. Joka ei tottele poistumiskäskyä, rangaistakoon enintään wiidenkymmenen markan sakolla.</p>
        <p>Sama olkoon laki määräyksistä, joita kunnallislautakunnan jäsen tai järjestysmies antaa ahdingon tai onnettomuuksien estämiseksi sekä järjestyksen ylläpitämiseksi yleisillä liikepaikoilla 
          ja sellaisissa tilaisuuksissa, joilla on suurempi wäenkokous.</p>
        <h5>6 §</h5>
        <p>Joka yleisellä tiellä, kulkuwäylällä tahi muussa julkisessa paikassa taikka julkisessa toimituksessa tahi yleisessä kokouksessa meluamalla tahi kiroilemalla häiritsee rauhaa taikka harjoittaa 
          muuta ilkiwaltaa, rangaistaan rikoslain mukaan.</p>
        <h5>7 §</h5>
        <p>Juowutusjuomain ja muiden päihdyttäwäin aineiden nautiskeleminen ja kortinpeluu on teillä ja muilla yleisillä paikoilla sekä ulkosalla niiden wälittömässä läheisyydessä kielletty enintään 
          wiidenkymmenen markan sakon uhalla. Kun joku luwattomasti tunkeutuu juopottelemaan tai kortinpeluuta harjoittamaan yksityisen alueelle ja kieltäytyy käskettäessä lähtemästä pois, olkoon saman 
          rangaistuksen alainen, jos asianomistaja ilmoittaa rikkomuksen syytteeseen pantawaksi.</p>
        <h5>8 §</h5>
        <p>Jos joku yleisellä tiellä tahi muulla julkisella paikalla taikka julkisessa toimituksessa tahi yleisessä kokouksessa on juowuksissa ja sen kautta matkaansaattaa pahennusta, rangaistaan hän 
          rikoslain mukaan.</p>
        <h5>9 §</h5>
        <p>Joka pahanilkisyydestä kirjoituksilla, piirustuksilla tahi muulla tawalla tahraa toisen huonetta, porttia, lauta-aitaa tahi muuta sellaista, sakotettakoon, milloin ei edeswastausta ole laissa 
          säädetty, enintään wiisikolmatta markkaa.</p>
        <h5>10 §</h5>
        <p>Joka kuokkawieraana tai muuten ilman laillista syytä, wastaan toisen tahtoa, tunkeutuu hänen asuntoonsa taikka ilman syytä jättää noudattamatta käskyn lähteä sieltä pois, rangaistaan rikoslain 
          mukaan.</p>
        <h5>11 §</h5>
        <p>Kun joku talossaan tai alueellansa toimeenpannuissa tanssi- tai muissa huweissa sallii luwatonta juowutusjuomien myyntiä, koettamatta sitä estää, tuomittakoon enintään wiidenkolmatta markan 
          sakkoon.</p>
        <h5>12 §</h5>
        <p>Joka pitää huonetta haureuden tai uhkapelin harjoittamista warten, taikka tekee itsensä syypääksi juowutusjuomien luwattoman walmistuksen tai myynnin suosimiseen edistämällä rikoksentekijän 
          pakoa taikka olemalla hänelle apuna rikoksen salaamisessa tahi sitä koskewain todisteiden häwittämisessä, rangaistaan rikoslain mukaan.</p>
        <h5>13 §</h5>
        <p>Tulipalon syntyessä on, enintään kymmenen markan sakon uhalla, ainakin yhden työhön kykenewän henkilön kylän kustakin ruokakunnasta wiipymättä, lähdettämä palopaikalle ja siellä täytettäwä, 
          mitä sammutustyön johtaja hänelle määrää.</p>
        <p>Welwollisuudesta olla osallisena metsäwalkean sammuttamisessa säädetään metsälaissa.</p>
        <h5>14 §</h5>
        <p>Tätä järjestyssääntöä wastaan tehdyt rikkomukset pannaan syytteeseen paikkakunnan kihlakunnanoikeudessa, ja sitä warten tulee kunnallislautakunnan esimiehen tai jäsenen taikka järjestysmiehen 
          wiipymättä ilmoittaa ne asianomaiselle syyttäjälle.</p>
        <h5>15 §</h5>
        <p>Kunnallislautakunnan asia on kuulututtaa tämä järjestyssääntö, sittenkun se on saanut asianomaisen wahwistuksen, seurakunnan kirkossa sekä pitää se kunnan talolla julkipantuna ja painettuna 
          kuntalaisten ilmaiseksi saatawana. Painettu järjestyssääntö on myöskin paikkakunnan wiralliselle syyttäjälle annettawa.</p>
        <SubDivider className="dividerStyle" />
        <p>Kun näin on monipuolisen harkinnan ja parhaiden käytettäwissä olewien asiantuntijain awulla saatu aikaan tämä selwäpiirteinen ja kansanomaisella sujuwaisuudella kirjoitettu ehdotus 
          kunnalliseksi järjestyssäännöksi, jollaista on jo kauan kaiwattu, on suotawaa, että maalaiskunnat rientäwät sitä hywäkseen käyttämään. Mikäli olemme huomanneet, onkin kysymys jo pohdittawana 
          useissa maalaiskunnissa ja toiwottawasti se ratkaistaan suotuisaan suuntaan.</p>
      </Article>

      <div className="interTitle">5.2.1914</div>
      <Article titleText="Pätkä Rengosta.">
        <p>Pakisen taaskin wähän täältä Rengosta. Tällä kertaa raittiusriennoista. Ikäwällä täytyy tunnustaa, että raittiuselämä täällä on aiwan lamassa, s. o. täällä ei tehdä juuri kerrassaan mitään 
          raittiuden edistämiseksi ja juoppouden wastustamiseksi. Raittiusseura täällä kyllä on, mutta sekin waan nimellisesti. Se ei ainakaan tietääkseni ole kuluneena wuotena sanottawasti mitään 
          toiminut. Eikö nyt jo ole kylliksi lewätty? Pitäisikö todella ruweta herättelemään <span className="quote">Rengas II:sta</span>, sekä mahdollisesti perustaa useampiakin raittiusseuroja 
          pitäjäämme. Vai onko renkolaiset niin wisaa, että heihin ei pysty mitkään hywät pyrkimykset. Nähdäkseni täällä olisi paljon toiwomisen waraa, sillä täällä, jos missään, juoppous rehoittaa. 
          Juuri wiinan tiliinhän on luettawa äsken tapahtunut kaamea murhakin, josta tässäkin lehdessä on kerrottu.</p>
        <p>Pois welttous raittiusseuralaisista, ja tämän wuoden alusta säännöllisesti pidettäköön seuran kuukausikokouksia. Sitä ainakin monet toiwoen odottawat. Tulitteko lukeneeksi H. S. 9 n:osta 
          Ison-Luolajan <span className="quote">Säteestä</span>, kuinka se on ripeässä toiminnassa? Ottakaamme siitä esimerkkiä! Olisihan nuorillekin paljon jalompaa, että he seuran jäseniksi 
          ruwettuaan käwisiwät kokouksissa, sen sijaan, että he iltasin etsiwät nurkkatanseista y. m. huwia ja iloa. Täällä ei ole pitempään aikaan ollut raittiuspuhujiakaan, joten olisi kowin 
          suotawaa, että esitelmätilaisuuksia tännekin järjestettäisiin.</p>
        <p>Eteenpäin on Rengossa menty muissakin asioissa, niin miksi ei tässä. Tulin jo pitemmälle jutelleeksi, mutta eihän sitä woi olla waitikaan, ainakaan sellainen, jonka sydän innokkaasti sykkii 
          raittiudelle. Jos joku on innostunut se ei paljoakaan auta, waan tarwitaan tässä joukkoinnostusta, mutta ei siitäkään tule mitään, jollei ole pyydetty työlle Jumalan siunausta. Lopetan ja 
          sanon wieläkin: nouskaamme juoppoutta wastustamaan.</p>
        <p className="signature">Dö</p>
      </Article>

      <div className="interTitle">14.2.1914</div>
      <Article titleText="Kaupunginvaltuuston kokouksessa">
        <p>wiime torstaina käsiteltiin m. m. seuraawat asiat:</p>
        <p><span className="accent">Ulosottoapulaisen toimi</span> päätettiin asettaa ja hywäksyttiin palkaksi 720 mk. wuodessa ja 5% kaupungista kannettawien rästien määrästä sekä saa maistraatti 
          wahwistaa kaupunginwoudin ja hänen apulaisensa työjärjestyksen.</p>
        <p><span className="accent">Rahatoimikamarin puheenjohtajan wuosipalkka</span> maalisk. 1 p:stä korotettiin toistaiseksi 600 mksta 900 mkaan, kun kaupungilla ei ole insinööriä, ja päätettiin 
          pyytää kamarilta laussuntoa siitä ehdotuksesta, että ohjesääntöihin tehtäisiin sellainen muutos, että waltuusmiehet wastaisuudessa walitsemat rahatoimikamarin puheenjohtajan.</p>
        <p><span className="accent">Wäkijuomain wähitäismyynti ja anniskelu</span> päätettiin kaikilla äänellä 3 wastaan järjestää tulewaksi 2 wuoden myyntikaudeksi siten, että myönnetään edelleen 4 
          oikeudet entisillä ehdoilla.</p>
        <p>Past. <span className="accent">W. Wartia</span> piti 3 oikeuksia riittäwänä. Ehdotusta kannatti kustantaja <span className="accent">A. A. Karisto</span>.</p>
        <p> Hra <span className="accent">H. Laurela</span> ehdotti neljännet oikeudet myönnettäwäkst sillä ehdolla, että wain matkustajat saawat wäkijuomia ruuan kera.</p>
        <p>Hra Wartia pani wastalauseen päätöstä wastaan.</p>
        <p><span className="accent">Maistraatin ja raastuwanoikeuden työjärjestystä</span> wastaan tehtiin muistutuksia ja päätettiin läänin kuwernöörille waadittuna lausuntona esittää, ettei 
        työjärjestystä sellaisenaan wahwistettaisi.</p>
        <p><span className="accent">Kaupungin taloudellisten olojen järjestämistä</span> harkitsemaan päätettiin asettaa erityinen waliokunta, johon walmistuswaliokunta ehdottaa henkilöt.</p>
        <p><span className="accent">Waltuusmiesten luwun lisääminen.</span> Pastori W. Wartian ehdotus, että waltuusmiehet pyytäisiwät maistraattia pitämään raastuwankokouksen, jossa kaupunkilaiset 
          saisiwat ratkaista, tahtowatko he lisätä waltuusmiesten lukua, lähetettiin walmistuswaliokuntaan.</p>
        <p><span className="accent">Poliisijärjestyksen 96 §.</span> Tehtailija J. F. Alangon ehdotus, että waltuusmiehet ottaisiwat harkittawakseen, eikö olisi syytä saada muutosta kaupungin 
          poliisijärjestyksen 96 §:ään lähetettiin pitkän keskustelun jälkeen, jonka kuluessa hrat Alanko, Karisto ja Lehtonen kannattiwat ja hrat Tarjanne ja Böök wastustiwat ehdotusta, 
          walmistuswaliokuntaan.</p>
        <p><span className="accent">Pesuhuonehomma.</span> Rahatoimikamari oli lähettänyt piirustukset ja kustannusarwion 11,100 mk. aiotusta pesuhuoneesta. Sen rakentaminen jätettiin toistaiseksi ja 
          ehdotus uuden wirutuslautan rakentamisesta Hämeensaaren kohdalle, lähetettiin walmistuswaliokuntaan ja rahatoimikamariin.</p>
        <p><span className="accent">Kankaantaustantie
          n warrella olewien wuokratonttien omistajain</span> anomus, että heidän tonttinsa yhdistettäisiin kaupungin warsinaiseen tonttialueeseen, hylättiin.</p>
        <p><span className="accent">Myllymäen wanhempien wuokratonttien omistajain</span> anomus, että heidän tonttiensa wuokran määrääminen jätettäisiin erityiselle lautakunnalle, hylättiin.</p>
        <p><span className="accent">Kunnalliswerorästien tarkastuskomitean</span> lausunto rahatoimikamarin ehdottamista erinäisten werorästien tileistä poistoista, hywäksyttiin.</p>
        <p><span className="accent">Teatteritalokysymys.</span> Eräiden kaupungin asukkaiden ehdotus, että isontorin koillisessa kulmassa sijaitsewa talo ja tontti n:o 88 ostettaisiin kaupungille ja 
          siihen rakennettaisiin ajanmukainen teatteri ja kokoushuone, hylättiin.</p>
        <p>Past. Wartia toiwoi Anniskeluyhtiön rakentawan tämän suuntaisen talon esim. Gaddin tahi Suomal. S:n talon tontille.</p>
        <p><span className="accent">Kauppahallin rakentaminen.</span> Lehtori A. Th. Böökin ehdotus, että waltuusmiehet ottaisiwat harkittawakseen, eikö olisi syytä ryhtyä kauppahallin rakentamiseen, 
          ja asettaisiwat asiaa walmistamaan erityisen waliokunnan, pantiin pöydälle.</p>
        <p><span className="accent">Hämeenlinnan Raittiusseuran kirjelmä,</span> jossa ehdotettiin, että waltuusmiehet päättätäisiwät asettaa Hämeenlinnan wäkijuoma-, wähittäismyynti- ja 
          anniskeluosakeyhtiön harjoittamalle wäkijuomien wähittäismyynnille erinäistä rajoituksta, lähetettiin walmistuswaliokuntaan.</p>
        <p><span className="accent">Hämeenlinnan Sähkölaitos Osakeyhtiön</span> ehdotus, että waltuusmiehet sillä edellytyksellä, että Rahatoimikamari tulee hywäksymään kaupungin ja Sähköosakeyhtiö 
          A. E. G:n wälisen kontrahdin siirron Sähkölaitos O. Y:lle, määräisiwät yhden tai useamman henkilön mainitun yhtiön kanssa neuwottelemaan ja päättämään kaikista niistä kysymyksistä, jotka 
          woiwat johtua yhtiön aikomasta sähtölaitoksen sentraalin ja johtowerkon laajentamistyöstä, lähetettiin rahatoimikamariin.</p>
        <p><span className="accent">Pelastusarmeijan</span> johtajan Karl Larssonin anomus, että waltuusmiehet anniskeluyhtiön woittowaroista myöntäisiwät 500 markan awustuksen Hämeenlinnan 
          slummiaseman kannatukseen, lähetettiin walmistuswaliokuntaan samoin.</p>
        <p><span className="accent">Hämeenlinnan Kirwesmiesten</span> ammattiosaston 400 mk:n anomus oppikurssien toimeenpanemisesta rakennuspiirustuksen opetuksessa ja tuntemisessa.</p>
        <p><span className="accent">Kotiseututoimikunnan</span> kiitos waltuustolle liitettiin asiakirjoihin.</p>
        <p><span className="accent">W.t. pormestarin palkankorotuspyyntö</span> lähetettiin rahatoimikamariin.</p>
        <p><span className="accent">Wirkaerot</span> ilmoitettiin myönnetyksi pormestari Helsingiukselle ja kaupunginlääkäri Mannerille.</p>
        <p>Kaupungin <span className="accent">kunnalliskertomuksia</span> päätettiin jakaa wast'edes määrättäwällä tawalla.</p>
        <p>Pöytäkirjan tarkastajiksi walittiin hrat Wiljanen ja Laurela.</p>
      </Article>

      <div className="interTitle">17.2.1914</div>
      <Article titleText="Mietteitä nykyisestä taloudellisesta ahdingosta.">
        <p>Yli tulojensa eläminen saattaa ajan pitkään warakkaammankin miehen, wähäwaraisen sitäkin pikemmin, wararikon partaalle. Sama laki wallitsee myös kokonaisen kansakunnan taloudellisessa 
          elämässä. Että meidän kansa elää ja on jo kauan elänyt yli tulojensa, sitä meillä kyllin on selwänä todisteena ne joka wuotiset tilastolliset numerot, jotka ulkomaisesta kaupastamme 
          wuosittain julkaistaan. Mutta yhä tuntuwammin saamme sitä nykyään kokea, sen waikutukset alkawat tuntua jo aiwan jokapäiwäisessä taloudellisessa toiminnassamme.</p>
        <p>Se äärimäisen korkealle pingoitettu korkokanta, jota meidän arwoisat <span className="quote">kauppaa ja teollisuutta</span> y.m. liike-elämää edistämään perustetut pankkimme owat jo 
          toista wuotta noudattaneet, alkaa waikuttaa mitä turmiollisimmin muutenkin lamassa olewaaan liike-elämäämme. Sillä kaiken liikewoiton nielewät pankit liikkeessä käytettäwien rahojen 
          korkoina. Sellainen luonnottoman korkea korkokanta, jota meidän kauppapankkimme nykyään noudattawat on warsin suuressa määrin edistäwä nykyistä taloudellista pulaa. Niistä saatu raha on 
          kaupassa samoinkuin teollisuudessakin, aiwan liian kallista käyttää. Ja ennen kaikkea maanwiljelyksessä. Maanwiljelijän on waikea saada maantuotteista työpalkkoja ja käytetylle pääomalle 
          pankkiliikkeiden useinkin kaiken kaikiaan waatimaa 8—9 %.</p>
        <p>Kun täten maanwiljelys, maan pää-elinkeino, tuskin saattaa kannattaa ja teollisuudelta puuttuu edellytyksiä, niin seurauksena ei saata olla muu kuin kansan taloudellisen elämän 
          täydellinen taantuminen. Liike-elämä pysähtyy, yriteliäisyys kuoleutuu, yleinen työttömyys ja siitä johtuwa kurjuus pääsewät wallalle. Suuren suuret työläisjoukot owat saaneet ja saawat 
          ensimäisinä kipeimmin kokea taloudellisen pulan seurauksia tämänkin talwen kuluessa. Ja jota kiinteämmin pankit owat kiristäneet luotonantoaan, sitä ahtaammalle alkaa elämä taloudellisella 
          alalla käydä.</p>
        <p>Onko mitään mahdollisuuksia päästä omin neuwoin tästä ahdingosta? Mielestämme niitä on waikkakin tarmoa ja sitkeyttä kysywiä. Se wierailla waroilla eläminen, jota kansamme on jo 
          wuosikymmeniä tottunut elämään, on niin sywästi juurtunut kansan kaikkiin kerroksiin, että luopuminen siitä tuntuu aiwan mahdottomalta ja kuitenkin se näyttää olewan wälttämättömyys, jos 
          olot kulkewat samaan suuntaan kuin nyt. Se kauppapankkien korkea korkokanta, jota ne nyt noudattawat, ei kylläkään näytä aiwan aiheettomalta, waikkakin siinä on suuri annos halua maksaa 
          pankkiosakkeiden omistajille runsaita osinkomaksuja, waan ilmenee siinä myös todellista suurta rahanpuutetta. Eikä tämä rahanpuute ole tiettäwästi tilapäistä waan jo sywällisesti 
          waikuttawaa ja pitkäaikaista. Siitä on parhaana todisteena se, ettei kauppapankit ole woineet korkeilla korkomaksuillaankaan saada itselleen tarpeellista määrää rahoja waan täytyy tuota 
          luonnotonta korkokantaa edelleen pitää woimassa. Rahan puutetta on siis todellisuudessa olemassa. Mutta siitä huolimatta on jokapäiwäinen elämämme järjestetty niin kuin eläisimme 
          ehtymättömien kultakaiwosten partaalla.</p>
        <p>Wieraat ulkolaiset tuotteet kuluttawat säälimättömästi kansamme aineellisen omaisuuden. Ja säälittawintä asiassa on se, että ne ulkolaiset tuotteet, joihin me olemme walmiit uhraamaan 
          wiimeiset ropomme, owat suuremmaksi osaksi arwotonta ylellisyystawaraa. Kahwit ja wäkijuomat jo yksinään muodostawat sellaisen menoerän, että se maahamme jääneenä saattaisi kansamme 
          raha-asiat oikealle tolalle. Nämä eiwät kuitenkaan ole ainoat, waikkakin suurimmat ja turmiollisimmat tuotteet, joista me ulkomaille lähetämme wuosittain summia, joilla me ennen pitkää 
          woisimme saattaa wiljelyskelpoisen mutta nyt joutilaana olewan maamme hulmuawiksi wiljawainioiksi. Jos meillä wuosittain noin 75 miljoonaa markkaa, jonka me enimmäkseen aiwan turhan tähden 
          lähetämme ulkomaille, käytettäisiin maanwiljelyksen parantamiseen, niin työttömyyden <span className="quote">probleemi</span> olisi paljon helpompi ratkaista eikä taloudellinen pulakaan 
          pääsisi ahdistamaan meitä silloin niin ankarasti kuin nykyään.</p>
        <p>Tällaisena kireänä taloudellisen ahdingon aikana tulisi kaikkien kansalaispiirien ajatella palautumista jälleen kotoisiin, meille suomalaisille ominaisiin, joskin unhoitettuihin 
          yksinkertaisiin elintapoihimme. Irti kaikista wieraista tawoista ja tuotteista, joista ei meille ole siiweellistä eikä taloudellista hyötyä. Meidän tulee wapautua ulkomaalaisista 
          keinottelijoista, jotka houkuttelewat kansamme taloudellisen omaisuuden, siten saadakseen meidät täydelliseen riippuwaisuuteen heidän hywäntahtoisuudestaan.</p>
        <p>Tahtoisimme siis sanoa: wähemmän ulkolaista, enemmän kotoista, rahansaantiehdot maanwiljelijöille edullisemmiksi, jotta joutilaina olewat työwoimat woitaisiin käyttää maanwiljelyksen 
          parantamiseen.</p>
        <p className="signature">Maalainen.</p>
      </Article>

      <div className="interTitle">24.2.1914</div>
      <Article titleText="Tango-tanssin „epäsiweellisyys”">
        <p>Walitukset muotiin tulleen tango-tanssin epäsiweellisyydestä owat nykyään yleisesti tunnetut. Parisilainen lehti <span className="quote">La fleur de lys</span> kirjoittaa artikkelissaan w. 
          1824, wanhasta <span className="quote">siweellisestä walssista</span> seuraawaa:</p>
        <p><span className="quote">Eräs tanssi, nimeltään Walssi, joka niinkuin luulemme, on saapunut Saksasta, saawuttaa yhä enemmän suosiota arwossapidetyissä seurapiireissa. Lyhyesti sanottuna on 
          aristokraattisissa salongeissa pidetty tanssiaista, joissa kristilliset naiset, ja m. m. useat äidit, owat tanssineet walssia herrojen käsiwarsien warassa ja owat nämä herrat olleet heille 
          aiwan wieraita. Miehet saiwat näinollen katsoa päältä, kuinka naista, jota he mitä hellemmin rakastiwat ja kunnioittiwat, puristi henkilö, joka ei ollut heidän miehensä. Emme tosiaankaan 
          uskalla kuwailla tätä epäsiweellistä tanssia, joka sydämemme suruksi ja epätoiwoksi näyttää yhä enemmän ja enemmän woittawan miesten suosion ja ennenkaikkea naisten, joiden yksinomainen 
          welwollisuus olisi näyttää kansalle hywää esimerkkiä sopiwaisuudesta ja kainoudesta. Papit owat saaneet määräyksen tuomita tämä walssi pirun keksinnöksi, koska se saa aikaan häiriötä aiwoissa, 
          saattaa sydämet pois tasapainosta ja turmelee sielut</span>.</p>
        <p>Kuten näkyy, tuomittiin walssi 90 wuotta sitten wähintäänkin yhtä ankarasti kuin nykyään tango.</p>
        <p>Niiden joukossa, jotka kiihkeimmin lausuwat pannajulistuksen tangosta, on eturiwissä pyhä isä ja kardinaalit Roomassa. Nyt kuitenkin puhuwat italialaiset lehdet eräästä arwoisasta kardinaalista, 
          joka, langettaaksensa puolueettoman tuomion tangosta, oli kutsunut erään balettimestarin ja yhden tanssijattaren oopperasta palatsiinsa, jotta nämä esittäisiwät tämän pahuuden hänelle. Keskellä 
          näytöstä huomautti tämä arwoisa prelaatti aiwan ihastuneena:</p>
        <p><span className="quote">Mutta tämähän on sulawin tanssi, mitä milloinkaan olen nähnyt</span>.</p>
        <p>Woimme näinollen olla warmoja että tango aikaa myöten tulee olemaan yhtä arwossapidetty ja paljon käytetty kuin kerran niin siweettömäksi tuomittu walssi, puhumattakaan polkasta, joka 
          keskiwaiheilla wiimeistä wuosisataa tuli käytäntöön yli koko Europan ja katsottiin yhteiskunnalle joksikin waaralliseksi kulkutaudiksi.</p>
      </Article>

      <div className="interTitle">26.2.1914</div>
      <Article titleText="Uusiin oloihinko totutaan?">
        <p>Suomen kansan kohtalo näyttää entistään synkemmältä. Juuri kun eduskuntamme on osoittanut nykyisen hallitussuunnan Suomelle tuottamat turmiolliset waikutukset ja tuonut ilmi, kuinka 
          wälttämätöntä on, että tästä mitä suurimmassa määrässä kansallemme wahingollisesta järjestelmästä luowutaan, on julkisuuteen päässyt outoja tietoja Suomen senaatin uudelleen järjestämisestä 
          ja erityisen poliisidepartementin perustamisesta Suomeen. Wanhat suunnittelut, kuten Wiipurin läänin kuntien erottaminen, Suomessa tehtyjen poliittisten rikosten alistaminen keisarikunnan 
          tuomioistuinten alaisiksi, tullien yhdistäminen, hewosasewelwollisuuden woimaan saattaminen, wenäjänkielen käytön lisääminen y. m. owat Wenäjällä tapahtuneen pääministerin waihdoksen tapahduttua 
          saaneet tuulta purjeisiinsa.</p>
        <p>Nykyisen hallitusjärjestelmän johtajat ja toimeenpanijat eiwät anna mitään arwoa Suomen laeille, kun ne joutuwat esteeksi heidän pyrkimystensä toteuttamiselle. Sekä suuremmissa että pienimmissä 
          asioissa tulee tämä tawan takaa ilmi. Meille wihamieliset ainekset Wenäjällä, kuten ministeriwaltiosihteeri Markow äskettäin lausui, lewittelewat kiihkomielisyydessään sellaisia kokonaan 
          totuudesta poikkeawia lausuntoja, että Suomen wäestö muka on <span className="quote">alkanut tottua uusiin oloihin</span>.</p>
        <p>Kansamme on kyllä rauhallinen, mutta <span className="quote">tottumisesta</span> ei woi olla puhettakaan. Wai sitäkö osoittawat Krestyn wankilassa wiruwat lakien puoltajat, eduskunnan 
        toimenpiteet ja kansan mieliala? Ministeriwaltiosihteerin lausunto ei pidä wähimmässäkään määrässä paikkaansa. Surullista, että edustajamme H. M. Keisarin waltaistuimen juurella katsoo arwolleen 
        sopiwaksi tällaisia perättömyyksiä lewitellä kansasta, jonka oikeuksia hänen tulisi suojella ja warjella.</p>
      </Article>

      <div className="interTitle">7.3.1914</div>
      <Article titleText="Kysymys wenäjänkielen saattamisesta Suomen wiralliseksi kieleksi.">
        <h5>Kenraalikuwernöörin ehdotus, johon senaatti on yhtynyt.</h5>
        <p>Pietarin toimisto ilmoittaa:</p>
        <p>Pietarissa, maalisk. 8 p. Suomen kenraalikuwernööri on jättänyt ministerineuwoston tarkastettawaksi laatimansa ehdotuksen wenäjänkielen käyttöönottamisesta Suomen hallintolaitosten ja 
          wirkamiesten wälistä kirjeenwaihtoa koskewassa kysmyksessä. Lakiehdotus sisältää seuraawaa:</p>
        <p>Senaatin ja sen prokuraattorin lähettämät asiakirjat alam. esityksiä warten owat alkuperäisesti laadittawat wenäjänkielellä. Samalla kielellä ilmoitetaan Suomen kenraalikuwernöörille ja 
          senaatille korkeimmasta paikasta tulewat asiakirjat. Wenäjänkieli otetaan käytäntöön Suomen hallintolaitosten ja wirkamiesten kirjeenwaihdossa kenraalikuwernöörin, hänen kansliansa ja kaikkien 
          keisarikunnan wiranomaisten kanssa, jolloin keisarikunnan ja Suomen laitosten wälillä säädetään muutamilla poikkeuksilla kirjeenwaihto. Suomen wiranomaisten wälinen kirjeenwaihto tapahtuu 
          wenäjän tai paikallisilla kielillä, taikka wenäjänkielellä liittämällä käännös paikalliselle kielelle. Wenäjänkielen käyttäminen asiain käsittelyssä säädetään waltiosihteerin wirastossa ja 
          Suomen passitoimistossa heti, senaatin talousosastossa ja prokuraattorin toimituskunnassa wiimeistään kolmen wuoden kuluttua, keskushallituksissa ja kuwernööriwirastoissa sekä kuwernöörien 
          luona, wiimeistään wiiden wuoden kuluttua. Niiden wirkojen piiriä, jotka woidaan täyttää ainoastaan wenäjänkieltä taitawilla henkilöillä, laajennetaan melkoisesti. Muihin wirkoihin 
          nimittämisessä on wenäjänkielen taitoisille annettawa etuoikeus. Seitsemän wuoden kuluttua eiwät yleensä woi tulla nimitetyiksi wirkoihin, elleiwät osaa wenäjänkieltä.</p>
        <p>Lisäksi tulisi: 1) perustaa siellä, missä se on wälttämätöntä, wäliaikaisia kielenkääntäjien, esittelijäin ja muita wirkoja; 2) määrätä säännökset wirkamiesten tai sellaisiksi pyrkiwäin 
          wenäjänkielen sekä paikallisten kielten taidon osoituksista; 3) järjestää wenäjänkielen opintoja henkilöille, jotka walmistautuwat ei- luokkawirkoja warten; 4) näiden toimenpiteiden 
          toteuttamisesta aiheutuwien menojen peittämiseksi ottaa wuosittain warsinaiseen meno-sääntöön summittaisia määrärahoja waltionrahaston suoritettawaksi.</p>
        <p>Senaatti on käsitellyt näitä ehdotuksia ja pääasiassa hywäksynyt ne.</p>
      </Article>

      <Article titleText="Todenpuhuja ei saa yösijaa.">
        <h5>Pakinaa.</h5>
        <p>Tunnettu sosialisti, maisteri Timo Korpimaa julkaisi äskettäin kirjasen „Maamme sosialidemokratia, Mietteitä ja arwosteluja”, jossa hän paljasti kursailematta maamme sosialidemokratian 
          warjopuolet, johtokoplan, warsinkin „siltasaarelaisten” humpuukipelin, jota harjoitetaan köyhälistön nimessä. Kirjanen ei ole antanut pahaakaan rauhaa sosialistiemme pomomiehille. Pesässä on 
          ollut aika pörinä. Ensin he koettiwat nolata „toweri” Korpimaata lehdessään, mutta tämäpä sanoikin „eduskunnan klouwnille”, piirisihteeri Jaloselle y. m. suolaset sanat. Sitten kutsuiwat 
          „towerit” „herrasmies” Korpimaan, joksi häntä kirjasen ilmestyttyä on sosialistien piireissä alettu karahteerata, H:linnan sos.dem. kunnallisjärjestön eteen wastaamaan wäitteistään. 
          Ensimäiseksi pidettiin Korpimaan walitsemaa julkaisumuotoa sopimattomana. Hänen olisi pitänyt esittää mietelmänsä „towerien” kokouksessa tahi heidän lehdessään. Nyt hän on lähtenyt puhtoista 
          sosialistipuoluetta „mustaamaan” po-po-por-bor-warrr-ien edessä! Sitä eiwät „wilpin sankarit” ja „walheentietoiset opettajat” ole jaksaneet sulattaa. „Altawastaaja”, „syytettyjen” penkille 
          lykätty Korpimaa pysyi wäitteessään, että sosialistien waltiopäiwämiehet Manner ja Kuusinen owat „wilpin ja walheen sankareita”. Muutamin paikoin teki syytetty myönnytyksiä, mutta pääasiassa 
          jäi edelleen kirjansa kannalle. Pahasti oli „towereihin” koskenut syytös, että sosialistien iltamissa „puukon heilutus korwaa muun ohjelman” ja syytökset sosialistilehtien alistumisesta 
          pakkokappalejutuissa ja moitteet „laimeasta walistusharrastuksesta”. „Toweri” Korpimaa piti „suurena liiotteluna niiden mielipidettä, jotka sosialidemokratian kannalta eiwät näe porwariston 
          suhtautumisessa taantumukseen mitään hywää ja kannatusta ansaitsewaa”. Tätä koettiwat „tuomareiksi” asettuneet myös „alas lyödä”.</p>
        <p>Tuloksena „kunnallisjärjestön" kokouksesta oli se, että Timo Korpimaalle annettiin paheksumislausunto „puoluetta loukkaawan kirjasensa johdosta”. Tämän kuultuaan ilmoitti Korpimaa eroawansa 
          kunnallistoimikunnasta. Järjestön päätöstä wastaan pani „toweri” A. Mäkelä wastalauseensa. „Wilpinsankarit” eiwät woineet tietystikään päätöstään maailmaan saattaa todellisessa walossa, 
          jonka takia „tuomittu” Korpimaa ilmoittaa wiimeisessä „Häm. Woimassa”, että 15 kunnalisjärjestön jäsentä ei ottanut äänestykseen osaa. „Häm. W.”, jonka toimittajat oliwat paheksumislauseen 
          antajina, ei hiiskunut tästä mitään, waan kertoi Aatami Mäkelän yksin olleen paheksumislausuntoa wastaan. Näistä 15 owat useat „paheksumislausuntoa” wastaan samoin kuin monet järjestön 
          jäsenet, jotka oliwat kokouksesta poissa. Wielä ilmoittaa maist. K., että hän on usealta paikkakunnan sosialistilta saanut tunnustusta kirjasensa johdosta ja katsoo sentähden olewansa 
          oikeutettu julkisesti ilmoittamaan, että paikkakunnan sosialisteista ainakaan suuri wähemmistö ei kannata tehtyä „paheksumislausuntoa”.</p>
        <p>„Häm. W:n” torstaisessa numerossa panee toistakymmentä sosialistia wastalauseensa kunnallisjärjestön „paheksumislausuntoa” wastaan ja katsowat, että Korpimaa kirjasessaan on pysynyt hywänä 
          sosialidemokratina” ja pitäwät puolueelle „terweellisenä” ja ojentawana” sitä arwostelua, jonka hän kirjasessaan on antanut.</p>
        <p>„Häm. W”. antaa ylen Aatami Mäkelänkin, jota se nimittelee „humoristiseksi” kokouspuhujaksi ja „Steffan Walleeniksi”. Sellaista se on sosialistien itsewaltius. Ei heidän piirissään sallita 
          arwostelu- ja sananwapautta. Siitä on Korpimaan juttu hywänä esimerkkinä. Mätä ja wilppi ei siedä kohentelua.</p>
      </Article>

      <div className="interTitle">14.3.1914</div>
      <Article titleText="Sawukkeista.">
        <p><span className="accent">H. Borgströmin</span> tupakkatehdas Helsingistä onnellistutti eilen toimitustamme oiwallisilla tuotteillaan. Parhaana todisteena niiden erinomaisuudesta on siitä 
          lähtien toimitushuoneen täyttäwä yhä laajenewa sawupilwi, jonka keskeltä kuuluu enään wain ylistelewiä huudahduksia. „Borkkarilla” onkin jo wakiintunut maine täällä Etelä-Hämeessä kuten 
          muuallakin. Erityisesti tahdomme tällä kertaa huomauttaa hienosta turkkilaisesta tupakasta walmistetusta <span className="accent">Kosmos</span>-sawukkeista, jonka pitäisi tyydyttää kuinka 
          kehittynyttä tupakkamiehen „makua” tahansa. Suurta suosiota owat saawuttaneet erinomaiset <span className="accent">Tilaus</span>-sawukkeet, jotka jo alkawat käydä miltei kansanomaiksi. 
          Uutuutena on tehdas hiljattain laskenut liikkeeseen puuimukkeella poltettawan erinomaisesta tupakasta walmistetun <span className="accent">Walio-Tilaus</span> sawukkeen, joka halpahintaisena 
          on tarkoitettu wastapainoksi paljon lewinneelle Työmies-paperossille, johon kulutetut rahat menewät elleiwät suorastaan ulkomaille niin ainakin muukalaiselle miehelle. Saatamme mielihywällä 
          wakuuttaa <span className="accent">Walio-Tilaus</span> sawukkeen loistawasti wetäwän wertoja „Työmiehelle”, jopa ehdottomasti wiewän siitä woitonkin.</p>
        <p>Tiedämmehän, että kotimaista tupakkateollisuuttamme uhkaa nykyään ulkomaiselta taholta suuri waara. Sen wuoksi onkin jokaisen kunnon suomalaisen tupakkamiehen tarmolla ruwettawa 
          kannattamaan kotimaista tupakkateollisuuttamme. Ensimäisten joukossa on tällöin muistettawa <span className="accent">Borgströmin tupakkatehtaan</span> oiwallisia walmisteita.</p>
      </Article>

      <div className="interTitle">17.3.1914</div>
      <Article titleText="Wenäläistyttäjäin hommia.">
        <h5>Pakinaa.</h5>
        <p>Uusia wenäläistyttämistoimenpiteitä joka päiwä. Wastustajaimme ruokahalulla ei näy olewan mitään rajoja. Kaikki waan mulin mallin, ison isänmaan kaawaan.</p>
        <p>Paraillaan suunnitellaan koululaitoksemme ja yliopiston wenäläistyttämistä. Wenäjänkieli wiralliseksi senaattiin ja keskuswirastoihin. Seitsemän wuoden päästä ei enään muita otetakaan 
          wirkoihin, kuin wenäjän kielen taitoisia. Wirkamiesten erottamattomuudesta tehdään loppu. Uudenkirkon ja Kiwennawan lohkaiseminen muun Suomen yhteydestä aijotaan kursailematta suorittaa. 
          Kaikellaiset hewos y. m. asewelwollisuudet ulotetaan rajamaahan. Noin niinkuin wälipalaksi on hallitustamme onnellistutettu uudella täysiwerisellä wenäläisellä senaattorilla. 
          Warakuwernöörejä on Wenäjällä ja niitä pitää saada tännekin.</p>
        <p>Kuwaawaa rettelöimishalua on senaatti osoittanut silläkin, että se äskettäin eroitti etewän suojeluskaswatusasiain tarkastajan, wphra Bonsdorffin toimestaan. Wphra B:n rikos oli siinä, 
          että hän erinäisiin toimiin oli ehdottanut 2 henkilöä, jotka owat istuneet yhdenwertaisuuslain wastustamisesta Krestyssä.</p>
        <p>Wielä eräs pikkujuttu. Senaatti toimitti erään „poistokysymyksen”. Porsas ja nukkuwa yöwartija owat saattaneet waltakunnan arwon suureen waaraan. Joku korkea wiranomainen oli jollakin 
          koulujemme tarkastusmatkalla koulun seinällä nähnyt wanhoja Wenäjän kyläoloja kuwaawan idyllimäisen kuwan, jossa m.m. oli kuwattu tila ja nukkuwa yöwartija. Seurauksena oli senaatin 
          määräys kouluylihallitukselle poistaa mainittu kuwa kouluista.</p>
        <p>Jutussa on hullunkurisinta se, että tämä kuwa kuuluu niihin siwistyshistoriallisiin kuwiin, joita Venäjällä wiranomaisten puolesta lewitetään kouluihin.</p>
        <p>Touhua on siis tawattoman paljon. „Uudistusten” etunenässä kulkee kenraalikuwernööri, joka toimittaa hallinnolisia uudistuksia hywin pikaisesti käyntiin. Hywänä apuna on hänellä senaatin 
          uusi wenäläinen warapuheenjohtaja, joka ei woi kärsiä senaatin wahtimestarien suomalaismallisia pukujakaan.</p>
        <p>Warakuwernöörien tarpeettomuudesta on tässäkin lehdessä aikaisemmin huomautettu. Lääninhallitusten kokoonpanossa lienee korjaamista, mutta warakuwernöörit eiwät tätä pysty tekemään. 
          Kuwernööreiksi olisi nimitettäwä ei-sotilashenkilöitä ja jos ei asioita saada läänin hallituksissa kyllin nopeasti käsitellyiksi, olisi lisättäwä pystywien työntekijöiden lukua, sillä turhaa 
          on perustaa kallispalkkaisia wirkoja yksistään sitä warten, että pelkiksi poliisipääliköiksi muodostuwat kuwernöörit pääsisiwät „työtaakkansa wähenemiseksi” piirtämästä nimeänsäkään 
          siwiilipaperiensa alle. Huomio on kohdistettawa itse kuwernöörien asiantuntemukseen tai sitten alempien wirkamiesten pätewyyteen. Warakuwernöörien hommaaminen on joutawaa mullistusta, 
          waltion warojemme haaskausta ja turhaa yhdenmukaisuuden matkimista.</p>
        <p>Lopuksi kuwaawa juttu eräästä maan-waaristamme. Lääninhallituksen esittelijä löi wetoa siitä, että saisi kuwernöörinsä tunnustamaan suuren welkakirjan. Pisti 100,000 mk:n welkakirjan 
          muiden asiapaperien joukkoon ja kuwernööri kirjoitti nimensä kaikkiin papereihin tietämättä hölynpölyä siitä mitä ne sisälsiwät.</p>
      </Article>

      <div className="interTitle">21.3.1914</div>
      <Article titleText="Waltiopäiwiltä.">
        <h5>Tärkeä päätös.</h5>
        <p>Eduskunnan wiime tiistainen istunto oli tärkeimpiä mitä pitkiin aikoihin on pidetty. Siellä tehty päätös, jonka mukaan ehdotus asetukseksi <span className="accent">pientiloista</span> ja 
          asetukseksi Suomen <span className="accent">maalaiswäestön asutusrahastosta</span> kolmannessa käsittelyssä lopullisesti hywäksyttiin, on sangen kauas kantawa; tämän hywän päätöksen 
          tulokset tulewat ulottumaan moniin sukupolwiin wielä meidän jälkeemme. Mutta kyllä kowalle ottikin, monta estettä ja koukkua koettiwat „towerit” tielle rakentaa ja nähtäwasti wiimeisenä 
          keinona koettiwat „wäsyttää” eduskunnan muita puolueita, jotka yksituumaisesti owat tätä tärkeätä asiata ajaneet. Onhan sosialistien puhetulwa mainitun asian käsittelyssä ollut wallan 
          tawaton ja luonnollisesti on toiselta taholta myös täytynyt wastata heille ja oikaista heidän asiattomia wäitteitään. Sattuwasti huomauttikin eräs edustaja, että tämän asian esillä ollessa 
          on siihen tuhlattu niin paljon aikaa, waiwaa y. m., niin että jos tämä kaikki laskettaisiin rahaksi, sillä summalla oslisi jo monelle tilattomalle saatu hankituksi oma palsta.</p>
        <p>Mutta minkätähden sosialistit niin kiihkeästi owat wastustaneet sitä, että tilattomille hankittaisiin maata ja että saataisiin asutus maassamme lewiämään yhä laaemmille aloille? 
          Minkätähden juuri ne, jotka äänekkäästi ja suurisuisesti selittäwät ajawansa wähäwäkisten asiaa, wiimeistä miestä ja naista myöten kynsin hampain owat tätä asiata wastustaneet, kun heillä 
          päinwastoin juuri olisi ollut hywä tilaisuus kerrankin käytännössä toteuttaa „aatteitaan”. He owat eduskunnassa kyllä sanomattoman laajasanaisesti puhuneet kaikenlaisesta „orjuuttamisesta” 
          ja muusta senkaltaisesta, mutta keskustelujen kuluessa on wähitellen yhä selwemmin käynyt ilmi, että se on waan kaikki ollut „taktiikkaa”, tuota ijänikuista taktiikkaa ja agitatsionia, joka 
          on heille paljon tärkeämpää kuin konsanaan tilattomien etu. Käwihän esim. „toweri” Gyllingin lausunnosta wiime tiistaina sangen selwästi ilmi, että sosialisteille ja heidän 
          luokkataistelulleen on sitä edullisempaa kuta kauemmin tilattomien tila pysyy niin kurjana kuin mahdollista. Mainittu edustaja koetti muuten - oppineena miehenä - oikein tieteellisesti 
          selittää sosialistien kantaa, mutta toiset oppineet ja ehkäpä wielä oppineemmatkin kumosiwat hänen kamariwiisautensa. Niin esim. edustaja Tuulenheimo asiallisessa lausunnossaan sekä 
          tieteen että käytännön kannalta osoitti Gyllingin wäitteet mahdottomiksi. Muun muassa huomautti ed. Tulenheimo wastalauseessaan, että „maataloudelliset lait eiwät ole luonnonlakeja waan 
          kokemusperäisiä lakeja, joissa päätelmä on se, että samojen edellytysten wallitessa yleensä seuraukset taloudellisen elämän alalla owat samat, mutta että jos edellytykset muuttuwat, 
          seurauksetkin tulewat olemaan toiset”. Tämä on järkewää puhetta, mutta tietysti - hulluutta sosialisteille.</p>
        <p>Kun monituntinen keskustelu kolmannessa käsittelyssä wihdoinkin oli päättynyt, käytiin äänestämään. Ensin pantiin toimeen huutoäänestys, ja se oli todellakin huutamista. Asetusehdotusten 
          kannattajat huusiwat „jaa” ja wastustajat - siis „towerit” „ei”. Oli melkein niinkuin yhtäkkiä olisi joutunut Turkin sotaan; niin kowa huuto siinä käwi, että „Heimolan” seinät melkein 
          huojuiwat. Warsinkin oll sosialistien „ei” huudoissa julman paljon ääntä, waikka heitä olikin jonkun werran wähemmän kuin „porwareita”. Oikein selkäpiitä karmi, kun kuuli tuon 
          itsepintaisen, mahdottoman „ei”-huudon; tulin ajatelleeksi, että ei, ei millään ehdolla suostuta sillä taholla oikeuden ja kohtuuden mukaisiin parannuksiin. Lippuäänestyksessä sitten 
          ehdotukset hywäksyttiin 14 äänen enemmistöllä. Jännittäwää oli seurata äänten laskemista. Olihan kyllä tiettyä, että „jaa” tulisi woittamaan, mutta sittenkin! Jos wielä joitakuita 
          ehdotusten kannattajia olisi ollut poissa istunnosta, niin waaraan se olisi woinut joutua. Onhan kyllä totta, etteiwät kyseessä olewat ehdotukset ole likimainkaan täydelliset, paljonhan 
          niidenkin yhteydessä olisi wielä parannettawaa, niinkuin keskustelujen aikana on huomautettu, mutta sittenkin tulee niillä ainakin alustawana toimenpiteenä olemaan suuri merkitys 
          tilattoman wäestön aseman parantamiseksi.</p>
        <SubDivider className="dividerStyle" />
        <p>Toinenkin tärkeä asia oli esillä samassa istunnossa. Tarkoitan <span className="accent">kieltolakikysymystä</span>. Onhan eduskunta jo useita wuosia sitten tehnyt päätöksen, jonka mukaan 
          Suomeen olisi saatawa yleinen wäkijuomien kieltolaki. Mutta asia on siitä huolimatta wielä samalla asteella, ei ole wielä saatu kieltolakia. Nyt on kysymys taas otettu esille ja näyttää 
          syntywän erimielisyyttä siitä, onko taaskin yritettäwä täydellistä kieltolakia, waiko askel askeleelta siihen pyrittäwä. Koko raitis kansa maassamme luonnollisesti toiwoo edellistä, mutta 
          jos se on mahdotonta, niin hywäähän on, että edes wähitellen saadaan woittoja tällä tärkeällä alalla. - Koska aika oli jo pitkälle kulunut, keskeytettiin eduskunnan istunto sen jälkeen, 
          kun asiasta oli jo useita puheenwuoroja käytetty. Onpa mieltäkiinnitttäwää nähdä, tuinka tämä asia, joka myös on kansamme elinkysymyksiä, ratkaistaan.</p>
        <p className="signature">Eppu.</p>
      </Article>

      <div className="interTitle">24.3.1914</div>
      <Article titleText="Hämäläisiä kysymyksiä.">
        <p>Eräs „Matkailija" on puhutellut läänimme kuwernööriä ja kertoo „U. S:ssa” haastattelunsa tuloksista. Kaikesta päättäen ratkeaa lääninhallitus Tampereen hywäksi, kuwernöörin tietämän 
          mukaan. Kun Tampereelle sijoitetaan sotawäkeäkin, on muutto jo siltäkin kannalta suotawa mahdollisten hankausten estämiseksi paikallisen wäestön ja wenäläisen sotawäen wälillä. 
          Hämeenlinna ei woi kuwernöörin mielestä koskaan saawuttaa suurempaa nousua eikä siitä woi tulla suurempaa teollisuuskaupunkia, mutta pysyy se sinä, mikä se on, werrattain wilkkaana 
          ympäristöpitäjien liikekeskuksena. Matkailijakeskus siitä woi tulla kauniin asemansa ja ihanan ympäristönsä takia. Ja woisipa Hämeenlinna, halpoine wuokrineen, terweellisine, kauniine 
          asemineen tulla tyyssijaksi eläkettä nauttiwille ja pikku kapitalisteille, jotka täällä woisiwat wiettää päiwänsä herttaisesti ja wähemmin menoin kuin esim. pääkaupungissa.</p>
        <p>Wielä huomautti kuwernööri Spåre, kuinka suotawaa olisi, että waltio ajoissa ostaisi Karlbergin alueen ja muuttaisi sen kansallispuistoksi.</p>
        <p>Eipä näytä arw. kuwernöörillämme olewan suuria toiweita tämän wanhan Birger Jaarlin kaupungin tulewaisuudesta ja wastaisesta kehityksestä. Haastattelusta päättäen tuntuu kuwernööri 
          käsittäwän lääninhallituksen päätehtäwäksi wain wenäläisen sotawäen suojelemisen. M. m. Tampereen syrjäiseen asemaan pääkaupunkina ei kuwernööri näy kiinnittäwän mitään huomiota. 
          Tampereen kehityksestä on kuwernöörillä sitä wastoin hywät toiweet. Se tulee kaswamaan Pispalan etukaupunkiin, jonne O. Y. Nokian tehdas on saanut walmiiksi sähköwoima-aseman.</p>
      </Article>

      <div className="interTitle">31.3.1914</div>
      <Article titleText="„Hämetär” ja raittiusharrastus.">
        <h5>Hämetär jälleen kunnostautunut.</h5>
        <p>Raittiuden Ystäwien äänenkannattaja „Kylwäjä” kirjoittaa wiimeksi ilmestyneessä numerossaan otsikolla „Hämetär jälleen kunnostautunut” seuraawaa:</p>
        <p>Hämeenlinnassa ilmestyy eräs lehtipahanen, joka kantaa suloista nimeä Hämetär. Tämä lehti on tullut kuuluisaksi erittäinkin niitten ansioittensa wuoksi, joita sillä on raittiudesta 
          rääpimisessä. Kun muutama wuosi sitten wietettiin yleistä raittiuskokousta, kunnioitti Hämetär tätä tapausta lewittämällä perättömiä juttuja kokouksen osanottajista. Pari wuotta sitten 
          pukeutui Hämetär sotisopaan sen johdosta, että Hämeenlinnan raittiusseuran toimesta oli saatettu julkisuuteen eräitä törkeitä wäärinkäytöksiä eräässä kaupungin matkailijakodissa. Kun 
          Hämeenlinnan raittiusseura tuonnoin yksityisille henkilöille lähettämillään kirjelmillä pyysi niitä liittymään seuran jäseneksi, yritti Hämetär saattaa epäluulonalaiseksi raittiusseuran 
          tarkoitukset.</p>
        <p>Äskettäin wietti Hämeenlinnan raittiusseura 30 wuotista juhlaansa. Tässä juhlassa piti tohtori Helenius-Seppälä juhlapuheen ja siinä muun muassa puhui Amerikan kieltolakitaistelusta. 
          Tästä puheesta on Hämettären alakerran Turo saanut aihetta omien mielipiteittensä esittämiseen Amerikan kieltolaeista ja niiden waikutuksista. Kun nyt nämä esitykset tästä raittiuskannalta 
          erittäin mielenkiintoisesta kysymyksestä owat ainakin suomenkielisessä sanomalehdistössä ainoanlaatuisia, ei niitä woi waitiololla siwuuttaa. </p>
        <p>Kerrottuaan ensin, että kysymyksessäolewa juhlapuhuja kosketteli myöskin Amerikan kieltolakia omalla tunnetulla tawallaan kuwatessaan sen olewan laajenemassa ja kohtaamassa koko Yhdyswallat 
          sekä kaikkien sikäläisten raittiusmiesten mielestä olewan seurauksiltaan erinomaisen, jatkaa kirjoittaja: „Meidän monien muiden tuosta kieltolaista saamat tiedot owat kuitenkin suuresti 
          toisenlaiset. Me tiedämme, että kieltolakia Amerikassa käytetään waltiollisena agitaatiokeinona, että sen tehokkuus siellä wiime wuosina on ollut suuresti heikkenemään päin. Me tiedämme 
          myöskin, että kieltolaki sellaisena kuin se on woimassa Mainessa, Kansasissa y. m. waltioissa ei tiedetä wäkijuomain käytön wähenemistä kieltolakialueilla, waan suurta laittoman salakaupan 
          rehoittamista, jonka seuraukset siwellisessä suhteessa owat wallan surkeat”.</p>
        <p>Eiwätkö todellakin Turon tiedot Amerikan kieltolaeista erinomaisella tawalla kuwasta Hufwudstadsbladetin kirjoituksia tästä kysymyksestä ja wiinatehtailijain Amerikan lähetettiläiden 
          tunnettua esityistä sikäläisistä kieltolakioloista. Jos Turo olisi wähänkään seurannut wiimeaikaisia tapahtumia Amerikan Yhdyswaltain raittiusliikkeessä, niin hän olisi tullut huomaamaan, 
          että juuri ne erinomaisen kehottawat esimerkit kieltolakien siunauksellisista waikutuksista, joita sikäläiset kieltolakiwaltiot tarjoawat, owat innostaneet Amerikan raittius- ja 
          kieltolakijärjestöjä yhä innokkaampaan taisteluun yleisen koko waltioliittoa käsittäwän kieltolain aikaansaamiseksi. Se seikka, että kieltolakiwaltioihinkin owat yksityiset henkilöt 
          saaneet juowutusjuomia tuottaa muista waltioista, joissa ei wielä kieltoa ole, on tietysti aiheuttanut salakauppaa, mutta ei kuitenkaan siinä määrässä, että sen seuraukset siweellisessä 
          suhteessa olisiwat „wallan surkeat”, kuten Hämettären Turo luulee tietäwänsä. Päinwastoin. Wertasipa kieltolakiwaltioitten oloja taloudellisessa ja siweellisessä suhteessa mihin muuhun 
          Yhdyswaltain waltioista tahansa, niin owat nämä waltiot asetettawat aina etusijalle. Kun esim. Kansas-waltiossa wiime aikoina wankilat owat suureksi osaksi käyneet tarpeettomaksi sentähden 
          että rikollisuus on wähentynyt, niin tarjoaa se siweellisessä suhteessa kuwan, joka on toisenmoinen kuin Turon esittämä. Luuleeko Turo, että hänen lukijansa uskowat hänen sanojansa? 
          Silloin täytyy hänellä olla sangen huono käsitys lukijoistansa.</p>
        <h5>*</h5>
        <p>Tohtori Helenius-Seppälän puheessa oli toinenkin kohta, jota hra Turo ei ole woinut tyyneenä siwuuttaa. Puhuja oli lausunut tyytywäisyytensä sen johdosta, että eräät lääninhallitukset 
          owat osottaneet huomattawaa raitiusharrastusta, muun muassa sulkemalla wäkijuomaliikkeet sellaisiksi juhla-ajoiksi, jolloin wäkijuomain käyttö on yleisintä ja jolloin wäkijuomien waikutus 
          esiintyy tawallista tuntuwampana. Tätä ei Turon mielestä olisi saatu sanoa.</p>
        <p>Puhuja on käyttänyt tilaisuutta hywäkseen ja raittiusasian edistämiseksi. Kun tässä juhlassa oli saapuwilla muun muassa Hämeenläänin kuwernööri ja muita Hämeenlinnan kunnallisia ja 
          hallinnollisia wirkamiehiä, niin oli siinä aiwan paikallaan huomauttaa sitä, että näillä henkilöillä on asemansa puolesta erinomainen tilaisuus edistää raittiusasiaa niillä keinoilla, 
          mitkä woimassaolewat asetukset heille antawat. Ja tunnustuksen antaminen siitä, että näitä keinoja on käytetty, se ei ole moitittawaa, waan pikemmin, kuten sanottu, kiitettäwää. Mainittu 
          kirjoitus on siksi tyhjentäwä, ettei se kaipaa mitään lisäyksiä.</p>
      </Article>

      <Article titleText="„Isien” neuvostosta.">
        <p>Kaupungin „isillä” oli torstaina tuikeanlainen täysi-istunto. Esityslistalla oli wain 8 kuiwahkoa asiaa, joten astelin tyytywäisenä kaupungintaloa kohti siinä lujassa uskossa, että kokous 
          kestää puolisen tuntia. Ennustukseni lyötiin kuitenkin säpäleiksi. Jo ensimäinen kysymys wei melkein tunnin ja jälelle jääneet toisen. Sanalla sanoen „suupruukkia” jauhettiin kuin wiimeistä 
          päiwää. Pääkaupungissa käsitellään wäliin 50 asiaa tunnissa, mutta meillä ne käännetään, wäännetään pitkin ja poikin, ettei tule puolikypsää, kuten siellä Helsingissä kait.</p>
        <p>Suurkysymykseksi muodostui tanssilawan rakentaminen Puistoon. Siitä piisasi juttua. Keskustelun alotti „isä” Sjöstedt puhuen wakawia sanoja tanssikuumetta ja lawan ratentamista wastaan. 
          Huomautti lisäksi nykyisestä wakawasta ajasta, jolloin pitäisi huwitulwalle tehdä sulkuja. „Isä” Karisto ei pitänyt lawaa tarpeen waatimana ja katsoi laulujuhlain muistoa loukattawaksi, 
          jos lawasta tehdään tanssipaikka. „Isä” Tarjanne huomautti, ettei pakkokeinolla woida ihmistä parantaa. Puolsi lawan rakentamista. Nousipa jälleen ylös „isä” Sjöstedt ja antoi 
          wirkaweljelleen mitä kuului sekä lisäsi, ettei hän ymmärrä tämän ajatuksia. „Isä” Böök: Meillä tanssitaan 9 kk. seinien sisällä, joten pitäisi hywin woitaman olla 3 kk. luonnon helmassa 
          tanssimatta. Nuorisoyhdistykset owat muodostuneet pelkiksi tanssiseuroiksi. „Isä” Tarjanne pani wastalauseensa „isä” Böökin lausuntoa wastaan, että nuorisoseurat olisiwat pelkkiä 
          tanssiyhdistyksiä. Hra B. huomautti, että hän ei sellaista ole nuorisoseuroista tarkoittanutkaan sanoa. „Isä” Laurela ei tahtonut rajoittaa nuorison wapautta, muistuttaen „isiä”, että hekin 
          owat kerran olleet nuoria ja „pyörähdelleet”. Tätä hänen ei olisi pitänyt sanoa, sillä „Isä” Sjöstedt opetti mitä kirkkoraadin jäsenelle sopii ja ei sowi. „Isä” Laurela puolusti lausuntoa 
          sillä, että raamatussakin puhutaan tanssista. Joku huomautti tanssilawasta muodostuwan tappelupaikan, jossa on waikeata pitää järjestystä. „Isä” Alanko olisi antanut luwan sillä ehdolla, 
          ettei se tuottaisi pahennusta. Mentiin siinä wielä walssit, masurkat ja tangot ennenkuin lähdettiin Linnanniemelle wilwoittelemaan. Erityistä tanssilawaa ei päätetty rakentaa, mutta siinä 
          muodossa, laitetaanko laululawasta tanssipaikka, jäi asia pöydälle.</p>
        <p>Katukäytäwän rakentaminen Linnanniemelle johtawalle tielle sai hiljaisemmatkin „isät” puhetuulelle. Hiljaiset „isät” waatiwat kustannusarwiota koko tien kohottamisesta. „Isä” Tarjanne 
          wastusti käytäwän laittamista, paitsi jos parkkimäkeläisetkin ottaisiwat kustannuksiin osaa, pyytäen „isä” Björkbomia toimimaan tähän suuntaan. „Isä” Laurelan mielestä olisi kaupungin 
          pidettäwä kaduistaan huoli, koskapa ollaan kowin kärkkäitä kowistamaan yksityisiä talonomistajia. Ihmetteli että Hattulan nimismies kärsii niin huonoa tietä kuin puheenaolewa. Mainittua 
          tietä käytetään käwelytienä, tuumi „isä” Sjöstedt, kehoittaen wirkistystä hakewia kiertämään wanhaa tietä, jos mieliwät Puistoon.</p>
        <p>Käytäwäjuttu lykättiin takaisin rahatoimikamariin, jonka tulee laatia uusi kustannusarwio.</p>
        <p>Mitä pitemmälle päästiin, sitä tuikeammaksi käwiwät isät. Heti tohtori Mannerin luowuttua rahatoimikamarin puheenjohtajantoimesta ja pankinjohtaja Breitholtzin walittua tilalle, 
          ehdotettiin kamarin sääntöihin sellainen muutos, että waltuusto walitsee rahatoimikamarille puheenjohtajan. Asiasta päätettiin pyytää kamarin lausuntoa, joka nyt saatiinkin, mutta sepä 
          saattoikin eräiden isien haiwenet pystyyn. Kamari piti entistä järjestystä hywänä, kun se itse paraiten tietää, kuka joukosta on pätewin puheenjohtajaksi. „Herran poika ja Kaitarannan 
          Kustaa”. Nyt iskettiin ja maa ja taiwas tärisi! kuten ennen Jukolan weljesten tapellessa. „Isä” Tarjanne iski halko aseena: Rahatoimikamari ei ymmärrä kirjelmiä ja lörpöttelee joutawia, 
          jonka takia sille on annettawa <span className="accent">paheksumislausunto</span> ja muistutettawa, että rahatoimikamarin miehet owat waltuuston alaisia. Ja minä kun olen pitänyt kamarin 
          puheenjohtajaa ja jäsentä Andersinia, Sundgrenia, Bindqwistejä lukutaitoisina miehinä. Ihminen on erehtywäinen, kuten minäkin. „Isä” Tötterman ei nyt sentään lähetetä paheksumislausuntoa, 
          waan kirjelmän. „Isä” Karisto katsoi rahatoimikamarin täyttäneen welwollisuutensa ja piti luonnollisena, että kamari saa esitää oman mielipiteensä. Jos herrat eiwät „tykkää” kamarin 
          puheenjohtajasta, woihan ensi kerralla hänen tilalleen walita uuden eikä pitää sellaista mutinaa selwästä asiasta. Paheksumislausuntoa ei päätettykään antaa. Armeliaisuus woitti. Eräs 
          „isä” porstuassa wakuutteli, että hra Manneria wastaan ei „isä” Tarjannekaan olisi uskaltanut nousta. Huomautettiin myös, että kansakoulun, sairashuoneen y. m. toimikunnat walitsewat itse 
          puheenjohtajansa.</p>
        <p>Toinenkin kelwoton wirasto löydettiin. Se on sairashuoneen johtokunta, jonka puheenjohtajana on tri Bartram. Mainittu johtokunta tekee kypsymättömiä päätöksiä, johtaa asiat päin hongikkoa 
          j. n. e., tuumiwat „isät”. Sairashuoneen korjaukset maksoiwat 83,000 mk., jolla summalla jo olisi rakentanut aiwan uuden sairaalan.</p>
        <p>„Isä” Böökiä ei koko suukopu miellyttänyt. Hän ehdotti, että istuntoja pidettäisiin wain kerran kuukaudessa, eikä kahdesti, kuten nyt. Se auttoi. Tappi pantiin kiinni ja isät lähtiwät 
          mietteissään pois.</p>
        <p className="signature">Siwullinen.</p>
      </Article>

      <div className="interTitle">7.4.1914</div>
      <Article titleText="Hämeenlinnan maistraatti.">
        <p>Kun Hämeenlinnan maistraatin muut jäsenet, paitsi w. t. puheenjohtaja, how. ausk. H. W. Rauler, on wäkiwaltaisesti wiety Pietarin wankilaan, ei maistraatti ja raastuwanoikeus woinut wiime 
          lauantaina määräaikana alkaa istuntoaan, jonka takia w. t. puheenjohtaja ilmoitti asiasta lääninkuwernöörille ja pyysi tätä määräämään toisen raatimiehen, kun ylioppilas G. Salmi oli 
          suostunut kunnallisraatimieheksi. Kuwernööri määräsikin samana päiwänä ylioppilas G. Salmen ja lääninregistraattori G. Karhin toistaiseksi raatimiehiksi.</p>
      </Article>

      <div className="interTitle">18.4.1914</div>
      <Article titleText="Kaupungin „isien” neuvostosta.">
        <p>Isien torstainen kokous oli kuiwanlainen, johon ei tahdottu saada mitään waihtelua. Waihdoksia kokouksessa tapahtui. Sihteerilleen antoiwat isät lyhyen kewätloman, ja hywäksyiwät w. t. 
          sihteeriksi wankien johtajan B. Andersinin. Aina waan wankilan miehet ohjaksissa. Wakinainen sihteeri on wankilan miehiä ja isien puheenjohtaja on entinen wankilanjohtaja. Siiwollisuudesta 
          ja säädyllisyydestä ei siis ole hywä poiketa. Hra sihteeri antoi näytteen sisäluwussa, mutta kirjelmä lienee ollut epäselwä, kun puheenjohtajan täytyi edesauttaa „louhimista”.</p>
        <p>Isiä itseä ei kuiwat kysymykset ikäwystytä siitä päättäen, että hylkäsiwät isä Böökin ehdotuksen istuntojen pitämisestä wain kerran kuussa.</p>
        <p>Isä Laurelan ehdotus terweys- ja sairastenhoitoa koskewien ohjesääntöjen uusimisesta ei miellyttänyt isä Tarjannetta, jonka mielestä ehdotuksen tekijän olisi pitänyt esittää kirjallinen 
          ja perusteltu anomus.</p>
        <p>Kansakoululääkärin palkanmaksutapaan isät tarrasiwat innolla kiinni. Lääkäri Manner oli nostanut palkkansa 9 kertaa wuodessa á 100 mk. Tämän johdosta saiwat isät aiheen huomauttaa, että 
          wuodessa on 12 kuukautta y. m. yhtä uutta. Isä Sjöstedt piti wirkaa „koruwirkana”, jota nimitystä wastaan isä Tarjanne pani wastalauseen. Palkka päätettiin wastedes maksaa kuukausittain.</p>
        <p>Kysymysten kuiwuus ja kewään wäkewä wetreys alkoi waikuttaa isiimme. Hra Tarjanne aikoi wiedä heidät puiston rantaan uimaan, mutta isä Laurela pani wastaan, pitäen Tarjanteen ehdotusta 
          uimahuoneen rakentamisesta huonosti perusteltuna ja tarkoituksena olewan saada „uimahuone ryssille”. Isät totteliwat Laurelan warotusta ja tappoiwat koko uimajutun. Kun uiminen onnistui näin 
          huonosti, yritettiin mennä saunaan, mutta sitä ennen waati kunnallissaunan johtokunta wihta- ja saippuarahaksi 5,000 mk. nyt ja saman määrän wastedes wuosittain. Eräitä isiä tällainen 
          nylkeminen harmitti. Isä Karisto wastusti saunaanmenoa. Laitoksen suhteen on tehty laskuwirheitä ja hoito on ollut puutteellista. Ne kymmenettuhannet, mitä saunaa warten on uhrattu, saawat 
          riittää. Saunan tulewaisuus on mahdoton, kun johtokunta lupaa wastedeskin tappiota. Tehköön yhtiö konkurssin tai myyköön saunan yksityiselle, kun yksityiset kerran kykenewät pitämään 
          saunansa kannattawina. Isä Sjöstedt arweli hoidon olewan puutteellista, jonka takia yleisö ei käytä saunaa. Epäkohtia löytyy, waatetushuoneet owat hikisiä ja erottaa niitä toisistaan wain 
          pienet lautaseinät. Toiwoi yhtiölle tulewaisuutta, mutta wastusti 5,000 mkn kenkkäämistä. Isä Wartia mainitsi tappioiden wähentyneen 7,000:sta 4,000:een ja arweli liikkeen wielä tuottawan 
          woittoakin. Isä Laurela tiesi liikettä hywin hoidettawan, mutta ihmiset owat wesijohdon saatuaan rakentaneet kylpyhuoneita, joten saunan tarwitsijain luku on wähentynyt.</p>
        <p>Olihan siellä isän neuwostossa wielä muitakin juttuja, mutta niistä toisessa paikassa lehteä.</p>
        <p className="signature">Justus.</p>
      </Article>

      <div className="interTitle">21.4.1914</div>
      <Article titleText="„Harhateillä.”">
        <p>Wiime aikoina owat sanomalehdet tietäneet kertoa, että senaatin asettama waliokunta ottaa wiimeinkin, wiiden wuoden odotuksen jälkeen eduskunnan hywäksymän kieltolain käsitelläkseen ja 
          antaa siitä lausuntonsa. Raittiusjärjestöt owat tämän johdosta ilmituoneet kansan hartaan toiwon olewan, että asia ratkaistaisiin myönteiseen suuntaan. Eri puolilta maatamme owat 
          raittiuswäen lähestystöt käyneet senaatissa ja sen puheenjohtajan, kenraalikuwernöörin luona ja suorin ja rehellisin sanoin huomauttaneet, miten kansamme waltawa enemmistö tämän lain 
          wahwistusta odottaa ja kuinka H. M. Keisari jo 5 wuotta sitten on kehoittanut senaattia laatimaan kieltolain. Aiwan äskettäin on H. M. Keisari käskenyt Wenäjän rahaministeriä 
          työskentelemään raittiusystäwälliseen suuntaan, joten sekin on raittiuswäkeä kannustanut uusiin ponnistuksiin.</p>
        <p>Ruotsinkieliset lehdet, jotka aina owat esiintyneet kieltolain wastustajina - koskeehan asia heidän taloudellisia etujaan -, owat rientäneet leimaamaan raittiuswäen äskeiset toimenpiteet 
          tuomittawaksi, epäisänmaaliseksi teoksi. Käynti hallitusmiesten puheilla on ollut muka „epäterwettä liehakoimista”, häpeällistä ja korwaamattomia elämänarwoja repiwää työtä, 
          raittiushumalasta johtunutta, j. n. e. „Dagens Press” puhuu lisäksi iwallisin sanoin kenraalikuwernöörin suosiollisesta kädenpuristuksesta, lähetystön uskosta isälliseen hallitukseen y. m. 
          Lehti wiittaa wielä kaupunkikuntain tekemiin wäkijuomakauppain rajoituksiin, jotka lupaawat mitä parhaita tuloksia.</p>
        <p>Perin tuttua puhetta. Samaan nuottiin owat kieltolain wastajat ennenkin wiserrelleet!</p>
        <p>Näin kirjoitti ruotsalainen lehti torstaina. Esimerkki on tarttunut nuorsuomalaisiin lehtiin. Perjantainen „Hels S.” lyö lähetystöä, jossa oli edustajia kaikista suomalaisista puolueista, 
          oikein olan takaa. Lähetystö on muka unohtanut, että wetoaminen kenraalikuwernööriin muuttuu jonkinlaiseksi „luottamuksenosoitukseksi sortowallan edustajalle” ja nykyiselle järjestelmälle. 
          Turwautuminen häneen käännetään aseeksi meitä itseämme wastaan waikeassa oikeustaistelussamme. Onpa kaiken päälle poikettu „todellisesta kansanwaltaisesta ajatustawastakin”! Lehti wiittaa 
          lopuksi, Krestyyn wietyihin wirkamiehiin. Sekä lausuu wielä, että täten on hämmennetty kotioloissa oikeustajuntaa ja käsitystä wainowallan tarkoituksista ja „sortajan luo ei niin mennä” 
          eikä oteta wastaan hänen kädenpuristuksiansakaan.</p>
        <p>„Tamp. S.” lyö isoa rumpua ja „edistysmielisyydessään" wäittää, että kieltolain toteuttaminen nykyisissä oloissa aiheuttaisi mitä arweluttawinta sekasortoa. Tuntuu siltä kuin tämä 
          nuorsuomalainen lehti ei olisi niin huolissaan lähetystöstä kuin kieltolain hywäksymisestä. „Hbl:n” tawoin opettaa lehti hallitusmiehille finanssipolitiikkaa, huomauttaen kieltolain 
          woimaansaattamisen lakkauttawan palowiinaweron ja malassuostunnan sekä wähentäwän tullituloja. Lehti ei näy tietäwän, etteiwät waltiotaloudelliset seikat pane esteitä kieltolain 
          toteuttamiselle, kuten eräs hallituksen jäsen on lähetystölle maininnut. „Hbl.” ja „Tamp. S.” jääwät nyt yksin näitä taloudellisia waikeuksia murehtimaan.</p>
        <p>Pääasiallisin syy, joka on mainittu epäilyttäwän kieltolain toteuttamista, on mahdollinen luwattoman wäkijuomaliikkeen entistäänkin suurempi esiintyminen.</p>
        <p>Kun ruotsalaiset owat tawan takaa salakähmäisesti rawanneet hallituksen portaita, asettuwat heidän lehtensä hywinkin hiljaisiksi, mutta kun raittiuswäki koettaa waikuttaa asiansa 
          hywäksi awoimesti, huutawat samat lehdet „epäeterweellisestä liehakoimisesta” ja „harhateistä”. Ruotsalaiset owat lukemattomat kerrat wedonneet nykyisen wirkawallan edustajiin saadakseen 
          kumoon eduskunnan hywäksymän kieltolain, kätelleet ja kumarrelleet heitä sekä unohtaneet „jäykän epäwirallisuuden”. He owat pyrkineet waikuttamaan ulkowaltoihin, m. m. Ranskaan, jotta 
          sieltäpäin asetettaisiin esteitä kieltolaille ja Hallitsijan päätökselle. Pienistäkin rajoituksista owat he walitelleet. Hallituksessa, jota „perustuslailliset” niin hirweästi kammowat, 
          on enemmistö ruotsalais-nuorsuomalaisen puolueen luottamusta nauttiwia miehiä, jotka tekewät alkutyöt ja esittelewät asiat senaattoreille. Kieltolakiasiankin tulee esittelemään eräs 
          huomattu ruotsalaisen puolueen mies, jota lähetystä myös puhutteli. Miksi ei waadita näiltä miehiltä jäykkää wirallisuutta? Jäykkyyttä ei ole liioin waadittu rautatielähetystöiltä ja 
          arpajaisten anojilta eikä monilta muilta lähetystöiltä.</p>
        <p>Nämä raittiuswäen lähetystöstä pahentuneet „perustuslailliset” joutuwat nyt omituiseen waloon. Eräs pääkaupungin lehti kertoo lauantaina, että Pietarin teitä kulkemalla on koetettu tehdä 
          mitättömäksi Helsingin waltuuston päätös, jonka mukaan ei kesäk. 1 pstä myönnetä mitään erikoisia wiinien ja muiden miedompain wäkijuomain wähittäismyyntioikeuksia yksityisille. Tästä 
          hywästä päätöksestä walittiwat wiinikauppiaat kuwernööriin. Sen jälkeen owat nämä „isänmaallisuudestaan” kerskuwat „sankarit” tulleet Pietarin teitä ja sitä warten käyttäneet wielä jonkun 
          ulkomaalaisen konsulinkin apua. Konsuli aikookin käyttää waikutustaan epäterweelisten sekoitusten, „holipompelien myymäläin” oikeuksien jatkamiseksi, waikka nämä kauppiaat tuskin 
          nimeksikään owat käyneet kauppaa alkuperäisillä ulkomaan wiineillä. Neuwottelut owat jatkuneet kuwernöörin ja sen yläpuolella olewien wiranomaisten wälillä. Senaatin enemmistökin lienee 
          asettunut wiinikauppiaiden puolelle. </p>
        <p>On kuin kohtalon iwaa, että tieto tästä salakähmäisyydestä ja kuntaimme itsehallintoa uhkaawasta iskusta tuli tietoon juuri samaan aikaan, jolloin raittiuswäkeä on yksitoistatuumaisilla 
          paukutettu ja prikattu yksityisiä lähetystön jäseniä.</p>
        <p>Miksi syyttäjäin ääni on käynyt hiljaisemmaksi? Miksi ruotsalaiset lehdet waikenewat? Wiinamiesten hommat owat wain „arwelluttawia”, mutta raittiuswäki on tehnyt itsensä syypääksi 
          epäterweeseen liehakoimiseen! Miksi on näin äkkiä unohdettu Krestyn wangit, „sortowallan edustajat”, itsehallintomme ja oikeusjärjestyksemme häwittäminen, „luottamuksenosoitus sortowallan 
          edustajille”? Tuomitsijat, oletteko nukkuneet?</p>
        <p>Wiinikauppiaat owat wääristelleet kansan mielipidettä, toimineet salakähmäisesti, koettaneet saada kumoon waltuuston päätöksen, järkyttäneet kuntain itsehallintoa ja hääräileet itsekkäissä 
          ja yksityisissä pyyteissä. Raittiuswäki taas on toiminut wallan awoimesti, walwonut kansan etuja ja onnea ja pyytänyt eduskunnan lailiselle päätökselle suotuisaa tulosta ja kehoittanut 
          säätämään kansalle kerran mieluisenkin lain.</p>
        <p>Kumpi lähetystö on häpäissyt itsensä ja kumpi on tehnyt epäisänmaallisemman teon?</p>
        <p className="signature">Minä.</p>
      </Article>

      <div className="interTitle">23.4.1914</div>
      <Article titleText="Rengon mäkien alentaminen.">
        <h5>Wangit töitä tekemään.</h5>
        <p>Mikäli olemme kuulleet, on Hämeenlinnan ja Rengon waltamaantiellä olewien mäkien tasoittamista pohtiwissa piireissä herännyt ajatus saada käyttää täkäläisen lääninwankilan wankeja 
          mainittuun työhön ja on tästä anomukstakin jo tehty. Wankien tasoitettawaksi jäisi ainakin maantien Hämeenlinnan puoleisessa päässä olewat suurimmat mäet.</p>
        <p>Anomus on jo jätetty wankeinhoitohallitukseen. Waltiolta aijotaan anoa työkaluja tasoitustöitä warten.</p>
        <p>Wangit owat aikoinaan mainitun maantien rakentaneetkin. Suotawaa olisikin, että wangit toimitettaisiin tällaiseen waatiwampaan yleishyödylliseen työhön.</p>
        <p>Kuten tunnettua, on kysymys Rengon mäkien tasoittamisesta saanut alkunsa maanwiljelysneuwos Bremer-wainajan tarkoitukseen tekemän testamenttilahjoituksen johdosta.</p>
        <p>Wiime sunnuntaina pidetyssä kokouksessa päätettiin ottaa insinööri O. Nero töiden asiantuntijaksi ja silmämääräisen tutkimuksen toimittajaksi.</p>
        <p>Töitä tehdään ensin kolme wuotta.</p>
      </Article>

      <div className="interTitle">28.4.1914</div>
      <Article titleText="Isorokko maaseudulla.">
        <p>Työm. Mikkola, joka oli jonkun aikaa isoonrokkoon sairastumisensa wuoksi hoidettawana Hollolan kulkutautisairaalassa lähellä Lahtea, on nyttemmin toipuneena päästetty sairaalasta.</p>
        <p>Kaupustelija Kilpinen, Hollolan Lahdenkylästä, on kaupustelumatkoillaan sairastunut isoonrokkoon. Hänen oli jäätäwä Walkealassa sairaalaan hoidettawaksi.</p>
        <p>Wiides Riihimäellä isoonrokkoon sairastunut on työläinen Tyyne Aalto Jokikylästä. Yleistä rokotusta paikkakunnalla jatketaan. Tyyne Aalto eristettiin t. k. 20 päiwä ja on wiety 
          wäliaikaiseen sairaalaan. Hän työskenteli höyrysahalla. Sahan työmiehistö on rokotettu t. k. 21 p. Rokotettujen lukumäärä on 185 sahalla. Kunnallislautakunta on määrännyt yleisen 
          rokotuksen. Poisjääneet on määrätty tuotawaksi poliisiwoimalla.</p>
        <p>Warowaisuutta taudin suhteen on muistettawa!</p>
        <p>Kuusjoen pitäjässä on sairastunut kokonainen perhe isoonrokkoon.</p>
        <p>Epäiltyjä tapauksia on sattunut Koskella (T. l.) ja Tampereella.</p>
      </Article>

      <div className="interTitle">5.5.1914</div>
      <Article titleText="Sotaa sodan vuoksi.">
        <p>Eräs meikäläinen politiikko huomautti kerran, että jos meillä olisi taisteltawa todellista, järjestelmällistä sortopolitiikkaa wastaan, olisi meidän paljoa helpompi ehättää edelle ja 
          tehdä sille tokeita, mutta wenäläisten politiikka tässä maassa ei ole mitään politiikkaa, heidän pyrkimystensä piiri ei ole millään tawoin rajoitettu, he eiwät itsekään tiedä mitä 
          kaikkia he tahtowat, ja heidän menettelytapansa on joka kerta erilainen. Ei ole näin ollen mitään erikoinen ihme, että yksin tuo kaikki mahdolliseksi tekewä „yhdenwertaisuus”-lakikin on 
          jo useamman kerran tullut heille itselleen kompastuskiweksi.</p>
        <p>Tämä käsitys on warmaankin pilkusta pilkkuun oikea. Wenäläiset wakuuttawat yhtä ja tekewät toista. Säännöllisesti. Heidän waikuttimistaan on yksi ainoa meille täysin selwä ja warma, ja 
          se on se, että he tekewät kaiken woitawansa saadakseen aikaan ja ylläpitääkseen hämminkiä ja sekasortoa tässä „rajamaassa”.</p>
        <p>Tuoreimpana todistuskappaleena tästä on se, että eduskunnan wiime waltiopäiwillä hywäksymät asetusehdotukset wenäläisten elinkeino- ja kunnallisista oikeuksista sekä ehdotus uudeksi 
          elinkeinolaiksi owat, tultuaan ensin ministerineuwostossa, nyt korkeimmassakin paikassa tulleet hyljätyiksi. Syynä on ilmoitettu, että nämä asiat kuuluwat yleiswaltakunnallisen 
          lainsäädännön piiriin ja owat jo „yhdenwertaisuus” -lain awulla järjestetyt.</p>
        <p>Suomen eduskunta oli näillä asetusehdotuksillaan tahtonut ojentaa sowinnon käden, se oli tahtonut osottaa, että meillä ollaan alttiita ja walmiita uhrauksiin sopusoinnun ja 
          yhteisymmärryksen aikaansaamiseksi. Wenäjällä on tämä kyllä käsitetty, on tajuttu, minkä raskaan kuorman kansamme uupuneilta hartioilta nyt olisi ollut helppo wierittää pois, mutta sitä 
          ei ole tahdottu wierittää. On edelleenkin haluttu pitää wireillä tätä ristiriitaa, joka jo nyt on waatinut meiltä niin monta uhria ja, joka edelleenkin ja yhä taajempaan tulee raskaita 
          uhreja waatimaan.</p>
        <p>Me olemme siis edelleen umpilujassamme ja ahtaammalla ja epätoiwoisempina kuin ennen. Mutta yhden aseen me olemme wastustajiltamme kuitenkin riisuneet, aseen, jonka me aikoinaan 
          typeryydessämme olemme heille antaneet ja, joka on ollut waarallinen ja tuhoatuottawa ase. Me olemme nyt koko siwistyneelle mailmalle osoittaneet, että syy ei ole meissä, me olemme itse 
          wapaaehtoisesti tarjonneet sen, mihin meitä raa'alla wäkiwallalla pakoitetaan. Me olemme todistaneet, että Wenäjä käy sotaa wain sodan itsensä wuoksi, ilman muuta päämäärää kuin sokea 
          halu saada tuhota, hämmentää ja häwittää.</p>
      </Article>

      <Article titleText="Köyhäinhoidon uudet ohjesäännöt.">
        <p>Köyhäinhoitokomitean laatima köyhäinhoitoa koskewa ohjesääntö-ehdotus tarkastettiin kaup. waltuuston wiimeisessä kokouksessa ja hywäksyttiin walmistuswaliokunnan tekemillä pienemmillä 
          muutoksilla: „Köyhäintalon” eli, kuten sitä myös kutsutaan, „waiwaistalon” nimi muutetaan „kunnalliskodiksi”, (kunnankoti).</p>
        <p>Ohjesäännön kielellistä puolta tarkastamaan walittiin hrat Chydenius, Karisto, Tarjanne ja Wartia.</p>
      </Article>

      <div className="interTitle">7.5.1914</div>
      <Article titleText="Ruokahalu kasvaa.">
        <p>Wiime joulukuulla oli Kryshanowskin komitea wihdoinkin kaksi ja puoli wuotta työskenneltyään walmis ehdotuksineen Uudenkirkon ja Kiwennawan pitäjien liittämisestä keisarikuntaan. Olisi 
          odottanut, että komitea olisi saanut osakseen kiitosta ja kunniaa ja woineet tyytywäisenä ristiä kätensä. Mutta se raukka olikin työtouhussaan jäänyt ajastaan jälkeen. Sen työskennellessä 
          oli jo keksitty uutta ja paljoa suuremmoisempaa ja sen ehdotukset otettiin sääliwällä hymyllä wastaan.</p>
        <p>Nyt on uusi „erityinen komitea Suomen asioita warten”, joka on toiminut pääministeri Goremykinin johdolla, saanut suunnitelmansa asiasta walmiiksi ja tuonut sen julkisuuteen.</p>
        <p>Ymmärtää todellakin tuon sääliwän hymyn, kun näkee miten pitkälle tämä komitea on päässyt. Se on käyttänyt aiwan samaa perustelua kuin edeltäjänsäkin, wedonnut Wenäjän pääkaupungin 
          turwallisuuteen, mutta se on katsonut tämän turwallisuuden waatiwan ei wain noiden kahden pitäjän, waan koko Wenäjän rajan ja Wiipurin kaupungin wälisen rantakaistaleen sekä itse Wiipurin 
          kaupungin yhdistämistä keisarikuntaan. Komitea on saanut awustajakseen meri ja sotaministeriön. Nämä, joiden on pidettäwä huoli Wenäjän waltakunnan turwallisuudesta, eiwät luonnollisesti, 
          juuri heidän warjollaan asiaa ajettaessa, millään tawalla ole tahtoneet asettua wastaan. Päinwastoin tiesiwät he selittää, miten suunnattoman kauwaksi nykyaikaiset kanuunat kantawat y. m. 
          yhtä wakuuttawaa. Komiteassa olikin useita, jotka waatiwat koko Wiipurin läänin yhdistämistä, arwellen nähtäwästi, ettei Pietari muuten ole warmuudella kanuunankantaman ulkopuolella, mutta, 
          kuten sanottu, enemmistö tyytyi lohkaisemaan Wiipurin kaupungin, siitä itään olewan rantakaistaleen ja kaksi pitäjää.</p>
        <p>Tuskalliselta on wuosikausia jo wain ajatuksissakin tuntunut suunniteltu Suomen ruumiin leikkaus. </p>
        <p>Ja kuitenkin oli se tarkoitettu paljoa pienemmäksi kuin nyt kyseessä olewa. „Suomen lukko”, Wiipuri, on nyt menossa ja sen mukaan laajat rantamaat, wäkirikkaat seudut. Suomen kansa on 
          monasti yksimielisenä uhrannut werensä näitä Karjalan kulmia puolustaessaan ja nähnyt sywimmällä epätoiwolla ja katkeruudella yliwoimaisen wiholisen ne riistäwän itseltään. Nyt aijotaan 
          ne riistää siltä keskellä rauhaa ja riistäjänä on waltakunta ja kansa, johon Suomi on jo yli wuosisadan ollut liitetty täysin lojaalisena osana ja, jonka tulisi olla meidän ystäwämme. 
          Suomalainen seisoo tässä selwittämättömän arwoituksen edessä. Pietarin turwallisuus muka waatii. Mutta onhan wenäläisillä täysi oikeus linnoittaa ja warustaa Wiipurin lääniä niin paljon 
          kuin he ikinä haluwawat kohtaamatta wähintäkään wastarintaa suomalaisten taholta. Päinwastoin. Mehän elämme Wenäjän aseiden turwissa ja Wenäjän turwallisuus on myöskin meidän. Niin ainakin 
          luulisi, mutta komitea on toista mieltä. Se luulee wasta silloin turwaneensa Pietarin puolustuksen, kun sitä lähellä olewat suomalaiset seudut omistawat wenäläisen ulkomuodon ja myöhemmin 
          myöskin sisällön. Ja siinä juuri on koko suunnitelman surullinen kompastuskohta. Wäestö on liiaksi walweutunutta wenäläistyäkseen noin waan kädenkäänteessä mahtikäskyllä, päinwastoin tulee 
          se luonnollisesti epätoiwoisena ja katkeroituneena kaikin keinoin taistelemaan kansallisuutensa puolesta. Se wäestö ei suinkaan tule olemaan luotettawampaa kuin nykyinen säyseä ja 
          rauhallinen Suomen alamainen wäestö. </p>
        <p>Jonkinlainen aawistus kait lienee komitealla ollut suunnitelmiensa määrättömästä raakuudesta ja wääryydestä „rajamaan” pientä, onnetonta kansakuntaa kohtaan, Syntyi näet epäilyksiä, että 
          kenties ei tämä suunnitelma läpäisekään duumassa, niin luotettawa kuin se muuten näissä asioissa onkin ollut. Ajateltiin, että Wenäjän kansan edustajia woisi kenties liikuttaa toisen 
          kansan kowa kohtalo ja siellä nousta wastaan ääniä, jotka paljastaisiwat koko toimenpiteen tarpeettomuuden ja inhoittawan wäkiwaltaisuuden. Suurin osa komitean jäseniä oli kuitenkin 
          wakuutettu siitä, että duuma menee samaan ansaan kuin muutkin, Pietarin puolustuskysymykseen.</p>
        <p>Meillä on siis odotettawissa tämä kauwan pelätty isku entistä musertawammassa muodossa. Mutta wiimeiseen saakka rohkenemme me sittenkin toiwoa, että se wähäinen järkimäärä ja pisara 
          hywää tahtoa, mikä tarwitaan tämän asian walaisemiseksi ja ratkaisemiseksi meille ja koko waltakunnan edulle suotuisaan suuntaan, asianomaisella taholla on löydettäwissä, ja Nowoje Bremjan 
          ja muiden Suomisyöjäin hellittämättömät, raiwokkaat ponnistukset jääwät tuloksettomiksi.</p>
      </Article>

      <Article titleText="Suomen silpominen.">
        <p>Erityinen Suomen asiain komitea Pietarissa päätti t. k. 4 pnä pitämässään kokouksessa, että koko Wiipurin läänin rannikko ja Wiipurin kaupunki on yhdistettäwä Wenäjään.</p>
        <p>Kokouksen pöytäkirja jätetään H. M. Keisarin wahwistettawaksi.</p>
        <p>Waltakunnanneuwoston jäsenen Deu richin mielestä ei koko Wiipurin läänikään riitä, waan täytyy ottaa osia Mikkelin läänistä.</p>
        <p>Suomen rajamaan lähempi yhdistäminen keisarikuntaan on lisäksi wälttämätön, tullien yhdistäminen on mitä pikimmin saatettawa täytäntöön, waltakunnan pankin toiminta on laajennettawa, 
          Suomen ja keisarikunnan säästöpankkien toiminta yhdistettäwä ja Suomen werotusjärjestelmä saatettawa samanlaiseksi keisarikunnan werotusjärjestelmän kanssa ja rahayksikkö saatettawa 
          samaksi.</p>
        <p>Wiimeksi otettiin esille kysymys leimaweron ottamisen järjestyksestä niin keisarikunnan kuin Suomenkin wirastoihin jätettäwistä asiapapereista.</p>
      </Article>

      <div className="interTitle">12.5.1914</div>
      <Article titleText="Sota Suomea vastaan.">
        <p>Tällä otsikolla kuwailee Frankfurt am Mainissa ilmestywä „Kleine Presse” t. k. 5 p:n numeronsa pääkirjoituksessa sortopolitiikkaa Suomessa. Ensinnä tehdään selwää Venäjän sisäisestä 
          tilasta ja ennustetaan, ettei kansan sywien riwien kuohuntaa kyetty suinkaan lopullisesti tyynnyttämään wuoden 1904 weriwirtoihin, waan kuohahtaa se wielä kerran yli äyräittensä. Venäjän 
          hallituksen sortopolitiikka ei ole rajoittunut ainoastaan omaan maahan, waan owat sen alaiset wieraat kansakunnatkin saaneet tuntea sen musertawaa painostusta. Ennen kaikkia on Suomi 
          saanut kokea kowia. Huolimatta tälle maalle myönnetyistä ja walalla wahwistetuista oikeuksista ja wapauksista, on wenäläinen sortopolitiikka alkanut tunkeutua sinne tehdäkseen tästä 
          kukoistawasta, eteenpäin pyrkiwästä ja korkealle kehittyneestä kulttuurikansasta „joukon orjia, yhtä kurjia, yhtä siwistymättömiä ja poljetuita kuin nuo lukemattomat kansakunnat owat, 
          joiden ylitse Pietarin hallituksen isällinen armonaurinko paistaa”.</p>
        <p>Suomalaiset owat yksimielisesti ja ihailtawalla sitkeydellä ryhtyneet pitämään puoliansa, mutta tähän asti huonolla menestyksellä. Ei yksikään niistä tunteellisista sieluista, jotka 
          Pariisissa ja Lontoossa „wuodattawat krokotiilin kyyneleitä” Saksan alaisten wieraiden kansakuntien kowan kohtalon tähden, ole tuhlannut sanaakaan Suomen puolesta, jota uhkaa mitä raain 
          barbarismi. Venäjän duuma ja waltakunnan neuwosto laatiwat lakeja, joille hallitsijan allekirjoitus antaa pätewyyden. Ja kun suomalaiset wirkamiehet, uskollisina wirkawalalleen, asettuwat 
          wastarintaan, raastetaan heitä tusinoittain wenäläisiin wankikomeroihin. Heiltä riistetään oikeus astua waltion wirkoihin ja tilalle tulee wenäläisiä ja kaikenlaista onnenonkijoita.</p>
        <p>Wiimeksi on duuman käsiteltäwäksi jätetty kaksi lakiehdotusta — toinen, joka pyrkii yhdistämään osan Wiipurin lääniä Wenäjään, toinen, jolla tahdotaan wenäjänkielestä tehdä yksinomainen 
          wirastokieli — ja epätoiwo ja katkeruus on Suomessa kohonnut äärimmilleen. Jos suomalaiset wirkamiehet kieltäytywät tottelemasta näitä lakeja, wangitaan ja erotetaan heitä sadoittain ja 
          tilalle tulee tunnetun wenäläisen koulun kaswatteja, joiden innokkaimpana tehtäwänä on „muuttaa tuhansien järwien maa kyynelmereksi.”</p>
        <p>„Mikä on tämän loppu olewa?” kysyy lehti ja wastaa itse, että: „olipa mitä tahansa: Wenäjän hallituksen yritys riistää awuttomalta Suomelta sen wiimeinenkin wapaus on waroittawa merkki 
          Europalle, että sillä on täysi syy kaiwaa wallihaudat itäistä rajaa wastaan kyllin leweiksi ja sywiksi.”</p>
      </Article>
      <Article titleText="Nimenmuutoksia.">
        <p>Tänään, J. W. Snellmanin muistopäiwänä owat seuraawat kansalaiset H:linnan Suomal. Seuran ja „Jäämien” nimenmuuttotoimikunnan wälityksellä waihtaneet muukalaiset nimensä suomalaisiin:</p>
        <h5>Hämeenlinna:</h5>
        <p>E. A. Gutzén ja perhe = Talpo.</p>
        <p>Aukusti Edward Henriksson = Heiniö.</p>
        <p>Laura Henriksson = Heiniö.</p>
        <p>Hjalmar Henriksson = Jalmari Hämesalo.</p>
        <p>Karl Wiktor Tikander = Kaarlo Wihtori Tiiro.</p>
        <h5>Hattula:</h5>
        <p>Johan Leonard Majander = Mantere.</p>
        <h5>Hausjärwi:</h5>
        <p>Hugo Adolf Eklund = Sinisalo.</p>
        <p>Silja Eklund = Sinisalo.</p>
        <h5>Wanaja:</h5>
        <p>Hugo Ewert Lampén ja perhe = Lainesalo.</p>
      </Article>
      <Article titleText="Uusi auto.">
        <p>Auto n:o 8 on saapunut. Se on lähtöjään Helsingistä ja oma sukuaan N. A. G., nykyinen omistaja on hra Jalmari Kämäri. Sunnuntaiaamuna klo 9 kokoontui arwostelijalautakunta sen ympärille ja 
          alkoi tutkimuksensa. Autojen pituus lasketaan kait tawallisesti „jaloissa”, mutta kun tämä oli niin ylettömän pitkä, ei kukaan arwostelijoista wiitsinyt ruweta jalkojansa waiwaamaan. 
          Tyydyttiin siis ylimalkaisesti määrittelemään, että se oli Hämeenlinnan suurin auto. Woimiaan ei kukaan myöskään sen kanssa ryhtynyt mittelemään, mutta omistaja ilmoitti, että sillä oli 
          28 hewosen woimat, ja siihen sanoi eräs siwullinen, että muilla autoilla täällä on waan 18 hewosen woimat.</p>
        <p>Sitten sitä lähdettiin. Tilaa olisi wielä ollut toinen mokoma. Eräässä kulmauksessa tuli neitonen wäylälle ja auto päästi miellyttäwän, wienon lienon toitotuksen. Sattui sitten mies 
          hollille ja auto mörähti kuin Jukolan härkä. Kysyin syytä eroitukseen. „Kullekin omalla pillillään”, selitettiin kohteliaasti. - Ja niin sitä mentiin hirwittäwällä wauhdilla. Ei kertaakaan 
          tarwinnut sisäänpäin hengittää, muuta kuin koittaa puhaltaa ulos sen kuin kerkisi, sillä ilmanpaine oli kowa. Puistossa lensiwät puut ohitse. Tie mutkitteli, nousi ja laski, mutta auto 
          kiiti eteenpäin kertaakaan erehtymättä.</p>
        <p>Meidät kyydittiin kotia. Se ei maksanut mitään ja sanottiin, ettei toistekaan suuria pyydetä, ei meiltä eikä muilta. - Se auto on juuri sellainen kuin pitääkin!</p>
        <p className="signature">Samuli.</p>
      </Article>

      <div className="interTitle">30.5.1914</div>
      <Article titleText="Kesää kohden.">
        <h5>Pakinaa.</h5>
        <p>Tässä me nyt wielä tohisemme. Koululaisia, pikkulapsia ja rouwia liikkuu kaupungilla wielä yllin kyllin, mutta nuorten jalat liikehtiwät niin riemukkaan lewottomasti ja rouwien silmissä 
          on hermostuttawan huolestunut ja touhukas time. Tuo kaikki ei ennusta hywää! Minä tunnen sen wanhastaan, me tunnemme sen kaikki, se on monesti tullut meidän miesparkojen ylitse. Se ennustaa 
          kuumuutta, kärpäsiä ja kesäleskeyttä.</p>
        <p>Siinä ne taas owat kaikki kolme! Päiwän, parin perästä on tämä kaupunki kuin Rooma ennen sabinitarten ryöstöä - naisista tyhjä. Me miehet kuljemme sandaaleissa, wähennämme päiwä päiwältä 
          waatekappaleita, hermostumme ja laihdumme. Kynä rapisee, hikipisarat putoilewat ja kärpänen kiertää kuin sädekehä päämme ympärillä. Kodin ja wiraston wälillä tapaa korkeintaan jonkun yhtä 
          masentuneen ja ikäwystyneen onnettomuustowerin ja joukon herpaantuneita ajureita kietoutuneena pörisewään kärpäspilween. Muuten on tyhjää ja hiljaista kuin Kerimäen Matin kalakontissa.</p>
        <p>Ja mitä me syömme ja juomme? Jos kaikkien tohtorien ja rohtomiesten uhallakin uskallan sanoa oman mielipiteeni, niin melkein kaikki watsakatarrit saawat alkunsa kesäleskeydestä. Meidät 
          syöstään yhtäkkiä kodin koeteluilta puuropadoilta ruokalain monikirjawille herkuille, jotka panewat meidät yökaudet kieristelemään wuoteessamme ikäänkuin makaisimme hehkuwan hellan päällä. 
          Ja jos joku, niinkuin minä, päättää ruweta omaan leipäänsä, ei hänen olonsa eikä elämänsä suuresti huojennu. Panet primus-keittiöön tulen, siihen perunapadan päälle ja alat miehen mahdilla 
          kuurata weistä siinä wieressä, ja kas - tuossa tuokiossa on sekä kiehuwa perunapata että pihisewä primus sylissäsi. Ja tiskaaminen käy aina ehdottomasti yli woimiesi. Miten hennosti ja 
          rakastawalla kädellä koitatkin pidellä lautasia, laseja ja teewateja, aina ne sattuwat jotain kowaa wastaan ja särkywät kertaakaan säästymättä. Kun syksy kerran koittaa, ei sinulla ole 
          waimollesi näyttää koko serwiisistä muuta kuin „jäännökset muistoistamme kallehista”. Ja aijai silloin!</p>
        <p>Sellaista se kesä meille miehille todellisuudessa on. Owathan muutamat irwihampaat keksineet kaikellaisia kaskuja kesäleskeyden paratiisista ja kesäleskien autuaalisista 
          nuorenmiehenpäiwistä, mutta ne owat kaikki harhaanjohdetun mielikuwituksen epäsiweellisiä tuotteita. Tosiasiassa me olemme jo aikaa unohtaneet kaikki wapaat nuorenmiehenpäiwät, kuten 
          kauan häkissä ollut lintu unohtaa wapautensa, wihreät metsät ja maat, me emme muuta kaipaa kuin kahleitamme. Ja siksi tuntuu meistä niin epätoiwoiselta tuo nuorison riemukas lewottomuus 
          ja tuo touhukas ilme rouwien silmissä: se tietää maallemuuttoa, se ennustaa kuumuutta, kärpäsiä ja kesäleskeyttä.</p>
        <p className="signature">Samuli.</p>
      </Article>

      <div className="interTitle">27.6.1914</div>
      <Article titleText="Raukkamaista menettelyä.">
        <h5>Herra Rängmanin oikaisun johdosta.</h5>
        <p>Noin pari wiikkoa sitten kertoi eräs uutinen lehdessämme, että wirkatalojentarkastaja R. R. Rängman oli läänin kuwernööriltä anonut Hämeenlinnan kruununmakasiininhoitajan tointa, joka oli 
          julistettu awonaiseksi raatimies Lindbergin tultua yhdenvertaisuuslain nojalla siitä eroitetuksi. Tämän johdosta waati hra Rängman lehdessämme tilaa oikaisulle, jossa hän wäitti uutistamme 
          kokonaan perättömäksi, ilmoittaen lääninhallituksessa waan „aikoinaan tiedustelleensa mainitun toimen waiheita.” Kun hän sitäpaitsi suullisesti kiwenkowaan wakuutti asianlaidan 
          tällaiseksi, katsoi toimitus epäilyistään huolimatta welwollisuudekseen antaa oikaisulle sijaa lehden palstoilla ja puhdistaa hra Rängmanin maine entiselleen.</p>
        <p>Koska nyttemmin kuitenkin olemme ottaneet asiasta täysin warman selon, ilmoitamme, ettei uutisemme ainoastaan ollut tosi, waan että hra Rängman on frakkipuwussa käynyt tätä wirkaa 
          kuwernöörin luona kumartamassa jo ennen sen aukijulistamistakaan.</p>
        <p>Olemme tuoneet tämän totuuden nimessä julki ja, koska moinen salainen, yleisöltä wisusti salattu kumartelu meistä on paljon raukkamaisempaa kuin julkinen onnenonginta.</p>
      </Article>

      <div className="interTitle">7.7.1914</div>
      <Article titleText="Hämeenlinna matkailijakaupungiksi.">
        <p>Sydänkesä on kulumassa ja matkailuliike on parhaimmillaan. Mutta meillä täällä Hämeenlinnassa näkee wain ani harwoin jonkun muukalaisen, jonkun niistä monista ulkolaisista turisteista, 
          jotka kesäisseen aikaan saapuwat maahamme ja joita useissa maamme pikkukaupungeissa, warsinkin Sawon puolella, tapaa sangen taajaan.</p>
        <p>Tähän ikäwään tosiseikkaan on kiinnitettäwä wakawaa huomiota. Myöntäähän täytyy, ettei Hämeenlinna suinkaan ole sopimaton matkailukaupungiksi. Sillä on päinwastoin enemmän edellytyksiä 
          kuin useammalla muulla Suomen pikkukaupungilla. Itse kaupunkimme on kaunis ja sen ympäristöt mitä ihanimmat ja mieltäkiinnittäwimmät. Warmaankin tarkastaisi wieras uteliaana ja huwitettuna 
          wanhaa Jarlin linnaamme, käwisi runoilijan ylistämillä Hattelmalan harjanteilla, wiihtyisi wiileässä puistossamme ja hurmaantuisi Aulangon tornin suuremmoisista näköaloista. Ja mikä 
          erikoisesti puhuu Hämeenlinnan puolesta, on se helppous millä täällä pääsee matkaansa jatkamaan, menee sitten pohjoiseen tai etelään, itään tai länteen. Riihimäelle, josta pääsee itään, 
          on tunnin matka ja yhtä paljon matkaa on Toijalaan, josta lähtee tie länteen. Mutta ennen kaikkea on meidän wedottawa ihmeen ihanaan matkailureittiimme täältä pohjoista kohden. Kauniimpaa 
          matkaa kuin täältä Pälkäneelle ja Kangasalle woi muukalainen tuskin maassamme tehdä. Mutta - ja nyt olemme tulleet itse asian ytimeen.</p>
        <p>Se reitti ei ole läheskään siinä kunnossa, että me kehtaame sitä matkailijoille suositella. Pälkäneelle kyllä pääsee ja epäilemättä kannattaa mennä, mutta siinä sitä sitten onkin 
          Pälkäneeltä Kangasalle pääsy mitä kehnoin. Hewosta on wähän saatawissa, usein niitä on mahdoton saada ollenkaan, ja laiwaliike on tällä wälillä nykyään melkein kokonaan seisauksissa. Näin 
          ollen on hywin waikeata jatkaa matkaa edelleen ja senjohdosta menettää koko tämä kaunis matkailureitti suurimman osan merkitystään.</p>
        <p>Ensimäisenä on siis tämä puute poistettawa. Onhan ollut kyseessä auton hankkiminen wälittämään liikettä Pälkäneen-Kangasalan wälitielle ja tämä hanke näyttää meistä warsin helposti 
          toteutettawalta. Pälkäneellä on warmasti autolle ajoa yllin kyllin päiwittäin ja kun se illalla olisi laiwoja wastassa, saattaa olla warma, että sillä, ellei heti alussa, niin ainakin 
          myöhemmin, asian tultua tutuksi, aina olisi täysi määrä matkustajia. Laiwaliike tällä wälillä on mielestämme paljon hankalampaa ja kysyy nähtäwästi uhrauksta, koska laiwat sen owat 
          lopettaneet.</p>
        <p>Täten olisimme ottaneet jo aimo askeleen matkailuliikenteemme wilkastuttamiseksi. Mutta paljon enemmän olisi tehtäwä, jos aijotaan joitakin tuloksia saada. Warmaankin kannattaisi täällä 
          kauniissa ympäristössämme ylläpitää matkailijarawintolaa, jossa matkailijat woisiwat hywin wiihtyä wiikon, pari. Näistähän meillä on aina ollut puute ja niistä on paljon julkisuudessakin 
          puhuttu, mutta tuskin mitään parannusta on aikaansaatu. Wielä olisi jonkun auton otettawa huolekseen mahdollisimman huokealla kuljettaa turisteja kaupunkimme ympäristössä ja saattaa 
          heidät etäämmäksi, jos niin waaditaan.</p>
        <p>Mutta tähän, kuten kaikkiin edellisiinkin tarwitaan awustuswaroja ja järjestäwää kättä. Matkailijayhdistys on siihen tietysti lähin, mutta, kuten tiedetään, owat sen woimat toistaiseksi 
          warsin wähäiset. Ja juuri tästä päästä on meidän alettawa. Matkailijayhdistys ei ole aijottu muutamia harwoja warten, se on tarkoitettu koko yleisöä warten ja ainoastaan sellaisena on 
          sillä jotain merkitystä ja woi jotain aikaansaada. Matkailijayhdistyksen Hämeenlinnan osasto wiettää jäsenien puutteessa warsin hiljaista elämää, eiwätkä sen woimat riitä pitkälle. Jos 
          todellakin mielitään jotain tehdä matkailuliikenteen wilkastuttamiseksi kaupungissamme, on ensimäinen ehto, että kaupunkilaiset lukuisina liittywät jäseniksi Matkailijayhdistykseen. 
          Matkailuliikennekin merkitsee paikkakunnalle sekä aineellisia tuloja, että uusia henkisiä wirtauksia. Niiden hywäksi kannattaa täydellä syyllä ponnistaa woimiansa. Se on ymmärretty 
          muualla ja toiwottawasti se wähitellen aletaan tajuta täälläkin.</p>
      </Article>
      <Article titleText="Hämeenlinnan maistraatti.">
        <h5>Maistraatin päätös kuwernöörin johtamasta w. k. 25 pnä pidetyssä maistraatin istunnossa.</h5>
        <p>Päätös, joka tehtiin w. k. 25 p:nä pidetyssä kuwernöörin johtamassa maistraatin istunnossa, jolloin käsiteltiin yhdenwertaisuuslain nojalla erotettujen Hämeenlinnan maistraatin 
          raatimiesten wirkojen aukijulistamista.</p>
        <QuoteStart className="symbolStyle"/>
        <p className="quotation">Koska Wenäjän Keisarikunnan Hallitsewan Senaatin Rikosasiain Departementti on päätöksellään marrask. 20 pltä ja jouluk. 3 pltä 1913 jättänyt sen Pietarin 
          Piirioikeuden huhtik. 26 p:nä ja toukok. 9 p:nä 1918 antaman päätöksen woimaan, jolla tämän Raastuwanoikeuden ja Maistraatin oikeusneuwosmies Leonard Idestam ja Kunnallisneuwosmies Werner 
          Agaton Lindberg owat tuomitut paitsi muuta eroitetuiksi hallitsemistaan edellinen sanotun Maistraatin ja Raastuwanoikeuden oikeusneuwosmiehen wirasta, julistetaan wastamainitut wirat 
          laillisessa järjestyksessä haettawiksi.</p>
        <p className="quotation">Edellä olewaan päätökseen myötäwaikuttiwat äänillään wirkaatekewät oikeusraatimies Juho Schurigin ja kuwernööri Rafael Spåre, jota wastaan allekirjoittaneet 
          wirkaatekewät Kunnallisraatimies Einar Salmi ja wirkt., pormestari August Werner Kaulén lausuiwat wiitaten maistraatin istunnossa wiime huhtik. 22 päiwänä pöytäkirjan 1§:n kohdalla Hämeen 
          läänin kuwernöörin kirjeen saman huhtik. 8 pltä n:o 15,380 johdosta tehtyyn päätökseen, että kun oikeusraatimies Leonard Idestam ja kunnallisrm. Werner Agaton Lindberg eiwät olleet, 
          mikäli mainittujen allekirjoittaneiden tiedossa oli, tulleet laillisen tuomion kautta eroitetuiksi puheenalaisista wiroistaan, ei maistraatti woimassaolewaan lakiin nojaamalla woi 
          julistaa wirkoja haettawaksi, koska niillä edelleenkin oli lailliset haltijat, joskin he tätä nykyä oliwat estetyt itse wirkojaan hoitamasta.</p>
        <QuoteEnd className="symbolStyle"/>
      </Article>

      <div className="interTitle">30.7.1914</div>
      <Article titleText="Wenäjänkielen tunteja lisätään.">
        <p>Mikäli S. U. T. on saanut tietää, lienee senaatti laatinut ehdotuksen arm. asetuksen maan alkeisoppilaitosten perinpohjaisesta uudelleen muodostamisesta, jotta wenäjänkielen 
          tuntimäärää koulujen oppisuunnitelmissa woitaisiin tuntuwasti lisätä. Uudet lukusuunnitelmat on ajateltu otettawan käytäntöön jo ensi lukuwuodesta lähtien. Tämän asetuksen mukaan 
          tultaisiin alkeisoppilaitoksia Suomessa wastaisuudessa nimittämään osittain „esikymnaaseiksi”, osittain lyseoiksi.</p>
      </Article>

      <div className="interTitle">4.8.1914</div>
      <Article titleText="Tawarain hinnan kohoaminen.">
        <p>Wiime aikoina owat muutamain tawarain hinnat paikkakunnalla suuresti kohonneet.</p>
        <p>Kauppatorilla eiwät ruoka tawarain hinnat wielä eiliseen mennessä olleet kohonneet. Voi ja liha on samoissa hinnoissa kuin wiime wiikollakin. Leiwän hinta sitä wastoin on noussut.</p>
        <p>Suolan hinta paikkakunnalla on kohonnut yli 100 %, maksaen nykyään 10 mk. hl. Entinen hinta on ollut 4 mk. Ruisjauhot maksawat nyt 55-50 p. kg, ennen 40 p. Ruissäkki maksaa nykyään 15 
          mk. Sokerin hinta on kohonnut 30 p. kg:lta maksaen nykyään 1:50.</p>
        <p>Sokeria on tilattu Turusta ja sieltä on lähetetty sitä tuomaan toistakymmentä hewosta.</p>
        <p>Paloöljy on loppunut ja odotetaan sitä Tampereelta sekä tulee maksamaan 40 p. kg. Kynttilät owat täällä myös hywin wähissä. Muutamat muutkin tawarat, kuten esim. wehnäjauhot, owat 
          hinnoissaan nousseet.</p>
      </Article>

      <div className="interTitle">6.8.1914</div>
      <Article titleText="Mieliala Hämeenlinnassa">
        <p>on monista hälyyttäwistä huhuista ja järkyttäwistä uutisista huolimatta werrattain rauhallinen, joka on tyytywäisyydellä mainittawa. Jotkut perheenäidit tosin owat hätääntyneet ja 
          ostawat tulewaisuuden waralle ruokatarwikkeita. Kauppiaitten nostama sekatawarain hintain korotus on herättänyt ostajissa mielipahaa. Tallettajien hätääntyminen ja talletuksien nostaminen 
          on myös aiheetonta ja moitittawaa.</p>
        <p>Kehoitamme ihmisiä olemaan tyyniä ja rauhallisia sekä tarkoin noudattamaan niitä määräyksiä, joita wiranomaiset owat antaneet.</p>
      </Article>
      <Article titleText="Hämeenlinnan tehtaat seisomaan.">
        <p>Nykyisen uhkaawaan tilanteen johdosta on <span className="accent">H:linnan Höyrysahalla</span> maksettu lopputili, mutta erityisten toimenpiteiden takia pidetään saha wielä käynnissä toiseen tilipäiwään asti, joten 
          wäki saa olla wielä töissä.</p>
        <p><span className="accent">Paitatehdas „Tilhin”</span> työwäki on myös sanottu irti, mutta koetetaan tehdas pitää käynnissä niin kauan kuin mahdollista ja sähköwoimaa riittää.</p>
        <p><span className="accent">H:linnan Werkatehtaalla</span> lienee annettu samansuuntainen julistus.</p>
        <p><span className="accent">Alangon kenkätehtaan</span> työwäki on niinikään sanottu irti.</p>
      </Article>

      <div className="interTitle">8.8.1914</div>
      <Article titleText="Hämeen läänin kuwernööri ryhtynyt ankariin toimenpiteisiin keinottelun estämiseksi elintarpeilla.">
        <h5>Kauppias A. Gust. Skogsteria sakotettu 4,000 mk:lla.</h5>
        <p>Eilen antamallaan päätöksellä on kuwernööri sakottanut kauppias <span className="accent">A. Gust. Skogseria</span> H:linnasta hintojen korotusta koskewien lippujen lähettämisestä toisille 
          kauppiaille ja lewottomuuden aikaansaamisesta tawaramarkkinoilla 4,000 mklla, joka päätös heti menee täytäntöön.</p>
      </Article>

      <div className="interTitle">13.8.1914</div>
      <Article titleText="„Hädässä ystävä tunnetaan”.">
        <p>„Hädässä ystäwä tunnetaan” sanoo wanha suomalainen sananlasku. Niin kauwan kuin Wenäjälla oli rauha, lietsoi sen sanomalehdistö alituista wihaa pientä, rauhallista kansaamme kohtaan. 
          Suomi warustautui muka kapinaan. Täällä oli salaliittoja, woimakkaita aseellista yhdistyksiä, jotka uhkasiwat koko waltakunnan turwallisuutta. Wenäjän pääkaupunki, Pietari, oli muka liian 
          alttiina waaralle ollessaan niin lähellä Suomen rajaa, ja siksi oli saatawa keinolla millä hywänsä enemmän wenäläistä maata pääkaupungin ja Suomen rajan wäliin.</p>
        <p>Nyt on koettelemuksien ja tuon uskotellun „kiusauksen” hetki tullut. Wenäjä on joutunut sotaan mahtawien naapureittensa kanssa ja se kaipaa nyt enemmän kuin milloinkaan ennen sisäistä 
          sopua ja rauhaa. Katsokaa tarkkaan tänne kaikki te Now. Wremjat, Rusk. Snamjat, Finlj. Gasetat y. m.! Seuratkaa silmillänne meitä ja häwetää parjauksianne ja mustia waleitanne. Meidän 
          maamme ei ole kylliksi onnellinen omatakseen omaa sotajoukkoaan, joka ase kädessä torjuisi wihollisen rannoiltamme ja olisi walmis wuodattamaan werensä yhteisen asian eteen. Meille ei ole 
          uskottu tätä todistuskappaletta, joka puhuisi selwintä kieltä. Mutta me olemme kuitenkin kylliksi lähellä tapahtumia woidaksemme osottaa, että Suomen kansa nyt, kuten kautta wuosisatojen, 
          on ehdottomasti uskollinen ja lojaalinen sitä maata kohtaan, johon kohtalo sen on liittänyt. Meidän osamme näissä suurissa tapahtumissa on ollut, ja tulee nähtäwästi loppuun saakka 
          olemaan, mitättömän wähäinen. Mutta me olemme jo osoittaneet ja tulemme - sen saattaa huoletta wakuuttaa - loppuun saakka osoittaamaan uskollisuutta tässä wähässämme. Wenäjän 
          sanomalehdistö on - osaksi oudoksuen ja ihmetellen - todentanut meidän kansamme lojaalisuuden, ja wenäläiset upseerit, jotka owat oleskelleet maassamme wasta jonkun päiwän, owat aiwan 
          kuin iloisesti yllätettyinä rientäneet julkituomaan kiitollisuutensa ja ihastuksensa meidän suhtautumisestamme ja alttiista ponnisteluistamme. Samalla kun ilomielin otamme nuo kiitokset 
          wastaan, tuntuu kuin, olisi niissä pistäwä oas - mitä muuta meiltä sitten odotettiin?</p>
        <p>Kun tämä sota kerran on lopussa, on Europan karttakin muuttanut muotoaan. Ja meidän kansamme on sitä ennen kenties saanut kokea monia kowia kohtaloita. Mutta mitä se mukanansa tuoneekin, 
          yhden lahjan sen luulisi joka tapauksessa meille antawan: Wenäjän kansan luottamuksen - uskon, että meidän maamme, mitkä waiheet Wenäjän waltakuntaa kohtanewatkin, aina lujana ja 
          lojaalisena liittyy siihen.</p>
      </Article>

      <div className="interTitle">10.9.1914</div>
      <Article titleText="Kuulutus.">
        <p>Koska useat Venäjän sotakouluihin pyrkivät henkilöt ovat kääntyneet puoleeni saadakseen lähempiä ja varmempia tietoja asiassa, tahdon täten ilmoittaa, että Kenraalikuvernöörin Kansliasta 
          annettujen tietojen mukaan otetaan Suomen kansalaisia ainoastaan Kasanin kaupungissa olevaan jalkaväki-sotakouluun sekä Twerin ja Jelisavetgradin kaupungeissa oleviin ratsuväki-
          sotakouluihin, ilman sisäänpääsytutkintoa ja ainoastaan niitä Suomen kansalaisia, jotka ovat suorittaneet kauppakorkeakoulun, reali- tahi klassillisenlyseon kurssin, eivätkä ole 17 vuotta 
          nuorempia eikä 28 vuotta vanhempia. Pyrkijän jonka tulee osata venäjänkieltä siihen määrin, että hän voi seurata opetusta, on jätettävä hakemuksensa, läänin Kuvernöörin kautta, sen koulun 
          johtajalle, johon hän aikoo pyrkiä, ja on tähän hakemukseen liitettävä seuraavat asiakirjat: 1) papintodistus; 2) sotilaslääkärin tahi valtion taikka yleisessä palveluksessa olevan 
          lääkärin todistus siitä että hakija on kelpaava sotapalvelukseen; 3) läänin Kuvernöörin todistus siitä ettei hakija ole tuomittu rikoksesta, kuin myöskin että hän muuten on luotettava 
          henkilö; sekä 4) kuolutodistus (alkuperäinen), kuin myöskin jäljennökset tästä todistuksesta venäjänkielellä.</p>
        <p>Matkan siihen kaupunkiin, jossa sotakoulu sijaitsee tulee pyrkijän kustantaa itse, jota vastoin ylläpito koulussa (kuten asunto, ruoka, vaatteet, kirjat y.m.) on vapaa. Hakemukset ovat 
          jätettävät ennen 20 p. Syysk. vanhaa lukua.</p>
        <p>Hämeenlinnassa, Lääninkansliassa, Syyskuun 9 päivänä 1914.</p>
        <p className="signature">R. Spåre.</p>
        <p className="signature">J. Schurigin.</p>
      </Article>

      <div className="interTitle">19.9.1914</div>
      <Article titleText="Lasten mailmasta.">
        <h5>Pakinaa.</h5>
        <p>Kioskit owat jo wiikkoja sitten sulkeneet luukkunsa, ulkoilmakauppa on seisauksissa ja seisauksissa näkyy kauppapuodeissakin olewan. Mutta lapsimaailmassa on kysyntä yhä kowempi ja 
          liikewaihto wallan pelottawa. Siellä on ostajia nyt entistä runsaammin kun herraswäkien Tuulikit, Jormat ja Tapiot taas owat pitkän ja haikean eron jälkeen palanneet kaupunkiin. Sotaa 
          ei ole mailla, halmeilla, rahaa on kuin „roskaa” ja kaikki kauppatiet kaukaiseen itään owat awoinna. Kauppa käy kuin siimaa.</p>
        <p>Istuin penkillä laiwarannassa ja katselin miten satamapawiljongissa liike luisti. Pitkällä penkillä oli suuri jono kellastuneita waahteranlehtiä ja niillä santaa, isompia ja pienempiä 
          kiwiä, ruohoja, tikkuja y. m. y. m. Myyjiä oli kolme, ostajia kymmenkunta.</p>
        <p>Tuntuu, mietin itsekseni, kuin he sittenkin ostaisiwat sodan waralle, sillä kukaan ei syö, kaikki waan ostawat. Muuan isompi punatukkainen tyttö toimittaa touhukkaasti wanhanihmisen 
          äänellä:</p>
        <p>- Saisko wientelin tohweeta, sitä kahren markan. Mutta antakaa parempaa kuin mennäkerralla. Kaltiskakin sano, että se oli pelkkää sumppia. Ja kilon nisujauhoja, ja puoli kiloa sokuria 
          ja wiirelläkolmatta pennillä korppuja...</p>
        <p>- Taitinko minä neljällätoista wiilellä pennillä puuloo, pyytää nöyrästi pieni pellawapäinen ressukka.</p>
        <p>- Olkaa siinä, kiwahtaa myyjä. Kuka tässä kaikille - eikä meillä puuroa ole!</p>
        <p>- Ompat! tiukkaa pienin ja itku pakkaa kurkkuun.</p>
        <p>- Mutta ei o!</p>
        <p>- Ompat! ja nyt on jo leikki kaukana.</p>
        <p>- Tässä on, sanoo pienin myyjä, jonka on tullut sääli, ja antaa lehdellisen sahajauhoja.</p>
        <p>- Minä ostan kuolaimet ja waljaat ja kanuunan, sanoo pieni tanakka miehenalku remseesti. Toss' on rahat!</p>
        <p>- Wille sinä, anna pois! Tuo paperirahaa, ei riewut kelpaa!</p>
        <p>Ja Wille hakee torilta, löytää wanhan lisälehden ja hymyilee kuin miljonääri.</p>
        <p>- Antakaa amerikanläskiä ja silliä mutta antakaa suolawettä kanssa sillin mukana, että saa perunaa topata.</p>
        <p>- Ja minulle karamelliä!</p>
        <p>- Ja minulle!</p>
        <p>- Ja minulle!</p>
        <p>Yhtäkkiä owat kaikki unohtaneet äidilliset ja isälliset osansa ja pyytäwät nyt niin hartaan luottawaisina karamelliä. He tuijottawat myyjiin henkeänsä pidätellen, nähden 
          mielikuwituksessaan jo suuren kasan karamelliä ja tuntien kielellään makean maun. On hetken hiljaista. Sitten sanoo isompi myyjä itkunsekaisella äänellä:</p>
        <p>- Ei meillä ole karamelliä.</p>
        <p>- Ompat! tiuskasee pieni pellawapää.</p>
        <p>- Mutta ei o! toistaa myyjä wieläkin särkyneemmällä äänellä.</p>
        <p>- Ompat! — ja täälläkin yritetään itkua.</p>
        <p>- Onhan Reetrikssonnilla ja Kutsterilla ja Kareenillakin ja on, ja on, waikka — — — kellä wakuuttaa punatukkainen.</p>
        <p>Näyttää uhkaawalta, liikkeen perustukset tuntuwat halkeilewan. Silloin keksii se, joka äsken oli pikkutytölle puuroakin toimittanut, pelastawan keinon:</p>
        <p>- Ei ole nyt karamelliä, mutta loppuwiikosta tulee. On tilattu jo.</p>
        <p>Hän oli keksinyt tosikauppiaallisen keinon ja asema oli pelastettu. Teki mieleni mennä ja suudella tuota pientä nykeröistä nenää ja wiisaaita siniharmaita silmiä. — Kauppa jatkui 
          ennallaan, oltiin taas isiä ja äitiä ja touhuttiin kowasti. Minäkin muistin isälliset welwollisuuteni ja aloin hymyillen waloisille muistoilleni käwellä kotia kohti. Korwiini kaikui 
          wielä:</p>
        <p>- Taitko pennillä pannukakkua!</p>
        <p>Se oli se pieni pellawapää.</p>
        <p className="signature">Samuli.</p>
      </Article>

      <div className="interTitle">22.9.1914</div>
      <Article titleText="Hugo Standertskjöld 70-vuotias.">
        <p>Tänään täyttää Karlbergin kartanon omistaja, ewersti Robert Standertskjöld 70 wuotta. Ewersti S. on synt. Wanantaan kartanossa oman tietonsa mukaan 22/9 44 ja toisten tietojen mukaan 
          kahta päiwää myöhemmin. Hänen wanhempansa oliwat aliluutnantti Johan S. ja Margareta Kristina won Kraemer. Käytyään Haminan kadettikoulun tuli S. aliluutnantiksi 1864, palweli Tulan 
          kiwääritehtaassa, kohosi luutnantiksi 1869, alikapteeniksi 1874, toimi sen jälkeen Ižewskin kiwääritehtaassa y. m., eroten palweluksesta ewerstinä 1884.</p>
        <p>Toimintansa kautta Karlbergin kartanossa on ewersti Standertskjöld tullut tunnetuksi ympäri maatamme, wieläpä Suomen rajojen ulkopuolellakin. Ostettuaan Karlbergin ja Katajiston kartanot 
          H:linnan maaseurakunnassa on ewersti S. muodostanut sinne kilometrin pituisen kauniin metsäpuiston - ainoa laatuaan maassamme - tekojärwineen, Aulangon näkötorneineen, 
          kalanwiljelyslaitoksineen ja eläintarhoineen.  Karlbergin puisto on Nerwanderin sanojen mukaan „pieni, säihkywä jalokiwi luonnon kauneuden koristenauhassa, joka somentaa kauniin Hämeenmaan 
          otsaa”. Miljoonaomaisuuttaan on hän käyttänyt kaikenlaisiin hyödyllisiin tarkoituksiin. Hra S. on osallisena useissa liike- ja teollisuusyrityksissä, Kaukaan tehtaan omistaja y. m.</p>
        <p> Ewersti S. on tehnyt useita lahjoituksia maaseurakunnalle, Hattulan kunnalle y. m. sekä lukuisiin hywäntekewäisyystarkoituksiin, awustanut alustalaisiaan, rakentanut heille koulun ja 
          kauniit asumukset sekä kaikin puolin waalinut heidän hywinwointiaan. Nuoria taiteilijoita on hän niinikään awustanut sekä tehnyt hiljaisuudessa monta kaunista tekoa, joita ei suuri 
          yleisö ole saanut tietää. </p>
        <p>Hämeenlinnan kaupungille on ewersti S. ollut hywä naapuri.</p>
        <p>Karlbergin ihana puisto ja siinä olewa Aulanko mainioine näköaloineen on huomattawalla tawalla wilkastuttanut matkailijaliikettä kaupungissamme. Hänen puistonsa owat aina olleet suuren 
          yleisön wapaasti käytettäwinä.</p>
        <p>Niihin moniin onnitteluihin, joita ewersti Standertskjöldille hänen merkkipäiwänään lähetetään, pyydämme mekin kunnioittaen yhtyä.</p>
      </Article>

      <div className="interTitle">13.10.1914</div>
      <Article titleText="Wielä pari sanaa kunnallissauna-kysymyksestämme.">
        <p>Sen jälkeen kun wiikko takaperin käsittelimme kunnallissauna-kysymystämme, owat myös toiset täkäläiset lehdet asiaa walaisseet, „Hämetär”, julkaisemalla numerotietoja saunan 
          kannattawaisuudesta, eli toisin sanoen sen huomattawista tappioista, ja „Hämeen Woima” asettuen kannattamaan saunan ostoa kaupungille.</p>
        <p>Kun tietääksemme kysymys tulee lopullisesti ensi torstaisessa waltuuston kokouksessa ratkaistawaksi, tahdomme mekin puolestamme wielä palata asiaan, koska edellämainitut kirjotelmatkin 
          niihin aihetta antawat.</p>
        <p>„Hämettäressä” julkaistut, liikkeen isännöitsijän hra. J. T. Ranwall'in allekirjoittamat tilit osottawat saunaliikkeen tuottaneen tappiota: 1/12 1911 - 31/12 1912 Smk. 8027:07, 
          w. 1913 Smk. 4658:75, m. 1914 1/10 asti Smk. 3501:65, ollen tähänastinen tappio siis Smk. 16,187:47, eli pyöreissä luwuin 5,400 mk. wuotta kohden. Päiwää kohti sowitettuna tietää tuo 
          tappio sitä, että yhtiö (wastaisuudessa siis kaupunki) on saanut maksaa 15 mk. jokaiselta päiwältä, minkä kunnallissaunamme on käytännössä ollut.</p>
        <p>Kun tilinumeroita katselee ja ottaa huomioon, että tulot itse saunasta owat tällä kolmiwuotiskaudella olleet yhteensä 29,524:75 (10,226.30 + 10,498:40 + 8,805:05) ja tappio 16,187:47, niin 
          käsittää, tai woi ainakin aawistaa, että kaupungille käy mahdottomaksi, saada itsensä kannattawaksi liikettä, joka nytkin parhaimman mukaan hoidettuna on antanut tappiota noin 50 % 
          kokonaistulostaan — mikä tietää sitä, että jokaisen saunassa käwijän olisi pitänyt maksaa ainakin puolta korkeampi käyntimaksu, ennenkuin on maksanut osalleen lankeawat kulut.</p>
        <p>„Hämettären” kirjoittaja tuntuu kuitenkin olewan saunan tuloksiin hywin tyytywäinen ja lausuu, että on luultawaa, ettei tappio tältä wuodelta sen suuremmaksi nousekaan, että tappio 
          nähtäwästi wuosi wuodelta wähenee ja niin ollen pitäisi tulojen riittämän menojen peittämiseen.</p>
        <p>Onhan ymmärrettäwää, että rakkaasta ja kalliiksi käyneestä lapsesta aina toiwotaan mitä parhainta, mutta tällaisessa asiassa, jossa monet kymmenet tuhannet owat kysymyksessä, ei saa 
          laskelmia rakentaa toiwomusten waraan. On pysyttäwä kylmän todellisuuden ja saawutettujen kokemuksien warassa. Ja ne puhuwat toista.</p>
        <p>„Hämeen Voiman” kirjoittaja, joka nähtäwästi ei numerokielelle paljoakaan arwoa anna, on, kuten mainittu asettunut niinikään ostoa puoltamaan käsittääksemme kuitenkin aiwan toisilla 
          perusteilla, kuin waltuusto. Hän katselee asiaa kokonaan kunnallissosialismin kannalta ja pitää luonnollisesti perin tärkeänä saunan ostoa kaupungille, koska sitenkin kunnallissosialismi 
          askeleen edistyisi. Mutta perusteet, joiden nojalla lehti tulokseen tulee, owat keweät. Kun kerran näyttää, että tappio wuosittain on wähenemässä, niin ei kannata pelätä muutamia tuhansia 
          markkoja, tuumii kirjoittaja. Onhan Helsingin kaupungin kunnallinen sähkölaitos osottanut mitä tuloksia kunnallisten liikkeiden alalla woidaan aikaan saada, huudahtaa hän sitten. 
          Tällainen rinnastelu tuntuu kuitenkin naurettawalta - eikäpä liene kirjottajankaan huulilta hymy puuttunut mokomaa wertausta tehdessään. Siksi emme siihen tahdo sen enempää puuttuakaan.</p>
        <p>Kirjotuksessa on kuitenkin esiintuotu yksi seikka, joka ansaitsee huomiota, ja josta kirjoittajan kanssa olemme yhtä mieltä. Nimittäin se, että kallishintaisemmat saunat tuottawat 
          suurimmman tappion ja olisiwat siis ensi sijassa korjauksen tarpeessa. Joutukoonpa saunaa kuka tahansa hoitelemaan - ottakoon huomioon tämänkin seikan. Epäilemättä löytyisi paljon 
          muitakin korjattawia kohtia, joiden awulla tappionwaara suuresti wähenisi, mutta sen kokonaan poistaminen nykyisen hankkeen pohjalla, on mielestämme enemmän kuin epäiltäwää.</p>
        <p>Puolestamme olemme ennemmin jo nimenomaan lausuneet kannattawamme kaikkia sen tapaisia yleisiä yrityksiä, joista todellista tuloa saattaa olla, otettawaksi kaupungin haltuun ja asetumme 
          niin ollen kylläkin kannattamaan kunnallissosialismia kaikissa järkewyyden rajoissa. Mutta kun on kysymys wain uusien menojen tuottamisesta jo ennenkin kukkuroilleen rasitetuille 
          werowelwollisille, niin täytyy asettua sitä wastustamaan, koska sentapainen asioiden järjestely kostaa itsensä.</p>
        <p>Katselipa asiaa miltä kannalta tahansa - mitään pakottawaa ja järkewältä näyttäwää syytä emme löydä saunan osto-hankkeen tueksi, mutta sitä wastaanpuhuwia sen sijaan kylläkin, 
          ennenkaikkia ne tuhannet, joita kysymys myönteisesti ratkaistuna wuosittain kaupungilta waatii. Monet kaupunkilaiset, jotka meille nimenomaan owat käyneet huolensa hankkeen johdosta 
          kantamassa, toiwowat wiimeiseen asti, että waltuusto wielä ajattelisi asiaa kaikinpuolisesti, eikä saattaisi kaupunkia tämänkin turhan menojen rasittamaksi nyt, kun monet muut suuritöiset 
          hommat tulewat muutenkin kaupungin waroja kysymään. Jos rasitukset kaikin tawoin lisääntywät käy pienen yhteiskuntamme yhä waikeammaksi luowia kehityksen tiellä - saattaapa se käydä sille 
          suorastaan turmiolliseksikin.</p>
        <p>Waikka luulemmekin, että äänemme ei asian määrääjien korwissa paljoakaan merkitse, olemme kuitenkin tahtoneet mielipiteemme tästä kysymyksestä ajoissa esiintuoda. Mielestämme on 
          kaupungin asioiden hoidossa jo ennemmin tehty niin paljon erehdyksiä, ettei niiden sarjaa uusilla pitäisi jatkaa.</p>
      </Article>

      <div className="interTitle">17.10.1914</div>
      <Article titleText="Julkeata vääristelyä.">
        <p>Niiden parin kirjotuksen johdosta, jotka kuuluisaa saunakysymystämme selwitelläksemme olemme julkaisseet, on Hämetär ja Hämeen Woima wiime numerossaan tuoneet esiin seikkoja, joita ei 
          waitiollen woi siwuuttaa, ja jotka mielestämme osottawat, warsinkin Hämettäreen nähden, sanomalehden arwostelukywyn ja totuuden rakkauden painuneen luwallisuuden rajojen alipuolelle - 
          puhumattakaan ilkeistä salawiittauksista, joita „Hämettären” toimittaja teki wielä waltuustossakin ja jotka löyhkääwät suorastaan mädältä.</p>
        <p>Häikäilemättä julistaa „Hämetär” oikein allewiitaten, että nyt on kaupungilla tilaisuus, saada 1,500 markalla (entisen 35,000 mk. lisäksi), 90,000 mk. arwoinen saunalaitos, mutta jättää 
          wisusti mainitsematta, että kauppaa seuraa myös 50,000 mk. welkataakka ja että tuo 88,000 mk. omaisuus tulee siis kaupungille maksamaan 92,000 mk. - omaisuus, jonka sen omistaja on 
          halukas myymään lähes puolesta arwostaan, ja jota niin ollen ei saattane muussa arwossa pitää. Sen jälleen wäittää lehti täysissä tosissaan, että saunan tuottama tappio on 4,500 mk., 
          waikka sen itse julkaisemat tilinumerot osottawat tähänastisen tappion 16,000 mk. Onpa todella julkeata! Ja lisäksi puhuu Hämetär wielä „olemattomista awustuksista”, waikka kirjoittaja 
          hywin tietää, että sauna on saanut kaupungilta raha-awustusta, ilmaisen wuokratontin ja käytettäwän weden melkein ilmaiseksi. (10 p. kuutiometriltä, kun muut maksawat 40 penniä - mikä 
          sekin tietää kaupungille suoranaista tappiota.) Täytyy todellakin olla otsaa kirjoittajalla, joka tämän kaiken tietäen woi mokomalla tawalla tosiasioita wäärennellä. Mutta paras 
          wiimeiseksi. Wääristelyjensä Kruunuksi tuo Hämetär farisealaisella tawalla esiin walituksensa siitä, että Hämeen Sanomat ei tässsäkään kysymyksessä tahdo asettua yhteisedun kannalle ja 
          heittää wiittauksen, että meidän kantamme määrääjänä olisi „jonkun oman erityisen lempilapsen yksityisetu”!!! Luettuaan ja wielä julkisessa kokouksessa kuultuaan tällaista törkyä, jää 
          todellakin hämmästyksestä ihmettelemään - ja epäilemään onko laisinkaan kysymys täysijärkisestä kirjoittajasta. Kun me olemme juuri osoittaneet saunan kannattamattomuuden, wastustaneet 
          sen ostoa juuri sillä perusteella - kuinka woisimmekaan „lempilapsellemme” moista „etua” toiwoa? Missä järki ja johdonmukainen ajattelu, hywä Hämetär? Wai onko wiittaus käsitettäwä 
          osoituksena siitä, että teikäläisellä taholla on opittu etupäässä siltä kannalta asioita ajamaan? Walitamme, jos niin on, waikkakaan kaiken sen päälle mitä olemme kuulleet ja mitä 
          edelläkin on osotettu, emme sitä niinkään suuresti ihmettele. Mätä synnyttää aina uutta mätää.</p>
        <p>„Hämeen Woima” nähtäwästi on jossakin wisseissä suhteissa Hämettären tietojen waikutuksen alainen, sillä muuten ei ole ymmärrettäwissä se samantapainen salawiittaus minkä sekin heittää 
          huomauttamalla, että meillä ehkä olisi „kiikarissa joku yksityinen, joka halusta ostaisi saunan halwalla hinnalla”, tai että me surkuttelisimme osakkeenomistajia, jotka tulisiwat 
          menettämään tuon 15,000 mk. Edellisestä jo selwiää, ja woimmehan sen wieläkin wakuuttaa, että kumpikaan seikka ei hiwenenkään wertaa ole kantaamme waikuttanut; jos niin olisi, niin 
          olisimme samaa mieltä kuin muutkin lehdet, sillä siten ajaisimme jossakin määrin myös yksityisten etuja. Mutta kun silmämääränämme on yksinomaan yhteisetu, kaupungin ja sen kaikkien 
          weronmaksajain etu, emme ole woineet antaa minkään muun seikan itseemme waikuttaa. Jos Hämeen Woima olisi asioiden tasalla, jos se tietäisi nykyisen tilanteen syyt ja käsittäisi 
          seuraukset, luulemme että sekin olisi yhtä mieltä kanssamme - ellei umpimähkäinen kunnallissosialismin ihailu sillä taholla ole ylipuolella kaiken arwostelewan harkinnan.</p>
        <p>Olemme wielä tahtoneet palata tähän sitkeään kysymykseen huomauttaaksemme miten huonoilla aseilla kysymystä täytyy puoltaa; jo tämä seikka on omiaan osottamaan, että kysymys 
          kokonaisuudessaan täytyy olla myös huono. Hämettären ja Hämeen Woiman wakuutteluista huolimatta luulemme, että kysymys on kaupunkilaisten enemmistölle kyllä selwä, mutta päinwastaisesti 
          kuin mitä he tahtowat uskotella.</p>
        <h5>* * *</h5>
        <p>Waltuusto on nyt kysymyksen lopullisesti ratkaissut ja, kuten otaksuimmekin, päättänyt ottaa saunan kaupungille. Nyt on siis kaupunki saanut 90,000 mkn omaisuuden 1,500 markalla! 
          Edullinen kauppa siis! Mutta samalla on kaupunki lisännyt welkataakkaansa 53,500 markalla ja saanut hoiteisiinsa laitoksen, joka jatkuwasti tulee tätä weltataakkaa lisäämään.</p>
        <p>Emme tahtoneet ennen asian päättämistä tuoda esille erästä seikkaa, joka mielestämme olisi waatinut, että kaupungin waltuusto sellaisenaan ei olisi ottanut asiata päättääkseen. On 
          tiettyä, että useimmat waltuusmiehet owat osakkaita saunaa omistawassa yhtiössä ja owat siis olleet päättämässä asiasta omaksi edukseen tai wahingokseen. Waikkakaan laki ei olisi 
          pakoittanut walitsemaan lisäwaltuusmiehiä asiata ratkaisemaan, olisi kuitenkin waltuuston arwolle paremmin sopinut antaa asia sellaisten henkilöiden päätettäwäksi, jotka eiwät ole 
          minkäänlaisessa suhteessä kysymykseen. Wain silloin olisi yksinomaan yleiset syyt päätökseen waikuttaneet.</p>
        <p>Emme ole myöskään ennen päättämistä tahtoneet esiin tuoda sitä uhkaa, minkä monen kaupunkilaisen suusta olemme kuulleet, että jos waltuusto saunan ostaa, päätöksestä on walitettawa. 
          Siihen on kylläkin jokainen weroa maksawa kaupunkilainen oikeutettu, ja kaikkeen siihen nähden mitä asiassa on tapahtunut, olisi ehkä laillisia syitäkin. Mutta onhan toiselta puolen 
          jokaisella yhteiskunnalla sellaiset hoitajansa kuin se itse tahtoo ja ansaitsee. Walitukset waltuustojen päätöksistä meillä owat ylen harwinaisia. Pianhan nähdään pitäwätkö kaupunkilaiset 
          yhteiseduistaan niin paljon huolta, että walitukseen ryhtywät; puolestamme emme tahdo siihen kehoittaa, waikka olisikin mielenkiintoista nähdä mihin saakka jääwillisyys tällaisissa 
          tapauksissa ulottuu.</p>
        <p>Kun ratkaisu nyt on tehty, jää kaupungin asioiden huoltajille suuri tehtäwä saada tämä uusi kunnallislaitos itsensä kannattawaan kuntoon, kuten on wakuutettu woitawan tehdä. Warteen 
          otettawia huomautuksia siinä suhteessa on julkisuudessakin esiintuotu. Mutta pelkäämme, että henkilöt, joiden käsiin asian järjestäminen joutuu, tuskin jaksawat niin kowin kourin siihen 
          käydä, että toiwottuun tulokseen päästäisi. Mutta — onhan kaupungilla waroja uhrauksiinkin — onhan kaupungille pelastettu tärkeä laitos, jota wailla kaupungin terweyshoito olisi saattanut 
          joutua waaranalaiseksi (!)</p>
      </Article>

      <div className="interTitle">22.10.1914</div>
      <Article titleText="„Wiipurin tie.”">
        <p>„Wiipurin tien” nimellä tunnetaan yleensä Hämeenlinnan tienoilla, ainakin sen itäpuolella, se waltamaantie, joka yllämainitusta kaupungista johtaa sen itäpuolella olewiin kuntiin. Tuon 
          nimensä se on kait perinyt niiltä ajoilta, jolloin wielä kaikki pitkämatkainen liikenne suoritettiin hewosajopeleillä ja jolloin Hämeenlinna oli tärkeänä keskuspaikkana Etelä-Suomessa 
          idästä länteen (Wiipurista Turkuun) käywän liikewäylän warrella.</p>
        <p>Nykyään tuolla maantiellä ei enää ole läheskään niin laajaa merkitystä kauttakulkuliikenteelle kuin entisinä aikoina, ja nykyisten kulkuneuwojen wallitessa tuskin kenenkään päähän 
          pälkähtäisi wakawissaan sitä tietä lähteä Hämeenlinnasta Wiipuriin ajaa körryyttämään. Mutta, waikka se ei nykyisin enää olekaan koko maan liikkeen waltasuonena, on se sittenkin — paitsi 
          suurta paikallisliikennettä, — epäilemättä yksi Etelä-Hämeen tärkeimpiä ja enimmin käytettyjä maanteitä kauttakulkuwäylänäkin. Sen johdosta tässä muutama sana.</p>
        <p>Suuri liike sanotulla tiellä johtuu etupäässä siitä, että niiden monien suurten, wäkirikkaiden ja warakkaiden pitäjien, jotka sijaitsewat Hämeenlinnan itäpuolella, täytyy sekä 
          henkilöliikenteessä, että muussa liikenteessä ja tawarawaihdossa niin Hämeenlinnan kaupungin kuin rautatienkin kanssa ja kautta muulle maailmalle pyrkiessä, miltei yksinomaan käyttää 
          sanottua maantietä. Kaikille muille suunnnille Hämeenlinnasta auttawat liikennettä aina jossain määrin rautatiet ja osittain wesitietkin, mutta itäänpäin lähipitäjiin pyrittäessä owat 
          maantiekulkuneuwot ainoat. Tällainen liikenne, jossa kuormaa ja kaikenmoista muuta ajopeliä muodostaa läpeensä aamusta iltaan melkein solkenaan on tiellä, kysyy wahwaa pohjaa. Senpätähden 
          sanottu maantie, warsinkin sillä osuudella, minkä se kulkee Hämeenlinnan maaseurakunnan ja Wanajan kunnan alueella, lähempänä Hämeenlinnan kaupunkia, jossa eri suunnilta johtawat 
          liikesuonet kulkewat yhtyneinä, onkin niin tientekijöille kuin sen käyttäjillekin ollut alituisena surunlapsena. Ei käy kieltäminen, etteiwät tientekowelwolliset suuremmalta osalta olisi 
          koettaneet pitää tietä kunnossa ja warmaankin siihen on uhrattu työwoimaa tuntuwasti enemmän kuin etäämpänä maaseudulla, mutta siitä huolimatta niinkin kuiwana kesänä, kuin wasta kulunut 
          oli, jolloin maantiet yleensä oliwat mitä parhaimmassa ajokunnossa, pitkin kesää lähimmillä kilometreilla Hämeenlinnasta itäänpäin noin 10 sm. sywyiset warhot osoittiwat pyörän 
          kulkusuuntaa - puhumatta kewäästä ja pitkästä syksystä, jollloin kärrynpyörät paikoin lähes kappoja myöten saawat uida kurassa ja sawiwellissä. Näin ollen, kun etäämpänä maaseudulla 
          tawallinen kuorma wielä kulkisi warsin hywin, käy sen eteenpäin wieminen kaupungin lähistöllä mitä surkeimmaksi eläinrääkkäykseksi, eikä ole useimmiten edes silläkään hinnalla 
          autettawissa.</p>
        <p>Poistaakseen sanottua epäkohtaa, on Wanajan kunta ryhtynyt sellaisiin toimenpiteisiin, että kysymyksessä olewa maantie pahimmalta osaltaan laskettaisiin kiwisepeleillä. Parhaana 
          todistuksena tehdyn esityksen tarpeellisuudesta on se, että hanke on saanut niin suuren kannatuksen, että 75 prosenttia eli kolmeneljäsosaa tällaisen tien johdosta syntywistä 
          kustannuksista sillä noin 2,5 km. matkalla, minkä ehdotettu tieosa kulkisi Wanajan kunnan alueella, on jo osaksi tientekowelwollisten, osaksi yksityisten taholta, luwattu. Loppuosan, 
          eli yhden neljänneksen kustannuksien suorittamisesta on Wanajan kunta päättänyt pyytää läänin kuwernööriä kutsumaan yhteiseen kuntakokoukseen niitä kuntia neuwottelemaan, jotka sanottua 
          tietä suurimmalta osalta liikenteessään käyttäwät. Sitäpaitsi olisi yhteisen kuntakokouksen päätettäwä myöskin sen osuuden (noin 1 km.) tekemisestä, joka sanotusta tiestä kuuluu 
          Hämeenlinnan maaseurakunnan alueelle. Epäilemättä maalaiskunnankin tientekowelwolliset ja ehkäpä yksityisetkin silläkin osalla ottawat wastatakseen suuremmasta osasta kustannuksia.</p>
        <p>Lähemmin asiaa ajattelematta saattaa moni tätä silmäillessään pitää ehkä kohtuuttomana, että Wanajan kunta rohkenee tientekokustannuksiinsa wedota naapurikuntain osanottoon, koska 
          kullekin kunnalle on omalla alueellaan siinä suhteessa jaettu welwollisuudet. Todellisuudessa ei se kuitenkaan sitä ole, sillä sitä tieosaa, josta tässä on kysymys, käyttäwät 
          ulkokuntalaiset wähintäänkin yhtä paljon, mutta hywin luultawasti paljon enemmänkin kuin mitä wanajalaiset sitä paikallisajossaan käyttäwät, eikä kukaan kaiketi tahtone wäittääkään, 
          että wanajalaiset millään tawalla wastaawassa määrässä kuluttaisiwat yhden enemmän kuin toisenkaan ulkokunnan maanteitä. - Joku tahtonee ehkä wielä sanoa, että jos esim. Wanajalla tai 
          maaseurakunnallisella onkin suhteellisesti suuremmat tientekorasitukset on heillä myöskin sitä wastaawassa määrässä etuja kaupungin läheisyydestä, mutta tämäkään wertailu ei pidä 
          paikkaansa. Myönnettäköön kernaasti, että kaupungin läheisyydestä on monta etuakin, mutta kyllä siitä on haittoja ja kustannuksiakin, joiden esittäminen tässä weisi liian pitkälle. 
          Senwerran kuitenkin woinen mainita, että kiinteimistön omistaja jo kiinteistön ostohinnassa saa kaupungin lähistöllä kalliisti maksaa ne edut, joita tämän läheisyyden on edellytetty 
          tuottawan.</p>
        <p>Me maantien käyttäjät terwehdimme ilolla sitä alotetta, jonka Wanajan kunta on tehnyt ja toiwomme, ei ainoastaan sille suotuisaa ratkaisua, waan, että yleensä suuriliikkeisempiä teitä 
          ryhdyttäisiin walmistamaan sepeliteiksi.</p>
        <p className="signature">E. A.</p>
      </Article>

      <div className="interTitle">31.10.1914</div>
      <Article titleText="Kaupungin isillä">
        <p>oli wiime torstaina tuikeanlainen istunto. Tuntui siltä kuin edellisen saunakokouksen kuumuus ja löylyn heitto olisi wieläkin isien harteilla askarrelut. Ehkäpä oliwat omassa saunassaan 
          ahkerasti tämän ajan kylpöneet.</p>
        <p>Kansakouluntarkastajan palkankorotusanomus antoi alkupuhtia asioille. Anomuksessaan oli tarkastaja huomauttanut, miten hän palkkausasiassa on raatihuoneen talonmiehen, palosotilaitten 
          y. m. pienipalkkaisten kanssa samalla tasolla ja että hän tahtoisi päästä edes lähemmäksi ulosottoapulaisen, wahtimestarien ja puutarhurin y. m. palkkausta.</p>
        <p>Isä Alanko piti sopimattomana koko anomusta. Wiran awoimena ollessa hakijat tiesiwät, mitä siitä on palkkaa, joten olisi pitänyt silloin „antaa olla hakematta”. Jos ei wirka miellytä 
          hoitajaa, niin julistettakoon se auki. Isä Sjöstedt oli toista mieltä ja kannatti anomusta, huomauttaen, miten nykyinen tarkastaja on innostunut tehtäwäänsä ja miten työt owat 
          lisääntyneet esim. Myllymäen kansakoulun perustamisen jälkeen. Nykyisiin oloihin nähden hylkäsi waltuusto tällä kertaa anomuksen.</p>
        <p>Teurastamon ja lihantarkastamon johtokunnan ehdotus ensi wuoden tulo ja menoarwioksi wasta rymyn aiheutti. Isä Tarjanne arwosteli ankarasti ehdotusta ja piti johtokunnan menettelyä 
          erinäisten menoerien, m. m. eläinlääkärille maksettawasta 400 mk. korwauksesta ylityöstä oikeudettomana. Tätä hänen ei olisi pitänyt sanoa. Teurastamon johtokunnan jäsen isä Laurela 
          antoi takaisin „isän hihasta”. Sanoi suurempienkin laitosten kustannusarwioita tehdyksi kuin mainitun „roskakasan” ja että sen laatijat owat yhtä pystywiä kustannusarwiota tekemään kuin 
          herra Tarjanne. Jollei isä Tarjannetta tyydytä johtokunnan toimenpiteet wahtimestarin ja puhdistajien ottamisesta, niin menköön itse teurastamolle likakasoja poistamaan. Lupasi 
          wastedeskin sellaisen miehen kuin isä Tarjanteen, joka aina hyökkää ihmisten kimppuun, kuten esim. saunakysymyksessä hra Kariston, niskastaan nakata. Sellaista ja paljon muuta ne isät 
          toisilleen lateliwat. Puheenjohtajan täytyi isiä hillitä ja pyytää heitä harkitsemaan sanojaan.</p>
        <p>Muut asiat, kuten alemman kansakoulun 3:sien luokkien liittäminen ylempään kansakouluun, uuden pakkahuoneen rakentaminen ja Kiistalan alueen järjestäminen meniwät rauhallisemmin.</p>
        <p>H:linnan kirjansitomotehtaan wuokra-asia myös aiheutti lyhyen sananwaihdon. Rahatoimikamari ehdotti wuokraksi 500 mkaa ja wuokra-ajaksi 5 wuotta. Tehdas sijaitsee ent. Gaddin talossa. 
          Hra Laurela piti wuokraa liian alhaisena ja piti moitittawana, että kaupunki suosii ketään yksityistä, olkoonpa se sitten waikka pastori Hernberg. Ehdotti wuokraksi 600 markkaa ja 
          wuokra-ajaksi 1 wuotta. Wuokra päätettiin pysyttää ennallaan, mutta wuokra-ajaksi määrättiin 1 wuosi.</p>
        <p>Linnanniemeläisille päätettiin antaa sähköwalo.</p>
        <p>Eteisessä wielä teurastamosta innostuneet miehet sinutteliwat toisiaan ja lasketteliwat kohteliaisuuksia.</p>
        <p>Siis tuima, kowin tuima, waikka tuloksista yleensä laiha kokous, lukuunottamatta Kiistalan asiaa.</p>
        <p className="signature">Kuuntelija.</p>
      </Article>
      
      <div className="interTitle">26.11.1914</div>
      <Article titleText="Kiistalan alueen järjestely.">
        <Image className="centeredImageStyle" src={img2} alt="Kiistala"/>
        <p>Ylläolewa piirros esittää järjestelyehdotuksen Kiistalan aluetta warten. Waltuusmiehet puolestaan owat jo kerran wahwistaneet erään aikaisemmin aluetta warten laaditun 
          asemakaawaehdotuksen, mutta senjälkeen on esiintynyt seikkoja, jotka owat pakottaneet muuttamaan laadittua ehdotusta. On saatu tietää, että rautatiehallitus on tehnyt suunnitelman 
          Hämeenlinnan aseman ratapihan muuttamisesta ajanmukaisempaan kuntoon, ja kun tämän suunnitelman mukaan rautatien ulkolastausalue siirretään kaupungin puolelle, piirroksessa osotetulle 
          paikalle, niin warsinkin tämä seikka on wälttämättömästi aiheuttanut muutoksen ennen wahwistettuun asemakaawaehdotukseen.</p>
        <p>Nykyinen rautatien ulkolastaus paikka, ollen toisella puolella rataa, onkin kaupunkilaisille perin hankala, kun radan poikkikulussa rautatieliikkeen takia tuontuostakin tapahtuu 
          keskeytystä, aiheuttaen tawarankuljettajille suurta hankaluutta ja ajan hukkaa. Kun siis kaupungin liikenne tuntuwasti hyötyy ulkolastauspaikan siirtämisestä kaupungin puolelle, niin 
          on rautatiehallitus pyytänyt kaupunkia tätä siirtämistä edistämään ja sitä tarkoitusta warten rautatielle ilmaiseksi luowuttamaan tarwittawan noin 6,000 neliömetrin suuruisen 
          maakappaleen. Tähän owat waltuusmiehet suostuneetkin m.m. sillä ehdolla, että rautatiehallitus puolestaan kaupungille ilmaiseksi luowuttaa asemalta uimahuoneelle johtawan - 
          piirroksessa n:o 4 merkityn - tiemaan, jonka pinta-ala on noin 2,500 neliömetriä ja jonka omistaminen on kaupungille perin tärkeä. Rautatiehallitukselle luowutettu alue on piirroksen 
          yläosassa oikealla pilkkuwiiwojen sisäpuolella olewa maa-alue.</p>
        <p>Jos nyt lähemmin tarkastetaan asemakaawaehdotusta, niin huomaataan, että nykyisellä Itäisellä Wiertotiellä - piirroksessa n:o 10 - wastaisuudessa ei ole enää samaa merkitystä 
          liikekatuna kuin mitä sillä nykyään on. Heti kanawan sillan luota kääntyy katu n:o 7 wiistoon asemarakennukselle päin ja kun rautatiehallitus on luwannut rakentaa kadun jatkon omalla 
          alueellaan asemarakennukselle asti, niin on warsin luonnollista, että asemalle kohdistuwa liikenne käyttää tätä wiistokatua hywäkseen. Jos kadun n:o 3 jatkoksi woitaisiin saada tie sahan 
          kohdalla olewalle radan poikkikäytäwälle, joka tie olisi wälttämättömän tarpeellinen, niin kadut n:o 7 ja 3 muodostaisiwat mukawimman kulkuyhteyden Sairioon sekä Karlbergiin. Samaten 
          kääntyy Wiertotieltä katu n:o 12 wiistoon oikealle wastaiselle ulkolastauspaikalle. Tämän kadun warrelle rakennetaan myöskin uusi pakkahuone. Itäiselle Wiertotielle jääpi näin muodoin 
          jälelle ainoastaan maalaisliikenne sekä rautatien tawaramakasiineihin kohdistuwa liikenne.</p>
        <p>Kiistalan katujen leweyttä määriteltäessä on otettu huomioon kadun merkitys liikenteen wälittäjänä sekä muutenkin nykyaikaiset waatimukset. Niinpä kadut n:o 6 ja 10 tulewat 20 metriä 
          leweiksi sekä sijoitetaan niihin puuistutuksia kummallekin puolelle katua. Kadut n:o 3 ja 12 owat 16 m. leweät; kadun n:o 4 leweyttä ei wielä ole woitu määrätä. Kun katujen n:o 1, 9, 14 
          ja 11 toinen puoli aina pysyy rakentamattomana, on näiden katujen leweys ainoastaan 10 metriä. Wertaukseksi mainittakoon, että kaupunkimme katujen leweys on 12 metriä, paitsi pieniä osia 
          Birger Jaarlin ja Kymnaasikaduista, joiden osien leweys on 17 à 18 metriä.</p>
        <p>Werrattaissa Kiistalan asemakaawaa muun kaupungin asemakaawan kanssa huomaa kuitenkin suurimman eroawaisuuden siinä, että Kiistalan korttelit eiwät ole samanlaisia suorakulmaisia 
          kuwioita kuin muut kaupunkimme korttelit ja että niissä on useampia tontteja. Tämä seikka lähinnä pakottaa hakemaan muutosta nykyiseen rakennusjärjestykseemme, joka edellyttää 
          korkeintaan 6 tonttisia kortteleita, tai parasta lienee laatia kokonaan uusi rakennusjärjestys Kiistalaa warten, sillä nykyinen on muiltakin osiltaan aiwan liian wanhanaikuinen.</p>
        <p>Wiertotien oikealla puolella olewa osa on ajateltu teollisuus- ja makasiinitonteiksi; wasemmalle puolelle taas on suunniteltu yksinomaan asuintontteja, paitsi muutamia makasiinitontteja 
          Wanajaweden rannalle ja paria kolmea warastotonttia lähellä sahan aluetta.</p>
        <p>Maaperän perustuksen puolesta on Kiistalan alue keskinkertainen. Molemmilla puolilla Wiertotietä, lähempänä rautatien aluetta on perustus aiwan hywä; koko Wiertotien ja kadun n:o 4 
          wälinen osa on maaperältään kiinteätä sawea, mutta lähempänä sahan aluetta on ainakin muutamin paikoin suomutaa paksummalta, sellaista kuohusawea, jota kaupungissa siellä täällä esiintyy, 
          ei Kiistalan alueella löydy.</p>
        <p>Alueen koko suuruus on 127,000 neliömetriä ja tuli sen hinnaksi pakkolunastettaessa noin 77 penniä neliömetriltä, joka hinta on warsin korkea siihen nähden, että suuri osa aluetta on 
          alawata maata, joka jonkun werran waatii täyttämistä soweltuakseen tonttimaaksi. Ehdotetun järjestelyn mukaan, kun kaikki kadut ja muut awonaiset paikat poislasketaan, jääpi kaupungin 
          haltuun myytäwäksi ja wuokrattawaksi yhteensä 88,000 neliömetriä, jotka siis siten olisiwat rahaksi muutettawat, että ei ainoastaan alueen ostohinta, waan myöskin kustannukset katujen 
          teosta, wesi- ja likawiemärijohtojen, raiteiden ja rantalaiturin rakentamisesta tulewat korwatuiksi. Tällaisen tuloksen saawuttaminen ei pitäisi ollakaan waikeata, sillä Kiistalan tontit 
          owat asemansa puolesta siksi hywällä paikalla, että niistä jo nyt woi waatia korkeamman hinnan kuin muista kaupungin laitaosissa olewista rakentamattomista tonteista ja niiden arwo 
          epäilemättä wuosi wuodelta kohonnee, sillä Kiistalasta woi kehittyä, jos ei tärkein, niin ainakin yksi tärkeimpiä ja arwokkaimpia kaupunginosiamme.</p>
        <p className="accent">Kaupunkilaiset ehdottakaa nimiä Kiistalan kaduille:</p>
        <p>Kun Kiistalan kaduilla ei wielä ole nimiä, waan owat ne ainoastaan numeroilla merkityt, niin kehoittaa Kiistalan alueen järjestelywaliokunta kaupunkilaisia ehdottamaan kaduille sopiwia 
          nimiä. Yhteensattumisen wälttämiseksi ilmotetaan, että waltuusmiesten hywäksymällä Sairion wuokratonttialueella on seuraawat katunimitykset: Raja-, Karlbergin-, Satama-, Sairion-, 
          Toiwolan-, Kulma-, Rautatien-, Oja-, Pohjoinen ja Eteläinen Puisto-, Tehtaan-, Ilamon-, Aulangon-, Wanajan-, Hauhon-, Idänpään-, Harju-, Hatilän- ja Poikkikadut, joita nimityksiä, mikäli 
          mahdollista, on wältettäwä.</p>
        <p>Kirjalliset nimiehdotukset woidaan jättää joko Rahatoimikamariin tai waliokunnan sihteerille, insinööri Oskar Nerolle.</p>
      </Article>

      <div className="interTitle">28.11.1914</div>
      <Article titleText="Isäin istunto.">
        <h5>Pakinaa.</h5>
        <p>Esityslistalla olewain 13:n asian onneton luku, waiko wiereisestä salista kuuluwat kiehtowat soiton säweleet pidättiwät arwoisia isiä saapumasta istuntoon täysilukuisina. Eikä auttanut 
          muu istunnon kunnialliseen alkuunsaattamiseen kuin hakea eteisestä musikaalisiin nautinnoihin waipuneet isät, jotka sitten hetken kuluttua astuiwatkin paikoilleen reippaan marssin wielä 
          tulwehtiessa sisään awoimesta owesta.</p>
        <p>Eipä ollut ihme, että asiat tällaisen alkusoiton jälkeen luistiwat. Sowussa ja yksimielisyydessä nuijittiin nopeasti eityslistan alkupuolella olewat asiat, joista tärkeimmät oliwat 
          kaupungin insinöörin palkkaaminen ensi wuodeksi johtamaan silloin suoritettawia lukuisia kunnallisia töitä sekä wanhentuneen merilakia wastaan sotiwan satamajärjestyksen muuttaminen. 
          Muistutettawaa ei ollut myöskään erään serbialaisen anomuksesta päästä Suomen kansalaiseksi, joten siis Hämeenlinnalla ennen pitkää on kunnia lukea tämän parhaillaan wapautensa ja 
          riippumattomuutensa puolesta urheasti taistelewan pienen kansan jäsen weroamaksawaksi kuntalaisekseen.</p>
        <p>Sauna-asia se jälleen sai isien kielenkannat hiukan irtaantumaan. Puheenjohtaja ehdotti, että kaupan lopullinen päättäminen annettaisiin lisättyjen waltuusmiesten tehtäwäksi. Eräs isä 
          arweli, että tokkopa tuota tarwinnee, kun ei upeata saunarakennusta saata pitää edes warsinaisena kiinteimistönä - onpahan waan juridisesti katsoen kuin mikäkin toisen maalle rakennettu 
          mäkitupalaisen mökki. Toisten isäin mielestä oli asia kuitenkin siksi tärkeä, että se jo warowaisuudenkin wuoksi ja jotta eiwät isät joutuisi „huonoon waloon” oli wielä kerran annettawa 
          lisättyjenkin isien punnittawaksi. Tähän alussa epäilewällä kannalla ollut isäkin yhtyi, joten maistraatti sai tehtäwäkseen toimittaa waalit. Tulossa on siis waalitaistelu, jossa sauna 
          tulee puolueiden jakajaksi. Ja elleiwat merkit petä, niin ei siinä ainakaan löylyä tule puuttumaan.</p>
        <p>Saunasta päästyä ryhtyiwät isät rahakysymyksiin. Annettuaan kaupungin hallintokuntien tietää, että niiden menoarwiot laaditaan ja wahwistetaan sitä warten, että niitä noudatetaan, 
          ryhtyiwät he käsittelemään raha-asiain waliokunnan ehdotusta, että kaupungin kaikki pienemmät eri tahoilta lainatut ja eri prosenttiset lainat yhdistettäisin yhdeksi suureksi 
          obligatsioni- tai muunlaiseksi kuoletuslainaksi. Pitkässä sarjsssa astuiwat waliokunnan laatimassa luettelossa „aikojen yöstä” wielä kerran esiin ruoppauskoneet, torikioskit, 
          köyhäintalon rakennuslainat, rantain järjestelyt, mukawuuslaitokset y. m. päättyen tulewaisuudessa hämärtäwään pikkujärwen rannalle rakennettawaan pakkahuoneesen, Kiistalan 
          kaupunginosan tulewiin satamalaitureihin ja sen wielä nimettömiin katuihin. Isä Alanko tahtoi kysyä, oliko asiaa jo tarpeeksi harkittu ja oliko lainaussumma kyllin „pyöreä”, jotta ei 
          tulewaisuudessa tarwitsisi katua, kun ei nyt yhdellä kertaa otettu niin että riittää. Epäili myöskin ajan soweliaisuutta obligatsionilainan ottamiseen. Toisten isäin mielestä asia oli jo 
          kuitenkin tarpeeksi kypsä lisättyjen waltuusmiesten harkittawaksi ja niin sai maistraatti tehtäwäkseen toimittaa tätäkin warten waalit.</p>
        <p>Lopuksi otettiin esille kuwernöörin kirjelmä, jossa waadittiin waltuustolta selitystä eräiden weronmaksajain saunanostosta kuwernöörille tekemän walituksen johdosta. Kun puheenjohtaja 
          oli hetkisen sitä „ihmetellyt”, nousi isä Tarjanne sitä tutkiskelemaan. Hän kohenteli sitä päältä ja alta, silmäili edestä ja takaa, käänsi nurin ja weti jälleen oikein, ihmetteli ja 
          ällisteli, mutta ei parhaalla tahdollaankaan woinut löytää siitä mitään - hywää. Muut eiwät takertuneet koko juttuun.</p>
        <p>Mutta walittajat woiwat olla tyytywäisiä. He owat saawuttaneet ensimäisen woittonsa. Lisäwaltuusmiehet saawat päättää asiasta, waikka siinä kokouksessa, jonka päätöksestä walitus 
          aiheutuu, ei mainittu lisäwaltuusmiehistä sanaakaan.</p>
        <p>Turhaa on wäittää, että walitus oli ennenaikainen, sillä jos niin olisi, niin silloin on waltuuston kokouksen päätös myöskin wäärin stiliseerattu pöytäkirjaan.</p>
        <p className="signature">Kuuntelija.</p>
      </Article>

      <br></br>
      <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/titles/0356-2751?display=THUMB&year=1914">Linkki vuosikertaan 1914</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Artikkeleita 1914</title> // metadata

export default Articles1914Page 