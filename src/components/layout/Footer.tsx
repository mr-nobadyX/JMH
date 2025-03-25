
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link to={href} className="text-gray-500 hover:text-primary-600 transition-colors">
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">HealthHub</h3>
            <p className="text-gray-600 mb-6">
              Providing exceptional healthcare services with compassion and expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><FooterLink href="/">Home</FooterLink></li>
              <li><FooterLink href="/about">About Us</FooterLink></li>
              <li><FooterLink href="/services">Services</FooterLink></li>
              <li><FooterLink href="/doctors">Doctors</FooterLink></li>
              <li><FooterLink href="/appointments">Appointments</FooterLink></li>
              <li><FooterLink href="/contact">Contact Us</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><FooterLink href="/services">Emergency Care</FooterLink></li>
              <li><FooterLink href="/services">Cardiology</FooterLink></li>
              <li><FooterLink href="/services">Neurology</FooterLink></li>
              <li><FooterLink href="/services">Pediatrics</FooterLink></li>
              <li><FooterLink href="/services">General Checkups</FooterLink></li>
              <li><FooterLink href="/services">Specialized Surgery</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                <span className="text-gray-600">123 Healthcare Blvd, Medical City, CA 12345</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                <a href="tel:+1-800-555-0123" className="text-gray-600 hover:text-primary-600 transition-colors">
                  (800) 555-0123
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                <a href="mailto:info@healthhub.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                  info@healthhub.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} HealthHub. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy" className="text-gray-500 hover:text-primary-600 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-primary-600 text-sm transition-colors">
                Terms of Service
              </Link>
              <a href="#" className="text-gray-500 hover:text-primary-600 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
