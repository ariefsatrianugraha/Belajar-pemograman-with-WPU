<?php 

session_start();

if ( !isset($_SESSION["login"])){
    header("Location: login.php");
    exit;
}

require 'function.php';

// Pagination
// Konfiguration
$jumlahDataPerhalaman = 2;
$jumlahData = count(query("SELECT * FROM mahasiswa"));
$jumlahHalaman = ceil($jumlahData / $jumlahDataPerhalaman);
$halamanAktif = ( isset($_GET["halaman"])) ? $_GET["halaman"] : 1;
$awalData = ($jumlahDataPerhalaman * $halamanAktif) - $jumlahDataPerhalaman;


$mahasiswa = query("SELECT * FROM mahasiswa LIMIT $awalData,$jumlahDataPerhalaman");

// ketika tombol cari ditekan
if (isset($_POST["cari"])){
    $mahasiswa = cari($_POST["keyword"]);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Daftar Mahasiswa</title>
</head>
<body>
    
    <a href="logout.php">Logout</a>

    <h1>Daftar Mahasiswa</h1>

    <a href="tambah.php">Tambah data mahasiswa</a>
    <br><br>

    <form action="" method="post">

        <input type="text" name="keyword" size=30 placeholder="pencarian" autofocus autocomplete="off">
        <button type="submit" name="cari">Cari</button>

    </form>

    <br><br>
    <!-- navigation -->
    <?php if( $halamanAktif > 1) : ?>
        <a href="?halaman=<?= $halamanAktif - 1 ?>">&laquo;</a>
    <?php endif; ?>

    <?php for($i = 1 ; $i <= $jumlahHalaman ; $i++) : ?>
        <?php if($i == $halamanAktif) : ?>
            <a href="?halaman=<?= $i; ?>" style="font-weight : bold; color:red;"><?= $i; ?></a>
        <?php else : ?>
            <a href="?halaman=<?= $i; ?>"><?= $i; ?></a>
        <?php endif ?>
    <?php endfor; ?>

    <?php if($halamanAktif < $jumlahHalaman) : ?>
        <a href="?halaman=<?=$halamanAktif + 1 ?>">&raquo;</a>
    <?php endif; ?>
    <br>

    <table border="1" cellpadding="10" cellspacing="0">
    
        <tr>
            <th>NO.</th>
            <th>Aksi</th>
            <th>Gambar</th>
            <th>NRP</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Jurusan</th>
        </tr>

        <?php $no = 1 ?>
        <?php foreach($mahasiswa  as $row) : ?>
            <tr>
                <td><?= $no; ?></td>
                <td>
                    <a href="ubah.php?id=<?= $row["id"] ;?>">Ubah</a> |
                    <a href="hapus.php?id=<?= $row["id"] ;?>" onclick="return confirm('yakin ingin di hapus?') ">Hapus</a>
                </td>
                <td><img src="gambar/<?= $row["gambar"] ?>" alt="arief" width="50px"></td>
                <td><?= $row["nrp"];?></td>
                <td><?= $row["nama"];?></td>
                <td><?= $row["email"];?></td>
                <td><?= $row["jurusan"];?></td>
            </tr>
            <?php $no++ ?>
        <?php endforeach; ?>
    </table>

</body>
</html>