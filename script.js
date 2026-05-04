const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  hero.style.transform = `scale(${1 + scroll * 0.0005})`;
  hero.style.opacity = 1 - scroll * 0.0015;
});
