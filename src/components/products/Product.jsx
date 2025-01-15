import AddToCartBtn from "../cart/addToCardBtn/AddToCartBtn";

const Product = (props) => {
  const {data, cart, addToCartHandler, removeFromCartHandler} = props;
  const {id, title, descr, price, sale, img} = data;

  return (
    <div className="product">
      <h3 className="product__title">{title}</h3>
      <p className="product__descr">{descr}</p>
      <p className="product__price">{price}</p>

      <AddToCartBtn 
        id={id} 
        cart={cart} 
        addToCartHandler={addToCartHandler}
        removeFromCartHandler={removeFromCartHandler}
      />
    </div>
  );
}

export default Product;