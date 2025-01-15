import { useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ProductList from "./components/products/ProductList";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCartHandler = (id) => {
    const isPresent = cart.includes(id);
    if (isPresent) return;

    setCart(prev => [...prev, id]);
  }

  const removeFromCartHandler = (id) => {
    const isPresent = cart.includes(id);
    if (!isPresent) return;

    setCart(prev => prev.filter(item => item !== id));
  }

  return (
    <div className="container">
      <Header cart={cart}/>

      <ProductList 
        cart={cart} 
        addToCartHandler={addToCartHandler}
        removeFromCartHandler={removeFromCartHandler}
      />

      <Footer />

    </div>
  )
}

export default App