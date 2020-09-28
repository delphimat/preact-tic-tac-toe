import {h, Component} from "preact";

import Board from "../../component/Board/board.component";
import PannelInfo from "../../component/PannelInfo/pannel-info.component";
import haveAWinner from "./game.utils";

import "./game.styles.css";

interface IGame {
    nbrTurn: number,
    xIsPlaying: boolean,
    historyMoves: any[][],
    winnerIs: string | null,
}

export default class Game extends Component<any, any> {

    private hasWinner: Boolean;
    private iconGame: string;
    public state: IGame;

    private initialState = {
        nbrTurn: 0,
        xIsPlaying: true,
        historyMoves: [Array(9).fill(null)],
        winnerIs: null,
    };

    constructor() {
        super();

        this.state = this.initialState;

        this.iconGame = this.state.xIsPlaying ? "X" : "O";
        this.hasWinner = haveAWinner(this.state.historyMoves[this.state.nbrTurn]);

    }

    handleClick = (i) => {
        const historyPoint = this.state.historyMoves.slice(0, this.state.nbrTurn + 1);

        this.iconGame = this.state.xIsPlaying ? "X" : "O";
        const current = historyPoint[this.state.nbrTurn];
        const squares = [...current];

        if (this.hasWinner || squares[i]) return;

        squares[i] = this.iconGame;

        this.setState((prevState) => ({
            ...this.state,
            historyMoves: [...historyPoint, squares],
            nbrTurn: historyPoint.length,
            xIsPlaying: !prevState.xIsPlaying
        }));
    }

    handleClickRestart = () => {
        this.setState(this.initialState);
    }

    render() {
        this.hasWinner = haveAWinner(this.state.historyMoves[this.state.nbrTurn]);

        return (
            <div>
                <h1>Tic-tac-toe</h1>
                <Board onClick={this.handleClick} squares={this.state.historyMoves[this.state.nbrTurn]}/>
                <PannelInfo nbrTurn={this.state.nbrTurn} hasWinner={this.hasWinner} iconGame={this.iconGame} />
                {(this.state.nbrTurn == 9 || this.hasWinner) && (
                    <button onClick={this.handleClickRestart}>Do you want to play one more time ?</button>)}
            </div>
        );
    }
}

