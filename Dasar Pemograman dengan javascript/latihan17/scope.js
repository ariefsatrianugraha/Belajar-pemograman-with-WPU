// disebut global / window
var a = 1;

function scope(){
    var a = 2;
    console.log(a);
    console.log(window.a);
}

scope();
// console.log(a);