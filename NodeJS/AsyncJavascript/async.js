/* function getData(data) {
    return new Promise((resolve, reject) => {
        console.log("Veriler Alınıyor...");
        if (data) {
            resolve("Veriler Alındı.");
        }
        else {
            reject("Veriler Alınamadı!");
        }
    })
}

// getData(false)
// .then((result) => console.log(result))
// .catch((error) => console.log(error))

function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log("Veriler Düzenleniyor...");
        if (receivedData) {
            resolve("Veriler Düzenlendi.");
        }
        else {
            reject("Veriler Düzenlenemedi!");
        }
    })
}

// cleanData("banadataverin")
// .then((result) => console.log(result))
// .catch((error) => console.log(error)) */

// getData(true)
// .then((result) => {
//     console.log(result);
//     return cleanData(false)
//     .then((result2) => console.log(result2))
//     .catch((error) => console.log(error))
// })
// .catch((error2) => console.log(error2))


// ASYNC - AWAIT KULLANIMI

// Verilerin alınmasında sıkıntı olmaması (true) durumunda aşağıdaki gibi kullanılabilinirken, hata durumunda(false) try-catch kullanılması gerekir.

// async function processData() {
//     const receivedData = await getData(true);
//     console.log(receivedData);
//     const cleanedData = await cleanData(true);
//     console.log(cleanedData);
// }
// processData();


// async function processData() {
//     try {
//         const receivedData = await getData(true);
//         console.log(receivedData);
//         const cleanedData = await cleanData(false);
//         console.log(cleanedData);
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
// processData();

// Paralel işlemlerde genelde promise yapısı kullanılırken, sıralı işlemler arasında kesin sıra olduğu zamanda async-await yapısı kullanılır.


const books = [
    {name: "Kitap 1", author: "Yazar 1"},
    {name: "Kitap 2", author: "Yazar 2"},
    {name: "Kitap 3", author: "Yazar 3"}
];

const listBooks = () => {
    books.map((book) => {
        console.log(book.name)
    })
};

const addBook = (newBook) => {
    return new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
        // reject("Bir Hata Oluştu!");
    })
};

async function showBooks(newbook) {
    try {
        const addedBook = await addBook(newbook);
    listBooks()
    }
    catch(error){
        console.log(error)
    }  
}

showBooks({name: "Kitap 25", author: "Yazar 25"});
