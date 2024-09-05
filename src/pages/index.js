import * as React from "react"

import Layout from "../components/layout";
import ImageSlider from "../components/imageSlider";

const homePage = () => {
  return ( 
    <Layout titleText="Palasia entisestä Hämeenlinnasta">

          <ImageSlider imgArray={carouselArray} showDots={false}></ImageSlider>

    </Layout>
  );
}
export const Head = () => (
  <>
    <html lang="fi" />
    <title>Kotisivu</title>
  </>
)
export default homePage;


/* image array for carousel
-------------------------------------------------------------*/
const carouselArray = [
  {
    key: "imageid1",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=tmk.160997135523400&index=0&size=large",
    licence: "Public Domain",
    org: "Uudenkaupungin museo - Ugin museon valokuvakokoelma",
    caption: "Näkymä Kaupunginpuistosta kohti linnaa.",
    title: "~1900"
  },
  {
    key: "imageid2",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917705462900&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma",
    caption: "Hämeenlinnan vanhan rautatieaseman tornipuolen päätyseinä.",
    title: "~1862"
  },
  {
    key: "imageid3",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917724168400&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma",
    caption: "Näkymä Hämeenlinnan kirkon tornista itään.",
    title: "~1890"
  },
  {
    key: "imageid4",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259858&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot - Böök A. Th",
    caption: "Kaksi miestä ja puinen pitkäsilta.",
    title: "~1900"
  },
  {
    key: "imageid5",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259121&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot - Böök A. Th",
    caption: "Luistelijoita Wetterhoffin rannassa.",
    title: "~1900"
  },
  {
    key: "imageid6",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917704842500&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuse - A. Alopaeus",
    caption: "Hämeenlinnan vanha rautatieasema radan puolelta.",
    title: "1899"
  },
  {
    key: "imageid7",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166927878871200&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma",
    caption: "Vanajaveden ensimmäinen rautatiesilta, joka oli kääntösilta.",
    title: "1902"
  },
  {
    key: "imageid8",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259093&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot - Böök A. Th",
    caption: "Valokuvaaja Böökin tytot Ahveniston rannalla.",
    title: "1905"
  },
  {
    key: "imageid9",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259112&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot Böök A. Th",
    caption: "Venäläistä varuskuntaa Raatihuoneenkadulla.",
    title: "1905"
  },
  {
    key: "imageid10",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259113&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot - Böök A. Th",
    caption: "Kaupunginhotelli vasemmalla, kirkko oikealla.",
    title: "1905"
  },
  {
    key: "imageid11",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259114&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot - Böök A. Th",
    caption: "Kuva torin yli kohti kaupunginhotellia eli seurahuonetta.",
    title: "1905"
  },
  {
    key: "imageid12",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-260693&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot - Böök A. Th",
    caption: "Näkymä Myllymäenkalliolta kaupunkiin.",
    title: "~1908"
  },
  {
    key: "imageid13",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166927877711600&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma",
    caption: "Vanajaveden ensimmäinen rautatiesilta, joka oli kääntösilta.",
    title: "~1910"
  },
  {
    key: "imageid14",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166927881179300&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma",
    caption: "Pitkäsilta Vanajaveden yllä Hämeenlinnassa, keskustasta Keinusaareen päin. Silta avattiin liikenteelle v. 1909.",
    title: "1916"
  },
  {
    key: "imageid15",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917716821800&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma",
    caption: "Hämeenlinnan uuden rautatieaseman kaupunginpuoleinen julkisivu.",
    title: "1919"
  },
  {
    key: "imageid16",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917725458200&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo - Suomen Rautatiemuseon kuvakokoelma",
    caption: "Hämeenlinnan uuden rautatieaseman kaupunginpuoleinen julkisivu",
    title: "~1930"
  },
  {
    key: "imageid17",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/bf156bd9512edb0e82d53b53455a7eb7.jpg",
    licence: "",
    org: "Hämeenlinnan kaupunginkirjasto - Yksityiskokoelma",
    caption: "Näkymä linnan länsipuolelta nykyisen Tampereentien tienoilta. Kuvan omistaja toimi vanginvartijana Hämeenlinnassa.",
    title: "~1910"
  },
  {
    key: "imageid18",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/990c0b41ffdc807ef69fba42dee26f04.jpg",
    licence: "",
    org: "Hämeenlinnan kaupunginkirjasto - Suomalainen kirjakauppa, Hämeenlinna",
    caption: "Hämeenlinnan laivaranta Rantapuiston laidalla. Satamaan valmistui arkkitehti Armas Rankan suunnittelema satamakonttori vuonna 1911.",
    title: "~1912"
  },
  {
    key: "imageid19",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/8722fd6f8e5b2d537d201c71e255969c.jpg",
    licence: "",
    org: "Hämeenlinnan kaupunginkirjasto - Hämeenlinnan postimerkkikerho ry. (yksityiskokoelma)",
    caption: "Näkymä kirkon tornista länteen. Taustalla näkyy ortodoksinen sotilaskirkko",
    title: "~1900"
  },
  
];