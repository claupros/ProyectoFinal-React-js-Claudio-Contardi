import React from 'react'
import CounterCustomHook from '../hooks/CounterCustomHook'
const ItemDetail = ({item}) => {
    const onAdd = (quantity) => {
       console.log(quantity);
    }
    return (
        <div className="contenedorSection card sique prueba tablaUno tablaGeneral" key={item.id} style={{ width: '18rem' }}>
        <img src={item.img} className="card-img-top" alt="..." />
        <div className="card-body">
                <h3 className="card-title">{item.nombre}</h3>
                <p className="card-text bordeContenido">{item.desc}</p>
                <h6>Seccion: {item.secc}</h6>  
            <h6>Origen: {item.origen}</h6>
            <h3>Precio:${item.precio}</h3>
            <CounterCustomHook stock={15} onAdd={onAdd} />
        </div>
    </div>
    )
}
export default ItemDetail
