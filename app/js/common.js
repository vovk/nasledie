$(function() {
	$(document).ready(function(){
		
		//убрал box-shadow  .admin-page 
		// if($('li').hasClass('focus')){
		// 	$('.admin-page').css('min-height', '875px');
		// }
		// else
		// 	$('.admin-page').css('min-height', '0');
		

		//add input with live-search
		$('li.focus:nth-of-type(1)').append("<div id='live-search'><input type='text' placeholder='Каширский-Дмитриев Игорь Константинович'><div class='wrap-block clearfix'><div class='img-wrapper'><img src='img/admin-page/ava1.png' alt='avatar' class='img-circle ava-circle'></div><a href='#'><span>Каширский-Дмитриев<br>Игорь<br>Константинович</span></a></div><div class='wrap-block clearfix'><div class='img-wrapper'><img src='img/admin-page/ava2.png' alt='avatar' class='img-circle ava-circle'></div><a href='#'><span>Каширский-Дмитриев<br>Игорь<br>Константинович</span></a></div><div class='wrap-block clearfix'><div class='img-wrapper'><img src='img/admin-page/ava3.png' alt='avatar' class='img-circle ava-circle'></div><a href='#'><span>Каширский-Дмитриев<br>Игорь<br>Константинович</span></a></div><div class='wrap-block clearfix'><div class='img-wrapper'><img src='img/admin-page/ava4.png' alt='avatar' class='img-circle ava-circle'></div><a href='#'><span>Каширский-Дмитриев<br>Игорь<br>Константинович</span></a></div><div class='wrap-block clearfix'><div class='img-wrapper'><img src='img/admin-page/ava5.png' alt='avatar' class='img-circle ava-circle'></div><a href='#'><span>Каширский-Дмитриев<br>Игорь<br>Константинович</span></a></div><div class='wrap-block clearfix'><div class='img-wrapper'><img src='img/admin-page/ava6.png' alt='avatar' class='img-circle ava-circle'></div><a href='#'><span>Каширский-Дмитриев<br>Игорь<br>Константинович</span></a></div><div class='wrap-block clearfix'><div class='img-wrapper'><img src='img/admin-page/ava7.png' alt='avatar' class='img-circle ava-circle'></div><a href='#'><span>Каширский-Дмитриев<br>Игорь<br>Константинович</span></a></div><div class='wrap-block clearfix'><div class='live-pagination'><i class='material-icons material-left'>&#xE314;</i><span class='digits active digits-color'>1</span><span class='digits digits-color'>2</span><span class='digits digits-color'>3</span><i class='material-icons material-right'>&#xE315;</i></div></div></div></div>");

		function showResult(str) {
			if (str.length==0) { 
				document.getElementById("live-search").innerHTML="";
			// document.getElementById("live-search").style.border="0px";
				return;
			}
			if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp=new XMLHttpRequest();
			} else {  // code for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange=function() {
				if (this.readyState==4 && this.status==200) {
					document.getElementById("live-search").innerHTML=this.responseText;
					// document.getElementById("live-search").style.border="1px solid #A5ACB2";
				}
			}
			xmlhttp.open("GET","livesearch.php?q="+str,true);
			xmlhttp.send();
		}

		//top block .hide-block with authors
		var attr = $('.hide-block');
		var imgSrc = $('.arr-down').attr('src');
		$('.direction .arr-down').on("click", function(){
			$(this).toggle(300);
			$('.arr-up').toggle(300);
			$('.hide-block').toggle(300);
			$('.over-wrap').css({'height' : '231px', 'transition' : '.6s all'});
			$('.first .direction .add-height').css({'height' : '153px', 'transition' : '.6s all'});

		});
		$('.direction .arr-up').on("click", function(){
			$(this).toggle(300);
			$('.arr-down').toggle(300);
			$('.hide-block').toggle(300);
			$('.over-wrap').css({'height' : 'auto', 'transition' : '.6s all'});
			$('.first .direction .add-height').css({'height' : '0', 'transition' : '.6s all'});
		});

		// history_page.html редакторы
		$('.vidget-redactors .arr-down').on("click", function(){
			$('.vidget-redactors .arr-down').toggle(300);
			$('.vidget-redactors .arr-up').toggle(300);
			$('.vidget-redactors .over-wrap').toggle(300);
		});
		$('.vidget-redactors .arr-up').on("click", function(){
			$('.vidget-redactors .arr-up').toggle(300);
			$('.vidget-redactors .arr-down').toggle(300);
			$('.vidget-redactors .over-wrap').toggle(300);
		});
			
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


