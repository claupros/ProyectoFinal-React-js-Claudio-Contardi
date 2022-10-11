import React, { useState } from "react";
import "./cards.css";
export const ItemCounts = ({ stock, onClick }) => {
  const [count, setCount] = useState(1);
  const onSumar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else return;
  };
  const onRestar = () => {
    if (count > 1) {
      setCount(count - 1);
    } else return;
  };

  return (
    <>
      <div className="card-text d-flex justify-content-evenly">
        <button
          onClick={() => onSumar()}
          type="button"
          className="btn btn-outline-light"
          disabled={count !== stock ? false : true}
        >
          +
        </button>
        <span className="text-white">{count}</span>
        <button
          onClick={() => onRestar()}
          type="button"
          className="btn btn-outline-light"
          disabled={count !== 1 ? false : true}
        >
          -
        </button>
      </div>
      <div className="d-grid gap-2">
        <button disabled={stock <= 0} className="btn btn-lg btn-dark mt-2" type="button" onClick={() => onClick(count)} >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
