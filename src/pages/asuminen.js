import * as React from "react"
import Image from "react-bootstrap/Image"
import Layout from "../components/layout"

import "../styles/base/global.css"

import imgFrontPage from "../images/content/asunto-olosuhteet.jpg"

const HousingConditionsPage = () => {
  return (
    <Layout titleText="Asunto-olosuhteet v. 1908">
      <div className="flexWrapper">
        <Image className="centeredImageStyle" src={imgFrontPage} alt="Matkailuoppaan etusivu"/>
      </div>
      <p className="captionStyle">Manner, Viktor</p>
      <p className="captionStyle">Hämeenlinnan Kaupunginkirjasto</p>

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

      <hr/>
      <a className="hyperLinkStyle" href="https://digi.kirjastot.fi/files/original/f5238f7f5373773db133c01db3f6598a.pdf">Linkki alkuperäiseen dokumenttiin (pdf)</a>
      <br/>
    
    </Layout>
  )
}
export const Head = () => <title>Vankien järjestyssäännöt, 1877</title> // metadata

export default HousingConditionsPage