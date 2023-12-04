import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function contact() {
  return (
    <div className="w-64 mx-auto flex flex-col space-y-6 text-text-color-2">
      <Link
        className="flex items-center mb-1.5 transition duration-300 hover:text-accent-color-1"
        href="https://www.linkedin.com/in/yumie-tsuzuki/"
        target="_blank"
      >
        <FaLinkedin className="h-7 w-7 mr-6" />
        Connect on LinkedIn
      </Link>

      <Link
        className="flex items-center transition duration-300 hover:text-accent-color-1"
        href="https://github.com/yumietzk"
        target="_blank"
      >
        <FaGithub className="h-7 w-7 mr-6" />
        Follow on GitHub
      </Link>

      <Link
        className="flex items-center transition duration-300 hover:text-accent-color-1"
        href="mailto:yumie.tsuzuki@gmail.com"
      >
        <IoMdMail className="h-7 w-7 mr-6" />
        yumie.tsuzuki@gmail.com
      </Link>
    </div>
  );
}

export default contact;
