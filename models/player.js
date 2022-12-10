
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const playerSchema = new Schema({
    nombre:{
        type: String,
        required: true
    }, 
    edad:{
        type: Number,
        required: true
    },
    dorsal:{
        type: Number,
        required: true
    },
    nacimiento:{
        type: String,
        required: true
    },
    equipo:{
        type: String,
        required: true
    },
    posicion:{
        type: String,
        required: true
    }
})
const Player = mongoose.model('Player', playerSchema);
module.exports = {Player}