const ReparacionesController = require('../controllers/reparaciones')

module.exports = (app) =>{
    app.get('/api/reparaciones',ReparacionesController.list)
    app.post('/api/reparaciones',ReparacionesController.save)
   /*  app.delete('/api/reparaciones/:id',ReparacionesController.delete) */
}