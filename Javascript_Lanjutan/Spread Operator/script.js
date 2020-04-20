// Operator speads
// Memecah iterable menjadi single element  

// const mhs = ['aroef','satir','nugraha'];
// console.log(mhs)
// console.log(...mhs)
// console.log(...mhs[0])

// const siswa = ['ujang','nyai','iyem'];
// const orang = [...mhs,...siswa];
// const orang = [mhs.concat(siswa)];
// const orang = [...mhs,'juju',...siswa];
// console.log(mhs.concat(siswa));
// console.log(...mhs,...siswa);
// console.log(...mhs,'aduhh',...siswa);
// console.log(orang);

// mengcopy array
// const orang = ['juj','nini','koko'];
// const manus = orang;
// manus[0] = 'mamang';
// const manus = [...orang];
// manus[0] = 'cinta';
// console.log(orang);


// string menjadi array

// const mhs = document.querySelectorAll('li');
// console.log(mhs[0].innerHTML)
// const mam = []
// for( let i = 0 ; i < mhs.length ; i++){
//     mam.push(mhs[i].innerHTML);
// }
// console.log(mam);

// const mam = [...mhs].map(m => m.textContent);
// console.log(mam);

// pemisah string
const nama = document.querySelector('.name');
const arrName = [...nama.textContent].map(k => `<span>${k}</span>`).join('');
nama.innerHTML = arrName
