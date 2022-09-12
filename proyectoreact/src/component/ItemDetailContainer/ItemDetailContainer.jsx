
import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import SimuladorApi from '../SimuladorApi/SimuladorApi';
import { useParams } from 'react-router-dom';
import '../../hooks/Loader.css'


const ItemDetailContainer = () => {

    const { id } = useParams()
    console.log(id)

    const [item, setItem] = useState()
    const getProduct = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(SimuladorApi.find(SimuladorApi => SimuladorApi.id === Number(id))), 2000)
    })

    useEffect(() => {
        getProduct()
            .then(response => setItem(response))
    }, [])


    return (
        <>
            {
                item ? <ItemDetail item={item} /> : <div className="conteiner"><span className="loader" /></div>

            }
        </>
    )
}


export default ItemDetailContainer
