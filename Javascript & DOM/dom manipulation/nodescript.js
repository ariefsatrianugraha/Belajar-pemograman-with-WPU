// manipulation node
// dom manipulation

// buat element baru
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('paragraf baru');

// simpan tulisan kedalam paragraf
pBaru.appendChild(textPBaru);

// simpan pBaru di akhir section A
// appendChild simpan ke akhir element dari parent
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('item Baru');
liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');


// insertBefore untuk sipan di tengah atau di atas element
ul.insertBefore(liBaru, li2);




const sectionABaru = document.getElementById('a');
const link = document.getElementsByTagName('a')[0];

// removeChild menghapus ChildElement
sectionABaru.removeChild(link);


const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(textH2Baru);

// replaceChild merubah element
sectionB.replaceChild(h2Baru,p4);


pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';