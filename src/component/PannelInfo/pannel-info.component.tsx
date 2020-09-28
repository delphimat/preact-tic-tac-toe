import { h } from "preact";

import "./pannel-info.styles.css";

const PannelInfo = ({ nbrTurn, hasWinner, iconGame }) => {
    let messageToDisplay = '';

    if (nbrTurn == 9 && !hasWinner) {
        messageToDisplay = "Draw";
    }

    return (<div className="pannel-info">
        {!messageToDisplay && (<h1>{hasWinner ? `Winner: ${hasWinner}` : `Next Player: ${iconGame}`}</h1>)}
        <h1>
            {messageToDisplay}
        </h1>
    </div>);
}

export default PannelInfo;