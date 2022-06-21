import { useRef } from "react";
import Row from "../Row/Row";
import { exportComponentAsPNG } from "react-component-export-image";

import classes from "./DrawingPanel.module.css";

interface drawingPanel {
  width: number;
  height: number;
  selectedColor: string;
}

const DrawingPanel = (props: drawingPanel) => {
  let rows = Array.from({ length: props.height }, (v, i) => (
    <Row key={i} width={props.width} selectedColor={props.selectedColor} />
  ));

  const panelRef = useRef<any>(null)

  const exportImage = () => {
    if(panelRef !== null) exportComponentAsPNG(panelRef)
  }

  return (
    <div id="DrawingPanel" className={classes.drawingPanel}>
      <div id="pixels" ref={panelRef}>{rows}</div>
      <button onClick={exportImage} className={classes.button}>
        Export as PNG ⬇️
      </button>
    </div>
  );
};

export default DrawingPanel;
