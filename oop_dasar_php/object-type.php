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

class CetakProduk{
    public function cetak(produk $produk){
        $string = "{$produk->judul} | {$produk->getLabel()} (Rp. {$produk->harga} )";
        return $string;
    }
}

$produk1 = new Produk("naruto","mamang samawi","matahari",9000000);
$produk2 = new Produk("SAO","kimihime","bulan",1000000);

echo "<b>Komik : </b>".$produk1->getLabel()."<br>";
echo "<b>Games : </b>".$produk2->getLabel();
echo "<br>";

$infoCetak = new CetakProduk();
echo $infoCetak->cetak($produk1);