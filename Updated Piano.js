import React, { useEffect, useState } from 'react';
import * as Tone from 'tone';
import Tile from './Tile';
import { analyzeAudio } from '../utils/audioAnalysis';

function Piano({ audioSrc }) {
  const [tiles, setTiles] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);

  const startGame = async () => {
    await Tone.start();
    setIsPlaying(true);

    const generatedTiles = await analyzeAudio(audioSrc);
    setTiles(generatedTiles);

    const player = new Tone.Player(audioSrc).toDestination();
    player.autostart = true;
  };

  const handleHit = (note) => {
    setScore(prev => prev + 10); // 10 points per correct hit
    console.log(`Hit: ${note}, Score: ${score + 10}`);
  };

  return (
    <div className="piano-container">
      <button onClick={startGame} disabled={isPlaying}>
        {isPlaying ? 'Playing...' : 'Play Audio'}
      </button>

      <h3>Score: {score}</h3>

      <div className="tiles">
        {tiles.map((tile, idx) => (
          <Tile key={idx} note={tile.key} hitCallback={handleHit} />
        ))}
      </div>

      <div className="keyboard">
        <p>Use keys: A=C4, S=D4, D=E4, F=F4, G=G4</p>
      </div>
    </div>
  );
}

export default Piano;
