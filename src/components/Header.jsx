import './Header.css'
import {NavLink } from 'react-router'
import logowhite from '../../public/images/logo-white.png'
import searchIcon from '../../public/images/icons/search-icon.png'
import cartIcon from '../../public/images/icons/cart-icon.png'
export function Header({cart}) {

  let totalCartItems = 0;

  cart.forEach((cartItem) => {
    totalCartItems += cartItem.quantity 
  });
  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src={logowhite} />
            <img className="mobile-logo" src={logowhite} />
          </NavLink>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src={searchIcon} />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src={cartIcon} />
            <div className="cart-quantity">{totalCartItems}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
