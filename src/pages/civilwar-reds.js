import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import Image from "react-bootstrap/Image"

import "../styles/base/global.css"

import divider from "../assets/divider.png"
import img1 from "../images/content/reds1918/img-1.jpg"
import img2 from "../images/content/reds1918/img-2.jpg"
import img3 from "../images/content/reds1918/img-3.jpg"
import img4 from "../images/content/reds1918/img-4.jpg"
import img5 from "../images/content/reds1918/img-5.jpg"
import img6 from "../images/content/reds1918/img-6.jpg"
import img7 from "../images/content/reds1918/img-7.jpg"
import img8 from "../images/content/reds1918/img-8.jpg"
import img9 from "../images/content/reds1918/img-9.jpg"
import img10 from "../images/content/reds1918/img-10.jpg"
import img11 from "../images/content/reds1918/img-11.jpg"
import img12 from "../images/content/reds1918/img-12.jpg"
import img13 from "../images/content/reds1918/img-13.jpg"
import img14 from "../images/content/reds1918/img-14.jpg"
import img15 from "../images/content/reds1918/img-15.jpg"
import img16 from "../images/content/reds1918/img-16.jpg"
import img17 from "../images/content/reds1918/img-17.jpg"

const CivilWarRedsPage = () => {
  return (
    <Layout titleText="Työmies, 1918">
      <h2>Punainen Sisällissota</h2>

      <div className="interTitle">26.1.1918</div>
      <Article titleText="Kansan wiholliset.">
        <h5>Hallitus sodassa omaa kansaansa wastaan!</h5>
        <p>Suorastaan hämmästyttäwän räikeällä tawalla paljastawat nyt Suomen suurporwariston johtajat kansan silmäin eteen mustat hommansa. Nykyinen senaatti ja sen taantumukselliset kannattajat 
          eduskunnassa näyttäwät suunnitelleen ja alkaneen Suomessa todellisen werisen sotaretken työtätekewää kansaamme ja kaikkea kansanwaltaista järjestystä wastaan.</p>
        <p>On tullut ilmi, että ne suuret aseistetut joukot, jotka muutamia päiwiä sitten hyökkäsiwät Wiipurin edustalle, owat olleet nykyisen senaatin hommaamia. Senaatin wastuulla owat 
          siis tapahtuneet niiden toimeenpanemat wäkiwallantyötkin. Samoin on tullut ilmi, että muuallakin maassa, warsinkin Pohjanmaalla, tapahtuneet porwarikaartien ryntäykset ja wäkiwaltaisuudet 
          kuuluwat samoihin senaatin hommiin. Senaatin edustaja on suorastaan sanonut, että kaikki nykyiset „suojeluskaartit” owat senaatin wäkeä ja että senaatin wallassa on täydellisesti niiden 
          liikkeet, niin että se woi ne sekä seisauttaa että eteenpäin komentaa. Nähtäwästi niillä on oikein yhteinen, koko maata käsittäwä sotasuunnitelma. Helsinkiinkin on nyt kuletettu monilta 
          paikkakunnilta noita senaatin aseellisia apureita häiritsemään yleistä turwallisuutta, uhkaamaan kansalaisten henkeä ja tukemaan porwariston johtajain wallanhimoisia pyyteitä.</p>
        <p>Onko mokomaa wäkiwaltaista häwitysretkeä ennen tässä maassa nähty? Ei koskaan. Ei pahimpinakaan sorron aikoina. Rauhalliset kansalaiset, monet sellaisetkin, jotka eiwät ole sosialisteja, 
          nyt aiwan kauhistuwat tällaista häikäilemättömyyttä ja kysywät toisiltaan hämmästyneinä: Minkäkähänlaista taantumuksen hirmuwaltaa oikeastaan tawotellaankaan noin suuremmoisella 
          rikoksellisella hyökkäyksellä ja weljesweren wuodatuksella?</p>
        <p>Sitä emme me wielä lähemmin tunne, emmekä myöskään usko, että niin pimeät wallananastushankkeet lopultakaan woiwat onnistua. Mutta tosiasia on se, että porwariston nykyiset johtajat ja 
          kerran ennen, wiime marraskuussa, yrittiwät, waikka tosin onnistumatta, saada aikaan sellaista eduskunnan päätöstä, jolla olisi luowutettu heidän senaatilleen kaikki se suunnaton walta, 
          mikä Suomessa ennen kuului keisarille, waikka se nyt laillisesti kuuluu Suomen kansalle ja kansaneduskunnalle. Ja wiime aikoina on paljastunut kokonainen sarja nykyisen senaatin tekemiä 
          räikeitä laittomuuksia. Koko kuluwan wiikon olemmekin me sosialidemokraattiset edustajat eduskunnassa koettaneet saada tilaisuutta esittääksemme julki noita laittomuuksia, waatiaksemme 
          senaatin jäseniä niistä tilille ja erotettawiksi wiroistaan sekä jos mahdollista syytettäwiksi laillisessa tuomioistuimessa. Mutta eduskunnan puhemies ja porwarillinen enemmistö owat 
          järjestelmällisesti sen estäneet, wiimeksi eilen illalla, jolloin taas lykkäsiwät ensi wiikkoon senaatin laittomuuksien käsittelemisen. Tämän johdosta sosialidemekraattien puolelta 
          ilmoitettiin mitä jyrkin wastalause sitä wastaan,</p>
        <p className="quote">että tällä tawoin estetään Eduskuntaa käsittelemästä ja päättämästä sen hallituksen moninkertaisista laittomuuksista, joka kaiken muun lisäksi juuri nykyisin 
          prowoseeraa tässä maassa ilmeistä kansalaissotaa.</p>
        <p>Kansamme elintarwekurjuuskin on porwariston wiimeaikaisella komennolla kiristetty äärimmäisen huutawaksi hädäksi. Yksin tämän takia jo olisi se komento pitänyt aikoja sitten kukistaa jos 
          nykyisen eduskunnan enemmistöä olisi kansan hätä yhtään liikuttanut. Mutta sen sijaan nyt aikowat herrat murha-aseiden woimalla kukistaa maamme nälkäänäkewän köyhälistön! Jos moinen 
          wääryys ja wäkiwalta onnistuisi, eipä todella olisi enää köyhälistöllä maailmassa mitään turwaa, toiwoa eikä oikeutta!</p>
        <p>Työwäen joukkotyöttömyyskin pahenee Suomessa päiwä päiwältä yhä kamalammaksi, mutta senaatti ei näy nyt ajattelewankaan tehokasta waltion awustustoimintaa, — sillähän on ajateltawana 
          toisellaiset hommat, joihin se waltionwaroja tarwitsee miljoonittain. Kansan kauniit uudistustoiweet se pettää kaikki — ja nykyisen eduskunnan enemmistö siunaa petokset. Welkaorjuuteen 
          se tahtoo syöstä torpparit ja työorjuuteen jättää mäkitupalaiset, eikä suinkaan tahdo antaa näille todellisella wapautuksella heidän maitaan, jotka paljon paremmalla oikeudella näille 
          kuuluwat, kuin isännille. Elämän kohoamista, huolten huojennusta ja onnellisempaa oloa odottawat kaikki muutkin työtätekewän kansamme kerrokset tulokseksi nykyiseltä wallankumouksen ja 
          wapauden ajalta. Mutta sitä synkempiä ja raiwoisampia hyökkäyksiä hommaawat kapitalistiset wallanpitäjät luokkaherruutensa pönkittämiseksi.</p>
        <p>Kansamme juuri saawuttamalle waltiolliselle wapaudelle owat myös nykyisten hallitusherrain ulkopoliittiset wehkeilyt kerrassaan waarallisia. Ruotsissa he wehkeilewät ja Saksassa he 
          wehkeilewät, Ahwenanmaata kaupittelee julkisesti ruotsikkoherra, joka istuu eduskuntamme jäsenenä. Näiden wehkeilyjen takia ei Englantikaan nyt laske Amerikasta tilattua wiljaa Suomeen. 
          Ja samaan aikaan Suomen senaatti awustajineen mitä röyhkeimmin prowoseeraa ja loukkaa täällä olewaa wenäläistä sotawäkeä, jonka sotawäen tietoinen enemmästö on niin jalosti tukenut 
          Suomen itsenäisyyden asiaa. Pari päiwää sitten tiesiwät herraslehdet kertoa, että senaatti oli suorastaan naurettawan häwyttömästi esittänyt sotaisia uhkailuja täällä olewan kansallemme 
          ystäwällisen sotawäen edustajille, wieläpä Wenäjän sosialistiselle hallituksellekin, — samaan aikaan kun sotilaita kuljettawain junien edessä täällä räjähtelee „suojeluskuntalaisten” 
          pommeja, ja rauhallisia sotilaita ammuskellaan wäijytyspaikoista. Sillä tawalla se maar' hywä „järjestys” Suomeen tulee! Eilen oli wihdoin nykyinen poliisisenaattori niin on kerrottu — 
          uhkaillen kerskunut wenäläisen sotawäen edustajain edessä, että meillä on niin monta kymmentätuhatta miestä aseissa, että niillä kyetään lyömään sekä Suomen työwäen kaartit että myös 
          wenäläiset sotajoukot!</p>
        <p>Tuskin kykenewät siihen.</p>
        <p>Tyynin mielin kuuluwat työwäen kaartit kuuntelewan suurisuisten herrain uhkauksia, tahtoen yhtenä miehenä puolustaa lahtareita wastaan Suomen työtätekewän kansan wapautta ja ylewää asiaa. 
          Eiköhän senaatin ja sen kannattajajoukon olisi parasta wielä miettiä päänsä ympäri ja perääntyä kauheista hankkeistaan? Sillä äärettömän edeswastuun ottawat he päälleen, jos nyt kaiken 
          muun ilkiwaltansa lisäksi wielä panewat alkuun suuret werenwuodatukset ja häwitykset. Waroitamme heitä korkealla äänellä sellaisesta rikoksesta!</p>
        <p>Olemme wakuutetut siitä, että kansamme laajan enemmistön sywä oikeudentunto on tällaisen waaran aikana täydellisesti Suomen sorretun ja uhatun työwäenluokan puolella. Kansa waatikoon 
          wakawasti, että lahtarijoukkkojen hyökäykset ja mellastukset owat heti lopetettawat ja niiden luowutettawa aseet pois. Kansan wihollisten hallituksen on wihdoinkin erottawa, koska se on 
          syössyt kansamme täydellisen turmion partaalle.</p>
        <p>Ja sosialidemokraattisen työwäenliikkeen rakentawalla työllä on turmion sijaan luotawa wapaan Suomen kansan kansanwaltainen tulewaisuus ja työntekijäin yleinen menestys.</p>
        <p className="signature">Kansanedustaja.</p>
      </Article>

      <div className="interTitle">27.1.1918</div>
      <Article titleText="„Niistä me helposti selviydymme.”">
        <p>Me olemme useat kerrat werranneet Suomen yläluokkain nykyistä politiikkaa siihen saastaiseen menettelyyn, jota Wenäjän rappeutunut tsaariwalta prowokaattoreineen, santarmeineen ja 
          mustine sotnioineen harjoitti kansaa ja sen wapaustaistelua wastaan. Wiimepäiwäin mieliä kuohuttawat tapaukset owat nyt osottaneet meidän olleen täysin oikeassa. Nyt owat Suomen 
          kapitalistit hallituksineen mitä räikeimmällä tawalla paljastaneet kyntensä ja mustasotnialaiset suunnitelmansa koko inhottawassa alastomuudessaan. Niiden salassa walmistetut 
          sotasuunnitelmat kansaa ja kansanwaltaisuutta wastaan tunnetaan nyt yleisesti. Senaatti on lopultakin omistanut lahtarikaartit omiksi joukoikseen ja samalla usuttanut ne hyökkäämään 
          työwäen ja sosialidemokratian työwäenliikkeen kimppuun.</p>
        <p>Raakalaislaumojen tawoin owatkin lahtarikaartit käyneet mustaan työhönsä. Muutamissa päiwissä owat ne ehtineet suorittaa kokonaisen sarjan pöyristyttäwiä konnantöitä. Joensuussa ne owat 
          kuin mitkäkin murtowarkaat tunkeutuneet sosialidemokratiseen piiritoimistoon, wallanneet sen ja samalla piirin arkiston käsiinsä sekä siten estäneet tämän työwäenliikkeen keskusjärjestön 
          toiminnan, m.m. ajaneet siellä parhaallaan olleet työwäen opastuskurssilaiset taiwasalle. Työwäen walistustyön kimppuun siis ensiksi hyökätään. Muuallakin näet owat lahtarit rientäneet 
          juuri työwäenyhdistysten taloille mellastelemaan. Siitä nähdään heti mihinkä riistäjäluokka pyrkki. Työwäeniikkeen se koettaa lyödä maahan sekä että prowokaattoriensa woimalla. Myöskin 
          Suomen waltion omaisuutta owat lahtarit käyneet häwittämään. Owat jo yritelleet räjäytellä rautatiesiltoja ja matkalla olleita juniakin, yrittäen siten samalla murhata niissä olleet 
          ihmiset. Rautatieherrain salaliitto uhkasi pysäyttää rautatieliikenteen. Kunnottomampaa peliä tuskin woisi ajatella. Kansamme taistellessa nälänhädän kynsissä yritetään häwittää 
          kulkuneuwot ja lopettaa liikenne, jotta wähienkin elintarpeiden kuljetus käwisi mahdottomaksi eikä ihmisille jäisi muuta neuwoksi kuin suorastaan kuolla nälkään. Eipä syyttä olekaan 
          lahtarikaartin johdossa ja kantajoukkona entisiä bobrikowilaisajan poliisikätyreitä.</p>
        <p>Yhtä rintaa lahtarikaartien mellastuksen kanssa ulwowat niiden äänenkannattajat, porwarilehdet aiwan kuorossa, että hallituksen pitäisi kaiken mokomin saada tänne ulkomaalaista sotawäkeä 
          työwäkeä kukistamaan. Ruotsikkoherrain roskalehti Hbl. muistutti, että Saksan wirallinen lehti oli hiljattain luwannut auttaa Suomen herroja jos nämä joutuisiwat awun tarpeeseen. 
          Jokatapauksessa on nykyisessä tilanteessa koetettawa wedota ulkomaiden apuun, ewästi lehti porwarien hallitusta. Kun ulkomailta saataisiin apua, niin sitten kyllä „hywästi 
          selwiydyttäisiin kotimaisista ryöwäriaineksista”, s.o. sosialistisista työläisistä. „Niiden aika on sitten tulewa lyhyeksi”, säesti toinen ruotsikkolehti „Dagens Press” hammasta purren. 
          Kas niin kauniita suunnitelmia niillä meidän kotimaisilla mustasotnialaisilla! Näihin asti ne owat koettaneet edes jossain määrin salata sisimpiä tarkotuksiaan ja „ihanteitaan”, mutta nyt 
          ne jo niitä päästäwät esille werrattain ihailtawalla awomielisyydellä. Ja hywä on, että niin tekewät. Suomen kansan on helpompi oppia heidät tuntemaan. Porwaripuolueemme owat wiime 
          aikoina ratsastelleet muka isänmaallisuudellaan ja sen warjolla syytäneet paksua lokawirtaa työwäenliikkeen häpäisemiseksi. Sillä ne owat kyllä jossain määrässä onnistuneet sekottamaan 
          wähempitietoisten käsitteitä. Mutta ehkäpä eksytetytkin nyt alkawat saada silmänsä auki. Ehkä alkawat huomata, että Suomen kapitalistipuolueet owat yhä samanlaista mustasotnialaisjoukkoa 
          kuin Bobrikowinkin aikana. Ehkä kansamme keskuudessa alkaa wähitellen tulla yhä yleisemmäksi se käsitys, etteiwät nämä riistäjäpuolueet suinkaan ole rehellisiä Suomen itsenäisyyden ystäwiä 
          waan ainoastaan luokkaetujensa ystäwiä. Nyt ne esim. hyökkääwät lehdissään jatkuwalla kiihkolla wenäläisen sotawäen kimppuun ja huutawat täyttä kurkkua, että sosialistit wastustawat 
          wenäläisen sotawäen Suomesta poistamista. Tekiwätkö porwarit samalla tawalla myöskin Kerenskin porwarillisen hallituksen wallassa ollessa? Eiwät, waan päinwastoin. Silloin ne tappeliwat 
          kynsin hampain pysyttääkseen Suomen wenäläisenä maakuntana, jotta siten säilyisi heille tilaisuus saada Wenäjän hallitukselta apua Suomen työwäen kansanwaltaisia waatimuksia wastaan. 
          Yhdessä wenäläisen sotawäen walistumattomimpain ainesten kanssa he oliwat hyökkäämässä „sosialistista eduskuntaa” wastaan ja sitä hajottamassa. „Weljeily” oli täydessä käynnissä. He oliwat 
          häwittämässä juuri sellaista eduskuntaa, joka asettui Suomen oikeutta ja kansanwaltaa puolustamaan. Hywä on olla wenäläisenä maakuntana, selittiwät herraspuolueiden johtajat niin kauan kuin 
          Wenäjällä oli heille mieleinen ja Suomen kansanwaltaiselle wapaudelle wihamielinen hallitus. Wasta sitten heidän kelkkansa kääntyi, kun Wenäjällä pääsi waltaan sosialistisen työwäen 
          hallitus. Sellaista herrat säikähtiwät, heistä tuli „itsenäisyysmiehiä”. Ja nyt he hapuilewat apua oman maan työwäkeä wastaan ulkomaiden taantumuksellisilta hallituksilta. Mutta Suomen 
          sosialidemokratinen puolue on taistellut maamme itsenäisyyden ja wapauden puolesta ollenkaan riippumatta siitä, minkälainen hallitus Wenäjällä on wallassa. Jo wiime kesänä pidetty 
          puoluekokouksemmne hywäksymässään waatimuksessa Suomen itsenäisyydestä esitti kantanaan, että Suomen wapaus ei woi olla turwattu, jos Wenäjälle edelleenkin jäisi oikeus pitää tässä maassa 
          linnoituksia, kehittää täällä sotawoimiaan ja pitää maatamme miehitettynä.</p>
        <p>Wiimepäiwinä on tilanne maassamme nopeasti kärjistynyt. Hetket owat wakawat. Suomen työwäenluokalla näyttää nyt olewan edessään raskaat taistelut oikeuksiensa ja kansanwallan puolesta. 
          Woimakas wastustaja on sillä wastassaan. Ja riistäjäin yhteisen asian nimessä täkäläiset yläluokkalaiset huutawat ulkomaalaisia lahtareita awukseen. „Auttakaa, kapitalistien yhteisen 
          asian nimessä, auttakaa, sillä jos sosialistit saawat Suomessa wallan, niin on se wahingoksi toistenkin maiden porwareille. Huono esimerkki woi täältä lewitä toisiinkin maihin.” Niin 
          nämä meidän porwarit huutawat. Mutta meidän sosialistien tulee myöskin wedota ulkomaalaisten luokkatowereittemme tukeen. Toiwokaamme, että kaikkien maiden työwäenluokat antawat omille 
          sortajilleen kylliksi tekemistä omissa maissaan. Toiwokaamme ettei sieltä saada lahtareita meidän niskaamme ja että jos niitä jostain maasta tänne yritetään lähettää, sen maan työwäki 
          on walmis wastaamaan sellaiseen yritykseen kapinalla. Se lääke tepsii. Kun luokkaweljemme muissa maissa sitä keinoa käyttäwät, niin katsokaamme sitten miten helposti Suomen porwaristo 
          tämän maan työwäenluokasta „selwiytyy”. Meidän on waan muistettawa, että Suomenkin työwäenluokan täytyy kyetä itse wapauttamaan itsensä. Siihen tarwitaan innostusta, uhrautuwaisuutta 
          ja woimaa, mutta siihen tarwitaan myöskin lujaa ja horjumatonta sosialidemokratisten menettelytapojen noudattamista, itsetietoista alistumista meidän oman puolueemme laillisuuteen. 
          Työwäenluokan suuri päämäärä tulee olla meidän kaikkien yhteisenä uskontunnustuksena. Ainoastaan sillä tawalla me woitamme. Mutta ne, jotka poikkeawat puolueemme hywäksymien 
          menettelytapojen tieltä, eiwät noudata kansan luonnollista oikeudentunnetta wastaawia taistelutapoja eiwätkä osaa alistua puoluekuria noudattamaan, ne särkewät yhteisen rintaman ja 
          sillä tawalla kawaltawat työwäenluokan suuren asian. Nyt jos koskaan tulee Suomen työwäenluokalla olla riittäwästi henkistäkin kuntoa ja tietoisuutta, niin etteiwät porwarien 
          prowokaattoritkaan saa työläisiä houkutelluksi mihinkään sellaisiin tekoihin, jotka wahingoittawat työwäenluokan yhteistä asiaa ja jaloa päämäärää.</p>
        <p className="signature">Sikstus</p>
      </Article>
      <Article titleText="Työwäen järjestys- ja punaisille kaarteille.">
        <h5>Kaikille kaartien osastoille.</h5>
        <p>Porwaristo, senaatti etunenässä, on jo wirallisestikin alottanut työläisten teurastuksen. Työwäen järjestyneen woiman on oltawa waruillaan ja walmiina minä hetkenä hywänsä torjumaan 
          lahtarikaartien hyökkäykset.</p>
        <p>Wiitaten eilisessä „Työmiehessä” olleeseen sos.-dem. Puoluetoimikunnan Toimeenpanewan Komitean julistukseen, Työwäen järjestyskaartin Yleisesikunta ja Punasen kaartin Esikunta 
          selittäwät:</p>
        <p className="leftP">1) Kun periaatteelliset eroawaisuudet säännöissä owat poistuneet ja jälellä olewat owat ainoastaan muodollista laatua, kielletään kaikki sääntökinastelut ja propaganda 
          toisten tai toisten puolelta siksi, kunnes tulewa edustajakokous ratkaisee ne.</p>
        <p className="leftP">2) Molemmat esikunnat yhtywät yleisesikunnaksi kaarteille, joiden wiralliseksi nimeksi otetaan Suomen Punanen Kaarti, jonka määräyksiä maan kaikkien kaartien osastojen 
          on noudatettawa.</p>
        <p className="leftP">3) Piirien edustajakokouksissa walitut esikunnat waltuutetaan toimiinsa niillä waltuuksilla, mitä molemmat säännöt edellyttäwät.</p>
        <p>Koko maan kaarteihin nähden antaa päiwäkäskyt Suomen Punasen Kaartin Yleisesikunta.</p>
        <p className="signature">Punaisen Kaartin Esikunta, Helsinki.</p>
        <p className="signature">Työwäen Järjestyskaartin Yleisesikunta.</p>
      </Article>
      <Article titleText="Häwitetäänkö työwäenliike?">
        <h5>Nuoren Suomen tasawallan „hallituksen“ sodan julistus työwäen luokalle.</h5>
        <p>Se on todistettu, mitä me olemme jo pitkät ajat puhuneet. Suomen porwariluokka walmistautuu pontewasti wastawallankumoukseen, walmistaukuu kaappaamaan työwäeltä sen saawutukset, 
          walmistautuu haltuunsa ottamaan kaiken wallan ja hukuttamaan työwäenluokan weriwirtoihin.</p>
        <p>Näihin saakka — lukuunottamatta waalien jälkeisinä päiwinä senaattori Serlachiuksen tekemää tunnustusta on porwarillinen hallituswalta ja sen sanomalehdet kieltäytyneet tunnustamasta 
          sitä tosiasiallista wäitettämme, että he owat warustautuneet, että owat hankkineet aseita ulkomailta ja Wenäjän wastawallankumouksellisilta, että owat järjestäneet taistelujärjestöjä 
          ja tehneet matemaattisia taistelusuunnitelmia.</p>
        <p>Tämä kaikki on nyt todistettu.</p>
        <p>„Suomen hallituksen" eilisessä sodanjulistuksessa työtätekewää luokkaa ja wenäläistä sotawäkeä wastaan on se tunnustettu ja todennettu. Sitäpaitsi poliisi-Castrén on allekirjottamissaan 
          ukaaseissa maaherroille wahwistanut kaiken tuon porwarillisten kiellon olewan totta.</p>
        <p>„Suomen hallituksen” julistus kun eilen illalla tuli tunnetuksi työwäestön piireissä, herätti se sanomattoman katkeruuden ja wihan. Eikä ihmekään. Onhan se niin rikoksellinen 
          sisällöltään, niin julkea, niin raaka ja niin werinen. Herjataanhan siinä waan luokkaa ja sen wallankumousta. Ja herjataanhan siinä niitäkin, jotka jaloimman työn tämän kansan hywäksi 
          owat suorittaneet. Kiitokseksi kaikesta siitä, minkä wenäläiset towerit owat kansamme wapauden hywäksi, itsenäisyytemme hywäksi, sortowallasta ja sortajistamme wapauttamiseksi tehneet, 
          herjataan ne rikokselliseksi ja syyllisiksi kaikkiin ruokottomiin tekoihin, joihin waltaluokkamme on itse syyllinen. Mätkästään yhteen nippuun niiden huonojen ainesten kanssa, joita 
          tässäkin maassa wenäläisten keskuudessa on walitettawasti ollut olemassa. Näitä „rikollisia, ryöwäreitä, murhaajia ja maan kawaltajia” wastaan on noustawa jokaisen kansalaisen, 
          kiihotetaan julkeasti tuossa „Suomen hallituksen” tuossa nuoren Suomen tasawallan hallituksen ensimäisessä julistuksessa kansalleen. Walmis pitää olla uhrauksiin.</p>
        <p>Elämää ja werta se kansaltaan waatii.</p>
        <p>70,000 lukuisen asestetun joukon kanssa se liikehtii, toinen osa painaa Pohjanmaalta, toinen osa Karjalasta päin. Surma-aseittensa, pistimiensä päihin se tahtoo litistää työtätekewän 
          luokan elämän. „Jääkärien” marssia laulaen</p>
        <p className="quote centered">Sywä iskumme on, wiha woittamaton. meill' armoa, ei kotimaata. Koko onnemme kalpamme kärjessä ei rintamme heltyä saata. Sen leijonalippua jääkärien käsiwarret 
          jäntewät kantaa, yli pauhun, kenttien hurmeisten päin nousewat Suomen rantaa</p>
        <p>janoaa „Suomen hallituksen” sotajoukot teurastaakseen oman kansansa jäseniä.</p>
        <p>„Suomen hallitus”, nuoren Suomen tasawallan ensimäinen hallitus onko punninnut asiat tarkoin, onko ottanut huomioonsa kaikki seikat, julistaessaan sodan kansansa enemmistön jäseniä 
          wastaan ja Suomen wapauttajia wastaan?</p>
        <p>Ei. Laskelmat eiwät perustu oikealle pohjalle.</p>
        <p>Wäkiwaltaiseksi, rikokselliseksi, leimaa nykyinen hallitus ja sen mukaan porwarillinen sanomalehdistö käsitteenkin, kun tässäkin maassa on puhuttu „jatkuwasta wallankumouksesta”. Niin, 
          „wäkiwaltaista” muutostahan se on, mutta ei rikollista. Mutta kuka aiheuttaa sen. Kuka oli syypää esim. Wenäjän wallankumoukseen? Ei ainakaan ne, jotka ihmisellisen kehityksen lakien 
          mukaan pyrkiwät saamaan uusia muotoja ja uutta sisältöä. Ei, syy on niiden, jotka lyhytnäköisyydessään tai itsekkäisyydessään koettawat estää luonnollista, kehityksen wälttämätöntä 
          kulkua. Usein käytetty on wertaus wirrasta, joka juoksee kohti päämääräänsä, yhtyäkseen wapaan meren wapaina lainehtiwiin wesiin. Se juoksee tyynenä, kun mitkään esteet eiwät sitä 
          haittaa, mutta muuttuu kuohuwaksi koskeksi tahi paisuu yli äyräittensä, haudaten rannat alleen, jos sulut sen kulkua estäwät. Niinhän on maailman historian kulkukin. Ainoastaan siellä, 
          missä se kohtaa esteitä, syntyy koskia, putouksia ja tulwia, melskeitä, kapinoita — ja wallankumouksia. Ei yksikään wallankumous, wäittäwät historioitsijat, ole ollut niin kutsuttujen 
          wallankumouksellisten työtä, waan niiden, jotka owat asettaneet esteitä luonnolliselle kehitykselle. Kaikilla wallankumouksilla on sentähden ei hyökkääwä, waan puolustawa luonne. 
          Puolustawaa ja pelastawaa oli Wenäjän wallankumouskin kansaansa tuhoawaa, weristä tsaarin politiikkaa wastaan. Puolustusta oli Bastiljin häwitys howisotajoukkojen uhkaawan käytöksen 
          wuoksi.</p>
          <p>Puolustamme mekin oikeuksiamme, puhtaita ja ylewiä ihmisoikeuksiamme. Me emme ole luonnostamme wallankumouksellisia, mutta se wallankumouksellinen liike, jonka hywäksi me 
          toimimme, johtaa aseellisenkin woiman käyttöön, kun rauhan työ, parlamenttaarinen työ ei auta, ja kun wastustajamme sitä tahtowat ja meitä wastaan aseellisesti järjestywät.</p>
        <p>Meidän liikkeemme ei ole keinotekoisesti tehty, kuten helsingin-sanomalainen tai uusi-päiwä-kubilainen kopla, waan on se järjestelmällisesti syntynyt olewista oloista. Olewista oloista 
          on se elämän woimansa imenyt, kaswanut ja hedelmöinyt satatuhantiseksi. Eikä tämä liike woi lakata, ennenkuin syyt on poistettu. Ei tämä liike lakkaa hallituksen lahtarikaartienkaan 
          woimalla, ei senaatin häpeällisillä awunanomuksilla saada tänne asewoimaa ulkomailta, joka muka hukuttaisi työwäenliikkeen weriwirtoihin. Ei se porwarillisen sanomalehdistön wimmattu, 
          rikollinen, walheellinen ja häpeällinen hyökkäys woi liikettämme heikontaa eikä hajottaa. Ei. Elämän juuret owat niin sywällä, niin wahwassa ja woimaperäisessä maassa. Waltaluokan 
          täytyy sulut purkaa edestämme, kansan wyörywän woiman edessä. Porwarillinen sanomalehdistö wäsyy häwäistystyössään, kun se näkee sen turhaksi, kun he näkewät että heidän toimintansa on 
          yhteisiä etuja wastaan, koko yhteiskunnan etuja wastaan.</p>
        <p>Nykyinen yhteiskunta ei woi tyyntyä niinkauan kuin edut owat ristiriidassa keskenään. Luokkataistelu tulee jatkumaan. Ei se kuoleennu, waikka Suomen tasawallan waltaluokka luulee sen 
          niin käywän. Senhän pitäisi teistä ainakin suurimman osan tietää. Miksi annatte itsekkyyden ja lyhytnäköisyyden johtaa politiikkaamme.</p>
        <p>Katsokaa ympärillenne, terästäkää silmänne kauas ulos meidän tasawallan ikkunoista, niin ehkä te näette, että punainen kummitus liikkuu tuolla kaukanakin, se sama, jota te täällä 
          wainoatte.</p>
        <p>Meidän liikkeemme wastustamisella ei ole muuta waikutusta, kuin että woittomme hinta kallistuu, mutta se sitä pikemmin joutuu. Hurjat wäkiwaltaiset tekonne teidän waltanne loppua wain 
          jouduttawat.</p>
        <p>Onko nuoren Suomen tasawallan „hallitus” ryhtynyt tietämättään rakentamaan jo sitä siltaa, joka wie wanhasta maailmasta uuteen!</p>
        <p className="Sakari."></p>
      </Article>

      <div className="interTitle">28.1.1918</div>
      <Article titleText="Wallankumoustiedonantoja.">
        <h4 className="bold">Wallankumousjulistus Suomen kansalle.</h4>
        <p>Suomen työwäenluokan suuren wallankumouksen hetki on lyönyt.</p>
        <p>Tänä päiwänä on pääkaupungin työwäki uljaasti kukistanut sen synkän harwainwallan päämajan, joka alkoi werisen sodan omaa kansaansa wastaan.</p>
        <p>Rikoksellisen senaatin jäsenet walmistiwat maan pääkaupungissakin inhoittawaa weljesweren wuodatusta ja salakawalaa hyökkäystä Suomen järjestyneen työwäen kimppuun. Samalla he tekiwät 
          itsensä syypäiksi niin julkeaan waltiopetokseen, että pyysiwät wieraiden waltioiden monarkistisia hallituksia lähettämään murhajoukkoja Suomen työtätekewää kansaa teurastamaan. Koko 
          kansamme wapaus ja elämä oli täten suuressa waarassa.</p>
        <p>Nyt on tuolta lahtarisenaatilta otettu kaikki walta pois. Sen rikokselliset jäsenet olemme määränneet wangittawiksi, missä ikinä heidät tawataan, sillä wankilassa olisi aikoja sitten 
          ollut sellaisten kansan wihollisten oikea paikka.</p>
        <p>Kaikki waltiowalta Suomessa on päätetty ottaa tämän maan työtätekewän kansan omiin luotettawiin käsiin.</p>
        <p>Näin on työwäen täytynyt nousta omalla woimallaan wihdoinkin pelastamaan itsensä ja koko kansamme siitä turmiosta ja hädästä, jonka kuiluun rikoksellinen politiikka, kapitalistinen 
          politiikka on ollut kansaamme syöksemäisillään. Kamalia ja waarallisia senaatin ja sen kätyrien juonia on paljastunut. Toisen lainrikoksen toisensa jälkeen teki tämä senaatti 
          anastaakseen käsiinsä waltiowallan, joka itse asiassa kuuluu kansalle itselleen. Nähtäwästi oli pääjuoni se, että senaatti tahtoi koko maan työwäenliikkeen werisesti tukehuttaa, lyödä 
          kaikki kansanwaltaiset edistyspyrinnöt kahleisiin ja haudata kärsineen kansan kewäiset undistustoiweet kalman ranhaan.</p>
        <p>Mutta niin kauhean taantumuksen orjaksi ei Suomen työwäenluokka ikinä alennu. Niin rumien wallankaappaushankkeiden täytyi sortua häpeällä. Ja niiden täydellinen sortuminen on nyt alkanut. 
          Juurineen tulee työwäenluokka häwittämään waarallisen taantumuksen ja sortowallan.</p>
        <p>Sosialidemokratisen Puoluetoimikunnan waltuuttamana Suomen työwäen wallankumouksen korkeimpana elimenä me nyt julistamme, että</p>
        <p className="accent bold">kaikki wallankumouksellinen walta Suomessa nyt kuuluu järjestyneelle työwäelle ja sen wallankumouselimille.</p>
        <p>Maan sosialidemokratinen wallankumoushallitus muodostetaan nyt heti. Sen jäsenistä julkaistaan tieto ensitilassa.</p>
        <p>Eikä ole kysymyksessä se, että wain uusia miehiä pantaisiin wanhoihin wirkoihin. Waan kysymyksessä on koko wirkawallan kukistaminen.</p>
        <p>Suomen työwäen järjestöt ja kaartit kaikkialla maassa täyttäkööt nyt wallankumouksellisen welwollisuntensa kukin woimainsa mukaan. Luja wallankumouksellinen järjestys on säilytettäwä 
          riweissämme!</p>
        <p>Wenäläistä sotawäkeä on kaikkialla kohdeltawa hywin, sillä tietoiset wenäläiset towerit owat wallankumouksellisen työwäen ystäwiä.</p>
        <p>Snurlakko ei ole läheskään kaikilla paikkakunnilla wallankumouksen onnistumiselle wälttämätön. Missä se on wälttämätön ja missä ei, sen päättäköön kunkin paikkakunnan wallankumouksellinen 
          työwäki itse järjestöjensä kautta. Helsingissä on mielestämme wallankumouksen takia tarpeen heti alkaa suurlakko.</p>
        <p>Mutta kunnallishallinnot ja muut walta-asemat otettakoon työwäen haltuun, missä se näyttää sopiwalta ja hyödylliseltä.</p>
        <p>Ei missään horjumista eikä perääntymistä! Ei pitkiä neuwotteluita kawalain aseellisten wihollisten kanssa! Työwäen woitto on perille wietäwä!</p>
        <p>Rauhallisten kansalaisten, jotka eiwät tahdo työwäen wihollisia awustaa, ei ole wallankumousta pelättäwä. Pieneläjät maalla ja kaupungeissa älkööt uskoko sellaisia walheita, että työwäki 
          heidän omaisuuttaan tahtoisi. Päinwastoin työwäen woitto woi kohottaa heidänkin yhteiskunnallista asemaansa. Työwäen woima on oikeudenmukaista woimaa, joka aina kokee wälttää tarpeetonta 
          wäkiwaltaa ja wiattomain ihmisten kärsimyksiä. Mutta kaatuneen senaatin aseelliset awustajat kukistetaan armotta. Ketkä heistä owat petollisesti mukaan houkuteltuja, heittäkööt ne aseensa 
          heti pois kun huomaawat nyt, että heitä on tahdottu eksyttää taistelemaan työtätekewän kansan jaloa asiaa wastaan.</p>
        <p>Työwäen wallankumous on ylewä ja ankara. Se on ankara röyhkeille kansan wihollisille, mutta awulias turwa kaikille sorretuille ja puutteenalaisille.</p>
        <p>Luottakaa työwäen wallankumouksen woimaan! Sen on wielä toisilla seuduilla taisteluja käytäwä. Mutta wastustamattomasti se wie nyt lippunsa woittoon!</p>
        <p>Uskomme warmasti, että työtätekewän kansamme niin nykyiset kuin tulewatkin polwet wielä moneen kertaan siunaawat tätä wallankumousta, josta on alkawa Suomessa uusi, onnellisempain 
          olojen aika.</p>
        <p className="centered">Helsingissä, 27 päiwänä tammikuuta 1918.</p>
        <p className="signature">Työwäen Toimeenpanewa Komitea.</p>
      </Article>
      <Article titleText="Wallankumouksen tiellä.">
        <h5>Julistus työtätekewälle kansalle.</h5>
        <p>Työwäen wallankumous menee eteenpäin warmalla woimallaan.</p>
        <p>Helsingin työwäen punainen kaarti on miehittänyt senaatin pesäpaikan sekä useat muut ylimmät hallintolaitokset pääkaupungissa. Täällä eiwät senaatin lahtariapurit ole toistaiseksi 
          lainkaan uskaltaneet astua wastarintaan. Senaatin rakennuksestakin ne pötkiwät pois jo ennen kuin punanen kaarti saapui paikallekaan.</p>
        <p>Samoin on wallattu Suomen Pankki ja kaikki yksityispankit Helsingissä. Nämä rahaylimystön, koronkiskurien ja suurkeinottelijain tärkeät mahtilaitokset eiwät siis ole enää heidän 
          mieliwallassaan. Rahawallan murtaminen on tästä alkawa.</p>
        <p>Kiireellisimpiä julkisia toimia warten on asetettu wäliaikaisia waltuutettuja.</p>
        <p>Wangittawiksi määrätyt senaattorit piileskelewät. Heistä owat ainoastaan heidän pahantekojensa jäljet näkywillä. Heidän lahtareitaan on kerääntynyt joukko Helsingin ympäristölle. 
          Paikoin on muuallakin maassa lahtarijoukkoja. Päätoimena niillä näyttää olewan rautatiesiltain turmeleminen ja pommien räjäyttäminen kulkewain junien edessä. Siis katalia roistontöitä!</p>
        <p>Häwitystä woiwatkin sellaiset pimeät woimat jonkun aikaa matkaansaattaa. Mutta suuria woittoja warten eiwät sellaiset ole syntyneet.</p>
        <p>Eilen iltana julkaistu sosialidemokratinen wallankumousjulistus otettiin Helsingin työwäestön keskuudessa ilolla ja sywällä tyydytyksellä wastaan. Muuallakin maassa, mistä tietoja on 
          ennättänyt saapua, ilmoitetaan että päättäwäisen wallankumouksen sanoma on herättänyt kansassa suurta innostusta. Näkyy nyt hywin, kuinka äärimmilleen kansan wihollisten sortokomento oli 
          jo tuskastuttanut ihmiset.</p>
        <p>Käsi kädessä eteenpäin, towerit, woiton tiellä!</p>
        <p>Pyhä welwollisuus kutsuu taisteluun mustan taantumuksen kaikkien woimain maahan lyömiseksi.</p>
        <p className="centered">Helsingissä, 28 päiwänä tammikuuta 1918.</p>
        <p className="signature">Työwäen Toimeenpanewa Komitea.</p>
      </Article>
      <Article titleText="Määräyksiä">
        <h5>wallankumoustilanteen johdosta.</h5>
        <p>Työwäen wallankumoustaistelussa tarpeettoman weren wuodatuksen wälttämiseksi julistetaan koko Suomen tasavalta wallankumoukselliseen taistelutilaan. Tämän tilan aikana on kielletty 
          kaikilta niiltä, jotka eivät kuulu työväen wallankumouksellisiin kaarteihin, aseiden kanto ja säilytys. Henkilöiden, joilla on aseita, ampuma-tarpeita ja räjähdysaineita hallussaan, 
          on 24 tunnin kuluessa, lukien tämän julistuksen julkipanemisesta paikkakunnalla, luowutettawa ne työwäen wallankumouksellisten kaartien määräämille henkilöille, taikka saatawa näiden 
          henkilöjen lupatodistus aseiden pitämiseen.</p>
        <p>Henkilöitä, joilla tämän jälkeen ilman lupatodistusta tawataan aseita, tullaan kohtelemaan kuin asekädessä esiintywää wihollista.</p>
        <p>Kaikki wallankumouksen wastainen toiminta, kaikkinainen ilkiwalta, ryöstöt, elin- ja muiden tarweaineiden tuhoaminen tullaan rankaisemaan wallankumouslakien kaikella ankaruudella.</p>
        <p>Työväen wallankumoukselliset joukot owat oikeutetut puolustus- ja taistelutoiminnan niin waatiessa welwottamaan kaikkia kansalaisia antamaan työ- ja muonitusapua.</p>
        <p>Kaikista rikkomuksista näitä määräyksiä wastaan langettawat tuomionsa wallankumoukselliset tuomioistuimet.</p>
        <p>Tämä määräys astuu woimaan heti kun se on julkisuuteen saatettu.</p>
        <p className="centered">Helsinki, 27 p:nä tammikuuta 1918.</p>
        <p className="signature">Työwäen Toimeenpanewa Komitea.</p>
      </Article>
      <Article titleText="Punakaartilaisille.">
        <p>Tahdomme kaiken wäärinkäsityksen wälttämiseksi ilmoittaa, että lahtarikaartilaisia wastaan, jotka asettuwat tekemään aseellista wastarintaa muodossa tai toisessa, on oikeus tarpeen 
          mukaan käyttää aseellista woimaa. Ne lahtarikaartilaiset, jotka antautuwat ja luowuttawat aseensa ilman wastarintaa, owat riisuttawat aseista ilman muuta. Lahtarikaartin päälliköt owat 
          pidätettäwät ja tuotawat ensimäisen piirin miliisiasemalle. Wangittuja tai haawottuneita ei saa kohdella raa'asti eikä epäinhimillisesti. Jos määräyksemme mukaan toimitettawassa 
          tarkastuksessa löydetään aseita tai isompia elintarwekätköjä, tulee ne takawarikoida ja takawarikoimisesta on tehtäwä pöytäkirja, jonka tunnustaa nimikirjoituksellaan oikeaksi tawaroiden 
          omistaja, jos hän on tilaisuuteen saatawissa; muussa tapauksessa todistawat kaksi siwullista henkilöä pöytäkirjan oikeaksi, joka wiipymättä on meille toimitettawa.</p>
        <p className="centered">Helsingissä, 27. 1. 1918.</p>
        <p className="signature">Punaisen Kaartin Esikunta.</p>
        <p className="signature">Toimeenpanewa Komitea.</p>
      </Article>

      <div className="interTitle">31.1.1918</div>
      <Article titleText="Kunnallinen walta Helsingissä työwäen käsiin.">
        <h5>Helsingin Työwäen Toimeenpanewan Komitean tiedonanto.</h5>
        <p>Sen jälkeen kun wastawallankumouksellisen porwariston taantumuksellisten pyyteiden etunenässä kulkenut Suomen senaatti julkeitten, kansaa sortawien toimiensa ja häikäilemättömien 
          kuristusaikeittensa takia on wallankumouksellisen kansan woimalla kukistettu ja koko waltiollinen walta siirtynyt Suomen Kansanwaltuuskunnalle, ei myöskään kunnallinen walta enää woi 
          jäädä taantumuksellisen porwariston haltuun. Wallankumouksellisen kansan on otettawa haltuunsa myös koko kunnallinen walta pyrkiäkseen sen awulla toteuttamaan paikallisessa elämässä 
          Kansanwaltuuskunnan säädökset ja wallankumouksellisen ohjelmamme waatimukset.</p>
        <p>Lähtien edellämainitusta periaatteesta Helsingin työwäen wallankumoukselliset elimet owat kaupunkimme porwarillisen taantumuswallan edustuselimeltä, Helsingin kaupungin waltuustolta, 
          kieltäneet oikeuden puuttua enää kaupungin asioiden hoitoon. Helsingin kaupungin hallintoa johtaa, kaiken kunnallisen wallan siirryttyä wallankumouksellisen kansan käsiin, Helsingin 
          Työwäenjärjestöjen Eduskunta toistaiseksi ja kunnes kunnallisen wallan käyttö kaupungissamme toisin säännöstellään.</p>
        <p>Ylintä kunnallista waltaa käyttäwän Helsingin Työwäenjärjestöjen Eduskunnan päätösten perusteella huolehtii Helsingin Työwäen Toimeenpanewa Komitea kaupungin juoksewien asiain hoidosta 
          ja Työwäenjärjestöjen Eduskunnan kunnallishallinnollisten päätösten täytäntöönpanosta jo olemassa olewien tai uusien perustettawien kaupungin laitosten ja hallintoelinten awulla. 
          Toimeenpanewa Komitea myös toimii kunnallisten asiain walmistelijana Työwäenjärjestöjen Eduskunnalle.</p>
        <p>Towerit! Työläiset! Helsingin wallankumouksellinen kansa! Kauwan on porwaristo käsissään pitämänsä kunnallisen wallan awulla häikäilemättömästi polkenut jalkoihinsa kaupungin työwäen 
          ja muun wähäwaraisen kansan etuja ja oikeuksia. Weroja siltä on kiskottu, raskaita welwollisuuksia sen kannettawaksi on mätkitty, mutta wastaawia oikeuksia waille se on jätetty. Nyt on 
          tämän räikeän wääryyden mitta täyttynyt.</p>
        <p>Mitä lähemmäksi porwaristo näki sen ajan tulewan, jolloin sen kunnallinen wallanpito loppuu, sitä suuremmassa määrässä rupesi se harjottamaan suorastaan rikoksellista „antaamennä” 
          sekasortopolitiikkaa. Tämän politiikan seurauksena on nyt sellainen asia kunnallisten asiain hoidon alalla, että sen selwittämisessä saattaa kohdata suuriakin waikeuksia; ennenkaikkea 
          raha-asiain alalla. Kaupungin kassat owat tyhjät ja kaupunkia rasittamassa suuret welkataakat. Tehtäköön siis työwäelle tiettäwäksi, että se, kunnallisen wallan käsiinsä ottaessaan ottaa 
          hoitaakseen osan rappiolle joudutetusta yhteiskunnasta ja että edeswastuu niistä waikeuksista, mitä saattaa seurata tuon rappiotilan selwittämisessä, ei lankea työwäestölle eikä sen 
          wallankumouksellisille järjestöille, waan sille porwarilliselle kunnallispolitiikalle, joka on tämän rappiotilan aiheuttaja.</p>
        <p>Towerit! Helsingin työläiset! Me emme kuitenkaan saa pelätä noita waikeuksia, waan pyrimme uskollisina tehtäwällemme ne woittamaan. Rohkeutta wain! Rohkeutta ja wielä rohkeutta! 
          Wallankumouksellisen kansan kaikella rohkeudella ja mielenlujuudella käyköön Helsingin työwäestö käyttämään kunnallista waltaansa. Toteutamme sillä tawalla Kansanwaltuuskunnan sen 
          kehoituksen, jonka se julistuksessaan 29 p. tammikuuta Suomen kansalaisille antoi ja joka kuului:</p>
        <p className="quote">Tällä tawoin on päiwä päiwältä, wiikko wiikolta astuttawa herkeämättä eteenpäin sosialistisen kumouksen tietä. Se woi kumousaikana tapahtua ainoastaan 
          wallankumouksellisten säännösten kautta, joita wallankumouksen waltaelimet antawat ja joiden toimeenpanosta pääasiassa wallankumouksellinen kansa itse, omine järjestöineen huolen pitää.</p>
        <p>Tätä kehoitusta toteuttamaan lähtee Helsingin wallankumouksellinen työwäki ottaessaan kaiken kunnallisen wallan käsiinsä käyttääkseen sitä wallankumouksellisten järjestöjensä kautta.</p>
        <p className="centered">Helsingissä, 31 p. tammikuuta 1918.</p>
        <p className="signature">Työwäen Toimeenpanewa Komitea.</p>       
      </Article>

      <div className="interTitle">2.2.1918</div>
      <Article titleText="Porwarillisen kuristuskauden kehittyminen.">
        <p>Wenäjä teetätti sotawuosina Suomessakin monenlaisia sotawarustetöitä. Teollisuudenharjoittajat, urakoitsijat ja muut wälikädet saiwat hywiä tilauksia. Heillä oli paremmat 
          saalistamismahdollisuudet kuin ehkä koskaan ennen. Sadattuhannet ja miljoonat markat ikäänkuin pyrkiwät heidän syliinsä. Heidän woittojensa lisäämiseksi raiwasi mahtawa wirkawalta 
          toisellakin taholla heille tiet sileiksi. Annettiin kieltoja, että työläiset eiwät saaneet käyttää yhdistymisoikeuksiaan rajottaakseen alhaalta päin edes hiukan saaliin suuruutta. 
          Lakkojen tekemisoikeus näet oli kielletty. Samalla ehkäistiin ankarilla sensuurimääräyksillä työoloissa wallitsewien epäkohtien ilmituominen, niiden arwosteleminen, yleensä kaikki 
          wiatonkin, minkä arwoisat sensuuriherrat luuliwat ärsyttäwän työläisiä lakkoon tai muuhun wastarintaan rajatonta nylkemistä ja kiduttamista wastaan. Tuona kamalana kuristuskautena 
          pääsiwätkin epäkohdat rehottamaan julkeina. Työaikaa pitennettiin ylitöiden nimellä tai muuten tawattomasti. Synkät werstaskomerot höyrysiwät uutteran raadannan irrottamaa hikeä ja 
          werta. Ulkotyöläisiä ruoskittiin nälällä lähtemään aikaisin aamuisin pitkille waellusmatkoille päästäkseen patteritöihin, joista woiwat palata asuntoihinsa wasta myöhään illalla. Kutka 
          wiettiwät yönsä tilapäisissä parakeissa, he saiwat kärsiä läpi yön wilua ja tuulta sekä rypöä kauhistuttawan lian ja kalwawien syöpäläisten keskellä. Lattioiden sylyt ja näljät huokuiwat 
          heihin jos jonkinlaisia sairauksia. Wäliin oli isoilla miesjoukoilla niin pienet yötilat, että eiwät mahtuneet edes pitkäkseen, waan oli pakko istua ja torkkua lähteäkseen tuon 
          kidutuksen jälkeen työmaalle. Palkat oliwat elintarpeiden hintoihin werraten niukat. Kylmän kynsissä työskentelewät eiwät saaneet aina edes kunnollisia waatteita ja jalkineita, waan oli 
          heidän pakko wärjötellä rikkinäisissä kengissä ja ohuissa waaterepaleissa talwisikin. Urakoitsijat petkuttiwat säännöllisesti — teetättiwät työt, nostiwat rahat wenäläisiltä herroilta ja 
          jättiwät ainakin osan työläisille lupaamastaan työpalkasta maksamatta. Oikeuden halu oli useimmissa tapauksissa turhaa. Kapitalistisen luokan oikeuden antajat oliwat joko haluttomia 
          tai woimattomia jakamaan sitä työläisille. Näille opetettiin watsaan, luihin ja ytimiin asti tuntuwasti, että laki ei merkinnyt työläisten suojana mitään, waan määrääwänä oli riistäjien 
          rajaton mieliwalta.</p>
        <p>Oikeutetun tila, järjestetyn ja yhteisen itsepuolustuksen kielto, jopa walittamisoikeuden kielto ja kidutukset ja rääkkäykset lisäsiwät sotawuosien kuluessa tyytymättömyyttä, 
          katkeruutta ja kapinallista mieltä. Johdonmukaista oli, että se kaikki pyrki wihdoin purkautumaan. Kuta kowempi ja pitempiaikainen kuristus on, sitä rajumman ja woimakkaamman 
          purkautumispyyteen se synnyttää. Maaliskuun wallankumous hellitti sulkuja. Sitten seurasi lakko toistaan. Työläisjoukotkin, jotka eiwät olleet ennen olleet taisteluissa, eiwät kaikki 
          edes wähääkään aikaa järjestöissä, lähtiwät wimmaisin mielin taisteluihin. Kaikki lakkotaistelut eiwät pysyneet ammatilisen työwäenliikkeen ennen hywäksymien ja määräämien 
          menettelytapojen puitteissa. Niiden lisäksi loi katkeruuden purkaus toisia, tosin wastaawan mielentilan aikoina jo ennen muualla maailmassa ilmenneitä. Työnantajia näette saarrettiin 
          ja pidettiin saarroksissa pakottaakseen suostumaan pikemmin kuin nälkiinnyttäwällä ja rikkurien heikontamalla lakoilla olisi woinut tehdä. Paikoin lienee ahdisteltu myös rikkureita pois. 
          Sattui siis tekoja, jotka oliwat rikoslain kieltämiä. Ellei niitä woida hywäksyä, on niiden ilmeneminen osattawa selittää, koska ne owat tapahtuneet.</p>
        <p>Edellä selostettuun riistämiswapauteen sotawuosina tottuneet työnantajat ja niiden takana olleet osakkeiden omistajat, pankkiherrat ym. pöyristyiwät maaliskuun wallankumouksen 
          jälkeisistä laillisistakin lakkoliikkeistä, joilla rajotettiin jonkun werran riistämiswapautta. Kummako jos mainitut laittomat teot saattoiwat heidät wimmoihinsa. Suuret saaliit 
          oliwat kohottaneet heidän ylpeyttään, pöyhkeyttään, itserakkauttaan. Se muka pelkästään wenäläisiä wastaan luotu salainen asewäki lisäsi heidän woimankuntoaan ja antoi heille rohkeutta 
          ryhtyä taisteluun työwäkeä wastaan. Koko Suomelle selwisi pian, ketä warten anastajaluokan asewäki oli myös ja pääasiallisesti olemassa. Huittisten y.m. werilöylyt puhkasiwat entiset 
          walhewerhot. Muutkin kosto- ja rankaisutoimet käwiwät yhä julkeimmiksi. Tietäen asewäen olewan takanaan tekiwät yleiset syyttäjät työläisten werrattain pienistäkin laittomuuksista 
          suuria, kärpäsistä härkiä, ja laillisistakin teoista laittomia sekä jakeliwat haasteita warsinkin kihlakuntien käräjiin. Työajan lyhentämiseksi, palkkojen kohottamiseksi y.m. 
          parannusten aikaansaamiseksi tehtyjä tekoja oli rangaistawa oikein olan takaa iskemällä, jotta tulisi niitä kuuluisia „warottawia esimerkkejä”. Tuomioistuinten suojaksi wedettiin 
          pillopaikoista esiin asestetuja joukkoja, jotta tuomioistuimet woiwat mätkiä mitä ankarammin sywien riwien oikeudentunnetta loukkaawia luokkatuomioita. „Puolueettomat” tuomioistuimet 
          tehtiin siten ihan julkeasti anastajien luokka- ja etutaistelujen apureiksi. Nälän ja hädän pakotettua eräiden kaupunkien työläisiä takawarikoimaan joitakin woiwarastoja ja jakamaan 
          niistä omin lupinsa, ihmisten ehkä kuolemasta pelastamiseksi, alettiin näitä lainrikoksia kostaa samalla tawalla. Wuosien kuluessa karttunutta ja osaksi rajumyrskyn tawoin paraikaa 
          purkautunutta katkeruutta kiihdytettiin yhä sellaisilla uhkaawilla toimenpiteillä. Samalla oli ilmeistä, että anastajaluokan wainowiranomaiset hioiwat kynsiään julistaakseen 
          työwäenluokan yhä useammat laillisetkin taistelukeinot laittomiksi ja tuomitakseen rikoksia tekemättömiäkin kansalaisia tyrmiin wain siitä syystä, että he edistiwät työwäenliikettä. 
          Ajattelemaansa suurta kuristuskautta warten kokosiwat he yhä woimiaan. Heidän näitä tarkotuksiaan edistiwät sellaiset teot kuin Turun ryöstöt, joissa kaikesta päättäen on ollut 
          anastajien etua tarkottawaa prowokatsiota mukana. Sellaisilla ja muilla anarkistisilla tapahtumila kiihottiwat anastajaluokan henkiset sankarit alituisesti luokkansa jäseniä uhraamaan 
          yhä ja yhä enempi asewarustuksiin. Ohjelmassa oliwat edelleen sen luokan yksityiset kaartit. Niihin oli saatawa lisää wäkeä. Saitojenkin pusseista oli kiristettäwä lisää rahoja, jotta 
          woitiin ostaa lisää aseita. Näitä lienee hankittu warsinkin lännestä. Ne porwarien julkisesti kiroomat „idän pistimet” oliwat sangen mieluisia ja terwetulleita, kun wain jotkin 
          wenäläiset kaledinilaisainekset tai keisariwallan entiset salaiset kätyrit hankkiwat niitä heille; kirottuja oliwat ne wasta sitten, jos eksyiwät punakaartilaisten käsiin. Ja tuon 
          yksityisen asestamisen ohella haudottiin tuumia anastawan luokan julkisen asewäen luomiseksi. Kuukausimääriä wehkeiltiin ja taisteltiin työwäen miliisin syrjäyttämiseksi kaupunkien 
          järjestyksenpidosta ja anastawalle luokalle uskollisen poliisiston saamiseksi sen tilalle. Seurasiwat sitten useilla anarkistisila teoilla „perustellut” ja niiden kanssa ikäänkuin 
          käsikädessä käyneet ehdotukset anastawan luokan Miliisisotawäen ja oikean pataljoonasotawäen pystyyn pistämiseksi onnellistuttamaan tätä nuorta tasawaltaa. Poliisisotawäen luominen 
          ajettiin läpi anarkististen tekojen — mahdollisesti siihen tarkotukseen järjestettyjen awulla. Miljoona kuukaudessa sellaisen menoihin heti ensi käänteessä — ja määräämätön paljous 
          waltion waroja — Se oli anarkistiteoilla agiteeratun Porwarisedustajiston melkein poikkeuksettoman yksimielinen tahto Suomen eduskunnassa. Sitä kannatti samoin sanomalehdillä pitkät 
          ajat joka yllytetty anastajamaailma. „Luja järjestys” — pamppua, sapelia ja lyijyä — oli yleinen tunnuslause.</p>
        <p>Tuloksissa oli warsin hämmästyttäwiä kohtia. Suomen senaatti julisti anastajaluokan salaiset kaartit — omikseen, Suomen tasawallan kaartiksi! Se oli yhtä rohkea kuin sywiä riwejä 
          ärsyttäwä teko. Niin wihatut joukot Suomen tasawallan muka suojelijoiksi ja järjestyksen pitäjiksi! Tuo julistaminen mahtoi merkitä samalla, että niiden joukkojen aseet oli myös 
          maksettawa Suomen waltion waroilla. Sitä warten oli porwarisenemmistö kaiketi hywäksynyt niistä waroista käytettäwäksi määräämättömän summan „perustamiskustannuksiin”. Kuinta paljon 
          siten lienee jo riistetty waltiowaroja anastawan luokan tarpeisiin, on wielä tuntematonta. Kun ottaa huomioon joukkojen määrän, mitkä sillä on kehuttu olewan, niin woi otettu tai 
          otettawaksi aijottu summa kohota miljooniin markkoihin. Sitäpaitsi on todennäköistä että anastajaluokan aseiden suomalaisille omistajille on maksettu niistä pulskat woitot tai ainakin 
          aijottu maksaa. Onhan sotawarustusten hankinta liikekeinottelijoiden tuottawimpia tulolähteitä. Tai eiwätkö herrat senaattorit olisi ehtineet syytää Suomen kansan miljooneja noihin 
          wehkeisiin ja tuohon liikekeinotteluun, ennenkuin lähtiwät senaatista nurkan taa piiloon?</p>
        <p>Senaattorien ilmoituksen mukaan owat anastajain kaartit kuitenkin ent. senaatin wirallisia kaarteja, siis heidän mielestään Suomen tasawallan kaarteja. Ne owat sen werran esiintyneet, 
          että owat tehneet tapojaan tunnetuiksi. Ne owat wallanneet eräiden työwäenyhdistysten taloja ja osottaneet siten aikeenaan olewan riistää työwäeltä sen suurilla uhrauksilla luomat 
          walistuspesät. Niiden ryöstämisellä tarkotettanee tuhota myös työwäen ammatillisen ja waltiollisen liikkeen järjestöt. Työwäeltä koetetaan siis ryöstää pois kokoontumis- ja 
          yhdistymisoikeuden käyttämismahdollisuuksia. Anastawa luokka näyttää siten luowan tilaa, mikä oli työwäen edellä mainittuina sotawuosina, keisari Nikolai 2:n ja kenraalikuwernööri 
          Seynin ynnä niiden henkiheimolaisten pitäessä waltaa. Siis tarkotus lie, ettei työwäellä saisi olla Suomessa edes alkeellisempia itseawustuskeinoja, joilla se woisi edes hiukan rajottaa 
          anastajain riistämismahdollisuuksia. — Toisena ilmiönä anastajain kaartin menettelyssä on se, että se on ottanut wangiksi työwäenliikkeen toimihenkilöitä, jotka eiwät liene olleet edes 
          aseellisissa hommissa. Wain sentähden, että joku on kuulunut johonkin työwäen asettamaan julkiseen ja lailliseen toimikuntaan ja joku toinen toiminut menestyksellisesti puhujana! 
          Kansalaisoikeuksien kielloista eläwät todisteet mukanaan koettaa anastajain kaarti samota seudusta toiseen ja tuhota työwäen oikeuksia ja wapauksia.</p>
        <p>Sen taistelukeinoista on jo mainittu. Salawihkaa asettawat kaartilaiset pommeja tai muita räjähdyswehkeitä junien alle. Junissa woi olla naisia, äitejä ja lapsia. Kaikkia koettawat 
          porwariskaartilaiset tuhota! Pieniltä, wiattomilta ihmistaimilta yrittäwät he katkoa hirweillä räjähdyksillä hentoja, kauniita käsiä ja jalkoja, särkeä kirkkaita silmiä, murskata mäsäksi 
          watsoja. . . Porwariskaartilaisilla on siten yhtä julmat, yhtä raa'at sotatawat kuin isojen sotien ilmailijoilla, jotka pudottelewat hirmuisia pommeja pilwien yläpuolelta kaupunkeihin, 
          tappaen lapsia ja naisiakin.</p>
        <p>Inhimillisyys on niin kuollut porwarillisten asemiesten taholla. Raakuus niittää hedelmiä. Oman maan kansalaisia tapetaan yksi toisensa jälkeen. Kuta useampi on ruumiina, sitä suurempi 
          lienee riemu tuhoojien taholla. Kai samaten kuin isoissa sodissa. Samat tarkotuksetkin porwarillisten sotilailla: hankkia anastajaluokalleen lisää etuja ja waltaa, tukea ja wahwistaa 
          niiden riistämiswaltaa. Suuret sotawallat surmauttawat sellaisten pyyteiden takia miljoonia terweitä ja woimakkaita ihmisiä, tuottawat kurjuutta, kärsimyksiä, kyyneliä ja kuolemaa 
          kymmenille miljoonille: sodassa olemattomillekin — mikseiwät siis yhtä epäinhimilliset, yhtä tunnottomat ja petomaiset suomalaiset anastajat tee samaten waikkapa sadoille tuhansille 
          maansa kansalaisille.</p>
        <p>Sellaisia raakalaisia on kaswattanut Suomenkin kapitalistinen järjestelmä, waikka se on wielä werrattain nuori. Mutta samalla kun se ilmenee noin räikeässä muodossaan ja tuhoisin 
          tarkoituksin, kuin tässäkin sepustuksessa on osotettu, samalla täytyy sen koota kansamme siweellisiä woimia wastaansa. Nämä tulewat syrjäyttämään kerran raakalaiswallan. Kysymys on wain 
          ajan pituudesta.</p>
      </Article>

      <div className="interTitle">4.2.1918</div>
      <Article titleText="Seuraukset lahtarikaartien menettelystä.">
        <h5>Wenäjän sotilasjohto julistanut sodan Suomen walkokaartia wastaan.</h5>
        <p>Eilispäiwän Iswestijassa on julaistu seuraawa Suomen Aluekomitean Sotaosaston puheenjohtajan Glasunowin ja 42:nnen armeijakunnan komentajan Nadeshnin wälinen keskustelu:</p>
        <p><span className="accent">Nadeshni:</span> Hywää päiwää! Oulun linnawäen päällikkö pyytää ohjeita, kuinka hänen on meneteltäwä erään walkokaartin päällikön ehdotuksen johdosta, jotka 
          walkokaartilaiset owat ympäröineet osia ensimäisestä Suomenmaalaisesta jalkawäkikymentistä ja ensimäisestä jalkawäkidiwisioonasta Oulussa ja Torniossa. Walkokaartilaiset esittäwät 
          heille wapaata pääsyä Wenäjälle ehdolla, että he luowuttawat aseensa, joista walkokaartilaiset suostuwat maksamaan rahoja tai palauttamaan ne Wenäjän alueelle, mutta täytyy sanoa, että 
          osan Oulun linnawäestä owat walkokaartilaiset jo riisuneet aseista ja osa on käynyt heidän kanssaan taistelua, ja nyt on tehty wälirauha wastauksen saamista warten tähän kysymykseen. 
          Mitä arwelette, kuinka täytyy tehdä?</p>
        <p><span className="accent">Glasunow:</span> Aseita ei saa luowuttaa walkokaartilaisille, sillä walkokaartilla ei ole siihen minkäänlaista oikeutta, ja walkokaartilaisten hyökkäys on 
          kawallusta. Meidän täytyy ilmoittaa, että heidän on wiipymättä luowutettawa aseensa.</p>
        <p><span className="accent">Nadeshni:</span> Sanomalehdissä on näkynyt tietoja siitä, että walkokaarti on julistanut sodan wenäläisille sotajoukoille, ja senwuoksi meidän waatimuksiamme 
          aseitten palauttamisesta walkokaartilaisten ympäröimille wenäläisille sotajoukoille on kowennettawa lähettämällä sinne meidän osastojemme taholta riittäwää woimaa. Eikö minun ole tultawa 
          Helsinkiin sitä warten, että woisin persoonallisesti sopia tulewasta menettelytawasta?</p>
        <p><span className="accent">Glasunow:</span> Tässä suhteessa minä wiipymättä ryhdyn toimenpiteisiin. Siinä tapauksessa, että meidän piiritetyt joukkomme eiwät kestä, on heidän 
          wälttämättömästi häwitettäwä aseensa, niin että ne eiwät missään tapauksessa joudu walkokaartilaisille.</p>
        <p>Sitäpaitsi olen minä tänään lähettänyt sähkösanoman Wenäjän lähettiläälle Tukholmaan, pyytäen häntä osoittamaan apua meidän joukoillemme, joiden kanssa hän on yhteydessä. Me olemme 
          tänään myöskin julistaneet sodan walkoiselle kaartille, sillä me emme woineet kauemmin sietää kawaloita hyökkäyksiä meidän linnawäkeämme wastaan. Olen ilmoittanut tästä Suomen 
          Kansanwaltuuskunnalle.</p>
      </Article>
      <Article titleText="Helsingin kunnallisen suurlakon päättyminen.">
        <h5>Helsingin Työwäen Toimeenpanewan Komitean tiedonanto.</h5>
        <p>Helsingin työwäestö alkoi kunnallisen suurlakon tukeakseen sen awulla työwäen wallankumouksellista taistelua wallan waltaamiseksi työwäestön käsiin. Waltataistelun woimakkaaksi 
          saattamiseksi oli kunnallinen suurlakko kaupungissamme eri syistä wälttämätön.</p>
        <p>Työwäestön woitokas wallankumoustaistelu on nyt saatettu niin pitkälle, että porwarillinen hallitus on kukistettu ja sen tilalle perustettu työwäen wallankumouksellinen hallitus. Myös 
          kunnallinen walta Helsingin kaupungissa on siirtynyt työwäestön käsiin. Saawutetun wallan käyttämisen alkutoimet owat waltiollisten ja kunnallisten wallankumoushallituselimien kautta 
          järjestetyt. Tähän tultua on Helsingin Työwäenjärjestöjen Eduskunta katsonut, että Helsingin järjestyneen työwäen kunnallinen suurlakko on täyttänyt tehtäwänsä wallankumouksellisena 
          taisteluaseena ja woidaan lakko nyt lopettaa. Wallankumouksellisen taistelun jatkaminen ja sen saawutuksien työwäestölle turwaaminen tapahtuu nyt jo toisilla keinoilla.</p>
        <p>Tähän katsoen ja sen jälkeen kuin lakon lopettamisen käytännöllisestä järjestämisestä on neuwoteltu Suomen Kansanwaltuuskunnan sisäasiain ja työwäenasiain waltuutettujen sekä Helsingin 
          Punaisen Kaartin esikunnan kanssa, on Helsingin Työwäenjärjestöjen Eduskunta päättänyt,</p>
        <p className="accent">että kunnallinen suurlakko Helsingissä päättyy sunnuntain ja maanantain, helmikuun 3 ja 4 päiwien wälisenä yönä klo 12 yöllä.</p>
        <p>Töihin paluu tapahtuu seuraawassa järjestyksessä:</p>
        <p className="leftP">1. Työhön palaawat ne työläiset, jotka eiwät kuulu Punaiseen Kaartiin eiwätkä työskentele niiden wallankumouksellisten wallankäyttö- ja hallintolaitosten toimissa, 
          joita työwäen käsiin siirtyneen waltiollisen ja kunnallisen wallan käyttämistä warten on luotu.</p>
        <p className="leftP">2. Lakon lopettaminen ei koske wastawallankumouksellisen porwarillisen sanomalehdistön ilmestymistä eikä näiden lehtien walmistamiseen ja yleisölle jakamiseen 
          tarwittawaa työtä, joka, jos yrityksiä sen käyntiin saattamiseksi tullaan tekemään, estetään.</p>
        <p className="leftP">3. Punaisen Kaartin miehistö jää kaikki ehdottomasti paikoilleen ja seuraa edelleen oman päällystönsä määräyksiä. Kaartin jäsenten ja heidän huollettawinaan olewien 
          henkilöiden ylläpidosta ja kaikenpuolisesta turwaamisesta huolehtiwat työwäen wallankumoukselliset järjestöt Suomen Kansanwaltuuskunnan antamien määräysten mukaisesti.</p>
        <p className="leftP">4. Lakkoajalta on työnantajain maksettawa työläisille täysi palkka sen mukaisesti kuin Suomen Kansanwaltuuskunta tulee lähemmin säätämään.</p>
        <br />
        <p>Towerit! Työläiset! Helsingin wallankumouksellinen kansa! Työwäenluokka on ryhtynyt suureen wallankumoukselliseen taisteluun, taisteluun tähän asti sorrettujen luokkien oikeudelliseen 
          asemaan nostamiseksi. Mahtawat, wapauttawat, yhteiskuntaamme sywästi uudistawat owat tämän wallankumouksellisen taistelumme jo ensimäiset waikutukset. Me näemne tämän ylewän taistelumme 
          jakawan järkähtämätöntä oikeutta tähän asti sorretuille ja poljetuille kansanluokille kaupungissa ja maalla. Me näemme sen wapauttawan maakapitalistien luokkawallan sorronalaisuudessa 
          olewat torpparit, me näemme sen huojentawan riistettyjä joukkoja raskaasti rasittanutta kunnallisten werojen kuormaa, me näemme sen tarttuwan tähän asti kaikkiwaltiaan rahapääoman 
          röyhkeyttä hillitsemään; jokaisella elämän alalla näemme sen pyrkiwän sorrettujen oikeutta waltaan saattamaan.</p>
        <p>Juuri sellaisiin päämääriin pyrkiwään wallankumoukselliseen taisteluun köyhälistö on lähtenytkin. Ja sitä taistelua se myös loppuun asti jatkaa. Tällaisen wallankumoustaistelun 
          auttamiseksi myös Helsingin työwäestö ryhtyi kunnalliseen suurlakkoon. Ja kun nyt palaa työhön se osa, jota ei wallankumouksellisen taistelumme eturintamassa tällä hetkellä tarwita, 
          waan joka paremmin woi palwella työwäen wallan lujittamista työskentelemällä tehtaissa, työpajoissa ja muissa töissä, niin palaa tämä joukko työhönsä mielessään luja wakaumus siitä, että 
          sekin tarwittaessa astuu taistelun ensimäiseen rintamaan, waikka tulisimman ottelun tuoksinaan.</p>
        <p>Taistelurintamassa olewa osa jää riweihinsä ehdottomasti ja lujasti päättäneenä kestää loppuun asti ja woittaa. Kylki kyljessä, lujana rintamana lujittawat he yhtäällä 
          wallankumouksellisen taistelumme saawutuksia. Työskentelemällä töissään tekewät sitä toiset toisella taholla. Näin molemmat toimiwat samassa tarkoituksessa. Jokainen työskentelee 
          jokaisen hywäksi, kaikki taistelewat kaikkien puolesta, koko wallankumouksellisen kansan puolesta wastawallankumouksellisia porwarillisia woimia wastaan. Kaikki woimat uhrattakoon 
          työwäen wallankumouksen saawutusten lujittamiseksi ja wallankumoustaistelun lopulliseen woittoon wiemiseksi!</p>
        <p className="centered">Helsingissä, 3 p. helmikuuta 1918.</p>
        <p className="signature">Helsingin Työwäen Toimeenpanewa Komitea.</p>
      </Article>

      <div className="interTitle">5.2.1918</div>
      <Article titleText="Kansan nousu.">
        <p>Wallankumouksen hyökyaalto on tehnyt puhdasta. Se on lakaissut pois porwarillisen hallituksen, joka nousi kansaa wastaan. Tätä saattoi odottaa, niin, enemmänkin, sitä saattoi pitää 
          warmana heti siitä hetkestä, kun Swinhufwudin hallitus istui waltasatulaansa.</p>
        <p>Kewäällä alkanut, maailmansodan mainingeista syntynyt wallankumousliike oli saanut kansan pohjakerrokset liikkeeseen. Ajat kaiket sorrettuna ja poljettuna ollut luokka pääsi ensi kerran 
          wapaasti oikomaan jäseniänsä, rawistelemaan kahleitansa. Jo yli wuosikymmenen ajan oli se siihen walmistautunut. Sosialidemokraattinen työwäenliike oli sinä aikana kyntänyt sywän waon 
          tässä maassa. — Tsarismin werinen ies oli maamme porwariston suosiollisella awulla tehnyt kyllä tyhjäksi miltei kaiken yhteiskuntapoliittisen edistystyön. Huolimatta siitä, että tämän 
          maan köyhälistöluokalla, kansan kiistämättömällä enemmistöllä, oli eduskunnassa kuuluwa ääni, joka tulkitsi kansan tarpeita ja oikeutettuja waatimuksia, ei kainoimpiakaan niistä saatettu 
          woimaan. Ja me tiedämme, me woimme todistaa, että tämän maan yläluokka, waikutuswaltainen porwaristo wirkamiehineen, teki järjestelmällistä työtä saattaakseen wenäläisen werikeisarin 
          kynänpiirroilla kaiken kansan pohjakerrosten asemaa kohottaa tarkoittawan eduskunnallisen lainsäädännön, sikäli kuin ei se sitä woinut itse eduskunnassa laiksi tulemasta estää, 
          mitättömäksi.</p>
        <p>Mutta maailman sodan järkyttäwä murhenäytelmä, johon kapitalististen maiden porwariston imperialistinen politiikka on syypää, alkoi kolmantena sotawuonna kaswaa toisellaista hedelmää 
          kuin sen sodan liekkiin lietsojat oliwat odottaneet. „Idästä walo”, Wenäjältä se alkoi. Tämän mahtawan suurwallan monarkian mädäntynyt waltaistuin romahti ja waltikka putosi werisen 
          kantajansa kädestä. Työwäen ja sotilaiden alkaman wallankumouksen hedelmää riensiwät ottamaan käsiinsä wapaamielisyyttä teeskentelewät porwarit. Mutta heidän politiikkansa 
          imperialistinen kynsi pisti heti esiin, proletaarisen kansan ja sotawäen täytyi rawistaa harteiltaan tuo uusi tai oikeastaan wain muotoansa muuttanut painajainen ja ottaa walta 
          täydellisesti omiin käsiinsä. Se oli Wenäjän wallankumouksen wiimeisin waihe.</p>
        <p>Tapahtumain kulku Suomessa, suurin piirtein katsoen, on samallainen. Täälläkin tahtoi porwaristo kynsin hampain suojata oman etunsa. Kaiken kruunuksi se heti syksyisen suurlakon jälkeen 
          asetti senaatin, jonka oli määrä lujittaa tässä maassa porwariswalta mahdollisimman tukewaksi, tehdä Suomesta oikea ensiluokkainen porwarillinen poliisiwaltio. Tuimia taisteluita käytiin 
          eduskunnassa. Kymmeniä, ehkä satojakin kertoja siellä, esimerkkeihin ja tunnustähtiin wedoten, työwäestön taholta osotettiin, että porwariston politiikka on tulella leikkimistä, sen 
          uhmailu kewytmielisintä mitä olla saattaa. Mutta warotukset näyttiwät olewan turhia, niistä miltei kaswoi porwariston uhma. Keltaisin ruotsikkoporwari ja sinisin suomettarelainen 
          antoiwat weljenkättä, löiwät sormet sormien lomihin yhteisen wihollisensa, työwäenliikkeen, edessä. Tuskin koskaan on eduskuntaporwarien willihärkälauma mylwinyt niin yhteen ääneen kuin 
          edesmenneessä eduskunnassa; tuskin koskaan on se raiwolla ja intohimolla hyökännyt työwäen ja sosialidemokraattisen puolueen kimppuun kuin edesmenneen eduskunnan wiimeisinä wiikkoina. Se 
          sätti ja parjasi työwäestöä kilwan ruokottoman sanomalehdistönsä kanssa, sanomalehdistönsä, joka joka päiwä pursusi walhetta kuin kuolaa järjestyneen työwäestön toiminnasta. Niin 
          liikettä kokonaisuudessaan kuin sen yksilöitäkin mustattiin ja tawalla, joka osotti tekijöissään abnormia raiwoutta, täydellistä syyntakeettomuutta.</p>
        <p>Mutta samaan aikaan kun eduskunnassa ajettiin tulisella kiireellä sotalaitoksen perustamis- ja „lujan järjestyswallan” asiaa, samaan aikaan, ja ennen eduskunnan porwareiden jo kyllä 
          ennakolta määräämää päätöstä asiassa, järjesteli senaatti yhdessä johdon kanssa lahtarikaartejaan. Yksityisiä kansalaisjärjestöjä lähimäisen hengen ja omaisuuden suojaamiseksi niiden 
          sanottiin kyllä olewan. Suomalaisille selitettiin, että ne owat wenäläisten täältä lähtiessä mahdollisesti harjoittamaa häwitystyötä wastaan tarkoitettuja. Ja wenäläisille 
          sotilasjärjestöille tiedotettiin senaatin toimesta, että „luja järjestyswalta” tarkoittaa wain kotimaisten roswojen ja roistowäen aisoissa pitämistä; wenäläisiä sotilaita ei niillä uhata. 
          Siis toisaanne toista, toisaanne toista naamaa näytettiin.</p>
        <p>Mutta tapaukset alkoiwat kehittyä winhaa wauhtia. Karjalassa koottu lahtariarmeija, 3,000—4,000 miehinen pyssyin, rewolwerein ja heittopommein warustettu joukkue ilmestyi eräänä kauniina 
          päiwänä Wiipuriin „järjestystä pitämään”. Saiwat lähdön sieltä ja Wiipurin työwäki wastasi kunnallisella suurlakolla. Senaattorit neuwottelemaan. Niistä ei tietysti mitään tullut, paitsi 
          että lahtarikaartien edustajat sanoa tokaisiwat wahingossa että kaartinsa owat perustettuja jo ajat sitten — senaatin käskystä.</p>
        <p>Senaattorit, jotka lienewät olleet pikemmin urkkimis- kuin neuwottelumatkalla ja joista toinen oli wielä lahtari-armeijain henkinen holhooja, palasiwat Helsinkiin takaisin ja silloin oli 
          myös senaatin puolelta kaikki walmistettu — kansalaissotaa warten. Julistuksia, walheellisia ja herjaawia julistuksia annettiin niin itään ja länteen kuin „järjestystä” rakastawille Suomen 
          kansalaisillekin, sekä ilmoitettiin ensi kerran julkisesti että lahtarikaartit, „yksityisten kansalaisten” „kotiensa ja kontujensa suojaamiseksi” perustamat asejoukot n.s. walkokaartit, 
          owat — Suomen waltion joukkoja.</p>
        <p>Niin tahdottiin yllättää työwäki. Nähtäwästi uskottiin, että kun nämä suuret salat tuodaan julki yhtäkkiä hallituksen julistuksella, niin maan työwäenluokka jo pelkästään sen johdosta 
          heittäytyy „lujan järjestyswallan” armoille. Jos maan porwaristo ja Swinhufwudin hallitus näin ajatteli, jos se näin helposti luuli tämän maan köyhälistön saarroksiin saawansa, niin 
          siinä se erehtyi. Sillä heti kun julistukset oliwat julkisuuteen saatetut, nostattiwat ne pääkaupungissa wallankumousliikkeen ryöpyn ja hallitus oli katsonut turwallisemmaksi häwitä 
          näyttämöltä. Sen satu on nyt lopussa. Työtätekewän luokan ja kansan wihollisena on Swinhufwudin hallitus määrätty wangittawaksi ja saa wastata rikoksistaan wallankumouksellisen 
          tuomioistuimen edessä.</p>
        <p>Nopeammin kuin ehkä moni saattoi odottaakaan, toteutui siis joukkojen tahto: koko waltiowalta työwäenluokan käsiin. Nyt se on. Suomen Kansanwaltuuskunta, työtätekewän luokan luoma uusi 
          hallitus, on ollut jo wiikon ajan. Sillä ajalla se on ehtinyt saada aikaan merkittäwiä tekoja, joita ei mikään hallitus enää woi tyhjäksi tehdä. Hallituskautensa ensimäisenä päiwänä se 
          ratkaisi yhteiskunnallisen kysymyksen, joka on ollut tässä maassa ratkaisua warten päiwäjärjestyksessä jo yli kymmenen wuotta, torpparikysymyksen. Maan torppari- ja mäkitupalaiswäestö on 
          nyt wapaa, oma herransa. Sen satawuotiset maaorjan kahleet on katkottu. Sen esi-isien perintö, josta ahnaat maanomistajat käwiwät kauppaa, wiimeiseksi Swinhufwudin hallitus kaupan 
          wälittäjänä, on nyt pelastettu niille, joille se kuuluu. Yksi sywällisimpiä yhteiskunnallisia uudistuksia ratkesi siis sillä heikellä kuin waltiowalta joutui työwäen käsiin.</p>
        <p>Täytyy myöntää, että tämä oli sywä suonen isku Suomen omistawalle luokalle. Miljoonien, niin, satojen miljoonien hanke, joka wäikkyi sen silmien edessä kun se odotti torppien 
          lunastamista, on yhdellä pyyhkäisyllä mennyt siwu suun. Maanwuokraajawäestö on saanut omansa, isiensä perinnön, ilman että siitä on tarwinnut — maksaa.</p>
        <p>Oikeuden teko saa wääryydestä eläjät raiwoihinsa. Suomen maata omistawa luokka, jonka unelmat näin owat myttyyn menneet, yrittää nyt nousta köyhälistöhallitusta wastaan. Sen nuoriso 
          aseistautuu, sen agitaattorit hoilaawat kylien kujilla, että „maankawaltajahallitus” on kukistettawa.</p>
        <p>Onnistuwatko he? Tuskin. Rikkomalla rautatie- ja posti- ja tiedotusyhteyttä owat he kyllä saaneet hetkeksi estetyksi maaorjain wapauttamissanoman pääsemästä wapautettujen korwiin maan 
          joka kolkkaan. Mutta siinä he eiwät ajan pitkään onnistu. Köyhälistön wapauden ja yhteiskunnallisen oikeuden puolesta aseisiin tarttuneet työwäen joukot owat pian murtawat esteet.</p>
        <p>Joukkojen nousua eiwät mitkään taantumuksen asejoukot woi pitempään pidättää, sillä meitä on paljon. Ja kun me, käsittäen tehtäwämme ylewyyden, emme minkäänlaisen holtittomuuden emmekä 
          prowokatsionin anna joukkojemme kuria höllentää, niin wastustajaimme wiimeinenkin, epätoiwoinen wastarinta on pian murrettu.</p>
        <p>Työläiset, towerit, nyt waaditaan meiltä uhrautuwaisuutta, alistumista joukkokuriin, sillä ratkaistawana on suurin asia, mikä koskaan on tämän maan köyhälistön ratkaistawaksi tullut. 
          Nyt kirjoitetaan isänmaamme historian merkittäwintä lehteä.</p>
        <p className="signature">Y—ö.</p>
      </Article>

      <div className="interTitle">6.2.1918</div>
      <Article titleText="Wenäläisten osanotto Suomen luokkasotaan.">
        <h5>Helsingin „Iswestijan” kirjotus.</h5>
        <p>Helsingin „Iswestija" kirjoittaa pääkirjoituksessaan nykyisestä tilanteesta Suomessa m.m. seuraawaa:</p>
        <p className="quote">Ja me, wenäläiset sotajoukot, jotka olemme woimakkailla aseilla warustettuina, olemme joutuneet siihen asemaan, että meidän wälttämättä on sekaannuttawa riehuwaan 
          taisteluun. Se meidän täytyy tehdä ensiksikin sen tähden, että porwariskaarti, mitään keinoa kammoksumatta, yhtäkkiä on käynyt meidän joukko-osastojemme kimppuun ja riisunut ne aseista. 
          Siinä ensimäinen syy, joka pakoittaa meidät lähtemään liikkeelle towereittemme puolesta. Toiseksi saattaa meidät ottamaan osaa taisteluun punaisen kaartin ja walkoisen roswojoukon 
          edustajien wälillä se, että me wallankumouksellisina ja sosialisteina sekä samalla tarjolla ollen olemme pakotettuja seisomaan niiden riweissä, jotka wuodattawat wertansa työn punaisen 
          lipun ja sosialismin edestä taistelewien puolesta wälittämättä siitä, kuka taistelee, suomalainenko, itäwalta-unkarilainen, ruotsalainen tai romanialainen, katsomatta siihen, missä 
          taistelu tapahtuu, Wenäjälläkö wai Suomessa, Saksassako wai Ruotsissa. Työläisten edut owat yhteiset. Työläisten rintaman porwareita wastaan tulee olla yhteisen, kansainwälisen. Ja 
          pääasiassa tämän wuoksi me emme saa istua ristissä käsin.</p>
        <p>Sanotaan, että useita sotilaita ja matruuseja, taistelun innostamina ja haluten saawuttaa woiton sortajista, owat heittäneet pois sotilasnuttunsa ja pukeutuneet suomalaisen 
          rahwaanmiehen pukuun, sitonut punaisen nauhan hattuunsa ja mennyt sinne, missä werta on wuotanut pyhän asian puolesta. Meillä on esimerkkejä siitä, että kokonaisia joukko-osastoja on 
          lähtenyt walkokaarteja wastaan.</p>
        <p>Lehti mainitsee edelleen esimerkkejä siitäkin, että joitakin wenäläisiä upseereja on yhtynyt pelaamaan salakähmäistä peliä yhdessä suomalaisen ja ulkomaalaisen porwariston kanssa. Kun 
          porwarit owat riisuneet wenäläisiä sotamiehiä aseista, owat herrat upseerit saaneet kulkea wapaina, asestettuina miekoilla ja rewolwereilla ja nauttia ylläpitoonsa walkokaartilaisten 
          anastamista waroista. Lehti ei silti tahdo wäittää, että kaikki upseerit olisiwat taantumuksellisia. Sitä todistaa se, että monet wenäläiset upseerit owat työläisille tarjoneet altista 
          apuansa.</p>
      </Article>
      <Article titleText="Wenäläisten sota walkokaartia wastaan.">
        <h5>Wenäjän sotilaskomissarin sähkösanoma.</h5>
        <p>(Kipinäsähkösanoma). Suomen aluekomitean sota-asiainosaston puheenjohtajalle, toweri Glasunowille:</p>
        <p>Seisokaa wiimeiseen saakka. Ponnistakaa kaikki woimanne. Kiireesti lähetetään ja muodostetaan lentäwiä tykeillä warustettuja sissiosastoja jokaisen seudun suojaksi. Warastojen ahdistajia 
          ja häwittäjiä tulee kohtaamaan kowa rangaistus. Tullaan ryhtymään mitä ankarimpiin ja säälimättömimpiin toimenpiteisiin. Wielä kerran toistan, kootkaa kaikki woimat, apu tulee, on 
          wälttämätöntä mitä pikemmin lyödä hajalle walkoinen kaarti. Mahdollisimman usein kaikkia keinoja käyttäen, antakaa mahdollisimman tarkkoja ja täsmällisiä tietoja.</p>
        <p className="signature">Sotilaskansankomissario.</p>
        <p className="signatureSmall">Antakaa jos mahdollista, kopio 42:n armeijaosaston komentajalle Wiipuriin. — Paladin.</p>
      </Article>

      <div className="interTitle">8.2.1918</div>
      <Article titleText="Miettikää wielä kerran!">
        <p>Suomen talonpojat! Miettikää wielä kerran kumpaiseenko leiriin te kuulutte ja kumpaistako puolta tulette alkaneessa kamppailussa kannattamaan. Yhdessä olette kyntäneet Suomen sarkaa 
          työmiesten kanssa, yhdessä olette sitä peranneet pelloiksi ja niityiksi, yhteiset muistot sitowat teitä. Älkää siis uskoko niitä, jotka wäittäwät työwäestön olewan teidän 
          weriwihollisenne. Muistakaa, että työwäestön joukossa on teidän omia weljiänne ja sisarianne, jotka mahdollisesti tälläkin hetkellä owat ilman leipää. Teidän ja heidän yhteinen 
          wihollinen on päinwastoin suur-kapitalismi. Tuhansittain on se sortanut teitä, Suomen pikkuwiljelijät pois tiloiltaan. Tuhansittain on se ryöstänyt teiltä miljooneja maksamalla 
          metsistänne wain murto-osan niiden hinnasta. Sadottain on se keksinyt rasituksia teidän kannettawaksenne. Satoja miljoonia on se tänäkin sota-aikana nylkenyt teiltä maanwiljelyshinnoissa. 
          Kaikenlaiset kauppa- ja tehdasherrat owat rikastuneet teidän kustannuksellanne.</p>
        <p>Nyt he teeskentelewät olewansa teidän ystäwiänne. Ennen he nimittiwät teitä maamoukiksi, eikä teitä tarwittu kuin silloin, kun oli petkutettawa teiltä rahaa. Nyt porwarit pyytäwät teitä 
          lahtarikaarteihinsa murhaamaan teidän omia weljiänne ja sisarianne. Älkää toki niihin menkö! Älkää antako hetkellisten wirwatulien häikäistä silmiänne! Muistakaa, että suur-porwaristo on 
          aina teitä sortanut ja tulee wastakin sortamaan. Työwäestön kanssa teidän on joko seisottawa tahi kaaduttawa. Yksinänne olette awuttomia suur-kapitalismin kynsissä. Tukekaa siis Suomen 
          työwäen asettamaa hallitusta! Jakakaa mielellänne wähäiset warastonne työläisten kanssa! Siten ehkä päästään kaikin kesään. Porwaristolle ei ole mikään mieluisempaa kuin se, kun 
          talonpojat ja työläiset tappelewat keskenään. Porwaristo istuu kuin hämähäkki werkkonsa keskellä ja imee saaliistaan kaiken mehun luihin ja ytimiin asti. Ensin joutuwat werkkoon työläiset 
          ja senjälkeen talollisista tulee taas työläisiä.</p>
        <p>Muistakaa te Suomen talonpojat onnettoman Irlannin oloja! Siellä on kapitalismi sortanut teidän weljenne asumaan maakuoppiin, jossa saiwat ennen sotaakin wain wähän perunoita syödäkseen. 
          Miljoonittain täytyy heidän muuttaa ulkomaille, koska nälkäkuolema uhkaa kotona. Samoin woipi käydä, jos ei teille, niin ainakin teidän jälkeläisillenne! Muistakaa myöskin weljiänne 
          Wenäjällä. He owat liittyneet yhdessä työmiesten kanssa taisteluun nykyisen maailman mahtawinta hirwiötä, kapitalismia wastaan. Samoin on teidänkin tehtäwä! Wai luuletko sinä todellakin, 
          sinä Suomen sarkatakkinen talonpoika olewasi porwari? Sinä, joka teet työtä otsasi hiessä ja wäännät kiwiä aamusta iltaan. Katsele känsäisiä käsiäsi, ne sinulle kertowat, kuka olet! Älä 
          myöskään pelkää sitä, että työwäestö wallan saatuaan wiepi sinun maatilkkusi tahi peltosarkasi. Suomi on kylliksi suuri, jotta siinä riittää maata sekä sinun että työmiesweljesi perkata. 
          Riittää, kunhan wain suurten herraskartanoiden ja tukkiyhtiöiden maat palautetaan waltiolle, joka jakaa ne halullisille wiljelijöille. Sinua, Suomen talonpoika, ei siis mikään waara uhkaa 
          työwäestön taholta, jos waan kuljet sen kanssa käsikädessä, kuten ennen Nuijasodankin aikana, raha- ja wirkawaltaa wastaan. Mutta kawahda kapitalismia ja woi sinuas, jos sinä sen eteen 
          lankeat maahan! Silloin sinua ei mikään woi pelastaa historian turmiolta. Menetekel on ainaiseksi naulattu owesi päälle. Jälkeläisesi tulewat sinua kiroamaan, koska olisit woinut kukistaa 
          kapitalismin werta janoawan pedon, mutta kaiwoitkin sensijaan jälkeläisillesi kuopan, johon omat ja työwäen lapset kerran putoawat.</p>
        <p>Mieti siis tarkasti, mitä sinun rauhaas sopii, sinä Suomen talonpoika, pienwiljelijä ja torppari! Älä enää aseta yhtään pommia junan eteen, joka wiepi elintarpeita työmiesweljellesi, 
          älä, waikka porwarit miten pyytäisiwät!</p>
        <p>Yhdessä työmiesten kanssa sinä woit luoda Uuden Suomen, yksinäsi sinä hukut!</p>
        <p className="signature">J. K.</p>
      </Article>

      <div className="interTitle">10.2.1918</div>
      <Article titleText="Punaisen Kaartin Ylipäällikön tiedonanto.">
        <p>Olen juuri käynyt päärintamillamme maaseudulla. Olen nähnyt joukkojemme taistelewan ja woittawan.</p>
        <p>Lowiisan ja Porwoon kaupungit on walloitettu. Mäntyharjun asemalla on kiiwaan taistelun jälkeen saatu täydellinen woitto, ja sieltä joukkomme etenewät Mikkeliin. Porwoon kohtalo 
          ratkaistiin kaksipäiwäisessä taistelussa Sipoon pitäjän Rickbyn kylässä, missä molemmin puolin käytettiin tykistöäkin. Melkoinen osa lahtareista on wangittu ja loput työnnetty meren 
          saarille, missä heitä ajetaan takaa. Täten on alueella Kotka—Kouwola—Lahti—Riihimäki—Helsinki miltei kaikki lahtarijoukot jo lyöty, ja ennen pitkää on koko Etelä-Suomi ja suuri osa 
          Itä-Suomea niistä puhdistettu. Ei ole auttaneet niiden semmoisetkaan juonet, kuin salakawala lähestyminen punakaartilaisjoukkoina ja meidän merkeillämme warustettuina, kuten tekiwät 
          Lowiisan tiellä ja Woikoskella. — Etelä-Pohjanmaalla owat lahtarijoukot wielä woimissaan, mutta saawat ankaria iskuja joka päiwä. Wilppulassa, Tampereen ja Haapamäen wälisellä radalla, 
          owat niiden asemapaikat tykkitulella häwitetyt; kirkon tornissakin oli niillä siellä kuularuiskuja, jonka takia kirkko pommituksestamme wahingoittui.</p>
        <p>Uljaasti taistelee Suomen wallankumouksellisen työwäen armeija, ja jalosti rinnallamme auttawat meitä wenäläiset towerit sekä lättiläisten towerien mainio joukko. Wallankumoukselliset 
          joukot owat nyt hyökkääwinä miltei kaikkialla, mutta siitä huolimatta on meidän puolellamme yleensä kaatuneiden ja haawoittuneiden luku paljon pienempi kuin lahtareilla, johtuen siitä, 
          etteiwät nämä ole kestäneet hyökkäyksiämme.</p>
        <p>Kunnia wallankumouksen sankareille, jotka owat uhranneet werensä Suomen köyhälistön wapautuksen puolesta! Heidän ylewä muistonsa on lähtemättömästi piirretty tämän kansan suuren 
          wallankumouksen historiaan, ja se tulee wielä elämään heitä onnellisempain jälkipolwienkin huulilla!</p>
        <p>Olen määrännyt, että kaatuneet towerimme owat kullakin paikkakunnalla wäliaikaisesti haudattawat weljeshautaan tai mihin omaiset tahtowat, kunnes lopullisen woiton jälkeen toimitetaan 
          waltion puolesta juhlallinen hautaus.</p>
        <p>Towerit! Suomen työwäen Punaisen Kaartin miehet! Edessämme on wielä uusia taisteluja, raskaita ponnistuksia ja uhrauksia. Mutta woitto lankee työtätekewälle kansalle, eikä kansan 
          weriwihollisille, jotka owat meitä orjinaan pitäneet!</p>
        <p>Taistelkaa, kuten tähänkin asti! Walloittakaa tässä maassa kansalle kaikki walta, työntekijälle wapaus ja korkeamman elämänjärjestyksen oikeus!</p>
        <p className="signature">Eero Haapalainen.</p>
        <p className="centered">Punaisen Kaartin Ylipäällikkö.</p>
      </Article>
      <Article titleText="Wankeja ei saa surmata.">
        <h5>Porissa asetetaan wankien ampuja sotaoikeuden tuomittawaksi.</h5>
        <p>Kuten olemme kertoneet oli Porin lähellä eräässä isossa maakartanossa, jonka nimi on Wanhakartano, taistelu punakaartilaisten ja lahtarien wälillä. Lahtarit lyötiin pakoon ja 
          punakaartilaiset ja sotilaat saiwat m.m. 11 wankia, jotka he toiwat Poriin. Pieni joukko punakaartilaisia ja sotilaita ampui wangit ilman mitään tutkintoa wiime keskiwiikkona Porin 
          Punaisen kaartin pihalla, waikka wankien, taistelusääntöjen mukaan, aseettomia kun oliwat, olisi pitänyt nauttia woittajan suojaa.</p>
        <p>Tapahtuman johdosta oli Porissa olewilla sotilailla kokous torstaina. Sotilaat oliwat sitä mieltä, että wankien piti olla turwassa, koska heidät kerran otettiin wangiksi ja tuotiin 
          kaupunkiin, eikä heitä, waikka oliwatkin käyttäneet antautumislippua wäärin, oltu taistelupaikalla ammuttu. Tämän wuoksi sotilaiden yleinen kokous tuomiten tämän raa'an werityön tekijät 
          wallankumouksen häpäisijöiksi, ilmoitti tapahtumaa wastaan mitä jyrkimmän wastalauseensa ja asettaa wastaisuudessa kaikki wankeja tai muita aseettomia henkilöitä kohtaan wäkiwaltaa 
          harjoittaneet henkilöt sotaoikeuden tuomittawaksi. Sotilaskokous yhtyi täydellisesti Porin piirin Punaisten Kaartien esikunnan ja Porin Työwäenneuwoston julistukseen wankien ja 
          turwattomien ihmisten kohtelusta sekä waati Punaisen kaartin asettamaan sotaoikeuden, joka tutkii wangit, mutta ei wallankumouksen lakien mukaan saa ketään langettaa 
          kuolemanrangaistukseen. Kaikki suomalaiset wäkiwallanharjoittajat on niinikään jätettäwä sotaoikeuden tuomittawaksi. Niille, jotka ylläolewaa päätöstä ja siinä lausuttuja periaatteita 
          wastaan rikkowat, tullaan langettamaan kaikkein ankarin rangaistus.</p>
        <p>Itsestään seuraa että Porin Punaisen kaartin päällystön on heti erotettawa ne henkilöt, jotka ottiwat osaa wankien ampumiseen, sillä sotilaat owat jyrkästi sitä mieltä, ettei taistelewain 
          riweissä ole siedettäwä ei suomalaisia eikä wenäläisiä roistoja. Sotaoikeuden tuomittawaksi on myöskin asetettawa kaikki ryöstöjä harjoittawat henkilöt.</p>
        <p>Sotilaiden kokouksen päätökset owat seuraawat:</p>
        <p>Me, Porin sotilaspiirin sotilaat, yleisessä kokouksessa, saatuamme tietää yksityisen häwitetyn talon omaisuuden ryöstöstä, jonka owat tehneet yksityiset sotilaat eräiden 
          punakaartilaisten kanssa, päätämme että kaikkinainen ryöstö on lopetettawa ja se joka tekee itsensä sellaiseen syylliseksi, joutuu sotilaswallankumouksellisen tuomioistuimen 
          tuomittawaksi, jonka tuomioistuimen on suhtauduttawa tällaisiin rikoksiin kaikella ankaruudella.</p>
        <p>Wenäläisten sotilaiden on muistettawa, että heidät on kutsuttu puolustamaan köyhälistön wapautta ja pitämään yllä Wenäjän wallankumouksen armeijan kunniaa, jonka wuoksi järjestymättömät 
          hyökkäykset eiwät ole sallittuja.</p>
        <p>Kaikki esineet, jotka owat otetut taloista, owat tuotawat Punaisen Kaartin esikunnalle Suomen köyhälistön omaisuutena. Näiden esineiden luowuttaminen Punaiselle Kaartille on tapahtuwa 
          sotilaspiirin neuwoston edustajan tarkastuksen alaisena.</p>
        <p>Me Porin sotilaspiirin sotilaat yleisessä kokouksessa saatuamme tietää aseettomien walkokaartilaisten murhaamisesta, joka on ristiriidassa kaikkien maiden köyhälistön waatiman 
          kuolemanrangaistuksen poistamisen kanssa, jyrkästi tuomitsemme sellaisen teon. Tällaiseen aseettomien tai aseistariisuttujen köyhälistön wihollisina olleiden henkilöiden murhaamiseen 
          syylliset on saatettawa sotilaswallankumouksellisen tuomioistuimen mitä ankarimman rangaistuksen alaiseksi.</p>
        <p>Tämä päätös annettakoon kaikkien suomalaisten sosialidemokraattien tietoon, osotteeksi siitä, ettei Porin sotilaspiiri asetu senkaltaisia tekoja puoltamaan. — Sos.-dem.</p>
      </Article>

      <div className="interTitle">13.2.1918</div>
      <Image className="centeredImage" src={img2} alt="Kuva 2"/>

      <div className="interTitle">15.2.1918</div>
      <Image className="centeredImage" src={img3} alt="Kuva 3"/>

      <div className="interTitle">16.2.1918</div>
      <Article titleText="S. P. K:n läntisellä rintamalla toimiwille joukko-osastoille.">
        <p>Työläistowerit. Kaartilaiset.</p>
        <p>Me olemme alkaneet wallankumoustaistelun! Tämä sana, wallankumoustaistelu, sisältää paljon. Se waatii siihen osanottajalta henkilökohtaista rohkeutta, miehuutta, kestäwyyttä ja ennen 
          kaikkea uhrautuwaisuutta yhteisen asian eteen. Meidän wastustajanme on hywin warustettu, hywin ruokittu ja waatetettu kapitalismin ja luokkaherruuden mahdin wärwäämä palkka-armeija, 
          jonka johtajina owat juuri ne samat herrat, jotka ennen owat waltaa pitäneet ja sitä hywäkseen käyttäneet ja jotka senwuoksi taistelewat meitä wastaan kaikin keinoin. Meillä 
          sitäwastoin ei ollut taistelun alkaessa mitään. Meiltä puuttui warustukset, ruokawarastot, waatetus, ja yleensä kaikki mikä armeijan tekee taistelukuntoiseksi. Meillä oli ainoastaan 
          taisteluhenki ja sen luoman pettämättömän rohkeuden awulla me olemme päässeet siihen missä nyt olemme, nimittäin olemme walloittaneet Suomen tärkeimmät keskukset ja liikennelinjat.</p>
        <p>Mutta talwen kowuus ja taisteluun tottumattomuus on aiheuttanut joukoissamme waatimuksia warustusten ja muonawarojen suhteen. Ja se onkin aiwan luonnollista. Mutta se ei kuitenkaan saa 
          kohota suuremmaksi kuin hätäpikaa perustettu ja järjestetty armeija ja sen intendenttilaitos woi tyydyttää.</p>
        <p>Työläistowerit! Kaartilaiset! Wallankumoussotilas ei taistele palkan eikä yksityisten etujesi wuoksi, waan sen tähden, että hänen omaksumansa periaate ja wakaumus pääsisi woitolle. Ei 
          siis saa olla kysymystäkään oman edun tawottelusta. Intendenttilaitoksemme tietää warsin hywin, ettei työläiskaartilaisen waatewarasto riitä suojaamaan ankaran talwen pakkasia ja 
          myrskyjä wastaan ja sen wuoksi se ponnistelee täysin woimin hankkiakseen näitä tarwetawaroita taistelewalle armeijalle. Meillä ei kuitenkaan ole, kuten wastustajillamme on ollut, 
          tilaisuutta eikä aikaa täydellisten waatetusten hankkimiseksi, eikä ole tarpeenkaan — wallankumoussotilas uhraa itse kaikkensa ja intendenttilaitoksemme yrittää hankkia puuttuwan 
          waatekappaleen.</p>
        <p>Waakekappaleiden jakelu on kuitenkin kysymys, joka on omiansa synnyttämään tyytymättömyyttä ja erimielisyyttä itse jakeluun nähden — jos nyt tyytymättömyys wallankumoussotilaiden kesken 
          ensinkään on mahdollinen — toinen sotilas tarwitsee nim. enemmän awustusta kuin toinen, sillä toisen omat warustukset saattawat olla täydellisemmät kuin toisen ja tämä wähemmän 
          tarwitsewa on kuitenkin yhtä oikeutettu yhteiseen awustukseen kuin toinenkin ja onhan wain sattuma, että hänen warustuksensa tällä hetkellä owat paremmat. Tämän ristiriidan 
          sowittamiseksi on tarpeen, että awustuksen saanut sotilas maksaa saamansa waatekappaleen ja hinta, maksun helpottamiseksi, wedetään sopiwissa erin pois hänen palkastaan. Kuinka monta 
          prosenttia asianomaisen palkasta pois wedetään on wielä päättämättä sen wuoksi, että itse palkankin suuruus on wielä ratkaisematta. Kysymys palkasta on taas puolestaan jäänyt 
          ratkaisematta sen tähden, että tuhannet muut kysymykset on täytynyt ratkaista sen edellä wallankumouksen onmistumiselle tärkeämpinä tekijöinä, sillä, kuten jo sanottu, 
          wallankumoussotilas ei taistelekaan palkan, waan asiansa onnistumisen wuoksi. Tällä ei kuitenkaan tahdota sanoa sitä, etteikö wallankumoussotilas olisi oikeutettu saamaan aineellisenkin 
          korwauksen jalosta työstään. Päin wastoin. Hän on siihen oikeutettu ja wallankumouksen on turwattawa hänen omaistensakin toimeentulo perheenhuoltajan taistellessa tai kaatuessa yhteisen 
          asiamme puolesta. Perinpohjaisiin toimenpiteisiin tämän asian järjestämiseksi onkin jo ryhdytty, mutta kukin asia waatii aikansa ja tämä asia on liian laaja järjetyäkseen 
          silmänräpäyksessä.</p>
        <p>Eteenpäin siis, wallankumoussotilaat! Yhteiskunta, jonka syntymisen puolesta te taistelette ja jota teidän taistellessanne jo kuumeisen kiireisesti järjestetään, tulee pitämään huolen 
          siitä, että etunne ja oikeutenne tasapuolisesti jaetaan sillä te itse tulewan yhteiskunnan wapaina kansalaisina takaatte tämän tasapuolisuuden.</p>
        <p>Jatkuwaa uljuutta, uhrautuwaisuutta ja kärsiwällisyyttä, towerit, ja woitto kauneine woittajapalkintoineen on meidän.</p>
        <p>Towerillisesti:</p>
        <p className="centered">Suomen Punaisen Kaartin Toimiwa Armeija.</p>
        <p className="signature">Yleisesikunta.</p>
        <p className="signatureSmall">Ali Aaltonen.</p>
      </Article>
      <Article titleText="Hämäräperäiset kotitarkastukset.">
        <h5>Niiden tekijät tullaan ampumaan.</h5>
        <h5>Päiwäkäsky.</h5>
        <p>Koska on sattunut tapauksia, että Punakaartin nimessä on tehty hämäräperäisiä kotitarkastuksia, on Punakaartin Paikallinen Esikunta päättänyt, että tästä lähtien ei minkäänlaisia 
          kotitarkastuksia saa toimittaa ilman Esikunnan antamaa waltakirjaa ja tullaan tämän määräyksen rikkojat saattamaan rangaistukseen sotaoikeudessa ja yölliset tarkastuksen tekijät tulewat 
          poikkeuksetta ammuttawiksi.</p>
        <p className="centered">Helsingin Päämajassa 16 pnä helmikuuta 1918.</p>
        <p className="signature">Paikallinen Punaisen Kaartin Esikunta.</p>
      </Article>

      <div className="interTitle">17.2.1918</div>
      <Article titleText="Helsingin wallankumousoikeus ja sen langettamat tuomiot.">
        <h5>Muutamia mietteitä.</h5>
        <p>Wallankumousoikeus on jo muutamia päiwiä jakanut oikeutta sen mittapuun mukaan mikä työwäellä oikeudesta on. Sanottakoon, että oikeuskäsite työwäestössäkin on monenlainen. Ehkä joku 
          määrittelisi sen sanoilla: „niin monta mieltä kuin miestäkin”, mutta sittenkin on totta, että monesta mielestä, jotka käsittäwät oikeuden samalla tawalla, karttuu yksi yleinen 
          oikeuskäsitys. Tämä yleinen on epäilemättä wallinnut Helsingin wallaukumousoikeudessa.</p>
        <p>Ne päätökset ja tuomiot, mitkä Helsingin Wallankumousoikeus on antanut, eiwät joka suhteessa tyydytä joukkoja. Se johtuu siitä, että ensinnäkin itse oikeuskäsite on eri yksilöillä 
          erilainen, mutta myöskin siitä, että asema maassa ja sisällissota, jota paraillaan käydään, on saanut mielet kuohuksiin ja waatimaan kansan sortajille ankarampia rangaistuksia.</p>
        <p>Wäärinkäsityskin on epäilemättä wallalla.</p>
        <p>Wallankumousoikeuden yleinen syyttäjä tahallaan walitsi pienimmät jutut ensimäisinä käsiteltäwiksi, jotta ei heti suurissa jutuissa olisi tehnyt haittaa. Tätä käytännöllistä seikkaa 
          wastaan ei kai kukaan halua muistuttaa. Siitä siis johtui, että tuomiot oliwat werrattain liewiä.</p>
        <p>Wallankumouksen ryöpyissä tapahtuu epäilemättä myöskin sellaista, että joku joko persoonallisiin tai waan huhuihin ja wäärinkäsityksistä johtuwiin syihin perustuen, ilmoittaa jonkun 
          lahtariksi tai muuten syylliseksi, jolloin ilmiannettu wangitaan. Wallankumous antaa työtä ja kiirettä jokaiselle, ja siitä johtuu, että wangituita ei alkukuulustelussa tutkita kyllin 
          tarkkaan. Miliisiraportit siis heikosti kertowat mitään syytetylle raskauttawaa ja todistuksia miltei kokonaan puuttuu.</p>
        <p>Näinollen siis ne henkilöt, jotka tähän mennessä owat saaneet liewiä tuomioita, owat olleet sellaisia, joiden syyllisyyttä ei ole osoittanut enempää miliisilaitos kuin ne, jotka 
          pidätyksen owat toimittaneet.</p>
        <p>Muutamat syytetyistä owat kuuluneet n.s. „poliisikouluun”. Useat sanotun „koulun" „oppilaista” owat olleet siinä käsityksessä, että „koulu” liitetään miliisilaitokseen laillista tietä 
          ja siten lisätään miliisilaitosta. Onpa heille syötetty sitäkin satua, että miliisilaitoksen henkilökunta sitten wuorostaan siirrettäisi „kouluun” kuin „koulu” astuisi piireihin. Kun 
          nämä petetyt työläiset marraskuun suurlakossa näkiwät, ettei juttu ollutkaan niin wiaton, erosiwat he „koulusta” jo koko „koulu” silloin hajosi.</p>
        <p>Poliisikoululaisilla oli 3-kuukautinen kontrahti. Siitä on ollut seurauksena, että heille on maksettu palkkaa (450 mk.) myöskin joulukuulta. Tämä on ollut se tekijä, jonka perusteella 
          on waadittu heille rangaistusta, koska owat muka wastoin annettua sopimusta, kuuluneet lahtarikaartiin. Muistetaanhan, että marraskuun suurlakossa näitä „koululaisia” pidätettiin 
          joukottain ja päästettiin wapaaksi sellaista lupausta wastaan, etteiwät he wastedes ota osaa wehkeilyyn työwäkeä wastaan.</p>
        <p>Että owat ottaneet palkkansa, joka kontrahdin mukaan oli heille kuuluwa, ei ole suurikaan rikos. Usealle on joulukuun tili lähetetty kotiin ja toisia kehoitettu käymään tilinsä 
          hakemassa maksupaikalta. Kuka ei ottaisi sopimuksessa taattua tiliä, waikka ei olisikaan suorittanut palwelustaan wiimeiseen päiwään asti, warsinkin kuin oli tapahtunut yleinen 
          seisahdus „palweluksessa”.</p>
        <p>Marraskuun jälkeen ei kukaan tuomituista ole ottanut osoa „koulun harjoituksiin”. Heidän syyllisyytensä ei ole tällä hetkellä suurempi kuin marraskuussa jolloin he pääsiwät wapaaksi 
          kirjoittamalla sopimuksen.</p>
        <p>Marraskuun jälkeen ei „poliisikoulu” ole toiminut, ja hajosikin silloin siinä muodossa. Se muuttui sittemmin lahtariarmeijan osaksi, niine miehineen, jotka siihen marraskuun jälkeen 
          jäiwät.</p>
        <p>Ei Helsingin Wallankumousoikeus suinkaan ajattele, että nämä „poliisikoululaiset” olisiwat syyttömiä kokonaisuudessaan. Eivät suinkaan. Mutta on eri asia, onko joku yksinkertainen 
          työläinen narrattu sinne herrain liukaskielisellä laillisuushymnillä, tai onko joku itsetietoinen herraswekara ottanut toimen työwäkeä wahingoittawassa tarkoituksessa. Moni on ollut 
          pitkäaikaisesti työttömänä ennenkuin on langennut kiusaukseen ottaa wastaan rahaa porwarilliselta, salakähmäisyyttä harjoittaneelata korlalta.</p>
        <p>Wallankumousoikeus onkin ottanut ne yksilöinä ja suhtautunut niihin asian mukaan, ottaen huomioon erilaisia asiaan waikuttawia syitä, eikä summasia käsittele kaikkia saman kaawan 
          mukaan.</p>
        <p>Wallankumous on heittänyt suuret joukot työwäen rikollisia wankikoppeihin. Siitä tulee kysymykseen puhtaasti teknillisiä seikkoja, jotka owat otettawat lukuun. Ei ole hywä, että 
          syyttömät tai wähän syylliset täyttäwät ne paikat, jotka olisiwat warattawat pääsyyllisille.</p>
        <p>Elämä kuohuu wallankumouksen ja sisäisen sodan waltawissa ryöpyissä. Porwariston wihalla ei ole rajaa. Mutta se ei saa järkyttää meitä. Me kylmästi hymyilemme woittajan tyyntä, 
          rauhallista hymyä porwariston woimattomalle raiwolle. Lyömme awoimessa taistelussa kuin mies, mutta aseetonta woitettua miestä kohtelemme arwokkaan luokkatietoisen työläisen tawoin 
          tahraamatta käsiämme aseettoman wereen.</p>
        <p>Ei meidän woittomme siitä riipu, että riistämme hengen aseettomalta wastustajalta. Ei! Mutta jos hän on warastanut ja keinotellut suuria rikkauksia ja käyttää omaisuuttaan kansan 
          wahingoksi; tuomittakoon silloin omaisuus menetetyksi ja mies tehtäköön yhteiskunnalle waarattomaksi eristämällä hän muusta yhteiskunnasta.</p>
        <p>Emme aijo säästää todellisia syyllisiä, mutta toistaiseksi meille on niitä wähän osoitettu. Tehkää parastanne te, jotka tunnette todelliset syylliset. Osoittakaa niiden syyllisyys, 
          sillä ilman todistuksia ei woi ketään tuomita.</p>
        <p>Olemme pyytäneet osoittamaan meille todistajia. Asianomaiset eiwät ole woineet niitä osoittaa. No ei hätäillä. Ollaan wasta alussa. Kyllä se ennenpitkää suoriutuu oikealle ladulleen 
          tämäkin asia.</p>
        <p className="signature">Ylimääräinen sihteeri.</p>
      </Article>

      <div className="interTitle">19.2.1918</div>
      <Image className="centeredImage" src={img4} alt="Kuva 4"/>

      <div className="interTitle">21.2.1918</div>
      <Image className="centeredImage" src={img1} alt="Kuva 1"/>

      <div className="interTitle">24.2.1918</div>
      <Image className="centeredImage" src={img5} alt="Kuva 5"/>
      <Article titleText="Wallankumouksen wyöryssä.">
        <h5>Mannerheimilaisten poliittisia erehdyksiä yritetään paikkailla.</h5>
        <p>Luokkasodan melskeissä on neljäs wiikko wierähtänyt. Luokkasota on saalista niittänyt runsaasti. Mutta sitä nyt ei woida estää. Se kulkee kulkuaan siksi kunnes tulee 
          ratkaisukohtaansa.</p>
        <p>Kuluneen wiikon aikana owat nämä Kansalaissodan sytyttäjät yritelleet uutterasti lentolehtisillään pettää edelleenkin kansalaisiaan. Mutta ne kai owat kuuluwinaan kreiwi Mannerheimin 
          ja ent. hallitusherrain poliittisiin laskelmiin. Sisällöltään owat ne kovin paksusti wäritettyjä, kokoonpanoltaan kömpelösti laadittuja, niin ettei niiden waikutuksen luulisi olewan 
          minkäänarwoisen, muuten kuin niihin, jotka tarttuwat kaikkeen heikkoon kuin hukkuwa oljenkorteen. Tapahtumat owat niin kowin tuoreet, että niiden peittäminen wähänkin muistoa omaawilta 
          on aiwan mahdotonta.</p>
        <p>Niinpä mannerheimiläiset owat nyt julistuksissaan koettaneet selittää, että „walkokaartilaiset” eiwät taistelekaan wenäläistä sotawäkeä wastaan, waan ainoastaan „roswoja ja roistoja” 
          wastaan. Wenäläisen porwaristonkin nimessä on näitä koetettu lewittää wenäläisen wäestön keskuuteen. Näissä tiedonannoissa kuulutaan kuitenkin jo paljon selwemmin sanotun, että Suomessa 
          onkin käynnissä luokkataistelu, minkä wuoksi muka wenäläisen sotawäen oman turwallisuutensa wuoksi ei pitäisi sekaantua tähän Suomen kansan luokkalaisteluun.</p>
        <p>Siis selwempää puhetta kuin mitä tähän saakka on wastawallankumouksellisten taholta rohjettu selittää. Aina näihin saakka owat porwarilliset walmistautuessaan tappamaan työwäestöä 
          selittäneet, että isänmaallinen welwollisuus kutsuu taisteluun maassamme olewia wenäläisiä woimia wastaan. Ja paljonhan tätä uskottiin, hywinkin laajoissa piireissä, sillä olihan 
          Wenäjän sotajoukoissa huonojakin aineksia, jotka pahoilla teoillaan antoiwat aihetta hyökkäyksiin, jotka sitten paksusti liioiteltuna porwarillisissa lehdissä kerrottiin. Nämä harwojen 
          huonojen aineksien teot painoiwat porwarillisten mielestä paljon enemmän waakalaudalla kuin Wenäjän sotajoukon, sosialidemokratian suurtyö, kun ne antoiwat kansallemme wapauden ja 
          maallemme itsenäisyyden.</p>
        <p>Waikka mannerheimiläiset yrittäwät selitellä toisin, on kehoitus kuitenkin tehnyt tehtäwänsä. Tätä kardinaaliwirhettä eiwät enää woi korjata. Lahtarijoukot kun alkoiwat liikehtimisensä, 
          hyökkäsiwät he petollisella ja julmalla tawalla wenäläistenkin pienien joukko-osastojen kimppuun, samoinkuin työwäestönkin kimppuun. Mannerheimin rintamantakaisissa sanomalehdissä 
          riemuiten ja korskealla tawalla kerrottiinkin näistä walloituksista. Ylpeällä tawalla oli nänmä tiedonannot wahwistanut „ratsuwäen kenraali, kreiwi ja walkokaartien ylipäällikkö 
          Mannerheim”.</p>
        <p>Teot pysyvät tosina. Ja tekojen jäljet owat wielä aiwan tuoreet, niin että niitä on aiwan mahdotonta peittää. Mutta waikka nyt olettaisimmekin, että asianlaita lopultakin on niin 
          kun ylipäällikkö Mannerheim tällä hetkellä erehdyksensä tunnustettuaan koettaa selittää, niin onko tuo toinen wäite niin suuriarwoinen, joka muka olisi pakottanut lähtemään sotaan, 
          nimittän että taistelu kohdistuu nyt „roistoja ja roswoja” wastaan. Kuka ihminen, jolla wielä hituinenkaan rehellisyyttä on olemassa, woi tämän mannerheimiläisen wäitteen oikeaksi 
          tunnustaa. Onko tässä maassa todellakin löytynyt niin paljon „roswoja ja roistoja” kuin tämä entisen tsaarin kätyri, joka melkein koko ikänsä Wenäjällä on tsaari-werisen kannuksia 
          kiilloittanut nyt tänne tultuaan wäittää olewan, niin että näitä wastaan on täytynyt koko kansa nostattaa aseisiin. Wastatkaa hywät ihmiset, löytyykö roistoja tässä maassa niin paljon. 
          Ei toki. Eiköhän noista „roswoista ja roistoista” olisi sittenkin selwitty sillä, että olisi pantu meidän järjestysmiehemme liikkeelle. Kyllä ne olisiwat niistä huolen pitäneet. Wäite 
          on kerrassaan typerä ja kömpelö. Nekin „walkokaartilaiset”, jotka edellisellä ja tällä wiimeksi mainitulla wäitteellä owat petetyt mannerheimiläisten riweihin, warmaankin jo uskowat, 
          että kysymyksessä on kokonaan toiset asiat, kysymyksessä tämän maan työwäenliikkeen nujertaminen, suurtehtailijain, suurmaanomistajain ja liikemiesluokan etujen woimassa pysyttäminen, 
          riistojärjestelmän pönkittäminen.</p>
        <h5>Keinoja eiwät walitse luokkaetujensa pönkittämiseksi.</h5>
        <p>Porwaristo woi käyttää luokkaetujensa säilyttämiseksi siis mitä kurjimpia keinoja. Tämäkin luokkasota on siitä selwä ja hirweä todistus. Porwariston rikolliseen luokkaetujensa 
          pönkittämiseen woimme wielä lisätä parikin tapausta. Wiikon alkupuolella kerrottiin ruotsalaisten sotawoimien saapumisesta Ahwenanmaalle. Puhuttiinpa, että Ruotsi aikoo ryöstää Suomelta 
          nuo saaret wesineen. Wirallisesti on tämä tieto kuitenkin wäitetty perättömäksi. Kun ruotsalaisille sotilaille saatiin selitettyä, että tässä maassa porwaristo aikoo tappaa työtätekewän 
          luokan ja sitä warten käypi sotaa, eikä wain „roistoja ja roswoja” wastaan, kuten näillekin sotilaille oli selitetty, kääntyiwät he pois Ahwenanmaalta. Tämä tapaus kuitenkin myös 
          edelleen meille paljastaa ne katalat wehkeilyt jota porwaristo ja sen hallitus on rohjennut kansansa selän takana ja kustannuksella harjoittaa. Luonnollisesti owat porwarit aikoneet 
          uhrata Ahwenanmaan luokkaetujensa puolesta. Ruotsille lienee annettu lupaus, että se saa maan, jos se taas puolestaan heille antaa aseellista apua, panee sotilasrankaisuretkikuntansa 
          marssimaan heille awuksi tässä maassa.</p>
        <h5>Nälällä aiottu kansa näännyttää.</h5>
        <p>Kuinka harkitusti, mutta samalla katalalla tawalla on porwaristo ja sen hallitus warustautunut kansalaissodan waralta, osottawat ne paljastukset, jotka tämän wiikon kuluessa on saatu 
          selwille. Porwaristo suunnitelmiaan tehdessään tiesi warmasti, missä köyhälistöllä tulee olemaan tukikohtansa kansalaissodan aikana. Se tiesi, että ne owat etelässä, wäkirikkaissa 
          teollisuuskeskuksissa. Heillä taas maamme pimeimmällä kolkalla, etelä-Pohjanmaalla. Tänne hallitus hilasi hywissä ajoin ulkomailta tulewat wiljalastit, selittäen että Pohjanmaalla 
          enimmän kärsitään wiljan puutetta. Sitä rehellisinä ihmisinä uskottiinkin, sillä onhan Pohjanmaan perukat huonoja wiljaseutuja. Etelässä olewista pitäjistä, jotka tiedettiin joutuwan 
          köyhälistön joukkojen taakse, puhdistettiin leipäaineet jotakuinkin tarkasti. Tästä saa nyt selityksensä se porwariston ankara wastustus elintarweaineiden kontrolloimista wastaan. 
          Lawoniuksen elintarwehallitus uutena wirastona ei nähtäwästi heti oiwaltanut hallituksen suunnitelmia, kun se puolusti koko maassa toimitettawaa elintarwetarkastusta. Tästä saa myös 
          selityksensä se etelä-pohjalaisten julmuus, kun he aikoiwat tappaa kaikki ne henkilöt, jotka uskaltaisiwat lähestyä heidän jywälaarejaan. Jos tarkastus olisi toimitettu, niin silloinhan 
          olisi huomattu Pohjanmaalla löytywän suuria elintarwewarastoja, ja silloin olisi ruwettu tutkimaan, mistä tällainen hywyys on tätä maan osaa kohdannut. Ja tutkimukset olisiwat johtaneet 
          siihen, mikä nyt wasta on selwinnyt, totuus myös selwittää senkin wiljanhaaskauksen, mikä etelä-Pohjanmaalla wiinaan tuhlattiin. Siellähän jokainen isäntä wiinakeittohommissa hääräsi 
          ilman että wiranomaiset olisiwat siihen puuttuneet. Ja wiljaahan tällaiseen puuhaan piti warsin runsaasti olla.</p>
        <p>Eilisessä lehdessä saatiin taas lukea katala teko, jota nähtäwästi Pietarissa on harjoittanut pitemmän aitaa oikein Suomen wirallinen edustaja, tosin kukistuneen hallituksen nimittämä 
          henkilö, aatelisherra von Hertzen. Tämä herra on koittanut estää, ettei leipäainetta Wenäjältä saataisi. Tämän herran katalat teot owat osaksi onnistuneet, sillä ne takawarikoimiset 
          owat nähtäwästi aikaisemminkin hänen tekojaan. Näillä on hän saanut aikaan, että leipäwiljasta kärsitään nyt Helsingissä puutetta. Työwäestö on kuitenkin jaksanut ponnistella niin 
          paljon, että rautatie Pietarista Helsinkiin on saatu liikenteelle awoinna pysymään, jota lahtarit parhaansa mukaan owat koettaneet särkeä Nyt on jo ehkä herra Hertzenin katalat puuhat 
          saatu lopetetuiksi. Työwäestö luottamusmiehineen uurastaa parhaan wointinsa mukaan. Köyhälistö ei tahdo menetellä niin katalasti kuin „walkokaartilaiset” etteiwät anna leipää edes 
          wiattomille waimoille ja lapsillekaan, joiden isän tiedetään kuuluwan työwäenjärjestöihin. Näin kataloita keinoja ei työwäestö tahdo käyttää wastustajiaan kohtaan, jotka heidän 
          alueelleen owat joutuneet. Wallankumoustamme koetamme säilyttää mahdollisimman puhtaana.</p>
        <p>Mutta tuskinpa porwaristo wieläkään kykenee näännyttämään köyhälistöä, waikka se parhaansa ja julmemmat keinonsa on pannut liikkeelle. Nälkä meillä on ollut aina wieraanamme, kehdosta 
          hautaan saakka. Me olemme nälkääkin wastaan aika hywin treenattuja, niin että me kestämme wielä nälkääkin jonkun aikaa taistellessamme yhteisen suuren asian puolesta.</p>
        <p>Me muistamme taistelumme jalouden. Tyäwäestöä wastaan taistelewalta porwarilliselta joukolta se puuttuu. Ei näet riitä yksinään se, että wedotaan isänmaallisuuteen, sillä onhan 
          työwäestökin samaan kansaan kuuluwaa, ja aina ollut walmiimpi uhraamaan isänmaansa puolesta kuin porwaristo. He tahtowat paikallaan pysyä, wieläpä painua alemmaksikin kuin olewaiset 
          olot ja kehityksen pyörä edellyttää. He tahtoisiwat heidän luokkansa etuja suojelewat lait säilyttää ja pyhänä pitää, tahtowat säilyttää lakejaan ja järjestystään, jotka eiwät estä 
          rajatonta keinottelua ja toisten hädästä rikastumista. Heidän lakinsa ei takaa kansan suurelle enemmistölle leipää, ei kunnollisia elämänehtoja, heidän järjestyksensä ei poista 
          köyhyyden, kärsimysten ja puutteiden syitä. Heidän joukoillaan ei siis woi olla kokoawaa ja innostawaa aatetta. Sitäpaitsi heidän joukkonsa muodostawat kowin erilaiset ainekset. 
          Siellähän seisoo nyt riweissä suurkapitalisti, tehtailija, suurmaanomistaja, talonpoika, liikemies, wirkamies, renkimies ja koulupoikakin. Näillä on maailmassa niin kowin erilaiset 
          maailmankatsomukset ja etujen ristiriidat, ettei niitä woi yhdistää mikään woima. Nyt wain tietämättöminä sosialismin tarkoituksista taistelewat suurkapitalistien, itseänsäkin 
          riistäwien puolesta. Mutta tämä tosiasia selwinnee wielä kerran näille petetyillekin.</p>
        <p>Työwäestölle nyt taistelussaan lähinnä kuuluu rohkeus, harkitsewaisuus, päättäwäisyys. Silloin wiemme woittoon aatteemme ja ihanteemme.</p>
        <p className="signature">Sakari.</p>
      </Article>

      <div className="interTitle">27.2.1918</div>
      <Article titleText="Punaisen Kaartin">
        <h5>esikunnille ja joukko-osastoille rautateiden warsilla.</h5>
        <p>On korjattawa kaksi epäkohtaa, joista yksi on se, että meikäläiset, takawarikoituaan tawaralähetyksiä rautateillä, owat jättäneet lähettämättä Helsinkiin Yleisesikunnalle sanotut 
          takawarikoidut tawarat ja niitä seuranneet asiapaperit, kuten rahtikirjat y.m. Toinen epäkohta on se, että meikäläiset joukot owat tarpeettomasti pidättäneet rautatiewaunuja, joko 
          sitten niissä oleilua warten tai hidastelemalla niiden tyhjentämistä.</p>
        <p>Molemmat epäkohdat tulee korjata heti.</p>
        <p>Takawarikoidessa tawaralähetyksiä, tulee ottaa tarkoin selwille mitä laatua lähetys on, mistä tulossa, mihin menossa ja sitten lähettää niin tawarat waunuineen kuin rahtikirjat ja 
          täydellinen raportti takawarikoinnistakin Yleisesikunnalle Helsinkiin. On usein sattunut, että wenäläisten tilaamia sotilastawaroita on pidätetty matkalla ja jätetty wälille. Tämä ei 
          saa jatkua. <span className="accent">Kaikki tawarat on heti tarkastettua lähetettäwä wartioituina Helsinkiin.</span></p>
        <p>Meillä on puute rautateiden liikkuwasta kalustosta. Siksi ei saa sitä tarpeettomasti kiinnittää. Saapuwat lähetykset owat heti purettawat ja waunut lähetettäwä takaisin. Ylimääräisiä 
          junia ei niinikään saa käyttää kuin äärimmäisessä tarpeessa ja silloinkin waan esikuntien luwalla.</p>
        <p>Towerit! Auttakaa wallankumousta korjaamalla huomattuja epäkohtia.</p>
        <p className="centered">Yleisesikunta.</p>
        <p className="signature">August Wesley,</p>
        <p className="centered">Yleisesikunnan päällikkö.</p>
      </Article>

      <div className="interTitle">2.3.1918</div>
      <Article titleText="Paperiherrain osanotto lahtarihommiin.">
        <h5>Werisuunnitelmia paperiteollisuustyöwäkeä wastaan.</h5>
        <p>Heti luokkasodan puhjettua woitiin todeta, että m.m. maamme paperiteollisuusherroilla oli huomattawa osansa lahtarihommissa. Huolimatta siitä että paperiteollisuusyhtiöiden wirkailijat 
          hywin runsaasti owat antautuneet auliisti lahtarien riweihin täyttääkseen werenhimoista haluaan työwäkeä wastaan, owat paperiherrain warsinaiset johtopiirit erikoisella huolella 
          salaisesti järjestelleet lahtarihommiaan ja suunnitelleet salakawalasti toimenpiteitä etupäässä paperiteollisuustyöwäkeä wastaan. Sarja salakawalasti järjestettyjä tapauksia on jo 
          todettu ja owat juuri nämä salahankkeet johtaneet surullisiin ja jyrkästi tuomittawiin tekoihin. Meillä ei ole kuitenkaan nyt tilaisuutta wetää päiwänwaloon kaikkia niitä todistettawia 
          tapauksia, joihin paperiherrat owat osoittaneet olewansa syyllisiä. Tahdomme paljastaa tässä yhden ainoan tapauksen:</p>
        <p>Koko ajan on esim. Kymiyhtiön johtopiireissä wäitetty, ettei heillä ole ollut, eikä muka tulekaan olemaan minkäänlaisia salahankkeita työwäestöä wastaan. Owatpa kauniilta näyttäwillä 
          wiattomuussyillä yrittäneet werhota kaikki katalat hankkeensa niin tyystin, että oltiin jo hywässä uskossa wakuutuksiin. Se petti kuitenkin.</p>
        <p>Eräänä päiwänä täytyi työwäen toimimiesten mennä Woikkaan paperimakasiiniin. Sieltä paperirullien wälistä löytyi 10 kiwääriä ja 700 patruunaa. Samaan aikaan karkasi paikkakunnalta 
          mainitun waraston hoitaja N. Lahtinen. Sittemmin on muilta paikoin yhtiön alueilta löydetty browninkeja, kiwäärejä y.m.</p>
        <p>Tämän yhteydessä mainittakoon, että Woikkaan työnjohtajilla oli ennen wallankumousta jaettu kullekin browningit sekä patruunat ja määrätty tehdasjohtopiirin taholta, että heidän on 
          oltawa walmiit 8-miehisinä asestettuina joukkoina työwäkeä wastaan sinä hetkenä, kuin määräys annetaan. Näitä rewolwereja luowuttawat työnjohtajat nyt pois ja ihmettelewät kuinka 
          kaukonäköisesti herrat oliwat suunnitelleet hyökkäyksen työwäestöä wastaan. Joka päiwä ilmenee uusia todistuksia niistä salakawalista murhasuunnitteluista, joiden wehkeilyssä 
          paperiherrat owat huomattawaa osaa näytelleet.</p>
      </Article>

      <div className="interTitle">3.3.1918</div>
      <Image className="centeredImage" src={img6} alt="Kuva 6"/>
      <Article titleText="Ylipäällikön tiedonanto.">
        <p>Olemme kuukauden taistelleet menestyksellä hywin asestautunutta lahtarikaartia wastaan, jonka johdossa owat opinkäyneet upseerit. Tänä aikana on meidän täytynyt samalla koota 
          joukkojamme, hankkia niille aseita ja opettaa heitä sotatoimiin. Tehtäwä on ollut erittäin waikeata, mutta kuitenkin yhteisponnistuksemme ja järjestyneen työwäen wallankumouksellinen 
          innostus sekä uhrautuwaisuus owat auttaneet woittamaan kaikki waikeudet.</p>
        <p>Nyt woimme todeta, että meillä on aseita ja ampumawaroja niin paljon, että woimme työwäen sotakuntoisen osan asestaa riittäwästi; samoin meillä nyt on muutkin taisteluwälineemme siinä 
          kunnossa, että pystymme menestyksellä suoriutumaan taistelussa.</p>
        <p>Kulunut taistelukuukausi on kunnolla käytetty ja kun nyt toinen kuukausi alkaa, niin seisoo wallankumouksellinen Punainen Kaartimme warmana rintamalla, joka ulottuu aina Pohjanlahdesta 
          Laatokkaan saakka. Tämän tawattoman pitkän rintaman selkäpuoli on täydellisesti puhdistettu aktiiwisesti toimiwista wihollisista, sitten kun kuluneen wiikon aikana lopullisesti, pitkän 
          taistelun jälkeen antautuiwat Siuntion ja Kirkkonummen taistelukentillä kukistuneet walkokaartijoukot, joiden jäännökset aseista riisuttuina tuotiin sotawankeina pääkaupunkiimme.</p>
        <p>Rintamamme länsiosassa, aina Kuhmoisiin saakka Päijänteen rantamilla, owat urhoolliset joukkomme, joista erikoisesti mainittakoon Pietarin suomalainen Punainen Kaarti, Helsingin 
          A-komppania ja Turun joukot, tunkeutuneet Merikarwialle ja Ikaalisten yläpuolelle, sekä Ruowedelle. Wilppulan seutuwilla on joukkomme uljaasti wihollisen hyökkäykset torjunut. 
          Keskisellä rintamalla kehittywät liikkeemme warmasti. Heinolassa saatu woittomme oli ankara isku wastustajalle. Itäisen rintaman sitkeät taistelut Antrean omistamisesta lähenewät 
          loppuaan, lahtareiden tullessa työnnetyksi Wuoksen pohjoisrannalle.</p>
        <p>Meidän hyökkäyksemme toisaalla ja sitkeä puolustuksemme toisaalla on saattanut lahtarikenraali Mannerheimin ahtaalle. Kun ei Punainen Kaartimme ollutkaan „paljasta ilmaa”, kuten 
          entinen senaattori Castrén wakuutteli wallankumouksen aattopäiwinä, on wastawallankumouksellisten täytynyt turwautua häpeällisiinkin keinoihin. Rintaman taakse jääneet työläisjärjestöt 
          on Mannerheim hajoittanut, työwäen wanginnut. Elintarpeet on se koonnut lahtarijoukkojen elättämiseksi yhtään wälittämättä siitä, jääkö paikalliselle työwäelle ja talonpojille mitään. 
          Kun sillä ei ole ollut suorittaa maksua anastamastaan tawarasta, on siellä pakko-otto ilman maksua tullut yleiseksi ja talonpojat täten joutuneet lahtareiden ryöstettäwäksi. 
          Tyydyttääksensä rahan tarwetta on lahtarihallitus Waasassa alkanut painattaa omaa rahaa, jota tyrkytetään ihmisille pakolla, rahaa, jolla ei ole kerrassaan mitään arwoa.</p>
        <p>Mutta kataluudessaan wastawallankumoukselliset eiwät ole tyytyneet tähän. Heiltä puuttuu miehiä, taistelijoita. Niitä he parhaillaan koettawat hankkia pakkokeinoin. Yhdessä 
          Mannerheimin kanssa owat muutamat Waasaan paenneet entisen senaatin herrat päättäneet julistaa pakollisen asewelwollisuuden niillä seuduilla, jotka owat heidän hallussa. Pakolla siis 
          aiotaan asestaa työläistowerimme taistelemaan Punakaartiamme wastaan. Me emme tässä järjettömässä teossa woi nähdä muuta kuin täydellisen todistuksen siitä, miten äärettömän moraaliton 
          ja heikko on wastustajamme. Me odotamme, että tämä Mannerheimin pakollinen asewelwollisuus on johtawa yleiseen työwäenluokan nousuun mannerheimiläisten selän takana, asekuntoisen wäen 
          ponnistuksiin päästä meidän puolellemme, jossa heidät asestetaan ja opetetaan kykenewiksi puolustamaan wallankumousta ja työwäenluokan etuja.</p>
        <p>Woidakseen ylläpitää työwäen wallankumouksen wastustajissa toiwoa asiain kehityksen muuttumisesta, syöttäwät lahtarilehdet, missä niillä on mahdollisuus ilmestyä, mitä törkeimpiä 
          walheita. Tawallisesti niissä kerrotaan taisteluista, joita ei ole ollutkaan ja suurista Punakaartilaisten tappioista, joista me emme mitään tiedä. Monastikohan tämän kirjoittajakin 
          esim. on kerrottu kuolleeksi? Rintamamme selkäpuolella, missä eiwät woi julkisesti syöttää walheitaan, lewittäwät he ilkeitä parjauksiaan muuten monistettuna, monasti niin päättömässä 
          muodossa, että ne hukkuwat omaan mahdottomuuteensa. Ulkomaille he owat myöskin suunnanneet walhewirtansa, koettaen kaikella tawalla halwentaa jaloa taisteluamme wapautemme puolesta.</p>
        <p>Ulkomaalaiset towerimme, jotka owat käyneet luonamme, wiewät kuitenkin todelliset tiedot ulkomaille ja niin sielläkin meitä wastaan työnnetty loka tulee heitetyksi herrain omille 
          silmille.</p>
        <p>Me työläiset, jotka olemme olleet pakoitetut ase kädessä puolustamaan oikeuttamme, ja jotka tahdomme työwäenluokalle hankkia wapauden kapitalistisen riistojärjestelmän kukistamalla, 
          emme käytä aseenamme raakuutta, emmekä kansan oikeuden tunnetta loukkaawia keinoja. Meidän asiamme on jalo ja korkea. Sen ajamisessa emme tarwitse walhetta. Me seisomme pää pystyssä, 
          ylpeinä siitä, että saamme werellämme osoittaa rakkauttamme työwäenluokan wapautta kohtaan.</p>
        <p className="centered">Helsinki, 3 p:nä maalisk. 1918.</p>
        <p className="signature">Eero Haapalainen,</p>
        <p className="centered">ylipäällikkö.</p>
      </Article>

      <div className="interTitle">5.3.1918</div>
      <Image className="centeredImage" src={img7} alt="Kuva 7"/>

      <div className="interTitle">7.3.1918</div>
      <Article titleText="Määräys.">
        <p>Nyt kun Wenäjän ja Suomen sosialististen tasawaltain kesken on tehty sopimus, jonka mukaan Suomen Sosialistinen Työwäen tasawalta on sitoutunut olemaan millään tawalla estämättä Wenäjän 
          aseellisten maa- ja merisotawoimain sekä maa- ja merisotilaswirastoihin kuuluwain laitosten pikaista poissiirtämistä Suomen alueelta,</p>
        <p>kielletään tästedes kaikkia Suomen wiranomaisia ja Punaisen Kaartin osastoja mainittua poissiirtämistä millään tawalla estämästä.</p>
        <p>Älköön myöskään matkalle lähtewältä tai menomatkalla olewilta wenäläisen sotawäen osastoilta Punaisen Kaartin osastot poisottako heidän omaisuuttaan tahi Wenäjän waltion omaisuutta, 
          jota niiden on lupa maasta wiedä. Erityisten wapaaehtoisten sopimusten perusteella on tapahtuwa Wenäjän waltion täällä olewan irtaimen omaisuuden luowutus, mikäli Suomen tasawalta ja 
          Punainen Kaarti sitä tarwitsee.</p>
        <p>Henkilöt, jotka wenäläisiltä sotilashenkilöiltä ostawat omaisuutta, jota näiden ei ole lupa myydä, saatetaan ankaraan edeswastuuseen.</p>
        <p className="centered">Helsingissä 6 päiwänä maaliskuuta 1918.</p>
        <p className="centered">Suomen Kansanwaltuuskunnan puolesta:</p>
        <p className="centered">Puheenjohtaja:</p>
        <p className="signature">Kullerwo Manner.</p>
        <br />
        <p className="centered">Sisäasiain waltuutettu ja Suomen Punaisen kaartin ylipäällikkö: </p>
        <p className="signature">Eero Haapalainen.</p>
        <br />
        <p className="centered">Sihteeri: <span className="signature">Yrjö K. Laine.</span></p>
      </Article>

      <div className="interTitle">8.3.1918</div>
      <Image className="centeredImage" src={img8} alt="Kuva 8"/>

      <div className="interTitle">11.3.1918</div>
      <Article titleText="Punaisen Kaartin kaikille osastoille.">
        <p>Meille on ilmoitettu, että Punainen Kaarti on ottanut huostaansa Suomen Tasawallan Rautateille kuuluwia huoneustoja ilman mitään neuwotteluja asianomaisten kanssa ja toimittamatta mitään 
          luetteloimista.</p>
        <p>Koska kuitenkin Kaarti on tiliwelwollinen näistäkin huoneustoista, jos kohta ne owatkin waltion omaisuutta, niin kehoitamme Kaartin osastoja Rautateitten huoneustoja wälttämättömästi 
          tarwitessaan kääntymään asiassa asianomaisten rautatiekomiteoitten puoleen. Kun luowutus tapahtuu, on aina toimitettawa tarkka luetteloiminen, sallimalla rautateitten edustajalle 
          walwontaoikeus luetteloimistilaisuudessa.</p>
        <p>Samalla huomautamme, ettei Kaartilla ole oikeutta ilman minkäänlaista tilitystä käyttää hywäkseen Rautateitten warastoja.</p>
        <p>Rautateitten warastoista tawaroita ottaessaan on Punaisen Kaartin niistä jätettäwä kuitti asianomoiselle warastonhoitajalle.</p>
        <p className="centered">Helsingissä, 10 p. maalisk. 1918.</p>
        <p className="centered">Suomen Kansanwaltuuskunnan Intendenttilaitos.</p>
        <p className="signature">Ilmari Kotijärwi.<br />J. E. Järwisalo.</p>
      </Article>

      <div className="interTitle">12.3.1918</div>
      <Article titleText="Raakalaisohjelma.">
        <h5>Mustasotnialaiskenraali Mannerheimia ja herra Heikki Renwallia hastateltu.</h5>
        <p>Ruotsalaisen sanomalehden Dagens Nyheterin ja Tanskan Politikenin yhteinen kirjeenwaihtaja, toimitt. Nils Hasager, on Seinäjoella haastatellut lahtarien päällikköä, entisen tsaarin 
          entistä kätyriä, kenr. Mannerheimia ja „Suomen hallituksen” wäliaikaisena puheenjohtajana esiintywää entistä senaattori Heikki Renwallia ja kertoo hän haastattelusta seuraawaa:</p>
        <p>Myöhäisenä iltahetkenä saawuin kenraali Mannerheimin pääkortteeriin Seinäjoella. Ylipäällikkö piti asuntoaan siwuraiteille siirretyssä junassa, jossa muuan makuuwaunu oli warattu 
          esikunnan asuttawaksi. Waunun eteinen oli tungokseen asti täynnä puhelewia upseereja ja siwiilimiehiä. Minut wietiin owelle, joka awattiin äkkiä ilmoituksella „Kenraali Mannerheim” ja 
          niin seisoi wastassani muhkea siwiilipukuinen herrasmies, etsimäni kenraali.</p>
        <p>Millä woin palwella? kysyi hän tarjotessaan paikan laskupöydän ääressä joka oli täynnä karttoja ja muistiinpanoja.</p>
        <p>Tein kenraalille seuraawat kysymykset: Mikä on päämääränne? Milloin luulette ratkaisun tapahtuwan? Millaiseksi tulewat olot maassa muodostumaan ratkaisun tapahduttua? Woidaanko 
          taistelun päätyttyä rakentaa yhdistäwää siltaa nyt taistelewain kansalaisryhmien wälille?</p>
        <p>Selwästi ja täsmällisesti wastasi kenraali:</p>
        <p>Ensiksikin. Päämaalimme on wapauttaa Suomi anarkiasta. Me tahdomme asettaa padon bolshewismin hyökyaallolle, joka nyt wyöryy maamme yli temmaten sen wallankumouksen kuohuntaan ja jossa 
          anarkia wiettää werisiä orgioitaan. Me tahdomme asettaa sen eteen esteitä suojellaksemme maamme siwistystä ja Suomen wapaata tulewaisuutta. Sitten seuraawa kysymys. Siihen wastatakseen 
          tulisi olla profeetta ja minä en ole mikään ennustaja. Mutta me woitamme. Taistelu woi kestää kauan senwuoksi ettei meillä ole aseita ja me odotamme jännityksellä apua, jota uskomme 
          Europan lähettäwän. Sillä Europan täytyy ymmärtää, että sen edut owat läheisesti sidotut Suomen taisteluun. Jos anarkia murtaa padon, jota me koetamme sen tielle rakentaa, tulee 
          weripunainen wirta jatkamaan matkaansa länteenpäin. Me tarwitsemme apua ja sitä on meidän saatawa kokonaisina wapaaehtoisina joukko-osastoina, aseina, kiwääreinä ja kanuunoina, jotka me 
          itse maksamme. Meidän täytyy saada joukkoja, koska wieraat upseerit eiwät woi johtaa suomalaisia kieliwaikeuksien takia. Meidän täytyy saada aseita senwuoksi, ettemme punaisten lailla 
          omaa wenäläisten warastoja.</p>
        <p>Kysymykseen numero kolme, sodan jälkeisistä olosuhteista, on waikea wastata. Mutta jos ratkaisu riippuisi minusta, niin sanoisin, etteiwät mitkään sillat ole mahdollisia. Anarkistit 
          owat itse räjäyttäneet kaikki sillat. He owat karkoittaneet laillisen hallituksen, he owat estäneet waltiopäiwäin toiminnan, wanginneet sen miehiä. He owat Suomen syösseet sisäiseen 
          sotaan. Sosialidemokraatit owat wähemmistö, joka pelolla on yrittänyt hallita enemmistöä. Tällaisen jälkeen eiwät sillat enää ole mahdollisia. Ainoastaan yhdestä asiasta woidaan puhua ja 
          se on rangaistus.<br />— Ja rangaistus? kysyin minä.<br />— Se on lain määräämä. Wallankumoukselliset owat tehneet itsensä syyllisiksi kapinaan ja maanpetokseen ja rangaistus siitä on 
          kuolema. Tuota rangaistusta en minä määrää. Sen tekee laki ja sitä on noudatettawa.</p>
        <p>Kenraali Mannerheim pyytää muutaman herran wiemään minut senaattori Renwallin luo wiereiseen waunuun ja minä teen tälle kysymyksen hallituksen työskentelystä. Hän wastaa:</p>
        <p>Kaikki säännöllinen hallitustyö on seisauksissa. Kaikki woimat owat keskitetyt anarkian musertamiseen. Meidän aikomuksenamme on kuitenkin niin pian kuin mahdollista koettaa saada 
          waltiopäiwiä koolle tänne Pohjois-Suomeen ja minä luulen meidän siinä onnistuwan. Meitä on neljä hallituswaltaista senaattoria Waasassa. Muiden oleskelupaikka ei ole minulle täysin 
          tiedossa, mutta Swinhufwud nyttemmin kuitenkin on täydessä turwassa. Mutta saanko kysyä, milloin saamme Suomelle apua? Pohjolan on ymmärrettäwä että pohjoisten kansojen on oman etunsa 
          tähden meitä autettawa. Sillä jos meidän wastarintamme anarkiaan nähden epäonnistuu, niin on ensinnä Ruotsi ja sitten seuraawat maat saawa kokea bolshewikkisen kapinan, joka nyt 
          parhaillaan riehuu Suomessa.</p>
        <p>— Millaisiksi tulewat olot muodostumaan sodan jälkeen tässä maassa? kysyn minä.<br />— Tällä hetkellä on sitä waikea sanoa. Kukaan ei woi sanoa mitä tulewaisuus tuo tullessaan, mutta 
          kuitenkin woin sanoa, että kaikki kapinaan osalliset saawat rangaistuksensa. Heidät tuomitaan maanpetoksesta. Mahdollisesti myöhemmin jollekin osalle annetaan armahdus, mutta wain sillä 
          edellytyksellä, että heiltä riistetään kaikki kansalaisoikeudet, joten he eiwät enää saa ottaa osaa maan poliittiseen elämään. Heidät muutetaan paarialuokaksi.<br />— Woiko amnestia 
          koskea myöskin johtajia?<br />— Ei missään tapauksessa. Heitä rangaistaan lain kaikella ankaruudella. He eiwät ole nousseet kapinaan tyrannillista hallitsijaa wastaan waan laillista 
          eduskuntaa wastaan, jolla Suomessa on korkein walta. Sellaisesta rikoksesta on olemassa wain yksi rangaistus: hirttäminen. En näe mitään muuta mahdollisuutta. Heidän on hengellään 
          hywitettäwä aiheuttamansa ihmishenkien hukkaaminen.</p>
        <p>Nyt siis jo herrat rohkenewat oikein reilusti paljastaa sisunsa ja ne mustat tarkotukset, jotka heillä on ollut mielessä jo silloin, kun sotaansa suuressa salaisuudessa walmisteliwat.</p>
        <p>Tuollaisen raakalaisohjelman luettuaan ei enää kukaan ihmettele, jos ulkomailla onkin ruwennut yhtäkkiä inhoittamaan Suomen porwariston werenhimoisuus.</p>
        <p>Aluksi onnistuiwat wastustajamme walhettelemalla taistelunsa Suomen itsenäisyyssodaksi ja syöttämällä mitä perättömimpiä juttuja wallankumouksellisen köyhälistön petomaisuuksista, 
          saawuttaa yleinen myötätunto puolelleen. Yksityisiä tuomittawia esiintymisiä ensimäisen kuohunnan hetkellä walitettawasti työläistenkin wähemmän kehittyneiden ainesten taholta tapahtui 
          ja sellaiset raakalaisteot aina hyödyttäwät työwäen asian wastustajia, mutta suuret soukot ja wallonkumouksen johto tuomitsevat ne teot ankarasti köyhälistön wapaustaistelua 
          wahingoittawina tekoina.</p>
        <p>Waikkakin siis wastustajamme paljastawat petomaisuutensa, ei se muuta eikä saa muuttaa menettelytapojamme, joiden täytyy aina olla sopusoinnussa siweellisyyden ja korkeimpainkin 
          humanisten waatimusten kanssa. Me emme pyri painamaan ketään alemmalle elämisen tasolle kuin itse olemme. Päinwastoin me pyrimme nostamaan kaikki sellaiseen asemaan, että jokainen 
          kansalainen tasa-arwoisesti woi nauttia elämän niin aineellisia kuin henkisiäkin arwoja.</p>
        <p>Elättäjänsä ja rikkauksiensa luojat tahtoisiwat Suomen porwarit muuttaa paariakastiksi, kaikkien yhteiskunnallisten ja ihmisoikeuksien ulkopuolella olewaksi onnettomain joukoksi. Ja 
          näinkin armeliaisesti he menettelisiwät wain sen osan kanssa, jonka he säästäisiwät kuolemalta wälttämättömänä uusien rikkauksien luojana ja heidän loiselämänsä ylläpitäjänä.</p>
        <p>Me taas emme luo paarialuokkaa yhteiskuntaan. Päinwastoin me poistamme entisenkin sorrettujen joukon kohottamalla sen tasa-arwoiseksi parempiosaisten kanssa.</p>
        <p>Siinä on ero meidän ja porwariston taistelulla.</p>
        <p>Mutta me waadimme samalla, että elämänarwoihin nähden tasa-arwoisuuden astuessa woimaan se on toteutettawa myöskin työnteon welwollisuuteen nähden. Kenelläkään ei ole oikeutta 
          ylellisyyteen toimittamatta mitään. Wielä wähemmin silloin, kun tämä tapahtuu kanssaihmisten elämän kustannuksella.</p>
        <p>Näin on suuri ero päämäärissä ja niin on myöskin keinoissa.</p>
      </Article>

      <div className="interTitle">14.3.1918</div>
      <Image className="centeredImage" src={img9} alt="Kuva 9"/>

      <div className="interTitle">16.3.1918</div>
      <Article titleText="„Työmiehen” ilmestymisen waikeudet.">
        <h5>Paperinsaanti yhä rempallaan.</h5>
        <p>Tänään taas täytyy lehtemme ilmestyä waillinaisena, sillä se ei wieläkään ole saanut paperia, waikka säännöllisestä paperinsaannista on annettu lupaus. Meille on kyllä ilmoitettu, 
          että Kymintehtaalta olisi tällä wiikolla lastattu lehdellemme tulemaan neljä waunulastia paperia. Se on kuitenkin warmaa että sitä ei ole ainakaan Helsinkiin saapunut.</p>
      </Article>
      <Article titleText="Tihutyö.">
        <h5>Tohtori Oskari Rosenqwistin murha.</h5>
        <p>Wiime tiistaina jo kerroimme, että edellisenä yönä oliwat miliisit löytäneet Neitsytpolku 8:n kohdalla werissään olewan miehen ruumiin. Ruumis sittemmin todettiin murhatuksi 
          Ruotsalaisen Kauppakorkeakoulun johtaja, fil. tri. Osk. Rosenqwistiksi.</p>
        <p>Murha on tapahtunut seuraawissa olosuhteissa: klo 12 aikaan yöllä oli R:n luo saapunut 15 miestä, useimmat aseistettuja ja punaisilla merkeillä warustettuja. Mitään papereita 
          esittämättä oliwat he waatineet tri R:n mukaansa. Myöhemmin yöllä oli yllämainitun paikan kohdalla nähty liikkuwan auto ja sen jälkeen oli ruumis, jota oli ammuttu, klo 3:en 
          seuduissa siitä löydetty.</p>
        <p>Olemme nämä tiedot saaneet Helsingin Punasen Kaartin tiedusteluosastosta, joka on asiaa tutkinut, mutta, sikäli kuin sieltä ilmoitettiin, ilman mitään tulosta.</p>
        <p>Tällaisten törkeiden tihutöiden paljastaminen ja syyllisten saattaminen asianmukaiseen rangaistukseen on kuitenkin wälttämätöntä. Onkin senwuoksi mitä toiwottawinta, että 
          tiedusteluosasto saa niin punakaartilaisilta kuin muiltakin tarwittawaa walaistusta tällaisista wallankumouksen häpäisijöistä, lurjuksista, jotka yrittäwät tahrata köyhälistön ylewän 
          asian puolesta aseisiin tarttuneiden wallankumouksen sotilaiden mainetta.</p>
      </Article>
      <Image className="centeredImage" src={img10} alt="Kuva 10"/>

      <div className="interTitle">19.3.1918</div>
      <Article titleText="Suomen Punaselle Kaartille.">
        <h5>Määräys.</h5>
        <p>Yleisesikunnan tietoon on tullut, että joissakin paikoin Karjalassa olisi Suomen Punasen Kaartin riweihin otettu wäkisin miehiä. Näissä tiedotuksissa on wain hitunen totta. Mutta 
          huolimatta siitä, uudistamme wielä kerran määräyksen:</p>
        <p className="bold">että niillä alueilla, joissa Suomen Punanen Kaarti toimii, ei ole wallalla, eikä saa olla, pakollinen asewelwollisuus. Jos kuitenkin olisi miehiä wäkisin otettu 
          armeijaamme, tuomitaan sellainen teko annettujen asetusten wastaisena ja määrätään, että siten riweihimme kiitetyt henkilöt heti wapautetaan kaartin riweistä. Tämä ei tarkoita 
          yhteiskunnallista työwelwollisuutta ja siitä wapauttamista.</p>
        <p className="centered">Helsinki, 18. 3. 1918.</p>
        <p className="signature">August Wesley.</p>
        <p className="centered">S.P.K. Yleisesikunnan Päällikkö.</p>
      </Article>
      <Image className="centeredImage" src={img11} alt="Kuva 11"/>

      <div className="interTitle">20.3.1918</div>
      <Image className="centeredImage" src={img12} alt="Kuva 12"/>

      <div className="interTitle">23.3.1918</div>
      <Article titleText="Wastalause.">
        <p>On kerrassaan mahdotonta kauwemmin waieta, pidättämällä wastalausetta, joka oikeuden pyhyyden nimessä on lausuttawa julki.</p>
        <p>Itseni ja tuhansien kansalaisteni puolesta mitä jyrkimmin lausun wastalauseen sitä epäinhimillistä ja petomaista julmuutta wastaan, jota Mannerheimin joukot harjoittawat, 
          salakawalasti sekä julkiampuen punasen ristin sisaria ja ambulanssi-osaston henkilöitä, käyttämällä myrkyllisiä kuulia, rääkäten ja silpoen sekä kiduttaen, tappaen wangituita 
          punakaartilaisia kuin myös heidän awuttomia omaisiaan, naisia ja lapsia, etupäässä järjestöön kuuluwia. Wäkiwalloin pakoittaa rauhallisia puolueettomia kansalaisia armeiansa riweihin, 
          joka sotii kansainwälisiä sodankäyntitapoja wastaan.</p>
        <p>Muutamat ulkowaltojen edustajat owat panneet wastalauseensa ja moittineet punakaartia epäinhimillisyydestä, — niin! Kukas heistä on wielä asettanut tikkua ristiin estääkseen 
          Mannerheimiläisten julmuuksia?</p>
        <p>Rohkenemme puolestamme huomauttaa näille eri waltain edustajille että heidän menettelynsä on suoraa puolueellisuutta, jonka wuoksi waadimme, että jos he todellakin oikeuden tukemaa 
          puolueettomuutta kannattawat niin maansa edustajina, jos se heille on niin kauniin asian antanut todella läpiajettawaksi, itse ensin oppisiwat puolueettomuuden tuntemaa inhimillisyyttä 
          ja sitte sanoisiwat Mannerheimereille tehokkaan wastalauseensa niitä petomaisia tekoja wastaan, joita ne harjoittawat.</p>
      </Article>
      <Article titleText="Nousewa kosto.">
        <p>Kukapa nykyään joutaisi kiinnittämään huomiotaan noihin köyhälistökortteleiden pieniin ihmiswesoihin, jotka ennen leikkiwät talojen likaisilla takapihoilla ja katuwierustoilla. Mutta 
          jos hetkiseksi pysähtyy wilkasemaan heidän leikkejään nyt, niin huomaapa niiden muuttuneen ja huomaapa samalla myöskin, miten tarkasti nämä wesat seuraawat aikaansa ja mikä älykkyys 
          heissä ilmenee.</p>
        <p>Miten tärkeän näköisenä he lähtewätkään aina aamupäiwisin liikkeelle, pojat kiireestä kantapäähän asti asestettuina puupyssyillä ja miekoilla, tytöt puettuina laupeudensisariksi.</p>
        <p>Tällä sotajoukolla on omat wirastonsa ja laitoksensa, mitä monipuolisimpine koneistoineen, aina arsenaalista ambulanssiin asti. Ja erittäin tärkeää osaa näytteleekin ambulanssi, sen 
          huomaa jo näistä laupeudensisarista, kun he täysissä wirkapukeissa rientäwät taistelewien joukkojen mukana.</p>
        <p>Taistelutantereina owat esim. Sörnäisissä autiot kalliot ja läheiset metsät ja taistellaan siellä, milloin Suomen itsenäisyyden, milloin sosialistihallituksen puolesta. Melkein aina 
          owat owat kumminkin wastakkain punakaartilaiset ja lahtarit. Lahtareiksi walitaan joukosta aina sellaiset, joista toiset eiwät oikein pidä, ja sitten käywät joukot wastakkain. Lahtarit 
          koettawat luonnollisesti rimpuilla minkä jaksawat, mutta useimmassa tapauksessa saawat he selkäänsä että roikuu. Joskus käy niin, että joukot owat tasawäkiset ja silloin tarwitaan joku 
          puolueeton wälittäjä, mutta eipä siihenkään kelpaa kaikki.</p>
        <p>Eräässäkin tappelussa, jossa punaiset owat tapelleet Suomen itsenäisyyden puolesta saksalaisia, ruotsalaisia ja lahtareita wastaan, ei ole tullut lopullista ratkaisua ja 
          tarjoutuu sitten waltio jos toinenkin wälittäjäksi mutta ketään ei kelwoteta. Wiimein tarjoutuu Belgia ja se hywäksytään yksimielisesti.</p>
        <p>Mikä asiain ymmärtämys! Pieni Belgia, jonka suurwallat owat maan tasalle ruhjoneet, se, se wain ymmärtää sorretun Suomen kohtaloa.</p>
        <p>Eräässä toisessa tappelussa taas, jossa punaiset ja lahtarit tappelewat wastakkain, joku suuri pojanjolli ei tiedä mihin joukkoon menisi, liehuu wain aina sillä puolella, joka näyttää 
          olewan woitolla. Eräs punaisten pikkusimpia kimpaantuu silloin, hyökkää epäwarman kimppuun ja kowenee: „Mene tiitä tenkin pikkupolwali, kun tiinä haihattelet, etkä tiedä mihin joukkoon 
          tinä kuulut”.</p>
        <p>Eräässä tappelussa taas on woitettu kaikki Euroopan lahtarit, sosialistit owat aseman herroina ja lahtarit owat paenneet Kiinaan. Kiinasta kumminkin lahtarit hyökkääwät kiinalaisten 
          awustamana, siinäkös tappelu, jossa kiinalaiset niinkuin lahtaritkin saawat wiimeisen läksynsä.</p>
        <p>Taistelutantereelta korjaawat laupeudensiskot kuolleet ja haawoittuneet ja ensiapu annetaan kenttäsairaaloissa. Sitten tuodaan sairaat kaupunkiin. Eräänkin talon takapihalla on pieni 
          loukko, jota käytetään sairaalana ja täällä tapaa eräs talossa asuwa äiti poikansa paareilla näköjään aiwan hengettömänä. Aidille hätä käteen: Oletko sinä loukkaantunut? hätäilee hän.</p>
        <p>Ei wastausta.</p>
        <p>— No herranen aika! äiti hätääntyy yhä enemmän. Etkö sinä woi edes puhua? Hän alkaa rawistella kuollutta. Wihdoin kiiwastuu kuollut ja kiwahtaa: „Enhän minä woi puhua, kun minä olen 
          myrkytetty. Lahtarit owat ampuneet myrkytetyllä kuulalla.”</p>
        <p>Tällaisia tapauksia, joissa näiden pienten taistelijain äly ja huomiokyky tulee ilmi, woisi kertoa paljonkin, mutta ehkäpä tästäkin saa jo pienen kuwan siitä, miten tämä nousewa kosto 
          elää ajassa.</p>
        <p>Nämä owat wain lasten leikkejä, mutta nämä leikkijät warttuwat wielä. Ja waikkapa niinkin onnettomasti käwisi, että kotoiset pyöwelit, yhdessä ulkoisten pyöwelien kanssa, woisiwatkin, 
          ohjelmansa mukaan, wetää näiden leikkijöiden isät, nykyiset taistelijat hirsipuuhun, niin näitä pieniä wesoja eiwät mustimmatkaan pyöwelit woi hirttää ja nämä tulewat muistamaan 
          isäinsä hirsipuuteloituksen. Kun he tämän muistawat ja heidän leikkinsä kerran muuttuwat tosiksi, niin silloin ei ole leikinpäiwä hirttäjäpyöweleillä.</p>
        <p className="signature">Järjestöpoika.</p>
      </Article>

      <div className="interTitle">26.3.1918</div>
      <Image className="centeredImage" src={img13} alt="Kuva 13"/>

      <div className="interTitle">31.3.1918</div>
      <Article titleText="Rintaman tältä ja tuoltapuolen.">
        <p>Kaksi kuukautta on jo kulunut siitä kun luokkawastakohdat kärjistyiwät, sowittelun mahdollisuudet porwaristo hyljäsi ja ajoi toiminnallaan peloittawaa wauhtia awoimeen 
          yhteentörmäykseen, aseelliseen kansalaissotaan. Ja werisesti onkin sitten kahden kuukauden ajan tätä luokkasotaa käyty.</p>
        <p>Sen ohella kun työwäen joukot owat taistelleet, sen ohella on työwäestö ikäänkuin maasta polkenut armeiaansa. Tältä taholta katsellen näytti alkutoiweet warsin wähäisiltä. Silloin 
          kun jo porwariston walmiit aseelliset joukot wyörywät pohjoisesta etelää kohti, samosi Karjalaan ja Wiipuriin päin, silloin ryhtyi työwäestö luomaan punaista armeiaansa. Aseita alussa 
          ei ollut kuin nimeksi, joku sata kaikkiaan, siroteltuna sinne tänne. Miehet wailla kaikkia pukimia, joita talvisodassa olisi tarwittu, riittäwän rawinnon puutteessa ja 
          nälkiinnytettyjä, ja loppujen lopuksi harjaantumattomia aseelliseen toimintaan. Mutta tällaisen asiaintilan wallitessa, joka suoraan sanoen ei suinkaan ollut toiweita herättäwä, nousi 
          sittenkin punainen armeia, kokosi woimiaan ja kykeni pitämään puoliaan, jopa rynnistämäänkin siellä täällä hyvin harjoitettuja porwariston sotawoimia ja ammattitaitoista johtoa 
          wastaan. Woitokastakin on ollut kulku. Jopa nousi punaista armeiaa kauas ylös pohjoseenkin, aiwan wihollisen warustuksien etulinjoille saakka Wilppulassa. Tämä rohkea liike ei 
          kuitenkaan wielä onnistunut, sillä warustelut — kuten näitä asioita tuntewat sanowat — ei oltu wielä loppuunsuoritettu. Ja seuraus siitä olikin, että joukkomme oliwat pakotetut 
          jättämään askel askeleelta walloittamansa alueet ja perääntymään. Mutta — sanovat sota-asioita tuntewat edelleen — sikäli kun työmiehistä kokoonpannut joukot ja työmiehistä kohonneet 
          päälliköt saawat sotakokemusta, oppivat käsittämään sotilaallisen kurin ja järjestyksen wälttämättömyyden, sikäli kypsyy armeia käsittämään tehtäwänsä ja sen wälttämättömyyden, jonka 
          kowan kohtalon alaiseksi työwäenluokka on joutunut. Sen jälkeen woidaan hellittää sitä rautaista otetta, jonka porwaristo työwäenluokan ympärille on puristanut.</p>
        <p>Pitkälliseksi on käynyt luokkasota. Ja enteet eiwät ainakaan wielä näytä wiittaawan siihen, että tämä tuhoisa kansallissota saataisiin edes lähiwiikkoina päättymään. Ei ole toteutunut 
          porwariston laskelmat, että „punaroswojen” rauhotusretki päättyy wain muutaman wiikon marssin jälkeen. Tähän luottaen ja walheelliseen kiihoitukseen perustuen lähtiwät talonpojatkin 
          mukaan, mutta jotka nyt kewätauringon kohotessa yhä korkeammalle ja pälwipaikkojen ilmestyessä maahan, käywät yhä tuskaisemmiksi odotuksessaan. Eri puolilta maata wakuutetaankin, että 
          eripuraisuus talonpoikain ja mannerheimiläisten herrain keskuudessa käy yhä ilmeisemmäksi. Sama käy myös selwille rintamantakaisista lehdistä, samoinkuin sekin, että nälänhätä ja 
          pakollinen asewelwollisuus kaswattaa yhä yleisempää tyytymättömyyttä. Mutta ehkäpä nämä seikat yhteisesti rupeawat osottamaan, että talonpojille samoinkuin koko maallekin olisi 
          edullisempaa ryhtyä miettimään toisia ratkaisukeinoja, toisia kuin mitä owat tykit ja kiwäärit.</p>
        <h5>Nälkä</h5>
        <p>on waarallinen wastustaja, minne se wain pääsee pesiytymään. Kehuttava asema ei suinkaan ole ollut täällä etelänpuolella, täällä punaisen armeian selän takana, sillä porwaristo 
          warustautuessaan luokkasotaan, järjesti jo etukäteen rawitsemiskysymyksen niin, että nälkä olisi täällä ensiksi tullut wierailemaan ja tekemään yhtä „puhdasta jälkeä” kuin tekee 
          maaliin osunut kranaatti. Hywissä ajoissahan siirrettiin elintarwewarastoja etelä-Pohjanmaalle, wieläpä ulkomailtakin tulewa wilja kuletettiin lahtarien pesäpaikoille. Samoin 
          porwariston edustajat koettiwat kaiken woitawansa tehdä, että Wenäjältä päin tulewa leipäwiljan kuletus olisi saatu kokonaan tukkeutumaan. Mutta nämä katalat keinot tässäkään 
          suhteessa eiwät onnistuneet. Nälkä onkin saapunut herrain selän taakse ennemmin kuin punasen armeian selkäpuolelle. Se on saapunut mannerheimiläisten selkäpuolelle kaikessa 
          kauheudessaan. Pohjois-Suomessa huutawaa nälänhätää selostettiin tässäkin lehdessä Waasan „hallituksen” äänenkannattajan „Wasabladetin” mukaan, joka lehti oli t.k. 16 p:ltä. Lehdessä 
          sikäläisen wäliaikaisen elitarwehallituksen päällikkö, Waasan läänin maanwiljelysseuran puheenjohtaja, maanwiljelysneuwos Björkenheim antoi yleissilmäyksen nälänhädästä 
          Pohjois-Suomessa. Ja siinä silmäyksessä mainittiin jo „useimmilla tahoilla” käytetyn kaikki siemenruis, „paikkapaikoin myös ohransiemen”. Wieläpä sanotaan joissakin paikoin käytetyn 
          myöskin eläinten ruuaksi warattua kauraakin. Mutta ei tämä kylliksi. Kaikki elintarweaineet owat loppuneet monissa paikoin. Utajärwellä sanotaan jo wiikkokausia syödyn pettua, ja 
          Suomussalmella on sattunut muutamia nälkätuolemantapauksia. Yleinen nälänhätä uhkaa koko Oulun läänin pohjois- ja keskiosia.</p>
        <p>Nämä maanwiljelysneuwos Björkenheimin antamat tiedot puhuwat jo räikeän hirwittäwää kieltä siitä, mihin kamalaan kaaokseen walapattohallitus wanhoillisine porvariston johtomiehineen 
          on tämän kansan asiat syössyt. Omassa keskuudessaan saawat nyt nähdä nämä herrat, että heidän röyhkeä ja yksilöjen luokkawallan pönkittämistä tawoittelewa seikkailupolitiikkansa ei 
          ole woinut maamme ja kansamme asioita johtaa hywiin tuloksiin. Toisaalla tapetaan maamme parhainta, työkuntoista ihmiswoimaa, tuhotaan walmista omaisuutta, toisaalla nääntywät wiattomat 
          ihmiset, waimot, lapset ja wanhukset nälkäkuoleman syliin.</p>
        <p>Kauhea on todellisuus, johon olemme joutuneet henkipattojen porwariherran politiikan kautta.</p>
        <p>Punaisten rintaman tältä puolen emme woi saada lähimainkaan näin surkeaa kuwaa kuin Pohjanmaalta. Kehuttawat eiwät luonnollisesti elämisolot ole täälläkään, mutta ei kuitenkaan kaikki 
          ole lopussa. Ei toki tarwitse etelässä turwautua pettuun. Luokkasodan ensimäisinä wiikkoina näytti elintarwekysymys warsin uhkaawalta senwuoksi, että ent. hallitus oli ne saattanut 
          täydellisesti retuperälle. Mutta työwäestön tarmokkaan toiminnan kautta on kuitenkin päästy eteenpäin, jopa saatu leiwänsaantimahdollisuudet useammaksi wiikoksikin eteenpäin turwatuksi. 
          Perunain saannista toiwetta on myös olemassa, joista nykyään kipeimmin puutetta kärsitään. Woikysymys tullee myös ratkaistuksi hywään suuntaan jonkun wiikon kuluttua. Sitäpaitsi ei 
          rintaman tällä puolella ole rangaistu toisiin puolueryhmiin kuuluwia ihmisiä huolimatta siitä, että eräiden heidän ryhmien taholta on koetettu waikeutttaa elintarwekysymyksen 
          järjestelyä, waan owat he saaneet samat annokset kuin yleensä on woitu jakaa. Owatpa wielä innokkaimmat porwaristosta saaneet ostaa lihaakin niin paljon kuin owat halunneet, 
          ruokkiakseen „walkoisia”, kun ne „saapuwat pääkaupunkiin”. Mannerheimien rintamalla — saatujen tietojen mukaan — on menetelty tässäkin suhteessa aiwan toisin. Leipä on kielletty 
          työwäenjärjestöihin kuuluwilta, wieläpä heidän wiattomilta perheiltäänkin.</p>
        <p>Mannerheimiläisten raa'at keinot kostawat luonnollisesti itsensä, jos ei nyt aseiden kalskeessa, niin ainakin myöhemmin. Kärsiwät ihmiset näkewät, mitä mannerheimiläiset owat 
          miehiään, minkälainen ihmisyys asuu heissä. Wiattomain kirous kohoaa tuollaisten tekojen suorittajain päälle.</p>
        <h5>Huhut.</h5>
        <p>Rintaman tällä puolen nikartelee porwariston huhupajat. Niissä wärkätään juttu toistaan pöyristyttäwämpi. Niitä lasketaan liikkeelle keskusteluissa, mutta myöskin konekirjoitettuina 
          ja monistettuina, joita tietoja sitten postilaitoksen suosiollisella wälityksellä lewitetään. Koetetaan näet saada aikaan lewottomuutta herätetyksi ihmismielissä, koska tällaisten 
          suurien murroskausien waihteissa mielet owat kaikelle herkempiä. Aiwan tukuttain on tuollaisia tietoja ja selityksiä lewitetty täällä Helsingissäkin. Milloin niissä kerrotaan jonkun 
          kansanwaltuutetun karannen, milloin jonkun niistä tulleen hulluksi, milloin jonkun wieneen suuremman summan rahaa. Samoin wäliin yritetään selwittää, kuinka sosialistijohtajat owat 
          pettäneet työwäestöä ja kuinka muka walkokaartilaiset eiwät taistele „oikeita sosialisteja” wastaan, waan ainoastaan hulikaaneja wastaan. Lopuksi kehoitetaan työwäestöä luopumaan 
          aseistaan, koska muka on aiwan turhaa taistelu. Näin puhuttiin warsinkin luokkataistelun alkuaikoina. Wiime päiwien tuoreimmat tiedot owat koskeneet Tampereen tapahtumia. Monenlaisia 
          juttuja on siitä liikkeellä. Wiime torstaina m.m. lähetettiin Helsingin lähipitäjin, m.m. Tuusulaankin „sähkösanomatietoja” joissa ilmoitettiin jo Helsingin ja Riihimäen olewan 
          walkokaartilaisten hallussa. Punakaartilaisia kehoitettiin heti jättämään aseensa. Samoin on näiden juttujen lewittäjäin taholta wielä wahwasti uskoteltu, että ensi wiikolla ei anneta 
          leipää ensinkään, waikka sitä muka „Työmiehessä” luwataan. Toiset taas uskowat leiwän saannin olewan mahdollista, wieläpä, että sitä annetaan enemmänkin kuin edellisillä wiikoilla, 
          mutta tällä tempulla koetetaan taas waan „sokaista ihmisiä”, että ei muka tyytymättömyys pääsisi kowin suureen wauhtiin. Nyt annetaan leipää ja jauhoja, mutta se on wiimeinen wiikko. 
          Sitte ei enää kuulemma woida antaa pölyäkään. Näin uskotellaan Helsingissä. Pieni pettymyshän se oli näille huhunikkareille, että ensi wiikolla woidaan leipää jakaa, wieläpä hiukan 
          annosta korottaakin. He kun näet jo wiikkokaupalla owat askarrelleet tuon nälkätoiwomuksen puolesta.</p>
        <p> Mutta nämä tiedot eiwät riitä lähimainkaan niille jutuille, joita rintaman tuolla puolen, lahtarien lehdet tietäwät. Sotatiedot owat kerrassaan repäisewiä. Taisteluissa kaatuu 
          „punikkeja”, „punaryssiä” tai „roswoja”, — joilla nimillä punakaartilaisia kutsutaan — aiwan sadottain, ja wangiksi joutuu myös tuhansittain. Rintaman tältä puolen olewat tiedot owat 
          myös mitä huikeimmin wäritettyjä. Suuresta nälänhädästä ja tyytymättömyydestä kerrotaan niissä yhtämittaa. Tapahtumia tiedetään, joita ei wähääkään tunneta. Kaikki kertomukset 
          näyttävästi sepitetään mielikuwituksen woimalla.</p>
        <p>Samoin sotakiihoitus mannerheimiläisissä lehdissä on aiwan hiwittäwä. Jos kansalaiset rintaman tällä puolen woisiwat niitä lukea, täytyisi kaikkien niiden sisältöä hämmästyä, ainakin 
          niiden, joilla wielä on awointa silmää asioita arwostella. Saatettanee sanoa, että sosialistisissakin lehdissä sotakiihoitusta harjoitetaan, mutta sosialististen lehtien jutut 
          kalpenee lahtarilehtien kirjoitusten rinnalla. Tunnotonta raakuutta niissä lehdissä tahdotaankin lietsoa, niinkuin se ei jo riittäisi, ja niinkuin sitä ei jo aiwan riittäwässä määrässä 
          lahtarien taholta harjoitettaisi. „Punikit”, „punaryssät” ja „roswot” usutetaan järjestään kaikki „teurastamaan”, niin ettei niistä jäisi ainoatakaan „haukottelemaan”. Näin kaameaan 
          weljeswihaan on jouduttu. Ja tätä wihaa koetetaan ylläpitää, lewittämällä raakoja, walheellisia tietoja. Mutta tällaisten tietojen lewittäjät joutuwat aina kärsimään pettymyksiä. 
          Jutut eiwät toteudu. Ja ihisten usko käy wähitellen niihin nähden horjumaan.</p>
        <p className="signature">Sakari.</p>
      </Article>

      <div className="interTitle">2.4.1918</div>
      <Image className="centeredImage" src={img14} alt="Kuva 14"/>

      <div className="interTitle">4.4.1918</div>
      <Image className="centeredImage" src={img15} alt="Kuva 15"/>

      <div className="interTitle">5.4.1918</div>
      <Image className="centeredImage" src={img16} alt="Kuva 16"/>

      <div className="interTitle">6.4.1918</div>
      <Image className="centeredImage" src={img17} alt="Kuva 17"/>

      <div className="interTitle">8.4.1918</div>
      <Article titleText="Suomalainen murhenäytelmä.">
        <p>Sillä mahdoton on enää kenenkään kieltää sitä tosiasiaa, että Suomen kansan ylle on heittäytynyt werinen murhenäytelmä ja nyt seisomme siellä, missä saamme aawistuksen sen 
          murhenäytelmän koko peloittawasta sywyydestä.</p>
        <p>Mutta älköön näistä sanoistani kukaan erehtykö uskomaan sitä, että näinä hetkinä ratkaistaisiin Suomen työwäen kohtalo lopullisesti puoleen tai toiseen. Ei. Suomen työwäenluokan 
          kohtalo ratkaistaan lopullisesti wasta siinä etäisessä tulewaisuudessa, jolloin jo meidän unohdetuilla haudoillamme kaswaa ruoho. Ja mitähän waiheita sen ratkaisun ja asian nykyisten 
          waiheiden wälillä lieneekin, niin ratkaisun wiimeisenä sanana on sittekin yksi ainoa sana: woitto. Työwäen asian woitto tulee kaikkien nykyisten ja tulewien taistelujen suurena ja 
          rauhallisena aamenen-sanana. Työwäen asia on niin suuri, että nykyinen woitto, kuinkahan täydellinen se olisikin, ei kykene sitä lopullisesti ratkaisemaan. Werisinkään tappio taas ei 
          kykenisi sitä työwäen luokan asiaa tuhoamaan. Se tappio wain saattaisi työwäen luokan asian ja taistelut uuteen waiheeseen. Taistelujen, woittojen tai tappioiden jälkeisinä päiwinä 
          paistaa kyllä sama aurinko kuin ennen niitäkin, mutta ihmissuku elää joka päiwä uutta elämää. Suomalaista murhenäytelmää ei muodostaisi työwäestön tappiokaan, sillä siinä tappiossakin 
          piilee se tulewa woitto, jota kerran juhliwat tulewat päiwät.</p>
        <p>Ja kuitenkin me elämme suomalaisen murhenäytelmän synkeitä päiwiä monessakin suhteessa. Olihan juurikään työwäestön ponnistuksella saawutettu itsenäisyys, wapaus, josta wielä joku 
          wuosi sitten tuskin uskallettiin arkaillenkaan uneksia. Elettiin lisäksi semmoista suurta historiallista hetkeä, jolloin kaikki wanha kiiruhtaen kaatuu. Siinä wapautensa aamuhohteessa 
          seisoessaan piti Suomen kansan lähteä kehittämään sitä nuorta itsenäisyyttänsä. Awautuihan mahdollisuus toteuttaa uhkarohkeimmatkin kansalliset unelmat wieraiden waltojen alla 
          pirstoutuneen suomensuwun kokoamisesta takaisin yhteen pirttiin, yhteisen oman orren alle. Odottawathan kotiin takaisin kutsujan ääntä Suomelta Wenäjän-Karjala ja monet muut suomalaisen 
          asumusalan liepeet.</p>
        <p>Mutta kuuluiko se ikäwöity kutsujan ääni? Kuului ja ei. Onhan kyllä työwäestön kurjissa majoissa ollut rikkautta niin yllinkyllin, että on riittänyt yhteisestä kodista pois eksyneille 
          heimoille kotiin kutsun ääni. Näkywäthän Suomen työwäen edustajat Wenäjän ja Suomen wälistä sopimusta aikaan saadessaan muistaneen Karjalaa ja kaikesta päättäen on sen Wenäjän Karjalan 
          työwäestö kuullut kutsun. Tie yhteiseen kotiin olisi yhäkin awoinna, mutta täältä päin ei tule hakijaa.</p>
        <p>Sillä se työwäestön lähettämä kutsu oli liika heikko heikko niistä monista werisistä syistä, jotka jokainen tietää. Työwäestön täytyy lähettää se kutsu yksin, sillä porwaristo ei 
          ollut kutsussa mukana. Lisäksi oli työwäestön ääni kahlehdittu. Sen äänen woimaa lannisti se taistelu, tragedia, werinen murhenäytelmä, jonka näyttelijäksi työwäen täytyi astua. 
          Olihan kyllä porwaristokin aikoinaan puhunut ja runoillut jotain siitä suursuomalaisesta waltiosta, joka olisi woitu ehkä toteuttaa nyt, juuri näinä hetkinä, jolloin kaikki wanha 
          lähtee kiiruhtain hautaansa, mutta juuri tällä hetkellä unohti porwaristo ne isiensä unelmat, ne runolliset toiweensa.</p>
        <p>Mutta suomalainen murhenäytelmä ei lopu wielä siihen, että on unohdettu oma heimo ja syösty omia weljiä wastaan riiston ja sorron nimissä. Isänmaa häwisi porwaristolta. Se oli elänyt 
          ja helissyt ainoastaan huulilla. Sillä ei ollut juurta sywemmällä. Murhenäytelmä wain jatkui huimaawalla wauhdilla ja niin tapahtui lopulta se kansallinen onnettomuus, että tänne 
          kutsuttiin orjuuttajan miekka, jopa juuri sillä hetkellä, jolloin alkoi sarastaa wapauden päiwän hiljainen ja rauhoittawa aamuhohde. Sen aamun hiljaisessa hohteessa kerrotaan yläluokan 
          warustautuneen aiwan kukin ja seppelein ottamaan wastaan sitä wierasta miekkaa. Siinä on suomalaisen murhenäytelmän suuri, painostawa loppu. Minulle on wiimeaikoina alkanut saapua 
          nimettömiä häwäistyskirjeitä, jotka olen jättänyt tämän lehden toimitukselle. Nehän kyllä owat sitä laatua tawaraa, johon ei sowi kajota, mutta kun niistä eräs on kirjoitettu jopa 
          miltei aiwan moitteettomassa — sanoisimpa siwistyneessä muodossa — niin lainaan siitä näytteeksi seuraawan lauseen: „Ei woida kieltää, että Saksan kanssa tehty sopimus on tuskallinen, 
          mutta siihen oli pakko.”</p>
        <p>Siinä murhenäytelmän eräs sana. Oli pakko pettää maansa, myydä kansansa! Tähän asti on opetettu, että ihminen ei saa minkään pakon edessä myydä isänmaatansa. Päinwastoin: hänen on 
          sen puolesta uhrattawa henkensä, omaisensa, kaikkensa. Nyt se oli „pakko” myydä jostain, joka olisi pitänyt luowuttaa jopa ilman waatimustakin.</p>
        <p>Mutta mitäpä niistä. Näinä päiwinä ei ole syytöksiin aika, enkä siis kirjoita syyttääkseni, waan aiwan kuin jostain pakosta. Syyttäjäksi ja tuomariksi astuu kerran tulewa aika, 
          historia ja wasta sen tuomarin saawuttua woidaan täysin ymmärtää nykyisen suomalaisen murhenäytelmän sywyys. Me olemme silloin jo poissa, mutta parempi niin kuin istua silloin 
          syytettyjen siasta syytetyn penkillä.</p>
        <p>Mutta mikään hautakaan ei ole kuolemaksi kansalle, jonka keskuudessa on wielä säilynyt niitä, jotka owat päättäneet elää. Ja elää on Suomessa päättänyt työwäen luokka. Se työwäen 
          luokka on päättänyt rohkeasti astua uutta aikaa kohti. Sillä ei ole mitään kaduttawaa. Tulewat läheiset päiwät tulewat kyllä olemaan waiherikkaita ja niinä päiwinä näytellään ehkä 
          suomalaisen murhenäytelmän kauhein ja tuskallisin näytös, mutta missään semmoisessa näytelmässä ei sorru työwäen asia. Mikään weripäiwä ei ole työwäen asian wiime päiwä ja loppu. Se 
          työwäen asia on koko tulewaisuuden, tulewan ihmiskunnan uusi sana. Se asia tulee woittamaan. Sen tietä ei woida katkaista woimakkaimmankaan miekalla, ei sywimmilläkään haudoilla. 
          Ilman työwäen aatteen woitolle pääsyä eläisi ihmiskunta ainaisen kirouksen alaisena. Ilman sen aatteen woittoa olisi maailma köyhä, ihmiskunta sairaloinen kerjuulla kulkija. Koko 
          tulewaisuuden rikkaus tulee perustumaan työwäen asian woitolle pääsyyn. Sitä asiaa on suomalainen työmies näinä päiwinä rikastuttanut werellänsä ja se työmiehen weri on tulewaisuudessa 
          tuowa aina rauhallisen ja lohdullisen wiestin näiltä päiwiltä, jolloin tehtiin suurinta suomalaista murhenäytelmää.</p>
        <p className="signature">Ilmari Rantamala.</p>
      </Article>

      <div className="interTitle">11.4.1918</div>
      <Article titleText="Tiedonanto Helsingin työwäelle.">
        <h5>Työwäenjärjestöjen Eduskunnalta.</h5>
        <p>Työwäen wallankumous Suomessa on joutunut kohtalokkaaseen waiheeseen. Ulkoiset woimat uhkaawat tällä hetkellä sen kulkua. Emme woi sanoa, milloin ja miten on ratkaisu tapahtuwa. 
          Uskomme on silti luja wallankumouksen lopulliseen woittoon. Käwipä tällä hetkellä miten tahansa, joka tapauksessa on Helsingin Työwäenjärjestöjen Osuuskunta päättänyt, että sen 
          kunnallisten johto-, toimi- ja lautakuntien sekä yksityisten toimihenkilöiden on pysyttäwä paikoillaan siihen asti, kunnes heidät wäkiwalloin estetään toimiaan hoitamasta.</p>
        <p>Eduskunta kehoittaa myös Helsingin wäestöä pysymään rauhallisena ja noudattamaan kaikissa suhteissa harkittua ja maltillista menettelytapaa.</p>
        <p>Towerit, työläiset, rohkeutta! Kestäkäämme!</p>
        <p>Älkäämme menettäkö luottamustamme, sillä lopullinen woitto on joka tapauksessa kerran olewa työwäestön.</p>
      </Article>

      <div className="interTitle">12.4.1918</div>
      <Article titleText="Kullerwo Manner asetettu sotilasdiktaattoriksi.">
        <p>Kuten toisessa paikassa lehteämme laajemmin kerromme, on Wiipurissa pidetyssä wallankumouksemme johto-organien yhteisessä kokouksessa asetettu sotilasdiktaattoriksi kansanwaltuutettu 
          Kullerwo Manner.</p>
      </Article>
      <Image src={divider} className="dividerStyle rotate" />
      <p className="info">Työmiehen viimeinen numero ilmestyi 12. huhtikuuta 1918, jolloin Helsingin taistelu oli jo käynnissä. Sitä oli toimittamassa enää kirjailija Algot Untola, muiden 
        siirryttyä punaisten johdon mukana Viipuriin tai jäätyä saksalaisten vangeiksi.</p>
      <a className="hyperlink" href="https://digi.kansalliskirjasto.fi/sanomalehti/titles/fk14802?display=THUMB&year=1918">Linkki vuosikertaan 1918</a>
    </Layout>
  )
}
export const Head = () => <title>Punaisten sisällissota</title> // metadata

export default CivilWarRedsPage 