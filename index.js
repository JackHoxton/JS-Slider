import SwipeCarousel from "./carousel-swipe.mjs";

const carousel = new SwipeCarousel({
  containerID: ".slider",
  interval: 1500,
  isPlaying: true,
});

carousel.init();
