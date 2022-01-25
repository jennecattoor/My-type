import {shuffle} from './functions/lib.js';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.introduction-text', {
  scrollTrigger: '.introduction-text',
  color: 'var(--colorBlack)',
  duration: 2
});

const horizontalSections = gsap.utils.toArray('.paul_renner');

horizontalSections.forEach(function (sec) {

  const thisPinWrap = sec.querySelector('.paul_renner-pin');
  const thisAnimWrap = thisPinWrap.querySelector('.paul_renner-wrap');

  const getToValue = () => - (thisAnimWrap.scrollWidth - window.innerWidth);

  gsap.fromTo(thisAnimWrap, {
    x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()
  }, {
    x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0,
    ease: 'none',
    scrollTrigger: {
      trigger: sec,
      start: 'top top',
      end: () => `+=${ thisAnimWrap.scrollWidth - window.innerWidth}`,
      pin: thisPinWrap,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      scrub: true,
    }
  });
});

const shapes = Array.from(document.querySelectorAll('.shape_wrapper'));
const buttonHeart = document.querySelector('.background-heart');
const heartArray = [3, 11, 13, 19, 21, 23, 28, 30];
const shapesArray = shuffle(shapes.map((el, index) => index));
let i = 0;

const randomShapes = () => {
  i ++;
  if (i >= shapes.length) {
    i = 0;
  }
  const randomShape = shapes[shapesArray[i]];
  console.log(i, shapesArray[i]);



  const removeClass = () => {
    randomShape.classList.add('hidden');
  };

  randomShape.classList.remove('hidden');
  setTimeout(removeClass, 5000);


};

const showHeart = () => {

  const removeHeart = () => {
    heartArray.forEach(shape => shapes[shape].classList.add('hidden'));
  };

  shapes.forEach(shape => shape.classList.add('hidden'));
  heartArray.forEach(shape => shapes[shape].classList.remove('hidden'));
  setTimeout(removeHeart, 2500);

};

export const init = () => {

  setInterval(randomShapes, 2500);
  buttonHeart.addEventListener('click', showHeart);

  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01;
    if (window.innerWidth >= 1024) {
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  });
};
