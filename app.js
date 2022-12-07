'use strict';

window.addEventListener('load', function () {
  preloader.classList.add('hide-preloader');
});

const btnToggle = document.querySelector('.btn-toggle');

const btnSwitch = document.querySelector('.btn-switch');
const btnOn = document.querySelector('.btn-on');
const btnOff = document.querySelector('.btn-off');
const video = document.querySelector('.video');

const btnActive = document.querySelector('btn-active');

const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log(e.currentTarget.classList);
    btnSwitch.classList.toggle('btn-active');
    if (btnSwitch.classList.contains('btn-active')) {
      video.pause();
    } else {
      video.play();
    }
  });
});

const preloader = document.querySelector('.preloader');
