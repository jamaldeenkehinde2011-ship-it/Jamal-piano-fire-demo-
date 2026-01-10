export const pianoKeys = [
  { note: 'C4', freq: 261.63 },
  { note: 'C#4', freq: 277.18 },
  { note: 'D4', freq: 293.66 },
  { note: 'D#4', freq: 311.13 },
  { note: 'E4', freq: 329.63 },
  { note: 'F4', freq: 349.23 },
  { note: 'F#4', freq: 369.99 },
  { note: 'G4', freq: 392.00 },
  { note: 'G#4', freq: 415.30 },
  { note: 'A4', freq: 440.00 },
  { note: 'A#4', freq: 466.16 },
  { note: 'B4', freq: 493.88 },
  { note: 'C5', freq: 523.25 },
];

// Map any frequency to nearest piano key
export function freqToNote(freq) {
  const nearest = pianoKeys.reduce((prev, curr) => {
    return Math.abs(curr.freq - freq) < Math.abs(prev.freq - freq) ? curr : prev;
  });
  return nearest.note;
}
