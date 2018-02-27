                        //Menu

/*function getMenu(){
    
    var x = document;
    
    x.onclick = function (event){
        
        var evt = event.target;
        
        var y = document.getElementById("getMenu");
        
        if(evt.id == "menu-icon"){    
         return   y.style.display="flex";
        }
            
        if(evt.id != "menu-icon" ){
          return   y.style.display="";
        }
    }
    
}

getMenu();

*/

function menu(){
    
    var icon = document.getElementById("menu-icon");
    
    icon.onclick = function(){
        
        var menu = document.getElementById("getMenu");
        menu.style.display="-webkit-box";
        menu.style.display="flex";
        
    }
    
}

menu();



    //window





function getBlock(){
    
    var block = document.getElementsByClassName("block");
    
    for(i=0;i<block.length;i++)
    
        block[i].onclick = function(){
            
           var win = this.getElementsByClassName("window-information");
            
            if( win[0].style.display=="")
            win[0].style.display="flex";
             win[0].style.display="-webkit-box";
          
            return x = win[0];
                   
        }
}

getBlock();


