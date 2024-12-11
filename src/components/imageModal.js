
import * as React from "react"

import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {modalHeaderStyle,
        modalTitleStyle,
        modalBodyStyle,
        buttonContainerStyle,
        buttonStyle,
        iconStyle,
        fsImgStyle,
        copyright
      } from "../styles/components/imageModal.module.css"
import "../styles/base/global.css"

import ZoomIn from "../assets/zoom-in.svg"
import ZoomOut from "../assets/zoom-out.svg"
import ZoomRst from "../assets/zoom-rst.svg"

const ImageModal = ({imageStyle, imagePath, titleText, copyrightText}) => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Image className={imageStyle}
      src={imagePath}
      onClick={handleShow}
      role="button"
      alt = {titleText}
      rounded
    />
      <Modal show={show} fullscreen={true} onHide={handleClose} size="xl">
        <Modal.Header closeButton={true} closeVariant="white" className={modalHeaderStyle}>
          <Modal.Title className={modalTitleStyle}>{titleText}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={modalBodyStyle}>

          <TransformWrapper centerOnInit>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <React.Fragment>
                <div className={buttonContainerStyle}>
                  <button className={buttonStyle} onClick={() => zoomIn()} aria-label="Lähennä"><ZoomIn className={iconStyle}/></button>
                  <button className={buttonStyle} onClick={() => zoomOut()} aria-label="Loitonna"><ZoomOut className={iconStyle}/></button>
                  <button className={buttonStyle} onClick={() => resetTransform()} aria-label="Palauta"><ZoomRst className={iconStyle}/></button>
                </div>
                <TransformComponent wrapperStyle={{width: "100%", height: "85%", margin: "10px 0"}}>
                    <Image className={fsImgStyle} src={imagePath} alt="Kuva"/>
                </TransformComponent>
              </React.Fragment>
            )}
          </TransformWrapper>
          <div className={copyright}>{copyrightText}</div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ImageModal;