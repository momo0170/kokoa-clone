const currnentClock = document.querySelector(
  '.status-bar__column:nth-child(2) span'
);
console.dir(currnentClock);

function Clock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  currnentClock.innerText = `${hours}:${minutes}`;
}
Clock();
setInterval(Clock, 1000);
