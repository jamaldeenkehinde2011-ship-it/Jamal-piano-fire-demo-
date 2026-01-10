import React, { useState } from 'react';
import Piano from './Piano';

function GameUI() {
  const [audioFile, setAudioFile] = useState(null);

  const handleAudioUpload = (e) => {
    const file = e.target.files[0];
    if(file) setAudioFile(URL.createObjectURL(file));
  }

  return (
    <div className="game-ui">
      <input type="file" accept="audio/*" onChange={handleAudioUpload} />
      {audioFile && <Piano audioSrc={audioFile} />}
    </div>
  )
}

export default GameUI;
