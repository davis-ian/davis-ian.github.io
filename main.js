
gsap.registerPlugin(ScrollTrigger);

function init() {
    gsap.from('.greet h1', {
        opacity: 0,
        xPercent: 50,
        duration: 2,
        ease: "power2"
    })
    gsap.from('.welcome p', {
        opacity: 0,
        y: 200,
        duration: 1,
        ease: 'power2',
        stagger: .5
    })

    gsap.from('.awrapper', {
        opacity: 0, 
        xPercent: -50,
        scrollTrigger: {
        trigger:".awrapper",
        scrub:1,
        start: "top bottom",
        end: "center center",
    }})
    gsap.from('#p1', {
        opacity: 0, 
        xPercent: 50,
        scrollTrigger: {
        trigger:"#p1",
        scrub:1,
        start: "top bottom",
        end: "center center",
    }})
    gsap.from('#p2', {
        opacity: 0, 
        xPercent: -50,
        scrollTrigger: {
        trigger:"#p2",
        scrub:1,
        start: "top bottom",
        end: "center center",
    }})
    gsap.from('#p3', {
        opacity: 0, 
        xPercent: 50,
        scrollTrigger: {
        trigger:"#p3",
        scrub:1,
        start: "top bottom",
        end: "center center",
    }})
    gsap.from('.contact h1', {
        opacity:0,
        y: 500,
        scrollTrigger: {
            trigger: '.contact',
            start: "top bottom",
            end: "center center",
            scrub:1,
            
        }
    })
}

window.addEventListener('load', function() {
    init()
})
