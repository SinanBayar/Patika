// Nodejs çekirdek modülü olan "http" modülü ile server oluşturacağız.
// Web serverı başlattıktan sonra durdurmak için ctrl+c tuşlarını kullanabiliriz.

const http = require("http"); 

const server = http.createServer((req, res) => {
    console.log("Bir istek gönderildi.");

    const url = req.url;  // rul adreslerindeki değişimi yakalayabildik.

    if(url === "/") {
        res.writeHead(200, {"content-type": "text/html"});
        res.write("<h1>INDEX SAYFASI</h1>");
    }else if(url === "/about") {
        res.writeHead(200, {"content-type": "text/html"});
        res.write("<h1>ABOUT SAYFASI</h1>");
    }else if(url === "/contact") {
        res.writeHead(200, {"content-type": "text/html"});
        res.write("<h1>CONTACT SAYFASI</h1>");
    }else {
        res.writeHead(404, {"content-type": "text/html"});
        res.write("<h1>404 SAYFA BULUNAMADI</h1>");
    }

    // res.write("Web Sitemize Hos Geldiniz!"); // Web sitesine girilirken görülecek mesaj
    res.end();  // Gönderilen responselerin bittiğini gösterir. Böylece artık sayfa açılabilir.
});

const port = 3005;
server.listen(port, () => {
    console.log(`Sunucu port: ${port}'de başlatıldı.`)
});  // Serverin çalışabilmesi için kullanacağımız port ve konsol mesajını giriyoruz.


