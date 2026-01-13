import React, { useState } from 'react';
import { USER_DATA } from '../data';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Formação', href: '#formacao' },
    { name: 'Projetos', href: '#projetos' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={closeMenu} className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {"Douglas Ribeiro Rodrigues"}
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-cyan-400 transition-colors uppercase tracking-wider">
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href="#contato" className="px-6 py-2.5 rounded-full bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-900/20">
              Contato
            </a>
          </li>
        </ul>

        <button 
          onClick={toggleMenu}
          className="md:hidden text-2xl text-slate-300 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </nav>

      <div className={`md:hidden absolute left-0 right-0 bg-slate-950 border-b border-slate-800 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[400px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                onClick={closeMenu}
                className="text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#contato" 
              onClick={closeMenu}
              className="mt-2 px-8 py-3 rounded-full bg-cyan-600 text-white font-bold inline-block"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};