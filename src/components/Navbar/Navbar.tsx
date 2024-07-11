import { useState } from "react";
import "./Navbar.css";
import { Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const { Search } = Input;

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="Logo" />
        <h1>FitGear Haven</h1>
      </div>
      <Search
        className="custom-search"
        style={{
          width: "250px",
          marginLeft: "380px",
        }}
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
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
          <a href="/">Home</a>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
