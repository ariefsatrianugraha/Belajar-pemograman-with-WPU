// function tes(){
//     return tes();
// }
// tes();

// function tampil(n){
//     console.log(n);

//     return tampil(n - 1);

// }
// tampil(10);

function tampil(n){
    if ( n === 0){
        return;
    }

    console.log(n);
    return tampil(n - 1);
}

tampil(5);
