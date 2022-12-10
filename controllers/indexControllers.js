
const { Player } = require('../models/player');
const { validationResult } = require("express-validator");
const axios = require('axios');


const controller = {
    crearPlayer: async (req, res) => {
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                const item = new Player(req.body)
                await item.save()
                res.status(201).json({ item })
            } else {
                res.status(501).json({ err })
            }

        } catch (error) {
            res.status(501).json({ error })
        }
    },

    verPlayer: async (req, res) => {
        const items = await Player.find()
        res.status(200).json({ items })
    },

    verPlayerId: async (req, res) => {
        const item = await Player.findById(req.params.id)
        res.status(200).json({ item })
    },

    editarPlayer: async (req, res) => {
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                await Player.findByIdAndUpdate(req.params.id, req.body)
                res.status(201).json({ msg: "Se actualizaron los datos" })
            } else {
                res.status(501).json({ err })
            }
        } catch (error) {
            res.status(501).json({ error })
        }
    },
    eliminarPlayer: async (req, res) => {
        const item = await Player.findByIdAndDelete(req.params.id)
        res.status(204).json({ msg: "El jugador seleccionado fue eliminado", item })
    }
}

const consultPokeAxios = async (req, res) => {

    const url = "https://pokeapi.co/api/v2/pokemon/ditto"

    try {
        const respuesta = await axios.get(url)
        res.json({data: respuesta.data , status: respuesta.status})
    } catch (error) {
        res.json({data: error.response.data, status: error.response.status})
    }
}

module.exports = { controller, consultPokeAxios }