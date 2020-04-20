<?php

    abstract class Produk {

        protected $judul,
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
    
        public function cetakHarga(){
            return $this->harga - ($this->harga * $this->diskon / 100);
        }
    
        public function aturDiskon($diskon){
            $this->diskon = $diskon;
        }
    
        abstract public function cetakInfo();
    }