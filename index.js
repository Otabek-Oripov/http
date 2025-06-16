const http = require('http');
const server=http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('this page is root');
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('this page is about');

    }
});

server.listen(3000,()=>{
    console.log('server is started on port 3000')
});