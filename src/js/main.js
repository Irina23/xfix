
if ($.browser.mobile) $('body').addClass('mobile');
if ($.browser.safari) $('body').addClass('safari');
if ($.browser.iphone || $.browser.ipad || $.browser.ipod ) $('body').addClass('ios');

$(document).ready( function () {
	$("form").validate();
	$('.city-select select, .phone-select select').selectbox();

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

	$(".link_more.show_buttom").on('click', function(){
		var $this = $(this).closest(".block-text");
		$this.find(".text-overflow").addClass('open');
		$this.addClass('open');
	});
	$(".link_more.hide_buttom").on('click', function(){
		var $this = $(this).closest(".block-text");
		$this.find(".text-overflow").removeClass('open');
		$this.removeClass('open');
	});




	$(document).on('scroll', function () {
		var top = $(this).scrollTop();
		if (top > 20) {
			$(".header.fixed").show();
		} else if (top < 20 ) {
			$(".header.fixed").hide();
		}
	});



	//modal form
	var overlay = $('#overlay');
	var open_modal = $('.open_modal');
	var close = $('.modal_close, #overlay');
	var modal = $('.modal_div');


	if($(modal).hasClass('show')){
		overlay.fadeIn(100,
			function(){

				$('body').addClass('no-scroll');
			});

	}

	open_modal.click( function(event){
		event.preventDefault();
		var div = $(this).attr('href');
		overlay.fadeIn(400,
			function(){
				$(div)
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
				$('body').addClass('no-scroll');
			});
	});

	close.click( function(){
		modal
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					overlay.fadeOut(400);
					$(".message_modal").removeClass("show");
					$('body').removeClass('no-scroll');
				}
			);
	});


	$(this).keydown(function(eventObject){
		if (eventObject.which == 27)
			modal.animate({opacity: 0}, 200,
				function(){
					$(this).css('display', 'none');
					overlay.fadeOut(400);
					$(".message_modal").removeClass('show');
					$('body').removeClass('no-scroll');

				}
			);
	});


	$('#popup1 form').change(function () {
		//console.log($('select[name="device"]').attr('value'));
		//console.log($('select[name="city"]').attr('value'));
		if((($('select[name="device"]').val() !== '0' ) || ($('select[name="device"]').val() !== null )) && (($('select[name="city"]').val() !== '0' )) || ($('select[name="city"]').val() !== null )){
			$('input[type="submit"]').show();
		}
	});


	$(".block_model_repair .device_name > span").on('click', function(){
		$(this).next().slideToggle();
	});


	$(".info-tooltip .icon-tooltip").on('click', function(){
		$(this).next().toggleClass('open');
	});



	//rating
	$('.rating').barrating({
	 	theme: ''
	 });
	 $('.rating_show').barrating({
		 theme: '',
		 readonly: true
	 });

});

