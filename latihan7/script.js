var input = prompt('Masukkan nama makanan atau minuman \n Contoh: Nasi, Daging, Susu, Hamburger, Softdrink');

switch (input) {
    case 'Nasi':
    case 'Daging':
    case 'Susu':
        alert('Ini adalah makanan atau minuman SEHAT!');
        break;
    case 'Hamburger':
    case 'Softdrink':
        alert('Ini adalah makanan atau minuman TIDAK SEHAT!');
        break
    default:
        alert('Anda memasukkan nama makanan atau minuman yang salah!');
        break;
}