
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
// import { productDetail } from "./productDetail"; //***sector anterioos useffect */
import '../itemDetailContainer/Cargando.css'
import db from '../../firebase/firebase';
import './Cargando.css';
import { doc, getDoc } from "firebase/firestore";


//**sector after  */
export const ItemDetailContainer = () => {
  const { detalleId } = useParams();
  const [data, setData] = useState();
  const [load, setLoad] = useState(true)


  const getDaty = async (detalle) => {
    try {
      
      const document = doc(db, "productos", detalle);
      const response = await getDoc(document)
      const result = { id: response.id, ...response.data() }
      setData(result)
      setLoad(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDaty(detalleId)
  }, [detalleId]);
  



  
  //***sector nuevo llamado */
  // useEffect(() => {
  //   const querydb = getFirestore();
  //   const queryDoc = doc(querydb, 'productos', detalleId);
  //   getDoc(queryDoc)
  //     .then(res => setData({id:res.id, ...res.data() }))
  // },[detalleId])
 

  // //***sector anterior de useeffect 👇*/
  //  useEffect(() => {
  //    const getData = new Promise((res) => {
  //     setTimeout(()=> res(productDetail),2000) 
  //    });

  //    getData
  //      .then((res) => setData(res.find((product) => product.id === detalleId)))
  //      .catch((err) => console.error(`Ocurrio el siguiente error: ${err}`));
  //  }, [detalleId]);

  return (
     <>
      {load ? <div className="conteiner"><span className="loader" /></div> :
     <ItemDetail data={data} /> }
    </>
  )
};
