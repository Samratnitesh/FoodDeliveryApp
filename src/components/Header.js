import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const [loginbtn, setLoginbtn] = useState("Login");
    const cartItems = useSelector((state) => state.cart.items);

    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(cartItems.length); // For example, setting it to the count of items in the cart
    }, [cartItems]);

    return <div className="sticky top-0 flex justify-between shadow-md rounded-lg bg-white w-full z-50 px-2">
        <div className="w-[80px]">
            <img src={LOGO_URL} alt="company-logo" className="w-full h-full object-contain" />
        </div>
        <div className="flex items-center space-x-6 mx-2">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/home" className="hover:text-blue-500">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="hover:text-blue-500">About Us</Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-blue-500">Contact Us</Link>
                </li>
                <li>
                <Link to="/cart" className="hover:text-blue-500">Cart{" "}{value}</Link>
                </li>
            </ul>
            <button
                className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-700"
                onClick={() => {
                    setLoginbtn((prev) => (prev === "Login" ? "Logout" : "Login"));
                }}
            >
                {loginbtn}
            </button>
        </div>

    </div>
};

export default Header;