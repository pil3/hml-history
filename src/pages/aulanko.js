import * as React from "react"

import Layout from "../components/layout"
import ImageModal from "../components/imageModal";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/base/global.css"

const AulankoPage = () => {
  return (
    <Layout titleText="Kuvia Aulangolta">
      <Row>
      <div className="interTitleStyle">1890</div>
      </Row>  
      <Row className="marginYStyle">
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/58532e43ea6f66ae3f409b9faf5ff591.jpg"
            titleText="~1890"
            detailsText="Suurten tekolampien kaivaminen aloitettiin Aulangolla talvella 1885. Joutsenlampena tunnettu lampi kaivettiin ensimmäisenä Suvussuo-nimiseen paikkaan, 
                        jonka eversti Standertskjöld oli edellisenä kesänä Aulangonvuorella käydessään huomannut lammelle sopivaksi. Lampi kaivettiin miestyövoimalla ja lapioilla, 
                        mutta turpeen ja mudan pois kuljettamisessa käytettiin hevosajoneuvoja. Kaivettu maa levitettiin tasoitukseksi ja maanparannukseksi metsään ja puistoalueelle. 
                        Kivistä rakennettiin reunuksia ja kiviaitoja. Joutsenlampeen tehtiin myös tekosaari, jonne rakennettiin lintuhuvila."
            copyrightText="Julkaistu painettuna: A. Alopaeuksen Kirjakauppa - A. Alopaeus Bokhandel, Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/5b05e569bdf6bed82c4788fcdd204343.jpg"
            titleText="~1890"
            detailsText="'2nen Joutsenlampi' eli Metsälampi valmistui entisen Linnasuon paikalle Joutsenlammen ja Aulangonjärven väliin jäävälle alueelle 1880-luvun lopulla. 
            Lammen rannalle istutettiin hopeapajua ja rannat kivettiin, samoin kuin vähän aikaisemmin rakennetulla Joutsenlammella. Metsälammen pohjoispäähän rakennettiin 
            kuvan goottilaistyylinen paviljonki, jota ympäröivään Ruusulaaksoon istutettiin jalopuita ja myös ruusuja, mutta ilmeisesti ruusut menestyivät siellä huonosti ja 
            hävisivät nopeasti. Ruusulaakson paviljongin edessä oli laituri, josta saattoi lähteä soutelemaan lammelle. Metsälammen eteläpäässä oli vielä toinen, pienempi paviljonki."
            copyrightText="Julkaistu painettuna: A. Alopaeuksen Kirjakauppa - A. Alopaeus Bokhandel, Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
      </Row>
      <Row className="marginYStyle">
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/7d45a969f0098260d1a5b5de11247a8e.jpg"
            titleText="~1890"
            detailsText="Lusikkaniemi on yksi Aulangon tunnetuimmista maamerkeistä ja valokuvatuimmista kohteista. Niemi on saanut nimensä lusikkamaisesta muodostaan, 
            joka Aulangonvuorelta alas katsellessa näkyy selvästi. Tässä postikortissa Lusikkaniemestä on käytetty nimeä Aulangon niemi. Myös Hiidenniemi-nimitys tunnetaan 
            varhaisemmilta ajoilta. Mahdollisesti niemessä on esihistoriallisena aikana sijainnut uhripaikka."
            copyrightText="Julkaistu painettuna: A. Alopaeuksen Kirjakauppa - A. Alopaeus Bokhandel, Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://www.finna.fi/Cover/Show?source=Solr&id=spegeln-bildsamlingarna.bildsam_1935_23%3A19&index=0&size=large"
            titleText="~1890"
            detailsText="Karlbergin ja Aulangon omistaja eversti Hugo Standertskjöld alkoi 1880-luvun puolivälissä panna toimeen 'suurenmoisia kaunistustöitä' Karlbergin kartanon seuduilla. 
            Aulangonvuoren huipulle tehtiin uusi tie kartanosta ja rakennettiin kaksi kaunista huvimajaa vuonna 1886. Postikortin kuvassa on toinen näistä huvimajoista. Koristeellisesta 
            paviljongista avautui kaunis näköala kohti kuvan taustalla näkyvää Aulangonjärveä ja Lusikkaniemeä ja aina naapuripitäjiin asti. Nykyisin samalla paikalla sijaitsee vuonna 1934 
            rakennettu kaksikerroksinen näköalatasanne."
            copyrightText="Åbo Akademin arkistokokoelmat - Lagergrén, Svante (1844-1900), fotograf"
          />
        </Col>
      </Row>
      <div className="verticalSpacer"></div>
      <Row className="marginYStyle">
      <div className="interTitleStyle">1900</div>
      </Row> 
      <Row className="marginYStyle">
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/4a48bc1b9b1f41f2f65f0e8ad6deb6e5.jpg"
            titleText="~1900"
            detailsText="Karlbergin ja Aulangon omistaja eversti Hugo Standertskjöld alkoi 1880-luvun puolivälissä panna toimeen 'suurenmoisia kaunistustöitä' Karlbergin kartanon seuduilla. 
            Aulangonvuoren huipulle tehtiin uusi tie kartanosta ja rakennettiin kaksi kaunista huvimajaa vuonna 1886. Postikortin kuvassa on toinen näistä huvimajoista. Koristeellisesta 
            paviljongista avautui kaunis näköala kohti kuvan taustalla näkyvää Aulangonjärveä ja Lusikkaniemeä ja aina naapuripitäjiin asti. Nykyisin samalla paikalla sijaitsee vuonna 1934 
            rakennettu kaksikerroksinen näköalatasanne."
            copyrightText="Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma), Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/52828cdc64853f24e0f1860984d4d9e7.jpg"
            titleText="1907"
            detailsText="Karlbergin kartanon ympärillä oleva edustapuisto rajautui pohjoisen puolella saunarakennukseen ja sähkölaitokseen sekä siihen liittyneisiin rakennelmiin. 
            Eversti Standertskjöld oli innostunut kaikista uusista keksinnöistä. Niinpä hän rakennutti Karlbergiin myös oman sähkölaitoksen. Sähkölaitos oli punatiilinen, pientä linnaa 
            muistuttava rakennus, jossa vesivoiman avulla tuotettiin sähköä koko kartanon alueelle jo 1900-luvun vaihteesta lähtien. Vanha sähkölaitosrakennus on edelleen olemassa nykyisen 
            Aulangon kylpylähotellin vieressä Vanajaveden rannassa. Muut kuvan rakennukset on purettu."
            copyrightText="Julkaistu painettuna: Hämeenlinna - Tavastehus : Enok Rytkönen."
          />
        </Col>
      </Row>
      <div className="verticalSpacer"></div>
      <Row className="marginYStyle">
      <div className="interTitleStyle">1910</div>
      </Row> 
      <Row className="marginYStyle">
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/19547f337fe86add58ba7ff7ebdaef43.jpg"
            titleText="1912"
            detailsText="Karlbergin kartanon edustapuisto kunnostettiin Standertskjöldin aikana upeaksi muotopuutarhaksi: 'Kartanon suurta puutarhaa on suuresti laajennettu ja kaunistettu. 
            Siinä kasvaa kaikenlaatuisia puita, vielä useampia lajeja kuin kaupungin parkissa, esim. hopeapoppelia ja cypressiä, paitsi tammia ja lehmuksia y.m. ... Itse kartanon edessä kasvaa 
            monta lajia kukkia monenmuotoisissa rabateissa. Täällä on myöskin suurista kallion lohkareista muodostettu luola, jossa on kalvetta suven helteellä ja jossa suihkulähde vielä ilmaa virkistää. 
            ... Monta muutakin veistokuvaa on puutarhassa sekä kauniita vaaseja. Reflexionipalloja on useita sekä suuria erivärisiä vedellä täytettyjä lasipalloja, jotka auringon paisteessa näyttävät 
            mahdottomilta kastehelmiltä.'"
            copyrightText="Suomalainen kirjakauppa / Hämeenlinna, Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
      </Row>
      <div className="verticalSpacer"></div>
      <Row className="marginYStyle">
      <div className="interTitleStyle">1920</div>
      </Row> 
      <Row className="marginYStyle">
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/3b3500a7d8fd7afb5427f678bf4ad6c8.jpg"
            titleText="~1920"
            detailsText="Karlbergin kartanoa ympäröivän puiston suunnitelmia ei ole säilynyt. Kartanon puutarhureina toimineiden ruotsalaisten veljesten, Erik ja Karl Zetterlöfin arvellaan vaikuttaneen 
            suuresti puiston ja puutarhan muotoutumiseen. Erik Zetterlöf tuli everstin palvelukseen vuonna 1898, ja häntä seurasi Karl, joka oli puutarhamestarina vuosina 1897–1913. Karl Zetterlöf loi myös 
            Karlbergin mittavat kasvihuoneet. Pääpuutarhurin lisäksi kartanossa työskenteli kesäisin sekä suomalaisia että ruotsalaisia puutarha-apulaisia ja -oppilaita."
            copyrightText="Suomalainen kirjakauppa / Hämeenlinna, Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/e6d248e13fd7f82e01b69757d24ab368.jpg"
            titleText="~1920"
            detailsText="Karlbergin kartanon rantapuistossa oli kävelyteiden varsilla penkkejä, joissa saattoi levähtää ja ihailla puiston istutuksia ja muita kaunistuksia, kuten antiikin veistoksia mukailevia 
            kuvapatsaita. 1800-luvun puolella puistoon hankittiin mustia, valurautaisia penkkejä, jotka olivat kasviaihein koristeltuja. Myöhemmin valurautapenkeissä oli puinen istuinosa. Näitä kuvassakin 
            näkyviä penkkejä oli vielä 1930-luvullakin väliaikaisen hotellin puistossa. 1930-luvulla puistoon hankittiin myös yksinkertaisia valkoisia puupenkkejä."
            copyrightText="Suomalainen kirjakauppa / Hämeenlinna, Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
      </Row>
      <Row className="marginYStyle">
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/a113f51ac9a3eface5478564fc6fd9ab.jpg"
            titleText="~1925"
            detailsText="Karlbergin kartanon päärakennuksen pohjoispuolella oli tukimuurilla rajattu pienehkö edustuspiha nurmikenttineen ja kukkaistutuksineen. Tukimuurin alapuolella kasvoi muutamia kuusia, 
            ja kartanon talouspiha alkoi välittömästi pihan vierestä. Eversti Standertskjöld istututti rantaa kiertävän polun varrelle hopeapajurivistön, joka kuvassa myötäilee Aronlahden rantaviivaa. 
            Vuonna 1926 Standertskjöld myi kartanon Hämeenlinnan kaupungille. Karlbergiin perustettiin matkailijahotelli ja ravintola, jotka olivat kuitenkin ehtineet toimia vain vajaan vuoden, kun tulipalo 
            tuhosi talvella 1928 kartanon päärakennuksen kokonaan."
            copyrightText="Suomalainen kirjakauppa / Hämeenlinna, Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/c1c1a95902e8d330a6901cad06fb3321.jpg"
            titleText="~1926"
            detailsText="Karlbergin kartanon ja Vanajaveden rannan väliin jäävässä puistossa oli edelleen 1920-luvulla hyvinhoidettuja käytäviä, tasaista ruohikkoa ja upeita kukkaistutuksia. Lämpiminä kesäpäivinä 
            saattoi levähtää mukavilla penkeillä puiden alla suojassa auringolta. Etualan pienten ruukkupuiden taakse jää puiston suihkulähde. Hopeapajut reunustavat Vanajaveden rantaviivaa seurailevaa kävelytietä, 
            ja taustalla näkyy vuonna 1924 valmistunut järven ylittävä rautatiesilta."
            copyrightText="Julkaistu painettuna: Hämeenlinna : Suomalainen kirjakauppa Oy, Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
      </Row>
      <Row className="marginYStyle">
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://www.finna.fi/Cover/Show?source=Solr&id=kerava_mui.mui-1273&index=0&size=large"
            titleText="1926"
            detailsText="Karlbergin kartanon päärakennus Aulangolla elokuussa 1926"
            copyrightText="Keravan museopalvelut - Elna Granqvistin kokoelma - CC BY-NC-ND 4.0"
          />
        </Col>
      </Row>
      <div className="verticalSpacer"></div>
      <Row className="marginYStyle">
      <div className="interTitleStyle">1930</div>
      </Row>
      <Row className="marginYStyle">
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/a38f130c1dd0fcb984a37cd56c83a1aa.jpg"
            titleText="~1930"
            detailsText="Aulangonvuoren näkötorni ja graniittiset kiviportaat vuoren huipulta alas Karhuluolalle valmistuivat vuonna 1907. Askelmia jyrkkään rinteeseen rakennetussa portaikossa on yhteensä 322, 
            joten pieni levähdystasanne kivisine penkkeineen ja pöytineen oli myös tarpeen."
            copyrightText="Suomen valokuva - Kaarlo Lindberg, Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/125a5957f4aaa9812dde3b7aa42456f0.jpg"
            titleText="~1930"
            detailsText="Karlbergin kartano puistoineen siirtyi Hämeenlinnan kaupungin omistukseen vuonna 1926. Seuraavana vuonna perustettiin Matkailukeskus Karlberg-Aulanko Oy, jolle kaupunki vuokrasi päärakennuksen 
            ja muutamia sivurakennuksia. Vanhaan päärakennukseen avattiin hotelli-ravintola. Karlbergin päärakennus tuhoutui kuitenkin jo seuraavana vuonna tulipalossa. Samalle paikalle rakennettiin uusi, arkkitehti 
            Matti Välikankaan suunnittelema hotelli- ja ravintolarakennus. Aulangon suosio matkailukohteena kasvoi kuitenkin niin, että kymmenen vuotta myöhemmin rakennus oli jo käynyt liian pieneksi. Se purettiin ja 
            pystytettiin uudestaan Tyrvännön Heralaan. Vuonna 1938 valmistui nykyinen funktionalistinen hotellirakennus, jonka arkkitehteina olivat Märta Blomstedt ja Matti Lampén."
            copyrightText="Suomalainen kirjakauppa / Hämeenlinna, Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
      </Row>
      <Row className="marginYStyle">
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/4c12b1e2c7696729f07a750ee03d1971.jpg"
            titleText="~1930"
            detailsText="Eversti Hugo Standertskjöldin aikana Aulangon puistoon kaivettiin kaksi lampea ja niistä kertyneestä irtomaasta tehtiin Mäntykärkeen Vanajaveden rannan lähelle kaksi tekosaarta. Kuvan vasemmassa 
            reunassa näkyy osa tekosaarille johtavaa siltaa. Tekosaarten kohdalle rakennettiin 1930-luvulla funkkistyylinen kioski. Kioskin lähellä oli uimaranta ja pukeutumiskoppeja uimareita varten. Täällä Mäntykärjen 
            pohjoiskulmassa sijaitsi everstin aikana yksi Aulangon lukuisista huvimajoista."
            copyrightText="Julkaistu painettuna: Rytkösen kirjakauppa, Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/ed2aafbd41a0f74ee87ae3c10e956c87.jpg"
            titleText="~1930"
            detailsText="Tammikuussa 1928 tulipalossa tuhoutuneen Karlbergin päärakennuksen paikalle rakennettiin nopeassa tahdissa klassistinen ja hyvin maisemaan sopiva puinen ravintola-hotelli, joka avattiin jo vuoden 
            1928 kesäkuussa. Rakennus oli arkkitehti Matti Välikankaan suunnittelema, samoin kuin kuvassa näkyvä vuonna 1933 valmistunut ravintolan laajennusosa, puolipyöreä ruokasali rakennuksen länsipäässä. Kuvassa 
            näkyy myös ravintolan edustapuistoa, jossa on Standertskjöldin ajalta peräisin oleva suihkulähde. Puiston istutukset olivat yksinkertaisemmat kuin everstin aikana, mutta puistoa hoidettiin edelleen huolellisesti. 
            Ruukuissa kasvatettiin kesäisin palmuja, agaveja ja kaktuksia ja nurmikentillä oli runsaita kukkaistutuksia. Kuvan vasemmassa reunassa näkyy Karlbergin kartanon koristeellinen kylpylaitos eli eversti Standertskjöldin 
            aikana rakennettu saunarakennus."
            copyrightText="Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
      </Row>
      <Row className="marginYStyle">
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/ab60acb9c2dd0334a46ac4d82c45bb83.jpg"
            titleText="~1930"
            detailsText="Aulangon puistometsän länsilaidalla sijaitseva Graniittilinna eli Rauniolinna on rakennettu vuonna 1887. Graniittilinnan piirustukset laati insinööri F. W. von Schultz. Linnarakennelmaan kuuluu kolme tornia, 
            joista yksi on muita korkeampi. Matalampiin torneihin pääsee kiipeämään ulkokautta ja korkeammassa tornissa portaat ovat sisäpuolella. Kun Karlbergin kartanossa oli juhlat, liput liehuivat torneissa ja tervetulolaukaukset 
            kaikuivat linnakkeelta. Graniittilinna oli myös tärkeä näköalapaikka vuosisadan vaihteessa, kun puusto sen ympärillä ei vielä peittänyt näkymiä."
            copyrightText="Suomalainen kirjakauppa / Hämeenlinna, Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/66c26edf9097c39cd02781e9d46e4392.jpg"
            titleText="~1930"
            detailsText="Hugo Standertskjöldin aikana Karlbergin kartanon päärakennus uudistettiin barokkityyliin. Kesävieraita varten arkkitehti Waldemar Aspelin suunnitteli samaa tyyliä edustavan erillisen Ritarimajan eli 
            Kavaljeerirakennuksen, joka valmistui vuonna 1890. Rakennuksessa oli kahdeksan huonetta, joihin oli kulku keskellä rakennusta sijaitsevasta hallista. Sisäänkäyntiä vartioivat haarniskapukuiset ritarit. 
            Kavaljeerirakennuksen takana näkyy osa vuosina 1928-1937 Aulangolla olleesta ravintola- ja hotellirakennuksesta."
            copyrightText="Suomen valokuva - Kaarlo Lindberg, Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
      </Row>
      <Row className="marginYStyle">
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/3ed7b92604014ef37c9ba28db10d137a.jpg"
            titleText="~1930"
            detailsText="Karlbergin kartanon päärakennus tuhoutui tulipalossa vuonna 1928. Seuraavana vuonna sen tilalle rakennettiin arkkitehti Martti Välikankaan piirustusten mukaan uusi klassistinen hotelli- ja ravintolarakennus. 
            Rakennuksessa oli 12 huonetta ja suuri pylväiden kannattelema ravintolaterassi julkisivun puolella. Vuonna 1933 ravintolaa jatkettiin rakentamalla sen länsipäähän uusi kaarevanmuotoinen ruokasali, 
            joka oli myös arkkitehti Välikankaan suunnittelema. Koko rakennus purettiin uuden hotellin tieltä vuonna 1937 ja siirrettiin Heralan tilalle Tyrväntöön. Samalle paikalle valmistui uusi ja paljon suurempi funktionalistista 
            tyyliä edustava hotellirakennus vuonna 1938."
            copyrightText="Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma), Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/176e46cf96e88b03defd16d60abf6437.jpg"
            titleText="~1930"
            detailsText="Katajiston kartano on rakennettu 1800-luvun alkupuolella ratsutilan päärakennukseksi. Aulangon perustaja eversti Hugo Standertskjöldin sai kartanon omistukseensa 1880-luvulla. Standertskjöldin aikana 
            rakennuksessa oli lähinnä majoitustiloja everstin vieraille. Katajisto oli matkailijoiden käytössä myös everstin ajan jälkeen. Kartanon toinen kerros tuhoutui tulipalossa talvella 1949. Toista kerrosta ei koskaan 
            rakennettu uudelleen, koska rakennus piti korjata kiireesti vuoden 1952 olympialaisten viisiottelijoiden majoitustilaksi. Nykyään rakennuksessa toimii ravintola- ja matkailuyritys Katajistonranta."
            copyrightText="Hämeenlinnan postimerkkikerho ry. (Matti Parkkosen yksityiskokoelma), Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
      </Row>
      <Row className="marginYStyle">
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/9a409928f17cb984fe14f89f9cc2f7f5.jpg"
            titleText="~1933"
            detailsText="Vuonna 1934 ilmestynyt Hämeenlinnan matkaopas kuvailee Aulangon väliaikaisen ravintolarakennuksen kuistilta avautuvaa näkymää näin: 'Pääravintolan kuistilta aukeaa eteemme ainutlaatuinen näky: 
            suurenmoinen puisto suihkukaivoineen, oikealla loivasti kaartuva, kivetty ranta ja edempänä taustalla Birger Jarlin linna ja sen takana kohoutuva Hämeenlinna. Siinä on näköalan ihanuutta, joka etsii vertojaan.'"
            copyrightText="Suomalainen kirjakauppa / Hämeenlinna, Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
        <Col>
          <ImageModal
            imageStyle="centeredImageStyle  maxHeightStyle"
            imagePath="https://digi.kirjastot.fi/files/fullsize/0b3c5469823cef7b809e10c260c4309e.jpg"
            titleText="~1939"
            detailsText="Vuonna 1936 Hämeenlinnan kaupunki myi Aulangon hotellin ympäristöineen Suomen Matkailijayhdistykselle, joka perusti yhdessä Oy Alkoholiliike Ab:n ja Suomen Höyrylaiva Oy:n kanssa Aulanko-osakeyhtiön. 
            Uusi yhtiö rakennutti vuonna 1938 uudenaikaisen suurhotellin, jonka suunnittelusta vastasivat arkkitehdit Matti Lampén ja Märta Blomstedt. Hotellin moderni, funktionalistinen arkkitehtuuri herätti paljon kiinnostusta, 
            myös ulkomailla. Hotellirakennus ja sen sisustus oli suunniteltu kokonaistaideteokseksi huonekaluja, tekstiileitä ja astioita myöten. Hotellihuoneita uudessa päärakennuksessa oli 56, ja niissä oli yhteensä 83 vuodepaikkaa. 
            Jokaisella huoneella oli oma parveke, josta aukeni kaunis näköala kohti Vanajavettä. Ravintolasaliin mahtui kerralla jopa 760 ruokailijaa, ja ravintolaan liittyi myös laaja ulkoterassi. Hotellin huippukoneistetut 
            keittiötilat ja leipomo edustivat alan uusinta tekniikkaa. Aulanko olikin aikoinaan todellinen loistohotelli, jossa lomailu oli mahdollista vain varakkaammalle väelle."
            copyrightText="Suomalainen kirjakauppa / Hämeenlinna, Hämeenlinnan kaupunginkirjasto"
          />
        </Col>
      </Row>
    </Layout>
  )
}
export const Head = () => <title>Aulanko</title> // metadata

export default AulankoPage