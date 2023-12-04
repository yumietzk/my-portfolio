import Link from "next/link";
import { useRouter } from "next/router";
import { navigationData } from "./data/navigationData";

function Navigation({ type }) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <ul className="list-none flex items-center space-x-8 text-sm">
      {navigationData.map((item) => (
        <li
          key={item.name}
          className={`transition duration-300 hover:text-accent-color-1 ${
            type === "header" && pathname === item.href && "text-accent-color-1"
          }`}
        >
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
