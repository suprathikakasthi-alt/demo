const time = document.getElementById("time");
const dateEl = document.getElementById("date");
const toggleBtn = document.getElementById("toggleBtn");
let is24HourFormat = true;

function clock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  let period = "";

  if (!is24HourFormat) {
    period = hours >= 12 ? " PM" : " AM";
    hours = hours % 12 || 12;
  }

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  time.innerText = `${hours}:${minutes}:${seconds}${period}`;
  dateEl.innerText = `${day}-${month}-${year}`;
}

function updateToggleButton() {
  if (!toggleBtn) return;
  toggleBtn.innerText = is24HourFormat
    ? "Switch to 12-hour format"
    : "Switch to 24-hour format";
}

function toggleHourFormat() {
  is24HourFormat = !is24HourFormat;
  updateToggleButton();
  clock();
}

updateToggleButton();
clock();
setInterval(clock, 1000);

if (toggleBtn) {
  toggleBtn.addEventListener("click", toggleHourFormat);
}