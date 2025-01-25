import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const playerNameElement = isEditing
        ? <input type="text" value={playerName} onChange={handlePlayerNameChange} required />
        : <span className="player-name">{playerName}</span>;

    function handleSaveOrEditClick() {
        setIsEditing(editing => !editing); //always use arrow functions to update the state value based on previous value
        if(isEditing){
            onChangeName(symbol, playerName)
        }
    }

    function handlePlayerNameChange(event){
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerNameElement}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleSaveOrEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}