const express = require('express');
const path = require('path');
const app = express();
const logger = require('morgan')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger());

app.get('/', (req, res) => {
  res.render("index", {
    title: "hola"
  });
});

app.listen(3000, () => {
  console.log("server running");
});
