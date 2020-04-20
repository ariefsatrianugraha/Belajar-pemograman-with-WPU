<?php

    // cek apakah tombol submit sudah tekan atau belum 
    if(isset( $_POST["submit"])){
    // cek username & password
        if ($_POST["username"] == "admin" && $_POST["password"] == "arief") {
    // jika benar , redirect ke halaman admin
            header("Location: admin.php");
            exit;
        }
        else{
    // jika salah,tampil error
            $error = true;
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login Admin</title>
</head>
<body>
    <h1>Silahkan Login</h1>

    <?php if(isset($error)) : ?>
        <p style="color: red; font-style:italic;">Username dan Password yang anda masukan salah !!!</p>
    <?php endif; ?>


    <ul>
        <form action="" method="post">
            <li>
                <label for="username">Username :</label>
                <input type="text" name="username" id="username">
            </li>
            <li>
                <label for="password">Password :</label>
                <input type="password" name="password" id="password">
            </li>
            <li>
                <button type="submit" name="submit">Login</button>
            </li>
        </form>
    </ul>
</body>
</html>