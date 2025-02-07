
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  User,
  ShoppingCart,
  MessageCircle,
  Bell,
  LogOut,
  ClipboardList,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-jeevanti-50/80 backdrop-blur-md border-b border-jeevanti-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-2xl font-semibold text-jeevanti-900 hover:text-jeevanti-700 transition-colors"
            >
              Jeevanti Care
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Account Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <ClipboardList className="mr-2 h-4 w-4" />
                  View Orders
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart Icon */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={handleCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>

            {/* Message Icon */}
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>

            {/* Book a Consult Button */}
            <Button
              className="bg-jeevanti-600 hover:bg-jeevanti-700 text-white"
            >
              Book a Consult
            </Button>

            {/* Login/Register Button */}
            <Button variant="outline">Login / Register</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Button className="w-full justify-start" variant="ghost">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button 
              className="w-full justify-start" 
              variant="ghost"
              onClick={handleCartClick}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart
            </Button>
            <Button className="w-full justify-start" variant="ghost">
              <MessageCircle className="mr-2 h-4 w-4" />
              Messages
            </Button>
            <Button
              className="w-full bg-jeevanti-600 hover:bg-jeevanti-700 text-white"
            >
              Book a Consult
            </Button>
            <Button className="w-full" variant="outline">
              Login / Register
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
