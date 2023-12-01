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
      className={`${openSans.variable} font-sans w-full min-h-screen bg-bg-color-1 text-text-color-1 py-6 flex flex-col`}
    >
      <Header />
      <main className="flex-1 pt-20 px-24 flex items-center">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
