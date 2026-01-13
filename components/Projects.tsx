
import React from 'react';
import { USER_DATA } from '../data';

export const Projects: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Projetos em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {USER_DATA.projects.map((project, index) => (
          <div key={index} className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 group hover:-translate-y-2 transition-all">
            <div className="h-52 overflow-hidden relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-cyan-400 border border-slate-700 uppercase">{tag}</span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                {project.description}
              </p>
              <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors">
                Ver detalhes <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
