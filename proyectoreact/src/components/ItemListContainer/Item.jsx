import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ productos }) => {
  return (
    <>
      <div className="sique col-sm-12 col-md-6 col-lg-4" style={{ width: '20rem' }}>
        <div className="card w-100 card-border mb-5">
          <Link to={`/detalle/${productos.id}`}>
            <img
              src={productos.img01}
              className="card-img-top"
              alt={productos.title}
            />
          </Link>
          <div className="card-body bg-white">
            <h6 className="text-black text-center"> {productos.title }</h6>
            <p className="text-black text-center">Categoria :{productos.category}</p>
            <p className="text-black text-center">Origen :{productos.origen}</p>
            <p className="text-black text-center">${productos.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
