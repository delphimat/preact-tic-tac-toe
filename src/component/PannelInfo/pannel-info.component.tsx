import { h } from "preact";

import Square from "../Square/square.component";

import "./pannel-info.styles.css";

const PannelInfo = ({ nbrTurn, hasWinner, iconGame }) => {
    let messageToDisplay = '';

    if (nbrTurn == 9 && !hasWinner) {
        messageToDisplay = "___ Draw ___";
    }

    return (<div className="pannel-info">
        <h1>{hasWinner ? `Winner: ${hasWinner}` : `Next Player: ${iconGame}`}</h1>
        <p>
            {messageToDisplay}
        </p>
    </div>);
}

export default PannelInfo;