// Hero slideshow: changes the image every 10 seconds + indicators (dashes) + title
(function () {
  const slides = document.querySelectorAll('.routes-hero .hero-slide');
  const dots = document.querySelectorAll('.routes-hero .hero-dot');
  const title = document.querySelector('.routes-hero-content h1');
  if (slides.length < 2) return;

  let index = 0;

  function show(i) {
    index = i;
    slides.forEach(function (s, n) { s.classList.toggle('is-active', n === i); });
    dots.forEach(function (d, n) { d.classList.toggle('is-active', n === i); });
    if (title && slides[i].dataset.title) {
      title.classList.add('is-changing');           // fade out + shift down
      setTimeout(function () {
        title.textContent = slides[i].dataset.title; // swap the text
        title.classList.remove('is-changing');       // fade back in
      }, 400);
    }
  }

  let timer = setInterval(function () { show((index + 1) % slides.length); }, 10000);

  dots.forEach(function (d, i) {
    d.addEventListener('click', function () {
      show(i);
      clearInterval(timer);
      timer = setInterval(function () { show((index + 1) % slides.length); }, 10000);
    });
  });
})();
