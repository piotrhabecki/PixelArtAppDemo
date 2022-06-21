import classes from './Editor.module.css'

interface editorOptions {
    panelWidth: number;
    panelHeight: number;
    handleWidthChange: (event: React.FormEvent<HTMLInputElement>) => void;
    handleHeightChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const EditorOptions = (props: editorOptions) => {
    return <>
    <h2>Enter Dimensions of Canvas</h2>
    <div id="options" className={classes.options}>
      <div className={classes.option}>
        <input
          type="number"
          className={classes.panelInput}
          defaultValue={props.panelWidth}
          onChange={props.handleWidthChange}
        />
        <span>Width</span>
      </div>
      <div className={classes.option}>
        <input
          type="number"
          className={classes.panelInput}
          defaultValue={props.panelHeight}
          onChange={props.handleHeightChange}
        />
        <span>Height</span>
        </div>
        </div>
      </>
}

export default EditorOptions;