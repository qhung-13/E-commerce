import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
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
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
