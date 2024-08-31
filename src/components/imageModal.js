import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { captionTextStyle, 
        ccStyle, 
        fullScreenImageStyle, 
        captionContainerStyle,
        modalHeaderStyle,
        modalTitleStyle,
        modalBodyStyle,
        fullScreenImageWrapperStyle
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
      <Modal show={show} fullscreen={true} onHide={handleClose}>
        <Modal.Header closeButton={true} closeVariant="white" className={modalHeaderStyle}>
          <Modal.Title className={modalTitleStyle}>{titleText}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={modalBodyStyle}>
          <TransformWrapper>
            <TransformComponent wrapperClass={fullScreenImageWrapperStyle}>
              <Image src={imagePath} alt="Kuva" className={fullScreenImageStyle}/>
            </TransformComponent>
          </TransformWrapper>
          <div className={ captionContainerStyle }>
            <p className={ captionTextStyle }>{detailsText}</p>
            <p className={ ccStyle }>{copyrightText}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ImageModal;