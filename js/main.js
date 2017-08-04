"use strict";

$(document).ready(function() {
	$(window).scroll(function(event) {
		/* Act on the event */
		var vitri = $(window).scrollTop();
		console.log(vitri);

		if (vitri > 10) {
			$('header').addClass('tienhoa');
			$('.right-k .daudo').addClass('bienra', 1700);
			$('.bonus').addClass('bienmat');
			$('.bonus2').addClass('bienra');
		}
		else if(vitri < 10) {
			$('header').removeClass('tienhoa');
			$('.right-k .daudo').removeClass('bienra', 1000);
			$('.bonus').removeClass('bienmat');
			$('.bonus2').removeClass('bienra');
		}

		if (vitri > 1500) {
			$('.laptop').addClass('dungyen');
			$('.bonus2').fadeOut(110);
		}
		else if (vitri < 1500) {
			$('.laptop').removeClass('dungyen');
			$('.bonus2').fadeIn(110);
		}

		var vitri1 = $('.sec1').offset().top;
		var vitri2 = $('.sec2').offset().top;
		var vitri3 = $('.sec3').offset().top;
		var vitri4 = $('.sec4').offset().top;
		var vitri5 = $('.sec5').offset().top;
		// alert(vitri5);

		if (vitri >= 300 && vitri <= vitri3) {
			$('.part1').addClass('change2');
		}
		else if(vitri <= 10) {
			$('.part1').removeClass('change2');
		}

		if (vitri >= 700 && vitri <= vitri4) {
			$('.part1').addClass('change3');
		}
		else if(vitri <= 300) {
			$('.part1').removeClass('change3');
		}

		if (vitri >= 1100 && vitri <= vitri5) {
			$('.part1').addClass('change4');
		}
		else if (vitri <= 700) {
			$('.part1').removeClass('change4');
		}

		if (vitri >= 1500) {
			$('.part1').addClass('change5');
		}
		else if(vitri <= 1100) {
			$('.part1').removeClass('change5');
		}

	});
});

$(document).ready(function() {
	$('#arrow-down').on('click', function(event) {
		var endlap = $('.sec5').offset().top;
		$('html,body').animate({scrollTop: endlap}, 2000, "easeInOutExpo");
		return false;
	})
});
