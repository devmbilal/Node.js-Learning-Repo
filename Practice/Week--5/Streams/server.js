const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
 
    if(req.url!= '/'){
      return res.end('404 not found');
    }
    console.log('request coming',req.url); 

});

const PORT = process.env.PORT || 5700;
server.listen(PORT, () =>console.log(`Server is running on port ${PORT}`));  