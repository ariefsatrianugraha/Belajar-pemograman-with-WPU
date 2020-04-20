<?php
require 'function.php';

// Ambil data nilai URL
$id = $_GET["id"];

// query data mahasiswa berdasarkan id
$mhs = query("SELECT * FROM mahasiswa WHERE id = $id")[0];


// cek tombol submit sudah di pencet apa belom
if (isset($_POST["submit"]) > 0) {
    
    // cek apakah data sudah berhasil ditambhakan atau tidak
    if(ubah($_POST) > 0){
        echo "<script> 
                alert('data berhasil diubah!');
                document.location.href='index.php';
            </script>";
    }else{
        echo "<script>
                alert('data gagal diubah!');
                document.location.href='index.php';
            </script>";
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ubah Data Mahasiswa</title>
</head>
<body>
    <h1>Ubah Data Mahasiswa</h1>

    <form action="" method="post" enctype="multipart/form-data">
        <input type="hidden" name="id" value= "<?= $mhs["id"] ?>">
        <input type="hidden" name="gambarLama" value= "<?= $mhs["gambar"] ?>"> 
        <ul>
            <li>
                <label for="nama" >Nama :</label>
                <input type="text" name="nama" id="nama" required value="<?= $mhs["nama"]; ?>">
            </li>
            <li>
                <label for="nrp">NRP :</label>
                <input type="text" name="nrp" id="nrp" required value="<?= $mhs["nrp"]; ?>">
            </li>
            <li>
                <label for="jurusan">Jurusan :</label>
                <input type="text" name="jurusan" id="jurusan" required value="<?= $mhs["jurusan"]; ?>">
            </li>
            <li>
                <label for="email">Email :</label>
                <input type="text" name="email" id="email" required value="<?= $mhs["email"]; ?>">
            </li>
            <li>
                <label for="gambar">Gambar :</label><br>
                <img src="gambar/<?= $mhs['gambar']; ?>" width="40"><br>
                <input type="file" name="gambar" id="gambar">
            </li>
            <li>
                <button type="submit" name="submit">Kirim</button>
            </li>
        </ul>
    </form>
</body>
</html>