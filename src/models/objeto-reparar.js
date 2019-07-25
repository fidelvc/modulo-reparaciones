const {Schema, model} = require('mongoose')

const objetoRepararSchema = new Schema({
    sn: {
        type: String,
        unique: true,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    category: String,
    observations: String,
    supplier: String,
    made: String
})

 module.exports = model ('objetoReparar', objetoRepararSchema)