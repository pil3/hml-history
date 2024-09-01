import * as React from "react";

import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import ArrowIcon from "../assets/arrow-right.svg";
import InfoIcon from "../assets/info.svg";
import Spacer from "../assets/spacer.svg"

import "../styles/base/global.css"

import { rowStyle, 
          eventStyle,
          eventYearStyle,
          buttonStyle,
          ccStyle,
          modalHeaderStyle,
          modalTitleStyle,
          modalBodyStyle
 } from "../styles/components/timelineEvent.module.css";

const TimelineEvent = ({ eventTitle, eventYear, eventInfo, imageData,cc }) => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const hasInfo = eventInfo !== undefined;
  const isCentury = eventTitle === undefined;
  const isSpacer = eventYear === undefined;
  const hasImage = imageData !== undefined;

  return (
    <>
      <div className={rowStyle}>
        <div className={ eventStyle }>{eventTitle}</div>
        <div><ArrowIcon style={{ display: isCentury ? "none" : "inline-block"}}  width="20px" height="auto"/></div>
        <div style={{fontWeight: isCentury ? "bold" : "normal", fontSize: isCentury ? "26px" : "20px"}} className= { eventYearStyle }>{eventYear}<Spacer style={{ display: isSpacer ? "inline-block" : "none"}} /></div>
        <div><Button style={{ display: hasInfo ? "inline-block" : "none"}} variant="" className={buttonStyle} onClick={handleShow}> <InfoIcon height= "40px" width="auto" /> </Button></div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton={true} closeVariant="white" className={modalHeaderStyle}>
          <Modal.Title className={modalTitleStyle}>{eventTitle} {eventYear}</Modal.Title>
        </Modal.Header>
          <Modal.Body className={modalBodyStyle}>
            {eventInfo}
            <Image style={{ display: hasImage ? "block" : "none"}} className="centeredImageStyle" alt="Kuva" src={imageData}/>
            <div className={ccStyle}>{cc}</div>
          </Modal.Body>
        </Modal>
    </>
  );
}

// Export the component
export default TimelineEvent;