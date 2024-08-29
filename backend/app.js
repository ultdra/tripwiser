const express = require('express');
const session = require('express-session');
const helmet = require('helmet')
const {v4: uuidv4} = require('uuid')
const dotenv = require('dotenv');

const app = express();

const port = process.env.LOCALPORT || 3000;
// Routes
const router = require("./routes");

//Initializing needed modules
app.use(passport.initialize())

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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})