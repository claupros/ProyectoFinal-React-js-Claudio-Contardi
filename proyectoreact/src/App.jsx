import React from 'react';
import './App.css';
import ItemListContainer from './component/ItemListConteiner/ItemListContainer';
import NavBootstrap from './component/NavBootstrap/NavBootstrap'



function App() {
  return (
    <div className="App">
       <h1 className="text-center">👉 DESAFIO CONTADOR 👌</h1>
      <NavBootstrap />
      <div>
          <ItemListContainer/>  
        </div>
     
    </div>
  );
}

export default App;
