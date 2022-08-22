
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SendIcon from '@mui/icons-material/Send';


const ButtonCarrito = () => {
  return (
    <>
    <Button variant="contained" href='https://github.com/claupros/ProyectoFinal-React-js-Claudio-Contardi' endIcon={<SendIcon />}>Repo</Button>          
    <Button variant="contained" endIcon={<AddShoppingCartIcon />}>CARRITO</Button>
    </>
  )
}

export default ButtonCarrito
