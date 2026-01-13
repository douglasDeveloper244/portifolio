import React from 'react';
import { USER_DATA } from '../data';

export const Skills: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center underline decoration-cyan-500 decoration-4 underline-offset-8">
        Minhas Habilidades
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {USER_DATA.skills.map((skill, index) => (
          <div 
            key={index} 
            className="group relative p-6 bg-slate-900/40 border border-slate-800 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            // Aqui aplicamos a cor da borda dinamicamente no hover
            style={{ 
              '--skill-color': skill.color 
            } as React.CSSProperties}
          >
            {/* Efeito de Glow na borda usando a variável CSS definida acima */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[--skill-color] group-hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:shadow-[--skill-color]/20 transition-all duration-300 pointer-events-none"></div>

            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-4">
                {/* Ícone Dinâmico */}
                <div 
                  className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-slate-950"
                  style={{ color: skill.color }}
                >
                  {/* Renderiza o componente do ícone importado */}
                  <skill.Icon />
                </div>
                
                <h3 className="font-bold text-lg text-slate-100">{skill.name}</h3>
              </div>
              <span className="text-sm font-mono text-slate-400">{skill.level}%</span>
            </div>

            {/* Barra de Progresso */}
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden relative z-10">
              <div 
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${skill.level}%`,
                  backgroundColor: skill.color,
                  boxShadow: `0 0 10px ${skill.color}` // A barra também brilha
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};