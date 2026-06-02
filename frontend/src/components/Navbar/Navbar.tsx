import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { useThemeStore } from "../../store/themeStore";
import { useCartStore } from "../../store/cartStore";
import "./Navbar.css";

const Navbar = () => {
  const { isDark, toggleTheme } = useThemeStore();
  const { count, toggleCart } = useCartStore();

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <span className="navbar-logo">
          Shop<span>VN</span>
        </span>

        <form className="navbar-search">
          <input type="text" placeholder="Tìm kiếm sản phẩm..." />
          <button type="submit">
            <IoSearch size={18} />
          </button>
        </form>

        <div className="navbar-actions">
          <div className="navbar-auth">
            <span>Hello, sign in</span>
            <div className="navbar-auth-btns">
              <button>Sign in</button>
              <span>|</span>
              <a href="">New customer?</a>
            </div>
          </div>

          <button className="navbar-icon-btn" onClick={toggleTheme}>
            {isDark ? <MdLightMode size={18} /> : <MdModeNight size={18} />}
          </button>

          <button className="navbar-cart-btn" onClick={toggleCart}>
            <FaCartPlus size={18} />
            <span className="navbar-cart-badge">{count}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
