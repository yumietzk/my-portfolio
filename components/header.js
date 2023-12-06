import Logo from "./logo";
import Navbar from "./navbar";
// import ModeButton from "./mode-button";

function Header({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <header className="h-12 w-full flex items-center justify-between px-4 sm:px-7 md:px-12 lg:px-24 fixed z-10">
      <Logo />
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      {/* ⭐️ will implement later */}
      {/* <ModeButton /> */}
      <button></button>
    </header>
  );
}

export default Header;
