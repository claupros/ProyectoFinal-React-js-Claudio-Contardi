// // import { useState } from "react"
// // import db from "../../firebase/firebase"

// // import { useNavigate } from "react-router-dom"
// import { addDoc, collection, getFirestore } from "firebase/firestore"
// import { useCartContext  } from "../../context/CartContext"



// const Checkout = () => {

//   //**otra forma */
//    const { clear } = useCartContext();
//   const confirm = () => {
//     const { clear, cart } = useCartContext();
//     const confirm = (id) => {
//       clear();

//       const order = {
//         buyer: {
//           name: "",
//           email: "",
//           phone: "",
//           address: "",
//         },

//         items: cart.map((product) => ({
//           id: product.id,
//           title: product.title,
//           price: product.price,
//           quantity: product.quantity,
//         })),
//         total: totalPrice(),
//       };

//       const handleClick = () => {
//         const db = getFirestore();
//         const orderCollection = collection(db, "orders");
//         addDoc(orderCollection, order).then(({ id }) => confirm(id));
//       };


//       //** 2 opcion */ 
//       //  const { cart, totalPrice, clear } = useCartContext()
//       //  console.log(cart)
//       //    const [orderId, setOrderId] = useState()
//       //    const [buyer, setBuyer] = useState({
//       //        Nombre: '',
//       //        Email: '',
//       //        Telefono: ''
//       //    })
     
//       //    const { Nombre, Email, Telefono } = buyer
//       //    const navigate = useNavigate()
//       // const generateOrder = async (data) => {
        
//       //   try {
//       //            const col = collection(db, "Orders")
//       //            const order = await addDoc(col, data)
//       //            console.log("OrdenNro:", order)
//       //            setOrderId(order.id)
//       //            clear()

//       //        } catch (error) {
//       //            console.log(error)
//       //        }
//       //    }

//       //    const handleInputChange = (e) => {
//       //        setBuyer(({
//       //            ...buyer,
//       //            [e.target.name]: e.target.value
//       //        }))
//       //    }

//       //    const handleSubmit = (e) => {
//       //        e.preventDefault()
//       //        const items = cart.map(e => { return { id: e.id, title: e.name, price: e.price, quantity: e.quantity } })
//       //        const dia = new Date()
//       //        const total = totalPrice()
//       //        const data = { buyer, items, dia, total }
//       //        console.log('data', data)
//       //        generateOrder(data, e.orderId)
//       //    }

//       //    const handleClear = () => {
//       //        clear()
//       //        console.log("vacio carrito")
//       //        navigate('./components/cart/Cart')
//       //    }




//       return (
     
//         <div className="card mb-3">
//           <div className="row g-0">
//             <div className="col-2 d-flex align-items-center justify-content-center">
//               {" "}
//               <img
//                 src="../../assets/logo.png"
//                 className="img-fluid rounded-start"
//                 alt={"logo"}
//                 width="100px"
//               />
//             </div>
//             <div className="col-8 d-flex align-items-center justify-content-center">
//               <ul style={{ listStyle: "none" }}>
//                 <li>
//                   <input type="radio" value="Mercado Pago" id="Mercado Pago" />
//                   <label htmlFor="Mercado Pago">
//                     Mercadopago - Tarjetas Online, PagoFacil, RapiPago
//                   </label>
//                 </li>
//                 <li>
//                   <input type="radio" value="Deposito" id="Deposito" />
//                   <label htmlFor="Deposito">
//                     Depósito o transferencia bancaria
//                   </label>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-2 d-flex align-items-center">
//               <div className="card-body">
//                 <p className="fs-4">Total:</p>
//                 <p className="fs-3">${totalPrice()}</p>
//                 <button onClick={handleClick} className="btn btn-outline-primary">
//                   Comprar
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
    
       
//         //       <div>
//         // {        
//         //           <h1>Finalizando Compra</h1>
//         //             <hr />
//         //             {!orderId ?
//         //                 (<div><h4>Completar Datos:</h4>
//         //                     <form onSubmit={handleSubmit}>
//         //                         <input
//         //                             type="text"
//         //                             name="Nombre"
//         //                             placeholder="Nombre"
//         //                             value={Nombre}
//         //                             onChange={handleInputChange}
//         //                         /><br /><br />
//         //                         <input
//         //                             type="mail"
//         //                             name="Email"
//         //                             placeholder="Email"
//         //                             value={Email}
//         //                             onChange={handleInputChange}
//         //                         /><br /><br />
//         //                         <input
//         //                             type="text"
//         //                             name="Telefono"
//         //                             placeholder="Telefono"
//         //                             value={Telefono}
//         //                             onChange={handleInputChange}
//         //                         /><br /><br />
//         //                         <br />
//         //                         <br />
//         //                         <input
//         //                             type="submit"
//         //                             value="Finalizar Compra"
//         //                             className="btn btn-success"
//         //                         />

//         //                     </form></div>)
//         //                 :
//         //                 <h4>Su orden de compra es: {orderId}</h4>
//         //             }


//         //             <button className="btn btn-danger" onClick={handleClear}>Volver a Home</button> */}


//         //***otro form  {*/
//         /* <form className="row g-3">
//      <div className="col-md-4">
//        <label htmlFor="validationServer01" className="form-label">First name</label>
//        <input type="text" className="form-control is-valid" id="validationServer01" defaultValue="Mark" required />
//        <div className="valid-feedback">
//        ¡Se ve bien!
//        </div>
//      </div>
//      <div className="col-md-4">
//        <label htmlFor="validationServer02" className="form-label">Last name</label>
//        <input type="text" className="form-control is-valid" id="validationServer02" defaultValue="Otto" required />
//        <div className="valid-feedback">
//        ¡Se ve bien!
//        </div>
//      </div>
//      <div className="col-md-4">
//        <label htmlFor="validationServerUsername" className="form-label">Nombre Usuario</label>
//        <div className="input-group has-validation">
//          <span className="input-group-text" id="inputGroupPrepend3">@</span>
//          <input type="text" className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
//          <div id="validationServerUsernameFeedback" className="invalid-feedback">
//          Por favor, elija un nombre de usuario.
//          </div>
//        </div>
//      </div>
//      <div className="col-md-6">
//        <label htmlFor="validationServer03" className="form-label">Ciudad</label>
//        <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
//        <div id="validationServer03Feedback" className="invalid-feedback">
//        Por favor, proporcione una ciudad válida.
//        </div>
//      </div>
//      <div className="col-md-3">
//        <label htmlFor="validationServer04" className="form-label">Provincia</label>
//        <select className="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
//          <option selected disabled value>Elegir...</option>
//                          <option>Buenos Aires</option>
//                          <option>Catamarca</option>
//                          <option>San Luis</option>
//                          <option>Mendoza</option>
//                          <option>San Juan</option>
//                          <option>Tucuman</option>
//                          <option>Salta</option>
//                          <option>Misiones</option>
//                          <option>Neuquen</option>
//                          <option>Otro</option>
                         
//        </select>
//        <div id="validationServer04Feedback" className="invalid-feedback">
//          Por favor seleccione una provincia valida.
//        </div>
//      </div>
//      <div className="col-md-3">
//        <label htmlFor="validationServer05" className="form-label">Zip</label>
//        <input type="text" className="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required />
//        <div id="validationServer05Feedback" className="invalid-feedback">
//          Please provide a valid zip.
//        </div>
//      </div>
//      <div className="col-12">
//        <div className="form-check">
//          <input className="form-check-input is-invalid" type="checkbox" defaultValue id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
//          <label className="form-check-label" htmlFor="invalidCheck3">
//            Acepte los terminos y condiciones
//          </label>
//          <div id="invalidCheck3Feedback" className="invalid-feedback">
//            You must agree before submitting.
//          </div>
//        </div>
//      </div>
//      <div className="col-12">
//        <button className="btn btn-primary" type="submit">Submit form</button>
//      </div>
//    </form> }
//        </div>*/
//       )
//     }
  
// export default Checkout



