<?php
    session_start();

    // ada berbagai cara
    // 1
    session_destroy();
    
    // 2
    $_SESSION[""];

    // 3
    session_unset();

    header("Location: login.php");
?>