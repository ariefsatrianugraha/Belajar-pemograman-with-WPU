// Pasing dari object ke json

// let mahasiswa ={
//     nama : "Arief Satria Nugraha",
//     nrp : "12345",
//     email : "ariefsatia@gmail.com"
// };
// // console.log(mahasiswa);
// console.log(JSON.stringify(mahasiswa));

// passing dari json ke object

// menggunakan vanila javascript
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4 && xhr.status == 200){
//         // let mahasiswa = this.responseText;
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }
// xhr.open('GET','json/coba.json', true);
// xhr.send();

// mengunkkana jquery
$.getJSON('json/coba.json',function(data){
    console.log(data);
});