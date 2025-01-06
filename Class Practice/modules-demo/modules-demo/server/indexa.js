// const path = require("path");

// console.log(path.resolve(__dirname, "xyz.txt"));

// const os = require("os");

// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}\nFree Memory: ${freeMemory}`);

const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("xyz", () => {
  console.log("The file is loaded");
});

myEmitter.on("xyz", function () {
  console.log("The second file is loaded");
});

myEmitter.emit("xyz");
