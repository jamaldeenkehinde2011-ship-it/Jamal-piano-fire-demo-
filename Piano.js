import React, { useEffect, useRef } from 'react';
import * as Tone from 'tone';
import Tile from './Tile';

function Piano({ audioSrc }) {
  const audioRef = useRef(null);
  const synthRef = useRef(new Tone.Synth().toDestination());
  const [tiles, setTiles] = React.useState([]);

  // Simple beat pattern generator (demo)
  useEffect(() => {
    const generateTiles = () => {
      let tempTiles = [];
      const bpm = 120; // placeholder BPM
      const interval = (60 / bpm) * 1000; 
      for(let i = 0; i < 50; i++) {
        tempTiles.push({ time: i * interval, key: ['C4','D4','E4','F4','G4'][Math.floor(Math.random()*5)] });
      }
      setTiles(tempTiles);
    }

    generateTiles();
  }, [audioSrc]);

  const playAudio = async () => {
    await Tone.start();
    const player = new Tone.Player(audioSrc).toDestination();
    player.autostart = true;
  }

  return (
    <div className="piano-container">
      <button onClick={playAudio}>Play Audio</button>
      <div className="tiles">
        {tiles.map((tile, idx) => (
          <Tile key={idx} note={tile.key} />
        ))}
      </div>
      <div className="keyboard">
        <p>🎹 Piano keys will be shown here (for demo, use keyboard mapping later)</p>
      </div>
    </div>
  )
}

export default Piano;
