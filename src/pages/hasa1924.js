import * as React from "react"

import Layout from "../components/layout"

import "../styles/base/global.css"

import Divider from "../assets/divider.svg"
import SubDivider from "../assets/sub-divider.svg"


const Hasa1924Page = () => {
  return (
    <Layout titleText="Hämeen Sanomat 15.10.1924">
      <h1>Hämeen Sanomat</h1>
      <h3>Suomenmielinen, kansanvaltainen sanomalehti</h3>
      <h4>Keskiviikkona lokakuun 15 p:nä</h4>
      <Divider className="dividerStyle" />
      <div className="grid">
        <article>
          <h2>Wankien suuresta lukumäärästä</h2>
          <h3>Mahdollisuuksia wankien eristämiseen puuttuu</h3>
          <p>Eiwät ainoastaan lukuisat murha- ja tappotapaukset, waan myöskin wankiloissa säilytettäwien wankien suhteettoman korkea lukumäärä on ollut omiaan herättämään huolestumista.</p>
          <p>Tämän kuun 4 pnä oli maamme wankiloissa säilytettäwänä 5,599 wankia. Niistä oli:</p>
          <ul>
            <li>Kuritushuonevankeja - 2,650</li>
            <li>Pakkotyövankeja - 429</li>
            <li>Wankeuswankeja - 837</li>
            <li>Sakonsowittajia - 980</li>
            <li>Yleistä työtä suorittawia - 157</li>
            <li>Tutkintowankeja - 462</li>
            <li>Irtolaisuudesta tutkittawia - 980</li>
            <li>Kuljetuswankeja - 30</li>
            <li>Miehiä yhteensä - 5,081</li>
            <li>Naisia yhteesä - 518</li>
          </ul>
          <p>Siitä huolimatta, että wiimeisinä wuosina on wankiloista wapautunut melkoisia määriä 1918 vuoden kapinaan osaaottaneita, on wankiluku yhä edelleen pysynyt korkeana. Wankien päiwittäinen keskiluku on waihdellut
            seuraawaan tapaan:
          </p>
          <ul>
            <li>1905 - 2,149</li>
            <li>1910 - 3,439</li>
            <li>1913 - 3,126</li>
            <li>1921 - 6,543</li>
            <li>1922 - 5,837</li>
          </ul>
          <p>Waikka käytettäwissämme ei olekaan wielä wuoden 1923 lopullista wankeinhoitotilastoa, woi silti wäittää, että wankien päiwittäinen luku sanottuna wuonna oli suunnilleen edellisen wuoden tasalla. Wiime kewättalwella 
            se oli jo yli 6,300:n ja tulee kuluwan wuoden aikana warmasti wielä noudemaan aikaisemmin maitusta 5,599:stä.</p>
          <p>Päiwittäisen wankilukumme rinnalla owat pohjoismaiden ja Englannin wankiluwut huomattawasti pienemmät. Wuoden 1922 lopussa oli Ruotsin wankiloissa 1,837 wankia, joista wapausrangaistusta kärsiwiä 1,604, tutkintawankeja 
            214 ja irtolaisuudesta tutkittawia 19. Työwankeja, joita ei säilytetä wankeinhoitolaitoksessa, oli sitäpaitsi jokunen määrä, samaten nuoria rikollisia. Tanskan waltion wankiloissa oli saman kertomuswuoden lopulla 1,363 
            kuritushuonewankia ja kuntain ylläpitämissä laitoksissa sitäpaitsi 1,092. Norjan wankiloissa oli wiimeksi ilmestyneen wankeinhoitokertomuksen mukaan w:lta 1920: wamkeja keskimäärin päiwässä 980. Englannissa oli 
            maalisk. 31 pnä 1923 wankiloissa 11,766 wankia.</p>
          <p>Wankiluvun suuruus riippuu, kuten tunnettua, rikollisuutta aiheuttawista yhteiskunnallisista ja yksilöllisistä syistä, rikoslainsäädännöstä ja oikeudenkäynnistä sekä myöskin rangaistusten käytäntöönpanotawasta. Kun 
            rikollisuuden wastustaminen on wiime aikoina tullut julkisen keskustelun alaiseksi, on silloin ymmärrettäwistä syistä puhuttu etupäässä rikollisuutta ehkäisewästä toiminnasta. Useilta tahoin on myös waadittu, että 
            rangaistuksia olisi tiukennettawa. Sitäwastoin ei ole lähemmin kosketeltu sitä tapaa, jolla woimassa olewan lain puitteissa wapausrangaistuksia on pantu täytäntöön.</p>
          <p>Werrattuna Englantiin ja pohjoismaihin on meillä wapausrangaistusten täytäntöönpanossa ensinnäkin se ero, että edellämainituissa maissa pyritään wangit wankiloissa huolellisesti eristämään toisistansa. Tätä tarkoitusta 
            warten on wankiloihin järjestetty riittäwä määrä yksinäiskoppeja eli sellejä. Niinpä Englannin wankiloissa woidaan tarpeen mukaan sijoittaa kaikki wangit wapaa-ajoiksi selleihin, joita tällä hetkellä on käytettäwissä 
            kaikkiaan yli 21,000. Yhteishuoneita on wain 229. Ruotsissa owat kaikki wankilat sellejä, ja on niitä wankiloissa yhteensä 3,683. Tanskan waltion wankiloissa on sellejä 1,576 ja yhteishuonetiloja 57. Kuntainkin ylläpitämissä 
            wankiloissa on sellejä suurin osa eli 1,774. Samaan tapaan on sellejä Norjassakin, waikka käytettäwissämme ei ole aiwan tarkkoja lukuja.</p>
          <p>Toisin on asianlaita meillä Suomessa. Waikka wankiloissa käytettäwissä olewien wankitilain lukumäärä onkin kaswanut wiimeisinä wuosina, ei eristämiseen soweltuwien sellien lukumäärä ole noussut sanottawammin sitten 
            wuoden 1914, jolloin Helsingin keskuswankilan eräs selliosasto walmistui. Kaswaneen wankiluwun tarpeisiin on otettu wanhoja kasarmirakennuksia, joissa jokseenkin yksinomaan on ollut wain yhteishuoneita.</p>
          <p>Asianlaita on siis tällä hetkellä sellainen, että runsas toinen puoli wangeista on sijoitettuna yhteishuoneisiin, joissa toisissa asuu jopa 30:kin wankiin asti. Wakinaisissa keskuswankiloissa, joissa kuritushuonewankeja 
            säilytetään, woidaan nykyisin pitää eristettynä wain 1,426 wankia. Yhteishuoneisiin on sijoitettuna 901. Lääninwankiloissa, joissa säilytetään etupäässä wankeuswankeja, on sellejä 922 ja yhteistiloja 468. 
            Tilapäisluontoisissa wankiloissa, pakkolaitoksissa, warawankiloissa ja wankisiirtoloissa, minne wankeja siirretään tilanahtauden takia wakinaisista wankiloista, owat käytettäwissä olewat 1,997 tilaa suurissa yhteishuoneissa.</p>
          <p>Että wankien säilyttämisestä yhteishuoneissa koituu suuria waaroja, on ilman muuta selwää. Siitä kärsii ensinnäkin wankilain turwallisuus ja järjestys. Ennenkaikkea peloittaa yhteishuoneissa kuitenkin se rikollinen 
            joukkohenki, joka niissä pesii ja joka pitkinä puhdeaikoina tempaa mukaansa kaikkein useimmat wangit. Juuri yhteishuoneiden olemassa olosta juontaneekin alkunsa se julkisuudessa usein esitetty wäite, että 'wankilat owat 
            rikollisuuden korkeakouluja'.</p>
          <p>Edellämainitun wankien tehokkaan eristämisen rinnalla, mihin esim. Norjassa liittyy wielä määrätyistä tapauksista wesileipärangaistuskin, on wankiluwun pienuuteen warmaan osaltaan waikuttanut myös käytäntöön tullut 
            tapa huoltaa tilapäisluontoisia rikollisia wapaudessa. Kun oikeusistuin woi myös harkinnan mukaan esettaa ehdollisesti tuomitun walwonnan alaiseksi, on tämä menettelytapa määrätyissä tapauksissa osoittautunut riittävän 
            tehokkaaksi yhteiskunnan suojelutoimenpiteeksi ilman, että rikoksia yleisestäwä näkökohta oli siitä tiettäwästi järkkynyt.</p>
          <p className="captionStyle">Paawo Mustala</p>
        </article>
        <article>
          <h2>Yleisiä uutisia</h2>
          <SubDivider className="dividerStyle" />
          <h3>Kieltolain walwominen hotelleissa, rawintoloissa ja klubeissa.</h3>
          <h4>Kieltolakiliitto haluaa tarkempaa walwontaa.</h4>
          <p>Kieltolakiliitto on lauantaina jättänyt waltioneuwostolle kirjelmän, jossa se anoo kieltolain tarkempaa walwontaa hotelleissa, rawintoloissa ja klubeissa. Kirjelmässä esitetään, että hotelleissa ja rawintoloissa tarjotaan 
            ja juodaan alkoholijuomia nykyisin sangen runsaasti ja wiitataan siihen, miten tällainen asiantila on omiaan antamaan oloistamme epäedullisen käsityksen esim. ulkomaalaisille. Kieltolain 26 § antaa kuitenkin  warsin laajan 
            wallan walwontaan ja suorastaan wielä welwoittaa usein toimittamaan tarkastuksia, jatketaan kirjelmässä.</p>
          <p>Kirjelmä päättyy pyyntöön, että hallitus kiinnittäisi huomiotaan lain ja järjestyksen walwontaan mainituissa paikoissa ja 'käyttäisi waltaansa ja auktoriteettiään rikollisuuden harjoittamisen lopettamiseksi myöskin näissä.'</p>
          <SubDivider className="dividerStyle" />
          <h3>4:s maatalouswiikko</h3>
          <h4>Pidetään wasta ensi wuoden puolella.</h4>
          <p>Wiime joulukuussa wietetyn kolmannen yleisen maatalouswiikon toimikunta on äskettäin pitämässään kokouksessa walinnut puheenjohtajansa, maatalousneuw. Hannes Rylanderin sekä jäsenensä agr. J. Jyskeen ja agr. S. Mattssonin 
            huolehtimaan wiikon järjestelyistä johtuwain juoksewien asiain hoidosta. Wiikon tilien tarkastajiksi on walittu toimittajat U. Ilmarinen ja Niilo W. Tiihonen.</p>
          <p>Maataloustuottajain Keskusliitolta ja Suomen Maatalousseurojen Keskusliitolta saamiensa waltuuksien nojalla on toimikunta, mikäli Maaseudun Tulevaisuus -lehti on saanut tietää, päättänyt, että neljättä yleistä maatalouswiikkoa 
            ei järjestetä tämän wuoden lopulla, waan kokoontuu toimikunta myöhemmin lähemmin päättämään, milloin wiikko järjestetään.</p>
          <SubDivider className="dividerStyle" />
          <h3>Maidon wienti Pietariin</h3>
          <h4>Wientimäärä entinen, 1 waunulasti päiwässä - Ostokyky Pietarissa huono.</h4>
          <p>Kun sopimus maidonwiennin aloittamisesta Suomesta Pietariin Walion ja wenäläisten kauppaedustajien kanssa allekirjoitettiin, oli tarkoituksena syyskuun puoliwälin tienoissa laajentaa sowittu wientimäärä, 1 waunulasti eli 6,000 
            litraa päiwässä, kaksinkertaiseksi. Näin ei kuitenkaan tapahtunut, waan on wienti tähän saakka tapahtunut entisessä laajuudessaan.</p>
          <p>Syynä siihen, ettei wientiä ole woitu suurentaa, on ollut osaksi kuluttajien huono ostokyky ja oman maidontuotannon kaswu. Menekkimahdollisuudet Pietarissa owat edelleen pysyneet pieninä ja toisaalta kaswoi Pietarin ympäristöseutujen 
            maidontuotanto syyskuun aikana huomattawasti, waikka nyttemmin on jo tapahtunut käänne päinwastaiseen suuntaan. Toistaiseksi ei kuitenkaan liene toiweita wiennin suurentamisesta.</p>
          <SubDivider className="dividerStyle" />
          <h3>Kaupunkikuntain dollarilaina</h3>
          <p>New Yorkista saapuneen sähkösanomatiedon mukaan on kaupunkikuntain lainamäärä siellä maksettu Suomen Pankin tilille</p>
          <p>Eri kaupunkien osuudet on lauantaina maksettu kaikille niille, jotka owat maksumääräyksensä Suomen Pankille lähettäneet.</p>
        </article>
        <article>
          <h3>Kunnalliswaalit Etelä-Hämeessä</h3>
          <h4>Etelä-Hämeen Kansallisliitto suosittelee porwarillista yhteistoimintaa.</h4>
          <p>Etelä-Hämeen Kansallisliiton piiriwaliokunnan kokouksessa Hämeenlinnassa toissa päiwänä käsiteltiin kysymystä lähestywistä kunnalliswaaleista. Keskustelun loputtua päätettiin kehoittaa waalipiirin kaikkia kansallisseuroja 
            ja kaikkia kokoomuspuolueeseen lukeutuwia kansalaisia waalipiiristä toimimaan siihen suuntaan, että porwarilliset puolueet ensi kunnalliswaaleissa esiintyisiwät yhtenäisenä rintamana wasemmistoa wastaan.</p>
        </article>
        <article>
          <h3>Hämeenlinnan pääsy waltion puhelinlinjan yhteyteen</h3>
          <h4>Siirtynyt joulukuun puoliväliin.</h4>
          <p>Kuten aikaisemmin kerroimme oli Hämeenlinnan pääsy valtion puhelinlinjan yhteyteen odotettawissa marraskuun alkuun mennessä. Saamamme tiedon mukaan woitanee puhelinliikenne waltion linjalla aloittaa kuitenkin wasta joulukuun 
            puoliwälissä, syystä että Ruotsista tilattu puhelinpöytä saatanee tänne wasta marraskuun lopulla. Puhelinkaapelit on jo saatu miltei kokonaan lasketuiksi niin että ainoastaan joitakin sisätöitä on vielä kesken.</p>
        </article>
        <article>
          <h3>Suuri tiluslohkominen Forssan kauppalan alueella</h3>
          <h4>Toistasataa uutta tilaa.</h4>
          <p>Läänin maaherra on wahwistanut tiluslohkomisen jolla Yliskylä nimisellä rälssitilalla N:o 3 Forssan kauppalan Ruhalan kylässä on eroitettu seuraawat uudet tilat: Jukola, Rentala, Kotiranta, Muisto, Lindell, Ruuhela, Halawa,
            Wuorinen, Jokiäyräs, Kauppala, Ruohola, Tammi, Riettula, Tähtelä, Rajala, Talonsiwu, Koiwula, Leinola, Mäenpää, Tiensyrjä, Rauhala, Kotilehto, Kallenmaa, Wahtera, Jokiniemi, Joki-Tuomela, Ojansiwu, Yhteinen. Peräpelto, Lehtoranta, 
            Osuusmaa, Koti, Maunula, Lehmusto, Lehti, Siltala, Päiwölä, Pirtinpohja, Koskela, Ruhleben, Tiili, Suvanto, Ketola, Palkit, Toiwola, Tilkku, Riihihuhta, Kulmala, Syrjälä, Tiehaara, Päiwärinne, Pajala, Salmela, Uutela, Leppäaho, 
            Wuoristo, Muru, Onnela, Ruoho, Metsä, Pihlaja, Sinikari, Kossila, Palmu, Kankainen, Wirtala, Puisto, Salomaa, Sawimaa, Haawisto, Uusitalo, Laakso, Jahkola, Eerikin-Keto, Koulu, Katinala, Unnala, Wemma, Heikkilä, Ojala, 
            Yhtymä, Soppi, Wuorimaa, Kotila, Reunala, Käänne, Koiwu, Mäki, Kari, Anttila, Junala, Puistola, Wilppula, Särmä, Ollikkala, Tienreuna, Sawipakka, Niinimaa, Saarimaa, Tipula, Onnila, Aura, Werhola, Päiwälä, Rajamaa, Suolehto, 
            Wähämäki, Kulma, Simola, Yrjölä, Siniaho, Koiwisto, Laaksola, Leino, Peltola, Ernestilä, Wälimaa, Wiita, Franssila, Luhtala, Radansiwu, Niemelä ja Tyynelä.</p>
        </article>

      </div>

      <br></br>
      <p className="captionStyle">Kansalliskirjaston digitaaliset aineistot</p>
      <br></br>
      <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389249?page=1">Linkki alkuperäiseen dokumenttiin (pdf)</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Hämeen Sanomat 1924</title> // metadata

// Export product component
export default Hasa1924Page