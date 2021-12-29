
gsap.registerPlugin(ScrollTrigger);



gsap.from(".greet h1", {
    ease: "power4", 
    x:500, 
    duration:2,
    opacity:0
})
gsap.from(".welcome p", {
    ease:"power2", 
    y:200, 
    opacity: 0, 
    duration: 2, 
    stagger: .2, 
    delay: .5
})

gsap.from(".awrapper", {
    scrollTrigger: {
        trigger:".awrapper",
        scrub: 1,
        end: "20%",
    },
    ease: "power2",
    x:-500,
    opacity: 0,
})
gsap.from("#p1", {
    scrollTrigger: {
        trigger: "#p1",
        scrub: 1,
        end: "20%",
    },
    ease: "power2",
    x:500,
    opacity: 0,
})
gsap.from("#p2", {
    scrollTrigger: {
        trigger: "#p2",
        scrub: 1,
        start: "top bottom",
        end: "20%",
    },
    ease: "power2",
    x:-500,
    opacity: 0,
})
gsap.from("#p3", {
    scrollTrigger: {
        trigger: "#p3",
        scrub: 1,
        end: "20%",
    },
    ease: "power2",
    x:500,
    opacity: 0,
})
gsap.from(".contact h1", {
    scrollTrigger: {
        trigger: ".contact h1",
        toggleActions: "play complete pause none",
        end: "20%",
    },
    ease: "power2",
    y:500,
    opacity: 0,
})