import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import { captionStyle, 
        ccStyle, 
        fullScreenImageStyle, 
        textblockStyle,
        modalStyle,
        modalBodyStyle,
        modalTitleBgStyle,
        modalTitleTextStyle
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
      <Modal show={show} fullscreen={true} onHide={handleClose} className={modalStyle}>
        <Modal.Header closeButton={true} closeVariant="white" className={modalTitleBgStyle}>
          <Modal.Title className={modalTitleTextStyle}>{titleText}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={ modalBodyStyle }>
          <Image src={imagePath} alt="Kuva"  className={ fullScreenImageStyle }/>
          <div className={ textblockStyle }>
            <p className={ captionStyle }>{detailsText}</p>
            <p className={ ccStyle }>{copyrightText}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ImageModal;