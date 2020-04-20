// untuk pengulangan
var ulang = true;
while(ulang){

    // untuk pilihan player


    var p = prompt('pilihan : gajah, semut, orang');

    //menampilkan pilihan computer
    // memangkitkan bilangan random

    var comp = Math.random();
    // console.log(comp);

    if(comp < 0.34){
        comp = 'gajah';
    }else if(comp >= 0.34 && comp < 0.67){
        comp = 'orang';
    }else{
        comp = 'semut';
    }

    // menentukan rules
    var hasil ='';
    if(p == comp){
        hasil = 'seri';
    }else if(p == 'gajah'){
        if(comp == 'orang'){
            hasil = 'menang';
        }else{
            hasil = 'kalah';
        }
    }else if(p == 'orang'){
        if(comp == 'semut'){
            hasil = 'menang';
        }else{
            hasil = 'gajah';
        }
    }else if(p == 'semut'){
        if(comp == 'gajah'){
            hasil = 'menang';
        }else{
            hasil = 'kalah';
        }
    }else{
        hasil = 'tidak memasukan pilihan yang salah goblok!!';
    }


    // tampil hasil
    alert('Player memilih :'+p+'\nComputer memilih :'+comp+' \nHasil : Selamat anda '+hasil);

    ulang = confirm('Ingin ngulang gk njing??');

} 

alert('Terima kasih anda telah memainkan game yang gk jelas ini!!! :(')