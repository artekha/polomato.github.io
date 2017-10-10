// Sticky
$(document).ready(function() {
	if ($(window).width() > '660'){
		$('.sidebar-wrapper').sticky({topSpacing: 90, bottomSpacing: 90});
		if($(window).width() > '1580') {
			$('.shop-info').sticky({topSpacing: 90, bottomSpacing: 90});
		} else {
			$('.shop-info').unstick();
		}
	} else {
		$('.sidebar-wrapper').unstick();
	}
	// Resize check
	$(window).resize(function() {
		if ($(window).width() > '660'){
			$('.sidebar-wrapper').sticky({topSpacing: 90, bottomSpacing: 90});
			if($(window).width() > '1580') {
				$('.shop-info').sticky({topSpacing: 90, bottomSpacing: 90});
			} else {
				$('.shop-info').unstick();
			}
		} else {
			$('.sidebar-wrapper').unstick();
		}
	});
});

// Animation
$(document).ready(function() {
	$('.w-show').each(function(i) {
		$(this).delay((i++) * 800).animate({marginLeft:'+=100%', opacity: '1'}, 1000);
	});
	$('.w-show-car').delay(2400).animate({marginLeft:'-464px', opacity: '1'}, 1000);
});

// Menu
$(document).ready(function() {
	// Show
	$('.shape').click(function() {
		$('body').toggleClass('scroll');
		$('.footer__menu').toggleClass('show');
		// Resize
		$(window).resize(function() {
			if ($(window).width() > '1220'){
				$('body').removeClass('scroll');
			}
		});
	});
	// Close
	$('.footer__menu-close').click(function() {
		$('body').toggleClass('scroll');
		$('.footer__menu').toggleClass('show');
	});
});

// Sidebar logic
$(document).ready(function() {
	var steps = 1;
	var stepsP = 0;
	var current = 1;

	// Steps
	$('.steps-link').click(function(){
		// Translate sidebar-steps
		if(steps == 1 || stepsP == 1) {
			var first = $('.sidebar-steps');
			first.animate({right: first.width() + 'px'}, 500);
		}

		// Step 1
		if($(this).hasClass('link-1') && (steps == 1 || steps == 2) && stepsP == 0) {
			// Change structure for document
			$('.welcome').addClass('short');
			$('.car').addClass('short');
			$('.grid-sidebar-right').addClass('short');
			$('.grid-content').addClass('short');
			if($(window).width() < '915') {
				$('.grid.full .grid-sidebar-right.short .sidebar-wrapper').unstick();
			}

			// Current page
			current = 2;

			// Change level
			steps = 2;

			// Enabled active elements
			$('.sidebar-steps .list-1 li').each(function(i, elem) {
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
				}
			});
			$(this).parent().addClass('active');

			// Sort first list
			var firstList = $('.step-1 .sb-list');
			var firstListItem = firstList.children('li').get();
			firstListItem.sort(function(a, b) {
				return ($(a).hasClass('active'))
				? -1 : ($(b).hasClass('active'))
				? 1 : 0;
			})
			$.each(firstListItem, function(i, item) { firstList.append(item); });

			// Show step 2
			$('.sidebar-step.step-2').css('opacity', '1');
			$('.sidebar-step.step-2').css('transform', 'scale(1)');

			// Pagination
			$('.pagination').removeClass('page-1');
			$('.pagination').addClass('page-2');
		}
		// Step 1 [Page]
		if($(this).hasClass('link-1') && (stepsP == 1 || stepsP == 2)) {
			// Change structure for document
			$('.welcome').addClass('short');
			$('.car').addClass('short');
			$('.grid-sidebar-right').addClass('short');
			$('.grid-content').addClass('short');
			if($(window).width() < '915') {
				$('.grid.full .grid-sidebar-right.short .sidebar-wrapper').unstick();
			}

			// Current page
			current = 2;

			// Change level
			stepsP = 2;

			// Active element list
			$('.sidebar-steps .list-1 li').each(function(i, elem) {
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
				}
			});

			$(this).parent().addClass('active');

			// Sort first list
			var firstList = $('.step-1 .sb-list');
			var firstListItem = firstList.children('li').get();
			firstListItem.sort(function(a, b) {
				return ($(a).hasClass('active'))
				? -1 : ($(b).hasClass('active'))
				? 1 : 0;
			})
			$.each(firstListItem, function(i, item) { firstList.append(item); });

			// Remove hide class
			$('.sidebar-step.step-2').removeClass('hide');
			$('.sidebar-step.step-3').removeClass('hide');

			// Show step 2
			$('.sidebar-step.step-2').css('opacity', '1');
			$('.sidebar-step.step-2').css('transform', 'scale(1)');

			// Pagination
			$('.pagination').removeClass('page-1');
			$('.pagination').addClass('page-2');
		}

		// Step 2
		if($(this).hasClass('link-2') && steps == 2  && stepsP == 0) {
			// Current page
			current = 3;

			// Change level
			steps = 3;

			// Active element list
			$(this).parent().addClass('active');

			// Sort second list
			var secondList = $('.step-2 .sb-list');
			var secondListItem = secondList.children('li').get();
			secondListItem.sort(function(a, b) {
				return ($(a).hasClass('active'))
				? -1 : ($(b).hasClass('active'))
				? 1 : 0;
			})
			$.each(secondListItem, function(i, item) { secondList.append(item); });

			// Hide element in first list
			$('.sidebar-steps .list-1 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).hide();
				}
			});

			// Clone second list
			$('.step-2 .sb-list').clone().appendTo('.sidebar-steps.step-1 .sidebar-content');
			$('.sidebar-steps.step-1 .list-2 li a').click(function() {
				if($(this).hasClass('link-2') && (current == 2 || current == 3)) {
					// Enabled active elements
					$('.sidebar-steps .list-2 li').each(function(i, elem) {
						if($(this).hasClass('active')) {
							$(this).removeClass('active');
						}
					});
					$(this).parent().addClass('active');
					// Sort second list
					var secondList = $('.sidebar-steps .list-2');
					var secondListItem = secondList.children('li').get();
					secondListItem.sort(function(a, b) {
						return ($(a).hasClass('active'))
						? -1 : ($(b).hasClass('active'))
						? 1 : 0;
					})
					$.each(secondListItem, function(i, item) { secondList.append(item); });
				}
			});

			// Show step 3
			$('.sidebar-step.step-3').css('display', 'block');
			$('.sidebar-step.step-3').css('opacity', '1');
			$('.sidebar-step.step-3').css('transform', 'scale(1)');

			// Hide step 2
			$('.sidebar-step.step-2').addClass('hide');

			// Pagination
			$('.pagination').removeClass('page-2');
			$('.pagination').addClass('page-3');
		}
		// Step 2 [Page]
		if($(this).hasClass('link-2') && stepsP == 2) {
			// Current page
			current = 3;

			// Change level
			stepsP = 3;

			// Active element list
			$(this).parent().addClass('active');

			// Sort second list
			var secondList = $('.step-2 .sb-list');
			var secondListItem = secondList.children('li').get();
			secondListItem.sort(function(a, b) {
				return ($(a).hasClass('active'))
				? -1 : ($(b).hasClass('active'))
				? 1 : 0;
			})
			$.each(secondListItem, function(i, item) { secondList.append(item); });

			// Hide element in first list
			$('.sidebar-steps .list-1 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).hide();
				}
			});

			// Clone second list
			$('.step-2 .sb-list').clone().appendTo('.sidebar-steps.step-1 .sidebar-content');
			$('.sidebar-steps.step-1 .list-2 li a').click(function() {
				if($(this).hasClass('link-2') && (current == 2 || current == 3)) {
					// Enabled active elements
					$('.sidebar-steps .list-2 li').each(function(i, elem) {
						if($(this).hasClass('active')) {
							$(this).removeClass('active');
						}
					});
					$(this).parent().addClass('active');
					// Sort second list
					var secondList = $('.sidebar-steps .list-2');
					var secondListItem = secondList.children('li').get();
					secondListItem.sort(function(a, b) {
						return ($(a).hasClass('active'))
						? -1 : ($(b).hasClass('active'))
						? 1 : 0;
					})
					$.each(secondListItem, function(i, item) { secondList.append(item); });
				}
			});

			// Show step 3
			$('.sidebar-step.step-3').css('display', 'block');
			$('.sidebar-step.step-3').css('opacity', '1');
			$('.sidebar-step.step-3').css('transform', 'scale(1)');

			// Hide step 2
			$('.sidebar-step.step-2').addClass('hide');

			// Pagination
			$('.pagination').removeClass('page-2');
			$('.pagination').addClass('page-3');
		}

		// Step 3
		if($(this).hasClass('link-3') && steps == 3  && stepsP == 0) {
			// Current page
			current = 4;

			// Change level
			steps = 4;

			// Active element list
			$(this).parent().addClass('active');

			// Sort list
			var thirdList = $('.step-3 .sb-list');
			var thirdListItem = thirdList.children('li').get();
			thirdListItem.sort(function(a, b) {
				return ($(a).hasClass('active'))
				? -1 : ($(b).hasClass('active'))
				? 1 : 0;
			})
			$.each(thirdListItem, function(i, item) { thirdList.append(item); });

			// Hide element in second list
			$('.sidebar-steps .list-2 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).hide();
				}
			});

			// Clone list
			$('.step-3 .sb-list').clone().appendTo('.sidebar-steps.step-1 .sidebar-content');
			$('.sidebar-steps.step-1 .list-3 li a').click(function() {
				if($(this).hasClass('link-3') && (current == 3 || current == 4)) {
					// Enabled active elements
					$('.sidebar-steps .list-3 li').each(function(i, elem) {
						if($(this).hasClass('active')) {
							$(this).removeClass('active');
						}
					});
					$(this).parent().addClass('active');
					// Sort second list
					var secondList = $('.sidebar-steps .list-3');
					var secondListItem = secondList.children('li').get();
					secondListItem.sort(function(a, b) {
						return ($(a).hasClass('active'))
						? -1 : ($(b).hasClass('active'))
						? 1 : 0;
					})
					$.each(secondListItem, function(i, item) { secondList.append(item); });
				}
			});

			// Show step 4
			$('.sidebar-step.step-4').css('display', 'block');
			$('.sidebar-step.step-4').css('opacity', '1');
			$('.sidebar-step.step-4').css('transform', 'scale(1)');
			// Hide step 3
			$('.sidebar-step.step-3').addClass('hide');

			// Pagination
			$('.pagination').removeClass('page-3');
			$('.pagination').addClass('page-4');
		}
		// Step 3 [Page]
		if($(this).hasClass('link-3') && stepsP == 3) {
			// Current page
			current = 4;

			// Change level
			stepsP = 4;

			// Active element list
			$(this).parent().addClass('active');

			// Sort list
			var thirdList = $('.step-3 .sb-list');
			var thirdListItem = thirdList.children('li').get();
			thirdListItem.sort(function(a, b) {
				return ($(a).hasClass('active'))
				? -1 : ($(b).hasClass('active'))
				? 1 : 0;
			})
			$.each(thirdListItem, function(i, item) { thirdList.append(item); });

			// Hide element in second list
			$('.sidebar-steps .list-2 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).hide();
				}
			});

			// Clone list
			$('.step-3 .sb-list').clone().appendTo('.sidebar-steps.step-1 .sidebar-content');
			$('.sidebar-steps.step-1 .list-3 li a').click(function() {
				if($(this).hasClass('link-3') && (current == 3 || current == 4)) {
					// Enabled active elements
					$('.sidebar-steps .list-3 li').each(function(i, elem) {
						if($(this).hasClass('active')) {
							$(this).removeClass('active');
						}
					});
					$(this).parent().addClass('active');
					// Sort second list
					var secondList = $('.sidebar-steps .list-3');
					var secondListItem = secondList.children('li').get();
					secondListItem.sort(function(a, b) {
						return ($(a).hasClass('active'))
						? -1 : ($(b).hasClass('active'))
						? 1 : 0;
					})
					$.each(secondListItem, function(i, item) { secondList.append(item); });
				}
			});

			// Show step 4
			$('.sidebar-step.step-4').css('display', 'block');
			$('.sidebar-step.step-4').css('opacity', '1');
			$('.sidebar-step.step-4').css('transform', 'scale(1)');

			// Hide step 3
			$('.sidebar-step.step-3').addClass('hide');

			// Pagination
			$('.pagination').removeClass('page-3');
			$('.pagination').addClass('page-4');
		}

		// Step 4
		if($(this).hasClass('link-4') && steps == 4  && stepsP == 0) {
			// Change structure for document
			$('.welcome').removeClass('short');
			$('.car').removeClass('short');
			$('.grid-sidebar-right').removeClass('short');
			$('.grid-content').removeClass('short');

			// Current page
			current = 2;

			// Change level
			steps = 5;

			// Show resultat name
			$('.sidebar-steps .sidebar-title').text('ЗАЯВКА НА РЕМОНТ');

			// Active element list
			$(this).parent().addClass('active');

			// Sort list
			var fourList = $('.step-4 .sb-list');
			var fourListItem = fourList.children('li').get();
			fourListItem.sort(function(a, b) {
				return ($(a).hasClass('active'))
				? -1 : ($(b).hasClass('active'))
				? 1 : 0;
			})
			$.each(fourListItem, function(i, item) { fourList.append(item); });

			// Hide element in third list
			$('.sb-list.list-3 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).hide();
				}
			});

			// Clone list
			$('.step-4 .sb-list').clone().appendTo('.sidebar-steps.step-1 .sidebar-content');

			// Hide element in four list
			$('.sidebar-steps .list-4 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).hide();
				}
			});

			// Show result
			$('.sidebar-steps').addClass('steps-result-show');
			$('.steps-result').show();

			// Translate result to right
			$('.sidebar-steps').animate({right: '0px'}, 500);
			// Show result and hide second sidebar
			$('.sidebar-step.step-4').css('opacity', '1');
			$('.sidebar-step.step-4').css('transform', 'scale(0.1)');

			// Pagination
			$('.pagination').hide();
		}
		// Step 4 [Page]
		if($(this).hasClass('link-4') && stepsP == 4) {
			// Change structure for document
			$('.welcome').removeClass('short');
			$('.car').removeClass('short');
			$('.grid-sidebar-right').removeClass('short');
			$('.grid-content').removeClass('short');

			// Current page
			current = 5;

			// Change level
			stepsP = 5;

			// Show resultat name
			$('.sidebar-steps .sidebar-title').text('ЗАЯВКА НА РЕМОНТ');

			// Active element list
			$(this).parent().addClass('active');

			// Sort list
			var fourList = $('.step-4 .sb-list');
			var fourListItem = fourList.children('li').get();
			fourListItem.sort(function(a, b) {
				return ($(a).hasClass('active'))
				? -1 : ($(b).hasClass('active'))
				? 1 : 0;
			})
			$.each(fourListItem, function(i, item) { fourList.append(item); });

			// Hide element in third list
			$('.sb-list.list-3 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).hide();
				}
			});

			// Clone list
			$('.step-4 .sb-list').clone().appendTo('.sidebar-steps.step-1 .sidebar-content');

			// Hide element in four list
			$('.sidebar-steps .list-4 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).hide();
				}
			});

			// Show result
			$('.sidebar-steps').addClass('steps-result-show');
			$('.steps-result').show();

			// Translate result to right
			$('.sidebar-steps').animate({right: '0px'}, 500);
			// Show result and hide second sidebar
			$('.sidebar-step.step-4').css('opacity', '1');
			$('.sidebar-step.step-4').css('transform', 'scale(0.1)');

			// Pagination
			$('.pagination').hide();
		}

		// Pages
		$('.link-page-1').click(function(){
			$('.pagination').removeClass('offset');
			if(current == 1) { return false; }
			
			// Current page
			current = 1;

			// Change level
			stepsP = 1;

			// Lists on first page
			$('.sidebar-steps .list-2').detach();
			$('.sidebar-steps .list-3').detach();
			$('.sidebar-steps .list-4').detach();

			// Show element in first list
			$('.sidebar-steps .list-1 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).show();
				}
			});
			$('.list-2 li').each(function(i, elem) {
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
				}
			});
			$('.list-3 li').each(function(i, elem) {
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
				}
			});

			// Pagination
			$('.pagination').removeClass('page-1');
			$('.pagination').removeClass('page-2');
			$('.pagination').removeClass('page-3');
			$('.pagination').removeClass('page-4');
			$('.pagination').addClass('page-1');

			// Translate result to right
			$('.sidebar-steps').animate({right: '0px'}, 500);
			// Show result and hide second sidebar
			// 2
			$('.sidebar-step.step-2').css('opacity', '1');
			$('.sidebar-step.step-2').css('transform', 'scale(0.1)');
			// 3
			$('.sidebar-step.step-3').css('opacity', '1');
			$('.sidebar-step.step-3').css('transform', 'scale(0.1)');
			// 4
			$('.sidebar-step.step-4').css('opacity', '1');
			$('.sidebar-step.step-4').css('transform', 'scale(0.1)');

			function defaultState() {
				// 2
				$('.sidebar-step.step-2').css('opacity', '0');
				$('.sidebar-step.step-2').css('transform', 'scale(0.1)');
				$('.sidebar-step.step-2').removeClass('hide');
				// 3
				$('.sidebar-step.step-3').css('opacity', '0');
				$('.sidebar-step.step-3').css('transform', 'scale(1)');
				// 4
				$('.sidebar-step.step-4').css('opacity', '0');
				$('.sidebar-step.step-4').css('transform', 'scale(1)');
			}
			setTimeout(defaultState, 500);
		});
		$('.link-page-2').click(function(){
			if(current <= 2) { return false; }

			// Current page
			current = 2;

			// Change level
			stepsP = 2;

			// Lists on first page
			$('.sidebar-steps .list-2').detach();
			$('.sidebar-steps .list-3').detach();
			$('.sidebar-steps .list-4').detach();

			// Show element in first list
			$('.sidebar-steps .list-1 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).show();
				}
			});
			$('.list-2 li').each(function(i, elem) {
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
				}
			});
			$('.list-3 li').each(function(i, elem) {
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
				}
			});

			// Pagination
			$('.pagination').removeClass('page-1');
			$('.pagination').removeClass('page-2');
			$('.pagination').removeClass('page-3');
			$('.pagination').removeClass('page-4');
			$('.pagination').addClass('page-2');

			// Disabled second list
			$('.sidebar-step.step-2').removeClass('hide');
			$('.sidebar-step.step-3').removeClass('hide');
		});
		$('.link-page-3').click(function(){
			if(current <= 3) { return false; }

			// Current page
			current = 3;

			// Change level
			stepsP = 3;

			// Lists on first page
			$('.sidebar-steps .list-3').detach();
			$('.sidebar-steps .list-4').detach();

			// Show element in first list
			$('.sidebar-steps .list-2 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).show();
				}
			});
			$('.list-3 li').each(function(i, elem) {
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
				}
			});

			// Pagination
			$('.pagination').removeClass('page-1');
			$('.pagination').removeClass('page-2');
			$('.pagination').removeClass('page-3');
			$('.pagination').removeClass('page-4');
			$('.pagination').addClass('page-3');

			// Disabled second list
			$('.sidebar-step.step-3').removeClass('hide');
		});

		if($('.sidebar-steps .pagination').hasClass('page-1')) {
			$('.pagination').removeClass('offset');
		} else {
			$('.pagination').addClass('offset');
		}

	});

	// Steps [ SHOP ]
	$('.steps-link-shop').click(function(){
		// Translate sidebar-steps
		if(steps == 1 || stepsP == 1) {
			var first = $('.sidebar-steps');
			first.animate({right: first.width() + 'px'}, 500);
		}

		// Step 1
		if($(this).hasClass('link-1') && (steps == 1 || steps == 2) && stepsP == 0) {
			// Change structure for document
			$('.welcome').addClass('short');
			$('.car').addClass('short');
			$('.grid-sidebar-right').addClass('short');
			$('.grid-content').addClass('short');
			if($(window).width() < '915') {
				$('.grid.full .grid-sidebar-right.short .sidebar-wrapper').unstick();
			}
			console.log('step 1');
			// Current page
			current = 2;

			// Change level
			steps = 2;

			$('.sidebar-steps .list-1 li').each(function(i, elem) {
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
				}
			});
			$(this).parent().addClass('active');

			// Sort first list
			var firstList = $('.step-1 .sb-list');
			var firstListItem = firstList.children('li').get();
			firstListItem.sort(function(a, b) {
				return ($(a).hasClass('active'))
				? -1 : ($(b).hasClass('active'))
				? 1 : 0;
			})
			$.each(firstListItem, function(i, item) { firstList.append(item); });

			// Show step 2
			$('.sidebar-step.step-2').css('opacity', '1');
			$('.sidebar-step.step-2').css('transform', 'scale(1)');

			// Pagination
			$('.pagination').removeClass('page-1');
			$('.pagination').addClass('page-2');
		}
		// Step 1 [Page]
		if($(this).hasClass('link-1') && (stepsP == 1 || stepsP == 2)) {
			// Change structure for document
			$('.welcome').addClass('short');
			$('.car').addClass('short');
			$('.grid-sidebar-right').addClass('short');
			$('.grid-content').addClass('short');
			if($(window).width() < '915') {
				$('.grid.full .grid-sidebar-right.short .sidebar-wrapper').unstick();
			}
			console.log('step 1 page');
			// Current page
			current = 2;

			// Change level
			stepsP = 2;

			// Active element list
			$('.sidebar-steps .list-1 li').each(function(i, elem) {
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
				}
			});

			$(this).parent().addClass('active');

			// Sort first list
			var firstList = $('.step-1 .sb-list');
			var firstListItem = firstList.children('li').get();
			firstListItem.sort(function(a, b) {
				return ($(a).hasClass('active'))
				? -1 : ($(b).hasClass('active'))
				? 1 : 0;
			})
			$.each(firstListItem, function(i, item) { firstList.append(item); });

			// Remove hide class
			$('.sidebar-step.step-2').removeClass('hide');
			$('.sidebar-step.step-3').removeClass('hide');

			// Show step 2
			$('.sidebar-step.step-2').css('opacity', '1');
			$('.sidebar-step.step-2').css('transform', 'scale(1)');

			// Pagination
			$('.pagination').removeClass('page-1');
			$('.pagination').addClass('page-2');
		}

		// Step 2
		if($(this).hasClass('link-2') && steps == 2  && stepsP == 0) {
			console.log('step 2');
			// Current page
			current = 3;

			// Change level
			steps = 3;

			// Active element list
			$(this).parent().addClass('active');

			// Sort second list
			var secondList = $('.step-2 .sb-list');
			var secondListItem = secondList.children('li').get();
			secondListItem.sort(function(a, b) {
				return ($(a).hasClass('active'))
				? -1 : ($(b).hasClass('active'))
				? 1 : 0;
			})
			$.each(secondListItem, function(i, item) { secondList.append(item); });

			// Hide element in first list
			$('.sidebar-steps .list-1 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).hide();
				}
			});

			// Clone second list
			$('.step-2 .sb-list').clone().appendTo('.sidebar-steps.step-1 .sidebar-content');
			$('.sidebar-steps.step-1 .list-2 li a').click(function() {
				if($(this).hasClass('link-2') && (current == 2 || current == 3)) {
					// Enabled active elements
					$('.sidebar-steps .list-2 li').each(function(i, elem) {
						if($(this).hasClass('active')) {
							$(this).removeClass('active');
						}
					});
					$(this).parent().addClass('active');
					// Sort second list
					var secondList = $('.sidebar-steps .list-2');
					var secondListItem = secondList.children('li').get();
					secondListItem.sort(function(a, b) {
						return ($(a).hasClass('active'))
						? -1 : ($(b).hasClass('active'))
						? 1 : 0;
					})
					$.each(secondListItem, function(i, item) { secondList.append(item); });
				}
			});

			// Show step 3
			$('.sidebar-step.step-3').css('display', 'block');
			$('.sidebar-step.step-3').css('opacity', '1');
			$('.sidebar-step.step-3').css('transform', 'scale(1)');

			// Hide step 2
			$('.sidebar-step.step-2').addClass('hide');

			// Pagination
			$('.pagination').removeClass('page-2');
			$('.pagination').addClass('page-3');
		}
		// Step 2 [Page]
		if($(this).hasClass('link-2') && stepsP == 2) {
			console.log('step 2 page');
			// Current page
			current = 3;

			// Change level
			stepsP = 3;

			// Active element list
			$(this).parent().addClass('active');

			// Sort second list
			var secondList = $('.step-2 .sb-list');
			var secondListItem = secondList.children('li').get();
			secondListItem.sort(function(a, b) {
				return ($(a).hasClass('active'))
				? -1 : ($(b).hasClass('active'))
				? 1 : 0;
			})
			$.each(secondListItem, function(i, item) { secondList.append(item); });

			// Hide element in first list
			$('.sidebar-steps .list-1 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).hide();
				}
			});

			// Clone second list
			$('.step-2 .sb-list').clone().appendTo('.sidebar-steps.step-1 .sidebar-content');
			$('.sidebar-steps.step-1 .list-2 li a').click(function() {
				if($(this).hasClass('link-2') && (current == 2 || current == 3)) {
					// Enabled active elements
					$('.sidebar-steps .list-2 li').each(function(i, elem) {
						if($(this).hasClass('active')) {
							$(this).removeClass('active');
						}
					});
					$(this).parent().addClass('active');
					// Sort second list
					var secondList = $('.sidebar-steps .list-2');
					var secondListItem = secondList.children('li').get();
					secondListItem.sort(function(a, b) {
						return ($(a).hasClass('active'))
						? -1 : ($(b).hasClass('active'))
						? 1 : 0;
					})
					$.each(secondListItem, function(i, item) { secondList.append(item); });
				}
			});

			// Show step 3
			$('.sidebar-step.step-3').css('display', 'block');
			$('.sidebar-step.step-3').css('opacity', '1');
			$('.sidebar-step.step-3').css('transform', 'scale(1)');

			// Hide step 2
			$('.sidebar-step.step-2').addClass('hide');

			// Pagination
			$('.pagination').removeClass('page-2');
			$('.pagination').addClass('page-3');
		}

		// Step 3
		if($(this).hasClass('link-3') && steps == 3  && stepsP == 0) {
			// Change structure for document
			$('.welcome').removeClass('short');
			$('.car').removeClass('short');
			$('.grid-sidebar-right').removeClass('short');
			$('.grid-content').removeClass('short');
			console.log('step 3');
			// Current page
			current = 4;

			// Change level
			steps = 4;

			// Active element list
			$(this).parent().addClass('active');

			// Sort list
			var thirdList = $('.step-3 .sb-list');
			var thirdListItem = thirdList.children('li').get();
			thirdListItem.sort(function(a, b) {
				return ($(a).hasClass('active'))
				? -1 : ($(b).hasClass('active'))
				? 1 : 0;
			})
			$.each(thirdListItem, function(i, item) { thirdList.append(item); });

			// Hide element in second list
			$('.sidebar-steps .list-2 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).hide();
				}
			});

			// Clone list
			$('.step-3 .sb-list').clone().appendTo('.sidebar-steps.step-1 .sidebar-content');

			// Hide element in third list
			$('.sidebar-steps .list-3 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).hide();
				}
			});

			// Show result
			$('.sidebar-steps').addClass('steps-result-show');
			$('.steps-result').show();

			// Translate result to right
			$('.sidebar-steps').animate({right: '0px'}, 500);
			// Show result and hide second sidebar
			$('.sidebar-step.step-3').css('opacity', '1');
			$('.sidebar-step.step-3').css('transform', 'scale(0.1)');

			// Pagination
			$('.pagination').hide();
		}
		// Step 3 [Page]
		if($(this).hasClass('link-3') && stepsP == 3) {
			// Change structure for document
			$('.welcome').removeClass('short');
			$('.car').removeClass('short');
			$('.grid-sidebar-right').removeClass('short');
			$('.grid-content').removeClass('short');
			console.log('step 3 page');
			// Current page
			current = 4;

			// Change level
			stepsP = 4;

			// Active element list
			$(this).parent().addClass('active');

			// Sort list
			var thirdList = $('.step-3 .sb-list');
			var thirdListItem = thirdList.children('li').get();
			thirdListItem.sort(function(a, b) {
				return ($(a).hasClass('active'))
				? -1 : ($(b).hasClass('active'))
				? 1 : 0;
			})
			$.each(thirdListItem, function(i, item) { thirdList.append(item); });

			// Hide element in second list
			$('.sidebar-steps .list-2 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).hide();
				}
			});

			// Clone list
			$('.step-3 .sb-list').clone().appendTo('.sidebar-steps.step-1 .sidebar-content');

			// Hide element in third list
			$('.sidebar-steps .list-3 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).hide();
				}
			});

			// Show result
			$('.sidebar-steps').addClass('steps-result-show');
			$('.steps-result').show();

			// Translate result to right
			$('.sidebar-steps').animate({right: '0px'}, 500);
			// Show result and hide second sidebar
			$('.sidebar-step.step-3').css('opacity', '1');
			$('.sidebar-step.step-3').css('transform', 'scale(0.1)');

			// Pagination
			$('.pagination').hide();
		}

		// Pages
		$('.link-page-1').click(function(){
			$('.pagination').removeClass('offset');
			if(current == 1) { return false; }
			
			// Current page
			current = 1;

			// Change level
			stepsP = 1;

			// Lists on first page
			$('.sidebar-steps .list-2').detach();
			$('.sidebar-steps .list-3').detach();

			// Show element in first list
			$('.sidebar-steps .list-1 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).show();
				}
			});
			$('.list-2 li').each(function(i, elem) {
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
				}
			});
			$('.list-3 li').each(function(i, elem) {
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
				}
			});

			// Pagination
			$('.pagination').removeClass('page-1');
			$('.pagination').removeClass('page-2');
			$('.pagination').removeClass('page-3');
			$('.pagination').addClass('page-1');

			// Translate result to right
			$('.sidebar-steps').animate({right: '0px'}, 500);
			// Show result and hide second sidebar
			// 2
			$('.sidebar-step.step-2').css('opacity', '1');
			$('.sidebar-step.step-2').css('transform', 'scale(0.1)');
			// 3
			$('.sidebar-step.step-3').css('opacity', '1');
			$('.sidebar-step.step-3').css('transform', 'scale(0.1)');

			function defaultState() {
				// 2
				$('.sidebar-step.step-2').css('opacity', '0');
				$('.sidebar-step.step-2').css('transform', 'scale(0.1)');
				$('.sidebar-step.step-2').removeClass('hide');
				// 3
				$('.sidebar-step.step-3').css('opacity', '0');
				$('.sidebar-step.step-3').css('transform', 'scale(1)');
			}
			setTimeout(defaultState, 500);
		});
		$('.link-page-2').click(function(){
			if(current <= 2) { return false; }

			// Current page
			current = 2;

			// Change level
			stepsP = 2;

			// Lists on first page
			$('.sidebar-steps .list-2').detach();
			$('.sidebar-steps .list-3').detach();
			$('.sidebar-steps .list-4').detach();

			// Show element in first list
			$('.sidebar-steps .list-1 li').each(function(i, elem) {
				if(!$(this).hasClass('active')) {
					$(this).show();
				}
			});
			$('.list-2 li').each(function(i, elem) {
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
				}
			});
			$('.list-3 li').each(function(i, elem) {
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
				}
			});

			// Pagination
			$('.pagination').removeClass('page-1');
			$('.pagination').removeClass('page-2');
			$('.pagination').removeClass('page-3');
			$('.pagination').addClass('page-2');

			// Disabled second list
			$('.sidebar-step.step-2').removeClass('hide');
			$('.sidebar-step.step-3').removeClass('hide');
		});

		if($('.sidebar-steps .pagination').hasClass('page-1')) {
			$('.pagination').removeClass('offset');
		} else {
			$('.pagination').addClass('offset');
		}

	});

	$(window).resize(function() {
		if(steps > 1 && steps <= 4) {
			var first = $('.sidebar-steps');
			first.animate({right: first.width() + 'px'}, 0);
		}
	});

});

// Sidebar size
$(document).ready(function() {
	var firstContent = $('.sidebar-steps .sidebar-content'),
			secondContent = $('.sidebar-step .sidebar-content');
	secondContent.css({
		'height': (firstContent.outerHeight() + 20) + 'px'
	});

	// Resize check
	$(window).resize(function() {
		var firstContent = $('.sidebar-steps .sidebar-content'),
				secondContent = $('.sidebar-step .sidebar-content');
		secondContent.css({
			'height': (firstContent.outerHeight() + 20) + 'px'
		});
	});
});