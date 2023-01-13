import Plyr from "https://cdn.skypack.dev/pin/plyr@v3.7.3-E45D6ZVPi7dvJDHQmCkq/mode=imports,min/optimized/plyr.js";

const init = ({ el }) => {

  /* The original element that requested the module */
  const context = el;
  let start = true;

  /* CSS selectors to target */
  const selectors = {
    video: '[data-video]'
  };

  const elements = {
    video: context.querySelector(selectors.video),
  };

  const video = elements.video;
  const player = new Plyr(video, {
    controls: [
      'play-large',
      'play',
      'progress',
      'mute',
      'volume',
      'fullscreen',
    ],
  });

  player.on("playing", (event) => {
    const instance = event.detail.plyr;
    instance.muted = false;
    // instance.play();
  });

  player.on('ended', (event) => {
    window.location.assign("/collections/")
  });

  // const checkScroll = () => {
  //   console.log('checking.');

  //   if (start) {
  //     player.play();
  //     document.removeEventListener('scroll', checkScroll, false);
  //     start = false;
  //   }
  // }

  // document.addEventListener('scroll', checkScroll);

  // elements.buttons.forEach(button => {
  //   button.addEventListener('click', () => {
  //     const video = elements.video;
  //     const player = new Plyr(video);

  //     player.on("ready", (event) => {
  //       const instance = event.detail.plyr;
  //       instance.play();
  //       event.target.classList.add("plyr--hide-controls");
  //     });

  //     player.on("playing", (event) => {
  //       event.target.classList.add("plyr--hide-controls");
  //       context.classList.add("is-poster-hidden");
  //       context.classList.remove("is-controls-hidden");
  //     });
  //   })
  // })
};


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-module="video-hero"]').forEach((el) => {
    init({ el });
  });
});
