import { NavLink } from "react-router-dom";
import cartEmpty from './assets/cart_empty.svg';
import cartFull from './assets/cart_full.svg';

export default function Navbar(props) {
  const cartCount = props.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        Cavelius Art
      </NavLink>
      <div className="navbar-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink title="HOME" exact activeClassName="active" to="/">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink title="ABOUT ME" exact activeClassName="active" to="/about">
              ABOUT ME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink title="GALLERY" activeClassName="active" to="/products">
              GALLERY
            </NavLink>
          </li>
        </ul>
        <NavLink to="/cart" className="nav-item">
          {cartCount === 0 && <img className="nav-cart" aria-hidden="true" src={cartEmpty} alt="cart icon" />}
          {cartCount !== 0 && <>
            <img className="nav-cart" aria-hidden="true" src={cartFull} alt="cart icon" />
            <span className="nav-cart-count">{cartCount}</span>
          </>}
        </NavLink>
      </div>
    </nav>
  );
}
