import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/navbar/Navbar";
import { Carousel } from "./components/carousel/Carousel";
import { Ribbon } from "./components/ribbon/Ribbon";
import Serccher from "./components/navbar/Serccher";
import { Cart } from "./components/cart/Cart";
import { Footer } from "./components/footer/Footer";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Serccher />
          <Navbar />
          <Carousel />
          <Ribbon />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/Home" element={<ItemListContainer />} />
            <Route
              path="/category/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />

            <Route path="/cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
