// PARALLAX EFFECT
document.addEventListener("mousemove", (e) => {
  const profile = document.querySelector(".profile");

  let x = (window.innerWidth / 2 - e.pageX) / 40;
  let y = (window.innerHeight / 2 - e.pageY) / 40;

  profile.style.transform = `
    translateX(-50%) 
    rotateY(${x}deg) 
    rotateX(${y}deg)
  `;
});


// FADE-IN ON LOAD
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-in").forEach((el, i) => {
    el.style.animationDelay = `${i * 0.2}s`;
  });
});
