function refresh() {
  var dt = new Date();
  document.getElementById("hour").innerHTML = dt.getHours();
  document.getElementById("mins").innerHTML = dt.getMinutes();
  document.getElementById("secs").innerHTML = dt.getSeconds();
  document.getElementById("date").innerHTML = dt.toDateString();
}
setInterval(refresh, 1000);
//switch between light and dark mode
let lightBtn = document.querySelector(".fa-sun");
let darkBtn = document.querySelector(".fa-moon");
let darkBg = document.querySelectorAll(".light-mode-bg");
let darkBg2 = document.querySelectorAll(".light-mode-bg2");
let darkTxt = document.querySelectorAll(".light-mode-text");
let table = document.querySelectorAll(".table");
let progressBar = document.querySelectorAll(".progress-bar");
let lightBtn2 = document.querySelector(".s-1");
let darkBtn2 = document.querySelector(".s-2");
function toggleLight() {
  darkBtn2.classList.toggle("d-none");
  lightBtn2.classList.toggle("d-none");
  lightBtn.classList.toggle("d-none");
  darkBtn.classList.toggle("d-none");
  darkBg.forEach((element) => {
    element.classList.toggle("light-mode-bg");
    element.classList.toggle("dark-mode-bg");
  });
  darkBg2.forEach((element) => {
    element.classList.toggle("light-mode-bg");
    element.classList.toggle("dark-mode-bg2");
  });
  table.forEach((element) => {
    element.classList.toggle("table-dark");
  });
  progressBar.forEach((element) => {
    element.classList.toggle("bg-success");
    element.classList.toggle("bg-dark");
  });
  darkTxt.forEach((element) => {
    element.classList.toggle("light-mode-text");
    element.classList.toggle("dark-mode-text");
  });
}
function toggleDark() {
  darkBtn2.classList.toggle("d-none");
  lightBtn2.classList.toggle("d-none");
  darkBtn.classList.toggle("d-none");
  lightBtn.classList.toggle("d-none");
  darkBg.forEach((element) => {
    element.classList.toggle("light-mode-bg");
    element.classList.toggle("dark-mode-bg");
  });
  darkBg2.forEach((element) => {
    element.classList.toggle("light-mode-bg");
    element.classList.toggle("dark-mode-bg2");
  });
  table.forEach((element) => {
    element.classList.toggle("table-dark");
  });
  progressBar.forEach((element) => {
    element.classList.toggle("bg-success");
    element.classList.toggle("bg-dark");
  });
  darkTxt.forEach((element) => {
    element.classList.toggle("light-mode-text");
    element.classList.toggle("dark-mode-text");
  });
}
lightBtn.addEventListener("click", toggleLight);
darkBtn.addEventListener("click", toggleDark);
lightBtn2.addEventListener("click", toggleLight);
darkBtn2.addEventListener("click", toggleDark);
/*<i class="fa-light fa-mountains"></i>*/
