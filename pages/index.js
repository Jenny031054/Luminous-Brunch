'use strict';

// const section1 = document.querySelector('#section--1');
// const header = document.querySelector('header');
// const nav = document.querySelector('.nav');
// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// };
// const obsOptions = {
//   root: null,
//   threshold: 0,
// };

// const headerObserver = new IntersectionObserver(stickyNav, obsOptions);
// headerObserver.observe(header);

const allSection = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.3,
});
allSection.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
