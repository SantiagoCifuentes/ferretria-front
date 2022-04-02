import React, { useContext }  from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import Table from './Table';


import{useAuth}from '../context/authContext'

const GenerarFactura=({traerProductos,productos,traerProductosPost})=>{
    useEffect(() => { //se ejecuta solo una vez
      
        traerProductos()
      
      
    }, [])


    const columns = React.useMemo(
        () => [
        
            {
                Header: '',
                id: 'boton',
                accessor: (producto)=>{
                    return(
                        <div>
                        <input
                          id={producto.id}
                          required
                          ></input>
                        <button onClick={() =>  traerProductosPost(producto)}>Añadir</button>
                      </div>
                    )
                }
                
            },

          {
            Header: 'Nombre',
            accessor : 'nombre'
            
          },
          {
            Header: 'Cantidad',
            accessor : 'cantidad'
            
          },
       
          {
            Header: 'Precio',
            accessor : 'precio'
           
          },

          
        
        ],
        
        []
      )
    



    const data =  productos
    
    //console.log(factura)
    return(<div>
             <Table columns={columns} data={data} />
        </div>)          
    }

    var urlProductos = "http://localhost:8080/ferreteria/productos"

    const mapStateToProps = (state) => //trae los datos del state del reducer, de la "bd"
    ({

       productos: state.contenedor,
       productosFactura: state.productos,
    
    })
   const mapDispatchToProps = (dispatch) => ({
        traerProductos()
        {
        fetch(urlProductos)
        .then(response => response.json())
        .then(data => {
            
            const productos = data
            
            dispatch
                ({
                    type: "GET",
                    result: productos
                    
                })
        })
        
        .catch(error => console.log(error))
        
        },
        traerProductosPost(productos)
        {
            console.log(productos)
            dispatch
                ({
                    type: "POST_FACTURA",
                    result: productos
                })
        }
   }
    
   )
   
   

     
     export default connect(mapStateToProps, mapDispatchToProps)(GenerarFactura)  