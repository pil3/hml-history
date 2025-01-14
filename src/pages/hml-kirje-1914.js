import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import "../styles/base/global.css"

import SubDivider from "../assets/sub-divider.svg"
import Divider from "../assets/divider.svg"

const Letter1914Page = () => {
  return (
    <Layout titleText="Hämeen Sanomat, 1914">
      <h2>Hämeenlinnan kirje</h2>

      <Article titleText="12.2.1914">
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
        <h5>* * *</h5>
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
        <h5>* * *</h5>
        <p>Kun olen tässä raittiusasiasta näin pitkälle puhunut, tahdon lopuksi kiinnittää herrain waltuusmiesten huomiota siihen anomukseen, jonka täkäläinen raittiuswäki on tehnyt wäkijuomain 
          anniskelun rajoittamiseksi. Raittiuswäki ei ole liikoja waatinut, joten sen anomus on otettawa huomioon. Muistakoot waltuusmiehet pääkaupungin isäin tekemiä rajotuksia.</p>
        <p>Tänään päätetään siitä, monetko anniskeluoikeudet myönnetään. Nykyiseltä waltuustolta ei woi tietysti suuria toiwoa. Suomalaisen puolueen waltuusmiehet owat kuitenkin ehdottaneet, että yhdet 
          oikeudet otettaisiin pois ja tehtäisiin kaupunginhotellista raitis matkustajarawintola. Tätä kohtuullista waatimusta owat ruotsalais-nuorsuomalaiset ruwenneet wastustamaan, jonka takia eräs 
          suomalainen waltuusmies on ehdottanut sellaista rajoitusta, että mainitussa hotellissa tarjottaisiin yksinomaan matkustajille wäkijuomia.</p>
        <h5>* * *</h5>
        <p>Ilmat owat wallan merkillisiä. On kowin pakkasaika, helmikuun puoliwäli, mutta luonto leikittelee, wiskelee wettä kuin huhtikuun lopulla. Mitä tästä enää tuleekaan, jos tällaista pitemmälti 
          jatkuu. Lumi on mennyt kaiken maailman tietä ja jäätkin käywät heikoiksi. Kelirikko kukoistaa, käyttääkseni
           kewätkieltä. Kärryillä ajetaan kuin toukokuussa. Ihmiset kummittelewat 
          talwitamineissa. Paljon huolta ja wahinkoa tällainen talwi tekee jokaiselle, mutta warsinkin maamiehelle ja rahdinajajalle. Wanhat ennustawat, että maaliskuussa kylwetään ja toukokuussa 
          ajetaan reellä. Se näkee, joka elää. Jos koskaan, niin nyt pitää paikkansa sananlasku: <span className="quote">Kewättä kynttelistä j. n. e.</span>.</p>
        <h5>* * *</h5>
        <p>Poliisijärjestyksen 96 §:ä kummittelee ja tekee häiriötä edelleen. Mainittu pykälä kieltää jälleenmyyjiä ostamasta ennen määräaikaa, jonka johdosta he owat walitelleet senaattiin ja 
          kuwernöörinwirastoon sillä seurauksella, että sakkotuomiot on kumottu ja 96 § selitetty ristiriitaiseksi elinkeinolain kanssa. Asian pitäisi siis olla selwä ja maistraatin muuttaman pykälä, 
          kun se kerran on lainwastainen, niin tarpeellinen kuin se kaupunkilaisten mielestä olisikin. Mutta kuinka onkaan. Torikauppioille mätkitään uusia sakkoja, waikka entiset owat korkeimmissa 
          wirastoissa kumotut. Ihmekö, että moinen menettely jälleen myyjiä harmittaa. He owat hakeneet oikeutta ja saaneet, mutta wain paperilla. Tuo on tosiaan kiusantekoa ja lain halweksimista.</p>
        <p>Asia tulee tänään esille waltuustossa. Ristiriitaisuusnäytelmä on jo tarpeeksi kauan kestänyt. Toiwottawasti siitä jo tehdään loppu.</p>
        <h5>* * *</h5>
        <p>H:linnan Suomal. Seuralla on sunnuntaina wuosikokous klo 7 ip. talollaan. Siellä keskustellaan ja päätetään tärkeistä asioista. Jäsenet, naiset ja miehet, rientäkääpä kokoukseen alkamaan 
          uutta, reipasta, woitoista rikasta toimintawuotta! Miten innokkaaksi toiminta woitaisikaan saada, jos yhä useammat tulisiwat mukaan.</p>
        <SubDivider className="dividerStyle" />
        <p className="signature">Tiitus.</p>
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="21.2.1914">
        <h5>200-wuotismuisto.</h5>
        <h5>Kotoisen puolesta.</h5>
        <h5>Naapurin pärskähdykset.</h5>
        <h5>Suomen Pankki.</h5>
        <SubDivider className="dividerStyle" />
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
        <h5>* * *</h5>
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
        <h5>* * *</h5>
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
        <h5>* * *</h5>
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
        <h5>* * *</h5>
        <p>Puoluelaitokseksi tahdotaan tehdä Suomen Pankin Hämeenlinnan konttori, jonka diskonttokomitean jäseneksi on walittu yksinomaan ruotsalaisia ja heidän kannattajiaan huolimatta siitä, että 
          suomalainen wäestö muodostaa täällä waltawan enemmistön. Yksi muutos on tapahtunut, warat. Idestamin sijaan on walittu ent. lääninsihteeri Chydenius. Mitenkä yksipuolisesti asiat tulee 
          hoidettua ja suomalainen liikemiessääty lapsipuolen asemaan, sen tietää sanomattakin. Pankin täkäl. konttorin johtajana on ruotsinmielinen mies, samaan joukkoon kuuluwat muutkin wirkailijat. 
          Siis puhdasta, walittua wäkeä.</p>
        <p>Yksityisetkin pankit yrittäwät olla tasapuolisia, mutta waltion pankki ei wain siitä näy wälittäwän.</p>
        <SubDivider className="dividerStyle" />
        <p className="signature">Tiitus.</p>
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="25.4.1914">
        <h5>Säästöpankkien woittowarat.</h5>
        <h5>Nimet suomalaisiksi.</h5>
        <h5>Wappu raittiiksi.</h5>
        <h5>Puistowaliokunnille.</h5>
        <h5>Kewät.</h5>
        <SubDivider className="dividerStyle" />
        <p>Säästöpankkien woittowarojen jako on wiime wuosina herättänyt paljon puheen aihetta. On alettu lausua toiwomuksia, että näitä waroja myönnettäisiin yleisiin 
          hywäntekewäisyystarkoituksiinkin.</p>
        <p>Muistui mieleeni Hämeenlinnan kaupungin Säästöpankki, kun kuulin, minkälaisiin tarkoituksiin Porwoon Säästöpankki woittowarojaan jakaa. Wiimeksi mainittu pankki jakoi wiime wuoden 
          woittowaroista useita tuhansia keuhkotaudin wastustamiseksi, sairaskodille, lastenkodille, kansanopistoyhdistyksille, yhteiskoululle ja tyttökoululle, synnytyslaitokselle, 
          raittiusyhdistyksille, naisyhdistykselle, palkinnoksi köyhille äideille hywästä lasten hoidosta ja puhtaudesta kodissa, pelastusarmeijalle, maamiesseuralle, museo yhdistykselle, 
          musiikkirientoihin, kansakoulun oppilaille, seminaarilaisille opintoja warten, kaupan, teollisuuden ja käsityön opintojen jatkamiseksi ulkomailla, Marttayhdistykselle y. m. yhtä hywiin ja 
          kannatettawiin tarkoituksiin muistaakseni yhteensä lähes 20,000 mk.</p>
        <p>Hämeenlinnan kaupungin Säästöpankinkin sopisi seurata Porwoon pankin esimerkkiä? Eiwätköhän pankin raha-asiat ala jo olla sellaisella kannalla, että sillä on oikeus tehdä lahjoituksia 
          yleishyödyllisiin tarkoituksiin?</p>
        <h5>* * *</h5>
        <p>Toukokuun 12:na tulee kahdeksan wuotta kuluneeksi siitä kun suuri osa tätä kansaa haltioitunein mielin riensi riisumaan päältään wiimeisenkin ruotsalaisuuden, wiimeisenkin kansallisen 
          alennustilansa warjon: muukalaisen nimen. Se kewät, sen hehkuwa, itsetietoinen innostus on liiaksi ikimuistettawa unohtuakseen, ja wielä nytkin, kun wälillä on kahdeksan pitkää, 
          kansallisessa merkityksessä pimeätä ja kuollutta wuotta, wielä nytkin ailahtaa ilo mielessä ja sydämeen tunkeutuu luottamus ja toiwo.- Wieläköhän se kewät kerran palaisi?!</p>
        <p>Mutta tämä kewät on wiimeinen mahdollinen, tämä toukokuun kahdestoista on wiimeinen laatuaan niissä merkeissä. Meillehän walmistetaan asetusta, joka kieltää kaiken nimien muuttamisen ja 
          suomalaistuttamisen. Ensi kewäänä se kait on jo woimassa, tämä kewät on wiimeinen mahdollinen.</p>
        <p>- Olisiko siis tämä kewät se suuri, se takaisin toiwottu?!</p>
        <p>Sen täytyy se olla! Katsokaa itseänne kaikki te, joilla on ruotsalainen, muukalainen, wieraalta korwaan sattuwa nimi, mutta jotka käytte ja haluatte käydä suomalaisista ja toiwotte 
          rehellisesti, että kaikki teidän jälkeläisennekin sukupolwesta sukupolween pysywät suomalaisina, tarkatkaa itseänne nyt kun on wiimeinen mahdollisuus, kun arpa kerta kaikkiaan on 
          heitettäwä: <span className="accent">haluatteko te peruuttamattomasti itsenne ja jälkeläistenne puolesta jättäytyä wieraan nimen warjoon</span>?</p>
        <p>Olen monasti säälinyt nykypolwen ihmistä. Heidän iso-isänsä owat kenties wielä osanneet lukea ja kirjoittaa nimensä oikein, heidän jälkeläisensä hikoilewat nimiensä kimpussa, milloin se on 
          Päri, milloin Peri ja Perki. Ja kerran selitti muuan Åberg-niminen mies mimulle ihan tosissaan, että „kyllähän minua Ooperiksi sanotaan, mutta Ääperi se nimi oikeastaan on”. Mitä etäämmälle 
          suomalaisuus edistyy ja ruotsalaisuus joutuu syrjään, sitä naurettawammaksi ja onnettomammaksi muodostuu muinaisten ruotsalaisten nimien sekamelska maassamme.</p>
        <p>Pois siis ajoissa ja niin kauwan kuin wielä on mahdollista muukalaiset nimet! Suomalaisuuden Liitto on ryhtynyt woimakkaisiin toimenpiteisiin saadakseen tämänkewäisen Snellmanin-päiwän 
          suureksi nimien suomalaistuttamispäiwäksi. Nimien suomalaistuttaminen ei maksa kuin jonkun pennin ja wielä toukokuun 6:na päiwänä Helsinkiin saapuwat muutosilmoitukset ennättäwät 
          wirallisten lehtien Snellmanin päiwänä julkaistawaan lisälehteen. Hämeenlinnassa toimii paikallisena ilmoitusten wälittäjänä <span className="accent">„Hämeen Sanomain” konttori</span>.</p>
        <p>Kansallistuntomme, kansallinen itsetietoisuutemme ja ylpeytemme on nyt jälleen pantu koetukselle. Tämä koe on kuin luotirihma heitettynä waaran hetkellä: se tulee joko todistamaan, että me 
          olemme walweutuneita, että täällä on itsetietoinen, woimakas kansa, tai todistaa se päinwastaista - ja woi meitä silloin!</p>
        <p>Mutta merkit wiittaawat edelliseen, pitäkööt ne paikkansa. Kutsu käy, kehoitus on annettu, me odotamme wastausta!</p>
        <h5>* * *</h5>
        <p>Wappu raittiiksi! Se huuto on wiime päiwinä kaikunut sanomalehtien palstoilla. Eikä suotta. Tuo ensimäinen kesäpäiwä on muodostunut monin paikoin juopottelun ja huonon elämän 
          riemupäiwäksi. Wapunpäiwä on wapauden, puhtauden ja nuoruuden päiwä, jota ei sowi häiritä wäkijuomilla. Wappu siis todellakin raittiiksi!</p>
        <p>Hämeenlinnan raittiuspiiritoimikunta on pyytänyt läänin kuwernööriä suitsemaan wäkijuomakaupat, anniskelut ja rawintolat. Toiwottawasti tämä kohtuullinen anomus saawuttaa suotuisan 
          ratkaisun.</p>
        <h5>* * *</h5>
        <p>Puistowaliokunnille on pyydetty huomauttamaan, että se hommaisi täksi kesäksi entistä enemmän istuimia Rantapuistoon, jossa kesäisin on paljon kaup. Kapellin wapaasoittoa kuulemassa 
          ihmisiä, joiden on waikea seisoa suuressa tungoksessa ja ruoholle ei luonnollisesti saa istua, eikä ole kuitenkaan tarpeeksi istuimia. Jos ei uusia ole waraa laittaa, tuotakoon Isosta 
          puistosta laulujuhlain aikuisia penkkejä!</p>
        <h5>* * *</h5>
        <p>Kewät on saapunut tawallista aikaisemmin. Ilmat owat olleet lämpimiä kuin kesällä. Pikkuwisertäjät owat saapuneet, siniwuokkopuketteja lähetellään sanomalehti-toimituksiin - meillekin 
          niitä saapui jo toista wiikkoa sitten -, laiwaliike on alkanut, ihmiset kulkewat pikkutakkisillaan j. n. e. Siis aiwan kuin poutasäällä. Muutamin paikoin on ryhdytty touon tekoon. Pian 
          alkaa maa wihertää, kukat tuoksuta. Puissa on jo suuria silmuja. Jatkuuko kesän tulo yhtä ripeästi kuin tähän asti wai tuleeko takatalwi, kuten jotkut ennustawat, on waikea sanoa. Kaikessa 
          tapauksessa hauskaa ja wirkistäwää kewättä kaikille lukijoilleni!</p>
        <SubDivider className="dividerStyle" />
        <p className="signature">Tiitus.</p>
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="9.5.1914">
        <h5>Waltuustolle.</h5>
        <h5>Krestyn uhrit.</h5>
        <h5>Ruotsalaisten walta yliopistossa.</h5>
        <h5>Wiinakausi.</h5>
        <SubDivider className="dividerStyle" />
        <p>Anniskeluyhtiön woittowarojen jako toimitetaan tässä kuussa. Woittowaroja on tällä kertaa wähemmän kuin wiime wuonna. Waltuuston käytettäwissä on nyt Smk. 92,968:17 ja wiime wuonna oli 
          Smk. 108,287:40. Nyt jaettawista waroista on jo ennakolta myönnetty Smk. 62,945:20, joten jaettawaksi jää seuroille y. m. yleishyödyllisiin tarkoituksiin Smk. 30,022.97. Wiime wuonna oli 
          ennakolta myönnetty 82,879:- ja jaettawaksi jäi 24,480:-. Tällä kertaa on pyytäjiä enemmän kuin wiime kerralla. Anottu on noin 70,000 mk.</p>
        <p>Kaupunginisillä on siis hioittawa ja waikea työ, josta saawat jälkeenpäin „kiitokset” anojilta. Jakoa ei woitane niin suorittaa, että siihen kaikki olisiwat tyytywäisiä. Hywällä tahdolla 
          woidaan kuitenkin paljon saada aikaan tässäkin asiassa.</p>
        <p>Soisin kernaasti kaikille anojille anomansa summat, mutta mainitesen kuitenkin erikseen wähäwaraiset kansakoululapset, raittiusriennot, kansanlastentarhan, sisälähetyksen, keuhkotautisten 
          wastustamisyhdistyksen, pelastusarmeijan slummityön, kansanopiston, kaupungin soittokunnan, woimisteluseurat, S. T. L:n y. m. Yleishyödyllisten tarpeitten rahastoa on niinikään 
          muistettawa.</p>
        <p>Erityisesti pyydän kiinnittää arwoisten „isien” huomiota siihen, että raittiustarkoituksiin olisi myönnettäwä suuremmat summat kuin ennen, koskapa näitä waroja on juuri tähän tarkoitukseen 
          myönnettäwä, sillä anniskeluyhtiö on muistaakseni perustettu „raittiuden ja siweellisyyden edistämiseksi”, eikä kaupungin lypsylehmäksi, jotta saataisiin waroja mitä erilaisimpiin 
          tarkoituksiin.</p>
        <p>Juoppojen parantola „Turwa”, joka on nykyään Raittiuden Ystäwien hoidossa, on myös anonut awustusta sillä ehdolla, että kaupunki saa täyttää muutamia hoidokassijoja. Tämä „Turwan” 
          anomus ansaitsee kaikkea huomiota ja perin suotawaa ja toiwottawaa on, että waltuusto myöntää sille pyydetyn apurahan, kuten on muuallakin tehty, wiimeksi Lappeenrannassa.</p>
        <p>Toiwottawasti waltuusto osaa kulkea kultaista keskitietä anniskeluyhtiön woittowaroja jakaessaan.</p>
        <h5>* * *</h5>
        <p>Yhdenwertaisuuslaki kummittelee yhä edelleen. Mies toisensa jälkeen raastetaan wieraan maan wankiloihin. Krestyssä istuu tällä hetkellä joukko Wiipurin howioikeuden jäseniä, Wiipurin, 
          Hämeenlinnan maistraatin jäseniä, Terijoen kuntakokouksen ent. puheenjohtaja y. m.</p>
        <p>Wiikko sitten langetettiin taasen tuomioita. Paitsi Wiipurin maistraatin jäseniä, tuomittiin Hämeenlinnan maistraatin wiime kesäiset wiranhoitajat tawallista ankarampaan rangaistukseen. 
          Wenäjän alamaiset Mikael Feodorow Baraikow ja Mikael Nikolajewitsh Wasiljew, jotka aikoiwat awata Myllymäessä sekatawarakaupan ja torilla harjoittaa rihkamakauppaa, owat aiheuttaneet sen, 
          että täkäläisen maistraatin kukin jäsen saa wirua Pietarin wankilassa 1 w. 4 kk. sekä owat kelpaamattomia hoitamaan waltion tai kunnan wirkoja 10 wuoden aikana. Ja tämä kaikki sen johdosta, 
          että nämä miehet owat noudattaneet Suomen laillista lakia ja toimineet omantuntonsa ääntä kuullen.</p>
        <p>Yhdenwertaisuuslakituomiot owat siitäkin merkillisiä, että ne eiwät ole ensinkään yhdenwertaisia, waan perin waihtelewia. Ensin langetettiin 4 kk., sitten 6 kk. ja joskus 8 kk., jopa 1 w. 
          4 kk. tuomioitakin. Aina sen mukaan, millä tuulella hrat wenäläiset tuomarit kait sattuwat olemaan.</p>
        <p>Hallinnollinen mieliwalta tahtoo saada aikaan wuoren-warmoja waltakunnanlakeja, mutta meillä suomalaisilla on warma wakaumus, ettei 1910 w:n kesä. 30 p:n waltioteko tiedä eikä woi tietää 
          wiimeistä sanaa Suomen ja Wenäjän wälisen suhteen järjestämisessä.</p>
        <p>Niille miehille, jotka syyttömästi saawat kärsiä Krestyn wankilassa, antaa woimaa se tietoisuus, että he owat täyttäneet welwollisuutensa kansansa oikeudentuntoa kohtaan, että he edustawat 
          sen kalleimpia elinehtoja ja että oikeus ja totuus, joiden puolesta ei koskaan turhaan kärsitä, wihdoinkin woittaa.</p>
        <h5>* * *</h5>
        <p>Tässä parisen wiikkoa sitten kirjoitti Uusi Suometar ainokaisen yliopistomme kielioloista ja todisti oikein numeroilla, miten kurjat ja suomenkielisiä sortawat ne oliwat. Wanha wiikinkimme 
          „Hufwudstadsbladet” nousi silloin takajaloilleen, potki wimmatusti ja pyysi U. S:ta reiwaamaan purjeitaan, sillä jos tätä wauhtia yliopistomme suomalaistuu, muuttuu tieteellisyys siellä 
          pian muinaismuistoksi. Kieliolot owat yliopistossamme jo muka aiwan mallikelpoiset, kenties liiankin „kehittyneet”.</p>
        <p>Wiime wiikolla sattui sitten yliopiston rehtorin waali, joka mutkattomasti ja selwästi osoitti, kumpi näistä wanhoista riitaweljistä oli oikeassa. Entinen rehtori Anders Donner sai 
          enimmät äänet ja tuli uudelleen walituksi. Waltioneuwos Donner on ruotsinmielinen, mutta hän on osoittautunut tasapuoliseksi ja täysin paikkaansa pystywäksi mieheksi. Tältä kannalta 
          katsoen yhtyiwätkin molemmat konsistorin suomenkieliset ryhmät häntä kannattamaan, koettamatta omilla miehillään päästä hänen siwutsensa. Olisi odottanut tämän lojaalisen menettelyn 
          jälkeen, että konsistorin ruotsalainen ryhmä olisi tehnyt wastapalweluksen ja walinnut wararehtorin suomenkielisten ryhmästä. Mutta tämä hywä ja warsin luonnollinen usko petti. Myöskin 
          toiselle sijalle tuli ruotsalainen ja kaiken lopuksi wielä kolmannellekin.</p>
        <p>Tyhjän tuotti siis suomenkielisille tämäkin waali niinkuin niin moni aikaisempi. Ja kuitenkin oli tällä taholla sellaista ehdokkaita kuin professorit E. N. Setälä ja K. F Ståhlberg, 
          joiden ansioihin ei walittujen waramiesten ansioita woi millään tawoin werrata. Mutta kun on suomalaisista kysymys, eiwät ruotsalaiset koskaan muista edes löytyneenkään käsitteitä 
          „oikeus” ja „kohtuus”.</p>
        <p>Ruotsinmieliset taistelewat kuin henkensä kaupalla pysyäkseen herroina yliopistossamme. Hirwittäwällä woimalla ja paatoksella wakuuttawat he jokaiselle, joka uskaltaa epäillä, että 
          suomenkieli on ainakin yhtä hywässä asemassa kuin ruotsinkielikin Suomen yliopistossa. Mutta heitä ei enään kukaan usko, se keino ei pitkälle wetele. Wuosi wuodelta käywät epäkohdat yhä 
          ilmeisemmiksi ja samassa määrässä kaswaa myöskin ruotsikkojen ahdinkotila. Ja ennen pitkää joutuwat he istumaan sille orrelle, mikä heille kuuluu. Woiwat sitten kaakattaa „tieteellisyyden” 
          kuolemasta niin paljon kuin heitä haluttaa.</p>
        <h5>* * *</h5>
        <p>Meillä on tätä nykyä oikea wiinan luwattu aikakausi. Sanomalehdet owat tippuen täynnä uutisia salaisten wiinapolttimojen häwittämisistä ja wiinatrokarien aikaansaanneista siellä täällä 
          kautta maan. Paikka paikoin on lyhyessä ajassa parilla „sotaretkellä” häwitetty useita kymmeniä korpirojutehtaita.</p>
        <p>Näistä ilmisaaduista salapolttimoista woi jokainen jo aawistaa, mikä peloittawa määrä niitä todellisuudessa mahtaa takamaillamme sawuta. Joka on liikkunut kansan keskuudessa ja päässyt 
          sitä lähelle, se on kyllä kuullut selwiä wiittauksia, mitä siellä ja sielläkin metsänperukassa puuhataan, - mutta silloin on mies saanut olla jo koko lailla taattu ja warma. Sillä nykyään 
          on innostus raittiustyöhön kuiwunut niin wähiin, että kansa pitää suurempana kunnia-asianaan peitellä salapolttajia kuin antaa heitä ilmi. Ei ole näin ollen ihme, jos ruununmiehetkin 
          kyllästywat yksinponnisteluihinsa ja alkawat katsella näitä asioita läpi sormiensa.</p>
        <p>Ja kilwan wiinankeittäjien kanssa owat wiinankaupustelijatkin kaswaneet. Niitä on nykyään kokonainen armeija, joka käsittää koko maan Helsingistä aina Lapin raukoille rajoille asti. 
          Käwäsin tässä eräänä sunnuntaina Helsingissä ja kuulin menomatkalla junassa keskustelun, joka hywin walaisi tätä asiaa. Muuan Pohjanmaalta tulewa mies kertoi näet edellisenä eli 
          lauwantai-iltana juopotelleensa trokariwiinoilla Waasassa ja nyt olisi pitänyt saada „karskiintumisryyppy” Helsingissä. Mutta mistä sen outo ottaa? - „Torilta sen ottaa”, sanoi siihen 
          toinen mies, joka oli noussut junaan Malmilta ja nähtäwästi tunsi pääkaupungin paikat ja tawat. „Siellä sitä on, joka jalat alta lyö, waikka saawin kiskoisit”. - Asemalle tultua meniwät 
          miehet yhdessä keskitorille ja ennen pitkää liittyi joukkoon kolmas. Painuttiin Kaisanientä kohden ja siellä kait pohjalainen sai „karskiintumisryypyn”, ehkä parikin.</p>
        <p>Sanoin että kansan omatunto raittiusasiassa nukkuu. Ja se on totta. Jos maaseudullakin hiukan wiitsittäisiin yhteiswoimin ponnistaa, niin tulisipa niin keittäjille kuin kauppiaillekin 
          kiire lähtö. Mutta kun ei, niin ei. Ennemmin katsellaan puukotuksia ja annetaan lyödä ikkunat sisään kuin ryhdytään mihinkään toimintaan. Sopiwan ojennuksen nykypolwen miehille antoi se 
          nainen, jonka lehdet äskettäin tiesiwät pukeutuneen mieheksi ja äkkirynnäköllä häwittäneen paikkakunnalla paljon pahennusta tuottaneen korpirojutehtaan. „Naiswaltikka on murheellinen 
          merkki”, sanoo Aleksis Kiwi, mutta ennemmin sentään sekin kuin korpirojun ja trokarien waltikka.</p>
        <SubDivider className="dividerStyle" />
        <p className="signature">Tiitus.</p>
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="26.5.1914">
        <h5>Papinwaali.</h5>
        <h5>Lääkärin waaliin!</h5>
        <h5>Kaunistakaa kotinne!</h5>
        <SubDivider className="dividerStyle" />
        <p>Tässä kaupungissa owat nämä päiwät muodostuneet waalien ajaksi. Wiime sunnuntaina suoritettiin kappalaisen waali ja tänään on edessä kaupunginlääkärin waali. Kesäkuun puoliwälissä on 
          walittawa pormestari. Siis waali, tärkeä waali toisensa jälkeen.</p>
        <p>Innokkaimmin owat ihmiset täällä, kuten tawallisesti, ottaneet osaa papin waaliin. Jo wiikkoja ennen on asiasta pidetty paljon ääntä ja ihmiset olleet wilkkaassa toiminnassa. Weljeni 
          „Minä” kirjoitti äskettäin tässä lehdessä papinwaalista kirjoituksen „Waalitouhua”, jonka kirkollis-yhteiskunnallisen wiikkolehden „Herättäjän” „Waeltaja” sanoo olleen aiwan kuin häntä 
          warten kirjoitetun ja julkaisee sen kokonaisuudessaan lehdessään. Jo pitkän aikaa sanoo „Waeltaja” olleensa äärimmäiseen asti pahoillaan siitä touhusta, parjauksesta ja 
          suuntakilwoittelusta, jota nykyään pidetään miltei joka-ainoassa papin waalissa. Seurakuntalaiset koettawat omassa keskuudessaan siksi paljon maalata kaikkia kysymyksessä olewia 
          pappeja, yhdet yhtä ja toiset toista, että jos niitä maalauksia uskoisi, niin täytyisi luulla, että seurakunta on sattunut saamaan hakijoiksi oikean lurjussakin, jossa ei ole yhtään 
          kunnon miestä. Ja sitten usein kiertelewät saarnamiehet, erittäinkin maallikot uskottelewat olewansa oikeutettuja sekaantumaan asiaan, lisäämään wäriä tai tekemään sitä wähän helakammaksi.</p>
        <p>Warsinkin, jos seurakunta syystä tai toisesta haluaa neljättä waalisaarnaajaa, pannaan usein maailma seisomaan päälaelleen. Ei siinä tule kysymykseen, oliwat hakijat ketä tahansa; kaikki 
          he maalataan. Ja, mikä pahinta, on neljänneksi toiwoja itse usein parhaana hierimenä puurossa — niin wälisti siihen määrään asti, että hän on miltei hermostumisesta kipeä hommissaan.</p>
        <p>Semmoisessa taistelussa kelpaawat sitten minkälaiset keinot tahansa. Hurskaasta käypä ja itseään hurskaana pitäwä liittoutuu silloin weljesliittoon toisten kanssa. Ja mitä ihmeellisimpiä 
          juttuja uskotaan todeksi. Milloin muka joku waalipapeista aikoo hoitaa seurakuntaansa samaan tapaan kuin keskiaikuiset tuomarit läänejään, itse pitäen wirkoja kaupungeissa ja palkaten 
          apulaista. Milloin joku waalipappi on muka ennen waalia kerskunut, että „siinä seurakunnassa on seurakunnallinen työ alettawa ihan alusta” y. m. yhtä koreata ja kaunista.</p>
        <p>Tuntuu wallan siltä, kuin olisi ensimäisen yksikamarisen waalin kauhistuttawa taistelutapa walheineen, parjauksineen ja iwakuwineen nyt siirtynyt papinwaaleihin. Se ei ole seurakunnille 
          eikä niiden kristillismielisille aineksille kunniaksi. Papinwaaliin, jos mihin, olisi seurakuntien käytäwä rukousmielessä ja jos siinä mielessä käydään, niin kyllä parjaukselta suu 
          tukkeutuu ja käywät mahdottomiksi ne monenlaiset liittoutumat kristillismielisten ja kirkonwihollisten wälillä, mitkä nykyisin owat niin tawallisia.</p>
        <p>Parannusta huutaa tämä asian tila. Ulkopuolinen waikutus on suorastaan rikollista ja omiaan lisääwästi tekemään papinwaalit oikeutetun iwan alaiseksi kaikkien kirkollemme kylmämielisten 
          puolelta, huudahtaa „Waeltaja”, jonka kanssa olen aiwan samaa mieltä.</p>
        <p>Waalissa käytettiin jos jotain keinoja. Waalin toimittajalle, jolle on annettawa tunnustus reippaasta toiminnastaan, oli lähetetty nimetön moitekirje.</p>
        <p>Nyt on papinwaali ohi. Kappalaiseksi saatiin se, jota enemmistö kannatti. Waalissa woittiwat kirkkoherra Auteron kannattajat. Hänestä toiwotaan waikuttawaa, kokoowaa ja innostawaa 
          seurakuntapaimenta. Toiwottawasti hän on sitä. Onneksi siis olkoon!</p>
        <h5>* * *</h5>
        <p>Lääkärin waaliin on meidän käytäwä yksimielisinä ja tietoisina siitä, että meidän ehdokkaamme kunnolla täyttää sen sijan, johon hänet asetamme. Minä en tahdo kilpahakijoita parjata, 
          kuten „Hämetär” on tehnyt. Se on m. m. umpimähkään mennyt leimaamaan erään helsinkiläisen lääkärin, joka wirkaa on myös hakenut, wenäläismieliseksi ja mitä kaikkia hänestä „Hämettären” 
          pääkirjoituksessa on kirjoitettukaan. En tahdo moittia hämettäreläisten ehdokasta, tohtori Skogströmiäkään. Hywä mies kuuluu olewan hänkin, kuten moni muukin, mutta suuri joukko 
          kaupunkilaista, suomalainen puolue, joukko muihin puolueisiin kuuluwia ja sosialidemokraatteja owat asettaneet ensimäiseksi wiran nykyisen hoitajan, toht. Herwan, joka on pystywä lääkäri 
          ja sairashuonetapoihin Helsingissä perin pohjin tutustunut. Mitä syytä siis olisi walita tänne joku muu lääkäri, kun kerran on saatawissa mies, joka on kaupunkiin ja kaupunginlääkärin 
          wiran hoitoon, sairaalaan y. m. hywin perehtynyt. Hän on lääketieteen professorien ja etewien lääkärien mielestä henkilö, joka sopii hywin juuri kaupunginlääkärin wirkaan, - hän kun on 
          tutustunut uudempiin lääkäritapoihin Helsingissä, jota wastoin kilpahakija, tri Skogström on toiminut monet wuodet maaseudulla. Toht. Herwa on herttainen, ystäwällinen ihminen, jonka 
          silmissä rikas on samallainen kuin köyhäkin. Hän on lisäksi suomalainen, kuten nimensäkin osoittaa, eikä ole mikään puoluemies. Tohtori Skogström sitä wastoin lienee nytkin Urjalan 
          poliittisen yhdistyksen puheenjohtaja. Tohtori Herwaa on siis käytäwä äänestämään. Häntä on wirkaweljeni „Turokin” kehunut ja luwannut äänestää. Liekö sitten sanansa mittainen.</p>
        <p>Wälinpitämättömille ja hiljaisille pitää huomauttaa, että tärkeimpiä kansalaisoikeuksia on se oikeus, joka meille on myönnetty siinä, että me kukin omasta puolestamme saamme näihin 
          asiohin waikuttaa, waikutaa äänemme kautta. Mutta tämä kansalaisoikeus ei ole ainoastaan oikeus, se on myös tärkeä kansalaiswelwollisuus, sellainen, joka welwoittaa jokaisen aikansa 
          tasalla olewan henkilön ottamaan warman kannan waalin alaiseen kysymykseen nähden. Tämän waalioikeuden kautta owat kaikki äänestyskelpoiset kansalaiset yhteisesti wastuussa niistä 
          tuloksista, jotka waalien kautta ratkaistaan. Luulisi, että jokaisella olisi täysin selwillä tämä wastuunalaisuus. Ja kuitenkin huomaa hywin usein, että niin ei ole laita. Mainitaksemme 
          wain eduskuntawaalit, osoittawat nekin ilmeisesti miten wäärin suuret kansalaisjoukot owat käsittäneet sen welwoituksen, jonka äänioikeus heille asettaa.</p>
        <p>Mutta me saamme paljon useammin nähdä kirkollisissa ja kunnallisissa waaleissa, että silloinkin, kun ratkaistawat kysymykset hywinkin läheltä koskewat meitä, suuret joukot wetäytywät 
          syrjään joko wälinpitämättömyydestä tai kywyn puutteesta muodostaa itselleen warmaa käsitystä siitä, mille puolelle asiassa asettuisi. On myöskin sellaisia, jotka pidättämällä äänensä 
          luulewat pääsewänsä wapaaksi wastuusta, luulewat siirtäneensä sen kokonaan niiden niskoille, jotka welwollisuudentuntoisina rohkeasti waikuttawat siihen suuntaan, mikä heidän mielestään 
          on oikea. Olkoon näistä syistä mikä tahansa waikuttamassa, ne, jotka siten tekewät ja ajattelewat, eiwät osottaudu waalioikeutta ansainneeksi.</p>
        <p>Lukijat, suorat suomalaiset, menkää siis tänään klo 5—8 ip. sankoin joukoin lääkärinwaaliin ja wiekäämme ehdokkaamme woittoon! Jos waan innolla otamme waaliin osaa, niin woitto on meidän. 
          Muistakaa tämä ja walitkaamme tohtori Herwa kaupunginlääkäriksi! Waaliin jokainen, jolla waan waalioikeus on!</p>
        <h5>* * *</h5>
        <p>Kun kulkee maaseudulla ylt'ympäriinsä, tulee usein itseksensä hymähtäneeksi: „Nätti mökki, mutta kalju katsella!” Tapaa näet tuon tuostakin taloja ja töllejä, jotka siisteydellään 
          hywäilewät silmää, joiden ympärillä lainehtiwat wiljawat wainiot ja aiwan wierellä wälkehtii järwi. Mutta sittenkin on niissä jotain kalseata, ja kun lähemmin ajattelee, huomaa, että 
          syynä on kotipuiden puute. Ne seisowat siinä, nuo talot ja töllit, aiwan alastomina, yhdenkään lehden lepattamatta ja yhdenkään latwan luomatta warjoa kesähelteellä ja suojelematta 
          talwituiskuilta. Siitä se johtuu, että ohikulkijasta tuntuu kuin puuttuisi niiltä kotoinen lämpö ja lepo.</p>
        <p>On todellakin ihmeellistä tuo puiden pelko. Kartanoitahan meillä yleensä ympäröiwät puut ja puutarhat, mutta pienempiä taloja wain ani harwoin. Warmaankin on woimakas, wastahakoinen metsä 
          muinaisina aikoina pelottanut tämän maan raatajat niin ankarasti, etteiwät jälkipolwet wieläkään ole tuosta säikkymisestään selwinneet. Metsää wastaan on tässä maassa käyty sitkeätä sotaa, 
          moni wahwa warsi on kirween käytössä koukistunut, ja wuossadat owat kuluneet, ennenkuin metsä on loitonnut etäämmälle. Kun se kerran on kynnykseltä saatu karkoitetuksi, on se etäällä 
          pidettäwä eikä enään takaisin tuotawa.</p>
        <p>Niin kait arwellaan. Mutta nyt on jo totisesti aika rauhoittua metsän suhteen, on jo aika ruweta sitä kartuttamaankin. Ei ainakaan paria kaunistus- ja hedelmäpuuta kannata säikkyä 
          kotinurkallaan. Runoilija sanoo: „Kaunis on ihminen kun työn hikihelmet hällä on otsaluilla, kauniimpi koska koti aidattu on linnun laulupuilla”. Ja siinä hän on oikeassa. Kotinurkka 
          kaipaa pyhäistä pihlajaansa ja tuoksuwaa tuomeansa, ja akkunain alla, etelän puolella, on sija omenapuiden olla. Ilman niitä on talo autio ja kaikkien taiwaan tuulien työnnettäwä.</p>
        <p>Kewät on paras puiden istutusaika. Vanhemmat siihen eiwät kait niin kewätkiireiltään jouda, mutta nuorilla on aikaa yllin kyllin. Ottaa suomättäältä tai pellonpientareelta mieleisensä 
          puunwesan, kaiwaa kuopan sopiwaan paikkaan ja istuttaa puun siihen, jonkun kerran kastelee runsaasti ja jättää luonnon haltuun. Puu kaswaa kilpaa istuttajansa kanssa, tuuhenee wuosi 
          wuodelta ja pian tulewat pikkulinnut pitämään siinä iloaan ja rakentamaan pesiään. Silloin on talon ympäristö muuttunut eläwälliseksi ja wilkkaaksi ja ohikulkija pysähtyy sitä mielihywin 
          katselemaan.</p>
        <p>Nuoriso, ryhtykää „aitaamaan kotianne linnun laulupuilla”!</p>
        <SubDivider className="dividerStyle" />
        <p className="signature">Tiitus.</p>
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="6.6.1914">
        <h5>Olympialaiset kisat.</h5>
        <h5>Kumarrusmatka.</h5>
        <h5>Eläkkeet.</h5>
        <h5>Kaupunginlääkärin waali.</h5>
        <h5>Taas merionnettomuus.</h5>
        <h5>Edustajakokous.</h5>
        <h5>Hauskaa kesää!</h5>
        <SubDivider className="dividerStyle" />
        <p>Mitä äärimmäiseen pikkumaisuuteen wenäläiseltä taholta woidaan pahansuopaisuudessa ja kateudessa tätä „rajamaata” kohtaan mennä, siitä antaa kysymys suomalaisten osanotosta 
          olympialaisiin kisoihin tuoreimman ja hywän esimerkin. Jo wuosia sitten annettiin määräys, että suomalaisille woittajille ei saa wetää heidän oman maansa lippua lipputankoon, waan 
          Wenäjän lipun, ja Lontoon olympialaisissa saiwat suomalaiset kulkea liputtomina muiden kansallisuuksien kantaessa lippuaan. Nyt on Wenäjän ministerineuwostossa ollut esillä ehdotus, 
          että Suomelta kiellettäisiin oma edustajansa olympialaisten kisojen kansainwälisestä komiteasta ja etteiwät Suomen edustajat saisi kisoissa esiintyä erikseen.</p>
        <p>Tämä ehdotus, jonka takana ja innokkaimpana asianajajana on kenraalikuwernööri Seyn, on tietysti kautta koko maamme, sekä urheilijoissa, että siwullisissa, nostattanut oikeutetun 
          suuttumuksen myrskyn. Suomi suoriutui Tukholman olympialaisista neljäntenä maana ja riemu kotimaassa oli rajaton. Entistä innokkaimmin käytiin urheilemaan, entistä kiihkeämmin ryhdyttiin 
          warustautumaan Berlinin kisoja warten ja wanhempi polwikin oli nyt paljon alttiimpi kuin ennen aineellista awustustaan antamaan. Ei siis ihme, jos meihin tämä isku sattuu kipeästi ja 
          että me emme häikäile nimittää sitä oikeilla nimillään, mutta ulkomaillakin on kiinnitetty asiaan huomiota ja useat sanomalehdet eri maissa owat rientäneet leimaamaan tämän aijotun 
          toimenpiteen sen oikealla leimalla. Niinpä kirjoittaa Englannin wenäläis-mielisinkin lehti „The Standard” otsikolla: „Wenäjä käskee Suomen urheilijat esiintymään wenäläisinä” sangen 
          tiukasti, huomauttaen m. m. pitkällisesti, että: „Jos Berlinin komitea asettuu samalle kannalle kuin Parisin kansainwälinen keskuskomitea, niin on waikea käsittää, miten suomalaiset 
          woidaan muuten estää lähtemästä Berlinin kisoihin kuin wangitsemalla heidät ja kuljettamalla linnoitusten turwiin, sekä ottamalla Suomen olympialaisen komitean warat takawarikkoon”. Ja 
          „Standardkin” laskee kielto-yrityksen kateudesta johtuwaksi, sillä lehti päättää selontekonsa huomautukseen: „Suomi oli Tukholmassa neljäs kansallisuus, Wenäjä wiidentenätoista”.</p>
        <p>Suuri englantilainen urheilulehti „Sporting Life” lopettaa tuomitsewan kirjoituksensa sanoilla „on enemmän kuin luultawaa, että ainoana seurauksena Wenäjän hallituksen ukasista tulee 
          olemaan se, että ei ainoastaan Kolehmainen, waan myöskin muut suuret suomalaiset tulewat edustamaan uutta maailmaa Berlinissä. Miksi eiwät poliitikot jätä urheilua rauhaan? Olympialaiset 
          leikit herätettiin uudelleen henkiin siksi, että saataisiin aikaan kansojen wälille parempi yhteistunne, ei sentakia, että synnytettäisiin kansallista wihaa. Ansaitsee mainitsemista, 
          että suomalaisten ei sallittu wetää ylös kansallista lippuaan juhlakulkueen marssiessa stadionille (Lontoossa) w. 1908; tästä wiheliäisyydestä ei tule loppua, jos kansallinen kateus 
          estää tämän edistywän pikku kansakunnan esiintymästä Berlinissä, mutta siltä melkein näyttää”.</p>
        <p>Niin - siltä se näyttää! Turhaa on kait nyt, niinkuin monasti ennenkin, muiden kansojen wäliintulo; me saamme jäädä kotia istumaan, sillä ei kait Wenäjälläkään olla niin yksinkertaisia, 
          että uskotaan suomalaisten urheilijain tämän jälkeen lähtewän wenäläisille pisteitä keräämään. Wenäjä ei koko tästä hommasta saa saaliikseen muuta kuin siwistyskansain säälin ja 
          surkuttelun.</p>
        <h5>* * *</h5>
        <p>Rautateiden päätirehtööri Ahonen on käynyt senaatin wenäläisen warapuheenjohtajan puheilla „pyytämässä hänen suosiollista myötäwaikutustaan rautatieläisten palkkauskysymyksen 
          onnelliseen ratkaisuun”. Tällöin oli warapuheenjohtaja ilmoittanut, että uusi palkkaussääntö esitetään syksyllä ja että hän kannattaa sen sowelluttamista kokonaisuudessaan tämän wuoden 
          alusta alkaen. Saamme siis tietää, että rautateiden ylipäällikkö on käynyt kumarrusmatkalla palkkojen, m. m. oman palkkansa korotusasiassa.</p>
        <p>Äskettäin käwiwät maan raittiusjärjestöjen lähetystöt pyytämässä puolustawia toimenpiteitä kieltolain hywäksymiseksi. Sitä asettuiwat ankarasti moittimaan Helsingin perustuslailliset” 
          lehdet, mutta nyt owat ne waiti.</p>
        <p>Kumarrusmatka tällä kertaa tehtiin senaatin warapuheenjohtajan luo ja raittiuswäki käwi senaatin puheenjohtajan luona.</p>
        <p>Nyt on siis kysymyksessä jokseenkin samanlaatuinen tapaus kuin raittiuslähetystön. Ero asiassa on wain siinä, että tällä kertaa on kyseessä waltion wirkamiesten palkkojen korotus, 
          edellisellä kerralla kieltolaki; niin ikään siinä, että tällä kertaa on kumarrusmatkalla käynyt yksityisetujen, edellisessä tapauksessa kansan etujen nimessä.</p>
        <p>Rautatieläisten palkkausasiaa en tietystikään wastusta, mutta olen tämän kertonut esimerkkinä siitä, miten eri tawalla asioita arwostellaan.</p>
        <h5>* * *</h5>
        <p>„U. S:tar” kirjoitti äskettäin „asetusten mukaisesta eläkkeistä”. Tuon tuostakin näkee lehdissä uutisia, joissa kerrotaan, että sille ja sille wirkamiehelle on hakemuksesta myönnetty 
          ero sekä niin ja niin suuri „asetusten mukainen eläke”. Nämä uutiset owat usein warsin merkillistä laatua.</p>
        <p>Pääsäännökset siwiliwirkamiesten eläkeoikeudesta ja eläkkeistä owat julistuksissa 28 p:ltä heinäk. 1826 ja 12 p:ltä kesäk. 1866. Näiden asetusten mukaan ainoastaan n. s. täysinpalwellut, 
          s. o. 63 wuoden ikäinen 35 wuotta nuhteettomasti palwellut wirkamies on oikeutettu saamaan eläkkeen riippumatta siitä, mistä syystä hän wirastaan eroaa, ja on hänen eläkkeensä olewa yhtä 
          suuri kuin se wakinainen palkka, joka hänellä erotessa on. Sitä wastoin wirkamies - lukuunottamatta joitakuita eri asetuksissa säädettyjä poikkeustapauksia, jotka tässä eiwät tule 
          kysymykseen - jos hän aikaissemmin eroaa wirastaan, ei ole asetusten mukaan oikeutettu saamaan mitään eläkettä muuta kuin siinä tapauksessa, että hän sairauden tähden taikka jostakin 
          muusta pätewästä syystä on tullut kykenemättömäksi enää hoitamaan wirkaansa. Tämmöiseen tilaan tulleelle wirkamiehelle wakuuttawat asetukset, jos hänellä on 35 ikä- ja 15 wirkawuotta, 
          eläkkeen, joka, riippuen asianomaisen ijästä ja wirkawuosista, on 3/4, 1/2 tai 1/4 wakinaisesta palkasta.</p>
        <p>Niissä uutisissa, joista tässä puhumme, on nyt kuitenkin hywin usein kysymys sellaiselle wirkamiehelle annetusta eläkkeestä, joka tunnetusti ei ole täysin palwellut eikä myöskään ole 
          tullut mainitulla tawalla kykenemättömäksi olemaan edelleen wirassaan. He owat täydessä miehuuden woimassa olewia henkilöitä, jotka itsekin katsowat olewansa niin kaukana 
          työkywyttömyydestä, että usein eroawat wirastaan wain siirtyäkseen johonkin yksityiseen toimeen, joka on ainakin yhtä paljon työtä ja terweyttä kysywä kuin konsanaan heidän 
          waltiowirkansa.</p>
        <p>Hämeenlinnassakin on tällaisia eläkkeitä myönnetty miehille, jotka wirasta erotessaan owat yht'äkkiä täydellisesti „parantuneita”, siirtyneet hywäpalkkaisiin yksityisiin toimiin j. n. e.</p>
        <p>Edellisestä käy ilmi, että kun tällaiset wirkamiehet erotessaan pyytäwät ja saawat eläkkeen, eläke ei ole niinkuin waakuutetaan, asetusten mukainen. Se on ilmaus siitä kohtuuttomasta 
          wirkawaltaisesta katsantotawasta, joka näissä asioissa on maassamme päässyt syntymään. Se on yhtä lainwastaista kuin asiallisesti tuomittawaa waltiowarain käyttämistä yksityisten 
          henkilöiden epälojaalisten pyyteiden hywäksi, jotka tarkoittawat oikeudetonta hyötymistä kokonaisuuden kustannuksella.</p>
        <h5>* * *</h5>
        <p>Kaupunginlääkärinwaali meni niin kuin wiime kirjeessäni toiwoin. Ottelu oli ankara. Suomalaisen puolueen ehdokas sai woiton. Äänimäärä oli tosin wain 231 suurempi kuin wastapuolueen, 
          mutta äänestäjiä oli toista sataa enemmän. Ilolla panen merkille tämän waalin ja toiwon samallaista innostusta muihinkin waaleihin nähden!</p>
        <p>Naapurilehti soraäänisessä kirjoituksessaan wielä waalin jälkeenkin huomauttelee, ettei tällaisissa waaleissa saa ottaa huomioon puoluekantaa. Kuka puoluekannan otti määrääwäksi? Jos w. t. 
          kaupunginlääkäri olisi ollut „perustuslaillinen”, niin „Hämetärkin” olisi häntä warmaan suositellut ja kieltänyt menemästä „merta edemmäksi kalaan”. Muutamat ruotsalaiset ja pari 
          nuorsuomalaista, joille lehti nyt antaa aikamoista läksytystä „eriseuralaisuudesta”, oliwat siksi tasapuolista, että äänestiwät meidän ehdokastamme.</p>
        <p>Siitä puoluekannan määräämisestä tekisi mieleni hieman pakista, mutta jääköön tällä kertaa. Yleensä tunnettuahan on, että esim. hywässä Hämeenlinnassamme walitaan kaikkiin mahdollisiin 
          wirkoihin mies „perustuslaillisen” puoluekannan mukaan, olkoonpa sitten kysymyksessä waikka waatimaton wahtimestarin toimi.</p>
        <h5>* * *</h5>
        <p>Tuskin on wielä ennätetty selwiytyä Titanic-onnettomuuden antamasta iskusta, kauhusta ja surusta, kun jo saapuu toinen melkein yhtä kamala wiesti mereltä. Jälleen on yksi waltameren 
          jättiläinen painunut pohjaan, wieden mennessään toista tuhatta ihmistä.</p>
        <p>Ihmiskuntaa wiiltää suru ja wiha. Suru ajatellessaan tuota peloittawaa joukkohautaa, ja wiha tietäessään sen aukeamisen syyt. Titanic-onnettomuus syntyi mielettömän kilpailun johdosta 
          suurten laiwayhtiöiden wälillä ja sama näyttää olewan syynä tähänkin. Huolimatta sumusta ja ajelehtiwista jääwuorista annettiin tälläkin kerralla mennä uhkarohkeata wauhtia, ja laiwa — 
          kuten erinäisistä lausunnoista selwiää — oli huonosti rakennettu ja „hauras kuin munan kuori”. Edellisen onnettomuuden johdosta ryhdyttiin jo moninaisiin toimenpiteisiin wastaisuuden 
          waralta, mutta tottapa ei käytetty tarpeeksi kowaa kättä, koska wielä tämä tapaus tarwittiin osoittamaan, miten äärettömän kewytmielisesti woidaan leikkiä satojen ja tuhansienkin 
          ihmishenkien kanssa. Ja kenties wielä tämänkin jälkeen laiwataan yksi tai kaksi yhtä murhaawaa lisätodistusta, ennenkuin tehdään kaikki, mitä asian tärkeys waatii ja mitä suinkin 
          tehtäwissä on.</p>
        <h5>* * *</h5>
        <p>Suomalaisen puolueen edustajakokous pidetään huomenna Urjalassa. Tähän edustajakokoukseen owat kaikki puolueemme paikallisjärjestöt tässä waalipiirissä oikeutetut edustajia lähettämään 
          tarpeelliseksi katsomansa määrän. Piiritoimikunta toiwoo kaikkialta edustajia mahdollisimman runsaasti. Niillä paikkakunnilla, missä toimiwaa puoluejärjestöä ei ole olemassa, woiwat 
          asianharrastajat walita keskuudestaan edustajia tai itse saapua kokoukseen.</p>
        <p>Toiwon kokoukselle wirkeyttä, hywiä ja innostawia päätöksiä! Pian owat ehkä uudet waalitkin käsissä, joten työsuunnitelmia tehtäessä on tämäkin otettawa huomioon.</p>
        <h5>* * *</h5>
        <p>Kesä on kohta kukkeimmillaan. Koulut owat päättyneet. Kaupunkilaiset järjestelewät maalle muuttoa. Kaupunki on pian „kesäkunnossa”: liike ja wilkkaus häwinnyt. Hauskaa ja wirkistäwää 
          kesää! Te onnelliset, jotka saatte maalla kesän ihanuudesta nauttia, imekää itsellenne woimaa ja terweyttä!</p>
        <SubDivider className="dividerStyle" />
        <p className="signature">Tiitus.</p>
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="27.6.1914">
        <h5>Muuan pesänsä likaaja.</h5>
        <h5>U. A:n purkaukset.</h5>
        <h5>Huijarit liikkeellä.</h5>
        <h5>Wanhaa ja uutta.</h5>
        <SubDivider className="dividerStyle" />
        <p>Meistä „suomettarelaisista” on jälleen eräs „woimaihminen” sanoutunut irti. Se on rowasti A. D. Wuorimaa. Hän on maalaisliiton wiipurilaisessa äänenkannattajassa „Maakansassa” pessyt 
          kätensä ja singonnut pannaan julistuksensa Suomalaista puoluetta wastaan. Otsikkona on:</p>
        <p>„Miksi suomalaisen puolueen maalaisedustajat ja niitten joukossa allekirjoittanut, owat jättäneet suomalaisen puolueen ja liittyneet maalaisliittoon”. Ja yhtä wahwaa on sisältökin. 
          „Maakansan” lukijat saawat tietää, miksi hra Wuorimaa on eronnut suomalaisesta puolueesta ja liittynyt heihin. Suomalainen puolue jo Yrjö Koskisen aikana muka oli „peruuttanut” 
          kansanwaltaisesta entisyydestään ja kääntynyt byrokraattisia periaatteita ajamaan. Tämä suunta on sitten kaswanut. Jo 1897 wuoden säätywaltiopäiwillä hra Danielson-Kalmari piteli hra W:ta 
          ankarasti erään hänen tekemänsä esitysehdotuksen johdosta, joka koski maanhankintaa tilattomalle wäestölle. Hra D. -K:ia kannatti melkein koko säätyeduskunta, mutta hallitus ryhtyi 
          pienoiskoossa kokeilemaan hra Wuorimaan ehdottamaan suuntaan, josta on kehittynyt nykyinen asutustoiminta! Hra W. jo silloin ennusti byrokraateille kuumat päiwät, kun maalaiswäestö 
          nousee.</p>
        <p>Suurlakko näytti tuowan asiaan jonkinlaisen käänteen, mutta se ilo oli lyhytaikainen. Wirkawaltaiset ainekset pysytteliwät pinnalla ja saiwat juonilla ja teeskentelyllä maalaiset 
          äänestämään heille mieluisia aineksia waltiopäiwille ajaen täten puolueen yhä enemmän pois ohjelmastaan. Wähitellen alkoi osa maalaiskansaa ja Suomal. puolueen edustajat alkoiwat wähetä. 
          Helsinkiläisten johtajien ansio on wanhan suomalaisen puolueen wähentyminen ja lopullinen hajoominen ja tulee olemaan historiankin tuomion edessä.</p>
        <p>Kun puolueen johtajat sitten oliwat muuttaneet puolueen kansanwaltaisesta maalaispuolueesta wirkawaltaiseksi ylimyspuolueeksi, oli luonnollista, etteiwät ne, jotka eiwät jälkimäisiä 
          periaatteita ja ihanteita koskaan olleet kannattaneet, enää woineet olla heidän ja puolueen alkuperäisille periaatteille wallan wieraassa puolueessa, waan on heidän täytynyt omantunnon ja 
          periaatteen miehinä siitä erota.</p>
        <p>Kaiken tämän itserakkaan paatoksen ja murheellisen ennustuksen johdosta kirjoittaa Uusi Suometar allaolewat riwit, jotka minusta hywin riittäwät hra Wuorimaan osalle:</p>
        <p>Woimme supistaa sanottawamme tämän johdosta warsin wähiin. Jätämme sikseen hra Wuorimaan ansiot wanhassa säätyeduskunnassa. Itsekin hän näkyy huomanneen, etteiwät hänen 
          säätyweljensäkään ymmärtäneet niitä riittäwästi arwossa pitää. Mitä uuteen eduskuntaan tulee, on ja pysyy tosiasiana, että suomalainen puolue siinä ensi sijassa on ajanut maalaisasioita. 
          Torppariasia, tilattoman wäestön maanhankintakysymys, maantiekysymys, metsäkysymys - mainittakoonpa mikä tahansa niistä suurista maalaisasioista, jotka owat otetut esille uudessa 
          eduskunnassa, niin jokainen tietää, että suomalainen puolue tehokkaasti ja wakuuttawasti on työskennellyt niiden ratkaisemiseksi. Se lisä, minkä hra W. on woinut tuoda näiden kysymysten 
          onnellisen ratkaisun edistämiseksi, on tosin kauttaaltaan ollut tuiki waatimaton.</p>
        <p>Seurauksena tästä suomalaisen puolueen toiminnasta onkin ollut, että sitä sywää juopaa, jonka herra W. luulee hawainneensa kaupunkilais- ja maalaisedustajain wälillä suomalaisessa 
          puolueessa, ei sanottawasti ole ollut olemassa muuta kuin hra W:n mielikuwituksessa ja hywässä halussa. Hra W. on kyllä osoittanut erinomaista pyrkimystä päästä jonkinlaiseksi maalaisten 
          päälliköksi, mutta puolueemme maalaiset eiwät ole antautuneet hänen johdettawikseen. Herra W:n joukko on niin ollen supistunut johonkin tai muutamaan harwaan edustajaan.</p>
        <p>Mitä hra W. puhuu siitä, että helsinkiläiset „salajuonilla ja teeskentelyllä” aina owat onnistuneet saamaan maalaiskunnan äänestämään heille mieluisia aineksia, niin lienee sen takana 
          joku hämärä aawistus siitä, että Helsingistä päin joskus lienee annettu Wiipurin läntisen piirin suomenmielisten walitsijain tietää, että W:sta ei suomalaisen puolueen edustajana ole 
          waltiopäiwillä sanottawaa hyötyä, mutta toisinaan kylläkin tuntuwaa wahinkoa, ja että sentähden olisi wiisasta walita sieltä joku toinen hänen tilalleen.</p>
        <p>Sellaisia parjauksia, jommoisilla hra W. nyt esittäytyy uusille puoluetowereilleen, kestää suomalainen puolue tyynesti. Suomalainen puolue tietää tehneensä maalaiskysymysten ratkaisuksi 
          enemmän kuin yksikään muu puolue, Warmaa myöskin on, että maalaisliitto ei siinä suhteessa tule edes toisellekaan sijalle. Ja sanottakoon se suoraan: kokemuksen perusteella olemme 
          wakuutetut siitä, että maalaisliiton osuus työssä maalaiskysymysten hywäksi ei tule suurestikaan kaswamaan sen uuden lisän kautta, minkä puolue nyt on saanut.</p>
        <h5>* * *</h5>
        <p>On jo wiikko, parikin, wierähtänyt siitä kun „Uusi Aura” otti koirapiiskan seinältään antaakseen „Hämeen Sanomille” isällisen woiteluksensa sen johdosta, että me olimme julkaisseet 
          senaattori Kairamon selityksen „Uuden Auran” ehdottamasta pelastuskeinosta torppariasiassamme ja uskaltaneet siihen omalta osaltamme liittää muutaman poikkinaisen sanan. Tämä lehden purkaus 
          ei oikeastaan ansaitsisi wastausta, mutta täällä alikerrassa woi sen muowailla muotoon, joka soweltuu „Uuden Auran” keskustelutyyliin.</p>
        <p>Me emme omasta puolestamme sanoneet halaistua sanaakaan „Uuden Auran” esittämästä keinosta. Kysymys oli päiwän polttawin, me selostimme „Uuden Auran” kannan ja selostimme myöskin 
          senaattori Kairamon mielipiteen siitä. Omasta kohden huomautimme waan, että se tapa, millä „Uusi Aura” puhuu Suomalaisen puolueen menettelystä tässä arkaluontoisessa asiassa, on omiansa 
          asettamaan puolueen peräti huonoon waloon, nostattamaan warsinkin sosialistien leirissä „oikean riemunulwonnan” ja herättämään omassa puolueessa oikeutettua suuttumusta.</p>
        <p>Kaikki tämä on totta. Sosialistilehdet, m. m. täkäläinen „Hämeen Woima”, owat mitä suurimmalla ilolla rientäneet lainailemaan „Uuden Auran” „suoria sanoja puolueelleen”. Ne owat tehneet 
          niistä johtopäätöksiä, jotka, jos „Uuden Auran” wäitteet pitäisiwät paikkansa ja kelpaisiwat edellytyksiksi, olisiwat puolueellemme warsin haikeita. Mutta siksi ne eiwät kelpaa, niillä ei 
          ole pohjaa, eikä perustaa.</p>
        <p>„Uusi Aura” ei mitenkään woi puolustautua meidän moitteitamme wastaan ja niinpä se waan umpimähkään höyryilee ympärilleen. Se ei tahdo uskoa, että me olisimme tästä sen „wiimeisimmästä 
          karhunpalwelusta puolueelleen” omasta puolestamme suuttuneet, waan että me waan mielistelläksemme joitakin henkilöitä, joista „Uudella Auralla” on syytä olla pitämättä, olemme käyneet 
          siihen käsiksi. Minä nyt kuitenkin wakuutan, ettei asia ole ollut „pussissa” enempää kuin „säkissäkään”, waan että me waatimattomassa itsessämme wälittömästi tajusimme, mitä moinen syytös 
          omasta puolueesta merkitsi ja riensimme sen leimaamaan siksi, mitä se laadultaan oli. „Uuden Auran” ei todellakaan olisi kannattanut kiiwastua tuosta „karhunpalweluksesta”, se on tehnyt 
          niitä jo niin monta ja sitä nimitystä on niihin sowitettu jo niin monasti, että luulisi jo hiukan tottuwankin. Mutta „Uusi Aura” on ollut „itseänsä täynnä” jo useamman wuoden, eikä se 
          ole waiwaantunut lukemaan mitään kritiikkiä itsestänsä niin, että siitä olisi jotakin jäänyt mieleen ja että se olisi jotakin opettanut.</p>
        <p>Tähän saa tämä juttu jäädä, sen jatkamisesta ei kuitenkaan ole mitään hyötyä. „Hämeen Woiman” kahteen arwoisaan artikkeliin en wiitsi ryhtyä wastaamaan, kun niissä premissit owat wäärät, 
          on itse johtopäätöskin wäärä.</p>
        <h5>* * *</h5>
        <p>Meillä on täällä Hämeenlinnassa ollut markkinat taas ja laadultaan aiwan poikkeuksellisen opettawaiset. Ikäwä waan, että se oppi on tullut asianomaisille niin kirwelewän kalliiksi.</p>
        <p>Me olemme tähän asti säilyneet täällä Hämeenlinnassa koko lailla turwassa hewos y. m. huijareilta. Nyt näkywät ne ulottawan toimintapiirinsä tännekin ja näillä markkinoilla saawuttiwat ne 
          ainakin puolen tusinaa uhreja. Temput oliwat tutut wanhastaan, Tampereen puolella ei niillä kait enään petetä ketään, mutta täällä ne wielä käywät täydestä. Erikoista mielenkiintoa herätti 
          minussa eräs tapaus. Kaikki muut oliwat suoraan tunnustaneet tyhmyytensä, mutta eräs joukosta ilmoitti, että hänelle oli tarjottu myrkytetty paperossi, hän oli huumaantunut. Mies woi 
          todellakin ihailla itseään! Tällaista woimakeinoa en ole kuullut huijarien koskaan käyttäneen, ja se todistaa, että heillä oli kerrassaan werraton wastustaja.</p>
        <p>Mutta niille muille minä wastaisuuden waralle tahdon huomauttaa, että pitäwät silmänsä auki. Huijarit owat nekin nykyään „järjestyneitä” ja toimiwat suurella woimalla ja menestyksellä. 
          Niitä on kaikkialla, missä enemmän ihmisiä tiedetään tulewan yhteen. On parasta katsoa jokaista kaupanhierojaa ensin niillä silmin, silloin saa piankin selwille, mistä kukin käy. Kun 
          siwulliset omat kowasti innostuneita kaupasta, silloin woi olla warma siitä, että on huijarijoukon piirittämä ja parasta on silloin jättää tanner tyhjäksi.</p>
        <p>Poliisilaitoksen on tietysti myöskin enemmän koitettawa lähettää miehiänsä yleisön joukkoon suojelemaan sitä huijareilta. Mutta siwulta käsin ei näissä asioissa juuri apua lähde, se on 
          saatawa omasta otsasta ja sinne on warattawa entistä enemmän älyä, jos nykyaikoina haluaa olla markkinoilla mukana.</p>
        <h5>* * *</h5>
        <p>Olkoon jo heti aluksi suoraan ja awoimesti tunnustettu, että olen täydellinen maallikko kunnioitettawaa pesijättärien ammattikuntaa koskewissa asioissa. Eli toisin sanoen, että se, mikä 
          tässä seuraa on suurimmaksi osaksi ollut säkissä, ennenkuin se tuli suuhun.</p>
        <p>Jo pitemmän aikaa on kaupungin tahänastinen laiwalaiturin wieressä sijaitsewa „pyykkihuone” ollut kauneutta rakastawain kaupunginisien silmätikkuna. Kaikissa sopiwissa tilaisuuksissa owat 
          he koettaneet tuoda pyykkihuoneelle tuhoa ennustawan katsantokantansa esille, kunnes wihdoin heidän waiwansa ja aherruksensa on saanut palkintonsa, niin että wanha pyykkihuone pian on 
          „muisto wain”.</p>
        <p>En tahdo wäittää wanhaa pyykkihuonetta kauniiksi enkä terweydellisessäkään suhteessa mallikelpoiseksi, mutta kappale wanhaa Hämeenlinnaa se on ja aukon sekin, kun se kerran on poissa, 
          jättää jälkeensä hämeenlinnalaiseen sydämeen. Enkä tiedä, miten sen korwaa korotettu rantapenger, nurmikkoineen, suorawiiwaisiin riweihin istutettuine puineen ja sannoitettuine 
          käytäwineen.</p>
        <p>Kun wanha pyykkihuone siten oli saanut tuomionsa, päättiwät isät tietenkin rakentaa uuden ja entistä ehomman. Hankittiin piirustukset ja hywäksyttiin ne sowussa ja yksimielisyydessä. 
          Kaunis siitä tuli päältä katsoen, sisustaan eiwat isät suuresti kiinnittäneet huomiota ja asiantuntijoiden apua ei tarwittu. Sitä enemmän oli waiwaa, minne sen sijoittaisi. Isät alkoiwat 
          sitä uittaa „Narikkarannasta” Schmausserin kärkeen, järwen tälle puolen ja tuolle puolen, sillanpieleen, taisiwatpa käydä Linnankärjessä ja „Bastmanin alla” asti, sousiwat ja huopasiwat, 
          ottiwat huomioon tuulet ja sillan alta puhaltawat wiimat, kunnes lopulta uupuneina ja hiessään heittiwät sen järwen tuolle puolen hewoslaiturin wiereen. Ja siinä se sitten on.</p>
        <p>On kuin suuren herraskartanon uimahuone hillitynharmaana ja walkoisena puistikon wihreätä taustaa wastaan. Entinen kiwikkoranta on siistitty ja sijaan on rakennettu korkea penger, 
          käytäwät on sannoitettu, ja siten on hiukan williintyneen näköisestä puistikosta lyhyessä ajassa tullut mitä hauskimman näköinen sopukka. Luulenpa kauneutta rakastawain isäin 
          tyytywäisinä hykertäwän käsiään sillalta ihaillessaan työnsä tuloksia.</p>
        <p>Toista wiikkoa on nyt uusi pyykkihuone owet awoinna odotellut käyttäjiään. Niitä ei wain ole kuulunut. Wanhassa sitäwastoin on aina eiliseen asti aamusta iltaan wallinnut hyörinä ja 
          pyörinä ikäänkuin koko kaupunki yht'aikaa olisi alkanut toimittaa oikeata suursiiwousta. Eilen se siiwous loppui, sillä silloin wanha pyykkihuone höyrylaiwan awustamana lähti kaupungin 
          rannasta wiime retkelleen. Ehkä uusi tämän jälkeen saa enemmän käyttäjiä.</p>
        <p>Mikä sitten on syynä tähän uuden hylkimiseen ja wanhan rakkauteen? Mikäli minulle on lueteltu, on syitä niin monta, että tämän lehden palstat wain osapuilleen riittäisiwät niitä 
          julkituomaan. Kehotankin wain senwuoksi niitä, joita asia koskee, mittaamaan esim. weden sywyyden pyykkihuoneen rannan puoleisen nurkkauksen kohdalta ja samalla tarkastamaan weden 
          puhtautta, kun pari hikistä hewosta on wiety uimaan läheiseltä hewoslaiturilta. Samalla woisiwat he koettaa, kuinka helppoa on huuhtoa waatteita rinnan korkeudelle ulottuwan aitauksen 
          yli. Ja jos paikalla sattuu olemaan joku warsinainen, „asiantuntija”, niin häneltä he kyllä saawat tarpeellista lisäwalaistusta riittämään asti.</p>
        <p>Ainakin minut on saatu wakuutetuksi, että uutta pyykkihuonetta on muutamissa suhteissa korjattawa. Ja eiköhän olisi syytä korjauksiin ryhdyttäessä ottaa huomioon myöskin pyykkihuoneen 
          warsinaisten käyttäjien mielipide. Eiköhän sille myöskin löytyisi sopiwampaa paikkaa kaupunkimme rantamilla sillä nykyinen on ehdottomasti liian kaukana ja hankalan matkan päässä.</p>
        <SubDivider className="dividerStyle" />
        <p className="signature">Tiitus.</p>
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="16.7.1914">
        <h5>Kuumuus.</h5>
        <h5>Eduskuntaa ei hajoteta.</h5>
        <h5>Lihantarkastuksesta.</h5>
        <SubDivider className="dividerStyle" />
        <p>Kuumuutta on ollut enemmän kuin tarpeeksi. On ollut warjossakin yli 30 astetta. Jo tällä ilmalla tarkenee. Ja tätä kuumuutta on kestänyt wiikko toisensa jälkeen. Paikoin lienee jonkun 
          werran satanut, mutta kuitenkin wähemmässä määrässä. Paahtawa kuumuus on tukehduttawana kuiwannut kaiken, niin että kosteaa paikkaa on maanpinnalta waikea löytää. Perunan warret, wilja 
          ja herneet owat miltei kokonaan palaneet, joten on pelko huonosta, kalliista wuodesta, ellei pikaista sadetta saada. Toiwottawasti saadaankin ennen pitkää sadetta. Ukkosen jyrinää on 
          wiime päiwinä kuultu ja kaupungin ympäristöllä on jo hieman wirkistäwää sadettakin saatu.</p>
        <h5>* * *</h5>
        <p>Suomen kaikkiwaltias kenraalikuwernööri on innokkaasti puuhannut eduskunnan hajottamista torpparikysymyksemme johdosta. Ministerineuwoston kokouksessa kärsi hra Seyn musertawan tappion. 
          Kesäkuumuudesta huolimatta oli hän wallan palawalla touhulla ja kiireellä puuhannut ehdotuksensa puolesta, mutta ei yksikään ääni noussut häntä puoltamaan, waan jäi hän auttamattomasti 
          häwiölle. Hänen hajoitustouhuaan pidettiin turhana ja harkitsemattomana. Kenraalikuwernöörin ja senaatin kiihkeästä yrityksestä huolimatta säästymme nyt kait waalitouhusta, oikein pääsee 
          helpotuksen huokaus. Sosialisteillemme, taktiikkamestareille, ei tämä kumoon mennyt yritys liene wallan mieluinen, sillä hehän ampuiwat jo porwareita, warsinkin „suomettarelaisia” 
          yksitoista tuumasilla.</p>
        <p>Myöhemmät Pietarin tiedot kertowat, ettei korkeimmissa piireissä olla tyytywäisiä kenraalikuwernööri Seyniin hänen liiaksi jyrkän kantansa wuoksi Suomen torppariasiassa. Piireissä ei 
          hywäksytä sitä, että kenraali Seyn kannatti Suomen senaatin ehdotusta eduskunnan wiipymättömästä hajoittamisesta.</p>
        <p>Seynin asema ei kumminkaan toistaiseksi ole horjuwa, sillä kysymystä eduskunnan hajoittamisesta ei äskeisestä ministerineuwoston päätöksestä huolimatta kuitenkaan wielä woida pitää 
          lopullisena tässä asiassa. He arwelewat eduskunnan hajoittamisen olewan mahdollisen, jos eduskunta kolmannen kerran kieltäytyy käsittelemästä maanwuokralakia.</p>
        <h5>* * *</h5>
        <p>Hywä kaupunkimme on taasen yhdessä asiassa mennyt monia muita kaupunkeja edelle, wieläpä yksin maan pääkaupunkiakin. Suuriarwoinen terweydenhoidollinen toimenpide, lihantarkastuspakko on 
          täällä ollut woimassa jo kaksi wiikkoa ja Helsingissä astuu se woimaan elok. 1 p:nä.</p>
        <p>Lihantarkastuspakko tarkoittaa sitä, että teurastettujen nautaeläinten, wasikkain, sikojen, lampaiden, wuohien ja hewosten lihaa tahi sisälmyksiä ei saa kaupungissa eikä sen alueella 
          pitää kaupaksi eikä rawintoloissa, yleisissä ruokailupaikoissa, makkaratehtaissa tai muissa ruuanwalmistuslaitoksissa ihmisrawinnoksi walmistaa ellei se ole tarkastettu ja leimattu 
          kaupungin lihantarkastuksessa.</p>
        <p>Tarkastuksen ja leimaamisen toimittaa laillistettu eläinlääkäri terweyshoitolautakunnan hywäksymien lähempien ohjeiden mukaan.</p>
        <p>Ihmisrawinnoksi kelpaamattomaksi hawaittu liha on tarkastuslaitoksen toimesta häwitettäwä, ellei sitä todistettawasti käytetä teknillisiin tarkoituksiin.</p>
        <p>Kaupaksi pidetty leimaamaton liha on järjestys- tai terweyshoitowiranomaisten toimesta heti otettawa talteen ja tarkastettawa omistajan kustannuksella, minkä lisäksi omistaja on 
          tarkastuswelwollisuuden laiminlyömisestä saatettawa edeswastuuseen.</p>
        <p>Henkilöt, jotka myywät kaupungin ulkopuolella walmistettuja makkaratawaroita tai muita sen tapaisia tuotteita owat welwolliset terweyshoitowiranomaisille toteennäyttämään, että 
          kysymyksessä olewat tawarat owat walmistetut asianmukaisesti tarkastetusta lihasta.</p>
        <p>Tarkastukseen on tuotawa:</p>
        <p>a) naudasta ja hewosesta wähintäin neljännes (jos puolikas tuodaan: halkaistuna, ei katkaistuna).</p>
        <p>b) muista teuraista wähintäin puolikas (halkaistuna, ei katkaistuna).</p>
        <p>Tarkastukseen on tuotawa eläimen alaleuka, kieli, sydän, keuhkot, maksa, perna, munuaiset ja lehmistä sen lisäksi utareet ja emä; ne elinosat kiintonaisina ja luonnollisessa asesmassaan, 
          jotka kuuluwat tarkastettawaan osaan.</p>
        <p>Taudin muuttamia osta ei ennen tarkastusta saa poistaa. Rauhasten pitää olla paikallaan eiwätkä saa olla leikeltyjä. Maha ja rintaontelon kalwoja ei myöskään saa ennen tarkastusta 
          poistaa.</p>
        <p>Tarkastustoimenpiteet owat herättäneet kahdenlaista mielipiteitä. Tarkastuksen puoltajat sanowat, että meidänkin kaupunkiimme on tuotu tuberkuloottisten ja myöskin muun taudin johdosta 
          lopetettujen tahi itsestään kuolleiden eläinten taikka muutoin pilaantunutta ja ala-arwoista lihaa, jonka takia tällaisen yritykset owat ehkäistäwät. Monet maalaiset ja teurastajat 
          pitäwät tarkastusta turhana ja wäittäwät sen tuottawan waiwaa, touhua ja lisämenoja. Jotkut kaupunkilaiset owat tarkastuksen syyksi asettaneet lihan hintojen kohoamisen.</p>
        <p>Kaikki uudet hommat tietysti tuntuwat ensin oudoilta, mutta kun tarkastus kerran on astunut woimmaan, kehoitetaan maaseudun lihanlähettäjiä tutustumaan ohjesääntöihin, jotta 
          wälttäisiwät turhia ikäwyyksiä. Hämeenlinnalaisten perheenemäntien y. m. lihanostajain on lihaostoksia tehdessään tarkoin walwottawa, että ostamassaan lihassa on tarkastusaseman leima.</p>
        <SubDivider className="dividerStyle" />
        <p className="signature">Tiitus.</p>
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="25.7.1914">
        <h5>Jokapäiwäinen leipämme.</h5>
        <h5>Tupakkatrusti.</h5>
        <h5>Rautatien ylikäytäwä.</h5>
        <h5>Hämeenlinna edistyy.</h5>
        <h5>Muuan „tieasia”.</h5>
        <SubDivider className="dividerStyle" />
        <p>Elämme waikeata aikaa. Uusilla iskuilla uhataan maatamme tuon tuostakin. Kaikki on nykyään mahdollista „yhdenwertaisuuslain” mukaan. Meidän ei anneta enää juosta, ei hypätä eikä heittää 
          keihästä, paitsi jos esiinnymme suuren isänmaan nimessä. Mahtawa Wenäjä pelkää meidän poikiemme kisailuja! Uusin wiesti kieltää meiltä leiwän syönninkin, jota tähän asti on pidetty ihan 
          waarattomana. Syödä sentään nytkin saamme, kun maksamme hywän tullin. Mitähän sitä wielä tapahtuukaan!</p>
        <p>Tuo jokapäiwäinen leipä, jota me jokainen tarwitsemme, on herättänyt wihamiehissämme kademieltä. Meidän annetaan tuntea monella tawalla, kenenkä waltaan me kuulumme. Paljas leipä, kalja, 
          hernesoppa ja puuro, nekin owat olleet siksi waarallisia kaikessa waatimattomuudessaan, että meitä on tarwinnut niidenkin takia rangaista. Lukija, ken lienetkin, saat wastedes kokea 
          welliweroja, puuroweroja ja kaljaweroja j. n. e. Joku pakinoitsija onkin huomauttanut, että pian määrätään wenäläistä limppua watsaan, suuhun suhuäänteet ja punainen paita päälle.</p>
        <p>Mutta walittelu ei auta. Maanwiljelijäin ja liikemiesten on nyt tehtäwä woitawansa tämän uuden, laittomalla tawalla syntyneen ja kansaneduskunnan epäämättömän iskun torjumiseksi. 
          Wiljatulli koskee kipeästi köyhempää osaa kansastamme. Nyt jo owat wiljatuotteiden hinnat ympäri maatamme tuntuwasti nousseet. Maanwiljelijät woiwat lisätä rukiinwiljelystä, joka wiime 
          wuosina on paljon wähentynyt. Siten säästetään miljoonia omaan maahamme. Kun wiljan tuotanto on katsottawa mitä tärkeimmäksi päiwän kysymykseksi ja kun Etelä-Hämeessä pitäisi olla 
          suuriakin edellytyksiä wiljanwiljelykseen, on Hämeen läänin maanwiljelys-seuran johtokunta asettanut kysymystä selwittämään kolmimiehisen toimikunnan. Erityisesti jätettiin toimikunnan 
          harkittawaksi, mitä menestymismahdollisuuksia olisi koko Etelä-Hämettä käsittäwällä osuusmyllyllä ja wiljanmyyntiosuuskunnalla. Toiwottawasti mainitun toimikunnan toimenpiteet johtawat 
          suotuisaan tulokseen!</p>
        <h5>* * *</h5>
        <p>Kuten jokainen tietää, uhraa amerikkalais-englantilaisen tupakkatrustin täkäl. edustaja Itämainen paperossitehdas, aika huomattawia summia tuotteittensa reklaamiin. Nyttemmin se näkyy 
          täällä H:linnassa ottaneen ilmoituspaikakseen keskeneräisten rakennusten aitauksia. Parisen wiikkoa takaperin trustin kirjawat kilwet ilmestyiwät torin warrelle, mutta aurinko, tuuli ja 
          sateet eiwat warmaankaan suosiollisesti silmäilleet muukalaista, koska ne wähitellen haihtuiwat. Sijaan ilmestyiwät oikein peltiset reklaamitaulut, jotka jälleen antawat ihmisille uutta 
          puheenaihetta. Kuulemamme mukaan ostaa trusti aitoja, liikkeiden ikkunoita y. m. hywistä kauppahinnoista. Eiwätköhän rakennusmestarimme ole edes sen werran kotoisen puolella, että 
          kääntäwät selkänsä tupakkatrustin agenteille. Toiwomme, että helsinkiläiset rakennusmestarit, jotka K. O. P:n uudisrakennuksen seinään owat antaneet plakaatteja naulata, ne siită ensi 
          tilassa poistawat, taikka eiwät ainakaan anna uusia asettaa.</p>
        <h5>* * *</h5>
        <p>Tuntuwaa haittaa liikenteelle on jo pitkän aikaa tuottanut Pakkahuoneen kohdalla olewa rautatien ylikäytäwä. Tämä haitta on wiime aikoina liikenteen sekä rautatiellä että maantiellä 
          wilkastuessa käynyt yhä tuntuwammaksi. Onhan rautatien tuolle puolen wähitellen muodostunut kokonainen esikaupunki ja hiukan etäämmällä sijaitsewa huwila-asutus, joista satoja ihmistä 
          joka päiwänä käy kaupungissa. Runsaasti käyttäwät tietä myöskin maalaiset, sillä tie on yksi kaikkein huomattawimmista waltawäylistä maaseudulta Hämeenlinnaan. Myös warsinainen 
          kaupunkiliikenne ulottuu tänne, sijaitseehan esim. rautateiden lastauslaituri rautatien tuolla puolen.</p>
        <p>Kuitenkin liikenne ylikäytäwällä tuon tuostakin keskeytyy ja maantietä käyttäwät saawat 15 ja 20:nkin minuuttia kärsiwällisesti odottaa, koska tietä sulkewa puomi jälleen kohoaa ja 
          päästää ylikäytäwän molemmin puolin kokoontuneet useinkin kymmeniin nousewat hewoset ja ihmiset jatkamaan keskeytynyttä matkaansa. Mitä wahinkoa ja ajanhukkaa tästä johtuu ja mitä 
          tunteita näin wasten tahtoaan odottamaan jääneen mielessä liikkuu, saattaa helposti arwata.</p>
        <p>Liikenne mainitulla tiellä on jo niin wilkas, että täytyy ruweta ajattelemaan sen helpottamista. Rautatien taholta on ilmoitettu, että siellä on tehty, mitä on woitu, jotta liikenne 
          saisi esteettömästi jatkua. Mutta liikenne rautateilläkin on niin äkillisesti lisääntynyt, että siltä taholta on aiwan mahdotonta saada parannusta aikaan.</p>
        <p>Nykyisissä oloissa ei epäkohtaa woida enään muulla tawoin korjata kuin johtamalla maantie joko rautatien ylitse tahi alitse. Tämä parannus on monin paikoin maassamme saatu aikaan 
          paikoilla, joilla ei liikenne likimainkaan ole niinkään wilkas kuin kysymyksessä olewalla ylikäytäwällä.</p>
        <p>Eiköhän kauppaseuran, waltuuston tahi niiden henkilöiden, jotka epäkohdasta enimmin kärsiwät olisi syytä ottaa asia harkittawakseen ja tehdä rautatiehallitukselle esitys sen korjaamisesta. 
          Sillä korjaamista asia kaipaa.</p>
        <h5>* * *</h5>
        <p>Kaupunkimme on näinä päiwinä jälleen huomattawasti edistynyt. Ei tarwitse hämeenlinnalaisen enään kuusiwiikkoisella poudallakaan joka henkäyksellä wetää suut ja silmät täyteen pölyä 
          siihen kuuluwine jokapäiwäistä hywinwointiamme wähemmän edistäwine aineksineen. Pöly tulee tästä lähtien pysymään siellä, missä sen tuleekin, kohoamatta enään kohti korkeuksia.</p>
        <p>Tyytywäisinä katselewat kasteluwaunuja warsinkin ne, jotka kuluneen kesänkin owat olleet pakotetut kaupungissa wiettämään. Ja tuonnoisia helteitä muistaen saattaa heidän mieleensä hiipiä 
          hiljainen ajatus: miksi ei jo ennen?</p>
        <p>Mutta parempi myöhäänkin, kuin ei milloinkaan. Ja wastahan „mätäkuukin” on alkanut. Sen kuluessa katumme wielä monasti saattawat tarwita wirwoittawia kylpyjä.</p>
        <h5>* * *</h5>
        <p>Tämä on jo niiltä suurilta poudilta, waikka joukossa on kowin wetistäkin.</p>
        <p>Satuin silloin kulkemaan kasarmikatua, kun sattumalta katsoessani Puistoon päin johtawalle tielle näin mahtawan pöly- tahi sawupilwen peittäwän koko sen puolen maailmaa. Olin jo luulla 
          koko tien warrella kohonneen „nuorimman esikaupunkimme” olewan tulessa ja liekeissä, kun äkkiä Alku-yhtiön kulmasta kuuluu kumea törähdys ja pieni musta automobiili syöksähtää pilwestä 
          esiin alkaen kiiwetä mäkeä ylös. Siunasin, että missä ne kasteluwaunutkin wiipywät, ja käännyin nopeasti ensimäisestä kulmasta, sillä autolla näkyi olewan erinomainen kyky saada kuiwasta 
          kadustakin irti sen, minkä irti saada saattoi.</p>
        <p>En woinut muuta kuin ihmetellä sitä pölyn paljoutta, minkä tuollainen pieni kommellus kykeni ilmoille kohottamaan puistoon johtawalta tieltä. Mutta ne, jotka tämän tien warrella asuwat 
          sekä ne, jotka sen lähemmin tuntewat, kuuluwat jo aikoja sitten laanneen sitä ihmettelemästä. Heidän wakuutuksensa mukaan on tie niin kaupungin liepeillä kuin onkin niitä kaikkein 
          huonoimmin hoidettuja.</p>
        <p>Poudalla sitä kyllä pääsee kulkemaan nielemällä pölyä arwaamattomia määriä, mutta kun hiukankin kauwemmin sataa, silloin nousee tie aiwan „pystyyn”. Eikä ainoastaan jalankulkijalle, waan 
          hewosmiehellekin. Raiteet omat pohjattomia, kuoppa kuopan wieressä, rattaat heittelewät sinne tänne, pyörät wajoawat lokaan kappoja myöden ja hewonen wain waiwoin kahlaa loka-aawikon läpi. 
          Kaupungin ajureille on tie käynyt oikeaksi loukkauskiweksi. Ja kuitenkin kuten sanottu tie on aiwan kaupungin liepeillä. Suurimmalle osalle kaupunkilaista on se suorin tie Puistoon. Sen 
          warrelle on syntynyt runsas asutus ja maalaiset käyttäwät sitä paljon.</p>
        <p>Kewäällä päätti waltuusto hätäaputöinä rakennuttaa tielle jalkakäytäwän. Hywä sekin, waikka se toistaiseksi onkin wain paperilla. Mutta eiköhän samalla olisi ollut syytä ryhtyä, kuten 
          waltuustossa ehdotettiinkin, myöskin warsinaista ajotietä korjaamaan. Ainakin wälttäwään kuntoon se nyt olisi saatawa, ennenkuin syyssateet saapuwat.</p>
        <SubDivider className="dividerStyle" />
        <p className="signature">Tiitus.</p>
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="5.9.1914">
        <h5>Sota.</h5>
        <h5>Kieltolaki.</h5>
        <h5>Seuroille.</h5>
        <h5>Koulut.</h5>
        <h5>Kirjeenwaihtajille ja asiamiehille.</h5>
        <SubDivider className="dividerStyle" />
        <p>Sota, sota! Se sana on jokaisen huulilla. Ennustukset toteutuiwat ja Europa on joutunut suursodan, maailmanpalon näyttämöksi. Tämä kohtalokas hetki ihmiskunnan historiassa tulee 
          epäilemättä olemaan sangen suurimerkityksellinen ja wuosiluku 1914 taitteentekewä ihmiskunnan elämässä 20:lla wuosisadalla.</p>
        <p>Me emme tunne emmekä woi tehdä laskelmia siitä, kuinka suureksi paisuu tämä sota ja mihin lopultakin itse sotanäyttämö, ainakin ratkaisewien taistelujen tanner, siirtyy. On hywin 
          uskottawaa ja niinkuin jo näkyykin, että kowin laajalla alueella otellaan. Kuka sitte wielä tietää, kuka nykyisistä puolueettomista walloista siihen sekaantuu. Sodanjulistuksia on jo 
          tusinan werran.</p>
        <p>Tulewaisuudesta emme tiedä ja arwelujen tekeminen on tarpeetonta.</p>
        <p>Muusta ei nyt puhuta kuin sodasta ja samoin ei kirjoiteta myöskään muusta. Kukapa siitä osaisi poikkeuksen tehdä. En ainakaan mină. Minunkin siis täytyy siitä kirjoittaa.</p>
        <p>Kaikki ihmiset waltasi omituinen sodan pelko. Toisissa tuo pelko esiintyi - warsinkin naisissa - jo todellakin „pelottawassa” muodossa. Itkemiset ja hysteeriset kohtaukset eiwät olleet 
          harwinaista. Kaikkein eniten pelättiin ensi alussa wihollisen maahan hyökkäämistä ja siitä johtuwaa häwitystä. Saattaa olla niinkin, että ei edes meidän rannikkomme tule kärsimään sodan 
          häwitystä. Kaikkein wähimmin sisämaassa - ainakaan pitkiin aikoihin - tarwitse wihollista peljätä. Siitä huolesta olkaamme kaikessa rauhassa.</p>
        <p>Myöskään meillä ei ole omaa sotawäkeä, joten aktiiwisesti emme itse sotanäyttämöllä tule waikuttamaan ja siis sekin pelko on pois.</p>
        <p>Ei ole syytä ryhtyä mihinkään ajattelemattomiin tekoihin, niinkuin ehkä aremmat jo owat ryhtyneet. Niinpä muutamat tallettajat owat rientäneet pankeista noutamaan säästönsä pannakseen ne 
          sitte parempaan „talteen”, johonkin sukan säärykseen. - Onpa ollut tapauksia, että taskuwarkaat owat joutuneet osallisiksi näistä „kassakaapeista.” Myöskin hiiret owat rientäneet pesäänsä 
          tekemään paperirahoista.</p>
        <p>Sanomalehtien sekä yksityisten asianymmärtäwien onkin onnistunut ensi kuumetta jäähdyttämään.</p>
        <p>Maamme on sotatilassa ja näin ollen on mitä waarallisinta puhua kewytmielisiä ja ajattelemattomia puheita.</p>
        <p>On siis oltawa warowaisia puheittemme suhteen ja esiintymisemme tyyntä ja arwokasta.</p>
        <p>Kaikki tiedot sotanäyttämöltä owat hywin niukkoja. Sensijaan liikkuu sadottain kaikenlaista tuulesta temmattuja juttuja, joihin ei ole luottamista. Ainoastaan sanomalehdistä saatuja ja 
          wirallisesti wahwistettuja tietoja on uskottawa. Tosin nekään eiwät joka suhteessa tarjoa todellisia kuwaa.</p>
        <p>Maamiesten et tule lannistua, waan kylwää edelleenkin kaikessa rauhassa. Jokainen päiwä elettätöön aina kerrallaan eikä kulutettako aiwoja turhanpäiwäisten arwiolaskujen tekemisessä 
          nykyisistä suurtapahtumista.</p>
        <p>Nykyisestä tilanteesta on johtunut, että liikenne ja teollisuus owat jotakuinkin lamassa. Tällaista poikkeustilaa woi kestää kauwemminkin. Senpäwuoksi siitä on seurauksena yleinen 
          työnpuute kautta koko maan. Innokkaan pohdinnan alaisena onkin maan sanomalehdissä ollut tilapäisten hätäaputöiden järjestämisestä. Tarpeellisiin alustawiin keinoihin on jo ryhdytty 
          monin paikoin. Niitä tulewat teettämään kaupungit ja maalaiskunnat, ehkäpä waltiokin. Myöskin yksityiset woiwat siihen esim. maanwiljelystöihin, uutismaan raiwaamiseen, ojittamiseen 
          j. n. e. ryhtyä.</p>
        <h5>* * *</h5>
        <p>Maamme on toista kuukautta elänyt jotenkin täydellisen kieltolain merkeissä. Wäkijuomakaupat ja kapakat owat suljetut sota-ajaksi. Kieltolain wastustajainkin täytyy myöntää, että elämä 
          tänä aikana on ollut perin siiwoa ja rauhallista. Wallattomuudet ja mielettömyydet owat unohdetut. Oikein on hauska liikkua kaduilla, kun ei näy humalaisia ja rähinän pitäjiä. Sellaisen 
          käänteen saa wiinawirtojen sulkeminen. Ja kukaan ei ole kuollut wiinan puutteeseen, mutta wäkijuomien wirratessa saa wähän päästä lukea, miten siellä ja siellä on mies kuollut 
          liiallisesta alkoholin nauttimisesta. Kieltolaki olisi täydellinen, jos „herrain” puoleltakin kiellettäisiin tarjoileminen ruoankin yhteydessä. Tehtäköön se!</p>
        <p>Tyytywäisyydellä on mainittawa sekin, että spriin, pulituurin y. m. saantia on tiukennettu. Moni hankkikin tätä tietä itselleen humalan.</p>
        <p>Wäkijuomakauppiaat owat kowin hermostuneita tästä kieltolaista. Arwaahan sen. Tuntewat kait paksun kukkaronsa hoikkenewan. He yrittäwät keinolla millä tahansa saada juomakaupat 
          awatuiksi, m. m. sillä werukkeella, että konjakkia ja wiiniä saataisiin ostaa lääkärin antamalla reseptillä. Wäkijuomakauppiaat eiwät edes tällaisena wakawana aikana wälitä hituistakaan 
          yhteisestä hywästä.</p>
        <p>Me kieltolain ystäwät iloitsemme tästä koekieltolaista ja toiwomme hartaasti, että tämän hywän koetuksen jälkeen saadaan köyhään Suomeen todellinen kieltolaki onnen Sampoa jauhamaan, 
          puutetta ja hätää poistamaan!</p>
        <h5>* * *</h5>
        <p>Seuroille ja yhdistyksille lienee syytä huomauttaa, että ne nykyisissä oloissa juhlien ja iltamien toimeenpanoa rajoittaisiwat, ainakin sikäli, ettei niitä wain pelkän huwin ja rahan 
          ansaitsemisen takia järjestettäisi. Tähän niitä wakawa aika mielestäni kehottaa. Warsinkin nuori wäki uhraa tuollaisissa seurojen järjestämissä huwitilaisuuksissa wuosittain suuren summan 
          rahaa - olkoonpa hywiin tarkoituksiin - , joka nyt on warsinkin wähawaraisempien säästettäwä toimeentulonsa turwaamiseksi. Eikä nykyinen wakawa ja huolestuttawa aika muutenkaan sowellu 
          tanssin ja muun kewyen huwin tarjoamiselle. Sikäli kuin juhlia ja iltamia järjestetään, on niihin siis koetettawa warata runsaasti wakawaa ja arwokasta ohjelmaa. Ellei sellaista woida 
          saada, on juhlat ja iltamat paras jättää pitämättä ja koetettawa niiden asemesta saada aikaan muunlaista toimintaa etupäässä seurojen jäsenten keskuudessa. Lukurenkaiden perustaminen ja 
          kotiopinnoiden järjestäminen, mainitakseni pari esimerkkiä, sopisi seurojen nyt ottaa entistä enemmän tehtäwäkseen. Niinikään sopisi järjestää jäsenten keskeisiä keskustelukokouksia ja 
          perheillanwiettoja. Yleensä olisi seurojen koetettawa waikuttaa etupäässä sisäänpäin, jäsentensä keskuudessa, mikä tawallisesti onkin liian paljon unohdettu pyrittäessä waikuttamaan 
          ulospäin.</p>
        <h5>* * *</h5>
        <p>Lapset kouluun! Se on ollut näiden päiwien tunnussana. Kehoitusta onkin noudatettu, esim. Hämeenlinnan kansakouluun nähden. Maaseudulla on myöskin ollut kansakouluun pyrkiwiä tawallinen 
          määrä. On hywä, etteiwät wanhemmat laiminlyö welwollisuuttaan nousewaa kansaa kohtaan, olkoot ajat minkälaiset tahansa.</p>
        <p>Oppikoulut alkawat wasta lokak. 1 p:nä. Silloin täälläkin wasta warsinainen syyssesonki alkaa. Koulujen oppilaille, joille on tullut odottamaton kesäloman jatko, suunnittelewat opettajat 
          koulutehtäwiä kodeissa etupäässä yliluokkien oppilaille. Tästäkään ei ole muuta kuin hywää sanottawa, kun pysytään kohtuullisuuden rajoissa.</p>
        <h5>* * *</h5>
        <p>Toimitus on pyytänyt minua huomauttamaan maaseutukirjeenwaihtajille, että eiwät lopen wäsyisi sotauutisten lukemisessa, waan joskus muistaisiwat lähettää edes lyhyitä selontekoja 
          maakunnan tapahtumista. Niitä kaiwataan ja ne owat huwituksena sotauutisten keskellä.</p>
          <p>Asiamiehille myös sana. Tällaisena kohtalokkaana, järkyttäwistä tapahtumista rikkaana aikana ei kukaan woi tulla toimeen ilman sanomalehteä. Paljon niitä sentään löytyy, jotka yrittäwät 
            tulla lehdettä toimeen. Menkää näiden luo ja lewittäkää „Hämeen Sanomia”, joka seuraa tarkasti sotaa sanoin ja kuwin! Ystäwät ja asiamiehet siis pitemmittä puheitta käsittäwät, että 
            juuri nyt on entistä tarmokkaammin lewitettäwä ja kannatettawa „Hämeen Sanomia.”</p>
        <SubDivider className="dividerStyle" />
        <p className="signature">Tiitus.</p>
      </Article>

      <Divider className="dividerStyle" />

      <Article titleText="13.10.1914">
        <h5>Punainen Risti.</h5>
        <h5>Matkalaukut ja kirjeet.</h5>
        <h5>Kansanopistoon!</h5>
        <h5>Siirtolaisuus.</h5>
        <SubDivider className="dividerStyle" />
        <p>Punaisen Ristin awustamisella on kansamme nykyisen sodan aikana ehtinyt osottaa, kuinka hywin se käsittää welwollisuutensa waltakuntaa kohtaan ja kuinka walmis se on nuo welwollisuudet 
          täyttämään, ottamaan osaltaan niiden koettelemusten kantamiseen, jotka waltakuntaa owat kohdanneet. Huomattawia summia on lyhyessä ajassa saatu, kaupunkien, kuntien ja yksityisten 
          kansalaisten wapaaehtoisen uhrautuwaisuuden kautta kokoon. Sotanäyttämölle on jo lähetetty suomalainen sairashoito-osasto ja teollisuudenharjoittajaimme ambulanssi on walmiina lähtemään. 
          Useissa kaupungeissa, m. m. Hämeenlinnassa on warattu sairassijoja sodassa haawoittuneita ja sairastuneita warten.</p>
        <p>Wäärin olisi kuitenkin luulla, että awustusta jo on saatu riittäwästi kokoon, tai että olisimme jo tehneet tässä suhteessa kaiken, mitä woimme ja mihin, paitsi welwollisuus waltakuntaa 
          kohtaan, myöskin ihmisyys meitä pyhästi welwottaa. Nykyisessä sodassa tarwitaan Punaisen Ristin jaloa toimintaa enemmän kuin kenties missään sodassa tätä ennen, sitä tarwitaan 
          arwaamattoman paljon. Toiminta taas waatii suuria kustannuksia. Kansamme, joka on säästynyt sodan jaloista ja todennäköisesti säästyy edelleenkin, on welwollinen mahdollisimman tehokkaalla 
          tawalla ottamaan osaa sotaan tuolla kauniilla tawalla, mitä Punaisen Ristin toiminta tarkottaa: sodan tuottamia kärsimyistä liewentämällä.</p>
        <p>Ilahuttawa uhrautuwaisuus on tähän asti rajoittunut pääasiallisesti kaupunkeihin ja kaupunkilaisiin. Toiwottawasti saadaan eri puolilla maaseudullakin toimintaa Punasen Ristin hywäksi 
          alulle ja se tuottamaan yhtä hywiä tuloksia siellä kuin kaupungeissakin. Toimihenkilöiden maalaiskunnissa on saatawa toiminta kunkin kunnan piirissä wireille, woiwatpa maalaiskunnat 
          kuntinakin, samoin kaupunkikunnatkin, awustusta tarkoitusta warten myöntää. Toiwomme, ettei läänin kuwernööri ole turhaan wedonnut hämäläisten ihmisyyden tunteisiin.</p>
        <p>Ensi sunnuntaina neljäntenä rukouspäiwänä kannetaan maamme kaikissa kirkoissa kolehti Punaisen Ristin hywäksi. Maamme kirkkokansalla on silloin tilaisuus ja sitä hartaasti kehoitan 
          warojensa mukaan awustamaan tätä laupeuden, rauhan ja rakkauden työtä!</p>
        <h5>* * *</h5>
        <p>Rautatietä ja postia käyttäwälle yleisölle on annettu uusia määräyksiä, joista minua on pyydetty huomauttamaan.</p>
        <p>Matkalaukullanne ei saa olla pituutta kuin 65 sm., laajuutta ei enempää kuin 45 sm. eikä korkeutta enemmän kuin 30 sm. Siis kutakuinkin awara matkalaukku, johon kyllä mahtuu yhtä ja 
          toista matkalle otettawaa.</p>
        <p>Kirjeiden lähettäjäin on otettawa huomioon, että kaikki sellaiset kirjeet, jotka ennen kulkiwat 20 pennillä, on nyt warustettawa 25 pennin postimerkeillä ja paikalliskirjeet, jotka ennen 
          kulkiwat 10 pennillä, tarwitsewat nykyään 15 pennin postimerkit. Tawalliset postikortit kulkewat edelleenkin 10 pennillä.</p>
        <h5>* * *</h5>
        <p>Aika on wakawa sekä ulkonaisesti että sisällisesti. Wuodentulo on niukanpuoleinen. Monessa kodissa on ehkä noussut kysymys: woidaanko tänä wuonna poikaa, tytärtä kustantaa 
          kansanopistoon.</p>
        <p>Kun asiata pitemmältä ajattelee, täytynee kuitenkin saada kysymykseen myöntäwä wastaus:</p>
        <p>Kun tuli wiljatulli ja kuiwuus maata ahdisti, kaikui maanwiljelijäin kesken kehoitus: kyntäkäämme sywemmälle, laittakaamme lantaa kaksinwerroin kuni Saarijärwen Paawo muinoin, 
          silloin ei polta pouta niin pahoin, silloin kaswaa wiljan oma wainio.</p>
        <p>Mutta kyntää sywemmälle, hoitaa metsää, peltoa, karjaa entistään paremmin, se on nykyaikana taito, jota pitää myöskin koulussa ja kirjoista opetella. Maamiehen toimi on ammateista 
          waikein, mutta samalla waiherikkain, terweellisin ja wapain.</p>
        <p>Siksipä maalaisen ei kannata olla menemättä kansanopistoon.</p>
        <p>Mutta sywemmälle kyntämisen kehoituksen woimme me toistaa toinen toisillemme toisessakin merkityksessä:</p>
        <p>Meillä on ollut rauha, hywät wuodet, onnelliset olot, mutta henkinen kynnös on tullut matalasti tehtyä. Kodit, joissa kirjojen kirjaa wiljellään, owat harwinaisiksi käyneet. Siweelliset 
          tawat owat höltyneet. Nuorten rikoksentekijäin luku kaswaa. Alkoholin käyttö lisääntyy. Hywiä kirjoja, warsinkin tietokirjoja luetaan wähän. Itsekaswatustyö kansalais- l, kotiopintojen 
          muodossa kituen kaswaa.</p>
        <p>Olisi meidän opittawa kyntämään sywemmältä!</p>
        <p>- Ja tätä sywemmältä kyntämistä, sywempää käsitystä ihmiselämästä ja sen welwollisuuksista tahtoo kansanopisto nuorisollemme opettaa.</p>
        <p>Mutta mistä warat?</p>
        <p>- Se parisataa markkaa, joka opistossa säästäwästi eläen kuluu, on pieni raha. Meidän ei kannata olla käyttämättä nuorisoa kansanopistossa.</p>
        <p>Kehotus, mennä kansanopistoon, koskee yhtä hywin maalaisia kuin kaupunkilaisiakin.</p>
        <p>Hämeenlinnan kansakoulun johtokunta on jälleen julistanut kaupungin kansakoulun oppimäärän suorittaneiden haettawaksi yhden 200 mk:n suuruisen apurahan. Edellisellä kerralla on wain harwa 
          käyttänyt tätä tilaisuutta hywäkseen. Joskus lienee käynyt niinkin, ettei apurahaa ole, häpeä sanoa, kukaan hakenut. Tehtäköön nyt parannus ja ilmestyköön runsaasti hakijoita!</p>
        <h5>* * *</h5>
        <p>Woimakkaampana kuin pitkiin aikoihin tätä ennen esiintyi siirtolaiskiihko maassamme wiime wuotena. Tämä kuume näkyy wallanneen ei ainoastaan irtolais- ja työwäestön, waan enin kaikista 
          tilallisista ja torppareita ja heidän lapsiaan, eli n.k. maatawiljelewää wäestöä siihen määrin, että heidän lukumääränsä muihin siirtolaisiin werrattuna nousi 63 prosenttiin.</p>
        <p>Äskettäin painosta ilmestyneen siirtolaistilaston mukaan lähti maastamme wiime wuonna kaikkiaan 20,057 siirtolaista eli 87 prosenttia enemmän kuin w. 1912, jolloin lähteneiden luku oli 
          10,724. Ainoastaan w. 1902 on siirtolaisuus ollut suurempi kuin wiime wuonna.</p>
        <p>Eri lääneihin nähden jakautui siirtolaisuus seuraawasti: Uudenmaan l. 1,395, Turun ja Porin l. 4,190, Hämeen l. 1,140, Viipurin l. 1,783, Mikkelin l. 771, Kuopion l. 1,859, Vaasan l. 
          7,490 ja Oulun l. 1,929; yht. 20,057; niistä 2,824 kaupungeista ja maalta 17,173.</p>
        <p>Jos tarkastetaan siirtolaisten ammatillista ryhmitystä, huomaa, että maatawiljelewää wäestöä oli 12,627 eli 63 pros., työwäkeä ja irtainta wäestöä 3,233 eli 16,1 pros., palweluswäkeä 
          1,199 eli 6 pros, käsityöläisiä 1,141 eli 5,7 pros., talonomistajia, merikapteeneja ja merimiehiä 538 eli 2,7 pros., tehdastyöläisiä 373 l. 1,9 pros., wirka- ja palwelusmiehiä 473 eli 
          2,3 pros. sekä sellaisia, joiden ammatti on tuntematon, 478 eli 2,3 pros.</p>
        <p>Maanwiljelyswäestön keskuudesta lähteneistä siirtolaisista muodostawat enemmistön talollisten pojat, sekä loiset ja mäkitupalaiset.</p>
        <p>Tällaisia numeroita tarkastellessa tulee kansamme taloudellista waurastumista ja maatalouden edistymistä toiwowa ihminen warmaankin murheelliselle mielelle, tuntiessaan kaiken sen tuhon, 
          minkä siirtolaisuus tuottaa jo yksistään parhaimman ja pystywimmän työwoiman wähentämisessä. Kaikki nämä monet tuhannet wahwat kädet olisi tarwittu kipeimmin omassa maassa, raiwaamassa ja 
          perkaamassa sitä, sillä laajat alat maatamme odottaa ja kaipaa wiljelijänsä ja perkaajansa wankkaa kättä samalla kun teollisuuswäestön ja kuljeksiwaan elämään antautuwan wäestön lukuisa 
          joukko alkaa olla wuosi wuodelta yhä tukalammassa ja tukalammassa asemassa jokapäiwäisen toimeentulon puolesta.</p>
        <SubDivider className="dividerStyle" />
        <p className="signature">Tiitus.</p>
      </Article>




      <br></br>
      <a className="hyperLink" href="https://digi.kansalliskirjasto.fi/sanomalehti/titles/0356-2751?display=THUMB&year=1914">Linkki vuosikertaan 1914</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Hämeenlinnan kirje 1914</title> // metadata

export default Letter1914Page 