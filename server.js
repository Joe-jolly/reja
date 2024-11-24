const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = 
    "mongodb+srv://sardorbek_rakhmonov:sardorbek1210@cluster0.e8y9d.mongodb.net/Reja";

mongodb.connect(connectionString, {
    userNewUrlParser: true, 
    useUnifiedTopology: true,
},
(err, client) => {
    if(err) console.log("ERROR on connection to MongoDB");
        else {
            console.log("MongoDB connection succeed");
            module.exports = client;

            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function () {
                console.log(
                    `The server running successfully on PORT ${PORT}, http://localhost:${PORT}`
                );
            });
        }
});

