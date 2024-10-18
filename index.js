const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('sites'));

// Home 페이지 라우트
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/sites/home.html');
});

// About 페이지 라우트
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/sites/about.html');
});

// Product 페이지 라우트
app.get('/product', (req, res) => {
  res.sendFile(__dirname + '/sites/product.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});