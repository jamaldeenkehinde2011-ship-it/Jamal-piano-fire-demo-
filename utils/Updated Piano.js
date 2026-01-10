import React, { useEffect, useState } from 'react';
import * as Tone from 'tone';
import Tile from './Tile';
import { analyzeAudio } from '../utils/audioAnalysis';

function Piano({ audioSrc }) {
  const [tiles, setTiles] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const startGame = async () => {
    await Tone.start();
    setIsPlaying(true);

    // 1️⃣ Analyze audio to get tiles
    const generatedTiles = await analyzeAudio(audioSrc);
    setTiles(generatedTiles);

    // 2️⃣ Play audio
    const player = new Tone.Player(audioSrc).toDestination();
    player.autostart = true;
  };

  return (
    <div className="piano-container">
      <button onClick={startGame} disabled={isPlaying}>
        {isPlaying ? 'Playing...' : 'Play Audio'}
      </button>

      <div className="tiles">
        {tiles.map((tile, idx) => (
          <Tile key={idx} note={tile.key} />
        ))}
      </div>

      <div className="keyboard">
        <p>🎹 Piano keys here (keyboard mapping will come next)</p>
      </div>
    </div>
  );
}

export default Piano;
