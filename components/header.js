import Logo from "./logo";
import Navbar from "./navbar";
import ModeButton from "./mode-button";

function Header() {
  return (
    <header className="h-12 flex items-center justify-between px-4 sm:px-7 md:px-12 lg:px-24">
      <Logo />
      <Navbar />
      {/* ⭐️ will implement later */}
      {/* <ModeButton /> */}
      <button></button>
    </header>
  );
}

export default Header;
