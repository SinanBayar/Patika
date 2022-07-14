// prompt komutu ile kullanıcıdan bilgi istedik ve myName id'li elementin içerisine kullanıcıdan gelen bu bilgiyi yerleştirdik.

let userName = prompt("Adınız Nedir?")
document.querySelector("#myName").innerHTML = userName

// Önceklikle html dosyasında body içerisinde "onload" komutu ile tanımlanan "showTime()" fonksiyonunu açtık ve içeriğini tanımlamaya başladık.

function showTime() {

// "new Date" komutunu "date" isimli bir değişkende tanımladık. Daha sonra saat, dakika ve saniye bilgilerinin her biri için "date" değişkenini de kullanarak yeni değişkenler tanımladık. 

let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

// tarih bilgisine hangi gün içerisinde olduğumuzu günün ismi ile belirtmek için "days" değişkenine bir dizi(array) tanımladık ve içerisinde haftanın günlerini oluşturduk.

let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"  
]

// "dayNumber " adıyla daha önce tanımladığımız saat, dakika ve saniye değişkenlerine ek olarak yeni bir değişken tanımladık.

let dayNumber = date.getDay()

// "dayNumber" değişkeni bize gün bilgisini sayısal vereceği için tanımladığımız "days" dizisini de kullanarak "dayName" değişkenini tanımladık. Böylede örneğin;
// "dayNumber" değişeni bize 3 sonucunu veriyorsa biz bunu "dayName" değişeni ile Çarşamba(dizilerde ilk sıra 0 unutma! bu sebeple dizide en başa Pazar'ı koyduk) olarak görebileceğiz.

let dayName = days[dayNumber]

// Burada saat, dakika ve saniye verilerinin tek basamaklı olması durumunda önlerine "0" eklenmesini "if" komutu yardımıyla sağladık.

if (hour<10)   {hour = "0" + hour}
if (minute<10) {minute = "0" + minute}
if (second<10) {second = "0" + second}

// Tarih bilgisini "saat:dakika:saniye gün_ismi" biçiminde olacak şekide "time" değişkeni ile tabnımladık.

let time = document.querySelector("#myClock")
time.innerHTML = hour + ":" + minute + ":" + second + " " + dayName

// ---------------------------------------------------------------------------------------------  //

// Şöyle bir yöntem kullanarak "if" içeren kodları(40-41-42) kullanmadan da çözebilirdik.

// document.querySelector("#myClock").innerHTML = ("0" + hour).slice(-2) + ":" + ("0" + minute).slice(-2) + ":" + ("0" + second).slice(-2) + " " + dayName

// ---------------------------------------------------------------------------------------------  //

// "setTimeout" komutu ile saniye geçişlerinin canlı olarak gözükmesini sağladım. Burada komutu kullanacağımız fonksiyonu "" içerisinde yazıp sonrasında "," koymamız komutun çalışması için önemli. Sonrasında girilen değer ise fonksiyonun başlaması için beklenecek sürenin milisaniye biriminden değeridir. 1000ms=1sn olduğundan ve her 1 saniyede bir komut kendini tekrarlayacak ve bizde her saniyedeki değişimi görebileceğiz.

setTimeout("showTime()",1000)
}

// https://www.yazilimkodlama.com/javascript/javascript-gun-ismini-ekrana-yazdirma-getdate/
// https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/
// https://www.tugrayaldiz.com/javascript-ile-saat-yazdirmak/
// https://www.javatpoint.com/javascript-date

// ---------------------------------------------------------------------------------------------  //

// Aşağıdaki versiyon da yukarıdaki kodun kısa hali diyebiliriz.

// document.querySelector("#myName").innerHTML = prompt("Adınız Nedir?")
// function showTime() {
// const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
// document.querySelector("#myClock").innerHTML = ` ${new Date().toLocaleTimeString()} ${days[new Date().getDay()]} `
// setTimeout("showTime()",1000)}

// ---------------------------------------------------------------------------------------------  //