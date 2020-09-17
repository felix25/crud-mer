const ReparacionesModel = require('../models').ReparacioneDetaill
const AutoModel = require('../models').Autos
const ClientesModel = require('../models').Clientes
const log = require('../utils/logger')

module.exports = {
    save( req, res) {
        const {
            observation
        ,   startTime
        ,   endDate
        ,   AutoId
        } = req.body
        ReparacionesModel.create({
                observation : observation
            ,   startTime   : startTime
            ,   endDate     : endDate
            ,   AutoId      : AutoId 
        }).then(() => res.status(201).send('Registro exitoso'))
        .catch( err => {
            log.error(`Ocurrio un error al registrar la reparacion ${err}`)
            res.status(500).send({
                message: err
            })
        })
    },
    list( req, res) {
        ReparacionesModel.findAll({
            include: [{
                model: AutoModel,
                include:[
                    {
                        model:ClientesModel
                    }
                ]
            }]
        }).then(data => res.status(200).send(data))
    },
    listAll(req, res){
        return ReparacionesModel.findAll({}).then(auto => res.status(200).send(auto))
    },
}