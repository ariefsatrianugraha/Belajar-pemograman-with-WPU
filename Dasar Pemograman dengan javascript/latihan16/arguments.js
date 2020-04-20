// function tambah(){
//     return arguments;
// }

// var coba = tambah(1,2,3,'arief',true);
// // console.log(coba);
// console.log(coba[3]);


function tambah(){

    var i;
    var hasil = 0;

    for(i = 0; i < arguments.length ; i++){
        hasil += arguments[i];
    }

    return hasil;

}

var coba = tambah(1,2,2,7);
console.log(coba);