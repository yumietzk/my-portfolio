import Logo from "./logo";
import Navbar from "./navbar";
import ModeButton from "./mode-button";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <Navbar />
      <ModeButton />
    </header>
  );
}

export default Header;
