// Template Literals / Template String
// const nama = 'Arief';
// const umur = 20;

// console.log('halo nama saya' + nama + ', dan umur saya' + umur )
// console.log(`halo nama saya ${nama}, dan umur saya ${umur}`);

// embedded expressions
// console.log(`${1 + 1}`);
// console.log(`${alert('arief')}`);
// const x = 10;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// 1. HTML Fragment
// const mhs = {
//     nama : 'arief satria nugraha',
//     umur : 20,
//     nrp :123456,
//     email : 'ariefsatria991@gmail.com'
// }

// const mas = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <h2>${mhs.umur}</h2>
//     <span>${mhs.nrp}</span>
// </div>`;

// console.log(mas);


// 2. Looping
// const mhs = [
//     {
//         nama: 'arief',
//         email : 'arief@gmail.com'
//     },
//     {
//         nama: 'satria',
//         email: 'satria@gmail.com'
//     },
//     {
//         nama: 'nugraha',
//         email : 'nugraha@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')} </div>`;


// 3. conditionals
// ternary

// const lagu = {
//     judul : 'mawar merah',
//     penyanyi : 'uus',
//     feat: 'anang'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.penyanyi}</li>
//         ${lagu.feat ? `<li>${lagu.feat}</li>` : ''}
//     </ul>
// </div>`;


// net
// html fragment bersarang
// const mhs = {
    // nama:'arief',
//     semester : '4',
//     matkul : ['oop','android','web','analisis']
// };

// function cetakMatkul(kul) {
//     return `<ol>
//         ${ kul.map( mk => `<li>${mk} </li>`).join('')}
//     </ol>`
// }

// const el = `<div class="">
//     <h2>${mhs.nama}</h2>
//     <h2>Semester : ${mhs.semester}</h2>
//     <h2>Matkul : </h2>
//     ${cetakMatkul(mhs.matkul)}
// </div>`

// document.body.innerHTML = el;


// tangged Templates

const nama = 'Arief Satria Nugraha';
const umur = 20;

// function coba(){
//     return 'coba';
// }

// function coba (str){
//     return str;
// }

// function coba (str,nama,umur){
//     return umur;
// }

// function coba (str , ...values){
//     return values;
// }

// function coba (str, ...values){
//     // let st = '';
//     // str.forEach((stt, i) => {
//     //     st += `${stt}${values[i] || ''}`;
//     // })
//     // return st;

//     return str.reduce((hasil,stt, i ) => `${hasil}${stt}${values[i] || ''}`, '');
// }
// const str = coba`Nama saya ${nama}, dan umur saya ${umur}`;
// console.log(str);


// Highlight

const email = 'ariefsatria991@gmail.com'

function Highlight (str, ...values){
    return str.reduce((hasil,stt, i ) => `${hasil}${stt}<span class='ye'>${values[i] || ''}</span> `, '');
}
const str = Highlight`Nama saya ${nama}, dan umur saya ${umur} dan email saya : ${email}`;
document.body.innerHTML = str;