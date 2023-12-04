import Navigation from "./navigation";

function Footer() {
  return (
    <footer className="h-32 px-24 py-12 border-t flex items-center justify-between">
      <Navigation />
      <p className="text-sm text-text-color-3">© 2023, Yumie Tsuzuki</p>
    </footer>
  );
}

export default Footer;
