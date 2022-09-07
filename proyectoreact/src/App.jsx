import React from "react";
import "./App.css";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./component/ItemListConteiner/ItemListContainer";
import NavBootstrap from "./component/NavBootstrap/NavBootstrap";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
     <BrowserRouter>
    <div className="App">
        <h1 className="text-center">👉  PRIMERA ENTREGA DEL PROYECTO FINAL 👌</h1>
        <div>
          <NavBootstrap />
        </div>
        <Routes>
           <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:categoria' element={<ItemListContainer />} />  
          <Route path='/detalles/:id' element={<ItemDetailContainer />}/>   
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
