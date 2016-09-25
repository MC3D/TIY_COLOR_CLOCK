(function() {
  'use strict';

  ///// HTML ELEMENTS /////////////////////////////////////////////////////////////
  var clock = document.querySelector('.color-clock').children[1].children[0];
  var hours = clock.children[0];
  var minutes = clock.children[2];
  var seconds = clock.children[4];

  ////// NON HTML ELEMENTS ////////////////////////////////////////////////////////
  var currentTime, currentHour, currentMinute, currentSecond;

  var progressBar = document.querySelector('.color-clock').children[1];

  var isHovering = false;

  var i = 0 , percentage;

  function start() {
    currentTime = new Date();

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

    if(percentage === 0) {
      progressBar.style.backgroundImage = 'linear-gradient(' + (360-90) + 'deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #fff 50%, transparent 50%)';
    } else if(percentage < 50) {
      progressBar.style.backgroundImage = 'linear-gradient(' + (90+i) + 'deg, transparent 50%, #fff 50%),linear-gradient(90deg, #fff 50%, transparent 50%)';
    } else {
      progressBar.style.backgroundImage = 'linear-gradient(' + (i-90) + 'deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #fff 50%, transparent 50%)';
    }
  }

  function changeBackgroundColor() {
    clock.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  clock.addEventListener('mouseover', function() {
    isHovering = true;
  });

  clock.addEventListener('mouseout', function() {
    isHovering = false;
  });

  clock.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);

  window.setInterval(changeBackgroundColor, 10000);
  window.setInterval(start, 100);

}());
