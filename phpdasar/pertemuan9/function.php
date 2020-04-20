<?php
    // Koneksi Database
    $conn = mysqli_connect("localhost","root","","phpdasar");

    // Buat function
    function query($query){
        global $conn;
        $result = mysqli_query($conn ,$query);
        $rows = [];
        while ($row = mysqli_fetch_assoc($result)){
            $rows[] = $row;
        }
        return $rows;
    } 
?>