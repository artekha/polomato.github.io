'use strict';

(function(){
	var body = document.body;
	var overlay = document.querySelector('.popup-overlay');

	var link = document.querySelectorAll('[data-component="popup"]');
	for(var i = 0; i < link.length; i++){
		link[i].addEventListener('click', render);
	}

	var close = document.querySelectorAll('.popup__close');
	for(var i = 0; i < close.length; i++){
		close[i].addEventListener('click', escape);
	}

	function render(event) {
		event.preventDefault();

		var target = event.currentTarget;
		var id = target.getAttribute('href').slice(1);
		var popup = document.getElementById(id);

		body.classList.toggle('scroll');
		overlay.classList.toggle('show');
		popup.classList.toggle('show');

		overlay.addEventListener('click', escapeOverlay);
		function escapeOverlay(event) {
			var target = event.target;

			if(target.classList.contains('popup-overlay')) {
				body.classList.remove('scroll');
				overlay.classList.remove('show');
				popup.classList.remove('show');
			}
		}
	}

	function escape(event) {
		event.preventDefault();

		var target = event.currentTarget;
		var popup = target.parentNode;

		body.classList.toggle('scroll');
		overlay.classList.toggle('show');
		popup.classList.toggle('show');
	}
}());