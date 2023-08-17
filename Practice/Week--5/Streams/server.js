const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
 
    if(req.url!= '/'){
      return res.end('404 not found');
    }
     
    // Downloading big files in bad way

    const file = fs.readFileSync('sample.txt'); 

    // Downloading big files in Good way

    return res.end(file);

});

const PORT = process.env.PORT || 5700;
server.listen(PORT, () =>console.log(`Server is running on port ${PORT}`));  