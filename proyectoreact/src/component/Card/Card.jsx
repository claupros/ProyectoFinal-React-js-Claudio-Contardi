
import React from 'react'
import './CardItem.css'

const Item = ({ productList }) => {
   
    const {id, img, nombre, secc, origen, precio} = productList;
return (
    <div className="contenedorSection card sique prueba tablaUno tablaGeneral" key={id} style={{ width: '18rem' }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h3 className="card-title">{nombre}</h3>
            <h6>Seccion: {secc}</h6>
            <h6>Origen: {origen}</h6>
            <h3>Precio:${precio}</h3>
            <button className="btn btn-primary">Ver detalle</button>
        </div>
    </div>
)
   
}

export default Item;

//<CounterCustomHook stock={15} onAdd={onAdd} />



