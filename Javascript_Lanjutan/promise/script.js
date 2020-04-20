// jquery
// $.ajax({
//     url:'http://www.omdbapi.com/?i=tt3896198&apikey=6fcf4185&s=avengers',
//     success : movies => console.log(movies)
// });

// vanila javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.status === 200){
//         if(xhr.readyState === 4){
//             console.log(JSON.parse(xhr.response));
//         }
//     }else{
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('get','http://www.omdbapi.com/?i=tt3896198&apikey=6fcf4185&s=avengers');
// xhr.send();


// fetch
// dalam bentuk promise
// const movies = fetch('http://www.omdbapi.com/?i=tt3896198&apikey=6fcf4185&s=avengers');
// console.log(movies);

// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=6fcf4185&s=avengers')
//     .then(Response => Response.json())
//     .then(Response => console.log(Response));


// Apa itu promise (janji)
// sebuah object yang mempresentasikan keberhasilan / kegagalan sebuag event yang asyncronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// state (fulfilled / rejected / peding)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh1
// let ditepati = true;
// const janji1 = new Promise((resolved , reject) => {
//     if(ditepati){
//         resolved('Janji telah ditepati');
//     }else{
//         reject('ingkar janji');
//     }
// })
// // console.log(janji1);

// janji1
//     .then(res => console.log('ok : ' + res))
//     .catch(res => console.log('not ok : '+res));

// // contoh2
// let ditepati = true;
// const janji2 = new Promise((resolved, reject) =>{
//     if(ditepati){
    //             resolved('janji ditepati')
    //         setTimeout(() =>{
//         },2000)
//         }else{
//             setTimeout(()=>{
//                 reject('janji tidak ditepati');
//             })
//         }
//     })

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('selesai menunggu'))
//     .then(() => console.log(janji2))
//     .catch(() => console.log(janji2));
// console.log('selesai');


// contoh3

const film = new Promise( resolved =>{
    setTimeout(() => {
        resolved([{
            judul : 'bambang',
            sutradara : 'arief',
            pemain : ['komar','kokm']
        }])
    },1000);
})

const cuaca = new Promise(resolved => {
    setTimeout(() => {
        resolved ([{
            kota : 'sukabumi',
            temp : 45,
            kondisi : 'mendung'
        }])
    },500)
})

// film.then(respom => console.log(respom));
// cuaca.then(respon => console.log(respon));

Promise.all([film,cuaca])
    // .then(res => console.log(res));
    .then(res => {
        const [film,cuaca] = res;
        console.log(film);
        console.log(cuaca);
    })