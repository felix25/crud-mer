import axios from 'axios'
class ClientesService {
    static async allClinetes() {
        let result = await axios(`${process.env.REACT_APP_DOMAIN}clientes`)
        return result.data
    }
    static async setClientes(data){
        let result = await axios.post(`${process.env.REACT_APP_DOMAIN}clientes`, data)
        return result
    }
    static async deleteClientes(q){
        let result = await axios.delete(`${process.env.REACT_APP_DOMAIN}clientes/${q}`)
        return result
    }
    static async allMarca(){
        let result = await axios(`${process.env.REACT_APP_DOMAIN}autos/marcas/`)
        return result
    }
    static async allAutoss() {
        let result = await axios(`${process.env.REACT_APP_DOMAIN}autos`)
        return result.data
    }
    static async setAuto(data){
        let result = await axios.post(`${process.env.REACT_APP_DOMAIN}autos`,data)
        return result
    }
    static async deleteAuto(q){
        let result = await axios.delete(`${process.env.REACT_APP_DOMAIN}autos/${q}`)
        return result
    }

    static async allReparaciones(){
        let result = await axios(`${process.env.REACT_APP_DOMAIN}autos/reparaciones/`)
        return result
    }
    static async setReparacione(data){
        let result = await axios.post(`${process.env.REACT_APP_DOMAIN}reparaciones`,data)
        return result
    }
    static async deleteReparaciones(q){
        let result = await axios.delete(`${process.env.REACT_APP_DOMAIN}reparaciones/${q}`)
        return result
    }
}

export default ClientesService