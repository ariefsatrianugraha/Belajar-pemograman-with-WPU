<?php

class Produk {

    public $judul;
    public $penulis;
    public $penerbit;
    public $harga;
    public $jumlahHalaman;
    public $waktuMain;

    public function __construct($jud = "judul",$nulis = "penulis",$nerbit = "penerbit",$harga = 0,$jumlahHalaman = 0, $waktuMain = 0){
        // echo "Hello word!!";
        $this->judul = $jud;
        $this->penulis = $nulis;
        $this->penerbit = $nerbit;
        $this->harga = $harga;
        $this->jumlahHalaman = $jumlahHalaman;
        $this->waktuMain = $waktuMain;
    }

    public function getLabel(){
        return "$this->penulis, $this->penerbit";
    }

    public function cetakInfoProduk(){
        $string = "{$this->judul}, {$this->getLabel()} (Rp. {$this->harga})";
    }
}

class CetakProduk{
    public function cetak(produk $produk){
        $string = "{$produk->judul} | {$produk->getLabel()} (Rp. {$produk->harga} )";
        return $string;
    }
}

class komik extends produk{
    public function cetakInfoProduk(){
        $str = "Komik : {$this->judul}, {$this->getLabel()} (Rp. {$this->harga}) - {$this->jumlahHalaman} Halaman ";
        return $str;
    }
}

class game extends produk{
    public function cetakInfoProduk(){
        $str = "Game : {$this->judul}, {$this->getLabel()} (Rp. {$this->harga}) ~ {$this->waktuMain} Jam";
        return $str;
    }
}

$produk1 = new komik("One Piece","Masashi Kimono","Matahari",9000000 , 100 ,0);
$produk2 = new game("Sword Art Online","Arief Satria Nugraha","Bulan Bintang",6000000 ,0,50);

// komik : One Piece | Masashi Kimono, Matahari (4000000) ~ 100 Halaman.
// Game : Sword Art Online | Arief Satria Nugraha, Bulan Bintang (8000000) ~ 50 Jam.

echo $produk1->cetakInfoProduk();
echo "<br>";
echo $produk2->cetakInfoProduk();