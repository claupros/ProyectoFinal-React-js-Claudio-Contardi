import React, { useEffect, useState } from 'react'
import  ItemList  from '../ItemList/ItemList'  
import  SimuladorApi  from '../SimuladorApi/SimuladorApi'


const ItemListContainer = () => {

  
  const [productList, setProductList] = useState([])
  
  const getsimulator = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(SimuladorApi), 2000)
  })
  useEffect(() => {
    getsimulator()
    .then(SimuladorApi => setProductList(SimuladorApi))
    .catch(error => console.error(error))
  }, [])

    return (
    <ItemList productList={productList} />
    )
  }

export default ItemListContainer