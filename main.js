(function() {
  'use strict';

  ///// SOLUTION ONE ////////////////////////////////////////////////////////////////

  // var hours = document.querySelector('.hours');
  // var minutes = document.querySelector('.minutes');
  // var seconds = document.querySelector('.seconds');
  //
  // var clock = document.querySelector('.clock');
  // var timerBar = document.querySelector('.timer-bar');
  //
  // var startTime; var startHex;
  //
  // var percentage;
  //
  // var currentTime;
  //
  // function displayTime() {
  //   currentTime = new Date();
  //   hours.textContent = ('0' + currentTime.getHours()).slice(-2);
  //   minutes.textContent = ('0' + currentTime.getMinutes()).slice(-2);
  //   seconds.textContent = ('0' + currentTime.getSeconds()).slice(-2);
  // }
  //
  // function displayHex() {
  //   currentTime = new Date();
  //   hours.textContent = ('0' + currentTime.getHours().toString(16)).slice(-2);
  //   minutes.textContent = ('0' + currentTime.getMinutes().toString(16)).slice(-2);
  //   seconds.textContent = ('0' + currentTime.getSeconds().toString(16)).slice(-2);
  // }
  //
  // function start() {
  //   startTime = window.setInterval(displayTime, 1000);
  //   // window.setInterval(updateProgressBar, 1000);
  // }
  //
  // clock.addEventListener('mouseover', function(){
  //   window.clearInterval(startTime);
  //   startHex = window.setInterval(displayHex, 1000);
  // });
  //
  // clock.addEventListener('mouseout', function(){
  //   window.clearInterval(startHex);
  //   start();
  // });
  //
  // start();


  ///// SOLUTION TWO //////////////////////////////////////////////////////////////

  var clock = document.querySelector('.color-clock').children[1].children[0];
  var hours = clock.children[0];
  var minutes = clock.children[2];
  var seconds = clock.children[4];

  var progressBar = document.querySelector('.color-clock').children[1]

  var isHovering = false;

  var i = 0 , percentage;

  function start() {
    var currentTime = new Date();
    if (isHovering === false) {
      hours.textContent = ('0' + currentTime.getHours()).slice(-2);
      minutes.textContent = ('0' + currentTime.getMinutes()).slice(-2);
      seconds.textContent = ('0' + currentTime.getSeconds()).slice(-2);
    } else {
      hours.textContent = ('0' + currentTime.getHours().toString(16)).slice(-2);
      minutes.textContent = ('0' + currentTime.getMinutes().toString(16)).slice(-2);
      seconds.textContent = ('0' + currentTime.getSeconds().toString(16)).slice(-2);
    }

    percentage = (currentTime.getSeconds() / 60) * 100;
    i = percentage * 3.6;

    if(percentage < 50) {
      progressBar.style.backgroundImage = 'linear-gradient(' + (90+i) + 'deg, transparent 50%, #A2ECFB 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)';
    } else {
      progressBar.style.backgroundImage = 'linear-gradient(' + (i-90) + 'deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)';
    }

    console.log(percentage);
  }

  clock.addEventListener('mouseover', function() {
    isHovering = true;
  });

  clock.addEventListener('mouseout', function() {
    isHovering = false;
  });

  window.setInterval(start, 100);

}());
