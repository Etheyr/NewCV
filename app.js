(function() {

	'use strict';

	var app = {

		init: function(){
			this.smoothScroll();

		},
		smoothScroll: function(){
			$('.parthead').on('click', function() { 

				var page = $(this).attr('href');
				var speed = 750;
				$('html, body').animate( { scrollTop: $(page).offset().top}, speed ); 
				return false;
			});
			$('.partskill').on('click', function() {
				var page = $(this).attr('href');
				var speed = 750;
				$('html, body').animate( { scrollTop: $(page).offset().top}, speed ); 
				return false;
			});
			$('.partform').on('click', function() {
				var page = $(this).attr('href');
				var speed = 750;
				$('html, body').animate( { scrollTop: $(page).offset().top}, speed ); 
				return false;
			});
			
		}
	}

	$(document).ready(function() {
		app.init();
	});
})();
