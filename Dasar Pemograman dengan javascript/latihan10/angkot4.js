var jmlAngkot = 10;
var angkotBerperasi = 6;
var angkotLembur= 8;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBerperasi){
        console.log('Angkot No. '+ noAngkot +' beroperasi dengan baik');
    }else if (noAngkot === angkotLembur){
        console.log('Angkot No. '+ noAngkot +' sedang lebur');
    }else{
        console.log('Angkot No. '+ noAngkot +' tidak beroperasi');
    }
}