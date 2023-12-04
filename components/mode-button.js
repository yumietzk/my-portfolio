import { useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";

function ModeButton() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      className="border border-border-color-1 px-3 py-2 rounded-full shadow-sm transition duration-300 hover:border-border-color-2"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? (
        <CiDark className="h-5 w-5" />
      ) : (
        <CiLight className="h-5 w-5 text-accent-color-1 transition duration-300 hover:text-accent-color-2" />
      )}
    </button>
  );
}

export default ModeButton;
