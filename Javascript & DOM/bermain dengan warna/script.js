const UbahWarna = document.getElementById('btnUbahWarna');

UbahWarna.onclick = function(){
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class','hijau-muda');
    document.body.classList.toggle('hijau-muda');
}

const btnAcakWarna = document.createElement('button');
const textBtnAcakWarna = document.createTextNode('Acak Warna');
btnAcakWarna.appendChild(textBtnAcakWarna);
btnAcakWarna.setAttribute('type','button');

UbahWarna.after(btnAcakWarna);

btnAcakWarna.addEventListener('click',function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    // console.log(r);

    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})

const slideMerah = document.querySelector('input[name=slideMerah]');
const slideHijau = document.querySelector('input[name=slideHijau]');
const slideBiru = document.querySelector('input[name=slideBiru]');

slideMerah.addEventListener('input',function(){
    const r = slideMerah.value;
    const g = slideHijau.value;
    const b = slideBiru.value;
    document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
});

slideHijau.addEventListener('input',function(){
    const r = slideMerah.value;
    const g = slideHijau.value;
    const b = slideBiru.value;
    document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
});

slideBiru.addEventListener('input',function(){
    const r = slideMerah.value;
    const g = slideHijau.value;
    const b = slideBiru.value;
    document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
});

document.body.addEventListener('mousemove',function(event){
    // posisi sumbu x dan y = clientX & clientY
    // ukuran browser = window.innerWidth

    const xPosisi = Math.round((event.clientX / window.innerWidth)* 255) ;
    // console.log(xPosisi);
    const yPosisi = Math.round((event.clientY / window.innerHeight)* 255) ;
    // console.log(xPosisi);

    document.body.style.backgroundColor = 'rgb('+xPosisi+','+yPosisi+',126)';
})