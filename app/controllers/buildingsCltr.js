const Buildings = require('../models/buildings')
const buildingsCltr = {}

buildingsCltr.list = (req, res) => {
    Buildings.find().populate('userId')
        .then((buildings) => {
            res.json(buildings)
        })
        .catch((err) => {
            res.json(err)
        })
}

buildingsCltr.create = (req, res) => {
    const body = req.body
    const buildings = new Buildings(body)
    buildings.save()
        .then((building) => {
            res.json(building)
        })
        .catch((err) => {
            res.json(err)
        })
}

buildingsCltr.showOne = (req, res) => {
    const id = req.params.id
    Buildings.findById(id)
        .then((building) => {
            res.json(building)
        })
        .catch((err) => {
            res.json(err)
        })
}

buildingsCltr.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Buildings.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((building) => {
            res.json(building)
        })
        .catch((err) => {
            res.json(err)
        })
}

buildingsCltr.destroy = (req, res) => {
    const id = req.params.id
    Buildings.findByIdAndDelete(id)
        .then((building) => {
            res.json(building)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = buildingsCltr