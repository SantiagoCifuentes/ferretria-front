import React,{useEffect,useState} from 'react';
import { Provider } from 'react-redux';
import store from './reducer/Reducer'
import { Navbar } from './components/Navbar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Factura from './components/Factura';
import Inventario from './components/Inventario';
import GenerarFactura from './components/GenerarFactura';
import GenerarVolante from './components/GenerarVolante';
import Cliente from './components/Cliente';
import Proveedor from './components/Proveedor';



function App() 
{

 

  return ( //el store trae el estado del reducer y se lo pasa a todos los hijos
    <Provider store={store}>   
    <BrowserRouter>
    <Navbar/>
    <Routes>

        <Route path="Factura" element={<Factura />} />
        <Route path="Inventario" element={<Inventario />} />
        <Route path="Generar-factura" element={<GenerarFactura/>}/>
        <Route path="Generar-volante" element={<GenerarVolante/>}/>
        <Route path="Clientes" element={<Cliente/>}/>
        <Route path="Proveedor" element={<Proveedor/>}/>
                   
    </Routes>
    </BrowserRouter>
    </Provider>
  );

}

export default App;