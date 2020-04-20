// array adalah
// - variable jamak, yang memmpunyai banyak elemen dan diacu dnegan nama yang sama
// - kumpulan pasangan key dan nilao / key and value pair
// - key adalah index pada array dengan tipe integer yang dimulai dari 0
// - array pada javascript bertipe object
// - array pada javascript memiliki fungsi / method leght untuk menghitung jumlah elemen di dalamnya
// - elemen pada array boleh memiliki tipe data yang berbeda

var binatang = ['kucing','kelinci','ayam','kambing','sapi'];

var hari = ['senin','selasa','rabu','kamis','jumat','sabtu','minggun'];

var angka = [1,2,3];

var myfuction = function(){
    alert('hello word');
}

var ini = [2,'string',false,myfuction,[4,6,2]];

// console.log(typeof(binatang));

console.log(binatang.length);

console.log(binatang[4]);

console.log(ini[3]);

console.log(ini[4][2]);