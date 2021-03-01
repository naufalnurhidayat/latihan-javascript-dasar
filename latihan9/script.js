// menentukan nilai
var angkaPlayer = prompt('masukkan angka dari 1 - 10');
var batasAngka = 10;
var angkaComp = Math.floor(Math.random() * batasAngka) + 1;
var kesempatan = 3;

// menentukan rules
var hasil = ''

if (angkaPlayer == angkaComp) {
    hasil = 'BENAR!'
} else {
    hasil = 'SALAH!';
}

console.log('angka computer adalah ' + angkaComp + ', angka anda adalah ' + angkaPlayer + '\nmaka ' + hasil);

// alert('taebakan anda benar')