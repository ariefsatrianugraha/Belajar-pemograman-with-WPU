<?php

    $data = file_get_contents('json/coba.json');
    // $mahasiswa = json_decode($data);
    $mahasiswa = json_decode($data,true);
    var_dump($mahasiswa);
    echo "<hr>";
    echo $mahasiswa[0]['pembimbing']['pembimbing1'];
    echo "<br>";
    echo $mahasiswa[1]['hobby'][1];