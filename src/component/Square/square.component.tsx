import { h } from "preact";

import "./square.styles.css";

// value display X or O
// onClick is an arrow function with the state from the parent component
const Square = ({value, onClick}) => {
    const style = value ? `squares ${value}` : `squares`;

    return (
        <button className={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square;