// src/services/pcmPlayer.ts

export class PCMPlayer {
  private audioCtx: AudioContext | null = null;
  private currentSource: AudioBufferSourceNode | null = null;

  private sampleRate: number;
  constructor(sampleRate: number = 24000) {
    this.sampleRate = sampleRate;
  }

  private init() {
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  /**
   * Play PCM s16le audio data from base64 string
   */
  async playBase64(base64Data: string): Promise<void> {
    this.init();
    if (!this.audioCtx) return;

    this.stop();

    // Decode base64 to binary
    const binary = atob(base64Data);
    const length = binary.length;
    const bytes = new Uint8Array(length);
    for (let i = 0; i < length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }

    // Convert Uint8Array to Int16Array (s16le)
    const int16 = new Int16Array(bytes.buffer);
    
    // Create AudioBuffer
    const audioBuffer = this.audioCtx.createBuffer(1, int16.length, this.sampleRate);
    const channelData = audioBuffer.getChannelData(0);

    // Normalize Int16 to Float32 [-1, 1]
    for (let i = 0; i < int16.length; i++) {
      channelData[i] = int16[i] / 32768.0;
    }

    // Play
    this.currentSource = this.audioCtx.createBufferSource();
    this.currentSource.buffer = audioBuffer;
    this.currentSource.connect(this.audioCtx.destination);
    
    return new Promise((resolve) => {
      if (!this.currentSource) return resolve();
      this.currentSource.onended = () => {
        this.currentSource = null;
        resolve();
      };
      this.currentSource.start();
    });
  }

  stop() {
    if (this.currentSource) {
      this.currentSource.stop();
      this.currentSource = null;
    }
  }

  async resume() {
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      await this.audioCtx.resume();
    }
  }
}

export const pcmPlayer = new PCMPlayer(24000);
