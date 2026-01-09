import MobileNavToggle from "./MobileNavToggle";

export default function MobileNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 md:hidden bg-black">
      <div className="mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#about" className="text-lg font-semibold text-primary">
          Teddy
        </a>

        <MobileNavToggle />
      </div>
    </nav>
  );
}
