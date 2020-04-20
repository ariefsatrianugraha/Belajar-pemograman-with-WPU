<?php
// Pengulangan
// for
// while
// do.... While
// foreach : pengulangan khusus array

// for( $i = 0;$i < 5; $i++ ){
//     echo "Aku Sayang Kamu <br>";
// }

// $i = 0;
// while( $i < 5 ){
//     echo "ihh gemens <br>";
//     $i++;
// }

// $i = 0;
// do{
//     echo "aku jatuh <br>";
//     $i++;
// }while( $i < 5);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Latihan 1</title>
    <style>
        .warna-baris{
            background-color:aquamarine;
        }
    </style>
</head>
<body>
    <table border="1" cellpadding = "20" cellspacing ="0">
        <?php for($i = 1; $i <= 5; $i++) : ?>
            <?php if ($i % 2 == 1) : ?>
                <tr class="warna-baris">
            <?php else : ?>
                <tr>
            <?php endif; ?>
                    <?php for($j = 1;$j <=5; $j++) : ?>
                        <td><?= "$i, $j" ?></td>
                    <?php endfor; ?>
                </tr>
        <?php endfor; ?>
    </table>
</body> 
</html>