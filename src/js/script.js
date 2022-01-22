import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.introduction-text', {
  scrollTrigger: '.introduction-text',
  color: 'var(--colorBlack)',
  duration: '.5'
});

/*

const horizontal = document.querySelector('.paul_renner');

gsap.to(horizontal, {
  xPercent: - 100,
  x: () => innerWidth,
  ease: 'none',
  scrollTrigger: {
    trigger: '.paul_renner',
    start: 'top top',
    end: () => innerWidth * 9,
    scrub: true,
    pin: true,
    markers: true,
    invalidateOnRefresh: true,
    anticipatePin: 1,
  }
});*/

const horizontalSections = gsap.utils.toArray('.paul_renner');

horizontalSections.forEach(function (sec) {

  const thisPinWrap = sec.querySelector('.pin-wrap');
  const thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');

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
      //anticipatePin: 1,
      scrub: true,
      //markers: true,
    }
  });

});


export const init = () => {

  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01;
    if (window.innerWidth >= 1024) {
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  });
};
