
if ($.browser.mobile) $('body').addClass('mobile');
if ($.browser.safari) $('body').addClass('safari');
if ($.browser.iphone || $.browser.ipad || $.browser.ipod ) $('body').addClass('ios');

$(document).ready( function () {
	$("form").validate();
	$('select').selectbox();

	$(".show_buttom").on('click', function(){
		var $this = $(this).closest(".list_category");
		$this.find(".list_url").addClass('open');
	});
	$(".hide_buttom").on('click', function(){
		var $this = $(this).closest(".list_category");
		$this.find(".list_url").removeClass('open');
	});

});
