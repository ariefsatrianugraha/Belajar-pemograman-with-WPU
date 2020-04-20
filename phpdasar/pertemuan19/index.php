<?php 

session_start();

if ( !isset($_SESSION["login"])){
    header("Location: login.php");
    exit;
}

require 'function.php';

$mahasiswa = query("SELECT * FROM mahasiswa");

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

    <style>
        .loader{
            width : 150px;
            position: absolute;
            top:110px;
            left:300px;
            z-index : -1;
            display : none;
        }

        @media print{
            .logout,.tambah, .form_cari, .aksi {
                display : none;
            }
        }
    </style>
</head>
<body>
    
    <a href="logout.php" class="logout">Logout</a>

    <h1>Daftar Mahasiswa</h1>

    <a href="tambah.php" class="tambah">Tambah data mahasiswa</a>
    <br><br>
    
    <form action="" method="post" class="form_cari">

        <input type="text" name="keyword" size=30 placeholder="pencarian" autofocus autocomplete="off" id="keyword">
        <button type="submit" name="cari" id="tombolCari">Cari</button>

        <img src="gambar/load.gif" class="loader">
    </form>

    <br>

    <div id="container">
        <table border="1" cellpadding="10" cellspacing="0">
        
            <tr>
                <th>NO.</th>
                <th class="aksi">Aksi</th>
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
                    <td class="aksi">
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
    </div>

    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/script1.js"></script>
</body>
</html>