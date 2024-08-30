/* basic imports
-------------------------------------------------------------*/
import * as React from "react"
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCarousel from "../components/imageCarousel";

/* define page component
-------------------------------------------------------------*/
const homePage = () => {
  return ( 
    <Layout titleText="Palasia entisestä Hämeenlinnasta">
      <Row >
        <Col>
          <ImageCarousel imgArray={carouselArray}></ImageCarousel>
        </Col>
      </Row>
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
    org: "Uudenkaupungin museo",
    collection: "Ugin museon valokuvakokoelma",
    details: "Näkymä Kaupunginpuistosta kohti linnaa.",
    year: "~1900"
  },
  {
    key: "imageid2",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917705462900&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo",
    collection: "Suomen Rautatiemuseon kuvakokoelma",
    details: "Hämeenlinnan vanhan rautatieaseman tornipuolen päätyseinä.",
    year: "~1862"
  },
  {
    key: "imageid3",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917724168400&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo",
    collection: "Suomen Rautatiemuseon kuvakokoelma",
    details: "Näkymä Hämeenlinnan kirkon tornista itään.",
    year: "~1890"
  },
  {
    key: "imageid4",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259858&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot",
    collection: "Böök A. Th",
    details: "Kaksi miestä ja puinen pitkäsilta.",
    year: "~1900"
  },
  {
    key: "imageid5",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259121&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot",
    collection: "Böök A. Th",
    details: "Luistelijoita Wetterhoffin rannassa.",
    year: "~1900"
  },
  {
    key: "imageid6",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917704842500&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuse",
    collection: "A. Alopaeus",
    details: "Hämeenlinnan vanha rautatieasema radan puolelta.",
    year: "1899"
  },
  {
    key: "imageid7",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166927878871200&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo",
    collection: "Suomen Rautatiemuseon kuvakokoelma",
    details: "Vanajaveden ensimmäinen rautatiesilta, joka oli kääntösilta.",
    year: "1902"
  },
  {
    key: "imageid8",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259093&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot",
    collection: "Böök A. Th",
    details: "Valokuvaaja Böökin tytot istuvat Ahveniston rannalla.",
    year: "1905"
  },
  {
    key: "imageid9",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259112&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot",
    collection: "Böök A. Th",
    details: "Venäläistä varuskuntaa Raatihuoneenkadulla.",
    year: "1905"
  },
  {
    key: "imageid10",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259113&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot",
    collection: "Böök A. Th",
    details: "Kaupunginhotelli vasemmalla, kirkko oikealla.",
    year: "1905"
  },
  {
    key: "imageid11",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-259114&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot",
    collection: "Böök A. Th",
    details: "Kuva torin yli kohti kaupunginhotellia eli seurahuonetta.",
    year: "1905"
  },
  {
    key: "imageid12",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=lahdenmuseo.lkm-260693&index=0&size=large",
    licence: "CC BY 4.0",
    org: "Lahden museot",
    collection: "Böök A. Th",
    details: "Näkymä Myllymäenkalliolta kaupunkiin.",
    year: "~1908"
  },
  {
    key: "imageid13",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166927877711600&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo",
    collection: "Suomen Rautatiemuseon kuvakokoelma",
    details: "Vanajaveden ensimmäinen rautatiesilta, joka oli kääntösilta.",
    year: "~1910"
  },
  {
    key: "imageid14",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166927881179300&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo",
    collection: "Suomen Rautatiemuseon kuvakokoelma",
    details: "Pitkäsilta Vanajaveden yllä Hämeenlinnassa, keskustasta Keinusaareen päin. Silta avattiin liikenteelle v. 1909.",
    year: "1916"
  },
  {
    key: "imageid15",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917716821800&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo",
    collection: "Suomen Rautatiemuseon kuvakokoelma",
    details: "Hämeenlinnan uuden rautatieaseman kaupunginpuoleinen julkisivu.",
    year: "1919"
  },
  {
    key: "imageid16",
    imgSrc: "https://www.finna.fi/Cover/Show?source=Solr&id=srm.166917725458200&index=0&size=large",
    licence: "CC BY-NC-SA 4.0",
    org: "Suomen Rautatiemuseo",
    collection: "Suomen Rautatiemuseon kuvakokoelma",
    details: "Hämeenlinnan uuden rautatieaseman kaupunginpuoleinen julkisivu",
    year: "~1930"
  },
  {
    key: "imageid17",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/bf156bd9512edb0e82d53b53455a7eb7.jpg",
    licence: "",
    org: "Hämeenlinnan kaupunginkirjasto",
    collection: "Yksityiskokoelma",
    details: "Näkymä linnan länsipuolelta nykyisen Tampereentien tienoilta. Kuvan omistaja toimi vanginvartijana Hämeenlinnassa.",
    year: "~1910"
  },
  {
    key: "imageid18",
    imgSrc: "https://digi.kirjastot.fi/files/fullsize/990c0b41ffdc807ef69fba42dee26f04.jpg",
    licence: "",
    org: "Hämeenlinnan kaupunginkirjasto",
    collection: "Suomalainen kirjakauppa, Hämeenlinna",
    details: "Hämeenlinnan laivaranta Rantapuiston laidalla. Satamaan valmistui arkkitehti Armas Rankan suunnittelema satamakonttori vuonna 1911.",
    year: "~1912"
  },
  
];