var jmlAngkot = 10;
var angkotBeroperasi = 5;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi){
    console.log('angkot No. '+noAngkot+' beroperasi dengan baik');
    noAngkot++;
}

// for(noAngkot = 7;noAngkot <= jmlAngkot;noAngkot++){
//     console.log('angkot No. '+noAngkot+' tidak bisa beroperasi')
// }

for(noAngkot = angkotBeroperasi + 1;noAngkot <= jmlAngkot;noAngkot++){
    console.log('angkot No. '+noAngkot+' tidak bisa beroperasi')
}
