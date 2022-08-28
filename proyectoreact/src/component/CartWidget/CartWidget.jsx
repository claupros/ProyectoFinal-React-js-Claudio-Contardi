import React from 'react'

const CartWidget = () => {
  return (
    <>
     <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" id="open" href="#" role="button" aria-expanded="false">Carrito🛒 <i className="fa-solid fa-cart-shopping" /> <span id="contador-carrito">0</span></a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#scrollspyHeading3">info </a></li>
    <li><a className="dropdown-item" href="#scrollspyHeading4"> info2</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="#scrollspyHeading5"> info3</a></li>
  </ul>
</li>

    </>

  )
}

export default CartWidget