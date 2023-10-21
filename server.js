
const express = require("express");
const app = express();
const port = 3000;

require('./config/db.config');
require('./routes/user.routes.js')(app);

app.get('/', (req, res) => {
    res.send('Este es el servidor de distribuidos, si se prueba usando postman no se debe usar RAW en el body, se debe usar x-www-form-urlencoded, las ID de objetos van directamente despues del slash')
  })

app.listen(port, () => {
  console.log("Server Started On.. http://localhost:" + port);
});