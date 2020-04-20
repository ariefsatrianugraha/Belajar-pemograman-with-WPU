// DOM SELECTION

// // document.getElementById() -> element

// const judul = document.getElementById('judul');

// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Arief Satria Nugraha';


// // document.getElementsByTagName() -> HTMLCollections

// const p = document.getElementsByTagName('p')

// // p[0].style.backgroundColor = 'lightblue';
// // p[1].style.backgroundColor = 'lightblue';
// // p[2].style.backgroundColor = 'lightblue';
// // p[3].style.backgroundColor = 'lightblue';

// for(let i = 0 ; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '40px';


// // document.getElementByClassName() -> HTMLCollection

// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Ini diubah dari javascript'


// // document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // const p = document.querySelector('p');
// // p.innerHTML = 'ini diubah di javascript';


// // document.querySelectionAll();

// const p = document.querySelectorAll('p');
// // p[2].style.backgroundColor = 'lightblue';

// for(var i = 0 ;i < p.length ;i++){
//     p[i].style.backgroundColor = 'lightblue';
// }


// node root

// const p4 = document.getElementsByTagName('p');
// p4[3].style.backgroundColor = 'yellow';

// const selectionB = document.getElementById('b');
// const p4 = selectionB.getElementsByTagName('p')[0];

// p4.style.backgroundColor = 'lightgreen';


const selectionB = document.querySelector('section#b');
const p4 = selectionB.getElementsByTagName('p')[0];

p4.style.backgroundColor = 'lightblue';