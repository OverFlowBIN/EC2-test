'use strict';

const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send('EC2 test OK!')
})

app.listen(80, () => {
  console.log("server On")
})

// EC2 연결됨