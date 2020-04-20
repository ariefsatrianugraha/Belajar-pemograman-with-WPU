// for ... of

// const mhs = ['arief','satria','nugraha'];

// for( let i = 0 ; i < mhs.length ; i ++){
//     console.log(mhs[i]);
// }

// mhs.forEach( m => console.log(m));

// for(const m of mhs){
//     console.log(m)
// }


// string
// const nama = 'arief';
// for(const n of nama){
//     console.log(n)
// }

// mhs.forEach( ( m, i) => {
//     console.log(`${m} adalah mahasiswa ke - ${i + 1}`)
// });

// for(const [m , i] of mhs.entries()){
//     console.log(`${i} adalah mahasiswa ke - ${m + 1}`)
// }

// nodeList

// const liNama = document.querySelectorAll('.nama');

// liNama.forEach( n => console.log(n.innerHTML));

// for(const n of liNama){
    // console.log(n.textContent)
// }


// Arguments

// function jumlahangka (){
//     let jumlah = 0;
//     for(j of arguments){
//         jumlah += j;
//     }
//     return jumlah;
// };

// console.log(jumlahangka(1,2,3,4,5))

// for...in

const mhs = {
    nama : 'arief satria nugraha',
    kelas : 'ik',
    umur : 20
};

for( m in mhs){
    // console.log(m)
    console.log(mhs[m])
}