import * as React from "react"
import Image from "react-bootstrap/Image"
import Layout from "../components/layout"

import "../styles/base/global.css"

import Divider from "../assets/divider.svg"

import imgFrontPage from "../images/content/housing/housing-front.jpg"
import img1 from "../images/content/housing/housing-1.jpg"
import img2 from "../images/content/housing/housing-2.jpg"
import img3 from "../images/content/housing/housing-3.jpg"
import img4 from "../images/content/housing/housing-4.jpg"
import img5 from "../images/content/housing/housing-5.jpg"
import img6 from "../images/content/housing/housing-6.jpg"
import img7 from "../images/content/housing/housing-7.jpg"
import img8 from "../images/content/housing/housing-8.jpg"
import img9 from "../images/content/housing/housing-9.jpg"
import img10 from "../images/content/housing/housing-10.jpg"
import img11 from "../images/content/housing/housing-11.jpg"
import img12 from "../images/content/housing/housing-12.jpg"
import img13 from "../images/content/housing/housing-13.jpg"
import img14 from "../images/content/housing/housing-14.jpg"
import img15 from "../images/content/housing/housing-15.jpg"
import img16 from "../images/content/housing/housing-16.jpg"
import img17 from "../images/content/housing/housing-17.jpg"
import img18 from "../images/content/housing/housing-18.jpg"
import img19 from "../images/content/housing/housing-19.jpg"
import img20 from "../images/content/housing/housing-20.jpg"
import img21 from "../images/content/housing/housing-21.jpg"
import img22 from "../images/content/housing/housing-22.jpg"
import img23 from "../images/content/housing/housing-23.jpg"
import img24 from "../images/content/housing/housing-24.jpg"
import img25 from "../images/content/housing/housing-25.jpg"
import img26 from "../images/content/housing/housing-26.jpg"
import img27 from "../images/content/housing/housing-27.jpg"
import img28 from "../images/content/housing/housing-28.jpg"
import img29 from "../images/content/housing/housing-29.jpg"
import img30 from "../images/content/housing/housing-30.jpg"
import img31 from "../images/content/housing/housing-31.jpg"
import img32 from "../images/content/housing/housing-32.jpg"
import img33 from "../images/content/housing/housing-33.jpg"
import img34 from "../images/content/housing/housing-34.jpg"
import img35 from "../images/content/housing/housing-35.jpg"
import img36 from "../images/content/housing/housing-36.jpg"
import img37 from "../images/content/housing/housing-37.jpg"
import img38 from "../images/content/housing/housing-38.jpg"
import img39 from "../images/content/housing/housing-39.jpg"
import img40 from "../images/content/housing/housing-40.jpg"
import img41 from "../images/content/housing/housing-41.jpg"

const HousingConditionsPage = () => {
  return (
    <Layout titleText="Asunto-olosuhteet v. 1908">

      <Image className="centeredImageStyle" src={imgFrontPage} alt="Etusivu"/>

      <p className="caption">Manner, Viktor</p>
      <p className="caption">Hämeenlinnan Kaupunginkirjasto</p>
      <Divider className="dividerStyle" />

      <h2>Johdanto</h2>
      <p className="firstLetterStyle">Kaupunkimme terveyshoitolautakunnan päämääränä on, lukuunottamatta terveyshoidollisten olojen silmällä pitämistä ja esiintyvien 
        puutteellisuuksien auttamista, myöskin ollut pyrintö, siinä määrin kuin olosuhteet sen ovat myöntäneet, saada seikkaperäisempiä selvityksiä Hämeenlinnassa vallitsevista 
        yleisistä terveyshoidollisista oloista, että saataisiin jonkinlaista varmempaa pohjaa vastaisille töille ja toimenpiteille. Tässä tarkoituksessa ovat syntyneet 
        lautakunnan vuosikertomuksissa liitteinä olleet eri terveyshoitoaloja koskevat selonteot. Yhtenä tällaisena selvitettävänä haarana ovat tietysti kaupungin asunto-olosuhteet 
        usein olleet esillä, mutta työn laajuus ja muut tielle sattuneet esteet ovat kuitenkin, lukuunottamatta aikaisemmin julkaistuja asunto-oloihin kohdistuvia piirteitä, 
        tähän saakka estäneet siihen ryhtymästä. Tällaisen selonteon puute on kuitenkin ollut siksi tuntuva aukko terveyshoitolautakunnan toiminta-alalla, että lautakunta on 
        pitänyt sen poistamista melkeinpä kunnian asiana, tämän tähden päätettiin lopultakin kevät talvella käydä siihen käsiksi. Mitään erikoisia varoja ei lautakunnalla 
        ollut tällaiseen tarkoitukseen käytettävissä, eikä tahdottu niitä myöskään pyytää; terveyspoliisin velvollisuudeksi jäi sentähden vähäpätöistä korvausta vastaan kerätä 
        tarvittavat alkutiedot; kaiken muun työn on allekirjoittanut suorittanut.</p>
      <p>Ettei selostuksesta johtuva työ kuitenkaan paisuisi liian suureksi, on ainesta koetettu supistaa jättämällä pois vähäpätöisemmältä näyttävät asiat. Tähän supistamiseen on 
        myöskin antanut aihetta se seikka, että tämäntapaiset julkaisut näkyvät täyttyvän liian suurella määrällä erilaisia tauluja ja muita pikkuseikkoja, mitkä antavat niille 
        perin hajanaisen muodon ja tekevät niiden käyttämistä hyvin hankalaksi ynnä vaikeuttavat yleiskatsauksen saamista itse aineesta. Tehdyn supistuksen suhteen huomautettakoon 
        tässä kuitenkin erikseen seuraavat kaksi seikkaa.</p>
      <p>1) Asunnoissa käytetyistä ilmavaihtolaitoksista ei ole mitään tietoja kerätty; ei sentähden että asia olisi katsottu vähäarvoiseksi, vaan siitä syystä, että yksinkertaisen 
        tässä kysymykseen tulevan ilmavaihtolaitoksen olemassa olo tahi ei, ei edellytä puutteellista asuntoa eikä riipu yksinään talonomistajista. Yhdeltä puolen nimittäin suuri 
        osa yleisöä ei kylmempänä vuoden aikana käytä sellaisia, vaikka niitä olisikin ja toiselta puolen taasen on yksinkertaisen seinäventtiilin asettaminen, taikkapa vielä 
        paremmin akkunapuoliskon varustaminen saranoilla, jotta se kaikkina aikoina olisi avattavissa, siksi vähäpätöinen asia, että talonomistajat arvatenkaan eivät vastustaisi 
        sitä, jos vuokralainen haluaisi sellaista. Sanalla sanoen suuri osa yleisöä ei ole tottunut, eikä tahdo käyttää minkäänlaista erikoisempaa ilmavaihtotapaa ja siinä syy 
        miksi huoneen tyydyttävä tuulottaminen ei useissa paremmissakaan rakennuksissa vielä käy kaikkina vuodenaikoina päinsä.</p>
      <p>2) Asuntojen valosuhteitten selvittäminen, sikäli että otettaisiin selville akkunain pinta-alan suhde huoneen lattian pinta-alaan ja akkunan ilmasuunta, on niinikään 
        verraten siihen runsaaseen työhön, minkä se aiheuttaisi, katsottu aivan toisarvoiseksi asiaksi ja sentähden alkutietoja kerättäessä jätetty huomioon ottamatta. Tämä on 
        tapahtunut sitä suuremmalla syyllä kuin ainakin toistaiseksi mielipiteet siitä, mitkä vaatimukset tässä suhteessa olisivat asetettavat sitoviksi ja mikä arvo eri ilman 
        suunnille tässä olisi lopullisesti annettava, ovat eriäviä. Sen lisäksi on meikäläisiin oloihin nähden vielä otettava huomioon, että tässä suhteessa muutamin paikoin 
        esiintyvät puutteellisuudet tulevat kysymykseen vanhemmissa ja muutenkin jo rappiolla olevissa rakennuksissa, mitkä häviävät sitä myöten kuin uusia tulee riittävästi sijaan.</p>
      <p>Vielä huomautettakoon että varsinaisen työväestön olojen selvittämiseksi olisi ollut saatava tietoja työväen palkka- ja ansiosuhteista,mutta kun tällaisia tietoja annetaan 
        hyvin vastahakoisesti, joten ne eivät olisi olleet luotettavia, jos niitä ensinkään olisi ollut saatavissakaan, jätettiin niitten kerääminen sikseen.</p>
      <p>Kerättyjen alkutietojen käsittelyn suhteen mainittakoon, että keittiöt siihen nähden, että niitä aniharvoja poikkeuksia lukuunottamatta käytetään myöskin asuinhuoneina, 
        ovat laskuissa otetut samanarvoisina kuin asuinhuoneet. Myöskään ei ole katsottu olevan mitään käytännöllistä syytä eroittaa eri ryhmiksi sellaiset yksihuoneiset asunnot, 
        jotka ovat keittiöntapaisia, s. o. varustetut hellalla, sellaisista, joissa tämän asemesta on tavallinen pesä, vaan ovat kaikki yhdistetyt yhteiseen ryhmään „yksihuoneiset 
        asunnot“. Yleensä ovat keittiöntapaiset huoneet enemmän harvalukuisia. Niinikään on asunto niissä muutamissa tapauksissa, missä löytyi kaksi huonetta ilman keittiötä, 
        otettu ryhmään 1 huone ja keittiö; tällaisissa tapauksissa käytetään nimittäin aina toista näistä kahdesta huoneesta ruuan valmistamiseen ja on se usein sitä varten hieman 
        erikoisemmin varustettu. Muutamissa tapauksissa löytyi kahdelle eli useammalle yksihuoneiselle asunnolle jonkinlainen yhteinen keittiöntapainen useimmiten avonaisella 
        tulisijalla keittämistä varten, mutta oli se tavallisesti niin huono, ettei sitä voinut käyttää mihinkään muuhun tarkoitukseen, eikä sentakia asuntoihin nähden ottaa 
        mihinkäänlukuun.</p>
      <p>Mitä asuntojen vuokraan tulee, ovat talonomistajien asunnot arvioidut muitten samantapaisten asuntojen mukaan. Sellaisissa tapauksissa, missä asunnon vuokra on yhdessä 
        jonkunlaisen liikelaitoksen kanssa, on koetettu ottaa varsinaiselle asunnolle suhteellinen osa.</p>
      <p>Alkutietojen keräys suoritettiin varsinaisessa kaupungissa keväällä ja Myllymäessä kesällä. Haluttuja tietoja annettiin, jos kohta paikkapaikoin epäilyksellä ja moitteella, 
        kaikkialla muualla paitsi varsinaisessa kaupungissa yhdessä talossa, nimittäin Nro 125, jossa täytyi jättää asuntojen mittaukset sikseen.</p>

      <h2>Kaupungin asema- ja rakennustapa</h2>
      <p className="firstLetterStyle">Hämeenlinnan kaupunki siirrettiin kuten tunnettu kahdeksannentoista vuosisadan lopussa ahtauden tähden nykyiselle paikalleen vanhan linnan 
        eteläpuolelle, oltuaan siihen saakka linnan pohjoispuolella. Nykyinen paikka eli n. k. Niementaustan mäki oli kyllä silloisia tarpeita varten väljä, mutta pitkälle ei 
        siinäkään tilaa riittänyt; se ei nimittäin ole, vaikkakin laitaosia etenkin pohjoispuolella on runsaasti täyttämällä laajennettu, sen suurempi kuin 850 m. idästä länteen 
        ja 650 m. pohjoisesta etelään. Kaupunki on kahdelta puolelta eli idässä ja etelässä Vanajaveden ympäröimä ja jälellä olevalta kahdelta puolelta suonotkon rajoittama. 
        Mainittu suonotko on länsipuolella n. 160 m. leveä, pohjoispuolella lähes kaksi kertaa niin leveä.</p>
      <p>Kun tila kaupungissa kävi niukaksi ja muuten kalliinlaiseksi, alkoi työväki siirtyä kaupungin länsipuolella olevan suonotkon toiselle puolelle eli n., k. Myllymäen rinteelle, 
        sen kautta kulkevan ja Poltinahon kentällä pohjoiseen ynnä etelään haaraantuvan Helsinkiin, Turkuun ja Tampereelle vievän maantien — nyk. L. Vierotiekadun — varrelle, 
        mihin vähitellen syntyi Myllymäki niminen etukaupunki. Tästä yhdistettiin sittemmin 1872 vahvistetun asemakaavan mukaan järjestettyyn kaupunginalaan, paitsi kasarmialuetta 
        ja vanhan hautausmaan takana olevaa vieläkin rakentamatonta osaa, neljä korttelia molemmin puolin edellä huomautettua viertotiekatua, muu osa on edelleen järjestetyn alueen 
        ulkopuolella ja annettu vuokratontteina rakennettavaksi.</p>
      <p>Muodolleen on varsinainen kaupunkialue ylösalaisin käännetyn kattilan tapainen, kuitenkin pohjoisesta etelään vähän kokoonlitistetty. Korkein paikka kaupungissa kohoo, 
        kuten ohella oleva korkeuskartta osoittaa, ainoastaan n. 17,5 m. veden pintaa ylemmäksi, laskettuna täkäläisen vesistön 0-pisteestä, mikä on 79 m. yläpuolella merenpintaa 
        - Vanajaveden keskikorkeus tekee 85 cm. yläpuolella mainittua 0-pistettä -. Maaperä on keskiosassa soraa tahi hiekkaa, mikä on suuremmassa eli pienemmässä määrässä 
        savensekaista; lukuunottamatta tällaisessa maaperässä tavallisesti löytyviä erikokoisia mukulakiviä ei suurempia kiviryhmiä esiinny kuin parissa kohdin etenkin tontilla 
        n:o 43. Kysymyksessä olevaa keskistä osaa ympäröi vahvempi savikerros, joka ylettyy noin 9 m. korkeudelle ja tätä taasen noin 3 m. korkeudelle ylettyvä lieju- eli mutakerros.</p>
      <p>Kun kaupunki siirrettiin nykyiselle paikalle, tehtiin sen asemakaava maapinnan mukaan kahdeksikon eli tuntilasin muotoiseksi, molemmat pääosat laajemmat keskusta kapeampi. 
        Asemakaava käsitti 4 suurempaa ja 2 pienempää säännöllistä korttelia sekä 8 epäsäännöllistä laitakorttelia, siis yhteensä 14 korttelia ja niissä 144 tonttia. Tontit tehtiin 
        pieniksi, alalleen useimmat ainoastaan n. 700—800 m'2, joskin joukossa löytyi myöskin muutamia vähän laajempia. Suureksi osaksi juuri noiden pienten tonttien aiheuttamasta 
        tiheästä rakennus ja asutustavasta, syntyi sittemmin maaperän likaantuminen, mistä vielä nykyäänkin on suurta haittaa.</p>
      <p>Kun sitte 1831 sattunut laaja tulipalo, joka hävitti suuremman osan kaupunkia, liiaksikin kouraan tuntuvalla tavalla osoitti silloisen ahtaan asutuksen varjopuolia, 
        järjestettiin sellaisen vaaran välttämiseksi kaupungin korttelit ja tontit uudelleen eli pääasiassa nykyiseen muotoon. Kaikki korttelit tehtiin säännöllisiksi ja muutamaa 
        poikkeusta lukuunottamatta yhtä suuriksi nimittäin tasaluvussa mitalleen 88 ja 117 m. eli 10,272 m'-. Tontit laajennettiin niin että kuhunkin kortteliin tuli korkeintaan 
        kuusi tonttia, sen asemesta että aikaisemmin samallaisessa korttelissa saattoi olla 14 tonttia. Mitalleen tulivat tontit olemaan 44 ja 39 m. eli 1,712 m-, nelitonttisessa 
        korttelissa ovat tontit tietysti suuremmat. Paitsi tonttien laajentamista, tuli tulipalojen estämiseksi lisäksi vielä määräys, millä myöskin terveyshoidollisessa suhteessa 
        oli suuri merkitys, nimittäin että toisiinsa rajoittuvien tonttien välille oli jätettävä 6— 18 m. levyinen rakentamaton ala eli palokuja, joka oli puilla istutettava. Tämän 
        säädöksen ansioksi, on paitsi terveyshoidollista puolta, myöskin luettava kaupunkimme puurikas ja puistokas ulkoasu, mikä kuitenkin viime aikoina, valitettavasti kyllä, 
        on ollut alaspäin menossa. Nykyään ei nimittäin enään olla tässä suhteessa erin tarkkoja, aikaisemmilta ajoilta löytyvät puut ovat jääneet ilman hoitoa ja uusista istutuksista 
        ei ole paljon kysymystä. Tämän lisäksi myöntävät nykyään voimassa olevat rakennussäännöt oikeuden sijoittaa kivirakennuksen tontin rajalle saakka ja kun epäedulliset vuokraolot 
        eivät salli puurakennusten poistamista, rakennetaan yhä enemmän pieniä kivirakennuksia vapaina oleville palokujille, jotka siten vähitellen häviävät.</p>
      <p>Edellä olevan yhteydessä huomautettakoon että kaupungin keskustassa ei, lukuunottamatta niinhyvin luterilaisen kuin kreikkalaiskatoolisen kirkon ympärillä olevia istutuksia, 
        löydy muuta kuin yksi eli niin kutsuttu Tähtipuisto korttelissa n:o XXV ja sekin ainoastaan puolen korttelin laajuinen. Tämän lisäksi ansainnee mainitsemista että viimevuosina 
        on pitkin kaupungin koillista rantaa n. k. pitkästä sillasta linnalle päin järjestetty kolme toisiinsa suorastaan liittyvää puistikkoa, mitkä vastedes kun istutukset ovat 
        enemmän vaurastuneet tulevat tarjoomaan kaupunkilaisille erittäin miellyttävän kävelypaikan.</p>
      <p>Varsinaisen kaupungin alueella, joka on vähän päälle 50 hehtaarin laajuinen, on nykyisen asemakaavan mukaan 39 korttelia1) ja niissä 171 tonttia, näistä oli tilastoa 
        kerättäessä 158 rakennettuna ja rakentamatta 13, nimitt. n:o 14, 35, 70, 108, 137, 141 b, 150, 154, 156, 157, 158, 160 ja 162, neljä viimeksi mainittua täydelleen suolla olevia. 
        Edellä mainitun tulipalon säästämällä kaupungin kaakkoisosalla löytyy vielä aikaisemmassa rakenteessa ja sentähden uuteen asemakaavaan lopullisesti järjestämättä yksitoista 
        tonttia nimittäin N:ot 37, 39, 41, 42, 47 a, 47 b, 48 a, 48 b, 50, 94 ja 96. Järjestetyistä tonteista olivat tontit N:o 9, 23, 51, 82, 112, 125, 130 ja 136 kahtia jaettuina 
        eli eri omistajien hallussa olevina puoliskoina.</p>
      <p>Niinkuin maamme pikkukaupungeissa yleensä on asian laita, ovat Hämeenlinnassakin rakennukset tavallisesti yksikerroksisia puurakennuksia. Kaksikerroksisia sellaisia ei 
        nykyisten rakennussääntöjen mukaan saa rakentaa, mutta on niitä kuitenkin vanhemmilta ajoilta vielä muutamia jälellä tonteilla N:o 37, 41, 42, 47 b, 48 b ja 51. Kaikkiaan 
        löytyy puisia asuinrakennuksia 335. Kiviasuinrakennuksia on suhteellisesti vähän, niin että niiden lukumäärä, vaikkakin palokujille rakennetut pienemmät sellaiset otetaan 
        mukaan, ei tee enemmän kuin 66; koolleen ne ovat yleensä kaksikerroksisia. Asuinrakennusten koko lukumäärä varsinaisessa kaupungissa teki niinmuodoin 401; näistä oli 280 
        kadun varrella ja 121 pihan sisällä. Sellaisia rakennuksia, joissa alakerta on kivestä ja yläkerta puusta ei myöskään saa rakentaa muussa tapauksessa kuin että maanpinta 
        on viettävä, tämän tähden ei niitä löydykään muuta kuin kymmenkunta.</p>
      <p>Järjestetyillä tonteilla olevat rakennukset ovat yleensä muutamia poikkeuksia lukuunottamatta tyydyttävässä kunnossa ja asemalleen riittävän väljästi sijoitettuja. Ne 
        rakennukset sitävastoin, jotka ovat aikaisemmilta ajoilta eli ajoilta ennen edellä mainittua tulipaloa, ovat yleensä enemmän eli vähemmän, vieläpä osaksi hyvinkin ränsistyneitä.</p>
      <p>Kaupungin taloista omisti Valtio paitsi lääninsairaalaa ja entistä Hämeen pataljoonan kasarmia, kolme taloa, nimitt. kuvernöörivirastotalon Nro 86, XX korttelissa, lyseotalon 
        (tontilla ei ole mitään numeroa) ja postitalon N:o 140 b (ja 141b) XXXI korttelissa. Kaupungin hallussa olivat: Raatihuone N:o 33, IX korttelissa, kansakoulutalo N:o 122 ja 123, 
        XXVII korttelissa, vaivastalo N:o 129 ja sairashuone N:o 131 molemmat XXIX korttelissa, ynnä ent. n. k. Gadd’in talo N:o 142, XXXII kortteli. Tämän lisäksi tulee seurakunnan 
        omistama pappila N:o 95, XXII korttelissa. Osakeyhtiöitten ja yhdistysten hallussa olivat seuraavat talot: Meijeriosakeyhtiön, N:o 2; klubiosakeyhtiö Sammon, N:o 45; 
        anniskeluosakeyhtiön, N:o 49; suomal. yhteiskouluosakeyhtiön, N:o 66; seuraklubiosakeyhtiön, N:o 71; työväenyhdistyksen, N:o 25; raittiusyhdistyksen, N:o 46; rouvasväenyhdistyksen, 
        N:o 68 ja 70; Fredrika Wetterhoff’in kutomakoulu, N:o 4 ja venäläinen kansakoulu, N:o 124.</p>
      <p>Myllymäen kaupunginosa on oikeastaan vasta viime kymmenvuotisaikana alkanut suuremmassa määrässä laajeta, mutta etenkin aivan viime vuosina on pyrkimys saada oma asunto täällä 
        olevilla vuokratonteilla ollut hyvin tuntuva, niin että tällaisia pikkutaloja usein ainoastaan yhden eli kahden perheen asuttavia, on noussut toinen toisensa jälkeen. Suurempia 
        taloja eli rakennuksia on ainoastaan joitakuita; vanhoja osaksi perin ränsistyneitä rakennuksia löytyy etupäässä viertotiekadun eteläpuoleisella varrella vielä jälellä.</p>
      <p>Maanlaadulleen on Myllymäki suurimmaksi osaksi risaista, Vanajan rajalta pohjoiseen päin viettävää, kalliorinnettä, jota länsi- ja pohjoispuolella rajoittaa sora- ja itäpuolella 
        savimaakerros. Muuten on Myllymäellä yleiseen asemaansa nähden kaikki edellytykset muodostua terveydellisessä suhteessa edulliseksi kaupunginosaksi, kunhan se saataisiin 
        järjestetyksi ja sen lisäksi varustetuksi likaviemärijohdoilla.</p>

      <h2>Kaupungin asutus</h2>
      <h3>1. Asunnot</h3>
      <p className="firstLetterStyle">Kuten jo edellä huomautettiin, oli varsinaisessa kaupungissa rakennettuna 158 tonttia, mutta kun muutamat näistä vielä ovat lopullisesti 
        järjestämättä, joten niillä saattaa löytyä pari taloa, saadaan kaikkiaan 163 taloa. Näissä löytyi 950 erisuurta asuntoa käsittäen 2798 asuinhuonetta. Kutakin taloa kohti tulee 
        siten keskimäärin 5,8 asuntoa ja 17,2 asuinhuonetta. Mainitusta asuntomäärästä sijaitsi 154 kivirakennuksissa, näistä kuitenkin muutama kivijalkakerroksessa, ja 796 
        puurakennuksissa. Kadunvarrella olevissa rakennuksissa löytyi 576 asuntoa ja piharakennuksissa 374. — Myllymäessä oli 112 taloa käsittäen 345 asuntoa ja 638 asuiohuonetta eli 
        siis keskimäärin 3 asuntoa ja 5,7 asuinhuonetta kutakin taloa kohti.</p>
      <p>Talot ovat koolleen näin ollen yleensä mutta etenkin Myllymäessä pieniä. Paremman käsityksen talojen suuruudesta saanee siten että ryhmittelemme talot niissä löytyvien 
        asuinhuoneitten lukumäärän mukaan. Tulos on tässä tapauksessa seuraava:</p>
      <Image className="centeredImageStyle" src={img1} alt="Taulukko 1"/>
      <p>Kaupungin asunnnot jakautuvat suuruutensa mukaan seuraavasti:</p>
      <Image className="centeredImageStyle" src={img2} alt="Taulukko 2"/>
      <p>Niinkuin edelläolevasta näkyy ja muutenkin oli odotettavissa, muodostavat pienemmät asunnot, jos sellaisina pidämme kolme huonetta ja keittiön käsittäviä ynnä siitä pienempiä 
        huoneustoja, suurimman osan, nimitt. 76.i % varsinaisessa kaupungissa ja 95.4 % Myllymäessä eli 81.9% koko kaupungissa, toisin sanoen 1/5 kaikista asunnoista. Neljä huonetta ja 
        keittiön käsittävät ja sitä suuremmat asunnot eivät niinmuodoin tee yhteensä enemmän kuin 18.1 % asuntojen koko lukumäärästä.</p>
      <p>Erisuurista asunnoista suoritettu vuotuinen vuokra, määrättynä niinhyvin koko huoneustoa kuin kutakin asuinhuonetta kohti, selviää seuraavista tauluista.</p>
      <Image className="centeredImageStyle" src={img3} alt="Taulukko 3"/>
      <Image className="centeredImageStyle" src={img4} alt="Taulukko 4"/>
      <Image className="centeredImageStyle" src={img5} alt="Taulukko 5"/>
      <p>Keskimääräinen vuotuinen vuokra niinhyvin koko huoneustoa kuin kutakin asuinhuonetta kohti, oli seuraava:</p>
      <Image className="centeredImageStyle" src={img6} alt="Taulukko 6"/>
      <p>Keskimääräinen vuokra asuinhuonetta kohti laskettuna täysissä markoissa, teki varsinaisessa kaupungissa 127 mk. ja Myllymäessä 79mk. eli koko kaupungissa 118 mk. vuodessa.</p>
      <p>Halvin vuokra varsinaisessa kaupungissa laskettuna kutakin asuinhuonetta kohti on kaksi huonetta ja keittiön käsittävissä asunnoissa. Sen molemmilla puolilla olevasta kahdesta 
        ryhmästä huomautettakoon, että yksihuoneiset asunnot maksavat suhteellisesti jotenkin saman vuokran kuin nelihuoneiset asunnot ja yhden huoneen ynnä keittiön käsittävät asunnot 
        saman kuin kolme huonetta ja keittiön käsittävät asunnot. Mainittujen asuntojen jälkeen tulevat kolme ryhmää ovat taasen jotenkin samalla tasolla. Viimeinen ryhmä taasen käsittää 
        erikokoisia huoneustoja, minkätähden se ei enää pysy lähemmässä suhteessa edellisten kanssa.</p>
      <p>Kaikkien asuntojen tuottama vuokra vuodessa teki varsinaisessa kaupungissa yhteensä vähän päälle 355,000:— markkaa, josta kapitaliseeraamalla 7 % mukaan saataisiin jotenkin 
        tasan 5 miljoonaa markkaa. Myllymäessä nousee asuntojen tuottama vuokra vähän päälle 50,000: — , mistä samoin 7 % mukaan saataisiin 726,000 mkan suuruinen pääoma.</p>
      <p>Kuinka suuren osan kysymyksessä olevasta vuokrasummasta kukin erisuuri asuntoryhmä tuottaa vuodessa, selviää seuraavasta:</p>
      <Image className="centeredImageStyle" src={img7} alt="Taulukko 7"/>

      <h3>2. Asukkaat</h3>
      <p className="firstLetterStyle">Vuoden 1908 alussa oli kaupungissamme kirkonkirjojen mukaan 5,965 asukasta. Tilastoa kerättäessä asui varsinaisessa kaupungissa 4,040 eli 67.9%, Myllymäessä 1,303 eli 21.8% siis 
        yhteensä 5,343 eli 89.7 % koko asukasmäärästä; ulkopuolella kaupunkia asui niinmuodoin 616 eli 10.3 %. Viimeksimainitut ovat etupäässä asettuneet Myllymäen eteläpuolella olevan, 
        Vanajan pitäjään kuuluvan, n. k. Punaportin ja Jaakopin kaupungin alueelle tahi maaseurakuntaan kuuluvan Hätilän ja Ojoisten kartanoitten alueille. — Asutustiheys varsinaisessa 
        kaupungissa tekee jotenkin tasan 80 henkeä hehtaaria kohti.</p>
      <p>Kaupungin asukkaat jakautuvat talojen mukaan seuraavasti.</p>
      <Image className="centeredImageStyle" src={img8} alt="Taulukko 8"/>
      <p>Jos sitte käännymme tarkastamaan kaupungin asuntojen ja asukasten keskinäistä suhdetta, jakautuvat asukkaat eri asuntoryhmille eli erisuurille asunnoille kuten seuraavalla sivulla 
        oleva taulu osoittaa, mihin yleiskatsauksen saamiseksi asunnot ovat otetut uudelleen.</p>
      <Image className="centeredImageStyle" src={img9} alt="Taulukko 9"/>
      <p>Suurin määrä asukkaita, nimitt. vähän päälle 1/4, asuu toisen ryhmän eli yhden huoneen ja keittiön käsittävissä asunnoissa; lähinnä niitä tulevat yksihuoneisten asuntojen asukkaat, 
        joita on lähes 1/4. Yhteensä molemmat mainitut ryhmät tekevät puolen koko asukasmäärästä. Jos otamme kaikki keittiön ja kolme huonetta käsittävät ynnä sitä pienemmät asunnot, 
        saamme tulokseksi että jotenkin tasan 3/4 kaupungin asukasmäärästä asuu sellaisissa asunnoissa.</p>
      <p>Suurin määrä asukkaita kutakin asuinhuonetta kohti on tietysti yksihuoneisissa asunnoissa nimitt. 2.8, pienin määrä seitsenhuoneisissa asunnoissa; keskimääräksi koko kaupungille 
        saadaan kuten jo aikaisemmin on huomautettu l.6 asukasta.</p>
      <p>Ero varsinaisen kaupungin ja myllymäkeläisten olojen välillä selviää edellä olevasta taulusta. Yleensä ovat olot, mikäli vallitsevaan ahtauteen tulee, Myllymäessä epäedullisemmat.</p>
      <p>Kuinka suuria asuntoja eri yhteiskunta-asemassa olevat käyttävät, selviää suunnilleen seuraavalla sivulla olevasta taulusta. Niinkuin siitä näkyy muodostavat lesket ynnä muut 
        yksinäiset naiset hyvin tuntuvan vuokraajaryhmän, jonka hallussa on kaikenkokoisia huoneustoja, joskin etupäässä nelihuoneisia ja sitä pienempiä asuntoja. Tasaisinten jaettuina 
        eri asuntoryhmille ovat kuitenkin kaksi ensimäistä ryhmää. — Talonomistajia on luettelossa ainoastaan 59, loput ovat ryhmitellyt niiden ammattien mukaan.</p>
      <p>Yleensä osottaa kysymyksessä oleva taulu, että pienempiin eli etupäässä työväen käyttämiin asuntoihin emme voi lukea suurempia huoneustoja kuin kolme huonetta ja keittiön 
        käsittäviä sellaisia.</p>
      <p>Niinpä käyttävät ainoastaan muutamat käsityöläisperheet nelihuoneisia asuntoja, kaikki muut työväenluokkaan kuuluvat asuivat pienemmissä asunnoissa, siten että ainoastaan 21 
        perhettä asui kolmihuoneisissa asunnoissa, 58 kaksihuonetta ja keittiön käsittävissä asunnoissa ynnä loput 360 joko yksi-huoneisissa eli huoneen ja keittiön käsittävissä asunnoissa.</p>
      <Image className="centeredImageStyle" src={img10} alt="Taulukko 10"/>
      <Image className="centeredImageStyle" src={img11} alt="Taulukko 11"/>
      <p>Mitenkä suuria perhekunnat olivat ja minkä kokoisia huoneustoja niillä oli käytettävissä selviää seuraavasta:</p>
      <Image className="centeredImageStyle" src={img12} alt="Taulukko 12"/>
      <p>Sivullisien asukasten ottaminen asuntoihin, mikä tietysti tapahtuu vuokran alentamista varten, on kuten tunnettu suuremmissa kaupungeissa muodostunut tuntuvaksi rasitukseksi, 
        joka osaltaan myöskin huonontaa asunto-olosuhteita. On sentähden syytä selvitellä oloja Hämeenlinnassa myöskin tässä suhteessa.</p>
      <p>Tilastoa kerättäessä löytyi sivullisia asukkaita 210 asunnossa eli 16.2 % kaikista asunnoista, käsittäen 443 sivullista asukasta eli 8.3 % kaupungin asukasmäärästä. Varsinaisen 
        kaupungin ja Myllymäen välillä jakautuvat sivulliset asukkaat siten, että edellisessä oli 185 asunnossa (19.5 %) 399 asukasta (9.8 %), jälkimmäisessä 25 asunnossa (7.2 %) 44 
        asukasta (3.4 %). Sivullisia asukkaita löytyi muuten, kuten seuraavalla sivulla olevasta taulusta näkyy, kaikenkokoisissa asunnoissa, eniten kuitenkin huoneen ja keittiön 
        käsittävissä asunnoissa sekä sen jälkeen yksihuoneisissa asunnoissa. Tavallisin määrä sivullisia asukkaita oli tietysti yksi, nimittäin 88 asunnossa, kaksi sivullista asukasta 
        löytyi 65 asunnossa, kolme 30 asunnossa j. n. e.</p>
      <p>Sivullisten asukasten yhteiskunta-asema selviää seuraavasta.</p>
      <Image className="centeredImageStyle" src={img13} alt="Taulukko 13"/>
      <Image className="centeredImageStyle" src={img14} alt="Taulukko 14"/>
      <p>Sivullisia asukkaita asunnoissaan käyttävien yhteiskunta-asema oli seuraava.</p>
      <Image className="centeredImageStyle" src={img15} alt="Taulukko 15"/>
      <p>Niinkuin edellisellä sivulla olevasta taulusta näkyy, asui sivullisten asukasten koko määrästä 309 eli 72.2 % pienemmissä s. o. kolme huonetta ja keittiön käsittävissä ynnä sitä 
        pienemmissä asunnoissa, loput 134 eli 27.8 % suuremmissa asunnoissa. Muuten muodosti, kuten jo sivullisten ammattia osottavasta luettelosta näkyy, kaupungissa oleskeleva 
        koulunuoriso suurimman osan eli jotenkin tasan 2/3 kaikista sivullisista asukkaista. Ilman koulunuorisoa olisikin sivullisten asukasten lukumäärä perin pieni.</p>

      <h2>Pienemmät eli etupäässä työväen käyttämät asunnot</h2>
      <p className="firstLetterStyle">Mielipiteet saattavat tietysti olla eriäviä siinä, kuinka suuret eli yleensä mitkä asunnot ovat pidettävät etupäässä työväen asuntoina, mitkä ei. Selvityksessään Helsingin työväen 
        asunto-olosuhteista on Prof. Sucksdorff ottanut siksi neljä huonetta ja keittiön käsittävät ynnä sitä pienemmät asunnot; muualla on tätä esimerkkiä osaksi seurattu. Saattaa olla 
        mahdollista, että asianlaita on siten Helsingissä, mutta Hämeenlinnassa ovat olot kuitenkin toisenlaiset. Kuten sivulla 20 olevasta taulusta näkyy ja jo aikaisemmin huomautettiin, 
        voidaan Hämeenlinnassa ottaa pienempiin eli etupäässä työväen käyttämiin asuntoihin korkeintaan kolme huonetta ja keittiön käsittävät ynnä sitä pienemmät asunnot eli niinmuodoin 
        1,060 asuntoa joissa asui 3,951 asukasta. — Kysymyksessä olevia asuntoja ei kuitenkaan ainakaan täällä voida kutsua yksinomaan työväen asunnoiksi, niissä asuu nimittäin koko joukko 
        varallisempaakin yleisöä, kuten esim. useat talonomistajat, varallisemmat lesket ja yksinäiset naiset j. n. e.</p>
      <p>Jos sitte käännymme lähemmin tarkastamaan näitä asuntoja, huomautettakoon ensiksikin niiden suuruuden selvittämiseksi että asuinhuoneitten korkeus oli seuraava:</p>
      <Image className="centeredImageStyle" src={img16} alt="Taulukko 16"/>
      <p>Mikä korkeus on katsottava riittäväksi sekä mikä pienimmäksi sallittavaksi mitaksi, riippuu tietysti suuressa määrin eri katsantokannoista. Yleensä on pyritty tekemään asuinhuoneet 
        tarpeettoman korkeiksi; viime vuosina on kuitenkin esiintynyt merkkejä siitä, että aletaan tässä suhteessa kääntyä takaisinpäin. Korkeissa huoneissa tarvitaan tosin vähemmän lattia-alaa 
        jos tavotellaan määrättyä kuutiosisältöä, mutta yleensä meidän kylmät talvemme edellyttävät matalampia huoneita, joita on helpompi lämmittää. Tämän lisäksi on otettava huomioon, 
        että katon alla oleva ilmakerros erin korkeissa huoneissa ei terveydellisessäkään suhteessa tule samassa määrässä asukkaalle hyödyksi, kuin sen koko edellyttäisi. Meikäläisissä oloissa 
        pitäisi keskikokoisissa huoneissa 3.25 m. korkeus olla kyllin riittävä ja alimmaksi korkeusmääräksi voitaisiin ottaa 3 m.</p>
      <p>Hämeenlinnassa nykyään käytännössä olevien rakennussääntöjen mukaan on 2.70 m. alin sallittu korkeus. Kuten edellä olevasta näkyy on kuitenkin 28.6 % kaikista asuinhuoneista alle 
        mainitun määrän. Näitä korkeimpia mutta alle 3 metrisiä oli 23.9 % ja yli 3 metrisiä niinmuodoin ainoastaan 47.5 % eli jotenkin lähes puolet.</p>
      <p>Mikä suuruus eli tilavuus kultakin asunnolta on vaadittava riippuu tietysti lopullisesti siitä, monelleko asukkaalle vaaditaan tilaa siinä. Saadaksemme kuitenkin jonkinlaisen käsityksen 
        tässä kysymykseen tulevien asuntojen suhteellisesta koosta, täytyy meidän asettaa tälle koolle joku määrätty alin kuutiotilavuus-vaatimus, johon sitte asunnot verrataan. — Tässä suhteessa 
        huomautettakoon että varsinaisessa kaupungissa yksihuoneisten asuntojen keskimääräinen koko teki 40.9 m3, huoneen ja keittiön käsittävien asuntojen 83.9 m3, kaksi huonetta ja keittiön 
        käsittävien asuntojen 130.8 m3 ja kolme huonetta ynnä keittiön käsittävien asuntojen koko 180.3 m3. Myllymäellä olivat vastaavat numerot pienemmät nimittäin 34.0 m3, 66.9 m3, 109.3 m3 ja 183 m3.</p>
      <p>Jos edellä olevan mukaan otamme yksihuoneisen asunnon vähimmäksi vaadittavaksi kooksi 40 m3, edellyttäisi se huonetta jonka lattiamitat olisivat 4.0 ja 3.3 m. sekä korkeus kolmisen senttiä 
        yli 3 m; sellaista huonetta ei arvatenkaan voida pitää erin suurena. Tämän mukaan tulisi toisen ryhmän eli yhden huoneen ja keittiön käsittävien asuntojen tilavuuden olla vähintään 80 m3, 
        kaksi huonetta ja keittiön käsittävien asuntojen 120 m3 ja kolme huonetta ynnä keittiön käsittävien asuntojen 160 m3. Jos tällaisen mittapuun mukaan ryhmittelemme tässä kysymykseen tulevat 
        asunnot saamme seuraavan tuloksen:</p>
      <Image className="centeredImageStyle" src={img17} alt="Taulukko 17"/>
      <p>Kuten yllä olevasta taulusta näkyy ovat asuinhuoneet yleensä perin pieniä; etenkin on näin asianlaita Myllymäessä. Suuri osa asuntoja ei täytä niinkään pieniä vaatimuksia kuin tässä on ollut 
        kysymyksessä, vaan oli eri asuntoryhmissä seuraava määrä asuntoja tilavuudelleen alle mainitun vähimmän määrän.</p>
      <Image className="centeredImageStyle" src={img18} alt="Taulukko 18"/>
      <p>Sivulla 15 on jo tehty selkoa erisuurten asuntojen vuokrista, niinhyvin koko asunnoista kuin laskettuna kutakin huonetta kohti. Tässä selvitettäköön sentähden ainoastaan vuotuinen vuokra 
        laskettuna kuutiometriä kohti.</p>
      <Image className="centeredImageStyle" src={img19} alt="Taulukko 19"/>
      <p>Keskimääräinen vuotuinen vuokra kuutiometriä kohti erisuurissa asunnoissa ja kaikissa yhteensä oli seuraava:</p>
      <Image className="centeredImageStyle" src={img20} alt="Taulukko 20"/>
      <p>Tavallisin vuokra kuutiometriä kohti koko kaupungissa on 2 ja 3 mk. välillä, keskimääräinen maksu 2:59. Jos tarkastamme eri asuntoryhmiä on asianlaita niissä sama, kuitenkin sillä erolla, 
        että yksihuoneisista ja osaksi huoneen ynnä keittiön käsittävistä asunnoista suhteellisesti suurella osalla on korkeampi vuokra kuin suuremmissa asunnoissa. Niinpä yksihuoneisista asunnoista 
        54 %:lla on korkeampi eli 3 ja 7 mk. välillä vaihteleva vuokra kuutiometriä kohti, jotavastoin kaksi- ja kolmihuoneisista asunnoista ainoastaan 34 - 40 % on korkeampi vuokra, mutta sekin vaan 
        vaihteleva 3 ja 5 mk. välillä.</p>
      <p>Missä määrässä olot vars. kaupungissa ja Myllymäessä eroavat toisistaan mitä maksettuun vuokraan tulee näkyy edellisellä sivulla olevasta taulusta.</p>
      <p>Tärkein puoli pienemmissä asunnoissa vallitsevien olojen selvittämisessä 011 tietenkin niissä mahdollisesti esiintyvä liika-asutus. Tässä suhteessa antaa kullekin asukkaalle eri asunnoissa 
        tuleva lattia-ala jo osaksi vastauksen, mutta varsinainen selvitys saadaan vasta laskemalla kullekin asukkaalle tuleva ilmamäärä eli kuutiotila. Mitä asukkaille tulevaan lattia-alaan tulee 
        olivat olot seuraavat.</p>
      <Image className="centeredImageStyle" src={img21} alt="Taulukko 21"/>
      <p>Yleensä täytynee pitää 5 m2 lattiaalaa kohtalaisia vaatimuksia tyydyttävänä, mutta siihen nähden että muualla tällaisissa selvityksissä on otettu 6 m2 alimmaksi sallittavaksi lattiaalaksi, 
        jonka mukaan asuntoa, missä on vähemmän lattiaalaa, pidetään liikaasuttuna, käytettäköön tässä samaa mittakaavaa. Tämän mukaan olisi lattia-alaa seuraavassa määrässä asuntoja kutakin asukasta 
        kohti alle 6 m2 eli toisin sanoen ne olisivat suuremmassa eli vähemmässä määrässä liikaasuttuja.</p>
      <Image className="centeredImageStyle" src={img22} alt="Taulukko 22"/>
      <p>Tilan ahtaus olisi niinmuodoin tämän mukaan suurin yksihuoneisissa asunnoissa, mutta korjautuu se suhteellisesti nopeasti suuremmissa huoneustoissa. Kun kuitenkin tätä tietä ei päästä mihinkään 
        sitovampaan tulokseen, ei ole syytä edelleen kehittää tässä esiintyviä numeroita.</p>
      <p>Niinkuin jo huomautettiin saamme täydellisen selvityksen mahdollisesta liikaasutuksesta ainoastaan siten, että otamme selkoa kullekin asukkaalle tulevasta ilmamäärästä eli kuutiotilasta asunnossa. 
        Tulos tässä suhteessa esiintyy seuraavassa taulussa.</p>
      <p>Kuten lattia-alaa selvitettäessä täytyy meidän tässäkin määrätä kutakin henkilöä kohti sallittava vähin ilmamäärä, että saataisiin raja, joka ratkaisee onko asunto liika-asuttu eli ei; jos otamme 
        sitte alapuolella tätä rajaa eri asteita, ilmaisevat ne, että asunto on suuremmassa eli pienemmässä määrässä liika-asuttu.</p>
      <p>Mikä luku olisi asetettava tällaiseksi rajamääräksi, siitä eivät mielipiteet ole täysin yhteenmeneviä, toiset esittävät koko suuria vaatimuksia, toiset tyytyvät vähempään. Saksalaisen hygieenikon 
        Prof. Flugge'n laskelmien mukaan tulee kullakin asukkaalla olla vähintään 16 m3 ilmaa. Tämän mukaan voimme pitää asuntoja joissa kunkin asukkaan osalle tulee 15—20 m3 tyydyttävän väljästi asuttuina; 
        ne asunnot joissa kunkin asukkaan osalle tulee 10—15 m3 jotenkin ahtaasti asuttuina, ne joissa asukasten osalle tulee 5 — 10 m3 suuressa määrin ahtaasti asuttuina ja ne joissa asukasten osalle tulee 
        alle 5 m3 suurimmassa määrässä liika-asuttuna. Huoneet taasen, joissa asukkaiden osalle tulee yli 20 m3 olisivat täysin väljiä eli tilavasti asuttuja. Jos sitte ryhmitämme pienemmät huoneustot ia 
        niiden asukkaat tämän mukaan, on kuten sivulla 34 oleva taulu osoittaa tulos seuraava.</p>
      <Image className="centeredImageStyle" src={img23} alt="Taulukko 23"/>
      <Image className="centeredImageStyle" src={img24} alt="Taulukko 24"/>
      <p>Seuraavalla sivulla olevan taulun mukaan oli suuremmassa eli vähemmässä määrässä, eli toisin sanoen eriasteisia, liika-asuttuja asuntoja 34.2% kaikista pienemmistä asunnoista, siis jotenkin tasan 
        kolmasosa; mainituissa huoneustoissa asui 40.5 % tässä kysymykseen tulevista asukkaista.</p>
      <p>Koko kaupungin asuntomäärästä tekevät nämät liika-asutut asunnot 27.4 % ja asukasmäärästä kysymyksessä olevat liian tiheästi asuvat 29.8 % ; molemmissa tapauksissa lähes saman määrän eli yleensä 
        vähän runsaammin kuin neljänneksen.</p>
      <Image className="centeredImageStyle" src={img25} alt="Taulukko 25"/>
      <p>Asukkaita löytyi eri ryhmissä keskimäärin kutakin huonetta kohti seuraavasti:</p>
      <Image className="centeredImageStyle" src={img26} alt="Taulukko 26"/>
      <p>Mitä erisuuriin, tässä kysymyksessä oleviin, asuntoihin tulee ovat olot tietysti tässä niinkuin muissakin suhteissa epäedullisimmat yksihuoneisissa asunnoissa. Niinpä ei muissa ryhmissä ensinkään 
        löydy asuntoja, joissa asukkaan osalle tulisi alle 5 m3 ilmaa niinkuin tässä, ja liika-asutut asunnot vähenevät lukumäärälleen nopeasti toisissa ryhmissä; tyydyttävästi ja väljästi asuttujen luku 
        taasen kasvaa samaten muissa ryhmissä.</p>
      <p>Missä määrin olot varsinaisassa kaupungissa ja Myllymäessä eroavat toisistaan, selviää kyllä edellä olevista tauluista, mutta otettakoon kysymyksessä olevat luvut kuitenkin uudelleen tähän.</p>
      <Image className="centeredImageStyle" src={img27} alt="Taulukko 27"/>
      <p>Eri asteisia liika-asuttuja asuntoja oli niinmuodoin varsinaisessa kaupungissa 208 tehden 29.5 % pienemmistä asunnoista ja 21.9 % varsinaisen kaupungin koko asuntomäärästä. Liian ahtaasti asuvia 
        asukkaita 944 eli 35.3 % pienten asuntojen ja 23.3 % koko varsinaisen kaupungin asukasmäärästä. Myllymäessä tekivät vastaavat numerot: 147, 44.6 % ja ja 42.6 % - 647, 51.5 % ja 49.6 % .</p>
      <p>Niinhyvin varsinaisessa kaupungissa kuin etenkin Myllymäessä vallitsi niinmuodoin tuntuva liika-asutus pienemmissä asunnoissa, vaikkakin oloille on täällä asetettu pienempiä vaatimuksia kun esim. 
        Helsingissä ja Turussa, joissa meidän tyydyttävän väljästi asuttu ryhmä on vielä katsottu osittain ahtaasti asutuksi.</p>
      <p>Lienee syytä myöskin tarkastaa missä määrin sivulliset asukkaat mahdollisesti ovat syynä erinäisten asuntojen liika-asutuksen. Kuten sivulla 37 olevasta taulusta näkyy asui 161 tässä kysymykseen 
        tulevassa asunnossa kaikkiaan 818 asukasta ja näistä 309 sivullista sellaista. Näiden asuntojen jakautuminen asukkaille tulevan kuutiotilanmukaan oli seuraava.</p>
      <Image className="centeredImageStyle" src={img28} alt="Taulukko 28"/>
      <p>Jos yhdistämme edellä olevasta taulusta koko kaupunkia käsittävästä osasta erisuuret asunnot yhdeksi ryhmäksi, niin oli sivullisia asukkaita käyttävien pienempien asuntojen asutustiheys, asukas- 
        ja sivull. asukasmäärä seuraava.</p>
      <Image className="centeredImageStyle" src={img29} alt="Taulukko 29"/>
      <p>Ylläolevan taulun mukaan löytyi tässä kysymykseen tulevissa pienemmissä asunnoissa sivullisia asukkaita 161 asunnossa kaikkiaan 309. Mainittujen asuntojen koko asukasmäärä teki 818. Kysymyksessä 
        olevasta 161 asunnosta oli 52 asuntoa suuremmassa eli vähemmässä määrässä liika-asuttuja. Näissä 52 liika tiheästi asutussa huoneustoissa asui kaikkiaan 276 asukasta, joista 106 sivullista.</p>
      <p>Kuten aikaisemmin huomautettiin löytyi kaikkiaan 355 liikaasuttua asuntoa; edellisen mukaan oli näistä 52:ssa (14.6 %:ssa) sivullisia asukkaita. Pienempien asuntojen koko määrästä tekevät mainitut 
        52 asuntoa 5 % ja koko kaupungin asuntomäärästä 4.0 %. Jos määräämme nämät suhteet asukkaissa, asui kaikkiaan 1591 henkeä liian tiheästi; edellä mainitussa 52 asunnossa taasen 276 asukasta eli 
        17.3. Pienten asuntojen koko asukasmäärästä tekevät tässä kysymykseen tulevat liian ahtaasti asuvat ainoastaan 7 % ja koko kaupungin asukasmäärät 5.2 %. Ei voi näin ollen väittää että sivullinen 
        asutus suuremmassa määrässä vaikuttaisi liika-asutusta.</p>

      <h2>Yleiskatsaus</h2>
      <p className="firstLetterStyle">Kuten pienissä kaupungeissamme yleensä on asianlaita, on Hämeenlinnassakin asuntoja, etenkin keskikokoisia ja vähän suurempia sellaisia, ainoastaan parahiksi niin 
        paljon kuin niitä tarvitaan. Jos useampia perheitä, jotka tarvitsevat tällaisia asuntoja, muuttaisi samalla kertaa kaupunkiin, syntyisi suuria vaikeuksia saada asuntoja, ell'ei joitakuita perheitä 
        samalla muuttaisi pois. Jos samaan aikaan rakennetaan useampia rakennuksia, tulee asuntoja aluksi enemmän kun tarvitaan, ell'ei ole kysymys pienemmistä sellaisista.</p>
      <p>Ylimalkaan ovat asuinhuoneet hyvin pieniä ja asunnot niinhyvin pienemmät kuin suuremmatkin ei ainoastaan vanhemmissa vaan uusissakin rakennuksissa, harvoja poikkeuksia lukuunottamatta, 
        perin puutteellisia, mikäli taloudenpitoon tarvittaviin ja yleensä vaadittuihin mukavuuksiin tulee. Pahimpana puutteellisuutena huomautettakoon tässä ainoastaan sitä, että asunnoissa yleensä ei 
        löydy minkäänlaista tyydyttävää ruokasäiliötä, tahi jos löytyy jonkinlaisia komeroita, eivät ne vastaa pieniäkään vaatimuksia. Tämä tuottaa suuria vaikeuksia eritoten pienempien asuntojen käyttäjille, 
        jotka saavat säilyttää ruokatavaransa milloin missäkin, useimmiten jossakin kaapissa itse asuinhuoneessa. Mitä tällainen asiaintila merkitsee kuumina kesinä, jolloin ruokatavarat muutenkin tahtovat 
        helposti pilaantua, sen osoittavat silloin tavallisesti hyvin runsaslukuisina ilmaantuvat suolitulehdustapaukset.</p>
      <p>Olisi suotavaa että voisimme verrata Hämeenlinnassa vallitsevia asunto-oloja muiden kaupunkien oloihin, tällainen vertailu kun olisi suuressa määrässä asiata valaiseva. Se ei kuitenkaan käy päinsä 
        muuta kuin osaksi, syystä että muualla ei tiettävästi vielä löydy asunto-oloja kokonaisuudessaan koskevia selostuksia; ainoastaan osittaisia sellaisia on olemassa muutamasta kaupungista. Olemme 
        sentähden tilaisuudessa vertaamaan ainoastaan pienempiä asuntoja samanlaisiin Helsingissä, Turussa, Viipurissa, Vaasassa ja Pietarsaaressa. Tämäkin vertailu on kuitenkin useissa suhteissa hankalaa; 
        kysymyksessä olevissa selityksissä on nimittäin noudatettu usein suuressa määrin toisistaan poikkeavaa käsittelytapaa, niin että niissä löytyyät tiedot eivät aina ole suorastaan käytettävissä ja 
        niiden muodosteleminen taasen on usein liiaksi vaivaloista, minkä lisäksi numerot täten eivät aina tule täysin tarkoiksi. On kuitenkin syytä koettaa muutamissa osissa verrata toisiinsa eri kaupungeissa 
        vallitsevia oloja; pienemmissä asunnoissahan kaikkialla vallitsee epäedullisemmat olot. Tätä ennen huomautettakoon kuitenkin, mikäli asunto-olosuhteisiin kokonaisuudessaan tulee, että kaupungin asutus 
        edellä olevan selvityksen mukaan suurissa piirteissä otettuna oli seuraava:</p>
      <Image className="centeredImageStyle" src={img30} alt="Taulukko 30"/>
      <p>Vielä huomautettakoon asunnoista yleensä sivulla 15 olevan vuokra-ilmoituksen täydennykseksi että vuotuinen vuokra kutakin asuinhuonetta kohti koko kaupungissa teki seuraavan määrän:</p>
      <Image className="centeredImageStyle" src={img31} alt="Taulukko 31"/>
      <p>Vertailun vuoksi mainittakoon että keskimääräinen vuotuinen vuokra kutakin asuinhuonetta kohti teki v. 1900 Helsingissä 255, Viipurissa 157, Turussa 135 ja Tampereella 132.</p>
      <p>Yleensä on tunnettua että vuokrat Hämeenlinnassa ovat olleet suhteellisesti halvat. Tämä ynnä viime aikoina tavattomasti nousseet rakennuskustannukset ovat etupäässä ehkäisseet yrittelijäisyyttä tällä 
        alalla ja kaupunkilaiset ovat saaneet edelleen tyytyä puutteellisiin asuntoihin. Mahdollisesti saadaan tässä suhteessa muutos aikaan kunhan kaupunki saa vesijohtolaitoksen, mikä jo on päätetty asia, 
        mutta odottaa päätös täytäntöönpanoa varten suotuisampia raha-aikoja.</p>
      <p>Jos sitten käännymme pienempiin asuntoihin teki niiden lukumäärä, kuten jo aikaisemmin huomautettiin 81.9 % kaupungin koko asuntomäärästä ja niissä asuvien asukkaiden määrä 74 % kaupungin koko 
        asukasmäärästä. Minkä prosenttimäärän pienemmät asunnot tekevät muissa kaupungeissa ei ole tunnettuna muualta kuin Pietarsaaresta, jossa se teki 91.1 %.</p>
      <p>Pienempiin asuntoihin kuuluvien erisuurten huoneustojen lukumäärä prosenteissa oli eri kaupungeissa seuraava:</p>
      <Image className="centeredImageStyle" src={img32} alt="Taulukko 32"/>
      <p>Suuremmissa kaupungeissa löytyy pääasiallisesti yksihuoneisia ja huoneen ynnä keittiön käsittäviä asuntoja, pienemmissä taasen koko joukko työväen käyttämiä suurempiakin asuntoja.</p>
      <p>Pienempien asuntojen asukasmäärä teki eri kaupungeissa seuraavan prosenttimäärän koko asukasluvusta:</p>
      <Image className="centeredImageStyle" src={img33} alt="Taulukko 33"/>
      <p>Pienissä kaupungeissa löytyy suhteellisesti vähän suurempia asuntoja - kuten edellä jo huomautettiin oli Hämeenlinnassa ainoasti 18.1 %, Pietarsaaressa 8.9 % - ja niitä käyttäviä, sentähden ovat 
        kysymykseen tulevat prosenttimäärät niissä siksi eroavia suuremmista kaupungeista.</p>
      <p>Pieniä asuntoja käyttävät jakautuvat erisuurille asunnoille seuraavasti:</p>
      <Image className="centeredImageStyle" src={img34} alt="Taulukko 34"/>
      <p>Olosuhteet, niinkuin ylläolevasta näkyy ja muutenkin on luonnollista, ovat pienissä kaupungeissa koko joukon edullisemmat. Tämän osoittaa myöskin seuraava ryhmittely, jossa on ilmoitettu montako 
        asukasta tuli keskimäärin kutakin huonetta kohti:</p>
      <Image className="centeredImageStyle" src={img35} alt="Taulukko 35"/>
      <p>Missä määrin liika-asutus rasittaa pieniä asuntoja eri kaupungeissa selviää alla olevasta:</p>
      <Image className="centeredImageStyle" src={img36} alt="Taulukko 36"/>
      <p>Pienemmissä asunnoissa maksettu keskimääräinen vuotuinen vuokra laskettuna kuutiometriltä oli seuraava:</p>
      <Image className="centeredImageStyle" src={img37} alt="Taulukko 37"/>
      <p>Edellä olevan lisäksi kosketeltakoon vielä sivullisten asukasten käyttämistä. Tässä suhteessa olivat olot eri kaupungeissa seuraavat:</p>
      <Image className="centeredImageStyle" src={img38} alt="Taulukko 38"/>
      <p>Kuten jo on huomautettu vallitsee kaupunkimme pienemmissä asunnoissa tuntuva liika-asutus. Tosin ovat olomme, niinkuin edellä olevasta vertailusta käy ilmi, paljon edullisemmat kuin maamme 
        suurkaupungeissa, mutta moitteen varaa on niissä sittenkin koko joukko. Kun nimittäin kaupungin asukkaista 29.8 % asuu siksi ahtaasti että kunkin osalle ei tule edes 15 m3 tilaa, tahi jos otamme 
        ainoastaan suurimmassa ja suuressa määrässä ahtaasti asuvat, joille tulee alle 10 m3, on niitäkin 15.8 % eli lähes kuudes osa koko kaupungin asukasmäärästä.</p>
      <p>Missä määrin ahtaasti asuville yleensä tulee keskimäärin asukasta kohti ilmaa selviää seuraavasta:</p>
      <Image className="centeredImageStyle" src={img39} alt="Taulukko 39"/>
      <p>Keskimääräinen kuutiotila kutakin asukasta kohti kaikissa pienemmissä erisuurissa asunnoissa oli seuraava:</p>
      <Image className="centeredImageStyle" src={img40} alt="Taulukko 40"/>
      <p>Yllä huomautettu liika-asutus kohdistuu etupäässä yksihuoneisten asuntojen asukkaisiin, joiden koko määrästä 1,207 (22.6 % kaup. koko asukasmäärästä), 41.6 % on pakoitettu asumaan siksi ahtaasti että 
        kunkin osalle ei tule edes 10 m3 tilaa; huoneen ja keittiön käsittävissä asunnoissa löytyi tällaisia asukkaita 19.4 %; 2 huonetta ja keittiön käsittävissä asunnoissa 5.8 ja muissa asunnoissa ei yhtään.</p>
      <p>Että olot aikaisemmin ovat olleet vieläkin huonommat, mutta nyt ovat paranemassa sen osoittavat yksihuoneisissa asunnoissa muutama vuosi sitte vallinneet olot. Vuonna 1901 kerättiin nimittäin 
        varsinaisessa kaupungissa ja 1904 Myllymäessä summittaisia tietoja asunto-olosuhteista ja samalla lähempiä tietoja yksihuoneisista asunnoista. Jos asetamme silloin ja nyt saadut tulokset rinnakkain, 
        näkyy selvästi että olot ovat parempaan päin kulkemassa.</p>
      <Image className="centeredImageStyle" src={img41} alt="Taulukko 41"/>
      <p>Että tässä kysymyksessä olevat olot ovat viime aikoina parantuneet, sen osoittaa myöskin se seikka, että epäedullisempien asuntojen, s. o. yksihuoneisten asuntojen, lukumäärä varsinaisessa kaupungissa 
        on lisääntynyt sitte v. 1901 ainoastaan 7:llä, mutta huoneen ja keittiön käsittävien asuntojen lukumäärä sitävastoin 83:lla. Myllymäessä tekivät vastaavat numerot 17 ja 90.</p>
      <p className="signatureSmall">Hämeenlinnassa Tammikuussa 1909</p>
      <p className="signature">Viktor Manner</p>
      <a className="hyperLink" href="https://digi.kirjastot.fi/files/original/f5238f7f5373773db133c01db3f6598a.pdf">Lähde</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Asuminen</title> // metadata

export default HousingConditionsPage