const http = require("http");
//const db = require("./models");
const app = require("./app");

const PORT = process.env.PORT || 8085;

const server = http.createServer(app);


server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
