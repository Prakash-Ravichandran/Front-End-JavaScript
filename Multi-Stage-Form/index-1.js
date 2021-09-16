function radioFunc() {
    let inputValue = document.getElementById('radio-one').checked;
    console.info('function-invoked');

   if(inputValue) {
    document.getElementById('demo1').innerHTML = "Are you needed to go for Stage-2";
    document.getElementsByClassName('sub-stage-one')[0].style.display="block";
   }
else {
   document.getElementById('demo1').innerHTML = "hello" ;
   document.getElementsByClassName('sub-stage-two')[0].style.display="block";
}      
}

function redirectFunc(){
  window.location.href="./index-2.html";
//    location.replace("./index-2.html");
}
