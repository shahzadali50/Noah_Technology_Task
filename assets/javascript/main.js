$(document).ready(function(){
    $('.product_slider .owl-carousel').owlCarousel({
        loop:true,
        margin:9,
        nav:false,
        autoplay: true,         // Enables autoplay
        autoplayTimeout: 2000,  // Delay between transitions (in milliseconds)
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    })
  
})
$(document).ready(function(){
    $('.tesimonial .owl-carousel').owlCarousel({
        loop:true,
        margin:9,
        nav:false,
        autoplay: true,         // Enables autoplay
        autoplayTimeout: 3000,  // Delay between transitions (in milliseconds)
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            }
        }
    })
  
})
$(document).ready(function(){
    $('.client_logos .owl-carousel').owlCarousel({
        loop:true,
        margin:9,
        nav:false,
        autoplay: true,  
        autoplayTimeout: 0,     // Continuous movement without delay
        autoplaySpeed: 6000,   // Speed of the transition (in milliseconds)
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:5
            },
            768:{
                items:12
            }
        }
    })
  
})