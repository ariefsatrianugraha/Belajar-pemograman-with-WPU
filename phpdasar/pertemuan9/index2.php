<?php 
// Koneksi database
$conn = mysqli_connect("localhost","root","","phpdasar");

// Ambil data tabel mahasiswa / query data mahasiswa
$result = mysqli_query($conn, "SELECT * FROM mahasiswa");

// mengecek error
// print_r($row);
// if (!$result){
//     echo mysqli_error($conn);
// }

// ambil data (fetch) mahasiswa dari object result;
// ada 4 cara yaitu:
// mysqli_fetch_row => Mengembalikan array numerik 
// mysqli_fetch_assoc => Mengebalikan array assosiative
// mysqli_fetch_array => Mengembalikan kedunya
// mysqli_fetch_object => Mengmbelaikan objec contoh mahasiswa => 'nama'

// tampil data :
// while($row =  mysqli_fetch_assoc($result)) {
//     print_r($row);
// }



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
    
    <h1>Daftar Mahasiswa</h1>

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
        <?php while($row = mysqli_fetch_assoc($result)) : ?>
            <tr>
                <td><?= $no; ?></td>
                <td>
                    <a href="#">Ubah</a> |
                    <a href="#">Hapus</a>
                </td>
                <td><img src="gambar/<?= $row["gambar"] ?>" alt="arief" width="50px"></td>
                <td><?= $row["nrp"];?></td>
                <td><?= $row["nama"];?></td>
                <td><?= $row["email"];?></td>
                <td><?= $row["jurusan"];?></td>
            </tr>
            <?php $no++ ?>
        <?php endwhile; ?>
    </table>

</body>
</html>