/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import './styles/style.css';
import animateName from './gsap/animateName';
import animateCursor from './gsap/animateCursor';
import animateNavElements from './gsap/animateNavBar';
import animateProjectLink from './gsap/animateProjectLink';

document.addEventListener('DOMContentLoaded', () => {
  animateName();
  animateCursor();
  animateNavElements();
  animateProjectLink();
});
