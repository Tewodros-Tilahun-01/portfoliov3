import MobileNavToggle from "./MobileNavToggle";

export default function MobileNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 md:hidden  bg-primary bg-gradient-to-br from-[rgba(var(--card-gradient),0.04)] to-[rgba(var(--card-gradient),0.0)]">
      <div className="mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#about" className="font-semibold text-primary h-7">
          <p className="text-3xl relative bottom-1 font-extrabold font-heading  bg-gradient-to-r from-[#78cc6d] to-[#16481d] bg-clip-text text-transparent">
            Teddy
          </p>
        </a>

        <MobileNavToggle />
      </div>
    </nav>
  );
}
