//  ambil element yang dibutuhkan

let keyword = document.getElementById('keyword');
let tombolCari = document.getElementById('tombolCari');
let container = document.getElementById('container');

// tombolCari.addEventListener('click',function(){
//     // alert('ok');
// })

// tambahakan eveny ketika keyword ditulis
keyword.addEventListener('keyup',function(){
    // alert('ok')
    // console.log(keyword.value);

    var xhr = new XMLHttpRequest();

    // cek kesiapan ajax
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            // console.log('ajax ok');
            // console.log(xhr.responseText)
            container.innerHTML = xhr.responseText;
        }
    }

    // eksekusi ajax
    xhr.open('GET','ajax/mahasiswa.php?keyword=' + keyword.value ,true);
    xhr.send();
})