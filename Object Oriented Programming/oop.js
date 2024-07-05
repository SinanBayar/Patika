// ------------------------------ ENCAPSULATION ------------------------------ //

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
//   #kitapAdi; // Burada typescript olsa # yerine private de kullanabilirdik
//   #yazar;
//   #sayfaSayisi;
//   constructor(kitapAdi, yazar, sayfaSayisi) {
//     this.#kitapAdi = kitapAdi;
//     this.#yazar = yazar;
//     this.#sayfaSayisi = sayfaSayisi;
//   }
//   getKitapAdi() {
//     return this.#kitapAdi;
//   }
//   setKitapAdi(yeniKitapAdi) {
//     this.#kitapAdi = yeniKitapAdi;
//   }
//   getYazar() {
//     return this.#yazar;
//   }
//   setYazar(yeniYazar) {
//     this.#yazar = yeniYazar;
//   }
//   getSayfaSayisi() {
//     return this.#sayfaSayisi;
//   }
//   setSayfaSayisi(yeniSayfaSayisi) {
//     if (yeniSayfaSayisi > 0) {
//       this.#sayfaSayisi = yeniSayfaSayisi;
//     } else {
//       this.#sayfaSayisi;
//     }
//   }
// }

// const kitap = new Kitap("Harry Potter", "J. K. Rowling", 100);
// console.log(kitap.getKitapAdi());

// kitap.setKitapAdi("A Song Of Ice And Fire");
// console.log(kitap.getKitapAdi());

// kitap.setSayfaSayisi(-25)
// console.log(kitap.getSayfaSayisi())

// kitap.setSayfaSayisi(400)
// console.log(kitap.getSayfaSayisi())

// console.log(kitap.kitapAdi) // undefined gelir çünkü kitapAdi değişkenini class içerisinde private(#) olarak tanımladık.

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


// ------------------------------- INHERITENCE ------------------------------- //

// Inheritence ile amaçlanan kod tekrarını ve buna bağlı olarak da performans kayıplarını minimuma indirmektir. Örneğin aynı fonksiyonu içerisinde barındıran iki farklı nesne oluşturmak yerine bir class tanımlar ve bu fonksiyonu da bu class içerisinde tanımlarınız. Daha sonra bu class üzerinden nesnelerimizi oluşturunca nesneler otomatik olarak miras yoluyla bu fonksiyona sahip olurlar ve nesne içerisinde tekrar bu fonksiyonu tanımlamamız gerekmez.
// const me = {
//   talk() {
//     return "Talking";
//   },
// };
// console.log(me.talk());

// const you = {
//   talk() {
//     return "Talking";
//   },
// };
// console.log(you.talk());

// Bunun yerine;
// class Person {
//   talk() {
//     return "Talking";
//   }
// }

// const me = new Person()
// const you = new Person()

// console.log(me.talk());
// console.log(you.talk());

// --------------------------------------------------------------------------- //

// Inheritence ile aynı classtan türetilen iki nesneye kalıtım yolu ile geçen fonksiyonu her iki nesne için ayrı ayrı değiştirmek yerine, miras aldıkları class'ın prototype'ını değiştirerek tek seferde halledebiliriz.
// Person.prototype.talk = function() {
//   return "New improved talking"
// }

// console.log(me.talk());
// console.log(you.talk());

// --------------------------------------------------------------------------- //

// Syntactic Sugar
// class syntax kullanarak yaptığımız işlem arka planda aşağıdaki gibi çalışır.
// function Person() {}
// Person.prototype.talk = function () {
//   return "Talking";
// };
// const me = new Person()
// console.log(me.talk())

// --------------------------------------------------------------------------- //

// Extending Behaviour
// SuperHuman class'ını Person class'ının bir uzantısı olarak oluşturduk ve talk fonksiyonunu SuperHuman class'ında yeniden tanımlamadan miras olarak aldık ve kullanabildik.
// class Person {
//   talk() {
//     return "Talking"
//   }
// }

// const me = new Person()

// class SuperHuman extends Person {
//   fly() {
//     return "Flying"
//   }
// }

// const you = new SuperHuman
// console.log(you.fly())
// console.log(you.talk())

// class Character {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   attack() {
//     return this.weapon + " ile saldır!";
//   }
// }

// class Elf extends Character {
//   constructor(name, weapon, type) {
//     super(name, weapon);
//     this.type = type;
//   }
// }

// const elfSinan = new Elf("Sinan", "Balta", "Silvan")
// console.log(elfSinan)

// --------------------------------------------------------------------------- //

// Inheritence Zinciri Oluşturma Yöntemleri;

// New Metodu İle;
// Constructor function veya class lazım.
// function Person() {
//   this.talk = function() {
//     return "Talking"
//   }
// }
// const me = new Person()
// console.log(me.talk())

// Object.create() Metodu İle;
// const person = {
//   talk() {
//     return "Talking"
//   }
// }
// const me = Object.create(person)
// console.log(me.talk())

// Object.setPrototypeOf() Metodu İle;
// const person = {
//   talk() {
//     return "Talking"
//   }
// }
// const me = {}
// Object.setPrototypeOf(me, person)
// console.log(me.talk())

// --------------------------------------------------------------------------- //

// ref: https://www.youtube.com/watch?v=jnME98ckDbQ

// Object.create() ile prototype yaklaşımı:

// const elfFunction = {
//   attack() {
//     return this.weapon + " ile saldır!";
//   },
// };
// console.log(elfFunction);

// function createElf(name, weapon) {
//   let newElf = Object.create(elfFunction);
//   newElf.name = name;
//   newElf.weapon = weapon;
//   return newElf;
// }
// const elfSinan = createElf("Sinan", "Balta")
// console.log(elfSinan)
// console.log(elfSinan.attack())

// --------------------------------------------------------------------------- //

// Constructor functions:

// function Elf(name, weapon) {
//   console.log("this", this); // Burada daha özellikler olmadığı için Elf{} döner.
//   this.name = name;
//   this.weapon = weapon;
//   console.log("this", this); // Burada özellikler eklendiği için özellikler ile birlikte döner.
// }
// const elfSinan = new Elf("Sinan", "Balta");
// console.log(elfSinan);

// Elf.prototype.attack = function(){
//     return this.weapon + " ile saldır!";
// }
// console.log(elfSinan.attack())

// Elf.prototype.build = function(){
//     return "House"
// }
// console.log(elfSinan.build())

// Elf.prototype.build = function(){
//     function building() {
//         return this.name + " builds a house"
//     }
//     // building() // Bunu kullanırsak undefined döner çünkü fonksiyon içerisinde yazılan fonksiyonda kullanılan this nesnenin kendisi yerine windowsa döner.
//     return building.bind(this)() // Burada bind(this) ile sonuç alırız.
// }
// console.log(elfSinan.build())

// --------------------------------------------------------------------------- //

// Class:

// class Elf {
//     constructor(name, weapon) {
//         this.name = name;
//         this.weapon = weapon
//     }
//     attack() {
//        return this.weapon + " ile saldır!"
//     }
// }
// console.log((new Elf("Sinan", "Balta")).attack()) // Balta ile saldır!


// ------------------------------ POLYMORPHISM ------------------------------- //