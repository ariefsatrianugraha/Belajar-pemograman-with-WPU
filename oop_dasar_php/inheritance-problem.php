<?php

class Produk {

    public $judul;
    public $penulis;
    public $penerbit;
    public $harga;
    public $jumlahHalaman;
    public $waktuMain;
    public $tipe;

    public function __construct($jud = "judul",$nulis = "penulis",$nerbit = "penerbit",$harga = 0,$jumlahHalaman = 0, $waktuMain = 0, $tipe){
        // echo "Hello word!!";
        $this->judul = $jud;
        $this->penulis = $nulis;
        $this->penerbit = $nerbit;
        $this->harga = $harga;
        $this->jumlahHalaman = $jumlahHalaman;
        $this->waktuMain = $waktuMain;
        $this->tipe = $tipe;
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

class cetakProdukLengkap{
    public function cetakProduk( produk $produk){
        $string = "{$produk->tipe} : {$produk->judul}, {$produk->getLabel()} ({Rp. $produk->harga})";
        if($produk->tipe == "Komik"){
            $string .= " {$produk->jumlahHalaman} Halaman";
        }elseif($produk->tipe == "Game"){
            $string .= " {$produk->waktuMain} Waktu";
        }
        return $string;
    }
}

$produk1 = new Produk("One Piece","Masashi Kimono","Matahari",9000000 , 100 ,0, "Komik");
$produk2 = new Produk("Sword Art Online","Arief Satria Nugraha","Bulan Bintang",6000000 ,0,50 , "Game");

// komik : One Piece | Masashi Kimono, Matahari (4000000) ~ 100 Halaman.
// Game : Sword Art Online | Arief Satria Nugraha, Bulan Bintang (8000000) ~ 50 Jam.

$info = new cetakProdukLengkap();
echo $info->cetakProduk($produk1);
echo "<br>";
echo $info->cetakProduk($produk2);