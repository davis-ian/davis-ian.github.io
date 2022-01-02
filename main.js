
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

    gsap.fromTo('#js', {
        opacity: 0,
    },{
        opacity: 1,
        scrollTrigger: {
            trigger: '#js',
            scrub: 1,
            start: 'top bottom',
            end: 'center center',
           
        }
    })
    gsap.fromTo('#py', {
        opacity: 0,
    },{
        opacity: 1,
        scrollTrigger: {
            trigger: '#py',
            scrub: 1,
            start: 'top bottom',
            end: 'center center',
            
        }
    })
    gsap.fromTo('#vue', {
        opacity: 0,
    },{
        opacity: 1,
        scrollTrigger: {
            trigger: '#vue',
            scrub: 1,
            start: 'top bottom',
            end: 'center center',
            
        }
    })
    gsap.fromTo('#dj', {
        opacity: 0,
    },{
        opacity: 1,
        scrollTrigger: {
            trigger: '#dj',
            scrub: 1,
            start: 'top bottom',
            end: 'center center',
            
        }
    })
    gsap.fromTo('#h5', {
        opacity: 0,
    },{
        opacity: 1,
        scrollTrigger: {
            trigger: '#h5',
            scrub: 1,
            start: 'top bottom',
            end: 'center center',
            
        }
    })
    gsap.fromTo('#c3', {
        opacity: 0,
    },{
        opacity: 1,
        scrollTrigger: {
            trigger: '#c3',
            scrub: 1,
            start: 'top bottom',
            end: 'center center',
            
        }
    })
    gsap.fromTo('#gh', {
        opacity: 0,
    },{
        opacity: 1,
        scrollTrigger: {
            trigger: '#gh',
            scrub: 1,
            start: 'top bottom',
            end: 'center center',
            
        }
    })
    gsap.fromTo('#menu', {
        opacity: 0,
    },{
        opacity: 1,
        color: '#262626',
        duration: 1,
    })
    gsap.fromTo('#menu', {
        color:'#262626',
    },{
        color: '#D9D6D0',
        scrollTrigger: {
            trigger: '.skills h1',
            scrub: 1,
            
        }
    })
    gsap.fromTo('#menu', {
        color:'#D9D6D0',
    },{
        color: '#262626',
        scrollTrigger: {
            trigger: '.about img',
            scrub: 1,
            
        }
    })
    gsap.fromTo('#menu', {
        color:'#262626',
    },{
        color: '#D9D6D0',
        scrollTrigger: {
            trigger: '.projects h1',
            scrub: 1,
            
        }
    })
    gsap.fromTo('#menu', {
        color:'#D9D6D0',
    },{
        color: '#262626',
        scrollTrigger: {
            trigger: '.contact h1',
            scrub: 1,
            
        }
    })
}

function openNav() {
    document.getElementById("mySidenav").style.width="100%"
}
function closeNav() {
    document.getElementById("mySidenav").style.width="0"
}

window.addEventListener('load', function() {
    init()    
})
