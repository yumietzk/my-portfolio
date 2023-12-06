import { CiCircleRemove } from "react-icons/ci";
import Navigation from "./navigation";

function MobileNav({ classes, setIsMobileMenuOpen }) {
  function handleModalClose() {
    setIsMobileMenuOpen(false);
  }

  return (
    <div
      className={`${classes} fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm py-9 px-4`}
      onClick={handleModalClose}
    >
      <nav
        className="absollute z-30 w-10/12 h-max mx-auto bg-bg-color-1 px-7 py-9 rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-text-color-2 text-sm mb-6 flex justify-between items-center">
          <p>Navigation</p>
          <button onClick={handleModalClose}>
            <CiCircleRemove className="h-7 w-7 text-text-color-3 transition duration-300 hover:text-text-color-2" />
          </button>
        </div>
        <Navigation type="mobile" handleClick={handleModalClose} />
      </nav>
    </div>
  );
}

export default MobileNav;
