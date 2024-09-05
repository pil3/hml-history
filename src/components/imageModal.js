import * as React from "react"
// import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import {ccStyle, 
        captionContainerStyle,
        modalHeaderStyle,
        modalTitleStyle,
        modalBodyStyle,
        buttonContainerStyle,
        buttonStyle,
        fsImgStyle
      } from "../styles/components/imageModal.module.css"
const ImageModal = ({imageStyle, imagePath, titleText, detailsText, copyrightText}) => {
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
      <Modal show={show} fullscreen={false} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton={true} closeVariant="white" className={modalHeaderStyle}>
          <Modal.Title className={modalTitleStyle}>{titleText}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={modalBodyStyle}>

          <TransformWrapper centerOnInit>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <React.Fragment>
                <div className={buttonContainerStyle}>
                  <button className={buttonStyle} onClick={() => zoomIn()}>+</button>
                  <button className={buttonStyle} onClick={() => zoomOut()}>-</button>
                  <button className={buttonStyle} onClick={() => resetTransform()}>{"\u256c"}</button>
                </div>
                <TransformComponent wrapperStyle={{width: "100%", margin: "10px 0"}}>
                    <Image className={fsImgStyle} src={imagePath} alt="Kuva"/>
                </TransformComponent>
              </React.Fragment>
            )}
          </TransformWrapper>

          <div className={ captionContainerStyle }>
            <p>{detailsText}</p>
            <p className={ ccStyle }>{copyrightText}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ImageModal;