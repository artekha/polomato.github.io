;$(document).ready(function(){
	'use strict';
	(function() {
		var controls = document.querySelectorAll('.scroll-controls');
		if (controls.length > 0) {
			for (var i = 0; i < controls.length; i++) {
				controls[i].addEventListener('click', scrollClick);
			}
			window.onscroll = function(e) {
				var body = document.body;
				body.querySelector('.down').classList.remove('scroll-control-disable');
				body.querySelector('.up').classList.remove('scroll-control-disable');
				/*var body = document.body;
				if (body.scrollTop + body.offsetHeight >= body.scrollHeight) {
					body.querySelector('.down').classList.add('scroll-control-disable');
				} else {
					body.querySelector('.down').classList.remove('scroll-control-disable');
				}
				if (body.scrollTop <= 0) {
					body.querySelector('.up').classList.add('scroll-control-disable');
				} else {
					body.querySelector('.up').classList.remove('scroll-control-disable');
				}*/
			}
			function scrollClick(e) {
				e.preventDefault();
				var target = e.target;
				var scrollingBlock = this.parentNode.querySelector('.scroll-block');
				if (target.classList.contains('down')) {
					this.querySelector('.up').classList.remove('scroll-control-disable');
					var scrollLength = document.body.scrollTop + document.body.offsetHeight;
					$('body').stop().animate({
						scrollTop: scrollLength
					}, 300);
					if (scrollingBlock.scrollTop + scrollingBlock.offsetHeight >= scrollingBlock.scrollHeight) {
						target.classList.add('scroll-control-disable');
					}

				} else if (target.classList.contains('up')) {
					this.querySelector('.down').classList.remove('scroll-control-disable');
					var scrollLength = document.body.scrollTop - document.body.offsetHeight;
					$('body').stop().animate({
						scrollTop: scrollLength
					}, 300);
					
					if ((scrollingBlock.scrollTop - scrollingBlock.offsetHeight) <= 0) {
						target.classList.add('scroll-control-disable');
					}

				}
			}
			document.body.onkeydown = function(e) {
				if (e.keyCode == 38) {
					e.preventDefault();
					var scrollingBlock = document.querySelector('.scroll-controls');
					var upButton = scrollingBlock.querySelector('.up');
					var downButton = scrollingBlock.querySelector('.down');
					downButton.classList.remove('scroll-control-disable');
					var scrollLength = document.body.scrollTop - document.body.offsetHeight;
					$('body').stop().animate({
						scrollTop: scrollLength
					}, 300);
					if ((scrollingBlock.scrollTop - scrollingBlock.offsetHeight) <= 0) {
						upButton.classList.add('scroll-control-disable');
					}
				} else if (e.keyCode == 40) {
					e.preventDefault();
					var scrollingBlock = document.querySelector('.scroll-controls');
					var upButton = scrollingBlock.querySelector('.up');
					var downButton = scrollingBlock.querySelector('.down');
					upButton.classList.remove('scroll-control-disable');
					var scrollLength = document.body.scrollTop + document.body.offsetHeight;
					$('body').stop().animate({
						scrollTop: scrollLength
					}, 300);
					if (scrollingBlock.scrollTop + scrollingBlock.offsetHeight >= scrollingBlock.scrollHeight) {
						downButton.classList.add('scroll-control-disable');
					}
				} else {
					return;
				}
			}
		}
	}());
});