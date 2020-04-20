<?php

class Produk {

    public $judul;
    public $penulis;
    public $penerbit;
    public $harga;

    public function __construct($jud = "judul",$nulis = "penulis",$nerbit = "penerbit",$harga = 0){
        // echo "Hello word!!";
        $this->judul = $jud;
        $this->penulis = $nulis;
        $this->penerbit = $nerbit;
        $this->harga = $harga;
    }

    public function getLabel(){
        return "$this->penulis, $this->penerbit";
    }

}

$produk1 = new Produk("naruto","mamang samawi","matahari",9000000);
$produk2 = new Produk("SAO","kimihime","bulan",1000000);
$produk3 = new Produk("Madan");

echo "<b>Komik : </b>".$produk1->getLabel()."<br>";
echo "<b>Games : </b>".$produk2->getLabel();
echo "<br>";
var_dump($produk3);