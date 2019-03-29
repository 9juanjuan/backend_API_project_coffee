const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const Orders = require('./models/coffee-orders');

const server = http.createServer(async(req, res) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'application/json');



})


server.listen(port, hostname, () => {
    console.log(`Serve is running at http://${hostname}:${port}`)
});