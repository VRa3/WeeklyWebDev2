  $(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 220) {
      
    	$('.kolors').addClass('navbar-scrolled');
        $('.logo').addClass('logo-scrolled');
        $('.topslide').addClass('downslide');
        $('.burger').addClass('burger-scrolled');
    }
    else {
      
    $('.kolors').removeClass('navbar-scrolled');
    $('.logo').removeClass('logo-scrolled');
    $('.topslide').removeClass('downslide');
    $('.burger').removeClass('burger-scrolled');
    }
  });
});