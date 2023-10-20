const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('This is a sample Rest CRUD API project using Node.js, Express, Pug,  MongoDb for database and Mocha & Chai for testing')
  })

app.listen(port, () => {
  console.log("Server Started On.. http://localhost:" + port);
});