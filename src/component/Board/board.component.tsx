import { h } from "preact";

import Square from "../Square/square.component";

import "./board.styles.css";

const Board = ({ squares, onClick }) => {
    return (<div className="board">
        {squares.map((square, i) => (
            <Square  value={square} onClick={() => onClick(i)} />
        ))}
    </div>);
}

export default Board;