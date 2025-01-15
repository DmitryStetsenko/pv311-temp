import { useState } from "react";
import { config } from "../../../config";

const CartHeaderBtn = (props) => {
    const {data} = props;
    const {baseUrl, resources} = config;
    const url = `${baseUrl}/${resources.products}`;
    
    const [cartProducts, setCartProducts] = useState([]);

    const clickBtnHandler = async () => {
        const fetchRes = await Promise.allSettled(
            data.map(async (id) => {
                const res = await fetch(`${url}/${id}`);
                return res.json();
            })
        );

        const fetchData = fetchRes
            .filter(item => {
                const {status, value} = item;
                if (status !== 'fulfilled') return false;

                return true;
            })
            .map(item => item.value);


        console.log(fetchData);
    }

    console.log('cartProducts', cartProducts);
    console.log('data', data);

    return (
        <button 
            className="cart-header-btn"
            onClick={clickBtnHandler}
        >
            <img className="cart-header-btn__icon" src="/img/icons/carts.png" alt="" />
            <span className="cart-header-btn__value">
                { data.length }
            </span>
        </button>
    );
}

export default CartHeaderBtn;