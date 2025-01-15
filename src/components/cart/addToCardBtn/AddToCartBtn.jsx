import s from "./style.module.scss";

import noAddedImg from "./img/add-to-cart.png";
import addedImg from "./img/check-mark.png";
import cn from "classnames";

const AddToCartBtn = (props) => {
    const {id, cart, addToCartHandler, removeFromCartHandler} = props;
    const {btn, btnAdded, btnNoAdded, icon} = s;
    const isAdded = cart.includes(id);

    const imgSrc = !isAdded 
        ? noAddedImg
        : addedImg

    const btnClasses = cn(btn, {
        [btnNoAdded]: !isAdded,
        [btnAdded]: isAdded,
    });

    const clickBtnHandler = (id) => {
        isAdded
            ? removeFromCartHandler(id)
            : addToCartHandler(id);
    }

    return (
        <button
            onClick={() => clickBtnHandler(id)} 
            className={btnClasses}>
            <img 
                className={icon} 
                src={imgSrc}
                alt="" 
            />
        </button>
    );
}

export default AddToCartBtn;