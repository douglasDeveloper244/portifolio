
import React from 'react';
import { USER_DATA } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-32 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
            {USER_DATA.name.split(' ')[0]}
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} - Todos os direitos reservados.
          </p>
        </div>
        
        <div className="flex gap-6">
          {Object.entries(USER_DATA.socials).map(([key, value]) => (
            <a key={key} href={value} target="_blank" rel="noopener noreferrer" className="text-xl text-slate-500 hover:text-cyan-400 transition-colors">
              <i className={`fab fa-${key}`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
