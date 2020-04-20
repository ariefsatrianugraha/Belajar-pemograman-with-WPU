<?php

    // define('NAMA',"Arief Satria Nugraha");
    // echo NAMA;
    // echo "<br>";
    // const UMUR = 20;
    // echo UMUR;

    class coba{
        const NAMA = 'arief';
    }

    echo coba::NAMA;

    echo __LINE__ ;//Menampilkan baris
    echo "<br>";
    echo __FILE__;//menampilkan file

    function cob(){
        return __FUNCTION__;
    }
    
    echo "<br>";
    echo cob();

    class mama{
        public $kelas = __CLASS__;
    }

    echo '<br>';
    $tam = new mama;
    echo $tam->kelas;