import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RegistrationForm } from "./RegistrationForm";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("register");
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const navItems = [
    { href: "#register", label: "Register" },
    { href: "#about", label: "About" },
    { href: "#speakers", label: "Speakers" },
    { href: "#organizers", label: "Organizers" },
    { href: "#sponsors", label: "Sponsors" },
    { href: "#venue", label: "Venue" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find active section
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navClass = isScrolled 
    ? "fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300"
    : "fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-none transition-all duration-300";

  const linkClass = isScrolled 
    ? "text-gray-800 hover:text-python-blue transition-all duration-300 font-medium"
    : "text-white hover:text-python-yellow transition-all duration-300 font-medium";

  return (
    <>
      <nav className={navClass}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Badge className={`${isScrolled ? 'bg-python-yellow text-python-blue-dark' : 'bg-python-yellow text-python-blue-dark'} hover:bg-python-yellow-dark`}>
                Python Bangladesh
              </Badge>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const sectionId = item.href.slice(1);
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`${linkClass} ${isActive ? 'text-python-yellow' : ''} relative transition-all duration-500`}
                    style={isActive ? {
                      textShadow: '0 0 10px #fbbf24, 0 0 20px #fbbf24, 0 0 30px #fbbf24',
                      filter: 'brightness(1.2)'
                    } : {}}
                  >
                    {item.label}
                  </button>
                );
              })}
              <Button 
                size="sm" 
                className="bg-python-yellow hover:bg-python-yellow-dark text-python-blue-dark"
                onClick={() => setIsRegistrationOpen(true)}
              >
                Register Now
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className={`h-5 w-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-white/95 backdrop-blur-md">
                  <div className="flex flex-col space-y-4 mt-8">
                    <div className="text-lg font-semibold text-python-blue mb-4">
                      Python Bangladesh
                    </div>
                    {navItems.map((item) => {
                      const sectionId = item.href.slice(1);
                      const isActive = activeSection === sectionId;
                      return (
                        <button
                          key={item.href}
                          onClick={() => scrollToSection(item.href)}
                          className={`text-left py-2 px-4 text-gray-700 hover:text-python-blue hover:bg-python-blue/10 rounded transition-all duration-500 ${isActive ? 'text-python-yellow bg-python-yellow/20' : ''}`}
                          style={isActive ? {
                            textShadow: '0 0 8px #fbbf24, 0 0 16px #fbbf24',
                            filter: 'brightness(1.2)'
                          } : {}}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                    <Button 
                      className="bg-python-yellow hover:bg-python-yellow-dark text-python-blue-dark mt-4"
                      onClick={() => {
                        setIsRegistrationOpen(true);
                        setIsOpen(false);
                      }}
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

      {/* Registration Modal */}
      <RegistrationForm 
        open={isRegistrationOpen} 
        onOpenChange={setIsRegistrationOpen} 
      />
    </>
  );
};
