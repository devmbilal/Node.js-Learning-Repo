const http = require('http');
const fs = require('fs');
const { log } = require('console');

const server = http.createServer((req,res) => {
 
    if(req.url!= '/'){
      return res.end('404 not found');
    }
     
  // Downloading big files in bad way

    //const file = fs.readFileSync('sample.txt'); 
    //return res.end(file);

  // Downloading big files in Good way
 
    // const readableStream = fs.createReadStream('sample.txt');
    // readable stream pipe to writeable straeam
    // readableStream.pipe(res);

  // Copying big files in Good way

    // const readStream = fs.createReadStream('sample.txt');
    // const writeStream = fs.createWriteStream('output.txt');
    // readStream.on('data', (chunk) => {
    //   console.log('Chunk',chunk.toString());
    //   writeStream.write(chunk); 
    // });
    // res.end();
  
  
    
   

});

const PORT = process.env.PORT || 5700;
server.listen(PORT, () =>console.log(`Server is running on port ${PORT}`));  