var User = require("../models/user.model");

exports.pong = (req,res) => {
  res.send("PONG")
}
 
// Controlador
exports.findUsers = (req, res) => {
  const page = parseInt(req.query.page) || 1; // Obtener el número de página de la consulta (por defecto es 1)
  const limit = parseInt(req.query.limit) || 10; // Obtener el límite de elementos por página de la consulta (por defecto es 10)

  // Calcular el índice de inicio y fin para la paginación
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  // Definir los enlaces a la página siguiente y previa
  const baseUrl = req.protocol + "://" + req.get("host") + req.originalUrl.split("?")[0]; // Obtener la URL base sin los parámetros de consulta
  const totalItems = User.countDocuments(); // Obtener el número total de objetos
  const totalPages = Math.ceil(totalItems / limit);

  const pagination = {
    totalItems: totalItems,
    totalPages: totalPages,
    currentPage: page,
  };

  // Ejecutar la consulta para obtener los objetos
  User.find()
    .skip(startIndex)
    .limit(limit)
    .then((data) => {
      // Construir el objeto de respuesta con el formato deseado
      const response = {
        count: data.length,
        next: page < totalPages ? `${baseUrl}?page=${page + 1}&limit=${limit}` : null,
        previous: page > 1 ? `${baseUrl}?page=${page - 1}&limit=${limit}` : null,
        results: data,
      };

      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Users.",
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