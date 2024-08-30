const express = require('express');
const session = require('express-session');
const helmet = require('helmet')
const {v4: uuidv4} = require('uuid')
const dotenv = require('dotenv');
const {sequelize, User} = require('./Controller/db')

// Loading the dotenv config files
dotenv.config();

const app = express();

const port = process.env.LOCALPORT || 3000;
// Routes
const router = require("./routes");

//Utilization of middlewares
app.use(helmet()) // Helmet is a set of preconfigured settings for headers. We will use default for basic security purposes.

app.use(express.json());

sequelize.sync({alter: true}).then(() => {
  console.log("Database initialized");
  app.listen(port, () => {console.log(`Server running on port ${port}`)})
})
.catch(error => console.error("Error Synchronising DB:",error))

app.use("/", router);

app.post("/tesPost", (req, res) => {
  console.log(req.body);
  res.send("Body received!");
});

app.post('/users', async (req,res)=>{
  try {
    const { googleId, email, name } = req.body;
    const user = await User.create({ googleId, email, name });
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
})


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })