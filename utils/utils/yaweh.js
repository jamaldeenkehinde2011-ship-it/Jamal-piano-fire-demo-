import { isHitCorrect, calculateScore } from '../utils/timingHelpers';
import { freqToNote } from '../utils/noteMapping';

const handleHit = (note, tileTime) => {
  const currentTime = performance.now() - gameStartTime;
  if(isHitCorrect(tileTime, currentTime)) {
    setScore(prev => prev + calculateScore(tileTime, currentTime));
    console.log(`Hit ${note}! Current score: ${score}`);
  } else {
    console.log(`Missed ${note}`);
  }
};
