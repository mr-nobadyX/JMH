
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAppointmentCall } from "@/hooks/use-appointment-call";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Doctors", href: "/doctors" },
  { name: "Services", href: "/services" },
  { name: "Facilities", href: "/facilities" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { phoneNumber, handleAppointmentClick } = useAppointmentCall();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 bg-white shadow-md",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-primary-700 text-2xl font-bold">HealthHub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-gray-700 hover:text-primary-600 font-medium transition-colors",
                location.pathname === link.href && "text-primary-600 font-semibold"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            onClick={handleAppointmentClick}
            asChild
          >
            <a 
              href={`tel:${phoneNumber}`} 
              className="flex items-center"
            >
              <Phone className="mr-2 h-4 w-4" />
              Book Appointment
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button 
                className="text-gray-700 p-2"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="pt-16 w-full sm:max-w-sm">
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "text-gray-700 hover:text-primary-600 font-medium text-lg px-2 py-1",
                      location.pathname === link.href && "text-primary-600 font-semibold"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button 
                  onClick={() => {
                    setIsOpen(false);
                    handleAppointmentClick();
                  }}
                  asChild
                  className="w-full justify-center mt-4"
                >
                  <a 
                    href={`tel:${phoneNumber}`} 
                    className="flex items-center"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Book Appointment
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
