function getPilihanComputer(){
    const comp = Math.round(Math.random() * 10);    

    if(comp < 4) return 'gajah';
    if(comp >= 4 && comp < 7) return 'orang';
    return 'semut';
}

function getHasil(comp,player){
    if(player == comp) return 'SERI!';
    if(player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if(player == 'orang') return (comp == 'semut') ? 'MENANG' : 'KALAH';
    if(player == 'semut') return (comp == 'gajah') ? 'MENANG' : 'KALAH'; 
}

// const playerGajah = document.querySelector('.gajah');
// playerGajah.addEventListener('click',function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = playerGajah.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);
//     // console.log('Computer : '+ pilihanComputer);
//     // console.log('Plater : '+ pilihanPlayer);
//     // console.log('Hasil :'+ hasil);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src','img/'+pilihanComputer+'.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const playerOrang = document.querySelector('.orang');
// playerOrang.addEventListener('click',function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = playerOrang.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);
//     // console.log('Computer : '+ pilihanComputer);
//     // console.log('Plater : '+ pilihanPlayer);
//     // console.log('Hasil :'+ hasil);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src','img/'+pilihanComputer+'.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const playerSemut = document.querySelector('.semut');
// playerSemut.addEventListener('click',function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = playerSemut.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);
//     // console.log('Computer : '+ pilihanComputer);
//     // console.log('Plater : '+ pilihanPlayer);
//     // console.log('Hasil :'+ hasil);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src','img/'+pilihanComputer+'.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });


function putar(){
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah','orang','semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function(){
        if (new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src','img/'+gambar[i++]+'.png');
        if (i == gambar.length) i = 0;
    },100)
}


const pilihan = document.querySelectorAll('li img');

pilihan.forEach(function(pil){
    pil.addEventListener('click',function(){
        // console.log(pil);
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer,pilihanPlayer);

        putar();

        setTimeout(function(){
            const imgComputer= document.querySelector('.img-computer');
            imgComputer.setAttribute('src','img/'+pilihanComputer+'.png');
    
            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000)
       
    })
})