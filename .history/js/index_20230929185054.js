co("javascript testing OK");

cr(`This is ${getCompleteDate()}`);

const main = function () {
  new Swiper("#swiper-1", {
    effect: "cube", // delete for sideways motion, use fade
    autoplay: {
      delay: 66500,
    },
    pagination: {
      el: "#swiper-1 .swiper-pagination",
      clickable: true,
    },
    lazyloading: true,
    loop: true,
  });
};
main();

//! MAIN PROGRAM

