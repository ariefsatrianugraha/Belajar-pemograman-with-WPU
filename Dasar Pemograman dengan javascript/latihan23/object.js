// membuat object
// object literial

var mhs1 = {
    nama : "arief satria",
    kelas : 'ik 18',
    umur : 90,
    jurusan : 'ik'
}

// function declaration
function buarObject (nama,kelas,umur,jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.kelas = kelas;
    mhs.umur = umur;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs2 = buarObject('toto','ik 19',80,'teknik');

// constructor
function Mahasiswaobject(nama,kelas,umur,jurusan){
    this.nama = nama;
    this.kelas = kelas;
    this.umur = umur;
    this.jurusan = jurusan;
}

var mhs3 = new Mahasiswaobject('kukuhh','ap 10',15,'administrasi');