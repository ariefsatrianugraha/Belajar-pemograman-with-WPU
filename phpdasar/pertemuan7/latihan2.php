<?php
// superGlobal
// Merupakan Array Associative

//$_GET

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
        ];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>GET</title>
</head>
<body>
    
    <h1>Daftar Laptop</h1>

    <ul>
        <?php foreach ($laptops as $laptop) : ?>
            <li><a href="latihan3.php?nama=<?= $laptop["nama"]; ?>&id=<?= $laptop["id"] ;?>&warna=<?= $laptop["warna"]; ?>&jenis=<?= $laptop["jenis"]; ?>&gambar=<?= $laptop["gambar"]; ?>"><?= $laptop["nama"] ?></a></li>
        <?php endforeach; ?>
    </ul>
</body>
</html>