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
import { AuthProvider } from './context/authContext';
import { Login } from './containers/Login';
import { Register } from './containers/Register';
import { useAuth } from './context/authContext';
import { async } from '@firebase/util';



function App() 
{

  //  const{user,logout,loading}= useAuth()

  //   const handleLogout = async () =>{
  //     await logout()
  //   }


  //   if (loading) return <h1>loading</h1>

  return ( //el store trae el estado del reducer y se lo pasa a todos los hijos
    <Provider store={store}>  
     <AuthProvider>
    <BrowserRouter>
    
    <Navbar/>
    
    {/* <button onClick={handleLogout}>Cerrar sesión</button> */}
    <Routes>
      <Route path='Register' element={<Register />}></Route>
        <Route path='Login' element={<Login />}></Route>
        <Route path="Factura" element={<Factura />} />
        <Route path="Inventario" element={<Inventario />} />
        <Route path="Generar-factura" element={<GenerarFactura/>}/>
        <Route path="Generar-volante" element={<GenerarVolante/>}/>
        <Route path="Clientes" element={<Cliente/>}/>
        <Route path="Proveedor" element={<Proveedor/>}/>
                   
    </Routes>
    </BrowserRouter>
    </AuthProvider>
    </Provider>
  );

}

export default App;