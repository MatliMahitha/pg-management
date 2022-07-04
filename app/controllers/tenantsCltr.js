const Tenants = require('../models/tenants')
const tenantsCltr = {}

tenantsCltr.list = (req,res) => {
    Tenants.find().populate('roomId','buildingId') 
        .then((tenants) => {
            res.json(tenants)
        })
        .catch((err) => {
            res.json(err)
        })
}
tenantsCltr.create = (req,res) => {
    const body =  req.body
    const tenants = new Tenants(body)
    tenants.save()
    .then((tenant) => {
        res.json(tenant)
    })
    .catch((err) => {
        res.json(err)
    })
}
tenantsCltr.showOne = (req,res) => {
    const id = req.params.id
    Tenants.findById(id)
    .then((tenant) => {
        res.json(tenant)
    })
    .catch((err) => {
        res.json(err)
    })
}
tenantsCltr.update = (req,res) => {
    const body = req.body
    const id = req.params.id
    Tenants.findByIdAndUpdate(id,body,{ new : true,runValidations : true} )
    .then((tenant) => {
        res.json(tenant)
    })
    .catch((err) => {
        res.json(err)
    })
}
tenantsCltr.destroy = (req,res) => {
    const id = req.params.id
    Tenants.findByIdAndDelete(id)
    .then((tenant) => {
        res.json(tenant)
    })
    .catch((err) => {
        res.json(err)
    })
}
module.exports = tenantsCltr