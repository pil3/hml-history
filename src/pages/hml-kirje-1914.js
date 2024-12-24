import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import "../styles/base/global.css"

import SubDivider from "../assets/sub-divider.svg"

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


      <br></br>
      <a className="hyperLink" href="https://digi.kansalliskirjasto.fi/sanomalehti/titles/0356-2751?display=THUMB&year=1914">Linkki vuosikertaan 1914</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Hämeenlinnan kirje 1914</title> // metadata

export default Letter1914Page 