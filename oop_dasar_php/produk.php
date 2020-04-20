<?php

// jumlah produk
// komik
// game

class Produk {

    public $judul = "judul";
    public $penulis = "penulis";
    public $penerbit = "penerbit";
    public $harga = 0;

    // public function hell(){
    //     return "Hello Word";
    // }

    public function getLabel(){
        return "$this->penulis, $this->penerbit";
    }

}

// $produk1 = new produk();
// $produk1->judul = "SAO";
// var_dump($produk1);

// $produk2 = new Produk();
// $produk2->penulis = "bambang pamungkas";
// $produk2->tambahProperty = "tambah";
// // var_dump($produk2->judul);
// var_dump($produk2);

$produk3 = new Produk();
$produk3->judul = "Charlotte";
$produk3->penulis = "Arief Satria Nugraha";
$produk3->penerbit = "Shonen Jump Bandai";
$produk3->harga = 9000000;
// var_dump($produk3);

// echo "Komik Perdana : $produk3->penulis, $produk3->penerbit ";
// echo "<br>";
// echo $produk3->hell();
// echo $produk3->getLabel();

$produk4 = new produk();
$produk4->judul = "SAO";
$produk4->penulis = "Bambang Pamungkas";
$produk4->penerbit = "Matahari Terbenam";
$produk4->harga = 700000;

echo "<b>Komik : </b>".$produk3->getLabel()."<br>";
echo "<b>Games : </b>".$produk4->getLabel();
