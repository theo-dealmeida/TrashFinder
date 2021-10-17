const express = require('express')
const fs = require("fs")
const path = require("path");
const app = express()
const bodyParser = require("body-parser");
const port = 3000

app.use(bodyParser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get('/', (req, res) => res.send('Hello World!'))

app.post("/saveUser", async (req, res) => {
    const body = req.body;
    let filePath = path.join(__dirname,"/src/data/users.json")
    await fs.readFile(filePath, function (err, data){
        let json = JSON.parse(data);
        json[body.username] = {password : body.password}

        await fs.writeFile(filePath, JSON.stringify(json), (err) => {
            if(err){
                console.log(err)
            }
            return;
        });
    });
    res.json({ok:"ok"})
});

app.listen(port, () => console.log(`Example app listening on port port! http://localhost:3000`))