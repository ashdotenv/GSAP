gsap.from(".page1 #circle", {
  scale: 2,
  rotate: 260,
  duration: 2,
});

gsap.from(".page2 #circle", {
  scale: 2,
  rotate: 260,
  duration: 2,
  scrollTrigger: {
    trigger: "page2 > #circle",
    scroller: "body",
    start: "bottom 90%",
    scrub: "true",
  },
});
