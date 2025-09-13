import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import armarketLogo from "@/assets/armarket-color.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={armarketLogo}
              className="w-auto h-8"
              alt="Logo AR Market"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-[var(--transition-fast)] font-medium"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-[var(--transition-fast)] font-medium"
              >
                SOBRE
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-[var(--transition-fast)] font-medium"
              >
                EXPOSITORES
              </button>

              <Button
                onClick={() => scrollToSection("contact")}
                className="brand-button"
              >
                FALE CONOSCO
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg mt-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-[var(--transition-fast)] w-full text-left"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-[var(--transition-fast)] w-full text-left"
              >
                EXPOSITORES
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-[var(--transition-fast)] w-full text-left"
              >
                SOBRE
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="brand-button w-full mt-3"
              >
                FALE CONOSCO
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
