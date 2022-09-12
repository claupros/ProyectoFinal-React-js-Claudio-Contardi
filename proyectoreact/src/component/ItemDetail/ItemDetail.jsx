import CounterCustomHook from "../../hooks/CounterCustomHook";
import "./ItemDetail.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  function onAdd(count) {
    Swal.fire({
      title: `Se han seleccionado ${count} productos`,
      text: "Desea terminar su compra?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Finalizar mi compra",
      cancelButtonText: "Modificar mi compra",
    }).then((result) => {
      if (result.isConfirmed) {
        const productoCarrito = { id: item.id, cantidad: count };
        console.log(productoCarrito);
        navigate(
          "../cart/carrito" + productoCarrito.id,
          productoCarrito.cantidad
        );
      }
    });
  }

  return (

    <div className="card mb-3 sectorDetalle " style={{ maxWidth: '100rem' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">{item.desc}</p>
            <h6>Categoria: {item.categoria}</h6>
            <h6>Origen: {item.origen}</h6>
            <h3>Precio:${item.precio}</h3>
            <CounterCustomHook stock={15} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
