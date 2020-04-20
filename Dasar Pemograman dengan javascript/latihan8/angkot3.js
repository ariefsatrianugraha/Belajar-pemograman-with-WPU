var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;


for(noAngkot ; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log('Angkot No. '+noAngkot+ ' sedang beroperasi');
    }else{
        console.log('Angkot No. '+noAngkot+ ' tidak sedang beroperasi')
    }
}