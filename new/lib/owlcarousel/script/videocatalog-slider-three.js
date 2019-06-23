$(document).ready(function(){
     $(".video-slider-three").owlCarousel({
            video: true,  
            items:3,
            margin:10,
            nav:true,
            loop:true,
         
         navText:["<img src='images/next.png'>", "<img src='images/back.png'>"],
         responsive:{
        0:{
          items:1,  
        },
        500:{
          items:2,  
        },
        750:{
            items:3,
        }
        
    }
  });
}); 






