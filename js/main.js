ScrollReveal().reveal(".pro1", {
  duration: 2000,
  origin: "bottom",
  distance: "10rem",
  delay: 300
});

ScrollReveal().reveal(".pro2", {
  duration: 2000,
  origin: "bottom",
  distance: "10rem",
  delay: 300
});

ScrollReveal().reveal(".pro3", {
  duration: 2000,
  origin: "bottom",
  distance: "10rem",
  delay: 300
});

ScrollReveal().reveal(".pro4", {
  duration: 2000,
  origin: "bottom",
  distance: "10rem",
  delay: 300
});

ScrollReveal().reveal(".pro5", {
  duration: 2000,
  origin: "bottom",
  distance: "10rem",
  delay: 300
});

ScrollReveal().reveal(".pro6", {
  duration: 2000,
  origin: "bottom",
  distance: "10rem",
  delay: 300
});

ScrollReveal().reveal(".pro7", {
  duration: 2000,
  origin: "bottom",
  distance: "10rem",
  delay: 300
});

ScrollReveal().reveal(".pro8", {
  duration: 2000,
  origin: "bottom",
  distance: "10rem",
  delay: 300
});

ScrollReveal().reveal(".pro9", {
  duration: 2000,
  origin: "bottom",
  distance: "10rem",
  delay: 300
});

ScrollReveal().reveal(".pro10", {
  duration: 2000,
  origin: "bottom",
  distance: "10rem",
  delay: 300
});

ScrollReveal().reveal(".skillz1", {
  duration: 2000,
  origin: "bottom",
  distance: "5rem",
  delay: 300
});

ScrollReveal().reveal(".skillz2", {
  duration: 2000,
  origin: "bottom",
  distance: "5rem",
  delay: 350
});

ScrollReveal().reveal(".skillz3", {
  duration: 2000,
  origin: "bottom",
  distance: "5rem",
  delay: 400
});

ScrollReveal().reveal(".skillz4", {
  duration: 2000,
  origin: "bottom",
  distance: "5rem",
  delay: 450
});

ScrollReveal().reveal(".skillz5", {
  duration: 2000,
  origin: "bottom",
  distance: "5rem",
  delay: 500
});

ScrollReveal().reveal(".skillz6", {
  duration: 2000,
  origin: "bottom",
  distance: "5rem",
  delay: 550
});

ScrollReveal().reveal(".skillz7", {
  duration: 2000,
  origin: "bottom",
  distance: "5rem",
  delay: 600
});

ScrollReveal().reveal(".skillz8", {
  duration: 2000,
  origin: "bottom",
  distance: "5rem",
  delay: 650
});

ScrollReveal().reveal(".skillz9", {
  duration: 2000,
  origin: "bottom",
  distance: "5rem",
  delay: 700
});

ScrollReveal().reveal(".why1", {
  duration: 2000,
  origin: "bottom",
  distance: "10rem",
  delay: 300
});

ScrollReveal().reveal(".why2", {
  duration: 2000,
  origin: "bottom",
  distance: "10rem",
  delay: 350
});

ScrollReveal().reveal(".why3", {
  duration: 2000,
  origin: "bottom",
  distance: "10rem",
  delay: 400
});

ScrollReveal().reveal(".cli1", {
  duration: 2000,
  origin: "bottom",
  distance: "10rem",
  delay: 300
});

ScrollReveal().reveal(".cli2", {
  duration: 2000,
  origin: "bottom",
  distance: "10rem",
  delay: 300
});

ScrollReveal().reveal(".cli3", {
  duration: 2000,
  origin: "bottom",
  distance: "10rem",
  delay: 300
});

ScrollReveal().reveal(".cli4", {
  duration: 2000,
  origin: "bottom",
  distance: "10rem",
  delay: 300
});

ScrollReveal().reveal("#footer", {
  duration: 2000,
  origin: "bottom",
  distance: "20rem",
  delay: 500
});

function fadeOut() {
  TweenMax.to(".myBtn", 1, {
    y: -100,
    opacity: 0
  });

  TweenMax.to(".screen", 2, {
    y: -400,
    opacity: 0,
    ease: Power2.easeInOut,
    delay: 1.5
  });

  TweenMax.to(".screen-2", 2, {
    y: -400,
    opacity: 0,
    ease: Power2.easeInOut,
    delay: 2
  });

  TweenMax.from(".overlay", 2, {
    ease: Power2.easeInOut
  });

  TweenMax.to(".overlay", 2, {
    delay: 2.5,
    top: "-110%",
    ease: Expo.easeInOut
  });

  TweenMax.to(".overlay-2", 2, {
    delay: 3,
    top: "-100%",
    ease: Expo.easeInOut
  });

  TweenMax.from(".content", 2, {
    delay: 3.5,
    opacity: 0,
    ease: Power2.easeInOut
  });

  TweenMax.to(".content", 2, {
    opacity: 1,
    y: -300,
    delay: 3.5,
    ease: Power2.easeInOut
  });
}
