import React from 'react'
import CounterCustomHook from '../../hooks/CounterCustomHook';
import Swal from 'sweetalert2'

const ItemListContainer = () => {
  function onAdd(count) {
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Cantidad de productos en 🛒: ' + count,
      showConfirmButton: false,
      timer: 3000,
    })
   console.log('Cantidad de productos:'+ count)
  }
  return (
    <div className="card" style={{width: '18rem'}}>
    <img src="https://th.bing.com/th/id/OIP.yuHkZ9Fl3TwSa70D1Z4D3AHaHn?w=194&h=200&c=7&r=0&o=5&pid=1.7" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Labrador</h5>
        <p className="card-text">Venta de perros de Raza, Proximamente...</p>
        
         <CounterCustomHook stock={15} onAdd={onAdd}/>
      
    </div>
  </div>
)
}


export default ItemListContainer