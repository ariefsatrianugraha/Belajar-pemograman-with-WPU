<?php

    // require_once 'Produk/InfoProduk.php';
    require_once 'Produk/Produk.php';
    // require_once 'Produk/komik.php';
    // require_once 'Produk/game.php';
    // require_once 'Produk/CetakProduk.php';
    // require_once 'Produk/User.php';

    // require_once 'Service/User.php';


    spl_autoload_register(function($class){
        // App\Produk\User = ["App","Produk","User"];
        $class = explode('\\', $class);
        $class = end($class);
        require_once __DIR__ . '/Produk/'.$class.'.php';
    });


    spl_autoload_register(function($class){
        $class = explode('\\', $class);
        $class = end($class);
        require_once __DIR__ . '/Service/'.$class.'.php';
    });