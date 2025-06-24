import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === "/" && (location === "/" || location === "/company")) {
      return true;
    }
    return location === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="text-2xl font-bold text-primary cursor-pointer">
                COMPANY
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/company">
                <a className={`nav-link px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive("/company") ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
                }`}>
                  회사소개
                </a>
              </Link>
              <Link href="/directions">
                <a className={`nav-link px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive("/directions") ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
                }`}>
                  오시는 길
                </a>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-primary"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link href="/company">
              <a 
                className={`block px-3 py-2 transition-colors duration-200 ${
                  isActive("/company") ? "text-primary bg-gray-50" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                회사소개
              </a>
            </Link>
            <Link href="/directions">
              <a 
                className={`block px-3 py-2 transition-colors duration-200 ${
                  isActive("/directions") ? "text-primary bg-gray-50" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                오시는 길
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
