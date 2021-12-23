require('dotenv').config();
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3003;
const server = http.createServer(app);

const Helpers = require('./api/helpers/generator');
const idLength = 22;
let uid = new Helpers();
const newUID = uid.generateId(idLength);


// Calls and starts server:
server.listen(() => {
  console.log(
    `Yay! Your express server is running on http://localhost:${port}/`
  );
  console.info('uid: ', newUID);
});

