let request = require('supertest')
const Clientes = require('../controllers/clientes')
let app = require('../index').app
let server = require('../index').server

let dummyClientes = [
    {
        firstName: 'demo',
        lastName: 'demo',
        email: 'demo@demo.com',
        address: 'demo av #11',
        state: '1'
    },
    {
        firstName: 'test',
        lastName: 'test',
        email: 'test@demo.com',
        address: 'test av #11',
        state: '1'
    }
]

describe('Clientes', () => {
    beforeEach((done) => {
        /* Clientes.destroy({}, (err) => {
            done()
        }) */
        done()
    })
    afterAll((done) => {
        server.close()
        done()
    })

    describe('GET /clientes', () => {
        test('Si no hay usuarios, deberia retornar un array vacio', (done) => {
            request(app)
            .get('/api/clientes')
            .end((err, res) => {
                expect(res.status).toBe(200)
                expect(res.body).toBeInstanceOf(Array)
                expect(res.body).toHaveLength(0)
                done()
            })
        })
    })

    describe('POST /clientes', () => {
        test('Un cliente que cumple las condiciones deberia ser creado', (done) => {
            request(app)
            .post('/api/clientes')
            .send(dummyClientes[0])
            .end((err, res) => {
                expect(res.status).toBe(201)
                expect(typeof res.text).toBe('string')
                expect(res.text).toEqual('Cliente creado exitosamente')
                done()
            })
        })
    })
})