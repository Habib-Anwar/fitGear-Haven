import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../../pages/Cart/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://i.ibb.co/3NJh5DJ/Screenshot-2024-07-12-203648-removebg-preview-1.png"
            alt="Logo"
          />
          <h1>FitGear Haven</h1>
        </div>

        <div className="menu-toggle" onClick={handleToggle}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6H21M3 12H21M3 18H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="products">Products</NavLink>
          </li>
          <li>
            <Link to="/product-management">Management</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="checkout">Checkout</Link>
          </li>
          <li>
            <Link to="cart" style={{ display: "flex", alignItems: "center" }}>
              <AiOutlineShoppingCart
                style={{ width: "28px", height: "25px" }}
              />
              {totalItems > 0 && (
                <span style={{ marginLeft: "8px", fontSize: "16px" }}>
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
