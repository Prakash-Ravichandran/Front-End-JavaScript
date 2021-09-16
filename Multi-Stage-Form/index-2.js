function redirectNext(){
    window.location.href="./index-3.html";
}  
function redirectPrev(){
    window.location.href="./index-1.html";
}  


function validateEmail(){

    console.log('email is validated');
    let getInputValue=document.getElementById('email').value;
    // let getInputValueString=getInputValue.toString();
    
    if(getInputValue.length > 0)
        {
            document.getElementById('err-three').innerHTML="";
            document.getElementById('email').style.borderColor="";
    
            if( !(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(getInputValueString))){
                console.log('email is validated'); 
                document.getElementById('err-three').innerHTML="Please Enter a valid Email-address";
                document.getElementById('email').style.borderColor="red";
            }
        }
    
    else   {
            console.log('in else section');
            document.getElementById('err-three').innerHTML="Please Enter an Email-address";
            document.getElementById('email').style.borderColor="red";
            }
    }
    
    function validatePostCode(){
       let postcode = document.getElementById('postcode').value;
       if(postcode.length > 0){
        if(/^[A-Z]{1,2}[0-9R][0-9A-Z]?●[0-9][ABD-HJLNP-UW-Z]{2}$/.test(postcode)){
    }
       }
    
       else {
    
       }
    }
    
    
    function validatePhone() {
    let phone = document.getElementById('phone').value;
    if( phone.length > 0){
    // /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
    document.getElementById('err-four').innerHTML="";
    document.getElementById('phone').style.borderColor="";
    
    if( !(/^\d+$/.test( phone)))
    {
        document.getElementById('err-four').innerHTML="Enter a Valid Phone Number";
        document.getElementById('phone').style.borderColor="red";
        console.log('email is validated');
    }
    
    else if ( phone.length != 10)
    {
        document.getElementById('err-four').innerHTML="Phone Number Must be of 10 characters";
        document.getElementById('phone').style.borderColor="red";
    }
    }
    
    else   {
    document.getElementById('err-four').innerHTML="Phone Number cannot be Empty";
    document.getElementById('phone').style.borderColor="red";
    }  
    
     }
    
   function saveresponsefunc(){
       let postcode = document.getElementById('postcode').value;
       localStorage.setItem('postcode',postcode);

       let email = document.getElementById('email').value;
       localStorage.setItem('email',email);

       let phone = document.getElementById('phone').value;
       localStorage.setItem('phone',phone);
   }  
   
   function retriveresponsefunc(){
       console.log('function invoked');
    let postcode = document.getElementById('postcode');
    postcode.value = localStorage.getItem('postcode');

    let email = document.getElementById('email');
    email.value = localStorage.getItem('email');

    let phone = document.getElementById('phone');
    phone.value = localStorage.getItem('phone');
   }