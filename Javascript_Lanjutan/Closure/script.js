// Execution Context, Hoisting, & Scope

// console.log(nama);
// var nama = 'arief';

// Creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// Execution phase

// console.log(sayHel);
// console.log(sayHel());

// var nama = 'Arief';
// var umur = 20;

// console.log(sayHel());

// function sayHel(){
    // return(`Halo, nama saya ${nama}, dan ${umur} umur `);
// }

// function membuat local Execution Context
// yang didalamnya terdapat creation dan execiton phase
// window
// arguments
// hoisting

// var nama = 'arief satria nugraha';
// var username = '@ariefganteng';

// function cetakURL(){
//     console.log(arguments);
//     var ig = 'http/instagram.com/';
//     return ig + username;
// }

// // console.log(cetakURL(username));

// console.log(cetakURL('@satriaganteng'))

// function a(){
//     console.log('ini a');

//     function b(){
//         console.log('ini b');

//         function c(){
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a();


// function satu(){
//     var nama = 'arief';
//     console.log(nama);
// }

// function dua(){
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'satria';
// satu();
// dua('nugraha');
// console.log(nama);


// Closure merupakan kombinasi antara function dan lingkungan leksikal(lexsical scope) di dalam function tersebut
// Closure adalah sebuah function ketika memiliki akses ke parent scope-nya, meskipu parent scope-nya sudah selesai di eksekusi
// Closure adalah sebuah function dikembalikan oleh function yang lain ,yang memiliki akses ke lingkungan saat ia diciptakan
// Closure adalah sebuah fucntion yang sebelumnya sudah memiliki data,hasil dari function yang lain

// function init(){
//     // let nama = 'arief';
//     // let umur = 20;
//     // function tampilNama(nama){
//     return function(nama){
//         console.log(nama);
//         // console.log(umur);
//     }
//     // tampilNama();
//     // console.dir(tampilNama);
//     // return tampilNama;
// }
// // init();
// let panggilNama = init();
// // panggilNama();
// panggilNama('satria')


// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Selamat ${waktu}, saudara ${nama} di sini haha`);
//     }
// }

// let pagi = ucapkanSalam('pagi');
// let siang = ucapkanSalam('siang');
// let malam = ucapkanSalam('malam');

// // malam('arief');
// // siang('satria');
// // pagi('nugraha');

// console.dir(siang('arief'));


// let counter = 0;
// let add = function(){
//     return ++ counter;
// }
// console.log(add());
// console.log(add());
// console.log(add());


// let add = function(){
//     let counter = 0;
//     return function(){
//         return ++ counter;
//     }
// }
// let a = add();
// counter = 100;
// console.log(a());
// console.log(a());
// console.log(a());



let add = (function(){
    let counter = 10;
    return function(){
        return ++ counter;
    }
})();
counter = 100;
console.log(add());
console.log(add());
console.log(add());
