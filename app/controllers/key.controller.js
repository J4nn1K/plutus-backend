const db = require("../models");
const Key = db.keys;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Name can not be empty!"
        });
        return;
    }
    if (!req.body.key) {
        res.status(400).send({
            message: "Key can not be empty!"
        });
        return;
    }

    const key = {
        name: req.body.name,
        key: req.body.key
    };

    Key.create(key)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating."
            });
        });
};

exports.findAll = (req, res) => {
    Key.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Key.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Key was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Key with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Key with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Key.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Key was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Key with id=${id}. Maybe Key was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Key with id=" + id
            });
        });
};