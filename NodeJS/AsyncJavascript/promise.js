/* const promise1 = new Promise((resolve, reject) => {
    resolve("Problem Çözüldü");
    // reject("Hata Var!");
});

// console.log(promise1);

// promise1
// .then(value => console.log(value))

// promise1
// .catch(err => console.log(err))

promise1
.then(value => console.log(value))
.catch(err => console.log(err)) */



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
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
        // reject("Bir Hata Oluştu!");
    })
    return promise1;  
};

addBook({name: "Kitap 10", author: "Yazar 10"})
.then(() => listBooks())
.catch((error) => console.log(error))