<?php
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