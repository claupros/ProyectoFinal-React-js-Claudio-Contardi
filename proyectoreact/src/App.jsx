import React from "react";
import "./App.css";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./component/ItemListConteiner/ItemListContainer";
import NavBootstrap from "./component/NavBootstrap/NavBootstrap";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">👉 DESAFIO Detalle de Productos 👌</h1>
      <NavBootstrap />
      <div>
        <ItemListContainer />
         <ItemDetailContainer/>
      </div>
    </div>
  );
}

export default App;
