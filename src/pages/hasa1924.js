import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import "../styles/base/global.css"

import Divider from "../assets/divider.svg"

const Hasa1924Page = () => {
  return (
    <Layout titleText="Hämeen Sanomat 15.10.1924">
      <h2>Artikkeleita</h2>
      <h3>Keskiviikkona, lokakuun 15. päivänä vuonna 1924</h3>
      <Divider className="dividerStyle" />
      <div className="rowStyle">
        <div className="columnStyle">
          <Article titleText="Wankien suuresta lukumäärästä">
            <h4>Mahdollisuuksia wankien eristämiseen puuttuu</h4>
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
              joukkohenki, joka niissä pesii ja joka pitkinä puhdeaikoina tempaa mukaansa kaikkein useimmat wangit. Juuri yhteishuoneiden olemassa olosta juontaneekin alkunsa se julkisuudessa usein esitetty wäite, että „wankilat owat 
              rikollisuuden korkeakouluja”.</p>
            <p>Edellämainitun wankien tehokkaan eristämisen rinnalla, mihin esim. Norjassa liittyy wielä määrätyistä tapauksista wesileipärangaistuskin, on wankiluwun pienuuteen warmaan osaltaan waikuttanut myös käytäntöön tullut 
              tapa huoltaa tilapäisluontoisia rikollisia wapaudessa. Kun oikeusistuin woi myös harkinnan mukaan esettaa ehdollisesti tuomitun walwonnan alaiseksi, on tämä menettelytapa määrätyissä tapauksissa osoittautunut riittävän 
              tehokkaaksi yhteiskunnan suojelutoimenpiteeksi ilman, että rikoksia yleisestäwä näkökohta oli siitä tiettäwästi järkkynyt.</p>
            <p className="captionStyle">Paawo Mustala</p>
          </Article>
          <Article titleText="Kieltolain walwominen hotelleissa, rawintoloissa ja klubeissa">
            <h4>Kieltolakiliitto haluaa tarkempaa walwontaa.</h4>
            <p>Kieltolakiliitto on lauantaina jättänyt waltioneuwostolle kirjelmän, jossa se anoo kieltolain tarkempaa walwontaa hotelleissa, rawintoloissa ja klubeissa. Kirjelmässä esitetään, että hotelleissa ja rawintoloissa tarjotaan 
              ja juodaan alkoholijuomia nykyisin sangen runsaasti ja wiitataan siihen, miten tällainen asiantila on omiaan antamaan oloistamme epäedullisen käsityksen esim. ulkomaalaisille. Kieltolain 26 § antaa kuitenkin  warsin laajan 
              wallan walwontaan ja suorastaan wielä welwoittaa usein toimittamaan tarkastuksia, jatketaan kirjelmässä.</p>
            <p>Kirjelmä päättyy pyyntöön, että hallitus kiinnittäisi huomiotaan lain ja järjestyksen walwontaan mainituissa paikoissa ja „käyttäisi waltaansa ja auktoriteettiään rikollisuuden harjoittamisen lopettamiseksi myöskin näissä.”</p>
          </Article>
          <Article titleText="4:s maatalouswiikko">
            <h4>Pidetään wasta ensi wuoden puolella.</h4>
            <p>Wiime joulukuussa wietetyn kolmannen yleisen maatalouswiikon toimikunta on äskettäin pitämässään kokouksessa walinnut puheenjohtajansa, maatalousneuw. Hannes Rylanderin sekä jäsenensä agr. J. Jyskeen ja agr. S. Mattssonin 
              huolehtimaan wiikon järjestelyistä johtuwain juoksewien asiain hoidosta. Wiikon tilien tarkastajiksi on walittu toimittajat U. Ilmarinen ja Niilo W. Tiihonen.</p>
            <p>Maataloustuottajain Keskusliitolta ja Suomen Maatalousseurojen Keskusliitolta saamiensa waltuuksien nojalla on toimikunta, mikäli Maaseudun Tulevaisuus -lehti on saanut tietää, päättänyt, että neljättä yleistä maatalouswiikkoa 
              ei järjestetä tämän wuoden lopulla, waan kokoontuu toimikunta myöhemmin lähemmin päättämään, milloin wiikko järjestetään.</p>
          </Article>
          <Article titleText="Maidon wienti Pietariin">
            <h4>Wientimäärä entinen, 1 waunulasti päiwässä - Ostokyky Pietarissa huono.</h4>
            <p>Kun sopimus maidonwiennin aloittamisesta Suomesta Pietariin Walion ja wenäläisten kauppaedustajien kanssa allekirjoitettiin, oli tarkoituksena syyskuun puoliwälin tienoissa laajentaa sowittu wientimäärä, 1 waunulasti eli 6,000 
              litraa päiwässä, kaksinkertaiseksi. Näin ei kuitenkaan tapahtunut, waan on wienti tähän saakka tapahtunut entisessä laajuudessaan.</p>
            <p>Syynä siihen, ettei wientiä ole woitu suurentaa, on ollut osaksi kuluttajien huono ostokyky ja oman maidontuotannon kaswu. Menekkimahdollisuudet Pietarissa owat edelleen pysyneet pieninä ja toisaalta kaswoi Pietarin ympäristöseutujen 
              maidontuotanto syyskuun aikana huomattawasti, waikka nyttemmin on jo tapahtunut käänne päinwastaiseen suuntaan. Toistaiseksi ei kuitenkaan liene toiweita wiennin suurentamisesta.</p>
          </Article>
          <Article titleText="Kaupunkikuntain dollarilaina">
            <p>New Yorkista saapuneen sähkösanomatiedon mukaan on kaupunkikuntain lainamäärä siellä maksettu Suomen Pankin tilille</p>
            <p>Eri kaupunkien osuudet on lauantaina maksettu kaikille niille, jotka owat maksumääräyksensä Suomen Pankille lähettäneet.</p>
          </Article>
          <Article titleText="Kunnalliswaalit Etelä-Hämeessä">
            <h4>Etelä-Hämeen Kansallisliitto suosittelee porwarillista yhteistoimintaa.</h4>
            <p>Etelä-Hämeen Kansallisliiton piiriwaliokunnan kokouksessa Hämeenlinnassa toissa päiwänä käsiteltiin kysymystä lähestywistä kunnalliswaaleista. Keskustelun loputtua päätettiin kehoittaa waalipiirin kaikkia kansallisseuroja 
              ja kaikkia kokoomuspuolueeseen lukeutuwia kansalaisia waalipiiristä toimimaan siihen suuntaan, että porwarilliset puolueet ensi kunnalliswaaleissa esiintyisiwät yhtenäisenä rintamana wasemmistoa wastaan.</p>
          </Article>
          <Article titleText="Hämeenlinnan pääsy waltion puhelinlinjan yhteyteen">
            <h4>Siirtynyt joulukuun puoliväliin.</h4>
            <p>Kuten aikaisemmin kerroimme oli Hämeenlinnan pääsy valtion puhelinlinjan yhteyteen odotettawissa marraskuun alkuun mennessä. Saamamme tiedon mukaan woitanee puhelinliikenne waltion linjalla aloittaa kuitenkin wasta joulukuun 
              puoliwälissä, syystä että Ruotsista tilattu puhelinpöytä saatanee tänne wasta marraskuun lopulla. Puhelinkaapelit on jo saatu miltei kokonaan lasketuiksi niin että ainoastaan joitakin sisätöitä on vielä kesken.</p>
          </Article>
          <Article titleText="Suuri tiluslohkominen Forssan kauppalan alueella">
            <h4>Toistasataa uutta tilaa.</h4>
            <p>Läänin maaherra on wahwistanut tiluslohkomisen jolla Yliskylä nimisellä rälssitilalla N:o 3 Forssan kauppalan Ruhalan kylässä on eroitettu seuraawat uudet tilat: Jukola, Rentala, Kotiranta, Muisto, Lindell, Ruuhela, Halawa,
              Wuorinen, Jokiäyräs, Kauppala, Ruohola, Tammi, Riettula, Tähtelä, Rajala, Talonsiwu, Koiwula, Leinola, Mäenpää, Tiensyrjä, Rauhala, Kotilehto, Kallenmaa, Wahtera, Jokiniemi, Joki-Tuomela, Ojansiwu, Yhteinen. Peräpelto, Lehtoranta, 
              Osuusmaa, Koti, Maunula, Lehmusto, Lehti, Siltala, Päiwölä, Pirtinpohja, Koskela, Ruhleben, Tiili, Suvanto, Ketola, Palkit, Toiwola, Tilkku, Riihihuhta, Kulmala, Syrjälä, Tiehaara, Päiwärinne, Pajala, Salmela, Uutela, Leppäaho, 
              Wuoristo, Muru, Onnela, Ruoho, Metsä, Pihlaja, Sinikari, Kossila, Palmu, Kankainen, Wirtala, Puisto, Salomaa, Sawimaa, Haawisto, Uusitalo, Laakso, Jahkola, Eerikin-Keto, Koulu, Katinala, Unnala, Wemma, Heikkilä, Ojala, 
              Yhtymä, Soppi, Wuorimaa, Kotila, Reunala, Käänne, Koiwu, Mäki, Kari, Anttila, Junala, Puistola, Wilppula, Särmä, Ollikkala, Tienreuna, Sawipakka, Niinimaa, Saarimaa, Tipula, Onnila, Aura, Werhola, Päiwälä, Rajamaa, Suolehto, 
              Wähämäki, Kulma, Simola, Yrjölä, Siniaho, Koiwisto, Laaksola, Leino, Peltola, Ernestilä, Wälimaa, Wiita, Franssila, Luhtala, Radansiwu, Niemelä ja Tyynelä.</p>
          </Article>
          <Article titleText="Talo- ja omaisuusweronkanto Hämeenlinnassa">
            <h4>Maksettawa t.k 23-25 pnä.</h4>
            <p>W:lta 1923 suoritettavan tulo- ja omaisuusweron kanto Hämeenlinnassa toimitetaan lääninrahastossa seuraavassa järjestyksessä:</p>
            <p>Lokakuun 23 pnä suorittavat weronsa ne, joiden sukunimi alkaa kirjaimilla A-K, lokakuun 24pnä kirjaimilla K-P ja lokakuun 25 pnä kirjaimilla P-Ö. Kannot toimitetaan päiwällä klo 1-4</p>
            <p>Samalla ilmoitetaan, että weromäärät owat suoritettawat sillä uhalla, että werot heti kannon jälkeen peritään ulosottoteitse, jolloin werowelwollisen, joka on jättänyt weronsa kantotilaisuudessa suorittamatta, tulee maksaa 
              lisäweroa markan sadalta ja sen osalta kuukaudelta.</p>
          </Article>
        </div>
        
        <div className="columnStyle">
          <Article titleText="Oppiwelwollisuuden täytäntöönpano">
            <h4>Kouluhallitus wahwistanut Wanajan kunnan kunnanwaltuuston täytäntöönpanosuunnitelman.</h4>
            <p>Kouluhallitus on nyttemmin wahwistanut Wanajan kunnan kunnanwaltuuston laatiman oppiwelwollisuuden täytäntöönpanosuunnitelman. Pääpiirteissään on nyt hywäksytty suunnitelma seuraawa piirittäin tarkastettuna:</p>
            <p><span className="boldStyle">Harwialan</span> piiri: Piirissä on täydellinen kansakoulu kahdelle yläkoulun ja yhdelle alakoulun opettajalle, joka alkoi toimintansa syksyllä 1923 toimien kansakoululla. Oppiwelwollisuus astuu täyteen woimaan syksyllä 1924, jolloin myös 
              jatko-opetus pannaan toimeen.</p>
            <p><span className="boldStyle">Heinäjoen</span> piirissä on täydellinen kansakoulu yhdelle ylä- ja yhdelle alakoulun opettajalle. Alakoulu perustetaan piiriin w. 1934, jolloin oppiwelwollisuus piirissä astuu täyteen woimaan sekä myös jatko-opetus pannaan toimeen. 
              Oppiwelwollisia lapsia on piirissä 32 ylä- ja 12 alakouluikäisiä.</p>
            <p><span className="boldStyle">Kankaantaustan</span> piirissä on täydellinen kansakoulu kahdelle ylä- ja yhdelle alakoulun opettajalle. Piirin alakansakoulu alkaa toimintansa 1924 ja oppiwelwollisuus astuu täydellisenä woimaan w. 1925. 
              Oppiwelwollisia lapsia on piirissä 72 ylä- ja 29 alakouluikäisiä.</p>
            <p><span className="boldStyle">Kankaisten</span> piiriin tulee täydellinen kansakoulu yhdelle ylä- ja yhdelle alakoulun opettajalle. Näiden walmistumiseen asti w. 1928 käywät piirin oppiwelwolliset lapset. 23 ylä- ja 18 alakouluikäistä, Ruununmyllyn 
              koulussa. Oppiwelwollisuus astuu täydellisenä woimaan piirissä w. 1930.</p>
            <p><span className="boldStyle">Kirkonkylän</span> piirissä on täydellinen kansakoulu yhdelle ylä- ja yhdelle alakoulun opettajalle. Alakoulu, nykyään yhteisenä Ruununmyllyn piirin kanssa, alkaa itsenäisenä toimintansa w. 1930, jota seuraawana wuonna oppiwelwollisuus 
              astuu täyteen woimaan. Oppiwelwollisia lapsia on piirissä 42 ylä- ja 11 alakouluikäisiä.</p>
            <p><span className="boldStyle">Kirrin</span> piiriin tulee supistettu kansakoulu yhdellä opettajalla. Koulurakennuksia ei wielä ole, waan käywät lapset toistaiseksi muissa koulupiireissä. Kansakoulu perustetaan oppiwelwollisten luwun piirissä rittäwän w. 1931 
              ja oppiwelwollisuus astuu täydellisenä woimaan w. 1936. Kouluikäisiä lapsia on piirissä 12 ylä- ja 4 alakouluikäisiä.</p>
            <p><span className="boldStyle">Luolajan</span> piirissä on täydellinen kansakoulu yhdelle ylä- ja yhdelle alakoulun opettajalle, ollen se sijoitettuna wuokrahuoneisiin, kunnes lainmukaiset rakennukset ylä- ja alakoulua warten walmistuwat syksyllä w. 1924, jolloin alakoulu 
              aloittaa toimintansa omassa huoneistossa. Oppiwelwollisuus astuu täyteen woimaan w. 1925. Oppiwelwollisia piirissä 45 ylä- ja 20 alakouluikäistä.</p>
            <p><span className="boldStyle">Joki-Mallinkaisten</span> piiriin tulee täydellinen kansakoulu yhteisesti Janakkalan kunnan kanssa, walmistuen koulutalo w. 1926, jolloin oppiwelwollisuus astuu täydellisenä woimaan. Oppiwelwollisia 11 ylä- ja 5 alakouluikäistä.</p>
            <p><span className="boldStyle">Miemalan</span> piirissä on täydellinen kansakoulu yhdelle ylä- ja yhdelle alakoulun opettajalle. Oppiwelwollisuus astuu täyteen woimaan w. 1936. Oppiwelwollisia 30 ylä- ja 8 alakouluikäistä.</p>
            <p><span className="boldStyle">Rastilan</span> piiriin tulee supistettu kansakoulu yhdellä opettajalla. Alakansakoulu wuokrahuoneisiin sijoitettuna alkaa 1926. Oppiwelwollisuus astuu täyteen woimaan w. 1936. Oppiwelwollisia 18 ylä- ja alakouluikäisiä.</p>
            <p><span className="boldStyle">Ruununmyllyn</span> piirissä on täydellinen koulu kahdelle ylä- ja yhdelle alakoulun opettajalle. Oppiwelwollisuus astuu täydellisenä woimaan w. 1925. Oppiwelwollisia piirissä 62 ylä- ja 28 alakouluikäisiä.</p>
          </Article>
          <Article titleText="Riihimäen - Hämeenlinnan wälinen rautatieliikenne">
            <h4>Parannukset liikennesuhteissa olisiwat toiwottawat.</h4>
            <p>Riih. San. kirjoittawat:</p>
            <p>Riihimäen-Hämeenlinnan wälisen rautatieliikenteen wilkastuttamisen hywäksi on puhuttu ja sanoin kirjoitettu siksi paljon, että lienee turhaa samasta asiasta enää mitään hiiskua.</p>
            <p>Mutta sittenkin on siitä puhuttawa niinkauan, että siihen parannus saadaan aikaan.</p>
            <p>Pääkaupungin läheistä junaliikennettä täytyy kaukaisemman maalaisasukkaan kademielin ajatella. Siellähän tulee ja menee junia joka minuutin wäliajalla, harwentuakseen heti muutamien asemien päästä Helsingistä. Ja kuitenkin olisi samanlainen paikallisjunien kulku Hämeenlinnaan ja 
              ehkä Tampereellekin saakka aiwan wälttämätön ja ajan pakottamana tuleekin sellaiseksi, waikka wielä toistaiseksi saadaan kuuroille korwille saarnata.</p>
            <p>Kaupanteko lähimpien liikekeskuksien kanssa edellyttää wilkkaampaa junayhteyttä. Työwäki samoin asuu jo paljon maaseudulla käydessään työssä liikekeskuksissa ja kaupungeissa. Koululaiset täyttäwät aamuin illoin waunuja, jos waan woisiwat kotonaan käydä. Mutta nykyisen järjestelmän 
              wallitessa on tämä kulku mahdotonta. Saawat waan maksaa kalliita kortteereja tahi jäädä koulusta pois. Helsingin koulut sitäwastoin owat tupaten täynnä, kun ympäristöltä on sopiva junankulun wuoksi koulua käydä.</p>
            <p>Riihimäesta pääsewät wasta myöhään illalla pohjoisen puolen koululaiset kotiinsa ja niin myöhään ei enää kannata lähteä. Täytyy warata kortteeripaikka.</p>
            <p>Maaseutulaiset eiwät turhaan napise pääkaupunkia wastaan, sen mukawuuksista kun niin hellästti huolehditaan. Mutta juuri maaseutu saa tyytyä mihin waan.</p>
            <p>Ei saata olla sanomatta, waikka kiwikkoon sanat putoilewatkin, sitäkin kuwaawaa seikkaa, että walaistuksenkin rautatien asemilla pitää olla kurjempi etäämmillä seuduilla pääkaupungista. Esim. Ryttylän asemalla on kituutettu tähän saakka ja luultawasti sata wuotta eteenpäinkin öljywalolla, 
              waikka yleensä kaikissa waltion laitoksissa on sähköwalo. Se on liikenteen kiusana ja sen laitoksen häpeänä, joka liikettä hoitaa, mutta annetaan olla waan, kun se on maaseutua, kunhan pääkaupungin asemalla waan on monen sadan kynttilän sähköwalot loistamassa.</p>
          </Article>
          <Article titleText="Hämeenlinnan piirin kansakoulut">
            <p><span className="boldStyle">William Ruthin</span> kaswatusapurahat on kouluhallitus julistanut haettawaksi tämän lokakuun kuluessa. Apurahoja owat oikeutetut saamaan kansakoulun opettajien ja opettajien leskien lapset, jotka käywät joko oppikoulua tai jotain ammattilaiskoulua. 
              Hakemukset owat tämän kuun aikana jätettäwät asianomaiselle kansakoulun tarkastajalle, jolta saa lähempiä tietoja.</p>
              <p><span className="boldStyle">Opettajawaalit.</span> Lammin kunnan Neroskulman yläkansakoulun opettajaksi on walittu opettajatar Anna Sawolainen.</p>
          </Article>
          <Article titleText="Pyrkimys Mommilan yhdistämisestä Hausjärween">
            <h4>Kirkonkokous Lammilla.</h4>
            <p>Lammin eteläkulma Mommila on ryhtynyt toimenpiteisiin saadakseen alueensa kirkollisessa ja kunnallisessa y.m. suhteessa siirretyksi Hausjärween. Tampereen tuomiokapitulin määräämänä piti Hämeenlinnan kappalainen, kirkkoherra H. A. Autero wiime sunnuntaina t.k. 12 pnä kirkonkokouksen Lammin 
              kirkossa eroanomuksen johdosta. Kun Mommilan seudun seurakunnallinen hoito on järjestetty mahdollisimman hywin siten, että Lammin papit käywät siellä kerran kuussa pitämässä jumalanpalweluksia suorittaen samalla kirkollisia toimituksia ja Mommilaan palkattu saarnaaja pitää muina sunnuntai- 
              ja juhlapäiwinä jumalanpalwelukset sekä rippikouluoppilaatkin saawat alkuwalmistuksen saarnaajalta, wastustettiin eropyyntöä yksimieliesti.</p>
            <p>Samanlainen kirkonkokous tulee pidettäwäksi myös Hausjärwellä.</p>
          </Article>
          <Article titleText="Riihimäen elintarwejuttu">
            <h4>Howioikens kumonnut kihlakunnanoikenden päätöksen.</h4>
            <p>Kuten aikaisemmin on kerrottu, waati tilanomistaja Gestrin Riihimäeltä aikanaan Riihimäen elintarwelautakunnalta takaisin niille lainaamiaan 15,000 mk., jotka kapinatalwella oli käytetty juuston ostamiseen. Hausjärwen n.m. pitäjäin käräjillä kanne kumottiin, koska laina oli myönnetty 
              kapinallisille. Kantajan asiamies waratuomari Hyrkki ilmoitti heti tyytymättömyyttä ja onkin howioikeus tällä wiikolla antamallaan päätöksellä kumonnut hra Hyrkin Hämeelle antaman tiedon mukaan, kihlakunnanoikeuden päätöksen, määräten mainitut 15,000 mk. hra Gestrinille maksettawiksi 
              sekä lisäksi korot ja kuluja 1,500 mk.Howioikeuden päätöksen pääasiallisin peruste on se, että mainitut warat joka tapauksessa on tullut käytetyksi Riihimäen asukkaitten rawitsemiseksi.</p>
          </Article>
          <Article titleText="Suuria wiinatakawarikkoja">
            <p>Mikäli F. L. on saanut kuulla, on Pusulassa Ikkalan kylässä wiime wiikolla tehty suuria wiinatakawarikkoja. Wiime wiikon maanantai-iltana takawarikoiwat poliisit maantiellä erään helsinkiläisen wuokra-auton, jossa oli pirtua 300 litraa. Wiinat kuluiwat jollekin Jokioisten miehelle ja joutuiwat 
              ne waltiolle samoinkuin autokin. Torstai-iltana otettiin samoin kiinni muuan auto, jossa oli spriitä 350 litraa. Wiinat kuuluiwat jollekin somerolaiselle trokarille ja auto Salolaiselle. Samana iltana pidätettiin myös erään Kiikalan miehen hewonen ja takawarikoitiin kärryiltä 190 litraa pirtua. 
              Mikäli on ilmoitettu, wirtaa Pusulan läwitse nykyään suuria määriä pirtua, josta osoituksena on tämäkin wiikkosaalis: 2 autoa, hewonen kärryineen ja 840 litraa spriitä.</p>
          </Article>
          <Article titleText="Sunnuntaina raaka werityö Sortawalassa">
            <p>Wiime sunnuntaina tapahtui Sortawalassa Keskuskahwilan nurkkauksella raaka werityö, jolloin eräs spriikauppias H. Karwinen sai keuhkopussiin ulottuwan puukonhaawan. Kuolema seurasi hetken kuluttua. Riita oli aiheutunut wiina-asioista. Murhaaja pidätettiin.</p>
          </Article>
          <Article titleText="Werityöt yhä lisääntywät">
            <h4>Kaksi raakaa murhaa Kotkassa lauantaina. Wäkijuomilla aina osansa tihutöihin.</h4>
            <p>Wiime lauantai-iltana tapahtui Kotkassa kaksi raakaa werityötä jotka kumpikin aiheuttiwat ihmishengen hukan. Tapahtumista ilmoitetaan: Klo 10 tienoissa lauantai-iltana oliwat joutomies Arwid Reiman ja maanwiljelijä Alfred Marttila jostain syystä riitaantuneet, mistä seurauksena oli, että edellämainittu iski punkolla useita kertoja 
              Narttilaa. Puukotettu wietiin heti murhapaikalta kaupungin sairaalaan, missä hän kuitenkin jo noin puolen tunnin kuluttua heitti henkensä. Puukottaja on syntynyt 1898 ja on ennestään hywin tuttu poliisille. Marttila oli syntynyt Pyhtäällä 1889. </p>
            <p>Pari tuntia myöhemmin, klo 12 tienoissa, tapahtui toinen werityö. Mainittuun aikaan ampui työmies Wäinö Jaakko Ihamäki, kotoisin Kauhawalta, kolme pistoolinlaukausta metallityömies Elis Mattssonia kohti. Ammuttu wietiin heti sairaalaan, mutta kuoli siellä lyhyen ajan kuluttua, Kummassakin tapauksessa on wäkijuomilla osansa. </p>
          </Article>
        </div>

      </div>

      <br></br>
      <p className="captionStyle">Kansalliskirjaston digitaaliset aineistot</p>
      <br></br>
      <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/binding/1389249?page=1">Linkki alkuperäiseen dokumenttiin</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Hämeen Sanomat 1924</title> // metadata

// Export product component
export default Hasa1924Page