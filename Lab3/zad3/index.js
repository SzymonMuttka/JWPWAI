const http = require('http');
const home = require('./routes/home');
const about = require('./routes/about');
const contact = require('./routes/contact');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    if(req.url === "/"){
        return home(req, res);
    }
    else if(req.url === "/about"){
        return about(req, res);
    }
    else if(req.url === "/contact"){
        return contact(req, res);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 — Strona nie istnieje</h1>");
    }
}).listen(port, hostname, () => {
    console.log(`Serwer działa na http://${hostname}:${port}`);
});
