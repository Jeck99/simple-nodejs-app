const http = require('http');
const fs = require('fs');
var qs = require('querystring');
var vash = require('vash');
const port = 4000;

http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("views/index.html", (err, data) => {
            if (data) {
                res.write(data);
            }
            res.end()
        })
    }
    if (req.url === "/sunday") {
        fs.readFile("views/sunday.html", (err, data) => {
            if (data) {
                res.write(data);
            }
            res.end()
        })
    }
    if (req.url === "/monday") {
        fs.readFile("views/monday.html", (err, data) => {
            if (data) {
                res.write(data);
            }
            res.end()
        })
    }
    if (req.url === "/thersday") {
        fs.readFile("views/thersday.html", (err, data) => {
            if (data) {
                res.write(data);
            }
            res.end()
        })
    }
    if (req.url === "/wensday") {
        fs.readFile("views/wensday.html", (err, data) => {
            if (data) {
                res.write(data);
            }
            res.end()
        })
    }
    if (req.url === "/thusday") {
        fs.readFile("views/thusday.html", (err, data) => {
            if (data) {
                res.write(data);
            }
            res.end()
        })
    }
    if (req.url === "/friday") {
        fs.readFile("views/friday.html", (err, data) => {
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
        fs.readFile("views/page.html", (err, data) => {
            if (data) {
                res.write(data);
            }
            res.end()
        })
    }
    if (req.url === "/data") {
        if (req.method === "POST") {
            var formData = "";
            req.on("data", (reqFormData) => {
                formData += reqFormData;
                if (formData.length > 1e6) {
                    req.connection.destroy();
                }
            })
            req.on("end", () => {
                var modelBody = qs.parse(formData);
                fs.readFile("views/data.vash", (err, vashData) => {
                    if (vashData) {
                    var compliedVash = vash.compile(vashData.toString())
                        res.write(compliedVash(
                            {
                                name:modelBody.first_name +" "+ modelBody.last_name,
                                age:modelBody.age
                            }
                        ));
                    }
                    res.end()
                })
            })
        }
        else {
            fs.readFile("views/data.vash", (err, data) => {
                if (data) {
                    res.write(data);
                }
                res.end()
            })
        }
    }
}).listen(port);
