import React from "react";
import { NavLink } from "react-router-dom";

const Serccher = () => {
  return (
    <>
      <nav className="navbar bg-secondary d-flex justify-content-center">
        <NavLink className="navbar-brand" to="/">
          <div className="logo animateLogo">
            <img
              src="https://th.bing.com/th/id/OIP.yuHkZ9Fl3TwSa70D1Z4D3AHaHn?w=194&h=200&c=7&r=0&o=5&pid=1.7"
              alt="logo"
              width="90px"
            />
          </div>
          <div>
            <h1 className="animateTitulo justify-content-center">MUNDO MASCOTAS</h1>
          </div>
        </NavLink>
      </nav>
    </>
  );
};

export default Serccher;
