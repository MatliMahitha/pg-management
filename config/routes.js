const express = require('express')
const router = express.Router()
const userCltr = require('../app/controllers/userCltr')
const buildingsCltr = require('../app/controllers/buildingsCltr')
const roomsCltr = require('../app/controllers/roomsCltr')
const tenantsCltr = require('../app/controllers/tenantsCltr')

router.get('/api/users',userCltr.list)
router.post('/api/users',userCltr.create)

router.get('/api/buildings',buildingsCltr.list)
router.post('/api/buildings',buildingsCltr.create)
router.get('/api/buildings/:id',buildingsCltr.showOne)
router.put('/api/buildings/:id',buildingsCltr.update)
router.delete('/api/buildings/:id',buildingsCltr.destroy)

router.get('/api/rooms',roomsCltr.list)
router.post('/api/rooms',roomsCltr.create)
router.get('/api/rooms/:id',roomsCltr.showOne)
router.put('/api/rooms/:id',roomsCltr.update)
router.delete('/api/rooms/:id',roomsCltr.destroy)

router.get('/api/tenants',tenantsCltr.list)
router.post('/api/tenants',tenantsCltr.create)
router.get('/api/tenants/:id',tenantsCltr.showOne)
router.put('/api/tenants/:id',tenantsCltr.update)
router.delete('/api/tenants/:id',tenantsCltr.destroy)

module.exports = router