import React from "react";
import { useCartContext } from "../../context/CartContext";


export const ItemCart = ({ product }) => {
  const { removeItem } = useCartContext();

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-2">
          <img
            src={product.img01}
            className="img-fluid rounded-start"
            alt={product.title}
          />
        </div>
        <div className="col-6 d-flex align-items-center">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
          </div>
        </div>
        <div className="col-2 d-flex align-items-center">
          <div className="card-body">
            <p>Cantidad:{product.quantity}</p>
            <p>Precio: ${product.price}</p>
          </div>
        </div>
        <div className="col-1 d-flex align-items-center">
          <div className="card-body">
            <p>Subtotal:${product.quantity * product.price}</p>
          </div>
        </div>
        <div className="col-1 d-flex align-items-start">
          <div className="card-body">
            <i onClick={()=>removeItem(product.id)} className="fa-solid fa-trash-can" />
          </div>
        </div>
      </div>
    </div>
  );
};
