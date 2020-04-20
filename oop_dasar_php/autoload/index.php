<?php

// require_once 'App/Produk/InfoProduk.php';
// require_once 'App/Produk/Produk.php';
// require_once 'App/Produk/komik.php';
// require_once 'App/Produk/game.php';
// require_once 'App/Produk/CetakProduk.php';

require_once 'App/init.php';

$produk1 = new komik("One Piece","Masashi Kimono","Matahari",9000000 , 100);
$produk2 = new game("Sword Art Online","Arief Satria Nugraha","Bulan Bintang",6000000,50);

$cetakin = new CetakProduk;
$cetakin->daftaproduk($produk1);
$cetakin->daftaproduk($produk2);
echo $cetakin->cetak();

echo "<hr>";
new coba();