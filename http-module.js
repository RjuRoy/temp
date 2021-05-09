const http = require('http');
const server = http.createServer((req, res)=>{
    console.log(req);

    if(req.url === '/'){
        res.end('welcome to our node initial page');
    }
    if(req.url === '/about'){
        res.end('welcome to about page');
    }

    res.end('Page not found')
    
    
    
});

server.listen(5000)