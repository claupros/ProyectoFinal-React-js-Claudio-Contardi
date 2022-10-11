import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../../firebase/firebase';
import { ItemList } from "./ItemList";
import "./cards.css";

export const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [data, setData] = useState();
  const [load, setLoad] = useState(true)


  const getData = async (categoria) => {
    try {
      setLoad(true)
      const document = categoria ? query(collection(db, "productos"), where("category", "==", categoria))
        : collection(db, "productos")
      const col = await getDocs(document)
      const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
      setData(result)
      setLoad(false)
    } catch (error) {
    }
  }

  useEffect(() => {
    getData(categoriaId)
  }, [categoriaId]);

  return (
    <div>
      <div className="container-md p-5">
        <div className="row pt-5 ">
          <h3 className="text-center pb-5 pt-5 h1 animate"> 🐾C A T A L O G O🐾</h3>
        </div>
        <div className="row" >
          {load ? <span className="loader" /> : <ItemList data={data} />}
        </div>
      </div>
    </div>
  );
}
