import Logo from "./logo";
import Navbar from "./navbar";
import ModeButton from "./mode-button";

function Header() {
  return (
    <header className="flex items-center justify-between px-24">
      <Logo />
      <Navbar />
      {/* <ModeButton /> */}
      <button></button>
    </header>
  );
}

export default Header;
