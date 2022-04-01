import React  from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import Table from './Table';
import{useAuth}from '../context/authContext'

const Clientes=({traerClientes,clientes})=>{
    useEffect(() => { //se ejecuta solo una vez
      
        traerClientes()
      
      
    }, [])

    const {user}= useAuth()
    console.log(user)

    const columns = React.useMemo(
        () => [
        
          {
            Header: 'Cedula',
            accessor : 'identificacion'
            
          },
          {
            Header: 'Nombre',
            accessor : 'nombre'
            
          },

          {
            Header: 'Contacto',
            accessor : 'contacto'
           
          },
        
    
         
        ],
        
        []
      )
    



    const data =  clientes
    
    //console.log(factura)
    return(<div>
             <Table columns={columns} data={data} />
        </div>)          
    }

    var urlClientes = "http://localhost:8080/ferreteria/cliente"

    const mapStateToProps = (state) => //trae los datos del state del reducer, de la "bd"
    ({

        clientes: state.contenedor
    
    })
   const mapDispatchToProps = (dispatch) => ({
        traerClientes()
        {
        fetch(urlClientes)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const clientes = data
            
            dispatch
                ({
                    type: "GET",
                    result: clientes
                    
                })
        })
        
        .catch(error => console.log(error))
        
        }
     
   }
    
   )
   
   

     

    


export default connect(mapStateToProps, mapDispatchToProps)(Clientes)