import * as React from "react"

import Layout from "../components/layout"

import Image from "react-bootstrap/Image"

import "../styles/base/global.css"

import divider from "../assets/divider.png"
import imgFrontPage from "../images/content/guide15/frontpage.jpg"
import img1 from "../images/content/guide15/img-1.jpg"
import img2 from "../images/content/guide15/img-2.jpg"
import img3 from "../images/content/guide15/img-3.jpg"
import img4 from "../images/content/guide15/img-4.jpg"
import img5 from "../images/content/guide15/img-5.jpg"

const MatkailuopasPage = () => {
  return (
    <Layout titleText="Matkailuopas vuodelta 1915">

      <Image className="centeredImage" src={imgFrontPage} alt="Matkailuoppaan etusivu"/>

      <p className="caption">H:linnan Matkailijayhdistys</p>
      <p className="caption">Hämeenlinna 1915, Arvi A. Karisto</p>
      <p className="caption">Hämeenlinnan Kaupunginkirjasto</p>
      
      <Image src={divider} className="dividerStyle" />

      <h2>Hämeenlinna</h2>
      <p className="initialCap">Hämeenlinnan kaupunki sijaitsee Vanajaveden rannalla, Helsingistä Tampereelle kulkevan rautatien varrella. Kaupungin perusti Ruotsin kuningattaren 
        Kristiinan käskystä vuonna 1638 Suomen silloinen kenraalikuvernööri Pietari Brahe niemekkeelle Birger Jaarlin vuonna 1249 
        rakentaman Ruununporin eli Tavaslborgin linnan pohjoispuolelle. Tammikuun 19 päivänä 1639, antoi Pietari Brahe Hämeenlinnalle, joka alkuaan oli aiottu kauppakaupungiksi 
        sisämaahan, kauppalanoikeudet sekä heinäkuun 4 päivänä 1650 kaupunginoikeudet, jolloin kaupungista, mikä alkuaan oli kuulunut Vanajan seurakuntaan, muodostettiin 
        eri kirkollinen seurakunta.</p>
      <p>Kaupungin ensimmäinen kirkko valmistui vuonna 1652; se oli puusta rakenneltu korkeine lautakattoineen ja sijaitsi edellämainitun niemekkeen pohjoispäässä lähellä rantaa. 
        Kellotapuli, jossa oli ainoastaan yksi pienempi kello, sijaitsi jonkun matkan päässä kirkosta eteläänpäin ja näiden välillä oli kaupungin koulutalo. Kaupungin pappila oli 
        nykyisen Puiston puutarhurin asunnon kohdalla ja silta johti yli salmen nykyisen Puistolan kansakoulun alapuolella. Kaupungin pääkatu kulki pappilasta linnalle asti !eviten 
        linnan pohjoispuolella pieneksi toriksi. Kaupunkilaiset olivat ylipäänsä köyhää väkeä, joiden pääelinkeinona oli kalastus ja viinanvalmistus, jota viimeksimainittua he 
        suurimmaksi osaksi myivät linnaan sijoitetulle sotaväelle. Kun kaupunkilaiset köyhyytensä takia eivät voineet pitää kunnossa kaupungin yleisiä rakennuksia ja nämät rappeutumistaan 
        rappeutuivat, oli hallitus pakotettu usein myöntämään kaupunkilaisille vapaavuosia ruununverojen maksamisesta ehdolla, että kaupunkilaiset vapaavuosien aikana korjauttivat tahi 
        rakensivat uudelleen jonkun kaupungin yleisistä rakennuksista. Sen ajan tavan mukaan ympäröi kaupunkia korkea tulliaita, jonka pohjoispäässä pappilan alapuolella oli tulliportti, 
        minkä kautta päästiin kaupunkiin, ja jossa jokaisesta kaupunkiin tuotavasta tavarasta maksettiin tulli.</p>

      <Image className="centeredImage" src={img1} alt="Juutalaiskortteli"/>

      <p>Isonvihan aikana v. 1713 ottivat venäläiset sotajoukot haltuunsa linnan ja kaupungin sekä polttivat pappilan ja suuren osan kaupunkia, jonka asujamet pelosta olivat muuutaneet 
        maaseudulle. Pidettyään kaupunkia ja linnaa hallussaan seitsemän vuotta, jättivät venäläiset sotajoukot ne takaisin Ruotsin hallitukselle v. 1720, jonka jälkeen maaseudulle paenneet 
        kaupunkilaiset palasivat kaupunkiin sekä alkoivat uudelleen rakentamaan poltettuja ja häviteltyjä talojaan. Tuskinpa oli kaupunki taasen saatu kuntoon, kun jo kesäkuun 8 päivänä 1739, 
        jolloin useimmat kaupungin porvareista olivat lähteneet Turkuun suolaa ostamaan, tulipalo hävilli kaupungin 33 rakennetusta talosta 24 sekä kaupungin raatihuoneen.</p>
      <p>Pikkuvihan aikana ottivat venäläiset sotajoukot taasen vuonna 1742 haltuunsa linnan ja kaupungin, joiden viranomaiset olivat katsoneet turhaksi ryhtyä näitä puolustamaan. Syyskuun 15 
        päivänä 1743 lähtivät venäläiset sotajoukot kaupungista sekä veivät mukanaan kirkon hopeiset alttariastiat.</p>
      <p>Tämän jälkeen alkaa kaupunkilaisille tukalat ajat sillä suurin osa kaupunkia oli poltettu tahi hävitetty ja kaupunkilaisia kiellettiin korkean sakon uhalla rakentamasta uudelleen 
        hävitettyjä talojaan, koska hallitus oli tullut huomaamaan, että kaupunki sijaitsi liian lähellä linnaa ja oli sentakia muutettava toiseen paikkaan. Uusia paikkoja kaupungille 
        ehdotettiin useampiakin ja vahvisti hallitsija monta eri asemakarttaa, mutta nämät eivät kaupunkilaisia tyydyttäneet.</p>
      <p>Kun Kustaa III kesäkuun 19 ja 20 päivänä v. 1775 kävi kaupungissa, valittivat kaupunkilaiset hänelle tukalaa asemaansa, heitä kun oli kielletty uudelleen rakentamasta hävitettyjä talojaan 
        syystä, että kaupunki oli määrätty muutettavaksi etäämmälle linnasta, mutta ettei kaupungille oltu sopivaa paikkaa saatu. Tämän johdosta lahjoitti Kustaa III elokuun 25 päivänä 1777 
        päivätyllä lahjakirjallaan Hämeenlinnan kaupungille sen läheisyydessä sijaitsevan Saaren latokartanon ehdolla, että kaupunki muutettaisi sanottuun latokartanoon kuuluvalle noin puolen 
        kilometrin matkan päässä linnasta etelään päin sijaitsevalle Niementausta-nimiselle mäelle, minne kaupunki sittemmin vuosina 1779-1184 muutettiinkin ja jossa se nykyään sijaitsee. 
        Huhtikuun 27 päivänä 1776 muutettiin Uudenmaan-Hämeenläänin maaherran istuin, joka tähän asti oli ollut Helsingin kaupungissa, Hämeenlinnaan. Kaupungin kirkkoherran tulojen lisäämiseksi 
        oli Hämeenlinnan kirkolliseen seurakuntaan jo vuonna 1731 yhdistetty Vanajan pitäjään kuuluvat Saaren ja Ojoisten latokartanot sekä Hätilän ruununvirkatalo ja yhdistettiin tähän seurakuntaan 
        vielä vuonna 1777 lisäksi samaan pitäjään kuuluvat Luhtialan, Kirstulan, Vuorentaan, Parolan ja Järviöisten kylät, joista sittemmin on muodostettu Hämeenlinnan maaseurakunta. Vuonna 1783 
        kesällä saapui Kustaa III taasen kaupunkiin sekä kävi Parolan leirikentällä tarkastamassa sinne kokoontuneita Suomen sotajoukkoja. Täällä putosi hän hevosen selästä sekä taittoi toisen jalkansa, 
        minkä johdosta hän kaksi viikkoa makasi sairaana Hämeenlinnassa sekä sopi sillä ajalla kaupunkilaisten kanssa uuden kivikirkon rakentamisesta ja lahjoitti kaupungille kuparikaton hankkimista 
        varten kirkkoon 4000 S. p. riksiä, ehdolla kuitenkin, että kirkko rakennettaisiin hänen hankkimiensa piirustusten mukaan.</p>
      <p>Kun 1808 vuoden sota alkoi, kokoontui suuri osa Suomen sotajoukoista Hämeenlinnaan, mistä osa kuitenkin lähetettiin Suomen itärajalle sekä osa jätettiin puolustamaan linnaa ja kaupunkia. 
        Näiden joukkojen johtaja kenraali C. N. af Klercker oli päättänyt tehdä kovan vastuksen venäläisille joukoille Hämeenlinnan eteläpuolella Hattelmalan harjulla, minne hän sitä varten oli 
        teettänyt valleja, mutta kun Suomen sotajoukkojen ylijohtaja Mauritz Klingspor maaliskuun 2 päivänä 1808 saapui kaupunkiin, katsoi hän vastuksen turhaksi sekä määräsi sotajoukot siirtymään 
        pohjoiseen päin. Maaliskuun 7 päivänä illalla saapuivat venäläiset sotajoukot kaupunkiin sekä ottivat seuraavana aamuna haltuunsa linnan, josta sotaväki edellisinä päivinä oli lähtenyt pois.</p>
      <p>Rauhan jälkeen muuttuivat olot kaupungissa vähitellen entisiksi ja uusia taloja rakennettiin toinen toisensa jälkeen. Kaupungin silta, joka v. 1740 oli alkuperäiseltä paikallaan muutettu 
        linnan eteläpuolelle, siirrettiin v. IB13 nykyiselle paikalleen.</p>
      <p>Syyskuun 9 päivänä 1819 illalla saapui keisari Aleksanteri I kaupunkiin, joka oli juhlavalaistu. Oltuaan yötä maaherra G. Hjärnen luona, matkusti keisari seuraavana aamuna Tampereelle, josta 
        hän syyskuun 11 päivänä varhain aamulla taasen palasi kaupunkiin sekä tarkasti samana päivänä Parolan leirikentälle kokoontuneita sotajoukkoja.</p>
      <p>1831 vuoden alusta eroitettiin Hämeen-lääni Uudenmaan-läänistä.</p>
      <p>Syyskuun 14 päivänä 1831 poltti tulipalo kolme neljättä osaa kaupungista. Tulen uhriksi jäi 102 taloa, niiden joukossa torin pohjoispuolella sijaitseva lääninhallituksen ja torin koilliskulmassa
         oleva triviaalikoulun kaksinkertaiset puurakennukset. Kodittomain luku palon jälkeen nousi 1207 henkeen ja arvattiin vahinko 375000 ruplaan. Palovahingon korvauksena sai kaupunki sittemmin 
         valtiolta 50,000 ruplaa ja sen lisäksi kymmenen vapaavuotta ruununverojen maksamisesta.</p>
      <p>Ennen paloa olivat kaupungin tontit pienet ja niillä olevat rakennukset rakennetut kiinni toisiinsa, mitkä seikat sekä palon aikana vallinnut kova tuuli suuresti vaikuttivat tulen leviämiseen.</p>
      <p>Palon jälkeen vahvistettiin tammikuun 17 p:nä 1832 kaupungille uusi asemakartta, jonka mukaan tontit laajennettiin sekä tonttien väliin jätettiin lehtipuilla istutetut palokujat. Tämän asemakartan 
        mukaan on kaupunki sittemmin rakennettu, joskin kaupungin tonttialaa sen jälkeen on useita kertoja laajennettu. Viimeinen asemakartta on vahvistettu joulukuun 18 p:nä 1872.</p>
      <p>Rakennettuna sisämaahan, kapean koskettoman vesistön rannalle sekä kahden suuremman kaupungin väliin, ei Hämeenlinnan kaupunki ole kauppa tahi teollisuuskaupunkina suurempaa merkitystä saanut.</p>
      <p>Hitaasti on myöskin kaupungin väkiluku lisääntynyt. Vuonna 1749 oli kaupungissa 505 asukasta, vuonna 1831 2277 ja vuonna 1914 6496 asukasta.</p>
      <p><strong>Ruununporin eli Tavastborgin linna</strong> sijaitsee Vanajaveden rannalla puolen kilometrin päässä kaupungista pohjoiseen päin. 1200 luvun alkupuolella oli kristinusko jo voittanut alaa 
        Hämeen sydämessä, vaikkei se vielä ollut saanut täysin vakautunutta asemaa, pakanalliset hämäläiset kun vihasivat kirkonmiehiä ja vastakastettuja sekä tekivät näille kamalimpia kauhuntöitä. Tämän 
        vuoksi Rooman paavi Gregorius IX alkoi saarnata ristiretkeä hämäläisiä vastaan, minkä johdosta Birger Jaarli v. 1249 lähti tunnetulle matkalleen Hämeeseen, asettamaan sen asujamet Ruotsin vallan alle. 
        Vahvistaakseen Ruotsin ylivaltaa Hämeessä sekä turvataksensa kristinuskoa hämäläisten keskuudessa, rakennutti Birger Jaarli v. 1249 - 50 Hämeen sydämeen Ruununporin eli Tavastborgin linnan.</p>
      <p>Historiallisissa asiakirjoissa esiintyy Ruununporin eli Tavastborgin linna ensi kerran vasta v. 1308, jolloin Suomi Örebron sopimuksen kautta joutui Eerik ja Valdemar herttuoille.</p>
      <p>Päälinna muodostaa alaltaan säännöllisen neliön, jonka sivut ovat 33 metrin pituiset sekä nurkat näyttävät jotakuinkin tarkkaan eri ilmansuuntiin. Luoteispuolella ulkonee linnasta kuitenkin v. 1607 
        rakennettu kylkirakennus, jota nimitetään „kukkotorniksi". Alkuaan oli linnan jokaisessa kulmassa torni, joista pohjois- ja länsikulmissa olevat tornit olivat muita korkeammat. Kun linnan 
        siipirakennukset vuosien 1720-1728 välillä korotettiin yhdellä kerroksella, katosivat etelä- ja itäkulmissa olleet tornit, uusi kerros kun rakennettiin näiden tasalle. Linnan alaosa, toisen kerroksen 
        puoliväliin asti, on rakenneltu toisiinsa kalkkiseoksella liitetyistä maakivistä, joiden välit ovat tilkityt kiilakivillä; tiilirakennus alkaa vasta toisen kerroksen puolivälistä ja on rakennukseen 
        käytettyjen tiilien koko tavallista suomalaista tiiliä paljon suurempi sekä samanlainen kuin ne tiilet, joita yleensä käytettiin 13-vuosisadalla. Linnan ulkoseinät ovat sileäpintaisia ilman koristuksia 
        sekä oviaukot pyöreäkaarisia. Ainoat seinäkoristukset ovat pohjoisen tornin luoteis- ja lounaissivuilla kulkeva hammastusvyöhyke sekä suunnikasmainen laakea syvänne, joka juoksee linnan itänurkasta 
        ylimmän akkunarivin alla jonkun matkaa etelänurkkaa kohti. Tällainen syvänne on myöskin alkuaan käynyt pohjoisnurkkaan päin, multa on sittemmin täytetty. Linnan pihaan johtaa portti linnan kaakkoispuolelta.</p>
      <p>Jo v. 1539, jolloin linnan kunnossapito oli jaettu Hattulan, Sääksmäen ja Hollolan kihlakuntien kesken, oli varsinaisen linnan ympäri rakenneltu tornilla varustettu korkea kehämuuri, jonka itäiseen kulmaan 
        v. 1539 rakennettiin pyörötorni. Tällaisia pyörötornia rakennettiin kehämuurin ulkopuolelle vielä vuonna 1559, 1563 ja 1581, mutta on näistä meidän aikoihin säilynyt ainoastaan ensiksi mainittu. 
        1500 luvun lopussa ja 1600·luvun alussa rakennettiin kehämuurin ympäri maavalleja (tenaljivalleja), jotka paremmin kuin hirsimuurit kestivät kanuunan kuulan tuhoa. V. 1740-42 rakennettiin kehämuurin 
        ulkopuolelle vielä toiset tenaljivallit, jotka vielä vuosien 1759-78 välillä vahvistettiin sekä kaivettiin niiden ulkopuolelle vallihaudat. Viimeksimainitut tenaljivallit ja vallihaudat ovat säilyneet 
        meidän päiviimme asti.</p>
      <p>Vuonna 1836 muutettiin Ruununporin linna, joka siihen asti oli ollut linnan päällikköjen ja paikkakunnalla majailevan sotaväen asuntona, vankilaksi. Kun vuosina 1869-74 oli tarvis rakentaa uusia 
        vankilarakennuksia, hävitettiin linnan sisäpuoliset tenaljivallit.</p>
      <p>Linnanläänin päälliköistä mainitaan ensimmäisenä Bartholdus v. 1297 sekä sittemmin Bo juhonpoika Grip, Valdemar Diekn, Olavi Tavast ja Knut Posse. V. 1315 joutui linna Valdemar herttualle ja v. 1371 
        panttasi kuningas Albreht linnan Bo Juhonpoika Grip'ille, jonka kuoltua linna lankesi kuningatar Margareetalle. V. 1441 antoi kuningas Kristoffer linnan läänitykseksi Kaarle Knuutinpoika Bondelle 
        ja v. 1451 Eerik Akselinpoika Tott'ille, juka taasen siirsi Ruununporin linnan ynnä muut suomenmaalaiset läänityksensä veljilleen Iivari ja Lauri Tott'ille. Viimeksimainitun kuoltua jätti Iivari Tott 
        v. 1483 linnan valtionhoilaja Sten Sturelle, jonka kuoltua linna joutui hänen leskelleen Ingeborg Tott'ille, joka asuikin linnassa kuolemaansa asti. Ingeborg Tottin kuoltua oli linnan päällysmiehenä 
        Aake Tott, kunnes hän kuningas Kristian II määräyksestä mestattiin linnassa v. 1520, jolloin Sten Sture nuoremman leski Kristiina Gyl1enstjerna sai linnan kaikkine kuninkaallisine veroineen läänitykseksi. 
        Tämän jälkeen kuului Ruununporin linna vuoden ajan tanskalaisen soturin Söyrinki Norbyn läänityksiin. kunnes sen valloitti Kustaa Vaasan sotajoukot v. 1523, jonka jälkeen linnaa hoitivat kuninkaan 
        käskyläiset eli linnan voudit. Linnanvoudeista mainitaan Iisak Niilonpoika Baner v. 1539, Juho Bruun v. 1559, Eerik Hare 1605-09 ja hänen jälkeensä Martti Paavalinpoika.</p>
      <p>Maaherralaitoksen voimaan tultua oli linnan hallinto uskottu linnanpäälliköille ja 1700 luvulla käytettiin linnaa asehuoneena sekä maa-armeijan varastopaikkana.</p>
      <p>Isonvihan aikana v. 1713 valloittivat venäläiset sotajoukot Ruununporin linnan sekä pitivät sen hallussaan aina vuoteen 1720. Kun Pikkuvihan aikana venäläiset sotajoukot taasen hyökkäsivät maahan, 
        katsoivat linnan silloinen päällikkö everstiluutnantti von Blitner ja kapteeni Ernandler linnan puolustuksen venäläistä ylivoimaa vastaan turhaksi sekä jättivät v. 1742 linnan venäläisten sotajoukkojen 
        päällikölle kreivi Laseylle.</p>
      <p>Vihollisten valta kaupungissa kesti syyskuun 15 päivään 1743, jolloin linna rauhanteon jälkeen taasen joutui takaisin Ruotsille. Kun sitten 1808 vuoden sodan aikana venäläiset sotajoukot saapuivat kaupunkiin, 
        jätettiin linna, josta sotaväki edellisinä päivinä oii lähtenyt pois vieden mukanaan suurimman osan linnassa olleista aseista, maaliskuun 8 päivänä 1808 venäläisille sotajoukoille.</p>

      <Image className="centeredImage" src={img2} alt="Kirkontornista pohjoiseen"/>

      <h2> Matkailijoille huomattavaa</h2>
      <p className="initialCap"><strong>Rautatien asema</strong> kaupungin itäsyrjällä Vanajaveden itäisellä puolella, on aistikkaasti rakennettu kolmikerroksinen kivirakennus tornineen, joka aikoinaan oli Suomen ensimmäisen Helsingistä 
        Hämeenlinnaan rakennetun rautatien päätekohtana. Eri rakennuksissa asemarakennuksen eteläpuolella ovat rautatien paketti- ja pikatavaratoimisto ynnä tavaratoimisto.</p>
      <p>Rautatieasemalta pääsee junien saapuessa kaupunkiin vuokra-ajurilla, jonka taksa on 75 penniä, tahi automobiilillä, jonka taksa on 1 markka 50 penniä.</p>
      <p><strong>Hotelleja</strong> on kaupungissa: Teatterihotelli, Birger Jaarlin ja Itäisen Linnankadun kulmassa, jossa paitsi täydellistä ravintolaa ja kaupungin teatterisalia, on 9 matkustajahuonetta 3-5 
        markkaan vuorokaudessa; Kaupunginhotelli torin pohjoispuolella, jossa myöskin on täydellinen ravintola sekä 18 matkustajahuonetta 3-8 markkaan vuorokaudelta.</p>
      <p><strong>Matkustajakoteja:</strong> Aliina Ahosen matkustajakoti talossa n:o 3 Rantakadun varrella, jossa on raittiusravintola sekä 7 matkustajahuonetta 1 markasta 50 pennistä - 4 markkaan vuorokaudessa, 
        Matkustajakoti Rauha talossa n:o 7 Rantakadun varrella, jossa on 6 matkustajahuonetta 1 markasta 50 pennistä - 4 markkaan vuorokaudessa, Matkustajakoti Tyyne talossa n:o 10 Rauhakadun varrella, jossa on 4 
        matkustajahuonetta 1 markasta 50 pennistä korkeampiin hintoihin vuorokaudessa, O. Lahtisen vieraskoti talossa n:o 12 Rauhakadun varrella, jossa on 4 matkustajahuonetta 1 markasta 25 pennistä 2 markkaan 
        vuorokaudessa, Matkustajakoti Tähti talossa n:o 15 Läntisen Linnankadun varrella, jossa on 8 matkustajahuonetta 2-4 markkaan vuorokaudessa, Matkustajakoti Suomi talossa n:o 16 Kymnaasikadun varrella, 
        jossa on 4 matkustajahuonetta 1 markasta 50 pennistä 3 markkaan sekä matkustajakoti Vellamo talossa n:o 11 Rantakadun varrella, jossa on 6 matkustajahuonetta 1 markasta 50 p. korkeinpiin hintoihin.</p>
      <p><strong>Kahviloita:</strong> K. Vainikaisen kahvila torin kaakkoiskulmassa, Raastuvankatu 13, C. Lindevallin kahvila talossa n:o 21 Raastuvankadun varrella, K. E. Lindholmin jälk. kahvila talossa 
        n:o 8 Kasarmikadun varrella ja F. Möllerin kahvila talossa n:o 19 Hallituskadun varrella, M. Oksasen kahvila talossa n:o 20, Hallituskadun varrella.</p>
      <p><strong>Kirkkoja:</strong> Luterilainen kirkko valmistui v. 1798; se rakennettiin Kustaa III antamien piirustuksien mukaan. Alkuaan oli kirkko aivan pyöreä sekä alttari kirkon keskellä, josta istuinsijat 
        porrasmaisesti kohosivat seiniä kohti. Tämän alkuperäisen kirkon itäpuolelle rakennettiin v. 1837 kellotapuli. Vuonna 1892 muutettiin kirkko, joka oli käynyt ahtaaksi, ristikirkoksi sekä varustettiin 
        lehterillä ja v. 1912 sisusteltiin ja maalattiin kirkko kokonaan uudelleen sekä varustettiin lasimaalauksilla ja „stucko”-kuvilla. V. 1894 lahjoitti eräs kaupunkilainen kirkkoon taiteilija V. Soldan-Brofeldt'in 
        maalaaman alttaritaulun. Avaimet kirkkoon säilytetään kirkonvartija A. Vikman'in luona talossa n:o 26 a Kymnaasikadun varrella ja maksetaan hänelle kirkonnäyttämisestä 1 markka.</p>
      <p>Kreikkalaiskatoolisen seurakunnan kirkko rantatorin luoteiskulmassa, on pieni puukirkko, jonka kauppias Aleksander Bogdanoff v. 1867 lahjoitti kaupungin kreikkalais-katooliselle seurakunnalle, ja 
        Venäläinen sotilaskirkko puistikossa Saarenkadun ja Pikkukadun välissä, joka rakennettiin v. 1899.</p>

      <Image className="centeredImage" src={img3} alt="Raatihuone"/>

      <p><strong>Lääninhallitus</strong> sijaitsee torin pohjoispuolella. Alkuaan oli Hämeenlääni yhdistetty yhdeksi lääniksi Uudenmaanläänin kanssa, jolloin lääninhallitus sijaitsi Helsingin kaupungissa, kunnes 
        se v. 1776 siirrettiin Hämeenlinnaan. Kun kaupunki muutettiin nykyiselle paikalleen, rakennettiin lääninhallitusta varten torin pohjoispuolelle kaksikerroksinen puurakennus, jonka keskeltä portti johti talon 
        pihamaalle ja jonka rakennuksen alakerta oli sisustettu lääninhallitusta varten sekä yläkerta maaherran asunnoksi. Kun tämä rakennus 1831 vuoden palossa joutui tulen uhriksi, rakennettiin lääninhallituksen 
        nykyinen kolmikerroksinen kivirakennus v. 1832 palaneen rakennuksen paikalle sekä sisustettiin rakennuksen alakerrokset lääninhallitusta varten ja ylikerros kuvernöörin asunnoksi. V. 1831 eroitettiin Hämeenlääni 
        eri lääniksi. Lääninhallitus on avoinna kello 11-3 päivällä</p>
      <p><strong>Hameenläänin Maanmittauskonttori</strong> Läntisen Linnankadun ja Koulukadun kulmassa, on avoinna kello 10 - 1 päivällä. Rakennus valmistui v. 1912.</p>
      <p><strong>Raatihuone</strong> kaksikerroksinen kivirakennus torin eteläpuolella, rakennettiin v. 1888. Rakennuksessa on isompi juhlasali, jota käytetään konserttisalina ja isompia kokouksia varten, sekä 
        Raastuvanoikeuden ja Maistraatin istuntohuone, Valtuusmiesten kokoushuone, Rahatoimikamari ja Poliisikamari.</p>
      <p><strong>Raittiustalo</strong> tontilla n:o 46 Raastuvankadun varrella, n:o 1 jossa on iso juhlasali kokouksia varten on rakenneltu v. 1905.</p>
      <p><strong>Vapaaehtoisen Palokunnantalo</strong> Rantatorin pohjoispuolella. jonka alakerros on sisustettu kalustohuoneeksi ja yläkerroksessa on juhlasali näyttämöineen.</p>
      <p><strong>Paloasema</strong> Birger Jaarlin ja Läntisen Linnankadun kulmassa, johon kaupungin palokalusto on sijoitettu ja jossa vakinaisen palokunnan miehistö asuu.</p>
      <p><strong>Pankkeja:</strong> Suomen pankin konttori ja Suomen Yhdyspankin konttori viimeksimainitun pankin talossa torin pohjoispuolella, Pohjoismaiden Osakepankin konttori talossa n:o 9 Raastuvankadun varrella 
        ja Kansallis Osakepankin konttoritalossa n:o 10 Raastuvankadun varrella, torin länsipuolella, jotka kaikki ovat avoinna kello l/2 10 - 2 päivällä, Tampereen Osakepankin konttori talossa n:o 8 a Raastuvankadun 
        varrella, avoinna kello 9-2 päivällä, Hämeenlinnan kaupungin Säästöpankki talossa n:o 7 Raastuvankadun varrella ja Hämeenlinnan Suomalainen Sääästöpankki talossa n:o 17 Raastuvankadun varrella, torin eteläpuolella, 
        jotka molemmat ovat avoinna kello 9-11 e. p. p.</p>
      <p><strong>Postikonttori</strong> Läntisen Linnankadun ja Kymnaasikadun kulmassa, on avoinna kello 8 -12 e.p.p. ja 4-6 j. p. p.</p>
      <p><strong>Sähkölennätin konttori</strong> talossa n:o 5 Itäisen Linnankadun varrella, on avoinna kello 8:sta aamulla kello 9 illalla.</p>
      <p><strong>Yleinen telefooni</strong> löytyy Rautatieasemalla, Laivarannassa ja K. E. Lindholm'in jälk. kahvilassa.</p>
      <p><strong>Apteekkeja:</strong> Alfred Ölander'in apteekki torin luoteiskulmassa ja Gösta Sevon'in apteekki torin länsipuolella.</p>
      <p><strong>Rohdoskauppa</strong> Filip Gallen'in rohdoskauppa torin lounaiskulmassa.</p>
      <p><strong>Lääkäreitä:</strong> piirilääkäri O. Sahlberg, talossa n:o 8 Itäinen Linnakatu torin koilliskulmassa, Lääninsairaalan ylilääkäri O. Tavaststjerna, Kansallis osakepankin talossa torin länsipuolella, 
      tohtori Einar Anthoni talossa n:o 13 Läntisen Linnankadun varrella, kaupunginlääkäri E. V. Herva, talossa n:o 4 Kirkkokatu kirkon itäpuolella, hammaslääkäri G. Lindholm Yhdyspankin talossa torin pohjoispuolella, 
      piirieläinlääkäri T. Colerus. talossa n:o 7 Hallituskadun varrella ja kaupungineläinlääkäri A. Aschan, talossa n:o 13 Raastuvankadun varrella torin eteläpuolella.</p>
      <p><strong>Sairaalat:</strong> Lääninsairaala kaupungin sillan itäpuolella ja Kaupungin sairaala Koulukadun varrella n:o 25. Kuumesairaala Kaivokatu 22.</p>
      <p><strong>Kirjakauppoja:</strong> E. Rytkösen kirjakauppa torin pohjoispuolella, Suomalainen kirjakauppa OY, Kansallisosakepankin talossa. Lähetyskirjakauppa talossa n:o 11 Läntisen Linnankadun varrella sekä 
      K. F. Björkbom'in paperikauppa talossa n:o 9 Kasarmikadun varrella.</p>
      <p><strong>Valokuvaajia:</strong> E. Stier'in jälk. valokuvaamo talossa n:o 1 Läntisen Viertotien varrella ja talossa n:o 13 torin eteläpuolella, sekä Uusi Valokuvaamo Myllymäessä, talossa n:o 6 Itäisen Vuorikadun 
        varrella.</p>
      <p><strong>Valokuvaustarpeita</strong> myydään E. Rytkösen kirjakaupassa ja F. Gallen'in rohdoskaupassa.</p>
      <p><strong>Saunoja:</strong> Kunnallissauna itäisen Linnankadun ja Koulukadun kulmassa, Uusi kylpylaitos talossa n:o 2 Hallituskadun varrella ja Ranttilan sauna talossa n:o 9 itäisen Torikadun varrella Myllymäen 
        kaupunginosassa.</p>
      <p><strong>Uimalaitos</strong> on Rantakadun eteläisessä päässä.</p>
      <p><strong>Partureita:</strong> A. Lehtisen parturiliike talossa n:o 6 Itäisen Linnankadun varrella, E. Valtasen parturiliike talossa n:o 10 saman kadun varrella ja I. Sergin'in parturiliike talossa n:o 24 
      Hallituskadun varrella.</p>
      <p><strong>Kirkkoherranvirasto</strong> talossa n:o 14 Rauhakadun varrella, on avoinna tiistaina, torstaina ja lauantaina kello 8-10 e. p. p.</p>
      <p><strong>Kouluja</strong> Koulukaupunkina on Hämeenlinnan kaupungilla aina ollut maineensa maassamme. Ensimmäisen koulunsa sai Hämeenlinna jo vuonna 1639 Pietari Brahen toimesta. Tämä koulu oli pieni lastenkoulu, 
        jossa opetuskielenä oli suomi. Vuonna 1690 muutettiin tuo koulu triviaalikouluksi, jossa alkuaan oli kolme luokkaa ja sittemmin neljä, sekä vuonna 1842 Yläalkeiskouluksi. Vuonna l857 avattiin kaupungissa 
        Siviili Kymnaasi, joka lopetettiin v. 1872, jolloin sen tilalle perusteltiin ruotsinkielinen Alkeisopisto, joka taasen lakkautettiin v. 1879. Syyskuun 1 päivänä 1873 avattiin kaupungissa Suomalainen Normaalilyseo, 
        joka vuonna 1887 siirrettiin Helsinkiin ja sen tilalle avattiin Suomalainen Lyseo. Nykyään löytyy kaupungissa seuraavat koulut: Suomalainen Lyseo Itäisen Linnankadun varrella Tähtipuiston itäpuolella, 
        Suomalainen yhteiskoulu talossa n:o 2 Läntisen Viertotien varrella ja Ruotsalainen yhteiskoulu talossa n:o 16 Panimokatu Rantatorin pohjoispuolella. Kaupungin kansakoulut sijaitsevat taloissa n:o 11-13 
        Saaristenkadun varrella, n:o 6 Kymnaasikadun varrella ja n:o 9 Ahokadun varrella Myllymäessä sekä Venäläinen kansakoulu talossa n:o 24 Birger Jaarlinkadun varrella.</p>
      <p><strong>Kaupungin kirjasto ja lukusali</strong> on talossa n:o 6 Kymnaasikadun varrella.</p>
      <p><strong>Hämeenlinnan Historiallls-Muinaistieteellinen museo</strong> talossa n:o 7 Itäisen Linnankadun varrella on avoinna 25 pennin pääsymaksua vastaan sunnuntaina kello 12-3 j. p. p. ja keskiviikkona kello 
        11-1 päivällä. Tämä maamme nuorin museo avattiin marraskuun 20 päivänä 1912. Museossa löytyy noin 2000 esinettä, joista mainittakoon Maanviljelysneuvos N. M. Bremer vainajan lahjoittama 12,000 markkaan arvioitu 
        huonekalu-kokoelma sekä erittäin täydellinen kirkkoesine-kokoelma. Huoneita on 12; niistä on yksi sisustettu hämäläiseksi asuinhuoneeksi 1800 luvun alkupuolelta ja toinen kustaavilaiseksi huoneeksi. Myöskin 
        löytyy museossa erityinen „Hämeenlinnan huone”.</p>

      <Image className="centeredImage" src={img4} alt="Puistoravintola"/>

      <p><strong>Puistoja</strong> on kaupungissa: Kirkkopuisto lutherilaisen kirkon pohjois- ja eteläpuolella, Tori puisto suihkulähteineen, pergolarakennuksineen ja virvoitusjuomamyymälöineen torin i1äsyrjällä. 
        Tähtipuisto Läntisen ja Itäisen Linnankadun sekä Birger Jaarlinkadun välissä, Rantapuistot kaupungin koillis- ja itärannalla sekä Pinellan puisto sillan itäpuolella. Kilometrin matkan päässä kaupungista 
        pohjoiseen päin Vanajaveden rannalla sijaitsee kaupungin Puisto. Kun vapaaherra Otto Reinhold Rehbinder v. 1841 määrättiin Hämeenläänin kuvernööriksi, otti hän myöskin hallintoonsa kuvernöörin virkatuloihin 
        kuuluvan Ojoisten ruununvirkatalon kaupungin läheisyydessä. Harrastaen lämpimästi puutarhahoitoa, alkoi kuvernööri Rehbinder vangeilla raivaamaan virkalaloon kuuluvaa Vanajaveden rannalla sijaitsevaa Pyövelin 
        mäkeä puistoksi, rakentaen sinne kävelyteitä, joiden varsille hän istutti lehtipuita kuten koivuja, tammia, jalavia, saarnia, poppeleita y. m. Sen lisäksi rakennutti hän puistoon huvihuoneita sekä muodosti eri 
        paikkoihin varjostavia syreenimajoja. Luopuessaan Ojoisten virkataion hallinnosta v. 1848 pyysi kuvernööri Rehbinder keisari Nikolai 1:ltä, ellä Pyövelinmäki eroteltaisiin Ojoisten ruununvirkatalosta sekä 
        annettaisiin Hämeenlinnan kaupungille puistoksi, johon pyyntöön keisari Nikolai 1 tammikuun 19 p:nä t848 päivätyllä kirjeellään suostuikin ehdolla kuitenkin, että kaupunki vastaisuudessa ylläpitäisi kuvernööri 
        Rehbinderin puistoon laittamat käytävät ja istutukset sekä rakentaisi puistoon lisää teitä. Saatuaan puiston haltuunsa, valitsivat kaupunkilaiset puiston järjestämistä ja hoitamista varten erityisen toimikunnan, 
        jonka puheenjohtajana kuvernööri Rehbinder toimi kunnes hän v. 1863 erosi kuvernöörinvirastaan. Kuvernööri Rehbinderin johdolla rakennettiin sittemmin vangeilla puistoon uusia teitä sekä raivattiin pois suuremmat 
        kivet, joita osaksi käytettiin puiston ympärillä olevan kiviaidan ja rantaäyräilten rakentamiseen sekä osaksi puistoon rakennettuun linnan raunioon. Syksyllä v. 1860 muodostui kaupungissa yhtiö, joka rakennutti 
        puistoon ravintolarakennuksen. mikä avattiin yleisölle toukokuun t päivänä 1861 ja jonka rakennuksen mainittu yhtiö seuraavana vuonna lahjoitti kaupungille. Puistoon on sittemmin rakennettu keilarata, soittolavat 
        ja urheilukenttä; nykyään ylläpitää Hämeenlinnan kaupungin väkijuoma- vähittäismyynti~ ja anniskeluosakeyhtiö puistoravintolassa ensiluokkaista raittiusravintolaliikettä.</p>
      <p><strong>Pika-ajureita</strong> saadaan paitsi ajuriasemilta kaupungissa myöskin rautatieasemalla junien saapuessa sekä laivarannasta. Jokaisesta välimatkasta kaupungissa maksetaan 40 penniä sekä ajelemisesta 
        kaupungissa 2 markkaa tunnilta. Pika-ajurien taksassa löytyy myöskin määrätyt hinnat eri paikkoihin kaupungin läheisyydessä. Pika-ajureita voidaan tilata puhelimella n:o 192.</p>
      <p><strong>Automobiileja</strong> saadaan automobiiliasemalta Raatihuoneen edustalla sekä puhelimilla n:o 324 (autot 3 ja 7) ja 364 (autot 2 ja 5). Ajelemisesta maksetaan jokaisesta välimatkasta kaupungissa 75 
        penniä ja tunnilta 10 markkaa. Taksassa löytyy myöskin määrätyt hinnat eri paikkoihin kaupungin läheisyydessä.</p>
      <p><strong>Laivoja</strong> Höyrylaiva Urho saapuu kaupunkiin Mälkiäisten kylästä Tyrvännön kappelissa kello 8 aamulla sekä lähtee kaupungista kello l,45 j. p. p. Höyrylaiva Kangasala saapuu kaupunkiin Hakalan 
        kartanosta Sääksmäen pitäjässä kello 1/2 9 aamulla sekä lähtee kaupungista kello 2,15 j. p. p. Höyrylaiva Luopioinen I saapuu kaupunkiin kello 9,15 aamulla Pälkäneen pitäjän Onkkaalan kylästä sekä lähtee 
        kaupungista kello 12,30 päivällä. Höyrylaiva Pälkäne saapuu kaupunkiin kello 9,30 aamulla Pälkäneen pitäjän Onkkaalan kylästä sekä lähtee kaupungista kello 1 päivällä. Pälkäne-laivan saavuttua Valkeakosken 
        kanavalle keskiviikkona ja lauantaina lähtee höyrylaiva Eljas sieltä Kaivannolle Kangasalan pitäjässä. Laivat poikkeavat matkan varrella oleville isommille laitureille.</p>
      <p>Moottorivene Kisaveikko välittää liikettä kaupungin ja Karlbergin kartanon välillä tehden neljästi päivässä matkan Hattulan pitäjän Mierolan kylään. Pieni moottorivene „Puisto” on Puiston rannassa vuokrattavana 
        Karlberg'issa y. m. käyntiä varten.</p>
      <p><strong>Laivalaituri</strong> on Hallitus- ja Birger Jaarlin katujen itäpäässä.</p>
      <p><strong>Vesijohtolaitos.</strong> Vuonna 1910 valmistui kaupungin vesijohto ja viemärilaitos, joka tuli maksamaan Smk. 334,422:64. Vesijohtolaitoksen konehuone, vesikaivot ja vesisäiliö sijaitsevat noin 
        kilometrin matkan päässä kaupungista länteen päin, Poltinahon kentän luoteispuolella.</p>
      <p><strong>Kasarmeja</strong> Kaupungissa löytyy entisen 7:n Hämeenlinnan tarkkampujapataljoonan kasarmit Läntisen Viertotien varrella Myllymäen kaupunginosassa, Poltinahon kasarmit kaupungin länsipuolella 
        olevan Poltinahon kentän pohjoissyrjällä (viimeksimainiUujen kasarmien rakennuksista rakennettiin osa jo Ruotsin vallan aikana) sekä Kivikasarmit, jotka v. 1854 rakennettiin Hämeenlinnaan sijoitetulle 
        ruotuväen pataljoonalle.</p>
      <p><strong>Hämeenlinnan kaupungin ympäristöt:</strong> Neljän kilometrin matkan päässä kaupungista eteläänpäin sijaitsee Hattelmalan harju. josta J. L. Runeberg runoilee „Vänrikki Ståhl'in tarinoissa”. 
      Pitkin harjua kulkee Hämeenlinnasta Helsinkiin johtava maantie. Tällä harjulla, josta on erittäin kaunis ja laaja näköala, aikoi kenraali C. N. af Klercker v. 1808 tehdä vastuksen venäläisille sotajoukoille 
      sekä rakennutti sitävarten harjun länsipäähän siellä vielä nähtävänä olevat vallit. Kaksi kilometriä eteenpäin saman maantien varrella sijaitsee Valtion omistama Perttulan kasvatuslaitos. Laitoksen päärakennuksen 
      rakensi v. 1855 kuvernööri O. R. Rehbinder itselleen kesäasunnoksi sekä muutti sinne vakituisesti asumaan v. 1863, jolloin hän pyysi eron kuvernöörinvirastaan, ja asui siellä kuolemaansa asti tammikuun 13 
      päivään 1873. Itäänpäin kaupungista kahden kilometrin matkan päässä on luonnonihana Katumajärvi lukuisine huviloineen sekä järven itäpuolella korkea Kappolan vuori. Seitsemän kilometrin matkan päässä länteenpäin 
      kaupungista sijaitsee Parolan leirikenttä. Kenttää, jota kesäisin käytetään sotaväen harjoituskenttänä, käytettiin jo Ruotsin vallan aikana samaan tarkoitukseen. Täällä tarkasti kuningas Kustaa III kesällä v. 
      1783 Suomen sotajoukot, jolloin hän putosi hevosen selästä sekä taittoi toisen jalkansa, minkä johdosta hän kahden viikon ajan makasi sairaana Hämeenlinnan kaupungissa. Parolan leirikentällä tarkasti myöskin 
      keisari Aleksanteri I syyskuun 2 päivänä 1819 sinne kokoontuneet sotajoukot sekä keisari Aleksanteri II heinäkuun 29 päivänä 1863 Suomen ruotuväen pataljoonat, joiden upseerikunta muistoksi tästä tapahtumasta 
      sittemmin pystytti leirikentälle taiteilija Sjöström'in valmistaman pronssileijonan harmaakivi-jalustalle.</p>
      <p><strong>Kaupungin asemakartta</strong> ja kaupungin ympäristön kartta sekä ajuritaksat ovat myytävänä Suomalaisessa kirjakaupassa ja E. Rytkösen kirjakaupassa; jälkimäisestä saadaan ostaa myöskin Helsingin 
        sanomalehtiä.</p>

      <h2>Laivareitti Hämeenlinnasta Kangasalle</h2>
      <p className="initialCap">Hämeenlinnan kaupunki sijaitsee Suomen Järviylängön länsiosassa, Kokemäenjoen vesistön eleiäisemmän reitin Vanajaveden varrella. Reitti alkaa etelässä likellä Suurta-Salpausselkää ja kiertelee monissa mutkissa 
        pohjoiseen päin. Vielä Hämeenlinnan tienoilla se on verrattain kapea ja laajenee vasta muutamia penikulmia sen pohjoispuolella Vanajan (Sääksmäen) seläksi. Jään liikunnan suuntaan kulkeva harjujono alkaa 
        suuresta reunamoreenistamme Hikiän aseman eteläpuolella, katkaisee vesireitin Turengin lähettyvillä ja seuraa siitä alkaen reittiä sen länsipuolella aina Vanajan selkään saakka. Tämä jono sivuuttaa sitten 
        Hämeenlinnan ja kohoaa sen läheisyydessä muodostamaan kaupungin ymparistöön mitä ihanimpia näköaloja metsäharjuineen, kumpuineen ja siintävine vesineen.</p>
      <p>Hedelmällinen savikerros peittää suuremmaksi osaksi vuoriperää Harvialan kartanon tienoilla aina Vanajan selkään saakka. Vanajavesistön varrelle on senvuoksi kehittynyt jo hyvin aikaiseen viljelys- ja 
        kulttuuri-alue, joka on Hämeen vanhimpia.</p>
      <p>Vanhojen herraskartanoiden sekä lukuisten talojen viljavat vainiot ja rehevät puutarhat, lukuisat huvilat, metsäiset niemet ja vihertävät lehdot hivelevät silmää molemmin puolin laivareittiä, joka sinisenä 
        siteenä liittää ympäristön pääkaupunkiinsa. Uudet ajanmukaiset laivat välittävät säännöllistä liikennettä kesäiseen aikaan pitkin vesistöä aina luonnonihanuudestaan kuuluisalle Kangasalan harjulle saakka. 
        Matkalaisille on käynti Hämeenlinnasta Kangasalle erittäin sopiva, se kun vähillä kustannuksilla tarjoo vaihtelevan ja jotakuinkin täydellisen sarjan pikakuvia tuhatjärvisestä maastamme ja sen sisämaan 
        viehättävästä luonnosta.</p>
      <p>Lähtiessämme kaupungista jollakin niistä laivoista, jolka välittävät liikettä pohjoiseen päin (säännöllistä laivaliikettä Hämeenlinnasta etelään päin ei ole), sivuutamme heti laivasillalta lähdettyämme 
        kaupungin uuden rantapuiston. Se on nykyajan lapsia, sillä kymmenkunta vuotta sitten oli alue vielä vetistä, laihaa rantaniittyä, jolla saraheinät rehoittivat. Kasvien nimikilvet osoittavat, että se samalla 
        on kasvitieteellinen puisto. Vuosina 1902-1910 on tähän ja kaupungin muihin puistoihin istutettu toistasataa kasvilajia. Näistä herättävät erityistä huomiota toistakymmentä lajia havupuita, kymmenkunta 
        syreeni- ja vaahteralajia sekä useat jalavat, koivu- ja leppälajit, saarnit, lehmukset ja paatsamat ynnä monivuotiset komeat yrttikasvit kuten hortensiat. polygonumit. heracleum, rheum j. n. e. Puisto on 
        nykyään kesäiseen aikaan kaupunkilaisten suosituimpia virkistyspaikkoja.</p>
      <p>Sivuutettuamme rantapuiston kohoaa samalla puolella Birger Jarlin v. 1249 perustama vanha linna sammaltuneine muureineen. Siitä enemmän toisessa paikassa. Heti linnan pohjoispuolella oleva alue, missä nykyään 
        näemme suuria venäläisiä kasarmi· y. m. rakennuksia. on kaupungin historiallisia merkkipaikkoja. Siinä sijaitsi nimittäin Hämeen eli Kruununlinnan suojassa se pieni linnakylä eli kauppala. jolle Pietari Brahe 
        v. 1650 antoi kaupunginoikeudet. Sieltä kaupunki sitten Kustaa III:n elokuun 25 p. 1777 antaman määräyksen mukaan siirrettiin nykyiselle paikalleen.</p>
      <p>Vastapäätä linnaa. oikealla puolella reittiä, on Hämeenläänin suurin sahalaitos. v. 1873 perustettu Hämeenlinnan Höyrysaha. Sahassa. jonka omistaa osakeyhtiö Aug. Eklöf Porvoosta. työskentelee 200-300 henkilöä; 
        vuotuinen sahausmäärä on noin 7000 standartia.</p>
      <p>Höyrysahan pohjoispuolella sijaitsee Osakeyhtiö Hämeenlinnan vanutehdas. Sen pohjoispuolisesta metsiköstä näkyy Hämeenlinnan Naisyhdistyksen toimesta perustettu keuhkotautisairaala.</p>
      <p>Kääntyessämme jälleen vasemmalle sekä kuljettuamme linnan ja „Vanhan kaupungin” ohitse, kohoaa vasemmalla tuuheana ja rehoittavana kaupungin kuuluisa „Parkki” eli Puisto. Vielä viime vuosisadan alkupuolella oli 
        tämä puisto jylhä roukkioinen ja kammoksuttu „Pyövelinmäen” metsäkumpu, kunnes kuvernööri O. R. Rehbinder, joka vuosina 1841-1863 oli Hämeen läänin maaherrana, vankien avulla raivautti mäen puistoksi.</p>
      <p>Etevän hoidon alaisena on puisto nykyään, monine harvinaisine puulajeineen, laatuaan maamme ensimäisiä. Korkeimmalla kohdalla näemme huvimajan, josta on erinomaisen kaunis näköala yli linnan, kaupungin ja 
        Vanajaveden aina Kappolan vuorelle sekä Turengin harjuille saakka, jotka muodostavat maisemalle komean taustan. Tummasta havumetsästä pilkoittaa valkeana Vanajan vanhan kivikirkon torni. Edustalla oikealla 
        kohoaa Myllymäen esikaupunki ja sen jatkona Runebergin „Vänrikin markkinamuistoista” kuuluisa Hattelmalan harju. Puiston itärinteellä on, paitsi erityisiä huvimajoja myöskin ravintola, jossa Hämeenlinnan 
        anniskeluosakeyhtiö ylläpitää täydellistä ensiluokkaista raittiustarjoilua.</p>
      <p>Kun käytäviä pitkin kiertelee puiston rinteitä, jotka kasvavat komeita tammia, jalavia, saarnia, lehmuksia ja muita arvokkaita puulajeja, tapaa sisemmällä keilaradan ja juhlakentän. Jälkimäisen laidassa on 
        laulu- ja soittolava, jonka yläosaa koristaa Suomen maakuntien vaakunat. Vähän matkan päässä juhlakentällä on keinotekoiset Iinnanrauniot, jotka kuvernööri Rehbinder aikoinaan rakennutti „Pyövelinmäeltä” 
        raivatuista kivistä. Kaikkialla kuulee kesäiseen aikaan lintujen iloista viserrystä, niille kun vanhat korkeat puut ja niihin asetetut lukuisat pesimispöntöt tarjoavat sopivia asuinsijoja.</p>
      <p>Kuljettuamme rautatiesillan alitse avautuu eteemme luonnonihanuudestaan kautta maamme kuuluisa, eversti Hugo Standerlskjöldin omistama Karlbergin kartano. Karlberg on oivallisena todistuksena siitä, mitä 
        ihmeellisiä tuloksia voidaan saada, kun Hämeen soreaan luontoon liitetään kaikki se ihanuus, jota nykyaikainen puistoviljelys tarjoaa. Jo järveltä katsoen herättävät huomiota kilometrejä pitkät kivestä tehdyt 
        rantaäyräät, kukkalaitteet, sametinpehmeät nurmikot, veistokuvat ja ylempänä rinteellä keinotekoiset linnatornit. Kun sangen laajan puiston kautta nousee kuuluisalle Aulangon vuorelle, tapaa matkalla hirvi- 
        ja lintutarhoja, suuria keinotekoisia lampia joutsenineen ja vuoren harjalla harmaasta graniitista rakennetun 70 metriä korkean näkötornin, josta on harvinaisen suuremmoinen näköala yli kaupungin ja laajalle 
        sen ympäristöön. Tornin alla olevan vuoren juurella, minne johtaa kiviportaat, on kallioon hakattu luola, jossa on kuvanveistäjä Stigellin vuolukivestä muovailema karhuryhmä.</p>
      <p>Näkemistä ansaitsevat myöskin kartanon tilavat kasvihuoneet, jotka sijaitsevat rannalla ja joissa m. m. viljellään viinirypäleitä, persikoita, ananasta sekä muita etelämaalaisia hedelmiä.</p>
      <p>Karlberg on matkailijaliikkeessä epäilemättä maamme suosituimpia; lukuisat retkikunnatkin käyvät vuosittain sen nähtävyyksiä ihailemassa.</p>

      <Image className="centeredImage" src={img5} alt="Karlbergin kartano"/>
  
      <p>Karlbergia vastapäätä, laivareitin vasemmalla puolella kohoaa niemi, jonka tummasta kuusimetsästä pilkoittaa useita kaupunkilaisten huviloita.</p>
      <p>Kun on kuljettu kapeasta Kirstulan salmesta Hattulan selälle, näemme taas oikealla puolella edelleen Karlbergin alueita, sekä eversti Standertskjöldin niinikään omistamat Katajiston ja Metsänkylän kartanot; 
        edellinen on aikoinaan ollut Sallmen- ja Klingstedt-sukujen hallussa, jälkimmäistä on useat ajat omistanut Helsingius-suku. Laivareitin vasemmalla puolen sijaitsee vapaaherra G. Standerlskjöld·Nordenstamin 
        omistama Kirstulan kartano laajoine vainioineen. Kartanon entisistä omistajista mainittakoot Karin Horn, Margaretha Spåre, Hämeenlinnan ponnestari Gottrieb John ja kenraali Aug. Standerlskjöld.</p>
      <p>Hattulan selän itäpuolella Melsänkylän kartanosta pohjoiseen päin sijaitsevat senaattori A. Osv. Kairamon omistamat Ellilän, Mallilan ja Santin kartanot; viimeksimainitun omisti aikoinaan Schantz·suku, 
        josta kartano on nimensäkin saanut. Santin pohjoispuolella on kunnallisneuvoksetar Elin Nordenswanin omistama Ahlbackan kartano ja tämän vastapäätä selän vasemmalla rannalla rouva Anna von Essenin omistama 
        Herniäisten kartano komean havumetsän ympäröimänä. Herniäisten kartanoa ovat aikaisemmin omistaneet ruununvouti Knut Nordenswan ja apteekari Julius Åkerman.</p>
      <p>Kun Herniäisten kartano on sivuutettu, näkyy reitin vasemmalla rannalla loivasti kohoavalla peltorinteellä maamme mieltäkiinnittävimpiä muinaismuistoja, Hattulan vanha kirkko, josta t:ri F. O. Rapola lausuu 
        „Häme”-teoksessaan m.m.: „Edessäni on näin ollen vanhus, jonka hartioilla lepää vuosia melkein niin paljon kun kristikunnalla on Hämeessä ikää.”</p>
      <p>Tämä kirkko, joka nykyään on Suomen muinaismuistoyhdistyksen hoidossa, on rakennettu t300-luvun vaiheilla, ja taru kertoo sen olevan rakenneltu niistä tiilistä, jotka jäivät jälelle Birger Jaarlin v. 1249 
        rakentamasta Hämeen linnasta. Kirkko on ollut omistettu „pyhälle ristille” ja oli keskiajalla tärkeänä pyhiinvaelluspaikkana, jonne ulkomaalaisetkin sovinnonetsijät joskus suuntasivat matkansa. Sisällä on 
        kirkko kolmilaivainen; sen ristiholveihin muurattua kattoa kannattaa kuusi kahteen riviin asetettua tiilipilaria. Kirkkoon johtaa kaksi ovea, toinen eteläseinällä ja toinen länsipäädyssä. Kokonaisuutena tekee 
        kirkko erittäin ehyen vaikutuksen; tätä elävöittää kirkon mieltäkiinnittävä katto- ja seinäkuvitus, joka vasta parikymmentä vuotta sitten saatiin esille, kun sen päällä ollut kalkkimaalaus poistettiin. Kuvitus 
        esittää tapauksia vanhasta ja uudesta testamentistä sekä on vuodella 1510.</p>
      <p>Yhtä rikas ja kirjava kuin holvien ja seinien maalaukset oli kirkon katoolisaikainen muu sisustuskin johon m. m. kuului alttarikaapit; näistä on ainoastaan yksi säilynyt meidän päiviimme asti. Muista keskiajan 
        muistoista mainittakoon vielä iso puinen kastemalja ja kaksi vanhaa hautakiveä. Kirkon vanhassa saarnastuolissa on vuosiluku 1550 sekä Björn Leijonin ja tämän puolison Kaarin Stjernsköldin vaakunat ja 
        nimikirjaimet, jotapaitsi kirkossa säilytetään useita aatelisten vaakunakilpiä 1600-luvulta, kuten Gustaf Silfverharneskin, Vildemanin, Tuomas Beurreuksen (Lepaan kartanon omistajan), Sten Tavastin 
        (Vesundan kartanon omistajan) y. m. Kellotapuli, jonka alaosa on harmaasta kivestä ja yläosa puusta on rakennettu v. 1813. Kirkon pohjoispuolella on Hurttalan kylä.</p>
      <p>Hattulan selkä kapenee nyt yhä soukemmaksi, ja sivuutamme vasemmalla puolella intendentti C. P. Solitanderin omistaman Saarelan kartanon, jonka omisti aikoinaan kirjailija ja tiedemies professori Aksel 
        Fredrik Granfelt. Vastapäätä Saarelan kartanoa on Poransaaren niemi monine huviloineen.</p>
      <p>Siinä missä reitti äkkiä kääntyy vasemmalle Mierolan kylää kohti, on oikealla Hattulan pappila aivan järven rannalla, ja sen pohjoispuolella Koreelan kartano. Saavuttuamme Mierolan salmeen näemme sen vasemmalla 
        rannalla kauppias A. Gust. Skogsterin omistaman Alhaisten kartanon, jonka omistajina ovat m. m. olleet „Vänrikki Stoolin tarinoissa”
         mainittu eversti v. Konow, kamarineuvos Thermen ja kapteeni Bollfras; 
        salmen kummallakin puolella on Mierolan kylä. Kuljettuamme MieroJan sillan alitse on reitin vasemmalla puolella Ventolan rustitila ja oikealla puolella Hattulan seurakunnan v. 1848-1857 rakennettu uusi kirkko 
        sekä tämän ja rannan välissä seurakunnan hautausmaa, mihin m. m, on haudalIu tuomari Arckenholtz ynnä Granfelt-. Vetterhoff-, Nordensvan- ja von Essen-sukuihin kuuluvia henkilöitä.</p>
      <p>Muutamia kilometrejä Mierolan sillasta pohjoiseen päin, kun on kuljettu Rahkoilan kylän ohi, herättää huomiota agronoomi G. A. Karenin omistama Vesundan vanha säteritila. Sen monista kuuluisista omistajista 
        mainittakoon kuningas Kustaa I, joka v. 1542 500 markasta osti tilan Pehr Svensken vaimolta Dorothealta. Arvid Tavastin sukulaiselta. Erik XIV antoi sittemmin v. 1566 Tavaslille oikeuden lunastaa talon itselleen.</p>
      <p>Paitsi jo mainittuja ovat Vesundan kartanon omistaneel Sten Tavast, Adam Schraffer, Erik Pistolhjelm, A. H. Ramsay, Furuhjelm, Vetterhoff ja K. F. Packalen.</p>
      <p>Vähän matkaa Vesundan kartanosta eteenpäin reitin vasemmalla puolella sijaitsee Merven kylä ja samanniminen kartano, jonka nykyään omistaa agronoomi Gösta Alander. Kartanon ovat aikaisemmin omistaneet Samuel 
        Arvidsson, Henrik Tott, Hanss Schraffer, Arvid Tavast, Herman Blåfield, O. G. Utter, O. Idestam ja J. F. Grönlund.</p>
      <p>Saavutamme sitten kauniin Lepaan salmen, jonka oikealla puolella sijaitsee Lepaan kartano sekä lähempänä rantaa lukuisat Lepaan puutarhaopiston rakennukset. Lepaan määräsi kartanon viimeinen omistaja Karl Fr. 
        Packalen testamentissaan v. 1886 Suomen valtiolle ehdolla, että tilalle perustellaisiin korkeampi valli on puutarhaopisto, joka sittemmin alottikin toimintansa v. 1912 syksyllä. Kartanon entisistä omistajista 
        mainittakoon Björn Leijon - Kustaa Vaasan ensimäisiä kannattajia Suomessa -, Hans Lejon, Erik XIV:n opettaja Dionysius Beurreus ja Tuomas Beurreus, Stjernkors. maaherra P. Stjerncrantz ja Heimburger, 1700-luvun 
        alkupuolelta saakka on kartanon nimenä ruotsiksi - Stjernsund -, jonka maaherra Stjerncrantz sille antoi. Vähän matkaa kartanon pohjoispuolella on pieni kappeli kuusten ympäröimällä kummulla ja sen vieressä 
        hautausmaa, johon kartanon entiset omistajat on haudatut.</p>
      <p>Salmen länsipuolella on suurten vainioiden laidassa vapaaherra E. Standertskjöldin omistama Suontaan kartano, jonka omistajia ovat olleet m. m. valtioneuvokset Björn Leijon ja Hogenskiöld Bjelke.</p>
      <p>Kuljettuamme Lepaan salmesta näemme edessämme Lahdentaan kartanon tornilla varustettuine päärakennuksineen. Kartano, jonka nykyään omistaa tarkastaja Hugo Hallamaa, on tunnettu jo keskiajalta saakka; silloin 
        sen omisti kuningatar Kristiina, minkä johdosta itse päätila myöskin on saanut nimen „Kristinehof”. Kartanon entisistä omistajista mainittakoot sotaneuvos O. E. Boije ja kapteeni A. Boije, jotka 1700- luvun 
        keskivaiheilla perustivat tilalle koulun pellavanviljelemistä ja kehruuta varten, vuorimestari Gustaf Idestam, senaattori A. V. Nykopp ja vapaaherra E. Standertskjöld.</p>
      <p>Lahdentaan kartanon pohjoispuolella aukeaa vihdoin eteemme laajana ja komeana suuri Vanajan selkä, jota myös kutsutaan Sääksmäen seläksi.</p>
      <p>Siinä missä harjut päättyvät Vanajan selkään, muodostuu erinomaisen luonnonihana pohjoiseen pistävä pitkä ja kapea niemeke Ruskeenkärki, jonka kohoavalla kummulla sijaitsee Hämeenlinnan Purjehdusseuran 
        vaatimaton paviljonki. Laaja Vanajanselkä tarjoaa ylipäänsä matkailijalle kaikkia niitä nähtävyyksiä, joita suuret sisämaanjärvemme voivat esittää. Lukuisat saaret ja luodot, metsäiset niemet, rannoilla 
        pilkoittavat huvilat, talot ja kylät tekevät matkan hauskaksi ja vaihtelevaksi.</p>
      <p>Keskellä Vanajan selkää on metsätön Pyterinsaari, jossa Hattulan, Tyrvännön, Sääksmäen ja Kalvolan pitäjät yhtyvät. Kuljettuamme Ruskeenkärjen ohi näemme vasemmalla päin pitkän lahden perukassa Hj. Gulinin 
        omistaman Tenholan kartanon sekä Heinun kylän ja valtioneuvos Eliel Aspelin-Haapkylän omistaman Rauhalahden kartanon. Muutaman kilometrin matkan edempänä Vanajan selän vasemmalla puolella on agronoomi A. v. 
        Konowin omistama Lahisten kartano. Sen aikaisempia omistajia ovat olleet Anna Tott, Klemet Hogenskiöld, Nils Bjelke, Karl de la Mott, Johan Adolf Schrey, M. K. F. Tudeer ja Emil v. Konow.</p>
      <p>Vastapäätä Lahisten kartanoa Vanajan selän oikealla rannalla sijaitsee Hakalan kartano ja kilometrin matkan päässä tästä pohjoiseen Pohjan saha ynnä samanniminen kartano. Vielä pohjoisempana on Sääksmäen 
        seurakunnan kirkko ja pappila. Kirkko, joka lienee rakennettu v. 1300 vaiheilla harmaasta kivestä. muutettiin v. 1841 ristikirkoksi. Kirkon ympärillä on seurakunnan hautausmaa, jonka patsaissa tapaamme nimiä 
        sellaisia kuin von Konow, Ramsay, Blåfield, Nervander y. m. Kilometrin matkan päässä kirkosta luoteeseen päin kohoaa kuuluisa Rapolan harju (120 metriä yli vieressä olevan Rautunselän pinnan), jolta on kaunis 
        ja laaja näköala ja jolla vielä näkee jäännöksiä pakanuuden aikaisesta muinaislinnasia. Harjun eteläpäässä sijaitsee Valdemar Niemisen omistama Voipaalan kartano, joka aikaisemmin on ollut Rutenhjelmin, 
        Gripenbergin, Nervanderin, Costianderin, Villgrenin ja Nordlingin sukujen hallussa. Täällä Odert Gripenberg 1800luvun alkupuolella perusti tunnetun koulunsa ja hänen veljensä Juhana Ulrik Sebastian 
        Gribenberg (1795-1869) alkoi talon vainioilla viljellä valkojuurikkaita, joiden jalostamista varten hän myöskin perusti tilalle sokeritehtaan, mitkä hankkeet kuitenkin kannattamattomina pian raukesivat.</p>
      <p>Rapolan harjun alapuolella sijaitsee Rapolan kartano, joka aikaisemmin on kuulunut Ruth- ja Svinhufvud -suvuille.</p>
      <p>Kuljettuamme Sääksmäen kirkon alla olevan niemen ohi, saavumme Rautunselälle, ja sivuutettuamme Rapolan kartanon näemme oikealla rannalla niemekkeellä Salon kylän, jota väitetään Sääksmäen pitäjän vanhimmaksi. 
        Kylän takana lahden pohjukassa sijaitsee Annilan talo, joka useita vuosia oli Vilhelms-suvun hallussa. Vastapäätä Salon kylää vesistön vasemmalla puolella sijaitsevat Vedentaan, Lantosten ja Mustilahden kylät. 
        Kuljettuamme taasen jonkun matkaa eteenpäin ja sivuutettuamme reitin oikealla puolella Valion kylän sekä vasemmalla puolella Liuttulan ja Kärjenniemen kylät, saavumme Valkiakosken kanavalle, jonka kummallakin 
        puolen sijaitsee Valkiakosken tehdaskylä suurine paperi- ja selluloosatehtaineen. Kylässä on myös höyrysaha, osuusmeijeri ja oluttehdas sekä postikonttori ja apteekki.</p>
      <p>Kanavan toisella puolella saavumme pian Apian kanavalle. josta eteemme avautuu laaja Mallasvesi. Sen koillispäässä näemme Pälkäneen seurakunnan kauniin kirkon, Syrjän harjun ja Onkkaalan kylän; tämän kylän 
        eteläpuolella Kostian virta yhdistää Mallasveden Pälkäne-veteen. Mallasvedellä kääntyy laivareitti vasemmalle päin Roineen selälle, jonka pohjoispäästä Kaivannon kanava johtaa Längelmäveteen. lähellä kanavaa 
        kohoavat Kangasalan harjut, joilta tarjoutuvat näköalat ovat maamme kauneimpia. Turhaan eivät runoilijamme niitä ole ylistäneet; Z. Topelius laulaakin niiden ihastuttamana: „Mä oksalla ylimmällä oon Harjulan 
        seljänteen. Niin kauas kuin silmään siintää nään järviä lahtineen. Kas, Längelmävesi tuolla vöin hopeisin hohtelee, ja Roineen armaiset aallot sen rantoja hyväilee!”</p>

      <h2>Tyrvännön reitti</h2>
      <p className="initialCap">Sivuutettuamme laivareitin oikealla puolella Landentaan kartanon ja Vanajaniemen talon, joka viimeksimainittu kuuluu Suomen Valtion omistamaan Lepaan kartanoon, avartuu Vanajavesi, joka tähän asti on kaarrellut 
        kapeana juovana, laajaksi Vanajan seläksi. Kuljettuamme kallioisen Vanajaniemen kärjen ohi, kääntyy laivareitti oikealle, ja sivuutettuamme oikealla puolella kauniin Puisniemen kärjen, saavumme kapeaan salmeen 
        jonka molemmilla rannoilla sijaitsee huviloita sekä salmen läpi kuljettuamme Suotaalan kylään Tyrvännön kappelissa. Kylän läheisyydessä sijaitsee Tyrvännön seurakunnan v. 1803 rakennettu puukirkko, korkealla 
        mäellä, josta on kaunis näköala Vanajan selälle. Niemessä vastapäätä Suotaalan laivalaituria on kunnan vaivaistalo. Jonkun matkaa eteenpäin kuljettuamme näemme edessämme Siukolan talon sekä siitä oikealle 
        Vanajavedestä kaakkoon pistäytyvän lahdelman rannalla Lusin ja Anomaan kylät. Siukolan talosta kilometrin matkaa luoteeseen päin Vanajan selän rannalla sijaitsee Monittulan talo, joka aikaisemmin on kuulunut 
        De la Gardie·suvulle, sekä tästä eteenpäin Retulan kylä isossa samannimisessä saaressa, joka sillalla on yhdistetty mannermaahan ja jolla saarella sijaitsee Ylikartanon, Alikartanon ja Laurilan tilat. 
        Retulan kylä on aikoinaan kuulunut von Fersenin, Hufvudshjöldin, Tavastin, Klickin ja Lintzen suvuille.</p>
      <p>Kuljettuamme Retulan saaren ohi saavumme Monaalan kylän laiturille, jonka läheisyydessä sijaitsee agronoomi A. Koljosen omistama Monaalan kartano sekä niemellä vastapäätä Monaalan kylää Mälkiäisten kylä. 
        Monaalan ja Mälkiäisten kylien välistä pistäytyy pohjoiseen päin kapea Uskin lahti, jonka perukassa sijaitsee Uskin kylä sekä lahden vasemmalla puolella jonkun matkan päässä rannasta tohtori K. Holmbergin 
        omistama Haukilan kartano, joka pitkät ajat oli Gardemeister-suvun hallussa. Mälkiäisten kylän länsipuolella kulkee keskellä Vanajan selkää sijaitsevaa Pyterin saaria kohti Sääksmäen pitäjän ja Tyrvännön 
        kappelin välinen raja, minkä yli kuljettuamme näemme edessämme Rekolan, Ikkalan ja Oitin talot, josta viimeksi mainitusta pitkä ja kapea Oitin kärki pistäytyy Vanajaveteen Pyterin saarta ja selän toisella 
        puolella olevaa Ruskeen kärkeä kohden.</p>
      <p>Päästyämme Oitin kärjen ohi sivuutamme tohtori A. V. Blomqvistin omistaman Helkavuoren tilan kauniine huvilan muotoon rakennettuine asuinrakennuksineen Ritvalan harjun länsi rinteellä ja saavumme saman harjun 
        pohjoisessa päässä sijaitsevaan Hakalan taloon, jota aikaisemmin on omistanut ruununvouti Georg Nordenswan.</p>

      <a className="hyperlink" href="https://digi.kirjastot.fi/files/original/9bec0ea75c19b7e3eab7874300fb11e0.pdf">Lähde</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Matkailuopas 1915</title> // metadata

export default MatkailuopasPage