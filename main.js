function changeView(type) {
  const path = window.location.pathname;
  if (type === "home") {
    if (path === '/carrusel/index.html') {
      document.body.style.backgroundColor = "red";
      return false;
    } else {
      window.location.href = "index.html";
    }
  } else if (type === "register") {
    if (path === '/carrusel/register.html') {
      document.body.style.backgroundColor = "green";
      return false;
    } else {
      window.location.href = "register.html";
    }
  } else {
    window.location.href = "routes.html";

  }
}

document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel, {
      duration: 100,
      dist:-80,
      shift: 5,
      padding: 5,
      numVisible:3,
      indicators: true,
      nowRap: false,

  });
});
