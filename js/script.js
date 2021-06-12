$(document).ready(function () {


	var hdr = $('.header-container').height();
	$(window).scroll(function () {
		var pos = $(this).scrollTop();
		if (pos >= hdr) {
			$('.header-container').addClass('active-hdr');
		}
		if (pos <= hdr) {
			$('.header-container').removeClass('active-hdr');
		}
	});

	$(".mobile-trigger").click(function () {
		$(".menu-box").addClass("active");
	});
	$(".close-menu").click(function () {
		$(".menu-box").removeClass("active");
	});

	if ($(window).width() < 768) {
		$(".menu-box ul li a").click(function () {
			$(".menu-box").removeClass("active");
		});

	}


	$('.logn span').on('click', function () {
		$('.logn').hide()
	})

	$(function () {
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 100
					}, 1000);
					return false;
				}
			}
		});
	});


	$('.cntnt').css({ 'display': 'none' });
	//$('.cntnt').slideUp();
	$('.divRow.first .cntnt').css({ 'display': 'block' });
	$('.divRow.first .top').addClass('actv');
	$('.top').click(function () {
		$('.top').removeClass('actv');
		$(this).addClass('actv');
		//$('.cntnt').slideUp();
		if ($(this).next('.cntnt').css('display') == 'block') {

			$('.cntnt').slideUp();
			$('.top').removeClass('actv');
		}
		else {
			$('.cntnt').slideUp();
			$(this).next('.cntnt').slideDown('.cntnt');
		}
	});



});


function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();

	setTimeout(function () {
		$('.clipbrd').addClass('active');
	}, 100)

	setTimeout(function () {
		$('.clipbrd').removeClass('active');
	}, 1400)

}

$('.nonClick').mouseover(function () {
	$('.addrss').addClass('active')
})

$(".check-box span input").prop("checked", false);
$(".check-box span input").click(function () {

	if ($(this).is(":checked")) {

		//checked
		$('.search-sec').addClass("selected");

	} else {
		//unchecked
		$('.search-sec').removeClass("selected");
	}

})

