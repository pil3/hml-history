import React, { useState, useRef, useEffect } from "react";
import {zoomContainer, 
        zoomBtnContainer, 
        btnStyle, 
        imgStyle} from "../styles/components/ImageZoomInOut.module.css"

function ImageZoomInOut({ imageUrl }) {

  // Define state variables
  const [scale, setScale] = useState(0.8);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  // Define zoom in/out functions
  const handleZoomIn = () => {
    setScale((scale) => scale + 0.2);
  };
  const handleZoomOut = () => {
    if(scale < 0.9) return;
    setScale((scale) => scale - 0.2);
  };
  const handleReset = () => {
    setScale(0.8);
    setPosition({x: 0, y: 0});
  };
  // Define mouse event listeners with the useEffect hook
  useEffect(() => {
    const image = imageRef.current;
    let isDragging = false;
    let prevPosition = { x: 0, y: 0 };

    const handleMouseDown = (e) => {
      isDragging = true;
      prevPosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevPosition.x;
      const deltaY = e.clientY - prevPosition.y;
      prevPosition = { x: e.clientX, y: e.clientY };
      setPosition((position) => ({
        x: position.x + deltaX,
        y: position.y + deltaY,
      }));
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    image?.addEventListener("pointerdown", handleMouseDown);
    image?.addEventListener("pointermove", handleMouseMove);
    image?.addEventListener("pointerup", handleMouseUp);

    return () => {
      image?.removeEventListener("pointerdown", handleMouseDown);
      image?.removeEventListener("pointermove", handleMouseMove);
      image?.removeEventListener("pointerup", handleMouseUp);
    };
  }, [imageRef, scale]);
  // Note: ?. is shorte syntax value checking if values are undefined

  // Render image and buttons for zooming in and out
  return (
    <div className={zoomContainer}>

      <div className={zoomBtnContainer}>
        <button className={btnStyle} onClick={handleZoomIn}>
          <span>+</span>
        </button>
        <button className={btnStyle} onClick={handleZoomOut}>
          <span>-</span>
        </button>
        <button className={btnStyle} onClick={handleReset}>
          <span>{"\u256c"}</span>
        </button>
      </div>

      <img
        ref={imageRef}
        src={imageUrl}
        alt="Kartta 1778"
        className={imgStyle}
        style={{transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`}}
        draggable={false}
      />
    </div>
  );
}

export default ImageZoomInOut;