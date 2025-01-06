const http = require("http");
const fs = require("fs");
const url = require("url");
const EventEmitter = require("events");

const myEmitter = new EventEmitter();
const server = http.createServer((request, response) => {
  if (request.url === "/favicon.ico") {
    return response.end();
  }
  const log = `\n${new Date().getHours().toString()}:${new Date()
    .getMinutes()
    .toString()}\t${request.url}\t New Request Received`;
  fs.appendFile("./test.txt", log, (err) => {});
  console.log("New request is received ...");

  const myURL = url.parse(request.url, true);
  console.log(myURL);

  switch (myURL.pathname) {
    case "/":
      const home = fs.readFileSync("./home.html", "utf-8");
      response.end(home);
      break;
    case "/about":
      myEmitter.on("ContactAsked", () => {
        console.log("Contact provided");
      });
      myEmitter.emit("ContactAsked");
      const username = myURL.query.xyz;
      response.end(`This is ${username}`);
      break;
    case "/contact":
      const user = myURL.query.name;
      const id = myURL.query.id;
      console.log(user);
      console.log(id);
      response.end(`The user is ${user} and the id is ${id}`);
      break;
    default:
      response.end("Not Found");
  }

  //   console.log(request);
  //   response.end("Message from Server");
});

server.listen(8001, () => {
  console.log("Listening on port 8001");
});
