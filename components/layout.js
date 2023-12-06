import { useState } from "react";
import { Open_Sans } from "@next/font/google";
import Header from "./header";
import Footer from "./footer";
import MobileNav from "./mobile-nav";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-openSans",
});

const className = `${openSans.variable} font-sans min-h-screen text-text-color-1`;

function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className={`${className} bg-bg-color-1 py-6 flex flex-col relative`}>
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <main className="flex-1 relative px-4 sm:px-7 md:px-12 lg:px-24 pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-y-auto">
          {children}
        </main>
        <Footer />
      </div>

      {isMobileMenuOpen && (
        <MobileNav
          classes={className}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
    </>
  );
}

export default Layout;
