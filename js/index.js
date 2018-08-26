$(document).ready(function() {


    // BACK TO TOP BUTTON
      $(window).scroll(function() {
            if ($(this).scrollTop() >= 400) {        // If page is scrolled more than 50px
                $('#return-to-top').fadeIn(500);    // Fade in the arrow
            } else {
                $('#return-to-top').fadeOut(500);   // Else fade out the arrow
            }
        });
        $('#return-to-top').click(function() {      // When arrow is clicked
            $('body,html').animate({
                scrollTop : 0                       // Scroll to top of body
            }, 1000);
        });

        $('.vrh').click(function() {

        $('body, html').animate({ "scrollTop":$('#home').offset().top - 80 }, 1500);
        
    });

         $('.sekcija1').click(function() {

        $('body, html').animate({ "scrollTop":$('#services').offset().top - 80 }, 1500);
        
    });
         $('.sekcija2').click(function() {

        $('body, html').animate({ "scrollTop":$('#about').offset().top - 150 }, 1500);
        
    });
         $('.sekcija3').click(function() {

        $('body, html').animate({ "scrollTop":$('#testimonials').offset().top - 250 }, 1500);
        
    });
         $('.sekcija4').click(function() {

        $('body, html').animate({ "scrollTop":$('#gallery').offset().top - 150 }, 1500);
        
    });
         $('.sekcija5').click(function() {

        $('body, html').animate({ "scrollTop":$('#contact').offset().top - 80 }, 1500);
        
    });
 
});