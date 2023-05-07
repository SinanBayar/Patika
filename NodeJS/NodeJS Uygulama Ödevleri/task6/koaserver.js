// YÖNTEM-1

// const Koa = require('koa');
// const app = new Koa();
// const port = 3000;

// app.use(ctx => {
//     if (ctx.path === "/") {
//         ctx.status = 200;
//         ctx.type = "html";
//         ctx.body = "<h1>INDEX SAYFASINA HOŞGELDİNİZ</h1>";
//     }
//     else if (ctx.path === "/about") {
//         ctx.status = 200;
//         ctx.type = "html";
//         ctx.body = "<h1>ABOUT SAYFASINA HOŞGELDİNİZ</h1>";
//     }
//     else if (ctx.path === "/contact") {
//         ctx.status = 200;
//         ctx.type = "html";
//         ctx.body = "<h1>CONTACT SAYFASINA HOŞGELDİNİZ</h1>";
//     }
//     else {
//         ctx.status = 404;
//         ctx.type = "html";
//         ctx.body = "<h1>404 SAYFA BULUNAMADI</h1>";
//     }
// });

// app.listen(port, () => {
//     console.log(`Koa sunucusu port: ${port}'de başlatıldı.`)
// });

// ---------------------------------------------------------------------------------- //

// YÖNTEM-2

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



