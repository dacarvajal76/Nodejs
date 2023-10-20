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
    name: req.body.name,
    emails: req.body.emails
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

exports.updateById = (req, res) => {
  const id = req.params.id; // Obtener el parámetro de la URL
  const newData = req.body; // Obtener los datos actualizados del cuerpo de la solicitud

  User.findByIdAndUpdate(id, newData, { new: true }) // Utilizar el método findByIdAndUpdate de Mongoose para buscar y actualizar el usuario por su ID
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).send({ message: "User not found" });
      }
      res.send(updatedUser);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the user",
      });
    });
};


exports.deleteUserById = (req, res) => {
  const id = req.params.id; // Obtener el parámetro de la URL

  User.findByIdAndDelete(id) // Utilizar el método findByIdAndDelete de Mongoose para buscar y eliminar el usuario por su ID
    .then((deletedUser) => {
      if (!deletedUser) {
        return res.status(404).send({ message: "User not found" });
      }
      res.send({ message: "User deleted successfully" });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while deleting the user",
      });
    });
};

exports.updatenameById = (req, res) => {
  const id = req.params.id; // Obtener el parámetro de la URL
  const newData = req.body; // Obtener los datos actualizados del cuerpo de la solicitud

  User.findByIdAndUpdate(id, newData, { new: true }) // Utilizar el método findByIdAndUpdate de Mongoose para buscar y actualizar parcialmente el usuario por su ID
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).send({ message: "User not found" });
      }
      res.send(updatedUser);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the user",
      });
    });
};