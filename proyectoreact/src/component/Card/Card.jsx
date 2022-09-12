
import React from 'react'
import './CardItem.css'
import { Link } from 'react-router-dom'

const Card = ({ productList }) => {

    const { img, nombre, categoria, origen, precio, id } = productList;
    return (
        <div className="contenedorSection card sique prueba tablaUno tablaGeneral" key={id} style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{nombre}</h3>
                <h6>Categoria: {categoria}</h6>
                <h6>Origen: {origen}</h6>
                <h3>Precio:${precio}</h3>
                <Link to={`/detalles/${id}`}>
                    <button className="btn btn-primary">Ver detalle</button>
                </Link>
            </div>
        </div>
    )

}

export default Card;





