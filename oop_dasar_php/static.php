<?php
    // class cobaStatic{
    //     public static $angka = 1;

    //     public static function hall(){
    //         $hal = "hallo";
    //         $hall = "masuk ";
    //         return $hall.self::$angka++." kali";
    //     }
    // }

    // echo cobaStatic::$angka;
    // echo "<br>";
    // echo cobaStatic::hall();
    // echo "<br>";
    // echo cobaStatic::hall();

    // jika menggunakan no Static
    class noStatic{
        public $angka = 1;
        public function hal(){
            return "hallo " .$this->angka++." kali <br>";
        }
    }

    echo "NO Static <br>";
    $noStatic = new noStatic;
    echo $noStatic->hal();
    echo $noStatic->hal();
    echo $noStatic->hal();
    echo "<hr>";
    $noStatic2 = new noStatic;
    echo $noStatic2->hal();
    echo $noStatic2->hal();
    echo $noStatic2->hal();

    // menggunakan class static
    class pakeStatic{
        public static $angka = 1;
        public function hall(){
            return "Hall ".self::$angka++." kali <br>";
        }
    }

    echo "<br><br><br>";

    echo "Pake Static <br>";
    $noStatic = new pakeStatic;
    echo $noStatic->hall();
    echo $noStatic->hall();
    echo $noStatic->hall();
    echo "<hr>";
    $noStatic2 = new pakeStatic;
    echo $noStatic2->hall();
    echo $noStatic2->hall();
    echo $noStatic2->hall();
    