const express = require('express');
const app = express();
const dotenv = require('dotenv');

const router = require("./routes");

// Loading the dotenv config files
dotenv.config();

app.use("/", router);

const port = process.env.LOCALPORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})