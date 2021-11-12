'use strict';

const header = document.querySelector('.header');
const sectionHeroEl= document.querySelector('.section-hero')
const navHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        document.body.classList.add('sticky')
    } else {
        document.body.classList.remove('sticky');
    }
};
const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-80px`
});

headerObserver.observe(sectionHeroEl);
