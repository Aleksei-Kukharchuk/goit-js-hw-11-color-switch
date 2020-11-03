const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

function randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

startButton.addEventListener('click', () => { 
    bodyColorChangerIntervsl = setInterval(() => {
      body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
      startButton.disabled = 'true';
  }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(bodyColorChangerIntervsl);
    startButton.removeAttribute('disabled');
});