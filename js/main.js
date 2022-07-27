$(function () {
	$('.menu-btn').on('click', function () {
		$('.menu__list').toggleClass('active');
	});
	$('.reviews__slider').slick({
		arrows: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1240,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
			// 	{
			// 		breakpoint: 601,
			// 		settings: {
			// 			slidesToShow: 1,
			// 		}
			// 	},
		]
	});
	$('.cases__list, .cases__items').slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});
});
