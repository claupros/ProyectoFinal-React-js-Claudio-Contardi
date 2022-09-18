import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { productos } from "./products";
import { productDetail } from "../itemDetailContainer/productDetail";
import { ItemList } from "./ItemList";
import "./cards.css";

export const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const getData = new Promise((res) => {
      res(productDetail);
    });
    if (categoriaId) {
      getData.then((res) =>
        setData(res.filter((producto) => producto.category === categoriaId))
      );
    } else {
      getData.then((res) => setData(res));
    }
    
  }, [categoriaId]);

  return (
    <div>
      <div className="container-md p-5">
        <div className="row pt-5">
          <h3 className="text-center pb-5 pt-5 h1 animate"> 🐾CATALOGO🐾</h3>
        </div>
        <div className="row">
          <ItemList data={data} />
        </div>
      </div>
    </div>
  );
};
