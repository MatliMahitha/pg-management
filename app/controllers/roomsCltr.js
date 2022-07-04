const Rooms = require('../models/rooms')
const roomsCltr = {}

roomsCltr.list = (req, res) => {
    Rooms.find().populate('buildingId')
        .then((rooms) => {
            res.json(rooms)
        })
        .catch((err) => {
            res.json(err)
        })
}

roomsCltr.create = (req, res) => {
    const body = req.body
    const rooms = new Rooms(body)
    rooms.save()
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err)
        })
}

roomsCltr.showOne = (req, res) => {
    const id = req.params.id
    Rooms.findById(id)
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err)
        })
}

roomsCltr.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Rooms.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err)
        })
}

roomsCltr.destroy = (req, res) => {
    const id = req.params.id
    Rooms.findByIdAndDelete(id)
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = roomsCltr