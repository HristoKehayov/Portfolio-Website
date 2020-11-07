AOS.init({
	duration: 800,
	easing: 'slide'
});

// $(window).load(function () {
// 	debugger;
// 	//save info somewhere
// 	var userLanguageCookie = $.cookie('userLanguage');

// 	if (typeof userLanguageCookie !== 'undefined') {
// 		//user accepted Cookie Collect Consent
// 		var newUrl = updateQueryStringParameter(window.location.href, 'lang', languageCode);
// 		window.history.pushState("", "", newUrl);


// 		$('#selectLanguageDropdown').localizationTool('translate', queryLanguage??userLanguageCookie);
// 		$('body').show();
// 	}
// 	debugger;

// 	//return 'are you sure you want to leave?';
// });

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
	/*=============================*/


	// Scrollax
	$.Scrollax();
	/*=============================*/


	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();
	/*=============================*/


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
	/*=============================*/


	// fullHeight
	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();
	/*=============================*/


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
	/*=============================*/


	// counter (animate fun facts number)
	var counter = function () {

		$('#section-counter').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
				// var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber({
						number: num,
						numberStep: function(now, tween) {
							var numberAnimate = Math.floor(now),
							target = $(tween.elem);
							if (numberAnimate > 99999) {
								numberAnimate = Math.floor(now),
								target = $(tween.elem);
		
								numberAnimate = (numberAnimate-(numberAnimate%1000))/1000;
								numberAnimate = numberAnimate + 'K';
							}

							target.text(numberAnimate);
						}
					}, 7000);
				});

			}

		}, {
			offset: '95%'
		});

	}
	counter();
	/*=============================*/
	

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
	/*=============================*/


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
	/*=============================*/


	// popup's
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	/*=============================*/


	// datepicker
	$('#appointment_date').datepicker({
		'format': 'm/d/yyyy',
		'autoclose': true
	});
	$('#appointment_time').timepicker();
	/*=============================*/


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
	/*=============================*/


	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('fast');
		} else {
			$('.back-to-top').fadeOut('fast');
		}
	});
	$("a[href='#top']").click(function (e) {
		e.preventDefault();
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
	});
	/*=============================*/


	// Zoom in Project Thumbnail Photo
	$("a").click(function () {
		if ($(this).hasClass("image")) {
			var bgPath = $(this).css('background-image');
			bgPath = bgPath.replace('url(', '').replace(')', '').replace(/\"/gi, "");
			var projectTitle = $(this).attr('href');
			projectTitle = projectTitle.substring(1);
			$('#ModalHeading').text(projectTitle);
			$('#imagepreview').attr('src', bgPath);
			$('#imagemodal').modal('show');
		}
	});
	/*=============================*/


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
	/*=============================*/


	/*--==========================
	  SEND EMAIL
	============================*/
	$('#sendEmail').click(function () {
		var popup_titles = [
			"Opps...\nSomething went wrong", 
			"Опа...\nНещо се обърка!", 
			"Opps...\nEtwas ist schief gelaufen!"
		];
		var popup_text = [
			"Some of the fields are empty!", 
			"Някои от полетата са празни!", 
			"Einige der Felder sind leer!"
		];
		var popup_footer = [
			"Why do I have this issue?", 
			"Защо имам този проблем?", 
			"Warum habe ich dieses Problem?"
		];
		var popup_successTitle = [
			"Success!", 
			"Успех!", 
			"Erfolg!"
		];
		var popup_successText = [
			"Your message has been sent successfully!", 
			"Съобщението Ви беше изпратено успешно!", 
			"Ihre Nachricht wurde erfolgreich gesendet!"
		];
		var popup_infoTitle = [
			"Thank you \nfor contacting me!", 
			"Благодаря Ви, че се свързахте с мен!", 
			"Vielen Dank, dass Sie mich kontaktiert haben!"
		];
		var popup_infoText = [
			"I will make sure to get back to you as soon as possible!", 
			"Ще се погрижа да се свържа с вас възможно най-скоро!", 
			"Ich werde mich so schnell wie möglich bei Ihnen melden!"
		];
		var popup_Great = [
			"Great",
			"Страхотно",
			"Toll"
		]

		// var formName = $("#name").val();
		var formEmail = $("#email").val();
		var formSubject = $("#subject").val();
		var formMessage = $("#message").val();
		const requiredEmailChars = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var langIndex = setPopUpLangIndex();
		if (formEmail == "" && formSubject == "" && formSubject == "" && formMessage == "") {
			Swal.fire({
				icon: 'error',
				title: popup_titles[langIndex],
				text: popup_text[langIndex],
				// footer: '<a href>Why do I have this issue?</a>'
				footer: "<a href>"+popup_footer[langIndex]+"</a>"
			})
		} else if (requiredEmailChars.test(formEmail)) {
			Email.send({
				Host: "smtp.gmail.com",
				Username: "hikponss@gmail.com",
				Password: "KwfnDEzUteM44vA",
				To: 'hikponss@gmail.com',
				From: formEmail,
				Subject: formSubject,
				Body: formMessage,
			}).then(
				Swal.fire({
					icon: 'success',
					title: popup_successTitle[langIndex],
					html: popup_successText[langIndex],
				}).then((result) => {
					if (result.isConfirmed) {
						Swal.fire({
							title: popup_infoTitle[langIndex],
							icon: 'info',
							html: popup_infoText[langIndex],
							showCloseButton: true,
							focusConfirm: false,
							confirmButtonText: "<i class=\"icon icon-thumbs-up\"></i>" + popup_Great[langIndex] + "!",
							confirmButtonAriaLabel: 'Thumbs up, great!',
						}).then((result) => {
							/* Read more about handling dismissals below */
							if (result.dismiss === Swal.DismissReason.timer) {} else {
								$('#sendEmailForm').trigger("reset");
								location.reload();
							}
						})
					}
				})
			)
		} else {
			Swal.fire({
				icon: 'error',
				title: "Opps...\nSomething went wrong!",
				text: 'Invalid Email Address!',
				footer: '<a href>Why do I have this issue?</a>'
			})
		}
	});

	function setPopUpLangIndex()
	{
		var userLanguageCookie = $.cookie('userLanguage');
		var index = 0;
		if (typeof userLanguageCookie !== 'undefined') {
			// has lang cookie
			switch (userLanguageCookie) {
				case 'bulgarian': index = 1; break;
				case 'german': index = 2; break;
				default: index = 0; break;
			}
		}
		return index;
	}
	/*=============================*/

	/*--==========================
	  COOKIE CONSENT
	============================*/
	var cookieConsent = function(){
		var cookieConsent = $.cookie('cookieConsent');
		if (typeof cookieConsent !== 'undefined') {
			// user accepted cookie consent
			return;
		}else{
			setTimeout(function () {
				$("#cookieConsent").fadeIn(200);
				$("#cookieConsent").css("display", "inline-table")
			 }, 4000);
			$("#closeCookieConsent, .cookieConsentOK").click(function() {
				$("#cookieConsent").fadeOut(200);
				$.cookie('cookieConsent', 'accepted');
			}); 
		}
	}
	cookieConsent();
	/*=============================*/	
});


function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
        return uri + separator + key + "=" + value;
    }
}


