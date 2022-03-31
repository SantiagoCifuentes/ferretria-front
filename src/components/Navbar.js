import React from 'react'
import { connect } from 'react-redux'

export const Navbar=({titulo })=>(
    <nav className="navbar navbar-dark bg-dark">
    <div className=" d-flex flex-row bd-highlight ms- " >
      <a className="navbar-brand text-uppercase p-2 bd-highlight " href="/">{titulo} </a>
     
      <button className="p-2 bd-highlight ms-1"  >Inventario</button>
      <button  className="  btn-primary ms-1">Factura</button>
      <button  className=" btn-secondary ms-1" >Cerrar sesión</button> 
    </div>
   
    </nav>
)
    

