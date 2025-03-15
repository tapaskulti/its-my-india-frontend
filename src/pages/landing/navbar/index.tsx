import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For icons
import BuyNow from "../../../components/buy-now";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-slate-100 shadow-sm z-50">
      <div className="mx-auto flex max-w-6xl justify-between py-5 px-4 lg:px-0">
        {/* Logo */}
        <Link to="/its-my-india">
          <h2 className="text-2xl font-medium text-slate-600">ItsMyIndia</h2>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-6 text-sm text-gray-900">
          <li>
            <Link to="/" className="hover:text-[#7e9452]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-author" className="hover:text-[#7e9452]">
              About Author
            </Link>
          </li>
          <li>
            <Link to="/the-project" className="hover:text-[#7e9452]">
              The Project
            </Link>
          </li>
          <li>
            <Link to="/the-book" className="hover:text-[#7e9452]">
              The Book
            </Link>
          </li>
          <li>
            <Link to="/resources-articles" className="hover:text-[#7e9452]">
              Resources & Articles
            </Link>
          </li>
          <li>
            <Link to="/review" className="hover:text-[#7e9452]">
              Review
            </Link>
          </li>
          <li>
            <Link to="/contact-media" className="hover:text-[#7e9452]">
              Contacts & Media
            </Link>
          </li>
          <li>
            <Toaster />
            <BuyNow
              TriggerComponent={
                <button className="rounded-lg bg-[#afc584] px-2 py-2 text-sm text-white hover:bg-[#b8ce8d]">
                  Buy Now
                </button>
              }
            />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-100 shadow-md py-4">
          <ul className="flex flex-col items-center space-y-4 text-gray-900">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-author" onClick={() => setIsOpen(false)}>
                About Author
              </Link>
            </li>
            <li>
              <Link to="/the-project" onClick={() => setIsOpen(false)}>
                The Project
              </Link>
            </li>
            <li>
              <Link to="/the-book" onClick={() => setIsOpen(false)}>
                The Book
              </Link>
            </li>
            <li>
              <Link to="/resources-articles" onClick={() => setIsOpen(false)}>
                Resources & Articles
              </Link>
            </li>
            <li>
              <Link to="/review" onClick={() => setIsOpen(false)}>
                Review
              </Link>
            </li>
            <li>
              <Link to="/contact-media" onClick={() => setIsOpen(false)}>
                Contacts & Media
              </Link>
            </li>
            <li>
              <BuyNow
                TriggerComponent={
                  <button
                    className="rounded-lg bg-[#afc584] px-3 py-2 text-sm text-white hover:bg-[#b8ce8d]"
                    onClick={() => setIsOpen(false)}
                  >
                    Buy Now
                  </button>
                }
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
