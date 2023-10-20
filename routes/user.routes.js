module.exports = (app) => {
  const User = require("../controllers/user.controller.js");
  const bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: false }));

 
  app.get("/directories/:id", User.findUserById); //GET /directories/{id} -> Obtener un objeto.  
  app.post("/directories/", User.createNewUser); //POST /directories/ -> Creación de objeto.

  app.get("/status/", User.pong); //GET /status/ -> Responde simplemente pong.
  app.get("/directories/", User.findUsers); //GET /directories/ -> Listado de objetos.
  
  app.put("/directories/:id", User.updateById); //PUT /directories/{id} -> Actualizar un objeto.
  app.delete("/directories/:id", User.deleteUserById); //DELETE /directories/{id} -> Eliminar un objeto.
  app.patch("/directories/:id", User.updatenameById); //PUT /directories/{id} -> Actualizar parcialmente un objeto.

};








