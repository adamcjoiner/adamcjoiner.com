// JavaScript Document



	$(window).load(function(){

		"use strict";

		$(window).stellar({});

	});



	/*----------------------------------------------------*/
	/*	Preloader
	/*----------------------------------------------------*/

	$(window).load(function() {

		"use strict";
		/*
		$('#status').delay(100).fadeOut('fast');
		$('#preloader').delay(200).fadeOut('fast');
		$('body').delay(500).css({'overflow':'visible'});
		*/

	});

	/*----------------------------------------------------*/
	/*	Screen Transitions
	/*----------------------------------------------------*/

	$(window).load(function() {

		"use strict";

		$('#intro .container').addClass('animated fadeInUp').removeClass('hidden');

		/*
		$('#view-portfolio').click(function() {
			var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			$('#intro .container').removeClass('animated fadeInUp').addClass('animated fadeOutUp').one(animationEnd, function() {
					$('#intro').addClass('animated fadeOut').one(animationEnd, function() {
						$('#intro').addClass('hidden');
					});
					$('#more_features').addClass('animated fadeInUp').removeClass('hidden');
			});
		});
		*/
	});

	/*----------------------------------------------------*/
	/*	Scroll Navbar
	/*----------------------------------------------------*/

	$(window).scroll(function(){

		"use strict";

		var b = $(window).scrollTop();

		if( b > 100 ){
			$(".navbar").addClass("scroll-fixed-navbar");
		} else {
			$(".navbar").removeClass("scroll-fixed-navbar");
		}

	});



	/*----------------------------------------------------*/
	/*	Mobile Menu Toggle
	/*----------------------------------------------------*/

	$(document).ready(function() {

		"use strict";

		$('.navbar-nav li a').click(function() {
			$('#navigation-menu').css("height", "1px").removeClass("in").addClass("collapse");
			$('#navigation-menu').removeClass("open");
		});
	});



	/*----------------------------------------------------*/
	/*	OnScroll Animation
	/*----------------------------------------------------*/

	$(document).ready(function(){

		"use strict";

		$('.animated').css('opacity', '0');

		$('.triggerAnimation').waypoint(function() {
			var animation = $(this).attr('data-animate');
			$(this).css('opacity', '');
			$(this).addClass("animated " + animation);

		},
			{
				offset: '85%',
				triggerOnce: true
			}
		);

	});



	/*----------------------------------------------------*/
	/*	Parallax
	/*----------------------------------------------------*/

	$(window).bind('load', function() {

		"use strict";
		parallaxInit();

	});

	function parallaxInit() {
		if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$('#call_to_action').parallax("30%", 0.3);
			$('#statistic_banner').parallax("30%", 0.3);
			$('#promo_banner').parallax("30%", 0.3);
			$('#testimonials_rotator').parallax("30%", 0.3);
		}
	}



	/*----------------------------------------------------*/
	/*	ScrollUp
	/*----------------------------------------------------*/
	/**
	* scrollUp v1.1.0
	* Author: Mark Goodyear - http://www.markgoodyear.com
	* Git: https://github.com/markgoodyear/scrollup
	*
	* Copyright 2013 Mark Goodyear
	* Licensed under the MIT license
	* http://www.opensource.org/licenses/mit-license.php
	*/

	$(document).ready(function(){

		'use strict';

		$.scrollUp = function (options) {

			// Defaults
			var defaults = {
				scrollName: 'scrollUp', // Element ID
				topDistance: 600, // Distance from top before showing element (px)
				topSpeed: 800, // Speed back to top (ms)
				animation: 'fade', // Fade, slide, none
				animationInSpeed: 200, // Animation in speed (ms)
				animationOutSpeed: 200, // Animation out speed (ms)
				scrollText: '', // Text for element
				scrollImg: false, // Set true to use image
				activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			};

			var o = $.extend({}, defaults, options),
				scrollId = '#' + o.scrollName;

			// Create element
			$('<a/>', {
				id: o.scrollName,
				href: '#top',
				title: o.scrollText
			}).appendTo('body');

			// If not using an image display text
			if (!o.scrollImg) {
				$(scrollId).text(o.scrollText);
			}

			// Minium CSS to make the magic happen
			$(scrollId).css({'display':'none','position': 'fixed','z-index': '2147483647'});

			// Active point overlay
			if (o.activeOverlay) {
				$("body").append("<div id='"+ o.scrollName +"-active'></div>");
				$(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '2147483647' });
			}

			// Scroll function
			$(window).scroll(function(){
				switch (o.animation) {
					case "fade":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
						break;
					case "slide":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
						break;
					default:
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
				}
			});

			// To the top
			$(scrollId).click( function(event) {
				$('html, body').animate({scrollTop:0}, o.topSpeed);
				event.preventDefault();
			});

		};

		$.scrollUp();

	});



	/*----------------------------------------------------*/
	/*	Current Menu Item
	/*----------------------------------------------------*/

	$(document).ready(function() {

		//Bootstraping variable
		headerWrapper		= parseInt($('#navigation-menu').height());
		offsetTolerance	= 300;

		//Detecting user's scroll
		$(window).scroll(function() {

			//Check scroll position
			scrollPosition	= parseInt($(this).scrollTop());

			//Move trough each menu and check its position with scroll position then add selected-nav class
			$('.navbar-nav > li > a').each(function() {

				thisHref				= $(this).attr('href');
				thisTruePosition	= parseInt($(thisHref).offset().top);
				thisPosition 		= thisTruePosition - headerWrapper - offsetTolerance;

				if(scrollPosition >= thisPosition) {

					$('.selected-nav').removeClass('selected-nav');
					$('.navbar-nav > li > a[href='+ thisHref +']').addClass('selected-nav');

				}
			});


			//If we're at the bottom of the page, move pointer to the last section
			bottomPage	= parseInt($(document).height()) - parseInt($(window).height());

			if(scrollPosition == bottomPage || scrollPosition >= bottomPage) {

				$('.selected-nav').removeClass('selected-nav');
				$('.navbar-nav > li > a:last').addClass('selected-nav');
			}
		});

	});



	/*----------------------------------------------------*/
	/*	Animated Scroll To Anchor
	/*----------------------------------------------------*/
	/**
	 * Animated Scroll To Anchor v0.3
	 * Author: David Vogeleer
	 * http://www.individual11.com/
	 *
	 * THANKS:
	 *
	 * -> solution for setting the hash without jumping the page -> Lea Verou : http://leaverou.me/2011/05/change-url-hash-without-page-jump/
	 * -> Add stop  - Joe Mafia
	 * -> add some easing - Daniel Garcia
	 * -> added use strict, cleaned up some white space adn added conditional for anchors without hashtag -> Bret Morris, https://github.com/bretmorris
	 *
	 * TODO:
	 * -> Add hashchange support, but make it optional http://leaverou.me/2011/05/get-your-hash-the-bulletproof-way/
	 *
	 * Licensed under the MIT license.
	 * http://www.opensource.org/licenses/mit-license.php
	 *
	 */

	$(document).ready(function(){


		"use strict";
		$.fn.scrollTo = function( options ) {

			var settings = {
				offset : 0,       //an integer allowing you to offset the position by a certain number of pixels. Can be negative or positive
				speed : 'medium',   //speed at which the scroll animates
				override : null,  //if you want to override the default way this plugin works, pass in the ID of the element you want to scroll through here
			};

			if (options) {
				if(options.override){
					//if they choose to override, make sure the hash is there
					options.override = (override('#') != -1)? options.override:'#' + options.override;
				}
				$.extend( settings, options );
			}

			return this.each(function(i, el){
				$(el).click(function(e){
					var idToLookAt;
					if ($(el).attr('href').match(/#/) !== null) {
						e.preventDefault();
						idToLookAt = (settings.override)? settings.override:$(el).attr('href');//see if the user is forcing an ID they want to use
						//if the browser supports it, we push the hash into the pushState for better linking later
						if(history.pushState){
							history.pushState(null, null, idToLookAt);
							$('html,body').stop().animate({scrollTop: $(idToLookAt).offset().top + settings.offset}, settings.speed, settings.easing);
						}else{
							//if the browser doesn't support pushState, we set the hash after the animation, which may cause issues if you use offset
							$('html,body').stop().animate({scrollTop: $(idToLookAt).offset().top + settings.offset}, settings.speed, settings.easing,function(e){
								//set the hash of the window for better linking
								window.location.hash = idToLookAt;
							});
						}
					}
				});
			});
		};

		$('#GoToIntro, #GoToPortfolio, #GoToContact' ).scrollTo({ speed: 1400 });

	});



	/*----------------------------------------------------*/
	/*	Statistic Counter
	/*----------------------------------------------------*/

	$(document).ready(function($) {

		"use strict";

		$('.statistic-block').each(function() {
			$(this).appear(function() {
				var $endNum = parseInt($(this).find('.statistic-number').text());
				$(this).find('.statistic-number').countTo({
					from: 0,
					to: $endNum,
					speed: 3000,
					refreshInterval: 30,
				});
			},{accX: 0, accY: 0});
		});

	});



	/*----------------------------------------------------*/
	/*	Screens Lightbox
	/*----------------------------------------------------*/

	$(document).ready(function(){

		"use strict";

		$("a[class^='prettyPhoto']").prettyPhoto();

	});



	/*----------------------------------------------------*/
	/*	Screens Carousel
	/*----------------------------------------------------*/

	$(document).ready(function(){

		"use strict";

		$("#screens_carousel").owlCarousel({

			slideSpeed : 600,
			items : 4,
			itemsDesktop : [1199,4],
			itemsDesktopSmall : [960,3],
			itemsTablet: [768,3],
			itemsMobile : [480,2],
			navigation: true,
			pagination: false,
			navigationText : false

		});

		// Carousel Navigation
		$(".next").click(function(){
			$("#screens_carousel").trigger('owl.next');
		})

		$(".prev").click(function(){
			$("#screens_carousel").trigger('owl.prev');
		})


	});



	/*----------------------------------------------------*/
	/*	Intro Slider
	/*----------------------------------------------------*/

	$(document).ready(function(){

		"use strict";

		$('.intro_slider').flexslider({
			animation: "fade",
			controlNav: true,
			directionNav: false,
			slideshowSpeed: 6000,
			animationSpeed: 700,
			start: function(slider){
				$('body').removeClass('loading');
			}
		});

	});



	/*----------------------------------------------------*/
	/*	Testimonials Rotator
	/*----------------------------------------------------*/

	$(document).ready(function(){

		"use strict";

		$('.flexslider').flexslider({
			animation: "fade",
			controlNav: true,
			directionNav: false,
			slideshowSpeed: 4000,
			animationSpeed: 800,
			start: function(slider){
				$('body').removeClass('loading');
			}
		});

	});



	/*----------------------------------------------------*/
	/*	Content Slider
	/*----------------------------------------------------*/

	$(document).ready(function(){

		"use strict";

		$('.content_slider').flexslider({
			animation: "slide",
			controlNav: true,
			directionNav: true,
			slideshowSpeed: 6000,
			animationSpeed: 600,
			start: function(slider){
				$('body').removeClass('loading');
			}
		});

	});



	/*----------------------------------------------------*/
	/*	Newsletter Subscribe Form
	/*----------------------------------------------------*/

	/*$(document).ready(function() {

		"use strict";

		$('#request-quote_form').submit(function() {
			if (!valid_email_address($("#email-address").val()))
				{
					$(".message").html("<span style='color:red;'>The email address you entered was invalid. Please make sure you enter a valid email address to subscribe.</span>");
				}
			else
				{
					$(".message").html("<span style='color:#19acca;'>Adding your email address...</span>");
						$.ajax({
						url: 'rfq.php',
						data: $('#request-quote_form').serialize(),
						type: 'POST',
						success: function(msg) {
							if(msg=="success")
								{
									$("#email-address").val("");
									$(".message").html('<span style="color:#19acca;">Quote submitted! I will respond to you shortly.</span>');
								}
							else
								{
									$(".message").html("<span style='color:red;'>The email address you entered was invalid. Please make sure you enter a valid email address to submit your quote request.</span>");
								}
						}
					});
				}

				return false;
		});

	});*/

	function valid_email_address(email) {
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
		return pattern.test(email);
	}

	$(document).ready(function() {

		$("#request_a_quote").animatedModal();

	});
