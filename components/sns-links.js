import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  {
    name: "Github",
    url: "https://github.com/yumietzk",
    icon: (
      <FaGithub className="h-6 w-6 text-text-color-2 transition duration-300 hover:text-accent-color-1" />
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yumie-tsuzuki/",
    icon: (
      <FaLinkedin className="h-6 w-6 text-text-color-2 transition duration-300 hover:text-accent-color-1" />
    ),
  },
];

function SnsLinks() {
  return (
    <ul className="list-none flex items-center space-x-6">
      {links.map((item) => (
        <li key={item.name}>
          <Link href={item.url} target="_blank">
            {item.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SnsLinks;
