(function ($) {
	$(document).ready(function () {
		/* owlcarousel */
		if ($(".banner-carousel").length) {
			$(".banner-carousel").each(function () {
				// var owl = $(".home-carousel");
				$(this).owlCarousel({
					loop:true,
					margin:10,
					nav: true,
					items: 1,
					
				});
			});
		}

		//home firm
		if ($(".firm-carousel").length) {
			$(".firm-carousel").each(function () {
				// var owl = $(".home-carousel");
				$(this).owlCarousel({
					loop:true,
					margin:10,
					nav: true,
					items: 5,
					
				});
			});
		}

		/* AOS Animate */
		AOS.init({ once: true });

		/* Show menu mobile */
		$("#mobile-menu-button").click(function () {
			$(this).toggleClass("active");
			$(".header-menu").toggleClass("active");
		});
	});

	// scroll effect header , bottomToTop , Btn-call
	window.onscroll = function () {
		myFunction();
	};
	var toTop = document.getElementById("bottom_to_top");
	function myFunction() {
		// console.log(this.scrollY);
		if (this.scrollY > 100) {
			toTop.style.bottom = "30px";
		} else {
			toTop.style.bottom = "-100px";
		}
		this.oldScroll = this.scrollY;
	}

	// toggle search bar
	$('#search-btn').click(() => {
		$('.header-search').fadeToggle();
	})
	$('#close-search-bar').click(() => {
		$('.header-search').fadeOut();
	})

})(jQuery);
