<?php
    
    class komik extends produk implements InfoProduk{
        public $jumlahHalaman;
    
        public function __construct($jud = "judul",$tulis = "penulis", $terbit ="penerbit" , $harga = 0,$jmlHalaman = 0){
            parent::__construct($jud,$tulis,$terbit,$harga);
    
            $this->jumlahHalaman = $jmlHalaman;
        }
    
        public function cetakInfoProduk(){
            $str = "Komik : ".$this->cetakInfo()." - {$this->jumlahHalaman} Halaman ";
            return $str;
        }
    
        public function cetakInfo(){
            $string = "{$this->judul}, {$this->getLabel()} (Rp. {$this->harga})";
            return $string;
        }
    }