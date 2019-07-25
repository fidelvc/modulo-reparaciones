const { Router } = require('express')
const router = Router()

const { getObjetosReparar, crearObjetosReparar} = require('../controllers/objetos-reparar.controllers')

router.route('/')
    .get(getObjetosReparar)
    .post(crearObjetosReparar)

router.route('/:id')


module.exports = router