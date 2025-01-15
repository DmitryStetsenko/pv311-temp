import Logo from "../Logo";
import UserAuth from "../auth/UserAuth";
import CartHeaderBtn from "../cart/CartHeaderBtn";

const Header = (props) => {
    const {cart, isAdmin, setIsAdmin} = props;

    return (
        <header>
            <Logo />
            <UserAuth isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
            <CartHeaderBtn data={cart}/>
        </header>
    );
}

export default Header;