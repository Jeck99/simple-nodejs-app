const http = require('http')
const fs = require('fs')
const port = 3000

http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            if (data) {
                res.write(data);
            }
            res.end()
        })
    }
    if (req.url === "/sunday") {
        fs.readFile("sunday.html", (err, data) => {
            if (data) {
                res.write(data);
            }
            res.end()
        })
    }    
    if (req.url === "/monday") {
        fs.readFile("monday.html", (err, data) => {
            if (data) {
                res.write(data);
            }
            res.end()
        })
    }    
    if (req.url === "/thersday") {
        fs.readFile("thersday.html", (err, data) => {
            if (data) {
                res.write(data);
            }
            res.end()
        })
    }   
     if (req.url === "/wensday") {
        fs.readFile("wensday.html", (err, data) => {
            if (data) {
                res.write(data);
            }
            res.end()
        })
    }   
     if (req.url === "/thusday") {
        fs.readFile("thusday.html", (err, data) => {
            if (data) {
                res.write(data);
            }
            res.end()
        })
    }   
     if (req.url === "/friday") {
        fs.readFile("friday.html", (err, data) => {
            if (data) {
                res.write(data);
            }
            res.end()
        })
    }
    if (req.url === "/style.css") {
        fs.readFile("style.css", (err, data) => {
            if (data) {
                res.write(data);
            }
            res.end()
        })
    }
    if (req.url === "/form") {
        fs.readFile("page.html", (err, data) => {
            if (data) {
                res.write(data);
            }
            res.end()
        })
    }
    if (req.url === "/data") {
        fs.readFile("data.html", (err, data) => {
            if (data) {
                res.write(data);
            }
            res.end()
        })
    }
}).listen(3000);