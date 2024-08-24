// Import React
import * as React from "react";
import Card from 'react-bootstrap/Card';
import { cardStyle } from "../styles/components/ImgCard.module.css";
// Define component (Note: start with capital)
const ImgCard = ({imageSource, cardTitle}) => {
  return (
    <Card style={{ minWidth: "10rem", margin: "10px" }} className={cardStyle}>
    <Card.Img variant="top" src={imageSource} alt="Map"/>
    <Card.Body>
      <Card.Title>{cardTitle}</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

// Export the component
export default ImgCard;