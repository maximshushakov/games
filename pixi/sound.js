const ctx = new AudioContext();

const noise = () => {
  const bufferSize = ctx.sampleRate;
  const buffer = new AudioBuffer({
    length: bufferSize,
    sampleRate: 44100 // ctx.sampleRate, // audioContext.sampleRate, [3000, 768000]
  });
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1; // (1 - mix) + Math.random() * mix;
  }
  const node = new AudioBufferSourceNode(ctx, { buffer });
  node.loop = true;

  const gain = ctx.createGain();
  node.gain = gain.gain;
  node.connect(gain).connect(ctx.destination);
  return node;
}

const osc = (type = 'sine') => {
  if (type === "noise") {
    return noise();
  }
  const node = ctx.createOscillator();
  // osc.type = "square"; // for explosions
  // osc.type = "triange"; // for jumps, alarms
  // osc.type = "sawtooth"; // more harmonics
  node.type = type;
  const gain = ctx.createGain();
  node.gain = gain.gain;
  node.connect(gain).connect(ctx.destination);
  
  return node;
}

const envelope = (param, a, d, s, r) => {
  console.log(param)
  param.setValueAtTime(0.2, ctx.currentTime);
  param.linearRampToValueAtTime(
    0.001,
    ctx.currentTime + .3,
  );
  return param;
}


export const sound = {
  play: () => {
    const o = osc('noise');
    // o.frequency.value = 80;
    // envelope(o.gain);
    o.start(ctx.currentTime)
    o.stop(ctx.currentTime + 0.5)

    o.playbackRate.setValueAtTime(0.05, ctx.currentTime)
    o.gain.setValueAtTime(0.1, ctx.currentTime);
    o.gain.linearRampToValueAtTime(0.8, ctx.currentTime + .1);
    o.gain.linearRampToValueAtTime(0.2, ctx.currentTime + .2);
    o.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2)
    o.playbackRate.exponentialRampToValueAtTime(2, ctx.currentTime + 2)
  }
}