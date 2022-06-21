import Pixel from '../Pixel/Pixel';
import classes from './Row.module.css'

interface row {
    width: number;
    selectedColor: string;
}

const Row = (props: row) => {

    let pixels = Array.from({ length: props.width }, (v, i) => (
        <Pixel key={i} selectedColor={props.selectedColor} />
      ));

    return <div id="Row" className={classes.row}>{pixels}</div>
    }
    
    export default Row;