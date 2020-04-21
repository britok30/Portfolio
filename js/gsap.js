// GSAP

function fadeOut() {
    gsap.to(".myBtn", 1, {
        y: -100,
        opacity: 0,
    });

    gsap.to(".screen", 2, {
        y: -400,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 1.5,
    });

    gsap.to(".screen-2", 2, {
        y: -400,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 2,
    });

    gsap.from(".overlay", 2, {
        ease: Power2.easeInOut,
    });

    gsap.to(".overlay", 2, {
        delay: 2.5,
        top: "-110%",
        ease: Expo.easeInOut,
    });

    gsap.to(".overlay-2", 2, {
        delay: 3,
        top: "-100%",
        ease: Expo.easeInOut,
    });

    gsap.from(".content", 2, {
        delay: 3.5,
        opacity: 0,
        ease: Power2.easeInOut,
    });

    gsap.to(".content", 2, {
        opacity: 1,
        y: -300,
        delay: 3.5,
        ease: Power2.easeInOut,
    });
}
