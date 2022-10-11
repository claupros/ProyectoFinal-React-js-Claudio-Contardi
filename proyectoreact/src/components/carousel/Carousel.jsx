import React from "react";
import "./Carousel.css";
export const Carousel = () => {
  return (
    <>
      <div className="card bg-dark text-white " style={{ maxwidth: '100%', height: '100%' }}>
        <img src="../../assets/dog5.png" className="card-img " alt="..." />
        <div className="card-img-overlay">
          <h1 className="card-title titulo">🐾Venta de Caninos y Felinos     🐾    Una empresa con alta trayectoria en ventas🐾</h1>
        </div>
      </div>
    </>
  );
};
