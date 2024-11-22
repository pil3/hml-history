import * as React from "react"

import Layout from "../components/layout"
import Article from "../components/article"
import DateDivider from "../components/dateDivider"

import "../styles/base/global.css"

import Divider from "../assets/divider.svg"

const Articles1914Page = () => {
  return (
    <Layout titleText="Hämeen Sanomat, 1914">
      <h2>Artikkeleita</h2>
      
      <Divider className="dividerStyle" />
      <p className="centeredStyle boldStyle" style={{margin:"8px 0"}}>Torstai, 8.1.1914</p>
      <Article titleText="Nuorison kasvatuksesta käytännölliseen elämään.">
        <p>Tänä wuonna on ympäri suomea wietetty kotimaisen työn wiikkoa. Osanotto juhliin on kaikkialla ollut melkoinen ja yleisön innostus suuri. Epäilemättä juhlatilaisuuksissa pidetyt 
            puheet ja esitelmät owat olleet omiaan awaamaan ihmisten silmiä ymmärtämään kansallisen teollisuuden arwoa ja merkitystä. Ainakin on kuulunut, että eräitten kotoisten 
            teollisuuslaitosten tuotteet owat tuon wiikon jälkeen saawuttaneet ilahuttawan suuren menekin.</p>
        <p>Tämän yhteydessä tulee ajatelleeksi sitä tosiseikkaa, että käytännöllisen elämän alalla maassamme tarwittaisiin enemmän woimia, kuin mitä nykyisin on käytettäwissä. 
            Käytännöliselle työlle tuskin wielä annetaan meillä tarpeeksi arwoa ja tunnustusta. Sitä todistaa sekin, että monet nuoret pitäwät miltei häpeällisenä antautua sanotulle alalle. 
            Nuorison katsantokanta olisi tässä suhteessa saatawa muuttumaan, ja muutos on mahdollinen kodin ja koulun yhteiswaikutuksen kautta.</p>
        <p>Ensinnäkin olisi kodeissa kiinnitettäwä suurempaa huomiota lasten käytännölliseen kaswatukseen. Löytyy wielä paljon sellaisia koteja - ainakin siwistyneissä piireissä, - joissa 
            tyttöjen osanottoa keittiöhommiin ja käsitöihin pidetään täysin sopimattomana. Sellaiset työt kuuluwat palwelijoille ja ompelijattarille - warsinaisten perheenjäsenten on muka 
            aiwan tarpeeton puuttua niihin. Tällainen käsityskanta on kahdessakin suhteessa turmiollinen. Ensinnäkin se on omiaan herättämään nuorissa wahingollista säätytunnetta, joka luo 
            onnettoman kuilun eri yhteiskuntakerrosten wälille, ja toiseksi se kaswattaa epäkäytännöllisiä ihmisiä, joiden warttuneemmallakin iällä ensi pulan sattuessa täytyy turwautua 
            toisten apuun. Kodissa on kaswatus aloitettawa, ja kotikaswatuksen päämääränä tulee olla lasten mahdollisimman monipuolinen kehittäminen. Sillä eihän sitä koskaan etukäteen 
            woi aawistaa, mitä kaikkea ihminen elämän taipaleella tulee tarwitsemaan. Warakkaimmissakin olosuhteissa kaswaneen elämän ehdot woiwat muuttua sellaisiksi, että hänen on mahdoton 
            tulla toimeen ilman melkoista käytännöllistä kätewyyttä. Tämä koskee tietysti myöskin poikien kaswatusta. Heillekin woidaan kodissa walmistaa tilaisuus erilaisiin käytännöllisiin 
            hommiin, halkojen hakkaamiseen, weistoon j.n.e.</p>
        <p>Monasti on myöskin julkisuudessa huomautettu siitä, että käytännöllinen opetus on kouluissamme aiwan liiaksi syrjäytetty. Seurauksena tästä on, että siinä suuressa nuorisojoukossa, 
            joka meillä wuosittain suorittaa ylioppilastutkinnon, on paljon aineksia, joille toimeentulo myöhemmin käy hywinkin waikeaksi. Warsinaisen henkisen työn alalla ei tahdo kaikille 
            paikkoja riittää, ja monasti täytyy akateemisen kansalaisen tyytyä sangen pienipalkkaiseen toimeen ansaitakseen joten kuten jokapäiwäisen leipänsä. Siitä huolimatta lisääntyy 
            ylioppilastulwa wuosi wuodelta, ja uusia, puhtaasti teoreettisia kouluja perustetaan tuhkatiheään maaseudullekin. Tietystihän tämä on ilahduttawa todistus henkisen elämän 
            wirkeydestä, eikä kukaan woi tietää, ettei pohjakoulun - s.o. wiiden alemman luokan - jakama tietomäärä olisi tarpeellinen kelle tahansa. Mutta opettajien ja wanhempien pitäisi 
            suuremmassa määrässä kehoittaa sellaisia oppilaita, joilla on enemmän käytännöllisiä taipumuksia, eroamaan pohjakoulun suoritettuaan ja antautumaan käytännöllisille aloille. 
            Tämän kautta warmaankin akateeminen liikatuotanto melkoisesti wähenisi, samalla kuin ylioppilaaksi tulewien henkinen taso kohoaisi, ja käytännöllinen elämä saisi enemmän 
            kywykkäitä ja innostuneita työntekijöitä.</p>
        <p>Suuri edistysaskel olisi myöskin, jos oppikouluihimme - ainakin muutamiin - klassillisen ja reaalilinjan lisäksi woitaisiin perustaa erikoinen „kansalaisopintojen linja”. Tämän 
            asian otti ensi kertaa puheeksi professori E. N. Setälä Helsingin Sanomissa wiime syyskuulla julkaisemassaan kirjoitussarjassa. Uudella linjalla tultaisiin laajentamaan oppilaiden 
            yleistä siwistystä ilman, että ylioppilastutkintoa pidettäisiin ehdottomana päämääränä. Mutta samalla warattaisiin melkoinen tuntimäärä myös puhtaasti käytännöllisille aineille. 
            Täten olisi oppilailla myöhemmin mahdollisuus, luontaisten taipumustensa mukaan, antautua joko luku- tai käytännölliselle uralle. - Muuten löytyykin maassamme tällainen oppilaitos. 
            Neiti Edith Bergholmin perustamassa Naisopistossa Porwoon kaupungissa käywät tietopuolinen ja käytännöllinen opetus käsi kädessä. Opisto tahtoo kaswattaa walistuneita ja samalla 
            käytännölliseen elämään pystywiä naisia. Sitä paitsi kiinnitetään siellä, kuten kansalaisopistoissammekin, erikoista huomiota oppilaiden luonteen kehitykseen. Ilman suurempia 
            ponnistuksia woiwat ainakin lahjakkaammat oppilaat, suoritettuaan opiston 2-wuotisen kurssin, wuoden tai parin itseopiskelun jälkeen tulla ylioppilaiksi, jos niin haluawat. 
            Muille taasen awautuu monenlaisia mahdollisuuksia käytännöllisillä aloilla.</p>
          <p>Muitakin kouluja on maassamme, joissa niin tietopuolisia kuin käytännöllisiä näkökohtia pidetään silmällä. Erikoisen sopiwaa on tulewille maanwiljelijöille ja maatalouden 
            miehille, jotka owat käyneet 5 luokkaa jossakin oppikoulussa, siirtyä Helsingin maanwiljelyslyseoon. Sieltä he saawat suorittaa pääsytutkinnon yliopiston maataloudelliseen osastoon. 
            Wihdoin on kansanopistojemme opetusohjelma laadittu talonpoikaisen nuorison monipuolista kehitystä silmällä pitäen. Opiston käyneet omaawat suuren määrän yleissiwistystä ja niin 
            paljon käytännöllisiä tietoja, että he menestyksellä woiwat jatkaa opiskeluaan maamies- käsityö- ja emäntäkouluissa.</p>
          <p>Kansakunnan terween ja elinwoimaisen kehityksen ensimäisenä ehtona on, että sillä on luja sekä aineellinen että henkinen pohja. Käden työ ja ajatuksen työ owat kumpikin yhtä 
            wälttämättömiä ja kunnioitettawia. Ilman toista ei toinenkaan woi menestyä. Tämän seikan tulisi olla myös meille suomalaisille selwänä, warsinkin nykyisinä ahtaina aikoina, jolloin 
            niin paljon isänmaallista työtä joka puolella tarwittaisiin, kirjoittaa „Kodin Joulussa”</p>
          <p className="signatureStyle">Mikko W. Erich</p>
      </Article>

      <DateDivider date="" />


     

      <br></br>
      <a className="hyperLinkStyle" href="https://digi.kansalliskirjasto.fi/sanomalehti/titles/0356-2751?display=THUMB&year=1914">Linkki vuosikertaan 1914</a>
    </Layout>
  )
}
export const Head = () => <title>Entinen Hämeenlinna - Artikkeleita 1914</title> // metadata

export default Articles1914Page 