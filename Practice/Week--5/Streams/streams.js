const { log } = require('console');
const {Readable,Writable} = require('stream');

// Readable Stream
const readableStream = new Readable({
    highWaterMark:2,
    read(){}
});

readableStream.on('data', (chunk) => {
  console.log('Data Coming : ',chunk.toString());
  writeableStream.write(chunk); 
});

// Writeableable Stream

const writeableStream = new Writable({
    write :function(s){
        console.log('writting : ',s.toString());
    },
     
})

console.log(readableStream.push('Hello from Bilal'))  ; 



 