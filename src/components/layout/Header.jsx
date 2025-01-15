import Logo from "../Logo";
import CartHeaderBtn from "../cart/CartHeaderBtn";

const Header = (props) => {
    const {cart} = props;

    return (
        <header>
            <Logo />
            <CartHeaderBtn data={cart}/>
        </header>
    );
}

export default Header;