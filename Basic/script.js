let tl = gsap.timeline();

tl.from("nav h3", {
  y: -50,
  opacity: 0,
  delay: 0.2,
  duration: 0.5,
  stagger: 0.2,
});

tl.from(".hero h1  ", {
  x: -150,
  opacity: 0,
  duration: 0.3,
  stagger: 0.6,
});
tl.from(".hero ",{
    stagger:0.4,
})
tl.from(".hero img",{
  x:20,
  rotate:45,
  opacity:0,
  duration:0.8,
  stagger:0.5
})