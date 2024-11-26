let timer;
let seconds = 0;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

function formatTime(sec) {
  const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
  const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
  const secs = String(sec % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

startBtn.addEventListener('click', () => {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      display.textContent = formatTime(seconds);
    }, 1000);
  }
});

stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
});

resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  display.textContent = '00:00:00';
});
