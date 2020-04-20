// membuat obejct

// this sama dengan window
// console.log(this);
// console.log (window);
// console.log(window === this);

// var a = 10;
// console.log(this.a);

// cara 1 - function declaration
// function halo(){
//     console.log(this);
//     console.log('halo');
// }
// halo();
// window.halo();
// this.halo();

// this mengembalikan object global

// cara 2 - object literal
// var obj = {a : 10, nama :'arief'};
// obj.halo = function(){
//     console.log(this);
//     console.log('halo');
// }

// obj.halo();

// this mengembalikan object yang bersangkutan


// cara 3 - constructor
function Halo(){
    console.log(this);
    console.log('halo');
}

var obj1 = new Halo();
var obj2 = new Halo();

// this mengembalikan object yang baru dibuat
