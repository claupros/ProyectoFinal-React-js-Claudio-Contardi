import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import LinkDos from '../LinkDos/LinkDos'
import LinkTres from '../LinkTres/LinkTres'
import LinkUno from '../LinkUno/LinkUno'
import LogoNav from '../LogoNav/LogoNav'

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark justify-content-center">
        <LogoNav/> 
     <ul className="nav ">
          <LinkUno />
           <LinkDos/>
           <LinkTres/>
    <CartWidget/>  
        </ul>
</nav>
    </div>
  )
}

export default Nav
