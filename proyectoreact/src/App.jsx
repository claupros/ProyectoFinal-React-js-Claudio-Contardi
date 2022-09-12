import React from "react";
import "./App.css";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./component/ItemListConteiner/ItemListContainer";
import NavBootstrap from "./component/NavBootstrap/NavBootstrap";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartWidget from "./component/CartWidget/CartWidget";

function App() {

  return (
     <BrowserRouter>
    <div className="App">
        <h1 className="text-center">👉  DESAFIO: Sincronizar counter 👌</h1>
        <div>
          <NavBootstrap />
        </div>
        <Routes>
           <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:categoria' element={<ItemListContainer />} />  
          <Route path='/detalles/:id' element={<ItemDetailContainer />} />
          <Route path='/cart/:carrito' element={<CartWidget />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
