const db = require("../models");
const Hewan = db.Hewan;

exports.findAll = (req, res) => {
  Hewan.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  Hewan.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find hewan with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving hewan with id=" + id,
      });
    });
};

exports.create = (req, res) => {
  if (!req.body.nama) {
    res.status(400).send({
      message: "Nama can not be empty!",
    });
    return;
  }
  if (!req.body.namaSpesies) {
    res.status(400).send({
      message: "nama Spesies can not be empty!",
    });
    return;
  }
  if (!req.body.umur) {
    res.status(400).send({
      message: "Umur Spesies can not be empty!",
    });
    return;
  }

  const hewan = {
    nama: req.body.nama,
    namaSpesies: req.body.namaSpesies,
    umur: req.body.umur,
  };

  Hewan.create(hewan)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  hewan
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "data hewan was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update data hewan with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating data hewan with id=" + id,
      });
    });
};
