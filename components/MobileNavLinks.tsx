const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#stacks", label: "Stacks" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function MobileNavLinks() {
  return (
    <ul className="py-2">
      {NAV_LINKS.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            className="block px-4 py-3 text-primary hover:bg-accent hover:text-accent-secondary transition-colors"
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
