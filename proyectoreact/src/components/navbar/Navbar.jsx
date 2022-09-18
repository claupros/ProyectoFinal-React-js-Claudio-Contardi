import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="pers container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarColor02"
          >
            <ul className="navbar-nav w-100 justify-content-evenly">
              <li className="nav-item">
                <NavLink className="nav-link" to="/Home">
                🐾Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="/"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  🐾Categorias
                </NavLink>
                <ul className="pers dropdown-menu">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/componentes/canino"
                    >
                      🐾Caninos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/componentes/felino"
                    >
                      🐾Felinos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to=""
                    >
                     🐾Vacio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="">
                    🐾Vacio
                    </NavLink>
                  </li>
                </ul>
              </li>

              <CartWidget />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
