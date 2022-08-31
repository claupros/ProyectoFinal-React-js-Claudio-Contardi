import React from 'react'
import useCounter from './useCounter'

const CounterCustomHook = ({stock, onAdd}) => {
    const {add, substract, reset, count} = useCounter(stock)
    return (
        <div className="shadow-lg p-3 mb-5 bg-body rounded prueba">
           <div>
              <p>Stock Disponible:{stock}</p>
              <p>Cantidad:{count}</p> 
           <div className="card-body">
          <button className="btn btn-primary" onClick={substract}>-</button>
            <button className="btn btn-outline-danger" onClick={reset}>Reset</button>
            <button className="btn btn-primary" onClick={add}>+</button>
        </div>
        <div className="d-grid gap-2">
        <a href="#" className="btn btn-primary" onClick={() => onAdd(count)}>Agregar al Carrito</a>
         </div>
          </div>
    </div>
  )
}

export default CounterCustomHook