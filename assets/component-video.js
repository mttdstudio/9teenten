import Plyr from "https://cdn.skypack.dev/pin/plyr@v3.7.3-E45D6ZVPi7dvJDHQmCkq/mode=imports,min/optimized/plyr.js";

const init = ({ el }) => {

  /* The original element that requested the module */
  const context = el;

  /* CSS selectors to target */
  const selectors = {
    buttons: ":is(video-embed, vimeo-embed, youtube-embed, video-embed) button",
    video: '[data-video]'
  };

  const elements = {
    buttons: context.querySelectorAll(selectors.buttons),
    video: context.querySelector(selectors.video),
  };

  elements.buttons.forEach(button => {
    button.addEventListener('click', () => {
      const video = elements.video;
      const player = new Plyr(video);

      player.on("ready", (event) => {
        const instance = event.detail.plyr;
        instance.play();
        event.target.classList.add("plyr--hide-controls");
      });

      player.on("playing", (event) => {
        event.target.classList.add("plyr--hide-controls");
        context.classList.add("is-poster-hidden");
        context.classList.remove("is-controls-hidden");
      });
    })
  })
};


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-module="video"]').forEach((el) => {
    init({ el });
  });
});
