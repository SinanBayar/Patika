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