function redirectNext(){
    validateName();
    validateHouseNumber();
    window.location.href="./index-4.html";
}  
function redirectPrev(){
    window.location.href="./index-2.html";
}  

const country = {
    India : ['andhra','bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala'],
    Australia : ['Ashmore and Cartier Islands','Australian Antarctic Territory','Australian Capital Territory (ACT)','Christmas Island','Cocos (Keeling) Islands','Coral Sea Islands','Heard Island and McDonald Islands','Jervis Bay Territory','Norfolk Island','Northern Territory (NT)'],
    Uk : ['Bedfordshire','Berkshire','Bristol','Buckinghamshire','Cambridgeshire','Cheshire','City of London','Cornwall','Cumbria']
}

// var India = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'];
// var Australia = ['Ashmore and Cartier Islands','Australian Antarctic Territory','Australian Capital Territory (ACT)','Christmas Island','Cocos (Keeling) Islands','Coral Sea Islands','Heard Island and McDonald Islands','Jervis Bay Territory','Norfolk Island','Northern Territory (NT)'];

function listCity(){
    console.log('Australia is clicked');
   let country = document.getElementById('country').value;
   if(country == "Australia"){
    // document.getElementById('city').value = country.Australia;
    // document.getElementById('Australia').innerHTML=country.Australia;
    // let clearCountry = document.getElementById('option');
    // clearCountry.remove();
     let India = [''];
     let Australia = ['Ashmore and Cartier Islands','Australian Antarctic Territory','Australian Capital Territory (ACT)','Christmas Island','Cocos (Keeling) Islands','Coral Sea Islands','Heard Island and McDonald Islands','Jervis Bay Territory','Norfolk Island','Northern Territory (NT)'];
     console.log(India);
    for(let i=0 ; i < Australia.length; i++){
        console.log(i);
        let optionValue = Australia[i];
        var element = document.createElement('option');
        element.value = optionValue;
        console.log(element.value);
        element.innerHTML = Australia[i];
        var select = document.getElementById('city');
        select.appendChild(element);

        
      if(country != "India"){
        // let cityOptions = document.getElementById('city');
        // cityOptions.options.length = '';
        //  let cityOptions = document.getElementById('city');
        // cityOptions.options.style.display = 'none';
        let India = [''];
        console.log(India);
    }  
    }
   }

   else if(country == "India"){
    // let clearCountry = document.getElementById('option');
    // clearCountry.remove();
    let India = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'];
    let Australia = [''];
   console.log(Australia);
    for(let i=0 ; i < India.length; i++){
        console.log(i);
        let optionValuetwo = India[i];
        let elementTwo = document.createElement('option');
        elementTwo.value = optionValuetwo;
        console.log(elementTwo.value);
        elementTwo.innerHTML = India[i];
        let selectTwo = document.getElementById('city');
        selectTwo.appendChild(elementTwo);

    if(country != "Australia"){
        // let cityOptions = document.getElementById('city');
        // cityOptions.options.length = '';
        // let cityOptions = document.getElementById('city');
        // cityOptions.options.style.display = 'none';
        let Australia = [''];
        console.log(Australia);
      }  
    }
   }

}

function validateName(){ 
// var regex = new  RegExp("/^([^0-9]*)$/");
let getInputValue = document.getElementById('firstname').value;
if(getInputValue){
    document.getElementById('err-one').innerHTML="";
    document.getElementById('firstname').style.borderColor="";

     for(let i=0 ; i < getInputValue.length ; i++) {
        if((getInputValue[i]<'A'||getInputValue[i]>'Z') && (getInputValue[i]<'a'||getInputValue[i]>'z')){
            document.getElementById('err-one').innerHTML="Name should contain only characters";
            document.getElementById('firstname').style.borderColor="red"; 
        }
    }
    if((getInputValue.length > 24)  ) {
         document.getElementById('err-one').innerHTML="Name should be within 24 characters only";  
         document.getElementById('firstname').style.borderColor="red";
    }
}
else {
    document.getElementById('err-one').innerHTML="Name cannot be empty";
    document.getElementById('firstname').style.borderColor="red";
} 
    }

function validateHouseNumber(){
    let houseNumber = document.getElementById('house-number').value;

    if(houseNumber){
        document.getElementById('err-two').innerHTML = "";
        document.getElementById('house-number').style.borderColor="";

        //123a is a vlid number
        if(!((/^\d+[a-zA-Z]*$/.test(houseNumber)))){
        document.getElementById('err-two').innerHTML = "Please Enter a valid House Number";
        document.getElementById('house-number').style.borderColor="red";
        }
    }

    else {
        document.getElementById('err-two').innerHTML = "House-Number Cannot be empty";
        document.getElementById('house-number').style.borderColor="red";
    }
}

   // functions for local storage 
   
   function saveresponsefunc(){
    console.log("save response invoked");
    let getInputValue = document.getElementById('firstname').value;
   localStorage.setItem('name',getInputValue); 

   let houseNumber = document.getElementById('house-number').value;
   localStorage.setItem('houseNumber',houseNumber);

//    let Abn = document.getElementById('abn').value;
//    localStorage.setItem('abn',Abn); 
}

// // saveresponse.addEventListener('click',saveresponsefunc());

function retriveresponsefunc(){
   let getInputValue = document.getElementById('firstname');
   getInputValue.value = localStorage.getItem('name'); 

   let houseNumber = document.getElementById('house-number');
   houseNumber.value = localStorage.getItem('houseNumber');
//    let Abn = document.getElementById('abn');
//    Abn.value = localStorage.getItem('abn'); 
}