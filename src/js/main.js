svg4everybody();

// @include('detect.js')
// @include('globals.js')

$('.introducing__slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1230,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
	],
});

$('.media__latest__videos').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	variableWidth: true,
});
