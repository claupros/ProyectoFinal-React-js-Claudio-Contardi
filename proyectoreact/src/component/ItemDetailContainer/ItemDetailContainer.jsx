
import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import SimuladorApi from '../SimuladorApi/SimuladorApi'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const getProduct = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(SimuladorApi.find(SimuladorApi => SimuladorApi.id === 12)), 2000)
    })
  
    useEffect(() => {
        getProduct()
        .then(response => setItem(response))
    }, [])
    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer
