// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));
// console.log(videos);

// pilih hanya yang 'Javascript Lanjutan'
let jsLanjut = videos.filter( video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
// ambil durasi masing masing video
.map(item => item.dataset.duration)
// ubah durasi menjadi float,ubah mnit menjadi detik
.map(waktu => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})
// jumlahkan semua detik
.reduce((total, detik ) => total + detik);
// console.log(jsLanjut);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
// console.log(jam);

jsLanjut -= jam * 3600;
const menit = Math.floor(jsLanjut / 60);
// console.log(menit);

const detik = jsLanjut - menit * 60;
// console.log(detik);

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length
// console.log(jmlVideo);
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video`;
