import { Open_Sans } from "@next/font/google";
import Header from "./header";
import Footer from "./footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-openSans",
});

function Layout({ children }) {
  return (
    <div
      className={`${openSans.variable} font-sans w-full min-h-screen bg-bg-color-1 px-20 py-6 flex flex-col`}
    >
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
