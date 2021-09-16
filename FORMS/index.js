const errorMessage = [
    {
        firstName : "First-Name should be within 24 characters only",
        lastName : "First-Name cannot be empty"
    }
];



function validateName(){
    console.log("on blur of input is activated");
    var regex = new  RegExp("/^([^0-9]*)$/");

    let getInputValue = document.getElementById('firstname').value;

    if(getInputValue){
        document.getElementById('err-one').innerHTML="";
        document.getElementById('firstname').style.borderColor="";


         for(let i=0 ; i < getInputValue.length ; i++) {
            if((getInputValue[i]<'A'||getInputValue[i]>'Z') && (getInputValue[i]<'a'||getInputValue[i]>'z')){
                document.getElementById('err-one').innerHTML="FirstName should contain only characters";
                document.getElementById('firstname').style.borderColor="red";
                console.log('running-loop');
            }
        }
        if((getInputValue.length > 24)  ) {
             document.getElementById('err-one').innerHTML="First-Name should be within 24 characters only";  
             document.getElementById('firstname').style.borderColor="red";
        }
    }
   
    else {
        let getPara = document.getElementById('err-one').innerHTML="First-Name cannot be empty";
        document.getElementById('firstname').style.borderColor="red";
        console.log('input is null');
        console.log(getPara);
    } 
}

function validateNametwo(){

    console.log("on blur of input is activated");
    var regex = new  RegExp("/^([^0-9]*)$/");

    let getInputValue = document.getElementById('lastname').value;

    if(getInputValue){

         document.getElementById('err-two').innerHTML="";
         document.getElementById('lastname').style.borderColor="";

         for(let i=0 ; i < getInputValue.length ; i++) {
            if((getInputValue[i]<'A'||getInputValue[i]>'Z') && (getInputValue[i]<'a'||getInputValue[i]>'z')){
                document.getElementById('err-two').innerHTML="LastName should contain only characters";
                document.getElementById('lastname').style.borderColor="red";
                console.log('running-loop');
            }
        }
        if((getInputValue.length > 24)  ) {
             document.getElementById('err-two').innerHTML="Last-Name should be within 24 characters only";
             document.getElementById('lastname').style.borderColor="red";   
        }
    }
   
    else {
        let getPara = document.getElementById('err-two').innerHTML="Last-Name cannot be empty";
         document.getElementById('lastname').style.borderColor="red";
        console.log(getPara);
    } 
}


function validateEmail(){

    console.log('email is validated');

    var getInputValue=document.getElementById('email').value;

    let getInputValueString=getInputValue.toString();


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

function validatePhone(){

    let getInputValue=document.getElementById('phone').value.toString();
    console.log(getInputValue);

    if(getInputValue.length > 0){

            // /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
            document.getElementById('err-four').innerHTML="";
            document.getElementById('phone').style.borderColor="";

            
            if( !(/^\d+$/.test(getInputValue)))
            {
                document.getElementById('err-four').innerHTML="Enter a Valid Phone Number";
                document.getElementById('phone').style.borderColor="red";

                console.log('email is validated');
            }

            else if (getInputValue.length != 10)
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

function validatePassword(){

    let getInputValue = document.getElementById('password').value;
    console.log(getInputValue);
    if((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(getInputValue))){
        console.log("password-validated");
        document.getElementById('err-five').innerHTML="";
        document.getElementById('password').style.borderColor="";

    }

    else {
        document.getElementById('err-five').innerHTML="Password Must include altleast 8 character ,1-lowercase 1-uppercase 1-special character";
        document.getElementById('password').style.borderColor="red";

    }
}

function validateConfirmPassword(){

    let getInputValue = document.getElementById('confirmpassword').value.toString();
    let password = document.getElementById('password').value.toString();
    console.log(getInputValue);

    if(getInputValue == password){
        console.log('confirm-password validated');
        document.getElementById('confirmpassword').style.borderColor="";

    }

  else {
    document.getElementById('err-six').innerHTML="Confirm Password Must be Same as Password";
    document.getElementById('confirmpassword').style.borderColor="red";


  }
}


function allFunction(){
    validateName();
    validateNametwo();
    validateEmail();
    validatePhone();
    validatePassword();
    validateConfirmPassword();   
}

function validateForm(){
    let getInputValue = document.forms["landing-page-form"]["checkbox"].checked;
    console.log(getInputValue);
    document.getElementById('err-seven').innerHTML="";  


    if(getInputValue){
        allFunction();
    }

    else {
      document.getElementById('err-seven').innerHTML="User needs to Agree with Terms & conditons";  
    }
    
}


// function resetValue(){
//     let getAllInputs = document.getElementsByTagName('input').value;
//     console.log(getAllInputs);
// }