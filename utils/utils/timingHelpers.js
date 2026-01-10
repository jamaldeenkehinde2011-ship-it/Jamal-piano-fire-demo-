// Return true if key press is within acceptable timing window (ms)
export function isHitCorrect(tileTime, keyPressTime, window = 200) {
  return Math.abs(tileTime - keyPressTime) <= window;
}

// Calculate score based on timing accuracy
export function calculateScore(tileTime, keyPressTime) {
  const diff = Math.abs(tileTime - keyPressTime);
  if(diff < 50) return 20;        // perfect hit
  else if(diff < 100) return 15;  // great
  else if(diff < 150) return 10;  // good
  else if(diff < 200) return 5;   // ok
  else return 0;                   // miss
}
