// console.log('*****');

// for(var i = 1 ; i <=5 ; i++){
//     console.log('*');
// }


var string = "";

// for(var i = 1; i <= 5; i++){
//     // string = string + "*";
//     string += '*';
// }

// console.log(string);

// for (var i = 1; i <= 10; i++){
//     // string += '*';

//     for( var a = 1  ; a <= 5; a++){
//         string += '*';
//     }

//     string += '\n';
// }

// console.log(string);


// for (var i = 1; i <= 15; i++){

//     for( var a = 1  ; a <= i; a++){
//         string += '*';
//     }
    
//     string += '\n';
// }

// console.log(string);

for (var i = 10; i > 1; i--){

    for( var a = 1  ; a < i; a++){
        string += '*';
    }
    
    string += '\n';
}

console.log(string);


