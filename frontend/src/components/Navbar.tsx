import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { useThemeStore } from "../store/themeStore";

const Navbar = () => {
  const { isDark, toggleTheme } = useThemeStore();
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center gap-6 px-6">
        {/* Logo */}
        <span className="font-bold text-xl text-white flex-shrink-0 tracking-tight">
          ShopVN
        </span>

        {/* Search */}
        <form className="flex flex-1 items-center overflow-hidden rounded-full border border-white/15 bg-white/5 transition focus-within:border-indigo-500">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder-white/30 outline-none"
          />
          <button className="flex items-center justify-center bg-indigo-500 px-4 py-2 text-white transition hover:bg-indigo-400">
            <IoSearch size={18} />
          </button>
        </form>

        {/* Actions */}
        <div className="flex flex-shrink-0 items-center gap-4">
          {/* Sign in */}
          <div className="flex flex-col leading-tight">
            <span className="text-xs text-white/50">Hello, sign in</span>
            <div className="flex items-center gap-1 text-sm">
              <button className="font-semibold text-white hover:text-indigo-400 transition">
                Sign in
              </button>
              <span className="text-white/30">|</span>
              <a
                href=""
                className="text-white/60 hover:text-white transition text-xs"
              >
                New customer?
              </a>
            </div>
          </div>

          {/* Toggle theme */}
          <button
            className="flex items-center justify-center rounded-full w-9 h-9 border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition"
            onClick={toggleTheme}
          >
            {isDark ? <MdLightMode size={18} /> : <MdModeNight size={18} />}
          </button>

          {/* Cart */}
          <button className="relative flex items-center justify-center rounded-full w-9 h-9 border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition">
            <FaCartPlus size={18} />
            {/* Badge số lượng — sau gắn Zustand */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 text-[10px] font-bold text-white">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
