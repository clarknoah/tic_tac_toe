import React from 'react';
import "./Tile.css";

// Function based React Component
const Tile = (props) => {

  // Default Class to apply to Component
  let classList = `Tile`;


  return(
    <div className={classList} onClick={()=>{props.onClick(props.number)}}>
      {props.display}
    </div>
  );
}

export default Tile;
