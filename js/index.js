co("javascript testing OK")

const main = function () {
		new Swiper("#swiper-1", {
			effect: "cube", // delete for sideways motion, use fade
			autoplay: {
				delay: 6500,
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