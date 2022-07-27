$(function () {
	$('.menu-btn').on('click', function () {
		$('.menu__list').toggleClass('active');
	});
	$('.reviews__slider').slick({
		arrows: false,
		slidesToShow: 3,
		dots: true,
		infinite: false,
		// responsive: [
		// 	{
		// 		breakpoint: 841,
		// 		settings: {
		// 			slidesToShow: 2,
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 601,
		// 		settings: {
		// 			slidesToShow: 1,
		// 		}
		// 	},
		// ]
	});

});
