// Higher order function adalah function yang beroperasi pada function yang lain,Bain digunakan dalam argument,maupun sebagai return value
// Javacript memperlakukan function sebagai object
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka yang lebih besar  >= 3
// for
 
// const newAngka = [];
// for(let i = 0 ; i < angka.length ; i++){
//     if  (angka[i] >= 3){
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// filter

// const newAngka = angka.filter(function(a){
//     return a >= 3;
// })
// console.log(newAngka);

// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// map : tidak mengubah isi nilai

// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);
// console.log(angka)

// reduce : melakukan sesuatu pada seluruh elemen
// punya dua argument
// ada satu nilai awal yaitu 0 bisa di rubah atau tidak dipakai tapi secara default nya 0

// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);


// method chaining

const hasil = angka.filter( a => a > 5).map( a => a * 3).reduce((acc,cur) => acc + cur);
console.log(hasil);