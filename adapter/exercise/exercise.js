var WavPlayer = /** @class */ (function () {
    function WavPlayer() {
    }
    WavPlayer.prototype.playWav = function (file) {
        console.log("Playing WAV file: ".concat(file));
    };
    return WavPlayer;
}());
var WavAdapter = /** @class */ (function () {
    function WavAdapter(wavPlayer) {
        this.wavPlayer = wavPlayer;
    }
    WavAdapter.prototype.playMp3 = function (fileName) {
        this.wavPlayer.playWav(fileName);
    };
    return WavAdapter;
}());
var wavPlayer = new WavPlayer();
var adapter = new WavAdapter(wavPlayer);
adapter.playMp3("cancion.mp3");
