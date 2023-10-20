module.exports = (app) => {
  const User = require("../controllers/user.controller.js");
  const bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get("/getUserByName/:username", User.findUserByName);
  app.get("/getUserById/:id", User.findUserById);
  app.get("/getUsers", User.findUsers);
  app.post("/addUser", User.createNewUser);
  app.put("/editUserByName/:username", User.updateByName);
  app.put("/editUserById/:id", User.updateById);
  app.delete("/deleteUserById/:id", User.deleteUserById);
};