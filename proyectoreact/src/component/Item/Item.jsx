// import { useEffect, useState } from "react";
// import SimuladorApi from "../SimuladorApi/SimuladorApi";
// import React from 'react'
// import CounterCustomHook from "../../hooks/CounterCustomHook";

//*********esta carpeta de item.jsx ya no se usa, esta card de remplazo que es lo mismo*/
// function consultarPromesa(confirmacion) {

//     return new Promise((res, rej) => {
//         if (confirmacion) {
//             res(SimuladorApi)
//         } else {
//             rej("Acceso denegado")
//         }
//     })

// }

// const Item = () => {

    // function onAdd(count) {
    //     Swal.fire({
    //         position: 'top-center',
    //         icon: 'success',
    //         title:`Cantidad de productos en 🛒: ${count}`,
    //         showConfirmButton: false,
    //         timer: 3000,
    //     })
    //      console.log('Cantidad de productos:' + count)
    // }

//     const [productos, setProductos] = useState([]);
//     useEffect(() => {
//         consultarPromesa(true)
//             .then(data => {
//                 const productosJSX = data.map((producto, indice) =>

//                     <div className="card sique prueba tablaUno tablaGeneral" key={indice} style={{ width: '18rem' }}>
//                         <img src={producto.img} className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <h3 className="card-title">{producto.nombre}</h3>
//                             <p className="card-text bordeContenido">{producto.desc}</p>
//                             <h6>Origen: {producto.origen}</h6>
//                             <h3>Precio:${producto.precio}</h3>
//                             {/* <CounterCustomHook stock={15} onAdd={onAdd} /> */}
//                         </div>
//                     </div>
//                 )

//                 setProductos(productosJSX)
//             })
//             .catch(error => {
//                 console.error(error)
//             })
//     }, []);


//     return (
//         <div className='row'>
//             {productos}
//         </div>
//     );
// }

// export default Item;





