<!-- String -->

<!-- strlen() untuk menghitung panjang dari sebuah string / len dari sebuag string -->
<!-- strcamp() / string compile untuk membandingkan dua buah string -->
<!-- explode() untuk memecah sebuah string menjadi array  -->
<!-- htmlspecialchart untuk function khusus untuk menjaga dari hacker -->

<!-- utility -->
<!-- Var_dump() untuk mencetak isi dari sebuah variable,object, array-->
<!-- isset() untuk ngecek apakah sebuah variable sudah diisi atau belom ,akan menhasilkan nilai boolean (true/false) -->
<!-- empty() untuk ngecek variable sudah ada atau tidak -->
<!-- die() untuk memberhentikan program  -->
<!-- sleep() untuk berhenti sementara -->

<?php
    // use-define function
    

    function salam($waktu , $nama = "arief"){
        return "Selamat $waktu $nama";
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Latihan function</title>
</head>
<body>
    <h1><?php echo salam("pagi"); ?></h1>
</body>
</html>