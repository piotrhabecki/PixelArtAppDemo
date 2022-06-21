import { useState } from "react";

import DrawingPanel from "../DrawingPanel/DrawingPanel";
import EditorOptions from "./EditorOptions";
import { CirclePicker, ColorResult } from "react-color";

import classes from "./Editor.module.css";
import ExampleImage from "../ExampleImage/ExampleImage";
import Instruction from "../Instruction/Instruction";

const Editor = () => {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptionPanel, setHideOptionPanel] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setColor] = useState("#f44336");

  const handleWidthChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPanelWidth(Number(event.currentTarget.value));
  };

  const handleHeightChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPanelHeight(Number(event.currentTarget.value));
  };

  const handleChangeColor = (color: ColorResult) => {
    setColor(color.hex);
  };

  const initalizeDrawingPanel = () => {
    setHideDrawingPanel(!hideDrawingPanel);
    setHideOptionPanel(!hideOptionPanel);

    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing");
  };

  return (
    <div id="Editor" className={classes.editor}>
      <h1> ✏️ Pixel Editor - Have fun! ✏️</h1>

      {!hideOptionPanel && (
        <EditorOptions
          panelHeight={panelHeight}
          panelWidth={panelWidth}
          handleHeightChange={handleHeightChange}
          handleWidthChange={handleWidthChange}
        />
      )}

      <button onClick={initalizeDrawingPanel} className={classes.button}>
        {buttonText}
      </button>

      {!hideDrawingPanel && (
        <CirclePicker
        className={classes.circlePicker}
        width="400px"
          colors={[
            "#4D4D4D",
            "#999999",
            "#FFFFFF",
            "#F44E3B",
            "#FE9200",
            "#FCDC00",
            "#DBDF00",
            "#A4DD00",
            "#68CCCA",
            "#73D8FF",
            "#AEA1FF",
            "#FDA1FF",
            "#333333",
            "#808080",
            "#cccccc",
            "#D33115",
            "#E27300",
            "#FCC400",
            "#B0BC00",
            "#68BC00",
            "#16A5A5",
            "#009CE0",
            "#7B64FF",
            "#FA28FF",
            "#000000",
            "#666666",
            "#B3B3B3",
            "#9F0500",
            "#C45100",
            "#FB9E00",
            "#808900",
            "#194D33",
            "#0C797D",
            "#0062B1",
            "#653294",
            "#AB149E",
          ]}
          color={selectedColor}
          onChange={handleChangeColor}
        />
      )}

      {!hideDrawingPanel && (
        <DrawingPanel
          height={panelHeight}
          width={panelWidth}
          selectedColor={selectedColor}
        />
      )}

      {!hideDrawingPanel && <ExampleImage />}

      {!hideOptionPanel && <Instruction />}
    </div>
  );
};

export default Editor;
