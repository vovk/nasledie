$(function() {
	$(document).ready(function(){
	   $('').removeAttr('style');
	});
	jQuery(".icons-nav li a").click(function() {
		jQuery(".icons-nav li a").removeClass('active');
		jQuery(this).addClass('active');
	});
	jQuery(".form-tabs .sign").click(function() {
		jQuery(".form-tabs .tab").removeClass('active');
		jQuery(this).addClass('active')
		jQuery(".register").hide(300);
		jQuery(".enter").show(300);
	});
	jQuery(".form-tabs .registration").click(function() {
		jQuery(".form-tabs .tab").removeClass('active');
		jQuery(this).addClass('active')	
		jQuery(".enter").hide(300);
		jQuery(".register").show(300);
	});

   	function proverka1(input) {
		var value = input.value;
		var rep = /[,~!@#$%^&*=+|\?./_1234567890]/;
		if (rep.test(value)) {
			value = value.replace(rep, '');
			input.value = value;
		}
	}

	function proverka2(input) {
		var value = input.value;
		var rep = /[~!@#$%^&*=+|]/;
		if (rep.test(value)) {
			value = value.replace(rep, '');
			input.value = value;
		}
	}


	function proverka(input) {
		var value = input.value;
		var rep = /[-\.;":'a-zA-Zа-яА-Я]/;
		if (rep.test(value)) {
			value = value.replace(rep, '');
			input.value = value;
		}
	}


	function delspace(input){
		var value = input.value;
		var rep = /^[ ]+$/;
if (rep.test(value)) { // В значении только пробелы
	value = value.replace(rep, '');
	input.value = value;
}
}

//popup
//$(".top-order-button").magnificPopup();

//all block equal Height
//$(".cd-item").equalHeights();

//animated css Docs: https://daneden.github.io/animate.css/
//$(".item").animated("zoomInDown")

//owl-carousel 2  Docs: https://owlcarousel2.github.io/OwlCarousel2/

  
$('.slider').vertigo();     


$(".settings .submenu .myPage-link").click(function() {
	$(this).children('.second-submenu').slideToggle(300);
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$(this).children('a').children('.arrow').html('&#xE313;');
	}
	else {
		$(this).addClass('active');
			$(this).children('a').children('.arrow').html('&#xE316;');
	}

});

$(".navbar-nav .textSize .submenu a").click(function() {
		$(this).add('<i class="material-icons done">&#xE876;</i>');
	$(".navbar-nav .textSize .submenu a .done").remove();
});

$(".myPage-navigation li a").click(function() {
	if($(this).parent().hasClass('active') !== true){
		$(".myPage-navigation li").removeClass('active');
		$(this).parent().addClass('active');
	}
});

$(".calendar-month li a").click(function() {
	if($(this).parent().hasClass('active') !== true){
		$(".calendar-month li").removeClass('active');
		$(this).parent().addClass('active');
	}
});

$(".addPage .sect-addPage .page-descr a").click(function() {

	if ($(this).hasClass('active')) {
		$(this).removeClass('active')
		$(this).children().css('color', '#fff');
	}
 else {
 		$(this).addClass('active');
		$(this).children().css('color', '#79513f');
 }

});




$(".btn-pre").html('<i class="material-icons">&#xE316;</i>');
$(".btn-next").html('<i class="material-icons">&#xE313;</i>');

 var owl = $('.calendar-slider');
 owl.owlCarousel({
   loop: true,
   items: 12,
   nav: true,
   navText: '',
 });

$("#jquery_jplayer_1").jPlayer({
    ready: function () {
      $(this).jPlayer("setMedia", {
        mp3: "../audio/ACDC.mp3",
      });
    },
  });

$(".jp-controls .play").click(function() {
	$(".jp-controls .play").css('display', 'none');
	$(".jp-controls .pause").css('display', 'inline-block');
});

$(".jp-controls .pause").click(function() {
	$(".jp-controls .pause").css('display', 'none');
	$(".jp-controls .play").css('display', 'inline-block');
});

$(".btn-admin-menu").click(function() {
	$(".myPage .sect-main-content .myPage-articl .coustom-submenu").slideToggle(300);
});

$(".calendar-slider .owl-controls .owl-next").html('<i class="material-icons">&#xE315;</i>');
$(".calendar-slider .owl-controls .owl-prev").html('<i class="material-icons">&#xE314;</i>');
/* Mobile menu Docs:
 $(document).ready(function() {
      $("#menu").mmenu({
      	"extensions": [
            "effect-menu-slide",
            "effect-listitems-drop"
         ]
      });
});
*/

	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#callback-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	//$(".preloader-container").fadeOut();
});


