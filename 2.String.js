// cara menulis string
let string = "str ing"
let petikSatu = 'petik satu'
let backTick = `back tick`

// contoh membuat variabel yg berisi string
let hari = "Jum'at"
let acara = 'Vindes memper"Bahkan Voli" bersama Prediksi'
let rangkaian = `Vindes memper"Bahkan Voli" bersama Prediksi pada hari Jum'at`

// contoh penjabaran merangkai string
let kalimat_satu = acara + " " + "pada hari" + " " + hari
let kalimat_dua = `${acara} pada hari ${hari}`

// cara pemanggilan //`Vindes memper"Bahkan Voli" bersama Prediksi pada hari Jum'at`
// console.log(rangkaian);
// console.log(kalimat_satu);
// console.log(kalimat_dua);

// string = array of character
console.log(string);
console.log(">>>>>", string[0]);
console.log(string[0], string[1], string[2], string[3], string[4], string[5], string[6]);
console.log(string.length);