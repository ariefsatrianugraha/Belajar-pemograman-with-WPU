// cara untuk membuat object pada javascript
// 1. Object Literal

// let mahasiswa1 = {
//     nama : 'arief satria nugraha',
//     energy : 10,
//     makan : function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }    
// }

// let mahasiswa2 = {
//     nama : 'arsita wichrama',
//     energy : 20,
//     makan : function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }    
// }

// 2. Function Declaration

// function Mahasiswa(nama,energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Selamat makan ${this.nama}`);
//     }

//     mahasiswa.main = function(jam){
//         this.energi -= jam;
//         console.log(`Main sama ${this.nama}`);
//     }

//     return mahasiswa;
// }

// let arief = Mahasiswa('arief',90);
// let satria = Mahasiswa('satria',70);

// 3. Constructor Function

// function Mahasiswa(nama,energi){
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Selamat makan ${this.nama} !`);
//     }
//     this.main = function(jam){
//         this.energi -= jam;
//         console.log(`Selamat main ${this.nama}`);
//     }
// }

// let arief = new Mahasiswa('arief',50);
// let nugraha = new Mahasiswa('nugraha',50);

// 4. Object.create

// const methodMahasiswa = {
//     makan : function(porsi){
//         this.energi += porsi;
//         console.log(`Selamat makan ${this.nama}`);
//     },
//     main : function(jam){
//         this.energi -= jam;
//         console.log(`Lagi main ${this.nama}`);
//     },
//     tidur : function(jam){
//         this.energi += jam * 2;
//         console.log(`Tidur ah ${this.nama}`);
//     }
// }

// function Mahasiswa(nama,energi){
//     // let mahasiswa = {};
    
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     // mahasiswa.makan = methodMahasiswa.makan;
//     // mahasiswa.main = methodMahasiswa.main;
//     // mahasiswa.tidur = methodMahasiswa.tidur;

//     return mahasiswa;
// }

// let arief = Mahasiswa('arief',50);
// let satria = Mahasiswa('satria',50);

// 4. Prototype

// function Mahasiswa(nama,energi){
//     // let this = Object.create(Mahasiswa.prototype); secara default sudah tersedia di js

//     this.nama = nama;
//     this.energi = energi;

//     // return this; secara default sudah tersedia di js
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Selamat makan ${this.nama}`;
// }

// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return  `Selamat main ${this.nama}`;
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam * 2;
//     return `Selamat tidur ${this.nama}`;
// }

// let arief = new Mahasiswa('arief',50);

// 6. versi class

class Mahasiswa{
    constructor(nama,energi){
        this.nama = nama;
        this.energi = energi;
    }

    main(jam){
        this.energi -= jam;
        return `Selamat main ${this.nama}`;
    }

    tidur(jam){
        this.energi += jam * 2;
        return `Selamat tidur ${this.nama}`;
    }

    makan(porsi){
        this.energi += porsi;
        return `Selamat makan ${this.nama}`;
    }
}

let arief = new Mahasiswa('arief',50);


// js itu semua nya prototype
// let angka = [1,2,3];
// console.log(angka.sort())
// console.log(Array.prototype);