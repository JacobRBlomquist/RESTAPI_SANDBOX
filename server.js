const https = require('https');
const http = require('http');
const fs = require('fs');
const app = require('./app');

const port = process.env.PORT || 443;


const options = {
    key: fs.readFileSync('./certificates/key.pem'),
    cert: fs.readFileSync('./certificates/cert.pem')
};

const server = https.createServer(options, app);

server.listen(port, () => {
    console.log("Server up on port " + port);
});

//redirect from port 80 http to https
http.createServer((req, res) => {
    res.writeHead(301, {
        "Location": "https://" + req.headers['host'] + req.url
    });
    res.end();
}).listen(80);