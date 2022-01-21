jQuery(function($){
	"use strict";

	// Responsive Menu

	if($('.fa-bars').length){
		$('.fa-bars').on('click', function(){
			$('.header_top .inner_header nav ul').show();
			$(this).hide();
			$('.fa-times').show();
		});

		$('.fa-times').on('click', function(){
			$('.header_top .inner_header nav ul').hide();
			$(this).hide();
			$('.fa-bars').show();
		});
	}

//Header slider
	if($('.home_slider').length){
		$('.home_slider').slick({
			vertical: true,
			arrows: false,
			dots: true,
		}); 
	}


	//Twitter slider
	if($('.content_slider_tweeter').length){
		$('.content_slider_tweeter').slick({
			vertical: true,
			appendArrows: $('.tweet_slider .arrows'),
			prevArrow: "<span class=\"up\"><i class=\"fas fa-arrow-up\"></i></span>",
			nextArrow: "<span class=\"down\"><i class=\"fas fa-arrow-down\"></i></span>"
			
		});
	}

//Carusel
	if($('.shop_carusel').length){
		$('.shop_carusel').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			appendArrows: $('.shop_slider_navigation'),
			prevArrow: "<div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div>",
			nextArrow: "<div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div>",
			responsive: [
			    {
			      breakpoint: 520,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});
	}

	//Testimonial Slider
	if($('.testimonial_carusel').length){
		$('.testimonial_carusel').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			appendArrows: $('.testimonial_slider_box'),
			prevArrow: "<div class=\"left_arrow\"><div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div></div>",
			nextArrow: "<div class=\"right_arrow\"><div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div></div>",
			responsive: [
			    {
			      breakpoint: 520,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});

		$('.testimonial_carusel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		  // console.log(nextSlide);
		  var tabs_container = $('.testimonial_tab_container');

		tabs_container.find($('.tab-items')).hide();
		// console.log($('.tab-' + current_index));
		tabs_container.find($('.tab-' + nextSlide)).show();
		});
	}

	
	

	if($('.open_video').length){
		$('.open_video').magnificPopup({
		  disableOn: 700,
	      type: 'iframe',
	      mainClass: 'mfp-fade',
	      removalDelay: 160,
	      preloader: false,
	      fixedContentPos: false
		});
	}

	if($('.testi_gallery').length){
		$('.testi_gallery').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          mainClass: 'mfp-img-mobile',
          image: {
            verticalFit: true
          }
          
        });
	}
});

