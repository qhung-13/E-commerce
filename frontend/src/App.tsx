import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useThemeStore } from "./store/themeStore";

function App() {
  const { isDark } = useThemeStore();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
