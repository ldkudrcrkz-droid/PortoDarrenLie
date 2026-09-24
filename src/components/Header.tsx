import { ArrowUpRight, Menu, X } from "lucide-react";

type HeaderProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
};

const NAV_ITEMS = [
  { id: "about", label: "01 // ABOUT" },
  { id: "skills", label: "02 // SKILLS" },
  { id: "projects", label: "03 // PROJECTS" },
  { id: "experience", label: "04 // EXPERIENCE" },
];

function Header({ menuOpen, setMenuOpen, scrollTo }: HeaderProps) {
  return (
    <header className="topbar">
      <button className="brand" onClick={() => scrollTo("home")}>
        Lie <span>Darren</span> Keefe Utomo
      </button>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <button key={item.id} onClick={() => scrollTo(item.id)}>
            {item.label}
          </button>
        ))}

        <button className="nav-call" onClick={() => scrollTo("contact")}>
          CONTACT
          <ArrowUpRight size={15} />
        </button>
      </nav>

      <button
        className="mobile"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export default Header;
