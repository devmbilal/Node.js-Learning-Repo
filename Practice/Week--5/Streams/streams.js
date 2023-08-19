const { log } = require('console');
const {Readable} = require('stream');

const readableStream = new Readable({
    highWaterMark:2,
    read(){}
});
 
readableStream.on('data', (chunk) => {
  console.log('Data Coming : ',chunk.toString());
});

console.log(readableStream.push('Hello from Bilal'))  ;    // push data to readable streamcon