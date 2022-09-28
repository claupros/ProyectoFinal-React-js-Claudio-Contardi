import React, {useState, useContext} from 'react'


export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);


    const addItem = (item, quantity) =>{
        if(isInCart(item.id)){
            setCart(cart.map(product=>{
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            })); 
        }else{
            setCart([...cart, {...item, quantity}]) //Si no está el item lo agrego y le sumo el campo quantity
        }
    }

    console.log(cart)

    const clear = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

    const totalProducts = () => cart.reduce((collector, product)=> collector + product.quantity,0);

    const totalPrice = () => {
        return cart.reduce((prev, act)=>prev + act.quantity * act.price, 0)
    }

  return (
    <CartContext.Provider value={{
        clear,
        isInCart,
        removeItem,
        addItem,
        totalProducts,
        totalPrice,
        cart,
        
    }}>
        {children}
    </CartContext.Provider>
  )
}
