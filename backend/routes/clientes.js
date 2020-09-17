const ClientesController = require('../controllers/clientes')

module.exports = (app) =>{
    app.get('/api/clientes',ClientesController.list)
    app.post('/api/clientes',ClientesController.save)
    app.delete('/api/clientes/:id',ClientesController.delete)
}