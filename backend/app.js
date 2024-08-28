const express = require('express');
const session = require('express-session');
const helmet = require('helmet')
const {v4: uuidv4} = require('uuid')


const app = express();


const dotenv = require('dotenv');

const router = require("./routes");


// Loading the dotenv config files
dotenv.config();

//Utilization of middlewares
app.use(helmet()) // Helmet is a set of preconfigured settings for headers. We will use default for basic security purposes.

app.use(express.json());

app.use("/", router);

app.post("/tesPost", (req, res) => {
  console.log(req.body);
  res.send("Body received!");
});

const port = process.env.LOCALPORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})