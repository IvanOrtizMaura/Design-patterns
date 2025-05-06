interface AudioPlayer {
  playMp3(fileName: string): void;
}

class WavPlayer {
  playWav(file: string): void {
    console.log(`Playing WAV file: ${file}`);
  }
}

class WavAdapter implements AudioPlayer {
  private readonly wavPlayer: WavPlayer;

  constructor(wavPlayer: WavPlayer) {
    this.wavPlayer = wavPlayer;
  }

  playMp3(fileName: string): void {
    this.wavPlayer.playWav(fileName);
  }
}

const wavPlayer = new WavPlayer();
const adapter: AudioPlayer = new WavAdapter(wavPlayer);

adapter.playMp3("cancion.mp3");
