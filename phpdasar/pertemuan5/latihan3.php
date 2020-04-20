<?php 
    $mahasiswa = [
        ["Arief","1221290","Teknik Informatika","arief@gmail.com"],
        ["satria","1221291","Informatika komputer","satria@gmail.com"],
        ["nugraha","1221291","Sistem Informatika","nugraha@gmail.com"]
    ];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Data Mahasiswa</title>
</head>
<body>
    
    <h1>Data Mahasiswa</h1>
<!-- 
    <ul>
        <?php //foreach($mahasiswa as $mhs) : ?>
            <li><?php echo $mhs ?>
        <?php //endforeach ; ?>
    </ul> 
-->
<!-- 
    <ul>
        <li><?php echo $mahasiswa[0] ; ?></li>
        <li><?php echo $mahasiswa[1] ; ?></li>
        <li><?php echo $mahasiswa[2] ; ?></li>
        <li><?php echo $mahasiswa[3] ; ?></li>
    </ul> 
-->
<!-- 
    <?php //foreach($mahasiswa as $mhs) : ?>
        <ul>
            <li> Nama : <?php echo $mhs[0] ; ?></li>
            <li> NIM : <?php echo $mhs[1] ; ?></li>
            <li> Jurusan :<?php echo $mhs[2] ; ?></li>
            <li> Email : <?php echo $mhs[3] ; ?></li>
        </ul>    
    <?php //endforeach ; ?>
 -->
    
    <?php foreach($mahasiswa as $mhs) : ?>
        <ul>
            <?php foreach($mhs as $m) : ?>
                <li><?php echo $m ?></li>
            <?php endforeach ; ?>    
        </ul>
    <?php endforeach ?>    

</body>
</html>