
gsap.registerPlugin(ScrollTrigger);

function init() {
    gsap.to('.awrapper', {
        x: 300,
        opacity: 1,
        scrollTrigger: {
            trigger: ".awrapper",
            scrub: 1,
            start: "top bottom",
            end: "center center"
        }
    })
    gsap.to('#p1', {
        x: -500,
        opacity: 1,
        scrollTrigger: {
            trigger: "#p1",
            scrub: 1,
            start: "top bottom",
            end: "center center"
        }
    })
    gsap.to('#p2', {
        x: 500,
        opacity: 1,
        scrollTrigger: {
            trigger: "#p2",
            scrub: 1,
            start: "top bottom",
            end: "center center"
        }
    })
    gsap.to('#p3', {
        x: -500,
        opacity: 1,
        scrollTrigger: {
            trigger: "#p3",
            scrub: 1,
            start: "top bottom",
            end: "center center"
        }
    })
    gsap.to('.contact h1', {
        y: -300,
        opacity: 1,
        scrollTrigger: {
            trigger: ".contact",
            scrub: 1,
            start: "top bottom",
            end: "center center"
        }
    })
}

window.addEventListener('load', function() {
    init()    
})
