// launch-timer
var countDownStop = new Date("Jul 25, 2024 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownStop - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if(distance < 0){
    clearInterval(x);
  document.getElementById("days").innerHTML = "00";
  document.getElementById("hours").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  hamburger.addEventListener('click', function() {
    navbar.classList.toggle('active');
  });
});
