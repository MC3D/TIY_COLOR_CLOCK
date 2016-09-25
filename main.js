(function() {
  'use strict';

  ///// HTML ELEMENTS /////////////////////////////////////////////////////////////
  var clock = document.querySelector('.color-clock').children[1].children[0];
  var hours = clock.children[0];
  var minutes = clock.children[2];
  var seconds = clock.children[4];

  ////// NON HTML ELEMENTS ////////////////////////////////////////////////////////
  var colors = ['#b30000', '#cc0000', '#e60000', '#ff0000', '#ff1a1a', '#b37400', '#cc8400', '#e69500', '#ffa500', '#ffae1a', '#b3b300', '#cccc00', '#e6e600', '#ffff00', '#ffff1a', '#00b300', '#00cc00', '#00e600', '#00ff00', '#1aff1a', '#0000b3', '#0000cc', '#0000e6', '#0000ff', '#1a1aff', '#6317a9', '#701ac0', '#7d1dd6', '#8a2be2', '#9641e5', '#c495f0'];

  var currentTime;

  var progressBar = document.querySelector('.color-clock').children[1];

  var count;

  var isHovering = false;

  var i = 0,
    percentage;

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

    if (percentage === 0) {
      progressBar.style.backgroundImage = 'linear-gradient(' + (360 - 89) + 'deg, transparent 50%, #39B4CC 50%),linear-gradient(91deg, #fff 50%, transparent 50%)';
    } else if (percentage < 50) {
      progressBar.style.backgroundImage = 'linear-gradient(' + (90 + i) + 'deg, transparent 50%, #fff 50%),linear-gradient(90deg, #fff 50%, transparent 50%)';
    } else {
      progressBar.style.backgroundImage = 'linear-gradient(' + (i - 90) + 'deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #fff 50%, transparent 50%)';
    }

    count = currentTime.getSeconds();

    if (count > 30) {
      clock.style.backgroundColor = colors[(count/2)];
    } else {
      clock.style.backgroundColor = colors[count];
    }
  }

  clock.addEventListener('mouseover', function() {
    isHovering = true;
  });

  clock.addEventListener('mouseout', function() {
    isHovering = false;
  });

  // clock.style.backgroundColor = colors[0];

  // window.setInterval(changeBackgroundColor, 100);
  window.setInterval(start, 100);

}());
