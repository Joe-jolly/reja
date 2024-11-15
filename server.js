console.log('web serverni boshlash');
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");

// 1. Kirish codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session codes

// 3. Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4. Routing codes
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "successful" });
});

app.get('/', function(req, res) {
    res.render('harid');
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server running successfully on PORT ${PORT}`)
});

