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
      className={`${openSans.variable} font-sans min-h-screen bg-bg-color-1 text-text-color-1 py-6 flex flex-col`}
    >
      <Header />
      <main className="relative flex-1 px-4 sm:px-7 md:px-12 py-16 lg:p-24 overflow-y-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
