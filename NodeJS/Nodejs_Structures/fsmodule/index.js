const fs = require("fs");

// import { readFile } from 'node:fs';
// Yukarıdaki gibi kullanmak için package.json dosyası oluşturup içerisine "type": "module" eklemek gerekiyor. Bu durumda fs kodunu da kullanmaya gerek kalmıyor.

// DOSYA OKUMAK;
/* fs.readFile('./password.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    console.log("Dosya Okundu");
}); */

// DOSYA YAZMAK;
/* fs.writeFile('./example.txt', "KODLUYORUZ", 'utf8', (err) => {
    if (err) throw err;
    console.log("Dosya Başarılı Bir Şekilde Oluşturuldu");
}); */

/* fs.writeFile('./example.json', '{"name" : "Sinan", "lastname" : "Bayar"}', 'utf8', (err) => {
    if (err) throw err;
    console.log("Dosya Başarılı Bir Şekilde Oluşturuldu");
}); */

// VERİ EKLEMEK;
/* fs.appendFile('example.txt', "\nBU DA İKİNCİ SATIR OLSUN", 'utf8', (err) => {
    if (err) throw err;
    console.log("Veri Başarılı Bir Şekilde Eklendi");
}); */
// \n Kullanarak satır başına geçebiliyoruz.

// DOSYA SİLMEK;
/* fs.unlink('example.json', (err) => {
    if (err) throw err;
    console.log("Dosya Başarılı Bir Şekilde Silindi");
}); */

//KLASÖRLER OLUŞTURMAK;
/* fs.mkdir("uploads/img", { recursive: true }, (err) => {
    if (err) throw err;
    console.log("Klasörler Başarılı Bir Şekilde Oluşturuldu");
}); */

//KLASÖRLER SİLMEK;
/* fs.rm("uploads", { recursive: true }, (err) => {
    if (err) throw err;
    console.log("Klasörler Başarılı Bir Şekilde Silindi");
}); */
// Burada silme işlemi yaparken iç içe iki dosyanında silinmesini istiyorsan en dıştaki dosyayı yazmamız lazım. Ayrıca "/uploads" değil "uploads" şeklinde yazmamız lazım.

/* fs.rmdir("uploads", { recursive: true}, (err) => {
    if (err) throw err;
    console.log("Klasörler Başarılı Bir Şekilde Silindi");
}); */
// In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead


