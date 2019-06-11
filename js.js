window.onload=function click(){
    
var x = document.getElementsByClassName("fa");
var y = document.getElementsByClassName("menu");
    
    x[0].onclick=function(){
      
        if(y[0].style.display==""){
   
            y[0].style.display="block";
        }
        else{
             y[0].style.display="";
            
        }
    }
}