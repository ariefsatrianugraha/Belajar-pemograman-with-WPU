<?php

class Produk {

    public $judul;
    public $penulis;
    public $penerbit;

    protected $diskon = 0;
    private $harga;

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

    public function cetakInfoProduk(){
        $string = "{$this->judul}, {$this->getLabel()} (Rp. {$this->harga})";
        return $string;
    }

    public function cetakHarga(){
        return $this->harga - ($this->harga * $this->diskon / 100);
    }
}

class CetakProduk{
    public function cetak(produk $produk){
        $string = "{$produk->judul} | {$produk->getLabel()} (Rp. {$produk->harga} )";
        return $string;
    }
}

class komik extends produk{
    public $jumlahHalaman;

    public function __construct($jud = "judul",$tulis = "penulis", $terbit ="penerbit" , $harga = 0,$jmlHalaman = 0){
        parent::__construct($jud,$tulis,$terbit,$harga);

        $this->jumlahHalaman = $jmlHalaman;
    }

    public function cetakInfoProduk(){
        $str = "Komik : ".parent::cetakInfoProduk()." - {$this->jumlahHalaman} Halaman ";
        return $str;
    }
}

class game extends produk{
    public $waktuMain;

    public function __construct($jud = "judul" , $nulis = "penulis", $terbit = "penerbit" , $harga = 0 ,$waktuMain=0){
        parent::__construct($jud,$nulis,$terbit,$harga);
        $this->waktuMain = $waktuMain;
    }

    public function cetakInfoProduk(){
        $str = "Game : ".parent::cetakInfoProduk()." ~ {$this->waktuMain} Jam";
        return $str;
    }

    public function aturDiskon($diskon){
        $this->diskon = $diskon;
    }
}

$produk1 = new komik("One Piece","Masashi Kimono","Matahari",9000000 , 100);
$produk2 = new game("Sword Art Online","Arief Satria Nugraha","Bulan Bintang",6000000,50);

// komik : One Piece | Masashi Kimono, Matahari (4000000) ~ 100 Halaman.
// Game : Sword Art Online | Arief Satria Nugraha, Bulan Bintang (8000000) ~ 50 Jam.

echo $produk1->cetakInfoProduk();
echo "<br>";
echo $produk2->cetakInfoProduk();
echo "<hr>";

echo $produk2->aturDiskon(50);
echo $produk2->cetakHarga();