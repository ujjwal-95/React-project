import { useState } from "react";

export default function Player({initialName,symbol,isActive,onChageName}){
  const [playerName,setplayerName]=useState(initialName);
  const [isEditing,setIsEditing]=useState(false);

  function handleEditClick(){
    setIsEditing((editing)=>!editing);
    if(isEditing){
    onChageName(symbol,playerName);
    }
  }

  function handleChange(event){
     setplayerName(event.target.value);
  }
  
  let editableplayerName= <span className="player-name">{playerName}</span>;
  let btnCaption='Edit';

  if(isEditing){
    editableplayerName=<input type="text" required value={playerName} onChange={handleChange}/>;
    btnCaption='Save';
  }

    return(<li className={isActive?'active':undefined}>
    <span className="player">
    {editableplayerName}
    <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
    );

}