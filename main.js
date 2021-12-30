
gsap.registerPlugin(ScrollTrigger);



gsap.from(".greet h1", {
    ease: "power4", 
    xPercent: 70, 
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
    ease: "power2",
    x:-500,
    immediateRender: false,
    opacity: 0, 
    scrollTrigger: {
        trigger:".awrapper",
        scrub: 1,
        start: "top 80%",
        end: "bottom center",
        
    },
    
})
gsap.from("#p1", {
    scrollTrigger: {
        trigger: "#p1",
        scrub: 1,
        start: "top bottom",
        end: "center center"
    },
    ease: "power2",
    x:500,
    immediateRender: false,
    opacity: 0, 
    
})
gsap.from("#p2", {
    scrollTrigger: {
        trigger: "#p2",
        scrub: 1,
        start: "top bottom",
        end: "center center"
    },
    ease: "power2",
    x:-500,
    immediateRender: false,
    opacity: 0, 
    
})
gsap.from("#p3", {
    scrollTrigger: {
        trigger: "#p3",
        scrub: 1,
        start: "top bottom",
        end: "center center"
    },
    ease: "power2",
    x:500,
    immediateRender: false,
    opacity: 0, 
    
})
gsap.from(".contact h1", {
    scrollTrigger: {
        trigger: ".contact",
        scrub: 1,
        start: "top bottom",
        end: "center center",
              
    },
    ease: "power2",
    y:500,
    immediateRender: false,
    opacity: 0, 
})

