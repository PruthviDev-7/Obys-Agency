function loding() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    opacity: 0,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var count = 0;
      var int = setInterval(() => {
        if (count < 100) {
          count++;
          h5timer.innerHTML = count;
        } else {
          clearInterval(int);
        }
      }, 35);
    },
  });
  tl.to(".line h2", {
    animationName: "anme",
    opacity: 1,
  });
  tl.to("#loder", {
    opacity: 0,
    duration: 0.2,
    delay: 4,
  });
  tl.from("#page1", {
    y: 1800,
    opacity: 0,
    delay: 0.2,
    duration: 0.9,
    ease: Power4,
  });
  tl.from("#nav",{
    opacity: 0,
  })
  tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
    y: 150,
    stagger: 0.2,
  })
  tl.to("#loder", {
    display: "none",
  });
}
function cursorAnime() {
  document.addEventListener("mousemove", (dets) => {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });

  Shery.makeMagnet("#nav-part2 h4");
}
loding();
// cursorAnime();