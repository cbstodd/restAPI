const express = require('express');
const app = express();
// const { contentDisposition } = require('express/lib/utils');
// const http = require('http');
const Helpers = require('./api/helpers/generator');

app.use((req, res) => {
  const idLength = 22;
  const uid = new Helpers();
  const newUID = uid.generateId(idLength).toString();
  res.status(200).json({
    id: newUID,
    message: 'Jobs Works! on homepage'
  });
});

module.exports = app;
