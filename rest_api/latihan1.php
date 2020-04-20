<?php

    // $mahasiswa = [
    //     [
    //         "nama" => "Arief Satria Nugraha",
    //         "nrp" => "12345",
    //         "email" => "ariefsatria@gmail.com" 
    //     ],
    //     [
    //         "nama" => "Komarudin",
    //         "nrp" => "54321",
    //         "email" => "komarudin@gmail.com" 
    //     ],
    // ];

    // var_dump($mahasiswa);

    $dbh = new PDO('mysql:host=localhost;dbname=phpdasar','arief','arief');
    $db = $dbh->prepare('SELECT * FROM mahasiswa');
    $db->execute();
    $mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);



    $data = json_encode($mahasiswa);
    echo $data;


























