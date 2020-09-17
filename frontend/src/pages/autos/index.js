import React, {useState,useEffect} from 'react'

import Layaout from '../../components/layaout-container/layaout-container.components'
import Table from '../../components/table/table.components'
import ClientesService from '../../services/clientes'

const Index = () => {
   
    const [loadedTable, setloadedTable] = useState(0)
    const [lookup, setLookup] = useState([])
    const [lookupMarca, setLookupMarca] = useState([])
    
    const columns= [
        { title: 'color', field: 'color' },
        { title: 'año', field: 'year' },
        { title: 'tipo auto', field: 'type'},
        { title: 'Cliente', field: 'ClienteId', lookup: lookup},
        { title: 'Marca', field: 'MarcaId', lookup:lookupMarca}
    ]
    const HandleClick =(q,a) =>{
        switch(a) {
            case 'add':
                ClientesService.setAuto(q).then((e)=>(
                    setloadedTable(loadedTable+1)
                ))
                break;
            case 'update':
                alert('update')
                break;
            case 'delete':
                ClientesService.deleteAuto(q).then((e)=>(
                //console.log(e)
                    setloadedTable(loadedTable+1)
                ))
                break;
            default:
            return 'foo';
        }
    }
    useEffect(()=>{
        const clientOptions = {};
        ClientesService.allClinetes().then(res=>{
            res.map((e)=>{
                const {id, firstName} = e
                clientOptions[id] = firstName
                setLookup(clientOptions)
                return null
            })
        })
    },[])
    useEffect( ()=>{
        const marcaOptions = {};
        ClientesService.allMarca().then(res=>{
            res.data.map((e)=>{
                const {id, name} = e
                marcaOptions[id] = name
                 setLookupMarca(marcaOptions)
                 return null
            })
        })
    },[])
    return (
        <Layaout>
           <Table
                title="Listado Autos"
                loadedProp={loadedTable}
                onClick={(q,a) => HandleClick(q,a)} 
                uri={`${process.env.REACT_APP_DOMAIN}autos`}
                column={columns}
            />
        </Layaout>
    )
}

export default Index
