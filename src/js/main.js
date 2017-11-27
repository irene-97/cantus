svg4everybody();

// @include('detect.js')
// @include('globals.js')

$('.introducing__slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	variableWidth: true,
});

$('.media__latest__videos').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	variableWidth: true,
});
