const express = require('express')
const { controller } = require('../controllers/indexControllers')
const router = express.Router()
const { validateId } = require("../validations/validateId")
const { check } = require("express-validator")


router.post('/crear',[
    check("nombre").not().isEmpty().withMessage("Se requiere el nombre del jugador"),
    check("edad").not().isEmpty().withMessage("Se requiere la edad del jugador"),
    check("dorsal").not().isEmpty().withMessage("Se requiere la dorsal"),
    check("nacimiento").not().isEmpty().withMessage("Se requiere la fecha de nacimiento"),
    check("equipo").not().isEmpty().withMessage("Se requiere el equipo donde juega"),
    check("posicion").not().isEmpty().withMessage("Se requiere la posicion de juego")
], controller.crearPlayer)


router.get('/ver', controller.verPlayer)
router.get('/ver/:id', validateId, controller.verPlayerId) 

router.put('/editar/:id', validateId,[
    check("nombre").not().isEmpty().withMessage("Se requiere el nombre del jugador"),
    check("edad").not().isEmpty().withMessage("Se requiere la edad del jugador"),
    check("dorsal").not().isEmpty().withMessage("Se requiere la dorsal"),
    check("nacimiento").not().isEmpty().withMessage("Se requiere la fecha de nacimiento"),
    check("equipo").not().isEmpty().withMessage("Se requiere el equipo donde juega"),
    check("posicion").not().isEmpty().withMessage("Se requiere la posicion de juego")
],controller.editarPlayer)

router.delete('/eliminar/:id', validateId, controller.eliminarPlayer)


module.exports = router;
