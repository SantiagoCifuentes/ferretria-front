import React  from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import Table from './Table';

const Proveedor=({traerProveedor,proveedor})=>{
    useEffect(() => { //se ejecuta solo una vez
      
        traerProveedor()
      
      
    }, [])


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
    



    const data =  proveedor
    
    //console.log(factura)
    return(<div>
             <Table columns={columns} data={data} />
        </div>)          
    }

    var urlProveedor = "http://localhost:8080/ferreteria/proveedor"

    const mapStateToProps = (state) => //trae los datos del state del reducer, de la "bd"
    ({

        proveedor: state.contenedor
    
    })
   const mapDispatchToProps = (dispatch) => ({
        traerProveedor()
        {
        fetch(urlProveedor)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const proveedor = data
            
            dispatch
                ({
                    type: "GET",
                    result: proveedor
                    
                })
        })
        
        .catch(error => console.log(error))
        
        }
     
   }
    
   )
   
   

     

    


export default connect(mapStateToProps, mapDispatchToProps)(Proveedor)