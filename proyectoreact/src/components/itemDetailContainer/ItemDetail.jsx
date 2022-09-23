import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { ItemDetailsCarousel } from "./ItemDetailsCarousel";
import { ItemCounts } from "../ItemListContainer/ItemCounts";
import { Link, useParams } from "react-router-dom";
import { doc, getFirestore, updateDoc } from "firebase/firestore";


export const ItemDetail = ({ data, setData }) => {//***se agrega setData */
  const [goToCart, setGoToCart] = useState(false);
  const { detalleId } = useParams(); //******agregado para firebase*/
  const { addItem } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addItem(data, quantity);
    data.stock = data.stock - quantity; //**se modifico se saco el let stock */
    
  };
  const querydb = getFirestore();
  const queryDoc = doc(querydb, 'productos', detalleId);
  updateDoc(queryDoc, { "stock": data.stock });


  return (
    <>
      <div className=" container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-lg-6">
                  <ItemDetailsCarousel data={data} />
                </div>
                <div className="col-lg-6">
                  <div className="card-body">
                    <h5 className="card-title  text-center">{data.title}</h5>
                     <p>DESCRIPCION: {data.desc} </p>
                    <hr />
                    <p>🐾Categoria: {data.category}</p>
                    <p>🐾Origen: {data.origen}</p>
                    <p className="card-text">
                      <strong>PRECIO :💲{data.price}</strong>
                    </p>
                    <hr />
                    <div className="card-text">
                      <small className="text-muted">
                        <ul>
                          <li>Garantia Oficial</li>
                          <li>
                            {data.stock > 0 ? "Stock Disponible" : "Sin Stock"}
                          </li>
                          <li>Envíos a todo el país</li>
                        </ul>
                      </small>
                      <hr />
                    </div>
                  </div>
                  <div className="d-grid gap-2">
                    {goToCart ? (
                      <Link
                        to="/cart"
                        className="btn btn-lg btn-dark mt-2 "
                        type="button"
                      >
                        Finalizar compra
                      </Link>
                      
                    ) : (
                      <ItemCounts
                        className="mt-5 p-5"
                        stock={data.stock}
                        onClick={onAdd}
                      />
                    )}
                    <Link
                        to="/"
                        className="btn btn-lg btn-dark mt-2 "
                        type="button"
                      >
                       Seguir Comprando
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
