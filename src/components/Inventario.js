import React  from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import Table from './Table';

const Inventario=({traerProductos,productos})=>{
    useEffect(() => { //se ejecuta solo una vez
      
        traerProductos()
      
      
    }, [])


    const columns = React.useMemo(
        () => [
        
          {
            Header: 'Nombre',
            accessor : 'nombre'
            
          },
          {
            Header: 'Cantidad',
            accessor : 'cantidad'
            
          },
          {
            Header: 'CantidadMin',
            accessor : 'cantidadMin'
            
          },

          {
            Header: 'CantidadMax',
            accessor : 'cantidadMax'
            
          },


          {
            Header: 'Precio',
            accessor : 'precio'
           
          },

          {
            Header: 'Alerta',
            accessor : 'alerta'
           
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

       productos: state.contenedor
    
    })
   const mapDispatchToProps = (dispatch) => ({
        traerProductos()
        {
        fetch(urlProductos)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const productos = data
            
            dispatch
                ({
                    type: "GET",
                    result: productos
                    
                })
        })
        
        .catch(error => console.log(error))
        
        }
     
   }
    
   )
   
   

     

    


export default connect(mapStateToProps, mapDispatchToProps)(Inventario)