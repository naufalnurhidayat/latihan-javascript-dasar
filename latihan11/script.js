// function tambah(a, b) {
//     return a + b;
// }

// function kali(a, b) {
//     return a * b;
// }

// var hasil = kali(tambah(3, 3), tambah(2, 2));
// console.log(hasil);


function penjumlahanArguments() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }

    return hasil;
}

console.log(cobaArguments(1, 2));