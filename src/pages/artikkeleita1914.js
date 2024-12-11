import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import Image from "react-bootstrap/Image";

import "../styles/base/global.css"

import SubDivider from "../assets/sub-divider.svg"

import img1 from "../images/content/hasa1914/img-1.jpg"

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

      <div className="interTitle">12.2.1914</div>
      <Article titleText="Hämeenlinnan kirje.">
        <h5>Salakapakoiminen.</h5>
        <h5>Muuan raittiuskomitean ehdotus. </h5>
        <h5>Waltuustolle.</h5>
        <h5>Ilmat</h5>
        <h5>Poliisijärjestyksen 96 §.</h5>
        <h5>Muistettawa tilaisuus.</h5>
        <SubDivider className="dividerStyle" />
        <p>Salakapakoiminen on hywässä Hämeenlinnassamme wiime aikoina hirwittäwässä määrässä lewinnyt. Monet trokarit harjoittawat luwatonta <span className="quote">afääriään</span> melko rohkeasti. 
          Ulottawatpa sitä muuallekin. Eihän ole pitkä aika siitä, kun eräs täkäläinen <span className="quote">liikemies</span> muistaakseni Kajaaniin matkaessaan poikkesi suurta wiinawarastoaan 
          tyhjentämään Lahteen, mutta joutuikin siellä kiinni ja warasto otettiin takawarikkoon. Äskettäin on tässäkin lehdesssä kerrottu useiden salakapakoitsijoitten oikeusjutuista. Toisia juttuja on 
          tulossa. Muuankin nuorukainen kertoi oikeudessa wiime markkinoilla myyneensä 42 pulloa pirtua. Tämä kauppa on niin julkista, että muutamat warakkaat henkilötkin Myllymäessä owat antautuneet 
          myrkyn myyjiksi.</p>
        <p>Eiwät taida raittiuskahwilatkaan olla mallikelpoisella kannalla, koskapa muutamissa humalaiset saawat mellastella ja pullotella. Kuulin pienen jutelman eräästä juomingista. Pari 
          palwelustyttöä oli ollut lystäilemässä eräiden wiinurien seurassa. Lopulta oliwat tytöt juopuneet siinä määrin, etteiwät tahtoneet pystyssä pysyä. Herrasmiehet oliwat wieneet 
          piikaset <span className="quote">Tähti</span>-rawintolaan klo 4 ajoissa aamulla. Kohmelo oli pahasti sekoittanut matkustawaisten meiningit ja he jäiwät edelleen rawintolaan, jossa kertoiwat 
          olewansa <span className="quote">ompelijattaria Turusta</span>. Kun tyttöjä ei kuulunut kotiin, tuliwat herraswäet kauhuihinsa katoamisen johdosta ja ilmoittiwat siitä poliisille. Pelättiin 
          tapaturmaa tahi jotain rikosta. Kuinka olikaan. Poliisit löysiwät tytöt rawintolasta ja toimittiwat heidät palweluspaikkoihinsa, josta heidät sittemmin lienee wiety sairaalaan. Siis perin 
          surullinen seikkailu, jonka seurauksia saawat katkerasti katua.</p>
        <p>Monta muuta mustaa juttua olen kuullut, mutta jätän niiden kertomisen. Kaiken tämän johdosta olisi poliisiwiranomaisten pantawa niin wiinatrokarit kuin heidän <span className="quote">
          hyysääjänsäkin</span> kireelle. Yksityisten kansalaisten on poliisia tässä toimessa awustettawa. Rawintoloita myöskin on pidettäwä tarkasti silmällä, ettei uusia <span className="quote">
          Höglundin juttuja</span> pääse syntymään. Oireet siihen suuntaan jo käywät. Salakapakoiminen on kowin pitkälle kehittynyt. Sille on ajoissa saatawa sulku ja trokarit armotta kiinni. 
          Ilmiantamiseen waaditaan luonnollisesti <span className="quote">siweellistä rohkeutta</span>, mutta kuitenkin on jokaisen kunnon kansalaissen welwollisuus saattaa julkisuuteen tunnetut 
          rikokset, sanoo lahjomaton moraali, ja ennakkoluuloa on toisin wäittää.</p>
        <p>Poliiseilta on waadittawa raittiutta. Muuten woi käydä, kuten äsken, että järjestyksen walwojakin tyydyttää juomahimoaan salakapakoitsijan warastosta.</p>
        <SubDivider className="dividerStyle" />
        <p>Ruotsin hallituksen joku wuosi sitten asettama suuri raittiuskomitea, on nyttemmin saanut walmiiksi ehdotuksen kunnalliseksi kieltolaiksi. W. k. 14 p. jätti komitea hallitukselle 
          mietintönsä; se käsittää 400 painosiwua.</p>
        <p>Seuraawassa kerron mietinnön pääkohdista. Ehdotuksessaan on komitea koettanut</p>
        <p>1) asettaa kaikki erilaiset wäkijuomat samanlaisen käsittelyn alaisiksi;</p>
        <p>2) kunnille walmistaa niiden päättäwien elinten ja täysiwaltaisten asukasten kautta ratkaisewa walta juowutusjuomaliikkeen supistuksiin tahi kieltämiseen nähden sekä luoda suurempaa 
          tehoisuutta kuntien päätöksiin tässä suhteessa;</p>
        <p>3) estää niin paljon kuin se on mahdollista wäkijuomain wäärinkäyttäjiä saamasta näitä aineita</p>
        <p>Tämän lain alaisiksi lukee komitea kaikki juomat, joiden alkoholipitoisuus on suurempi kuin 2 1/4 wolyymiprosenttia. Wäkijuomien ja wiinien wälinen raja on alennettu 25:stä 21:een 
          wolyymiprosenttiin. Juowutusjuomain kauppaa ei saa harjottaa muun liikkeen yhteydessä.</p>
        <p>Mietinnön tärkein kohta on ehdotus kunnalliseksi äänestykseksi wäkijuomain wähittäiskaupan sallimisesta. Äänestys koskee kaikkia wäkijuomalajeja eikä sitä saa toimeenpanna useammin kuin 
          aina kolmen wuoden kuluttua. Äänioikeutettu tässä äänestyksessä on jokainen kunnan kirjoissa olewa hywämaineinen 21 wuotta täyttänyt Ruotsin mies ja nainen, joka ei ole holhouksen tai 
          waiwaishoitohallituksen edusmiehyyden alainen. Kullakin äänestäjällä on yksi ääni. Anomus kunnallisen äänestyksen toimittamisesta on kirjallisesti tehtäwä kuninkaan käskynhaltijalle ja 
          täytyy sen olla wähintään kahdenkymmenennen osan kunnan manttaalikirjoissa olewista allekirjoittama. Jos kaksi kolmasosaa äänestäjistä äänestää juowutusjuomain wähittäiskaupan poistamisesta, 
          astuu kielto woimaan. Tällaisen kiellon peruuttamiseen waaditaan niinikään kaksikolmasosan enemmistö.</p>
        <p>Tämän ohessa herättäwät mielenkiintoa ne rajoitukset, joita komitea ehdottaa wäkijuomain wähittäismyyntiin ja jotka tietenkin owat woimassa siinä tapauksessa, ettei kieltoa kunnassa saataisi. 
          Oikeus juowutusjuomain ostamiseen on nimittäin ehdotuksen mukaan ainoastaan sillä, joka kirjallisesti sitä pyydettyään ja annettuaan tarpeelliset tiedot henkilöstään ja saa wastakirjan 
          määrätyssä wähittäiskaupassa tehtäwiä wäkijuomaosotuksiaan warten. Wäkijuomia ei saa myydä sille</p>
        <p>joka ei ole täyttänyt 21 wuotta,</p>
        <p>joka on tuomittu juopumuksesta kahden edellisen wuoden aikana,</p>
        <p>joka wiimeisen kolmen wuoden kuluessa on tuomittu rikoslain säätämiin rangaistuksiin, jos oikeus on hawainnut rikoksen tapahtuneeksi wäkijuomien waikutuksen alaisena,</p>
        <p>joka wiimeisen kolmen wuoden aikana on ollut kuritushuoneessa tai wankilassa,</p>
        <p>joka wiimeisen kolmen wuoden aikana on tuomittu luwattomasta juowutusjuomain myynnistä tai luwattomasta juomain hankkimisesta toiselle,</p>
        <p>joka kuninkaan käskynhaltijan määräyksen nojalla on otettawa alkoholistihoitolaan tai on wiimeisen kolmen wuoden aikana yleisessä tai yksityisessä laitoksessa ollut hoidettawana 
          juoppohulluuden eli jonkun muun alkoholipsykoosin wuoksi, sekä se</p>
        <p>jolta kunnan raittiusneuwoston päätöksen nojalla on kielletty wäkijuomain ostaminen.</p>
        <p>Wiinaa ei saa kenellekään myydä enempää kuin 1 litra kalenteriwiikon aikana.</p>
        <p>Wäkijuomain wähittäismyynti on kielletty yleisölle awoimissa puistoissa ja niiden wälittömässä läheisyydessä. Ei liioin saa niitä tarjoilla julkisen näytöksen tahi sirkuksen, warietèn tai 
          tanssitilaisuuden yhteydessä. Anniskelua ei saa tapahtua sellaisessa huoneustossa, joka on wälittömässä yhteydessä tanssi- tai näyttelyhuoneuston kanssa.</p>
        <p>Wähittäismyyntiaika on ehdotukssessa määrätty korkeintaan seitsemäksi tunniksi kello 9 aamulla kello 5 iltapäiwällä arkipäiwinä. Wiinan anniskelu saa alkaa aikaisintaan kello 12 päiwällä. 
          Wiinin ja oluen anniskelu saa alkaa aikaisintaan kello 9 aamupäiwällä, kuitenkin niin että ennen klo 3 ip. saadaan anniskella ainoastaan ruoka-aikoina ja wain ruokaa nauttiwille wieraille. 
          Wiimemainittu määräys on woimassa sunnuntaisin ja pyhäpäiwinä. Päiwäjumalanpalweluksen aikana on kaikki anniskelu kielletty. Anniskelu on lopetettawa kello 10 i.p.</p>
        <p>Kieltolaki, jota kohti me pyrimme ja jonka eduskuntamme on jo kahdesti hywäksynyt, näkyy wiipywän ties kuinka kauan. Toimettomia emme saa kuitenkaan olla. Raittiuden harrastajille antaa 
          naapurimaan kunnallinen kieltolaki paljon ajattelemisen aihetta. Siksi olen siitä tahtonut kertoa.</p>
        <SubDivider className="dividerStyle" />
        <p>Kun olen tässä raittiusasiasta näin pitkälle puhunut, tahdon lopuksi kiinnittää herrain waltuusmiesten huomiota siihen anomukseen, jonka täkäläinen raittiuswäki on tehnyt wäkijuomain 
          anniskelun rajoittamiseksi. Raittiuswäki ei ole liikoja waatinut, joten sen anomus on otettawa huomioon. Muistakoot waltuusmiehet pääkaupungin isäin tekemiä rajotuksia.</p>
        <p>Tänään päätetään siitä, monetko anniskeluoikeudet myönnetään. Nykyiseltä waltuustolta ei woi tietysti suuria toiwoa. Suomalaisen puolueen waltuusmiehet owat kuitenkin ehdottaneet, että yhdet 
          oikeudet otettaisiin pois ja tehtäisiin kaupunginhotellista raitis matkustajarawintola. Tätä kohtuullista waatimusta owat ruotsalais-nuorsuomalaiset ruwenneet wastustamaan, jonka takia eräs 
          suomalainen waltuusmies on ehdottanut sellaista rajoitusta, että mainitussa hotellissa tarjottaisiin yksinomaan matkustajille wäkijuomia.</p>
        <SubDivider className="dividerStyle" />
        <p>Ilmat owat wallan merkillisiä. On kowin pakkasaika, helmikuun puoliwäli, mutta luonto leikittelee, wiskelee wettä kuin huhtikuun lopulla. Mitä tästä enää tuleekaan, jos tällaista pitemmälti 
          jatkuu. Lumi on mennyt kaiken maailman tietä ja jäätkin käywät heikoiksi. Kelirikko kukoistaa, käyttääkseni
           kewätkieltä. Kärryillä ajetaan kuin toukokuussa. Ihmiset kummittelewat 
          talwitamineissa. Paljon huolta ja wahinkoa tällainen talwi tekee jokaiselle, mutta warsinkin maamiehelle ja rahdinajajalle. Wanhat ennustawat, että maaliskuussa kylwetään ja toukokuussa 
          ajetaan reellä. Se näkee, joka elää. Jos koskaan, niin nyt pitää paikkansa sananlasku: <span className="quote">Kewättä kynttelistä j. n. e.</span>.</p>
        <SubDivider className="dividerStyle" />
        <p>Poliisijärjestyksen 96 §:ä kummittelee ja tekee häiriötä edelleen. Mainittu pykälä kieltää jälleenmyyjiä ostamasta ennen määräaikaa, jonka johdosta he owat walitelleet senaattiin ja 
          kuwernöörinwirastoon sillä seurauksella, että sakkotuomiot on kumottu ja 96 § selitetty ristiriitaiseksi elinkeinolain kanssa. Asian pitäisi siis olla selwä ja maistraatin muuttaman pykälä, 
          kun se kerran on lainwastainen, niin tarpeellinen kuin se kaupunkilaisten mielestä olisikin. Mutta kuinka onkaan. Torikauppioille mätkitään uusia sakkoja, waikka entiset owat korkeimmissa 
          wirastoissa kumotut. Ihmekö, että moinen menettely jälleen myyjiä harmittaa. He owat hakeneet oikeutta ja saaneet, mutta wain paperilla. Tuo on tosiaan kiusantekoa ja lain halweksimista.</p>
        <p>Asia tulee tänään esille waltuustossa. Ristiriitaisuusnäytelmä on jo tarpeeksi kauan kestänyt. Toiwottawasti siitä jo tehdään loppu.</p>
        <SubDivider className="dividerStyle" />
        <p>H:linnan Suomal. Seuralla on sunnuntaina wuosikokous klo 7 ip. talollaan. Siellä keskustellaan ja päätetään tärkeistä asioista. Jäsenet, naiset ja miehet, rientäkääpä kokoukseen alkamaan 
          uutta, reipasta, woitoista rikasta toimintawuotta! Miten innokkaaksi toiminta woitaisikaan saada, jos yhä useammat tulisiwat mukaan.</p>
        <p className="signature">Tiitus.</p>
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

      <div className="interTitle">21.2.1914</div>
      <Article titleText="Hämeenlinnan kirje.">
        <h5>200-wuotismuisto.</h5>
        <h5>Kotoisen puolesta.</h5>
        <h5>Naapurin pärskähdykset.</h5>
        <h5>Suomen Pankki.</h5>
        <p>T. k. 19 päiwä oli 200 wuotta kulunut onnettomasta Napuen taistelusta. Häwittyään Kostian wirralla oli Suomen armeija nälkää ja puutetta kärsien, ryysyisenä, huonosti asestettuna, mutta 
          alituisesti taistellen askel askeleelta wäistynyt yliwoimaisen wihollisen tieltä. Syksyn routa oli hetkeksi keskeyttänyt sotatoimet, mutta talwen tultua alkoi wihollinen jälleen edetä.</p>
        <p>Napuen kylän aukeilla, jonne Suomen armeija silloin jo oli ehtinyt, päätti Armfelt wielä kerran ryhtyä wastarintaan. Lumessa ja pakkasessa seisoi suomalaisten urhea joukko kolme päiwää 
          täydessä taistelujärjestyksessä wihollista odottaen. Melkoinen määrä Pohjanmaan uljaita talonpoikia oli saapunut armeijan awuksi kotikontuaan puolustamaan.</p>
        <p>Helmik. 19 pnä hyökkäsi wihdoin wihollinen. Sankka lumipyry sokasi suomalaisten silmät, mutta siitä huolimatta he pitiwat urheasti puoliaan. Taistelu oli wimmattua ja ennen pitkää se muuttui 
          täydelliseksi käsikähmäksi. Iskettiin miekoilla, musketinperillä ja nyrkeillä. Kaatuneetkin koettiwat wielä tarttua wihollisensa jalkoihin ja wetää hänet maahan. Rintamassa taistelewat 
          talonpojat käyttäytyiwät urheimpain sotamiesten lailla. Vihollisen yliwoima oli kuitenkin kolmikertainen ja wihdoin sankarillisen wastarinnan jälkeen sortui Suomen wiimeinen kowia kokenut 
          armeija. Kun taistelu oli päättynyt, lepäsi suurin osa siitä jäisellä hangella, wain wähäinen jäännös oli lyöttäytynyt wihollisen läwitse painautuen Laihian tiettömiin metsiin.</p>
        <p>Napuen taistelu on isänmaamme historian synkimpiä muistoja. Mutta samalla se kertoo kansasta, joka welwollisuutensa täyttäen uhrasi kaikki isänmaansa hywäksi ja joka epätoiwoon waipumatta 
          on noussut kowimmankin kohtalon alta. Ja sellaisessa muistossa saattaa nykyisenä aikana olla paljon opettawaa.</p>
        <SubDivider className="dividerStyle" />
        <p>Suomalainen wiikko on wain muisto, mutta mielenkiinnolla sitä wieläkin ajattelee. Se ei ole kuitenkaan tarpeeksi kannustanut kotimaisten tuotteiden käyttämiseen. Senpä takia pidetäänkin 
          täällä tänään kokous, jossa suunnitellaan mihin olisi ryhdyttäwä, jotta kotimaisen työn tuotteet Hämeenlinnassakin saawuttaisiwat kysyntää ulkomaisen edellä. Siltä waralta lienee sekä 
          opettawaista että kehoittawaista kiinnittää huomiota siihen, mitä kaikkea tänne Suomeen tuodaan ulkomailta sellaistakin, jota omassa maassa on saatawana. Esitän tässä luettelon sellaisista 
          tawaroista. Se ei suinkaan ole <span className="quote">tyhjentäwä</span>, eikä kaikki, mitä siinä on mainittu, ole <span className="quote">epäterweelliseen</span> tuontiin kuuluwaa.</p>
        <p>Lintuja tuodaan tänne metsästyksen maahan 22,641 mkan edestä. - Hewosia tuotiin Wenäjältä w. 1910 176,187 mkn edestä. Näistä hewosista owat monet olleet alkuperäisesti suomalaista, joita 
          wenäläiset owat aikoinaan ostaneet Suomen markkinoilta, sitten ajaneet ne loppuun Wenäjällä ja tuoneet takaisin Suomen markkinoille. - Luonnon woita tuotiin w. 1910 meille Wenäjältä 3,562,744 
          mkan edestä ja m. m. Tanskasta 876,118 mkn edestä. - Munia on Wenäjältä tuotu wuosittain yli 2 milj. mkn edestä. - Kalat, ulkomaalaiset, weiwät wiime wuonna maastamme 4,745,186 mk. - Wiime 
          wuonna meni rahaa ulkomaiseen wiljaan 87,346,151 mk. - Piparikakkuihin on tuhlattu 1,230,078 mk. - Hedelmiin on mennyt 8,685,428 mk. - Sieniä (syötäwiä) tuotiin maahamme w. 1910 yhteensä 
          88,490 mkn edestä aina Ranskasta asti. - Siirtomaantawaroihin, joihin luetaan kahwi, sokeri, suola, tupakka y. m., meni w. 1912 yht. 57,948,895 mk. - Juomatawaroiden tilauksiin kului 10,595,832 
          mk. - Sarwia ja sorkkia on tuotettu Wenäjältä ja Saksasta. - Jalkineita tuotiin eri maista 2,302,140 mkn edestä. - Lakinlippuja Saksasta 1,410 mksta. - Karjanrehua (heiniä, liiseitä ja kakkuja) 
          tuotiin maahamme w. 1910 11,142,597 mkn edestä. - Olkia tuotiin ulkomailta 298,324 mkn edestä. - Lattiamattoja on tuotu 8,664 markan edestä. - Witsoja on tuotu ulkomailta 424,748 markan 
          edestä. - Takkiaiset, etupäässä Saksasta ja Ranskasta tuodut, maksawat 2,448 mk. - Harjanwarret on tuotawa ulkomailta. Ei kaiketi osata meillä walmistaa. Niihin menetettiin 51,802 mk. - 
          Piipunwarret (pajusta), mitkä nykyään owat muodissa, owat Saksassa walmistetut, eikä suomalaisista pajuista. Niissä on mennyt ulkomaille noin 10,000 mk. - Hammastikut tuodaan enimmäkseen 
          Ranskasta ja Saksasta. - Paperia ja teoksia niistä tuodaan meille, warsinaiseen paperiwalmistusmaahan yhteensä 2,850,896 mk edestä. Tästä erästä wiewät esim. nimiliput 137,774 mk. Nimilippuja 
          on tuotettu Turkin Aasiasta asti. - Nauhat ja hipsut owat maksaneet meille wiime wuonna 1,410,026 mk. - Pitseissä lähetettiin ulkomaille, etupäässä Ranskaan, 699,028 mk. Kalawerkkoja on tuotu 
          meille 545,172 mk edestä. - Palttinaan on pantu wiime wuonna rahoja 424,440 mk. - Naisten hatut owat wieneet ulkomaille 998,808 mk. Hattujen ja lakkien ostossa on lähetetty ulkomaille 
          655,377 mk. Housunkannattimet ja sulkanauhat owat maksaneet meille 413,009 mk. - Sateen- ja päiwänwarjot owat maksaneet 46,589 mk. - Vuodewaatteita on tuotu 57,833 mk:n arwosta. - Terwaa ei 
          kaiketi Suomessä enää polteta. Tawallisen terwan tuontimäärä oli w. 1912 147,184 mk:n arwosta. - Saippuaa tuotiin wiime wuonna 107,964 mk:n arwosta. Kaunottawia aineita, mihin ryhmään 
          luetaan kaikenlaiset ruusu- lawenteli- y. m. öljyt, hywänhajuiset pumaadat ja puuterit, tuotiin maahamme 1,092,233 mkn edestä. Sawea (ei tulen kestäwää) 434,691 mkn arwosta. - Tiiliä (muuri, 
          ja kattotiiliä) tuotiin maahamme 785,601 markalla. Norjalaisista tiilistä on rakennettu m. m. Lahden ja Joensuun kaupungintalot. - Walokuwauskoneissa on mennyt ulkomaille 136,368 mk. - Pianot 
          owat wieneet ulkomaille 989,593 mk. - Soittimet ja niihin kuuluwat wälineet weiwät yli puolen milj. mk ulkomaille. - Taskukelloja on meille tuotu aina Amerikasta asti ja maksettu niistä 
          1,299,128 mk. — Ajoneuwoja (nelipyöräisiä) tuotiin 1,198,208 mk:n arwosta. - Rekiä on tuotu Wenäjältä 17,044 mk:n edestä ja Ruotsista ja Saksasta 1,250 mk:n arwosta. - Lastenwaunuja 
          tuotiin 98,654 mk:n edestä. - Työkärriä, joita on tuotu aina Alankomaista asti, on tuotu neljännesmilj. mk:n arwosta. - Kirjankansia on ostettu 81,736 mk:n arwosta. - Konttorikirjoja tuotiin 
          41,111 mk:n arwosta. - Lastenlelut weiwät maasta w. 1912 614,504 mk. Niitä tuotiin aina Yhdyswalloista asti. - Ongenkoukkuja on meille tullut Italiasta asti. Niistä on mennyt ulkomaille 
          44,631 mk.</p>
        <p>Kuten edelläolewasta luettelosta näkyy, on siinä paljon sellaisia tawaroita, joiden ulkomailta tuottaminen on suorastaan kansallisen alennuksen ja saamattomuuden todistus. On todella syytä 
          tehdä mitä suinkin woidaan, että tämänlaatuinen luettelo wastaisuudessa hywäsestään lyhenisi.</p>
        <SubDivider className="dividerStyle" />
        <p>Kateus ei ole kehuttawa ominaisuus. Päinwastoin. Sitä sairastaa naapurilehti <span className="quote">Hämetär</span>. No miksi? Naapuria harmittaa <span className="quote">Häm. 
          S:ain</span> lewiäminen, eli kuten se sanoo, <span className="quote">lewikin hankinta</span>. Johan sitä wähemmästäkin sappi kiehuu. Minkäs me sille mahdamme, 
          ettei <span className="quote">Hämetär</span> lewiä. <span className="quote">Hämettären</span> mielestä on tämä lehti wuoden lopulla <span className="quote">kiekunut ja kehunut</span> lauantaisin 
          ilmestywänsä tämän wuoden alusta 8 siwuisena. Tästä on naapurin mieli käynyt sangen apeaksi. Olen minäkin tuota <span className="quote">kiekumista</span> seurannut, mutta en ole sellaista 
          lupausta huomannut kuin <span className="quote">Hämetär</span> wäittää. Tässä lehdessä on luwattu tarpeen tullen julkaista lauwantaisin 8 siwuisia numeroita. Minusta naapuri on siis puhunut 
          wastoin parempaa tietoaan <span className="accent">waletta</span>.</p>
        <p>Muut lehden huomautukset käywat samaan suuntaan. Maatalous- ja Riihimäen osastot owat paljon harmia tuottaneet naapurille. Ja syystäkin. <span className="quote">Hämetärtä</span> lähetettiin 
          wuoden waihteessa ilmaiseksi m. m. Riihimäen ja Lopen suomenmielisille - muitahan ei niissä kunnissa juuri olekaan -, joiden luultiin wastapalkaksi tilaawan kutsumattoman wieraan kuluwaksi 
          wuodeksi, mutta lehden kauniit toiweet raukesiwat tyhjiin. Onhan siis syytä harmiin. Maataloutta sentään muuan suomalainen agronoomi antaa wirkansa puolesta samalla 
          kertaa <span className="quote">Hämettärelle</span> kuin tälle lehdelle, josta lehti ratkeaa riemuhuutoon. Sen awun lehdelle suomme. Ainahan me suomenmieliset olemme tasapuolista ja muistamme 
          panettelijoitammekin.</p>
        <p>No niin. Olen liiankin paljon puuttunut tästä lehdestä <span className="quote">hellästi</span> huolehtiwan naapurin pärskähdyksiin. Naapuri on unohtanut, että tuomaripöydän taa asettuwalta 
          henkilöltä waaditaan wakaata mieltä ja rehellisyyttä. Jollei näitä ominaisuuksia ole, käy kuin <span className="quote">Hämettären</span> wäitteiden. Omien asioittensa hoitamisessa näkyy 
          naapurilla olewan kyllin työtä, joten on tarpeetonta sekaantua toisten asioihin. Olisthan minullakin yhtä ja toista naapurin suhteen huomautettawana, mutta <span className="quote">parempi 
          laiha sowinto kuin lihawa riita</span>.</p>
        <SubDivider className="dividerStyle" />
        <p>Taksoituslautakunta on jälleen saanut työnsä loppuunsuoritetuksi, jonka jälkeen taksoitusluettelo on pantu nähtäwäksi Raatihuoneen eteiseen. Täällä saawat weronmaksajat käydä katsomassa, 
          kuinka kohtuullisesti lautakunta on kullekin weroäyrejä tuominnut, wai onko syytä walitukseen. Ennen oli sanomalehtien tapana säästää heiltä tämä waiwa julkaisemalla wiikkokaupalla 
          taksoituslautakunnan kuiwia numerosarjoja, mutta parina wiime wuotena owat ne kuitenkin tästä tawasta luettelon laajentumisen takia luopuneet, tyytyen antamaan wain enimmin werotetuille 
          tiedon heidän äyrimäärästään.</p>
        <p>Mielestäni tapahtuu tässä kuitenkin kohtuuttomuus. Enimmin werotetut, joilla tawallisesti on myöskin enimmin aikaa ja jotka myöskin parhaiten kykenisiwät maksamaan, waikka heidän tulonsa 
          olisiwatkin arwioidut liian suuriksi, saawat täten yhä edelleen mukawasti, askeltakaan ottamatta tiedon heitä kohdanneesta werotuksesta, jota wastoin wähempiwaraiset, joilla useimmiten on 
          edellämainittuja mahdollisuuksia paljon wähemmässä määrässä, saawat, elleiwät itse sitä ole huomanneet hankkia, werotuksestaan tiedon wasta werolipun muodossa, jolloin on myöhäistä ryhtyä 
          walituksiin, waikka werotus olisi kuinka harhaantunut tahansa.</p>
        <p>On kuitenkin kohtuutonta waatia sanomalehtiä wähäisestä tilastaan uhraamaan palstamääriä pitkille werotusluetteloille. Mutta eikö sen sijaan kaupunki saattaisi ryhtyä niitä painattamaan ja 
          jakamaan kullekin weronmaksajalle. Jo pelkän kohteliaisuuden werotettuja kohtaan luulisi tätä waatiwan.</p>
        <p>Tänä wuonna on kuitenkin liian myöhäistä ryhtyä asian waatimiin toimiin, mutta ehkä olisi syytä harkita, eikö jo ensi wuonna woitaisi sitä toteuttaa.</p>
        <SubDivider className="dividerStyle" />
        <p>Puoluelaitokseksi tahdotaan tehdä Suomen Pankin Hämeenlinnan konttori, jonka diskonttokomitean jäseneksi on walittu yksinomaan ruotsalaisia ja heidän kannattajiaan huolimatta siitä, että 
          suomalainen wäestö muodostaa täällä waltawan enemmistön. Yksi muutos on tapahtunut, warat. Idestamin sijaan on walittu ent. lääninsihteeri Chydenius. Mitenkä yksipuolisesti asiat tulee 
          hoidettua ja suomalainen liikemiessääty lapsipuolen asemaan, sen tietää sanomattakin. Pankin täkäl. konttorin johtajana on ruotsinmielinen mies, samaan joukkoon kuuluwat muutkin wirkailijat. 
          Siis puhdasta, walittua wäkeä.</p>
        <p>Yksityisetkin pankit yrittäwät olla tasapuolisia, mutta waltion pankki ei wain siitä näy wälittäwän.</p>
        <p className="signature">Tiitus.</p>
      </Article>

      <br></br>
      <a className="hyperLink" href="https://digi.kansalliskirjasto.fi/sanomalehti/titles/0356-2751?display=THUMB&year=1914">Linkki vuosikertaan 1914</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Artikkeleita 1914</title> // metadata

export default Articles1914Page 