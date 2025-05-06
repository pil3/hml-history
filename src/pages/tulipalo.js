import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import Image from "react-bootstrap/Image"

import "../styles/base/global.css"

import divider from "../assets/divider.png"
import subDivider from "../assets/sub-divider.png"
import imgFrontPage from "../images/content/front-palotorvi.jpg"
import imgJuselius  from "../images/content/juselius.jpg"


const FirePage = () => {
  return (
    <Layout titleText="Kaupungin palo v. 1831">
      <Image className="centeredImage" src={imgFrontPage} alt="Etusivu"/>
      <Image src={divider} className="dividerStyle" />
      <p> Hämeenlinnan kaupungin syyskuun 14 ja 15 päivinä 1831 tapahtuneesta suuresta tulipalosta, joka hävitti suuremman osan kaupunkia, löytyy Hämeenlinnan Maistraatin arkistossa seuraavat asiakirjat, jotka tässä sanain mukaan 
        esitetään.</p>
      <Image src={subDivider} className="dividerStyle" />
      <Article titleText="Varamaaherra, Laamanni ja Ritari J. Snellman'ille Helsingissä.">
        <p className="initialCap">Täten saan minä Maistraatin puolesta syvimmässä nöyryydessä ilmoittaa siitä surkeasta tapauksesta, joka on kohdannut somaa kaupunkiamme. Noin kello 7 aikana eilen illalla pääsi tuli 
          irti eräässä heinillä ja oljilla täytetyssä vajarakennuksessa kauppias J. A. Juselius'en talossa Ison torin kulmassa. Kun talo oli hyvin ahtaasti rakennettu levisi tuli muutamassa silmänräpäyksessä, kovista ponnistuksista 
          huolimatta, molemmille puolille noin viiteen, kuuteen läheiseen taloon.</p>
        <p>Sekaannus tuli niin suureksi, että sammutusväestö hajaantui joka taholle korjaamaan, vaikka allekirjoittanut kaikin tavoin koetti pitää niitä koossa. Vasta sittenkuin kaikki talot torin länsipuolella, 
          paitsi Sotakomisario Florin'in perillisten omistama talo sekä suurin osa torin pohjoispuolella olevasta kaupungista, olivat palaneet, voitiin etenkin kaupunkiin saapuneen maakansan avulla, jota kiitettävällä tavalla auttoi tänne 
          sijoitettu sotaväki, mikä koko ajan oli suurimmassa määrässä ponnistanut voimiansa, ehkäistä tulen leviämistä.</p>
        <p>Yleisistä rakennuksista, joutuivat, ikävä kyllä, maaherran asunto ja koulurakennus hävityksen uhriksi, sillä ainoastaan neljäs osa talojen luvusta pelastui. Allekirjoittanut sai monen muun kanssa 
          jakaa onnetonta kohtaloa, mutta Raastuvanoikeuden ja Maistraatin arkisto, joka säilytettiin allekirjoittaneen talossa, pelastui häiriöstä samaten kuin kaupungin kirkkokin, vaikka se oli suuressa vaarassa sekä jo syttyi tuleen. 
          Kaksitoista tuntia oli kyllin tehdä yli tuhannen ihmistä asunnottomiksi, ja vielä tätä kirjettä lähetettäessä nousee savu kaikkialla raunioista. Tarkemman kertomuksen saan kunnian huomispäivän postissa lähettää.</p>
        <p className="signatureSmall">Hämeenlinnassa Syyskuun 15 p:nä 1831.</p>
        <p className="signatureSmall"> Maistraatin puolesta:</p>
        <p className="signature">G. A. Lagerblad</p>
      </Article>

      <Image src={subDivider} className="dividerStyle" />
      <Article titleText="Nöyrin virkakirjelmä.">
        <p className="initialCap">Maistraatin viimeistä raporttia lähetettäessä katsottiin se tulipalo, joka oli hävittänyt suurimman osan Hämeenlinnan kaupunkia jo loppuneeksi, sekä luultiin vaaran ohimenneeksi. Mutta muutama tuntisenjälkeen kuin raportti oli 
          lähetetty, huomattiin, että kuumuus oli tunkeutunut kirkon kuparisen katon läpi sekä sytyttänyt kiviholvia ympäröivän puusuojukkeen.</p>
        <p>Sittenkuin vaara Jumalan avulla nyttemmin on torjuttu, kiiruhtaa Maistraatti jättämään seikkaperäisen kertomuksen niistä toimista, joihin ryhdyttiin hävityksen ehkäisemiseksi.</p>
        <p>Kuten Maistraatin ylempänä mainitusta raportista käy selville, pääsi tuli irti tämän kuun 14 päivänä noin kello 7 aikana illalla eräässä rehuvajassa kauppias J. A. Juselius'en takapihalla; alle tehdyllä piirrustuksella löytyy 
          tämä torin luoteiskulmassa. Kun tontti oli kulmatontti, jonka kärki oli toria vastaan, ja jota kahdella puolen ympäröi 20 kyynärää leveät kadut, ei luultu alussa vaaraa niin suureksi kuin se sammutuskaluston saapuessa oli, s. o. 
          muutamassa silmänräpäyksessä havaittiin, mutta silloin huomattiin kauhuksi, että palava ullakko oli täynnä heiniä ja olkia sekä molemmilla puolilla yhteydessä toisten ulkohuoneitten kanssa, jotka ilman väliä olivat yhteenrakennetut 
          kahdenkerroksisiin asuinrakennuksiin. Epämukavan tonttijärjestelmän mukaan oli tämän tontin takana „Pohjoiselle Melukadulle” päin kapea maakaistale, joka kuului naapuritonttiin, ja jolle oli rakennettu sekä rehulla täytetyt 
          rehuvajat, mitkä katua vastaan olivat yhteenrakennetut palavan rakennuksen kanssa ja oli pihamaa niin ahdas, että rehukuorma töin tuskin pääsi kääntymään. Edellämainittu piirustus ehkä jotakuinkin näyttää aseman. A:n kohdalla oli 
          tuli päässyt irti, mutta silmänräpäyksessä oli myöskin B ilmitulessa, ja ennenkuin apu ennätti paloi myöskin jo C. Tästä käy selville kuinka vaikea, miltei mahdotonta tulen sammuttaminen tässä paikassa oli, varsinkin kun otetaan 
          huomioon, että C. ulottui tontin ympäri, ja että kahdenkertaiset asuinrakennukset olivat yhteenrakennetut ei ainoastaan D. kanssa vaan myöskin nurkka nurkkaa vastaan naapuritalon rakennusten kanssa. Ruiskun vieminen palavan talon 
          pihamaalle olisi ollut jättää ruisku tulen uhriksi. Tämän vuoksi annettiin määräys vastustaa tulen leviämistä porvari Ingman'in talossa (kolmas talo torilta) sekä hajoittaa välillä sijaitsevat tiellä olevat rakennukset. Heti 
          ryhdyttiinkin työhön, mutta ennenkuin katot vielä olivat täydellisesti revityt, oli talo jo liekkien ympäröimä. Pihamaan ahtauden takia ei tässä talossa voitu käyttää muuta kuin yhtä ruiskua ja täytyi toinen, joka jo oli 
          pihamaalle viety, siirtää takaisin kadulle sekä käyttää siellä.</p>
        <p>Sillä välin ponnistettiin kaikin voimin kahdella muulla ruiskulla pelastaa kauppias Thermenin talo, joka senkin tähden pidettiin helppona, että tuuli, joka tähän asti oli ollut jotenkin tyyni, nyt alkoi tuulla suoraan idästä 
          länteen päin. Mutta kauppias Juselius'en talon kaikki palavat rakennukset tekivät vihdoin kuumuuden niin kovaksi, ettei ruiskuja enään voitu pitää poikkikadulla vaan täytyi niitä siirtää eteläänpäin, kuitenkin vasta senjälkeen 
          kuin suihkujen ulkopuolella olevan Thermenin talon asuinrakennuksen mahdottoman korkea vesikatto oli kuumuudesta syttynyt. Yhdellä ruiskulla sillä avonaisella paikalla, joka oli Thermenin talon ja maaherran asuinrakennuksen välissä 
          sekä yhdellä ruiskulla Thermenin laajalla pihamaalla ja yhdellä ruiskulla takakadulla, jossa rakennuksia hajotettiin avonaisen paikan saamista varten, luultiin voitavan puolustaa tätä paikkaa sekä ehkäistä tulen leviämistä tuulta 
          vastaan, jotavastoin oli pakko jättää koko se osa kaupungista, mikä oli tuulen alla, oman onnensa nojaan. Neljännen ruiskun miehistö sekä kaikki ne ihmiset, josta voitiin saada kokoon määrättiin hajoittamaan raatihuoneen tontilla 
          olevaa vajarakennusta ja ruiskuhuonetta, jotta voitaisiin pelastaa apteekkari Bjugg'in kahdenkertainen rakennus sekä tämän kanssa yhteydessä se osa kaupungista, joka voisi tästä rakennuksesta syttyä. Tähän aikaan syttyi kauppias ja 
          raatimies Bastman'in myöskin kahdenkertainen rakennus tuleen, ja kun vajarakennusta ei voitu täydellisesti hajoittaa sekä apteekkirakennuskin syttyi, alkoi sammutusmiehistön rohkeus lannistua sekä matkaansaattoi tottelemattomuuden, 
          joka uhkasi hävittää kaikki. Ruiskujen miehistö lähti pois ja veden ajajat jättivät tynnyrinsä rientääksensä pelastamaan sitä irtainta omaisuutta, jota vielä voitiin pelastaa, huolimatta siitä, että allekirjoittanut yhtämittaa 
          kulki pitkin katuja koettaen hyvillä sanoilla ja uhkauksilla koota hajaantunutta joukkoa sekä saattaa heitä täyttämään velvollisuuttaan.</p>
        <p>Kun tuulen alla oleva osa kaupunkia kolmen tunnin kuluessa oli palanut, oli nyt keksittävä keino, mitenkä kaakkoisosa kaupungista olisi pelastettava. Onneksi löytyi opettaja Utter'in ja kamarineuvoksenleski Nordensvanin talojen 
          välissä sireeni- ja muilla lehtipuilla istutettu 37 ½ kyynärän levyinen puutarha. Tämä paikka valittiin nyt puolustuspaikaksi, ja komennettiin sinne yksi ruisku, mutta sillä ei ollut miehistöä.</p>
        <p>Ilman herra kasakkaluutnantti Ivanoffin tehokasta apua, jota paikalle saapuneet sotamiehet auttoivat ruiskua käytettäessä, minkä suihkua Ivanoff itse johti, olisi tämä ennen hyvänä pidetty keino pettänyt. Jumalan avulla onnistui 
          Ivanoffin väsymättömällä innollaan, jota minä itse olin tilaisuudessa huomaamaan ja pidän velvollisuutenani siitä mainita, tällä paikalla ehkäistä tulen leviämistä.</p>
        <p>Maaherralle jättämässään raportissa on kaupunginviskaali Luutnantti Johan Magnus Fryxell maininnut, mitä tällä ajalla hänen huostaansa uskotussa osassa kaupunkia tapahtui. Viittaamalla tähän raporttiin saan minä kunnioittaen 
          lisätä että noin kello 12 päivällä tämän kuun 15:nä eli palon jälkeisenä päivänä huomattiin kirkon kuparikaton ja kiviholvin välillä oleva puusuojus syttyneeksi kirkkoa kahdelta puolelta ympäröivän kuumuuden takia, joka oli saanut 
          kuparin hehkumaan. Mihin toimenpiteisiin tämän tulen sammuttamiseksi on ryhdytty, sekä mikä vaara kaupungilla ja sammutustyöhön osaaottavilla henkilöillä on ollut, voipi Maaherra itse ymmärtää sekä huomata, että nämät toimenpiteet, 
          joita moni on moittinut, kuitenkin ovat olleet sopivat, joka paraiten käy selville siitä että tuli 6 ½ päivän kytemisen jälkeen, tekemättä sanottavampaa vahinkoa, eilen kello 9 sammui.</p>
        <p>Lopuksi mainittakoon vielä, että 176 tontista niihin myöskin luettuna 11 rakentamatonta, 102 tontin rakennukset ovat joutuneet tulen uhriksi, että asunnottomiksi jääneiden luku on kaupunkitaloissa 623, eli yhteensä 1,207 henkeä 
          ja että palaneiden rakennusten arvo oli yhteensä 375,000 ruplaa, siihen laskettuna palovakuutettujen rakennusten arvo, sekä yksityisten hävinnyt irtain omaisuus noin 100,000 ruplaa; kuin myöskin että kauppias J. A. Juselius'en 
          Mikko niminen renki, jonka huhu sanoo syypääksi tulipaloon, palon jälkeen on ollut kadoksissa ja hyvin luultava on, että hän on jäänyt liekkeihin, mutta ettei muita henkilöitä hengen tahi ruumiin puolesta ole loukkaantunut. 
          Tullen Maistraatti sittemmin, kun tutkinto, jota jo on alotettu, sekä piakkoin jatketaan, on päättynyt, Maaherralle ilmoittamaan syyn tähän suureen onnettomuuteen.</p>
        <p className="signatureSmall">Hämeenlinnassa Syyskuun 22 p:nä 183l.</p>
        <p className="signatureSmall">Maistraatin puolesta</p>
        <p className="signature">G. A. Lagerblad.</p>
      </Article>
      <Image src={subDivider} className="dividerStyle" />
      <Article titleText="Nöyrä ilmoitus.">
        <p className="initialCap">Vaikka olenkin varma siitä, että Herra Pormestari Lagerblad on antanut seikkaperäisen kertomuksen siitä tulipalosta, joka on kohdannut Hämeenlinnan kaupunkia olen kuitenkin, siihen nähden ettei Herra Pormestari voi tuntea 
          kaikkia asioita, koska hänen täytyi kulkea ympäri kaikkialla, katsonut velvollisuudekseni Maaherralle jättää seuraavan nöyrän raportin joka perustuu siihen mitä itse olen nähnyt ja kokenut. Jos yöt ja päivät yhtämittaa jatkuneet 
          virkatoimemme olisivat sallineet meidän lähemmin keskustella toistemme kanssa, olisi tämä raportti kyllä ollut turha, mutta koska niin ei ole tapahtunut, olen katsonut velvollisuudekseni jättää niitä ilmoituksia, joita yksin 
          voin antaa.</p>
        <p>Keskiviikkona tämän kuun 14 päivänä vähää ennen kl. 7 illalla pääsi tuli irti kauppias J. A. Juselius'en talossa torin luoteiskulmassa, sekä levisi niin nopeasti, että ennenkuin sammutuskalusto ennätti paikalle, apu jo oli 
          myöhäinen, johon osaksi oli syynä se, että siinä paikassa missä tuli pääsi irti säilytettiin helposti palavia aineita, olkia ja heiniä, osaksi taasen koko kesän ja syksyn vallinnut kova kuivuus. Saavuttuani palopaikalle määräsi 
          ylipäälikkö Lagerblad minut vastustamaan tulta siinä paikassa missä Porvari Ingman'in ja Leskirouva Murin'in talot sijaitsevat, minkä ohessa minulle uskottiin yhden ruiskun päällikkyys ynnä niinpaljon miehistöä kuin tähän 
          ruiskuun voitiin hankkia, sekä oikeus työskennellä paraimman ymmärryksen mukaan koska, katsoen niihin eri paikkoihin missä me työskentelimme, oli vaikea neuvotella toistemme kanssa. Turhan yrityksen jälkeen hajoittaa tiellä 
          olevia ulkohuoneita, huomasin pian että tuli jo oli levinnyt kaikkialle ympärilläni, minkä vuoksi, vähällä jäädä tulen uhriksi, olin pakoitettu jättämään tämän paikan. Koska tuuli kävi suoraan idästä länteen päin, en luullut 
          voivani ryhtyä tehokkaampaan puolustukseen ennenkuin seuraavassa kadunkulmassa, sekä päätin jättää palavan korttelin oman onnensa nojaan. Kun huomasin että kauppias Thermenin tuulen yläpuolella oleva rakennus oli suuressa 
          vaarassa, pidin minä parempana koettaa pelastaa tätä, kuin työskennellä vastatuuleen, ja liekkiä vastaan; saapuessani sille poikkikadulle joka oli Juselius'en ja Thermenin talojen välissä, oli kuumuus jo niin kova, etten 
          uskaltanut viedä ruiskua sanotulle kadulle, koska pelkäsin sen voivan joutua tulen uhriksi, vaan koetin kadun kulmasta kastella Thermenin talon lähimpänä olevaa rakennusta, sekä annoin miehistön hajoittaa suuremman mökin, joka 
          oli Thermenin ulkohuonerakennusten välissä. Tällä ajalla sain tilaisuuden neuvotella ylipäällikön kanssa, joka hyväksyen yritystäni koettaa tällä kohdalla ehkäistä tulen leviämistä, sanoi itse aikovansa koettaa samaa Maaherran 
          talon kohdalla. Alituisen kastelemisen kautta onnistuttiin varjella lähimmän ulkohuonerakennuksen päätyä siihen asti että etäänpänä pihamaalla sijaitsevat makasiinirakennukset syttyivät tuleen, jolloin yksi palopurjekin paloi, 
          ja auttoi minua tässä suuressa määrässä Ylioppilas Nils Gustaf Viander. Pakotettuna väistymään tältä paikalta, koetin kaikin voimin pelastaa Maaherran taloa, jonkatähden asetuin Maaherran talon avaralle pihamaalle sekä annoin 
          repiä katot niistä rakennuksista, mitkä olivat Maaherran talon ja Thermenin talojen välissä, jolloin ylipäällikkökin saapui paikalle sekä hyväksymällä tekoni, kehoitti minua kaikin voimin varjelemaan tätä valtion omistamaa 
          kallisarvoista rakennusta, ja voipi ylipäällikkö todistaa että ainoastaan vedenpuute, jota ei paraimmalla tahdollakaan voitu auttaa, oli syynä siihen, ettei meidän puolen tuntia kestänyt ankara työmme onnistunut. Myöskin tässä 
          auttoi minua Viander, jonka apu oli minulle sitä suuremmasta merkityksestä kun kaikilla kaupungin palvelioilla oli täysi työ kolmessa muussa ruiskussa. Pakotettuna siirtymään Maaherran talon pihamaalta ja koska huomasin että oli 
          mahdotonta pelastaa kapteeni Tandefelt'in ja kultaseppä Schultz'in taajaan rakennettuja kahdenkertaisia taloja, päätin minä kaikin voimin ehkäistä tulen leviämistä Koulukulmassa, minne annoin viedä ruiskun, ja sain sinne avuksi 
          linnan ruiskun mutta ilman miehistöä. Tällä aikaa loppui myöskin sammutusmiehistön tottelevaisuus, sillä jokainen ajatteli ainoastaan oman tavaransa pelastamista. Ylipäällikkö Lagerbladille joka taasen tuli paikalle, kerroin minä 
          tästä sekä pyysin saada lähteä pelastamaan omia tavaroitani, mutta tämän ilmoitettua että hänenkin talonsa jo oli palanut sekä että jokaisen virkamiehen tuli kunniansakin tähden täyttää velvollisuuttaan niinkauvan kuin omaisten 
          henki ei ollut vaarassa, jätin minä taloni ja omaiseni oman onnensa nojaan, kokosin sen miehistön minkä sain ja alotin hajoittaa Schultz'in suurta rakennusta, mutta ennättivät liekit ennen meitä tässä työssä.</p>
        <p>Harmistuneena siitä ettei minulla ollut palopurjeita vettä eikä miehistöä, näin vielä kauhukseni linnan ruiskun vietävän pois ilman että sitä vielä oli ensinkään käytetty. Väsyneitten työmiesten, itkevien naisten ja edestakaisin 
          ajavien maalaisten ympäröimänä, jotka viimeksimainitut mahdottoman korkeata palkkaa vastaan pelastivat kaikenlaista romua, tapasin minä tässä tuskassani Viipurin rykmentin kolmannen pataljoonan krenatöörikomppanian päällikkö Herra 
          Luutnantti Bökman'in, joka osaksi oli koettanut ehkäistä tulen leviämistä osaksi taasen liekistä pelastaa mitä pelastaa voitiin sekä kartanonomistaja Tudeer'in, joka oli maalta tuonut sammutusväkeä ja tarvittavia hevosia. Näiden 
          kanssa sekä luottaen heidän lupaukseensa auttaa minua, lähdin minä sille poikkikadulle, joka eroittaa Stengrundin ynnä muut talot Tallberg'in talosta ja kaupungin pappilasta. Bökmannin johdon alla olevien sotamiesten avulla, 
          joille Bökman itse osoitti erinomaista esimerkkiä, annoin hajoittaa kaikki siellä olevat rakennukset, jolla aikaa Tudeer maamiestensä, torppariensa ja renkiensä sekä usean lähellä asuvan talollisen kanssa käytti jo kauvan 
          seisonutta ruiskua. Ylipäällikkö, joka myöskin saapui paikalle, katsoi kuten minäkin tätä paikkaa ainoaksi, missä enään voitiin tulen leviämistä vastustaa, sekä kiiruhti ilahuttavilla sanoillaan työtä. Kuitenkin olivat ne 
          työvoimat, joita minä sain kokoon liian pienet hajoittamaan kaikkia niitä rakennuksia, joita olisi pitänyt, ja ainoastaan kuudetta tuntia kestänyt ankara sammutustyö ehkäisi tulen leviämistä ja vähensi liekkiä.</p>
        <p>Niistä henkilöistä, jotka tässä tilaisuudessa erinomaisella tavalla kunnostivat itseänsä saan mainita Luutnantti Bökman'ia, joka koko ajan johti suihkua sellaisessa kuumuudessa I että hänen saappaansa paloivat, sekä sitäpaitsi 
          piti tarkkaa huolta siitä että miehistö täytti velvollisuutensa, ynnä kartanonomistaja Tudeer'ia, joka tulollaan vaikutti sen että ruiskua voitiin käyttää, ja jolla paitsi suuria ruumiin voimia oli erinomainen kyky pitää 
          koossa sekä kiihoittaa työssään sammutusmiehistöä ja vedentuojia, mitkä suurimmaksi osaksi olivat hänen omia alustalaisiaan,</p>
        <p>Ne viimeksimainituista, jotka erittäin kunnostivat itseänsä ja joita minun ennen muita täytyy mainita, olivat Mylläri Jooseppi, Ruununmyllyltä sekä kaksi veljestä ja talollista Mattilan talosta Hätilän kylässä, vaan joiden 
          nimiä ei ollut aikaa merkitä, jota paitsi mainittakoon että Luhtialan, Hätilän, Idänpään, Kantolan ja Mäskälän kyläläiset ylipäätänsä olivat auliit auttamaan.</p>
        <p>Näistä ponnistuksista huolimatta olisi tuli kuitenkin levinnyt eteläänpäin ellei entinen ylimääräinen Senaatin Kopisti Henrik A. Sundberg, silminnähtävässä hengen vaarassa olisi asettautunut kolmen kyynärän levyiseen kujaan 
          kahden rakennuksen väliin, josta toinen jo oli tulessa, sekä täällä huolimatta siitä että vaatteensa syttyivät kuumuudesta, johtanut suihkua niin onnellisesti että jälellä oleva osa korttelista pelastui.</p>
        <p>En tunne kutka olisivat kaupungin toisella puolella itseänsä kunnostaneet, mutta huhu mainitsee erinomaisella kiitoksena kasakkaluutnantti Ivanoffia.</p>
        <p>Todistaakseni mitä ylempänä olen eri henkilöistä kertonut, saan nimittää Everstiluutnantti ja Ritari Stjernvall'in, joka ei ainoastaan koko yön auttanut minua neuvoillaan, vaan myöskin käski yksityiset palveliansa tarmokkaasti 
          auttamaan sammutustyössä.</p>
        <p>Väsyneenä viikon rasituksista sekä tavallisimpien kirjoitusneuvojen puutteessa, ne kun ovat hävinneet, en ole voinnut jättää raporttia siinä muodossa kuin olisi pitänyt mutta toivon, ettei tätä asiain nykyisessä tilassa, lueta 
          minulle syyksi.</p>
        <p className="signatureSmall">Hämeenlinnassa Syyskuun 19 p:nä 183l.</p>
        <p className="signature">J. Fryxell.</p>
      </Article>      
      <Image src={subDivider} className="dividerStyle" />
      <p>Mikäli poliisitutkinnossa sittemmin saatiin selville oli kaupp. Juselius'en renki Mikko Mikonpoika kl. 6 tienoissa tullut kotia juopuueena sekä otaksuttiin varomattomasti pidelleen tulta ullakolla ja jääneen sinne liekkeihin.</p>
      <Image className="centeredImage" src={imgJuselius} alt="Juseliuksen talo"/>
      <a className="hyperlink" href="https://digi.kirjastot.fi/files/original/f9a4c69de27ec602332aa8c4a1c32fb4.pdf">Lähde</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Kaupungin palo 1831</title> // metadata

export default FirePage