
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
