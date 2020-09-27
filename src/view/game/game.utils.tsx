// Quick method which check if we have a winner
export default function haveAWinner(squares) {

    const possibilites = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // we check for each possibilites
    for (let i = 0; i < possibilites.length; i++) {
        const [pos1, pos2, pos3] = possibilites[i];
        if (squares[pos1]
            && squares[pos1] === squares[pos2]
            && squares[pos1] === squares[pos3]) {
            return squares[pos1];
        }
    }
    return null;
}

