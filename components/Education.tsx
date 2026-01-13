
import React from 'react';
import { USER_DATA } from '../data';

export const Education: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center underline decoration-blue-500 decoration-4 underline-offset-8">Formação & Cursos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {USER_DATA.education.map((item, index) => (
          <div key={index} className="flex gap-6 p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
              <i className={item.icon}></i>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{item.period}</span>
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors leading-tight">
                {item.degree}
              </h3>
              <p className="text-slate-400 text-sm">
                {item.institution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
