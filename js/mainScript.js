$(document).ready(function(){
    $(".navbar-toggle").click(function(){
      if($(".navbar-header").hasClass('biale')){
         $(".navbar-header").removeClass('biale');}
      else{
         $(".navbar-header").addClass('biale');
      }
    }
                  )});
// White background for navbar while hamburger open.

var buttonHome = document.querySelector(".buttonHome");
var menu = document.querySelector("#bs-example-navbar-collapse-1");
var menu2 = document.querySelector(".navbar-header")
var body = document.querySelector("body");

$(function() {
  $(document).click(function (event) {
     $('.navbar-collapse').collapse('hide');
    if($(".navbar-header").hasClass('biale') && $(document).scrollTop() < 220){
         $(".navbar-header").addClass('biale');}
      else{
         $(".navbar-header").removeClass('biale');
      }
  });
});

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

var limiter = 768;

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    
  if ( $(window).width() > limiter ) { 
      
    
    
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
  
        if ((scroll > 950) && (scroll <= 1550)) {
          $("a[href='#Serwisy']").children("p").addClass('topBorder');
    }
     else {
      $("a[href='#Serwisy']").children("p").removeClass('topBorder');
    }
  
        if ((scroll > 1550) && (scroll <= 3400)) {
          $("a[href='#Galeria']").children("p").addClass('topBorder');
    }
     else {
      $("a[href='#Galeria']").children("p").removeClass('topBorder');
    }
  
        if ((scroll > 3400) && (scroll <= 4200)) {
          $("a[href='#Blogi']").children("p").addClass('topBorder');
    }
     else {
      $("a[href='#Blogi']").children("p").removeClass('topBorder');
    }
  
        if ((scroll > 4200) && (scroll <= 7000)) {
          $("a[href='#Kontakt']").children("p").addClass('topBorder');
    }
     else {
      $("a[href='#Kontakt']").children("p").removeClass('topBorder');
    }
  } 
});  // tracker for desktops, orange border


var limiter = 768;

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    
  if ( $(window).width() < limiter ) { 
      
    $("ul li a p").removeClass("topBorder");
    
    if (scroll <= 275) {
          $("a[href='#Dogory']").children("p").addClass('orangeColor');
    }
  
    else {
      $("a[href='#Dogory']").children("p").removeClass('orangeColor');
    }
  
  
      if ((scroll > 275) && (scroll <= 950)) {
          $("a[href='#Oczym']").children("p").addClass('orangeColor');
    }
     else {
      $("a[href='#Oczym']").children("p").removeClass('orangeColor');
    }
  
        if ((scroll > 950) && (scroll <= 1550)) {
          $("a[href='#Serwisy']").children("p").addClass('orangeColor');
    }
     else {
      $("a[href='#Serwisy']").children("p").removeClass('orangeColor');
    }
  
        if ((scroll > 1550) && (scroll <= 3400)) {
          $("a[href='#Galeria']").children("p").addClass('orangeColor');
    }
     else {
      $("a[href='#Galeria']").children("p").removeClass('orangeColor');
    }
  
        if ((scroll > 3400) && (scroll <= 4200)) {
          $("a[href='#Blogi']").children("p").addClass('orangeColor');
    }
     else {
      $("a[href='#Blogi']").children("p").removeClass('orangeColor');
    }
  
        if ((scroll > 4200) && (scroll <= 7000)) {
          $("a[href='#Kontakt']").children("p").addClass('orangeColor');
    }
     else {
      $("a[href='#Kontakt']").children("p").removeClass('orangeColor');
    }
  }
}); // tracker for mobiles, orange font


$(window).resize(function() {    
if ( $(window).width() < limiter ) { 
 $("ul li a p").removeClass("topBorder"); 
}
});
            
$(window).resize(function() { 
if ( $(window).width() > limiter ) { 
 $("ul li a p").removeClass("orangeColor"); 
}
}); // Class remover for tracker



 $("#myForm").validate({
   rules: {
     name: {
       required:true,
       rangelength: [4,10]
     },
       mail: {
         required:true,
         email:true,
         rangelength: [9,30]
       },
           phone: {
             rangelength: [9, 15],
             number:true
         },
              textarea: {
                required:true,
                rangelength: [15,300]
              }
    }, // End of rules object
  
    messages : {
      name: {
      required:"Give us your name, or nickname so we can know each other :)",
      rangelength:"It should be 4-10 characters long"
      },
          mail: {
            required:"Without your mail, we can't stay in touch...",
            email:"Use correct email format i.e. name@mail.com",
            rangelength:"Your email adress should be atleast 9 characters long"
          },
              phone: {
                rangelength:"Use your 9 digit phone number only",
                number:"Use only digits, without special marks"
              },
                textarea: {
                  required:"Dont You forget about message to us :(?",
                  rangelength:"Dont be so shy :P Write something more!"
                }
   
                       } 
 
 }); // End of validate for Contact form

$("#subscribeForm").validate({
  rules: {
    subscribeMail: {
         email:true,
         rangelength: [9,30],
         required: true,
    }

},
      messages: {
        subscribeMail: {
            required:"If you want to subscribe, please write your email adress",
            email:"Use correct email format i.e. name@mail.com",
            rangelength:"Your email adress should be atleast 9 characters long"
        }
      }  
  
}); // End of validate for subscribe section
