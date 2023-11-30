import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.svg";

function Logo() {
  return (
    <div className="h-12 w-12">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
