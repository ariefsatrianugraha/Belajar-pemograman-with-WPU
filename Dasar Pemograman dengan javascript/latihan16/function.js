function tambah(a,b){
    return a + b;
}

function kali(a,b){
    return a * b;
}

// console.log(tambah(9,5));

// var a=10;
// var b=8;
// console.log(tambah(a,b));

// var hasil = tambah(6,9);
// console.log(hasil);

// var a = 8;
// var b = 9;
// var hasil = tambah(a,b);
// console.log(hasil);

// var a = parseInt(prompt('masukan nilai 1 :'));
// var b = parseInt(prompt('masukan nilai 2 :'));
// var hasil = tambah(a,b);
// console.log(hasil);

// var a = parseInt(prompt('masukan nilai 1 :'));
// var b = parseInt(prompt('masukan nilai 2 :'));
// var hasil = tambah(a * 2,b * 2);
// console.log(hasil);

// var hasil = kali(tambah(2,2), tambah(3,3));
// console.log(hasil);

var a1 = parseInt(prompt('masukan nilai a1 :'));
var b1 = parseInt(prompt('masukan nilai b1 :'));
var a2 = parseInt(prompt('masukan nilai a2 :'));
var b2 = parseInt(prompt('masukan nilai b2 :'));
var hasil = kali(tambah(a1,b1), tambah(a2,b2));
console.log(hasil);
