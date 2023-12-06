import { useEffect, useState } from "react";
import Navigation from "./navigation";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  let width;
  if (typeof window !== "undefined") {
    width = window.innerWidth;
  }

  const [windowWidth, setWindowWidth] = useState(width);

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  function updateDimension() {
    setWindowWidth(window.innerWidth);
  }

  return windowWidth < 768 ? (
    <button
      className="border border-border-color-1 bg-bg-color-1 px-6 py-2 rounded-full shadow-sm flex items-center ml-auto md:ml-0"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      Menu
      {isMobileMenuOpen ? (
        <IoIosArrowUp className="h-5 w-5 ml-2" />
      ) : (
        <IoIosArrowDown className="h-5 w-5 ml-2" />
      )}
    </button>
  ) : (
    <nav className="border border-border-color-1 bg-bg-color-1 px-6 py-2 rounded-full shadow-sm ml-auto md:ml-0">
      <Navigation type="header" />
    </nav>
  );
}

export default Navbar;
