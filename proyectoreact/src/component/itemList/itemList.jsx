import Card from '../Card/Card';
import React from 'react'


const ItemList = ({ productList }) => {
  return (
    productList.map(item => <Card key={item.id} productList={item}/> )
  )
}

export default ItemList






