
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import '../itemDetailContainer/Cargando.css'
import db from '../../firebase/firebase';
import './Cargando.css';
import { doc, getDoc } from "firebase/firestore";

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
    }
  }

  useEffect(() => {
    getDaty(detalleId)
  }, [detalleId]);

  return (
    <>
      {load ? <div className="conteiner"><span className="loader" /></div> :
        <ItemDetail data={data} />}
    </>
  )
};
