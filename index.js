const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const Orders = require('./models/coffee-orders');

const server = http.createServer(async(req, res) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'application/json');
    if (req.url.startsWith("/orders")) {
        const method = req.method;
        const parts = req.url.split("/");
        if (method === "GET"){
            if (parts.length === 2) {
                res.end('BeepBoop')
            } else if (parts.length ===3) {
                const orderId = parts[2];
                const theOrder = await Orders.getById(orderId)
                const orderJSON = JSON.stringify(theOrder);
                res.end(orderJSON);
            } else {
                res.statusCode = 404;
                res.end("Rekt");
            }
        }

        else if (method === "POST"){
            res.end(` {message: "Give me your bitcoins" }`);
        }
        else if (method === "PUT") {
            res.end(`  {message: "What are you putting in here? Bitcoin?"}`);
        }
        else if (method === "DELETE") {
            res.end(` {message: "delete dis"}`);
        }
        else {
            res.end (` { 
                message: "Why yes, I'll take ze bitoin."
            }`)
        }
    
    }


})


server.listen(port, hostname, () => {
    console.log(`Serve is running at http://${hostname}:${port}`)
});