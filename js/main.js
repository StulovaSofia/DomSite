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

let menuItems = ['menuItem0', 'menuItem1']
let menuItemsStatus = [false, false];

function mobileMenu(index) {
	if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) return;

	for (let i = 0; i < menuItems.length; i++) {
		let style = document.getElementById(menuItems[i]).style;
		if (i === index) {
			if (menuItemsStatus[i]) {
				style.visibility = 'hidden';
				style.opacity = '0';
				menuItemsStatus[i] = false;
			} else {
				style.visibility = 'visible';
				style.opacity = '1';
				menuItemsStatus[i] = true;
			}
		} else {
			style.visibility = 'hidden';
			style.opacity = '0';
			menuItemsStatus[i] = false;
		}
	}
}

