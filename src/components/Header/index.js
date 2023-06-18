// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  console.log('header')
  return (
    <nav className="nav-bar-container">
      <div className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="header-website-logo"
          alt="website logo"
        />
        <ul className="nav-bar-items">
          <Link className="link-item" to="/">
            <li>Home</li>
          </Link>
          <Link to="/products" className="link-item">
            <li>Products</li>
          </Link>
          <Link to="/Cart" className="link-item">
            <li>Cart</li>
          </Link>
          <button className="logout-button" type="button">
            {' '}
            Logout{' '}
          </button>
          <button type="button" className="small-device-logout-button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="small-device-logout-image"
            />
          </button>
        </ul>
      </div>

      <ul className="nav-items-buttons-container">
        <button type="button" className="nav-buttons">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            className="nav-home"
            alt="nav home"
          />
        </button>
        <button type="button" className="nav-buttons">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            className="nav-home"
            alt="nav products"
          />
        </button>
        <button type="button" className="nav-buttons">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            className="nav-home"
            alt="nav cart"
          />
        </button>
      </ul>
    </nav>
  )
}

export default Header
