
gsap.registerPlugin(ScrollTrigger);

function init() {
    gsap.fromTo('.greet h1', {
        opacity: 0,
        x: 200,
    },{
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: 'power2'
    })
    gsap.fromTo('.welcome p', {
        opacity: 0,
        y: 300,
    },{
        opacity: 1,
        y: 0,
        stagger: .5,
        ease: 'power2',
        duration: 1
    })
    gsap.fromTo('.awrapper', {
        opacity: 0,
        x: -200
    },{
        opacity:1,
        x:0,
        scrollTrigger: {
            trigger: '.awrapper',
            scrub: 1,
            start: "top bottom",
            end: "top center",
            
        }
    })
    gsap.fromTo('#p1', {
        opacity: 0,
        x:500,
    },{
        opacity: 1,
        x:0,
        scrollTrigger: {
            trigger: '#p1',
            scrub: 1,
            start: 'top bottom',
            end: 'center center'
        }
    })
    gsap.fromTo('#p2', {
        opacity: 0,
        x:-500,
    },{
        opacity: 1,
        x:0,
        scrollTrigger: {
            trigger: '#p2',
            scrub: 1,
            start: 'top bottom',
            end: 'center center'
        }
    })
    gsap.fromTo('#p3', {
        opacity: 0,
        x:500,
    },{
        opacity: 1,
        x:0,
        scrollTrigger: {
            trigger: '#p3',
            scrub: 1,
            start: 'top bottom',
            end: 'center center'
        }
    })
    gsap.fromTo('.contact h1', {
        y: 300,
        opacity: 0,
    },{
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.contact',
            scrub: 1,
            start: 'top bottom',
            end: 'center center'
        }
    })
}
   

window.addEventListener('load', function() {
    init()    
})
