import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { useThemeStore } from "./store/themeStore";

function App() {
  const { isDark } = useThemeStore();

  useEffect(() => {
    console.log("isDark", isDark);
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Sau thêm ProductDetail và Orders vào đây */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
