import React from 'react';
import { USER_DATA } from '../data';

export const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Jornada Profissional</h2>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
        {USER_DATA.experience.map((exp, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-950 text-cyan-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <i className="fas fa-briefcase text-xs"></i>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/50 transition-all">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-100">{exp.role}</div>
                <time className="font-medium text-cyan-500 text-xs uppercase">{exp.period}</time>
              </div>
              <div className="text-cyan-400 text-sm font-medium mb-2">{exp.company}</div>
              <div className="text-slate-400 text-sm">{exp.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};