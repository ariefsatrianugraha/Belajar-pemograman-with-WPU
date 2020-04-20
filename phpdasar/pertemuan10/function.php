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

    function tambah($data){
        global $conn;
        $nama = htmlspecialchars($data["nama"]);
        $nrp = htmlspecialchars($data["nrp"]);
        $jurusan = htmlspecialchars($data["jurusan"]);
        $email = htmlspecialchars($data["email"]);
        $gambar = htmlspecialchars($data["gambar"]);

        $query = "INSERT INTO mahasiswa VALUES ('','$nama','$nrp','$jurusan','$email','$gambar')";

        mysqli_query($conn , $query);

        return mysqli_affected_rows($conn);
    }

    function hapus($id) {
        global $conn;

        $query = ("DELETE FROM mahasiswa WHERE id = $id ");

        mysqli_query($conn,$query);

        return mysqli_affected_rows($conn);
    }

?>