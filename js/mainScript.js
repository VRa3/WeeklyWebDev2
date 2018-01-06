$(document).ready(function(){
    $(".navbar-toggle").click(function(){
         $(".navbar-header").toggleClass('biale');
         $(".Menu").toggleClass('biale');
    });
}); // White background for navbar while hamburger open.


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
  });// Flexbile navbar (changing height while scrolled)


 
	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});// Smooth anchor for menu links




$("#show-more").click(function(){
    $(".gallery-more-container").slideToggle(600);
}); // Gallery button slide on click


$(".Blog-button-view").click(function(){
  $("#Blog-image-hidden").stop(true, true).slideToggle(600);
}); // Blog button slide on click


// Service dropdowns on panel


    $("#Dropdown-panel-services").click(function(){
        $("#Dropdown-tekst-services").slideToggle(300);
    });


    $("#Dropdown-panel-services2").click(function(){
        $("#Dropdown-tekst-services2").slideToggle(300);
    });



    $("#Dropdown-panel-services3").click(function(){
        $("#Dropdown-tekst-services3").slideToggle(300);
    });



    $("#Dropdown-panel-services4").click(function(){
        $("#Dropdown-tekst-services4").slideToggle(300);
    });

// Service dropdowns on panel

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();


    if (scroll <= 275) {
          $("a[href='#Dogory']").children("p").addClass('topBorder');
    }
  
    else {
      $("a[href='#Dogory']").children("p").removeClass('topBorder');
    }
  
  
      if ((scroll > 275) && (scroll <= 950)) {
          $("a[href='#Oczym']").children("p").addClass('topBorder');
    }
     else {
      $("a[href='#Oczym']").children("p").removeClass('topBorder');
    }
  
        if ((scroll > 950) && (scroll <= 1850)) {
          $("a[href='#Serwisy']").children("p").addClass('topBorder');
    }
     else {
      $("a[href='#Serwisy']").children("p").removeClass('topBorder');
    }
  
        if ((scroll > 1850) && (scroll <= 3700)) {
          $("a[href='#Galeria']").children("p").addClass('topBorder');
    }
     else {
      $("a[href='#Galeria']").children("p").removeClass('topBorder');
    }
  
        if ((scroll > 3700) && (scroll <= 5000)) {
          $("a[href='#Blogi']").children("p").addClass('topBorder');
    }
     else {
      $("a[href='#Blogi']").children("p").removeClass('topBorder');
    }
  
        if ((scroll > 5000) && (scroll <= 7000)) {
          $("a[href='#Kontakt']").children("p").addClass('topBorder');
    }
     else {
      $("a[href='#Kontakt']").children("p").removeClass('topBorder');
    }

}); 

