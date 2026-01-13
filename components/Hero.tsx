
import React from 'react';
import { USER_DATA } from '../data';

export const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center py-20 space-y-6">
      <div className="inline-block px-4 py-1.5 mb-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
        Transformo problemas em soluções através do código
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
        Olá, eu sou o <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">{USER_DATA.name}</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
        {USER_DATA.role}
      </p>
      <div className="flex gap-4 pt-4">
        <a href="#projetos" className="px-8 py-3 rounded-xl bg-cyan-600 text-white font-bold hover:bg-cyan-500 shadow-lg shadow-cyan-900/20 transition-all">
          Ver Projetos
        </a>
        <a href={USER_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-xl border border-slate-700 font-bold hover:bg-slate-800 transition-all">
          LinkedIn
        </a>
      </div>
      
      <div className="pt-12 flex gap-8">
        {Object.entries(USER_DATA.socials).map(([key, value]) => (
          <a key={key} href={value} target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-500 hover:text-cyan-400 transition-colors">
            <i className={`fab fa-${key}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};
