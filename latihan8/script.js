var tanya = true
while (tanya) {
    // menangkap pilihan player
    var p = prompt('pilih: gajah, semut, orang');

    // menangkap pilihan komputer
    // membangkitan bilangan random
    var comp = Math.random();

    if (comp < 0.36) {
        comp = 'semut';
    } else if (comp >= 0.36 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = "gajah";
    }

    // menentukan rules
    var hasil = '';

    if (p == comp) {
        hasil = 'SERI!';
    } else if (p == 'gajah') {
        if (comp == 'semut') {
            hasil = 'KALAH!';
        } else {
            hasil = 'MENANG!';
        }
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if (p == 'semut') {
        hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'kamu memasukkan nama yang salah!';
    }

    // mencetak hasil
    alert('kamu memilih ' + p + ' dan computer memilih ' + comp + '\nmaka kamu ' + hasil);

    tanya = confirm('mau main lagi?');
}

alert('terima kasih sudah bermain.');