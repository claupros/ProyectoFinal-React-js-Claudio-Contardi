import React from "react";
import { NavLink } from "react-router-dom";

const Serccher = () => {
  return (
    <>
      <nav className="navbar bg-secondary d-flex justify-content-center">
        <NavLink className="navbar-brand" to="/">
          <img
            className="logo"
            src="https://th.bing.com/th/id/OIP.yuHkZ9Fl3TwSa70D1Z4D3AHaHn?w=194&h=200&c=7&r=0&o=5&pid=1.7" 
            alt="logo"
            width="80px"
            
          />
          <h6>MUNDO MASCOTAS</h6>
        </NavLink>
        <div className="container-fluid row w-50 ">
          <form role="search">
            <input
              className="form-control me-2 text-center"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
          <button type="button" className="btn btn-outline-primary">
            Iniciar Sesión
          </button>
      </nav>
    </>
  );
};

export default Serccher;
