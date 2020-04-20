// Memanipulasi Array

// 1. Menambah isi array
// var arr = ['a',3,true];
// console.log(arr);
// console.log(arr[2]);

// var arr= [];
// arr[0]='arief';
// arr[1]=true;
// arr[2]='satria';

// console.log(arr[0]);

// 2.mengahpus array;
// var arr = ['arief','satria','nugrhaa'];
// arr[1]=undefined;
// console.log(arr);

// 3.Menampilkan isi array
// var arr = ['arief','satria','nugraha','sita'];

// for ( var i = 0 ; i < 3; i++){
//     console.log('mahasiswa '+i+' teladan - '+arr[i]);
// }

// for ( var i = 0 ; i < arr.length; i++){
//     console.log('mahasiswa '+i+' teladan - '+arr[i]);
// }



// 4.array method
var arr=['arief','satria','nugraha','popoy'];
// join untuk menyambungkan
// console.log(arr.join());
// console.log(arr.join(' - '));

// push untuk menambahkan bagian belakang
// arr.push('gita');
// arr.push('gita','sita');
// console.log(arr.join());

// pop untuk menghapus bagian belakang
// arr.pop();
// arr.pop();
// console.log(arr.join());

// unshift untuk menambahkan bagian depan
// arr.unshift('bambang');
// arr.unshift('bambang','koko');
// console.log(arr.join());

// // shift untuk menghapus bagian depan
// arr.shift();
// console.log(arr.join());

// splice untuk menyisipkan di tengah tengah
// splice (index awal,mau dihapus berapa opt,elemen baru1,elemen baru2,...);
// arr.splice(1,0,'juju','koko');
// arr.splice(2,1,'popoy');
// console.log(arr.join(' - '))


// slice untuk mengambil nilai tengah
// slice (index awal, index akhir);
// slice mengambil nilai baru
// var arrbaru = arr.slice(1,3);
// console.log(arrbaru.join());


// forEach untuk pengulangan
// var angka = [1,2,3,4,5,6,7];
// var nama = ['arief','satria','nugraha'];
// for(var i = 0 ; i <angka.length; i++){
//     console.log(angka[i]);
// }

// angka.forEach(function(a){
//     console.log(a);
// })

// nama.forEach(function(e, i){
//     console.log('mahasiswa ke- '+(i+1)+ ' dari ' + e);
// })


// map untuk pengulangan meenggunakan nilai balik atau return
// var angka = [2,4,5,2,6,8,1];
// var angka2 = angka.map(function(w){
//     return w * 2;
// })

// console.log(angka2.join());

// sort untuk mengurutkan

// var angka = [3,2,1,4,7,5,6];
// console.log(angka.join(' - '))
// angka.sort();

// console.log(angka.join(' - '));

// var angka = [3,2,1,4,7,5,6,23,12];
// console.log(angka.join(' - '))
// angka.sort(function(a,b){
//     return a-b;
// });

// console.log(angka.join(' - '));


// filter mencari dan  mengembalikan banyak nilai dan dalam bentuk array
// var angka = [4,2,5,7,3];
// var angka2 = angka.filter(function(x){
//     // return x == 5;
//     return x > 3
// })

// console.log(angka2.join());

// find mengmbalikan satu nilai

var angka = [5,2,6,7,3,1];
var angka2 = angka.find(function(d){
    return d == 6;
    // return d == 4;
});

console.log(angka2);