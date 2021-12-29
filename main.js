
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
    delay: 1
})
gsap.from(".skill1 h4", {
    scrollTrigger: {
        trigger:".skill1 h4",
        toggleActions: "play complete pause none"
    },
    ease: "power2",
    x:-500,
    opacity: 0,
    stagger: .2,
})
gsap.from(".skill2 h4", {
    scrollTrigger: {
        trigger:".skill1 h4",
        toggleActions: "play complete pause none"
    },
    ease: "power2",
    y:500,
    opacity: 0,
    stagger: .2,
})
gsap.from(".skill3 h4", {
    scrollTrigger: {
        trigger:".skill1 h4",
        toggleActions: "play complete pause none"
    },
    ease: "power2",
    x:500,
    opacity: 0,
    stagger: .2,
})

