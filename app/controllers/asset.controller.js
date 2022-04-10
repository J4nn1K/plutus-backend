const db = require("../models");
const Asset = db.assets;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Name can not be empty!"
        });
        return;
    }
    if (!req.body.amount) {
        res.status(400).send({
            message: "Amount can not be empty!"
        });
        return;
    }
    // Create a Asset
    const asset = {
        name: req.body.name,
        amount: req.body.amount,
        institution: req.body.institution,
        portfolio: req.body.portfolio
    };
    // Save Asset in the database
    Asset.create(asset)
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
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
    // Asset.findAll({ where: condition })
    Asset.findAll()
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
    Asset.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Asset was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Asset with id=${id}. Maybe Asset was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Asset with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Asset.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Asset was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Asset with id=${id}. Maybe Asset was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Asset with id=" + id
            });
        });
};