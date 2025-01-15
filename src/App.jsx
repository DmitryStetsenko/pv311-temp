import { useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ProductList from "./components/products/ProductList";
import AdminBar from "./components/admin/AdminBar";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

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
      <Header cart={cart} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />

      <ProductList 
        cart={cart} 
        addToCartHandler={addToCartHandler}
        removeFromCartHandler={removeFromCartHandler}
      />

      <Footer />

      {
        isAdmin && <AdminBar />
      }
      
    </div>
  )
}

export default App