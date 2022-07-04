const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tenantsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    aadhaar: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    roomId: {
        type: Schema.Types.ObjectId,
        ref: 'Rooms',
        required: true
    },
    buildingId: {
        type: Schema.Types.ObjectId,
        ref: 'Buildings',
        required: true
    }
})

const Tenants = mongoose.model('Tenants', tenantsSchema)

module.exports = Tenants