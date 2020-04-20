// callback adalah function yang dikirimkan sebagai parameter pada function pada function lain / SEBUAH function di eksekusi setelah function itu di jalankan

// sycronus callback
// function halo(nama){
//     alert(`halo ${nama}`);
// }

// function panggil(callback){
//     const name = prompt(`Masukan nama :`);
//     callback(name);
// }

// panggil(halo);
// panggil(function(nama){
//     alert(`hello ${nama}`);
// })
// panggil(nama => alert(`halo ${nama}`));

// const mhs = [
//     {
//         nama:'arief satria nugraha',
//         kelas : 'ik',
//         nrp : '082301',
//         email:'ariefsatria@gmail.com',
//         idWali : 1
//     },
//     {
//         nama : 'satrian bergetar',
//         kelas:'ti',
//         nrp: '39280423',
//         email:'satrian@gmail.com',
//         idWali: 2
//     },
//     {
//         nama:'yuslomakom',
//         kelas:'sk',
//         nrp : '980231',
//         email:'kokom@gmail.com',
//         idWali:3
//     }
// ];
// console.log('mulai');
// mhs.forEach(m => {
//     for(let i = 0 ; i < 10000000 ; i++){
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');

// Asynchronus Callback

// function getDataMahasiswa(url,success,error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response);
//             }else if(xhr.status === 404){
//                 error();
//             }
//         }
//     }
//     xhr.open('get',url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json',result => {
//     // console.log(result);
//     // console.log((JSON.parse(result)));
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));
// }, error => {
// });
// console.log('selesai');


// Jquery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success : (result) =>{
        // console.log(result)
        result.forEach(m =>console.log(m.nama));
    },
    error : (err) =>{
        console.log(err.responseText);
    }
})
console.log('selesai');