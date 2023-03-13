
let taskDOM = document.querySelector("#task");  // Inputa girdiğimiz değer.
let listDOM = document.querySelector("#list");  // Listenin tamamı(ul).
let allLiDOM = document.querySelectorAll("li"); // querySelectorAll ile tüm li'lerden oluşan array'ı tanımlıyoruz.


// liste elemanı silme fonksiyonunu tanımladık.
function removeElement(erase) { 
    erase.remove();             // Liste elemanını siler
    eraseStrorage(erase);       // Liste elemanının içeriğini localStorage'den siler
}


// Liste elemanını işaretleme fonksiyonunu tanımladık.
function markElement(){
    this.classList.toggle("checked");
}


// listelerdeki kapama tuşu değişkenini liste elemanı silme eventi ile tanımladık.
let closeButton = `<button 
onclick="removeElement(parentNode)" 
style="padding: 13px;" type="button" 
class="close" 
data-dismiss="toast"
aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>`


// Her bir liste elemanı için hem kapama tuşu(liste elemanı silme eventi ile) hem de liste elemanı işaretleme eventi ile tanımlıyoruz.
allLiDOM.forEach(e => {
    e.addEventListener("click", markElement);
    e.innerHTML += `${closeButton}`;
})


// Liste elemanı ekleme fonksiyonunu tanımladık.
function newElement() {

    if (!taskDOM.value || !taskDOM.value.trim()) {
        console.log("Listeye boş ekleme yapamazsınız!");
        $(".error").toast('show') // toast bildirimi 1
    }

    else {
        // Liste için yeni bir li elemanı oluşturduk.
        let liDOM = document.createElement("li"); 
        
        // Bu li elemanını liste(ul) içerisine yerleştirdik.
        listDOM.append(liDOM); 
                                
        console.log(`Listeye eklendi. Girilen değer: ${taskDOM.value}`)
        
        // Toast bildirimi - başarılı
        $(".success").toast('show') 

        liDOM.innerHTML = `${taskDOM.value}${closeButton}`;
        // li elemanının içeriğine inputa girilen değeri ve kapama tuşu tanımladık.

        // li elemanı için işaretleme fonksiyonunu eventi tanımladık.
        liDOM.addEventListener("click", markElement);

        // localStorage.setItem("inputValue", `${taskDOM.value}`);
        setStrorage()
    }  

    taskDOM.value = ""; // input'u sıfırladık.
}


// Buradan sonra tanımladığımız fonksiyonlar tamamen localStorage ile ilgilidir.


// Liste elemanı içeriğini localStorage'ye eklediğimiz fonksiyon:
function setStrorage(){
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));   // toDoList ls'sini array'a çevirip olarak çağırdık.
    toDoList.push(`${taskDOM.value}`);                             // input'a girdiğimiz yazıyı toDoList array'ine ekledik.
    localStorage.setItem("toDoList", JSON.stringify(toDoList));    // toDoList'i tekrar string'e çevirip ls'ye yolladık.
}


// Liste elemanının içeriğini localStorage'den sildiğimiz fonksiyon:
function eraseStrorage(erase){
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));    // toDoList ls'sini array'a çevirip olarak çağırdık.
    if (toDoList.includes(erase.firstChild.textContent) == true) {  // toDoList array'i listeye yazdığımız metini içeriyorsa
        let indexbul = toDoList.findIndex(e =>                      // Bu metinin(array'in elemanı) index nosunu buluyoruz.
            e == erase.firstChild.textContent
            );
        toDoList.splice(indexbul, 1);                               // index nosundan kendisini bulup array'den siliyoruz.
        localStorage.setItem("toDoList", JSON.stringify(toDoList)); // toDoList'i tekrar string'e çevirip ls'ye yolladık.
    } 
}

// Eğer daha önce oluşturulmuş bir localStorage dosyası yok ise oluşturan fonksiyon:
function localSelf() {
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));    // toDoList ls'sini array'a çevirip olarak çağırdık.
    if (!toDoList) {toDoList = []};                                 // Hali hazırda toDoList array'i yoksa biz oluşturduk.
    localStorage.setItem("toDoList", JSON.stringify(toDoList));     // toDoList'i tekrar string'e çevirip ls'ye yolladık.
}

// Sayfayı her açtığımızda localStorage'de bulunan her elemanı listeye ekleyen fonksiyon:
function localDOM(){
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));    // toDoList ls'sini array'a çevirip olarak çağırdık.
    toDoList.forEach((e, index) => {                                // toDoList'de kayıtlı her eleman ve index nosu için;
        let liDOM = document.createElement("li");                   // liste elemanı oluşturduk.
        listDOM.append(liDOM);                                      // bu liste elemanlarını listeye(ul) ekledik.
        liDOM.innerHTML = toDoList[index]                           // liste elemanlarının içeriğine toDoList'teki arrayler,
        liDOM.innerHTML += `${closeButton}`                         // ve kapama tuşu ekledik.
        liDOM.addEventListener("click", markElement);               // işaretleme eventi ekledik.
    })
}

localSelf() // Yok ise localStorage dosyası oluşturuldu.

localDOM()  // localStorage'de daha önce kaydettiğimiz liste elemanları DOM arayüzüne eklendi.
