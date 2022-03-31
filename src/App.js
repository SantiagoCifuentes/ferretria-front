import React,{useEffect,useState} from 'react';
import { Provider } from 'react-redux';
import store from './reducer/Reducer'
import { Navbar } from './components/Navbar';
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";


function App() 
{

 

  return ( //el store trae el estado del reducer y se lo pasa a todos los hijos
    <Provider store={store}>    
       <Navbar titulo={"Ferreteria"}/>

      <div className='container mt-5'>
        
     
        
      </div>
    </Provider>
    
  );

}

export default App;