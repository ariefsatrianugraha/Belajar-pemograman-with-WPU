<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>POST</title>
</head>
<body>

    <?php if( isset($_POST["submit"]) ) : ?>
        Selamat hadir di sini <?= $_POST["username"] ?>
    <?php endif; ?>
        
    
    <form action="" method="post">
        <label for="username">Username</label>
        <input type="text" name="username" id="username">
        <br>
        <button type="submit" name="submit" >kirim!</button>
    </form>

</body>
</html>