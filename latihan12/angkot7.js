var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array dan keluar dari function tersebut
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' sudah ada di dalam angkot');
                // kembalikan isi array dan keluar dari function tersebut
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if (i == penumpang.length - 1) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array dan keluar dari function tersebut
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tampilkan pesan bahwa angkot sedang kosong, dan
        // penumpang tidak mungkin turun
        console.log('Angkotnya kosong CUY!!');
        // kembalikan isi array dan keluar dari fungsi tersebut
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika nama penumpang sesuai
            if (penumpang[i] == namaPenumpang) {
                // hapus penumpang dengan mengubah namanya,
                // menjadi undifined
                penumpang[i] = undefined;
                // kembalikan isi array dan keluar dari funsi tersebut
                return penumpang;
            } else if (i == penumpang.length - 1) {
                // tampilkan pesan kesalahannya 
                console.log('Tidak ada penumpang dengan nama ' + namaPenumpang);
                // kembalikan isi array dan keluar dari fungsi tersebut
                return penumpang;
            }
        }
    }
}