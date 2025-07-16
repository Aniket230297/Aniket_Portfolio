import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-black text-white fixed top-0 w-full z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-yellow-400">Aniket Kule</h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 font-medium">
                    <a href="#about" className="hover:text-yellow-400 transition duration-300">About</a>
                    <a href="#experience" className="hover:text-yellow-400 transition duration-300">Experience</a>
                    <a href="#projects" className="hover:text-yellow-400 transition duration-300">Projects</a>
                    <a href="#skills" className="hover:text-yellow-400 transition duration-300">Skills</a>
                    <a href="#contact" className="hover:text-yellow-400 transition duration-300">Contact</a>
                </div>

                {/* Mobile Menu Icon */}
                <button onClick={toggleMenu} className="md:hidden text-white">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-black px-6 pb-4 space-y-3 font-medium">
                    <a href="#about" className="block hover:text-yellow-400 transition duration-300">About</a>
                    <a href="#experience" className="hover:text-yellow-400 transition duration-300">Experience</a>
                    <a href="#projects" className="block hover:text-yellow-400 transition duration-300">Projects</a>
                    <a href="#skills" className="block hover:text-yellow-400 transition duration-300">Skills</a>
                    <a href="#contact" className="block hover:text-yellow-400 transition duration-300">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
