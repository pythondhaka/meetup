
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#register", label: "Register" },
    { href: "#about", label: "About" },
    { href: "#speakers", label: "Speakers" },
    { href: "#organizers", label: "Organizers" },
    { href: "#sponsors", label: "Sponsors" },
    { href: "#venue", label: "Venue" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Badge className="bg-python-yellow text-python-blue-dark hover:bg-python-yellow-dark">
              🐍 Python Bangladesh
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-python-blue transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button 
              size="sm" 
              className="bg-python-blue hover:bg-python-blue-dark text-white"
              onClick={() => scrollToSection("#register")}
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="text-lg font-semibold text-python-blue mb-4">
                    Python Bangladesh
                  </div>
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left py-2 px-4 text-gray-700 hover:text-python-blue hover:bg-python-blue/10 rounded transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button 
                    className="bg-python-blue hover:bg-python-blue-dark text-white mt-4"
                    onClick={() => scrollToSection("#register")}
                  >
                    Register Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
