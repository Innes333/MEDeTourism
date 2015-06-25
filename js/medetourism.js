$(function(){

	var headerHeight = $('#header .atk-layout-cell').outerHeight();
	var actionsHeight = $('#header .atk-actions-xxlarge').outerHeight();

	$('#hero-text .atk-wrapper').css('padding-top', (headerHeight-actionsHeight)/2 + actionsHeight);

	$('select').selectmenu();

	$('.hospital-description p').readmore({
		collapsedHeight: 130,
		heightMargin: 8,
		moreLink: '<a href="#" class="atk-push h-caps atk-text-bold atk-size-micro"><span class="icon-plus-1"></span>&nbsp;Show More</a>',
		lessLink: '<a href="#" class="atk-push h-caps atk-text-bold atk-size-micro"><span class="icon-minus-1"></span>&nbsp;Show Less</a>'
	});

});

function verticalTabs() {
  event.preventDefault();
  $(this).parent().addClass("active");
  $(this).parent().siblings().removeClass("active");
  var tab = $(this).attr("href");
  $(".vertical-tab-content").not(tab).css("display", "none");
  $(tab).fadeIn();
}