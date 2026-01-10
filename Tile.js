import React from 'react';
import './Tile.css';

function Tile({ note }) {
  return (
    <div className="tile">
      {note}
    </div>
  )
}

export default Tile;
