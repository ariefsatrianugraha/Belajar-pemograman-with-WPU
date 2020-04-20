<?php
// date
// Untuk menampilkan tanggal dengan format tertentu
// echo date("l , d - M - Y");

// time
// UNIX Timecamp / EPOCH time
// waktu pada komputer dimulai pada 1 januari 1970
// // echo time()
// echo date("l", time()+60*60*24*100); //pengecekan 100 hari ke depan
// echo date("l", time()-60*60*24*100); //pengecekan 100 hari ke belakang

// mktime
// Membuat sendiri detik
// mktime (0,0,0,0,0,0)
// jam,menit,detik,bulan,tanggal,tahun

// echo mktime(0,0,0,19,10,1999)
// echo date("l" , mktime(0,0,0,19,10,1999));

// strtotime
// echo strtotime("19 october 1999");

// echo date ("l", strtotime("19 october 1999"));

?>