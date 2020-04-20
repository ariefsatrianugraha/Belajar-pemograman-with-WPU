<?php
    require_once 'vendor/fzaninotto/faker/src/autoload.php';

    // $faker = Faker\Factory::create();
    $faker = Faker\Factory::create('id_ID');
    // echo $faker->name;
    // for($i = 0 ; $i < 10 ; $i++){
    //     echo $faker->name."<br>" ;
    // }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar Penduduk</title>
</head>
<body>
    
    <h1>DATA PENDUDUK</h1>

    <?php for($i = 0 ; $i < 10 ; $i++) : ?>

        <ul>
            <li><?= $faker->name; ?></li>
            <li><?= $faker->address; ?></li>
            <li><?= $faker->email; ?></li>
        </ul>

    <?php endfor;?>

</body>
</html>