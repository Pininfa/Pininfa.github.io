window.onload=function emodzy(){
    var input = document.getElementsByTagName("input")[0];
    var images = document.getElementById("images");
    var img = images.getElementsByTagName("img")[0];
    var smile = document.getElementById("smile");
    var sml = smile.getElementsByTagName("img")[0];
    var one = document.getElementById("img_one");
    var two = document.getElementById("img_two");
    var three = document.getElementById("img_three");
    var four = document.getElementById("img_four");
    var five =document.getElementById("img_five");
    var six =document.getElementById("img_six");
    var dot = document.createElement("div");
    var dotTwo = document.createElement("div");
    /*dot.style.height="5px";
    dot.style.width="5px";
    dot.style.background="#006bcc";
    dot.style.borderRadius="50%";
    dot.style.position="absolute";*/
    
    dotTwo.className="dot"
    dot.className="dot";
    var skills = document.getElementById("skills");
    var TagSkills = skills.getElementsByTagName("span");
    
    one.appendChild(dot);
    four.appendChild(dotTwo);
     one.style.border="3px solid #006bcc";
     four.style.border="3px solid #006bcc";
    
    for(i=0;i<11; i++ ){
        var oneBlock = TagSkills[i].style.display="inline-block";
    }
    
    input.oninput=function(){
    console.log(input.value);
        if(input.value == "0"){
            four.appendChild(dotTwo);
            one.appendChild(dot);
            one.style.border="3px solid #006bcc";
            four.style.border="3px solid #006bcc";
            img.src="img/Group%20100@3x.png";
            sml.src="img/Group%2019@3x.png";
            
             for(i=11;i<22; i++ ){
                TagSkills[i].style.display="none";
    }
        }
        else if(input.value != "0"){
            one.style.border="";
            four.style.border="";
        } 
        if(input.value == "50"){
            two.appendChild(dotTwo);
            five.appendChild(dot);
            
            two.style.border="3px solid #006bcc";
            five.style.border="3px solid #006bcc";
            img.src="img/Green.png";
            sml.src="img/Group%2086.png";
            
            for(i=0;i<22; i++ ){
            TagSkills[i].style.display="inline-block";    
    }
             for(i=22;i<28; i++ ){
            TagSkills[i].style.display="none";    
    }
        }
        else if(input.value != "50"){
            two.style.border="";
            five.style.border="";
            smile.style.left="";
            
        }
        if(input.value == "100"){
             three.appendChild(dotTwo);
             six.appendChild(dot);
            
            three.style.border="3px solid #006bcc";
            six.style.border="3px solid #006bcc";
            img.src="img/Group%2081@3x.png";
            images.style.top="-97px";
            sml.src="img/Group%2021@3x.png";
             for(i=0;i<28; i++ ){
            TagSkills[i].style.display="inline-block";    
    }
            
        }
        else if(input.value != "100"){
            three.style.border="";
            six.style.border="";
            smile.style.backgroundImage="";
            images.style.top="";
        }    

    }
}