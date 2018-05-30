$(document).ready(function(){												
        //Change Nav background on scroll
        $(window).scroll(function(){
  	     var scroll = $(window).scrollTop();
	       if (scroll > 25) {
	       $(".navbar").addClass("nav-margin");
           $("nav").addClass("scroll");
	       }

	       else{
		      $(".navbar").removeClass("nav-margin");
              $("nav").removeClass("scroll");
	       }
        })
            
       //Navigation Menu Slider
        $('#nav-expander').on('click',function(e){
      		e.preventDefault();
      		$('body').toggleClass('nav-expanded');
      	});
      	$('#nav-close').on('click',function(e){
      		e.preventDefault();
      		$('body').removeClass('nav-expanded');
      	});
    });