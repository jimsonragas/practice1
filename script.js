document.addEventListener("mousemove", (e) => {
  const profile = document.querySelector(".profile img");

  let x = (window.innerWidth / 2 - e.pageX) / 40;
  let y = (window.innerHeight / 2 - e.pageY) / 40;

  profile.style.transform = `translate(-50%, 0) rotateY(${x}deg) rotateX(${y}deg)`;
});
