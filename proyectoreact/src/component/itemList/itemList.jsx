import React from 'react'
import Card from '../Card/Card';


const ItemList = ({ productList }) => {
  
  return (
   
 productList.map(item => <Card key={item.id} productList={item}/> )         

)
    
}

export default ItemList;
