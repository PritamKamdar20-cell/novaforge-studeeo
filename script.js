const animatedItems = document.querySelectorAll('.fade, .slide');

function animateOnScroll() {
  animatedItems.forEach(item => {
    const position = item.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();
