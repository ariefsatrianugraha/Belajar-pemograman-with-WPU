// Rest Parameter

// function funt(...mus){
//     return mus;
// }

// function funt(){
//     // mengubah object menjadi array
//     // return [...arguments];
//     return Array.from(arguments)
// }
// console.log(funt(1,2,3,4,5));

// function jumlah(...angka){
    // let ka = 0;
    // for( ang of angka){
    //      ka += ang ;
    // }
    // return ka;

    // return angka.reduce((ang,ka) => ang + ka );
// }

// console.log(jumlah(1,2,3,4,5));


// array destructuring
// const nama = ['arief','satria','nugraha','sat','nug','raha'];
// const [km,wkm,sk,...anggota] = nama;
// console.log(sk);

// object destructuring
// const teamcol = {
//     ketua:'arief satria nugraha',
//     wket : 'mamang sudrajat',
//     bendahara : 'siska si cantik',
//     jubir : 'mang ohang',
//     kont : 'juragan'
// }
// const {ketua,wket,...juri} = teamcol;
// console.log(juri);


// filtering
function fil (type, ...values){
    return values.filter(f => typeof f === type);
}

console.log(fil('number',1,2,'arief',false,5,'satir',true))
console.log(fil('string',1,2,'arief',false,5,'satir',true))
console.log(fil('boolean',1,2,'arief',false,5,'satir',true))