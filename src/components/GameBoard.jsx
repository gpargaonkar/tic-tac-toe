import { useState } from "react";
import { WINNING_COMBINATIONS } from "../winning-combinations";


export default function GameBoard({ onSelectSquare, gameBoard }) {

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     //while modifying states with object and arrays - never update the original object or array. use spread operator to copy array or object to a new variable and update the copy and return the copy
    //     setGameBoard((prevGameBoard) => {
    //         const updateGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
    //         updateGameBoard[rowIndex][colIndex] = activePlayer;
    //         return updateGameBoard;
    //     });

    //     onSelectSquare(); // lifting the state up
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}
                                    disabled={playerSymbol !== null}>{playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )

}