import React, { useState,useEffect }  from 'react'

import Layaout from '../../components/layaout-container/layaout-container.components'
import Table from '../../components/table/table.components'
import ClientesService from '../../services/clientes'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment"
import 'moment/locale/es'
moment.locale('es')
const Index = () => {
    const [loadedTable, setloadedTable] = useState(0)
    const [lookup, setLookup] = useState([])
    
    const columns= [
        { title: 'Cliente', field: 'Auto.Cliente.firstName',editable: 'never'},
        { title: 'Auto', field: 'AutoId', lookup:lookup},
        { title: 'observation', field: 'observation' },
        { 
            title: 'F. Ingreso', field: 'createdAt' ,editable: 'never',
            render:(data) => {
                return moment(data.createdAt).format('L')
            }
        },
        { 
            title: 'F. Inicio', field: 'startTime',
            render:(data) => {
                return moment(data.startTime).format('L')
            },
            editComponent: ({ value, onChange }) => (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={value}
                    onChange={onChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time"
                    }}
                  />
                </MuiPickersUtilsProvider>
            )
        },
        { 
            title: 'F. Termino', field: 'endDate',
            render:(data) => {
                return moment(data.endDate).format('L')
            },
            editComponent: ({ value, onChange }) => (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={value}
                    onChange={onChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time"
                    }}
                  />
                </MuiPickersUtilsProvider>
            )
        }
        
    ]

    useEffect(()=>{
        const autoOptions = {};
        ClientesService.allAutoss().then(res=>{
            console.log(res)
            res.map((e)=>{
                const {id, type} = e
                autoOptions[id] = type
                setLookup(autoOptions)
                return null
            })
        })
    },[])
    const handleClick =(q,a) =>{
        switch(a) {
            case 'add':
                ClientesService.setReparacione(q).then((e)=>(
                    setloadedTable(loadedTable+1)
                ))
                break;
            case 'update':
                alert('update')
                break;
            case 'delete':
                ClientesService.deleteReparaciones(q).then((e)=>(
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
                title="Listado Reparacion"
                loadedProp={loadedTable}
                onClick={(q,a) => handleClick(q,a)} 
                uri={`${process.env.REACT_APP_DOMAIN}reparaciones`}
                column={columns}
                
            />
        </Layaout>
    )
}

export default Index
