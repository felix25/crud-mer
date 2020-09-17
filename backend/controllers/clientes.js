const ClientesModel = require('../models').Clientes
const log = require('../utils/logger')
module.exports = {
    save( req, res) {
        const {
            firstName
        ,   lastName
        ,   email
        ,   address
        } = req.body

        ClientesModel.findOne({
            where:{
                email: email
            }
        }).then(client => {
            if(client) {
                res.status(400).send({
                    message: 'El cliente ya exite'
                })
            } else {
                ClientesModel.create ({
                    firstName : firstName
                    ,   lastName : lastName
                    ,   email    : email
                    ,   address  : address
                    ,   state    : 1
                }).then(data => {
                    res.status(201).send('Cliente creado exitosamente')
                }).catch( err => {
                    log.error("Error ocurrio al tratar de crear un cliente", err)
                    res.status(500).send({
                        message: err
                    })
                })
            }
        }).catch( err => {
            log.error(`Error ocurrio al buscar un cliente por email al registrase err ${err}`, err)
            res.status(500).send({
                message: err
            })
        })
    },
    delete( req, res) {
        const { id } = req.params

        ClientesModel.findByPk(id).then(client => {
            if(client) {
                client.destroy()
                .then(() => res.status(200).send({
                    message: 'Los datos se eliminaron correctamente'
                }))
                .catch(err => {
                    res.status(500).send({
                        message: err
                    })
                })
            }
        }).catch(err => {
            res.status(500).send({
                message: err
            })
        })
    },
    list(req, res){
        return ClientesModel.findAll({}).then(client => res.status(200).send(client))
    }
}