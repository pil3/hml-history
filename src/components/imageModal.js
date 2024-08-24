import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import { captionStyle, 
        ccStyle, 
        fullScreenImageStyle, 
        textblockStyle,
        bodyStyle
      } from "../styles/components/imageModal.module.css"
import "../styles/components/imageModal.module.css"
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
      <Modal show={show} fullscreen onHide={handleClose}>
        <Modal.Header closeButton closeVariant="white" className="modalTitleBgStyle">
          <Modal.Title className="ms-auto modalTitleTextStyle">{titleText}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={ bodyStyle }>
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