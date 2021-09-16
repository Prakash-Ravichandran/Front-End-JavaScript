setTimeout( function() {console.log("executed now - now it is aynchronous"); } , 10);
console.log("setTimeout is not executed in the first -still synchronous");
function a() { console.log("line - executed - still now synchronous");}
function b() { console.log("line - executed - still now synchronous");}
a();
b();