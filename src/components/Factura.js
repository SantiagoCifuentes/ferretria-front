import React  from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import Table from './Table';

const Factura=({traerFacturas,factura})=>{
    useEffect(() => { //se ejecuta solo una vez
      
        traerFacturas()
      
      
    }, [])


    const columns = React.useMemo(
        () => [
          {
            Header: 'id',
            accessor: 'id',
          },
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
            accessor : '[productosList]'
            
          },

        //   {
        //     Header: 'Curso',
        //     accessor : 'curso'
        //   }, {
        //     Header: 'Nota',
        //     accessor : 'nota'
        //   }
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