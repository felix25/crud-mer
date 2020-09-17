import React, { useState} from 'react'
import Layaout from '../../components/layaout-container/layaout-container.components'
import Table from '../../components/table/table.components'
import ClientesService from '../../services/clientes'

import moment from "moment"
import 'moment/locale/es'
moment.locale('es')
const Index = () => {
    const [loadedTable, setloadedTable] = useState(0)
    const columns= [
        { title: 'Nombre', field: 'firstName' },
        { title: 'Apellido', field: 'lastName' },
        { title: 'Email', field: 'email'},
        { title: 'Direccion', field: 'address'},
        { 
            title: 'F. Ingreso', field: 'createdAt' ,editable: 'never',
            render:(data) => {
                return moment(data.createdAt).format('L')
            }
        }
    ]
    const handleClick =(q,a) =>{

       switch(a) {
            case 'add':
                ClientesService.setClientes(q).then((e)=>(
                    setloadedTable(loadedTable+1)
                ))
                break;
            case 'update':
                alert('update')
                break;
            case 'delete':
                ClientesService.deleteClientes(q).then((e)=>(
                //console.log(e)
                    setloadedTable(loadedTable+1)
                ))
                break;
            default:
            return 'foo';
        }
    }
    return (
        <Layaout>
            <Table
                title="Listado Clientes"
                loadedProp={loadedTable}
                onClick={(q,a) => handleClick(q,a)} 
                uri={`${process.env.REACT_APP_DOMAIN}clientes`} 
                column={columns}
            />
        </Layaout>
    )
}

export default Index
