<?php

abstract class Produk {

    private $judul,
        $penulis,
        $penerbit,
        $harga;

    protected $diskon = 0;

    public function __construct($jud = "judul",$nulis = "penulis",$nerbit = "penerbit",$harga = 0){
        // echo "Hello word!!";
        $this->judul = $jud;
        $this->penulis = $nulis;
        $this->penerbit = $nerbit;
        $this->harga = $harga;
    }

    public function getJudul(){
        return $this->judul;
    }

    public function setJudul($judul){
        $this->judul = $judul;
    }

    public function getPenulis(){
        return $this->penulis;
    }

    public function setPenulis($penulis){
        $this->penulis = $penulis;
    }

    public function getPenerbit(){
        return $this->penerbit;
    }

    public function setPenerbit($penerbit){
        $this->penerbit = $penerbit;
    }

    public function getLabel(){
        return "$this->penulis, $this->penerbit";
    }

    abstract public function cetakInfoProduk();
    
    public function cetakInfo(){
        $string = "{$this->judul}, {$this->getLabel()} (Rp. {$this->harga})";
        return $string;
    }

    public function cetakHarga(){
        return $this->harga - ($this->harga * $this->diskon / 100);
    }

    public function aturDiskon($diskon){
        $this->diskon = $diskon;
    }
}

class komik extends produk{
    public $jumlahHalaman;

    public function __construct($jud = "judul",$tulis = "penulis", $terbit ="penerbit" , $harga = 0,$jmlHalaman = 0){
        parent::__construct($jud,$tulis,$terbit,$harga);

        $this->jumlahHalaman = $jmlHalaman;
    }

    public function cetakInfoProduk(){
        $str = "Komik : ".$this->cetakInfo()." - {$this->jumlahHalaman} Halaman ";
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
        $str = "Game : ". $this->cetakInfo()." ~ {$this->waktuMain} Jam";
        return $str;
    }
}

class CetakProduk{
    public $daftarProduk = [];
    public function daftaproduk(produk $produk){
        $this->daftaproduk[] = $produk;
    }

    public function cetak(){
        $str ="Daftar Produk : <br>";
        foreach($this->daftaproduk as $dp){
            $str .= "- {$dp->cetakInfoProduk()} <br>";
        }

        return $str;
    }
    
}

$produk1 = new komik("One Piece","Masashi Kimono","Matahari",9000000 , 100);
$produk2 = new game("Sword Art Online","Arief Satria Nugraha","Bulan Bintang",6000000,50);

$cetakin = new CetakProduk;
$cetakin->daftaproduk($produk1);
$cetakin->daftaproduk($produk2);
echo $cetakin->cetak();