export const analyzeAudio = async (audioUrl) => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const response = await fetch(audioUrl);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

  // Simple energy-based beat detection
  const channelData = audioBuffer.getChannelData(0);
  const sampleRate = audioBuffer.sampleRate;
  const threshold = 0.25; // detect strong beats
  let tiles = [];

  for(let i = 0; i < channelData.length; i += 1024) {
    if(Math.abs(channelData[i]) > threshold) {
      // Map beat to nearest piano key (demo)
      const keys = ['C4','D4','E4','F4','G4'];
      const note = keys[Math.floor(Math.random() * keys.length)];
      tiles.push({ time: i / sampleRate * 1000, key: note });
    }
  }

  return tiles;
};
