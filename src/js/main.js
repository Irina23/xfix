
if ($.browser.mobile) $('body').addClass('mobile');
if ($.browser.safari) $('body').addClass('safari');
if ($.browser.iphone || $.browser.ipad || $.browser.ipod ) $('body').addClass('ios');

$(document).ready( function () {
	$("form").validate();
	$('select').selectbox();

	$(".show_buttom").on('click', function(){
		var $this = $(this).closest(".list_category");
		$this.find(".list_url").addClass('open');
		$this.closest(".block_devices").addClass('open');
	});
	$(".hide_buttom").on('click', function(){
		var $this = $(this).closest(".list_category");
		$this.find(".list_url").removeClass('open');
		$this.closest(".block_devices").removeClass('open');
	});


	$(document).on('scroll', function () {
		var top = $(this).scrollTop();
		if (top > 20) {
			$(".header.fixed").show();
		} else if (top < 20 ) {
			$(".header.fixed").hide();
		}
	});

});

