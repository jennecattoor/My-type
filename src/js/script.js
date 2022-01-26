import {shuffle} from './functions/lib.js';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.introduction-text', {
  scrollTrigger: '.introduction-text',
  color: 'var(--colorBlack)',
  duration: 2
});


const panels = gsap.utils.toArray('.character_item-image');

ScrollTrigger.matchMedia({

  '(min-width: 768px)': function() {

    panels.forEach(item => {
      // Get the to be staggered elements
      const contentElements = item.querySelectorAll('.character-image');

      // Set initial state on the to be staggered elements
      contentElements.forEach(el => {
        gsap.set(el, {
          y: 0,
          opacity: 0
        });
      });

      ScrollTrigger.create({
        trigger: item,
        scrub: true,
        start: '50% 50%',
        pin: true,
        end: 'bottom 50%',
        snap: {snapTo: [0.5], duration: 1, delay: 0},
        onEnter: ({progress, direction, isActive}) => {
          console.log('onEnter', progress, direction, isActive);
          gsap.fromTo(
            contentElements,
            {
              y: 80,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              stagger: 0.05
            }
          );
        },
        onLeave: ({progress, direction, isActive}) => {
          console.log('onLeave', progress, direction, isActive);
          gsap.fromTo(
            contentElements,
            {
              y: 0,
              opacity: 1
            },
            {
              y: - 80,
              opacity: 0,
              stagger: 0.05
            }
          );
        },
        onLeaveBack: ({progress, direction, isActive}) => {
          console.log('onLeaveBack', progress, direction, isActive);

          gsap.fromTo(
            contentElements,
            {
              y: 0,
              opacity: 1
            },
            {
              y: - 80,
              opacity: 0,
              stagger: 0.05
            }
          );
        },
        onEnterBack: ({progress, direction, isActive}) => {
          console.log('onEnterBack', progress, direction, isActive);
          gsap.fromTo(
            contentElements,
            {
              y: - 80,
              opacity: 0
            },
            {
              y: 0,
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
