import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"

import SubDivider from "../assets/sub-divider.svg"

import "../styles/base/global.css"

const Crimes1914Page = () => {
  return (
    <Layout titleText="Hämeen Sanomat, 1914">
      <h2>Oikeus- ja poliisiasioita</h2>

      <div className="interTitle">3.1.1914</div>
      <Article titleText="Ankara tappelu Muolassa">
        <h5>20 henkeä haawoittunut.</h5>
        <p>Tapaninpäiwän iltana wietti Muolan Punnustien nuorisoseura iltaman sikäläisellä palokunnantalolla. Heti iltaman alkaessa nosti joukko juopuneita hirweän tappelun. Tappelun 
            kiihkeimmillään ollessa otti siihen osaa noin 100 henkeä. Aseina käyttiwät puukkoja, nyrkkirautoja, lyijypamppuja, tuolia, pöytiä, rewolwereja, halkoja, seipäitä, partaweitsiä 
            ja hawukirweitä. Sen mukaan kuin tähän asti on tiedossa, sai Wille Uimi-niminen mies sywän puukonhaawan rintaansa, Jalmari Monoselta lyötiin puukolla wasemman käden sormet poikki 
            ja suuri haawa olkapäähän, Mikko Pekonen sai ammottawan haawan hartioihinsa, Jalmari Tikkanen kolme puukonhaawaa päähänsä. Eräältä mieheltä taas lyötiin pois toinen korwa juuriaan 
            myöten ja löydettiin se tappelun jälkeen lattialta. Paikalla ollut Muolan apulaisnimismies 4 poliisin kera oli aiwan woimaton. Nyttemmin on 4 pahinta pukaria wangittu.</p>
      </Article>

      <div className="interTitle">8.1.1914</div>
      <Article titleText="Kaksoisryöstömurha Tuusulassa.">
        <h5>Werityöntekijä todettu.</h5>
        <p>Nyttemmin on saatu todistetuksi, että Forssassa pidätetty Robert Merinen on Tuusulan kamalan werityön tekijä, waikka hän wiimeisiin asti itse on julman työnsä kieltänyt. Tuusulan 
            piirin nimismies Seitola on passittanut Merisen Helsingin etsiwästä osastosta, jossa häntä tähän asti on säilytetty, Hämeenlinnan wankilaan, mistä hänet wiedään tänään Tammelan 
            wälikäräjille wastaamaan Tammelassa tekemästään murtowarkaudesta. Helmikuun alussa, toisten lähemmin määrättäwänä päiwänä, tulee hän lähetettäwäksi wälikäräjille Tuusulaan, 
            wastaamaan sekä Stenwall-puolisoiden murhasta että Tuusulan Rusutjärwen kylässä wuosi sitten tekemästään murtowarkaudesta. Tämän jälkeen lähetetään hänet takaisin Hämeenlinnaan 
            wastaamaan Hämeenlinnan raastuwanoikeudessa kaksi wuotta sitten tekemästään, nyt ilmisaadusta rahawarkaudesta.</p>
        <p>Tämä tunnettu pahantekijä on kotoisin Nurmijärweltä, ja on hän 39-wuotias irtolainen, jota jo ennen on kolme kertaa rangaistu, nim. kahdesti murtowarkaudesta ja kerran 
            pahoinpitelystä. Hän on tunnettujen pahantekijöiden Sinisalon ja Lepän hywiä tuttawia.</p>
      </Article>

      <div className="interTitle">13.1.1914</div>
      <Article titleText="Mies paleltunut kuoliaaksi.">
        <p>Keskiwiikkona iltapäiwällä lähti palstatil. poika Janne Malin Wanajan pit. Kappolan kylästä kyyditsemään metsäkoulun oppilasta Kaarlo Kallioo hewosella Ewolle. Kuljettuaan noin 5 km. 
          oli Malin kieltäytynyt edemmäksi lähtemästä, josta tuli pieni riita. Tällöin saawuttiwat 2 saman koulun oppilasta Kallion, jolloin tämä pyysi päästä Syrjäntaka. Malin jäi hewosineen tielle. 
          Wähän ajan kuluttua ajoi Malin ohi sekä taas wastaan, jonka jälkeen ei Kallio nähnyt Malinta. Kun Malinia ei seuraawan päiwän iltana kuulunut kotiin, alkoi kotiwäki kaiwata ja saadakseen 
          tietoa, soittiwat Ewon opistolle, missä Kallio kertoi, mitä hän asiasta tiesi. Tämän jälkeen lähtiwät Malinin isä ja konstaapeli Mäkinen lauantai-aamuna Syrjäntaan majataloon ja saiwat 
          kuulla, että puolenpäiwän aikaan mies heiniä hakiessaan oli tawannut irtonaisen hewosen lähellä sitä paikkaa, johon Malin ajoi. Hewonen, joka oli sidottu puuhun, tunnettiin M. omaksi. Malin 
          itse löydettiin tien suusta, metsästä kuolleena. Kumpikin sekä kyyditsijä että kyydittäwä lienewät olleen humalassa.</p>
      </Article>

      <div className="interTitle">22.1.1914</div>
      <Article titleText="Kuolemanrangaistuksen käytäntöönottamista">
        <h5>törkeistä murhista tuomitessa suosittelee nimim. T. M. K. „U. Aurassa".</h5>
        <p>Kirjoittaja huomauttaa ensin, että törkeät wäkiwallanteot eiwät ole meillä wiime wuosina wähentyneet, waan päinwastoin lisääntyneet. Hänen mielestään waikuttaa tähän osaltaan myös se, että 
          rangaistuksia liian liewästi sowelletaan -  Mitä merkitsee tätä nykyä murhamiehelle elinkautinen kuritushuone? Werraten mukawaa oleskelua waltion kustannuksella näinä taloudellisesti 
          waikeina aikoina.</p>
        <p>Toista on, jos näistä rikollisen toiweista tehdään lyhyt loppu: asetetaan hänen silmäinsä eteen mahdollisuus, että teosta woi mennä henki ja elämä. Täytyy olla jo parantumattoman paatunut, 
          joka henkensä jättää ainoastaan sen uskon waraan, ettei joudu teostaan kiinni.</p>
        <p>Se siweellinen willintyminen, jota Tuusulan kaksoismurha ja monet muut yhtä pöyristyttäwät kalmantyöt osoittawat, waatiwat woimakasta wastawaikutusta. 
          Taliooniperiaate: <span className="quote">joka weljensä weren wuodattaa, hänen werensä pitää myöskin wuodatettaman</span>, on otettawa käytäntöön. Sitä waatii paitsi turwallisuus, murhatun 
          omaisten ja yhteiskunnan oikeutettu sowituksen tunnekin.</p>
        <p>Kuolemantuomiotakin on taidolla käytettäwä. Asetta ei saa kuluttaa. Mutta törkeät murhat owat kuolemalla sowitettawat. Tieto yhdenkin kuolemantuomion täytäntöönpanosta on herättäwä 
          terweellistä kauhua uusien hirmutöiden suunnittelijoissa, sen sijaan että kuoleman-rangaistuksenuhka, jota ei koskaan toteuteta, on wain omansa lewittämään käsitystä lain woimattomuudesta. 
          Senwuoksi, tuomarit, soweltakaa kuolemanrangaistusta törkeissä murhissa. Sitä waatii tätä nykyä yleinen oikeuskäsitys.</p>
      </Article>

      <div className="interTitle">27.1.1914</div>
      <Article titleText="Murha Rengossa.">
        <p>Wiime sunnuntai-iltana klo 11-12 wälillä murhattiin Rengon Muurilassa maantiellä räätäli Otto Laine, jossa oli ollut kyläilemässä. L. oli mennyt katsomaan kylällä olewaa melua sekä hypännyt rähisijäin reen kannaksille sekä 
          kieltänyt näitä huutamasta, jolloin joutolainen Willehard Mustalammi oli lyönyt häntä puukolla. L. oli juossut Uotilan pihaan ja kuollut sinne.</p>
        <p>Murhaajat Mustalammi Hattulasta ja Jokinen Urjalasta wangittiin.</p>
        <p>Laine oli perheellinen mies ja 4 lapsen isä sekä tunnettu siiwoksi mieheksi.</p>
      </Article>

      <div className="interTitle">17.2.1914</div>
      <Article titleText="Nimismies Zimmermanin murhapolttojuttu.">
        <h5>Palwelustyttö tunnustanut.</h5>
        <p>Wiime keskiwiikkona matkusti Kuopion poliisilaitoksen etsiwän osaston komisarius G. Luukanen Karttulaan kuwernöörin käskystä tutkimaan nimismies Zimmermannin asunnossa tapahtuneita 
          murhapolttoja sillä seurauksella, että Zimmermannin palwelustyttö Lyydia Raatikainen perjantaina tunnusti, että hän oli sytyttänyt herraswäki Zimmermannin käskystä tulen makuukamariin.</p>
        <p>Nimismies Zimmerman puolisoneen ja heidän palwelijattarensa Lyydia Raatikainen owat nyttemmin passitetut Kuopion lääninwankilaan.</p>
        <div className="interTitle">3.3.1914</div>
        <h5>Tuomio julistettu.</h5>
        <p>Tuomio Karttulan murhapolttojutussa julistettiin w. k. 27 p. Karttulan wälikäräjillä. Herra ja rouwa Zimmermann sekä palwelijatar Lydia Raatikainen tuomittiin kuritushuoneeseen, nimismies 
          Zimmermann 8, rouwa Zimmermann 6 ja Lydia Raatikainen 4 wuodeksi, sekä sen lisäksi herra Z. olemaan 10 wuotta, rwa Z 8 ja Raatikainen 6 wuotta kansalaisluottamusta wailla. Sitäpaitsi 
          julistettiin nimismies Zimmermann menettämään wirkansa. Herra ja rouwa Zimmermann welwotettiin Karttulan paloapuyhdistykselle maksamaan kulunkeja 874 mk. 34 p. Päätös alistettiin howioikeuden 
          harkittawaksi. Herra ja rouwa Zimmermann ilmoittiwat tyytymättömyyttä päätökseen, jota wastoin palwelijatar Lydia Raatikainen siihen tyytyi. Tuomitut passitettiin Kuopion lääninwankilaan.</p>
        <p>Wirallinen syyttäjä oli luopunut palwelijattaren makaamista koskewasta edeswastuuwaatimuksesta nimismies Z, kun asiasta ei ollut täyttä selwyyttä.</p>
        <div className="interTitle">9.6.1914</div>
        <h5>Uusi käänne.</h5>
        <p>Palwelijatar Lyydia Raatikainen, jonka Karttulan käräjäkunnan kihlakunnanoikeus tuomitsi tunnetussa Zimmermannien murhapolttojutussa 4 w. kuritushuoneeseen murhapoltosta ja jota 
          säilytetään nykyään Kuopion lääninwankilassa, on lääninwankilan johtajalle kertonut, että hän oli sekä juttua koskewassa poliisitutkinnossa että kihlakunnanoikeudessa walehdellut, että 
          rouwa Zimmerman, jonka oikeus tuomitsi murhapoltosta 6 wuodeksi kuritushuoneeseen, olisi ollut murhapolttoon syyllinen. Omatuntonsa on pakottanut hänet nyt ilmoittamaan että hän pitäen hra 
          Zimmermannista enemmän kuin rouwasta oli koettanut saada rwa Z:n myöskin osalliseksi rikokseen luultawasti siten woiwansa liewentää hra Z:n rangaistusta. Raatikainen on tunnustanut 
          ainoastaan hra Z:in kehotuksesta palot sytyttäneensä sekä ilmoittanut että rwa Z on kokonaan syytön. Lääninwankilan johtaja on lähettänyt tutkintopöytäkirjan Wiipurin howioikeudelle.</p>
      </Article>

      <div className="interTitle">3.3.1914</div>
      <Article titleText="Pasternackin wangitseminen.">
        <p>Kun kauppias Isak Pasternak, joka wiime maanantaina saapui Tampereelle, oli mennyt Procopèn asianajotoimistoon neuwotellakseen asiamiehensä kanssa, saapui sinne kohta 2 etsiwää poliisia ja 
          wangitsiwat Pasternakin, sanoen sen tekewänsä kuwernöörin käskystä ilmoittamatta kuitenkaan syytä wangitsemiseen. Keskiwiikkona tuotiin P. sitte wanginwartijan saattamana Hämeenlinnaan, missä 
          hänet kuletettiin lääninwankilaan.</p>
        <p>Hämeen läänin kuwernööri on, kuten, muistetaan, aikaisemmin kieltänyt Pasternackia oleskelemasta Hämeen läänissä sen wuoksi, että hän on Mooseksen uskolainen. Myöhemmin on P. kuitenkin 
          kääntynyt kristinuskoon, kuuluen Helsingin saksalaiseen seurakuntaan.</p>
        <p>Mikäli olemme kuulleet on wangitseminen johtunut syystä, ettei kuwernööri pidä kääntymystä täydellisenä, ennenkuin Wenäjän sisäasiain ministeriö sen on hywäksynyt.</p>
      </Article>

      <div className="interTitle">5.3.1914</div>
      <Article titleText="Nummen pitäjän murhajuttu.">
        <p>Wiime syyskuussa ampui Nummen pitäjän poliisikonstaapeli J. Hietala eräässä huutokauppatilaisuudessa erästä tunnettua wiinanmyjää, Someroniemeltä kotoisin olewaa J. Lainetta sillä 
          seurauksella, että Laine kuoli. Laine oli nim. mellastanut eräiden toisten hulikaanien kanssa huutokauppatilaisuudessa sekä pahoinpidellyt Hietalaa, jolloin Hietalan oli turwauduttawa 
          aseisiin. Laineen isä, mökkiläinen W. Laine waati Lohjan y. m. pitäjäin talwikäräjillä t. k. 3 pnä Hietalalle edeswastuuta murhasta sekä hänen welwottamistaan maksamaan wuosittain 124 mk. 
          korwaukseksi wainajan isälle, koskapa poika oli ollut isänsä wanhuuden turwa. Jutussa kuulusteltiin noin 20 eri todistajaa, joitten todistukset kaikki omat Hietalalle suotuisat. 
          Lisätodisteiden hankkimista warten lykättiin juttu tuonnempana pidettäwiin wälikäräjiin.</p>
      </Article>

      <div className="interTitle">17.3.1914</div>
      <Article titleText="Leppä, Sinisalo ja Frisk tuomittu.">
        <h5>10 wuodeksi kuritushuoneeseen. - Hyrsky wapautettu.</h5>
        <p>Holloloan y. m. pitäjien kihlakunnanoikeudessa oli t. k. 18 p. wiidennen kerran käsiteltäwänä juttu Kärkölässä tapahtuneesta ryöstöstä Frans Mikael Leppää, Karl Gustaf Sinisaloa ja Gustaf 
          Adolf Friskia wastaan sekä ryöstön awustamisesta Artturi Hyrskyä wastaan. Oikeudessa kuulusteltiin tällä kertaa 7 todistajaa, joista melkein kaikkia oli jo aikaisemmin kuulusteltu, joten 
          he nyt wain täsmensiwät lausuntojaan. Hyrskyn nähden tuotiin esiin seikkoja, joista käwi ilmi, että hän on sekaantunut wähemmän kunniallisiin asioihin: häntä on epäilty syylliseksi 
          erinäisiin rikoksiin, hän on ollut pidätettynä, hänen luonaan on pidetty kotietsintä y.m. Apulaisnimismies Kaarlo Koskinen todisti, että suurlakon jälkeisinä wuosina muodostui Härmässä 
          rikollinen joukkue, jonka johtajana on eräs paikkakunnalta pois muuttanut henkilö. Tämän henkilön kanssa on Hyrsky ollut läheisissä tuttawuussuhteissa.</p>
        <p>Julistamallaan päätöksellä tuomitsi kihlakunnanoikeus Lepän, Sinisalon ja Friskin törkeästä ryöstöstä 10 wuodeksi kuritushuoneeseen, Lepän ja Sinisalon menettämään kansalaisluottamuksensa 
          myöhemmin määrättämäksi ajaksi ja Friskin 15 wuodeksi. Tuomitut welwoitettiin korwaamaan kanttori F. G. Hellènille ryöstetyt meijeri-rahat 6,665 mk., yksityiset rahat 70mk. ja kultakellon 
          arwon 400 mk. sekä kruunun maksettawiksi aikaisemmin tuomitut todistajanpalkkiot. Syyte Hyrskyä ja Hagsbergia wastaan kumottiin toteennäyttämättömänä. Asian laatuun nähden passitettiin 
          Hyrsky kuitenkin Hämeen lääninwankilaan, kunnes howioikeus, jonka tutkittawaksi päätös alistettiin, on sen tarkastanut. Leppä ja Sinisalo passitettiin Uudenmaan ja Frisk Hämeen 
          lääninwankilaan.</p>
      </Article>

      <div className="interTitle">24.3.1914</div>
      <Article titleText="Häikäilemätön petkuttaja.">
        <p>Joku päiwä sitten passitti Helsingin etsiwä poliisi läänin wankilaan erään hywin owelan ammattipetkuttajan nimeltä Aina Lydia Eerolainen eli Lindqwist eli Louhiwaara. Esiintyen rwa 
          Lindqwistinä oli hän kertonut itsellään olewan paikan I ja II:n luokan waunuissa siiwoojattarena sekä tulewansa piakkoin perimään eräältä Amerikassa kuolleelta sedältään 75,000 mk. 
          Eräille henkilöille sanoi hän näistä rahoista olewan jo toistakymmentä tuhatta markkaa nostettawissa Pohjoismaiden Osakepankissa kunhan wain hänen asiainsa hoitaja „tuomari Silfwast 
          Lahdesta” saa asiat selwäksi. Menipä hän jo niin pitkälle, että antoi eräälle henkilölle waltakirjan nostaakin nämä rahat luwaten sitten lainata niistä 10,000 mk. sanotulle henkilölle. 
          Weljensä kertoi hän olewan Nummelan parantolassa sekä saawansa itse kiertokoulunopettajattaren paikan Lopella.</p>
        <p>Näin onnistui hänen petkuttaa itselleen useammilta henkilöiltä suoranaista rahaa, pukutarpeita, kangasta y. m. useitten kymmenien markkojen edestä. Sitten matkusti hän Lopelle, jossa 
          ilmoitti tulleensa Martta-yhdistyksen lähettämänä perustamaan pientenlasten koulua. Koska hän yhdistykseltä sai 8 wiikon kurssiaikaa warten muka wain 18 mk., jota piti liian wähänä, pyysi 
          hän kunnalta awustusta „koska oli muualtakin saanut”. Kirkkoherra olikin antanut hänelle 18 mk hallussaan olewasta kourahastosta. Saman pitäjän Möyskälän kylässä oli hän pitänyt kokouksen 
          jäsenten ottamista warten Martta-yhdistykseen saadakseen kai mahdollisesti maksettawat jäsenmaksut. Jonkinlaista „koulua” oli hän siellä myöskin pitäwinään.</p>
        <p>Mainittu Eerolainen eli Lindqwist on syntynyt w. 1882 Pukkilassa. Häntä on aikaisemmin rangaistu useamman kerran warkaudesta, petoksesta ja kawalluksesta y. m. Muuten hywin owela 
          tempuissaan ja keksii yhä uusia ja uusia petkutustapoja.</p>
      </Article>

      <div className="interTitle">4.4.1914</div>
      <Article titleText="Yhdenvertaisuuslaki ja Hämeenlinnan maistraatti.">
        <h5>Neuwosmiehet Idestam ja Lindberg wiety Pietariin.</h5>
        <p>Wiime torstaina klo 4 ajoissa wangittiin yhdenwertaisuuslain wastustamisesta tuomitut Hämeenlinnan maistraatin jäsenet, oikeusneuwosmies L. Idestam ja kunnallisneuwosmies W. A. Lindberg, 
          kuten lisälehdissä kaupungilla ilmoitimme. Neuwosmies J. E. Selin on jo aikaisemmin kärsinyt wankeusrangaistuksen.</p>
        <p>Tuomittujen on istuttawa wankilassa 4 kuukautta, mutta jos istuwat yksinäisessä kopissa, pääsewät 3 kuukaudella. Wankeuden jälkeen owat hrat J. ja L. 2 wuotta kelpaamattomia hoitamaan 
          waltion tai kunnan wirkoja.</p>
        <p>Warat. Idestamin wangitsemisen toimitti poliisimestari O. Siikanen tämän asunnossa ylikonstaapeli D. Salon seuraamana.</p>
        <p>Herra Lindbergin wangitsi asunnossaan komisario E. Ahlgrèn konstaapeli T. Jokinen mukanaan.</p>
        <p>He lukiwat Pietarissa julistetun tuomion ja ilmoittiwat, että hrain Idestamin ja Lindbergin on seurattawa heitä. Hrat Idestam ja Lindberg ilmoittiwat wastalauseensa mieliwaltaista ja 
          laitonta wangitsemista wastaan. Poliisimestari luki tällöin wielä Hämeen läänin kuwernöörinwiraston wangitsemismääräyksen.</p>
        <p>Hra L. oli warat. Idestamia wangittaessa ollut wieraisilla perheineen hänen kodissaan, josta lähti omaan asuntoonsa poliisien seuraamana.</p>
        <p>Ennen lähtöä saiwat omaiset ja ystäwät käydä hywästelemässä warat. Idestamia, mutta raatimies Lindbergin asuntoon ei päästetty edes todistajaksi kutsuttua faktori M. Itkosta. Hra L. ei 
          sallittu waihtaa waatteitakaan poliisin olematta läsnä.</p>
        <p>Hewosten liikkeelle lähtiessä lauloi paikalle kokoontunut yleisö „Maamme”-laulun. Wangitut wiettin klo 5:ltä kestikiewarin hewosilla Harwialan pysäkille. Hewoset oli poliisikamari 
          tilannut muka Renkoon.</p>
        <p>Wähän ennen klo 6 saapuiwat wangitut Harwialaan. Matkalla oli saattajiksi liittynyt m. m. wangittujen puolisot sekä joukko kansalaisia. Ensimäisessä reessä istui tuomari Idestam ja 
          ylikonstaapeli Salo, toisessa raatimies Lindberg ja komisario Ahlgrèn. Paikalle saapunut tilanhoitaja, maisteri Lindeberg sanoi komisario Ahlgrènin huonetta pyytäessä antawansa sen wain 
          sillä ehdolla, että wangittujen omaiset saisiwat olla heidän kanssaan. Neuwoteltuaan asiasta puhelimitse suostui komisario Ahlgrèn tähän, jonka jälkeen wangitut sijoitettiin tilanhoitajan 
          asuntoon.</p>
        <p>Saattajat kutsuttiin kartanon päärakennukseen odottamaan junan tuloa. Odottajille tarjottiin kahwia. Tällä wälin saapui kaupungista lisää poliiseja, kahdessakin erässä. Näiden läsnäolo oli 
          kuitenkin tuiki tarpeetonta, sillä saattajain käytös oli koko ajan tyyntä ja arwokasta.</p>
        <p>Wähän yli klo 7 tuotiin wangitut pysäkille. Pysäkki sijaitsee kowin harwaan asutulla paikkakunnalla, joten wäkeä oli ehtinyt kokoontua wain wähän. ½ 8 tienoissa saapui juna. 
          Matkustajawaunujen jälkeen oli liitetty useampia tawarawaunuja ja wiimeiseksi Hämeenlinnassa yhdistetty toisen ja kolmannen luokan waunu. Nopeasti saiwat wangitut nousta waunuun, jonka 
          waununsillalla poliisimestari Liikanen otti heidät wastaan. He sijoitettiin waunun kolmannenluokan osastoon. Paitsi poliisimestaria seurasi wangittuja Pietariin ylikonstaapeli Salo ja 
          konstaapeli Jokinen.</p>
        <p>Useimmat hewosilla saattajista nousiwat junaan ja Hämeenlinnasta oli sillä saapunut runsaasti yleisöä saattamaan wangittuja Riihimäelle. Junan lähtiessä liikkeelle kohotti paikalle 
          saapunut wähäinen wäkijoukko eläköön-huudon sekä junassa olijat lauloiwat „Hämäläisten laulusta” säkeen „Jos miestä missä tarwitaan”.</p>
        <h5>Väliasemilla.</h5>
        <p>Turengissa oli runsaasti wäkeä, joka kohotti eläköön huutoja lain wartijoille. Junassa ollut kööri lauloi „Porilaisten marssin”. Leppäkoskella oli myös werrattain runsaasti yleisöä. Junan 
          saapuessa kajahutettiin „Suomen laulu”. Ryttyläänkin oli tieto kerinnyt. Täälläkin laulettiin.</p>
        <p>Riihimäelle saawuttaessa oli asemalla mustanaan wäkeä sekä joukko paikkakunnan poliisikonstaapeleita. Kun waunu oli liitetty Pietarin junaan, kokoontui yleisö sen eteen. Kööri lauloi 
          „Suomen laulun”, „Syttynyt on sota julma”, „Hämäläisten laulun”, „Jumala ompi linnamme” ja „Maamme”. Junan lähtiessä kajahtiwat woimakkaat eläköön huudot. Yleisöä kiitti raatimies 
          Lindbergin puoliso. Maistraatin jäsenten puolisot saapuiwat iltajunalla takaisin Hämeenlinnaan.</p>
        <h5>Kunnianosotus Lahdessa.</h5>
        <p>Klo 10,42 saapui juna Lahden asemalle. Wangittujen waunu oli kohta junan pysähtyessä poliisien ja santarmien ympäröimä ja asemasillalle pääsiwät ainoastaan ne, jotka ostiwat piletit, joten 
          suuri osa yleisöä lunasti piletin lähiasemalle. Yleisöä oli myöhäisestä ajasta huolimatta saapunut noin pari sataa henkilöä. „Maamme”-laulu laulettiin kun kolmannen kerran soitettiin, 
          ensimmäinen ja wiimeinen wärssy kaksi kertaa kumpikin. Sen jälkeen kohotettiin woimakkaat eläköönhuudot lainkuuliaisille wirkamiehille. Poliisi ei kumma kyllä häirinnyt järjestystä.</p>
      </Article>

      <div className="interTitle">9.4.1914</div>
      <Article titleText="Warkaus Riihimäellä.">
        <p>T. k. 3 pnä warastettiin työmies W. Koskelta aiwan uusi puku sekä uudet kengät. Samoin wietiin Jalmari Lindgreniltä palttoo sekä lakki. Waras oli kowin rohkea päättäen siitä, että warkaus 
          tapahtui keskellä päivää ja wilkasliikkeisellä paikalla olewassa talossa. Warkaaksi epäillään Wäinö Lainetta, joka on Kerawalta tai Malmilta kotoisin. Sielläkin hänellä pitäisi olla tehtynä 
          luwattomia riistoja. Warkaus on aika kolaus työmiehelle, joka pienestä palkasta on säästänyt sen werran, että sai puwun päällensä. Pitäkää silmät auki reissumiesten suhteen.</p>
      </Article>
      <Article titleText="Sikiönsä surmaamisesta">
        <p>Wangitsi Pälkäneen nimismies t. k. 7 p. taloll. lesken Tilda Lemmenlahden Onkkaalan kylästä. Lemmenlahti oli tultuaan luwattomasta sekaannuksesta raskaaksi, oman kertomuksensa mukaan, 
          wiime tammik. 4 p. synnyttänyt tyttölapsen ja jättänyt sen awuttomaan tilaan, niin että se oli kuollut.
        </p>
      </Article>

      <div className="interTitle">16.4.1914</div>
      <Article titleText="Hämeenlinnan yhdenvertaisuuslakirettelöt">
        <h5>Toimittaja Palmio saanut jälleen haasteen.</h5>
        <p>Eilen puolenpäiwän tienoissa saapui toimittaja Palmion asuntoon komisario E. Ahlgrèn mukanaan pari poliisikonstaapeliä kysyen hra Palmiota. Kun toimittaja Palmio ei kuitenkaan ollut 
          kotona, meniwät mainitut poliisimiehet Hämettären toimitukseen. Tawattuaan täällä hra P:n tahtoi komisario Ahlgrèn „todistajain läsnäollessa” jättää hänelle joukon papereita pyytäen 
          saada niistä kuitin. Hra P. kieltäytyi kuitenkin jyrkästi wastaanottamasta papereita sekä kirjoittamasta minkäänlaista kuittia. Komisario Ahlgrèn luki tällöin hänelle Pietarin 
          piirioikeuden haasteen saapua touk. 2 p:nä mainitun oikeuden I osastoon wastaamaan yhdenwertaisuuslain rikkomisesta. Juttu koskee Barawikoffin elinkeinoanomuksen hylkäämistä wiime elok. 18 
          p:nä. Kuten muistettaneen, oli Barawikoffin juttu maistraatissa esillä samana päiwänä, kuin Wasiljeffinkin elinkeinoanomus, jonka hylkäämisestä toimittaja P. äskettäin sai haasteen.</p>
        <p>Hra P. ilmoitti, ettei asia hänen puoleltaan anna aihetta mihinkään toimenpiteisiin. Komisario Ahlgrèn tarjosi wielä kerran papereita ja kun toimittaja P. yhä kieltäytyi niitä 
          wastaanottamasta jätti hän ne eräälle pöydälle ja poistui sen jälkeen.</p>
        <p>Kuten Wasiljeffinkin jutussa oli maistraatin muina jäseninä Barawikoffin juttua käsiteltäessä w. t. pormestari, how. ausk. Herman Henriksson sekd w. t. raatimies, yliopp. Lauri Kämäri.</p>
        <h5>W. t. pormestari H. Henriksson saanut haasteen.</h5>
        <p>Tiistai-aamuna klo 8 tienoissa saapui kaksi siwiilipukuista poliisia warat. Herman Henriksonin asuntoon Turussa pyytäen saada tawata hra H:ia. Kun palwelustyttö ilmoitti, että hra H. ei 
          wielä ollut noussut ylös, selittiwät poliisimiehet aikomuksensa olewan odottaa. Puolen tunnin kuluttua astui hra Henriksson makuuhuoneestaan, jolloin poliisit - pyytäen anteeksi että 
          oliwat tulleet niin aikaisin - antoiwat hra Henriksonille haasteen saapua ensi toukok. 2 p:nä Pietarin piirioikeuden I osastoon wastaamaan yhdenwertaisuuslain wastustamisesta, sen 
          H:linnan maistraatin päätöksen johdosta, jolla wiime elok. 18 p:nä hylättiin Wenäjän alamaisten Mikael Wasiljeffin ja Mikael Borowikoffin elinkeinoanomukset. Poliisimiehet jättiwät 
          asiakirjat pöydälle ja pyysiwät hra Henriksonilta saada todistuksen, että ne hänelle on jätetty. Tällaista todistusta ei hra Henriksson kuitenkaan ollut halukas antamaan ja niine hywineen 
          poistuiwat poliisit.</p>
        <h5>W. t. raatimies Kämäri haastettu.</h5>
        <p>Eilen iltapäiwällä tapasiwat Helsingin poliisit myöskin w. t. raatimiehen, lakit. ylioppilas Lauri Kämärin hänen asunnossaan Helsingissä ja jättiwät hänelle haasteen saapua Pietarin 
          piirioikeuteen samana päiwänä ja samoista yhdenwertaisuuslain rikkomuksista kuin warat. Henrikssonkin. Hra Kämäri kieltäytyi antamasta kuittia, minkä jälkeen poliisit jättiwät asiakirjat 
          ja poistuiwat.</p>
      </Article>
      <Article titleText="Siveettömyyden ryöppy.">
        <p>Kawallukset, petkutukset, ryöstöt ja murhat owat wiime aikoina pelottawassa määrässä lisääntyneet. Wäkiwallan ja pahanteon henki ohjaa ihmisten käsiä. Awiositeet owat höltyneet, juoppous 
          ja siweettömyys kohonneet. Uutiset murhapoltoista owat käyneet jokapäiwäisiksi.</p>
        <p>Tarwitaanto esimerkkejä? Parin wiime päiwän sanomalehdet kertowat: Sundströmin noin sadantuhannen kawallus Helsingissä, Airolan kawallus Wiipurissa, nuoren tytön wekselinwäärennys 
          Turussa, Itämaisen tupakkatehtaan konttoristin kawallus Helsingissä, Rosengrenin wekselihuijaukset Wöyrissä, Woutilaisen kawallus Helsingissä, Lagerqwistin murhapoltto ja itsemurha Karjan 
          asemalla, kolme wääränwalantekoa Mikkelissä, nti Borgenströmin murhapolttoyritys Järwelässä, neiti Roosin 20,000 mkn petkutukset ja murhapoltto Perniössä, raiskaus Helsingissä, Lumpeen 
          itsemurha, waimonsa ja lapsensa tappo Helsingissä! Ehkä riittää! Poiminnot owat ainoastaan parin päiwän lehdistä! Miten hirwittäwäksi tämä tilasto wuoden kuluessa nouseekaan!</p>
        <p>Idmanin parinkymmenen miljoonan kawallusten jälkeen on wäärennysten luku nopeasti kaswanut. Yksin Helsinsingissä owat lyhyenä aikana tehneet kawalluksia tuomarit, arkkitehdit, insinöörit, 
          kaupunginpalwelijat, notariot, kaupungin kasöörit, wahtimestarit ja mitä he kaikki lienewätkään. Aiwan äskettäin on pääkaupungin oikeuden jäsenkin, tuomari af Frosterus, joka jakoi 
          oikeutta muille ja tuomitsi pahantekijöitä, tehnyt itsensä syypääksi moniin wäärennyksiin. Kun kolttosista saatiin selwä, pakeni hra neuwosmies „muille maille wierahille” eikä häntä 
          erikoisemmin ole etsittykään. Rumaan waloon on joutunut eräs Helsingin sielunpaimenkin, joka on raitiotiellä kulkenut wäärillä keinoilla.</p>
        <p>Missä on ennen kehuttu suomalainen rehellisyys? Missä Topeliuksen kuwaamat „suomalaiset Matit”? Wallattomuuden ja intohimon kuohu owat kait temmanneet ne mukaansa. Epärehellisyys on 
          muuttunut kulkutaudiksi, joka todistaa siweellisten käsitteiden höltymistä ja kansamme elimistön rappeutumista.</p>
        <p>Kun haemme syitä kawalluksiin, wastataan ensimäiseksi: „yli warojenia eläminen ja epäsäännöllinen elämä”. Perniössä murhapoltosta ja suurista kawalluksista wangittu neiti Roos tahtoi 
          „elää hienosti” ja oli hän sitäpaitsi „alkoholisti”. Samaan suuntaan käywät kertomukset muista kawaltajista ja wäärentäjistä.</p>
        <p>Epäsäännöllinen elämä, tuhlaawaisuus ja koristeluhalu onkin temmannut suuren osan kansastamme mukaansa. Hotellit, rawintolat, huwihuoneet, tanssipaikat, operetit, naamiaiset, eläwät 
          kuwat, tingel-tangelit hallitsewat pääkaupunkia. Maaseutukaupungit kulkewat kykynsä mukaan perässä. Wähät wakawista ajoista, wähät uhkaawista waaroista. Me juomme, mässäämme, koristelemme 
          itseämme ja tanssimme tangoa! Kun rahat loppuwat, lainataan, tehdään wekseleitä... Säästäwäisyydelle, kirkossa käwijöille nauretaan, samoin niille, jotka pysywät syrjässä tanssipaikoista, 
          joissa monet „maan toiwot” tuhlaawat suunnattomasti wanhempiensa hiellä, työllä ja waiwalla koottuja waroja.</p>
        <p>Pistäytykäämme pikkukaupungin naamiaisiin. Siellä wallitsee elämän rentous, tanssimusiikki helähtää, huomisesta ei ole surua, wiini waluu wirtanaan... Sitä naisetkin maistelewat. 
          Kaikellaiset keikarit siellä „paremman kansan” kanssa huwittelewat. Harmaahapsisia wanhuksiakin on mukana. Wenäläiset owat huwittelijoiden hywiä ystäwiä. Joku herraskekkuli tanssii 
          upseerinlakki päässä. „Yhdenwertaisuudella” ei ole rajoja. Narrit ja keikarit, tuhlarit ja tyhjäntoimittajat, joilla on welkapuku, kowat korwiin, mutta pää tyhjä kuin paperipussi, siellä 
          juhlan ohjaajina, päämestareina hääriwät. Ja näiden narrien „isänmaalisuuteen” pitäisi luottaa!</p>
        <p>Kansallistunnolle, siweellisyydelle, rehellisyydelle, itsekieltäymiselle nämä maitopartaiset poikanulkit ja muodikkaat tyttöletukat naurawat, waikka he kunnianmiehiä Krestyyn wietäessä 
          woiwatkin ehkä juosta heidän jälessään ja isänmaallisuutensa pukea „hurraahuutoihin”. Mutta Wänrikki Stoolin sankarien, Snellmanin, Runebergin, Lönnrotin, Topeliuksen, Yrjö-Koskisen 
          ihanteelliset elämänarwot owat heille pelkkää ilmaa.</p>
        <p>Wuosien kuluessa tuhotaan nämä narrit, tuhlailewat, siewistelewät hupsut konkursseilla, itsemurhilla, kuritushuonewankeudella, maasta karkaamisella j. n. e.</p>
        <p>Hukassa me olemme, jollei tälle wallattomuudelle aseteta sulkuja. Irstaan huwihaluisen kansan woi wainolainen helposti tuhota ja waikkapa waltiollisilla wiekotuksilla kiehtoa. Siksi on 
          ihmisten mieli suunnattawa toisaalle. Isänmaanrakkaus, kansallistunne, aatteelliset elämänarwot, säästäwäisyys, työn rakkaus, welwollisuuden tunne, uhrautuwaisuus ja wanha suomalainen 
          rehellisyys on nostettawa arwoon ja kunniaan! Rehellisyys sittenkin maan perii.</p>
        <p>Lukija, heitä halweksumisen waippa yli keikarien ja tuhlarien! Älkäämme katsolo pintakiiltoa, waan etsikäämme ihmisten rehellisiä pyrkimyksiä!</p>
        <p>Kansamme alaspäin luisuminen siweellisessä suhteessa on otettawa wakawan pohdinnan alaiseksi. Olemassa olomme on muutenkin uhattu, joten on punnittawa, miten tästä waikeasta ajasta 
          kunnolla selwiydytään.</p>
        <p>Joka tapauksessa olisi tähän siweelliseen alennustilaan suurempi huomio kiinnitettäwä kuin yleensä on tehty. Se waatii wähintäin yhtä wakawaa pohtimista kuin surkeat waltiolliset olomme. 
          Tässä työssä tarwitaan kaikki rehelliset ihmiset, oikeuden ja totuuden etsijät! Tarwitaan koulunkäyneet ja jokapäiwäiset ihmiset!</p>
        <p className="signature">Minä.</p>
      </Article>

      <div className="interTitle">21.4.1914</div>
      <Article titleText="H:linnan yhdenvertaisuuslakijutut.">
        <h5>Herra Palmiolta waadittu 600 ruplan takaussumma.</h5>
        <p>Lauwantaina klo 1,45 päiwällä kun toimittaja Pertti Palmio oli tulossa Hämeenlinnan raastuwanoikeuden istunnosta Hämeenlinnan raatihuoneelta, oli portaissa odottamassa konstaapeli T. 
          Jokinen ja poliisikamarin sisäänkäytäwän luona pysäytti hänet, käskien seuraamaan poliisikamariin poliisimestarin puheille. Kun hra P. ei aikonut totella, astui konstaapeli hänen eteensä, 
          waatien jyrkästi seuraamaan. Poliisikamariin saawuttua ilmoitti poliisimestari Liikanen kuwernööriltä saapuneen määräyksen, että Palmion wapautensa menettämisen uhalla oli suoritettawa 
          kummastakin yhdenwertaisuuslakijutusta 300 ruplan takaussumma, eli yht. 600 ruplaa. Tähän huomautti hra P, ettei hänellä ollut niin paljon rahoja mukanaan, mutta että kauppias A. G. 
          Skogster olisi suostuwainen takaamaan sen hänelle. Poliisimestari soitti sitten kauppias Skogsterille, pyytäen tätä tulemaan poliisikamariin jonkun tärkeän asian wuoksi. Kun hra Skogster 
          sitten saapui poliisikamariin järjestetiin takuu siten, että S. ja hra Joh. Lindqwist takasiwat sanotun 600 ruplaa. Tämän jälkeen ilmoitettiin hra Palmiolle, että hän sai poistua. Tätä 
          ennen hra Palmio pani wastalauseensa häntä kohdanneen laittoman menettelyn johdosta.</p>
      </Article>
      <Article titleText="Hämeenlinnasta ja lähiseudulta.">
        <h5>Jumalan sanan pilkasta</h5>
        <p> tuomitsi H:linnan raastuwanoikeus wiime lauantaina „Häm. Woiman" wastaawan toimittajan H. Wälisalmen 50 mkn sakkoon lehdessä wiime jouluk. 23 p:nä julaistun „Joulu”-nimisen kirjoituksen 
          johdosta.</p>
        <SubDivider className="dividerStyle" />
        <h5>Puukotuksesta</h5>
        <p>syytettiin täkäl. raastuwanoik. eilen puutyömies R. I. Niemistä, joka oli pääsiäislauwantaina lyönyt linkkuweitsellä leipuri A. I. Nylundia, kuten aikaisemmin olemme kertoneet. Nieminen 
          wäitti R. Lahtisen ensin lyöneen häntä, jonka jälkeen syntyneessä tappelussa Nylund oli „pamputtanut”, jolloin Nieminen puolustuksekseen löi weitsellä takaa ajanutta Nylundia. Nylund 
          kertoi menneensä puolustamaan Lahtista, kun luuli Niemisen puukottaneen häntä. Kantaja Nylund on päässyt pois sairaalasta, mutta on wielä lääkärin hoidossa. Todistajat kertoiwat samaan 
          suuntaan kuin Nieminen.</p>
        <p>Juttu lykättiin toukok. 16 p:ään.</p>
        <SubDivider className="dividerStyle" />
        <h5>Juopumuksesta</h5>
        <p>tuomittiin lauantaina 1 henkilö ja eilen 4 henkilöä kukin 20 mkn ja 1 henkilö 30 mkn sakkoihin sekä luwattomasta puukonkantamisesta 3 henkilöä kukin 50 mkn sakkoihin. Eräs ilkiwallasta 
          nostettu juttu hylättiin samoin muuan juopumus- ja poliisinpahoinpitelyjuttu. Oluen juonnista toisen pihamaalla tuomittiin 2 henkilöä kumpikin 5 mkn sakkoon.</p>
        <SubDivider className="dividerStyle" />
        <h5>Luwattomasta wiinanmyynnistä</h5>
        <p>tuomittiin täkäl. raastuwanoikeudessa työmiehet Helenius ja Silmenius Lopelta kumpikin 100 mkn sakkoihin sekä maksamaan kaupungille 20 mk.</p>
        <p>Samasta syystä tuomittiin nuorukainen A. F. Aalto 100 mkn sakkoon ja maksamaan kaupungille 20 mk.</p>
        <SubDivider className="dividerStyle" />
        <h5>Itsemurha Rengossa.</h5>
        <p>Wiime sunnuntai-iltana päätti Rengossa Oinaalan kylässä talollisen poika Kustaa Seppälä päiwänsä ampumalla haulikolla ohimoonsa. S., jossa oli huomattu jotain mielenwikaisuuden oireita 
          ja päänsärkyä, oli syntynyt 1890. Yleensä oli wainaja tunnettu siiwoksi ja uskonnolliseksi.</p>
        <SubDivider className="dividerStyle" />
        <h5>Tapaturmalaukaus Rengossa.</h5>
        <p>Rengon Muurilassa tarkasteliwat kylän nuoret miehet perjantaina rewolweria, joka oli asetettu „arpajaiswoitoksi”. Nahkurityöntekijä Y. Lönnqwistin katsellessa rewolweria, laukesi se ja 
          panos lensi renki August Lehtimäen watsaan. L. hoidetaan täkäl. lääninsairaalassa ja on hänen tilansa arweluttawa.</p>
        <p>Kumpikin owat tunnetut siiwoiksi miehiksi.</p>
        <SubDivider className="dividerStyle" />
        <h5>Rewolwerin pauketta nurkkatansseissa.</h5>
        <p> Parolan n. k. pikkuleirillä pitiwät nuoret wiime sunnuntai-iltana tanssiaisia, joita piirin nimismies F. Lehtonen meni kahden konstaapelin kanssa hajoittamaan. Paikalla oli syntynyt aika 
          rähäkkä. Nimismies oli ampunut paikalla useampia kertoja ilmaan rewolwerilla, sekä sitä ennen ottanut penkiltä harmonikan. Kentällä oli pyöritty piiriä nimismiehen saapuessa, jolloin wäki 
          oli hajaantunut. Nimismies oli käskenyt wangitsemaan pakenewia.</p>
        <p>Kentältä oli juossut pois leipuri Tammisen 15-wuotias poika, jota nimismies seurasi kotiin ja aikoi wiedä hänet putkaan.</p>
        <p>Tanssijat owat moittineet nimismiehen käyttäytymistä, mutta, mikäli olemme saaneet tietää, on nimismies toiminut paikkakunnan wakawamman wäen walitusten johdosta. Joutilaswäkeä, m. m. 
          Myllymäen wiinatrokareita on kokoontunut paikalle, jossa owat myöhään yöhön hoilottaneet ja häirinneet lähistöllä asuwien rauhaa sekä hätyytelleet rauhallisia ihmisiä pois tullessaan. 
          Sotilaswiranomaiset owat jo kerran maimitunlaiset tanssit lopettaneet ja owat asian johdosta walittaneet kunnanpääriin ja pyytäneet poliisia lopettemaan tanssit ja tulien polttamisen.</p>
        <p>Viime päiwinä on mainitulla paikalla laulettu ja tanssittu joka ilta.</p>
        <SubDivider className="dividerStyle" />
        <h5>Juttu wäärästä walasta.</h5>
        <p>Lokak. 3 pnä 1913 tuomitsi Humppilan y. m. pitäjäin käräjäkunnan kihlakunnanoikeus itsellisen Juho Kustaa Matinpoika Kallioisen Humppilan Huhtaan kylästä wäärästä walasta pidettäwäksi 2 
          wuotta kuritushuoneessa, mistä rangaistuksesta kuitenkin armahduskirjan nojalla wähennettiin kolmasosa, sekä menettämään kansalaisluottamuksensa 8 wuodeksi. Kihlakunnan oikeus näet katsoi 
          kallioisen eräässä lapsenelatusta koskewassa jutussa kanteesta wapautuakseen walallaan wahwistaneen perättömän lausunnon.</p>
        <p>Turun howioikeus, ei täysien todistusten puutteessa ole woinut tuomita Kallioista syypääksi sanottuun rikokseen. Samalla on Hämeen läänin kumernöörille annettu määräys, että Kallioinen on 
          heti laskettawa wapaalle jalalle.</p>
        <SubDivider className="dividerStyle" />
        <h5>Murha Somerolla.</h5>
        <p> Pitkäperjantaina iski suutari J. Oksanen Someron Pajulassa rekiseipäällä työmies Aug. Sandbergia päähän sillä seurauksella, että tämä Forssan sairaalassa kuoli seuraawana päiwänä. 
          Sandberg ja torppari K. Kujala oliwat samana päiwänä tapelleet, jolloin S. iski K:ta kolme kertaa puukolla. Wäitetään S:n aikoneen lyödä Oksastakin. O. on passitettu Hämeenlinnan 
          lääninwankilaan.</p>
      </Article>

      <div className="interTitle">5.5.1914</div>
      <Article titleText="Tuomittujen wirkamiesten kohtalo.">
        <p>Hämeen läänin kuwernööri on wirallisissa lehdissä julkaissut seuraawan kuulutuksen:</p>
        <p>Keisarillisen Suomen Senaatin Oikeustoimituskunnan kirjeessä toukokuun 30 päiwältä 1913 N:o 419 antamaa määräystä noudattaen saan Teille tiedoksi täten ilmoittaa, että Pietarin 
          Piirituomioistuin päätöksellään 26 päiwältä huhtikuuta (9 päiwältä toukokuuta) on tuominnut Hämeenlinnan kaupungin Raastuwanoikeuden ja Maistraatin oikeusneuwosmiehen Leonard Gustaf 
          Idestamin ja kunnallismiehen Werner Agaton Lindbergin rikosrangaistuksia koskewan lain 13 ja 14 23(1) pykälien nojalla pidettäwäksi 4 kuukautta wankeudessa sekä eroitetuksi wirastaan ja 
          kahden wuoden ajaksi menettämään oikeuden olla waltionwiroissa ja palwelemaan waltion tai yksityissopimuksen perusteella Keisarikunnan, siihen luettuna myös Suomen Suuriruhtinaskunta, 
          waltio- ja kunnallisissa laitoksissa, minkä tuomion sittemmin Pietarin Oikeushowi päätöksellään saman wuoden syyskuun 6/19 päiwältä sekä Hallitsewan Senaatin Rikosasiain Departementti 
          päätöksellään seuranneen marraskuun 20 päiwältä joulukuun 3 päiwältä owat wahwistaneet.</p>
        <p>H:linnassa, Lääninkansliassa, huhtik. 24 p:nä 1914.</p>
        <p className="signature">R. Spåre.</p>
        <p className="signature">J. Schurigin.</p>
      </Article>

      <div className="interTitle">7.5.1914</div>
      <Article titleText="Kamala itsemurha Hattulassa.">
        <p>Toissapäiwänä leikkasi Hattulan pitäjän Hurttalan kylässä Kalliolan muonarenki Ewert Lahtinen suurella puukolla kaulansa miltei erilleen poikki. Henki tietysti pakeni heti. Lahtinen oli 
          noin 40-wuotias ja naimisissa. Syynä lienee äkkinäinen mielenhäiriö, jonka oireita hänessä oli aikaisemmin tawattu.
        </p>
      </Article>

      <div className="interTitle">12.5.1914</div>
      <Article titleText="Oikeusjuttuja.">
        <h5>Wirkawapaa pappismies</h5>
        <p>K. Halmeen tuomitsi täkäl. raastuwanoikeus suorittamaan räätäli A. Suntiolle Forsasta noin 80 mk. ja kuluja. Hra H. oli kieltäytynyt maksamasta sillä perusteella, ettei H. M. Keisari ja 
          Suomen hallitus ollut suostunut maksamaan hänen welkojansa eikä hänen sowi eläkkeestään maksaa welkoja, mutta suostui nyt ne kuitenkin hywantahtoisesti maksamaan.</p>
        <SubDivider className="dividerStyle" />
        <h5>Muutettu tuomio.</h5>
        <p> Wiime tammikuun 26 p:ää wasten yöllä lõi työmies J. A. Jokinen Akaan pitäjän Lontilan kylästä Rengon pitäjästä Muurilan kylästä kotoisin olewaa räätäli O. Lainetta puukolla rintaan, 
          niin että tämä jonkun ajan perästä kuoli. Wiime helmikuun 26 pnä antamallaan päätöksellä Lopen ja Rengon käräjäkunnan kihlakunnanoikeus tuomitsi Jokisen tahallisesta pahoinpitelystä, 
          josta kuolema oli seurauksena, pidettäwäksi 12 wuotta kuritushuoneessa sekä suorittamaan Laine-wainajan waimon ja hänen alaikäisten lastensa elatukseksi 1,000 mk. ynnä hautauskuluja 200 mk. 
          - Turun howioikeus, jonka tarkastettawaksi päätös alistettiin, on alentanut Jokiselle tuomitun rangaistuksen 8 wuodeksi, mutta muuten jättänyt kihlakunnanoikeuden päätöksen woimaansa.</p>
      </Article>

      <div className="interTitle">26.5.1914</div>
      <Article titleText="Tulipalo Myllymäessä.">
        <h5>Murhapolttoko?</h5>
        <p>Lauwantaina kello 4:n tienoissa iltapäiwällä pääsi tuli walloilleen ajuri J. Sirénin talossa wuokratontilla n:o 119 Myllymäessä. Rakennukseen kuului 3 huonetta, liiteri, talli ja 
          ulkohuoneet. Tuli pääsi irti tallista toistaiseksi tuntemattomalla tawalla ja hetken kuluttua oli koko rakennus liekkien wallassa. Sammutustyötä haittasi suuresti weden puute ja lyhyessä 
          ajassa paloi rakennus miltei perustuksiaan myöten. Osa palokunnan westijohtoletkuista oli huonossa kunnossa.</p>
        <p>Paitsi isäntäwäkeä ajuri Siréniä ja hänen waimoaan asui rakennuksessa pari nuortamiestä. Tulipalon syttyessä oliwat miehet saunassa, kotona oli wain ajuri Sirénin waimo. Irtaimistoa ei 
          ehditty pelastaa juuri nimeksikään, m. m. paloi pienempi summa rahaa, kello y.m. sekä talossa asuneiden nuortenmiesten omaisuus kokonaan. Pari kanaakin joutui tulen uhriksi.</p>
        <p>Paloa epäillään murhapoltoksi. Ajuri Sirén ja hänen waimonsa pidätettiin samana iltana. Kerrotaan heidän raha-asioittensa wiime aikoina olleen huonolla kannalla. Palanut asuinrakennus on 
          wakuutettu palowakuutusyhtiö Imatrassa 2,900 mk:sta ja sen yhteydessä ollut ulkohuonerakennus 600 markasta. Talo oli kokonaisuudessaan wakuutettu 7,000 mk:sta. Irtaimisto oli wakuutettu 
          Sammossa 2,000 mk:sta.</p>
        <p>Poliisitutkinto alettiin eilen.</p>
      </Article>

      <div className="interTitle">28.5.1914</div>
      <Article titleText="Myllymäen murhapolttojuttu.">
        <p>Ajuri J. Sirénin talon palon johdosta on poliisitutkinto päättynyt. Waimo Siréniä wastaan on raskauttawia todistuksia ja on hän puheissaan sekaantunut. Ajuri Siréniä wastaan ei ole mitään 
          sanottawaa ilmennyt, jonka takia hän on päästetty wapaalle jalalle. Waimo on edelleen wangittuna. Asia tulee raastuwanoikeuden käsiteltäwäksi.</p>
        <p>Jo talwella oli Sirénillä tulipaloyritys, jota myös epäiltiin murhapoltoksi.</p>
      </Article>

      <div className="interTitle">6.6.1914</div>
      <Article titleText="Raaka werityö Hausjärwellä.">
        <p>T. k. 1 p. oli wanhus Hilda Koiwisto menossa kirkonmenoihin Erkylän Kerkkolaan. Kun hän oli ehtinyt noin kilometrin matkan asunnostaan, niin tuli muuan mieshenkilö häntä wastaan. Mies 
          alkoi hakata wanhusta kiwellä. Wanhus sai kymmenen haawaa päähänsä. Paikalle oli kutsuttawa Hywinkäältä tohtori Sandelin, joka sitoi haawat.</p>
        <p>Koiwisto kertoo tuntewansa lyöjän. Asia on ilmoitettu Hausjärwen piirin nimismiehelle, joka on pidättänyt tekoon syypäänä torppari Piimäen pojan. Poika kuuluu olewan wähän 
          synkkämielinen.</p>
      </Article>
      <Article titleText="Myllymäen murhapolttojuttu">
        <p>oli wiime torstaina ensimäisen kerran esillä täkäl. raastuwanoikeudessa. Wastaaja, Josefiina Siren oli lääninwankilasta tuotu oikeuspaikalle. Hänen awustajanaan esiintyi asianajaja 
          Söderholm. Poliisitutkintopöytäkirjan tunnusti wastaaja Siren suurimmaksi osaksi oikeaksi, mutta kielsi tulipalopäiwänä käyneensä liiterissä tahi tallissa, ei edes edustalla ollut 
          sanottuna päiwänä ollut. Kertoi iltapäiwällä awustaneensa samassa talossa asuwaa Hilma Hanganpäätä tämän kylwettäessä lastaan ja sanoi wiipyneensä täällä noin 1/2 tunnin ajan.</p>
        <p>Wirallisen syyttäjän waadittua edeswastuuta (36 §:n 2 momentin mukaan) ja todistajain sanottua walansa alkoi todistajain kuulustelu.</p>
        <p>Todistaja Erland Tyrylä kertoi waimo Sirenin sanoneen: „Johan minä sanoin, että kun se tuli sytytettiin, siitä jotain tulee.” Ei sanonut tunteneensa mitään öljyn ym. sellaisen käryä.</p>
        <p>Todistaja August Erland Laakso selitti, ettei tiedä, mitä tulta wastaaja tarkoitti päiwitellessään sitä, että tuli oli tehty niin lähelle hänen taloaan. Tuli oli liiterissä tallin wintin 
          reunalla wastaajan asunnon puoleisessa nurkassa.</p>
        <p>(Tyrylä ja Laakso wastakkain kuultuina pysyiwät kumpikin kertomuksissaan siitä, että tuli Tyrylän käsityksen mukaan nousi lattiasta kattoon; kun taasen Laakso oli sitä mieltä, että tuli 
          oli saanut alkunsa tallin wintin reunalta.)</p>
        <p>Tod. Ida Kiwiluoto ilmoitti hawainneensa, että tuli puhkesi räystäistä tallin puolelta.</p>
        <p>Tod. Olga Tyrylä sanoi tehneensä tulen 26 m. päähän palaneesta rakennuksesta, pyykkiä pestäkseen, eikä tuuli wienyt sawua suoraan asunnolle päin.</p>
        <p>Tod. Aleksander Hanganpää ei huomannut oliko liiterin owi kiinni tahi auki eikä myöskään hawainnut oliko Sirenin owessa awainta.</p>
        <p>Tod. Hilma Hanganpää selitti, että wastaaja oli ollut hänen asunnossaan 2 kertaa sekä ilmoittaneen tulen olewan irti. Tuli oli walloillaan tallin wintillä. Waimo Siren oli wiipynyt 
          kylwettämisessä 10 minuuttia.</p>
        <p>Palowakuutus O. Y. Imatran edustaja ilmoitti, että J. Siren joulukuussa 1912 tahtoi wakuuttaa talonsa 8,000 mksta, mutta Imatra otti wakuuttaakseen 7,000 mksta, josta palanut rakennus 
          2,900 mksta ja palaneet ulkohuonerakennukset 600 mksta sekä toinen rakennus 3,500 mksta. Tästä wakuutuksesta suoritetaan nyt 3,140:05, huomioonottaen palaneiden rakennusten jäännösten 
          arwo.</p>
        <p>Hra Söderholm pyysi wastaajan puolesta, että kanne aiheettomana kumottaisiin ja wastaaja päästettäisiin heti wapaalle jalalle ja pitäisi lisäksi itselleen awoimen puhewallan, samaten 
          esitti korwauswaatimuksen wastaajan puolesta. Vastaajalla ei olisi ollut mitään etua palosta, koska rakennus on noin 8,000 mk:n arwoinen, sekä että wastaajan irtaimistokin on arwokkaampi 
          kuin 2,000 mk.</p>
        <p>Syyttäjä pyysi lykkäystä hankkiakseen palowakuutuskirjain jäljennökset ja tiedot wastaajan warallissuussuhteista.</p>
        <p>Juttu lykättiin t. p. 18 päiwään klo 11 ap., johon mennessä syyttäjä hankkikoon haluamansa tiedot; wastaaja passitettiin takaisin lääninwankilaan.</p>
      </Article>

      <div className="interTitle">16.6.1914</div>
      <Article titleText="7-wuotias poikanen äitinsä yllytyksestä hukuttanut towerinsa.">
        <p>T. k. 5 p. tawattiin Hyrskylän pitäjässä lähellä Gresnäsin kartanoa 9 wuotiaan poikasen Armas Niemisen ruumis wedestä ja luultiin silloin poikasen hukkuneen uidessaan. Kun paikkakunnan 
          nimismiehelle kuitenkin ilmoitettiin olewan epäilyksiä, ettei onnettomuus ollut kysymyksessä, toimitettiin asiasta tutkinto, jolloin käwi ilmi, että Armas Nieminen oli työnnetty jokeen 
          ja että teon oli tehnyt 7 1/2 wuoden wanha poika Walter Laurila äitinsä yllytyksestä. Walter Laurilan äiti Anna Laurila oli aikeissa mennä naimisiin hukutetun pojan isän, wouti Kari 
          Niemisen kanssa, joka on leski. Äiti oli kehottanut poikaansa toimimaan niin, jotta saataisiin Armas tieltä pois.</p>
        <p>Anna Laurila on wangittu ja passitettu lääninwankilaan.</p>
      </Article>
      <Article titleText="Kamala werityö Hausjärwen waiwastalolla.">
        <p>T. k. 9 p. iltapäiwällä oli mielisairas nainen Amanda Eklund, Hausjärweltä, jota säilytetään sanotulla waiwastalolla, pakkopaitaan puettuna käwelemässä n. s. käwelypihassa. Kun 
          hoitajatar poistui hetkeksi hänen luotaan oli Eklund riistäytynyt irti pakkopaidasta sekä pienen akkunan kautta tunkeutunut sairashuoneuston käytäwään ja siitä pienen owenpäällä olleen 
          akkunan kautta kiiwennyt mielisairaan 80-wuotisen wanhuksen Maria Lahden huoneeseen, hän oli alkanut hakata Lahtea, joka sai päähänsä pienen haawan. Paikalle saapui heti lääkäri 
          automobiilillä. Lahti, joka jo pitemmän aikaa oli ollut heikkona sairaana, kuoli kuitenkin seuraawana päiwänä.</p>
      </Article>

      <div className="interTitle">18.6.1914</div>
      <Article titleText="Kummallinen petos hewoskaupassa.">
        <p>Kun Rehakan kartanon torppari R. Peltola Janakkalasta, kauppasi 13-wuotiaan poikansa kanssa hewostaan Poltinaholla, saapui hänen luokseen miehiä, jotka ryhtyiwät hieromaan kauppaa hänen 
          kanssaan. Kauppaa tehtäessä tarjosiwat miehet Peltolalle paperossin, josta tämä oman kertomansa mukaan huumaantui niin, että antoi miesten waihtaa hänen hywän 4-wuotiaan hewosensa 
          pahanpäiwäiseen koniin. Pojalle syöttiwät miehet 5 pennin wehnäsen, josta tämä huumaantui samalla tawalla kuin hänen isänsäkin.</p>
        <SubDivider className="dividerStyle" />
        <h5>Hewoshuijarin uhriksi</h5>
        <p>joutui muuan toinenkin Janakkalan mies wiime markkinoilla. Unikon torpparin Kustaa Koskisen markkinapäiwänä parhaillaan tehdessä hewoskauppaa Poltinaholla erään tuntemattoman miehen 
          kanssa sekaantui kauppaan kolmaskin mies, jolloin he siirtyiwät hautausmaanpuoleiseen päähän hewosta koettamaan. Wastatullut tarjosi silloin ensimäiselle miehelle hewosensa, jota hänellä 
          ei ollut mukanaan, mutta ennen sowitusta 585 mk hinnasta, johon tämä oli suostuwinaankin. Silloin ehdotti ostaja, että Koskinen waihtaisi hewosensa wastaostettuun ja tarjosi 120 mk. wäliä. 
          Koskinen, joka ei ollut toiwonut hewosestaan 600:kaan suostui kauppaan. Wiimeksi tullut mies oli sillä wälin mennyt Koskisen hewosta koettamaan ja kadonnut hewosineen päiwineen. Kun 
          Koskinen lähti häntä tawottamaan oli toinenkin mies kadonnut wakijoukkoon ja hewonen menetetty.</p>
      </Article>

      <br></br>
      <a className="hyperLink" href="https://digi.kansalliskirjasto.fi/sanomalehti/titles/0356-2751?display=THUMB&year=1914">Linkki vuosikertaan 1914</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Tapahtumia 1914</title> // metadata

export default Crimes1914Page 