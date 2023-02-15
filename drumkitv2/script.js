const tracks = [[], [], [], []];
let recording = false;
let startTime;

function playSound(e, track) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  if (recording) {
    const currentTime = Date.now() - startTime;a
    tracks[track].push({ time: currentTime, key: e.keyCode });
  }
}
function play() {
    tracks.forEach((track, i) => {
      let time = 0;
      track.forEach(event => {
        setTimeout(() => {
          playSound({ keyCode: event.key }, i);
        }, event.time - time);
        time = event.time;
      });
    });
  }

window.addEventListener('keydown', e => playSound(e, 0));
window.addEventListener('keydown', e => playSound(e, 1));
window.addEventListener('keydown', e => playSound(e, 2));
window.addEventListener('keydown', e => playSound(e, 3));