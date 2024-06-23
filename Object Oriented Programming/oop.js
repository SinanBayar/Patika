// ENCAPSULATION

// 1.Closures
// Burada değişkenler fonksiyonun içerisinde tanımlandığı için private olurlar ve dışarıdan ulaşılamazlar. Ancak eklenen get ve set metodları ile izin verdiğimiz ölçüde ulaşılabilinir veya değiştirilebilinir olurlar.

// Example 1
// const person = (function () {
//   let name = "John Doe";
//   return {
//     getName: function () {
//       return name;
//     },
//     setName: function (newName) {
//       name = newName;
//     },
//   };
// })();
// IIFE (Immediately Invoked Function Expression)

// console.log(person.getName()); // outputs ‘John Doe’
// person.setName("Jane Doe");
// console.log(person.getName()); // outputs ‘Jane Doe’

// --------------------------------------------------------------------------- //

// Example 2
// const kitap = (function () {
//   let kitapAdi = "Harry Potter";
//   let yazar = "J. K. Rowling";
//   let sayfaSayisi = 100;
//   return {
//     getKitapAdi: function () {
//       return kitapAdi;
//     },
//     setKitapAdi: function (yeniKitapAdi) {
//       kitapAdi = yeniKitapAdi;
//     },
//     getYazarAdi: function () {
//       return yazar;
//     },
//     setYazarAdi: function (yeniYazar) {
//       yazar = yeniYazar;
//     },
//     getSayfaSayisi: function () {
//       return sayfaSayisi;
//     },
//     setSayfaSayisi: function (yeniSayfaSayisi) {
//       if (yeniSayfaSayisi > 0) {
//         sayfaSayisi = yeniSayfaSayisi;
//       } else {
//         sayfaSayisi;
//       }
//     },
//   };
// })();

// console.log(kitap.kitapAdi) // undefined (kitapAdi değişkenine direk ulaşılamaz. Ancak tanımlanan get ve set metodları ile ulaşılabilinir.)
// console.log(kitap.getKitapAdi()) // Burada "Harry Potter" çıktısına ulaşılşır.

// kitap.setKitapAdi("A Song Of Ice And Fire") // Burada kitap adını set fonksiyonu ile değiştiriyoruz.
// console.log(kitap.getKitapAdi()) // Burada "A Song Of Ice And Fire" çıktısına ulaşılşır.

// kitap.setSayfaSayisi(-25); // Sayfa sayısı 0'dan küçük olduğu için varolan sayfa sayısını döner.
// console.log(kitap.getSayfaSayisi())

// kitap.setSayfaSayisi(400); // Yeni girilen sayfa sayısı 0'dan büyük olduğu için yeni sayfa sayısını döner.
// console.log(kitap.getSayfaSayisi())

// --------------------------------------------------------------------------- //

// 2.Constructor Functions:
// Burada bir constructor function oluşturup, onun içerisinde değişkenleri tanımlayarak dışarıdan ulaşılması ve müdahale edilebilmesini engelliyoruz.

// Example 1
// function Person(name) {
//   let _name = name;
//   this.getName = function () {
//     return _name;
//   };
//   this.setName = function (newName) {
//     _name = newName;
//   };
// }
// const person = new Person("John Doe");
// console.log(person.getName()); // outputs ‘John Doe’
// person.setName("Jane Doe");
// console.log(person.getName()); // outputs ‘Jane Doe’

// Example 2
// function Kitap(kitapAdi, yazar, sayfaSayisi) {
//   let _kitapAdi = kitapAdi;
//   let _yazar = yazar;
//   let _sayfaSayisi = sayfaSayisi;
//   this.getKitapAdi = () => {
//     return _kitapAdi;
//   };
//   this.setKitapAdi = (yeniKitapAdi) => {
//     _kitapAdi = yeniKitapAdi;
//   };
//   this.getYazar = () => {
//     return _yazar;
//   };
//   this.setYazar = (yeniYazar) => {
//     _yazar = yeniYazar;
//   };
//   this.getSayfaSayisi = () => {
//     return _sayfaSayisi;
//   };
//   this.setSayfaSayisi = (yeniSayfaSayisi) => {
//     if (yeniSayfaSayisi > 0) {
//       _sayfaSayisi = yeniSayfaSayisi;
//     } else {
//       _sayfaSayisi;
//     }
//   };
// }

// const kitap = new Kitap("Harry Potter", "J. K. Rowling", 100);
// console.log(kitap.getKitapAdi());

// kitap.setKitapAdi("A Song Of Ice And Fire");
// console.log(kitap.getKitapAdi());

// kitap.setSayfaSayisi(-25)
// console.log(kitap.getSayfaSayisi())

// kitap.setSayfaSayisi(400)
// console.log(kitap.getSayfaSayisi())

// --------------------------------------------------------------------------- //

// 3. Class Syntax:
// Bir class tanımı içerisinde private(#) değişkenler ve gene bir constructor function oluşturarak değişkenlere dışarıdan ulaşılması ve müdahale edilebilmesini engelliyoruz.

// Example 1
// class Person {
//   #name;
//   constructor(name) {
//     this.#name = name;
//   }
//   getName() {
//     return this.#name;
//   }
//   setName(newName) {
//     this.#name = newName;
//   }
// }
// const person = new Person("John Doe");
// console.log(person.getName()); // outputs ‘John Doe’
// person.setName("Jane Doe");
// console.log(person.getName()); // outputs ‘Jane Doe’

// Example 2
// class Kitap {
//     #kitapAdi; // Burada typescript olsa # yerine private de kullanabilirdik
//     #yazar;
//     #sayfaSayisi;
//     constructor(kitapAdi, yazar, sayfaSayisi) {
//         this.#kitapAdi = kitapAdi
//         this.#yazar = yazar
//         this.#sayfaSayisi = sayfaSayisi

//         this.getKitapAdi = () => {
//             return this.#kitapAdi;
//         };
//         this.setKitapAdi = (yeniKitapAdi) => {
//             this.#kitapAdi = yeniKitapAdi;
//         };
//         this.getYazar = () => {
//             return this.#yazar;
//         };
//         this.setYazar = (yeniYazar) => {
//             this.#yazar = yeniYazar;
//         };
//         this.getSayfaSayisi = () => {
//             return this.#sayfaSayisi;
//         };
//         this.setSayfaSayisi = (yeniSayfaSayisi) => {
//             if (yeniSayfaSayisi > 0) {
//                 this.#sayfaSayisi = yeniSayfaSayisi;
//             } else {
//                 this.#sayfaSayisi
//             }
//         };
//     }
// }

// const kitap = new Kitap("Harry Potter", "J. K. Rowling", 100);
// console.log(kitap.getKitapAdi());

// kitap.setKitapAdi("A Song Of Ice And Fire");
// console.log(kitap.getKitapAdi());

// kitap.setSayfaSayisi(-25)
// console.log(kitap.getSayfaSayisi())

// kitap.setSayfaSayisi(400)
// console.log(kitap.getSayfaSayisi())

// --------------------------------------------------------------------------- //

// 4. WeakMap:

// Example 1
// const _name = new WeakMap();
// class Person {
//   constructor(name) {
//     _name.set(this, name);
//   }
//   getName() {
//     return _name.get(this);
//   }
//   setName(newName) {
//     _name.set(this, newName);
//   }
// }
// const person = new Person("John Doe");
// console.log(person.getName()); // outputs ‘John Doe’
// person.setName("Jane Doe");
// console.log(person.getName()); // outputs ‘Jane Doe’

// Example 2
// const _kitapAdi = new WeakMap();
// const _yazar = new WeakMap();
// const _sayfaSayisi = new WeakMap();

// class Kitap {
//   constructor(kitapAdi, yazar, sayfaSayisi) {
//     _kitapAdi.set(this, kitapAdi);
//     _yazar.set(this, yazar);
//     _sayfaSayisi.set(this, sayfaSayisi);
//   }
//   getKitapAdi() {
//     return _kitapAdi.get(this);
//   }
//   setKitapAdi(yeniKitapAdi) {
//     _kitapAdi.set(this, yeniKitapAdi);
//   }
//   getYazar() {
//     return _yazar.get(this);
//   }
//   setYazar(yeniYazar) {
//     _yazar.set(this, yeniYazar);
//   }
//   getSayfaSayisi() {
//     return _sayfaSayisi.get(this);
//   }
//   setSayfaSayisi(yeniSayfaSayisi) {
//     if (yeniSayfaSayisi > 0) {
//       _sayfaSayisi.set(this, yeniSayfaSayisi);
//     } else {
//       _sayfaSayisi.get(this);
//     }
//   }
// }

// const kitap = new Kitap("Harry Potter", "J. K. Rowling", 100);
// console.log(kitap.getKitapAdi());

// kitap.setKitapAdi("A Song Of Ice And Fire");
// console.log(kitap.getKitapAdi());

// kitap.setSayfaSayisi(-25);
// console.log(kitap.getSayfaSayisi());

// kitap.setSayfaSayisi(400);
// console.log(kitap.getSayfaSayisi());

// ref: https://medium.com/quick-code/how-encapsulation-is-achieved-in-javascript-bac829deec96
