import { useEffect, useState } from "react";
 import { useParams } from "react-router-dom";
// import {getFirestore, collection, getDocs, query, where, } from 'firebase/firestore';
// import { productDetail } from "../itemDetailContainer/productDetail"; //***antes para la funcion usseEffect */
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../../firebase/firebase';
import { ItemList } from "./ItemList";
import "./cards.css";

export const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [data, setData] = useState();//**tenis ([]) original */
  const [load, setLoad] = useState(true)  


  const getData = async (categoria) => {
    try {
      setData(true)
      const document = categoria? query(collection(db, "productos"), where("category","==",categoria))
       : collection(db, "productos")
       const col = await getDocs(document)
       console.log("col.docs", col.docs)
       const result = col.docs.map((doc) => doc ={ id:doc.id,...doc.data()})
      setData(result)
      setLoad(false)
    
    } catch (error) {
      console.log(error);
    }
  }

  // const getDataCategory = async (categoria) => {
  //   try {
  //      const document = query(collection(db, "productos"), where("category","==",categoria))
  //      const col = await getDocs(document)
  //      console.log("col.docs", col.docs)
  //      const result = col.docs.map((doc) => doc ={ id:doc.id,...doc.data()})
  //      setData(result)
    
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    getData(categoriaId)
  }, [categoriaId])

  //**sector firebase nuevo effect **/
  // useEffect(() => {
  //   const querydb = getFirestore();
  //   const queryCollection = collection(querydb, 'productos');
  //   if (categoriaId) {
  //     const queryFilter = query(queryCollection, where('category', '==', categoriaId))
  //     getDocs(queryFilter)
  //       .them(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
  //   } else {
  //     getDocs(queryCollection)
  //       .them(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
  //   }
  // }, [categoriaId]);


  //***sector antes 👇 */
  //  useEffect(() => {
  //    const getData = new Promise((res) => {
  //      res(productDetail);
  //    });
  //    if (categoriaId) {
  //      getData.then((res) =>
  //        setData(res.filter((producto) => producto.category === categoriaId))
  //      );
  //    } else {
  //      getData.then((res) => setData(res));
  //    }
    
  //  }, [categoriaId]);

  return ( 
    <div>
      <div className="container-md p-5">
        <div className="row pt-5">
          <h3 className="text-center pb-5 pt-5 h1 animate"> 🐾CATALOGO🐾</h3>
        </div>
        <div className="row" >
          {load ? <span className="loader" /> : <ItemList data={data} />}
        </div>
      </div>
    </div>
 );
}
