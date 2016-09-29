(function() {
  'use strict';

  ///// HTML ELEMENTS /////////////////////////////////////////////////////////////
  var clock = document.querySelector('.color-clock').children[1].children[0];
  var hoursElement = clock.children[0];
  var minutesElement = clock.children[2];
  var secondsElement = clock.children[4];

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

    var hour = ('0' + currentTime.getHours()).slice(-2);
    var min = ('0' + currentTime.getMinutes()).slice(-2);
    var sec = ('0' + currentTime.getSeconds()).slice(-2);

    var hourHex = ('0' + currentTime.getHours().toString(16)).slice(-2);
    var minHex = ('0' + currentTime.getMinutes().toString(16)).slice(-2);
    var secHex = ('0' + currentTime.getSeconds().toString(16)).slice(-2);

    if (isHovering === false) {
      hoursElement.textContent = hour;
      minutesElement.textContent = min;
      secondsElement.textContent = sec;
    } else {
      hoursElement.textContent = hourHex;
      minutesElement.textContent = minHex;
      secondsElement.textContent = secHex;
    }

    percentage = (currentTime.getSeconds() / 60) * 100;
    i = percentage * 3.6;

    if (percentage === 0) {
      progressBar.style.backgroundImage = 'linear-gradient(' + (360 - 89) + 'deg, transparent 50%, #a9a9a9 50%),linear-gradient(91deg, #D3D3D3 50%, transparent 50%)';
    } else if (percentage < 50) {
      progressBar.style.backgroundImage = 'linear-gradient(' + (90 + i) + 'deg, transparent 50%, #D3D3D3 50%),linear-gradient(90deg, #D3D3D3 50%, transparent 50%)';
    } else {
      progressBar.style.backgroundImage = 'linear-gradient(' + (i - 90) + 'deg, transparent 50%, #a9a9a9 50%),linear-gradient(90deg, #D3D3D3 50%, transparent 50%)';
    }

    count = currentTime.getSeconds();

    var base = colors[count] || colors[(count - 30)];
    var shade = colorLuminance(base, 0.5);

    clock.style.backgroundImage = 'radial-gradient(circle, ' + shade + ' 0%,'+ base +' 100%)';
  }

  function colorLuminance(hex, lum) {
    hex = String(hex).replace(/[^0-9a-f]/gi, ''); // pattern is enclosed between forward slashes; [^0-9a-f] matches anything that is not enclosed in the brackets (matches anything that is not 0-9 are a-f); g is a regular expression flag (global search - meaning it will match all occurrences); i is a regular expression flag (case-insensitive search); replace what you find with '' (basically, remove it)
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]; // will extend 3 digit hex code to 6 digits (e.g. #fff --> #ffffff)
    }
    lum = lum || 0;
    // convert to decimal
    var hexNew = '#',
      c;
    for (var i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16); // parseInt() function parses a string argument and returns an integer of the specified radix; radix is 16 (hexadecimal)
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      hexNew += ('00' + c).substr(c.length);
    }

    return hexNew;
  }

  clock.addEventListener('mouseover', function() {
    isHovering = true;
  });

  clock.addEventListener('mouseout', function() {
    isHovering = false;
  });

  // clock.style.backgroundColor = colors[0];

  // window.setInterval(changeBackgroundColor, 100);
  window.setInterval(start, 1000);

}());
