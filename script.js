// Subtle scroll effects: add 'bg-shift' to body and 'scrolled' to .navbar
(function() {
  const body = document.body;
  const navbar = document.querySelector('.navbar');
  if (!navbar || !body) return;

  const threshold = 40; // pixels scrolled before effect
  let lastKnownScrollY = 0;
  let ticking = false;

  function onScroll() {
    lastKnownScrollY = window.scrollY || window.pageYOffset;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = lastKnownScrollY > threshold;
        if (scrolled) {
          body.classList.add('bg-shift');
          navbar.classList.add('scrolled');
        } else {
          body.classList.remove('bg-shift');
          navbar.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();
