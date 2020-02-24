window.onload=function(){
    var day = document.getElementsByClassName("day__of__the__month");
    
    
    
    for(i=0; i<day.length; i++){
        day[i].onclick=SelectedCShoice;
    }
    
    
                /*quantity first elemen*/
    
    var firstElement = document.getElementById("first__element");
    
    firstElement.onclick = ShowFirstElement;
    
                            /*quantity second elemen*/
     var secondElement = document.getElementById("second__element");
    
    secondElement.onclick = ShowSecondElement;
    
    /*quantity third elemen*/
     var thirdElement = document.getElementById("third__element");
    
    thirdElement.onclick = ShowThirdElement;
    
}
    

                    /*SelectedCShoice*/

function SelectedCShoice (){
    if(this.parentNode.SelectedDayStyle){
        this.parentNode.SelectedDayStyle.classList.remove("day__of__the__month__style");
    }
    if(this.className!="day__of__the__month__style"){
        this.classList.add("day__of__the__month__style");
        this.parentNode.SelectedDayStyle=this;
  }
    if(this.id=="weekend"){
        var time = document.getElementsByClassName("timing");
        time[0].classList.add("weekends__style");
    }
    if(this.id!="weekend"){
        var time = document.getElementsByClassName("timing");
        time[0].classList.remove("weekends__style");
    }
    
}

 
/*quantityFirstElemenShowTotal*/


function ShowFirstElement(){
    
    var first__element = document.getElementById("first__element");
    
    var point = first__element.getElementsByClassName("point");
    
    var quantityFirstElement = document.getElementById("quantity_first__elemen");
    
    quantityFirstElement.classList.toggle("quantity__enabled");
    
    point[0].classList.toggle("point__enabled");
     
}

/*quantitySecondElemenShowTotal*/

function ShowSecondElement(){
    
    var first__element = document.getElementById("second__element");
    
    var point = second__element.getElementsByClassName("point");
    
    var quantitySecondElement = document.getElementById("quantity_second__elemen");
    
    quantitySecondElement.classList.toggle("quantity__enabled");
    
    point[0].classList.toggle("point__enabled");
     
}


/*quantityThirdElemenShowTotal*/

function ShowThirdElement(){
    
    var third__element = document.getElementById("third__element");
    
    var point = third__element.getElementsByClassName("point");
    
    var quantityThirdElemen = document.getElementById("quantity_third__elemen");
    
    quantityThirdElemen.classList.toggle("quantity__enabled");
    
    point[0].classList.toggle("point__enabled");
     
}


                    /*addition and subtraction*/

                        /*first element*/
                         

                    /*value*/

var numberOfBottlesFirst = document.getElementById("number__of__bottles__first"); 

                        /*first element addition*/

                        /*first element subtraction*/

                            /*validation*/



var btnAhead = document.getElementById("btn__ahead"); 

var submit = document.getElementById("submit");


        /*validation Email*/

var email = document.getElementById("email");

submit.addEventListener("click", emailvalidation);

btnAhead.addEventListener("click", emailvalidation);

function emailvalidation(){
    
    if (!email.validity.valid){
        
           
        
       email.classList.add("inputInvalid");
        
    }
    
    else{
          
        
    email.classList.remove("inputInvalid");
    }
    
}
         
                    /*validation name*/

                /*validation phone*/

var phone = document.getElementById("phone");


var re =/^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}(-\d{2}){2}$/;



submit.addEventListener("click", validPhone);
btnAhead.addEventListener("click", validPhone);

function validPhone(){
    
        phoneValue = phone.value;
    
        PhoneValid= phoneValue.match(re);
    
        if(!PhoneValid){
       phone.classList.add("inputInvalid"); 
        }
    
  else{
       phone.classList.remove("inputInvalid");
      var phoneNumberGray = document.getElementById("phoneNumberGray").innerHTML=phone.value;
  }
    
} 



/*validation name*/

var lastname = document.getElementById("lastname");
  

var reName =/^[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{0,}\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,}(\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,})?$/;

submit.addEventListener("click", validName);
btnAhead.addEventListener("click", validName);

function validName(){
    
        nameValue = lastname.value;
    
        NameValid= nameValue.match(reName);
    
        if(!NameValid){
       lastname.classList.add("inputInvalid"); 
        }
    
  else{
       lastname.classList.remove("inputInvalid");
      
      
  }
    
}

/*address*/

var address = document.getElementById("address");

submit.addEventListener("click", validAddress);
btnAhead.addEventListener("click", validAddress);

function validAddress(){
    
    
    addressValue = address.value;
    
    if(!addressValue){
        address.classList.add("inputInvalid"); 
        
        
    }
    else{
        address.classList.remove("inputInvalid");
        
        var deliveryAddressGray = document.getElementById("deliveryAddressGray").innerHTML=address.value;
        
    }
    
}

/*checkbox vakidation*/

var checkboxValidation = document.getElementById("checkboxValidation");

var checkLabel = document.getElementById("checkLabel");

    submit.addEventListener("click", checkValid);
    btnAhead.addEventListener("click", checkValid);
        function checkValid(){
            
    if(!checkboxValidation.checked){
       checkLabel.classList.add("checkColor");
    }    
        else{
           checkLabel.classList.remove("checkColor")
        }
        }





/*Локика*/
submit.addEventListener("click", check);

function check(){
    
    var checkPoint = document.getElementsByClassName("point");
    for(i=0; i<checkPoint.length;i++);
    
    
     var water__choice = document.getElementsByClassName("water__choice__wrapper");
    
for(i=0; i<checkPoint.length;i++){
    
   if(!checkPoint[i].classList.contains("point__enabled")){
       
           water__choice[i].classList.add("water__choice__off");

   }
    
    if(checkPoint[i].classList.contains("point__enabled")){
        for(i=0; i<water__choice.length; i++){
           water__choice[i].classList.remove("water__choice__off");
        }
   }

}
    
}


/*Выбор дня и времени*/

    submit.addEventListener("click", dayControl);
var dayOfTheMonth = document.getElementsByClassName("day__of__the__month");
for(i=0;i<dayOfTheMonth.length;i++);
function dayControl(){
    
    var dayOfTheMonth = document.getElementsByClassName("day__of__the__month");
    for(i=0;i<dayOfTheMonth.length;i++);
    
    for(i=0;i<dayOfTheMonth.length;i++){
        
        if(!dayOfTheMonth[i].classList.contains("day__of__the__month__style")){
            
            dayOfTheMonth[i].classList.add("day__of__the__month__dasabled");
            
        
        }
        
        if(dayOfTheMonth[i].classList.contains("day__of__the__month__style")){
            for(i=0;i<dayOfTheMonth.length;i++){
        dayOfTheMonth[i].classList.remove("day__of__the__month__dasabled");
            }
        }
    }

        
    }







 submit.addEventListener("click", control);
btnAhead.addEventListener("click", control);

function control(){
    
    if(email.validity.valid && PhoneValid && NameValid && addressValue ){
        
         var blockRightSecond = document.getElementById("blockRightSecond");
        blockRightSecond.style.display="block";
        
         var blockRightFirst = document.getElementById("blockRightFirst");
        blockRightFirst.style.display="none";
       
        
        
        btn__ahead.classList.add("btn__ahead__active");
        
       }
    else{
        btn__ahead.classList.remove("btn__ahead__active");
   
    }
    
}




/*активация ссылки 2*/

/*submit.addEventListener("click", control);

function control(){
    
    if(!email.validity.valid && !PhoneValid && !NameValid && !addressValue){
        
        

        
       }
    else{
        
        
        
        
        
    }
    
}
*/


                    /*validation oninput*/
                    /*name validation*/

lastname.oninput =function lastnameOninputValidation(){
    
    nameValue = lastname.value;
    
        NameValid= nameValue.match(reName);
    
        if(!NameValid){
       lastname.classList.add("inputInvalid");
        
        }
    
  else{
       lastname.classList.remove("inputInvalid");  
      
  }     
}

                        /*phone validation*/



phone.oninput = function PhoneOninputValidation(){
    
        phoneValue = phone.value;
    
        PhoneValid= phoneValue.match(re);
    
        if(!PhoneValid){
       phone.classList.add("inputInvalid"); 
           
        }
    
  else{
       phone.classList.remove("inputInvalid");
      var phoneNumberGray = document.getElementById("phoneNumberGray").innerHTML=phone.value;
     
  }
    
} 

                            /*email validation*/
email.oninput = function EmailOninputValidation(control){
    
    if (!email.validity.valid){ 
       email.classList.add("inputInvalid");
        
    }
    else{   
    email.classList.remove("inputInvalid");
       
    }
    
}

                                /*address validation*/


    
    address.oninput=function AddressOninputValidation(){
    
    
    addressValue = address.value;
    
    if(!addressValue){
        address.classList.add("inputInvalid"); 
       
        
    }
    else{
        address.classList.remove("inputInvalid");
        var deliveryAddressGray = document.getElementById("deliveryAddressGray").innerHTML=address.value;
        
    }
    
}              
    

                    /*checkbox validation*/

    checkLabel.oninput = function checkboxOninputValidation(control){
            
    if(!checkboxValidation.checked){
       checkLabel.classList.add("checkColor");
        
    }    
        else{
           checkLabel.classList.remove("checkColor");
            
        }
        }






             

