gsap.to("#page2 img", {
  width: "100%",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    duration:2,
    scrub:2,
    pin:true
  },
});
