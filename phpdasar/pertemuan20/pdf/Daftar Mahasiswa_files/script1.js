// Search live jquery

$(document).ready(function(){

    // menghilangkan tombol cari
    $('#tombolCari').hide();

    // event ketika keyword di tulis
    $('#keyword').on('keyup',function(){

        // muncul icon loading
        $('.loader').show();

        // ajax menggunakan load
        // $('#container').load('ajax/mahasiswa.php?keyword='+ $('#keyword').val());

        // $.get()
        $.get('ajax/mahasiswa.php?keyword=' + $('#keyword').val(), function(data){
            $('#container').html(data);
            $('.loader').hide();
        });
    });
})