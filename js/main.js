AOS.init({
	duration: 800,
	easing: 'slide'
});

$(document).ready(function ($) {

	"use strict";
	$(window).stellar({
		responsive: false,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});

	// Scrollax
	$.Scrollax();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// carousel
	var carousel = function () {
		$('.home-slider').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: false,
			dots: false,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
			responsive: {
				0: {
					items: 1,
					nav: false
				},
				600: {
					items: 1,
					nav: false
				},
				1000: {
					items: 1,
					nav: false
				}
			}
		});
	};
	carousel();

	// fullHeight
	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// burgerMenu (hidden top menu toggle)
	var burgerMenu = function () {

		$('.js-colorlib-nav-toggle').on('click', function (event) {
			event.preventDefault();
			var $this = $(this);
			if ($('body').hasClass('menu-show')) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function () {
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 400);
			}
		})
	};
	burgerMenu();

	// counter (animate fun facts number)
	var counter = function () {

		$('#section-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber({
						number: num,
						numberStep: comma_separator_number_step
					}, 7000);
				});

			}

		}, {
			offset: '95%'
		});

	}
	counter();

	// contentWayPoint animation trigger
	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, {
			offset: '95%'
		});
	};
	contentWayPoint();


	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	// popup's
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	// datepicker
	$('#appointment_date').datepicker({
		'format': 'm/d/yyyy',
		'autoclose': true
	});
	$('#appointment_time').timepicker();

	// pageProgress (loader)
	var pageProgress = function () {
		$(window).scroll(function () {
			var wintop = $(window).scrollTop(),
				docheight = $('.page').height(),
				winheight = $(window).height();
			// console.log(wintop);
			var totalScroll = (wintop / (docheight - winheight)) * 100;
			// console.log("total scroll" + totalScroll);
			$(".KW_progressBar").css("width", totalScroll + "%");
		});

	};
	pageProgress();

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('fast');
		} else {
			$('.back-to-top').fadeOut('fast');
		}
	});
	$("a[href='#top']").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		return false;
	});

	// Zoom in Project Thumbnail Photo
	$("a").click(function () {
		if ($(this).attr('class').indexOf("image") > -1) {
			var bgPath = $(this).css('background-image');
			bgPath = bgPath.replace('url(', '').replace(')', '').replace(/\"/gi, "");
			var projectTitle = $(this).attr('href');
			projectTitle = projectTitle.substring(1);
			$('#ModalHeading').text(projectTitle);
			$('#imagepreview').attr('src', bgPath);
			$('#imagemodal').modal('show');
		}
	});

	// Skills Progress bar animation
	var skillsProgressBarsAnim = function () {
		$('#section-skills').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				$(".progress-bar").each(function () {
					var aria_valuenow = $(this).attr("aria-valuenow");
					$(this).animate({
						width: aria_valuenow + "%"
					}, {
						duration: 800,
						easing: 'linear'
					});
				});

			}

		}, {
			offset: '95%'
		});

	}
	skillsProgressBarsAnim();

	//Send Email
	$('#sendEmail').click(function () {
		ValidateAndSendEmail();
	});

	function ValidateAndSendEmail() {
		var formName = document.getElementById("name").value;
		var formEmail = document.getElementById("email").value;
		var formSubject = document.getElementById("subject").value;
		var formMessage = document.getElementById("message").value;

		if (validateEmail(formEmail)) {
			Email.send({
				Host: "smtp.gmail.com",
				Username: "hikponss@gmail.com",
				Password: "KwfnDEzUteM44vA",
				To: 'hikponss@gmail.com',
				From: formEmail,
				Subject: formSubject,
				Body: formMessage,
			}).then(
				// message => alert("mail sent successfully")
				alert("mail sent successfully")
			);
			return true;
		}
		alert("not valid email")
		return false;
	}

	function validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}


});