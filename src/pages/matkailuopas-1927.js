import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";
import Layout from "../components/layout"
import "../styles/base/global.css"
import "bootstrap/dist/css/bootstrap.min.css";
const MatkailuopasPage = () => {
  return (
    <Layout titleText="Matkailuopas vuodelta 1927">
      <div className="flexWrapper">
        <StaticImage className="mx-auto" src="../images/content/guide27-frontpage.jpg" alt="Matkailuoppaan etusivu"/>
      </div>
      <p className="my-1 text-center italicSmallStyle">Laatinut A. TH. BÖÖK</p>
      <p className="my-1 text-center italicSmallStyle">Hämeenlinna 1927, Arvi A. Karisto osakeyhtiön kirjapaino</p>
      <p className="my-1 text-center italicSmallStyle">Hämeenlinnan Kaupunginkirjasto</p>
      <hr></hr>
      <h2>Hämeen linna ja vanha kaupunki</h2>
      <p>Hämeen linna sijaitsee Vanajaveden rannalla, Helsingistä Tampereelle vievän rautatien varrella. Sen
        maantieteellinen asema on 60° 59 46,8 pohj. lev. ja 24°, 28 05 it. pit. Greenw. Kaupunki ei ole aina
        ollut samassa paikassa kuin nykyään. Vanha Hämeenlinna sijaitsi Hämeen linnan pohjoispuolella ja
        syntyi siten, että linnan ulkopuolelle, siis sen pohjoispuolelle, vähitellen kasvoi pieni kauppala. Hämeenlinna
        oli siis hyvässä suojassa linnan takana, joka lienee ollut vaikeasti valloitettava. Siitä sanoo
        Väinö Auer kirjassaan »Die postglaziale Geschichte des Vanajavesi Sees» m.m. seuraavasti:</p>
      <p>»Kun suunnitellaan Vanajaveden tai samannimisen jokireitin vedenpinta tälle ajalle (v. 1249) ja konstruoidaan
        Hämeenlinnan kaupungin ja linnan välisen laajan suon pinta, huomataan, että linnoitus oli mitä
        vaikein valloittaa. Eteläpuolella oli, kuten sanottu, laaja ja vetelä suo, jonka pohjalla .olevan muinaisjärven
        pohjaan ei 10,5 m:n suokairalla päästä, vaikka kairaus suoritetaan 1—1,5 m:n syvyisen ojan pohjasta.
        Suo oli veden alla sen verran, että kahlaaminen oli vetelän turveperustan takia mahdollisimman vaikeata.
        Suuremmalla aluksella pääsi mahdollisesti vain tulvan aikana, ja itäpuolella oli joen varsinainen
        suorantainen väylä. Linnoitus oli saarella, jonka matala salmi erotti mantereesta. Tämän yli vaivoin
        pääsivät kahlaamalla suuret joukot. Kun linna vielä on muinaisen saaren alaosassa, saattoi sen ulkopuolellakin
        helposti torjua vihollisen hyökkäykset lännestä ja pohjoisesta päin».</p>
      <p>Kun kaupunki on saanut alkunsa linnasta, on linnan rakenne ja historia tässä lyhyesti esitettävä. Linnaa
        on perusteellisemmin tutkinut tohtori Julius Ailio (Hämeenlinnan esi- ja rakennushistoria, hinta 50 mk.) Linna 
        (Kronoborg) sijaitsee kaupungin pohjoispuolella, Vanajaveden länsirannalla, 12 m:n korkuisella mäenharjanteellä, 
        jota muillakin tahoilla linnan alkuaikana on rajoittanut vesi tahi ainakin hyvin vesiperäinen suo. Linna mainitaan 
        historiallisissa lähteissä ensi kerran 1308 ja osaksi tästä syystä sitä on pidetty Torkel Knuutinpojan rakennuttamana. 
        Siinä ilmenevät varhaista välitystyyliä osoittavat rakennustaiteelliset piirteet antavat kuitenkin Hämeen historiallisten 
        seikkain ohella aihetta olettaa linnaa jonkun verran varhaisemmaksi, todennäköisesti Birger Ja arlin ristiretken jälkeisinä 
        aikoina rakennetuksi. Aina 1700-luvun alkupuolelle asti linna on verrattain hyvin säilyttänyt alkuperäisen luonteensa. 
        Itse linnarakennus, joka pääasiassa vieläkin on entisen hahmoinen, on pohja-alaltaan neliön muotoinen, alaosassaan harmaasta 
        kivestä, ylempää tiilistä muurattu , ja sen joka nurkalla on alkuaan kohonnut nelikulmainen torni. Sitä on ympäröinyt vahva 
        ja korkea, etupäässä harmaasta kivestä tehty kehämuuri ampuma-aukkoineen sekä portti- y.m. torneineen.</p>
      <p>Uuden ajan alussa varustettiin linnaa ruutiaseiden käyttöä varten ja silloin rakennettiin m. m. kehämuurin kolkkiin vahvat 
        pyöreät kanuunatornit, joista vielä yksi on jäljellä, sekä kehämuurin ulkopuolelle luotiin suorat maavallit ja vallihaudat.</p>
      <p>Pikkuvihan edellä tehtiin viimemainittujen ulkopuolelle laajemmat, polvikkaat maavarustukset, n. s. tenaljivallit ja pari 
        vuosikymmentä jälkeenpäin tehtiin näiden ulkopuolelle vielä laajemmat saman tapaiset vallit — ainoat ulkovarustukset, 
        jotka ovat suurimmaksi osaksi säilyneet meidän päiviimme saakka.</p>
      <p>Linna on keskiajalla ollut Ruotsin vallan tukikohtana Suomen sisämaassa ja kuulunut useiden mahtimiesten läänityksiin. 
        Uudella ajalla se on ollut 1700-luvun lopulle asti erittäinkin asehuoneena ja maa-armeijan varastopaikkana tärkeä. 
        Sekä ison- että pikkuvihan aikana venäläiset saivat taistelutta linnan haltuunsa. V. 1836  muodostettiin linna nykyiseen 
        tarkoitukseensa, vankilaksi.</p>
      <p>Kauppalalle antoi Pietari Brahe v. 1639 kaupunginoikeudet, jotka vahvistettiin v. 1650. Vuonna 1660 tulipalo hävitti linnan, 
        v. 1713 ja 1739 kaupungin.</p>
      <p>Kun Kustaa III v. 1775 kävi kaupungissa, valittivat kaupunkilaiset hänelle tukalaa asemaansa, heitä kun oli kielletty uudelleen 
        rakentamasta hävitettyjä talojaan syystä, että kaupunki oli määrätty muutettavaksi etäämmälle linnasta, mutta ei ollut sopivaa 
        paikkaa. Tämän johdosta lahjoitti Kustaa III (v.1777) lahjakirjalla Hämeenlinnan kaupungille sen läheisyydessä sijaitsevan 
        Saaristen virkatalon ehdolla, että kaupunki muutettaisiin sanottuun kartanoon kuuluvalle, noin puolen kilometrin matkan päässä 
        linnasta eteläänpäin sijaitsevalle Niementausta-nimiselle mäelle, jonne kaupunki sittemmin vuosina 1779—1784 muutettiinkin 
        ja jossa se nykyään on.</p>
      <p>V. 1831 poltti tulipalo kolme neljättä osaa kaupungista. Palon jälkeen vahvistettiin kaupungille ensimmäinen uusi asemakartta v. 
        1832. Linnaan on nykyään sijoitettu Hämeenlinnan keskus- ja lääninvankila. Vankeinhoitolaitoksen hallussa on myöskin linnan 
        vierellä oleva Ojoisten entinen maaherran virkatalo.</p>

      <h2>Hämeenlinnan rautatieasema</h2>
      <p>Hämeenlinnan rautatieasemalla on historiallisessa suhteessa se merkitys, että se on Suomen ensimmäisen rautatien, Helsinki—Hämeenlinna, 
        pääteasema. Tämä rautatie avattiin liikenteelle maaliskuun 17 p:nä 1862.</p>
      <p>Vanha tiilistä rakennettu asematalo torneineen paloi perustuksiaan myöten vapaussodan aikana 26 p:nä huhtikuuta 1918. Saksalaisten 
        pommittaessa kaupunkia räjähti asemalla muuan ampumatarvevaunu, jolloin aseman päärakennus syttyi tuleen.</p>
      <p>Tullessa nykyään rautateitse kaupunkiin herättää huomiota uusi asema. Se on nykyaikainen ja siisti, avarilla halleilla ja muilla 
        mukavuuksilla varustettu rakennus, tehty arkkitehti T. Hällströmin piirustusten mukaan ja avattu liikenteelle 1 p:nä lokakuuta 1919. 
        Asemalla on ravintola, kirjakauppa ja puhelin (278) yleisön käytettävänä.</p>
      <p>Asematalon vieressä - asemalta tullessa Rautatiepuistikon vasemmalla puolella - on Paketti- ja Pikatavaratoimisto eri rakennuksessa 
        sekä edempänä aseman puistikon vieressä Menevien tavarain toimisto ja vielä kauempana tien toisella puolella Tulevain tavarain toimisto.</p>

      <h2>Kulkuneuvot asemalta kaupunkiin ja sen ympäristöön</h2>
      <p>Rautatieasemalta saa aina autoja sekä pika-ajureita kaupunkiin ja ympäristöön. Ellei olisi riittävää määrää, voi niitä puhelimella tilata 
        Autoasemilta (puh.79 ja 640) tai Pika-ajurien tilausasemalta (puh. 192). Maksu suoritetaan kaupunkiin taksan mukaan; ympäristöön eri 
        sopimuksen mukaan.</p>
      <p>Asemalta on myös säännöllinen linja-autoliike kaupungin läpi Poltinaholle, läntiselle kasarmialueelle.</p>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-1.jpg" alt="Bussi"/>
      </div>

      <h2>Rautatieaseman ympäristö</h2>
      <p>Heti asemalta lähdettyä käy matka suurimmaksi osaksi vielä rakentamattoman, uuden kaupunginosan, Kiistalan, läpi. Tämä, niinkuin asemakin, 
        on Vanajaveden itäpuolella.</p>
      <p>Tien oikealla puolella näemme Hämeenlinnan ensimmäisen nähtävyyden - laatuaan ainoan maassamme - uuden Sotilas-säilyketehtaan. Tehtaan alueen 
        pinta-ala on 9000m2, josta rakennettuna n. 1100m2. Tehdas valmistaa valtion laskuun lihasäilykkeitä sotalaitosta varten.</p>
      <p>Rautatien ratapihan itäpuolella on suuressa kivirakennuksessa armeijan Vaatetusvarikko.</p>
      <p>Kiistalan läpi kulkevalta Viipurintieltä eroavat tiet eteläänpäin kaupungin Tulliaittaan sekä Teurastuslaitokselle Keinusaarella.</p>
      <p>Kiistalan alue rajo ittu u lännessä Vanajaveteen, jonka rannalle on tekeillä uusi Kiistalan satamalaituri.</p>
      <p>Kuljettuamme poikki Hämeenlinnan Satamaradan, jonka varrella on eri liikkeiden suuria tavaravarastorakennuksia, sivuutamme vasemmalla puolella 
        Hämeenlinnan verkatehtaan ja oikealla puolella Lääninsairaalan laajan alueen. Lääninsairaalan suuret kivirakennukset ovat 1830-luvun loppupuolella 
        indententiviraston piirustuksien mukaan rakennetut. Sairaalan laajennustyöt aloitetaan v. 1927.</p>
      <p>Vastapäätä Lääninsairaalaa on vanha, valtiolle kuuluva, J . C. L. Engelin v. 1837 suunnittelema kivinen varastorakennus.</p>

      <h2>Isosilta - Keskikaupunki - Poltinaho</h2>
      <p>Kiistalan kaupunginosan yhdistää muuhun kaupunkiin Vanajaveden poikki vievä, graniittitukimuureilla lepäävä kaksijänteinen ristikkosilta. 
        Silta on varustettu betonikannella, joka on verhottu mukulakivillä, ja se rakennettiin v. 1910 entisen vanhan puusillan sijalle.</p>
      <p>Korkealta sillalta on kaunis näköala eri suuntiin, ja on se muutenkin sopiva lähtökohta niille matkailijoille ja retkikunnille, jotka tahtovat 
        »Hämeen helmeen» tutustua.</p>
      <p>Sen sairaalanpuoleisen pään eteläpuolella on pieni hauska Pinellan puisto, josta avautuu idyllinen näköala kaupungin eteläpuolella jonkun verran 
        laajenevaa Vanajavettä kohti. Puistossa herättävät huomiota sillan lähettyvillä olevat komeat tammet. Ne ovat Rehbinderin ajoilta, joista enemmän 
        tuonnempana. Puisto on muuten kaupungin vanhimpia, ja siinä oli ennen muinoin ravintola niillä paikoilla, missä nyt on verkatehtaaseen kuuluvia huviloita. 
        Puiston rannassa on kaupungin Pesuhuone ja Hevosuittolaituri.</p>
      <p>Laajin näköala sillalta katsottuna avautuu kuitenkin pohjoispuolelle, linnaan päin. Siellä näemme kaupungin sataman laivoineen, rehevän nykyaikaisen
        puiston, Rantapuiston, ympäröimänä; kauempana vanhan Hämeen linnan vakavat, historialliset piirteet, edelleen korkealle kohoavan, värikkään 
        kaupunginpuiston ja taustassa kuuluisan Karlbergin kartanon upeat päärakennukset. Oikealla puolella näkyy terävine ääriviivoineen Hämeenlinnan Höyrysaha 
        ja sen takana aseman pohjoispuolella Sairion satama ja lastauspaikka: tärkeä paperin ja paperimassan (Valkeakoski) sekä puutavaran vientipaikka. 
        Sataman pohjoispuolella on Hämeen hienonahkatehdas ja Tulitikkutehdas.</p>
      <p>Sillalta alkaa kaupungin vilkasliikkeisin katu - Raatihuoneenkatu - kulkien sen läpi Viipurintiestä kaupungin länsipuolella olevaan Turuntiehen saakka, 
        joka johtaa Poltinaholle.</p>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-2.jpg" alt="Silta"/>
      </div>

      <h2>Raatihuoneenkatu sillalta torille</h2>
      <p>Heti kadun päässä, sillankorvassa, on uusi, v. 1927 rakennettu Arvi A. Karisto Osakeyhtiön viisikerroksinen liiketalo, jonka piirustukset on laatinut 
        arkkitehti Väinö Keinänen. Taloon on sijoitettu , paitsi yhtiön tunnettua kustannusliikettä, sen kaikki teollisuusosastot, sisämaan suurimmat ja 
        monipuolisimmat, käsittäen kirjapainon, kirjansitomon ja tilikirjatehtaan, kirjekuori- ja paperinjalostustehtaan, kuvalaattatehtaan y.m. laitoksia. 
        Viisikerroksisen rakennuksen lattiapinta-ala on noin 3500 neliömetriä.</p>
      <p>Lähtiessämme sitten matkaamme jatkamaan herättää huomiotamme ensinnäkin kadun oikealla puolella oleva Kaupungintalo, aikoinaan rakennettu arkkitehti 
        H. R. Helinin piirustusten mukaan Hämeenlinnan Anniskeluyhtiön anniskelu-, myynti- ja varastopaikaksi. Taloon on nyt sijoitettu Rahatoimikamarin 
        konttori, Rakennuskonttori, Sähkö- ja Vesilaitoksen konttori, Köyhäinhoitotoimisto, Työnvälitystoimisto, Vakaajan huone, Maidontarkastusasema, 
        sekä Valtuuston kokoushuone.</p>
      <p>Heti sen jälkeen tulee kauppaneuvos A . Gust. Skogsterin komea kauppatalo, jonka piirustukset on laatinut osaksi arkkitehti Selim Lindqvist, 
        osaksi prof. Armas Lindgren. Liike on Hämeen suurimpia, käsittäen rauta - ja talousosaston, kangasosaston, lasi- ja porsliiniosaston, miesten ja naisten 
        vaatetustavaroita, siirtomaa-tavaraa ja hedelmiä. Sivuliikkeitä on Riihimäellä, Harvialassa, Iittalassa ja Valkeakoskella.</p>
      <p>Skogsterin lähettyvillä, kadun toisella puolella, on omassa uudessa, nykyaikaisessa kauppatalossaan Hämeen Rautakauppa (Helsingin Rakennusainekauppa Oy:n 
        sivuliike) sekä sen vieressä kaupungin parhain elokuvateatteri, Hämeen Kino.</p>
      <p>Rauhakadulla Skogsterin ja Hämeen Rautakaupan edustalla on bensiiniasema; Rauhakadun eteläpäässä Joh. A. Fredrikssonin kauppaliike.</p>
      <p>Edelleen on Raatihuoneen kadun varrella, samalla puolella kuin Hämeen Rautakauppa, Lindqvist & Fredrikssonin tukku- ja vähittäisliike, Helenius ja Korpimaan 
        valjasliike, sekä M. Villgrenin kangaskauppa - kaikki kaupungin vanhimpia sekä myös Osuusliike Häme r. l. ja Katisten kukkakauppa.</p>
      <p>Pankkeja on tällä kadunosalla kolme: Tampereen pankin (Skogsterin talossa) ja Etelä-Suomen pankin haarakonttorit sekä Hämeenlinnan kaupungin Säästöpankki 
        omassa talossaan Raatihuoneenkadun ja Rauhankadun kulmassa.</p>
      <p>Matkailijain käytettävinä on tällä kadulla vielä muitakin liikkeitä, kuten kemikalikauppa, sekatavara-, leikkely-, leipuri-, siirtomaan-, kukka-, parturi- 
        ja valjas- y.m. liikkeitä (viittaamme oppaan ilmoitusosastoon).</p>
      <p>Skogsterin talossa on Rauhankadun puolella Aimo Skogster & K : nin Urheiluliike; sitä vastapäätä on Hämeenlinnan Autoyhtiö. Säästöpankin talon viereisessä 
        talossa (Raatihuoneenkatu 9) on Hämeenlinnan Suojeluskunnan kanslia. Suojeluskunta toimii vireästi käsittäen eri komppanioita ja eri osastoja. Urheilu- ja 
        ampumaharrastus on suuri. Yhteistoiminnassa Suojeluskunnan kanssa on Lotta Svärd-yhdistys, jonka huoneisto on samassa talossa kuin Suojeluskunnan.</p>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-3.jpg" alt="Vanajaveden silta"/>
      </div>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-4.jpg" alt="Vanajaveden sillalta etelään"/>
      </div>
        

      <h2>Isotori ympäristöineen</h2>
      <p>Sillalta alkaen Raatihuoneenkatu vähitellen kohoaa, kunnes se kirkon kohdalla saavuttaa korkeimman kohtansa. Siitä aukeaakin matkailijan silmien eteen 
        todella komea näköala yli kaupungin suuren ja avonaisen isontorin mielenkiintoisine ympäristöineen. Tori on kaupungin Kauppatori, jolle torikauppa on 
        arkipäivisin järjestetty.</p>
      <p>Sopusoinnussa torin kanssa ovat sen varrella olevat monet suuret ja vakavapiirteiset kivitalot, vaikka ne, ollen erilaatuiset, eivät muodosta 
        rakennustaiteellisesti eheätä kokonaisuutta.</p>
      <p>Torin itäpuolella kohoaa valtavana kaupungin kaunis, v. 1798 rakennettu ja tyyliltään aivan erikoinen kirkko isopuisen puistikon, Kirkkopuiston ympäröimänä.</p>
      <p>Se rakennettiin kuningas Kustaa III: n aikana hovi-intendentti Jean Louis Desprezin antamien piirustusten mukaan. Alkuaan oli kirkko amfiteatterin tavoin 
        aivan pyöreä, alttari keskellä ja istuinsijat porrasten tavoin kohoten sen ympäriltä. Sittemmin on sitä useita kertoja muutettu, kunnes se saavutti 
        nykyisen muotonsa. Niinpä rakennettiin vuonna 1837 sen yhteyteen torni kellotapuliksi, v. 1892 se muutettiin ristikirkoksi arkkitehti J. Stenbäckin 
        piirustusten mukaan ja varustettiin silloin parvekkeilla. Arkkitehti Ilmari Launiin suunnitelman mukaan se vihdoin v. 1912 sisustettiin nykyiseen kuntoonsa, 
        ollen se nyt ehdottomasti maamme hienoimpia ja kuuluen kaupungin parhaimpiin nähtävyyksiin. Silmiä hivelee hieno, sopusointuinen väritys, ja kirkkoa 
        juhlistavat valtava holvi, Alexandra Sältinin maalaama alttaritaulu (»Vapahtaja ilmestyy Maria Magdaleenalle pääsiäisaamuna»), komea kristallikruunu 
        (hankittu lahjavaroilla v. 1914), vanhojen urkujen kaunis renesanssityylinen fasaadi (18-äänikertäiset urut on v. 1892 rakentanut tehtailija J . A. 
        Zachariassen Uudessakaupungissa, ja v. 1927 on Tulenheimon urkutehdas pannut ne uuteen kuntoon) ja ennen kaikkea Launiin sommittelemat kattokaarien ja 
        ikkunaholvien stukko-ornamentit ja lasimaalaukset.</p>
      <p>Kirkon edustalla on rehevä, portailla torista kohoava prof. Armas Lindgrenin sommittelema nykyaikainen puistikko; Kirkkopuisto, joka sen molemmissä 
        päissä olevien pylväskäytävien (virvokemyymäläin) ja keskellä olevan suihkulähteen sekä kirkon kanssa muodostaa torilta katsottuna kauniin kokonaisuuden.</p>
      <p>Sopusoinnussa tämän kanssa on vain torin koillinen kulma. Monista torin varrella ennen olleista Engelin suunnittelemista taloista ovat nimittäin 
        puhtaimpina säilyneet vain täällä olevat Kaupungin hotellin ja sen vastapäätä olevan Hämeenläänin Paloapuyhdistyksen puurakennukset sekä Lääninhallituksen
        talo, v:lta 1832, jotka yhdessä kirkon kanssa antavat tälle osalle toria arkkitehtoonisesti eheimmän leiman. Kaikki ovat rakennetut v. 1831 sattuneen 
        suuren tulipalon jälkeen.</p>
      <p>Torin varrella olevista muista kivirakennuksista mainittakoon Kansallis-Osake-Pankin (arkkitehti Vilho Penttilä v. 1913), Pohjoismaiden Yhdyspankin 
        (arkkitehti Valter Thome) ja Enok Rytkösen (arkkitehdit Armas Lindgren ja V. Palmqvist) rakennukset.</p>
      <p>Vastapäätä lääninhallitusta on lääninarkkitehti A. Cavenin piirustusten mukaan v. 1888 rakennettu renesanssityylinen Raatihuone, jossa on Raastuvanoikeuden 
        ja Maistraatin istuntosali, Poliisikamari, Kaupunginvoudin konttori sekä Kaupungin juhlasali, joka samalla toimii Teatterisalina.</p>
      <p>Paitsi edellämainittuja pankkeja on torin varrella Suomen Pankki (Pohjoism. Yhdyspankin talossa), Suomalainen Säästöpankki (Raatihuoneen vierellä 
        sijaitsevassa omassa talossaan) ja Maatalous-Osake-Pankki (Maanviljelijäin Kauppa Oy: n talossa).</p>
      <p>Torin varrella on myös kaupungin molemmat Apteekit sekä Rohdoskauppa. Sen varrella on edelleen kaupungin suurimmat kirjakaupat: lääninhallituksen 
        vieressä Enok Rytkösen kirjakauppa ja Kansallis-Osakepankin talossa Suomalainen Kirjakauppa Oy.</p>
      <p>Torin läntisellä sivustalla on Elokuvien teatteri Panu, eteläisellä K. Lehtovaaran tukku -ja vähittäisliike, kaupungin suurin kultasepänliike 
        (Hj. Salo) sekä K. Vainikaisen leipomo ja kahvila. Torin luoteisessa kulmassa on Maanviljelijäin Kauppa OY.</p>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-5.jpg" alt="Skogster"/>
      </div>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-6.jpg" alt="Raatihuone"/>
      </div>

      
      <h2>Isotori - Turuntie</h2>
      <p>Kun jatkamme matkaamme Isolta torilta Raatihuoneenkatua pitkin länteen päin, sivuutamme joukon erilaisia liikkeitä, joista mainittakoon vanhimmat: 
        Isakssonin, Ringvallin ja Kiviluodon kangaskaupat, F. J . Fredriksson Oy: n tukku- ja vähittäisliike, Aina Grönin kauppaliike, Hämeen Paperikauppa, 
        sekä Lindevallin jälk. leipomo ja kahvila.</p>
      <p>Viimeksi mainitun vieressä on Hämeenlinnan Puhelinosakeyhtiön keskusasema ja konttori. Keskiö, joka on uusi ja ajanmukainen, on L. M. Ericssonin 
        valmistetta v:lta 1920. Johdot ovat suurimmaksi osaksi kaapeleissa ja kaksilankaisia; eri osastot paikallisia, maaseutu- ja kaukojohtoa varten. 
        Hämeenlinnaan liittyvät seuraavat maaseutukeskusasemat: Alajoki, Eteläinen, Hattula , Hauho (Tuittula, Miehoila, Alvettula, Ilmoila, Luopioinen), 
        Janakkala (Napiala), Kalvola, Kuurila, Lammi (Koski, Kärkölä, Järvelä, Kataloinen, Poikmetsä, Sankola, Evo), Loppi (Topeno, Launonen, Läyliäinen, 
        Pilpala), Renko (Ahoinen), Toijala (Haanoja, Sotkia), Turenki (Saloinen, Mallinkainen), Tuulos (Juttila), Tyrväntö (Mälkiäinen), Urjala (Kylmäkoski, 
        Taipale, Savikoski, Honkola, Kokko, Koijärvi), Vanaja, Vuohiniemi. Kasarmikadulla, liki Raatihuoneenkatua on Lindholmin jälk. leipomo ja kahvila.</p>
      <p>Tällä osalla Raatihuoneenkatua, oikealla puolella torilta päin tullen on Raatihuoneenk. 18 eläinlääketiet. toht. Väinö Kaislan eläinsairaala, 
        perustettu v. 1922. Laitoksessa, jossa on tilaa 15 sairaalle, on ajanmukainen leikkaushuone, tarpeelliset vesi- ja pakko-pilttuut y. m.</p>
      <p>Raatihuoneenkadun päässä on puistikossa kaupungin uusi muhkea Kirjastotalo. Kirjastotalo on arkkitehti Bertel Strömmerin suunnittelema entisestä 
        venäläisestä sotilaskirkosta. Siinä on käytännössä avohyllyjärjestelmä. Eri osastot ovat: lainaus-, käsikirjasto- ja sanomalehtiosasto sekä tutkijahuone. 
        Järjestelyn alaisena on tieteellinen osasto. Kirjojen luku on yli 12,000 kpl. Kirjastotalon yläkerrassa on valtion varikkoarkisto, alakerrassa 
        verotusviranomaistm vastaanottohuone.</p>
      <p>Kirjastotalon puistosta lausuu taiteilija Juhani Vikstedt »Suomen kaupunkien vanhaa rakennustaidetta» nimisessä kirjassa: »Muista aukiopaikoista, 
        joiden varsilla vielä havaitsemme klassillisen tyylisuunnan jätteitä , huomattakoon sopusuhtainen puistikko varjoisine vaahteroineen Myllymäeltä 
        johtavan tien kaupunginpuoleisessa päässä. Ympäröivän asutuksen vuosi vuodelta muuttuessa ja saadessa yhä uudemmanaikaisen leiman on tämä tienoo 
        kaikesta huolimatta säilynyt ihmeteltävän koskemattomana, ja silmämme keksiikin siellä ainakin yhden 'Engelin' ja pari kolme muuta jalopiirteistä 
        puurakennusta samalta tai hiukan myöhemmältä ajalta. Siromuotoinen klassisismi onkin luonteenomaisempi Hämeenlinnan kuin muiden pikkukaupunkien 
        vanhemmille osille, sillä minne ikinä luomme silmämme, näemme tämän tyylisuunnan käyvän kunniakasta kamppailua muualta tulvehtivaa mauttomuutta vastaan.»</p>
      <p>Kirjastopuistikon eteläreunustalla on E. Huhdan puusepän- ja verhoiluliike, länsipuolella taas Suomalainen Yhteiskoulu (johtaja Verneri Vartia), 
        kumpikin omassa talossaan.</p>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-7.jpg" alt="Yhdyspankki"/>
      </div>

      <h2>Turuntie</h2>
      <p>Turuntien rakentamatonta alkupäätä sanotaan Kuivaksi sillaksi. Sen yli mentyämme on edessämme oikealla puolella Vanha hautausmaa ja vasemmalla 
        mielenkiintoinen muisto entisiltä ajoilta: Hämeen pataljoonan puukasarmit, jotka nytkin ovat sotaväen hallussa.</p>
      <p>Vanhaan hautausmaahan, joka nyttemmin on puistona, on m.m. haudattu tunnettu suomenkielen tutkija Eerik Kustaa Euren sekä kaupunginpuiston 
        luoja, silloinen maaherra Carl Otto Rehbinder.</p>
      <p>Puistoa vastapäätä on laaja kasarmialue, joka on nykyään Jääkäritykistörykmentin (J. T. R.) hallussa. Rykmentin kanslia on samassa talossa. Sen 
        alueella on myös armeijan pukimo. Rykmentillä on oma soittokunta.</p>
      <p>Matkailijoille huomautetaan, että Myllymäessä on Autokorjaamo ja säilytyspaikka, Bensiiniasema (Turuntie 26) ja Autokoulu.</p>
      <p>Myllymäen kaupunginosan Turuntien-puolisella rinteellä on m.m. Myllymäen kansakoulu, Sisälähetyksen talo, jossa on Vanhainkoti ja Lasten 
        päivähoitola, sekä pienehkö yleinen sauna.</p>
      <p>Turuntien oikealla puolella (n:o 4, tahi Erottajakatu n:o 1) on Suomen Elintarvetehdas, joka on ainoa paikka maassamme, missä koiraleipää valmistetaan. 
        Samalla puolella (n:o 6) sijaitsee Valtion Poliisikoirasiittola ja koirakuljettajakoulu (johtaja eläinlääkäri Johan Brüning). V. 1927 siirrettiin 
        laitos omiin rakennuksiin Parolan tien yläpuolelle, mäkeen, missä kaupungin vesitorni on. Laitoksen tarkoitus on valtion eri tarpeita varten kasvattaa 
        koiria esim. poliisi-, vankeinhoito- y.m. laitoksille sekä kouluttaa miehiä tällaisia koiria käyttämään. Turuntien 6: ssa on myöskin eläinlääkäri Brüningin 
        sairastalli koiria ja muita eläimiä varten.</p>
      <p>Ylempänä Turuntien varrella on Uusi tori, jota markkinapäivinä käytetään eläinten myyntipaikkana.</p>
      <p>Turuntie päättyy Poltinaholla tienristeyksessä, josta tiet vievät kolmeen suuntaan, vasemmalle: valtamaantie Helsinkiin, oikealle: valtamaantie 
        Tampereelle, ja suoraan eteenpäin: Poltinahontie, joka vie kasarmialueen läpi uudelle hautausmaalle y.m.</p>
      <p>Lähellä tätä paikkaa Myllymäen puolella on linja-auton pysähdyspaikka.</p>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-8.jpg" alt="Nahkatehdas"/>
      </div>

      <h2>Isosilta - Rantatori - Lahdensivu</h2>
      <p>Jos sillan päästä käännymme Rantakatua pitkin vasemmalle, on heti oikealla puolella kaupungin suurin, siisti ja paljon käytetty Alina Ahosen 
        matkailijakoti ja ruokala (puhelin 205).</p>
      <p>Kadun päässä on vasemmalla puolella Kultakeskus Oy: n suuri tehdas, jossa valmistetaan hopea-, uushopea- ja kultaesineitä, ja oikealla puolella 
        Hämeen Sähkö Oy: n toimisto; samassa talossa on V. G. Ollikaisen autokorjaamo ja -koulu.</p>
      <p>Rantakadun eteläpäässä on kaupungin Yleinen uimalaitos.</p>
      <p>Jatkamme matkaamme Ahosen kulmasta Palokunnankatua pitkin: Oikealla sivuutamme jäännöksiä n.s. »juutalaiskorttelista» ja vasemmalla puolella H:linnan 
        Meijeri Oy:n meijerin ja myymälän(uusi talo rakennetaan 1927), sekä edempänä kuuluisan Wetterhofjin työkoulun.</p>
      <p>Koulu on valtion kannattama ja valtion tarkastuksen alainen ammattikoulu kutomaopettajien ja kutojain valmistamista varten. Opetus on jaettu 
        kolmeen pääosastoon: opettaja-, kutoja- ja vaateompeluosastoon.</p>
      <p>Saavumme niin Rantatorille.</p>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-9.jpg" alt="Yhteiskoulu"/>
      </div>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-10.jpg" alt="Turuntie"/>
      </div>

      <h2>Rantatori ja Urheilukenttä</h2>
      <p>Rantatorilla, joka sijaitsee Vanajaveden rannalla kaupungin eteläisessä laidassa, on Wetterhoffin työkoulua likinnä olevalla reunustalla linja-autojen 
        asema. Siellä on myöskin bensiininjakelupaikka.</p>
      <p>Autobussit välittävät liikettä Lammille, Padasjoelle, Tuulokseen, Hauholle, Tyrväntöön, Luopioisiin, Pälkäneelle, Hämeenlinnan maaseurakuntaan, 
        Hattulaan, Toijalaan, Renkoon, Janakkalaan, Lopelle ja Forssaan. Aseman lähettyvillä on odotushuone ja virvokemyymälä.</p>
      <p>Torilla harjoitetaan arkipäiväisin kalakauppaa ja maalaisten halkokauppaa sekä kaupungin viitenä toripäivänä (»markkinoilla»), jotka pidetään 
        tammi-, helmi-, kesä-, syys- ja joulukuussa, m.m. rattaiden, rekien, aisojen, luokkien, suksien, puuastioiden, huonekalujen y.m. puisten käsityötuotteiden 
        sekä myöskin rehukauppaa.</p>
      <p>Rantatorin varrella on Palokunnantalo, jossa on sekä V. P. K : n kalustohuoneisto että vakinaisen palokunnan Paloasema. Palokunnantalon yläkerrassa 
        on V. P. K: n juhlasali.</p>
      <p>Torin läntisessä reunassa on Kreikkalaiskatolisen seurakunnan kirkko. Seurakunnan pappila on Myllymäessä (Riihikatu 12.).</p>
      <p>Vähän matkaa Rantatorilta eteläänpäin on Hämeensaaren niemellä kaupungin yleinen Urheilukenttä. Urheilukentän juoksuradan pituus 0n 333,33 metriä. 
        Niemen kärjessä on Hämeensaaren Konepaja Oy.</p>
      <p>Eteläkadun varrella urheilukentän vieressä on kaupungin Vaakahuone ja Lihantarkastamo sekä vähän edempänä rivitaloryhmä, m.m. K. K. Kariston 
        virvotusjuomatehdas, sekä edempänä nahkuriliikkeitä, m. m. ajanmukainen Hj. Emanuelsonin omistama Hämeenlinnan Nahkatehdas.</p>
      <p>Katu jatkuu pitkin Vikmanin lahden perukkaa kasarmialueelle, kaartaen sieltä Lahdensivuntienä eteläänpäin pitkin Lahdensivun kaupunginosaa Kankaantaustan 
        kylää kohti ja johtaen yleiselle Helsingin maantielle Hattelmalan harjun eteläpäässä.</p>
      <p>Tämän tien varrella on edempänä kaupungin Kunnalliskoti.</p>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-11.jpg" alt="Uimalaitos"/>
      </div>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-12.jpg" alt="Urheilukenttä"/>
      </div>

      <h2>Lyseo ja Tähtipuisto ympäristöineen</h2>
      <p>Kun kirkolta menemme Kirkkokatua pitkin pohjoiseenpäin, on vasemmalla puolella Kaupungin hotelli ja oikealla sitä vastapäätä Hämeenläänin Paloapuyhdistyksen 
        talo ja toimisto.</p>
      <p>Kaupungin hotelli on matkustajahuoneistoon nähden suurin kaupungissa. Talviseen aikaan on siellä konsertteja ja tanssitilaisuuksia.</p>
      <p>Saavumme isopuiseen, hauskaan puistikkoon, Tähtipuistoon.</p>
      <p>Sen varrella, Kirkkokadun ja Birger Jarlinkadun kulmassa, on Hämeenlinnan Työväen talo, (ent. Teatteritalo), jossa on Hämeenlinnan Työväennäyttämön näyttämö 
        sekä Hämeen Kansan konttori, toimitus, kirjakauppa ja kirjapaino. Samassa talossa on Työväen Säästöpankki.</p>
      <p>Puistikon itäisellä sivustalla on Hämeenlinnan Lyseo (rehtori J . S. Suomalainen).</p>
      <p>Lyseon komea kivitalo sijaitsee ylävällä, kauaksi näkyvällä paikalla ja on rakennettu v. 1888 arkkitehti S. M. Schjerfbeckin piirustusten mukaan silloista 
        suomalaista normaalilyseota varten. Kaunista juhlasalia koristavat prof. Eero Järnefeltin maalaama, lyseon entisen rehtorin prof. K. O. Lindeqvistin sekä 
        saksalaisen taiteilijan B. Reinholdin maalaama J. L. Runebergin muotokuva.</p>
      <p>Lyseon kirjasto sekä luonnontieteelliset kokoelmat ovat erittäin suuret ja arvokkaat.</p>
      <p>Rehbinderin aikuisen, suurta vaahteraa, niinipuuta y.m. kasvavan Tähtipuiston keskellä on vapaussodassa Tuuloksessa kaatuneen 52 saksalaisen soturin 
        graniittinen hauta- ja muistopatsas. Patsaan, joka on taiteilijain Vila Martinin ja Urho Heinäsen muovailema, pystytti Hämeenlinnan kaupunki v. 1921.</p>
      <p>Kirkkokadun ja sitä lyseon pohjoispuolella leikkaavan Lukiokadun kulmauksessa on Etelä-Hämeen Suojeluskuntapiirin piirikanslia sekä Lukiokadun puolella 
        kaupungin omistamassa suuressa puurakennuksessa valtion Alkukouluseminaari (johtaja Aukusti Salo) ja sitä vastapäätä kaupungin eläinlääkärin asunto.</p>
      <p>Seminaarin länsipuolella on suuri, osaksi puilla istutettu aukio, n.s. Gaddin puisto. Sen länsipuolella, Linnankadulla, on Postilennätinkonttori 
        (yhdistettyjen posti- ja lennätinlaitosten konttori), jossa on valtion puhelinasema sekä Linnan- ja Koulukatujen kulmauksessa Maanmittauskonttorin talo.</p>
      <p>Kirkkokadun pohjoispään jyrkästi linnaan päin viettävällä osalla on Hämeenlinnan Historiallis-Muinaistieteellinen Museo, joka perustettiin v. 1910 ja 
        avattiin yleisölle marrask. 20 p:nä 1912. Museon kaksikerroksinen kivirakennus sisältää 12 huonetta, ja esineiden luku on likim. 3000. Siinä on m.m. 
        kustavilainen huone, mahonkihuone, hämäläinen tupa, Hämeenlinnan huone, kirkollinen huone, näyttelysali arvokkaine huonekaluineen, pienempiä osastoja, 
        kuten vapaussodan aikuinen osasto, Erkkylän (parooni Munckin) asekokoelma, arkeologinen osasto, kriminaalinen osasto, suuri asekokoelma, kansatieteellisiä 
        esineitä suuri kokoelma, rahakokoelma, metsästys- ja kalastustarpeita, ajoneuvoja j.n.e.</p>
      <p>Museon aukioloajoista ilmoitetaan paikallisissa lehdissä ja ovella. Museon alapuolella on kunnan siisti ja ajanmukainen kaksikerroksinen sauna, 
        Kunnallissauna, Kirkko- ja Koulukatujen kulmassa.</p>

      <h2>Laivalaituri - Hallituskatu - Kirjastotalon puisto.</h2>
      <p>Laivalaiturilta kohoaa koko lailla jyrkästi Hallituskatu, sivuuttaen Kirkkopuiston ja torin ja päättyen yhteiskoulun kohdalla. Sen varrella Rauhakadun 
        kulmassa on Hämeen Sanomain konttori, toimitus ja kirjapaino.</p>
      <p>Vähän matkan päässä siitä on Rauhakadulla Hämeenlinnan Kirkkoherranvirasto.</p>
      <p>Hallituskadun varrella on edelleen kaupungin piirieläinlääkärin (Hallitusk. 7) ja kaupunginlääkärin (Kirkkorinne 4) asunnot.</p>
      <p>Samalla kadulla on torin ja yhteiskoulun välillä useita kaupungin vanhimpia liikkeitä, m.m. St. Häggin tapetti- ja värikauppa. Samassa talossa on 
        vapaakirkollisten rukoushuone.</p>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-13.jpg" alt="Sairaala"/>
      </div>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-14.jpg" alt="Lehtokuja"/>
      </div>

      <h2>Laivalaituri - Birger Jarlinkatu - Kaivokatu.</h2>
      <p>Laivalaiturilta kohoaa yhdensuuntaisesti Hallituskadun kanssa Birger Jarlinkatu. Se sivuuttaa Tähtipuiston ja päättyy niityille kaupungin länsipuolella.</p>
      <p>Birger Jarlinkadulla on laivalaiturilta tullessa heti oikealla puolella Hämeenlinnan Kauppakoulu (johtaja Hj. Tukiainen).</p>
      <p>Samalla kadulla on sen ja Linnankadun kulmauksessa Etelä-Hämeen Osuusliikkeen r.l. pääliike. Kutsuntatoimisto on Birger Jarlink. 24 ja samassa talossa 
        Sotilaskoti.</p>
      <p>Saman kadun ja Lukiokadun välillä (Saaristenkatu 11 — 13) on kansakoulu sekä Kasarmikadulla V. Heinäsen Kivenveistämö Oy. Veistämössä on m.m. valmistettu 
        Agricolan patsas Viipuriin, Kurtenin patsas Vaasaan, saksalaisten sankaripatsas Helsinkiin, uuden eduskuntatalon julkisivun kivityöt y.m.</p>
      <p>Kivenveistämön vieressä on Pelastusarmeijan rukoushuone.</p>

      <h2>Kaurialan kaupunginosa</h2>
      <p>Lukiokatu jatkuu Kaivokadusta peltojen läpi Kaurialan kaupunginosaan, jossa vanhan hautausmaan vieressä on arkkitehti Toivo Salervon piirustusten mukaan 
        rakennettu Hämeenlinnan tyttökoulun upea koulutalo (1927).</p>
      <p>Sen lähettyville tulee myöskin sijoitettavaksi valtion Alkukouluseminaari monine rakennuksineen; rakennustöihin ryhdyttäneen 1928.</p>
          
      <h2>Kaupungin Isosilta - Satama - Rantapuisto - Puisto.</h2>
      <p>Hauska kävelyretki on sillalta Vanajaveden länsirantaa pitkin puistoon. Rantapuisto rehevine puineen, kukkalaitteineen ja kivisine tukimuureineen 
        alkaa aivan sillankorvasta ja seuraa rantoja Hattulaan johtavan valtamaantien lähettyville saakka.</p>
      <p>Sillankorvassa on Rantakadulla Häme-lehden toimitus ja konttori sekä Suomalainen Kirjapaino Oy.</p>
      <p>Laivalaiturin edessä on odotuskatos ja virvokemyymälä. Laiturin vieressä on yleinen käymälä (toinen samanlainen on Raatihuoneen pihalla sekä 
        kolmas Urheilukentän laidassa).</p>
      <p>Rantapuiston kulmauksessa Lukiokadun päässä on Evankelis-luterilainen Rukoushuone. Rantapuistosta lähtevän Koulukadun länsipuolisessa päässä, sen 
        kadun kulmauksessa, on Kaupungin yleinen sairaala.</p>
      <p>Rantapuistossa on hauska nähtävyys: rehevä liuskalehtinen leppä, kymmenkunta vuotta sitten tuotu Ämmätsän kartanon metsästä Luopioisista. Puiston 
        vierellä on Kiutun virvoitusjuomatehdas ja sen päässä Ruotsalainen yhteiskoulu.</p>
      <p>Rantapuiston ja linnan välillä on vetisen niityn reunassa kaupungin venevalkama.</p>
      <p>Edessämme on nyt vanha Hämeen linna. Tie käy pitkin linnan kanavan vartta sivuuttaen pienen puistikon, jonka rehevät tammet ovat Rehbinderin aikuisia, 
        ja yhtyen vihdoin kaupungista suoraan Hattulaan ja edelleen Tampereelle Vanajaveden itäpuolitse menevään valtamaantiehen, Linnaniemen esikaupungin 
        kohdalla. Linnaniemi on osaksi kaupungin, osaksi maaseurakunnan aluetta.</p>
      <p>Mainituista teiden yhtymäkohdasta vie puistoon saakka puistokujanne.</p>
      <p>Puistokujan oikealla puolella on lähinnä tiilistä rakennettu, suljettu ampumarata ja sen takana laaja kasarmialue. Kasarmeihin on sijoitettu Kajaanin 
        Sissipataljoona (K. S. P.), Kenttätykistön kapitulanttikoulu (K. T. K. K.) ja Armeijan Pesula. Pataljoonalla on oma soittokunta.</p>
      <p>Tälle alueelle - Kivikasarmit 1. 'Vanhakaupunki' -, siis linnan pohjoispuolelle, oli Hämeenlinnan kaupunki sijoitettu ennen sen muuttamista 
        nykyiselle paikalleen.</p>
      <p>Saavumme sitten kaupungin kauneudestaan kuuluisaan Puistoon.</p>

      <h2>Kaupungin puisto</h2>
      <p>Puiston luoja on Hämeenlinnan entinen maaherra Carl Otto Rehbinder (1841 — 63).</p>
      <p>Ennen Rehbinderin aikaa oli »Parkki» -l. Pyövelinmäki (myös »Peevelinmäki») sangen jylhä mäki, täynnänsä kiviröykkiöitä. Käyttäen työssä pääasiallisesti 
        vankeja pani kuvernööri, joka oli harras puutarhahoidon ja maanviljelyksen ystävä, alueella toimeen suuria puhdistamis-, raivaus- ja tasoitustöitä, 
        siten muuttaen tämän villin ja pelätyn seudun ihanaksi puistoksi, joka laatuunsa, luonnonkauneuteen ja sen vaihtelevaisuuteen nähden on maamme ensimmäisiä. 
        Paikkaa pelättiin sen vuoksi, että sen lähettyvillä oli Hämeenlinnan viimeinen mestauspaikka.</p>
      <p>Kivistä tehtiin aitauksia, pengermiä ja rantasiltoja sekä jyrkänteille kiviportaita. Ennenkaikkea käytettiin kiviä kuitenkin puiston maantienpuoleisella 
        sivulla olevien keinotekoisten linnanraunioiden rakentamiseen. Suuria tasoitustöitä suoritettiin varsinkin puiston etelä- ja itäosissa.</p>
      <p>Myöskin istutukset olivat suurenmoisia. Harvinaisia puita, kuten tammia, vaahteria, lehmuksia, jalavia ja saarnia sekä koivuja y.m. istutettiin kaikkialle. 
        Pitkiä pensasaitoja järjestettiin pitkin Vanajaveden rantaa, syreenimajoja istutettiin ja huvihuoneita pystytettiin moneen paikkaan. Etelänpuolisella 
        kukkulalla olevasta senaikuisesta huvihuoneesta on laaja näköala yli linnan ja kaupungin aina Vanajan kirkolle ja Perttulaan saakka.</p>
      <p>Puisto eroitettiin Ojoisten virkatalosta v. 1848 ja liitettiin kaupunkiin.</p>
      <p>Mutta Rehbinder ulotutti puistoharrastuksensa muihinkin osiin kaupunkia. Puita istutettiin kaikkialle, ja useimmat kaupungin hauskoista puistikoista 
        ovat hänen ajaltaan.</p>
      <p>Puiston keskellä on juhlakenttä, jota ahkerasti käytetään monenlaisiin ulkojuhliin. Kenttä voidaan juhlia varten tilata Rahatoimikamarin kautta.</p>
      <p>Edelleen on Puistossa kesäiseen aikaan täydellinen ulkoravintola, jonka soittolavalla usein on sotilas- y.m. soittoa. Ravintolaan voi puhelimitse 
        tilata autoja tai ajureja.</p>
      <p>Puistoon pääsee autolla tahi ajurilla erikoista ajotietä pitkin ravintolan edustalle ja sieltä valtamaantielle. Kaikilla muilla käytävillä on, 
        samoinkuin kaupungin muissakin puistikoissa, ajo - myös polkupyörällä - kielletty.</p>
      <p>Pikkulaivat välittävät säännöllistä laivakulkua kaupungin laivalaiturin ja Puiston sekä Karlbergin välillä ja myös yksityiset henkilöt kuljettavat 
        veneillä matkailijoita Puistosta vastapäätä olevaan Karlbergiin. Maksu suoritetaan sopimuksen mukaan.</p>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-15.jpg" alt="Pyövelinmäki"/>
      </div>

      <h2>Poltinaho - Ampumarata - Hautausmaa - Hiihtomäki</h2>
      <p>Poltinahon kasarmeihin on nykyään sijoitettu Hyökkäysvaunukomppania (H. V. K., »tankit»).</p>
      <p>Kun olemme sivuuttaneet kasarmialueen, käy Poltinahon tieltä ajotie oikealle Ämmänsuon notkoon. Siinä on kaupungin Vesijohtolaitos. Kahdella 
        mäntäpumpulla, joita käyttää 15-hevosvoimainen sähkömoottori, nostetaan vesi kahta 250 mm putkea myöten, jotka ovat 21 m syvällä maanpinnasta, 
        kaupunkilaisille jaettavaksi.</p>
      <p>Samassa notkossa, Poltinahontien puoleisella rinteellä, näemme Hämeenläänin Metsästysseuran ampumatuvan, Paukkulan, ja sen notkossa olevan ampumaradan. 
        Paukkulaan on keskikaupungilta noin 2 km. Radalla voi ampumista harjoittaa kaikilta matkoilta aina 400 m saakka, samoin hirvi- ja kyyhkys- (-savikiekko) 
        ampumista. Erikoisen sopimuksen mukaan käyttää rataa myös Hämeenlinnan Suojeluskunta harjoituksiinsa ja kilpailujensa toimeenpanemiseen.</p>
      <p>Ampumaradan toisella puolella kohoaa oikealle hauska ajotie (Rehbinderin teettämä sekin) havupuuta kasvavaa, suhteellisesti korkeata ja kapeata Ahveniston 
        harjua pitkin pohjoiseen päin.</p>
      <p>Harjulta näemme syvällä harjuhaudassa sen ja hautausmaan välillä pienen, syvän Ahvenistonjärven.Seudulla on monine kapeine harjuineen ja pikkujärvineen 
        erinomaisen hauska, miltei alppimaiseman luonne. Siellä viihtyy isovuokko, ja jos onni on suotuisa, voi löytää ylen harvinaisen neidonkengän (Calypso 
        bulbosa). Harju jatkuu sitten erittäin sopivana kävelyreittinä aina Vuorentaustan koululle saakka, missä vanha maantie Hämeenlinnasta Turkuun katkaisee harjun. 
        Samaa vuorimaata jatkuu sieltä edelleen Parolan leirialueen ohitse Hattulaan, jossa se Kerälän harjun nimellä ulottuu aina Sääksmäen selälle saakka, päättyen 
        pitkään kapeaan niemeen, Ruskeenkärkeen.</p>
      <p>Ahveniston harjulla on noin 1 km matkan päässä maantieltä Hämeenlinnan Hiihtoseuran hiihtomäki Ahveniston järven rannalla, Hyppylän palstalla. 
      Hiihtomäki on rakennettu insinööri A. Lahdelmiston piirustusten mukaan. Ylärinne (puuosa) on 60 m pitkä, alarinne 70 m ja korkeus 20 m. Hyppyrin korkeus 
      on 1 metri. Käyttäjät kehuvat mäkeä hyväksi.</p>
      <p>Autolla pääsee hiihtomäkeen saakka, jolloin paluu tapahtuu hiihtomäen takana oikealle vievää, hauskaa metsän läpi maantielle kulkevaa ajotietä pitkin.</p>
      <p>Kun vielä valmistuu Hämeenlinnan Uimaseuran ajanmukainen uusi uimalaitos ravintoloineen Ahveniston erittäin kauniin, kirkasvetisen, luonnontilassa 
      olevan järven rannalle, muodostavat Ahveniston seudut Hattelmalan harjun kanssa sangen rauhallisen ja hauskan olinpaikan niin kaupunkilaisille kuin 
      matkailijoillekin.</p>
      <p>Tällä alueella on vielä ennen mainittu Valtion uusi Poliisikoirasiittola ja Koirankuljettajakoulu.</p>
      <p>Ampumaradasta jatkamme matkaamme noin 0,5 km maantietä pitkin tahi oikotietä havumetsän läpi Hämeenlinnan nykyiselle hautausmaalle. Se on korkealla 
        havumetsää kasvavalla mäellä, Ahvenistonjärven eteläpuolella. Laaja hautausmaa on monine istutuksineen ja kauniine hautapatsaineen viihtyisä ja rauhaisa 
        vainajien pyhäkkö. Monista haudoista mainittakoon muutamat monumentaaliset, taiteilijain Vila Martinin ja Urho Heinäsen luonnosten mukaan Heinäsen 
        kivenveistämössä Hämeenlinnassa valmistetut hautapatsaat ja hautakivilaitteet.</p>
      <p>Kiltin suvun sukuhauta: sfinxit portaiden molemmin puolin kuvaavat äänettömyyttä ja haudan hiljaisuutta, ja taustalla oleva korkokuva ylösnousemusta.</p>
      <p>Kalle Pietilän hautapatsas: veistos esittää vainajaa sodan aikaisessa rakuunapuvussa, vasemmassa kädessä vapauden soihtu, oikean puristaessa miekkaa, 
        (kanttori Pietilä kaatui vapaussodassa).</p>
      <p>Ananias Cavenin hautapatsas: vainajan syvää uskonnollisuutta esittää Kristus Getsemanessa.</p>
      <p>Alangon suvun sukuhauta: reliefit kuvaavat surua, lohdutusta ja rukouksen tuomaa toivoa.</p>
      <p>Nukarin suvun sukuhauta: laitteeseen kuuluvat veistokset kuvaavat inhimillisen elämän eri toimintamuotoja (maanviljelyksen piireistä)., Ne symbolisoivat 
        myös uutta, kuolemanjälkeistä elämää.</p>
      <p>Tohtori Jaczkowskijn hautalaite: laite on arvokas arkitehtooninen kokonaisuus, jota yksityiskohtien muotojen rikkaus elävöittää. Arkkitehti Kontion luonnos.</p>
      <p>Vielä mainittakoon esim. laamanni Boismanin, kuvanveistäjä John Munsterhjelmin (Pergolalaite), arkkitehti Cavenin (muotokuva), af Enehjelmin ja 
        Heleniuksen (Vestan neitsyt) hautapatsaat.</p>
      <p>Hautausmaan pääkäytävän päässä on arkkitehti Ilmari Launiin piirustusten mukaan miellyttävään ja rauhalliseen tyyliin v. 1927 rakennettu rautabetoninen 
        kaupungin Hautauskappeli. Kappelissa on m.m. myös tilava ruumiskellari ja leikkaushuone sekä sen sivussa eristetty erityinen ruumishuone oikeuslääkeopillista 
        käsittelyä varten säilytettäville ruumiille.</p>

      <h2>Karlberg - Aulanko</h2>
      <p>Hämeenlinnan kaupungin välittömässä läheisyydessä noin 3 km. matkan päässä kaupungin keskustasta, sijaitsee etelä-Hämeen huomattavin nähtävyys, joka samalla 
        on ainoalaatuinen Suomessa, nimittäin Karlbergin kartano ja siihen liittyvä Aulangon vuori näkötorneineen ja puistoineen.</p>
      <p>Oltuaan aikaisemmin usean eri suvun hallussa siirtyivät Karlbergin kartanot sekä siihen liittyvät Katajiston ja Metsänkylän kartanot oston kautta 
        v. 1883 ja 1886 eversti Hugo Standertskjöldille, joka on tämän puistoalueen luoja. Suurilla kustannuksilla raivautti hän nämä alueet, rakennutti 
        huvimajoja ja muita rakennuksia, sekä raivautti hyviä ajoteitä penikulmien pituudelta kiviseen metsään sekä jätti sitten näin saadut nähtävyydet yleisön 
        vapaasti ihailtavaksi. V. 1926 tarjosi eversti Standertskjöld näitä alueita valtiolle, mutta kun valtio niitä ei halunnut silloin ostaa, myi hän ne saman 
        vuoden lopulla Hämeenlinnan kaupungille, jonka hallussa ne nyt ovat.</p>
      <p>Kun saavutaan Karlbergiin maanteitse kaupungista Sairion kaupunginosan kautta kulkevaa tietä pitkin ja kartanon alueelle tultua kuljetaan pieni matka 
        lehmuksien reunustamaa tietä pitkin puistoalueen halki, saavutaan pian kartanon päärakennuksen luo. Se on rakennettu viime vuosisadan puolimaissa, 
        mutta on se v. 1890 perusteellisesti korjattu ja uusittu silloin vallinneen tyylin mukaisesti ja sisältää se nyt keittiöpuolta lukuunottamatta 11 huonetta 
        alakerroksessa ja 4 huonetta yläkerrassa. Aivan päärakennuksen vieressä on arkkitehti W. Aspelinin piirustusten mukaisesti rakennettu vierassuoja, 
        jossa keskellä on suuri halli ja sen ympärillä 8 vierashuonetta. Näiden rakennusten pohjoispuolella ovat laajat talousrakennukset, tallit, tilavat 
        autosuojat y.m. Samalla suunnalla ovat myös kartanon suuret kasvihuoneet, joissa on kasvatettu puutarhassa tarvittavia koristekasveja sekä sitäpaitsi 
        kaikenlaisia etelänhedelmiä, luumuja, aprikooseja, viinirypäleitä y.m. Päärakennuksen vieressä, siitä rantaan päin on vielä upea saunalaitos sekä tiilistä 
        rakennettu oma sähkölaitos kartanon tarpeisiin. Puiston keskellä, päärakennuksesta etelään on myös tenniskenttä.</p>
      <p>Karlbergin puistoalue käsittää kokonaisuudessaan 74 hehtaaria ja suurimmalla huolella on siitä hoidettu pitkin Vanajaveden rantaa oleva loivasti 
        viettävä rinne. Järven aikaisemmin soiset ja matalat rannat ovat kauttaaltaan puistoalueella reunustetut kivillä ja vaalea hopeapajurivi pitkin rantaa 
        vaikuttaa erittäin miellyttävältä varsinkin järven puolelta katsottuna. Hyvinhoidetut käytävät risteilevät puistossa kaikkialla, tasaiset vihreät 
        ruohomatot viihdyttävät silmää ja aistikkaasti järjestetyissä kukka istutuksissa erilaiset puutarhakukat kilpailevat keskenään väriloistossa. 
        Mukavat penkit tuuheiden puitten alla antavat varjoa, ja kuumimpanakaan kesäpäivänä ei helle tunnu laisinkaan kivestä rakennetussa luolamajassa, 
        joka sijaitsee päärakennuksesta rantaanpäin. Istutusalueen yläreunassa, päärakennuksesta kaakkoon päin, on kaksi kivestä rakennettua näkötornia, 
        joihin on käytetty puistoalueen perkauksessa poistettuja kiviä. Tornit kohoavat ylätasanteelta, jonne päästään holvikäytävän kautta ja on niistä 
        kaunis näköala lähimpään puistoalueeseen sekä vesireitille.</p>
      <p>Jos sitten kuljemme pitkin maantietä, jota olemme noudattaneet kaupungista tullessamme tai kuljemme pitkin rantakäytäviä pohjoista kohti, saavumme 
        pian noin 300 metrin päässä Karlbergin kartanosta sijaitsevan Katajiston päärakennuksen luo. Tämä rakennus on vanhempi kuin Karlbergin päärakennus, 
        se on peruisin 1800-luvun alkupuolelta ja edustaa puhdastyylisenä kunnialla senaikuisia herraskartanolta. Siinä on 8 huonetta alakerrassa ja yläkerta 
        on melkein kaikki suurena salina.</p>
      <p>Katajistosta voimme lähteä pyrkimään Aulankoa kohti eri teitä. Kuljemme joko hyvinhoidettua ajotietä Katajistosta kaakkoon päin tai sitten palaamme 
        äskenmainittujen näkötornien luo, josta leveää kävelytietä myöten pääsemme samaan päämäärään. Koko ajan olemme kulkeneet hyvinhoidetussa luonnonpuistossa, 
        jossa mahtavat männyt ja kuuset humisevat ja maa on kauttaaltaan raivattu ja tasoitettu. Matkalla sivuutamme rakennuksia, joissa aikaisemmin pidettiin 
        fasaaneja, riikinkukkoja y. m. ja vuoren juurella kohtaa silmäämme hymyilevä näky: molemmat Joutsenlammet. Ne ovat kaksi tekojärveä, jotka eversti 
        Standertskjöld on kaivattanut osittain kaunistukseksi ja osittain vesisäiliöiksi kartanon alueen kastelemista varten.</p>
      <p>Tekojarvien luo päästyämme olemme jo huomattavasti nousseet Vanajaveden tasosta lukien ja nyt alkaa nousumme käydä nopeammin, kunnes olemme Aulangon 
        vuorella ja silmäimme eteen avautuu maamme kauneimpien maisemien joukkoon luettava näky. Vuori, joka on n. 160 m. merenpinnasta ja kohoaa 80 m korkeuteen 
        alapuolella olevasta Aulangon järvestä, on aikoinaan palvellut samanlaisena suojalinnoituksena kuin useat muutkin maamme jyrkähköt mäenkukkulat. 
        Aulanko olikin puolustuslinnaksi sangen sopiva, kun vuoren itä - ja etelärinne oli jyrkkä. Länsi- ja luoteispuolelle oli rakennettu kivivalli, joka 
        tietysti vaaran uhatessa vielä vahvistettiin murtohakkauksella. Kansantarinan mukaan on Aulangon vuorella aikaisemmin ollut rakennuksia, ja näiden 
        tarinain johdosta päätteli aikoinaan (v. 1775) rovasti N. Idman, että Aulangon vuorella ovat muinoin Suomen hallitsijat asuneet; johtaapa hän Aulangon 
        nimenkin kreikkalaisesta sanasta aula (kuninkaan linna). Nyt kohoaa vuoren laella suuremmoinen näkötorni, 30 m. korkea, joka on rakennettu v. 1906 
        harmaasta kivestä arkkitehti W. Aspelinin piirustusten mukaisesti. Ihana näköala aukenee eteemme jo vuoren laelta juuri vuoren reunalle rakennetusta 
        huvimajasta, mutta tahdomme nähdä kaikki yhtaikaa ja lähdemme kiipeämään torniin. Ensin kiertävät portaat ulkopuolella ja niiden päätyttyä on koko tornia 
        kiertävä lepotaso. Siitä siirtyvät portaat tornin sisään ja nousevat ne niin lepotasojen katkaisemina ja mukavina tornin huippuun saakka. Sinne 
        saavuttuamme emme kadu sitä vaivaa, joka kiivetessämme on ollut, sillä sieltä avautuva näky korvaa sen moninkerroin. Maassamme on näkötorneja, joista 
        ehkä näkee laajemmalle kuin Aulangolta, mutta niin vaihtelevaa näköalaa ei avaudu mistään. Heti vuoren juurella idän puolella on runollisen kaunis 
        Aulangon järvi metsäisten rantojen ympäröimänä ja melkein aina tyynenä. Sen takaa avautuvat silmänkantamattomat metsät Hauholle ja Tuulokseen päin. 
        Pohjoisessa näemme Vanajavesistön kapean reitin ja sen rannoilla viljelysseutuja, joissa on monisatavuotisen kulttuurin leima. Lännessä ja etelässä 
        kohtaa silmämme Hämeen vanhan linnan ja kaupungin. Kaakossa näkyy kaunis Katumajärvi osaksi jyrkkine ja metsäisine rantoineen ja kaikkialla viljelyksiä 
        ja rakennuksia vaihdellen tuuheiden metsien kanssa.</p>
      <p>Kun laskeudumme alas, voimme virkistäytyä kahvilla tai virvokkeilla vuorella sijaitsevassa ravintolassa, jonka jälkeen lähdemme laskeutumaan alas 
        järvelle mutkaisia graniittiportaita pitkin. Niiden alapäässä on vuoreen louhittu syvennys ja sinne on sijoitettu verraton veistos, jota kannattaa 
        käydä katsomassa, nim. Rob. Stigellin muovailema graniittinen karhuperhe.</p>
      <p>Jos olemme tilanneet auton itsellemme, pääsemme sangen mukavasti vuoren juurelta taas takaisin Karlbergiin ja kaupunkiin, mutta kävellenkin kulkee 
        matkan mielellään tuuhean ja rauhallisen puistometsän kautta.</p>
      <p>Karlbergin ja Katajiston päärakennukset sekä Aulangon vuorella oleva ravintola ovat vuokratut Matkailukeskus Aulanko—Karlberg O.Y:lle, joka niissä 
        harjoittaa ajanmukaista hotelliliikettä. Erinomaisten niin luonnonmukaisten kuin ihmiskäden tekemien nähtävyyksien vuoksi onkin Karlberg - Aulanko 
        mitä sopivin matkailukeskukseksi, varsinkin kun se sijaitsee niin lähellä maamme liikekeskuksia, ettei lyhempikään aika estä tekemästä virkistysmatkaa 
        tänne Suomen luontoa ja viljelystä samalla kertaa edustavalle seudulle. Karlbergin ja Katajiston tilavat suojat voivat majoittaakin yli 50 
        hotellivierasta, ja on laitos niin järjestetty, että se pystyy ottama an vastaan kansainvälistäkin matkailuliikennettä. Matkailukeskus O.Y. jatkaa 
        toimintaansa läpi vuoden ja keskittää talvitoimintansa varsinkin talviurheilun harrastajia varten, johon Aulangon vaihteleva maasto antaa erinomaisen 
        tilaisuuden.</p>
      <p>Karlbergin ja Aulangon puistoalueet ovat hotelliliikenteestä riippumatta yleisön vapaasti käytettävissä; Aulangon torniin nousemisesta on maksu 2 mk. 
        hengeltä, mutta pääsevät lapset vanhempainsa kanssa ilmaiseen.</p>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-16.jpg" alt="Karlberg"/>
      </div>

      <h2>Maantiematka Hämeenlinna - Vanaja - Karlberg - Hattula</h2>
      <p>Paitsi Tampereen valtamaantietä pitkin (linnan ohitse) ja Parolan kautta voi Hämeenlinnasta maanteitse päästä Hattulaan kolmattakin tietä, nimittäin 
        Vanajaveden itäpuolitse Karlbergin kautta.</p>
      <p>Lähtiessämme kulkemaan kaupungista Viipurintietä pitkin saavumme rautatien yli johtavalle sillalle, josta valtamaantie vie lähellä olevaan Idänpään 
        kylään Vanajassa.</p>
      <p>Idänpäästä pääsee Vanajaveden itäpuolitse Katisten ja Harvialan kartanoiden ohitse Turenkiin.</p>
      <p>Harvialan kartanossa, joka on Suomen suurimpia, on paljon nähtävyyksiä maanviljelyksen, puutarhahoidon y.m. aloilla. Kartanossa on m.m. suuri 
        fasaanien kasvatuslaitos. Matkalla Harvialaan voi poiketa Vanajan kirkolle. Kirkko on kivestä; vanhin osa, sakaristo, ehkä jo v:n 1250 vaiheilta 
        1. Birger Jarlin ristiretken ajoilta, itse kirkko 1400-luvun lopulta. Hauskoja nähtävyyksiä on runsaskoristeinen, kaunis puusta veistetty alttarikaappi 
        flanderilaista tekoa (luultavasti keskiajan viimeisiltä vuosilta), kolme kirkon lattialta seinustalle nostettua vanhaa hautakiveä ja R. V. Ekmanin 
        v. 1822 maalaama alttaritaulu (»Kristuksen kirkastus»).</p>
      <p>Idänpään kylän lähettyvillä, 2 km:n päässä kaupungista, on luonnonihana Katumajärvi, jonka rannalla on lukuisia huviloita. Järven itäpuolella on 
        korkea erittäin kaunisnäköalainen Kappolan vuori; länsipuolella, lähellä edellä mainittua maantietä, muinaislinnan, Mantereenlinnan, jäännöksiä. 
        Idänpään ensimmäisestä tienristeyksestä lähtee tie Hätilän kartanon vieritse vasemmalle Sairion kaupunginosan läpi Karlbergia kohti. Sivuutamme 
        Hämeenlinnan höyrysahan, Tulitikkutehtaan ja Hienonahkatehtaan ja saavumme maan kuuluun Karlbergin kartanoon.</p>

      <h2>Maantiematka Hämeenlinna - Pälkäne - Kangasala - Tampere.</h2>
      <p>Ennenkuin rautatien rakentamista jatkettiin Hämeenlinnasta pohjoiseen päin (Tampereelle v. 1876), oli yllämainittu valtamaantie erinomaisen paljon 
        käytetty; olihan se tärkein liikennereitti etelä-Suomesta Pohjanmaalle.</p>
      <p>Matkailijoille tarjoo puheenaoleva reitti sangen paljon sekä historiallisessa että muinaistieteellisessä suhteessa merkillisiä nähtävyyksiä, 
        puhumattakaan siitä, että se voi antaa varsinkin ulkomaalaisille varsin täydellisen ja monipuolisen kuvan Hämeen kauniista ja vaihtelevasta luonnosta.</p>
      <p>Kasarminkadun pohjoispäätä ajamme Tampereentietä pitkin pohjoiseen päin Hattulaa kohti. Sivuutamme Linnaniemen alueen, Hämeen linnan, kasarmit ja 
        Puiston ja pysähdymme vasta Hattulan vanhan kirkon kohdalla, n. 8 km: n päässä kaupungista.</p>
      <p className="my-0"><strong>Hattulan vanha kirkko:</strong></p>
      <p>Tästä Hämeen ehkä merkillisimmästä muinaismuistosta lausuu tri Rapola »Häme»- teoksessaan: »Edessämme on vanhus, jonka hartioilla 
        lepää vuosia melkein niin paljon, kuin kristinuskolla on Hämeessä ikää.»</p>
      <p>Kirkko on 1300-luvulta ja on rakennettu tiilistä, eroten siinä suhteesta keskiaikaisista vanhoista kirkoistamme, jotka tavallisesti olivat harmaasta 
        kivestä tehtyjä.</p>
      <p>Kirkko oli katolisella ajalla suuressa arvossa pidetty pyhiinvaelluspaikka. Sen sisäseinät ovat koristetut runsailla, mielenkiintoisilla katto- ja 
        seinämaalauksilla (1400-luvulta), jotka esittävät tapauksia vanhasta ja uudesta testamentista.</p>
      <p>Sen muinaisesta sisustuksesta on meidän aikoihimme säilynyt vain hyvin vähän: puuveistoksia, vanha saarnatuoli, alttarikaappi, iso puinen kastemalja, 
        rautaisia kynttiläjaikoja, 2 vanhaa hautakiveä y.m.</p>
      <p>Kirkon vanhassa saarnatuolissa on vuosiluku 1550 sekä Björn Leijonin ja hänen vaimonsa Karin Stjernsköldin vaakunat ja nimikirjaimet. Sitäpaitsi 
        säilytetään siellä useita aatelisten vaakunakilpiä 1600:luvulta.</p>
      <p>Kirkon edustalla oleva kellotapuli, jonka alaosa on harmaasta kivestä ja yläosa puusta, on rakennettu v. 1813.</p>
      <p>Kirkko on nykyään täydelleen uudistettu ja on sen vartijalta saatavissa kirkkoa selostava opas.</p>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-17.jpg" alt="Hattulan vanha kirkko"/>
      </div>
      <p>Hattulasta jatketaan matkaa Sääksmäelle. Sivuutamme Hattulan uuden kirkon Vanajaveden yli vievän Mierolan sillan lähettyvillä. Kuljettuamme Vermasvuoren 
        poikki liikumme aluksi metsäseuduilla, kunnes Sääksmäelle johtavalle, kapeahkolle kylätielle poikettuamme eteemme alkaa avautua näköaloja Vanajaveden 
        selille ja lahdille. Seudulla on täällä ja edempänäkin pitkin matkaa hautaraunioita ja polttokalmistoja, joista on löydetty esineitä viikinkikaudelta, 
        kansainvaellusajoilta ja vähän roomalaiselta rautakaudelta (Pälkäne, Värilä).</p>
      <p>Matkalla ajetaan Ritvalan vanhanaikaista kyläkujaa pitkin. Kylässä on vietetty keväisin helluntaiaikana helkajuhlia helkavirsineen, helkavalkeineen 
        ja keskiaikaisista kirkollisesta menoista alkunsa saaneille kulkueineen.</p>
      <p>Sääksmäellä on matkan merkillisimpiä nähtävyyksiä muinaisaikainen linna Rapolan harjulla. Harjulle pääsee parhaiten Voipaalan kartanon kohdalta. 
        »Harjua, joka kohoaa n. 70 m yli Vanajaveden, ympäröi enimmäkseen hyvin maatunut valli. Sen pituus on lähes 1 km. Se on ollut puisen rintavarustuksen 
        alustana, kuten siinä säilyneistä ojanteista ja ulkoilemista voi päätellä. Harjun ulkorinteitä on monin kohdin jyrkennetty. Hyvänä suojana linnassa 
        oleileville pakolaisille ja karjalle on ollut iso ja syvä, vallikehän sisäpuolelle jäävä luontainen harjuhauta. Harjulla on kivikasoja, ehkä 
        heittokivivarastoja, ja kiviliesiä, joista voi nähdä, että linna on ollut käytännössä arvatenkin esihistoriallisen ajan loppuaikoina. Luonteeltaan on 
        Rapolan linna muihin samanaikuisiin varustuksiimme verrattuna poikkeuksellinen. Suomen muinaislinnat ovat nimittäin tavallisesti jyrkillä kallioilla ja 
        vallit niissä ovat luonnonkivistä koottuja. - Rapolan harjun liepeillä, varsinkin järvenpuolisella, on paljon hautaraunioita.»</p>
      <p>Jatkamme matkaa Pälkäneelle. Tie käy Kostian virran poikki. Olemme tällöin paikalla, missä 6 p: nä lokakuuta 1713 oli toinen ratkaisevista taisteluista 
        ison vihan aikana.</p>
      <p>Sivuutamme Pälkäneen vanhan, keskiaikaisen kirkon rauniot ja Iharin kosken, jonka kautta Längelmävesi vuosina 1600—1830 laski Pälkäneveteen, 
        ja saavumme sitten maankuululle Kangasalan harjulle.</p>
      <p>Harjun katkaisee Kaivannon salmi, joka muodostui v. 1830, kun vesi särki kanavarakennuksen padot. Keisarinharjulle voi ajaa autolla.</p>
      <p>Kangasalan nähtävyyksistä mainittakoon Pohtion kivikautinen asuinpaikka, missä nähdään tohtori S. Pälsin v. 1921 ja 1923 esillekaivamia kiviliesiä, 
        Längelmäveden vanha, jo v. 1600 kuiville jäänyt lasku-uoma Sarsa y. m.</p>
      <p>Kangasalta jatkuu matka Kangasalan kirkon (v:lta 1765) ohitse ja Messukylän kautta Tampereelle.</p>

      <h2>Maantiematka Hämeenlinna - Toijala - Lempäälä - Tampere</h2>
      <p>Matkan Hämeenlinnasta Tampereelle voi suorittaa myöskin Vanajaveden länsipuolitse. Tämä retki ei kuitenkaan tarjoa niin paljon mielenkiintoista 
        kuin edellinen.</p>
      <p>Poltinahon tienristeyksestä kuljemme oikeanpuolista tietä Hämeenlinnan esikaupunkien »Rinkelinmäen» ja »Pullerinmäen» kautta Parolaa kohti.</p>
      <p>Tie käy nyt Parolan ohitse. Siellä on suuri Parolan leirialue noin 7 km:n päässä kaupungista. Parolan nummi oli jo Ruotsin vallan aikana sotaväen 
        harjoituskenttänä. Monet Suomen historiaan liittyvät merkkimiehet ovat siellä käyneet, m,m. Kustaa III (1783), Kustaa IV Adolf, Aleksanteri I (1819) 
        ja Aleksanteri II (1863).</p>
      <p>Aleksanteri II:n käynti Parolassa oli suurimerkityksellinen historiallinen tapaus siinä suhteessa, että hänen puheilleen pääsi siellä J. V. Snellman. 
        Seurauksena tästä oli, että suomenkieli julistettiin viralliseksi kieleksi ruotsinkielen rinnalla.</p>
      <p>Tämän käynnin johdosta pystytti suomalainen upseeristo muistoksi Parolan kentälle pronssisen leijonan. Leijona, joka on harmaakivijalustalla, 
        on taiteilija Sjöstrandin valmistama. Patsasta ympäröi puistikko.</p>
      <p>Parolan leirikenttää käytetään nyt niinkuin ennenkin sotaväen harjoituskenttänä ja leiripaikkana.</p>
      <p>Nykyaikaisia laitteita on Etelä-Hämeen Suojeluskuntapiirin Keskusampumarata. Rata on Hämeenlinnassa olevien garnisoonijoukkojen ja piirin yhteinen 
        ja sijaitsee n. s. Pikku-Parolan alueella valtion maalla. Edelleen siellä on Sotilaskotiyhdistyksen rakentama uusi sotilaskoti ja uusi hauska 
        sotilaskasino y.m.</p>
      <p>Parolasta voi jatkaa matkaansa joko Mierolaan, siis edellä mainitulle reitille, tahi Toijalan ja Lempäälän kautta Tampereelle.</p>

      <h2>Maantiematka Hämeenlinna - Janakkala - Helsinki ja Hämeenlinna - Renko - Turku</h2>
      <p>Poltinahon tienristeyksestä vie vasemmalle päin lähtevä valtamaantie Janakkalaan, josta edelleen Hausjärven kautta Helsinkiin.</p>
      <p>Noin 1 km:n matkan päässä risteyksestä kääntyy oikealle päin maantie, joka Luolajan kylän kautta jatkuu Renkoon ja sieltä edelleen 
        Tammelan y. m. kautta Turkuun.</p>
      <p>Noin 3 km:n päässä kaupungista kohoaa maantie Hattelmalan harjulle, josta J. L. Runeberg runoilee Vänrikki Stoolin tarinain runossa »Vänrikin 
        markkinamuisto»; »Hämeenlinna, ensi kerran kun sun kuutamossa näin Hattelmalan harjanteilta, tuo ei mene mielestäin!»</p>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-19.jpg" alt="Hattelmalan harju"/>
      </div>
      <p>Tällä harjulla aikoi C. N. af Klercker v. 1808 pysähdyttää venäläisten sotajoukkojen etenemisen ja rakennutti sitä varten harjun länsipäähän siellä 
        vielä nähtävinä olevat vallit.</p>
      <p>Harju kuuluu siihen harjujonoon, joka kulkee Vanajan vesistön vartta sen lounaispuolella ja jonka yhteisenä nimenä on Hattelmalanharju. Harju kohoaa 
        monessa paikassa hyvinkin korkeaksi, jyrkänteiseksi ja teräväksi harjuksi, jonka laella esim. puheenaolevalla paikalla maantie juuri mahtuu kulkemaan. 
        Paikoin esiintyy jono yhtenä ainoana harjuna, mutta enimmäkseen on niitä useita rinnakkain syvien »lukkojen» toisistaan eroittamina.</p>
      <p>Hattelmalan harjulta (129,5m.) on erittäin kaunis ja laaja näköala yli kaupungin ja ympäristön. Harjanteelle on Hämeenlinnan Matkailijayhdistys tien 
        viereen rakennuttanut yksinkertaisen suojakatoksen.</p>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-18.jpg" alt="Hattelmalan harju"/>
      </div>
      <p>Noin 2 km harjusta eteenpäin kääntyy ajotie valtion omistamaan Perttulan (tylsämielisten) kasvatuslaitokseen. Laitos on kauniilla, ylävällä paikalla 
        harjualueella. Päärakennuksen rakensi aikoinaan, v. 1855, kuvernööri O. Rehbinder itselleen kesäasunnoksi ja muutti sinne vakituisesti asumaan v. 1863, 
        jolloin otti eron kuvernöörinvirastaan. Siellä hän kuoli v. 1873.</p>
      <p>Janakkalan nähtävyyksistä mainittakoon Hakoisten linnanmäellä, lähellä Hakoisten kartanoa, olevat rakennuksen perustusten jätteet aikaisemmalta 
        keskiajalta (1200-luvulta). Tässä oli se linna — »vanha Hämeenlinna» — jonka Birger Jarl ensin rakennutti valloituksensa turvaksi. Kaivauksista 
        päättäen on vuorella ollut suunnikkaan muotoinen päärakennus vuoren lakea piirittävän manttelimuurin laidassa. Tähän on liittynyt esilinna kehämuureineen, 
        ja sen edessä on ollut vallihauta ja valli.</p>
      <p>Kirkon mäenrinteessä on muinainen uhrilähde, joka on tunnettu »Piispanlähteen» ja »Laurinlähteen» (kirkon nimikkopyhimys) nimellä.</p>

      <h2>Maantiematka Hämeenlinna - Tuulos - Hauho ja Tuulos - Padasjoki.</h2>
      <p>Viipurintie jatkuu maantienä Tuulokseen. Muutama km Heinäkankaasta pohjoiseenpäin kääntyy Hauhon tie vasemmalle Hauhon kirkonkylään, josta edelleen 
        Ison-Roineen ja Hauhonselän välitse sekä Ilmoilanselän ja Pinteleen ohi Pälkäneelle. Matka Hämeenlinnasta Hauhon kirkolle on kesäiseen aikaan 35 km. 
        Hauhon seudut ovat tunnetut luonnonkauneudestaan. Hauhon kirkko on rakennettu harmaasta kivestä keskiajalla, luultavasti 1300-luvulla.</p>
      <p>Toinen tie käy pohjoiseen Syrjäntaan kylään Tuuloksessa. Kylässä on tienristeys, josta lähdetään vasemmalle Luopioisiin ja oikealle Lammin pitäjään 
        sekä sen kautta Padasjoelle sekä sieltä edelleen Kuhmoisten, Jämsän ja Korpilahden kautta Jyväskylään. Padasjoelta on jokapäiväinen laivakulku Lahteen. 
        Tuuloksen kivikirkko on rakennettu jo n. 1300-luvulla, Lammin kivikirkko v. 1444. Lammilla on Evon metsäkoulu kruununpuistoineen ja kalastuskoeasema, 
        Padasjoella kaupungin omistama Turvan (Verhon) kartano.</p>
      
      <h2>Vesireitti Hämeenlinna - Valkeakoski - Luopioinen</h2>
      <p>Hämeenlinnan kaupunki sijaitsee Suomen järviylängön länsiosassa, Kokemäenjoen vesistön eteläisemmän reitin Vanajaveden varrella.</p>
      <p>Reitti alkaa etelässä lähellä Suurta-Salpausselkää ja kiertelee monissa mutkissa pohjoiseen päin. Vielä Hämeenlinnan tienoolla se on kapea ja laajenee 
        vasta pohjoisempana suureksi Vanajan- l. Sääksmäenseläksi.</p>
      <p>Harjujono alkaa suuresta reunamoreenistamme, katkasee vesireitin Turengin lähettyvillä ja seuraa siitä alkaen reittiä sen länsipuolella aina 
        Vanajanselkään saakka. Tämä jono sivuuttaa Hämeenlinnan ja muodostaa sen länsipuolella mainitut kauniit Hattelmalan - Ahveniston metsäiset harjut.</p>
      <p>Hedelmällinen savikerros peittää suurimmaksi osaksi vuoriperää Harvialan kartanon tienoolta Vanajanselkään saakka. Vanajaveden varrelle on sen vuoksi 
        kehittynyt jo hyvin aikaisin viljelys- ja kulttuurialue, joka o
        n Hämeen vanhimpia.</p>
      <p>Vanhojen herraskartanoiden sekä talojen viljavat vainiot ja rehevät puutarhat, lukuisat huvilat, metsäiset niemet ja vihertävät lehdot hivelevät silmää 
        molemmin puolin laivareittiä, joka sinisenä siteenä liittää ympäristön kaupunkiinsa.</p>
      <p>Uudet ajanmukaiset laivat (»Hämeenlinna» ja »Tyrväntö») välittävät tällä matkailijoille erittäin hauskalla reitillä liikennettä pitkin vesistöä 
        pohjoiseen päin aina Luopioisiin saakka. Säännöllistä laivaliikennettä Hämeenlinnasta eteläänpäin ei ole. Pikku laivat välittävät liikennettä 
        Hämeenlinna - Karlbergin välillä.</p>
      <p>Lähtiessämme kaupungista jollakin niistä laivoista, jotka välittävät liikennettä pohjoiseen, sivuutamme ensiksi Rantapuiston. Sen jälkeen kohoaa vasemmalla 
        Birger Jarlin linna sammaltuneine muureilleen, oikealla puolella Eklöfin (Porvoosta) Hämeenlinnan Höyrysaha.</p>
      <p>Sahan pohjoispuolella näkyy Hienonahkatehdas sekä metsikössä Sairion Keuhkotautiparantola, jonka omistaa Vähävaraisten keuhkotautisten avustamisyhdistys. 
        Sivuutamme sitten Puiston ja kuljettuamme uuden rautatiesillan alitse vasemmalla joukon kaupunkilaisten huviloita ja oikealla Karlbergin ja Katajiston.</p>
      <p>Kun on päästy kapean Kirstulan salmen lävitse, laajenee vesistö Hattulanseläksi, jonka molemmin puolin on useita kartanoita. Niinpä ovat vasemmalla 
        Kirstulan ja Herniäisten kartanot, oikealla Ellilän, Mattilan, Santin ja Ahlbackan kartanot. Vasemmalla on edelleen Hattulan vanha kirkko. Hattulanselkä 
        kapenee nyt yhä soukemmaksi. Vasemmalla on täällä Saarelan kartano ja oikealla Poransaaren niemi monine huviloineen. Siinä missä reitti äkkiä kääntyy vasemmalle 
        Mierolan kylää kohti, on oikealla Hattulan pappila aivan järven rannalla ja ylempänä Koreilan kartano.</p>
      <p>Saavuttuamme Mierolan salmeen näkyy sen vasemmalla rannalla Alhaisten kartano ja salmen molemmin puolin Mierolan kylä.</p>
      <p>Mierolan uuden sillan toisella puolella on vasemmalla Yentolan rustitila ja oikealla puolella Hattulan kirkko (rak. 1848—57).</p>
      <p>Vasemmalla on edelleen Merven kylä, oikealla Vesunnan vanha säteritila. - Saavumme vihdoin kauniiseen Lepaan salmeen.</p>
      <p>Salmen varrella on nähtävyys: suuri Lepaan puutarha-opisto, ja vähän pohjoisempana Lahdentaan kartano sekä vasemalla Suontaan kartano. Vihdoin aukeaa 
        eteemme laajana ja komeana iso Vanajan- eli Sääksmäenselkä.</p>
      <p>Siinä missä harjut päättyvät Vanajanselkään, muodostuu erinomaisen luonnonihana, pohjoiseen pistävä, pitkä ja kapea niemeke, Ruskeenkärki, jossa on 
        Hämeenlinnan Kansallis-Kerhon paviljonki.</p>
      <p>Iso Vanajavesi tarjoo ylipäänsä matkailijoille kaikkia niitä nähtävyyksiä, jotka ovat ominaisia suurille sisämaanjärvillemme. Lukuisat saaret ja luodot, 
        metsäiset niemet, rannoilla pilkoittavat huvilat, talot ja kylät tekevät matkan hauskaksi ja vaihtelevaksi.</p>
      <p>Keskellä Vanajanselkää on metsätön Pyterin saari, jossa Hattulan , Tyrvännön, Sääksmäen ja Kalvolan pitäjät yhtyvät.</p>
      <p>Vanajanselän pohjoispäässä on ennen mainittu Sääksmäen kirkko ja Rapolan harju.</p>
      <p>Vanajan selältä jatkuu matka Rautun selän kautta Valkeakosken kauppalaan.</p>
      <p>Valkeakosken kanavan kautta kuljettuamme tulemme sitten harvinaisen kirkasvetiseen Mallasveteen, josta edelleen Pälkäneen kirkon kohdalla Kostian joen kautta 
        Pälkäneveteen ja Luopioisiin.</p>
      <p>Tällä reitillä kulkevat laivat poikkeavat m.m. seuraaviin laivalaitureihin: Karlberg, Poransaari, Saarela, Mierola, Mervi, Lepaa, Suontaka, Lahdentaka, Lahinen, 
        Pohja, Pappila, Toijala, Rauttu , Salo, Valkeakoski, Äimälä, Onkkaala, Luikala, Töyräniemi, Salmentaka, Sappee ja Aitoo.</p>
      <p>Pälkäneen kirkolta on kautta vuoden säännöllinen linja-autoliike Tampereelle.</p>
      <div className="flexWrapper">
        <StaticImage className="mx-auto my-3 rounded shadowed" src="../images/content/guide27-img-20.jpg" alt="Valkeakoski"/>
      </div>

      <h2>Tyrvännön reitti</h2>
      <p>Paitsi edellämainittua Luopioisten reittiä välittää »Tyrväntö» laiva liikennettä toiseenkin suuntaan, nimittäin Tyrväntöön.</p>
      <p>Tyrvännön reitti kääntyy Ruskeenkärjen vastapäätä olevan kallioisen Vanajaniemen kohdalta oikealle, sivuuttaa kauniin Puisniemen kärjen ja kulkee siitä kapean 
        salmen kautta, jonka rannoilla sijaitsee huviloita, Suotaalan kylään. Kylän läheisyydessä on Tyrvännön puukirkko (v. 1803). Reitin varrella ovat edelleen Siukolan, 
        Retulan, Monaalan ja Mälkiäisten laiturit. Reitti loppuu Hakalan talon kohdalla.</p>
    </Layout>
  )
}
export const Head = () => <title>A Th. Böök, Matkailuopas, 1927</title> // metadata

export default MatkailuopasPage