import Link from "next/link";
import { useRouter } from "next/router";
import { navigationData } from "./data/navigationData";

function Navigation({ type, handleClick }) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <ul
      className={`list-none flex ${
        type === "mobile"
          ? "flex-col space-y-7 ml-2"
          : "items-center space-x-8 text-sm"
      }`}
    >
      {navigationData.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className={`transition duration-300 hover:text-accent-color-1 ${
              type === "header" &&
              pathname === item.href &&
              "text-accent-color-1"
            }`}
            onClick={handleClick}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
