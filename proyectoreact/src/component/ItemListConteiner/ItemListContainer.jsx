import React from 'react'

const ItemListContainer = () => {
  return (
    <div className="card" style={{width: '18rem'}}>
    <img src="https://th.bing.com/th/id/OIP.yuHkZ9Fl3TwSa70D1Z4D3AHaHn?w=194&h=200&c=7&r=0&o=5&pid=1.7" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Labrador</h5>
      <p className="card-text">Venta de perros de Raza, Proximamente...</p>
      <a href="https://listado.mercadolibre.com.ar/perros-cachorros#D[A:perros%20cachorros]" className="btn btn-primary">Comprar</a>
    </div>
  </div>
);
}


export default ItemListContainer