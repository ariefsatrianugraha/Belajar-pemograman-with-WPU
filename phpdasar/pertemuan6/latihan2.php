<?php

    $laptops = [
        [
            "id" => "098765",
            "nama" => "asus",
            "warna" => "item",
            "jenis" => "besar",
            "gambar" => "asus.jpg",
        ],
        [
            "id" => "123456",
            "nama" => "acer",
            "warna" => "perak",
            "jenis" => "sedang",
            "gambar" => "acer.jpg",
        ]
    ]

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Daftar Laptop</title>
</head>
<body>
    <h1>Daftar Laptop</h1>

    <?php foreach($laptops as $laptop ) : ?>
        <ul>
            <li>
                <img src="gambar/<?= $laptop["gambar"] ;?>">
            </li>
            <li><?= $laptop["id"] ;?></li>
            <li><?= $laptop["nama"] ;?></li>
            <li><?= $laptop["warna"] ;?></li>
            <li><?= $laptop["jenis"] ;?></li>
        </ul>
    <?php endforeach; ?>
</body>
</html>