import Navigation from "./navigation";

function Footer() {
  return (
    <footer className="h-32 px-4 sm:px-7 md:px-12 lg:px-24 py-7 sm:py-12 border-t flex flex-col sm:flex-row items-center sm:justify-between">
      <Navigation />
      <p className="text-sm text-text-color-3 mt-5 sm:mt-0">
        © 2023, Yumie Tsuzuki
      </p>
    </footer>
  );
}

export default Footer;
