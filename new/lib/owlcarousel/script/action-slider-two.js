$(document).ready(function(){
  $(".slider-two").owlCarousel({
      loop: true,
      margin:10,
        nav:false,
      navText: ["<img src='images/next.png'>", "<img src='images/back.png'>"] ,

    responsive:{
        0:{
          items:1,  
        },
        700:{
          items:2,  
        },
        1024:{
            items:3,
        },
        1399:{
            nav:true,
        }
    }
  });
}); 


        










