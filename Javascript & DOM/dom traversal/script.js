// event handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click',function(){
//     card.style.display = 'none';
// })

// DOM Traversal
// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

//  for ( let i = 0; i < close.length;i++){
//      close[i].addEventListener('click',function(e){
//         //  alert('tombol ' +i);
//         // card[i].style.display = 'none';

//         // close[i].parentElement.style.display = 'none';
//         // console.log(e.target);

//         e.target.parentElement.style.display = 'none';
//      })
//  }

// close.forEach(function(element){
//     element.addEventListener('click',function(e){
//         e.target.parentElement.style.display = 'none';
//     })
// })

// close.forEach(function(element){
//     element.addEventListener('click',function(e){
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//     })
// });

// close.forEach(function(element){
//     element.addEventListener('click',function(e){
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     })
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//     card.addEventListener('click',function(){

//         alert('Card');
        
//     })
// })

// const nama = document.querySelector('.nama');
// console.log(nama.parentElement);
// console.log(nama.parentNode);
// console.log(nama.parentElement.parentElement);
// console.log(nama.nextSibling);
// console.log(nama.nextElementSibling);
// console.log(nama.previousSibling);
// console.log(nama.previousElementSibling);

const container = document.querySelector('.container');

container.addEventListener('click',function(e){
    // console.log(e.target);
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
})