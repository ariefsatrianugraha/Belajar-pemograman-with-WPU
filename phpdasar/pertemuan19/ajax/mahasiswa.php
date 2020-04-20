<?php

    sleep(1);
    require '../function.php';

    $keyword = $_GET["keyword"];

    $quer = "SELECT * FROM mahasiswa WHERE nama LIKE '%$keyword%' OR nrp LIKE '%$keyword%' OR jurusan LIKE '%$keyword%' OR email LIKE '%$keyword%'";
    $mahasiswa = query($quer);

    // var_dump($mahasiswa);
?>
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