import * as React from "react"
import Image from "react-bootstrap/Image";
import Layout from "../components/layout"

import "../styles/base/global.css"

import imgFrontPage from "../images/content/front-jailrules.jpg"
import Divider from "../assets/divider.svg"

const JailRulesPage = () => {
  return (
    <Layout titleText="Hämeenlinnan kuritushuoneen järjestyssäännöt">
      <Image className="centeredImageStyle" src={imgFrontPage} alt="Matkailuoppaan etusivu"/>
      <p className="caption">Brofeldt, P. A.</p>
      <p className="caption">Hämeenlinna 1877, A. W. Lingrenin kirjapaino</p>
      <p className="caption">Hämeenlinnan Kaupunginkirjasto</p>
      <Divider className="dividerStyle" />

      <h2>1 § </h2>
      <p className="firstLetterStyle">Wangit owat rangaistus-ajaksensa menettäneet wapautensa; heidän tulee karttaa kaikkea oman mielensä waltaa ja tahtonsa noudattamista sekä
        tarkkaan totella allaseisowia ohjesääntöjä:
      </p>

      <h2>2 § </h2>
      <p className="firstLetterStyle">Wangilta waaditaan:</p>
      <br/>
      <p>1) Wälttämätöntä kuuliaisuutta ja tottelewaisuutta esimiehiänsä kohtaan, joiden määräyksiä ja käskyjä pitää heti ja tarkasti noudatettaman.</p>
      <p>2) Uutteruutta ja tarkkaawaisuutta työssä ja opin kuulemisessa.</p>
      <p>3) Totuutta ja wilpittömyyttä kaikissa ilmoituksissa.</p>
      <p>4) Järjestystä, tarkkuutta ja puhtautta, kuin myös siiwoutta puheissa, töissä ja käytöksessä.</p>

      <h2>3 § </h2>
      <p className="firstLetterStyle">Wanki on kielletty:</p>
      <br/>
      <p>1) Pitämästä rahoja eli muuta tawaraa, kuin mitä hänen wiljeltäwäksensä on erittäin annettu. Jos wangilla tawataan muuta tawaraa, on se menetetty.</p>
      <p>2) Olemasta työtunnilla joutilaana tahi ilman luwatta jättämästä työpaikkaansa.</p>
      <p>3) Suotta wiiwyttelemästä portailla, käytäwissä eli tarpeillaan.</p>
      <p>4) Tekemästä muuta työtä kuin hänelle on määrätty tahi sopimattomasti käyttämästä jotakin wangiston waroista.</p>
      <p>5) Wallattomuudesta, huolimattomuudesta, tahi pahuudesta tuhlaamasta tahi pilaamasta työ-aineita, astioita, työkaluja, waatteita, tahi muuta wangiston omaisuutta.</p>
      <p>6) Tahraamasta tahi turmelemasta seiniä, huoneita, mattoja, wuoteita y. m.</p>
      <p>7) Pitämästä muita kuin hänelle annetuita wankiwaatteita, waihettamasta niitä tahi hiestaamasta niihin painetuita merkkejä.</p>
      <p>8) Waromattomasti pitelemästä tulta ja syttywiä aineita.</p>
      <p>9) Ryhtymästä riitoihin eli tappeluihin muiden wankien kanssa, nauramasta ääneen, laulamasta, wiheltelemästä, huutelemasta tahi pitämästä muita sopimattomia kujeita.</p>
      <p>10) Kiipeämästä ikkunoihin.</p>
      <p>11) Sopimattomalla ähkymisellä tahi rykimisellä häiritsemästä jumalanpalwelusta tahi opetusta.</p>
      <p>12) Koputtelemasta seiniin tahi muuta ääntä pitämästä.</p>
      <p>13) Suotta soittamasta wanki-wartian perään.</p>
      <p>14) Työllä, sanoilla, muodolla tahi käytöksellä osoittamasta tyytymättömyyttä esimiesten käskyille tahi määräyksille.</p>
      <p>15) Menemästä lewolle ennen määrättyä makuu-aikaa.</p>
      <p>16) Ilman wälttämätöntä tarwetta nousemusta wuoteelta, ennen kuin merkki nousemiseen on annettu.</p>
      <p>17) Teeskentelemästä sairautta.</p>
      <p>18) Polttamasta tupakkaa.</p>
      <p>19) Ilman Tirehtörin luwatta puhuttelemasta tahi ryhtymästä puheisin wangistoon kuulumattomain henkilöin kanssa. Wirassa olewia esimiehiä ei saa suotta puhutella.</p>
      <p>20) Ilman esimiehen luwatta menemästä tarpeilleen muualle kuin määrätylle paikalle.</p>
      <p>21) Ulkona wangistosta, millä tekosyyllä hywänsä, erkanemasta wartiastansa kauemmaksi kuin korkeintain 50 askelta elikkä hänen näkywistänsä. Poikkeus tästä katsotaan karkuun pyrkimiseksi.</p>
    
      <h2>4 § </h2>
      <p className="firstLetterStyle">Jos wanki karkaa esimiehensä päälle taikka wastustaa häntä, on esimiehellä oikeus käyttää aseitansa. Jos wanki yrittää karkuun päästä, 
        owat wartiat ja sotamiehet welwollisia ampumaan häntä luodilla ladatulla pyssyllä; ja hän asettaa itsensä sekä hengen waaraan, että ankaran rangaistuksen alaiseksi kiinni jäädessä.
      </p>

      <h2>5 § </h2>
      <p className="firstLetterStyle">Kun wanki saapuu kuritus-laitokseen, ottaa wahtimestari elikkä selliwangistossa wartiana olewa knihti hänen wastaan. Wastaanottamisesta annetaan 
        kuitti, jos tuoja tätä waatii. Sittekuin raudat owat riisuttu, riisutaan wangin waatteetkin ja hän tutkitaan tarkasti paljaasen ruumiisen saakka, pestään ja puetaan wangiston 
        waatteisisin sekä wiedään selliin. Sen omaisuuden, kuin wangilla on muassa ollut, kirjoittaa wahtimestari luetteloon, joka luetaan wangin kuullen, ja hän tunnustaa sen, 
        nimensä tahi puumerkkinsä allekirjoittamalla, oikeaksi. Jos wangilla sen jälkeen tawataan ilmottamatonta tawaraa, pidetään se menetettynä.</p>
      <p>Jos wangilla on muassansa tawaraa, joka hänen rangaistuksensa ajalla saattaisi turmeltua tahi jonka säilytys wangistossa olisi waarallista, myydään se wahtimestarin kautta.</p>
      <p>Wangin rahat ja tawara erinomaisemmasta arwosta annetaan tirehtörille, waan muun omaisuuden saa siksi uskottu wahtimestari huostaansa.</p>
      <p>Lääkäri tutkii saapuneen wangin ensi tilaisuudessa. Äskein tulleelle wangille annetaan yksi kappale näitä sääntöjä, jonka hänen tulee lähteissänsä jättää takaisin 
        wälttäwässä kunnossa, tahi muuten palkita sen rahassa.
      </p>

      <h2>6 § </h2>
      <p className="firstLetterStyle">Jokaiselle wangille, jolla Tirehtöörin takana on rahaa tallessa, annetaan wastakirja, johon rahamäärässä tapahtuneet muutokset kuin myös 
        wangeille korkeimmilla luokeilla tulewat säästörahat kuukausittain kirjoitetaan. Mahdolliset erhetykset wastakirjassa ilmoitetaan wiiwyttelemättä Tirehtöörille ojennettawiksi.
      </p>

      <h2>7 § </h2>
      <p className="firstLetterStyle">Wangit nousewat arkipäiwinä suwi aikana kello 5 ja muulla wuoden ajalla kl 1/2 6 aamulla, mutta sunnuntai ja juhlapäiwinä pitkin wuotta kello 6. 
        Sittenkuin wangit noustuansa owat järjestäneet wuoteensa sekä pukeneet päällensä, pesneet ja kampanneet itsensä, pidetään aamurukous, johon kaikkeen puoli tuntia saapi kulua. 
        Sitte wiedään wangit työpaikkoihinsa, jossa he tekewät työtä kello 8, jolloin suurusta syödään. Työn teko alkaa jälleen 1/2 9 ja kestää kl. 12, jolloin päiwällisateria 
        annetaan. Sitte tehdään työtä kl. 1-7 ehtoolla. Ehtoollisen syötyä ja ehtoollisrukouksen pidettyä wiedään wangit makuuhuoneisiin, jossa heidän wiimeistäkin kello 9 pitää 
        menemän lewolle. Lauantaisin ja juhla aattona lakkaa työ kl. 6. Paitsi wapautta suurus- ja päiwällisajalla, pidetään selli wangit ja ne yhteiswangit, jotka tekewät työtä 
        työhuoneissa, jos ilma sitä myöntää, puolentuntia käwelemässä ja woimistelussa. Sunnuntai ja juhlapäiwinä menetellään samoin kaikkien wankien kanssa paitsi niiden, 
        jotka sillä kertaa owat jossain erinäisessä rangaistuksessa.</p>
      <p>Selliwangit tekewät myöskin työtä selleissä.</p>
      <p>Sunnuntai ja juhlapäiwinä oleskelewat yhteiswangit luokittain makuu huoneissa; ja tulee wankien silloin wiettää aikaansa lukemisella j. n. e. miten tirehtöri päättää.</p>

      <h2>8 § </h2>
      <p className="firstLetterStyle">Sairashoitoon, pesuun, huoneitten siiwoamiseen, ruan laittamiseen j. n. e. päättää tirehtöri tarpeellisen määrän wankeja.
      </p>

      <h2>9 § </h2>
      <p className="firstLetterStyle">Ruan laittaminen sekä jakaminen ja mitä tähän kuuluu on wahtimestarien katsottawana. Selliwangit aterioitsewat kukin erikseen selleissä, mutta 
        yhteiswangit syöwät ateriansa luokittain ruokasaleissa, kukin hänelle määrätyllä paikalla.</p>
      <p>Kielletty on wiemästä ruokaa millä teko syyllä hywänsä ruokahuoneista.</p>

      <h2>10 § </h2>
      <p className="firstLetterStyle">Jokaisen waateparseilin, mitä wangille annetaan, kirjoittaa wahtimestari erityiseen päiwäkirjaan, johon kaikki waatteita koskewat muutokset 
        kirjoitetaan. Myöskin wankien waateparseilit owat wahtimestarien katsannosta; heidän tulee sen ohesta pitää huolta, että wankien waatteet, niin paljon kuin mahdollista on, 
        pysywät puhtaina ja ehjinä.</p>
      <p>Mitä waatteista tai kengistä kuluu, ilmoittaa wanki asianomaiselle wartialle parannukseen toimitettawaksi. Milloin wanki saa uusia tahi puhtaita waatteita, owat 
        wanhat aina takaisin annettawat.
      </p>

      <h2>11 § </h2>
      <p className="firstLetterStyle">Puhtauden wuoksi owat wangit usein tutkittawat, ja ne, joissa elämiä tahi ruokottomuutta on, kuin myös heidän waatteensa ja muut heidän 
        käytettäwänä olleet esineet pitää heti juurtajaksain puhdistettaman, josta wartiain ensi-alussa on tarkkaa huolta pitäminen. Wähimmänkin merkin elämistä 
        hawaittuansa, tulee wangin siitä ilmoittaa wartialle.</p>
      <p>Wankien hiukset pidetään aina lyhyiksi kerittynä, ja heidän partansa ajellaan niin usein kuin tarwe waatii.</p>
      <p>Wangit saawat saunaa kerran wiikossa, milloin ei siihen estettä ole.</p>

      <h2>12 § </h2>
      <p className="firstLetterStyle">Merkin saatua tahi esimiehen käskystä, pitää wankien joutumalla ja ilman jyryä saapuman määrätyille kokouspaikoille; ja on 
        wiiwytteleminen tahi sen jälkeen ulosmeneminen kielletty.</p>
      <p>Wangit eiwät saa liikkua juoksujalassa, ellei sitä erittäin ole käsketty. Milloin useitten wankien on käyminen paikasta toiseen, pitää heidän käwelemän 
        yksittäin, toinen toisensa perässä, tahi pareittain, toinen toisensa rinnalla, sen mukaan kuin käsketään. Semmoisissa tilaisuuksissa kuin myös asentoon 
        seisotettaissa on kielletty wilkomasta ympärillensä, seisahtamasta tahi riwin ulkopuolelle astumasta.</p>
      <p>Milloin wirkamies, wahtimestari tahi wartia, joka wankia erittäin wartioitsee, käy wangin ohitse, jolla siitä ei ole häiriötä työssänsä, tahi jos wanki 
        kohtaa sellaisen esimiehen, pitää wangin nostaman lakkinsa ja seisoman awopäin, kunnes esimies on käynyt ohitse. Sellissä ja muissa lämpömissä huoneissa  ei wangit 
        saa pitää lakkia päässänsä. Jolloin esimies puhutele wankia, pitää wangin seisoman suorana awopäin ja karttaman tarpeettomia ruumiin ja jäsenten liikuntoja. 
        Työtä tekewän wangin tulee siinä tapauksessa lakata työstänsä, kunnes esimies on mennyt pois tahi antanut luwan työn jatkamiseen.</p>
      <p>Wartioitakin tulee wankien teititellä.</p>

      <h2>13 § </h2>
      <p className="firstLetterStyle">Jokaisen wangin Ewankelis-lutherilaista uskoa, joka ei ole sairaana tahi erinäisessä sairauden tilassa, pitää käymän Jumalan palweluksessa 
        ja muilla hartauden hetkillä, tirehtörin ja saarnaajan lähimmän määräyksen mukaan.</p>
      <p>Kirkossa istuwat wangit luokittain ja selliwangit erinänsä yhteiswangeista.</p>
      <p>Wangit wenäläis-kreikkaan uskoa saawat tilaisuutta käydä uskontonsa kirkossa kaupungissa.</p>

      <h2>14 § </h2>
      <p className="firstLetterStyle">Welwollinen ottamaan osaa alkeisopetuksessa on jokainen wanki, joka ei ole yli sen iän, mikä kuritushuoneessa on määrätty koulu-ajaksi, 
        tahi jolla ennestään ei ole ne tiedot, jotka hänen wapauttaisiwat koulun käymisestä. Tirehtörin luwalla saawat wanhemmatkin wangit käydä koulua, jos se saattaa 
        tapahtua ilman haittaa muiden opetukselle, ja wanki nähdään woiwan seurata opetusta.</p>
      <p>Koulussakin istuwat selliwangit erinänsä, ja yhteiswangit, niin paljon kuin mahdollista, wankiluokittain.</p>

      <h2>15 § </h2>
      <p className="firstLetterStyle">Perustettuja kanteita ilmoitetaan tirehtörille tahi johtokunnalle; mutta jos niitä esitellään häijyydestä, seuraa rangaistus. 
        Jos wanki haluaa puhutella tirehtöriä tahi muuta kuritushuoneen wirkamiestä, ilmoittakoon siitä wahtimestarin tahi asianomaisen wartian kautta.</p>
      <p>Milloin wanki tuntee itsensä sairaaksi, ilmoittakoon siitä wartioitsewalle knihdille, joka sairastumisesta antaa tiedon sairashuoneen wartialle, jotta 
        lääkärille sana saatetaan. Pahemmista sairastumisista annetaan lääkärille kohta tieto. Jos wangissa hawaitaan mielenwikaa, annettakoon myöskin heti tieto 
        tirehtörille. Milloin kuolema näkyy lähestywän, ilmoitetaan siitä saarnaajalle ilman wiiwytystä.
      </p>
    
      <h2>16 § </h2>
      <p className="firstLetterStyle">Ainoastaan tirehtörin luwalla saawat wangit wastaanottaa laitoksesta ulkona olewia henkilöitä heitä terwehtimään; samoin lahjoja. 
        Kaikki wangeille tulewat ja heiltä lähetettäwät kirjeet annetaan tirehtörille luettawaksi.</p>
      <p>Kun wangille annetaan lupa ottaa wastaan wieraita, pitää wahtimestarin taikka hänen määräämänsä wartian oleman läsnä.</p>

      <h2>17 § </h2>
      <p className="firstLetterStyle">Milloin wanki tarwitsee kirjoittajan apua, määrää tirehtöri siksi jonkun soweliaan miehen.</p>

      <h2>18 § </h2>
      <p className="firstLetterStyle">Kaikkinainen kaupanteko wankien kanssa ja kesken, ilman tirehtörin lupaa, on kielletty.</p>

      <h2>19 § </h2>
      <p className="firstLetterStyle">Pois lähtewä wanki sioitetaan ehtoota ennen selliin, jota ennen hän tarkasti tutkitaan. Sen jälkeen ei hänen ole lupa kohdata 
        eikä puhutella muita wankeja. Lähteissä annetaan wangille kuittia wastaan hänen laitoksessa olewa tawaransa, ellei muita käskyjä tästä erinäisissä tapauksissa 
        ole annettu.</p>
      <p>Ennenkuin wanki jättää wankiuden pitää hänen tirehtörille ilmoittaman, jollei hän ole saanut kaikkea kuin hänelle tulewa on.</p>

      <h2>20 § </h2>
      <p className="firstLetterStyle">Jos wanki rikkoo sitä wastaan kuin tässä yllä on säädetty, joutuu hän rangaistukseen, ja on welwollinen palkitsemaan 
        kaiken wahingon kuin hänen kauttansa on syntynyt.</p>
      
      <p className="centeredStyle">Hämeenlinnan kuritushuoneesta 15 p. Marraskuuta 1877.</p>
      <p className="signature">P. A. Brofeldt</p>

      <a className="hyperLink" href="https://digi.kirjastot.fi/files/original/6fb33012db610211b7cfcb04071180a1.pdf">Lähde</a>
    
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Kuritushuoneen järjestyssäännöt</title> // metadata

export default JailRulesPage