import React, { useContext }  from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import Table from './Table';
import{useAuth}from '../context/authContext'

const Factura=({traerFacturas,factura})=>{

 
  useEffect(() => { //se ejecuta solo una vez
      
        traerFacturas()
      
      
    }, [])

    const {user}= useAuth()
    console.log(user)

    const columns = React.useMemo(
        () => [
        
          {
            Header: 'Fecha',
            accessor : 'fecha'
            
          },
          {
            Header: 'Cliente',
            accessor : 'cliente.nombre'
            
          },

          {
            Header: 'Asesor',
            accessor : 'asesor.nombre'
           
          },
        
    
          {
            Header: 'Productos',
            id: 'productosList',
            accessor: data => {
              let output = [];
              data.productosList?.map(item => {
                return output.push(item.nombre+"|" + "Cantidad: "+ item.cantidad+"|");
              });
              return output.join("");
            }

          },
        ],
        
        []
      )
    



    const data =  factura
    
    //console.log(factura)
    return(<div>
             <Table columns={columns} data={data} />
        </div>)          
    }

    var urlFactura = "http://localhost:8080/ferreteria/factura"

    const mapStateToProps = (state) => //trae los datos del state del reducer, de la "bd"
    ({

        factura: state.contenedor
    
    })
   const mapDispatchToProps = (dispatch) => ({
        traerFacturas()
        {
        fetch(urlFactura)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const factura = data
            
            dispatch
                ({
                    type: "GET",
                    result: factura
                    
                })
        })
        
        .catch(error => console.log(error))
        
        }
     
   }
    
   )
   
   

     

    


export default connect(mapStateToProps, mapDispatchToProps)(Factura)