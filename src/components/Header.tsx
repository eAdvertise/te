import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Services",
    href: "#services"
  }, {
    name: "Projects",
    href: "#new-project"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-card backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-28">
          <a href="#home" className="flex items-center gap-2">
            <img alt="Mediterranean Estates Logo" className="h-24 w-auto" src="/lovable-uploads/e077da15-530d-44ca-826c-f18de54bb951.png" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-foreground/80 hover:text-primary transition-colors font-medium">
                {link.name}
              </a>)}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+34123456789" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+357 97529749 </span>
            </a>
            <Button variant="default" asChild>
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.name} href={link.href} className="text-foreground/80 hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>)}
              <Button variant="default" className="w-full mt-2" asChild>
                <a href="#contact">Get a Quote</a>
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;