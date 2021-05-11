require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`app listening on port ${port}...`))

module.exports = app;
