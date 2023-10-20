var User = require("../models/user.model");

exports.pong = (req,res) => {
  res.send("PONG")
}
 
exports.findUsers = (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users.",
      });
    });
};



exports.createNewUser = (req, res) => {

  const userData = new User({
    username: req.body.username,
    email: req.body.email
  });
  userData
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User.",
      });
    });
};

// Controlador
exports.findUserById = (req, res) => {
  const id = req.params.id; // Obtener el parámetro de la URL

  User.findById(id) // Utilizar el método findById de Mongoose para buscar el usuario por su ID
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: "User not found" });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving the user",
      });
    });
};