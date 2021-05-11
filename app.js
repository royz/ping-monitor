require('dotenv').config();
const express = require('express');
const path = require('path');
const socket = require('socket.io');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`app listening on port ${port}...`))

// set up websocket
const io = socket(server);
io.on('connection', require('./sockets/ping.socket'))

let i = 0;
setInterval(() => {
  io.sockets.emit('ping-update', i++);
}, 1000)


module.exports = io;
