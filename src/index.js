/* eslint-disable no-undef */
import './styles/style.css';
import animateName from './gsap/animateName';
import animateCursor from './gsap/animateCursor';
import animateNavElements from './gsap/animateNavBar';

document.addEventListener('DOMContentLoaded', () => {
  animateName();
  animateCursor();
  animateNavElements();
});
