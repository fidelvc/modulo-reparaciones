const objRepararCtrl = {}

const objetoReparar = require('../models/objeto-reparar')

objRepararCtrl.getObjetosReparar = async (req, res) =>{
    const objsReparar = await objetoReparar.find()
    res.json(objsReparar)
}

objRepararCtrl.crearObjetosReparar = async (req, res) =>{
    const { sn, model, name, category, observations, supplier, made} = req.body
    const newObjReparar = new objetoReparar({
        sn: sn,
        model: model,
        name: name,
        category: category,
        observations: observations,
        supplier: supplier,
        made: made
    })
    await newObjReparar.save()
    res.json({message: 'Objeto creado éxitosamente!'})
}
module.exports = objRepararCtrl