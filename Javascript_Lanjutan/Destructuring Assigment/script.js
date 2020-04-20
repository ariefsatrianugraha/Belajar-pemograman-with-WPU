// Expression pada javascript yang membuat kita dapat membongkar nilai dari array atau properti dari object kedalam variable yang terpisah


// destructuring Variable / Assigment array

// const mhs = ['arief','satria','nugraha','bambang'];
// const mas = mhs[0];
// const mah = mhs[2];
// console.log(mah);

// const [satu,dua,tiga,empat] = mhs;

// skipping items
// const [satu, ,tiga, ,] = mhs;
// console.log(satu);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);

// [a , b] = [b , a];
// console.log(a);
// console.log(b);


// return value pada function
// function array(){
//     return [1,2];
// }
// const [a,b] = array();
// console.log(b)

// rest parameter
// const [a, ...values] = [1,2,3,4,5];
// console.log(a);
// console.log(values)


// destructuring Variable / Assigment object

// const mhs = {
//     nama : 'arief satria nurgaha',
//     kelas : 'ik'
// };
// const { nama , kelas} = mhs;
// console.log(nama)

// Assigment tanpa deklarasi object

// ({nama , kelas} = {
//     nama : 'arief satria nugraha',
//     kelas : 'ik'
// });
// console.log(nama);

// Assign ke variable yang baru
// const mhs = {
//     nama : 'arief satria nugraha',
//     kelas : 'ik'
// };
// const {nama : n ,kelas : k} = mhs;
// console.log(k);

// memberi default value
// const mhs = {
//     nama : 'arief satria nugraha',
//     kelas : 'ik',
//     email : 'ariefsatria@gmail.com'
// };
// const {nama, kelas ,email = "email@default.com" } = mhs;
// console.log(email);

// memberi nilai default + assign ke variable baru
// const mhs = {
//     nama : 'arief satria nugraha',
//     kelas : 'ik',
//     email : 'ariefsatria@gmail.com'
// };
// const {nama :  n,  kelas : k,email :e = "email@default.com" } = mhs;
// console.log(e);

// rest parameter
// const mhs = {
//     nama: 'arief satria nugraha',
//     kelas : 'ik',
//     email : 'arief satria nugraha'
// }
// const {nama , ...values} = mhs;
// console.log(values)


// mengambil filed pada object, setelah dikirim sebagai parameter untuk function 
// const mhs= {
//     id : 123,
//     nama : 'arief',
//     kelas : 'ik',
// }

// function getIdmhs ({id}) {
//     return id;
// }
// console.log(getIdmhs(mhs))


// Destructuring
// function jumlahkali( a , b){
//     return [ a + b , a * b, a / b ];
// }

// const jumlah = jumlahkali(2,3)[0];
// const kali = jumlahkali(2,3)[1];
// const [jumlah, kali] = jumlahkali(2,3);
// const [jumlah , kali, bagi, kurang  = 'tidak ada'] = jumlahkali(2,3);
// console.log(kurang);


// function kalkulator( a, b) {
//     return {
//         jumlah : a + b,
//         kali : a * b,
//         kurang : a - b,
//         bagi : a / b
//     }
// }
// const {jumlah,bagi,kali,kurang} = kalkulator(2,5);
// console.log(bagi);


// Destruction function argument

const mhs = {
    nama : 'arief',
    kelas : 'ik',
    umur : 20,
    nilai : {
        uas : 80,
        uts : 90,
        tugas : 50
    }
}

// function mhas ( nam , umu ){
//     return `nama saya ${nam}, umur saya ${umu}`;
// }

// function mhas (sis){
//     return  ` nama saya ${sis.nama}, dan kelas ${sis.kelas}`;
// }
// console.log(mhas(mhs));
// console.log(mhas(mhs.nama, mhs.umur))

function sis({ nama , kelas , umur , nilai : {uas ,uts,tugas } }){
    return `nama saya ${nama}, kelas ${kelas} , umur ${umur}, nilai : ${uts}`;
}

console.log(sis(mhs))