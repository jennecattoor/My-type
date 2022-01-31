import {shuffle} from './functions/lib.js';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animateBottom = gsap.utils.toArray('.animateBottom');
animateBottom.forEach(animation => {
  gsap.from(animation, {
    scrollTrigger: animation,
    duration: 1,
    yPercent: 100,
    ease: 'power4',
    stagger: 0.1
  });
});

const animateLines = gsap.utils.toArray('.animateLines');
animateLines.forEach(line => {
  gsap.from(line, {
    scrollTrigger: line,
    duration: 2,
    width: 0,
    ease: 'power4',
    stagger: 0.1
  });
});

gsap.to('.rotating-shape-one', {
  scrollTrigger: {
    trigger: '.introduction',
    scrub: 1,
    start: 'top top',
    end: '+=1000',
  },
  rotation: 360 * 1,
  duration: 1, ease: 'none',
});

gsap.to('.rotating-shape-two', {
  scrollTrigger: {
    trigger: '.introduction',
    scrub: 1,
    start: 'top top',
    end: '+=1000',
  },
  rotation: 360 * - 1,
  duration: 1, ease: 'none',
});

gsap.to('.rotating-shape-three', {
  scrollTrigger: {
    trigger: '.introduction',
    scrub: 1,
    start: 'top top',
    end: '+=1000',
  },
  rotation: 360 * 1.5,
  duration: 1, ease: 'none',
});


const panels = gsap.utils.toArray('.character_item-image');
ScrollTrigger.matchMedia({
  '(min-width: 768px)': function() {

    panels.forEach(item => {
      const contentElements = item.querySelectorAll('.character-image');
      contentElements.forEach(el => {
        gsap.set(el, {
          opacity: 0
        });
      });

      ScrollTrigger.create({
        trigger: item,
        scrub: true,
        start: '10% 40%',
        pin: true,
        end: 'bottom 60%',
        onEnter: () => {
          gsap.fromTo(
            contentElements,
            {
              opacity: 0
            },
            {
              opacity: 1,
              stagger: 0.05
            }
          );
        },
        onLeave: () => {
          gsap.fromTo(
            contentElements,
            {
              opacity: 1
            },
            {
              opacity: 0,
              stagger: 0.05
            }
          );
        },
        onLeaveBack: () => {

          gsap.fromTo(
            contentElements,
            {
              opacity: 1
            },
            {
              opacity: 0,
              stagger: 0.05
            }
          );
        },
        onEnterBack: () => {
          gsap.fromTo(
            contentElements,
            {
              opacity: 0
            },
            {
              opacity: 1,
              stagger: 0.05
            }
          );
        }
      });
    });
  },
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
};
