import { useState } from "react";
import classes from "./Pixel.module.css";

interface pixel {
  selectedColor: string;
}

const Pixel = (props: pixel) => {
  const [pixelColor, setPixelColor] = useState("#fff");
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  const applyColor = () => {
    setPixelColor(props.selectedColor);
    setCanChangeColor(false);
  };

  const changeColorOnHover = () => {
    setOldColor(pixelColor);
    setPixelColor(props.selectedColor);
  };

  const resetColor = () => {
    if(canChangeColor) setPixelColor(oldColor)
    setCanChangeColor(true)

  };

  const clearColor = (event: any) => {
    event.preventDefault();
    setPixelColor("#fff");
    setCanChangeColor(false);
  };

  return (
    <div
      id="Pixel"
      className={classes.pixel}
      onClick={applyColor}
      onMouseEnter={changeColorOnHover}
      onContextMenu={clearColor}
      onMouseLeave={resetColor}
      style={{ backgroundColor: pixelColor }}
    ></div>
  );
};

export default Pixel;
