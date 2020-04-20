<?php
// Array
// Variable yang memiliki banyak nilai
// Elemen pada array boleh memiliki tipe data yang berbeda
// pasangan antara key dan value
// key nya adalah index , yang dimulai dari 0

// membuat array
// cara lama
$hari = array("senin","selasa","rabu");
// cara baru
$bulan = ["januari","februari","maret"];
$arr1 = [123,"ini", false];


// Menampilkan Array
// bisa menggunakan var_dump / print_r untuk programer bukan buat user
// var_dump($hari);
// echo "<br>";
// print_r($bulan);
// echo "<br>";

// Menamppilkan 1 elemen
// echo $arr1[0];
// echo "<br>";
// echo $bulan[1];

// Menambahkan elemen baru pada array
var_dump($hari);
echo "<br>";
$hari[] = "kamis";
$hari[] = "Jum'at";
$hari[] = "Sabtu";

print_r($hari);
?>