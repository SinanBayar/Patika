const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


// Öncelikle 4 adet butonu js kullanarak oluşturup, bu butonların özellikleri ve butonlara tıklandığında çalışması gereken fonksiyonu(event caller) belirliyoruz.
// Hemen sonra da butonlara tıkladığında çalışacak olan fonksiyonların içeriğini tanımlıyoruz.


// ----------------------------------------- button All ----------------------------------------------- //
function buttonAll(){
  let filterButtons = document.querySelector(".btn-container"); // Butonları içerisine yerleştireceğimiz div tanımladık.
  let button = document.createElement("button");                // Ekleyeceğimiz butonu tanımladık.
  filterButtons.append(button);                                 // Butonu önceden tanımladığımız div içerisine yerleştirdik.
  button.innerHTML = "All";                                     // Buton yazısını belirledik.
  button.addEventListener("click", functionAll);                // Butona tıkladığında çalışacak fonksiyonu belirledik.
  button.classList.add("btn",  "btn-outline-dark", "btn-item"); // Buton class özelliklerini(bootstrap) tanımladık.
}
buttonAll()                                                     // Fonksiyonu çalıştırarak butonu ekledik.


function functionAll() {                                        // Butona tıklandığında çalışacak fonksiyonu tanımlıyoruz.
  removeAllChildNodes(menuList);                                // Butona tıklanmadan önceki tüm içeriği silen fonksiyon.  
  let menuAll = menu;                                           // Menu içeriğini belirleyen değişkeni tanımladık.
  functionMenuItem(menuAll);                                    // Yeni menu içeriği ile menüyü ekrana getiren fonksiyon. 
}

// ----------------------------------------- button Korea --------------------------------------------- //
function buttonKorea(){
  let filterButtons = document.querySelector(".btn-container"); // Butonları içerisine yerleştireceğimiz div tanımladık.
  let button = document.createElement("button");                // Ekleyeceğimiz butonu tanımladık.
  filterButtons.append(button);                                 // Butonu önceden tanımladığımız div içerisine yerleştirdik.
  button.innerHTML = "Korea";                                   // Buton yazısını belirledik.
  button.addEventListener("click", functionKorea);              // Butona tıkladığında çalışacak fonksiyonu belirledik.
  button.classList.add("btn",  "btn-outline-dark", "btn-item"); // Buton class özelliklerini(bootstrap) tanımladık.
}
buttonKorea()                                                   // Fonksiyonu çalıştırarak butonu ekledik.


function functionKorea() {                                      // Butona tıklandığında çalışacak fonksiyonu tanımlıyoruz.
  removeAllChildNodes(menuList);                                // Butona tıklanmadan önceki tüm içeriği silen fonksiyon.   
  let menuKorea = menu.filter(e => e.category == "Korea");      // Menu içeriğini belirleyen değişkeni tanımladık.
  functionMenuItem(menuKorea);                                  // Yeni menu içeriği ile menüyü ekrana getiren fonksiyon.
}

// ----------------------------------------- button Japan --------------------------------------------- //
function buttonJapan(){
  let filterButtons = document.querySelector(".btn-container"); // Butonları içerisine yerleştireceğimiz div tanımladık.
  let button = document.createElement("button");                // Ekleyeceğimiz butonu tanımladık.
  filterButtons.append(button);                                 // Butonu önceden tanımladığımız div içerisine yerleştirdik.
  button.innerHTML = "Japan";                                   // Buton yazısını belirledik.
  button.addEventListener("click", functionJapan);              // Butona tıkladığında çalışacak fonksiyonu belirledik.
  button.classList.add("btn",  "btn-outline-dark", "btn-item"); // Buton class özelliklerini(bootstrap) tanımladık.
}
buttonJapan()                                                   // Fonksiyonu çalıştırarak butonu ekledik.


function functionJapan() {                                      // Butona tıklandığında çalışacak fonksiyonu tanımlıyoruz.
  removeAllChildNodes(menuList);                                // Butona tıklanmadan önceki tüm içeriği silen fonksiyon.
  let menuJapan = menu.filter(e => e.category == "Japan");      // Menu içeriğini belirleyen değişkeni tanımladık.
  functionMenuItem(menuJapan);                                  // Yeni menu içeriği ile menüyü ekrana getiren fonksiyon.
}

// ----------------------------------------- button China --------------------------------------------- //
function buttonChina(){
  let filterButtons = document.querySelector(".btn-container"); // Butonları içerisine yerleştireceğimiz div tanımladık.
  let button = document.createElement("button");                // Ekleyeceğimiz butonu tanımladık.
  filterButtons.append(button);                                 // Butonu önceden tanımladığımız div içerisine yerleştirdik.
  button.innerHTML = "China";                                   // Buton yazısını belirledik.
  button.addEventListener("click", functionChina);              // Butona tıkladığında çalışacak fonksiyonu belirledik.
  button.classList.add("btn",  "btn-outline-dark", "btn-item"); // Buton class özelliklerini(bootstrap) tanımladık.
}
buttonChina()                                                   // Fonksiyonu çalıştırarak butonu ekledik.


function functionChina() {                                      // Butona tıklandığında çalışacak fonksiyonu tanımlıyoruz.
  removeAllChildNodes(menuList);                                // Butona tıklanmadan önceki tüm içeriği silen fonksiyon.
  let menuChina = menu.filter(e => e.category == "China");      // Menu içeriğini belirleyen değişkeni tanımladık.
  functionMenuItem(menuChina);                                  // Yeni menu içeriği ile menüyü ekrana getiren fonksiyon.
} 

// ---------------------------------- functionMenuItem(menuChanged) ------------------------------------ //

// Burada menu icerisindeki ürünlerin içeğini(görsel ve açıklama), butona tıklandığında uygulanacak parametreye(menuAll, menuKorea, menuJapan, menuChina) göre oluşturan fonksiyonu tanımlıyoruz.

function functionMenuItem(menuChanged) {

  for(let i = 0 ; i <= menuChanged.length -1 ; i++) {              // Menu eleman indeksleri için "i" tanımladık.

  let menuList = document.querySelector(".section-center", "row"); // menuList isimli bir div tanımladık.

  let menuItem = document.createElement("div");                    // menuItem isimli yeni bir div oluşturduk.
  menuList.append(menuItem);                                       // menuItem'ı, menuList div'i içerisine yerleştirdik.
  menuItem.classList.add("menu-items", "col-lg-6", "col-sm-12");   // menuItem için class özelliklerini tanımladık.

  let menuImg = document.createElement("img");                     // menuImg isimli bir element oluşturduk.
  menuItem.append(menuImg);                                        // menuImg elementini menuItem içerisine yerleştirdik.
  menuImg.classList.add("photo");                                  // menuImg elementi için class özelliklerini tanımladık.
  menuImg.src = menuChanged[i].img;                                // Parametredeki array'ın img değerini menuImg src'ye atadık.
  menuImg.alt = menuChanged[i].title;                              // Parametredeki array'ın title değerini menuImg alt'ye atadık.

  let menuInfo = document.createElement("div");                    // menuInfo isimli bir div oluşturduk.
  menuItem.append(menuInfo);                                       // menuInfo'yu, menuItem div'i içerisine yerleştirdik.
  menuInfo.classList.add("menu-info");                             // menuInfo için class özelliklerini tanımladık.

  let menuTitle = document.createElement("div");                   // menuTitle isimli bir div oluşturduk.
  menuInfo.append(menuTitle);                                      // menuTitle'yi, menuInfo div'i içerisine yerleştirdik.
  menuTitle.classList.add("menu-title");                           // menuTitle için class özelliklerini tanımladık.

  let baslik = document.createElement("h4");                       // baslik isimli bir h4 oluşturduk.
  menuTitle.append(baslik);                                        // baslik isimli h4'ü menuTitle içerisine yerleştirdik.
  baslik.innerHTML = menuChanged[i].title;                         // baslik yazı içeriğini parametredeki array'ın title değerinden atadık.

  let fiyat = document.createElement("h4");                        // fiyat isimli bir h4 oluşturduk.
  menuTitle.append(fiyat);                                         // fiyat isimli h4'ü menuTitle içerisine yerleştirdik.
  fiyat.classList.add("price");                                    // fiyat için class özelliklerini tanımladık.
  fiyat.innerHTML = menuChanged[i].price;                          // fiyat yazı içeriğini parametredeki array'ın price değerinden atadık.

  let menuText = document.createElement("div");                    // menuText isimli bir div oluşturduk.
  menuInfo.append(menuText);                                       // menuText'i, menuInfo div'i içerisine yerleştirdik.
  menuText.classList.add("menu-text");                             // menuText için class özelliklerini tanımladık.
  menuText.innerHTML = menuChanged[i].desc;                        // menuText yazı içeriğini parametredeki array'ın desc değerinden atadık.

  }
}

functionMenuItem(menu);                                            // Anasayfada fonksiyonu menu parametresiyle çalıştırdık.



// ----------------------------------- removeAllChildNodes(parent) ------------------------------------ //

// Burada butona tıkladığımızda kullanacağımız, butona tıklanmadan önce menuList içerisinde oluşturulan tüm içeriği silen fonksiyonu tanımlıyoruz. Böylece butona her tıkladığımızda aynı içerik alt alta gelmiyor ve diğer butonlara tıklanılması sonucu oluşan eski içerik de siliniyor.

// Fonksiyonun çalışma mantığı hangi div içerisinde(parent = menuList için) menu içeriklerini oluşturuyorsak, o divin içerisinde tüm içerikleri(div içerisindeki tüm elementler) silmek üzerine kuruludur.

let menuList = document.querySelector(".section-center", "row");    // functionMenuItem(menu) çalışınca oluşan elementlerin hepsini kapsayan div'i tanımlıyoruz.

function removeAllChildNodes(parent) {                            
  while (parent.firstChild) {                                       
      parent.removeChild(parent.firstChild);                        
  }
}

// Parametrenin(bizim için tanımladığımız menuList) alt elementleri içerisinde ilk sırada bir element olduğu sürece, tüm ilk elementleri sırayla siliyor. Yani parametrenin içerisinde alt element kalmayana kadar tüm elementleri siliyor.

