import React from "react";
import LogoNav from "../LogoNav/LogoNav";
import { Link } from "react-router-dom";
import "../NavBootstrap/NavBootstrap.css";


const Nav = () => {
  return (
    <div>
      <nav className="contenedor navbar navbar-dark bg-dark justify-content-center">
        <LogoNav />
        <ul className="nav ">
          <Link to="/">
            <li className="nav-item">Home🐾</li>
          </Link>
          <Link to="/categoria/caninos">
            <li className="nav-item">Caninos🐾</li>
          </Link>
          <Link to="/categoria/felinos">
            <li className="nav-item">Felinos🐾</li>
          </Link>
          <Link to="/cart/carrito">
            <li className="nav-item">
              Carrito🛒<span id="contador-carrito">0</span>{" "}
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
