const AutosController = require('../controllers/autos')

module.exports = (app) =>{
    app.get('/api/autos',AutosController.list)
    app.get('/api/autos/marcas',AutosController.listMarcas)
    app.post('/api/autos',AutosController.save)
    app.delete('/api/autos/:id',AutosController.delete)
}