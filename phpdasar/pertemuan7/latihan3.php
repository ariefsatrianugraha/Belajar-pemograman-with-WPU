<?php
// cek apakah tidak ada data di $_GET
if( !isset($_GET["nama"]) ||
    !isset($_GET["id"]) ||
    !isset($_GET["warna"]) ||
    !isset($_GET["jenis"]) ||
    !isset($_GET["gambar"])
) {
    // redirect
    header("Location:latihan2.php");
    exit;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Detail Mahasiswa</title>
</head>
<body>
    <h1>Detail Laptop</h1>

    <ul>
        <li><?= $_GET["id"] ?></li>
        <li><?= $_GET["nama"] ?></li>
        <li><?= $_GET["warna"] ?></li>
        <li><?= $_GET["jenis"] ?></li>
        <li><img src="gambar/<?= $_GET["gambar"]?> "></li>
    </ul>

    <a href="latihan2.php">Kembali ke halaman</a>
</body>
</html>