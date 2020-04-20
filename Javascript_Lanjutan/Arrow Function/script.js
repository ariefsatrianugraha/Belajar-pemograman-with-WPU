// Arrow function adalah bentuk lain yang lebih ringkas dari function eksperesion

// 1. function Experesion

// const tampilNama = function (nama){
//     return `halo , ${nama}`;
// }
// console.log(tampilNama('arief'))

// 2. Arrow Function

// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('arief'));``

// const tampilNama  = (nama, waktu) => {
//     return `Selama ${waktu}, Halo ${nama}`;
// }
// console.log(tampilNama('arief','malam'));

// inmplisit return
// Kalo satu parameter tidak usah pake kurung dan kurung kurawal
// const tampilNama = nama => `halo ${nama}`;
// console.log(tampilNama('arief'));

// JIka tanpa paramerter
// const tampilNama = () => `Hello dunia`;
// console.log(tampilNama());


// let mahasiswa = ['arief','satria','nugraha'];

// let jumlahHuruf = mahasiswa.map(function(nama){
    // return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map( nama => nama.length );
// console.log(jumlahHuruf);

// object
// let jumlahHuruf = mahasiswa.map( nama => ({
//     nama: nama,
//     jmlHuruf: nama.length
// }));
// console.table(jumlahHuruf);




// Konsep this pada Arrow Function

// 1. Constructor Function
// const Mahasiswa = function(){
//     this.nama = 'arief';
//     this.umur  = 20;
//     // console.log(this);
//     this.hello = function(){
//         console.log(`Halo ${this.nama}, umur ${this.umur}`);
//     }
// }
// const arief  = new Mahasiswa();

// 1.1 Constructoe Function with Arrow Function
// const Mahasiswa = function(){
//     this.nama = 'arief';
//     this.umur =  20;
//     this.hello = () => {
//         console.log(`halo ${this.nama}, umur ${this.umur}`);
//     }
// }
// let arief = new Mahasiswa();

// 2.Object Literal
// const mhs = {
//     nama: 'arief',
//     umur: 20,
//     // hello : function() {
//     //     console.log(`selamat ${this.nama}, umur ${this.umur}`);
//     // }
//     hello: () => {
//         console.log(`Selamat ${this.nama}, umur ${this.umur}`);
//     }
// }

// const Mahasiswa = function(){
//     this.nama = 'arief';
//     this.umur = 20;
//     this.hello = function (){
//         console.log(`hello ${this.nama}, umur ${this.umur}`);
//     }
//     // setInterval(function(){
//     //     console.log(this.umur++);
//     // },500)

//     setInterval( () => {
//         console.log(this.umur++);
//     },500);
// }
// let arief = new Mahasiswa();


// const box = document.querySelector('.box');
// box.addEventListener('click',function(){
//     this.classList.toggle('size');
//     setTimeout( () =>{
//         this.classList.toggle('caption');
//         // console.log(this);
//     },600)
// });

const box = document.querySelector('.box');
box.addEventListener('click',function(){
    let size = 'size';
    let caption = 'caption';

    if (this.classList.contains(size)){
        [size,caption] = [caption, size];
    }

    this.classList.toggle(size);
    setTimeout( () =>{
        this.classList.toggle(caption);
        // console.log(this);
    },600)
});