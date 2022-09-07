import React from 'react'
import CounterCustomHook from '../../hooks/CounterCustomHook'
import './ItemDetail.css'


const ItemDetail = ({item}) => {
    function onAdd(count) {
        console.log(`Se han seleccionado: ${count}`)
    }
    return (
        <div className="contenedorSectionA card siqueA pruebaA tablaUnoA tablaGeneralA" key={item.id} style={{ width: '35rem' }}>
        <img src={item.img} className="card-img-top" alt="..." />
        <div className="card-body">
                <h3 className="card-title">{item.nombre}</h3>
                <p className="card-text bordeContenido">{item.desc}</p>
                <h6>Categoria: {item.categoria}</h6>  
            <h6>Origen: {item.origen}</h6>
            <h3>Precio:${item.precio}</h3>
                <CounterCustomHook stock={15} onAdd={onAdd}/>  
        </div>
    </div>
    )
}
export default ItemDetail
