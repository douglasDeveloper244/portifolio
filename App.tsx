import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
// import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { MatrixBackground } from './components/MatrixBackground';
import { USER_DATA } from './data';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Olá, conheci seu portfólio e queria trocar uma ideia sobre um projeto`);
    window.open(`https://wa.me/${USER_DATA.whatsapp}?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    window.location.href = `mailto:${USER_DATA.email}?subject=Contato via Portfolio&body=Olá Douglas,`;
  };

  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-white bg-slate-950">
      <MatrixBackground />

      <Header isScrolled={isScrolled} />
      
      <main className="container mx-auto px-6 pt-24 space-y-32 relative z-10">
        <section id="home" className="scroll-mt-32">
          <Hero />
        </section>

        <section id="sobre" className="scroll-mt-32">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold border-l-4 border-cyan-500 pl-4 mb-12">Sobre Mim</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">
                  <img 
                    src={USER_DATA.avatar} 
                    alt={USER_DATA.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-500"></div>
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-500"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-500"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-500"></div>
                </div>
              </div>

              <div className="space-y-6 flex-1">
                <p className="text-lg text-slate-400 leading-relaxed">
                  {USER_DATA.bio}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-5 py-3 bg-slate-900/50 border border-slate-800 rounded-2xl text-slate-200 flex items-center gap-3 shadow-lg shadow-black/20">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-lg">
                      <i className="fas fa-location-dot"></i>
                    </div>
                    <div>
                      <div className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest">Localização</div>
                      <div className="text-sm font-medium">{USER_DATA.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-32">
          <Skills />
        </section>

        <section id="formacao" className="scroll-mt-32">
          <Education />
        </section>

        <section id="experiencia" className="scroll-mt-32">
          <Experience />
        </section>

        {/* <section id="projetos" className="scroll-mt-32">
          <Projects />
        </section> */}

        <section id="contato" className="scroll-mt-32">
          <div className="max-w-3xl mx-auto bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Fale Comigo</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
              Estou sempre aberto a novas oportunidades e colaborações. Escolha o canal de sua preferência e vamos transformar ideias em realidade.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <button 
                onClick={handleWhatsApp}
                className="flex items-center gap-4 p-6 bg-green-600/10 border border-green-600/30 rounded-2xl text-green-400 hover:bg-green-600/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl shrink-0">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">WhatsApp</div>
                  <div className="text-sm opacity-70">Conversar agora</div>
                </div>
              </button>

              <button 
                onClick={handleEmail}
                className="flex items-center gap-4 p-6 bg-cyan-600/10 border border-cyan-600/30 rounded-2xl text-cyan-400 hover:bg-cyan-600/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-cyan-600 flex items-center justify-center text-white text-2xl shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">E-mail</div>
                  <div className="text-sm opacity-70 truncate max-w-[150px]">{USER_DATA.email}</div>
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
export default App;