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

        // upload gambar
        $gambar = upload();
        if (!$gambar){
            return false;
        }

        $query = "INSERT INTO mahasiswa VALUES ('','$nama','$nrp','$jurusan','$email','$gambar')";

        mysqli_query($conn , $query);

        return mysqli_affected_rows($conn);
    }

    function upload(){
        
        $namaFile = $_FILES['gambar']['name'];
        $ukuranFile = $_FILES['gambar']['size'];
        $error = $_FILES['gambar']['error'];
        $tmpName = $_FILES['gambar']['tmp_name'];

        // cek apakah tidak ada gambar yang diupload
        if ( $error === 4){
            echo "<script>
                    alert('Pilih Gambar terlebih dahulu!');
                </script>";
            return false;
        }

        // cek apakah yang diupload adalah gambar
        $ektensiGambarValid=['jpg','jpeg','png'];
        $ektensiGambar = explode('.', $namaFile);
        $ektensiGambar = strtolower(end($ektensiGambar));
        if ( !in_array($ektensiGambar,$ektensiGambarValid)){
            echo "<script>
                    alert('yang anda upload bukan gambar');
                </script>";
            return false;
        }
         
        // cek jika ukurannya terlalu besar
        if ($ukuranFile > 1000000){
            echo "<script>
                    alert('ukuran gambar terlalu besar');
                </script>";
            return false;
        }
        // lolos pengecekan, gambar siap diupload
        // generate nama gambar baru
        $namaFileBaru = uniqid();
        $namaFileBaru .= '.';
        $namaFileBaru .= $ektensiGambar;

        move_uploaded_file($tmpName, 'gambar/'.$namaFileBaru);

        return $namaFileBaru;
    }


    function hapus($id) {
        global $conn;

        $query = ("DELETE FROM mahasiswa WHERE id = $id ");

        mysqli_query($conn,$query);

        return mysqli_affected_rows($conn);
    }

    function ubah($data){
        global $conn;
        $id = $data["id"];
        $nama = htmlspecialchars($data["nama"]);
        $nrp = htmlspecialchars($data["nrp"]);
        $jurusan = htmlspecialchars($data["jurusan"]);
        $email = htmlspecialchars($data["email"]);
        $gambarLama = htmlspecialchars($data["gambarLama"]);

        // cek apakah user pilih gambar baru atau lama
        if($_FILES['gambar']['error'] === 4){
            $gambar = $gambarLama;
        }else{
            $gambar = upload();
        }

        $query = "UPDATE mahasiswa SET nama = '$nama' , nrp = '$nrp' ,jurusan = '$jurusan' , email = '$email' , gambar = '$gambar' WHERE id = $id";

        mysqli_query($conn , $query);

        return mysqli_affected_rows($conn);
    }

    function cari($keyword){
        $query = "SELECT * FROM mahasiswa WHERE nama LIKE '%$keyword%' OR nrp LIKE '%$keyword%' OR jurusan LIKE '%$keyword%' OR email LIKE '%$keyword%'";

        return query($query);
    }
?>