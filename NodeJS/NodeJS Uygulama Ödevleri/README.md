# NODEJS UYGULAMA ÖDEVLERİ

---

### Ödev 1 - Node.JS Komut Satırı Kullanımı

<details>  
  <summary>Details</summary>

  #### task1.js

```js
const argument = process.argv.slice(2);

function calculateArea(r) {
    let a = r * r * Math.PI 
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${a}`)
}

calculateArea(argument[0]*1);

// Terminal: node odev1 "number here"
```

<br>

[Ödev 1](https://github.com/SinanBayar/Patika/blob/main/NodeJS/NodeJS%20Uygulama%20%C3%96devleri/task1.js)

</details>

---

### Ödev 2 - Post Ekleme

<details>  
  <summary>Details</summary>

  #### task2.js

```js
let blog = [
    { postName: "Post1", postId: 1 },
    { postName: "Post2", postId: 2 },
    { postName: "Post3", postId: 3 }
]

const listPosts = () => blog.map((post) => console.log(post.postName));

const addPost = (newpost) => {
    return new Promise((resolve, reject) => {
        blog.push(newpost)
        resolve("Post Eklendi");
        reject("Post Eklenemedi!")
    })
}

async function blogControl(post) {
    try {
        await addPost(post);
        listPosts();
    }
    catch (err) {
        console.log(err);
    }
}

blogControl({ postName: "NewPost", postId: 100 });
```

<br>

[Ödev 2](https://github.com/SinanBayar/Patika/blob/main/NodeJS/NodeJS%20Uygulama%20%C3%96devleri/task2.js)

</details>

---

### Ödev 3 - Daire Modülü

<details>  
  <summary>Details</summary>

  #### circle.js

```js
function circleArea(r) {
    let area  = r * r * Math.PI;
    console.log(area);
    // return area
}

function circleCircumference(r) {
    let circumrefence = 2 * r * Math.PI;
    console.log(circumrefence);
    // return circumrefence
}

module.exports = {circleArea, circleCircumference};

// Eğer console'ye yazdırmak yerine return edersek, daha sonra index.js dosyasında console'ye daha güzel bir şekilde de yazdırabiliriz.
```

 #### index.js

```js
const {circleArea, circleCircumference} = require("./circle");

circleArea(5);
circleCircumference(5);

// Alternatif olarak circle.js dosyasındaki fonksiyonları console'ye yazdırmak yerine, return edersek aşağıdaki gibi console'ye yazdırabiliriz.
// let r = 5;
// console.log(`${r} yarıçaplı dairenin alanı: ${circleArea(r)}, çevresi ise ${circleCircumference(r)}`)

```
<br>

[Ödev 3](https://github.com/SinanBayar/Patika/tree/main/NodeJS/NodeJS%20Uygulama%20%C3%96devleri/task3)

</details>

---

### Ödev 4 - FS Modülü Çalışması

<details>  
  <summary>Details</summary>

  #### package.json

```json
{
  "name": "task4",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

 #### index.js / Eski Yöntem

```js
const fs = require('fs');

// Dosya Yazdırma:
fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if(err) console.log(err);
    console.log("The file has been saved.")
});

// Dosya Okuma:
fs.readFile("employees.json", 'utf8', (err, data) => {
    if(err) console.log(err);
    console.log(data);
}); 

// Dosya Güncelleme:
fs.appendFile("employees.json", '\n{"name": "Employee 2 Name", "salary": 3000}', 'utf8', (err) => {
    if(err) console.log(err);
    console.log("The file has been updated.");
});

// Dosya Silme;
fs.unlink("employees.json", (err) => {
    if(err) console.log(err);
    console.log("The file has been removed.");
});
```

#### index.js / Yeni Yöntem

```js
// Dosya Yazdırma:
import { writeFile } from 'node:fs';

writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been saved.');
});

// Dosya Okuma:
import { readFile } from 'node:fs';

readFile("employees.json", 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Dosya Güncelleme:
import { appendFile } from 'node:fs';

appendFile("employees.json", '\n{"name": "Employee 2 Name", "salary": 3000}', 'utf-8', (err) => {
  if (err) throw err;
  console.log("The file has been updated.");
});

// Dosya Silme;
import { unlink } from 'node:fs';

unlink("employees.json", (err) => {
  if (err) throw err;
  console.log("The file has been removed.");
});
```

<br>

[Ödev 4](https://github.com/SinanBayar/Patika/tree/main/NodeJS/NodeJS%20Uygulama%20%C3%96devleri/task4)

</details>

---

### Ödev 5 - Kendi Web Sunucumuz

<details>  
  <summary>Details</summary>

 #### task5.js

```js
const http = require("http");

const server = http.createServer((req, res) => {

    console.log("Request sent.");

    const url = req.url;

    if(url === "/") {
        res.writeHead(200, {"content-type": "text/html"});
        res.write("<h2>Welcome to Main Page</h2>");
    }
    else if(url === "/about") {
        res.writeHead(200, {"content-type": "text/html"});
        res.write("<h2>Welcome to About Page</h2>");
    }
    else if(url === "/contact") {
        res.writeHead(200, {"content-type": "text/html"});
        res.write("<h2>Welcome to Contact Page</h2>");
    }
    else {
        res.writeHead(404, {"content-type": "text/html"});
        res.write("<h2>404 Page Not Found</h2>");
    }
    res.end();
})

const port = 4000;

server.listen(port, () => {
    console.log(`Server started at: ${port}`)
})
```

<br>

[Ödev 5](https://github.com/SinanBayar/Patika/blob/main/NodeJS/NodeJS%20Uygulama%20%C3%96devleri/task5.js)

</details>

---

### Ödev 6 - Koa.js ile Web Sunucusu Yazımı

<details>  
  <summary>Details</summary>

  #### package.json

```json
{
  "name": "task6",
  "version": "1.0.0",
  "description": "",
  "main": "koaserver.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node koaserver.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "koa": "^2.14.2"
  }
}
```

#### koaserver.js / Yöntem 1

```js
const Koa = require('koa');
const app = new Koa();
const port = 3000;

app.use(ctx => {
    if (ctx.path === "/") {
        ctx.status = 200;
        ctx.type = "html";
        ctx.body = "<h1>INDEX SAYFASINA HOŞGELDİNİZ</h1>";
    }
    else if (ctx.path === "/about") {
        ctx.status = 200;
        ctx.type = "html";
        ctx.body = "<h1>ABOUT SAYFASINA HOŞGELDİNİZ</h1>";
    }
    else if (ctx.path === "/contact") {
        ctx.status = 200;
        ctx.type = "html";
        ctx.body = "<h1>CONTACT SAYFASINA HOŞGELDİNİZ</h1>";
    }
    else {
        ctx.status = 404;
        ctx.type = "html";
        ctx.body = "<h1>404 SAYFA BULUNAMADI</h1>";
    }
});

app.listen(port, () => {
    console.log(`Koa sunucusu port: ${port}'de başlatıldı.`)
});
```

#### koaserver.js / Yöntem 2

```js
const Koa = require('koa');
const app = new Koa();
const port = 3000;

app.use(ctx => {
    ctx.status = 200;
    ctx.accepts = "html";
    switch (ctx.url) {
        case "/":
            ctx.body = "<h1>INDEX SAYFASINA HOŞGELDİNİZ</h1>"
            break;
        case "/about":
            ctx.body = "<h1>ABOUT SAYFASINA HOŞGELDİNİZ</h1>"
            break;
        case "/contact":
            ctx.body = "<h1>CONTACT SAYFASINA HOŞGELDİNİZ</h1>"
            break;
        default:
            ctx.status = 404;
            ctx.body = "<h1>404 SAYFA BULUNAMADI</h1>"
            break;
    }
});

app.listen(port, () => {
    console.log(`Koa sunucusu port: ${port}'de başlatıldı.`)
});
```

<br>

[Ödev 6](https://github.com/SinanBayar/Patika/tree/main/NodeJS/NodeJS%20Uygulama%20%C3%96devleri/task6)

</details>

---