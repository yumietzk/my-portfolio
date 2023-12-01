import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  {
    name: "Github",
    url: "https://github.com/yumietzk",
    icon: <FaGithub className="h-6 w-6 text-text-color-2" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yumie-tsuzuki/",
    icon: <FaLinkedin className="h-6 w-6 text-text-color-2" />,
  },
];

function SnsLinks() {
  return (
    <div className="mt-5">
      <ul className="list-none flex items-center space-x-5">
        {links.map((item) => (
          <li key={item.name}>
            <Link href={item.url} target="_blank">
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SnsLinks;
