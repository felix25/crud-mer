import React, {useState,useEffect} from 'react'
import MaterialTable from 'material-table';
import LinearProgress from "@material-ui/core/LinearProgress";
import axios from 'axios'
function Material_Table(props){
    const {loadedProp} = props
    const columns = props.column

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const _uri =props.uri
    const loadData = async () =>{
        setLoading(true);
        let result = await axios(_uri)
  /*       result.data.map((e)=>{
            console.log(e)
        }) */
        setData(result.data)
        setLoading(false);
    }
    useEffect(() => { 
        loadData()
    }, [loadedProp])

    const handleRowUpdate = (newData, oldData, resolve) => {
        props.onClick(newData,"update")
        resolve()
    }
    const handleRowAdd = (newData, resolve) => {
        props.onClick(newData,"add")
        resolve()
    }
    const handleRowDelete = (oldData, resolve) => {
        props.onClick(oldData.id,"delete")
        resolve()
    }
    if (loading) {
        return <LinearProgress />;
      } else {
    return (
        <>
            <MaterialTable
                title={props.title}
                columns={columns}
                data={data}
                localization={{ body: { editRow: { deleteText: 'Deseas eliminar el registro?' } }
  }}
                editable={{
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        handleRowUpdate(newData, oldData, resolve);
                        
                    }),
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            handleRowAdd(newData, resolve)
                        }),
                    onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        handleRowDelete(oldData, resolve)
                    }),
                }}
            />
        </>
    )}
}

export default Material_Table
