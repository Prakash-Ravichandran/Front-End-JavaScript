
// to block the main thread of execution at 10th second .

function func25() {
    console.log("function func25 starts");
    setTimeout(function() { console.log("1st timeout")} ,5000);
    setTimeout(function() { console.log("2nd Timeout")} ,10000);
    setTimeout(function() { console.log("3rd Timeout")} ,15000);
    setTimeout(function() { console.log("4th timeout")} ,20000);
    setTimeout(function() { console.log("5th timeout")} ,25000);
  }
  
  function fivth(){ 
  console.log("function fivth starts");
  setTimeout( function () { console.log("blocking 2nd timeout") },10000); }
  
  func25();
  fivth();