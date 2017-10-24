
   $(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 220) {
    	$('.kolors').addClass('navbar-scrolled');
        $('.kolors ul').addClass('downslide');
        $('.logo').addClass('logo-scrolled');
    }
    else {
    $('.kolors').removeClass('navbar-scrolled');
    $('.kolors ul').removeClass('downslide');
    $('.logo').removeClass('logo-scrolled');
    }
  });
});