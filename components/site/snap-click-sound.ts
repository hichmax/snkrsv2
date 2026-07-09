"use client";

type WindowWithWebAudio = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext;
  };

let audioContext: AudioContext | null = null;

function getAudioContext() {
  if (typeof window === "undefined") return null;

  const AudioContextConstructor =
    window.AudioContext || (window as WindowWithWebAudio).webkitAudioContext;

  if (!AudioContextConstructor) return null;

  if (!audioContext || audioContext.state === "closed") {
    audioContext = new AudioContextConstructor();
  }

  return audioContext;
}

export async function playSnapCopyClick() {
  try {
    const context = getAudioContext();
    if (!context) return;

    if (context.state === "suspended") {
      await context.resume();
    }

    const now = context.currentTime;
    const osc = context.createOscillator();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(1750, now);
    osc.frequency.exponentialRampToValueAtTime(920, now + 0.055);

    filter.type = "highpass";
    filter.frequency.setValueAtTime(520, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.095, now + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(context.destination);

    osc.start(now);
    osc.stop(now + 0.08);

    osc.onended = () => {
      osc.disconnect();
      filter.disconnect();
      gain.disconnect();
    };
  } catch {
    // Audio feedback is optional; copy behavior should never fail because of sound.
  }
}
