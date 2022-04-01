import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

export const Navbar=({titulo="FERRETERIA" })=>(
    <nav className="navbar navbar-dark bg-dark">
    <div className=" d-flex flex-row bd-highlight ms- " >
      <a className="navbar-brand text-uppercase p-2 bd-highlight " href="/">{titulo} </a>
                      
      <Link to="/Factura">
        <button  className="  btn-primary ms-1">Factura</button>
      </Link>
      <Link to="/Inventario">
        <button  className="  btn-primary ms-1">Inventario</button>
      </Link>

      <Link to="/Clientes">
        <button  className="  btn-primary ms-1">Clientes</button>
      </Link>

      <Link to="/Proveedor">
        <button  className="  btn-primary ms-1">Proveedor</button>
      </Link>

      <Link to="/Generar-factura">
        <button  className="  btn-primary ms-1">Generar factura</button>
      </Link>
      <Link to="/Generar-volante">
        <button  className="  btn-primary ms-1">Generar volante</button>
      </Link>
    </div>
   
    </nav>
)
    

