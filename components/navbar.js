import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/projects",
    name: "Projects",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

function Navbar() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className="border border-border-color px-6 py-2 rounded-full shadow-sm">
      <ul className="list-none flex items-center space-x-8 text-sm">
        {navigation.map((item) => (
          <li
            key={item.name}
            className={`transition duration-300 hover:text-accent-color-1 ${
              pathname === item.href && "text-accent-color-1"
            }`}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
