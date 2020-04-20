<!-- pengertian class -->
<!-- 1.Blueprint / template untuk membuat instance dari object -->
<!-- 2.Class mendifinisikan object -->
<!-- 3,Menyimpan dara dan prilaku yang disebut dengan property dan method -->

<!-- cara membiat class -->
<!-- 1. Diawali dengan menuliskan keyword class, diikuti nam dan dibatasi dengan {} untuk menyimpan property dan method -->
<!-- 2. Aturan penamaan class sama seperti variable -->

<!-- Pengertian object -->
<!-- 1. Instance yang didefinisikan oleh class -->
<!-- 2. Banyak object dapat dibuat menggunakan satu class -->
<!-- 3. Object dibuat dengan menggunakan keyword new -->

<?php

class Coba {



}

$a = new Coba();
$b = new Coba();
$c = new Coba();

var_dump($a);
var_dump($b);
var_dump($c);