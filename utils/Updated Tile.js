import React, { useEffect, useState } from 'react';
import './Tile.css';

function Tile({ note, hitCallback }) {
  const [position, setPosition] = useState(0); // 0 = top, increases downward
  const speed = 2; // pixels per frame

  useEffect(() => {
    let animationFrame;

    const moveTile = () => {
      setPosition(prev => {
        if (prev < 400) return prev + speed; // stop at bottom
        else return prev;
      });
      animationFrame = requestAnimationFrame(moveTile);
    };

    moveTile();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Detect key press
  useEffect(() => {
    const handleKey = (e) => {
      const keyMap = {
        'a': 'C4',
        's': 'D4',
        'd': 'E4',
        'f': 'F4',
        'g': 'G4'
      };
      if (keyMap[e.key] === note) {
        hitCallback(note);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [note, hitCallback]);

  return (
    <div className="tile" style={{ top: `${position}px` }}>
      {note}
    </div>
  )
}

export default Tile;
