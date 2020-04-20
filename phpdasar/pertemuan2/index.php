<?php
// Pengenalan komentar
/* ini juga komentar */

// Pertemuan 2 - php dasar
// sintak php

// standar output (sebuah perintah untuk mencetak layar)

// echo , print
// print_r (khusus digunakan untuk isi array)
// var_dump (melihat isi sebuah variable,akan muncul info pada variable,ukuran string )

// echo "Arief";
// print " Satria";
// print_r(" Nugraha, ");
// var_dump("Arief Satria Nugraha");

// // angka
// echo 19;

// // boolean
// echo true;
// echo false;

// Penulisan sintaks PHP
// 1.PHP dalam HTML
// 2.HTML dalam PHP
?>
<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>belajar PHP</title>
</head>
<body>
    <h1>Hello saya belajar <?php echo "Ini itu" ?></h1>
    <p><?php echo "ini adalah paragraf ke 2" ?></p>

    <?php
        echo "<h1> Selamat Datang sayang </h1>";
    ?>
</body>
</html> -->

<!-- <?php
// Variable dan tipe data
// variable digunakan untuk menampung sebuah nilai di  php menggunakan $
// variable tidak boleh di awalii angka tapi boleh menggnakan angka 
$nama = "surif";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Antonim</title>
</head>
<body>
    <h1>hai kawan <?php echo $nama ?></h1>
</body>
</html>
 -->

<?php
// Operator Aritmatika
//  + , -, *,/ ,%
// $x = 10;
// $y = 90;
// echo $x * $y;

// Penggambungkan String / concatenari / concat
// simbol dengan .
// $nama_depan = 'arieees';
// $belangkang = 'ijupp';
// echo $nama_depan." ".$belangkang

// Assigment (operator penugasan)
//  =,+=,-=,*=,/=,%=,.=

// $x = 1;
// echo $x.", ";

// $y = 2;
// $y = 7;
// echo $y.", " ;

// $r = 2;
// $r += 7;
// echo $r.", ";

// $a = 'Aief';
// $a .= " ";
// $a .= 'Satria';
// echo $a;

// perbandingan
// <,>,<=,>=,==,!=

// var_dump(1 > 5);
// var_dump(1 < 5);
// var_dump(1 == 5);
// var_dump(1 == "1");

// identitas
// ===, !==

// var_dump(1 === "1");

// Logika
// &&, ||,!
$x = 10;
var_dump($x < 20 && $x % 2 == 0 ); 
// Operator && (dan) itu dua kondisi benar maka hasil nya true,jika salah satu salah maka hasil nya false ,jadi harus dua duanya
$y = 30;
var_dump($y <20 || $y % 2 == 0 );
//  operator  || (or) satu saja yang betul maka hasilnya true
?>
