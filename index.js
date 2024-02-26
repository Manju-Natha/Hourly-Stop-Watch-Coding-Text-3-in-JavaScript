let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");

let startcount;
let mincount = 0;
let seccount = 0;

startBtn.onclick = function () {
  startcount = setInterval(function () {
    seccount += 1;
    if (seccount < 10) {
      seconds.textContent = "0" + seccount;
    } else {
      seconds.textContent = seccount;
    }

    if (seccount === 60) {
      seccount = 0;
      mincount += 1;
      minutes.textContent = mincount;
    }
  }, 1000);
};

stopBtn.onclick = function () {
  clearInterval(startcount);
};
