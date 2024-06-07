import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import logo from "../assets/e-shop.png";

function NavComponent() {
  const { cartItems } = useContext(CartContext);
  const itemCount = cartItems.length;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="nav-link text-white">
          <img src={logo} alt="e-shop logo" />
        </Link>
        <ul className="d-flex flex-row ml-auto list-unstyled text-white">
          <li className="nav-item m-2">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item m-2 position-relative">
            <Link to="/cart" className="nav-link">
              🛒
              {itemCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {itemCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavComponent;
