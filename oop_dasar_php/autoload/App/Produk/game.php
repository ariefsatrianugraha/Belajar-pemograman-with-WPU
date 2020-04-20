<?php
    class game extends produk implements InfoProduk{
        public $waktuMain;
    
        public function __construct($jud = "judul" , $nulis = "penulis", $terbit = "penerbit" , $harga = 0 ,$waktuMain=0){
            parent::__construct($jud,$nulis,$terbit,$harga);
            $this->waktuMain = $waktuMain;
        }
    
        public function cetakInfoProduk(){
            $str = "Game : ". $this->cetakInfo()." ~ {$this->waktuMain} Jam";
            return $str;
        }
        
        public function cetakInfo(){
            $string = "{$this->judul}, {$this->getLabel()} (Rp. {$this->harga})";
            return $string;
        }
    }