import { useState } from "react"
import { CartContext, useCartContext } from "../../context/CartContext";
import db from "../../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
    const { cart, totalPrice, clear } = useCartContext(CartContext);
    const [orderId, setOrderId] = useState()
    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: '',
        Telefono: '',
    })

    const { Nombre, Email, Telefono } = buyer
    const navigate = useNavigate()
    const generateOrder = async (data) => {
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            setOrderId(order.id)
            clear()
        } catch (error) {

        }
    }

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (product) => {
        product.preventDefault()
        const items = cart.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity,
        }))
        const dia = new Date()
        const total = totalPrice()
        const data = { buyer, items, dia, total }
        generateOrder(data);
    }

    const handleClear = () => {
        clear()
        navigate('/cart')
    }

    return (

        <div className=" container mt-5 ">
            <h1>CHECKOUT</h1>
            <hr />
            {!orderId ?
                (<div >
                    <h4>Completar Datos:</h4>
                    <form className="centrado row g-3 col-md-4 needs-validation novalidate" onSubmit={handleSubmit}>
                        <div className="col-md-12">
                            <label for="validationCustom01" className="form-label">Nombre</label>
                            <input type="text" name="Nombre" className="form-control" id="validationCustom01" value={Nombre} onChange={handleInputChange} required />
                            <div className="invalid-feedback">
                                Por favor ingrese los datos
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label for="validationCustom03" className="form-label">Telefono</label>
                            <input type="text" name="Telefono" placeholder="Telefono" value={Telefono} onChange={handleInputChange} className="form-control" id="validationCustom03" required />
                            <div className="invalid-feedback">
                                Por favor ingrese el telefono
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label for="validationCustomUsername" className="form-label">Correo</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="mail" name="Email" value={Email} onChange={handleInputChange} className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Por favor ingrese el correo
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label" for="invalidCheck">
                                    Acepta los terminos y condiciones
                                </label>
                                <div className="invalid-feedback">
                                    Marque esta casilla si desea continuar
                                </div>
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Finalizar Compra"
                            className="btn btn-success"
                        />
                    </form>
                </div>)
                :
                <>
                    <h3>GRACIAS POR COMPRAR EN MUNDO MASCOTAS</h3>
                    <h4>Su orden de compra es: {orderId}</h4>
                    <button className="btn btn-danger" onClick={handleClear}>Aceptar</button>
                </>
            }
        </div>
    )
}

export default Checkout

