<?php
    session_start();

    // ada berbagai cara
    // 1
    session_destroy();
    
    // 2
    $_SESSION[""];

    // 3
    session_unset();

    // untuk cookie
    setcookie('id','',time()-3600);
    setcookie('key','',time()-3600);

    header("Location: login.php");
?>