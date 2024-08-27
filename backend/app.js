const express = require('express');
const app = express();
const dotenv = require('dotenv');

const router = require("./routes");

//Middlewares
const bodyParser = require('body-parser');

// Loading the dotenv config files
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({urlencoded:true}));

app.use("/", router);

app.post("/tesPost", (req, res) => {
  console.log(req.body);
  res.send("Body received!");
});

const port = process.env.LOCALPORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})