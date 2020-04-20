<?php

require_once 'App/init.php';

// $produk1 = new komik("One Piece","Masashi Kimono","Matahari",9000000 , 100);
// $produk2 = new game("Sword Art Online","Arief Satria Nugraha","Bulan Bintang",6000000,50);

// $cetakin = new CetakProduk;
// $cetakin->daftaproduk($produk1);
// $cetakin->daftaproduk($produk2);
// echo $cetakin->cetak();

// echo "<hr>";

use App\Service\User as serviceUser;
use App\Produk\User as produkUser;

new serviceUser();
new produkUser();
// echo "<br>";
// new App\Produk\User();

