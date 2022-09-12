import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import SimuladorApi from '../SimuladorApi/SimuladorApi'
import { useParams } from 'react-router-dom'
import '../../hooks/Loader.css'


const ItemListContainer = () => {


  const [productList, setProductList] = useState([])

  const { categoria } = useParams()

  const getsimulator = () => new Promise((resolve, reject) => {
    if (categoria) {
      setTimeout(() => resolve(SimuladorApi.filter(item => item.categoria === categoria)), 2000)
    } else {
      setTimeout(() => resolve(SimuladorApi), 2000)
    }
  })
  useEffect(() => {
    getsimulator()
      .then(SimuladorApi => setProductList(SimuladorApi))
      .catch(error => console.error(error))
    return () => {
      setProductList([])
    }
  }, [categoria])

  return (
    <>
      {
        productList.length ? <ItemList productList={productList} /> : <div className="conteiner"><span className="loader" /></div>
      }
    </>
  )
}

export default ItemListContainer