function smoothScroll() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

smoothScroll();

function pointerFollower() {
    window.addEventListener('mousemove', (dets) => {
        gsap.to('#pointer', {
            x: dets.clientX,
            y: dets.clientY,
        })
    })
}

pointerFollower();

function navLinksAnimation() {
  
      
}

navLinksAnimation();

function heroAnimation() {

    const tl = gsap.timeline();

    tl.from('#nav', {
        y: '-10',
        opacity: 0,
        duration: 1.2,
        ease: Expo.easeInOut
    })


    .to(".bound-elem" , {
        y: 0,
        ease: Expo.easeInOut,
        delay: -1.3,
        duration: 2,
        stagger: .2
    })

    .from("#bio", {
        y: 10,
        opacity: 0,
        duration: 1.5,
        delay: -1.3,
        ease: Expo.easeInOut
    })

    .from('#hero img', {
        y: 20,
        opacity: 0,
        delay: -1.3,
        ease: Expo.easeInOut,
        delay: -1.3,
        duration: 2,
    })


}

heroAnimation();

function scrollUp() {
    gsap.from('#scroll i', {
        y: 5, // Larger movement for better visibility
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse the animation
        duration:0.5,
        ease: "power4.out",
    })
}

scrollUp();

