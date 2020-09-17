const ClientesModel = require('../models').Clientes
const AutoModel = require('../models').Autos
const MarcaModel = require('../models').Marcas
const log = require('../utils/logger')
module.exports = {
    save( req, res) {
        const { ClienteId, color, year, type,MarcaId } = req.body
        ClientesModel.findOne({
            where:{
                id: ClienteId
            }
        }).then(client => {
            if(client) {
                AutoModel.create({
                        color: color
                    ,   year: year
                    ,   type: type
                    ,   ClienteId: client.id
                    ,   MarcaId: MarcaId
                }).then(() => res.status(201).send('Auto resgistrado correctamente'))
                .catch( err => {
                    log.error("Error ocurrio al tratar de registrar un auto", err)
                    res.status(500).send({
                        message: err
                    })
                })
            }
        }).catch( err => {
            log.error("Error ocurrio al tratar de buscar un cliente", err)
            res.status(500).send({
                message: err
            })
        })
    },
    delete( req, res) {
        const { id } = req.params

        AutoModel.findByPk(id).then(auto => {
            if(auto) {
                auto.destroy()
                .then(() => res.status(200).send('Los datos se eliminaron correctamente'))
                .catch(err => {
                    log.error("Error ocurrio al tratar de borrar un auto", err)
                    res.status(500).send({
                        message: err
                    })
                })
            }
        }).catch(err => {
            log.error("Error al buscar registro de auto por el id", err)
            res.status(500).send({
                message: err
            })
        })
    },
    list(req, res){
        return AutoModel.findAll({}).then(auto => res.status(200).send(auto))
    },
    listMarcas(req, res) {
        return MarcaModel.findAll({}).then(marcas => res.status(200).send(marcas))
    }
}