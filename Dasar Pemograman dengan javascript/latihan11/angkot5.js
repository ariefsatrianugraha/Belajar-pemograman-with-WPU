var jmlAngkot = 10;
var angkotBeroperasi = 6;

// for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
//     if(noAngkot <= angkotBeroperasi){
//         console.log('Angkot No. '+noAngkot+' sedang beroperasi');
//     }else if(noAngkot == 8 ){
//         console.log('Angkot No. '+noAngkot+' sedang lembur');
//     }else if(noAngkot == 10){
//         console.log('Angkot No. '+noAngkot+' sedang lembur');
//     }else{
//         console.log('Angkot No. '+noAngkot+' sedang tidak beroperasi');
//     }
// }

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log('Angkot No. '+noAngkot+' sedang beroperasi');
    }else if(noAngkot == 8  || noAngkot == 10){
        console.log('Angkot No. '+noAngkot+' sedang lembur');
    }else{
        console.log('Angkot No. '+noAngkot+' sedang tidak beroperasi');
    }
}