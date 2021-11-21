let tl = gsap.timeline();

tl.to('.loading', {
    left: '100%',
    duration: 0.75
})

tl.from('.hero', {
    duration: 0.5,
    filter: "blur(5px)"
})

tl.from('.logo', {
    opacity: 0,
    duration: 0.2
})

tl.from('.socials', {
    opacity: 0,
    duration: 0.2
})

tl.from('.heroG h1', {
    opacity: 0,
    duration: 0.2
})

tl.from('.heroG p', {
    opacity: 0,
    duration: 0.2
})

tl.from('.heroG .btn', {
    opacity: 0,
    duration: 0.2
})

tl.to('.loading', {
    display: 'none'
})